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
    <a href="https://wa.me/6580576702?text=Hi%20QuickFund%2C%20I%20have%20a%20question%20about%20retail%20financing" target="_blank" rel="noopener"
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
        <h3 style={{ fontFamily: "Poppins, sans-serif", fontSize: 20, fontWeight: 800, color: C.black, lineHeight: 1.15, marginBottom: 8 }}>Retail<br />Financing Guide</h3>
        <p style={{ fontFamily: "Figtree, sans-serif", fontSize: 13, color: C.grey, lineHeight: 1.5, marginBottom: 14 }}>
          Includes inventory financing, trade finance, seasonal working capital, fit-out financing, and a preparation checklist.
        </p>
        <div style={{ display: "flex", background: C.cream, borderRadius: 8, padding: 3, marginBottom: 12 }}>
          {["whatsapp", "email"].map(m => (<button key={m} onClick={() => setMethod(m)} style={{ flex: 1, padding: "7px 0", borderRadius: 6, border: "none", cursor: "pointer", fontFamily: "Poppins, sans-serif", fontSize: 11, fontWeight: 700, background: method === m ? "#fff" : "transparent", color: method === m ? C.black : C.grey }}>{m === "whatsapp" ? "WhatsApp" : "Email"}</button>))}
        </div>
        {method === "whatsapp" ? (<div style={{ display: "flex", gap: 6 }}><span style={{ padding: "10px", background: C.cream, borderRadius: 7, border: `1.5px solid ${C.greyLight}`, fontFamily: "Figtree, sans-serif", fontSize: 13, color: C.grey }}>+65</span><input value={wa} onChange={e => setWa(e.target.value.replace(/\D/g, ""))} placeholder="9123 4567" maxLength={8} className="qf-input" style={{ flex: 1 }} /></div>) : (<input value={email} onChange={e => setEmail(e.target.value)} placeholder="you@company.com" className="qf-input" style={{ width: "100%" }} />)}
        <button onClick={() => { console.log("Retail guide lead:", { wa, email, method }); setDone(true); }} disabled={!ok} style={{ width: "100%", padding: "12px", marginTop: 12, background: !ok ? C.greyLight : C.orange, border: "none", borderRadius: 7, fontFamily: "Poppins, sans-serif", fontSize: 13, fontWeight: 700, color: "#fff", cursor: !ok ? "default" : "pointer" }}>Send Me The Full Guide</button><p style={{ fontFamily: "Figtree, sans-serif", fontSize: 10, color: C.greyLight, marginTop: 8, textAlign: "center" }}>By submitting you consent to being contacted about this guide. <a href="https://quickfund.sg/privacy-policy" style={{ color: C.grey }}>Privacy Policy</a>.</p>
      </div>
    </div>);
}

