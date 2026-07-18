import { RATE_PROMPT } from "@/lib/prompts";
import { looksLikeInjection, INJECTION_REJECT } from "@/lib/aiGuard";
import { json, validContact, runTool } from "@/lib/apiHelpers";

export async function POST(req) {
  let body;
  try { body = await req.json(); } catch { return json({ error: "Invalid request." }, 400); }
  const { type, amount, rate, contact } = body || {};
  if (!validContact(contact)) return json({ error: "Please provide a valid contact." }, 400);
  for (const v of [type, amount, rate]) {
    if (typeof v !== "string" || !v.trim() || v.length > 200)
      return json({ error: "Please fill in all three fields." }, 400);
  }
  if (looksLikeInjection(`${type} ${amount} ${rate}`)) return json({ error: INJECTION_REJECT }, 400);
  return runTool(req, {
    tool: "rate",
    payload: { contact, input: { type, amount, rate } },
    system: RATE_PROMPT,
    userContent: `Type: ${type}\nAmount: ${amount}\nRate: ${rate}\n\nAm I overpaying?`,
  });
}
