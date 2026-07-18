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
    <a href="https://wa.me/6580576702?text=Hi%20QuickFund%2C%20I%20have%20a%20question%20about%20logistics%20financing" target="_blank" rel="noopener"
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
        <h3 style={{ fontFamily: "Poppins, sans-serif", fontSize: 20, fontWeight: 800, color: C.black, lineHeight: 1.15, marginBottom: 8 }}>Logistics &amp;<br />Transport<br />Financing Guide</h3>
        <p style={{ fontFamily: "Figtree, sans-serif", fontSize: 13, color: C.grey, lineHeight: 1.5, marginBottom: 14 }}>
          Includes fleet financing, hire purchase, vehicle refinancing, invoice financing, floorstock options, and a preparation checklist.
        </p>
        <div style={{ display: "flex", background: C.cream, borderRadius: 8, padding: 3, marginBottom: 12 }}>
          {["whatsapp", "email"].map(m => (<button key={m} onClick={() => setMethod(m)} style={{ flex: 1, padding: "7px 0", borderRadius: 6, border: "none", cursor: "pointer", fontFamily: "Poppins, sans-serif", fontSize: 11, fontWeight: 700, background: method === m ? "#fff" : "transparent", color: method === m ? C.black : C.grey }}>{m === "whatsapp" ? "WhatsApp" : "Email"}</button>))}
        </div>
        {method === "whatsapp" ? (<div style={{ display: "flex", gap: 6 }}><span style={{ padding: "10px", background: C.cream, borderRadius: 7, border: `1.5px solid ${C.greyLight}`, fontFamily: "Figtree, sans-serif", fontSize: 13, color: C.grey }}>+65</span><input value={wa} onChange={e => setWa(e.target.value.replace(/\D/g, ""))} placeholder="9123 4567" maxLength={8} className="qf-input" style={{ flex: 1 }} /></div>) : (<input value={email} onChange={e => setEmail(e.target.value)} placeholder="you@company.com" className="qf-input" style={{ width: "100%" }} />)}
        <button onClick={() => { fetch("/api/lead", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ guide: "Logistics", contact: { method, wa, email } }) }).catch(() => {}); setDone(true); }} disabled={!ok} style={{ width: "100%", padding: "12px", marginTop: 12, background: !ok ? C.greyLight : C.orange, border: "none", borderRadius: 7, fontFamily: "Poppins, sans-serif", fontSize: 13, fontWeight: 700, color: "#fff", cursor: !ok ? "default" : "pointer" }}>Send Me The Full Guide</button><p style={{ fontFamily: "Figtree, sans-serif", fontSize: 10, color: C.greyLight, marginTop: 8, textAlign: "center" }}>By submitting you consent to being contacted about this guide. <a href="/privacy-policy" style={{ color: C.grey }}>Privacy Policy</a>.</p>
      </div>
    </div>);
}

