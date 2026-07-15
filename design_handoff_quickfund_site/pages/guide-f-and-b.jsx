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
    <a href="https://wa.me/6580576702?text=Hi%20QuickFund%2C%20I%20have%20a%20question%20about%20F%26B%20financing" target="_blank" rel="noopener"
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
        <h3 style={{ fontFamily: "Poppins, sans-serif", fontSize: 20, fontWeight: 800, color: C.black, lineHeight: 1.15, marginBottom: 8 }}>F&amp;B &amp; Hospitality<br />Financing Guide</h3>
        <p style={{ fontFamily: "Figtree, sans-serif", fontSize: 13, color: C.grey, lineHeight: 1.5, marginBottom: 14 }}>
          Includes equipment financing, renovation options, working capital, revenue-based lending, and a preparation checklist. Everything on this page plus the detail you need to actually move forward.
        </p>
        <div style={{ display: "flex", background: C.cream, borderRadius: 8, padding: 3, marginBottom: 12 }}>
          {["whatsapp", "email"].map(m => (<button key={m} onClick={() => setMethod(m)} style={{ flex: 1, padding: "7px 0", borderRadius: 6, border: "none", cursor: "pointer", fontFamily: "Poppins, sans-serif", fontSize: 11, fontWeight: 700, background: method === m ? "#fff" : "transparent", color: method === m ? C.black : C.grey }}>{m === "whatsapp" ? "WhatsApp" : "Email"}</button>))}
        </div>
        {method === "whatsapp" ? (<div style={{ display: "flex", gap: 6 }}><span style={{ padding: "10px", background: C.cream, borderRadius: 7, border: `1.5px solid ${C.greyLight}`, fontFamily: "Figtree, sans-serif", fontSize: 13, color: C.grey }}>+65</span><input value={wa} onChange={e => setWa(e.target.value.replace(/\D/g, ""))} placeholder="9123 4567" maxLength={8} className="qf-input" style={{ flex: 1 }} /></div>) : (<input value={email} onChange={e => setEmail(e.target.value)} placeholder="you@company.com" className="qf-input" style={{ width: "100%" }} />)}
        <button onClick={() => { console.log("FnB guide lead:", { wa, email, method }); setDone(true); }} disabled={!ok} style={{ width: "100%", padding: "12px", marginTop: 12, background: !ok ? C.greyLight : C.orange, border: "none", borderRadius: 7, fontFamily: "Poppins, sans-serif", fontSize: 13, fontWeight: 700, color: "#fff", cursor: !ok ? "default" : "pointer" }}>Send Me The Full Guide</button><p style={{ fontFamily: "Figtree, sans-serif", fontSize: 10, color: C.greyLight, marginTop: 8, textAlign: "center" }}>By submitting you consent to being contacted about this guide. <a href="https://quickfund.sg/privacy-policy" style={{ color: C.grey }}>Privacy Policy</a>.</p>
      </div>
    </div>);
}

