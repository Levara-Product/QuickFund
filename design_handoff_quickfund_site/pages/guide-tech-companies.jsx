const { useState } = React;

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

function FloatingWA() {
  return (
    <a href="https://wa.me/6580576702?text=Hi%20QuickFund%2C%20I%20have%20a%20question%20about%20tech%20company%20financing" target="_blank" rel="noopener"
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
        <Bolt size={28} style={{ margin: "0 auto 12px" }} /><h3 style={{ fontFamily: "Poppins, sans-serif", fontSize: 18, fontWeight: 800, color: C.black, marginBottom: 6 }}>On its way.</h3>
        <p style={{ fontFamily: "Figtree, sans-serif", fontSize: 13, color: C.grey }}>Your guide is coming via {method === "whatsapp" ? "WhatsApp" : "email"}.</p>
        <button onClick={onClose} style={{ marginTop: 16, padding: "10px 24px", background: C.black, color: "#fff", border: "none", borderRadius: 7, fontFamily: "Poppins, sans-serif", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>Got it</button>
      </div>
    </div>);
  return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, zIndex: 200, background: "rgba(0,0,0,0.5)", backdropFilter: "blur(8px)", display: "flex", alignItems: "center", justifyContent: "center", padding: 20, animation: "fadeIn 0.2s ease" }}>
      <div onClick={e => e.stopPropagation()} style={{ background: C.offwhite, borderRadius: 14, padding: "28px 26px", maxWidth: 400, width: "100%", position: "relative" }}>
        <button onClick={onClose} style={{ position: "absolute", top: 12, right: 12, background: "none", border: "none", fontSize: 18, color: C.grey, cursor: "pointer" }}>x</button>
        <div style={{ fontFamily: "Poppins, sans-serif", fontSize: 10, fontWeight: 800, color: C.orange, letterSpacing: "2px", textTransform: "uppercase", marginBottom: 8 }}>Full Guide PDF</div>
        <h3 style={{ fontFamily: "Poppins, sans-serif", fontSize: 20, fontWeight: 800, color: C.black, lineHeight: 1.15, marginBottom: 8 }}>Tech Company<br />Financing Guide</h3>
        <p style={{ fontFamily: "Figtree, sans-serif", fontSize: 13, color: C.grey, lineHeight: 1.5, marginBottom: 14 }}>
          Includes venture debt structures, revenue-based financing details, warrant and equity kicker guidance, and a preparation checklist. Everything on this page plus the detail you need to actually move forward.
        </p>
        <div style={{ display: "flex", background: C.cream, borderRadius: 8, padding: 3, marginBottom: 12 }}>
          {["whatsapp", "email"].map(m => (<button key={m} onClick={() => setMethod(m)} style={{ flex: 1, padding: "7px 0", borderRadius: 6, border: "none", cursor: "pointer", fontFamily: "Poppins, sans-serif", fontSize: 11, fontWeight: 700, background: method === m ? "#fff" : "transparent", color: method === m ? C.black : C.grey }}>{m === "whatsapp" ? "WhatsApp" : "Email"}</button>))}
        </div>
        {method === "whatsapp" ? (<div style={{ display: "flex", gap: 6 }}><span style={{ padding: "10px", background: C.cream, borderRadius: 7, border: `1.5px solid ${C.greyLight}`, fontFamily: "Figtree, sans-serif", fontSize: 13, color: C.grey }}>+65</span><input value={wa} onChange={e => setWa(e.target.value.replace(/\D/g, ""))} placeholder="9123 4567" maxLength={8} className="qf-input" style={{ flex: 1 }} /></div>) : (<input value={email} onChange={e => setEmail(e.target.value)} placeholder="you@company.com" className="qf-input" style={{ width: "100%" }} />)}
        <button onClick={() => { console.log("Tech guide lead:", { wa, email, method }); setDone(true); }} disabled={!ok} style={{ width: "100%", padding: "12px", marginTop: 12, background: !ok ? C.greyLight : C.orange, border: "none", borderRadius: 7, fontFamily: "Poppins, sans-serif", fontSize: 13, fontWeight: 700, color: "#fff", cursor: !ok ? "default" : "pointer" }}>Send Me The Full Guide</button><p style={{ fontFamily: "Figtree, sans-serif", fontSize: 10, color: C.greyLight, marginTop: 8, textAlign: "center" }}>By submitting you consent to being contacted about this guide. <a href="https://quickfund.sg/privacy-policy" style={{ color: C.grey }}>Privacy Policy</a>.</p>
      </div>
    </div>);
}

