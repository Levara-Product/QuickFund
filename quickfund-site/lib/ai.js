// Server-side AI call via OpenRouter. The API key never reaches the browser.
const MOCKS = {
  assess:
    "GOOD: Established revenue base and a clear use of funds.\n\nWATCH: Existing facilities will affect serviceability.\n\nVERDICT: [AI_MOCK] Realistic financing path exists across bank and non-bank options.\n\nNEXT: Prepare 6 months of bank statements and latest P&L.\n\nQuickFund can explore specific options for your situation. No upfront cost for financing introductions. WhatsApp +65 8057 6702 to continue this conversation.",
  scan:
    "RED FLAG: Upfront fee payable before disbursement.\n\nAMBER: PG scope is broader than the facility.\n\nOK: Processing fee is clearly disclosed.\n\nMISSING: No stated prepayment terms.\n\nBOTTOM LINE: [AI_MOCK] Negotiate the flagged clauses before signing. QuickFund can review this in detail with you. WhatsApp +65 8057 6702.",
  rate:
    "GOOD: Within typical range for this product type.\n\nWATCH: Flat-rate quotes roughly double the effective rate.\n\nVERDICT: [AI_MOCK] Not clearly overpaying for the product type.\n\nNEXT: Confirm whether the quote is flat or reducing.\n\nQuickFund can explore alternatives for your situation. WhatsApp +65 8057 6702.",
};

export async function callAI({ system, userContent, tool }) {
  if (process.env.AI_MOCK) return MOCKS[tool];
  const key = process.env.OPENROUTER_API_KEY;
  if (!key) throw new Error("OPENROUTER_API_KEY is not set");
  const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${key}`,
      "HTTP-Referer": process.env.SITE_URL || "https://quickfund.sg",
      "X-Title": "QuickFund",
    },
    body: JSON.stringify({
      model: process.env.OPENROUTER_MODEL || "google/gemini-2.5-pro",
      max_tokens: 1000,
      messages: [
        { role: "system", content: system },
        { role: "user", content: userContent },
      ],
    }),
  });
  if (!res.ok) throw new Error(`OpenRouter API ${res.status}: ${await res.text()}`);
  const data = await res.json();
  const text = data.choices?.[0]?.message?.content;
  if (!text) throw new Error("empty AI response");
  return text;
}
