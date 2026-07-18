import { rateLimit } from "@/lib/rateLimit";
import { saveLead } from "@/lib/leads";
import { callClaude } from "@/lib/ai";
import { filterOutput, FALLBACK_RESPONSE, RATE_LIMIT_MSG } from "@/lib/aiGuard";

export function clientMeta(req) {
  return {
    ip: (req.headers.get("x-forwarded-for") || "").split(",")[0].trim() || "unknown",
    ua: req.headers.get("user-agent") || "",
  };
}

export function validContact(contact) {
  if (!contact || typeof contact !== "object") return false;
  if (contact.method === "whatsapp")
    return typeof contact.wa === "string" && contact.wa.replace(/\D/g, "").length >= 8;
  if (contact.method === "email")
    return typeof contact.email === "string" && contact.email.includes("@") && contact.email.length <= 200;
  return false;
}

export const json = (body, status = 200) => Response.json(body, { status });

// Shared pipeline: rate limit -> lead capture (before AI, never fails the
// request) -> Claude -> output keyword filter.
export async function runTool(req, { tool, payload, system, userContent }) {
  const { ip, ua } = clientMeta(req);
  if (!rateLimit("ai:" + ip).allowed) return json({ error: RATE_LIMIT_MSG }, 429);
  const leadId = crypto.randomUUID();
  await saveLead({ id: leadId, tool, ip, ua, ...payload });
  let text;
  try {
    text = await callClaude({ system, userContent, tool });
  } catch (e) {
    console.error(`${tool} AI call failed:`, e?.message);
    return json({ error: "Couldn't generate. Try again?" }, 502);
  }
  const f = filterOutput(text);
  const shown = f.blocked ? FALLBACK_RESPONSE : text;
  if (f.blocked) console.warn(`${tool} output blocked (matched: ${f.hit})`);
  // Persist what the prospect actually saw, linked to the lead, via the same
  // sinks (webhook + JSONL) so follow-up conversations have full context.
  await saveLead({ tool: "ai-result", ref: leadId, refTool: tool, blocked: f.blocked, result: shown, ip });
  return json({ result: shown });
}