function TechCompaniesGuide() {
  const [showGate, setShowGate] = useState(false);
  const Section = ({ children, style = {} }) => (<div style={{ maxWidth: 720, margin: "0 auto", padding: "0 20px", ...style }}>{children}</div>);
  const H2 = ({ children }) => (<h2 style={{ fontFamily: "Poppins, sans-serif", fontSize: 24, fontWeight: 800, color: C.black, lineHeight: 1.1, letterSpacing:"-0.35px", marginBottom: 14 }}>{children}</h2>);
  const P = ({ children, style = {} }) => (<p style={{ fontFamily: "Figtree, sans-serif", fontSize: 15, color: "#555", lineHeight: 1.75, marginBottom: 16, ...style }}>{children}</p>);
  const Callout = ({ children, type = "orange" }) => (<div style={{ padding: "16px 20px", background: type === "orange" ? `${C.orange}08` : C.cream, borderLeft: `3px solid ${type === "orange" ? C.orange : C.black}`, borderRadius: "0 8px 8px 0", marginBottom: 20 }}>{children}</div>);

  return (
    <div style={{ background: C.offwhite, minHeight: "100vh" }}>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Figtree:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet" />
      <style>{`@keyframes fadeIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}*{box-sizing:border-box;margin:0;padding:0}::selection{background:${C.orange}25}.qf-input{padding:10px 12px;border-radius:7px;border:1.5px solid ${C.greyLight};background:${C.offwhite};font-family:Figtree,sans-serif;font-size:13px;color:${C.black}}.qf-input:focus{outline:none;border-color:${C.orange}}@media(max-width:768px){.qf-guide-hero-h1{font-size:32px!important}.qf-guide-toc{grid-template-columns:1fr!important}.qf-guide-nav-btns{gap:8px!important}.qf-guide-nav-btns a{font-size:10px!important;padding:6px 10px!important}}`}</style>
      <FloatingWA />
      {showGate && <DownloadGate onClose={() => setShowGate(false)} />}

      {/* Nav */}
      <nav style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(250,248,245,0.97)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(0,0,0,0.04)", padding: "0 20px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 54 }}>
          <a href="https://quickfund.sg" style={{ display: "flex", alignItems: "center", gap: 7, textDecoration: "none" }}><Bolt size={14} /><span style={{ fontFamily: "Poppins, sans-serif", fontSize: 14, fontWeight: 800, color: C.black, textTransform: "uppercase" }}>QuickFund</span><span style={{ fontFamily: "Figtree, sans-serif", fontSize: 11, color: C.greyLight, marginLeft: 4 }}>Sector Guide</span></a>
          <div style={{ display: "flex", gap: 12, alignItems: "center" }} className="qf-guide-nav-btns">
            <a onClick={() => setShowGate(true)} style={{ fontFamily: "Poppins, sans-serif", fontSize: 11, fontWeight: 700, color: C.orange, cursor: "pointer" }}>Download PDF</a>
            <a href="https://wa.me/6580576702?text=Hi%20QuickFund%2C%20question%20about%20tech%20company%20financing" target="_blank" rel="noopener" style={{ fontFamily: "Poppins, sans-serif", fontSize: 11, fontWeight: 700, color: "#fff", background: C.black, padding: "7px 14px", borderRadius: 6, textDecoration: "none" }}>WhatsApp</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ padding: "60px 20px 40px" }}>
        <Section>
          <div style={{ fontFamily: "Poppins, sans-serif", fontSize: 10, fontWeight: 800, color: C.orange, letterSpacing: "2px", textTransform: "uppercase", marginBottom: 12 }}>Financing Guide</div>
          <h1 className="qf-guide-hero-h1" style={{ fontFamily: "Poppins, sans-serif", fontSize: 42, fontWeight: 800, color: C.black, lineHeight: 0.95, letterSpacing:"-0.8px", marginBottom: 16 }}>
            Financing for<br />Tech Companies<br /><span style={{ color: C.orange }}>in Singapore</span>
          </h1>
          <P style={{ fontSize: 16, maxWidth: 520, color: C.grey }}>
            You've raised equity, or you're generating revenue, or both. Debt can extend your runway, fund growth without dilution, and give you options your cap table alone can't. Here's what's available and what to watch out for.
          </P>
          <div style={{ display: "flex", gap: 10, marginTop: 20, flexWrap: "wrap" }}>
            <a onClick={() => setShowGate(true)} style={{ fontFamily: "Poppins, sans-serif", fontSize: 13, fontWeight: 700, color: "#fff", background: C.orange, padding: "12px 24px", borderRadius: 8, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 7 }}>Download Full Guide <Bolt size={12} color="#fff" /></a>
            <a href="https://quickfund.sg/#tools" style={{ fontFamily: "Poppins, sans-serif", fontSize: 13, fontWeight: 700, color: C.black, padding: "12px 24px", borderRadius: 8, border: `1.5px solid ${C.greyLight}`, textDecoration: "none" }}>Try the AI Loan Check-Up</a>
          </div>
          <p style={{ fontFamily: "Figtree, sans-serif", fontSize: 11, color: C.greyLight, marginTop: 12 }}>8 min read. Last updated May 2026.</p>
        </Section>
      </section>

      {/* TOC */}
      <section style={{ padding: "0 20px 40px" }}>
        <Section>
          <div className="qf-guide-toc" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
            {[
              "Why tech company financing is different",
              "Venture debt: how it works",
              "Revenue-based financing for tech",
              "Working capital facilities",
              "Invoice financing for B2B tech",
              "Warrants and equity kickers",
              "What lenders look at in tech companies",
              "The personal guarantee question",
              "Equity vs debt: when to use which",
              "Common mistakes we see",
              "Responsible borrowing for tech companies",
              "When to talk to QuickFund",
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start", padding: "8px 12px", background: i % 2 === 0 ? "#fff" : C.offwhite, borderRadius: 6 }}>
                <span style={{ fontFamily: "Poppins, sans-serif", fontSize: 11, fontWeight: 800, color: C.orange, minWidth: 20 }}>{String(i + 1).padStart(2, "0")}</span>
                <span style={{ fontFamily: "Figtree, sans-serif", fontSize: 13, color: C.black }}>{item}</span>
              </div>
            ))}
          </div>
        </Section>
      </section>

      {/* Content */}
      <article style={{ padding: "0 20px 60px" }}>
        <Section>

          <H2>Why tech company financing is different</H2>
          <P>Tech companies don't fit neatly into traditional lending models. Banks like assets on the balance sheet, steady profits, and years of operating history. Most tech companies have none of that. They have intellectual property, recurring revenue, venture backing, and growth rates that traditional underwriting models weren't built for.</P>
          <P>That used to mean tech companies could only raise equity. Every dollar of growth capital came with dilution. Over the last decade, a whole ecosystem of debt products has emerged specifically for tech companies. Venture debt, revenue-based financing, and alternative lending platforms now give founders real alternatives to giving up more of their company every time they need capital.</P>
          <P>Singapore's position as a tech hub means the options here are better than in most markets. Multiple lenders actively compete for tech company debt. If you're a tech company in Singapore with revenue or venture backing, you have more financing options than you probably realise.</P>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>Venture debt: how it works</H2>
          <P>Venture debt is a loan specifically designed for venture-backed companies. It typically comes after an equity round, not instead of one. The lender looks at the equity raise as validation: credible investors have done their due diligence and put money in, so the company is worth lending to.</P>
          <P>The typical structure: you raise an equity round, then take on venture debt equal to roughly 20 to 35% of the amount raised. If you raised S$10M in Series A, you might take on S$2M to S$3.5M in venture debt. The debt extends your runway by 3 to 6 months without additional dilution.</P>
          <P>Venture debt is usually structured as a term loan with a 2 to 4 year tenor. There's typically an interest-only period at the start (6 to 12 months), followed by principal plus interest repayments. The interest rate is higher than traditional bank lending because the risk profile is different. These are high-growth companies that may not yet be profitable.</P>

          <Callout>
            <P style={{ margin: 0, fontSize: 14, color: C.black, fontWeight: 500 }}>Most venture debt lenders also require warrants or some form of equity kicker on top of the interest rate. This results in a small amount of dilution. The coverage amount varies by lender and deal size. We cover warrants and equity kickers in more detail later in this guide, but the key point here is: don't compare venture debt offers on interest rate alone. Factor in the equity component too.</P>
          </Callout>

          <P>Venture debt works best when you have a clear use case for the capital: bridging to the next equity round, funding a specific growth initiative, or giving yourself more time to hit milestones that improve your valuation before the next raise. It works poorly as a lifeline when the business is struggling and equity investors have pulled back.</P>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>Revenue-based financing for tech</H2>
          <P>If your tech company generates recurring revenue, particularly MRR (monthly recurring revenue) or ARR (annual recurring revenue), revenue-based financing is designed for you. Lenders in this space underwrite based on your revenue metrics rather than your balance sheet or profitability.</P>
          <P>The mechanics: the lender advances you a multiple of your MRR or a percentage of your ARR. A common range is 3 to 8 times your MRR, depending on the lender and your metrics. If your MRR is S$200K, you could access S$600K to S$1.6M. Repayments are a fixed percentage of your monthly revenue, so they flex with your business cycle.</P>
          <P>The metrics that matter for RBF lenders are revenue growth rate, net revenue retention (are existing customers spending more or churning?), gross margins, and the predictability of your revenue. High net revenue retention and strong gross margins signal a healthy, sticky business. That gets you better terms.</P>

          <Callout type="dark">
            <P style={{ margin: 0, fontSize: 14, color: C.black, fontWeight: 500, lineHeight: 1.7 }}>Watch the total cost. RBF is often quoted as a factor rate (e.g. 1.15x to 1.4x) rather than an interest rate. A factor rate of 1.3x on S$1M means you repay S$1.3M total. If you repay that in 6 months, the effective annualised rate is very high. If it takes 18 months, it's more moderate. Always calculate the effective annualised cost and compare it against alternatives before committing.</P>
          </Callout>

          <P>RBF is particularly useful for companies that have strong revenue but haven't raised equity (or don't want to). It's non-dilutive and doesn't require a prior equity round. The trade-off is cost: RBF is more expensive than venture debt in most cases, but the approval process is faster and less dependent on your investor profile.</P>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>Working capital facilities</H2>
          <P>Not every financing need is about growth. Sometimes you just need cash to cover operating expenses while waiting for revenue to come in. Payroll, cloud infrastructure costs, marketing spend, rent. Working capital facilities cover the gap between what you owe and what you're owed.</P>
          <P>For tech companies with a few years of operating history and consistent revenue, revolving credit facilities from banks or finance companies are an option. You draw what you need, repay when cash comes in, and pay interest only on what's outstanding. This is the most flexible and often the most cost-effective working capital structure.</P>
          <P>For earlier-stage companies, fintech lenders and alternative platforms offer working capital facilities with faster approvals but higher rates. These are typically term facilities rather than revolving lines. The underwriting is lighter, the turnaround is faster, but the cost reflects the higher risk profile.</P>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>Invoice financing for B2B tech</H2>
          <P>If your tech company sells to enterprises and your customers pay on 30, 60, or 90 day terms, you're sitting on receivables that can be financed. Invoice financing lets you access cash against outstanding invoices before your customers pay.</P>
          <P>This works particularly well for B2B SaaS companies with annual contracts billed quarterly, IT services companies with project-based billing, and tech companies selling to government agencies or large corporates (which often have long payment cycles). The lender advances 80 to 90% of the invoice value upfront, and you get the balance (minus fees) when the customer pays.</P>
          <P>The critical factor is your customer's creditworthiness, not yours. If your customers are blue-chip corporates, government bodies, or listed companies, invoice financing terms will be very favourable. The lender's risk is your customer's ability to pay, and strong customers mean lower rates and higher advance percentages.</P>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>Warrants and equity kickers</H2>
          <P>In traditional SME lending, the lender charges interest and that's it. In tech company financing, especially venture debt and some non-bank facilities, lenders often want something extra on top of interest: an equity kicker. This is the lender's way of participating in your company's upside, and it's standard practice in this space.</P>
          <P>The most common form is a warrant. A warrant gives the lender the right to purchase shares in your company at a set price, typically the valuation of your last equity round. If your company grows and raises at a higher valuation later, the lender's warrants become valuable. If the company doesn't grow, the warrants are worth nothing and the lender just earns their interest.</P>
          <P>Some lenders structure the equity component differently. Instead of warrants, they may ask for redeemable convertible preference shares, a success fee tied to a liquidity event, or a percentage of exit proceeds above a threshold. The economic effect is similar: the lender gets a slice of upside in exchange for taking the risk of lending to a high-growth, possibly pre-profit company.</P>

          <Callout>
            <P style={{ margin: 0, fontSize: 14, color: C.black, fontWeight: 500 }}>Don't just focus on the interest rate when comparing offers. A facility with a lower interest rate but higher warrant coverage might cost you more in the long run than one with a slightly higher rate and no equity component. The real cost depends on how your company performs. If you 10x in value, those warrants become expensive. If growth is modest, they're negligible. Model both scenarios.</P>
          </Callout>

          <P>Not every lender requires warrants. Some bank facilities and revenue-based financing products have no equity component at all. If avoiding dilution is a priority, these may be worth exploring even if the headline rate is higher. The trade-off between interest cost and dilution is one of the most important calculations in tech company financing, and it's something we help our clients work through.</P>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>What lenders look at in tech companies</H2>
          {[
            { t: "Revenue quality and predictability", d: "Recurring revenue is the gold standard. Lenders love MRR and ARR because they're predictable. Project-based or one-off revenue is harder to underwrite. If you have a mix, expect lenders to discount the non-recurring portion heavily." },
            { t: "Burn rate and runway", d: "How much are you spending each month, and how long can you sustain it? Lenders want to know that adding debt doesn't push you into a cash crisis. If your burn rate means you'll run out of money in 3 months without the loan, that's a red flag. Lenders prefer at least 12 months of post-funding runway." },
            { t: "Equity backing and investor quality", d: "For venture debt, who your investors are matters. Credible VCs who are likely to support a follow-on round give lenders confidence. A cap table full of friends-and-family money with no institutional backing is much harder to lend against." },
            { t: "Net revenue retention", d: "Are your existing customers growing their spend with you, or shrinking and churning? A net revenue retention rate above 100% means your customer base is expanding without you having to acquire new customers. Lenders see this as one of the strongest signals of business health." },
            { t: "Gross margin", d: "Tech companies typically have high gross margins (60 to 80%+ for software). This matters because it means each dollar of revenue contributes meaningfully to covering fixed costs and debt service. If your gross margins are below 50%, lenders will scrutinise your unit economics more closely." },
            { t: "Customer concentration", d: "If one customer accounts for 40% or more of your revenue, that's a risk. If that customer leaves or delays payment, your ability to service debt is compromised. Lenders prefer a diversified customer base." },
          ].map((item, i) => (
            <div key={i} style={{ marginBottom: 14 }}>
              <h3 style={{ fontFamily: "Poppins, sans-serif", fontSize: 15, fontWeight: 700, color: C.black, marginBottom: 4 }}>{item.t}</h3>
              <P style={{ margin: 0, fontSize: 14 }}>{item.d}</P>
            </div>
          ))}

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>The personal guarantee question</H2>
          <P>For VC-backed tech companies, the personal guarantee (PG) question is more complicated than it is for a typical SME. Most lenders will ask for a PG as part of the facility. But who needs to sign, and what makes a PG acceptable to the lender, depends on the company's ownership structure.</P>
          <P>Lenders typically want the PG from the controlling shareholder, not just any director. If no single person holds a controlling stake, they may require multiple directors to sign. In a company with institutional investors on the cap table and a board in place, you likely need a board mandate before anyone can commit to a personal guarantee. These are governance and legal requirements, not just formalities.</P>
          <P>The PG also needs to be meaningful. A lender won't accept a guarantee from a founder who owns 1% of the company and has no personal assets to back it. They want to see that the guarantor has skin in the game and the financial substance to stand behind the guarantee. That means a clean CBS (Credit Bureau Singapore) record, demonstrable personal net worth, and ideally meaningful ownership in the business.</P>

          <Callout>
            <P style={{ margin: 0, fontSize: 14, color: C.black, fontWeight: 500, lineHeight: 1.7 }}>There's an argument we've heard from experienced operators: if you believe enough in your business, you should be comfortable putting up a PG. And if you do, it becomes a negotiating lever with your other stakeholders. You're signalling conviction. That signal has value. But the stakes are real and high. A PG means your personal assets are on the line if the company defaults. Don't sign one without fully understanding what you're committing to.</P>
          </Callout>

          <P>All of this is negotiable. Who provides the PG, whether it's capped or uncapped, whether multiple guarantors share the exposure, whether the PG falls away after certain milestones are met. Some lenders will offer a facility without requiring any additional PG if the other security and terms are strong enough. Working through these details is part of what we do. It's a conversation we have with lenders on our clients' behalf every week.</P>
          <P>From a practical standpoint, providing a PG often unlocks better terms, higher loan amounts, and faster approvals. Declining a PG narrows your options, sometimes significantly. Understanding that trade-off upfront saves time in the process.</P>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>Equity vs debt: when to use which</H2>
          <P>This is one of the most important decisions a tech founder makes, and it's not as simple as "debt is non-dilutive so always use debt."</P>
          <P>Equity is the right choice when you're pre-revenue or very early-stage with no predictable income, when you need capital for open-ended R&D or product development with no clear timeline to revenue, when the amount you need is large relative to your ability to service debt, or when you need capital that has no repayment obligation. Equity is patient. Debt is not.</P>
          <P>Debt works best when you have a clear, time-bound use case: extending runway between equity rounds, funding a specific growth initiative with measurable ROI, bridging a timing gap in cash flow, or financing something with a predictable payback period. The key test is whether the expected return on deploying the capital exceeds the cost of the debt, with enough margin for things to go differently than planned.</P>

          <Callout>
            <P style={{ margin: 0, fontSize: 14, color: C.black, fontWeight: 500 }}>The most common and most effective use of venture debt: raise your equity round, immediately take on venture debt equal to 20 to 30% of the round, and use the combined capital to extend your runway. You get more time to hit milestones, which means you raise the next round at a higher valuation, which means less dilution when it matters most. The small cost of venture debt interest and warrant coverage is almost always worth the valuation uplift if you execute.</P>
          </Callout>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>Common mistakes we see</H2>
          {[
            { t: "Taking venture debt as a lifeline", d: "Venture debt works as a growth accelerator, not a rescue tool. If you're taking on debt because you can't raise equity and you're running out of cash, you're adding a repayment obligation to a business that's already under pressure. Lenders know this. The terms you'll get in a distressed situation will reflect it." },
            { t: "Not accounting for warrant dilution", d: "Founders often compare venture debt cost by looking at the interest rate alone. But warrants are part of the cost. The dilution depends on the coverage amount and your company's valuation. At lower valuations or higher coverage, the warrant cost can be meaningful. Always calculate the fully loaded cost including both interest and warrant dilution." },
            { t: "Borrowing without a clear repayment plan", d: "Debt has a maturity date. Unlike equity, it needs to be repaid. If your repayment plan is 'we'll raise another round,' what happens if the round is delayed by 6 months? Or if market conditions change? Have a realistic plan that doesn't depend on a single outcome going perfectly." },
            { t: "Ignoring covenants", d: "Venture debt often comes with financial covenants: minimum cash balances, revenue milestones, restrictions on additional debt. Breaching a covenant can trigger an acceleration clause, meaning the entire loan becomes due immediately. Read every covenant. Model the scenarios. Understand what triggers a breach." },
            { t: "Not comparing across lenders", d: "Different lenders offer materially different terms. Interest rates, warrant coverage, covenants, drawdown flexibility, prepayment penalties. The first offer you receive is not necessarily the best. Having multiple term sheets gives you leverage to negotiate." },
          ].map((item, i) => (
            <div key={i} style={{ marginBottom: 14 }}>
              <h3 style={{ fontFamily: "Poppins, sans-serif", fontSize: 15, fontWeight: 700, color: C.black, marginBottom: 4 }}>{item.t}</h3>
              <P style={{ margin: 0, fontSize: 14 }}>{item.d}</P>
            </div>
          ))}

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>Responsible borrowing for tech companies</H2>
          <P>Debt can be one of the smartest tools in a tech founder's capital structure. It can also be one of the most dangerous. Unlike equity, debt doesn't care if your product launch is delayed, if your biggest customer churns, or if the funding market turns cold. The repayment schedule stays the same regardless.</P>
          <div style={{ padding: "18px 20px", background: C.cream, borderLeft: `3px solid ${C.black}`, borderRadius: "0 8px 8px 0", marginBottom: 20 }}>
            <P style={{ margin: 0, fontSize: 14, color: C.black, fontWeight: 500, lineHeight: 1.7 }}>Before taking on any debt, model the worst case. What if revenue growth stalls for 6 months? What if your next equity round is delayed by a year? What if a major customer leaves? Can you still service the debt in those scenarios? If the answer is no, the debt is too large or the terms are too aggressive for your current stage.</P>
          </div>
          {[
            "Can your business service this debt from existing revenue, without depending on future growth?",
            "If your next equity round is delayed or doesn't happen, do you have a Plan B for repayment?",
            "Are you borrowing for productive, measurable purposes, or to cover operational losses?",
            "Have you modelled the covenant scenarios and are you confident you won't breach them?",
            "Do you fully understand the warrant terms, acceleration clauses, and personal guarantees (if any)?",
          ].map((q, i) => (
            <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 8 }}>
              <span style={{ fontFamily: "Poppins, sans-serif", fontSize: 13, color: C.orange, fontWeight: 800, minWidth: 20 }}>{i + 1}.</span>
              <P style={{ margin: 0, fontSize: 14 }}>{q}</P>
            </div>
          ))}
          <P>Read our <a href="https://quickfund.sg/responsible-business-promise" style={{ color: C.orange, textDecoration: "none", fontWeight: 500 }}>Responsible Business Promise</a> for more on how we think about responsible financing.</P>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>When to talk to QuickFund</H2>
          <P>If you're a tech company in Singapore, whether you're post-Series A looking for venture debt, a bootstrapped SaaS company exploring revenue-based financing, or a growing B2B business that needs working capital, we can help you find the right facility.</P>
          <P>We are not owned by any lender. No lender has equity in our business. We work across banks, venture debt funds, fintech platforms, and alternative lenders. We've helped companies structure venture debt post-raise, set up revenue-based facilities against MRR, and find working capital for companies that banks turned away. When we recommend a facility, it's because we believe it's the right one for your situation.</P>
          <P>The tech financing landscape moves fast. New lenders enter the market, existing ones change their criteria, and products evolve. We keep track of all of it so you don't have to. Our job is to make sure you're seeing the full range of options, not just whatever one lender puts in front of you.</P>

          <Callout type="dark">
            <P style={{ margin: 0, fontSize: 14, color: C.black, fontWeight: 500, lineHeight: 1.7 }}>If you've been told you don't qualify for debt because your company isn't profitable yet, that may not be accurate. Many lenders in the tech space underwrite based on revenue trajectory, equity backing, and business metrics rather than bottom-line profitability. Talk to us before you assume debt isn't an option.</P>
          </Callout>

          {/* CTAs */}
          <div style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 12 }}>
            <a onClick={() => setShowGate(true)} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 22px", background: C.orange, borderRadius: 10, cursor: "pointer", textDecoration: "none" }}>
              <div><div style={{ fontFamily: "Poppins, sans-serif", fontSize: 14, fontWeight: 700, color: "#fff" }}>Download the full guide</div><div style={{ fontFamily: "Figtree, sans-serif", fontSize: 12, color: "rgba(255,255,255,0.7)", marginTop: 2 }}>Venture debt, RBF, equity kickers, and a preparation checklist</div></div>
              <Bolt size={20} color="#fff" style={{ flexShrink: 0 }} />
            </a>
            <a href="https://quickfund.sg/#tools" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 22px", background: "#fff", borderRadius: 10, border: `1.5px solid ${C.greyLight}`, textDecoration: "none" }}>
              <div><div style={{ fontFamily: "Poppins, sans-serif", fontSize: 14, fontWeight: 700, color: C.black }}>Try the AI Loan Check-Up</div><div style={{ fontFamily: "Figtree, sans-serif", fontSize: 12, color: C.grey, marginTop: 2 }}>10 questions. Free. See what you qualify for.</div></div>
              <Bolt size={20} style={{ flexShrink: 0 }} />
            </a>
            <a href="https://wa.me/6580576702?text=Hi%20QuickFund%2C%20I%20have%20a%20question%20about%20tech%20company%20financing" target="_blank" rel="noopener" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 22px", background: C.black, borderRadius: 10, textDecoration: "none" }}>
              <div><div style={{ fontFamily: "Poppins, sans-serif", fontSize: 14, fontWeight: 700, color: "#fff" }}>Talk to our team</div><div style={{ fontFamily: "Figtree, sans-serif", fontSize: 12, color: "rgba(255,255,255,0.5)", marginTop: 2 }}>No forms. Just WhatsApp.</div></div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366" style={{ flexShrink: 0 }}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </a>
          </div>
        </Section>
      </article>

      {/* Other guides */}
      <section style={{ padding: "40px 20px", background: C.cream }}>
        <Section>
          <div style={{ fontFamily: "Poppins, sans-serif", fontSize: 10, fontWeight: 800, color: C.orange, letterSpacing: "2px", textTransform: "uppercase", marginBottom: 10 }}>More Guides</div>
          <h2 style={{ fontFamily: "Poppins, sans-serif", fontSize: 20, fontWeight: 800, color: C.black, marginBottom: 16 }}>Explore other sectors</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {["Property-Backed Loans", "Doctors and Dentists", "Trading Companies", "Startups", "E-commerce", "Software", "F&B", "Construction", "Logistics", "Professional Services", "Retail"].map((s, i) => (
              <a key={i} href={`https://quickfund.sg/guide/${GUIDE_SLUGS[s]}`} style={{ padding: "7px 14px", borderRadius: 16, fontFamily: "Figtree, sans-serif", fontSize: 12, fontWeight: 500, color: C.black, background: "#fff", textDecoration: "none", border: `1px solid ${C.greyLight}` }}>{s}</a>
            ))}
          </div>
        </Section>
      </section>

      {/* Sitemap */}
      <section style={{ padding: "32px 20px 20px", background: C.black }}>
        <Section>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24 }} className="qf-guide-toc">
            <div>
              <div style={{ fontFamily: "Poppins, sans-serif", fontSize: 10, fontWeight: 800, color: C.orange, letterSpacing: "2px", textTransform: "uppercase", marginBottom: 10 }}>QuickFund</div>
              {["Home", "AI Tools", "Partners", "FAQ", "Responsible Business Promise"].map(l => (
                <a key={l} href={`https://quickfund.sg/${l === "Home" ? "" : l === "AI Tools" ? "#tools" : l === "FAQ" ? "#faq" : l.toLowerCase().replace(/ /g, "-").replace("&", "-and-")}`} style={{ display: "block", fontFamily: "Figtree, sans-serif", fontSize: 12, color: "rgba(255,255,255,0.4)", textDecoration: "none", marginBottom: 6 }}>{l}</a>
              ))}
            </div>
            <div>
              <div style={{ fontFamily: "Poppins, sans-serif", fontSize: 10, fontWeight: 800, color: C.orange, letterSpacing: "2px", textTransform: "uppercase", marginBottom: 10 }}>Guides</div>
              {["Property-Backed Loans", "Doctors and Dentists", "Trading Companies", "Tech Companies", "Startups", "E-commerce", "Software", "F&B", "Construction", "Logistics", "Professional Services", "Retail"].map(l => (
                <a key={l} href={`https://quickfund.sg/guide/${GUIDE_SLUGS[l]}`} style={{ display: "block", fontFamily: "Figtree, sans-serif", fontSize: 12, color: "rgba(255,255,255,0.4)", textDecoration: "none", marginBottom: 6 }}>{l}</a>
              ))}
            </div>
            <div>
              <div style={{ fontFamily: "Poppins, sans-serif", fontSize: 10, fontWeight: 800, color: C.orange, letterSpacing: "2px", textTransform: "uppercase", marginBottom: 10 }}>Contact</div>
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
            <p style={{ fontFamily: "Poppins, sans-serif", fontSize: 10, fontWeight: 800, color: "rgba(255,255,255,0.4)", letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: 8 }}>Important Disclaimer</p>
            <p style={{ fontFamily: "Figtree, sans-serif", fontSize: 11, color: "rgba(255,255,255,0.35)", lineHeight: 1.7, margin: 0 }}>
              This guide is published by QuickFund Pte Ltd for general informational purposes only. Nothing in this guide constitutes financial, legal, investment, tax, or professional advice, and nothing should be construed as a recommendation or solicitation to enter into any loan, mortgage, or financial arrangement. QuickFund Pte Ltd is not a licensed financial adviser and does not provide regulated financial, legal, tax or investment advice.
            </p>
            <p style={{ fontFamily: "Figtree, sans-serif", fontSize: 11, color: "rgba(255,255,255,0.35)", lineHeight: 1.7, margin: "8px 0 0" }}>
              All borrowing carries real and significant risks. Venture debt facilities may include warrant coverage or equity kickers that result in equity dilution. Loan agreements may contain financial covenants, acceleration clauses, and personal guarantees. Secured loans may result in the loss of pledged assets, including property, vehicles, equipment, or shares, in the event of default. Revenue-based financing costs depend on repayment speed and may result in higher effective interest rates than anticipated. Business conditions, revenue trajectories, and market conditions can change.
            </p>
            <p style={{ fontFamily: "Figtree, sans-serif", fontSize: 11, color: "rgba(255,255,255,0.35)", lineHeight: 1.7, margin: "8px 0 0" }}>
              You are solely responsible for your borrowing decisions, contractual obligations, and the consequences of default. All loan terms, rates, and conditions are determined by individual lenders and are subject to their own assessment, approval, and due diligence. QuickFund makes no guarantees regarding loan approvals, terms, or outcomes. Seek independent legal and financial advice before entering into any loan or guarantee arrangement.
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <Bolt size={10} color="rgba(255,255,255,0.3)" /><span style={{ fontFamily: "Poppins, sans-serif", fontSize: 10, fontWeight: 800, color: "rgba(255,255,255,0.3)", textTransform: "uppercase" }}>QuickFund</span>
              
            </div>
            <a href="https://quickfund.sg/responsible-business-promise" style={{ fontFamily: "Figtree, sans-serif", fontSize: 10, color: "rgba(255,255,255,0.15)", textDecoration: "none" }}>Responsible Business Promise</a>
          </div>
        </Section>
      </footer>
    </div>
  );
}


module.exports = { TechCompaniesGuide };
