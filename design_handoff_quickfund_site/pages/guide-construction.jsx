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
    <a href="https://wa.me/6580576702?text=Hi%20QuickFund%2C%20I%20have%20a%20question%20about%20construction%20financing" target="_blank" rel="noopener"
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
        <h3 style={{ fontFamily: "Poppins, sans-serif", fontSize: 20, fontWeight: 800, color: C.black, lineHeight: 1.15, marginBottom: 8 }}>Construction &amp;<br />Contractors<br />Financing Guide</h3>
        <p style={{ fontFamily: "Figtree, sans-serif", fontSize: 13, color: C.grey, lineHeight: 1.5, marginBottom: 14 }}>
          Includes performance bonds, project financing, retention money bridging, equipment financing, and a preparation checklist. Everything on this page plus the detail you need to actually move forward.
        </p>
        <div style={{ display: "flex", background: C.cream, borderRadius: 8, padding: 3, marginBottom: 12 }}>
          {["whatsapp", "email"].map(m => (<button key={m} onClick={() => setMethod(m)} style={{ flex: 1, padding: "7px 0", borderRadius: 6, border: "none", cursor: "pointer", fontFamily: "Poppins, sans-serif", fontSize: 11, fontWeight: 700, background: method === m ? "#fff" : "transparent", color: method === m ? C.black : C.grey }}>{m === "whatsapp" ? "WhatsApp" : "Email"}</button>))}
        </div>
        {method === "whatsapp" ? (<div style={{ display: "flex", gap: 6 }}><span style={{ padding: "10px", background: C.cream, borderRadius: 7, border: `1.5px solid ${C.greyLight}`, fontFamily: "Figtree, sans-serif", fontSize: 13, color: C.grey }}>+65</span><input value={wa} onChange={e => setWa(e.target.value.replace(/\D/g, ""))} placeholder="9123 4567" maxLength={8} className="qf-input" style={{ flex: 1 }} /></div>) : (<input value={email} onChange={e => setEmail(e.target.value)} placeholder="you@company.com" className="qf-input" style={{ width: "100%" }} />)}
        <button onClick={() => { console.log("Construction guide lead:", { wa, email, method }); setDone(true); }} disabled={!ok} style={{ width: "100%", padding: "12px", marginTop: 12, background: !ok ? C.greyLight : C.orange, border: "none", borderRadius: 7, fontFamily: "Poppins, sans-serif", fontSize: 13, fontWeight: 700, color: "#fff", cursor: !ok ? "default" : "pointer" }}>Send Me The Full Guide</button><p style={{ fontFamily: "Figtree, sans-serif", fontSize: 10, color: C.greyLight, marginTop: 8, textAlign: "center" }}>By submitting you consent to being contacted about this guide. <a href="https://quickfund.sg/privacy-policy" style={{ color: C.grey }}>Privacy Policy</a>.</p>
      </div>
    </div>);
}

