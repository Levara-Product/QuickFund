import { STEPS } from "@/lib/assessOptions";
import { ASSESS_PROMPT } from "@/lib/prompts";
import { json, validContact, runTool } from "@/lib/apiHelpers";

export async function POST(req) {
  let body;
  try { body = await req.json(); } catch { return json({ error: "Invalid request." }, 400); }
  const { answers, contact } = body || {};
  if (!validContact(contact)) return json({ error: "Please provide a valid contact." }, 400);
  // Every answer must exactly match a predefined option -- no freetext reaches the model.
  if (!answers || typeof answers !== "object") return json({ error: "Invalid answers." }, 400);
  for (const step of STEPS) {
    if (!step.opts.includes(answers[step.id])) return json({ error: "Invalid answers." }, 400);
  }
  const userContent =
    `Industry: ${answers.industry}\nAge: ${answers.age}\nRevenue: ${answers.revenue}\n` +
    `Revenue source: ${answers.rev_geo}\nNeed: ${answers.need}\nExisting debt: ${answers.debt}\n` +
    `Amount: ${answers.amount}\nCollateral: ${answers.collateral}\nLocal PG: ${answers.pg}\n` +
    `Urgency: ${answers.urgency}\n\nAssess this profile.`;
  return runTool(req, { tool: "assess", payload: { contact, answers }, system: ASSESS_PROMPT, userContent });
}
