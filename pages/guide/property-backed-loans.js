import { useState } from "react";

const C = { orange: "#FD5026", black: "#0D0D0D", offwhite: "#FAF8F5", grey: "#94918C", greyLight: "#E8E5E0", cream: "#F2EDE6" };

const Bolt = ({ size = 24, color = C.orange, style = {} }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" style={style}>
    <path d="M18 2L6 18h8l-2 12 12-16h-8l2-12z" fill={color} />
  </svg>
);

/* ── FLOATING WHATSAPP ── */
function FloatingWA() {
  return (
    <a href="https://wa.me/6580576702?text=Hi%20QuickFund%2C%20I%20have%20a%20question%20about%20property%20financing" target="_blank" rel="noopener"
      style={{ position: "fixed", bottom: 24, right: 24, zIndex: 300, width: 56, height: 56, borderRadius: 16, background: "#25D366", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 16px rgba(37,211,102,0.35)", textDecoration: "none" }}>
      <svg width="28" height="28" viewBox="0 0 24 24" fill="#fff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
    </a>
  );
}

/* ── DOWNLOAD GATE ── */
function DownloadGate({ onClose }) {
  const [wa, setWa] = useState(""); const [email, setEmail] = useState(""); const [method, setMethod] = useState("whatsapp"); const [done, setDone] = useState(false);
  const ok = method === "whatsapp" ? wa.trim().length >= 8 : email.includes("@");
  if (done) return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, zIndex: 200, background: "rgba(0,0,0,0.5)", backdropFilter: "blur(8px)", display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
      <div onClick={e => e.stopPropagation()} style={{ background: C.offwhite, borderRadius: 14, padding: 32, maxWidth: 380, width: "100%", textAlign: "center" }}>
        <Bolt size={28} style={{ margin: "0 auto 12px" }} />
        <h3 style={{ fontFamily: "Syne, sans-serif", fontSize: 18, fontWeight: 800, color: C.black, marginBottom: 6 }}>On its way.</h3>
        <p style={{ fontFamily: "Figtree, sans-serif", fontSize: 13, color: C.grey }}>Your property investor guide is coming via {method === "whatsapp" ? "WhatsApp" : "email"}.</p>
        <button onClick={onClose} style={{ marginTop: 16, padding: "10px 24px", background: C.black, color: "#fff", border: "none", borderRadius: 7, fontFamily: "Syne, sans-serif", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>Got it</button>
      </div>
    </div>);
  return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, zIndex: 200, background: "rgba(0,0,0,0.5)", backdropFilter: "blur(8px)", display: "flex", alignItems: "center", justifyContent: "center", padding: 20, animation: "fadeIn 0.2s ease" }}>
      <div onClick={e => e.stopPropagation()} style={{ background: C.offwhite, borderRadius: 14, padding: "28px 26px", maxWidth: 400, width: "100%", position: "relative" }}>
        <button onClick={onClose} style={{ position: "absolute", top: 12, right: 12, background: "none", border: "none", fontSize: 18, color: C.grey, cursor: "pointer" }}>x</button>
        <div style={{ fontFamily: "Syne, sans-serif", fontSize: 10, fontWeight: 800, color: C.orange, letterSpacing: "2px", textTransform: "uppercase", marginBottom: 8 }}>Full Guide PDF</div>
        <h3 style={{ fontFamily: "Syne, sans-serif", fontSize: 20, fontWeight: 800, color: C.black, lineHeight: 1.15, marginBottom: 8 }}>Property Investor<br />Financing Guide</h3>
        <p style={{ fontFamily: "Figtree, sans-serif", fontSize: 13, color: C.grey, lineHeight: 1.5, marginBottom: 14 }}>
          Includes specific rate ranges, lender types, case examples, LTV benchmarks, and a checklist to prepare before you apply. Everything on this page plus the detail you need to actually move forward.
        </p>
        <div style={{ display: "flex", background: C.cream, borderRadius: 8, padding: 3, marginBottom: 12 }}>
          {["whatsapp", "email"].map(m => (<button key={m} onClick={() => setMethod(m)} style={{ flex: 1, padding: "7px 0", borderRadius: 6, border: "none", cursor: "pointer", fontFamily: "Syne, sans-serif", fontSize: 11, fontWeight: 700, background: method === m ? "#fff" : "transparent", color: method === m ? C.black : C.grey }}>{m === "whatsapp" ? "WhatsApp" : "Email"}</button>))}
        </div>
        {method === "whatsapp" ? (<div style={{ display: "flex", gap: 6 }}><span style={{ padding: "10px", background: C.cream, borderRadius: 7, border: `1.5px solid ${C.greyLight}`, fontFamily: "Figtree, sans-serif", fontSize: 13, color: C.grey }}>+65</span><input value={wa} onChange={e => setWa(e.target.value.replace(/\D/g, ""))} placeholder="9123 4567" maxLength={8} className="qf-input" style={{ flex: 1 }} /></div>) : (<input value={email} onChange={e => setEmail(e.target.value)} placeholder="you@company.com" className="qf-input" style={{ width: "100%" }} />)}
        <button onClick={() => { console.log("Property guide lead:", { wa, email, method }); setDone(true); }} disabled={!ok} style={{ width: "100%", padding: "12px", marginTop: 12, background: !ok ? C.greyLight : C.orange, border: "none", borderRadius: 7, fontFamily: "Syne, sans-serif", fontSize: 13, fontWeight: 700, color: "#fff", cursor: !ok ? "default" : "pointer" }}>Send Me The Full Guide</button>
      </div>
    </div>);
}

/* ═══════════════════════════════════════════
   PROPERTY INVESTOR GUIDE PAGE
   ═══════════════════════════════════════════ */
