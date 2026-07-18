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
    <a href="https://wa.me/6580576702?text=Hi%20QuickFund%2C%20I%20have%20a%20question%20about%20startup%20financing" target="_blank" rel="noopener"
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
        <h3 style={{ fontFamily: "Poppins, sans-serif", fontSize: 20, fontWeight: 800, color: C.black, lineHeight: 1.15, marginBottom: 8 }}>Startup<br />Financing Guide</h3>
        <p style={{ fontFamily: "Figtree, sans-serif", fontSize: 13, color: C.grey, lineHeight: 1.5, marginBottom: 14 }}>
          Includes venture debt structures, revenue-based options, founder asset strategies, and a preparation checklist. Everything on this page plus the detail you need to actually move forward.
        </p>
        <div style={{ display: "flex", background: C.cream, borderRadius: 8, padding: 3, marginBottom: 12 }}>
          {["whatsapp", "email"].map(m => (<button key={m} onClick={() => setMethod(m)} style={{ flex: 1, padding: "7px 0", borderRadius: 6, border: "none", cursor: "pointer", fontFamily: "Poppins, sans-serif", fontSize: 11, fontWeight: 700, background: method === m ? "#fff" : "transparent", color: method === m ? C.black : C.grey }}>{m === "whatsapp" ? "WhatsApp" : "Email"}</button>))}
        </div>
        {method === "whatsapp" ? (<div style={{ display: "flex", gap: 6 }}><span style={{ padding: "10px", background: C.cream, borderRadius: 7, border: `1.5px solid ${C.greyLight}`, fontFamily: "Figtree, sans-serif", fontSize: 13, color: C.grey }}>+65</span><input value={wa} onChange={e => setWa(e.target.value.replace(/\D/g, ""))} placeholder="9123 4567" maxLength={8} className="qf-input" style={{ flex: 1 }} /></div>) : (<input value={email} onChange={e => setEmail(e.target.value)} placeholder="you@company.com" className="qf-input" style={{ width: "100%" }} />)}
        <button onClick={() => { fetch("/api/lead", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ guide: "Startups", contact: { method, wa, email } }) }).catch(() => {}); setDone(true); }} disabled={!ok} style={{ width: "100%", padding: "12px", marginTop: 12, background: !ok ? C.greyLight : C.orange, border: "none", borderRadius: 7, fontFamily: "Poppins, sans-serif", fontSize: 13, fontWeight: 700, color: "#fff", cursor: !ok ? "default" : "pointer" }}>Send Me The Full Guide</button><p style={{ fontFamily: "Figtree, sans-serif", fontSize: 10, color: C.greyLight, marginTop: 8, textAlign: "center" }}>By submitting you consent to being contacted about this guide. <a href="/privacy-policy" style={{ color: C.grey }}>Privacy Policy</a>.</p>
      </div>
    </div>);
}