function LogisticsGuide() {
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
            <a href="https://wa.me/6580576702?text=Hi%20QuickFund%2C%20question%20about%20logistics%20financing" target="_blank" rel="noopener" style={{ fontFamily: "Poppins, sans-serif", fontSize: 11, fontWeight: 700, color: "#fff", background: C.black, padding: "7px 14px", borderRadius: 6, textDecoration: "none" }}>WhatsApp</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ padding: "60px 20px 40px" }}>
        <Section>
          <div style={{ fontFamily: "Poppins, sans-serif", fontSize: 10, fontWeight: 800, color: C.orange, letterSpacing: "2px", textTransform: "uppercase", marginBottom: 12 }}>Financing Guide</div>
          <h1 className="qf-guide-hero-h1" style={{ fontFamily: "Poppins, sans-serif", fontSize: 42, fontWeight: 800, color: C.black, lineHeight: 0.95, letterSpacing:"-0.8px", marginBottom: 16 }}>
            Financing for<br />Logistics &amp;<br />Transport<br /><span style={{ color: C.orange }}>in Singapore</span>
          </h1>
          <P style={{ fontSize: 16, maxWidth: 520, color: C.grey }}>
            Your fleet is your business. Vehicles are expensive, customers pay on terms, and growth means more trucks on the road. Here's how to finance expansion without running out of cash.
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
              "Why logistics financing is different",
              "Hire purchase and fleet financing",
              "Vehicle refinancing to unlock cash",
              "Dealer floorstock financing",
              "Equipment and asset financing",
              "Invoice financing for logistics",
              "Working capital facilities",
              "Property-backed lending",
              "COE, depreciation, and fleet planning",
              "What lenders look at",
              "Common mistakes in fleet financing",
              "Responsible borrowing for logistics",
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

          <H2>Why logistics financing is different</H2>
          <P>Logistics and transport businesses are asset-heavy by nature. Your fleet is the core of the operation. Every truck, van, or vehicle on the road represents a significant capital investment, and in Singapore, where COE premiums make vehicles exceptionally expensive, that investment is even larger than in most other markets.</P>
          <P>The good news is that this asset-heavy profile actually works in your favour when it comes to financing. Vehicles are tangible, valued easily, and have liquid resale markets. Lenders love lending against assets they can value and recover. Compared to services businesses or software companies, logistics companies often have an easier time accessing secured facilities because the collateral is sitting in the yard.</P>
          <P>The challenge is that logistics margins are typically thin. Fuel, labour, road tax, insurance, maintenance, and vehicle depreciation all eat into revenue. A logistics company might be turning over S$10M but making S$300K to S$500K in net profit. That means the financing needs to be structured carefully: the monthly repayment burden across all fleet financing, working capital, and other facilities has to fit within those thin margins, with enough buffer for fuel price spikes, vehicle breakdowns, and customer payment delays.</P>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>Hire purchase and fleet financing</H2>
          <P>Hire purchase (HP) is the most common way to finance commercial vehicles in Singapore. The lender purchases the vehicle on your behalf. You make monthly instalments over 3 to 7 years (5 years is most common for commercial vehicles). At the end of the term, you own the vehicle outright.</P>
          <P>The vehicle serves as collateral, which means HP approvals are more straightforward than unsecured lending. The lender's risk is partially covered by the vehicle's value. Typical financing covers 70 to 90% of the vehicle price, meaning you'll need a down payment of 10 to 30%. For commercial vehicles (lorries, vans, prime movers), lenders are generally comfortable because these vehicles have established resale markets.</P>

          <Callout>
            <P style={{ margin: 0, fontSize: 14, color: C.black, fontWeight: 500 }}>When expanding your fleet, don't just compare interest rates across lenders. Look at the total package: down payment requirement, whether there's an early repayment penalty, what happens if the vehicle is written off in an accident (gap insurance may be required), and whether the lender offers fleet-level terms if you're financing multiple vehicles. A lender who offers slightly higher rates but lower down payments may be the better choice if you need to preserve cash for operations.</P>
          </Callout>

          <P>For operators financing multiple vehicles simultaneously, some lenders offer fleet financing packages with better terms based on the total portfolio. If you're adding 5 or 10 vehicles at once, approach it as a fleet deal rather than individual HP applications. The combined volume gives you negotiating leverage.</P>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>Vehicle refinancing to unlock cash</H2>
          <P>If you own vehicles outright, or if you have significant equity in vehicles that are partially financed, you can refinance them to unlock working capital. The lender assesses the current market value of the vehicle, applies an LTV ratio, and extends a facility against it.</P>
          <P>This is particularly useful for logistics operators who are asset-rich but cash-poor. Your fleet might be worth S$1M in total, but you need S$200K for working capital or to put a down payment on new vehicles. Refinancing two or three paid-off trucks can free up that capital without selling the vehicles or taking on unsecured debt.</P>
          <P>The key factor is the vehicle's remaining useful life and its current market value. Older vehicles with limited remaining COE life will attract lower valuations and less favourable terms. Newer vehicles with significant residual value are easier and more cost-effective to refinance.</P>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>Dealer floorstock financing</H2>
          <P>If you're a vehicle dealer or you hold inventory of vehicles for sale or lease, floorstock financing (also called floor plan financing) can fund that inventory. The lender finances your vehicle stock, and you repay as vehicles are sold. The vehicles themselves serve as collateral.</P>
          <P>Floorstock financing is designed for dealers who need to hold inventory without tying up all their own capital. The facility revolves: as you sell a vehicle and repay the corresponding amount, that capacity becomes available to purchase new stock. Interest accrues on the outstanding balance, so the cost is directly proportional to how long each vehicle sits on the lot.</P>
          <P>Turnover speed is critical. If vehicles sell quickly, floorstock financing is highly cost-effective. If they sit for months, the carrying cost adds up. Lenders will assess your average days-to-sell and adjust terms accordingly. A dealer that moves vehicles in 30 to 45 days is far more attractive to a floorstock lender than one whose inventory sits for 90 days or more.</P>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>Equipment and asset financing</H2>
          <P>Beyond vehicles, logistics businesses often need other equipment: forklifts, warehouse racking, cold chain equipment, loading dock infrastructure, GPS and telematics systems, and more. Equipment financing works the same way as vehicle HP: the lender purchases the equipment, you make monthly payments, and the equipment serves as collateral.</P>
          <P>For warehouse operators, cold chain logistics companies, and freight handlers, equipment costs can be substantial. A cold room installation might cost S$100K to S$300K. A fleet of forklifts could be S$50K to S$200K. Equipment financing lets you spread these costs over 3 to 7 years, preserving cash for operations.</P>
          <P>If you already own equipment outright, the same refinancing logic applies: you can borrow against it to unlock working capital. Forklifts, reach trucks, and warehouse equipment with established resale markets are all financeable.</P>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>Invoice financing for logistics</H2>
          <P>Most logistics companies invoice their corporate clients on 30, 60, or 90 day terms. That's a lot of revenue sitting in accounts receivable, waiting to be collected, while fuel, tolls, salaries, and vehicle payments are due now. Invoice financing lets you access that cash immediately.</P>
          <P>The lender advances 80 to 90% of your outstanding invoice value upfront. When your customer pays, the lender takes their fee and releases the balance. The approval is based primarily on your customer's creditworthiness, not yours. If you're delivering for large corporates, listed companies, MNCs, or government agencies, the terms will be very favourable.</P>

          <Callout>
            <P style={{ margin: 0, fontSize: 14, color: C.black, fontWeight: 500 }}>Invoice financing is one of the most underused tools in the logistics sector. Many operators view it as a sign of financial weakness. It's not. It's a cash flow management tool. If your customer takes 60 days to pay and you can access that money on day 3, you can fund fuel, payroll, and vehicle maintenance without dipping into reserves or drawing on more expensive facilities. The cost is typically a small percentage of the invoice value.</P>
          </Callout>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>Working capital facilities</H2>
          <P>Working capital covers the operational gap between what you're owed and what you owe. For logistics companies, the main working capital demands are fuel (which can be a massive expense for fleet operators), payroll, vehicle insurance, road tax, and maintenance. These costs are constant and don't flex with your billing cycle.</P>
          <P>Revolving credit facilities are the most flexible option. You draw when you need to, repay as receivables come in, and pay interest only on what's outstanding. For established logistics companies with at least 2 to 3 years of trading history, banks may offer these. For newer or smaller operators, non-bank lenders and finance companies provide alternatives at higher rates.</P>
          <P>The size of your working capital facility should reflect your operating cost base and your average collection period. If monthly operating costs are S$400K and customers pay in 45 days on average, you need at least S$600K in available working capital to operate smoothly, more if you're growing and adding vehicles.</P>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>Property-backed lending</H2>
          <P>If you or your directors own property in Singapore, property-backed facilities typically offer the strongest terms available: lowest rates, highest quantum, longest tenor. For logistics operators who need a substantial working capital buffer or want to fund a major fleet expansion, using property equity can be significantly more cost-effective than vehicle-level HP or unsecured borrowing.</P>
          <P>The trade-off is that the property is at risk if the business defaults. For a logistics company with thin margins, this risk needs careful consideration. A major customer loss, a fuel price spike, or a fleet of vehicles needing simultaneous repair can all impact cash flow. Make sure the business can service the facility under stress before pledging personal property.</P>
          <P>For more detail on how property-backed facilities work, see our <a href="/guide/property-backed-loans" style={{ color: C.orange, textDecoration: "none", fontWeight: 500 }}>Property-Backed Loans guide</a>.</P>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>COE, depreciation, and fleet planning</H2>
          <P>Singapore's COE system makes fleet planning a financing exercise in itself. COE premiums for commercial vehicles fluctuate significantly, and the 10-year COE cycle means every vehicle in your fleet has a defined lifespan unless you renew the COE (at prevailing market rates, which can be substantial).</P>
          <P>This creates a unique planning challenge. As vehicles approach their 10-year COE expiry, you need to decide: renew the COE and keep the vehicle (at potentially high cost), scrap the vehicle and buy a replacement (with a new COE premium baked into the price), or reduce fleet size. Each decision has financing implications. A COE renewal might cost S$20K to S$50K or more per vehicle. A replacement vehicle is a full capital outlay. Reducing fleet size means lost revenue capacity.</P>

          <Callout type="dark">
            <P style={{ margin: 0, fontSize: 14, color: C.black, fontWeight: 500, lineHeight: 1.7 }}>Plan your fleet replacement cycle 2 to 3 years in advance. If you have 10 vehicles and 4 of them hit COE expiry in the same year, that's a massive capital spike. Stagger your fleet purchases so replacements are spread over time, not concentrated. This also means your HP repayments are staggered, creating a more manageable monthly cash flow profile.</P>
          </Callout>

          <P>Vehicle depreciation in Singapore follows the COE cycle, not just physical wear. A 5-year-old truck with 5 years of COE remaining has a very different value from the same truck with 2 years remaining. When refinancing vehicles or planning fleet turnover, the remaining COE life is the dominant factor in valuation, not the vehicle's mechanical condition alone.</P>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>What lenders look at</H2>
          {[
            { t: "Fleet age and condition", d: "How old is your fleet, and how much COE life remains? A fleet of newer vehicles with 5+ years of remaining COE is a stronger asset base than ageing vehicles approaching expiry. Lenders value the fleet as collateral, and that value declines as COE expiry approaches." },
            { t: "Customer base and contract quality", d: "Are you delivering for blue-chip corporates on long-term contracts, or doing ad hoc jobs for small businesses? Contracted revenue from creditworthy clients is far more financeable. Long-term logistics contracts (1 to 3 years) give lenders confidence in your future revenue and your ability to service debt." },
            { t: "Revenue consistency", d: "Logistics revenue should be relatively consistent if you have contracted customers. Lenders look at monthly revenue trends over 12 to 24 months. Large swings without clear seasonal patterns raise questions about customer retention and operational stability." },
            { t: "Utilisation rates", d: "Are your vehicles busy? A fleet running at 80 to 90% utilisation is earning its keep. A fleet running at 50% is a collection of depreciating assets that aren't generating enough revenue to cover their costs. Lenders may ask for fleet utilisation data as part of their assessment." },
            { t: "Operating margins", d: "Logistics margins are thin. Lenders know this. But they want to see that you're managing costs effectively. Fuel efficiency, maintenance discipline, route optimisation, and labour cost management all contribute to margins. A company with 5% net margins and strong cost discipline is a better credit than one with 8% margins and sloppy operations." },
            { t: "Total fleet debt service", d: "What percentage of your monthly revenue goes to HP payments and other debt service across the entire fleet? If total fleet debt service exceeds 25 to 30% of revenue, lenders will be cautious about adding more. There needs to be enough margin left over for operating costs and a buffer for unexpected expenses." },
          ].map((item, i) => (
            <div key={i} style={{ marginBottom: 14 }}>
              <h3 style={{ fontFamily: "Poppins, sans-serif", fontSize: 15, fontWeight: 700, color: C.black, marginBottom: 4 }}>{item.t}</h3>
              <P style={{ margin: 0, fontSize: 14 }}>{item.d}</P>
            </div>
          ))}

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>Common mistakes in fleet financing</H2>
          {[
            { t: "Growing the fleet faster than revenue", d: "Adding vehicles ahead of confirmed demand, hoping the contracts will follow. Each vehicle adds a fixed HP payment whether or not it's earning revenue. If the contracts don't materialise, you're paying for idle trucks. Only add fleet capacity when you have confirmed or near-confirmed demand to support it." },
            { t: "Ignoring total fleet debt service", d: "Taking each HP in isolation without looking at the combined monthly burden across all vehicles, plus working capital facilities, plus other debt. The total matters more than any individual payment. Track your debt service ratio (total monthly debt payments divided by total monthly revenue) and keep it within manageable limits." },
            { t: "Not comparing HP terms across lenders", d: "Many operators default to whatever HP their vehicle dealer arranges. Dealer-arranged financing is convenient, but it's not always the best deal. A few percentage points of interest difference across a 5-year HP on a S$200K vehicle adds up to tens of thousands of dollars. Get at least 2 to 3 quotes." },
            { t: "Letting all vehicles expire at once", d: "If your entire fleet was purchased in the same year, they'll all hit COE expiry at the same time. That's a capital crunch that can be catastrophic. Stagger your fleet purchases and plan replacements at least 2 years in advance." },
            { t: "Neglecting vehicle maintenance", d: "Deferred maintenance saves cash in the short term but destroys vehicle value and creates breakdown risk. A well-maintained vehicle holds its resale value and is easier to refinance. A poorly maintained one is worth less to lenders and more expensive to keep on the road." },
          ].map((item, i) => (
            <div key={i} style={{ marginBottom: 14 }}>
              <h3 style={{ fontFamily: "Poppins, sans-serif", fontSize: 15, fontWeight: 700, color: C.black, marginBottom: 4 }}>{item.t}</h3>
              <P style={{ margin: 0, fontSize: 14 }}>{item.d}</P>
            </div>
          ))}

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>Responsible borrowing for logistics</H2>
          <P>Logistics businesses can scale beautifully because each additional vehicle, if properly utilised, adds revenue proportionally. But each vehicle also adds a fixed HP payment that must be met regardless of utilisation. The leverage is real, and it cuts both ways.</P>
          <div style={{ padding: "18px 20px", background: C.cream, borderLeft: `3px solid ${C.black}`, borderRadius: "0 8px 8px 0", marginBottom: 20 }}>
            <P style={{ margin: 0, fontSize: 14, color: C.black, fontWeight: 500, lineHeight: 1.7 }}>Before adding another vehicle to the fleet: is there confirmed or near-confirmed demand? If that customer contract ends in 6 months, can you redeploy the vehicle? If fuel prices spike 20%, can you still make the HP payment and cover operating costs? Every vehicle is a multi-year commitment. Make sure the business case supports it, not just in the best-case scenario, but in a realistic one.</P>
          </div>
          {[
            "Is there confirmed demand for the additional fleet capacity you're financing?",
            "What is your total debt service ratio across all fleet HP and other facilities?",
            "If your largest customer terminates, can you redeploy those vehicles or absorb the cost?",
            "Have you planned for COE expiry and fleet replacement costs in your financing structure?",
            "Can the business survive a 20% fuel price increase while servicing all debt obligations?",
          ].map((q, i) => (
            <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 8 }}>
              <span style={{ fontFamily: "Poppins, sans-serif", fontSize: 13, color: C.orange, fontWeight: 800, minWidth: 20 }}>{i + 1}.</span>
              <P style={{ margin: 0, fontSize: 14 }}>{q}</P>
            </div>
          ))}
          <P>Read our <a href="/responsible-business-promise" style={{ color: C.orange, textDecoration: "none", fontWeight: 500 }}>Responsible Business Promise</a> for more on how we think about this.</P>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>When to talk to QuickFund</H2>
          <P>If you're a logistics or transport operator in Singapore, whether you're running a fleet of 5 vans or 50 trucks, and you need fleet financing, vehicle refinancing, working capital, or invoice financing, talk to us.</P>
          <P>We are not owned by any lender. No lender has equity in our business. We work across banks, finance companies, HP specialists, and alternative lenders. For logistics specifically, we understand that fleet financing is not just about getting the best rate on an individual HP. It's about structuring the right combination of HP, working capital, and receivables financing so the total debt service is sustainable and the business can grow.</P>
          <P>We've helped operators expand fleets for new contracts, refinance existing vehicles to unlock working capital, and set up invoice financing to smooth out cash flow from slow-paying corporate clients. Each situation is different, and the right structure depends on your fleet size, customer mix, and growth plans.</P>

          <Callout type="dark">
            <P style={{ margin: 0, fontSize: 14, color: C.black, fontWeight: 500, lineHeight: 1.7 }}>If you've been getting HP quotes only from your vehicle dealer, you may be leaving money on the table. The difference between dealer-arranged financing and the broader market can be meaningful over a 5-year term. Even if you're happy with your current lender, it's worth knowing what else is available. That's a conversation we have with logistics operators every week.</P>
          </Callout>

          {/* CTAs */}
          <div style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 12 }}>
            <a onClick={() => setShowGate(true)} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 22px", background: C.orange, borderRadius: 10, cursor: "pointer", textDecoration: "none" }}>
              <div><div style={{ fontFamily: "Poppins, sans-serif", fontSize: 14, fontWeight: 700, color: "#fff" }}>Download the full guide</div><div style={{ fontFamily: "Figtree, sans-serif", fontSize: 12, color: "rgba(255,255,255,0.7)", marginTop: 2 }}>Fleet HP, refinancing, invoice financing, and a preparation checklist</div></div>
              <Bolt size={20} color="#fff" style={{ flexShrink: 0 }} />
            </a>
            <a href="/#tools" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 22px", background: "#fff", borderRadius: 10, border: `1.5px solid ${C.greyLight}`, textDecoration: "none" }}>
              <div><div style={{ fontFamily: "Poppins, sans-serif", fontSize: 14, fontWeight: 700, color: C.black }}>Try the AI Loan Check-Up</div><div style={{ fontFamily: "Figtree, sans-serif", fontSize: 12, color: C.grey, marginTop: 2 }}>10 questions. Free. See what you qualify for.</div></div>
              <Bolt size={20} style={{ flexShrink: 0 }} />
            </a>
            <a href="https://wa.me/6580576702?text=Hi%20QuickFund%2C%20I%20have%20a%20question%20about%20logistics%20financing" target="_blank" rel="noopener" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 22px", background: C.black, borderRadius: 10, textDecoration: "none" }}>
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
            {["Property-Backed Loans", "Doctors and Dentists", "Trading Companies", "Tech Companies", "Startups", "E-commerce", "Software", "F&B", "Construction", "Professional Services", "Retail"].map((s, i) => (
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
              All borrowing carries real and significant risks. Secured loans may result in the loss of pledged assets, including property, vehicles, equipment, or shares, in the event of default. Hire purchase agreements create binding monthly obligations for the full term. Vehicle values depreciate and are subject to COE expiry. Lenders may require personal guarantees, corporate guarantees, or other forms of security. Fuel costs, labour costs, insurance premiums, and operating conditions can change. Business conditions and customer contracts can change.
            </p>
            <p style={{ fontFamily: "Figtree, sans-serif", fontSize: 11, color: "rgba(255,255,255,0.35)", lineHeight: 1.7, margin: "8px 0 0" }}>
              You are solely responsible for your borrowing decisions, contractual obligations, and the consequences of default. All loan terms, rates, and conditions are determined by individual lenders and are subject to their own assessment, approval, and due diligence. QuickFund makes no guarantees regarding loan approvals, terms, or outcomes. Seek independent legal and financial advice before entering into any loan, hire purchase, or guarantee arrangement.
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


export default LogisticsGuide;
