import { promises as fs } from "fs";
import path from "path";

// Lead capture happens BEFORE the AI call and must never fail the request
// (docs/quickfund-production-notes.md). Two sinks:
//   1. LEAD_WEBHOOK_URL (recommended): POSTs JSON -- point it at a Zapier/Make
//      webhook or a Google Apps Script that appends to a Sheet / your CRM.
//   2. data/leads.jsonl on local disk (dev convenience; ephemeral on serverless).
export async function saveLead(lead) {
  const record = { ...lead, timestamp: new Date().toISOString() };
  const url = process.env.LEAD_WEBHOOK_URL;
  if (url) {
    try {
      await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(record),
        signal: AbortSignal.timeout(5000),
      });
    } catch (e) {
      console.error("lead webhook failed:", e?.message);
    }
  }
  try {
    const dir = path.join(process.cwd(), "data");
    await fs.mkdir(dir, { recursive: true });
    await fs.appendFile(path.join(dir, "leads.jsonl"), JSON.stringify(record) + "\n");
  } catch (e) {
    console.error("lead file write failed:", e?.message);
  }
}
