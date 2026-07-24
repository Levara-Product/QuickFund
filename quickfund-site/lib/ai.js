// Server-side model call. Supports two providers; the key never reaches the browser.
//
//   OpenRouter (OpenAI-compatible)  -> set OPENROUTER_API_KEY  (keys start "sk-or-")
//   Anthropic direct                -> set ANTHROPIC_API_KEY
//
// Provider is auto-detected, and an OpenRouter key pasted into ANTHROPIC_API_KEY
// is detected too (a common mix-up that otherwise fails with a bare 401).
// Force one explicitly with AI_PROVIDER=openrouter | anthropic.

const OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions";
const ANTHROPIC_URL = "https://api.anthropic.com/v1/messages";

const MOCKS = {
  assess:
    "GOOD: Established revenue base and a clear use of funds.\n\nWATCH: Existing facilities will affect serviceability.\n\nVERDICT: [AI_MOCK] Realistic financing path exists across bank and non-bank options.\n\nNEXT: Prepare 6 months of bank statements and latest P&L.\n\nQuickFund can explore specific options for your situation. No upfront cost for financing introductions. WhatsApp +65 8057 6702 to continue this conversation.",
  scan:
    "RED FLAG: Upfront fee payable before disbursement.\n\nAMBER: PG scope is broader than the facility.\n\nOK: Processing fee is clearly disclosed.\n\nMISSING: No stated prepayment terms.\n\nBOTTOM LINE: [AI_MOCK] Negotiate the flagged clauses before signing. QuickFund can review this in detail with you. WhatsApp +65 8057 6702.",
  rate:
    "GOOD: Within typical range for this product type.\n\nWATCH: Flat-rate quotes roughly double the effective rate.\n\nVERDICT: [AI_MOCK] Not clearly overpaying for the product type.\n\nNEXT: Confirm whether the quote is flat or reducing.\n\nQuickFund can explore alternatives for your situation. WhatsApp +65 8057 6702.",
};

export function aiConfig() {
  const orKey = process.env.OPENROUTER_API_KEY;
  const anthKey = process.env.ANTHROPIC_API_KEY;
  const anthLooksLikeOpenRouter = Boolean(anthKey && anthKey.startsWith("sk-or-"));
  const provider =
    process.env.AI_PROVIDER ||
    (orKey || anthLooksLikeOpenRouter ? "openrouter" : "anthropic");
  const key = provider === "openrouter" ? orKey || anthKey : anthKey;
  const model =
    provider === "openrouter"
      ? process.env.OPENROUTER_MODEL || "anthropic/claude-sonnet-4.6"
      : process.env.CLAUDE_MODEL || "claude-sonnet-5";
  return { provider, key, model, keyMisplaced: anthLooksLikeOpenRouter && !orKey };
}

async function callOpenRouter({ key, model, system, userContent }) {
  const res = await fetch(OPENROUTER_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${key}`,
      ...(process.env.SITE_URL ? { "HTTP-Referer": process.env.SITE_URL } : {}),
      "X-Title": "QuickFund",
    },
    body: JSON.stringify({
      model,
      max_tokens: 1000,
      messages: [
        { role: "system", content: system },
        { role: "user", content: userContent },
      ],
    }),
  });
  const body = await res.text();
  if (!res.ok) throw new Error(`OpenRouter ${res.status}: ${body.slice(0, 500)}`);
  let data;
  try { data = JSON.parse(body); } catch { throw new Error("OpenRouter returned a non-JSON response"); }
  if (data.error) throw new Error(`OpenRouter error: ${data.error.message || JSON.stringify(data.error)}`);
  const text = data.choices?.[0]?.message?.content;
  if (!text) throw new Error("Empty AI response from OpenRouter");
  return text;
}

async function callAnthropic({ key, model, system, userContent }) {
  const res = await fetch(ANTHROPIC_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": key,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model,
      max_tokens: 1000,
      system,
      messages: [{ role: "user", content: userContent }],
    }),
  });
  if (!res.ok) throw new Error(`Anthropic API ${res.status}: ${(await res.text()).slice(0, 500)}`);
  const data = await res.json();
  const text = data.content?.find((b) => b.type === "text")?.text;
  if (!text) throw new Error("Empty AI response from Anthropic");
  return text;
}

export async function callClaude({ system, userContent, tool }) {
  if (process.env.AI_MOCK) return MOCKS[tool];
  const { provider, key, model } = aiConfig();
  if (!key)
    throw new Error(
      provider === "openrouter"
        ? "OPENROUTER_API_KEY is not set"
        : "ANTHROPIC_API_KEY is not set"
    );
  return provider === "openrouter"
    ? callOpenRouter({ key, model, system, userContent })
    : callAnthropic({ key, model, system, userContent });
}
