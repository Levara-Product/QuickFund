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
    <a href="https://wa.me/6580576702?text=Hi%20QuickFund%2C%20I%20have%20a%20question%20about%20e-commerce%20or%20product%20financing" target="_blank" rel="noopener"
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
        <h3 style={{ fontFamily: "Poppins, sans-serif", fontSize: 20, fontWeight: 800, color: C.black, lineHeight: 1.15, marginBottom: 8 }}>E-commerce &amp;<br />Product Manufacturers<br />Financing Guide</h3>
        <p style={{ fontFamily: "Figtree, sans-serif", fontSize: 13, color: C.grey, lineHeight: 1.5, marginBottom: 14 }}>
          Includes inventory financing, trade finance, seasonal working capital, equipment purchase options, and a preparation checklist. Everything on this page plus the detail you need to actually move forward.
        </p>
        <div style={{ display: "flex", background: C.cream, borderRadius: 8, padding: 3, marginBottom: 12 }}>
          {["whatsapp", "email"].map(m => (<button key={m} onClick={() => setMethod(m)} style={{ flex: 1, padding: "7px 0", borderRadius: 6, border: "none", cursor: "pointer", fontFamily: "Poppins, sans-serif", fontSize: 11, fontWeight: 700, background: method === m ? "#fff" : "transparent", color: method === m ? C.black : C.grey }}>{m === "whatsapp" ? "WhatsApp" : "Email"}</button>))}
        </div>
        {method === "whatsapp" ? (<div style={{ display: "flex", gap: 6 }}><span style={{ padding: "10px", background: C.cream, borderRadius: 7, border: `1.5px solid ${C.greyLight}`, fontFamily: "Figtree, sans-serif", fontSize: 13, color: C.grey }}>+65</span><input value={wa} onChange={e => setWa(e.target.value.replace(/\D/g, ""))} placeholder="9123 4567" maxLength={8} className="qf-input" style={{ flex: 1 }} /></div>) : (<input value={email} onChange={e => setEmail(e.target.value)} placeholder="you@company.com" className="qf-input" style={{ width: "100%" }} />)}
        <button onClick={() => { console.log("Ecomm guide lead:", { wa, email, method }); setDone(true); }} disabled={!ok} style={{ width: "100%", padding: "12px", marginTop: 12, background: !ok ? C.greyLight : C.orange, border: "none", borderRadius: 7, fontFamily: "Poppins, sans-serif", fontSize: 13, fontWeight: 700, color: "#fff", cursor: !ok ? "default" : "pointer" }}>Send Me The Full Guide</button><p style={{ fontFamily: "Figtree, sans-serif", fontSize: 10, color: C.greyLight, marginTop: 8, textAlign: "center" }}>By submitting you consent to being contacted about this guide. <a href="https://quickfund.sg/privacy-policy" style={{ color: C.grey }}>Privacy Policy</a>.</p>
      </div>
    </div>);
}

