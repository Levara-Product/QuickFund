import { useState } from "react";

const C = { orange: "#FD5026", black: "#0D0D0D", offwhite: "#FAF8F5", grey: "#94918C", greyLight: "#E8E5E0", cream: "#F2EDE6" };
const Bolt = ({ size = 24, color = C.orange, style = {} }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" style={style}><path d="M18 2L6 18h8l-2 12 12-16h-8l2-12z" fill={color}/></svg>
);

function FloatingWA() {
  return (
    <a href="https://wa.me/6580576702?text=Hi%20QuickFund%2C%20I%20have%20a%20question%20about%20professional%20services%20financing" target="_blank" rel="noopener"
      style={{ position: "fixed", bottom: 24, right: 24, zIndex: 300, width: 56, height: 56, borderRadius: 16, background: "#25D366", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 16px rgba(37,211,102,0.35)", textDecoration: "none" }}>
      <svg width="28" height="28" viewBox="0 0 24 24" fill="#fff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
    </a>
  );
}

function DownloadGate({ onClose }) {
  const [wa, setWa] = useState(""); const [email, setEmail] = useState(""); const [method, setMethod] = useState("whatsapp"); const [done, setDone] = useState(false);
  const ok = method === "whatsapp" ? wa.trim().length >= 8 : email.includes("@");
  if (done) return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, zIndex: 200, background: "rgba(0,0,0,0.5)", backdropFilter: "blur(8px)", display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
      <div onClick={e => e.stopPropagation()} style={{ background: C.offwhite, borderRadius: 14, padding: 32, maxWidth: 380, width: "100%", textAlign: "center" }}>
        <Bolt size={28} style={{ margin: "0 auto 12px" }} /><h3 style={{ fontFamily: "Syne, sans-serif", fontSize: 18, fontWeight: 800, color: C.black, marginBottom: 6 }}>On its way.</h3>
        <p style={{ fontFamily: "Figtree, sans-serif", fontSize: 13, color: C.grey }}>Your guide is coming via {method === "whatsapp" ? "WhatsApp" : "email"}.</p>
        <button onClick={onClose} style={{ marginTop: 16, padding: "10px 24px", background: C.black, color: "#fff", border: "none", borderRadius: 7, fontFamily: "Syne, sans-serif", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>Got it</button>
      </div>
    </div>);
  return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, zIndex: 200, background: "rgba(0,0,0,0.5)", backdropFilter: "blur(8px)", display: "flex", alignItems: "center", justifyContent: "center", padding: 20, animation: "fadeIn 0.2s ease" }}>
      <div onClick={e => e.stopPropagation()} style={{ background: C.offwhite, borderRadius: 14, padding: "28px 26px", maxWidth: 400, width: "100%", position: "relative" }}>
        <button onClick={onClose} style={{ position: "absolute", top: 12, right: 12, background: "none", border: "none", fontSize: 18, color: C.grey, cursor: "pointer" }}>x</button>
        <div style={{ fontFamily: "Syne, sans-serif", fontSize: 10, fontWeight: 800, color: C.orange, letterSpacing: "2px", textTransform: "uppercase", marginBottom: 8 }}>Full Guide PDF</div>
        <h3 style={{ fontFamily: "Syne, sans-serif", fontSize: 20, fontWeight: 800, color: C.black, lineHeight: 1.15, marginBottom: 8 }}>Professional Services<br />Financing Guide</h3>
        <p style={{ fontFamily: "Figtree, sans-serif", fontSize: 13, color: C.grey, lineHeight: 1.5, marginBottom: 14 }}>
          Includes invoice financing, working capital, revenue-based options, acquisition finance, and a preparation checklist.
        </p>
        <div style={{ display: "flex", background: C.cream, borderRadius: 8, padding: 3, marginBottom: 12 }}>
          {["whatsapp", "email"].map(m => (<button key={m} onClick={() => setMethod(m)} style={{ flex: 1, padding: "7px 0", borderRadius: 6, border: "none", cursor: "pointer", fontFamily: "Syne, sans-serif", fontSize: 11, fontWeight: 700, background: method === m ? "#fff" : "transparent", color: method === m ? C.black : C.grey }}>{m === "whatsapp" ? "WhatsApp" : "Email"}</button>))}
        </div>
        {method === "whatsapp" ? (<div style={{ display: "flex", gap: 6 }}><span style={{ padding: "10px", background: C.cream, borderRadius: 7, border: `1.5px solid ${C.greyLight}`, fontFamily: "Figtree, sans-serif", fontSize: 13, color: C.grey }}>+65</span><input value={wa} onChange={e => setWa(e.target.value.replace(/\D/g, ""))} placeholder="9123 4567" maxLength={8} className="qf-input" style={{ flex: 1 }} /></div>) : (<input value={email} onChange={e => setEmail(e.target.value)} placeholder="you@company.com" className="qf-input" style={{ width: "100%" }} />)}
        <button onClick={() => { console.log("ProfServ guide lead:", { wa, email, method }); setDone(true); }} disabled={!ok} style={{ width: "100%", padding: "12px", marginTop: 12, background: !ok ? C.greyLight : C.orange, border: "none", borderRadius: 7, fontFamily: "Syne, sans-serif", fontSize: 13, fontWeight: 700, color: "#fff", cursor: !ok ? "default" : "pointer" }}>Send Me The Full Guide</button>
      </div>
    </div>);
}

