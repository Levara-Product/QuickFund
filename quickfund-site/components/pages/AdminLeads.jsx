"use client";
import { useState } from "react";

const C = { black: "#0A0A0A", orange: "#FD5026", cream: "#FFF3EC", grey: "#6B6B6B", greyLight: "#E8E4DF", offwhite: "#FAF8F5" };
const TOOL_LABEL = { assess: "Loan Check-Up", scan: "Term Sheet Scanner", rate: "Rate Check", "guide-download": "Guide Download" };

export default function AdminLeads() {
  const [token, setToken] = useState("");
  const [leads, setLeads] = useState(null);
  const [err, setErr] = useState("");
  const [busy, setBusy] = useState(false);

  const load = async () => {
    setBusy(true); setErr("");
    try {
      const r = await fetch("/api/admin/leads", { headers: { Authorization: `Bearer ${token}` } });
      const d = await r.json();
      if (!r.ok) { setErr(d.error || `Error ${r.status}`); setLeads(null); }
      else setLeads(d.leads || []);
    } catch { setErr("Request failed."); }
    setBusy(false);
  };

  return (
    <div style={{ minHeight: "100vh", background: C.offwhite, padding: "40px 20px", fontFamily: "Figtree, sans-serif" }}>
      <div style={{ maxWidth: 780, margin: "0 auto" }}>
        <h1 style={{ fontFamily: "Poppins, sans-serif", fontSize: 22, fontWeight: 800, color: C.black, marginBottom: 4 }}>Leads &amp; AI results</h1>
        <p style={{ fontSize: 13, color: C.grey, marginBottom: 20 }}>Internal viewer. Shows leads captured on this server and the AI output each prospect saw. The webhook destination (Sheet/CRM) remains the durable record.</p>
        <div style={{ display: "flex", gap: 8, marginBottom: 24 }}>
          <input type="password" value={token} onChange={(e) => setToken(e.target.value)} placeholder="Admin token"
            style={{ flex: 1, padding: "11px 14px", border: `1.5px solid ${C.greyLight}`, borderRadius: 8, fontSize: 14, fontFamily: "Figtree, sans-serif" }} />
          <button onClick={load} disabled={!token || busy}
            style={{ padding: "11px 22px", background: !token || busy ? C.greyLight : C.orange, color: "#fff", border: "none", borderRadius: 8, fontFamily: "Poppins, sans-serif", fontSize: 13, fontWeight: 700, cursor: !token || busy ? "default" : "pointer" }}>
            {busy ? "Loading…" : "Load"}
          </button>
        </div>
        {err && <p style={{ fontSize: 13, color: "#B3261E", marginBottom: 16 }}>{err}</p>}
        {leads && leads.length === 0 && <p style={{ fontSize: 14, color: C.grey }}>No leads recorded on this server yet.</p>}
        {leads && leads.map((l, i) => (
          <div key={i} style={{ background: "#fff", border: `1px solid ${C.greyLight}`, borderRadius: 12, padding: "16px 18px", marginBottom: 12 }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, alignItems: "center", marginBottom: 8 }}>
              <span style={{ fontFamily: "Poppins, sans-serif", fontSize: 10, fontWeight: 800, letterSpacing: "1px", textTransform: "uppercase", color: C.orange, background: C.cream, padding: "3px 9px", borderRadius: 999 }}>{TOOL_LABEL[l.tool] || l.tool}</span>
              <span style={{ fontSize: 12, color: C.grey }}>{new Date(l.timestamp).toLocaleString()}</span>
              {l.aiBlocked && <span style={{ fontSize: 11, color: "#B3261E" }}>output filtered</span>}
            </div>
            <p style={{ fontSize: 14, color: C.black, margin: "0 0 6px", fontWeight: 600 }}>
              {l.contact?.method === "whatsapp" ? `WhatsApp ${l.contact.wa}` : l.contact?.email || "—"}
            </p>
            {l.guide && <p style={{ fontSize: 13, color: C.grey, margin: "0 0 6px" }}>Guide: {l.guide}</p>}
            {(l.answers || l.input) && (
              <details style={{ marginBottom: 6 }}>
                <summary style={{ fontSize: 12.5, color: C.grey, cursor: "pointer" }}>What they entered</summary>
                <pre style={{ fontSize: 12, color: C.black, background: C.offwhite, padding: "10px 12px", borderRadius: 8, whiteSpace: "pre-wrap", overflowWrap: "anywhere", marginTop: 6 }}>{JSON.stringify(l.answers || l.input, null, 2)}</pre>
              </details>
            )}
            {l.aiResult && (
              <details>
                <summary style={{ fontSize: 12.5, color: C.orange, cursor: "pointer", fontWeight: 600 }}>AI result they saw</summary>
                <p style={{ fontSize: 13, color: C.black, background: C.cream, padding: "12px 14px", borderRadius: 8, whiteSpace: "pre-wrap", lineHeight: 1.6, marginTop: 6 }}>{l.aiResult}</p>
              </details>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
