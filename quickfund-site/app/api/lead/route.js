// Vercel defaults serverless functions to 10s; a Claude call regularly needs
// longer, and the timeout surfaced as a silent failure in the browser.
export const runtime = "nodejs";
export const maxDuration = 60;

import { saveLead } from "@/lib/leads";
import { rateLimit } from "@/lib/rateLimit";
import { json, validContact, clientMeta } from "@/lib/apiHelpers";

// Guide-download gates (home lead magnet, sector modal, all 12 guide pages).
// No AI call -- capture the lead and return. Own rate bucket so downloading a
// guide never consumes the visitor's AI-tool quota.
export async function POST(req) {
  let body;
  try { body = await req.json(); } catch { return json({ error: "Invalid request." }, 400); }
  const { guide, contact } = body || {};
  if (!validContact(contact)) return json({ error: "Please provide a valid contact." }, 400);
  if (typeof guide !== "string" || !guide.trim() || guide.length > 120)
    return json({ error: "Invalid request." }, 400);
  const { ip, ua } = clientMeta(req);
  if (!rateLimit("lead:" + ip, 10).allowed)
    return json({ error: "You've reached the daily limit. WhatsApp us at +65 8057 6702." }, 429);
  await saveLead({ tool: "guide-download", guide, contact, ip, ua });
  return json({ ok: true });
}
