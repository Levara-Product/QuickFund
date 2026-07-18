import { SCAN_PROMPT } from "@/lib/prompts";
import { looksLikeInjection, INJECTION_REJECT } from "@/lib/aiGuard";
import { json, validContact, runTool } from "@/lib/apiHelpers";

export async function POST(req) {
  let body;
  try { body = await req.json(); } catch { return json({ error: "Invalid request." }, 400); }
  const { terms, contact } = body || {};
  if (!validContact(contact)) return json({ error: "Please provide a valid contact." }, 400);
  if (typeof terms !== "string" || terms.trim().length < 30 || terms.length > 10000)
    return json({ error: "Please paste between 30 and 10,000 characters of terms." }, 400);
  if (looksLikeInjection(terms)) return json({ error: INJECTION_REJECT }, 400);
  return runTool(req, {
    tool: "scan",
    payload: { contact, input: terms },
    system: SCAN_PROMPT,
    userContent: `Terms:\n${terms}\n\nFlag concerns.`,
  });
}