function ConstructionGuide() {
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
            <a href="https://wa.me/6580576702?text=Hi%20QuickFund%2C%20question%20about%20construction%20financing" target="_blank" rel="noopener" style={{ fontFamily: "Poppins, sans-serif", fontSize: 11, fontWeight: 700, color: "#fff", background: C.black, padding: "7px 14px", borderRadius: 6, textDecoration: "none" }}>WhatsApp</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ padding: "60px 20px 40px" }}>
        <Section>
          <div style={{ fontFamily: "Poppins, sans-serif", fontSize: 10, fontWeight: 800, color: C.orange, letterSpacing: "2px", textTransform: "uppercase", marginBottom: 12 }}>Financing Guide</div>
          <h1 className="qf-guide-hero-h1" style={{ fontFamily: "Poppins, sans-serif", fontSize: 42, fontWeight: 800, color: C.black, lineHeight: 0.95, letterSpacing:"-0.8px", marginBottom: 16 }}>
            Financing for<br />Construction &amp;<br />Contractors<br /><span style={{ color: C.orange }}>in Singapore</span>
          </h1>
          <P style={{ fontSize: 16, maxWidth: 520, color: C.grey }}>
            You do the work first. You get paid later. The gap between spending and collecting is where construction companies live and die. Here's how to finance that gap properly.
          </P>
          <div style={{ display: "flex", gap: 10, marginTop: 20, flexWrap: "wrap" }}>
            <a onClick={() => setShowGate(true)} style={{ fontFamily: "Poppins, sans-serif", fontSize: 13, fontWeight: 700, color: "#fff", background: C.orange, padding: "12px 24px", borderRadius: 8, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 7 }}>Download Full Guide <Bolt size={12} color="#fff" /></a>
            <a href="https://quickfund.sg/#tools" style={{ fontFamily: "Poppins, sans-serif", fontSize: 13, fontWeight: 700, color: C.black, padding: "12px 24px", borderRadius: 8, border: `1.5px solid ${C.greyLight}`, textDecoration: "none" }}>Try the AI Loan Check-Up</a>
          </div>
          <p style={{ fontFamily: "Figtree, sans-serif", fontSize: 11, color: C.greyLight, marginTop: 12 }}>9 min read. Last updated May 2026.</p>
        </Section>
      </section>

      {/* TOC */}
      <section style={{ padding: "0 20px 40px" }}>
        <Section>
          <div className="qf-guide-toc" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
            {[
              "Why construction financing is different",
              "The progress payment cash flow problem",
              "Performance bonds and bank guarantees",
              "Insurance bonds: an alternative to BGs",
              "Project financing",
              "Retention money bridging",
              "Working capital facilities",
              "Equipment and asset financing",
              "Trade finance for materials",
              "Main contractors vs subcontractors",
              "What lenders look at",
              "Common mistakes that sink contractors",
              "Responsible borrowing for construction",
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

          <H2>Why construction financing is different</H2>
          <P>Construction is a cash flow business disguised as a project business. You win a contract worth S$5M, but you don't receive S$5M and then go to work. You start work, you spend money on materials, labour, and equipment, you submit progress claims, and you get paid weeks or months later. Every project is a rolling exercise in spending before you collect.</P>
          <P>On top of that, the client holds back retention money, typically 5 to 10% of each progress payment, until the project is completed and the defects liability period has passed. That retention can be locked up for 12 to 24 months after the project finishes. For a contractor running multiple projects, the total retained amount can be a significant chunk of the company's capital.</P>
          <P>Then there are performance bonds and bank guarantees, which tie up your credit facilities before work even begins. And variation orders, payment disputes, and delayed certifications that push collection dates further out. Construction companies don't fail because they lack work. They fail because the timing of cash in and cash out doesn't align, and they run out of money to fund the gap.</P>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>The progress payment cash flow problem</H2>
          <P>Here's how a typical construction project's cash flow works. You mobilise to site, incurring costs for materials, labour, and equipment. At the end of the month, you submit a progress claim to the client or the main contractor. The claim goes through certification, which can take 2 to 4 weeks. Once certified, the payment terms kick in, typically another 30 to 60 days.</P>
          <P>The total cycle from spending money to receiving it is commonly 60 to 90 days, sometimes longer. If a claim is disputed or under-certified, the cycle extends further. If you're a subcontractor, add another layer: the main contractor receives payment from the client, then pays you on their own terms, which can add another 30 to 60 days.</P>

          <Callout>
            <P style={{ margin: 0, fontSize: 14, color: C.black, fontWeight: 500 }}>A contractor with S$2M in monthly project expenditure and a 90-day collection cycle needs S$6M in working capital just to keep operating. If retention is 10% and you have S$15M in active contracts, that's another S$1.5M locked up. The total capital requirement to fund ongoing operations can easily exceed the profit on the contracts themselves.</P>
          </Callout>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>Performance bonds and bank guarantees</H2>
          <P>Before you can even start work on most projects, you need to post a performance bond. This is a guarantee to the client that if you fail to complete the project, the bond provider will pay the client up to the bond amount. Performance bonds in Singapore are typically 5 to 10% of the contract value, though they can go up to 20% for certain government projects.</P>
          <P>Bank guarantees (BGs) are the traditional way to post these bonds. Your bank issues a guarantee on your behalf, backed by your credit line. The problem is that each BG ties up capacity on your banking facilities. If you have a S$3M trade line and you issue a S$500K BG, you only have S$2.5M available for other purposes. Run three projects simultaneously and your credit line can be fully consumed by bonds alone, leaving nothing for working capital or materials.</P>
          <P>For growing contractors, this creates a ceiling. You can't bid on new projects if you don't have the bonding capacity to support them. Your growth is limited not by your ability to do the work, but by the size of your credit facilities. This is one of the most common constraints in the Singapore construction sector.</P>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>Insurance bonds: an alternative to BGs</H2>
          <P>Insurance bonds are an increasingly popular alternative to bank guarantees for performance bonds. Instead of tying up your bank line, the bond is issued by an insurer. You pay an annual premium, typically 1 to 3% of the bond amount, and the insurer provides the guarantee to the client.</P>
          <P>The key advantage: insurance bonds don't consume your banking facilities. Your entire bank line stays available for working capital, materials financing, and other operational needs. For a contractor juggling multiple projects, this can free up hundreds of thousands or even millions in facility capacity.</P>

          <Callout>
            <P style={{ margin: 0, fontSize: 14, color: C.black, fontWeight: 500 }}>Not all clients accept insurance bonds. Government agencies and statutory boards generally accept them (they're standard in government procurement). Some private sector clients prefer or insist on bank guarantees. Check the tender requirements before assuming an insurance bond will be accepted. For projects where both are accepted, insurance bonds almost always make more sense because they preserve your banking capacity.</P>
          </Callout>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>Project financing</H2>
          <P>Project financing is a facility structured specifically around a confirmed contract. The lender looks at the contract value, the payment milestones, and the creditworthiness of the client, and provides a facility to fund the project execution. As progress payments come in, they're used to repay the facility.</P>
          <P>This is particularly useful for contractors who've won a project that's larger than their usual scope. If you normally handle S$2M projects and you've just won a S$8M contract, you may not have the working capital to fund the ramp-up. Project financing bridges that gap, secured against the contract itself and the receivables it generates.</P>
          <P>The underwriting focuses heavily on the client. A project financed by a government agency or a listed developer is far easier to lend against than a project for a private individual or a small company. The lender's confidence in getting repaid depends on the client's ability and willingness to pay the progress claims on time.</P>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>Retention money bridging</H2>
          <P>Retention money is one of the most frustrating aspects of construction cash flow. The client withholds 5 to 10% of each progress payment as retention, released only after the project is completed and the defects liability period (DLP) has passed. The DLP is typically 12 to 24 months after practical completion. That's money you've earned but can't access for a year or two.</P>
          <P>Retention money bridging facilities let you access a portion of that retained amount now, instead of waiting for the DLP to expire. The lender advances against the retention receivable, and when the retention is eventually released by the client, it's used to repay the facility.</P>
          <P>For contractors with multiple completed projects and significant retention amounts locked up, this can inject substantial liquidity into the business. If you have S$1M in aggregate retention across several projects, a bridging facility might advance 70 to 80% of that, giving you S$700K to S$800K in immediate working capital.</P>

          <Callout type="dark">
            <P style={{ margin: 0, fontSize: 14, color: C.black, fontWeight: 500, lineHeight: 1.7 }}>The risk with retention bridging: if there are defects claims against you during the DLP, the client may deduct from the retention before releasing it. If the deductions are significant, you've borrowed against money you won't fully receive. Make sure you're confident in the quality of the completed work before borrowing against retention.</P>
          </Callout>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>Working capital facilities</H2>
          <P>General working capital facilities cover the day-to-day operational costs that project-specific financing doesn't: payroll, overhead, insurance, office costs, and the gap between projects. Even busy contractors have cash flow troughs between project milestones and between contract awards.</P>
          <P>For established contractors with at least 2 to 3 years of operating history, bank revolving credit facilities are the most cost-effective option. You draw when needed, repay as progress payments come in, and pay interest only on the outstanding balance. For newer or smaller contractors, non-bank lenders and finance companies offer working capital with faster approvals but higher rates.</P>
          <P>The size of your working capital facility should be calibrated to your project pipeline and payment cycles. If your monthly operating costs are S$500K and your average collection period is 60 days, you need at least S$1M in available working capital to operate smoothly. More if you're managing multiple overlapping projects or if your clients have long payment histories.</P>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>Equipment and asset financing</H2>
          <P>Construction equipment is expensive. Excavators, cranes, lorries, compactors, generators, scaffolding. A single piece of heavy equipment can cost S$200K to S$1M or more. Equipment financing, also called hire purchase, lets you acquire these assets without a massive upfront outlay.</P>
          <P>The equipment serves as collateral, so approval is relatively straightforward compared to unsecured lending. You make monthly payments over 3 to 7 years and own the equipment at the end of the term. For heavy equipment with strong resale markets (excavators, cranes, lorries), the terms are typically favourable because the lender's downside is limited.</P>
          <P>If you already own equipment that's fully paid off, you can refinance it to unlock working capital. The lender assesses the current market value and advances a percentage against it. This is a useful option for contractors who are asset-rich but cash-poor, which is common in the construction sector where significant capital is tied up in machinery.</P>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>Trade finance for materials</H2>
          <P>If you're procuring construction materials in bulk, particularly imported materials like steel, aluminium, fittings, or specialised components, trade finance can fund the purchase without using your own cash. Letters of credit and trust receipts work the same way in construction as in any other import-heavy industry.</P>
          <P>For domestic material procurement, some suppliers offer credit terms (30 to 60 days), but larger orders or specialist materials may require upfront payment. Working capital facilities or supplier financing arrangements can bridge this gap. Maintaining good relationships with your key suppliers and their credit terms is a form of free financing that's often undervalued.</P>
          <P>For more detail on how LCs, trust receipts, and trade finance structures work, see our <a href="https://quickfund.sg/guide/trading-companies" style={{ color: C.orange, textDecoration: "none", fontWeight: 500 }}>Trading Companies guide</a>.</P>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>Main contractors vs subcontractors</H2>
          <P>Your financing options depend significantly on whether you're a main contractor or a subcontractor.</P>
          <P>Main contractors have a direct contractual relationship with the client. They submit claims directly, receive progress payments directly, and have more control over the payment timeline. Lenders can underwrite against the main contract and the client's creditworthiness. Bonding capacity is typically with the main contractor. This is a stronger financing position.</P>
          <P>Subcontractors are one step removed. They contract with the main contractor, not the end client. Payment depends on the main contractor receiving payment and then passing it down. This adds an extra layer of risk (what if the main contractor delays payment, or goes insolvent?) and makes financing harder. Lenders assessing a subcontractor will look at the main contractor's creditworthiness and payment history, not just the end client.</P>

          <Callout type="dark">
            <P style={{ margin: 0, fontSize: 14, color: C.black, fontWeight: 500, lineHeight: 1.7 }}>Singapore's Building and Construction Industry Security of Payment Act (SOPA) provides protections for subcontractors around payment timelines and dispute resolution. If you're a subcontractor experiencing delayed payments, SOPA gives you adjudication rights. Understanding your rights under SOPA is important, and it's also something lenders will consider: a subcontractor who enforces their payment rights is a better credit risk than one who doesn't.</P>
          </Callout>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>What lenders look at</H2>
          <P>Construction lending is project-driven. Lenders assess both the company and its project pipeline.</P>
          {[
            { t: "Order book and pipeline", d: "What contracts do you currently hold, and what's the projected value of work over the next 12 to 24 months? A full order book with confirmed contracts from creditworthy clients is the strongest signal. A pipeline of potential bids that haven't been awarded is less compelling." },
            { t: "Client quality", d: "Who are you working for? Government agencies, statutory boards, and listed developers are the best from a lender's perspective. Private sector clients vary widely. A project for a small private developer with limited resources is much riskier than one for a government body that will always pay." },
            { t: "BCA registration and grading", d: "Your BCA (Building and Construction Authority) registration and grading matter. Higher grades indicate the ability to handle larger projects. Lenders use your BCA grade as a proxy for capability and scale. If you're a C3 contractor bidding on projects that require an A2, that's a mismatch that raises questions." },
            { t: "Track record and completion history", d: "How many projects have you completed successfully? Are there any liquidated damages claims, terminated contracts, or disputes on your record? A clean track record of on-time, on-budget completion is one of the strongest assets a contractor can bring to a lender." },
            { t: "Cash flow management", d: "Do your bank statements show consistent cash flow that corresponds to your progress claims? Are there unexplained gaps or overdrafts? Lenders look at your cash flow history as evidence of how well you manage the collection cycle. Contractors with erratic cash flow are harder to finance." },
            { t: "Equipment ownership", d: "Owned equipment is an asset on your balance sheet. It can be used as collateral for facilities and it demonstrates investment in the business. Contractors who rent everything have a lighter balance sheet, which makes lending harder." },
          ].map((item, i) => (
            <div key={i} style={{ marginBottom: 14 }}>
              <h3 style={{ fontFamily: "Poppins, sans-serif", fontSize: 15, fontWeight: 700, color: C.black, marginBottom: 4 }}>{item.t}</h3>
              <P style={{ margin: 0, fontSize: 14 }}>{item.d}</P>
            </div>
          ))}

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>Common mistakes that sink contractors</H2>
          {[
            { t: "Underbidding to win work", d: "Submitting a low bid to win a contract and then hoping to make up the margin through variation orders. If the variations don't materialise, or if the client disputes them, you're locked into a loss-making project that still consumes your working capital and bonding capacity. Price to make a profit. Walking away from a bad contract is better than winning one that loses money." },
            { t: "Running multiple projects without adequate facilities", d: "Each new project consumes working capital, bonding capacity, and management attention. Taking on a third project before the first two are adequately funded creates a domino effect: if one project delays payment, the cash flow squeeze hits all three. Make sure your facilities can support your project load before committing." },
            { t: "Ignoring retention in cash flow planning", d: "Contractors often plan cash flow based on gross claim values and forget that 5 to 10% is retained. Over a S$10M project, that's S$500K to S$1M that won't be available for 12 to 24 months after completion. If you haven't planned for this, you'll find yourself short at exactly the point when you think the project is done and the money should be flowing." },
            { t: "Not using insurance bonds", d: "Many contractors default to bank guarantees for performance bonds because that's what they've always done. Every BG that could be replaced by an insurance bond is wasted credit capacity. Review your existing bonds and check whether any can be converted. For new projects, default to insurance bonds where accepted." },
            { t: "Poor claim management", d: "Submitting incomplete or late progress claims is one of the most avoidable causes of cash flow problems. If your claim is missing documentation, the certification is delayed. If you submit late, the entire payment cycle pushes back. Invest in proper QS (quantity surveying) support and submit clean, complete claims on time, every time." },
          ].map((item, i) => (
            <div key={i} style={{ marginBottom: 14 }}>
              <h3 style={{ fontFamily: "Poppins, sans-serif", fontSize: 15, fontWeight: 700, color: C.black, marginBottom: 4 }}>{item.t}</h3>
              <P style={{ margin: 0, fontSize: 14 }}>{item.d}</P>
            </div>
          ))}

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>Responsible borrowing for construction</H2>
          <P>Construction is a cyclical industry. When the pipeline is full, it feels like the work will never stop. When it slows down, the fixed costs don't slow down with it. Equipment payments, facility interest, and overheads continue regardless of your project load. Debt taken on during a boom can become a burden during a downturn.</P>
          <div style={{ padding: "18px 20px", background: C.cream, borderLeft: `3px solid ${C.black}`, borderRadius: "0 8px 8px 0", marginBottom: 20 }}>
            <P style={{ margin: 0, fontSize: 14, color: C.black, fontWeight: 500, lineHeight: 1.7 }}>Before taking on additional facilities: can your business service the debt if your project pipeline drops by 30 to 40%? If one major client delays payment by 3 months? If a project results in a dispute and payment is withheld during adjudication? The construction sector is full of these scenarios, and they're normal, not exceptional. Build your financing structure to survive them.</P>
          </div>
          {[
            "Can your business service its total debt obligations if the project pipeline drops significantly?",
            "Are your bonding facilities sized appropriately, or are you stretched to the limit?",
            "If your largest client delays payment by 90 days, can you still pay your subcontractors and suppliers?",
            "Have you factored retention holdbacks into your cash flow planning?",
            "Are you comfortable with the personal guarantees and security you're providing?",
          ].map((q, i) => (
            <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 8 }}>
              <span style={{ fontFamily: "Poppins, sans-serif", fontSize: 13, color: C.orange, fontWeight: 800, minWidth: 20 }}>{i + 1}.</span>
              <P style={{ margin: 0, fontSize: 14 }}>{q}</P>
            </div>
          ))}
          <P>Read our <a href="https://quickfund.sg/responsible-business-promise" style={{ color: C.orange, textDecoration: "none", fontWeight: 500 }}>Responsible Business Promise</a> for more on how we think about this.</P>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>When to talk to QuickFund</H2>
          <P>If you're a contractor in Singapore, whether you're a main contractor, a subcontractor, or a specialist trade firm, and you need better bonding capacity, project financing, equipment financing, retention bridging, or working capital, talk to us.</P>
          <P>We are not owned by any lender. No lender has equity in our business. We work across banks, finance companies, insurance bond providers, and alternative lenders. For construction specifically, we understand that the financing isn't just about one facility. It's about the entire structure: bonding, working capital, equipment, and project-specific financing working together to support your operations and growth.</P>
          <P>We've worked with contractors across the grading spectrum, from smaller trade firms to larger main contractors. The financing landscape for construction is complex, with multiple products that need to be coordinated. Getting one facility in place is useful. Getting the whole structure right is transformative.</P>

          <Callout type="dark">
            <P style={{ margin: 0, fontSize: 14, color: C.black, fontWeight: 500, lineHeight: 1.7 }}>If your growth is limited by bonding capacity rather than your ability to do the work, that's a problem we can help solve. Switching from bank guarantees to insurance bonds, structuring project-specific facilities, or expanding your credit line with additional lenders can unlock projects you'd otherwise have to pass on. The cost of constrained growth is often higher than the cost of the financing that would enable it.</P>
          </Callout>

          {/* CTAs */}
          <div style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 12 }}>
            <a onClick={() => setShowGate(true)} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 22px", background: C.orange, borderRadius: 10, cursor: "pointer", textDecoration: "none" }}>
              <div><div style={{ fontFamily: "Poppins, sans-serif", fontSize: 14, fontWeight: 700, color: "#fff" }}>Download the full guide</div><div style={{ fontFamily: "Figtree, sans-serif", fontSize: 12, color: "rgba(255,255,255,0.7)", marginTop: 2 }}>Bonds, project finance, retention bridging, and a preparation checklist</div></div>
              <Bolt size={20} color="#fff" style={{ flexShrink: 0 }} />
            </a>
            <a href="https://quickfund.sg/#tools" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 22px", background: "#fff", borderRadius: 10, border: `1.5px solid ${C.greyLight}`, textDecoration: "none" }}>
              <div><div style={{ fontFamily: "Poppins, sans-serif", fontSize: 14, fontWeight: 700, color: C.black }}>Try the AI Loan Check-Up</div><div style={{ fontFamily: "Figtree, sans-serif", fontSize: 12, color: C.grey, marginTop: 2 }}>10 questions. Free. See what you qualify for.</div></div>
              <Bolt size={20} style={{ flexShrink: 0 }} />
            </a>
            <a href="https://wa.me/6580576702?text=Hi%20QuickFund%2C%20I%20have%20a%20question%20about%20construction%20financing" target="_blank" rel="noopener" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 22px", background: C.black, borderRadius: 10, textDecoration: "none" }}>
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
            {["Property-Backed Loans", "Doctors and Dentists", "Trading Companies", "Tech Companies", "Startups", "E-commerce", "Software", "F&B", "Logistics", "Professional Services", "Retail"].map((s, i) => (
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
              All borrowing carries real and significant risks. Secured loans may result in the loss of pledged assets, including property, vehicles, equipment, or shares, in the event of default. Lenders may require personal guarantees, corporate guarantees, share charges, or other forms of security. Performance bonds and bank guarantees consume credit capacity and carry obligations. Construction project outcomes are subject to delays, disputes, variation orders, and client payment risks. Retention money may be subject to deductions for defects. Equipment values depreciate over time. Business conditions and project pipelines can change.
            </p>
            <p style={{ fontFamily: "Figtree, sans-serif", fontSize: 11, color: "rgba(255,255,255,0.35)", lineHeight: 1.7, margin: "8px 0 0" }}>
              You are solely responsible for your borrowing decisions, contractual obligations, and the consequences of default. All loan terms, rates, and conditions are determined by individual lenders and are subject to their own assessment, approval, and due diligence. QuickFund makes no guarantees regarding loan approvals, terms, or outcomes. Seek independent legal and financial advice before entering into any loan, bond, or guarantee arrangement.
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


module.exports = { ConstructionGuide };
