"use client";
import { useState } from "react";


const C = { orange: "#FD5026", black: "#0D0D0D", offwhite: "#FAF8F5", grey: "#94918C", greyLight: "#E8E5E0", cream: "#F2EDE6" };
const GUIDE_SLUGS = {
  "Property-Backed Loans": "property-backed-loans",
  "Doctors and Dentists": "doctors-and-dentists",
  "Trading Companies": "trading-companies",
  "Tech Companies": "tech-companies",
  "Startups": "startups",
  "E-commerce": "e-commerce",
  "E-commerce and Product Manufacturers": "e-commerce",
  "Software": "software",
  "Software Companies": "software",
  "F&B": "f-and-b",
  "F&B and Hospitality": "f-and-b",
  "Construction": "construction",
  "Construction and Contractors": "construction",
  "Logistics": "logistics",
  "Logistics and Transport": "logistics",
  "Professional Services": "professional-services",
  "Retail": "retail",
};

const Bolt = ({ size = 24, color = C.orange, style = {} }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" style={style}><path d="M18 2L6 18h8l-2 12 12-16h-8l2-12z" fill={color}/></svg>
);

function PartnersPage() {
  return (
    <div style={{ background: C.offwhite, minHeight: "100vh" }}>
      <style>{`*{box-sizing:border-box;margin:0;padding:0}::selection{background:${C.orange}25}details summary::-webkit-details-marker{display:none}@media(max-width:768px){.qf-partner-grid{grid-template-columns:1fr!important}.qf-partner-steps{grid-template-columns:1fr!important}}`}</style>

      <a href="https://wa.me/6580576702?text=Hi%20QuickFund%2C%20interested%20in%20partnership" target="_blank" rel="noopener"
        style={{ position: "fixed", bottom: 24, right: 24, zIndex: 300, width: 56, height: 56, borderRadius: 16, background: "#25D366", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 16px rgba(37,211,102,0.35)", textDecoration: "none" }}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="#fff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>

      <nav style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(250,248,245,0.97)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(0,0,0,0.04)", padding: "0 20px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 54 }}>
          <a href="/" style={{ display: "flex", alignItems: "center", gap: 7, textDecoration: "none" }}><Bolt size={14} /><span style={{ fontFamily: "Poppins, sans-serif", fontSize: 14, fontWeight: 800, color: C.black, textTransform: "uppercase" }}>QuickFund</span></a>
          <a href="https://wa.me/6580576702?text=Hi%20QuickFund%2C%20interested%20in%20partnership" target="_blank" rel="noopener" style={{ fontFamily: "Poppins, sans-serif", fontSize: 11, fontWeight: 700, color: "#fff", background: C.orange, padding: "7px 14px", borderRadius: 6, textDecoration: "none" }}>Become a Partner</a>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ padding: "60px 20px 40px", maxWidth: 900, margin: "0 auto" }}>
        <div style={{ fontFamily: "Poppins, sans-serif", fontSize: 10, fontWeight: 800, color: C.orange, letterSpacing: "2px", textTransform: "uppercase", marginBottom: 12 }}>Referral Partners</div>
        <h1 style={{ fontFamily: "Poppins, sans-serif", fontSize: 38, fontWeight: 800, color: C.black, lineHeight: 0.95, letterSpacing:"-0.8px", marginBottom: 16 }}>
          Have a client to refer?<br/>Know someone who<br/>needs a loan?
        </h1>
        <p style={{ fontFamily: "Figtree, sans-serif", fontSize: 16, color: C.grey, lineHeight: 1.6, maxWidth: 520, marginBottom: 24 }}>
          Refer them to us. We handle the financing process, and eligible referral fees are agreed clearly before we move forward.
        </p>
        <a href="https://wa.me/6580576702?text=Hi%20QuickFund%2C%20interested%20in%20becoming%20a%20referral%20partner" target="_blank" rel="noopener" style={{ fontFamily: "Poppins, sans-serif", fontSize: 14, fontWeight: 700, color: "#fff", background: C.black, padding: "13px 28px", borderRadius: 8, textDecoration: "none", display: "inline-block" }}>Let's Talk</a>
      </section>

      {/* How it works */}
      <section style={{ padding: "40px 20px 50px", maxWidth: 900, margin: "0 auto" }}>
        <h2 style={{ fontFamily: "Poppins, sans-serif", fontSize: 22, fontWeight: 800, color: C.black, marginBottom: 24 }}>How it works</h2>
        <div className="qf-partner-steps" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 3 }}>
          {[
            { n: "01", t: "You introduce", d: "A client mentions financing. You point them our way. A WhatsApp message or email introduction is all we need." },
            { n: "02", t: "We handle everything", d: "Diagnosis, lender matching, application, documentation, negotiation. You stay informed throughout with minimal admin on your end." },
            { n: "03", t: "You earn", d: "When an eligible facility closes, you earn the referral fee agreed in writing." },
            { n: "04", t: "It keeps going", d: "Future renewals, new facilities or advisory work can also be covered, subject to the referral agreement." },
          ].map((step, i) => (
            <div key={i} style={{ background: i % 2 === 0 ? "#fff" : C.cream, padding: "24px 20px", borderRadius: 2 }}>
              <span style={{ fontFamily: "Poppins, sans-serif", fontSize: 36, fontWeight: 800, color: `${C.orange}20`, lineHeight: 1, display: "block", marginBottom: 12 }}>{step.n}</span>
              <h3 style={{ fontFamily: "Poppins, sans-serif", fontSize: 15, fontWeight: 800, color: C.black, marginBottom: 6 }}>{step.t}</h3>
              <p style={{ fontFamily: "Figtree, sans-serif", fontSize: 13, color: C.grey, lineHeight: 1.55 }}>{step.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Two-way */}
      <section style={{ padding: "0 20px 50px", maxWidth: 900, margin: "0 auto" }}>
        <div className="qf-partner-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 3 }}>
          <div style={{ background: C.black, padding: "32px 28px", borderRadius: 2 }}>
            <h2 style={{ fontFamily: "Poppins, sans-serif", fontSize: 20, fontWeight: 800, color: "#fff", marginBottom: 10 }}>You refer to us</h2>
            <p style={{ fontFamily: "Figtree, sans-serif", fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 1.6, marginBottom: 16 }}>
              Your client needs financing. You send them to us. We take care of the financing process, and referral fees are handled under the agreed partner terms.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {["Working capital", "Invoice financing", "Property-backed loans", "Venture debt", "Equipment and car financing", "Capital advisory"].map(s => (
                <div key={s} style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  <Bolt size={10} /><span style={{ fontFamily: "Figtree, sans-serif", fontSize: 13, color: "rgba(255,255,255,0.6)" }}>{s}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ background: "#fff", padding: "32px 28px", borderRadius: 2 }}>
            <h2 style={{ fontFamily: "Poppins, sans-serif", fontSize: 20, fontWeight: 800, color: C.black, marginBottom: 10 }}>We refer to you</h2>
            <p style={{ fontFamily: "Figtree, sans-serif", fontSize: 14, color: C.grey, lineHeight: 1.6, marginBottom: 16 }}>
              Our clients need services beyond financing. When they do, we send them to our partners. It works both ways.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {["Accounting and audit", "Corporate secretarial", "Legal services", "Insurance", "Property services", "Tax advisory"].map(s => (
                <div key={s} style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  <Bolt size={10} color={C.black} /><span style={{ fontFamily: "Figtree, sans-serif", fontSize: 13, color: C.grey }}>{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who we partner with */}
      <section style={{ padding: "0 20px 50px", maxWidth: 900, margin: "0 auto" }}>
        <h2 style={{ fontFamily: "Poppins, sans-serif", fontSize: 22, fontWeight: 800, color: C.black, marginBottom: 20 }}>Who we partner with</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {[
            { t: "Accountants and Auditors", d: "You see cash flow problems before anyone else. When a client needs capital, point them our way." },
            { t: "Corporate Secretaries", d: "You file the annual returns. You know which companies are growing and which are struggling." },
            { t: "Lawyers", d: "Commercial lawyers handling M&A, restructuring, or corporate work. Your clients need financing, we provide it." },
            { t: "Property Agents", d: "Commercial property agents. Your buyers need financing to close. We arrange it." },
            { t: "Insurance Agents", d: "You serve SME clients. When they mention cash flow, you have someone to call." },
            { t: "Business Consultants", d: "You help companies grow. We fund it." },
          ].map((item, i) => (
            <div key={i} style={{ flex: "1 1 280px", padding: "18px 20px", background: "#fff", borderRadius: 8, border: `1px solid ${C.greyLight}` }}>
              <h3 style={{ fontFamily: "Poppins, sans-serif", fontSize: 14, fontWeight: 700, color: C.black, marginBottom: 4 }}>{item.t}</h3>
              <p style={{ fontFamily: "Figtree, sans-serif", fontSize: 13, color: C.grey, lineHeight: 1.5 }}>{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Your reputation */}
      <section style={{ padding: "0 20px 50px", maxWidth: 900, margin: "0 auto" }}>
        <div style={{ background: C.cream, borderRadius: 12, padding: "32px 28px", borderLeft: `3px solid ${C.orange}` }}>
          <h2 style={{ fontFamily: "Poppins, sans-serif", fontSize: 20, fontWeight: 800, color: C.black, marginBottom: 12 }}>We treat your reputation like our own</h2>
          <p style={{ fontFamily: "Figtree, sans-serif", fontSize: 15, color: C.grey, lineHeight: 1.7, marginBottom: 12 }}>
            When you refer a client, your name is on the line. We understand that. Your client will be treated with the same professionalism you'd give them yourself. No hard selling. No pressure tactics. No disappearing after the deal closes.
          </p>
          <p style={{ fontFamily: "Figtree, sans-serif", fontSize: 15, color: C.grey, lineHeight: 1.7, marginBottom: 12 }}>
            If a loan isn't right for your client, we'll say so. We'd rather protect your relationship than force a deal. Read our <a href="/responsible-business-promise" style={{ color: C.orange, textDecoration: "none", fontWeight: 500 }}>Responsible Business Promise</a> to see how we operate.
          </p>
          <p style={{ fontFamily: "Figtree, sans-serif", fontSize: 15, color: C.grey, lineHeight: 1.7 }}>
            Already doing loan introductions yourself? We're your overflow partner for the complex ones. Urgent timelines, foreign-owned companies, unusual structures. We handle the ones you can't.
          </p>
        </div>
      </section>

      {/* AI Tools for partners */}
      <section style={{ padding: "0 20px 50px", maxWidth: 900, margin: "0 auto" }}>
        <h2 style={{ fontFamily: "Poppins, sans-serif", fontSize: 22, fontWeight: 800, color: C.black, marginBottom: 12 }}>Tools you can share with your clients</h2>
        <p style={{ fontFamily: "Figtree, sans-serif", fontSize: 14, color: C.grey, lineHeight: 1.6, marginBottom: 20, maxWidth: 520 }}>
          Three free AI-powered tools your clients can use directly. Makes you look good for recommending something genuinely useful.
        </p>
        <div className="qf-partner-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
          {[
            { t: "Loan Check-Up", d: "10 questions. Tells them what they likely qualify for and what to watch out for.", link: "quickfund.sg/tools" },
            { t: "Term Sheet Scanner", d: "Paste in loan terms. Flags red flags, hidden fees, and traps.", link: "quickfund.sg/tools" },
            { t: "Rate Check", d: "Benchmarks their current rate against what's typical for their profile.", link: "quickfund.sg/tools" },
          ].map((tool, i) => (
            <div key={i} style={{ padding: "20px 18px", background: "#fff", borderRadius: 8, border: `1px solid ${C.greyLight}` }}>
              <Bolt size={16} style={{ marginBottom: 10 }} />
              <h3 style={{ fontFamily: "Poppins, sans-serif", fontSize: 14, fontWeight: 700, color: C.black, marginBottom: 4 }}>{tool.t}</h3>
              <p style={{ fontFamily: "Figtree, sans-serif", fontSize: 12, color: C.grey, lineHeight: 1.5, marginBottom: 10 }}>{tool.d}</p>
              <a href={`https://${tool.link}`} style={{ fontFamily: "Figtree, sans-serif", fontSize: 12, color: C.orange, fontWeight: 500, textDecoration: "none" }}>Try it →</a>
            </div>
          ))}
        </div>
      </section>

      {/* Partner FAQ */}
      <section style={{ padding: "0 20px 50px", maxWidth: 900, margin: "0 auto" }}>
        <h2 style={{ fontFamily: "Poppins, sans-serif", fontSize: 22, fontWeight: 800, color: C.black, marginBottom: 16 }}>Partner FAQ</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {[
            { q: "How much is the referral fee?", a: "We discuss this directly. It depends on the deal type, size, lender and scope of involvement. The fee structure is documented in the referral agreement before any client work begins." },
            { q: "Is the partnership exclusive?", a: "No. You can work with whoever you like. We just aim to be the partner you call first because we deliver." },
            { q: "How long does the partnership last?", a: "As long as it works for both of us. The duration, renewal treatment and fee entitlement for introduced clients are set out clearly in the referral agreement." },
            { q: "What if my client isn't the right fit for QuickFund?", a: "We'll tell you and your client right away. We won't waste their time or yours. If we can point them somewhere else, we will." },
            { q: "Do I need to sign anything?", a: "We formalise the partnership with a simple referral agreement. It protects both sides: your referral fees are documented, and the terms are clear." },
            { q: "What if the client comes back for a renewal?", a: "Renewals, extensions and new facilities can be included, depending on the agreed partner terms. We document this upfront so there is no ambiguity." },
          ].map((item, i) => (
            <details key={i} style={{ padding: "14px 16px", background: i % 2 === 0 ? "#fff" : C.offwhite, borderRadius: 4, cursor: "pointer" }}>
              <summary style={{ fontFamily: "Poppins, sans-serif", fontSize: 14, fontWeight: 700, color: C.black, listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                {item.q}<span style={{ color: C.orange, fontSize: 16, flexShrink: 0, marginLeft: 10 }}>+</span>
              </summary>
              <p style={{ fontFamily: "Figtree, sans-serif", fontSize: 14, color: C.grey, lineHeight: 1.65, marginTop: 10, paddingRight: 20 }}>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "0 20px 60px", maxWidth: 900, margin: "0 auto" }}>
        <div style={{ background: C.black, borderRadius: 12, padding: "36px 32px", textAlign: "center" }}>
          <h2 style={{ fontFamily: "Poppins, sans-serif", fontSize: 22, fontWeight: 800, color: "#fff", marginBottom: 8 }}>Interested?</h2>
          <p style={{ fontFamily: "Figtree, sans-serif", fontSize: 14, color: "rgba(255,255,255,0.4)", marginBottom: 20 }}>A quick WhatsApp conversation is all it takes to get started.</p>
          <a href="https://wa.me/6580576702?text=Hi%20QuickFund%2C%20interested%20in%20becoming%20a%20referral%20partner" target="_blank" rel="noopener" style={{ padding: "13px 32px", background: C.orange, color: "#fff", borderRadius: 8, fontFamily: "Poppins, sans-serif", fontSize: 14, fontWeight: 700, textDecoration: "none" }}>WhatsApp Us</a>
        </div>
      </section>

      {/* Footer nav */}
      <section style={{ padding: "32px 20px 20px", background: C.black }}><div style={{ maxWidth: 900, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24 }} className="qf-guide-toc">
          <div>
            <div style={{ fontFamily: "Poppins, sans-serif", fontSize: 10, fontWeight: 800, color: C.orange, letterSpacing: "2px", textTransform: "uppercase", marginBottom: 10 }}>QuickFund</div>
            {["Home", "AI Tools", "Partners", "FAQ", "Responsible Business Promise"].map(l => (<a key={l} href={`/${l === "Home" ? "" : l === "AI Tools" ? "#tools" : l === "FAQ" ? "#faq" : l.toLowerCase().replace(/ /g, "-").replace("&", "-and-")}`} style={{ display: "block", fontFamily: "Figtree, sans-serif", fontSize: 12, color: "rgba(255,255,255,0.4)", textDecoration: "none", marginBottom: 6 }}>{l}</a>))}
          </div>
          <div>
            <div style={{ fontFamily: "Poppins, sans-serif", fontSize: 10, fontWeight: 800, color: C.orange, letterSpacing: "2px", textTransform: "uppercase", marginBottom: 10 }}>Guides</div>
            {["Property-Backed Loans", "Doctors and Dentists", "Trading Companies", "Tech Companies", "Startups", "E-commerce", "Software", "F&B", "Construction", "Logistics", "Professional Services", "Retail"].map(l => (<a key={l} href={`/guide/${GUIDE_SLUGS[l]}`} style={{ display: "block", fontFamily: "Figtree, sans-serif", fontSize: 12, color: "rgba(255,255,255,0.4)", textDecoration: "none", marginBottom: 6 }}>{l}</a>))}
          </div>
          <div>
            <div style={{ fontFamily: "Poppins, sans-serif", fontSize: 10, fontWeight: 800, color: C.orange, letterSpacing: "2px", textTransform: "uppercase", marginBottom: 10 }}>Contact</div>
            <a href="https://wa.me/6580576702" target="_blank" rel="noopener" style={{ display: "block", fontFamily: "Figtree, sans-serif", fontSize: 12, color: "rgba(255,255,255,0.4)", textDecoration: "none", marginBottom: 6 }}>WhatsApp</a>
            <a href="mailto:leslie@quickfund.sg" style={{ display: "block", fontFamily: "Figtree, sans-serif", fontSize: 12, color: "rgba(255,255,255,0.4)", textDecoration: "none", marginBottom: 6 }}>leslie@quickfund.sg</a>
            <div style={{ fontFamily: "Figtree, sans-serif", fontSize: 12, color: "rgba(255,255,255,0.25)", marginTop: 16 }}>Singapore, Malaysia, Hong Kong,<br />US, UK, Vietnam, Thailand, Indonesia</div>
          </div>
        </div>
      </div></section>
      <style>{`@media (max-width: 768px) { .qf-guide-toc { grid-template-columns: 1fr !important; } }`}</style>
      <footer style={{ padding: "24px 20px", maxWidth: 900, margin: "0 auto", borderTop: `1px solid ${C.greyLight}` }}>
        <div style={{ padding: "14px 16px", background: C.cream, borderRadius: 8, marginBottom: 16 }}>
          <p style={{ fontFamily: "Figtree, sans-serif", fontSize: 10, color: C.grey, lineHeight: 1.6, margin: 0 }}>
            <span style={{ fontWeight: 600, color: C.black }}>Disclaimer:</span> This page is for general informational purposes only. QuickFund does not provide regulated financial, legal, tax or investment advice. Partnership terms, referral fees, and arrangements are subject to individual agreement. All financing decisions are made solely by the end client.
          </p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <Bolt size={10} /><span style={{ fontFamily: "Poppins, sans-serif", fontSize: 10, fontWeight: 800, color: C.black, textTransform: "uppercase" }}>QuickFund</span>
            
          </div>
          <a href="/responsible-business-promise" style={{ fontFamily: "Figtree, sans-serif", fontSize: 10, color: C.greyLight, textDecoration: "none" }}>Responsible Business Promise</a>
        </div>
      </footer>
    </div>
  );
}


export default PartnersPage;
