import crypto from "crypto";
import { rateLimit } from "@/lib/rateLimit";
import { aiConfig } from "@/lib/ai";

export const runtime = "nodejs";
export const maxDuration = 60;

// Diagnostic endpoint. Answers "why did the AI call fail?" without guessing:
// reports which env vars are present (never their values), which provider is
// in use, and makes a tiny live call returning the REAL upstream status,
// error body, and a plain-English diagnosis. On OpenRouter it also lists the
// Claude model slugs the account can actually use.
function authorized(req) {
  const token = process.env.ADMIN_TOKEN;
  if (!token) return null;
  const header = (req.headers.get("authorization") || "").replace(/^Bearer\s+/i, "");
  const a = Buffer.from(header);
  const b = Buffer.from(token);
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}

async function openRouterClaudeSlugs(key) {
  try {
    const r = await fetch("https://openrouter.ai/api/v1/models", {
      headers: { Authorization: `Bearer ${key}` },
      signal: AbortSignal.timeout(20000),
    });
    if (!r.ok) return null;
    const d = await r.json();
    return (d.data || [])
      .map((m) => m.id)
      .filter((id) => typeof id === "string" && id.includes("claude"))
      .slice(0, 25);
  } catch {
    return null;
  }
}

export async function GET(req) {
  const ip = (req.headers.get("x-forwarded-for") || "").split(",")[0].trim() || "unknown";
  if (!rateLimit("health:" + ip, 100).allowed)
    return Response.json({ error: "Too many requests." }, { status: 429 });

  const auth = authorized(req);
  if (auth === null)
    return Response.json({ error: "Admin endpoints are disabled. Set ADMIN_TOKEN to enable." }, { status: 404 });
  if (!auth) return Response.json({ error: "Unauthorized." }, { status: 401 });

  const { provider, key, model, keyMisplaced } = aiConfig();
  const out = {
    provider,
    model,
    env: {
      OPENROUTER_API_KEY_set: Boolean(process.env.OPENROUTER_API_KEY),
      ANTHROPIC_API_KEY_set: Boolean(process.env.ANTHROPIC_API_KEY),
      AI_PROVIDER: process.env.AI_PROVIDER || "(auto-detected)",
      AI_MOCK_on: Boolean(process.env.AI_MOCK),
      LEAD_WEBHOOK_URL_set: Boolean(process.env.LEAD_WEBHOOK_URL),
    },
  };
  if (keyMisplaced)
    out.warning =
      "An OpenRouter key (sk-or-...) is set in ANTHROPIC_API_KEY. It is being used against OpenRouter, but set OPENROUTER_API_KEY instead to make this explicit.";

  if (process.env.AI_MOCK) {
    out.ai = { skipped: "AI_MOCK is on — tools return canned responses, no API call is made." };
    return Response.json(out);
  }
  if (!key) {
    out.ai = { ok: false, diagnosis: `No API key set for provider "${provider}".` };
    return Response.json(out);
  }

  try {
    let res, body;
    if (provider === "openrouter") {
      res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${key}`,
          "X-Title": "QuickFund",
        },
        body: JSON.stringify({
          model,
          max_tokens: 16,
          messages: [{ role: "user", content: "Reply with the single word: ok" }],
        }),
        signal: AbortSignal.timeout(30000),
      });
      body = await res.text();
    } else {
      res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": key,
          "anthropic-version": "2023-06-01",
        },
        body: JSON.stringify({
          model,
          max_tokens: 16,
          messages: [{ role: "user", content: "Reply with the single word: ok" }],
        }),
        signal: AbortSignal.timeout(30000),
      });
      body = await res.text();
    }

    // A 200 can still carry an error object on OpenRouter.
    let parsed = null;
    try { parsed = JSON.parse(body); } catch {}
    const softError = parsed && parsed.error;

    if (res.ok && !softError) {
      out.ai = { ok: true, status: res.status, note: `Model "${model}" responded via ${provider}. The tools should work.` };
    } else {
      const status = res.status;
      out.ai = {
        ok: false,
        status,
        upstream: (softError ? JSON.stringify(softError) : body).slice(0, 500),
        diagnosis:
          status === 401 || status === 403
            ? `The ${provider} API key was rejected. Check the key and that it is set on this deployment.`
            : status === 404 || status === 400
              ? `The model slug "${model}" was not accepted. On OpenRouter, slugs look like "anthropic/claude-sonnet-4.6". Set OPENROUTER_MODEL to one of the available slugs listed below.`
              : status === 402
                ? "Out of credit on the account."
                : status === 429
                  ? "Rate limited by the provider."
                  : "Upstream error — see the body above.",
      };
      if (provider === "openrouter" && (status === 400 || status === 404)) {
        const slugs = await openRouterClaudeSlugs(key);
        if (slugs) out.available_claude_models = slugs;
      }
    }
  } catch (e) {
    out.ai = { ok: false, error: e?.message || String(e), diagnosis: `Could not reach the ${provider} API from this deployment.` };
  }
  return Response.json(out);
}