function StartupsGuide() {
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
            <a href="https://wa.me/6580576702?text=Hi%20QuickFund%2C%20question%20about%20startup%20financing" target="_blank" rel="noopener" style={{ fontFamily: "Poppins, sans-serif", fontSize: 11, fontWeight: 700, color: "#fff", background: C.black, padding: "7px 14px", borderRadius: 6, textDecoration: "none" }}>WhatsApp</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ padding: "60px 20px 40px" }}>
        <Section>
          <div style={{ fontFamily: "Poppins, sans-serif", fontSize: 10, fontWeight: 800, color: C.orange, letterSpacing: "2px", textTransform: "uppercase", marginBottom: 12 }}>Financing Guide</div>
          <h1 className="qf-guide-hero-h1" style={{ fontFamily: "Poppins, sans-serif", fontSize: 42, fontWeight: 800, color: C.black, lineHeight: 0.95, letterSpacing:"-0.8px", marginBottom: 16 }}>
            Financing for<br />Startups<br /><span style={{ color: C.orange }}>in Singapore</span>
          </h1>
          <P style={{ fontSize: 16, maxWidth: 520, color: C.grey }}>
            You're burning cash, building something, and equity is expensive. Debt can help, but only if you use the right type at the right time. Here's what's actually available to startups, and where the traps are.
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
              "Why startup financing is different",
              "The real options at each stage",
              "Why your bank probably said no",
              "Venture debt after an equity round",
              "Revenue-based financing (if you have revenue)",
              "Working capital to bridge between rounds",
              "Using founder property as collateral",
              "Car refinancing for founders",
              "If your startup makes or sells products",
              "Equity vs debt: the dilution question",
              "Warrants, equity kickers, and the cost of debt",
              "Personal guarantees for startup founders",
              "What lenders actually look at",
              "Common mistakes that kill startups",
              "Responsible borrowing for startups",
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

          <H2>Why startup financing is different</H2>
          <P>Most financing products are built for established businesses with revenue, profits, and assets. Startups have none of that, or not enough of it. You might have a product in market but no profit. You might have users but no revenue. You might have revenue but it's growing so fast that last year's financial statements don't represent what the business looks like today.</P>
          <P>Traditional banks look at your last two to three years of financials and underwrite based on historical performance. For a startup, historical performance is almost irrelevant. The whole point of the business is that it's going somewhere different from where it's been. That disconnect between how banks assess risk and how startups actually work is why so many founders assume debt isn't an option.</P>
          <P>It often is. But the products available to you depend almost entirely on where you are in your journey. A pre-revenue startup with a seed round has very different options from a Series B company doing S$2M in ARR. The mistake is treating "startup financing" as one category. It's several, and the right answer changes as you grow.</P>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>The real options at each stage</H2>
          <P>Here's a realistic view of what's available at each stage. Not what's theoretically possible, but what lenders will actually consider.</P>
          {[
            { t: "Pre-revenue, pre-equity", d: "Almost nothing from institutional lenders. No revenue means no ability to service debt. No equity raise means no external validation. Your options are limited to personal assets: if you or your co-founders own property or cars, you can borrow against those. That's it. If someone offers you a business loan at this stage without any security, scrutinise the terms very carefully." },
            { t: "Post-seed or post-angel", d: "You've raised a small equity round. Venture debt becomes possible, typically sized at 20 to 35% of your last round. If you raised S$1M in seed, you might access S$200K to S$350K in venture debt. The lender is underwriting based on your investors as much as your business. Working capital bridging facilities may also be available from non-bank lenders, usually at higher rates." },
            { t: "Post-Series A with revenue", d: "This is where options open up significantly. Venture debt is more accessible and larger. Revenue-based financing becomes viable if you have recurring or predictable revenue. Invoice financing works if you're selling B2B and have receivables. Working capital facilities from fintech lenders are available. You're still not a bank's ideal customer, but you have enough substance for the alternative lending market." },
            { t: "Post-Series B and beyond", d: "You're a real business with real revenue. Venture debt at scale, revenue-based financing, bank working capital lines, invoice financing, and more. At this stage, the question isn't whether you can get debt, it's which type is optimal and what the right structure is. You have enough leverage to negotiate terms." },
          ].map((item, i) => (
            <div key={i} style={{ marginBottom: 12, padding: "14px 16px", background: "#fff", borderRadius: 8, border: `1px solid ${C.greyLight}` }}>
              <h3 style={{ fontFamily: "Poppins, sans-serif", fontSize: 14, fontWeight: 700, color: C.black, marginBottom: 4 }}>{item.t}</h3>
              <P style={{ margin: 0, fontSize: 13 }}>{item.d}</P>
            </div>
          ))}

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>Why your bank probably said no</H2>
          <P>Most founders start at their bank. It makes sense. You already have a relationship, you have a business account, and banks are where people go for loans. The problem is that banks underwrite startups the same way they underwrite any other business: they want 2 to 3 years of audited financials, consistent profitability, and hard assets on the balance sheet. Most startups have none of that.</P>
          <P>Banks are also constrained by their own risk frameworks. A startup with S$2M in ARR but negative EBITDA is, to a bank's credit model, a loss-making company. It doesn't matter that revenue is tripling year on year. The model sees losses and flags the application. The relationship manager may want to help, but the credit committee says no.</P>
          <P>This doesn't mean banks are useless for startups. If you have hard security (property, fixed deposits, or a strong personal balance sheet), some banks will lend against that security regardless of the company's stage. And once you're post-Series B with real revenue and a path to profitability, banks start to become viable for working capital and trade facilities. But for most early-stage startups, the bank is not going to be where your debt comes from. The alternative lending market, venture debt funds, fintech platforms, finance companies, and specialised lenders, is where the options are.</P>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>Venture debt after an equity round</H2>
          <P>Venture debt is the most well-known form of startup financing. It works like this: you raise an equity round from VCs or institutional investors, then take on a debt facility sized at 20 to 35% of the amount raised. The lender uses the equity round as a signal. If credible investors put money in, the company is worth lending to.</P>
          <P>The typical structure is a term loan with a 2 to 4 year maturity. Most venture debt facilities include an interest-only period at the beginning, usually 6 to 12 months, before principal repayments kick in. Interest rates are higher than traditional bank lending because the risk is higher. These are companies that may not be profitable and whose primary "collateral" is the business itself.</P>
          <P>The strategic value of venture debt is runway extension. If your Series A gives you 18 months of runway, adding venture debt can push that to 22 to 24 months. Those extra months can be the difference between raising your next round from a position of strength (milestones hit, metrics strong) versus a position of desperation (running out of cash, forced to take whatever terms are on offer).</P>

          <Callout>
            <P style={{ margin: 0, fontSize: 14, color: C.black, fontWeight: 500 }}>Venture debt is not a substitute for equity. It's a complement. If your business isn't fundable by equity investors, venture debt lenders won't want to fund it either. And if you're taking on venture debt because you can't raise your next round, you're adding a repayment obligation to a business that's already under pressure. That rarely ends well.</P>
          </Callout>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>Revenue-based financing (if you have revenue)</H2>
          <P>If your startup generates revenue, even modest revenue, revenue-based financing (RBF) is an option worth considering. RBF lenders advance you a multiple of your monthly revenue, typically 3 to 8 times MRR, and you repay as a fixed percentage of revenue each month. When revenue is up, you repay more. When it dips, you repay less.</P>
          <P>For startups, RBF has a significant advantage over venture debt: it doesn't require a prior equity round. If you're bootstrapped with S$100K in MRR, you can potentially access S$300K to S$800K without giving up any equity or needing VC validation. The underwriting is based on your revenue metrics, not your cap table.</P>
          <P>The cost is usually expressed as a factor rate rather than an interest rate. A factor rate of 1.2x on a S$500K advance means you repay S$600K total. The speed of repayment determines the effective annualised cost, so if you repay faster, the annualised rate is higher but the absolute cost stays the same. Model this carefully before you commit. And make sure you understand whether the factor rate is fixed or whether there's a time cap or minimum repayment period.</P>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>Working capital to bridge between rounds</H2>
          <P>One of the most common situations we see: a startup has raised a round, deployed the capital, and is 3 to 6 months away from the next raise. Cash is getting tight. The metrics are trending well but the next round isn't closed yet. The company needs bridging capital to keep operating.</P>
          <P>Working capital facilities from non-bank lenders can fill this gap. These are typically short-term facilities (6 to 12 months) secured by some combination of company assets, personal guarantees, and sometimes a charge over the company's shares. They're faster to arrange than venture debt and don't require the same level of due diligence.</P>
          <P>The risk is real: if the next round doesn't materialise, you've added a repayment obligation to a business that's already cash-constrained. Working capital bridging should only be used when you have strong visibility on the next funding event, not when you're hoping something will come together. Hope is not a financing strategy.</P>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>Using founder property as collateral</H2>
          <P>If you or your co-founders own residential or commercial property in Singapore, that equity can be one of the most powerful financing tools available to your startup. Property-backed facilities offer materially better terms than unsecured startup lending: lower rates, higher quantum, longer repayment periods.</P>
          <P>The structure is straightforward. A founder pledges personal property as security, and the company gets a facility backed by it. The property can be a residential home, an investment property, or commercial real estate. The lender assesses the property value, applies an LTV ratio (typically 60 to 80%), and extends a facility up to that amount.</P>

          <Callout type="dark">
            <P style={{ margin: 0, fontSize: 14, color: C.black, fontWeight: 500, lineHeight: 1.7 }}>This is worth stating plainly: if you pledge your home and your startup fails, you can lose your home. The property is the security for the loan, and the lender will exercise their rights if you default. Many founders underestimate this risk because they believe so strongly in their business. Conviction is important, but it doesn't change the terms of a mortgage. Think carefully, involve your family in the decision, and only proceed if you can genuinely absorb the downside. For more detail, read our <a href="/guide/property-backed-loans" style={{ color: C.orange, textDecoration: "none", fontWeight: 600 }}>Property-Backed Loans guide</a>.</P>
          </Callout>

          <P>That said, for founders who own property and have equity they're willing to put at risk, this is often the most cost-effective way to fund a startup, especially in the early stages when no other institutional debt is available. The interest rates on property-backed facilities are typically a fraction of what unsecured startup lending costs.</P>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>Car refinancing for founders</H2>
          <P>This one surprises people, but it's a legitimate and sometimes useful option. If you own a car in Singapore, and given COE premiums most cars here carry significant residual value, you can refinance it to unlock cash for your business.</P>
          <P>Car refinancing works like a property-backed loan but on a smaller scale. The lender assesses the vehicle's current market value, applies an LTV ratio, and extends a facility against it. The amounts are obviously smaller than property-backed lending, typically S$30K to S$150K depending on the vehicle, but the process is fast and the capital is unrestricted.</P>
          <P>This is most useful as a short-term bridge or to supplement other financing. It's not going to fund a Series A runway, but it can cover a few months of operating expenses, bridge a gap before a larger facility comes through, or provide emergency working capital when you need it fast. The approval process is typically a few days, not weeks.</P>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>If your startup makes or sells products</H2>
          <P>Not every startup is a SaaS company. If you manufacture, import, or sell physical products, you have access to a different set of financing tools that pure software startups don't. These are well-established products that lenders understand, and they're often more accessible than venture debt because the underlying collateral is tangible.</P>
          {[
            { t: "Inventory financing", d: "If you carry stock, lenders can advance against your inventory. The advance rate depends on the type of goods (finished goods are easier than raw materials, branded products are easier than generic). This is particularly useful for startups with seasonal demand or large restocking requirements." },
            { t: "Trade finance", d: "If you're importing goods from overseas suppliers, letters of credit and trust receipts can fund the purchase without requiring you to pay upfront from your own cash. The lender guarantees payment to your supplier, and you repay once the goods are sold. This is one of the oldest and most proven forms of commercial finance." },
            { t: "Purchase order financing", d: "If you have confirmed orders from creditworthy buyers but don't have the cash to fulfil them, PO financing advances the funds to buy the materials or stock you need to deliver. The lender looks at the buyer's creditworthiness, not yours. This is powerful for product startups that have landed a big retail or corporate customer but can't fund the order." },
            { t: "Invoice financing", d: "Once you've delivered the goods and issued an invoice, you can finance that receivable instead of waiting 30 to 90 days for payment. The lender advances 80 to 90% of the invoice value upfront. If your buyers are reputable corporates, the terms are typically very favourable." },
          ].map((item, i) => (
            <div key={i} style={{ marginBottom: 12, padding: "14px 16px", background: "#fff", borderRadius: 8, border: `1px solid ${C.greyLight}` }}>
              <h3 style={{ fontFamily: "Poppins, sans-serif", fontSize: 14, fontWeight: 700, color: C.black, marginBottom: 4 }}>{item.t}</h3>
              <P style={{ margin: 0, fontSize: 13 }}>{item.d}</P>
            </div>
          ))}
          <P>For more on trade finance structures, LCs, and trust receipts, read our <a href="/guide/trading-companies" style={{ color: C.orange, textDecoration: "none", fontWeight: 500 }}>Trading Companies guide</a>. If your startup involves physical goods, don't assume you need venture debt or equity to fund growth. The trade and inventory financing ecosystem is deep, and lenders in that space care about the goods and the buyers, not your burn rate or your cap table.</P>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>Equity vs debt: the dilution question</H2>
          <P>Every founder thinks about dilution. Every round of equity you raise shrinks your ownership. Debt is attractive precisely because it doesn't dilute. But that framing, equity dilutes and debt doesn't, oversimplifies the real decision.</P>
          <P>Equity is patient capital. It doesn't have a repayment date. If the business struggles, equity investors lose money alongside you but they don't force the company into default. Debt is impatient capital. It has a maturity date, it has covenants, and if you can't pay, the lender can take your assets, call the loan, or put the company into default. Replacing equity with debt doesn't just avoid dilution. It changes the risk profile of the entire business.</P>
          <P>The right answer depends on what the capital is for and how confident you are in the payback. If you're funding open-ended R&D with no clear timeline to revenue, equity is the right tool. Debt would add repayment pressure to something inherently uncertain. If you're funding a specific growth initiative with a measurable return, like fulfilling a large confirmed order, hiring a sales team that will generate revenue within 6 months, or bridging 3 months to a round that's already in term sheet, debt can be the smarter choice.</P>

          <Callout>
            <P style={{ margin: 0, fontSize: 14, color: C.black, fontWeight: 500 }}>The most effective use of debt in a startup: raise your equity round, then add venture debt equal to 20 to 30% of the round to extend your runway. You get more time to hit milestones, which means you raise the next round at a higher valuation, which means less dilution when it matters most. The small cost of debt (interest plus any equity kicker) is almost always less than the dilution you'd take by raising a larger equity round today at a lower valuation.</P>
          </Callout>

          <P>But here's the flip side. If the business doesn't hit those milestones, if the next round is delayed or doesn't happen, you now have a debt obligation on top of an underperforming business. The dilution you avoided by taking debt could end up being far less painful than the default risk you took on instead. This is the trade-off, and it's one every founder needs to think through honestly, not optimistically.</P>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>Warrants, equity kickers, and the cost of debt</H2>
          <P>In startup financing, the interest rate is not the full cost. Many lenders, particularly venture debt providers and some alternative lenders, will ask for an equity component on top of the interest rate. This typically takes the form of warrants: the right to purchase shares in your company at a set price, usually the valuation of your last equity round.</P>
          <P>If your startup grows significantly and raises at a higher valuation later, those warrants become valuable to the lender. If growth is flat or the company doesn't make it, the warrants are worthless and the lender only earns their interest. From the lender's perspective, the equity kicker compensates them for the risk of lending to a company that might not survive.</P>
          <P>Some lenders structure this differently. Instead of warrants, they may ask for redeemable convertible preference shares, a success fee payable on a liquidity event, or a percentage of exit proceeds. The economic effect is similar: the lender gets a slice of your upside.</P>

          <Callout>
            <P style={{ margin: 0, fontSize: 14, color: C.black, fontWeight: 500 }}>At early stages, dilution matters more than at later stages because your valuation is lower. Warrant coverage that looks small in percentage terms can represent meaningful ownership when applied to a seed or Series A valuation. Model the dilution at your current valuation and at your expected next-round valuation. If a facility with no equity kicker costs more in interest but saves you meaningful dilution, that might be the better deal. Not every lender requires warrants. Some bank facilities and revenue-based products have no equity component at all.</P>
          </Callout>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>Personal guarantees for startup founders</H2>
          <P>Almost every startup debt facility will come with a personal guarantee (PG) request. This is where it gets complicated, especially if you have investors on your cap table.</P>
          <P>Lenders want the PG from someone who has skin in the game and the financial substance to back it. That typically means the controlling shareholder or, if no single person holds a controlling stake, multiple directors. If you're a founder who owns 40% of the company and has personal assets, the lender wants your PG. If you're a founder who owns 3% after several dilutive rounds, your PG may not be meaningful enough for the lender to accept.</P>
          <P>If you have a board with investor directors, you likely need a board mandate before you can provide a PG. Some investors are uncomfortable with founder PGs. Others take the view that if a founder believes enough in their business, they should be willing to stand behind it personally, and that willingness is itself a signal of conviction that can be used as a negotiating lever with other stakeholders.</P>

          <Callout type="dark">
            <P style={{ margin: 0, fontSize: 14, color: C.black, fontWeight: 500, lineHeight: 1.7 }}>Whoever provides the PG needs to have a clean CBS (Credit Bureau Singapore) record. If there are defaults, late payments, or other marks on the guarantor's credit record, the lender will either reject the PG or reject the application entirely. This catches some founders off guard. Check your CBS record before you apply, not after.</P>
          </Callout>

          <P>All of this is negotiable. Whether the PG is capped or uncapped, whether it's provided by one person or shared among multiple directors, whether it falls away after certain milestones. Some lenders will offer facilities without any additional PG if the other security is strong enough. Working through these details is part of what we do.</P>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>What lenders actually look at</H2>
          <P>A few years ago, the startup lending market was more forgiving. Loss-making companies burning through cash could still access facilities relatively easily if they had a credible equity round behind them. That's changed. In our observation, the market is tighter and more challenging now. You can still get financing if you're loss-making and burning, but lenders across the board are looking at many more factors than they used to. The bar is higher and the scrutiny is deeper.</P>
          {[
            { t: "The equity story", d: "Who invested and how much? Venture debt lenders assess your investors almost as carefully as they assess you. Tier-one VCs with a track record of supporting portfolio companies through follow-on rounds are a strong signal. Angel-only or friends-and-family raises are much harder to lend against." },
            { t: "Revenue trajectory", d: "If you have revenue, lenders want to see the trajectory. Month-on-month growth, customer acquisition trends, churn rate, and retention. They're not looking for profitability necessarily, but they're looking for evidence that the business is working and growing in a way that will eventually support debt service. A few years ago, revenue growth alone was often enough. Now lenders also want to understand unit economics and the path to breakeven." },
            { t: "Burn rate and runway", d: "How fast are you spending, and how long can you keep going? Lenders want to see that adding debt extends your runway meaningfully, not that it just buys you 30 more days. A minimum of 12 months post-funding runway is a common lender requirement." },
            { t: "Use of proceeds", d: "What will you do with the money? Lenders want to see a specific, productive use: hiring a sales team, expanding into a new market, funding inventory for confirmed orders. They don't want to fund general operations with no clear return. The clearer your use case, the easier the approval." },
            { t: "Founder track record", d: "Have you built and run companies before? A second-time founder with a prior exit is a materially stronger borrower than a first-time founder with the same business metrics. Lenders assess management risk, and experience reduces it." },
            { t: "Guarantor shareholding", d: "If a PG is required, lenders look at what percentage of the company the guarantor owns. A founder with 40% ownership providing a PG is a meaningful signal of alignment. A founder with 2% ownership after multiple dilutive rounds is not. The lender wants the guarantor to have enough ownership that their personal interests are genuinely tied to the company's success." },
            { t: "Personal financial substance", d: "Beyond shareholding, the lender will assess the guarantor's personal balance sheet. Property ownership, savings, other assets, and existing liabilities. A clean CBS (Credit Bureau Singapore) record is essential. A founder with no personal assets providing a PG is a PG in name only. The guarantee needs to be backed by real substance." },
          ].map((item, i) => (
            <div key={i} style={{ marginBottom: 14 }}>
              <h3 style={{ fontFamily: "Poppins, sans-serif", fontSize: 15, fontWeight: 700, color: C.black, marginBottom: 4 }}>{item.t}</h3>
              <P style={{ margin: 0, fontSize: 14 }}>{item.d}</P>
            </div>
          ))}

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>Common mistakes that kill startups</H2>
          {[
            { t: "Taking debt to avoid dilution at all costs", d: "Dilution aversion is rational, but it can be taken too far. If your business needs equity and you take debt instead because you don't want to dilute, you've replaced patient capital with impatient capital. Equity doesn't need to be repaid. Debt does. If the business hits a rough patch, the equity investors wait it out. The debt lender does not." },
            { t: "Using bridging capital without a bridge to somewhere", d: "A bridge loan needs a destination. If you're bridging to a Series A, you should have real conversations with investors, not just a hope that the round will come together. If you're bridging to profitability, you need to be genuinely close. Bridges that don't lead anywhere just add debt to a struggling company." },
            { t: "Ignoring covenants until they break", d: "Venture debt and working capital facilities often include covenants: minimum cash balances, revenue milestones, restrictions on additional fundraising or spending. A covenant breach can trigger acceleration, meaning the entire loan becomes due immediately. Read your covenants. Monitor them monthly. If you're approaching a breach, talk to your lender before it happens, not after." },
            { t: "Stacking multiple expensive facilities", d: "Taking a revenue-based facility, then adding a working capital line, then refinancing a car, all at different rates and repayment schedules. Each individual facility might be manageable, but stacked together the total debt service can become crushing. Look at total debt service as a percentage of revenue before adding another layer." },
            { t: "Not involving your investors", d: "If you have institutional investors, they need to know about your debt plans. Some term sheets include consent provisions for taking on debt. Even if they don't, surprising your board with a new facility and a PG is a governance failure. Involve them early. They may even help you negotiate better terms." },
          ].map((item, i) => (
            <div key={i} style={{ marginBottom: 14 }}>
              <h3 style={{ fontFamily: "Poppins, sans-serif", fontSize: 15, fontWeight: 700, color: C.black, marginBottom: 4 }}>{item.t}</h3>
              <P style={{ margin: 0, fontSize: 14 }}>{item.d}</P>
            </div>
          ))}

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>Responsible borrowing for startups</H2>
          <P>Startups live on optimism. You have to believe your business will work, or you wouldn't be building it. But optimism and debt are a dangerous combination. Debt doesn't care about your vision or your potential. It cares about repayment dates.</P>
          <div style={{ padding: "18px 20px", background: C.cream, borderLeft: `3px solid ${C.black}`, borderRadius: "0 8px 8px 0", marginBottom: 20 }}>
            <P style={{ margin: 0, fontSize: 14, color: C.black, fontWeight: 500, lineHeight: 1.7 }}>The test we encourage every founder to apply: if everything goes wrong for the next 12 months, if revenue stalls, if the next round doesn't close, if your biggest customer churns, can you still meet your debt obligations? If the answer depends on everything going right, you're borrowing too much.</P>
          </div>
          {[
            "Are you borrowing for a productive, specific purpose with a measurable return?",
            "Can the business service this debt from current revenue, not projected revenue?",
            "If the next equity round doesn't happen, what's your Plan B for repayment?",
            "Have you discussed the debt and any PGs with your board and co-founders?",
            "Do you understand every covenant, acceleration clause, and security arrangement in the facility?",
          ].map((q, i) => (
            <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 8 }}>
              <span style={{ fontFamily: "Poppins, sans-serif", fontSize: 13, color: C.orange, fontWeight: 800, minWidth: 20 }}>{i + 1}.</span>
              <P style={{ margin: 0, fontSize: 14 }}>{q}</P>
            </div>
          ))}
          <P>Read our <a href="/responsible-business-promise" style={{ color: C.orange, textDecoration: "none", fontWeight: 500 }}>Responsible Business Promise</a> for more on how we think about this.</P>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>When to talk to QuickFund</H2>
          <P>If you're a startup founder in Singapore trying to figure out whether debt makes sense for your business, and what type of debt fits your stage, talk to us. We've worked with companies from seed through Series C and beyond. We've seen what works and what doesn't.</P>
          <P>We are not owned by any lender. No lender has equity in our business. We work across banks, venture debt funds, fintech platforms, and alternative lenders. When we recommend a facility, it's because we believe it's the right one for your situation. If we think debt isn't the right move for you right now, we'll say that too.</P>
          <P>The startup financing landscape has more options than most founders realise, but it also has more traps. Facilities with aggressive covenants, equity kickers that look small but aren't, short tenors that create refinancing risk, personal guarantees that put your family home at stake. Our job is to help you see the full picture, not just the headline terms, so you can make a decision that's right for your business and your life.</P>

          <Callout type="dark">
            <P style={{ margin: 0, fontSize: 14, color: C.black, fontWeight: 500, lineHeight: 1.7 }}>If you've been told your startup can't get debt, that may not be true. Many founders only talk to their bank, get declined, and assume the door is closed. The alternative lending market in Singapore is deep and getting deeper. The question isn't just whether you qualify. It's whether the terms make sense for where you are and where you're going. That's the conversation we'll have with you.</P>
          </Callout>

          {/* CTAs */}
          <div style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 12 }}>
            <a onClick={() => setShowGate(true)} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 22px", background: C.orange, borderRadius: 10, cursor: "pointer", textDecoration: "none" }}>
              <div><div style={{ fontFamily: "Poppins, sans-serif", fontSize: 14, fontWeight: 700, color: "#fff" }}>Download the full guide</div><div style={{ fontFamily: "Figtree, sans-serif", fontSize: 12, color: "rgba(255,255,255,0.7)", marginTop: 2 }}>Venture debt, RBF, founder asset strategies, and a preparation checklist</div></div>
              <Bolt size={20} color="#fff" style={{ flexShrink: 0 }} />
            </a>
            <a href="/#tools" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 22px", background: "#fff", borderRadius: 10, border: `1.5px solid ${C.greyLight}`, textDecoration: "none" }}>
              <div><div style={{ fontFamily: "Poppins, sans-serif", fontSize: 14, fontWeight: 700, color: C.black }}>Try the AI Loan Check-Up</div><div style={{ fontFamily: "Figtree, sans-serif", fontSize: 12, color: C.grey, marginTop: 2 }}>10 questions. Free. See what you qualify for.</div></div>
              <Bolt size={20} style={{ flexShrink: 0 }} />
            </a>
            <a href="https://wa.me/6580576702?text=Hi%20QuickFund%2C%20I%20have%20a%20question%20about%20startup%20financing" target="_blank" rel="noopener" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 22px", background: C.black, borderRadius: 10, textDecoration: "none" }}>
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
            {["Property-Backed Loans", "Doctors and Dentists", "Trading Companies", "Tech Companies", "E-commerce", "Software", "F&B", "Construction", "Logistics", "Professional Services", "Retail"].map((s, i) => (
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
              All borrowing carries real and significant risks. Venture debt facilities may include warrant coverage or equity kickers that result in equity dilution. Loan agreements may contain financial covenants, acceleration clauses, and personal guarantees. Secured loans may result in the loss of pledged assets, including property, vehicles, equipment, or shares, in the event of default. Revenue-based financing costs depend on repayment speed and may result in higher effective interest rates than anticipated. Property values, vehicle values, and business conditions can change. Personal guarantees may expose individual directors and shareholders to personal liability for company debts.
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


export default StartupsGuide;