export default function ProfessionalServicesGuide() {
  const [showGate, setShowGate] = useState(false);
  const Section = ({ children, style = {} }) => (<div style={{ maxWidth: 720, margin: "0 auto", padding: "0 20px", ...style }}>{children}</div>);
  const H2 = ({ children }) => (<h2 style={{ fontFamily: "Syne, sans-serif", fontSize: 24, fontWeight: 800, color: C.black, lineHeight: 1.1, letterSpacing: "-1px", marginBottom: 14 }}>{children}</h2>);
  const P = ({ children, style = {} }) => (<p style={{ fontFamily: "Figtree, sans-serif", fontSize: 15, color: "#555", lineHeight: 1.75, marginBottom: 16, ...style }}>{children}</p>);
  const Callout = ({ children, type = "orange" }) => (<div style={{ padding: "16px 20px", background: type === "orange" ? `${C.orange}08` : C.cream, borderLeft: `3px solid ${type === "orange" ? C.orange : C.black}`, borderRadius: "0 8px 8px 0", marginBottom: 20 }}>{children}</div>);

  return (
    <div style={{ background: C.offwhite, minHeight: "100vh" }}>
      <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Figtree:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet" />
      <style>{`@keyframes fadeIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}*{box-sizing:border-box;margin:0;padding:0}::selection{background:${C.orange}25}.qf-input{padding:10px 12px;border-radius:7px;border:1.5px solid ${C.greyLight};background:${C.offwhite};font-family:Figtree,sans-serif;font-size:13px;color:${C.black}}.qf-input:focus{outline:none;border-color:${C.orange}}@media(max-width:768px){.qf-guide-hero-h1{font-size:32px!important}.qf-guide-toc{grid-template-columns:1fr!important}.qf-guide-nav-btns{gap:8px!important}.qf-guide-nav-btns a{font-size:10px!important;padding:6px 10px!important}}`}</style>
      <FloatingWA />
      {showGate && <DownloadGate onClose={() => setShowGate(false)} />}

      {/* Nav */}
      <nav style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(250,248,245,0.97)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(0,0,0,0.04)", padding: "0 20px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 54 }}>
          <a href="https://quickfund.sg" style={{ display: "flex", alignItems: "center", gap: 7, textDecoration: "none" }}><Bolt size={14} /><span style={{ fontFamily: "Syne, sans-serif", fontSize: 14, fontWeight: 800, color: C.black, textTransform: "uppercase" }}>QuickFund</span><span style={{ fontFamily: "Figtree, sans-serif", fontSize: 11, color: C.greyLight, marginLeft: 4 }}>Sector Guide</span></a>
          <div style={{ display: "flex", gap: 12, alignItems: "center" }} className="qf-guide-nav-btns">
            <a onClick={() => setShowGate(true)} style={{ fontFamily: "Syne, sans-serif", fontSize: 11, fontWeight: 700, color: C.orange, cursor: "pointer" }}>Download PDF</a>
            <a href="https://wa.me/6580576702?text=Hi%20QuickFund%2C%20question%20about%20professional%20services%20financing" target="_blank" rel="noopener" style={{ fontFamily: "Syne, sans-serif", fontSize: 11, fontWeight: 700, color: "#fff", background: C.black, padding: "7px 14px", borderRadius: 6, textDecoration: "none" }}>WhatsApp</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ padding: "60px 20px 40px" }}>
        <Section>
          <div style={{ fontFamily: "Syne, sans-serif", fontSize: 10, fontWeight: 800, color: C.orange, letterSpacing: "2px", textTransform: "uppercase", marginBottom: 12 }}>Financing Guide</div>
          <h1 className="qf-guide-hero-h1" style={{ fontFamily: "Syne, sans-serif", fontSize: 42, fontWeight: 800, color: C.black, lineHeight: 0.95, letterSpacing: "-2px", marginBottom: 16 }}>
            Financing for<br />Professional<br />Services<br /><span style={{ color: C.orange }}>in Singapore</span>
          </h1>
          <P style={{ fontSize: 16, maxWidth: 520, color: C.grey }}>
            You bill monthly, your clients pay in 60 to 90 days, and your biggest cost is people who expect to be paid on time. Here's how to bridge the gap.
          </P>
          <div style={{ display: "flex", gap: 10, marginTop: 20, flexWrap: "wrap" }}>
            <a onClick={() => setShowGate(true)} style={{ fontFamily: "Syne, sans-serif", fontSize: 13, fontWeight: 700, color: "#fff", background: C.orange, padding: "12px 24px", borderRadius: 8, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 7 }}>Download Full Guide <Bolt size={12} color="#fff" /></a>
            <a href="https://quickfund.sg/#tools" style={{ fontFamily: "Syne, sans-serif", fontSize: 13, fontWeight: 700, color: C.black, padding: "12px 24px", borderRadius: 8, border: `1.5px solid ${C.greyLight}`, textDecoration: "none" }}>Try the AI Loan Check-Up</a>
          </div>
          <p style={{ fontFamily: "Figtree, sans-serif", fontSize: 11, color: C.greyLight, marginTop: 12 }}>7 min read. Last updated May 2026.</p>
        </Section>
      </section>

      {/* TOC */}
      <section style={{ padding: "0 20px 40px" }}>
        <Section>
          <div className="qf-guide-toc" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
            {[
              "Why professional services financing is different",
              "The payment terms problem",
              "Invoice financing for corporate receivables",
              "Working capital facilities",
              "Revenue-based financing",
              "Acquisition finance for practice growth",
              "Property-backed lending",
              "Retainer vs project revenue: what lenders prefer",
              "What lenders look at",
              "Common mistakes we see",
              "Responsible borrowing for professional services",
              "When to talk to QuickFund",
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start", padding: "8px 12px", background: i % 2 === 0 ? "#fff" : C.offwhite, borderRadius: 6 }}>
                <span style={{ fontFamily: "Syne, sans-serif", fontSize: 11, fontWeight: 800, color: C.orange, minWidth: 20 }}>{String(i + 1).padStart(2, "0")}</span>
                <span style={{ fontFamily: "Figtree, sans-serif", fontSize: 13, color: C.black }}>{item}</span>
              </div>
            ))}
          </div>
        </Section>
      </section>

      {/* Content */}
      <article style={{ padding: "0 20px 60px" }}>
        <Section>

          <H2>Why professional services financing is different</H2>
          <P>Professional services firms, whether you're a law practice, an accounting firm, an engineering consultancy, a recruitment agency, an architecture practice, or a marketing agency, share a common financial profile: your biggest asset walks out the door every evening. People are your product, people are your cost, and people can't be pledged as collateral.</P>
          <P>This creates a specific challenge when it comes to financing. Banks and lenders want to lend against assets. In a trading company, there's inventory. In a logistics firm, there's a fleet. In a construction company, there's equipment. In a professional services firm, there's talent, reputation, and a book of clients. None of which a lender can seize if you default.</P>
          <P>The good news: professional services firms typically have something else that lenders value highly. Corporate receivables. Your clients are often large companies, government agencies, or MNCs that always pay, just slowly. Those receivables are highly financeable. And if your firm has recurring retainer revenue, that predictability makes you an attractive borrower for working capital and revenue-based facilities.</P>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>The payment terms problem</H2>
          <P>Professional services firms live in a perpetual cash flow mismatch. You do the work in Month 1. You invoice at the end of Month 1 or the beginning of Month 2. Your client's accounts payable team processes the invoice and pays in 30 to 90 days. In some cases, government agencies and large corporates can take even longer.</P>
          <P>Meanwhile, your costs are immediate. Salaries are due on the 25th, every month, without fail. Office rent is due. Professional indemnity insurance is due. Software subscriptions, travel disbursements, subcontractor fees. All of these costs occur while your revenue sits in your clients' bank accounts, waiting to be released.</P>

          <Callout>
            <P style={{ margin: 0, fontSize: 14, color: C.black, fontWeight: 500 }}>A professional services firm billing S$500K per month with an average collection period of 75 days has approximately S$1.25M in outstanding receivables at any given time. That's S$1.25M of revenue already earned but not yet collected. If your monthly operating cost is S$400K, you need at least S$1M in available capital just to bridge the collection gap. Most firms fund this from retained earnings. Those that are growing fast often can't.</P>
          </Callout>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>Invoice financing for corporate receivables</H2>
          <P>Invoice financing is the single most natural financing product for professional services firms. You've done the work. You've invoiced. The client will pay, it's just a matter of when. Invoice financing lets you access that cash now instead of waiting.</P>
          <P>The lender advances 80 to 90% of the invoice value upfront. When your client pays (typically 30 to 90 days later), the lender takes their fee and releases the balance to you. The entire process is based on your client's creditworthiness, not yours. If your clients are blue-chip corporates, government agencies, listed companies, or MNCs, the terms will be very favourable.</P>

          {[
            { t: "Invoice discounting", d: "You retain control of your receivables and your client doesn't know a lender is involved. You still send invoices, chase payments, and manage the client relationship. This is the preferred option for most professional firms because it preserves the perception of financial strength." },
            { t: "Factoring", d: "The lender takes over collection. Your client pays the lender directly. This is less common in professional services because the client relationship is personal and sensitive. Having a third party chase your client for payment can create awkwardness. But for firms with high-volume, lower-touch client relationships, it can work." },
          ].map((item, i) => (
            <div key={i} style={{ marginBottom: 12, padding: "14px 16px", background: "#fff", borderRadius: 8, border: `1px solid ${C.greyLight}` }}>
              <h3 style={{ fontFamily: "Syne, sans-serif", fontSize: 14, fontWeight: 700, color: C.black, marginBottom: 4 }}>{item.t}</h3>
              <P style={{ margin: 0, fontSize: 13 }}>{item.d}</P>
            </div>
          ))}

          <P>The key advantage of invoice financing for professional services: it scales with your business. As you win more clients and issue more invoices, the amount of financing available to you grows proportionally. You don't need to renegotiate your facility every time your revenue increases.</P>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>Working capital facilities</H2>
          <P>Working capital facilities provide general operational funding that isn't tied to specific invoices. They cover the gap between what you need to spend (payroll, rent, disbursements) and what you're waiting to collect. For professional services firms, this is often a revolving credit line that you draw on when cash is tight and repay when receivables come in.</P>
          <P>Banks will consider working capital facilities for established professional services firms with at least 2 to 3 years of trading history, consistent revenue, and a strong client base. The approval is based more on your track record and revenue consistency than on asset security, though personal guarantees from the partners or directors are almost always required.</P>
          <P>For newer or smaller firms, non-bank lenders and fintech platforms offer working capital facilities with faster approvals. The rates will be higher, but the turnaround can be days rather than weeks. These are particularly useful for firms going through a growth phase where payroll is expanding faster than collections can keep up.</P>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>Revenue-based financing</H2>
          <P>If your firm has recurring revenue, particularly retainer contracts, managed services agreements, or ongoing consulting mandates, revenue-based financing (RBF) is a strong option. The lender advances a multiple of your monthly revenue, and you repay as a percentage of revenue each month.</P>
          <P>RBF works particularly well for firms with predictable, repeating income. A consulting firm with 10 retainer clients paying S$20K each per month has S$200K in recurring revenue. An RBF lender might advance 3 to 6 times that monthly figure, giving the firm S$600K to S$1.2M in growth capital without dilution or traditional collateral.</P>
          <P>The cost is expressed as a factor rate (typically 1.15x to 1.4x). As with all RBF, the total cost depends on repayment speed. Model the effective annualised cost before committing. For firms with high-margin retainer revenue, the math often works well because the incremental revenue from deploying the capital (hiring more staff, taking on more clients) exceeds the financing cost.</P>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>Acquisition finance for practice growth</H2>
          <P>Many professional services firms grow by acquiring other practices. A law firm buys a smaller practice to add a new specialisation. An accounting firm acquires a book of clients from a retiring practitioner. A recruitment agency buys a competitor to expand into a new sector. These acquisitions need funding, and the structure is different from typical business loans.</P>
          <P>Acquisition finance for professional services is typically structured as a term loan secured against the acquired practice's cash flows. The lender assesses the target's revenue, client retention, staff stability, and the likelihood that the revenue will continue post-acquisition. If the target has strong recurring revenue with long-standing clients, the lending case is straightforward.</P>
          <P>The challenge is client concentration and key-person risk. If the practice you're acquiring is built around one or two key individuals, and those individuals are leaving post-acquisition, the revenue may not survive the transition. Lenders scrutinise this carefully. Earn-out structures, where part of the purchase price is deferred and contingent on client retention, help de-risk both the acquisition and the financing.</P>

          <Callout>
            <P style={{ margin: 0, fontSize: 14, color: C.black, fontWeight: 500 }}>If you're acquiring a practice, factor the financing costs into your acquisition model from the start. The acquisition should be accretive even after debt service. If you need the target's revenue to grow by 30% just to cover the loan payments, the deal is too expensive or the financing structure needs to change.</P>
          </Callout>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>Property-backed lending</H2>
          <P>If the firm's partners or directors own property in Singapore, property-backed facilities offer the best terms available: lowest rates, highest quantum, longest tenor. For professional services firms that are fundamentally asset-light, using property as security transforms the financing landscape.</P>
          <P>This is commonly used by partners in law firms, accounting practices, and consultancies who need working capital to fund growth, bridge a cash flow gap, or finance an acquisition. The property provides the hard security that the business itself can't offer.</P>
          <P>The risk, as always, is that the property is at stake if the business can't service the debt. For professional services firms with stable recurring revenue, the risk is lower than in more volatile sectors. But it's still real, and partners should discuss and agree on the arrangement formally before any individual pledges personal property for the firm's benefit. For more detail, see our <a href="https://quickfund.sg/guide/property-backed-loans" style={{ color: C.orange, textDecoration: "none", fontWeight: 500 }}>Property-Backed Loans guide</a>.</P>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>Retainer vs project revenue: what lenders prefer</H2>
          <P>The type of revenue your firm generates significantly affects your financing options and terms.</P>
          <P>Retainer and managed services revenue is the most financeable. It's recurring, predictable, and contracted. A firm with 70% retainer revenue and 30% project revenue is a stronger borrower than the reverse. Lenders can model the retainer base, apply churn assumptions, and feel confident about debt serviceability. This is functionally similar to SaaS recurring revenue, and some lenders treat it the same way.</P>
          <P>Project-based revenue is lumpier and harder to underwrite. A consulting firm might bill S$500K in Q1 and S$200K in Q2, depending on project timing. Lenders need to see a longer track record (at least 2 to 3 years) to identify patterns and get comfortable with the variability. Invoice financing works well for project revenue because the lender is underwriting each individual invoice, not the overall revenue stream.</P>

          <Callout type="dark">
            <P style={{ margin: 0, fontSize: 14, color: C.black, fontWeight: 500, lineHeight: 1.7 }}>If you're a project-based firm trying to build a financing foundation, consider converting some client relationships into retainers even if it means a small discount. Retained revenue, even at a lower average rate, creates predictability that makes you a fundamentally different credit proposition. It's an operational change that unlocks better financing terms.</P>
          </Callout>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>What lenders look at</H2>
          {[
            { t: "Revenue consistency and visibility", d: "How predictable is your revenue? Lenders want to see at least 12 to 24 months of consistent billing. Retainer revenue provides the strongest signal. Project revenue with a full pipeline and a track record of consistent wins is the next best thing." },
            { t: "Client quality and diversity", d: "Who are your clients, and how concentrated is your revenue? If one client represents 40% of billing, that's a concentration risk. If your clients are large corporates, government agencies, or listed companies, that's a credit strength because those clients always pay (they just pay slowly)." },
            { t: "Receivables quality", d: "For invoice financing specifically, lenders assess the quality of your outstanding receivables. How old are they? What's your average collection period? Do any clients have a history of disputes or late payment? Clean, current receivables from creditworthy clients are highly financeable." },
            { t: "Staff retention and key-person risk", d: "Professional services revenue is tied to people. If your top billing partner or key consultant leaves, revenue may follow them. Lenders assess key-person risk, especially in smaller firms. Demonstrating that revenue is spread across multiple team members, not concentrated in one individual, strengthens your credit case." },
            { t: "Margins", d: "Professional services gross margins should be strong, typically 40 to 60% or higher depending on the discipline. If your margins are below 30%, lenders will question your pricing, utilisation, or overhead structure. Higher margins mean more of each revenue dollar is available for debt service." },
            { t: "Work in progress (WIP)", d: "Lenders may look at your WIP, work that's been done but not yet invoiced, as an indicator of near-term revenue. A healthy WIP balance suggests invoices (and cash) are coming. An unhealthy WIP balance (aged, disputed, or unlikely to be invoiced) is a warning sign." },
          ].map((item, i) => (
            <div key={i} style={{ marginBottom: 14 }}>
              <h3 style={{ fontFamily: "Syne, sans-serif", fontSize: 15, fontWeight: 700, color: C.black, marginBottom: 4 }}>{item.t}</h3>
              <P style={{ margin: 0, fontSize: 14 }}>{item.d}</P>
            </div>
          ))}

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>Common mistakes we see</H2>
          {[
            { t: "Treating payroll as variable when it's fixed", d: "In theory, you can let staff go if revenue drops. In practice, it takes months. Notice periods, severance, recruitment costs to rehire when things recover. For financing purposes, treat your payroll as a fixed cost for at least 3 to 6 months. If you can't service debt while carrying your full headcount through a slow quarter, the facility is too large." },
            { t: "Not collecting fast enough", d: "Many professional services firms are terrible at invoicing and collections. Work gets done, invoices go out late, follow-ups are inconsistent, and the average collection period stretches to 90+ days. Before you take on financing to bridge the cash flow gap, invest in tightening your billing and collection process. The most cost-effective financing is getting paid on time." },
            { t: "Funding growth by outrunning collections", d: "Hiring aggressively to service new clients, but the new clients pay on 60-day terms and the new staff need to be paid now. Each new hire increases the cash flow gap. If you're growing headcount by 30% but your collection cycle is 75 days, you're building a cash flow deficit that compounds every month. Finance the growth, don't ignore the gap." },
            { t: "Acquiring a practice without de-risking key-person departure", d: "You buy a practice, the founder retires, and half the clients leave within 12 months. You're left with the debt but without the revenue that was supposed to service it. Structure the deal with earn-outs, retention incentives, and transition periods. If the seller won't agree to any retention mechanism, think carefully about what you're actually buying." },
            { t: "Partners not agreeing on financing before it's needed", d: "In a partnership, who provides the PG? Whose property is pledged? How is the cost of financing shared? These conversations need to happen before a cash crunch, not during one. Disagreements between partners about financing can paralyse a firm at exactly the moment when action is needed." },
          ].map((item, i) => (
            <div key={i} style={{ marginBottom: 14 }}>
              <h3 style={{ fontFamily: "Syne, sans-serif", fontSize: 15, fontWeight: 700, color: C.black, marginBottom: 4 }}>{item.t}</h3>
              <P style={{ margin: 0, fontSize: 14 }}>{item.d}</P>
            </div>
          ))}

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>Responsible borrowing for professional services</H2>
          <P>Professional services firms have a natural advantage when it comes to debt: recurring or semi-recurring revenue, high margins, and corporate clients who pay. This can create a false sense of security. The risk is not that your clients won't pay. It's that they might pay more slowly than expected, or that a major client churns, or that a key staff member leaves, and suddenly the revenue base that supported the debt isn't there anymore.</P>
          <div style={{ padding: "18px 20px", background: C.cream, borderLeft: `3px solid ${C.black}`, borderRadius: "0 8px 8px 0", marginBottom: 20 }}>
            <P style={{ margin: 0, fontSize: 14, color: C.black, fontWeight: 500, lineHeight: 1.7 }}>Before taking on debt: if your largest client terminates tomorrow, can you still cover payroll and debt service for 3 months while you replace the revenue? If two senior team members leave and take clients with them, how does the picture change? These aren't unlikely scenarios in professional services. They're normal.</P>
          </div>
          {[
            "Can the firm service this debt if the largest client terminates?",
            "Is the debt being used for productive purposes (growth, acquisition) or just covering operational losses?",
            "Have the partners agreed on who provides PGs and how the financing cost is shared?",
            "If collections slow by 30 days across the board, does the cash flow still work?",
            "Are you borrowing to grow, or borrowing because you can't collect fast enough?",
          ].map((q, i) => (
            <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 8 }}>
              <span style={{ fontFamily: "Syne, sans-serif", fontSize: 13, color: C.orange, fontWeight: 800, minWidth: 20 }}>{i + 1}.</span>
              <P style={{ margin: 0, fontSize: 14 }}>{q}</P>
            </div>
          ))}
          <P>Read our <a href="https://quickfund.sg/responsible-business-promise" style={{ color: C.orange, textDecoration: "none", fontWeight: 500 }}>Responsible Business Promise</a> for more on how we think about this.</P>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>When to talk to QuickFund</H2>
          <P>If you're running a professional services firm in Singapore, whether you're a 5-person consultancy or a 50-person practice, and you need working capital, invoice financing, growth funding, or acquisition finance, talk to us.</P>
          <P>We are not owned by any lender. No lender has equity in our business. We work across banks, finance companies, invoice financing specialists, and alternative lenders. For professional services firms specifically, we understand that the financing challenge is about cash flow timing, not business viability. Your business is profitable. Your clients will pay. You just need the capital to bridge the gap between doing the work and collecting the revenue.</P>
          <P>We've helped firms set up invoice financing against corporate receivables, structure acquisition finance for practice purchases, and access working capital to fund hiring during growth phases. Each firm's situation is different, and the right structure depends on your revenue model, client mix, and growth plans.</P>

          <Callout type="dark">
            <P style={{ margin: 0, fontSize: 14, color: C.black, fontWeight: 500, lineHeight: 1.7 }}>If you've been self-funding your working capital gap from retained earnings, that's conservative and commendable. But it also means your growth is limited to what your cash reserves allow. If you could deploy S$500K in additional working capital to hire 3 more staff and service more clients, and the return on that investment exceeds the financing cost, you're leaving growth on the table. That's a conversation worth having.</P>
          </Callout>

          {/* CTAs */}
          <div style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 12 }}>
            <a onClick={() => setShowGate(true)} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 22px", background: C.orange, borderRadius: 10, cursor: "pointer", textDecoration: "none" }}>
              <div><div style={{ fontFamily: "Syne, sans-serif", fontSize: 14, fontWeight: 700, color: "#fff" }}>Download the full guide</div><div style={{ fontFamily: "Figtree, sans-serif", fontSize: 12, color: "rgba(255,255,255,0.7)", marginTop: 2 }}>Invoice financing, working capital, acquisition finance, and a checklist</div></div>
              <Bolt size={20} color="#fff" style={{ flexShrink: 0 }} />
            </a>
            <a href="https://quickfund.sg/#tools" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 22px", background: "#fff", borderRadius: 10, border: `1.5px solid ${C.greyLight}`, textDecoration: "none" }}>
              <div><div style={{ fontFamily: "Syne, sans-serif", fontSize: 14, fontWeight: 700, color: C.black }}>Try the AI Loan Check-Up</div><div style={{ fontFamily: "Figtree, sans-serif", fontSize: 12, color: C.grey, marginTop: 2 }}>10 questions. Free. See what you qualify for.</div></div>
              <Bolt size={20} style={{ flexShrink: 0 }} />
            </a>
            <a href="https://wa.me/6580576702?text=Hi%20QuickFund%2C%20I%20have%20a%20question%20about%20professional%20services%20financing" target="_blank" rel="noopener" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 22px", background: C.black, borderRadius: 10, textDecoration: "none" }}>
              <div><div style={{ fontFamily: "Syne, sans-serif", fontSize: 14, fontWeight: 700, color: "#fff" }}>Talk to our team</div><div style={{ fontFamily: "Figtree, sans-serif", fontSize: 12, color: "rgba(255,255,255,0.5)", marginTop: 2 }}>No forms. Just WhatsApp.</div></div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366" style={{ flexShrink: 0 }}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </a>
          </div>
        </Section>
      </article>

      {/* Other guides */}
      <section style={{ padding: "40px 20px", background: C.cream }}>
        <Section>
          <div style={{ fontFamily: "Syne, sans-serif", fontSize: 10, fontWeight: 800, color: C.orange, letterSpacing: "2px", textTransform: "uppercase", marginBottom: 10 }}>More Guides</div>
          <h2 style={{ fontFamily: "Syne, sans-serif", fontSize: 20, fontWeight: 800, color: C.black, marginBottom: 16 }}>Explore other sectors</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {["Property-Backed Loans", "Doctors and Dentists", "Trading Companies", "Tech Companies", "Startups", "E-commerce", "Software", "F&B", "Construction", "Logistics", "Retail"].map((s, i) => (
              <a key={i} href={`https://quickfund.sg/guide/${s.toLowerCase().replace(/ /g, "-")}`} style={{ padding: "7px 14px", borderRadius: 16, fontFamily: "Figtree, sans-serif", fontSize: 12, fontWeight: 500, color: C.black, background: "#fff", textDecoration: "none", border: `1px solid ${C.greyLight}` }}>{s}</a>
            ))}
          </div>
        </Section>
      </section>

      {/* Sitemap */}
      <section style={{ padding: "32px 20px 20px", background: C.black }}>
        <Section>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24 }} className="qf-guide-toc">
            <div>
              <div style={{ fontFamily: "Syne, sans-serif", fontSize: 10, fontWeight: 800, color: C.orange, letterSpacing: "2px", textTransform: "uppercase", marginBottom: 10 }}>QuickFund</div>
              {["Home", "AI Tools", "Partners", "FAQ", "Blog", "Responsible Business Promise"].map(l => (
                <a key={l} href={`https://quickfund.sg/${l === "Home" ? "" : l === "AI Tools" ? "#tools" : l === "FAQ" ? "#faq" : l.toLowerCase().replace(/ /g, "-")}`} style={{ display: "block", fontFamily: "Figtree, sans-serif", fontSize: 12, color: "rgba(255,255,255,0.4)", textDecoration: "none", marginBottom: 6 }}>{l}</a>
              ))}
            </div>
            <div>
              <div style={{ fontFamily: "Syne, sans-serif", fontSize: 10, fontWeight: 800, color: C.orange, letterSpacing: "2px", textTransform: "uppercase", marginBottom: 10 }}>Guides</div>
              {["Property-Backed Loans", "Doctors and Dentists", "Trading Companies", "Tech Companies", "Startups", "E-commerce", "Software", "F&B", "Construction"].map(l => (
                <a key={l} href={`https://quickfund.sg/guide/${l.toLowerCase().replace(/ /g, "-")}`} style={{ display: "block", fontFamily: "Figtree, sans-serif", fontSize: 12, color: "rgba(255,255,255,0.4)", textDecoration: "none", marginBottom: 6 }}>{l}</a>
              ))}
            </div>
            <div>
              <div style={{ fontFamily: "Syne, sans-serif", fontSize: 10, fontWeight: 800, color: C.orange, letterSpacing: "2px", textTransform: "uppercase", marginBottom: 10 }}>Contact</div>
              <a href="https://wa.me/6580576702" target="_blank" rel="noopener" style={{ display: "block", fontFamily: "Figtree, sans-serif", fontSize: 12, color: "rgba(255,255,255,0.4)", textDecoration: "none", marginBottom: 6 }}>WhatsApp</a>
              <a href="mailto:leslie@quickfund.sg" style={{ display: "block", fontFamily: "Figtree, sans-serif", fontSize: 12, color: "rgba(255,255,255,0.4)", textDecoration: "none", marginBottom: 6 }}>leslie@quickfund.sg</a>
              <div style={{ fontFamily: "Figtree, sans-serif", fontSize: 12, color: "rgba(255,255,255,0.25)", marginTop: 16 }}>
                Singapore, Malaysia, Hong Kong,<br />US, UK, Vietnam, Thailand, Indonesia
              </div>
            </div>
          </div>
        </Section>
      </section>

      {/* Disclaimer + Footer */}
      <footer style={{ background: C.black, padding: "0 20px 28px" }}>
        <Section>
          <div style={{ padding: "18px 20px", background: "rgba(255,255,255,0.04)", borderRadius: 8, border: "1px solid rgba(255,255,255,0.06)", marginBottom: 20 }}>
            <p style={{ fontFamily: "Syne, sans-serif", fontSize: 10, fontWeight: 800, color: "rgba(255,255,255,0.4)", letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: 8 }}>Important Disclaimer</p>
            <p style={{ fontFamily: "Figtree, sans-serif", fontSize: 11, color: "rgba(255,255,255,0.35)", lineHeight: 1.7, margin: 0 }}>
              This guide is published by QuickFund Pte Ltd for general informational purposes only. Nothing in this guide constitutes financial, legal, investment, tax, or professional advice, and nothing should be construed as a recommendation or solicitation to enter into any loan, mortgage, or financial arrangement. QuickFund Pte Ltd is not a licensed financial adviser and does not provide regulated financial, legal, tax or investment advice.
            </p>
            <p style={{ fontFamily: "Figtree, sans-serif", fontSize: 11, color: "rgba(255,255,255,0.35)", lineHeight: 1.7, margin: "8px 0 0" }}>
              All borrowing carries real and significant risks. Secured loans may result in the loss of pledged assets, including property, vehicles, equipment, or shares, in the event of default. Lenders may require personal guarantees, corporate guarantees, or other forms of security. Revenue-based financing costs depend on repayment speed and may result in higher effective interest rates than anticipated. Acquisition financing carries additional risks including client retention, key-person departure, and integration challenges. Business conditions, client relationships, and market conditions can change.
            </p>
            <p style={{ fontFamily: "Figtree, sans-serif", fontSize: 11, color: "rgba(255,255,255,0.35)", lineHeight: 1.7, margin: "8px 0 0" }}>
              You are solely responsible for your borrowing decisions, contractual obligations, and the consequences of default. All loan terms, rates, and conditions are determined by individual lenders and are subject to their own assessment, approval, and due diligence. QuickFund makes no guarantees regarding loan approvals, terms, or outcomes. Seek independent legal and financial advice before entering into any loan or guarantee arrangement.
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <Bolt size={10} color="rgba(255,255,255,0.3)" /><span style={{ fontFamily: "Syne, sans-serif", fontSize: 10, fontWeight: 800, color: "rgba(255,255,255,0.3)", textTransform: "uppercase" }}>QuickFund</span>
              <span style={{ fontFamily: "Figtree, sans-serif", fontSize: 10, color: "rgba(255,255,255,0.15)", marginLeft: 4 }}>Part of Levara Advisory Group</span>
            </div>
            <a href="https://quickfund.sg/responsible-business-promise" style={{ fontFamily: "Figtree, sans-serif", fontSize: 10, color: "rgba(255,255,255,0.15)", textDecoration: "none" }}>Responsible Business Promise</a>
          </div>
        </Section>
      </footer>
    </div>
  );
}
