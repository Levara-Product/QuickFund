import { promises as fs } from "fs";
import path from "path";
import crypto from "crypto";

// Token-gated lead viewer API. Disabled unless ADMIN_TOKEN is set.
// Reads the local data/leads.jsonl sink; on serverless hosts that file is
// ephemeral per instance, so treat the LEAD_WEBHOOK_URL destination
// (Sheet/CRM) as the durable store and this as a live-server convenience.
function authorized(req) {
  const token = process.env.ADMIN_TOKEN;
  if (!token) return null; // feature disabled
  const header = (req.headers.get("authorization") || "").replace(/^Bearer\s+/i, "");
  const a = Buffer.from(header);
  const b = Buffer.from(token);
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}

import { rateLimit } from "@/lib/rateLimit";

export async function GET(req) {
  const ip = (req.headers.get("x-forwarded-for") || "").split(",")[0].trim() || "unknown";
  if (!rateLimit("admin:" + ip, 100).allowed)
    return Response.json({ error: "Too many requests." }, { status: 429 });
  const auth = authorized(req);
  if (auth === null) return Response.json({ error: "Admin viewer is disabled. Set ADMIN_TOKEN to enable it." }, { status: 404 });
  if (!auth) return Response.json({ error: "Unauthorized." }, { status: 401 });

  let lines = [];
  try {
    const raw = await fs.readFile(path.join(process.cwd(), "data", "leads.jsonl"), "utf8");
    lines = raw.split("\n").filter(Boolean).map((l) => { try { return JSON.parse(l); } catch { return null; } }).filter(Boolean);
  } catch {
    return Response.json({ leads: [], note: "No leads recorded on this server yet." });
  }

  const results = new Map();
  for (const r of lines) if (r.tool === "ai-result" && r.ref) results.set(r.ref, r);
  const leads = lines
    .filter((r) => r.tool !== "ai-result")
    .map((r) => ({ ...r, aiResult: r.id ? results.get(r.id)?.result ?? null : null,
                   aiBlocked: r.id ? results.get(r.id)?.blocked ?? false : false }))
    .reverse()
    .slice(0, 500);
  return Response.json({ leads });
}