function EcommerceGuide() {
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
            <a href="https://wa.me/6580576702?text=Hi%20QuickFund%2C%20question%20about%20e-commerce%20or%20product%20financing" target="_blank" rel="noopener" style={{ fontFamily: "Poppins, sans-serif", fontSize: 11, fontWeight: 700, color: "#fff", background: C.black, padding: "7px 14px", borderRadius: 6, textDecoration: "none" }}>WhatsApp</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ padding: "60px 20px 40px" }}>
        <Section>
          <div style={{ fontFamily: "Poppins, sans-serif", fontSize: 10, fontWeight: 800, color: C.orange, letterSpacing: "2px", textTransform: "uppercase", marginBottom: 12 }}>Financing Guide</div>
          <h1 className="qf-guide-hero-h1" style={{ fontFamily: "Poppins, sans-serif", fontSize: 42, fontWeight: 800, color: C.black, lineHeight: 0.95, letterSpacing:"-0.8px", marginBottom: 16 }}>
            Financing for<br />E-commerce &amp; Product<br />Manufacturers<br /><span style={{ color: C.orange }}>in Singapore</span>
          </h1>
          <P style={{ fontSize: 16, maxWidth: 520, color: C.grey }}>
            You buy or make inventory. You sell it. The gap between when you spend and when you get paid is where the cash pressure lives. Here's how to finance that gap without breaking the business.
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
              "Why e-commerce and product financing is different",
              "The inventory cash trap",
              "Inventory financing",
              "Trade finance for importing",
              "Revenue-based financing",
              "Invoice financing for B2B sellers",
              "Purchase order financing",
              "Working capital for seasonal businesses",
              "Equipment and production financing",
              "Property-backed lending",
              "What lenders look at",
              "Marketplace sellers: specific challenges",
              "Common mistakes that drain cash",
              "Responsible borrowing for product businesses",
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

          <H2>Why e-commerce and product financing is different</H2>
          <P>If you sell products, whether you manufacture them yourself or source them from suppliers, your business has a fundamentally different cash flow profile from a services or software company. You have to spend money before you make money. Raw materials, finished goods, packaging, shipping, duties, warehousing. All of that cash goes out before a single customer pays you.</P>
          <P>For e-commerce businesses, there's another layer. Marketplace platforms hold your payouts for days or weeks. Advertising spend is upfront. Returns eat into revenue after it's already been counted. A product business doing S$5M in annual revenue might need S$1M to S$2M in working capital just to keep the machine running, and that number grows as the business grows.</P>
          <P>The good news: product businesses sit on assets that lenders understand. Inventory, equipment, receivables, purchase orders. These are tangible things that can be valued, financed, and used as security. The financing options for product businesses are broader than most founders and operators realise, especially in Singapore where trade finance infrastructure is deep.</P>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>The inventory cash trap</H2>
          <P>Here's how it works in practice. You place an order with your supplier. Payment is due on order, or 30 days after, or when the goods ship. The goods take 2 to 6 weeks to arrive if you're importing. You receive the inventory, store it, and start selling. Your customers pay immediately (B2C) or in 30 to 90 days (B2B). If you're selling on a marketplace, add another 7 to 21 days for payout processing.</P>
          <P>The total cycle from cash out to cash back in can easily be 60 to 150 days. If you're placing orders every month to keep stock levels up, you need enough capital to fund multiple overlapping cycles at once. This is the inventory cash trap. Growth makes it worse, not better, because every increase in sales requires a proportional increase in inventory investment upfront.</P>

          <Callout>
            <P style={{ margin: 0, fontSize: 14, color: C.black, fontWeight: 500 }}>The paradox of successful product businesses: the better you sell, the more cash you need. A great Q4 means you need to restock aggressively for Q1. A viral product launch means scrambling to fund the next production run. Growth without financing is growth that stalls, because you simply can't fund the inventory fast enough from operating cash flow alone.</P>
          </Callout>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>Inventory financing</H2>
          <P>Inventory financing lets you borrow against the stock you hold. The lender assesses the value of your inventory and advances a percentage of it, typically 50 to 80% depending on the type of goods. Finished goods ready for sale attract higher advance rates than raw materials or work-in-progress. Branded, non-perishable consumer products are easier to finance than custom or perishable items.</P>
          <P>The lender may take a charge over the inventory as security. If you default, they can seize and liquidate the stock to recover their money. This means the type of inventory matters enormously. Products with a ready secondary market (electronics, apparel, consumer goods) are far easier to finance than specialised components or custom-made items with no resale value.</P>
          <P>Inventory financing is most useful when you need to stock up ahead of a peak season, fund a large production run for a confirmed order, or maintain safety stock levels while waiting for receivables to come in. It's a revolving facility in most cases, meaning as you sell inventory and repay, the line becomes available again for the next purchase cycle.</P>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>Trade finance for importing</H2>
          <P>If you import goods from overseas suppliers, trade finance products can fund the entire purchase cycle without requiring you to pay upfront from your own cash. The core instruments are letters of credit (LCs) and trust receipts (TRs).</P>
          <P>An LC is a guarantee from your bank to your supplier that payment will be made once the goods are shipped and the correct documents are presented. Your supplier ships with confidence, and you don't pay until the goods are on their way. A trust receipt extends this further. When the goods arrive, the bank releases them to you under a TR. You sell the goods, collect payment, and use the proceeds to repay the bank. TR periods are typically 30 to 180 days.</P>
          <P>For e-commerce and product businesses importing from China, Southeast Asia, or elsewhere, trade finance can dramatically reduce the upfront capital required. Instead of wiring S$300K to a factory before they start production, an LC lets you fund the purchase through your bank's credit line.</P>

          <Callout type="dark">
            <P style={{ margin: 0, fontSize: 14, color: C.black, fontWeight: 500, lineHeight: 1.7 }}>Trust receipts carry personal liability. The goods and their proceeds belong to the bank until the TR is settled. If you sell the goods and use the money for something else instead of repaying the bank, you are personally liable. This is not a technicality. For more on LC and TR structures, read our <a href="https://quickfund.sg/guide/trading-companies" style={{ color: C.orange, textDecoration: "none", fontWeight: 600 }}>Trading Companies guide</a>.</P>
          </Callout>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>Revenue-based financing</H2>
          <P>If your e-commerce business generates consistent monthly revenue, revenue-based financing (RBF) can provide quick access to capital without traditional collateral requirements. The lender advances a multiple of your monthly revenue, and you repay as a fixed percentage of sales each month.</P>
          <P>RBF is particularly well-suited to e-commerce because the revenue data is transparent. If you sell through Shopify, Amazon, Shopee, Lazada, or your own website, lenders can connect directly to your sales platform and underwrite based on real transaction data. This makes the approval process faster than traditional lending, sometimes just days.</P>
          <P>Beyond traditional RBF, there's a growing ecosystem of specialist e-commerce financing platforms that go further. These platforms integrate with your entire supply chain: sales channels, inventory management, shipping, and supplier payments. They don't just advance against revenue. They fund specific stages of your product cycle, from production through to customer delivery, with each tranche tied to real-time supply chain data. Several of these platforms operate globally and actively serve Singapore-based e-commerce businesses.</P>
          <P>The cost is expressed as a factor rate rather than an interest rate. A factor rate of 1.15x to 1.3x is common for e-commerce businesses with strong metrics. On a S$500K advance at 1.2x, you repay S$600K total. The effective annualised cost depends on how quickly you repay, so model this carefully. If your average order value is high and your repeat purchase rate is strong, the repayment will be faster and the effective rate higher.</P>

          <Callout>
            <P style={{ margin: 0, fontSize: 14, color: C.black, fontWeight: 500 }}>RBF works best for businesses with predictable, recurring revenue. If your sales are highly seasonal (heavy in Q4, quiet in Q1), the flexible repayment structure helps because you pay less during slow months. But make sure you understand what happens during a sustained downturn. Some RBF facilities have minimum monthly payments even if revenue drops significantly. Read the terms.</P>
          </Callout>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>Invoice financing for B2B sellers</H2>
          <P>If you sell products to other businesses and those businesses pay on terms (30, 60, 90 days), invoice financing lets you access that cash immediately instead of waiting. The lender advances 80 to 90% of the invoice value upfront, and you receive the balance (minus fees) when your customer pays.</P>
          <P>This is especially relevant for product manufacturers and wholesalers who sell to retailers, distributors, or corporate buyers. The lender's primary risk assessment is on your customer, not you. If your customers are large retailers, listed companies, or government entities, the terms will be very favourable because the likelihood of them paying is high.</P>
          <P>Invoice financing can be structured as factoring (the lender takes over collection) or as invoice discounting (you retain control and your customer doesn't know a lender is involved). For B2B product businesses with strong receivables, this is one of the most efficient ways to accelerate cash flow without taking on traditional debt.</P>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>Purchase order financing</H2>
          <P>If you have confirmed purchase orders from creditworthy buyers but don't have the cash to fulfil them, PO financing can bridge the gap. The lender advances funds to pay your supplier or manufacturer, based on the strength of the buyer's order, not your own balance sheet. Once you deliver the goods and the buyer pays, the lender takes their cut and you keep the profit.</P>
          <P>This is particularly powerful for product companies that have landed orders from major retailers or large corporates. The buyer's creditworthiness is the primary underwriting factor. If your buyer is a household-name retailer or a listed company, PO finance lenders are comfortable funding the entire production and fulfilment cycle because they know the buyer will pay.</P>
          <P>PO financing is often used in combination with accounts receivable factoring. The PO lender funds the production and shipment. Once the goods are delivered and invoiced, an AR factor takes over, advancing against the receivable and repaying the PO lender. The two products work together to finance the complete order cycle from confirmed PO to final payment.</P>

          <Callout>
            <P style={{ margin: 0, fontSize: 14, color: C.black, fontWeight: 500 }}>If you're a Singapore company selling into international markets, especially the US or UK, you're not limited to Singapore lenders. There are specialist PO finance and AR factoring providers in the US, UK, and other markets that actively serve exporters. They underwrite based on the buyer's credit profile, so if your buyer is a major US retailer, you can access US-based trade finance infrastructure even though you're a Singapore entity. This opens up a much larger lender universe than most product companies realise.</P>
          </Callout>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>Working capital for seasonal businesses</H2>
          <P>Many e-commerce and product businesses have pronounced seasonality. Chinese New Year, back-to-school, 11.11, Black Friday, Christmas. If your revenue doubles in Q4, you need to build inventory in Q3, which means your cash requirement peaks months before the revenue comes in.</P>
          <P>Seasonal working capital facilities are designed for exactly this. They provide a lump sum or revolving line that you draw down before your peak season and repay as revenue comes in. The facility is structured around your specific business cycle, with draw periods aligned to your restocking timeline and repayment periods aligned to your sales collection.</P>
          <P>The challenge is that lenders need to see the pattern clearly. At least 2 years of financial data showing the seasonal cycle helps enormously. If this is your first or second year, lenders will be more cautious. You may need to supplement with other forms of financing or provide additional security to get the quantum you need.</P>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>Equipment and production financing</H2>
          <P>If you manufacture products, your equipment is both a cost centre and a potential financing tool. Equipment financing, also called hire purchase or asset financing, lets you acquire machinery, production lines, packaging equipment, or other fixed assets without paying the full amount upfront.</P>
          <P>The structure is simple. The lender purchases the equipment on your behalf (or refinances equipment you already own). You make monthly payments over 2 to 7 years. The equipment itself serves as collateral, so the lender's risk is partially covered by the asset value. This usually means lower rates than unsecured borrowing.</P>
          <P>For manufacturers looking to expand production capacity, upgrade to more efficient equipment, or automate parts of their process, equipment financing is one of the most straightforward and cost-effective options available. If you already own equipment that's paid off, you can also use it as collateral for a working capital facility by refinancing against its current value.</P>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>Property-backed lending</H2>
          <P>If you or your directors own property in Singapore, that equity can unlock significantly better financing terms for the business. Property-backed facilities typically offer the lowest interest rates, highest loan quantums, and longest tenors available. For a product business that needs a large working capital buffer, this can be transformative.</P>
          <P>The trade-off is that the property is at risk if the business defaults. For product businesses specifically, where inventory risk, shipping delays, and customer defaults can all impact cash flow, this risk needs to be weighed carefully. A bad season or a container stuck at port shouldn't put your home on the line.</P>
          <P>For more detail on how property-backed facilities work, including LTV ratios, structures, and what to watch out for, read our <a href="https://quickfund.sg/guide/property-backed-loans" style={{ color: C.orange, textDecoration: "none", fontWeight: 500 }}>Property-Backed Loans guide</a>.</P>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>What lenders look at</H2>
          <P>Product businesses are assessed differently from services or tech companies. The metrics that matter reflect the physical, inventory-driven nature of the business.</P>
          {[
            { t: "Inventory turnover", d: "How quickly does your stock sell? Lenders look at how many days inventory sits in your warehouse before it's sold. Fast-moving inventory (under 60 days) is far more financeable than slow-moving stock (over 120 days). Aged inventory, products approaching expiry, or items going out of season are treated as low-value or worthless by lenders." },
            { t: "Gross margin", d: "What do you make on each product sold after the cost of goods? Margins below 20% make lenders nervous because there's very little room for error. If a shipment is delayed, if returns spike, or if you need to discount to clear stock, thin margins can quickly turn into losses." },
            { t: "Revenue consistency and growth", d: "Is revenue growing, stable, or declining? Seasonal fluctuations are expected and understood, but the overall trend matters. Lenders want to see that the business is at least stable, and ideally growing, year on year. Highly volatile revenue with no clear pattern is harder to underwrite." },
            { t: "Supplier and buyer concentration", d: "If 70% of your inventory comes from one factory in one country, that's a supply chain risk. If 60% of your revenue comes from one marketplace or one buyer, that's a customer concentration risk. Lenders prefer diversification on both sides." },
            { t: "Return rates and chargebacks", d: "For e-commerce businesses, lenders will look at return rates. High returns erode revenue and create inventory management headaches. If your return rate is above 15 to 20%, expect questions. Chargebacks and disputes are also scrutinised, particularly for DTC businesses." },
            { t: "Platform data", d: "E-commerce lenders increasingly underwrite based on real-time platform data. Your Shopify dashboard, your Amazon Seller Central account, your Shopee analytics. They want to see actual sales velocity, average order value, customer acquisition cost, and repeat purchase rates. Make sure your data is clean and your accounts are in order." },
          ].map((item, i) => (
            <div key={i} style={{ marginBottom: 14 }}>
              <h3 style={{ fontFamily: "Poppins, sans-serif", fontSize: 15, fontWeight: 700, color: C.black, marginBottom: 4 }}>{item.t}</h3>
              <P style={{ margin: 0, fontSize: 14 }}>{item.d}</P>
            </div>
          ))}

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>Marketplace sellers: specific challenges</H2>
          <P>If you sell through Amazon, Shopee, Lazada, TikTok Shop, or other marketplaces, your financing situation has unique complexities that direct-to-consumer businesses don't face.</P>
          <P>Payout delays are the most immediate issue. Marketplaces hold your funds for 7 to 21 days (sometimes longer) after a sale. If you're doing high volume, that's a significant amount of cash sitting in someone else's account. Add in advertising spend (which the platform charges immediately) and the cash flow gap can be substantial.</P>
          <P>Marketplace account suspensions are a real risk that lenders are aware of. If your account is suspended for a policy violation, your revenue goes to zero overnight with no warning. Lenders who specialise in marketplace sellers understand this risk and factor it into their terms. Having multiple sales channels (your own website plus one or more marketplaces) reduces this risk and improves your financability.</P>

          <Callout>
            <P style={{ margin: 0, fontSize: 14, color: C.black, fontWeight: 500 }}>Some marketplace sellers commingle personal and business finances, run multiple seller accounts, or have messy accounting because they started as a side hustle. If you're seeking financing, clean this up first. Separate business bank accounts, proper bookkeeping, and consolidated financial statements are non-negotiable for any serious lender.</P>
          </Callout>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>Common mistakes that drain cash</H2>
          {[
            { t: "Overstocking based on optimism", d: "Ordering too much inventory based on projected demand rather than confirmed orders or historical data. Excess stock ties up cash, takes up warehouse space, and may need to be discounted to clear. The safest approach: order based on proven sell-through rates with a small buffer, not on best-case projections." },
            { t: "Not matching financing to the cash cycle", d: "Using a 3-year term loan to fund inventory that turns over in 60 days, or using a short-term facility to buy equipment that will take years to pay back. Match the tenor of the financing to the lifecycle of what it's funding. Short-term assets need short-term financing. Long-term assets need long-term financing." },
            { t: "Ignoring the true cost of supplier payment terms", d: "Your supplier offers 2% discount for payment within 10 days, or full price at 60 days. That 2% sounds small, but annualised it's roughly 15%. If you can access financing at a lower all-in cost than the early payment discount annualised, paying early with borrowed money actually saves you money. Many product businesses don't do this calculation." },
            { t: "Growing into unprofitable channels", d: "Some sales channels look good on top-line revenue but are unprofitable after advertising, marketplace fees, returns, and shipping. Financing growth on an unprofitable channel means borrowing money to lose money faster. Make sure every channel you're scaling is unit-economics positive before you borrow to fuel it." },
            { t: "No inventory management discipline", d: "If you can't tell a lender exactly what's in your warehouse, how long it's been there, and what it's worth, you'll struggle to get inventory financing. Invest in proper inventory management before you approach lenders. Real-time inventory data from a system like an ERP or a dedicated inventory platform is increasingly expected." },
          ].map((item, i) => (
            <div key={i} style={{ marginBottom: 14 }}>
              <h3 style={{ fontFamily: "Poppins, sans-serif", fontSize: 15, fontWeight: 700, color: C.black, marginBottom: 4 }}>{item.t}</h3>
              <P style={{ margin: 0, fontSize: 14 }}>{item.d}</P>
            </div>
          ))}

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>Responsible borrowing for product businesses</H2>
          <P>Product businesses carry a specific type of risk that services and software companies don't. You can't un-make inventory. Once the goods are ordered, produced, and shipped, that capital is committed. If the market shifts, if a product doesn't sell, if a container is held up at customs, or if a customer cancels a large order, you're left holding stock and debt.</P>
          <div style={{ padding: "18px 20px", background: C.cream, borderLeft: `3px solid ${C.black}`, borderRadius: "0 8px 8px 0", marginBottom: 20 }}>
            <P style={{ margin: 0, fontSize: 14, color: C.black, fontWeight: 500, lineHeight: 1.7 }}>Before borrowing to fund inventory or production: do you have confirmed orders, or are you betting on demand? If you're financing speculative inventory, what's the liquidation plan if it doesn't sell? Can you absorb a 20 to 30% drop in sell-through without defaulting on the facility? These aren't pessimistic questions. They're the questions a responsible operator asks.</P>
          </div>
          {[
            "Are you financing confirmed demand or speculative inventory?",
            "If sell-through drops 30%, can you still service the debt?",
            "Do you have a liquidation plan for inventory that doesn't move?",
            "Are you comfortable with the personal guarantees and security you're providing?",
            "Have you modelled the total debt service across all your facilities, not just the new one?",
          ].map((q, i) => (
            <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 8 }}>
              <span style={{ fontFamily: "Poppins, sans-serif", fontSize: 13, color: C.orange, fontWeight: 800, minWidth: 20 }}>{i + 1}.</span>
              <P style={{ margin: 0, fontSize: 14 }}>{q}</P>
            </div>
          ))}
          <P>Read our <a href="https://quickfund.sg/responsible-business-promise" style={{ color: C.orange, textDecoration: "none", fontWeight: 500 }}>Responsible Business Promise</a> for more on how we think about this.</P>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>When to talk to QuickFund</H2>
          <P>If you run an e-commerce business or manufacture products in Singapore, whether you're importing from China and selling on Shopee, manufacturing locally and distributing to retailers, or running a DTC brand selling into the US, UK, or Southeast Asia, we can help you find the right financing.</P>
          <P>We are not owned by any lender. No lender has equity in our business. We work across Singapore banks, finance companies, trade finance specialists, fintech platforms, and alternative lenders. But our network doesn't stop at Singapore. For product companies selling internationally, we also work with specialist e-commerce financing platforms, PO finance providers, and AR factoring firms based in the US, UK, and other markets. If your buyers or sales channels are international, your financing options should be too.</P>
          <P>The right financing structure for a product business is rarely one single facility. It's usually a combination: trade finance for imports, PO financing for large orders, a working capital line for operations, and maybe invoice financing or AR factoring for B2B receivables. Getting that combination right, across both local and international lenders, and making sure the total cost and total debt service are manageable, is what we help with.</P>

          <Callout type="dark">
            <P style={{ margin: 0, fontSize: 14, color: C.black, fontWeight: 500, lineHeight: 1.7 }}>If you've been relying on personal savings or credit cards to fund inventory, or if you've only ever explored financing with your local bank, talk to us. There's a growing global ecosystem of lenders built specifically for e-commerce and product companies, and most Singapore businesses don't know it exists. The jump from self-funded to properly financed, with the right mix of local and international facilities, is one of the most impactful transitions a product business can make.</P>
          </Callout>

          {/* CTAs */}
          <div style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 12 }}>
            <a onClick={() => setShowGate(true)} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 22px", background: C.orange, borderRadius: 10, cursor: "pointer", textDecoration: "none" }}>
              <div><div style={{ fontFamily: "Poppins, sans-serif", fontSize: 14, fontWeight: 700, color: "#fff" }}>Download the full guide</div><div style={{ fontFamily: "Figtree, sans-serif", fontSize: 12, color: "rgba(255,255,255,0.7)", marginTop: 2 }}>Inventory, trade finance, seasonal working capital, and a checklist</div></div>
              <Bolt size={20} color="#fff" style={{ flexShrink: 0 }} />
            </a>
            <a href="https://quickfund.sg/#tools" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 22px", background: "#fff", borderRadius: 10, border: `1.5px solid ${C.greyLight}`, textDecoration: "none" }}>
              <div><div style={{ fontFamily: "Poppins, sans-serif", fontSize: 14, fontWeight: 700, color: C.black }}>Try the AI Loan Check-Up</div><div style={{ fontFamily: "Figtree, sans-serif", fontSize: 12, color: C.grey, marginTop: 2 }}>10 questions. Free. See what you qualify for.</div></div>
              <Bolt size={20} style={{ flexShrink: 0 }} />
            </a>
            <a href="https://wa.me/6580576702?text=Hi%20QuickFund%2C%20I%20have%20a%20question%20about%20e-commerce%20or%20product%20financing" target="_blank" rel="noopener" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 22px", background: C.black, borderRadius: 10, textDecoration: "none" }}>
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
            {["Property-Backed Loans", "Doctors and Dentists", "Trading Companies", "Tech Companies", "Startups", "Software", "F&B", "Construction", "Logistics", "Professional Services", "Retail"].map((s, i) => (
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
              All borrowing carries real and significant risks. Secured loans may result in the loss of pledged assets, including property, vehicles, equipment, inventory, or shares, in the event of default. Trust receipts carry personal liability. Lenders may require personal guarantees, corporate guarantees, share charges, or other forms of security. Inventory values can depreciate, become obsolete, or be damaged. Trade finance facilities are subject to documentary compliance and international trade regulations. Revenue-based financing costs depend on repayment speed and may result in higher effective interest rates than anticipated. Property values, asset values, and business conditions can change.
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


module.exports = { EcommerceGuide };
