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

function FloatingWA() {
  return (
    <a href="https://wa.me/6580576702?text=Hi%20QuickFund%2C%20I%20have%20a%20question%20about%20SaaS%20financing" target="_blank" rel="noopener"
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
        <p style={{ fontFamily: "Figtree, sans-serif", fontSize: 13, color: C.grey }}>Your guide is coming via {method === "whatsapp" ? "WhatsApp" : "email"} — our team sends it personally, usually within one working day.</p>
        <button onClick={onClose} style={{ marginTop: 16, padding: "10px 24px", background: C.black, color: "#fff", border: "none", borderRadius: 7, fontFamily: "Poppins, sans-serif", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>Got it</button>
      </div>
    </div>);
  return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, zIndex: 200, background: "rgba(0,0,0,0.5)", backdropFilter: "blur(8px)", display: "flex", alignItems: "center", justifyContent: "center", padding: 20, animation: "fadeIn 0.2s ease" }}>
      <div onClick={e => e.stopPropagation()} style={{ background: C.offwhite, borderRadius: 14, padding: "28px 26px", maxWidth: 400, width: "100%", position: "relative" }}>
        <button onClick={onClose} style={{ position: "absolute", top: 12, right: 12, background: "none", border: "none", fontSize: 18, color: C.grey, cursor: "pointer" }}>x</button>
        <div style={{ fontFamily: "Poppins, sans-serif", fontSize: 10, fontWeight: 800, color: C.orange, letterSpacing: "2px", textTransform: "uppercase", marginBottom: 8 }}>Full Guide PDF</div>
        <h3 style={{ fontFamily: "Poppins, sans-serif", fontSize: 20, fontWeight: 800, color: C.black, lineHeight: 1.15, marginBottom: 8 }}>Software &amp; SaaS<br />Financing Guide</h3>
        <p style={{ fontFamily: "Figtree, sans-serif", fontSize: 13, color: C.grey, lineHeight: 1.5, marginBottom: 14 }}>
          Includes MRR/ARR-based underwriting, venture debt structures, revenue-based financing, and a preparation checklist. Everything on this page plus the detail you need to actually move forward.
        </p>
        <div style={{ display: "flex", background: C.cream, borderRadius: 8, padding: 3, marginBottom: 12 }}>
          {["whatsapp", "email"].map(m => (<button key={m} onClick={() => setMethod(m)} style={{ flex: 1, padding: "7px 0", borderRadius: 6, border: "none", cursor: "pointer", fontFamily: "Poppins, sans-serif", fontSize: 11, fontWeight: 700, background: method === m ? "#fff" : "transparent", color: method === m ? C.black : C.grey }}>{m === "whatsapp" ? "WhatsApp" : "Email"}</button>))}
        </div>
        {method === "whatsapp" ? (<div style={{ display: "flex", gap: 6 }}><span style={{ padding: "10px", background: C.cream, borderRadius: 7, border: `1.5px solid ${C.greyLight}`, fontFamily: "Figtree, sans-serif", fontSize: 13, color: C.grey }}>+65</span><input value={wa} onChange={e => setWa(e.target.value.replace(/\D/g, ""))} placeholder="9123 4567" maxLength={8} className="qf-input" style={{ flex: 1 }} /></div>) : (<input value={email} onChange={e => setEmail(e.target.value)} placeholder="you@company.com" className="qf-input" style={{ width: "100%" }} />)}
        <button onClick={() => { fetch("/api/lead", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ guide: "Software", contact: { method, wa, email } }) }).catch(() => {}); setDone(true); }} disabled={!ok} style={{ width: "100%", padding: "12px", marginTop: 12, background: !ok ? C.greyLight : C.orange, border: "none", borderRadius: 7, fontFamily: "Poppins, sans-serif", fontSize: 13, fontWeight: 700, color: "#fff", cursor: !ok ? "default" : "pointer" }}>Send Me The Full Guide</button><p style={{ fontFamily: "Figtree, sans-serif", fontSize: 10, color: C.greyLight, marginTop: 8, textAlign: "center" }}>By submitting you consent to being contacted about this guide. <a href="/privacy-policy" style={{ color: C.grey }}>Privacy Policy</a>.</p>
      </div>
    </div>);
}