export default function PropertyGuide() {
  const [showGate, setShowGate] = useState(false);

  const Section = ({ children, style = {} }) => (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 20px", ...style }}>{children}</div>
  );
  const H2 = ({ children }) => (
    <h2 style={{ fontFamily: "Syne, sans-serif", fontSize: 24, fontWeight: 800, color: C.black, lineHeight: 1.1, letterSpacing: "-1px", marginBottom: 14 }}>{children}</h2>
  );
  const P = ({ children, style = {} }) => (
    <p style={{ fontFamily: "Figtree, sans-serif", fontSize: 15, color: "#555", lineHeight: 1.75, marginBottom: 16, ...style }}>{children}</p>
  );
  const Callout = ({ children, type = "orange" }) => (
    <div style={{ padding: "16px 20px", background: type === "orange" ? `${C.orange}08` : C.cream, borderLeft: `3px solid ${type === "orange" ? C.orange : C.black}`, borderRadius: "0 8px 8px 0", marginBottom: 20 }}>
      {children}
    </div>
  );

  return (
    <div style={{ background: C.offwhite, minHeight: "100vh" }}>
      <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Figtree:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet" />
      <style>{`
        @keyframes fadeIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}
        *{box-sizing:border-box;margin:0;padding:0}
        ::selection{background:${C.orange}25}
        .qf-input{padding:10px 12px;border-radius:7px;border:1.5px solid ${C.greyLight};background:${C.offwhite};font-family:Figtree,sans-serif;font-size:13px;color:${C.black}}
        .qf-input:focus{outline:none;border-color:${C.orange}}
        @media(max-width:768px){
          .qf-guide-hero-h1{font-size:32px!important}
          .qf-guide-toc{grid-template-columns:1fr!important}
          .qf-guide-nav-btns{gap:8px!important}
          .qf-guide-nav-btns a{font-size:10px!important;padding:6px 10px!important}
        }
      `}</style>

      <FloatingWA />
      {showGate && <DownloadGate onClose={() => setShowGate(false)} />}

      {/* ── NAV ── */}
      <nav style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(250,248,245,0.97)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(0,0,0,0.04)", padding: "0 20px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 54 }}>
          <a href="https://quickfund.sg" style={{ display: "flex", alignItems: "center", gap: 7, textDecoration: "none" }}>
            <Bolt size={14} />
            <span style={{ fontFamily: "Syne, sans-serif", fontSize: 14, fontWeight: 800, color: C.black, textTransform: "uppercase" }}>QuickFund</span>
            <span style={{ fontFamily: "Figtree, sans-serif", fontSize: 11, color: C.greyLight, marginLeft: 4 }}>Sector Guide</span>
          </a>
          <div style={{ display: "flex", gap: 12, alignItems: "center" }} className="qf-guide-nav-btns">
            <a onClick={() => setShowGate(true)} style={{ fontFamily: "Syne, sans-serif", fontSize: 11, fontWeight: 700, color: C.orange, cursor: "pointer" }}>Download PDF</a>
            <a href="https://wa.me/6580576702?text=Hi%20QuickFund%2C%20question%20about%20property%20financing" target="_blank" rel="noopener" style={{ fontFamily: "Syne, sans-serif", fontSize: 11, fontWeight: 700, color: "#fff", background: C.black, padding: "7px 14px", borderRadius: 6, textDecoration: "none" }}>WhatsApp</a>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{ padding: "60px 20px 40px" }}>
        <Section>
          <div style={{ fontFamily: "Syne, sans-serif", fontSize: 10, fontWeight: 800, color: C.orange, letterSpacing: "2px", textTransform: "uppercase", marginBottom: 12 }}>
            Financing Guide
          </div>
          <h1 className="qf-guide-hero-h1" style={{ fontFamily: "Syne, sans-serif", fontSize: 42, fontWeight: 800, color: C.black, lineHeight: 0.95, letterSpacing: "-2px", marginBottom: 16 }}>
            Property-Backed<br />Loans in<br /><span style={{ color: C.orange }}>Singapore</span>
          </h1>
          <P style={{ fontSize: 16, maxWidth: 520, color: C.grey }}>
            You own property. It's worth more than you paid for it. That equity is capital sitting idle. Here's how to unlock it, what it costs, and what to watch out for.
          </P>
          <div style={{ display: "flex", gap: 10, marginTop: 20, flexWrap: "wrap" }}>
            <a onClick={() => setShowGate(true)} style={{ fontFamily: "Syne, sans-serif", fontSize: 13, fontWeight: 700, color: "#fff", background: C.orange, padding: "12px 24px", borderRadius: 8, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 7 }}>
              Download Full Guide <Bolt size={12} color="#fff" />
            </a>
            <a href="https://quickfund.sg/#tools" style={{ fontFamily: "Syne, sans-serif", fontSize: 13, fontWeight: 700, color: C.black, padding: "12px 24px", borderRadius: 8, border: `1.5px solid ${C.greyLight}`, textDecoration: "none" }}>
              Try the AI Loan Check-Up
            </a>
          </div>
          <p style={{ fontFamily: "Figtree, sans-serif", fontSize: 11, color: C.greyLight, marginTop: 12 }}>7 min read. Last updated May 2026.</p>
        </Section>
      </section>

      {/* ── TABLE OF CONTENTS ── */}
      <section style={{ padding: "0 20px 40px" }}>
        <Section>
          <div className="qf-guide-toc" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
            {[
              "How property-backed lending works",
              "The equity you're sitting on",
              "What you can use the funds for",
              "Types of property-backed facilities",
              "The trade-offs nobody tells you about",
              "Why non-bank property financing exists",
              "The risks. Read this carefully.",
              "Responsible borrowing",
              "What lenders look at",
              "Common mistakes that cost money",
              "How to prepare before applying",
              "When to talk to QuickFund",
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start", padding: "8px 12px", background: i % 2 === 0 ? "#fff" : C.offwhite, borderRadius: 6 }}>
                <span style={{ fontFamily: "Syne, sans-serif", fontSize: 11, fontWeight: 800, color: C.orange, minWidth: 20 }}>{String(i+1).padStart(2,"0")}</span>
                <span style={{ fontFamily: "Figtree, sans-serif", fontSize: 13, color: C.black }}>{item}</span>
              </div>
            ))}
          </div>
        </Section>
      </section>

      {/* ── CONTENT ── */}
      <article style={{ padding: "0 20px 60px" }}>
        <Section>
          <H2>How property-backed lending works</H2>
          <P>
            The concept is simple. You own a property. A lender values it and may lend you a percentage of that value, with the property as security. Because the lender has real collateral, pricing can be lower than unsecured lending and facility sizes may be larger, subject to lender approval and valuation.
          </P>
          <P>
            The key number is Loan-to-Value, or LTV. If your property is valued at $5M and the lender offers 70% LTV, you can borrow up to $3.5M. If there's an existing mortgage of $1M on the property, you'd get $2.5M in cash after paying that off. That's the equity release in practice.
          </P>
          <P>
            The interest rates on property-backed facilities are among the lowest available for business financing in Singapore. It's often the most cost-effective capital a business owner can access, yet many don't realise the equity in their property is a usable asset.
          </P>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>The equity you're sitting on</H2>
          <P>
            You bought a property years ago. Maybe it was $1M. Today it's worth $3M, or $5M. That appreciation is real. But here's the thing: you can't spend it. Not unless you sell.
          </P>
          <P>
            Selling is permanent. You lose the asset, the rental income and any future appreciation. If the market rises after you sell, you no longer participate in that upside.
          </P>
          <P>
            The alternative is borrowing against the equity. You keep the property, the rental income and potential future upside, while accessing cash now. The cost is interest and the risk is that the property is pledged as security. The trade-off is simple: the cost and risk of borrowing versus what you can do with the capital.
          </P>

          <Callout>
            <P style={{ margin: 0, fontSize: 14, color: C.black, fontWeight: 500, lineHeight: 1.7 }}>
              Think of it this way: you own a shophouse with meaningful unrealised equity and no outstanding mortgage. If you sell, you realise the cash but give up the asset. If you borrow against it at an approved LTV, you may be able to access cash while keeping the property and rental income. The structure only makes sense if the use of proceeds can comfortably support the interest cost and downside risk.
            </P>
          </Callout>

          <P>
            This can work across several property categories in Singapore:
          </P>
          {[
            { t: "Shophouses", d: "Among the most popular collateral for property-backed lending. Limited supply, strong appreciation history, and dual-use potential (commercial ground floor, residential above) make them attractive to lenders." },
            { t: "Commercial property", d: "Offices, retail units, and mixed-use developments. Lenders look at rental yield, tenant quality, and lease tenure. Well-tenanted commercial property with long leases is strong collateral." },
            { t: "Industrial property", d: "Factories, warehouses, B1/B2 industrial units. Valuations can vary more depending on lease remaining and zoning. JTC properties have specific rules around financing that lenders factor in." },
            { t: "Residential property", d: "Condos, landed homes, and private residential properties. TDSR may apply for certain property loans from financial institutions, depending on borrower, lender, property type and facility structure. Be aware that using your home as collateral means your home is at risk." },
            { t: "Land", d: "Undeveloped land can be used as collateral, though LTV tends to be more conservative. Land with approved development plans is easier to finance than raw land." },
          ].map((item, i) => (
            <div key={i} style={{ marginBottom: 12, padding: "14px 16px", background: "#fff", borderRadius: 8, border: `1px solid ${C.greyLight}` }}>
              <h3 style={{ fontFamily: "Syne, sans-serif", fontSize: 14, fontWeight: 700, color: C.black, marginBottom: 4 }}>{item.t}</h3>
              <P style={{ margin: 0, fontSize: 13 }}>{item.d}</P>
            </div>
          ))}

          <h3 style={{ fontFamily: "Syne, sans-serif", fontSize: 16, fontWeight: 700, color: C.black, marginBottom: 8, marginTop: 20 }}>If it's a rental property, the rental income can help service the loan</h3>
          <P>
            Here's how to think about it. If your property generates rental income, and the rental covers or substantially offsets the loan repayment, the effective cost of the facility to you is reduced. You unlock the equity, you get the cash to deploy, and the rental income handles part or all of the interest. This is one of the most powerful structures available to property owners.
          </P>
          <P>
            A well-tenanted commercial property generating steady rent can support a substantial facility while the owner uses the capital for something else entirely. This depends on rental rates, occupancy, and loan terms, and should not be assumed to continue indefinitely. Vacancy, interest-rate changes, maintenance costs, and refinancing risk should all be factored into your planning.
          </P>

          <h3 style={{ fontFamily: "Syne, sans-serif", fontSize: 16, fontWeight: 700, color: C.black, marginBottom: 8, marginTop: 20 }}>First charge and share charge</h3>
          <P>
            Most lenders require a first charge on the property. This means they are first in line to recover their money if you default. If your property already has a mortgage (that lender holds the first charge), a new lender would need to either refinance the existing mortgage out, or take a second charge. Most lenders won't accept a second charge, or if they do, the terms are significantly worse.
          </P>
          <P>
            If your property is fully paid up with no existing mortgage, you have a clean first charge to offer. This is the strongest position to be in and gives you the most options.
          </P>
          <P>
            In addition to property charges, lenders may also require a share charge over the shares of the borrowing company. This means if you default, the lender can take control of the company's shares. If your company holds the property, this effectively gives the lender control of the property indirectly. Understand what you're pledging before you sign.
          </P>

          <h3 style={{ fontFamily: "Syne, sans-serif", fontSize: 16, fontWeight: 700, color: C.black, marginBottom: 8, marginTop: 20 }}>Not just property: car refinancing too</h3>
          <P>
            If you've fully paid off your car, you can also unlock cash against it. The amounts are smaller than property, but for businesses that need S$30K to S$100K quickly, car refinancing can be a fast and simple option. If you have a fully paid vehicle sitting in the carpark, that's an asset you can put to work.
          </P>

          <Callout>
            <P style={{ margin: 0, fontSize: 14, color: C.black, fontWeight: 500 }}>
              Quick example: you own a shophouse with meaningful unrealised equity and no outstanding mortgage. At an approved LTV, you may be able to access working capital for growth, acquisitions, equipment, inventory, or development, secured against an asset you already own. The exact amount depends on lender approval, valuation basis, existing debt and your repayment profile.
            </P>
          </Callout>

          {/* ── PROPERTY PRICE CHART ── */}
          <div style={{ background: C.black, borderRadius: 12, padding: "28px 24px", marginBottom: 24 }}>
            <div style={{ fontFamily: "Syne, sans-serif", fontSize: 10, fontWeight: 800, color: C.orange, letterSpacing: "2px", textTransform: "uppercase", marginBottom: 6 }}>
              URA Property Price Index (All Residential)
            </div>
            <div style={{ fontFamily: "Syne, sans-serif", fontSize: 22, fontWeight: 800, color: "#fff", marginBottom: 4 }}>
              Up 54% since 2015.
            </div>
            <div style={{ fontFamily: "Figtree, sans-serif", fontSize: 12, color: "rgba(255,255,255,0.4)", marginBottom: 20 }}>
              Based on URA All Residential Property Price Index. Base: 2009 Q1 = 100. Source: URA. Past performance is not indicative of future results. Your property may have appreciated more or less than the index.
            </div>
            <div style={{ position: "relative", height: 200 }}>
              {/* Y-axis labels */}
              {[220, 180, 140].map(v => (
                <div key={v} style={{ position: "absolute", left: 0, bottom: `${((v - 130) / 100) * 200}px`, fontFamily: "Figtree, sans-serif", fontSize: 10, color: "rgba(255,255,255,0.25)" }}>
                  {v}
                </div>
              ))}
              {/* Grid lines */}
              {[220, 180, 140].map(v => (
                <div key={`g${v}`} style={{ position: "absolute", left: 30, right: 0, bottom: `${((v - 130) / 100) * 200}px`, height: 1, background: "rgba(255,255,255,0.06)" }} />
              ))}
              {/* Chart area */}
              <svg viewBox="0 0 500 200" style={{ position: "absolute", left: 30, right: 0, top: 0, bottom: 0, width: "calc(100% - 30px)", height: "100%" }} preserveAspectRatio="none">
                {/* Area fill */}
                <path d={`M0,${200 - (146-130)/100*200} ${[
                  [45, 200-(141-130)/100*200], [91, 200-(137-130)/100*200], [136, 200-(138-130)/100*200],
                  [182, 200-(150-130)/100*200], [227, 200-(153-130)/100*200], [273, 200-(157-130)/100*200],
                  [318, 200-(166-130)/100*200], [364, 200-(189-130)/100*200], [409, 200-(195-130)/100*200],
                  [455, 200-(209-130)/100*200], [500, 200-(211-130)/100*200],
                ].map(([x,y])=>`L${x},${y}`).join(" ")} L500,200 L0,200 Z`} fill="url(#chartGrad)" />
                <defs>
                  <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={C.orange} stopOpacity="0.3" />
                    <stop offset="100%" stopColor={C.orange} stopOpacity="0" />
                  </linearGradient>
                </defs>
                {/* Line */}
                <path d={`M0,${200 - (146-130)/100*200} ${[
                  [45, 200-(141-130)/100*200], [91, 200-(137-130)/100*200], [136, 200-(138-130)/100*200],
                  [182, 200-(150-130)/100*200], [227, 200-(153-130)/100*200], [273, 200-(157-130)/100*200],
                  [318, 200-(166-130)/100*200], [364, 200-(189-130)/100*200], [409, 200-(195-130)/100*200],
                  [455, 200-(209-130)/100*200], [500, 200-(211-130)/100*200],
                ].map(([x,y])=>`L${x},${y}`).join(" ")}`} fill="none" stroke={C.orange} strokeWidth="2.5" />
                {/* End dot */}
                <circle cx="500" cy={200-(211-130)/100*200} r="4" fill={C.orange} />
              </svg>
              {/* X-axis labels */}
              <div style={{ position: "absolute", bottom: -20, left: 30, right: 0, display: "flex", justifyContent: "space-between" }}>
                {["2014", "2016", "2018", "2020", "2022", "2025"].map(y => (
                  <span key={y} style={{ fontFamily: "Figtree, sans-serif", fontSize: 10, color: "rgba(255,255,255,0.25)" }}>{y}</span>
                ))}
              </div>
            </div>
            <div style={{ marginTop: 32, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }} className="qf-guide-toc">
              {[
                { label: "Older purchase vintage", value: "Likely built equity", gain: "Subject to valuation" },
                { label: "Mid-cycle purchase", value: "Uplift varies by asset", gain: "Check current value" },
                { label: "Recent-cycle purchase", value: "Still worth reviewing", gain: "Depends on asset" },
              ].map((ex, i) => (
                <div key={i} style={{ padding: "12px", background: "rgba(255,255,255,0.04)", borderRadius: 8 }}>
                  <div style={{ fontFamily: "Figtree, sans-serif", fontSize: 11, color: "rgba(255,255,255,0.4)" }}>{ex.label}</div>
                  <div style={{ fontFamily: "Syne, sans-serif", fontSize: 14, fontWeight: 800, color: "#fff", marginTop: 2 }}>{ex.value}</div>
                  <div style={{ fontFamily: "Syne, sans-serif", fontSize: 12, fontWeight: 700, color: C.orange, marginTop: 2 }}>{ex.gain}</div>
                </div>
              ))}
            </div>
            <p style={{ fontFamily: "Figtree, sans-serif", fontSize: 10, color: "rgba(255,255,255,0.2)", marginTop: 12 }}>
              Illustrative only. Based on URA All Residential Property Price Index. Actual appreciation varies by property type, location, and market conditions. Past performance is not indicative of future results.
            </p>
          </div>

          <P>
            That equity may be real, but unless you sell or refinance, it stays locked in the asset. Property-backed lending is one way to access it without giving up the property. The cost is interest and security risk. The question is whether what you do with the capital is worth more than the cost and risk of borrowing.
          </P>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>Responsible borrowing</H2>
          <div style={{ padding: "20px 22px", background: C.cream, borderRadius: 10, marginBottom: 16, borderLeft: `3px solid ${C.black}` }}>
            <P style={{ margin: 0, fontSize: 14, color: C.black, fontWeight: 500, lineHeight: 1.7 }}>
              At QuickFund, we believe in responsible borrowing. We will never encourage you to take on debt you cannot service. Before you consider a property-backed loan, ask yourself:
            </P>
          </div>
          {[
            "Can my business cash flow comfortably cover the repayments, even in a bad month?",
            "Am I borrowing for productive, revenue-generating purposes, or am I trying to buy time?",
            "If the investment or business doesn't perform as expected, can I still make the payments?",
            "Am I prepared for what happens if I default? Am I willing to risk this property?",
            "Have I explored all other options first, including restructuring existing debt or improving cash collection?",
          ].map((q, i) => (
            <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 8 }}>
              <span style={{ fontFamily: "Syne, sans-serif", fontSize: 13, color: C.orange, fontWeight: 800, minWidth: 20 }}>{i + 1}.</span>
              <P style={{ margin: 0, fontSize: 14 }}>{q}</P>
            </div>
          ))}
          <P>
            If the answer to any of these questions gives you pause, talk to us before you proceed. Sometimes the best advice is not to borrow. We'd rather lose a deal than put you in a position you can't recover from.
          </P>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>What you can use the funds for</H2>
          <P>
            Unlike some financing products that restrict how you use the money, property-backed loans are generally flexible on purpose of use. Common uses include:
          </P>
          {[
            { t: "Working capital", d: "Cash flow for daily operations, payroll, supplier payments. Lower rates than unsecured lending if you have property to pledge." },
            { t: "Business expansion", d: "Opening new locations, entering new markets, scaling operations. The property funds the growth." },
            { t: "Equipment and inventory", d: "Large purchases that would otherwise require expensive unsecured financing or equipment leasing." },
            { t: "Acquisitions", d: "Buying another business or a competitor. Property equity gives you the capital to make the move." },
            { t: "Development funding", d: "Building on land you own, renovation projects, property development. The land or existing structure serves as security." },
            { t: "Refinancing expensive debt", d: "If you're currently paying high rates on unsecured facilities, refinancing to a property-backed loan may reduce monthly financing cost." },
          ].map((item, i) => (
            <div key={i} style={{ marginBottom: 12, padding: "14px 16px", background: "#fff", borderRadius: 8, border: `1px solid ${C.greyLight}` }}>
              <h3 style={{ fontFamily: "Syne, sans-serif", fontSize: 14, fontWeight: 700, color: C.black, marginBottom: 4 }}>{item.t}</h3>
              <P style={{ margin: 0, fontSize: 13 }}>{item.d}</P>
            </div>
          ))}

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>Types of property-backed facilities</H2>
          {[
            { t: "Equity release / cash-out refinancing", d: "The most common. You mortgage or remortgage a property you already own and take cash out. The lender values the property, deducts any existing loan, and lends you the difference up to the LTV limit. Tenors range from 1 to 30 years depending on the lender." },
            { t: "Bridging finance", d: "Short-term facility, typically 3 to 12 months. Used when you need capital fast, often to bridge between buying and selling, or while a longer-term facility is being arranged. Higher rates but very fast approval and disbursement." },
            { t: "Development finance", d: "For construction or major renovation projects. Funds are typically disbursed in stages as the project progresses, tied to milestones. The land or existing structure is the security, with the completed development often providing additional value." },
            { t: "Term loan secured by property", d: "A straightforward term loan where property is pledged as security. Fixed repayment schedule over an agreed tenor. Used for any business purpose where the lower rate justifies pledging the asset." },
          ].map((item, i) => (
            <div key={i} style={{ marginBottom: 14 }}>
              <h3 style={{ fontFamily: "Syne, sans-serif", fontSize: 15, fontWeight: 700, color: C.black, marginBottom: 4 }}>{item.t}</h3>
              <P style={{ margin: 0, fontSize: 14 }}>{item.d}</P>
            </div>
          ))}

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>The trade-offs nobody tells you about</H2>
          <P>
            Property-backed lending sounds simple: pledge property, get money. In practice, every lender approaches it differently, and those differences can mean hundreds of thousands of dollars in your pocket or out of it.
          </P>

          <h3 style={{ fontFamily: "Syne, sans-serif", fontSize: 16, fontWeight: 700, color: C.black, marginBottom: 8, marginTop: 20 }}>Valuation is not one number</h3>
          <P>
            Different lenders value the same property differently. Some use open market value. Some use a more conservative forced-sale or internal valuation basis. Some insist on their own panel valuers. Some accept independent valuations. The LTV percentage means little until you know what valuation it is being applied to. For example, 70% LTV on a $5M valuation is $3.5M, while 70% LTV on a more conservative $3.8M valuation is $2.66M. Same property, same LTV percentage, very different cash proceeds.
          </P>

          <h3 style={{ fontFamily: "Syne, sans-serif", fontSize: 16, fontWeight: 700, color: C.black, marginBottom: 8, marginTop: 20 }}>Speed vs cost vs quantum</h3>
          <P>
            You can't optimise for everything. A bank may offer lower pricing, but the process can take longer and the LTV may be conservative. A finance company may move faster or offer a different LTV, but the rate and fees may be higher. A private credit fund may offer more structural flexibility, but the cost usually reflects that.
          </P>
          <P>
            The right lender depends on your constraints. If you need $2M in 5 days to close an acquisition, the lowest rate doesn't matter if the lender takes 3 months to approve. If you're refinancing and have time, then cost is the priority. If the bank offered you 60% LTV but you need 75%, a finance company that offers higher LTV at a higher rate might still be the right move if the additional capital generates more than it costs.
          </P>

          <Callout>
            <P style={{ margin: 0, fontSize: 14, color: C.black, fontWeight: 500 }}>
              This is where QuickFund adds value. We track which lenders use which valuation basis, which lenders can move faster, which may be more flexible on LTV for your property type, and how total cost compares. We help you navigate these trade-offs based on what actually matters for your situation, not just the headline rate.
            </P>
          </Callout>

          <h3 style={{ fontFamily: "Syne, sans-serif", fontSize: 16, fontWeight: 700, color: C.black, marginBottom: 8, marginTop: 20 }}>Cash flow assessment varies by lender</h3>
          <P>
            Some lenders want to see that your business can service the loan from its own cash flow. They'll look at your P&L, your bank statements, your revenue trends. If your business is generating strong cash flow, these lenders will be comfortable with a larger facility.
          </P>
          <P>
            Other lenders don't focus on business cash flow at all. They care about the property value, the LTV, and your personal net worth. If your business is early-stage or cyclical but you own a valuable property, these lenders might be a better fit.
          </P>
          <P>
            Matching your profile to the right lender is the difference between an approval and a rejection, or between an offer that works and one that doesn't. This is not something you can figure out from a website. It requires knowing the lenders, how they think, and what they're looking for right now.
          </P>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>Why non-bank property financing exists</H2>
          <P>
            Here's something most people don't know. When you borrow from a bank against property, you're typically subject to TDSR: Total Debt Servicing Ratio. This caps your total monthly debt obligations at 55% of your gross monthly income. If you already have a mortgage, car loan, or other credit facilities, TDSR can severely limit how much more you can borrow, even if the property has substantial equity.
          </P>
          <P>
            Certain non-bank or private-credit lenders may not be subject to TDSR requirements, depending on their regulatory status and the specific facility structure. These lenders make their own assessment of your ability to repay based on the property value, your business cash flow, and the overall risk. This can mean more flexibility on loan quantum for borrowers who have been constrained by TDSR limits at banks.
          </P>
          <P>
            This is one of the main reasons business owners come to us. They've been told by the bank they can only borrow a certain amount because of TDSR limits, but the property is worth significantly more and their business can comfortably service a larger facility. We help them explore non-bank options where more flexibility may be available.
          </P>

          <Callout>
            <P style={{ margin: 0, fontSize: 14, color: C.black, fontWeight: 500 }}>
              If a bank has turned you down or offered a lower amount than you expected because of TDSR, it's worth exploring non-bank options. The rate will be higher than a bank, but you may be able to access significantly more capital. Talk to us and we can tell you what's realistic. Consult the specific lender's terms for details on TDSR applicability.
            </P>
          </Callout>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>The risks. Read this carefully.</H2>
          <P>
            We would be doing you a disservice if we didn't spell this out clearly.
          </P>
          <P>
            A property-backed loan uses your property as collateral. If you cannot make the repayments, the lender has the legal right to seize and sell the property to recover their money. This is not a theoretical risk. It happens. If the property is your home, you could lose your home.
          </P>

          <div style={{ padding: "18px 20px", background: "#FFEBEE", borderLeft: `3px solid #C62828`, borderRadius: "0 8px 8px 0", marginBottom: 20 }}>
            <P style={{ margin: 0, fontSize: 14, color: "#C62828", fontWeight: 600 }}>
              Our position is straightforward: only take a property-backed loan if the cash flow from your business or investments can comfortably service the repayment. Not optimistically. Not "if things work out." Comfortably.
            </P>
          </div>

          <P>
            If you're borrowing against property to fund something speculative, to cover losses, or to buy time while hoping the situation improves, stop and think carefully. The property is real. The risk of losing it is real. A lower rate means nothing if you can't make the repayments.
          </P>
          <P>
            Property-backed loans are powerful when used correctly. They give you access to large amounts at low rates for productive purposes: expanding a profitable business, funding confirmed demand, acquiring an asset that generates returns, or refinancing expensive existing debt. That's the right use case.
          </P>
          <P>
            The wrong use case is borrowing against your home to fund a business that isn't generating enough to cover the repayments. We've seen it happen. We will tell you if we think you're taking too much risk. That's part of what we do.
          </P>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>What lenders look at</H2>
          <P>
            Property-backed lending is collateral-driven, but lenders don't just look at the property. They want to know you can service the loan.
          </P>
          <Callout>
            <P style={{ margin: 0, fontSize: 14, color: C.black, fontWeight: 500 }}>Key factors lenders assess:</P>
            <div style={{ marginTop: 10, display: "flex", flexDirection: "column", gap: 6 }}>
              {[
                "Property valuation, location, condition, and marketability",
                "Existing encumbrances (mortgages, caveats, charges)",
                "Property type: residential, commercial, industrial, land",
                "Your ability to service the loan from business cash flow or rental income",
                "Personal net worth and existing debt exposure across all facilities",
                "For development: detailed project plans, cost estimates, and track record",
                "Corporate structure and how the property is held",
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                  <Bolt size={10} style={{ marginTop: 5, flexShrink: 0 }} />
                  <span style={{ fontFamily: "Figtree, sans-serif", fontSize: 13, color: "#555", lineHeight: 1.5 }}>{item}</span>
                </div>
              ))}
            </div>
          </Callout>
          <P>
            The property type matters. Commercial property (shophouses, offices, retail, industrial) is generally easier to finance than residential in the investment context, because commercial is not subject to ABSD and the regulatory restrictions are less tight. Land without an existing structure can be harder, especially if there's no clear development plan.
          </P>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>Common mistakes that cost money</H2>
          {[
            { t: "Not knowing your property's current value", d: "Many owners haven't had a valuation done in years. The gap between your purchase price and today's market value is your usable equity. Get a valuation done. You might be surprised." },
            { t: "Paying high unsecured rates when property is available", d: "If you're paying high monthly rates on unsecured working capital while sitting on unencumbered property, a property-backed facility may reduce financing cost and free up cash flow. The trade-off is that the property becomes security." },
            { t: "Using short-term debt for long-term needs", d: "Bridging finance is great for 3 to 6 months. It's terrible for 3 years. If your need is ongoing, structure the facility with a longer tenor. The monthly cost drops dramatically." },
            { t: "Not shopping around", d: "Rates and LTV vary significantly between lenders. The first offer you get may not be the best available. Getting two or three competing offers is often worth the effort." },
            { t: "Ignoring the total cost structure", d: "Look beyond the headline interest rate. Valuation fees, legal fees, processing fees, early repayment penalties, and annual review charges all add up. Compare total cost over the expected life of the facility." },
            { t: "Not preparing documentation properly", d: "Incomplete applications slow everything down. Have your property documents, financial statements, bank statements, and a clear explanation of what the funds are for ready before you approach a lender." },
          ].map((item, i) => (
            <div key={i} style={{ marginBottom: 14 }}>
              <h3 style={{ fontFamily: "Syne, sans-serif", fontSize: 15, fontWeight: 700, color: C.black, marginBottom: 4 }}>{item.t}</h3>
              <P style={{ margin: 0, fontSize: 14 }}>{item.d}</P>
            </div>
          ))}

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>How to prepare before applying</H2>
          <Callout>
            <P style={{ margin: 0, fontSize: 14, color: C.black, fontWeight: 500 }}>Preparation checklist:</P>
            <div style={{ marginTop: 10, display: "flex", flexDirection: "column", gap: 6 }}>
              {[
                "Recent property valuation (or at minimum, comparable transaction data)",
                "Title deed and any existing mortgage documents",
                "Latest 6 months of bank statements (personal and corporate)",
                "Company financial statements (audited or management accounts)",
                "Personal income documents (NOA, payslips, or director's remuneration records)",
                "Details of all existing loans and credit facilities",
                "A clear explanation of what the funds will be used for and how you'll service the repayment",
                "If development: project plans, cost breakdown, timeline, and any pre-sales or pre-leasing commitments",
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                  <span style={{ fontFamily: "Figtree, sans-serif", fontSize: 13, color: C.orange, fontWeight: 700, minWidth: 16 }}>{i + 1}.</span>
                  <span style={{ fontFamily: "Figtree, sans-serif", fontSize: 13, color: "#555", lineHeight: 1.5 }}>{item}</span>
                </div>
              ))}
            </div>
          </Callout>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>When to talk to QuickFund</H2>
          <P>
            If you own property in Singapore and you need capital, there is a very good chance you're either overpaying for financing right now, or you're not using an asset that could be working for you. Either way, you should find out.
          </P>
          <P>
            We are not owned by any lender. No lender has equity in our business. When we recommend a facility, it's because we believe it fits your situation based on the information available to us. If we think you're taking on the wrong kind of debt, we'll say so.
          </P>
          <P>
            We've troubleshot real problems for clients. Term sheets with hidden traps. Facilities that were costing twice what they should have been. Lender relationships that went sideways because nobody read the fine print. We've seen the damage that bad financing does to good businesses, and we've helped fix it.
          </P>
          <P>
            We're interested in a long-term relationship. We don't want to earn a fee today and have you discover six months later that you could have done better. When we place a facility, we want you to come back for the next one, and the one after that. That only happens if every deal is genuinely right for you.
          </P>
          <P>
            We work with banks, finance companies, family offices, and private credit funds. Whether it's a straightforward equity release, a development facility, refinancing expensive existing debt, car refinancing, or structuring something more complex across multiple markets, we've done it before.
          </P>

          <Callout type="dark">
            <P style={{ margin: 0, fontSize: 14, color: C.black, fontWeight: 500, lineHeight: 1.7 }}>
              One more thing. If you already have a property-backed facility, stick with us and we'll keep an eye on the market for you. As your repayment track record builds, as market conditions shift, or as your business grows, you may qualify for a better rate. We'll tell you when it's time to refinance and help you average down your cost of capital over time. That's what a long-term relationship looks like.
            </P>
          </Callout>

          {/* ── INLINE CTAs ── */}
          <div style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 12 }}>
            <a onClick={() => setShowGate(true)} style={{
              display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 22px",
              background: C.orange, borderRadius: 10, cursor: "pointer", textDecoration: "none",
            }}>
              <div>
                <div style={{ fontFamily: "Syne, sans-serif", fontSize: 14, fontWeight: 700, color: "#fff" }}>Download the full Property Investor Guide</div>
                <div style={{ fontFamily: "Figtree, sans-serif", fontSize: 12, color: "rgba(255,255,255,0.7)", marginTop: 2 }}>Includes rate ranges, lender types, case examples, and a preparation checklist</div>
              </div>
              <Bolt size={20} color="#fff" style={{ flexShrink: 0 }} />
            </a>
            <a href="https://quickfund.sg/#tools" style={{
              display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 22px",
              background: "#fff", borderRadius: 10, border: `1.5px solid ${C.greyLight}`, textDecoration: "none",
            }}>
              <div>
                <div style={{ fontFamily: "Syne, sans-serif", fontSize: 14, fontWeight: 700, color: C.black }}>Try the AI Loan Check-Up</div>
                <div style={{ fontFamily: "Figtree, sans-serif", fontSize: 12, color: C.grey, marginTop: 2 }}>10 questions. Free. See what you qualify for.</div>
              </div>
              <Bolt size={20} style={{ flexShrink: 0 }} />
            </a>
            <a href="https://wa.me/6580576702?text=Hi%20QuickFund%2C%20I%20have%20a%20property%20financing%20question" target="_blank" rel="noopener" style={{
              display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 22px",
              background: C.black, borderRadius: 10, textDecoration: "none",
            }}>
              <div>
                <div style={{ fontFamily: "Syne, sans-serif", fontSize: 14, fontWeight: 700, color: "#fff" }}>Talk to our team</div>
                <div style={{ fontFamily: "Figtree, sans-serif", fontSize: 12, color: "rgba(255,255,255,0.5)", marginTop: 2 }}>No forms. Just WhatsApp. We'll get back to you today.</div>
              </div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366" style={{ flexShrink: 0 }}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
            </a>
          </div>
        </Section>
      </article>

      {/* ── OTHER GUIDES ── */}
      <section style={{ padding: "40px 20px 40px", background: C.cream }}>
        <Section>
          <div style={{ fontFamily: "Syne, sans-serif", fontSize: 10, fontWeight: 800, color: C.orange, letterSpacing: "2px", textTransform: "uppercase", marginBottom: 10 }}>More Guides</div>
          <h2 style={{ fontFamily: "Syne, sans-serif", fontSize: 20, fontWeight: 800, color: C.black, marginBottom: 16 }}>Explore other sectors</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {["Doctors and Dentists", "Trading Companies", "Tech Companies", "Startups", "E-commerce", "Software", "F&B", "Construction", "Logistics", "Professional Services", "Retail"].map((s, i) => (
              <a key={i} href={`https://quickfund.sg/guide/${s.toLowerCase().replace(/ /g, "-")}`} style={{
                padding: "7px 14px", borderRadius: 16, fontFamily: "Figtree, sans-serif", fontSize: 12, fontWeight: 500,
                color: C.black, background: "#fff", textDecoration: "none", border: `1px solid ${C.greyLight}`,
              }}>{s}</a>
            ))}
          </div>
        </Section>
      </section>

      {/* ── FOOTER ── */}
      {/* ── SITEMAP ── */}
      <section style={{ padding: "32px 20px 20px", background: C.black }}>
        <Section>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24 }} className="qf-guide-toc">
            <div>
              <div style={{ fontFamily: "Syne, sans-serif", fontSize: 10, fontWeight: 800, color: C.orange, letterSpacing: "2px", textTransform: "uppercase", marginBottom: 10 }}>QuickFund</div>
              {["Home", "AI Tools", "Partners", "FAQ", "Blog", "Responsible Business Promise"].map(l => (
                <a key={l} href={`https://quickfund.sg/${l === "Home" ? "" : l === "AI Tools" ? "#tools" : l === "FAQ" ? "#faq" : l.toLowerCase()}`} style={{ display: "block", fontFamily: "Figtree, sans-serif", fontSize: 12, color: "rgba(255,255,255,0.4)", textDecoration: "none", marginBottom: 6 }}>{l}</a>
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

      {/* ── DISCLAIMER + FOOTER ── */}
      <footer style={{ background: C.black, padding: "0 20px 28px" }}>
        <Section>
          <div style={{ padding: "18px 20px", background: "rgba(255,255,255,0.04)", borderRadius: 8, border: "1px solid rgba(255,255,255,0.06)", marginBottom: 20 }}>
            <p style={{ fontFamily: "Syne, sans-serif", fontSize: 10, fontWeight: 800, color: "rgba(255,255,255,0.4)", letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: 8 }}>
              Important Disclaimer
            </p>
            <p style={{ fontFamily: "Figtree, sans-serif", fontSize: 11, color: "rgba(255,255,255,0.35)", lineHeight: 1.7, margin: 0 }}>
              This guide is published by QuickFund Pte Ltd for general informational purposes only. Nothing in this guide constitutes financial, legal, investment, tax, or professional advice, and nothing should be construed as a recommendation or solicitation to enter into any loan, mortgage, or financial arrangement. QuickFund Pte Ltd is not a licensed financial adviser and does not provide regulated financial, legal, tax or investment advice.
            </p>
            <p style={{ fontFamily: "Figtree, sans-serif", fontSize: 11, color: "rgba(255,255,255,0.35)", lineHeight: 1.7, margin: "8px 0 0" }}>
              All borrowing carries real and significant risks. Secured loans may result in the loss of pledged assets, including property, vehicles, equipment, or shares, in the event of default. Lenders may require personal guarantees, corporate guarantees, share charges, or other forms of security. Property values, asset values, and business conditions can change. Past performance and appreciation are not indicative of future results. All illustrative examples, index data, and projections in this guide are for reference only and may not reflect your specific situation.
            </p>
            <p style={{ fontFamily: "Figtree, sans-serif", fontSize: 11, color: "rgba(255,255,255,0.35)", lineHeight: 1.7, margin: "8px 0 0" }}>
              You are solely responsible for your borrowing decisions, contractual obligations, and the consequences of default. All loan terms, rates, LTV ratios, and conditions are determined by individual lenders and are subject to their own assessment, approval, and due diligence. QuickFund makes no guarantees regarding loan approvals, terms, or outcomes. Seek independent legal and financial advice before entering into any loan, mortgage, or guarantee arrangement.
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <Bolt size={10} color="rgba(255,255,255,0.3)" />
              <span style={{ fontFamily: "Syne, sans-serif", fontSize: 10, fontWeight: 800, color: "rgba(255,255,255,0.3)", textTransform: "uppercase" }}>QuickFund</span>
              <span style={{ fontFamily: "Figtree, sans-serif", fontSize: 10, color: "rgba(255,255,255,0.15)", marginLeft: 4 }}>Part of Levara Advisory Group</span>
            </div>
            <span style={{ fontFamily: "Figtree, sans-serif", fontSize: 10, color: "rgba(255,255,255,0.15)" }}>All rights reserved.</span>
          </div>
        </Section>
      </footer>
    </div>
  );
}