function FnBGuide() {
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
            <a href="https://wa.me/6580576702?text=Hi%20QuickFund%2C%20question%20about%20F%26B%20financing" target="_blank" rel="noopener" style={{ fontFamily: "Poppins, sans-serif", fontSize: 11, fontWeight: 700, color: "#fff", background: C.black, padding: "7px 14px", borderRadius: 6, textDecoration: "none" }}>WhatsApp</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ padding: "60px 20px 40px" }}>
        <Section>
          <div style={{ fontFamily: "Poppins, sans-serif", fontSize: 10, fontWeight: 800, color: C.orange, letterSpacing: "2px", textTransform: "uppercase", marginBottom: 12 }}>Financing Guide</div>
          <h1 className="qf-guide-hero-h1" style={{ fontFamily: "Poppins, sans-serif", fontSize: 42, fontWeight: 800, color: C.black, lineHeight: 0.95, letterSpacing:"-0.8px", marginBottom: 16 }}>
            Financing for<br />F&amp;B &amp; Hospitality<br /><span style={{ color: C.orange }}>in Singapore</span>
          </h1>
          <P style={{ fontSize: 16, maxWidth: 520, color: C.grey }}>
            We'll be straight with you. F&amp;B is the hardest sector to get financing for. The failure rates are high, the margins are thin, and most banks won't touch it. But options do exist, and here's how they work.
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
              "Why F&B financing is hard",
              "Why banks usually say no",
              "The real cost of opening an outlet",
              "Equipment financing",
              "Renovation financing",
              "Working capital facilities",
              "Revenue-based financing",
              "Property-backed lending",
              "Multi-outlet vs single-outlet financing",
              "What lenders look at in F&B",
              "Common mistakes that close restaurants",
              "Responsible borrowing for F&B",
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

          <H2>Why F&amp;B financing is hard</H2>
          <P>There's no gentle way to say this: F&amp;B is the hardest sector to get financing for. Lenders know the statistics. A significant percentage of restaurants, cafes, and bars in Singapore close within their first few years. The ones that survive often operate on net margins of 5 to 15%. The ones that thrive are the exception, not the rule.</P>
          <P>From a lender's perspective, F&amp;B businesses have almost everything working against them. High upfront capital requirements (renovation, equipment, deposits). Thin margins that leave no room for error. High fixed costs (rent, staff) that don't flex when revenue dips. Perishable inventory with zero resale value. And a competitive landscape in Singapore where new concepts open and close constantly.</P>
          <P>None of this means financing is impossible. It means the options are narrower, the terms are tougher, and the scrutiny is deeper than in most other sectors. If you understand that going in, you can navigate it. If you expect it to be easy, you'll be frustrated.</P>

          <Callout type="dark">
            <P style={{ margin: 0, fontSize: 14, color: C.black, fontWeight: 500, lineHeight: 1.7 }}>We're not writing this to discourage you. We're writing it because the worst thing you can do is take on debt without understanding how hard this sector is to finance. F&amp;B operators who succeed with financing are the ones who go in with clear eyes, realistic numbers, and a genuine understanding of their break-even point.</P>
          </Callout>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>Why banks usually say no</H2>
          <P>If you've already been to your bank and been declined, you're not alone. Banks assess F&amp;B businesses the same way they assess any other company: financial statements, profitability, asset base. For a new outlet with no trading history, there's nothing to assess. For an existing outlet with thin margins, the numbers rarely meet banking thresholds.</P>
          <P>Banks also look at the collateral. In most F&amp;B businesses, there's almost none. Kitchen equipment depreciates fast and has limited resale value. Renovations are tied to the lease and worth nothing if you vacate. Inventory is perishable. The lease itself isn't an asset you own. There's very little for a bank to recover if the business fails, and the probability of failure is statistically high.</P>
          <P>The result: for most F&amp;B businesses, especially single outlets and newer operations, the financing path runs through non-bank lenders, finance companies, and fintech platforms. These lenders have different risk appetites and different pricing models. The rates will be higher than bank rates, but the door is actually open.</P>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>The real cost of opening an outlet</H2>
          <P>One of the most common mistakes in F&amp;B is underestimating the total capital required. The renovation and equipment are just the beginning. Here's what the full picture typically looks like for a restaurant or cafe in Singapore.</P>
          {[
            { t: "Renovation and fit-out", d: "S$150K to S$500K or more depending on the size, location, and concept. A simple cafe fit-out is at the lower end. A full-service restaurant in a prime location can easily exceed S$500K. This is usually the single largest upfront cost, and it has zero salvage value if you close." },
            { t: "Kitchen equipment", d: "S$50K to S$200K for a commercial kitchen. Ovens, ranges, cold rooms, prep tables, exhaust systems, dishwashers, POS systems. Some of this can be financed through hire purchase, which spreads the cost over 2 to 5 years." },
            { t: "Deposit and advance rent", d: "Typically 3 to 6 months of rent upfront. In a prime area where rent is S$15K to S$30K per month, that's S$45K to S$180K locked up before you serve a single customer." },
            { t: "Licences and compliance", d: "Food shop licence, liquor licence (if applicable), fire safety, environmental health. Costs vary but budget S$5K to S$20K including consultants and fees." },
            { t: "Working capital buffer", d: "3 to 6 months of operating expenses (rent, staff, food cost, utilities) to cover the ramp-up period before the outlet reaches steady state. For a restaurant with monthly operating costs of S$80K, that's S$240K to S$480K. This is the line item most operators underestimate." },
          ].map((item, i) => (
            <div key={i} style={{ marginBottom: 12, padding: "14px 16px", background: "#fff", borderRadius: 8, border: `1px solid ${C.greyLight}` }}>
              <h3 style={{ fontFamily: "Poppins, sans-serif", fontSize: 14, fontWeight: 700, color: C.black, marginBottom: 4 }}>{item.t}</h3>
              <P style={{ margin: 0, fontSize: 13 }}>{item.d}</P>
            </div>
          ))}
          <P>The total? For a mid-range restaurant in Singapore, S$500K to S$1M or more is realistic. Many first-time operators budget for renovation and equipment and forget the working capital buffer, which is often where the business fails: not because the food is bad, but because they run out of cash before the outlet finds its footing.</P>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>Equipment financing</H2>
          <P>Kitchen and hospitality equipment is the one area where F&amp;B businesses can access relatively straightforward financing. Equipment financing, also called hire purchase, lets you acquire commercial kitchen equipment, POS systems, cold storage, beverage systems, and other fixed assets without paying the full amount upfront.</P>
          <P>The equipment serves as the collateral, so the lender's risk is partially covered by the asset value. You make monthly payments over 2 to 5 years and own the equipment outright at the end of the term. The approval process is typically faster and simpler than a general business loan because the lender is secured against a tangible asset.</P>
          <P>This is usually the most accessible form of financing for new F&amp;B outlets. Even operators with no trading history can often get equipment financing approved if the equipment is from a reputable supplier and has reasonable resale value. Some equipment suppliers also offer financing directly or through partnered finance companies, which can simplify the process.</P>

          <Callout>
            <P style={{ margin: 0, fontSize: 14, color: C.black, fontWeight: 500 }}>If you already own equipment that's fully paid off, you can potentially refinance it to unlock working capital. The lender assesses the current market value of the equipment and advances a percentage against it. This is useful for established outlets that need cash but don't want to take on unsecured debt.</P>
          </Callout>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>Renovation financing</H2>
          <P>Renovation is typically the largest single expense in opening an F&amp;B outlet, and it's also the hardest to finance. The reason is simple: a renovation has no resale value. If your restaurant closes, the built-in kitchen, the custom joinery, the flooring, and the lighting are worth nothing. They belong to the landlord or get ripped out by the next tenant.</P>
          <P>Some non-bank lenders and finance companies will provide renovation financing, but the terms reflect the risk. Expect higher rates than equipment financing (because there's no recoverable asset), shorter tenors (typically 1 to 3 years), and requirements for additional security such as personal guarantees or a charge over other assets.</P>
          <P>For larger renovation projects, some operators use a combination of approaches: equipment financing for the kitchen, a separate facility for the renovation, and personal savings or property equity for the deposit and working capital. Splitting the total capital requirement across multiple financing sources, each matched to the appropriate asset type, is often more practical than trying to fund everything through a single facility.</P>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>Working capital facilities</H2>
          <P>Working capital is the oxygen of an F&amp;B business. Rent is due whether you had a good week or a bad one. Staff need to be paid. Suppliers deliver on credit terms that typically range from 7 to 30 days. Utilities, delivery platform commissions, and other operating costs are constant. Without enough working capital, even a popular outlet can fail.</P>
          <P>For established F&amp;B businesses with at least 12 to 24 months of operating history and consistent revenue, working capital facilities from non-bank lenders and fintech platforms are available. These are typically short-term facilities (6 to 18 months) with repayments structured around your cash flow cycle.</P>
          <P>For new outlets in the ramp-up phase, working capital financing is extremely difficult to obtain from institutional lenders because there's no track record. This is where personal savings, founder property equity, or family investment typically fill the gap. Entering F&amp;B without a working capital buffer of at least 3 to 6 months of operating expenses is one of the riskiest things an operator can do.</P>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>Revenue-based financing</H2>
          <P>If your F&amp;B business generates consistent daily revenue, revenue-based financing (RBF) is worth exploring. The lender connects to your POS system or payment processor and underwrites based on actual transaction data. They advance a multiple of your monthly revenue, and repayments are taken as a fixed percentage of daily or weekly sales.</P>
          <P>The flex structure is what makes RBF attractive for F&amp;B. A quiet Tuesday means a smaller repayment. A packed Saturday means a larger one. You're never stuck with a fixed monthly payment that doesn't reflect how the business is actually performing. For seasonal or cyclical F&amp;B businesses, this flexibility can be the difference between manageable debt and cash flow suffocation.</P>
          <P>The cost is expressed as a factor rate. For F&amp;B businesses, expect factor rates at the higher end of the range because lenders price in the sector risk. The total cost will be more than equipment financing or a property-backed facility. But for operators who need working capital and don't have hard assets to pledge, RBF may be the most accessible option.</P>

          <Callout type="dark">
            <P style={{ margin: 0, fontSize: 14, color: C.black, fontWeight: 500, lineHeight: 1.7 }}>RBF lenders will look at your daily sales data closely. Consistent revenue over at least 6 to 12 months is typically required. A new outlet that's only been open for 3 months will struggle to qualify. Build a track record of consistent sales before applying.</P>
          </Callout>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>Property-backed lending</H2>
          <P>If you or your business partners own residential or commercial property in Singapore, this is often the most powerful financing tool available to an F&amp;B operator. Property-backed facilities offer materially better terms than anything else in this sector: lower rates, higher quantum, longer repayment periods.</P>
          <P>For many successful F&amp;B operators, particularly those opening their first outlet, personal property is what makes the entire venture financially viable. The property provides the security that the F&amp;B business itself cannot offer, and the facility can fund renovation, equipment, deposits, and the critical working capital buffer all in one.</P>

          <Callout type="dark">
            <P style={{ margin: 0, fontSize: 14, color: C.black, fontWeight: 500, lineHeight: 1.7 }}>This needs to be said bluntly: if your restaurant fails and you've pledged your home to fund it, you can lose your home. F&amp;B has one of the highest failure rates of any sector. Pledging personal property to open a restaurant is a high-stakes bet. Only do this if you've genuinely stress-tested the business plan, you have enough working capital buffer to survive a slow start, and you can absorb the downside personally and financially. For more detail, read our <a href="https://quickfund.sg/guide/property-backed-loans" style={{ color: C.orange, textDecoration: "none", fontWeight: 600 }}>Property-Backed Loans guide</a>.</P>
          </Callout>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>Multi-outlet vs single-outlet financing</H2>
          <P>If you're a single-outlet operator, your financing options are narrower. The lender's risk is concentrated in one location. If that location underperforms, there's no diversification. A single bad lease, a road closure for construction, or a shift in foot traffic can impact the entire business.</P>
          <P>Multi-outlet operators have a structural advantage when it comes to financing. Revenue is diversified across locations. If one outlet has a slow month, the others can compensate. The combined revenue base is larger, which supports larger facilities. And the lender sees a proven ability to replicate: if you've successfully opened and operated 3 outlets, the risk of outlet number 4 failing is perceived to be lower.</P>
          <P>The transition from single outlet to multi-outlet is often where F&amp;B operators first need institutional financing. The first outlet was funded with savings and sweat equity. The second and third require more capital than most operators have available. If your first outlet is performing well and you have at least 12 to 18 months of strong trading history, this is a good time to talk to us about financing options for expansion.</P>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>What lenders look at in F&amp;B</H2>
          <P>F&amp;B lending is conservative. Lenders in this space have seen too many closures to be optimistic without evidence. Here's what they assess.</P>
          {[
            { t: "Trading history", d: "How long has the outlet been operating, and what do the numbers look like? At least 12 months of consistent revenue is typically the minimum for most facilities. 24 months is better. A new outlet with 3 months of history will struggle to get approved for anything beyond equipment financing." },
            { t: "Revenue consistency", d: "Lenders look at daily, weekly, and monthly revenue patterns. They want to see that the business generates consistent income, not that it had one amazing month followed by three mediocre ones. POS data is increasingly requested as part of the underwriting process." },
            { t: "Food cost and gross margin", d: "Food cost as a percentage of revenue is one of the most scrutinised metrics. Below 30% is good. Between 30 and 35% is acceptable. Above 35% raises questions about menu pricing, waste management, and operational efficiency. Lenders want to see that there's enough margin to cover fixed costs, debt service, and still leave a profit." },
            { t: "Rent as a percentage of revenue", d: "If rent is more than 15 to 20% of revenue, lenders get nervous. High rent relative to revenue means the business is vulnerable: any dip in sales pushes it toward break-even or loss. Location matters, but not at the expense of unit economics." },
            { t: "Lease terms", d: "How long is the remaining lease? If your lease has 12 months remaining and no option to renew, a lender won't provide a 3-year facility. They want to see a lease that's longer than the loan term, or a credible renewal option. Lease expiry risk is one of the biggest concerns in F&amp;B lending." },
            { t: "Operator experience", d: "Have you run F&amp;B businesses before? A first-time operator is a materially higher risk than someone with 10 years and multiple outlets behind them. If you're new to F&amp;B, expect more scrutiny and potentially a requirement for additional security." },
          ].map((item, i) => (
            <div key={i} style={{ marginBottom: 14 }}>
              <h3 style={{ fontFamily: "Poppins, sans-serif", fontSize: 15, fontWeight: 700, color: C.black, marginBottom: 4 }}>{item.t}</h3>
              <P style={{ margin: 0, fontSize: 14 }}>{item.d}</P>
            </div>
          ))}

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>Common mistakes that close restaurants</H2>
          {[
            { t: "Underestimating working capital", d: "The renovation is done, the kitchen is equipped, the doors are open. And then there are 3 months of slow ramp-up where daily revenue doesn't cover daily costs. Without a cash buffer to survive this period, the business dies not because the concept failed, but because it ran out of money before it had time to find its audience." },
            { t: "Borrowing for renovation without a working capital plan", d: "An operator takes a S$300K facility, spends it all on renovation and equipment, and opens with zero working capital. Every slow day becomes a crisis. Every supplier payment is a scramble. This is one of the most common patterns we see in F&amp;B failures. The facility should have covered renovation, equipment, and 3 to 6 months of operating buffer." },
            { t: "Choosing location by aspiration, not economics", d: "A prime location with S$25K monthly rent needs to generate at least S$125K to S$170K in monthly revenue just to keep rent at 15 to 20% of sales. Can your concept realistically achieve that? If the answer requires 300 covers a day at a 40-seater, the math doesn't work. Run the unit economics before signing the lease, not after." },
            { t: "Stacking personal debt", d: "Credit cards, personal loans, borrowing from friends and family, plus a business facility, plus a property pledge. The total personal exposure becomes enormous. If the business fails, the operator isn't just losing a restaurant. They're losing their savings, their home, and their personal relationships. Know your total exposure across all sources." },
            { t: "Expanding too fast", d: "One outlet is doing well, so the operator opens a second and a third in rapid succession, funding each with debt. If the new outlets underperform, the debt from all three outlets becomes a combined burden that even the profitable first outlet can't support. Expand deliberately, with each outlet proven before the next one opens." },
          ].map((item, i) => (
            <div key={i} style={{ marginBottom: 14 }}>
              <h3 style={{ fontFamily: "Poppins, sans-serif", fontSize: 15, fontWeight: 700, color: C.black, marginBottom: 4 }}>{item.t}</h3>
              <P style={{ margin: 0, fontSize: 14 }}>{item.d}</P>
            </div>
          ))}

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>Responsible borrowing for F&amp;B</H2>
          <P>This section matters more for F&amp;B than for any other sector in this guide series. The combination of thin margins, high fixed costs, high failure rates, and personal guarantees means the consequences of getting it wrong are severe. Restaurants don't just fail on paper. They fail in a way that affects real people's lives, savings, and families.</P>
          <div style={{ padding: "18px 20px", background: C.cream, borderLeft: `3px solid ${C.black}`, borderRadius: "0 8px 8px 0", marginBottom: 20 }}>
            <P style={{ margin: 0, fontSize: 14, color: C.black, fontWeight: 500, lineHeight: 1.7 }}>Before you borrow a single dollar: have you built a realistic financial model? Not a best-case scenario. A realistic one. What revenue do you need to break even? How many covers, at what average spend, how many days a week? What if revenue is 30% below your projection for the first 6 months? Can you survive that? If you can't answer these questions with real numbers, you're not ready to borrow.</P>
          </div>
          {[
            "Do you have a working capital buffer of at least 3 to 6 months of operating expenses beyond the renovation and equipment costs?",
            "If revenue is 30% below your projection for the first 6 months, can you survive without defaulting?",
            "Do you know your exact break-even point in daily covers and average transaction value?",
            "Are you comfortable with the personal guarantees and personal assets you're putting at risk?",
            "Have you stress-tested your rent as a percentage of realistically achievable revenue, not aspirational revenue?",
            "If the business fails, can you absorb the personal financial consequences without losing your home?",
          ].map((q, i) => (
            <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 8 }}>
              <span style={{ fontFamily: "Poppins, sans-serif", fontSize: 13, color: C.orange, fontWeight: 800, minWidth: 20 }}>{i + 1}.</span>
              <P style={{ margin: 0, fontSize: 14 }}>{q}</P>
            </div>
          ))}
          <P>We don't say this about every sector, but we'll say it about F&amp;B: if the numbers don't work comfortably on paper, don't borrow. The passion for food and hospitality that drives great operators is the same passion that can lead them to take on more risk than the business can support. Passion doesn't pay rent. Read our <a href="https://quickfund.sg/responsible-business-promise" style={{ color: C.orange, textDecoration: "none", fontWeight: 500 }}>Responsible Business Promise</a> for more.</P>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>When to talk to QuickFund</H2>
          <P>If you're an F&amp;B operator in Singapore and you need financing, talk to us. We won't promise it will be easy, and we won't tell you what you want to hear if the numbers don't support it. What we will do is give you an honest assessment of what's available, what the realistic terms look like, and whether borrowing makes sense for your specific situation.</P>
          <P>We are not owned by any lender. No lender has equity in our business. We work across finance companies, non-bank lenders, fintech platforms, and in some cases, banks. For F&amp;B specifically, the lender universe is narrower than in other sectors, which makes knowing who will actually look at your application even more important. We know which lenders are active in F&amp;B, what they require, and how to present your business in the strongest possible light.</P>
          <P>We've worked with single-outlet operators opening their first cafe, multi-outlet groups expanding across Singapore, and hospitality businesses that needed to restructure after a difficult period. Each situation is different, and the right financing structure depends on your stage, your trading history, and your personal risk appetite.</P>

          <Callout type="dark">
            <P style={{ margin: 0, fontSize: 14, color: C.black, fontWeight: 500, lineHeight: 1.7 }}>If you're a multi-outlet operator with at least 12 to 18 months of consistent trading history, you're in a stronger position than you might think. The F&amp;B financing market is narrow, but for operators with proven concepts and real numbers, there are options. The worst thing you can do is assume the door is closed without checking.</P>
          </Callout>

          {/* CTAs */}
          <div style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 12 }}>
            <a onClick={() => setShowGate(true)} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 22px", background: C.orange, borderRadius: 10, cursor: "pointer", textDecoration: "none" }}>
              <div><div style={{ fontFamily: "Poppins, sans-serif", fontSize: 14, fontWeight: 700, color: "#fff" }}>Download the full guide</div><div style={{ fontFamily: "Figtree, sans-serif", fontSize: 12, color: "rgba(255,255,255,0.7)", marginTop: 2 }}>Equipment, renovation, working capital, RBF, and a preparation checklist</div></div>
              <Bolt size={20} color="#fff" style={{ flexShrink: 0 }} />
            </a>
            <a href="https://quickfund.sg/#tools" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 22px", background: "#fff", borderRadius: 10, border: `1.5px solid ${C.greyLight}`, textDecoration: "none" }}>
              <div><div style={{ fontFamily: "Poppins, sans-serif", fontSize: 14, fontWeight: 700, color: C.black }}>Try the AI Loan Check-Up</div><div style={{ fontFamily: "Figtree, sans-serif", fontSize: 12, color: C.grey, marginTop: 2 }}>10 questions. Free. See what you qualify for.</div></div>
              <Bolt size={20} style={{ flexShrink: 0 }} />
            </a>
            <a href="https://wa.me/6580576702?text=Hi%20QuickFund%2C%20I%20have%20a%20question%20about%20F%26B%20financing" target="_blank" rel="noopener" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 22px", background: C.black, borderRadius: 10, textDecoration: "none" }}>
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
            {["Property-Backed Loans", "Doctors and Dentists", "Trading Companies", "Tech Companies", "Startups", "E-commerce", "Software", "Construction", "Logistics", "Professional Services", "Retail"].map((s, i) => (
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
              All borrowing carries real and significant risks. The F&amp;B and hospitality sector has a high rate of business failure. Secured loans may result in the loss of pledged assets, including property, vehicles, equipment, or shares, in the event of default. Lenders may require personal guarantees, corporate guarantees, or other forms of security. Property values, equipment values, and business conditions can change. Revenue-based financing costs depend on repayment speed and may result in higher effective interest rates than anticipated. Renovation expenditure typically has no recoverable value in the event of business closure.
            </p>
            <p style={{ fontFamily: "Figtree, sans-serif", fontSize: 11, color: "rgba(255,255,255,0.35)", lineHeight: 1.7, margin: "8px 0 0" }}>
              You are solely responsible for your borrowing decisions, contractual obligations, and the consequences of default. All loan terms, rates, and conditions are determined by individual lenders and are subject to their own assessment, approval, and due diligence. QuickFund makes no guarantees regarding loan approvals, terms, or outcomes. Seek independent legal and financial advice before entering into any loan, mortgage, or guarantee arrangement.
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


module.exports = { FnBGuide };