function RetailGuide() {
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

      <nav style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(250,248,245,0.97)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(0,0,0,0.04)", padding: "0 20px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 54 }}>
          <a href="https://quickfund.sg" style={{ display: "flex", alignItems: "center", gap: 7, textDecoration: "none" }}><Bolt size={14} /><span style={{ fontFamily: "Poppins, sans-serif", fontSize: 14, fontWeight: 800, color: C.black, textTransform: "uppercase" }}>QuickFund</span><span style={{ fontFamily: "Figtree, sans-serif", fontSize: 11, color: C.greyLight, marginLeft: 4 }}>Sector Guide</span></a>
          <div style={{ display: "flex", gap: 12, alignItems: "center" }} className="qf-guide-nav-btns">
            <a onClick={() => setShowGate(true)} style={{ fontFamily: "Poppins, sans-serif", fontSize: 11, fontWeight: 700, color: C.orange, cursor: "pointer" }}>Download PDF</a>
            <a href="https://wa.me/6580576702?text=Hi%20QuickFund%2C%20question%20about%20retail%20financing" target="_blank" rel="noopener" style={{ fontFamily: "Poppins, sans-serif", fontSize: 11, fontWeight: 700, color: "#fff", background: C.black, padding: "7px 14px", borderRadius: 6, textDecoration: "none" }}>WhatsApp</a>
          </div>
        </div>
      </nav>

      <section style={{ padding: "60px 20px 40px" }}><Section>
        <div style={{ fontFamily: "Poppins, sans-serif", fontSize: 10, fontWeight: 800, color: C.orange, letterSpacing: "2px", textTransform: "uppercase", marginBottom: 12 }}>Financing Guide</div>
        <h1 className="qf-guide-hero-h1" style={{ fontFamily: "Poppins, sans-serif", fontSize: 42, fontWeight: 800, color: C.black, lineHeight: 0.95, letterSpacing:"-0.8px", marginBottom: 16 }}>Financing for<br />Retail<br /><span style={{ color: C.orange }}>in Singapore</span></h1>
        <P style={{ fontSize: 16, maxWidth: 520, color: C.grey }}>You buy inventory before you sell it, your rent doesn't wait for a good month, and growth means more stock and more stores. Here's how to finance retail without overextending.</P>
        <div style={{ display: "flex", gap: 10, marginTop: 20, flexWrap: "wrap" }}>
          <a onClick={() => setShowGate(true)} style={{ fontFamily: "Poppins, sans-serif", fontSize: 13, fontWeight: 700, color: "#fff", background: C.orange, padding: "12px 24px", borderRadius: 8, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 7 }}>Download Full Guide <Bolt size={12} color="#fff" /></a>
          <a href="https://quickfund.sg/#tools" style={{ fontFamily: "Poppins, sans-serif", fontSize: 13, fontWeight: 700, color: C.black, padding: "12px 24px", borderRadius: 8, border: `1.5px solid ${C.greyLight}`, textDecoration: "none" }}>Try the AI Loan Check-Up</a>
        </div>
        <p style={{ fontFamily: "Figtree, sans-serif", fontSize: 11, color: C.greyLight, marginTop: 12 }}>8 min read. Last updated May 2026.</p>
      </Section></section>

      <section style={{ padding: "0 20px 40px" }}><Section>
        <div className="qf-guide-toc" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
          {["Why retail financing is different","The inventory and rent squeeze","Inventory financing","Trade finance for importing","Revenue-based financing","Working capital for seasonal demand","Store fit-out and equipment financing","Property-backed lending","Omnichannel retail: online plus offline","What lenders look at","Common mistakes that drain cash","Responsible borrowing for retail","When to talk to QuickFund"].map((item, i) => (
            <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start", padding: "8px 12px", background: i % 2 === 0 ? "#fff" : C.offwhite, borderRadius: 6 }}>
              <span style={{ fontFamily: "Poppins, sans-serif", fontSize: 11, fontWeight: 800, color: C.orange, minWidth: 20 }}>{String(i + 1).padStart(2, "0")}</span>
              <span style={{ fontFamily: "Figtree, sans-serif", fontSize: 13, color: C.black }}>{item}</span>
            </div>))}
        </div>
      </Section></section>

      <article style={{ padding: "0 20px 60px" }}><Section>

        <H2>Why retail financing is different</H2>
        <P>Retail sits at the intersection of two expensive realities: you need inventory on the shelf before customers walk in, and you need a physical location that costs money whether you sell anything or not. The capital intensity comes from both sides at once.</P>
        <P>Unlike e-commerce, where you can test demand with minimal upfront investment, brick-and-mortar retail requires committing capital before you know the outcome. You sign a lease, fit out the store, buy stock, hire staff, and then hope that enough customers come through the door. If they do, the economics can be excellent. If they don't, you're stuck with fixed costs and depreciating inventory.</P>
        <P>The financing options for retail businesses in Singapore are broader than most operators realise, especially for established retailers with trading history and consistent revenue. The challenge is understanding which product fits which need, and making sure the total debt service across all your facilities is manageable given retail's typically thin margins.</P>

        <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

        <H2>The inventory and rent squeeze</H2>
        <P>Retail cash flow pressure comes from two directions simultaneously. Inventory ties up capital upfront: you pay your suppliers before customers pay you. Rent is a fixed obligation that doesn't flex with your sales volume. Together, they create a permanent squeeze that intensifies during growth or seasonal restocking.</P>
        <P>A retailer doing S$2M in annual revenue might carry S$300K to S$500K in inventory at any given time. Add monthly rent of S$15K to S$30K for a decent location in Singapore, staff costs, and operating expenses, and the monthly cash requirement to keep the business running is substantial. Growth makes it worse: a second store doubles the rent burden, and more SKUs mean more inventory capital deployed.</P>

        <Callout>
          <P style={{ margin: 0, fontSize: 14, color: C.black, fontWeight: 500 }}>The single biggest cash flow risk in retail: slow-moving inventory. Every dollar sitting in product that isn't selling is a dollar that can't be used for rent, payroll, or restocking items that customers actually want. Inventory management isn't just an operations issue. It's a financing issue. The faster your stock turns, the less capital you need.</P>
        </Callout>

        <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

        <H2>Inventory financing</H2>
        <P>Inventory financing lets you borrow against the stock you hold or plan to purchase. The lender assesses the value and type of your inventory and advances a percentage, typically 50 to 80% for finished goods with established resale value. Fashion, electronics, cosmetics, and consumer goods with brand recognition are easier to finance than niche or seasonal products.</P>
        <P>The facility usually revolves: as you sell inventory and repay, the line becomes available again for the next purchase cycle. This matches the natural rhythm of retail, where you're constantly restocking to maintain the assortment. The cost of carrying inventory financing is the interest on the outstanding balance, so the faster your stock turns, the lower the effective cost.</P>
        <P>For retailers carrying high-value inventory (jewellery, watches, luxury goods, electronics), inventory financing can be particularly effective because the collateral holds its value well. For fast-fashion or trend-driven products, lenders will apply steeper discounts because the resale value declines rapidly if the items don't sell.</P>

        <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

        <H2>Trade finance for importing</H2>
        <P>If you import goods from overseas suppliers, trade finance products can fund the purchase cycle without requiring you to pay from your own cash upfront. Letters of credit (LCs), trust receipts, and supplier financing arrangements are all applicable to retail importers.</P>
        <P>The mechanics are the same as for any import-driven business: your bank issues an LC guaranteeing payment to the supplier, the goods ship, you take delivery under a trust receipt, sell the inventory, and repay. For retailers importing from China, Southeast Asia, Europe, or elsewhere, trade finance can dramatically reduce the upfront capital requirement for each buying cycle.</P>
        <P>Trade finance is most accessible for retailers with established banking relationships and at least 2 to 3 years of import history. If you're newer, non-bank trade finance providers may be an alternative, though the costs will be higher. For more on LC and trust receipt structures, see our <a href="https://quickfund.sg/guide/trading-companies" style={{ color: C.orange, textDecoration: "none", fontWeight: 500 }}>Trading Companies guide</a>.</P>

        <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

        <H2>Revenue-based financing</H2>
        <P>If your retail business generates consistent daily revenue, revenue-based financing (RBF) is a natural fit. The lender connects to your POS system or payment processor and underwrites based on actual sales data. They advance a multiple of your monthly revenue, and repayments are taken as a percentage of daily or weekly sales.</P>
        <P>The flex structure is particularly useful for retail because sales fluctuate by day, week, and season. A strong Saturday means a larger repayment. A quiet Tuesday means a smaller one. You're never stuck making a fixed payment that doesn't reflect how the store is actually performing.</P>
        <P>For omnichannel retailers with both physical stores and online sales, some RBF lenders can aggregate revenue across all channels. This gives a more complete picture of the business and may result in higher advance amounts. The cost is expressed as a factor rate, typically 1.15x to 1.3x for retailers with strong, consistent sales data.</P>

        <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

        <H2>Working capital for seasonal demand</H2>
        <P>Most retail businesses have pronounced seasonality. Chinese New Year, back-to-school, mid-year sales, 11.11, Black Friday, Christmas. If you're a fashion retailer, there are also collection cycles and seasonal transitions that require fresh inventory. The cash requirement peaks before the revenue arrives.</P>
        <P>Seasonal working capital facilities are designed for exactly this pattern. You draw down before your peak season to fund inventory purchases, marketing, and seasonal staffing. You repay as revenue comes in during and after the peak. The facility is structured around your specific business cycle, not a generic monthly repayment schedule.</P>
        <P>Lenders need to see the seasonal pattern clearly. At least 2 years of trading data showing the cycle is helpful. If you can demonstrate that Q4 revenue reliably exceeds Q2 by 40%, the lender can structure the facility to match. First-year retailers without this data will find seasonal facilities harder to access and may need to rely on general working capital or personal capital to fund their first peak.</P>

        <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

        <H2>Store fit-out and equipment financing</H2>
        <P>Opening or renovating a retail store is capital-intensive. Interior fit-out, signage, display fixtures, POS systems, security systems, lighting. A typical retail fit-out in Singapore can range from S$50K for a small shop to S$300K or more for a larger format store in a mall.</P>
        <P>Like F&amp;B renovations, store fit-outs have limited resale value. The fixtures are built for a specific space and layout. If you vacate, most of it stays behind or gets scrapped. This makes fit-out financing harder than equipment financing, because the lender has no recoverable asset. Expect personal guarantees and potentially higher rates than asset-backed facilities.</P>
        <P>POS systems, security cameras, and display technology can sometimes be financed separately as equipment, with the equipment serving as collateral. Some suppliers also offer instalment plans for retail fixtures and fittings, which can reduce the upfront capital required. Splitting the total fit-out cost across multiple financing sources, each matched to the appropriate asset type, is often more practical than trying to fund everything through a single facility.</P>

        <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

        <H2>Property-backed lending</H2>
        <P>If you or your directors own property in Singapore, property-backed facilities offer the best financing terms available: lowest rates, highest quantum, longest tenor. For a retail business that needs capital for inventory, fit-out, and a working capital buffer, property equity can fund the entire setup more cost-effectively than any combination of unsecured facilities.</P>
        <P>The trade-off is real: if the retail business fails, the property is at risk. Retail has meaningful failure rates, particularly in the first 2 to 3 years. Before pledging property, stress-test the business plan at 30% below projected revenue and make sure the numbers still work. For more detail, see our <a href="https://quickfund.sg/guide/property-backed-loans" style={{ color: C.orange, textDecoration: "none", fontWeight: 500 }}>Property-Backed Loans guide</a>.</P>

        <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

        <H2>Omnichannel retail: online plus offline</H2>
        <P>If you operate both physical stores and an online channel (your own website, Shopee, Lazada, or other platforms), your financing position is stronger than a pure brick-and-mortar retailer. Revenue diversification across channels reduces the risk of any single location or platform underperforming.</P>
        <P>Lenders increasingly value omnichannel data. Being able to show consistent sales across both physical and online channels demonstrates a more resilient business model. Some lenders can integrate directly with your e-commerce platform and POS system to get a real-time view of total business performance.</P>

        <Callout>
          <P style={{ margin: 0, fontSize: 14, color: C.black, fontWeight: 500 }}>If you're primarily a physical retailer considering adding an online channel, the financing benefits alone can justify the investment. Online sales data is transparent and verifiable, which makes the business easier to underwrite. A retailer with S$100K in monthly physical sales and S$50K in online sales is a more compelling borrower than one with S$150K in physical sales alone, because the online data provides independent verification of demand.</P>
        </Callout>

        <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

        <H2>What lenders look at</H2>
        {[
          { t: "Inventory turnover", d: "How quickly does your stock sell? Inventory turnover of 4 to 6 times per year is typical for many retail categories. Faster is better. Slow-moving inventory ties up capital and may need to be discounted to clear, which erodes margins and concerns lenders." },
          { t: "Gross margin", d: "What's the markup on your products? Retail gross margins vary widely by category: 50 to 70% for fashion, 20 to 40% for electronics, 40 to 60% for cosmetics and lifestyle. Lenders need to see margins that leave enough room to cover rent, staff, and debt service with a buffer." },
          { t: "Same-store sales growth", d: "For multi-store retailers, lenders look at whether existing stores are growing or declining. New store openings can mask overall weakness if existing locations are deteriorating. Consistent same-store sales growth (or at least stability) is a strong signal." },
          { t: "Lease terms and occupancy cost", d: "How long is your lease, and what's your occupancy cost ratio (rent plus related costs as a percentage of revenue)? Occupancy costs above 15 to 20% of revenue are a concern. A lease with less than 12 months remaining creates refinancing risk for the lender." },
          { t: "Revenue per square foot", d: "This tells lenders whether your retail space is productive. High revenue per square foot indicates strong foot traffic and effective merchandising. Low revenue per square foot suggests the location or the concept isn't working, which increases the risk of the business failing." },
          { t: "Sell-through rates and markdowns", d: "What percentage of inventory sells at full price versus on markdown? High markdown rates erode margins and indicate either over-purchasing, poor assortment, or weak demand. Lenders want to see that most inventory moves at or near full price." },
        ].map((item, i) => (
          <div key={i} style={{ marginBottom: 14 }}>
            <h3 style={{ fontFamily: "Poppins, sans-serif", fontSize: 15, fontWeight: 700, color: C.black, marginBottom: 4 }}>{item.t}</h3>
            <P style={{ margin: 0, fontSize: 14 }}>{item.d}</P>
          </div>))}

        <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

        <H2>Common mistakes that drain cash</H2>
        {[
          { t: "Overstocking on the wrong products", d: "Buying too much of what you think will sell rather than what the data shows sells. Every dollar in dead stock is a dollar not available for rent, payroll, or restocking popular items. Use sell-through data from your POS to inform purchasing decisions, not gut feel." },
          { t: "Opening new stores before existing ones are profitable", d: "The temptation to expand is powerful, especially when a landlord offers an attractive deal. But each new store adds fixed costs (rent, staff, fit-out financing) that must be covered regardless of performance. Make sure your existing stores are consistently profitable before committing to new ones." },
          { t: "Signing long leases in unproven locations", d: "A 3-year lease in a location that doesn't work is 3 years of cash drain. If possible, negotiate shorter initial terms with renewal options. Test the location before locking in. The lower rent per square foot from a longer lease isn't worth it if the foot traffic never materialises." },
          { t: "Not matching financing to the buying cycle", d: "Using a 3-year term loan to fund seasonal inventory purchases is expensive and inflexible. Inventory financing or seasonal working capital facilities match the nature of the spending: short-term, revolving, and tied to the selling cycle. Use the right product for the right purpose." },
          { t: "Ignoring the total cost of discounting", d: "End-of-season markdowns of 30 to 50% feel like you're clearing stock and recovering cash. But markdowns compress your gross margin significantly. A product bought at 50% gross margin and sold at 30% off yields less than half the original margin per unit. If you bought with borrowed money, the financing cost eats further into what's left. A markdown strategy needs to account for the total cost, including the cost of the capital used to buy the inventory in the first place." },
        ].map((item, i) => (
          <div key={i} style={{ marginBottom: 14 }}>
            <h3 style={{ fontFamily: "Poppins, sans-serif", fontSize: 15, fontWeight: 700, color: C.black, marginBottom: 4 }}>{item.t}</h3>
            <P style={{ margin: 0, fontSize: 14 }}>{item.d}</P>
          </div>))}

        <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

        <H2>Responsible borrowing for retail</H2>
        <P>Retail is unforgiving of overcapitalisation. Too much debt on thin margins leaves no room for a bad month, an unexpected rent increase, or a shift in consumer sentiment. The same leverage that accelerates growth when things are going well accelerates failure when they're not.</P>
        <div style={{ padding: "18px 20px", background: C.cream, borderLeft: `3px solid ${C.black}`, borderRadius: "0 8px 8px 0", marginBottom: 20 }}>
          <P style={{ margin: 0, fontSize: 14, color: C.black, fontWeight: 500, lineHeight: 1.7 }}>Before borrowing to fund inventory or a new store: what happens if foot traffic drops 25% for 3 months? What if a major product line doesn't sell and needs to be cleared at 50% off? Can you still cover rent, payroll, and debt service? If the answer depends on every month being a good month, the financing structure is too aggressive for retail.</P>
        </div>
        {["Is the inventory you're financing backed by proven demand, or is it a speculative buy?","If sales drop 25% for a quarter, can you still service all your facilities?","Is your occupancy cost ratio below 20% of revenue at realistic (not optimistic) projections?","Have you stress-tested the new store economics at 30% below your revenue projection?","Do you have a plan for clearing slow-moving inventory before it ties up capital and financing capacity?"].map((q, i) => (
          <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 8 }}>
            <span style={{ fontFamily: "Poppins, sans-serif", fontSize: 13, color: C.orange, fontWeight: 800, minWidth: 20 }}>{i + 1}.</span>
            <P style={{ margin: 0, fontSize: 14 }}>{q}</P>
          </div>))}
        <P>Read our <a href="https://quickfund.sg/responsible-business-promise" style={{ color: C.orange, textDecoration: "none", fontWeight: 500 }}>Responsible Business Promise</a> for more on how we think about this.</P>

        <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

        <H2>When to talk to QuickFund</H2>
        <P>If you're a retailer in Singapore, whether you operate a single boutique, a chain of stores, or a hybrid online-offline brand, and you need inventory financing, working capital, trade finance, or funding for expansion, talk to us.</P>
        <P>We are not owned by any lender. No lender has equity in our business. We work across banks, finance companies, fintech platforms, and alternative lenders. For retail specifically, we understand that the financing challenge is seasonal, inventory-driven, and tied to location economics. The right structure isn't one facility. It's a combination of inventory financing, trade finance for imports, seasonal working capital, and potentially property-backed lending for larger needs.</P>
        <P>We've helped retailers fund seasonal inventory builds, structure trade finance for import cycles, access revenue-based financing through POS data, and find working capital to bridge between peak seasons. Each business is different, and the right combination depends on your category, your margin profile, and your growth plans.</P>

        <Callout type="dark">
          <P style={{ margin: 0, fontSize: 14, color: C.black, fontWeight: 500, lineHeight: 1.7 }}>If you've been using personal savings or credit cards to fund inventory restocking, there are almost certainly more cost-effective options available. The transition from self-funded to properly financed is one of the most impactful moves a growing retailer can make. It frees up your personal capital, it lets you buy in larger quantities (often at better supplier terms), and it creates a professional financing foundation for the business.</P>
        </Callout>

        <div style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 12 }}>
          <a onClick={() => setShowGate(true)} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 22px", background: C.orange, borderRadius: 10, cursor: "pointer", textDecoration: "none" }}>
            <div><div style={{ fontFamily: "Poppins, sans-serif", fontSize: 14, fontWeight: 700, color: "#fff" }}>Download the full guide</div><div style={{ fontFamily: "Figtree, sans-serif", fontSize: 12, color: "rgba(255,255,255,0.7)", marginTop: 2 }}>Inventory, trade finance, seasonal working capital, and a checklist</div></div>
            <Bolt size={20} color="#fff" style={{ flexShrink: 0 }} />
          </a>
          <a href="https://quickfund.sg/#tools" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 22px", background: "#fff", borderRadius: 10, border: `1.5px solid ${C.greyLight}`, textDecoration: "none" }}>
            <div><div style={{ fontFamily: "Poppins, sans-serif", fontSize: 14, fontWeight: 700, color: C.black }}>Try the AI Loan Check-Up</div><div style={{ fontFamily: "Figtree, sans-serif", fontSize: 12, color: C.grey, marginTop: 2 }}>10 questions. Free. See what you qualify for.</div></div>
            <Bolt size={20} style={{ flexShrink: 0 }} />
          </a>
          <a href="https://wa.me/6580576702?text=Hi%20QuickFund%2C%20I%20have%20a%20question%20about%20retail%20financing" target="_blank" rel="noopener" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 22px", background: C.black, borderRadius: 10, textDecoration: "none" }}>
            <div><div style={{ fontFamily: "Poppins, sans-serif", fontSize: 14, fontWeight: 700, color: "#fff" }}>Talk to our team</div><div style={{ fontFamily: "Figtree, sans-serif", fontSize: 12, color: "rgba(255,255,255,0.5)", marginTop: 2 }}>No forms. Just WhatsApp.</div></div>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366" style={{ flexShrink: 0 }}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          </a>
        </div>
      </Section></article>

      <section style={{ padding: "40px 20px", background: C.cream }}><Section>
        <div style={{ fontFamily: "Poppins, sans-serif", fontSize: 10, fontWeight: 800, color: C.orange, letterSpacing: "2px", textTransform: "uppercase", marginBottom: 10 }}>More Guides</div>
        <h2 style={{ fontFamily: "Poppins, sans-serif", fontSize: 20, fontWeight: 800, color: C.black, marginBottom: 16 }}>Explore other sectors</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {["Property-Backed Loans", "Doctors and Dentists", "Trading Companies", "Tech Companies", "Startups", "E-commerce", "Software", "F&B", "Construction", "Logistics", "Professional Services"].map((s, i) => (
            <a key={i} href={`https://quickfund.sg/guide/${GUIDE_SLUGS[s]}`} style={{ padding: "7px 14px", borderRadius: 16, fontFamily: "Figtree, sans-serif", fontSize: 12, fontWeight: 500, color: C.black, background: "#fff", textDecoration: "none", border: `1px solid ${C.greyLight}` }}>{s}</a>))}
        </div>
      </Section></section>

      <section style={{ padding: "32px 20px 20px", background: C.black }}><Section>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24 }} className="qf-guide-toc">
          <div>
            <div style={{ fontFamily: "Poppins, sans-serif", fontSize: 10, fontWeight: 800, color: C.orange, letterSpacing: "2px", textTransform: "uppercase", marginBottom: 10 }}>QuickFund</div>
            {["Home", "AI Tools", "Partners", "FAQ", "Responsible Business Promise"].map(l => (<a key={l} href={`https://quickfund.sg/${l === "Home" ? "" : l === "AI Tools" ? "#tools" : l === "FAQ" ? "#faq" : l.toLowerCase().replace(/ /g, "-").replace("&", "-and-")}`} style={{ display: "block", fontFamily: "Figtree, sans-serif", fontSize: 12, color: "rgba(255,255,255,0.4)", textDecoration: "none", marginBottom: 6 }}>{l}</a>))}
          </div>
          <div>
            <div style={{ fontFamily: "Poppins, sans-serif", fontSize: 10, fontWeight: 800, color: C.orange, letterSpacing: "2px", textTransform: "uppercase", marginBottom: 10 }}>Guides</div>
            {["Property-Backed Loans", "Doctors and Dentists", "Trading Companies", "Tech Companies", "Startups", "E-commerce", "Software", "F&B", "Construction", "Logistics", "Professional Services", "Retail"].map(l => (<a key={l} href={`https://quickfund.sg/guide/${GUIDE_SLUGS[l]}`} style={{ display: "block", fontFamily: "Figtree, sans-serif", fontSize: 12, color: "rgba(255,255,255,0.4)", textDecoration: "none", marginBottom: 6 }}>{l}</a>))}
          </div>
          <div>
            <div style={{ fontFamily: "Poppins, sans-serif", fontSize: 10, fontWeight: 800, color: C.orange, letterSpacing: "2px", textTransform: "uppercase", marginBottom: 10 }}>Contact</div>
            <a href="https://wa.me/6580576702" target="_blank" rel="noopener" style={{ display: "block", fontFamily: "Figtree, sans-serif", fontSize: 12, color: "rgba(255,255,255,0.4)", textDecoration: "none", marginBottom: 6 }}>WhatsApp</a>
            <a href="mailto:leslie@quickfund.sg" style={{ display: "block", fontFamily: "Figtree, sans-serif", fontSize: 12, color: "rgba(255,255,255,0.4)", textDecoration: "none", marginBottom: 6 }}>leslie@quickfund.sg</a>
            <div style={{ fontFamily: "Figtree, sans-serif", fontSize: 12, color: "rgba(255,255,255,0.25)", marginTop: 16 }}>Singapore, Malaysia, Hong Kong,<br />US, UK, Vietnam, Thailand, Indonesia</div>
          </div>
        </div>
      </Section></section>

      <footer style={{ background: C.black, padding: "0 20px 28px" }}><Section>
        <div style={{ padding: "18px 20px", background: "rgba(255,255,255,0.04)", borderRadius: 8, border: "1px solid rgba(255,255,255,0.06)", marginBottom: 20 }}>
          <p style={{ fontFamily: "Poppins, sans-serif", fontSize: 10, fontWeight: 800, color: "rgba(255,255,255,0.4)", letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: 8 }}>Important Disclaimer</p>
          <p style={{ fontFamily: "Figtree, sans-serif", fontSize: 11, color: "rgba(255,255,255,0.35)", lineHeight: 1.7, margin: 0 }}>This guide is published by QuickFund Pte Ltd for general informational purposes only. Nothing in this guide constitutes financial, legal, investment, tax, or professional advice, and nothing should be construed as a recommendation or solicitation to enter into any loan, mortgage, or financial arrangement. QuickFund Pte Ltd is not a licensed financial adviser and does not provide regulated financial, legal, tax or investment advice.</p>
          <p style={{ fontFamily: "Figtree, sans-serif", fontSize: 11, color: "rgba(255,255,255,0.35)", lineHeight: 1.7, margin: "8px 0 0" }}>All borrowing carries real and significant risks. Secured loans may result in the loss of pledged assets, including property, vehicles, equipment, inventory, or shares, in the event of default. Lenders may require personal guarantees, corporate guarantees, or other forms of security. Inventory values can depreciate, become obsolete, or require markdowns. Store fit-out expenditure typically has no recoverable value. Revenue-based financing costs depend on repayment speed and may result in higher effective interest rates than anticipated. Property values, asset values, and business conditions can change.</p>
          <p style={{ fontFamily: "Figtree, sans-serif", fontSize: 11, color: "rgba(255,255,255,0.35)", lineHeight: 1.7, margin: "8px 0 0" }}>You are solely responsible for your borrowing decisions, contractual obligations, and the consequences of default. All loan terms, rates, and conditions are determined by individual lenders and are subject to their own assessment, approval, and due diligence. QuickFund makes no guarantees regarding loan approvals, terms, or outcomes. Seek independent legal and financial advice before entering into any loan or guarantee arrangement.</p>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}><Bolt size={10} color="rgba(255,255,255,0.3)" /><span style={{ fontFamily: "Poppins, sans-serif", fontSize: 10, fontWeight: 800, color: "rgba(255,255,255,0.3)", textTransform: "uppercase" }}>QuickFund</span></div>
          <a href="https://quickfund.sg/responsible-business-promise" style={{ fontFamily: "Figtree, sans-serif", fontSize: 10, color: "rgba(255,255,255,0.15)", textDecoration: "none" }}>Responsible Business Promise</a>
        </div>
      </Section></footer>
    </div>
  );
}


module.exports = { RetailGuide };