function SoftwareGuide() {
  const [showGate, setShowGate] = useState(false);
  const Section = ({ children, style = {} }) => (<div style={{ maxWidth: 720, margin: "0 auto", padding: "0 20px", ...style }}>{children}</div>);
  const H2 = ({ children }) => (<h2 style={{ fontFamily: "Poppins, sans-serif", fontSize: 24, fontWeight: 800, color: C.black, lineHeight: 1.1, letterSpacing:"-0.35px", marginBottom: 14 }}>{children}</h2>);
  const P = ({ children, style = {} }) => (<p style={{ fontFamily: "Figtree, sans-serif", fontSize: 15, color: "#555", lineHeight: 1.75, marginBottom: 16, ...style }}>{children}</p>);
  const Callout = ({ children, type = "orange" }) => (<div style={{ padding: "16px 20px", background: type === "orange" ? `${C.orange}08` : C.cream, borderLeft: `3px solid ${type === "orange" ? C.orange : C.black}`, borderRadius: "0 8px 8px 0", marginBottom: 20 }}>{children}</div>);

  return (
    <div style={{ background: C.offwhite, minHeight: "100vh" }}>
      <style>{`@keyframes fadeIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}*{box-sizing:border-box;margin:0;padding:0}::selection{background:${C.orange}25}.qf-input{padding:10px 12px;border-radius:7px;border:1.5px solid ${C.greyLight};background:${C.offwhite};font-family:Figtree,sans-serif;font-size:13px;color:${C.black}}.qf-input:focus{outline:none;border-color:${C.orange}}@media(max-width:768px){.qf-guide-hero-h1{font-size:32px!important}.qf-guide-toc{grid-template-columns:1fr!important}.qf-guide-nav-btns{gap:8px!important}.qf-guide-nav-btns a{font-size:10px!important;padding:6px 10px!important}}`}</style>
      <FloatingWA />
      {showGate && <DownloadGate onClose={() => setShowGate(false)} />}

      {/* Nav */}
      <nav style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(250,248,245,0.97)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(0,0,0,0.04)", padding: "0 20px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 54 }}>
          <a href="/" style={{ display: "flex", alignItems: "center", gap: 7, textDecoration: "none" }}><Bolt size={14} /><span style={{ fontFamily: "Poppins, sans-serif", fontSize: 14, fontWeight: 800, color: C.black, textTransform: "uppercase" }}>QuickFund</span><span style={{ fontFamily: "Figtree, sans-serif", fontSize: 11, color: C.greyLight, marginLeft: 4 }}>Sector Guide</span></a>
          <div style={{ display: "flex", gap: 12, alignItems: "center" }} className="qf-guide-nav-btns">
            <a onClick={() => setShowGate(true)} style={{ fontFamily: "Poppins, sans-serif", fontSize: 11, fontWeight: 700, color: C.orange, cursor: "pointer" }}>Download PDF</a>
            <a href="https://wa.me/6580576702?text=Hi%20QuickFund%2C%20question%20about%20SaaS%20financing" target="_blank" rel="noopener" style={{ fontFamily: "Poppins, sans-serif", fontSize: 11, fontWeight: 700, color: "#fff", background: C.black, padding: "7px 14px", borderRadius: 6, textDecoration: "none" }}>WhatsApp</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ padding: "60px 20px 40px" }}>
        <Section>
          <div style={{ fontFamily: "Poppins, sans-serif", fontSize: 10, fontWeight: 800, color: C.orange, letterSpacing: "2px", textTransform: "uppercase", marginBottom: 12 }}>Financing Guide</div>
          <h1 className="qf-guide-hero-h1" style={{ fontFamily: "Poppins, sans-serif", fontSize: 42, fontWeight: 800, color: C.black, lineHeight: 0.95, letterSpacing:"-0.8px", marginBottom: 16 }}>
            Financing for<br />Software &amp; SaaS<br />Companies<br /><span style={{ color: C.orange }}>in Singapore</span>
          </h1>
          <P style={{ fontSize: 16, maxWidth: 520, color: C.grey }}>
            Recurring revenue is the most financeable asset a company can have. If your customers pay you every month, lenders want to lend to you. Here's how to use that to your advantage.
          </P>
          <div style={{ display: "flex", gap: 10, marginTop: 20, flexWrap: "wrap" }}>
            <a onClick={() => setShowGate(true)} style={{ fontFamily: "Poppins, sans-serif", fontSize: 13, fontWeight: 700, color: "#fff", background: C.orange, padding: "12px 24px", borderRadius: 8, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 7 }}>Download Full Guide <Bolt size={12} color="#fff" /></a>
            <a href="/#tools" style={{ fontFamily: "Poppins, sans-serif", fontSize: 13, fontWeight: 700, color: C.black, padding: "12px 24px", borderRadius: 8, border: `1.5px solid ${C.greyLight}`, textDecoration: "none" }}>Try the AI Loan Check-Up</a>
          </div>
          <p style={{ fontFamily: "Figtree, sans-serif", fontSize: 11, color: C.greyLight, marginTop: 12 }}>8 min read. Last updated May 2026.</p>
        </Section>
      </section>

      {/* TOC */}
      <section style={{ padding: "0 20px 40px" }}>
        <Section>
          <div className="qf-guide-toc" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
            {[
              "Why SaaS is uniquely financeable",
              "How MRR/ARR-based underwriting works",
              "Venture debt for SaaS companies",
              "Revenue-based financing",
              "Working capital facilities",
              "Annual vs monthly billing and cash flow",
              "Bootstrapped vs VC-backed: different paths",
              "The metrics lenders care about",
              "Warrants, equity kickers, and PGs",
              "Common mistakes we see",
              "Responsible borrowing for SaaS",
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

          <H2>Why SaaS is uniquely financeable</H2>
          <P>SaaS businesses have a financial profile that lenders love. Recurring revenue is predictable. Contracts create visibility. Gross margins are high, typically 70 to 85%. Customers that are already paying are likely to keep paying. This combination of predictability, margin, and stickiness makes SaaS one of the most financeable business models that exists.</P>
          <P>Unlike a trading company where last month's revenue says little about next month, a SaaS company with S$200K in MRR has a strong base of revenue that will likely still be there in 30 days, minus churn. That predictability is exactly what lenders need to underwrite a loan. They can model the cash flows, stress-test for churn scenarios, and feel confident that the business can service debt.</P>
          <P>This means SaaS companies often have access to more financing options, and better terms, than businesses of similar size in other sectors. The market has matured rapidly. A decade ago, most lenders didn't know how to underwrite SaaS. Today, there are entire lending categories built around recurring revenue metrics.</P>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>How MRR/ARR-based underwriting works</H2>
          <P>Traditional lenders look at your balance sheet, your profitability, and your assets. SaaS-focused lenders look at your recurring revenue. The core question is: how much revenue will this company generate over the next 12 to 24 months, and how confident can we be in that number?</P>
          <P>The starting point is your MRR (monthly recurring revenue) or ARR (annual recurring revenue, which is simply MRR times 12). The lender then adjusts that number based on your churn rate, expansion revenue, and customer concentration. A company with S$200K MRR and 2% monthly churn is a very different risk from one with S$200K MRR and 8% monthly churn. The first company's revenue base is relatively stable. The second is losing nearly half its customer base every year and needs to sell aggressively just to stay flat.</P>
          <P>Most MRR/ARR-based lenders will advance between 3 and 8 times your monthly recurring revenue, depending on the quality of your metrics. Strong companies with low churn, high net revenue retention, and growing MRR can access the higher end of that range. Companies with higher churn, concentration risk, or flat growth will be at the lower end, or may not qualify at all.</P>

          <Callout>
            <P style={{ margin: 0, fontSize: 14, color: C.black, fontWeight: 500 }}>The definition of "recurring" matters. Lenders scrutinise what you count as MRR. Monthly subscriptions with auto-renewal are the gold standard. Annual contracts billed monthly are strong. Annual contracts billed upfront are good for cash flow but the lender may discount them in MRR calculations because the revenue has already been collected. Usage-based or consumption-based revenue is harder to classify as truly recurring and may be treated differently. Be precise about how you calculate MRR before you talk to lenders.</P>
          </Callout>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>Venture debt for SaaS companies</H2>
          <P>If your SaaS company has raised venture capital, venture debt is one of the most natural financing options. The typical structure is a term loan sized at 20 to 35% of your last equity round, with a 2 to 4 year tenor and an initial interest-only period of 6 to 12 months.</P>
          <P>For SaaS companies specifically, venture debt lenders underwrite based on a combination of your equity backing and your recurring revenue metrics. The equity round provides the initial comfort (credible investors have validated the business). The MRR/ARR data provides the ongoing evidence that the business can service the debt. The two together create a strong lending case.</P>
          <P>The strategic use case is runway extension. If your Series A gives you 18 months of runway, adding venture debt can push it to 22 to 24 months. Those extra months let you hit MRR milestones that improve your next-round valuation, which means less dilution when it matters most. For SaaS companies with clear growth trajectories, the math almost always works in favour of adding venture debt post-round.</P>
          <P>Most venture debt for SaaS companies comes with warrant coverage or some form of equity kicker. For a detailed breakdown of how warrants work and how to evaluate the true cost, see our <a href="/guide/tech-companies" style={{ color: C.orange, textDecoration: "none", fontWeight: 500 }}>Tech Companies guide</a>.</P>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>Revenue-based financing</H2>
          <P>Revenue-based financing (RBF) is where SaaS companies have a significant advantage over other business types. Because your revenue is recurring and measurable, RBF lenders can offer facilities specifically structured around your MRR.</P>
          <P>The mechanics: the lender advances a multiple of your MRR (typically 3 to 8x), and you repay as a fixed percentage of monthly revenue. If MRR grows, you repay faster. If it dips, repayments slow down. The total cost is expressed as a factor rate, commonly 1.15x to 1.4x of the advanced amount.</P>
          <P>RBF has a major advantage for SaaS founders: it doesn't require a prior equity round. If you're bootstrapped with S$150K in MRR and strong metrics, you can access S$450K to S$1.2M without giving up any equity or needing VC validation. For profitable, bootstrapped SaaS companies, this can be a highly efficient way to fund growth.</P>

          <Callout type="dark">
            <P style={{ margin: 0, fontSize: 14, color: C.black, fontWeight: 500, lineHeight: 1.7 }}>Compare the total cost carefully. A factor rate of 1.3x sounds moderate, but if you repay in 6 months the effective annualised rate is very high. If you repay in 18 months, it's more reasonable. The speed of repayment depends on your revenue level and the repayment percentage. Model the scenarios with your actual numbers before committing.</P>
          </Callout>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>Working capital facilities</H2>
          <P>Not every financing need is about growth. SaaS companies have operational expenses that need funding: engineering salaries (typically the biggest cost), cloud infrastructure, marketing spend, office rent, and sales team costs. Working capital facilities cover these when cash flow is tight or lumpy.</P>
          <P>For SaaS companies with at least 2 years of operating history and consistent revenue, revolving credit facilities are the most flexible option. You draw when needed, repay when cash comes in, and only pay interest on what's outstanding. Banks may offer these if your company is profitable or has strong enough metrics. Non-bank lenders and fintech platforms offer similar facilities with faster approvals but higher rates.</P>
          <P>A common situation: a SaaS company with strong annual contracts that are billed annually in advance. The cash comes in as a lump sum at the start of the contract period, but costs are spread across the year. If most contracts renew in Q1, the company is cash-rich in January but cash-tight by September. A working capital line smooths this out.</P>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>Annual vs monthly billing and cash flow</H2>
          <P>The choice between annual and monthly billing has a bigger impact on your financing needs than most founders realise.</P>
          <P>Annual billing with upfront payment is the dream scenario for cash flow. Your customer pays for 12 months on day one. You have the cash in hand and you deliver the service over time. This creates "negative working capital," meaning you have more cash than you need at any given moment. Companies with predominantly annual upfront billing often need less external financing because the business model itself generates working capital.</P>
          <P>Monthly billing is the opposite. Revenue comes in every month, but so do costs. There's no upfront cash buffer. Growth is more capital-intensive because each new customer only contributes one month of revenue at a time. If you're investing heavily in customer acquisition (sales team, marketing, onboarding), the payback period on that investment creates a cash flow gap that needs funding.</P>

          <Callout>
            <P style={{ margin: 0, fontSize: 14, color: C.black, fontWeight: 500 }}>Some SaaS companies offer discounts for annual upfront payment (e.g. 2 months free on an annual plan). This is effectively self-financing: you're trading 17% of revenue for 12 months of cash upfront. Before offering annual discounts, compare the cost of that discount against the cost of external financing. If RBF at a 1.2x factor rate costs less than 17%, external financing is cheaper than discounting for annual payment. Do the math.</P>
          </Callout>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>Bootstrapped vs VC-backed: different paths</H2>
          <P>If you're VC-backed, venture debt is the most obvious financing option. The equity round opens the door. Lenders use your investors as validation and your MRR as the underwriting basis. The process is well-established and there are multiple lenders competing for this business.</P>
          <P>If you're bootstrapped, the options are different but not narrower. Revenue-based financing is the primary tool. Because you haven't diluted, every dollar of growth stays in your pocket. RBF lets you accelerate growth without giving up equity. The cost is higher than venture debt (because there's no equity buffer for the lender to lean on), but the total cost of capital, including the dilution you've avoided, is often lower.</P>
          <P>Bootstrapped SaaS companies with strong metrics (above S$100K MRR, gross margins above 70%, low churn) are in an excellent position to access financing. You have proof of product-market fit, you have cash-generating customers, and you haven't given away any of the company. Multiple lenders actively seek this profile.</P>

          <Callout type="dark">
            <P style={{ margin: 0, fontSize: 14, color: C.black, fontWeight: 500, lineHeight: 1.7 }}>For bootstrapped founders, the first financing decision is often the hardest. You've built the business without external capital and the idea of taking on debt (or eventually equity) feels like a concession. It's not. If the growth ROI on deploying S$500K is higher than the cost of the financing, the financing is creating value. The question is whether the return justifies the cost and the risk, not whether self-funding is philosophically superior.</P>
          </Callout>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>The metrics lenders care about</H2>
          <P>SaaS lending is metrics-driven. Here are the numbers that lenders actually pull apart when they assess your company.</P>
          {[
            { t: "MRR / ARR", d: "The foundation. Your total monthly or annual recurring revenue from subscriptions. Lenders want this to be growing, stable at minimum. They'll look at the last 12 to 24 months of MRR data to see the trajectory and identify any concerning patterns." },
            { t: "Net revenue retention (NRR)", d: "This is the single most important metric after MRR. NRR measures whether your existing customers are spending more or less over time. An NRR above 100% means your customer base is expanding without you acquiring a single new customer. Above 110% is strong. Above 120% is exceptional. Below 90% is a concern, because it means you're losing ground even as you sell." },
            { t: "Gross churn and logo churn", d: "How much revenue are you losing each month from customers who cancel or downgrade? Monthly gross churn below 2% is good. Below 1% is excellent. Logo churn (the number of customers lost, regardless of size) matters too. Losing 5% of customers monthly but retaining the big ones is a different risk profile from losing 1% of customers who are all the same size." },
            { t: "Gross margin", d: "SaaS companies should have gross margins of 70 to 85%. If your margins are below 60%, lenders will scrutinise your cost structure. Hosting costs, customer support costs, and third-party software embedded in your product all affect margin. Higher margins mean more of each revenue dollar is available to service debt." },
            { t: "LTV/CAC ratio", d: "Lifetime value of a customer divided by the cost to acquire them. A ratio above 3x is the standard benchmark. This tells the lender that your growth spending is efficient: every dollar you spend on customer acquisition generates at least three dollars in customer lifetime value. Below 3x, growth spending starts to look less productive." },
            { t: "Burn rate and runway", d: "How much are you spending each month above what revenue covers, and how long can you sustain it? Lenders want at least 12 months of post-funding runway. If the loan only buys you 3 more months, the lender's risk of default is too high." },
            { t: "Customer concentration", d: "If one customer is 30% or more of your ARR, that's a concentration risk. If that customer churns, your ability to service debt drops significantly. Lenders prefer a diversified base where no single customer represents an outsized share of revenue." },
          ].map((item, i) => (
            <div key={i} style={{ marginBottom: 14 }}>
              <h3 style={{ fontFamily: "Poppins, sans-serif", fontSize: 15, fontWeight: 700, color: C.black, marginBottom: 4 }}>{item.t}</h3>
              <P style={{ margin: 0, fontSize: 14 }}>{item.d}</P>
            </div>
          ))}

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>Warrants, equity kickers, and PGs</H2>
          <P>Venture debt for SaaS typically comes with warrants or another form of equity kicker, giving the lender a small stake in your upside. Some revenue-based and working capital facilities have no equity component at all. The trade-off between interest cost and dilution is important to model, especially at lower valuations where the dilution from warrants is proportionally larger. For a detailed breakdown, see our <a href="/guide/tech-companies" style={{ color: C.orange, textDecoration: "none", fontWeight: 500 }}>Tech Companies guide</a>.</P>
          <P>Personal guarantees are common in SaaS lending, especially for earlier-stage companies. Lenders want the PG from someone with meaningful ownership and personal financial substance. If you're a VC-backed company, you'll likely need a board mandate before providing one. If you're bootstrapped and own 100% of the company, the PG decision is straightforward but the stakes are entirely yours. All PG terms are negotiable, including whether it's capped, shared, or falls away after milestones. For more detail, see our <a href="/guide/startups" style={{ color: C.orange, textDecoration: "none", fontWeight: 500 }}>Startups guide</a>.</P>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>Common mistakes we see</H2>
          {[
            { t: "Borrowing against projected MRR, not actual MRR", d: "If your MRR is S$100K today and you project S$300K in 12 months, lenders will underwrite on the S$100K. Some founders overcommit on debt assuming the growth will materialise. If it doesn't, you have a repayment obligation sized for a business three times larger than the one you actually have." },
            { t: "Not understanding what counts as recurring", d: "Implementation fees, one-time setup charges, professional services revenue: these are not recurring. If you've been lumping them into MRR, a lender's due diligence will catch it and your actual MRR will be lower than what you reported. Clean your MRR calculation before you approach lenders." },
            { t: "Ignoring the impact of churn on debt capacity", d: "A 3% monthly churn rate means you lose roughly 30% of your customer base annually. That's a treadmill. You need to acquire new customers constantly just to stay flat. Lenders see this and will either offer less capital, charge more, or decline. Address your churn before trying to leverage your MRR." },
            { t: "Over-indexing on growth at the expense of unit economics", d: "Growing MRR at 15% month-on-month looks incredible. But if your LTV/CAC ratio is below 1x, you're spending more to acquire each customer than they'll ever generate. Lenders are increasingly sophisticated about this. Fast growth with bad unit economics is not a lending case, it's a burning case." },
            { t: "Taking debt right before a churn event", d: "If you're about to lose a major customer, or if a large cohort of annual contracts is up for renewal with uncertain outcomes, the worst time to take on debt is right before that uncertainty resolves. Wait until you have clarity on retention. The facility terms you'll get with confirmed renewals will be materially better." },
          ].map((item, i) => (
            <div key={i} style={{ marginBottom: 14 }}>
              <h3 style={{ fontFamily: "Poppins, sans-serif", fontSize: 15, fontWeight: 700, color: C.black, marginBottom: 4 }}>{item.t}</h3>
              <P style={{ margin: 0, fontSize: 14 }}>{item.d}</P>
            </div>
          ))}

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>Responsible borrowing for SaaS</H2>
          <P>SaaS companies can feel invincible because of the recurring revenue model. Revenue is predictable. Customers keep paying. The metrics only go up. But churn is real, market conditions change, and enterprise customers can still cancel. Debt doesn't care about your NRR. It cares about repayment.</P>
          <div style={{ padding: "18px 20px", background: C.cream, borderLeft: `3px solid ${C.black}`, borderRadius: "0 8px 8px 0", marginBottom: 20 }}>
            <P style={{ margin: 0, fontSize: 14, color: C.black, fontWeight: 500, lineHeight: 1.7 }}>Before taking on debt, run a stress test. What if MRR drops 20% over the next 6 months? What if your top 3 customers churn simultaneously? What if your next fundraise is delayed by a year? Can you still service the debt? If the answer requires everything to go right, the facility is too large for your current stage.</P>
          </div>
          {[
            "Can your business service this debt from current MRR, not projected MRR?",
            "If churn doubles for 3 months, can you still make payments?",
            "Are you borrowing to fund productive growth spending with proven ROI?",
            "Do you understand the covenant triggers and what happens if you breach them?",
            "Have you modelled the total cost including warrants, interest, and fees?",
          ].map((q, i) => (
            <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 8 }}>
              <span style={{ fontFamily: "Poppins, sans-serif", fontSize: 13, color: C.orange, fontWeight: 800, minWidth: 20 }}>{i + 1}.</span>
              <P style={{ margin: 0, fontSize: 14 }}>{q}</P>
            </div>
          ))}
          <P>Read our <a href="/responsible-business-promise" style={{ color: C.orange, textDecoration: "none", fontWeight: 500 }}>Responsible Business Promise</a> for more on how we think about this.</P>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>When to talk to QuickFund</H2>
          <P>If you're running a SaaS company in Singapore, whether you're bootstrapped with strong MRR and wondering how to fund the next phase of growth, or VC-backed and looking for venture debt to extend your runway, we can help.</P>
          <P>We are not owned by any lender. No lender has equity in our business. We work across venture debt funds, revenue-based financing platforms, banks, and alternative lenders. We understand SaaS metrics and we speak the language. When we present your company to lenders, we frame it in the terms they care about: MRR trajectory, churn, NRR, margins, and unit economics. That framing matters. It's the difference between a generic loan application and a compelling credit case.</P>
          <P>The SaaS lending market is competitive and evolving. New lenders enter regularly, existing ones change their criteria, and the metrics threshold for approval shifts with market conditions. We keep track of who's lending, at what multiples, and on what terms, so you don't have to shop around blind.</P>

          <Callout type="dark">
            <P style={{ margin: 0, fontSize: 14, color: C.black, fontWeight: 500, lineHeight: 1.7 }}>If you've been told your SaaS company is too early for debt, or that you need to be profitable first, that may not be accurate. Many lenders in this space underwrite on MRR trajectory and quality, not bottom-line profitability. If you have at least S$50K to S$100K in MRR with reasonable churn, there are likely options available. Talk to us before you rule it out.</P>
          </Callout>

          {/* CTAs */}
          <div style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 12 }}>
            <a onClick={() => setShowGate(true)} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 22px", background: C.orange, borderRadius: 10, cursor: "pointer", textDecoration: "none" }}>
              <div><div style={{ fontFamily: "Poppins, sans-serif", fontSize: 14, fontWeight: 700, color: "#fff" }}>Download the full guide</div><div style={{ fontFamily: "Figtree, sans-serif", fontSize: 12, color: "rgba(255,255,255,0.7)", marginTop: 2 }}>MRR underwriting, venture debt, RBF, and a preparation checklist</div></div>
              <Bolt size={20} color="#fff" style={{ flexShrink: 0 }} />
            </a>
            <a href="/#tools" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 22px", background: "#fff", borderRadius: 10, border: `1.5px solid ${C.greyLight}`, textDecoration: "none" }}>
              <div><div style={{ fontFamily: "Poppins, sans-serif", fontSize: 14, fontWeight: 700, color: C.black }}>Try the AI Loan Check-Up</div><div style={{ fontFamily: "Figtree, sans-serif", fontSize: 12, color: C.grey, marginTop: 2 }}>10 questions. Free. See what you qualify for.</div></div>
              <Bolt size={20} style={{ flexShrink: 0 }} />
            </a>
            <a href="https://wa.me/6580576702?text=Hi%20QuickFund%2C%20I%20have%20a%20question%20about%20SaaS%20financing" target="_blank" rel="noopener" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 22px", background: C.black, borderRadius: 10, textDecoration: "none" }}>
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
            {["Property-Backed Loans", "Doctors and Dentists", "Trading Companies", "Tech Companies", "Startups", "E-commerce", "F&B", "Construction", "Logistics", "Professional Services", "Retail"].map((s, i) => (
              <a key={i} href={`/guide/${GUIDE_SLUGS[s]}`} style={{ padding: "7px 14px", borderRadius: 16, fontFamily: "Figtree, sans-serif", fontSize: 12, fontWeight: 500, color: C.black, background: "#fff", textDecoration: "none", border: `1px solid ${C.greyLight}` }}>{s}</a>
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
                <a key={l} href={`/${l === "Home" ? "" : l === "AI Tools" ? "#tools" : l === "FAQ" ? "#faq" : l.toLowerCase().replace(/ /g, "-").replace("&", "-and-")}`} style={{ display: "block", fontFamily: "Figtree, sans-serif", fontSize: 12, color: "rgba(255,255,255,0.4)", textDecoration: "none", marginBottom: 6 }}>{l}</a>
              ))}
            </div>
            <div>
              <div style={{ fontFamily: "Poppins, sans-serif", fontSize: 10, fontWeight: 800, color: C.orange, letterSpacing: "2px", textTransform: "uppercase", marginBottom: 10 }}>Guides</div>
              {["Property-Backed Loans", "Doctors and Dentists", "Trading Companies", "Tech Companies", "Startups", "E-commerce", "Software", "F&B", "Construction", "Logistics", "Professional Services", "Retail"].map(l => (
                <a key={l} href={`/guide/${GUIDE_SLUGS[l]}`} style={{ display: "block", fontFamily: "Figtree, sans-serif", fontSize: 12, color: "rgba(255,255,255,0.4)", textDecoration: "none", marginBottom: 6 }}>{l}</a>
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
              All borrowing carries real and significant risks. Venture debt facilities may include warrant coverage or equity kickers that result in equity dilution. Loan agreements may contain financial covenants, acceleration clauses, and personal guarantees. Revenue-based financing costs depend on repayment speed and may result in higher effective interest rates than anticipated. Secured loans may result in the loss of pledged assets, including property, vehicles, equipment, or shares, in the event of default. Business conditions, revenue trajectories, customer retention, and market conditions can change.
            </p>
            <p style={{ fontFamily: "Figtree, sans-serif", fontSize: 11, color: "rgba(255,255,255,0.35)", lineHeight: 1.7, margin: "8px 0 0" }}>
              You are solely responsible for your borrowing decisions, contractual obligations, and the consequences of default. All loan terms, rates, and conditions are determined by individual lenders and are subject to their own assessment, approval, and due diligence. QuickFund makes no guarantees regarding loan approvals, terms, or outcomes. Seek independent legal and financial advice before entering into any loan or guarantee arrangement.
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <Bolt size={10} color="rgba(255,255,255,0.3)" /><span style={{ fontFamily: "Poppins, sans-serif", fontSize: 10, fontWeight: 800, color: "rgba(255,255,255,0.3)", textTransform: "uppercase" }}>QuickFund</span>
              
            </div>
            <a href="/responsible-business-promise" style={{ fontFamily: "Figtree, sans-serif", fontSize: 10, color: "rgba(255,255,255,0.15)", textDecoration: "none" }}>Responsible Business Promise</a>
          </div>
        </Section>
      </footer>
    </div>
  );
}


export default SoftwareGuide;
