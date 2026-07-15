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
    <a href="https://wa.me/6580576702?text=Hi%20QuickFund%2C%20I%20have%20a%20question%20about%20trade%20financing" target="_blank" rel="noopener"
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
        <h3 style={{ fontFamily: "Poppins, sans-serif", fontSize: 20, fontWeight: 800, color: C.black, lineHeight: 1.15, marginBottom: 8 }}>Trading Company<br />Financing Guide</h3>
        <p style={{ fontFamily: "Figtree, sans-serif", fontSize: 13, color: C.grey, lineHeight: 1.5, marginBottom: 14 }}>
          Includes trade finance structures, LC and trust receipt details, invoice financing options, and a preparation checklist. Everything on this page plus the detail you need to actually move forward.
        </p>
        <div style={{ display: "flex", background: C.cream, borderRadius: 8, padding: 3, marginBottom: 12 }}>
          {["whatsapp", "email"].map(m => (<button key={m} onClick={() => setMethod(m)} style={{ flex: 1, padding: "7px 0", borderRadius: 6, border: "none", cursor: "pointer", fontFamily: "Poppins, sans-serif", fontSize: 11, fontWeight: 700, background: method === m ? "#fff" : "transparent", color: method === m ? C.black : C.grey }}>{m === "whatsapp" ? "WhatsApp" : "Email"}</button>))}
        </div>
        {method === "whatsapp" ? (<div style={{ display: "flex", gap: 6 }}><span style={{ padding: "10px", background: C.cream, borderRadius: 7, border: `1.5px solid ${C.greyLight}`, fontFamily: "Figtree, sans-serif", fontSize: 13, color: C.grey }}>+65</span><input value={wa} onChange={e => setWa(e.target.value.replace(/\D/g, ""))} placeholder="9123 4567" maxLength={8} className="qf-input" style={{ flex: 1 }} /></div>) : (<input value={email} onChange={e => setEmail(e.target.value)} placeholder="you@company.com" className="qf-input" style={{ width: "100%" }} />)}
        <button onClick={() => { console.log("Trading guide lead:", { wa, email, method }); setDone(true); }} disabled={!ok} style={{ width: "100%", padding: "12px", marginTop: 12, background: !ok ? C.greyLight : C.orange, border: "none", borderRadius: 7, fontFamily: "Poppins, sans-serif", fontSize: 13, fontWeight: 700, color: "#fff", cursor: !ok ? "default" : "pointer" }}>Send Me The Full Guide</button><p style={{ fontFamily: "Figtree, sans-serif", fontSize: 10, color: C.greyLight, marginTop: 8, textAlign: "center" }}>By submitting you consent to being contacted about this guide. <a href="https://quickfund.sg/privacy-policy" style={{ color: C.grey }}>Privacy Policy</a>.</p>
      </div>
    </div>);
}

function TradingCompaniesGuide() {
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
            <a href="https://wa.me/6580576702?text=Hi%20QuickFund%2C%20question%20about%20trade%20financing" target="_blank" rel="noopener" style={{ fontFamily: "Poppins, sans-serif", fontSize: 11, fontWeight: 700, color: "#fff", background: C.black, padding: "7px 14px", borderRadius: 6, textDecoration: "none" }}>WhatsApp</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ padding: "60px 20px 40px" }}>
        <Section>
          <div style={{ fontFamily: "Poppins, sans-serif", fontSize: 10, fontWeight: 800, color: C.orange, letterSpacing: "2px", textTransform: "uppercase", marginBottom: 12 }}>Financing Guide</div>
          <h1 className="qf-guide-hero-h1" style={{ fontFamily: "Poppins, sans-serif", fontSize: 42, fontWeight: 800, color: C.black, lineHeight: 0.95, letterSpacing:"-0.8px", marginBottom: 16 }}>
            Financing for<br />Trading Companies<br /><span style={{ color: C.orange }}>in Singapore</span>
          </h1>
          <P style={{ fontSize: 16, maxWidth: 520, color: C.grey }}>
            You buy goods. You sell goods. The gap between paying your supplier and getting paid by your buyer is where the cash flow pressure lives. Here's how to finance that gap, and what to watch out for.
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
              "Why trading company financing is different",
              "The cash conversion cycle problem",
              "Letters of credit and trust receipts",
              "Invoice financing and factoring",
              "Bank guarantees and performance bonds",
              "Working capital facilities",
              "Revenue-based financing",
              "Property-backed lending for traders",
              "What lenders look at in trading companies",
              "Common mistakes that cost money",
              "Responsible borrowing for trading companies",
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

          <H2>Why trading company financing is different</H2>
          <P>Trading companies have a unique financial profile. Revenue can be high, sometimes very high, but margins are thin. A company doing S$20M in revenue might be making S$500K to S$1M in net profit. The business model is buy low, sell higher, and repeat at volume. The money is in the turnover, not the margin.</P>
          <P>This creates a specific financing challenge. You need large amounts of capital to fund purchases, but the profit on each transaction is small relative to the capital required. If a supplier wants payment upfront and your buyer pays on 60 or 90 day terms, you're funding that entire gap out of your own pocket. At scale, that gap can eat through your cash reserves fast.</P>
          <P>The good news: trade finance is one of the oldest and most well-developed areas of commercial lending. Singapore, as a global trading hub, has deep infrastructure for it. Banks, finance companies, and alternative lenders all offer products specifically designed for companies that buy and sell goods. The options are broader than most trading company owners realise.</P>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>The cash conversion cycle problem</H2>
          <P>Here's the fundamental issue. You order goods from your supplier. You pay them, or at least commit to paying them within a fixed window. The goods ship. They arrive. You sell them to your buyer. Your buyer pays you 30, 60, or 90 days later. Sometimes longer.</P>
          <P>The time between when your cash goes out and when it comes back in is your cash conversion cycle. For many trading companies in Singapore, that cycle is 60 to 120 days. If you're importing from China, Southeast Asia, or Europe, shipping time alone can be 2 to 6 weeks before the goods even arrive.</P>

          <Callout>
            <P style={{ margin: 0, fontSize: 14, color: C.black, fontWeight: 500 }}>Simple example: you buy S$500K of goods from a Chinese supplier, payment on order. Shipping takes 4 weeks. You sell to a buyer in Southeast Asia on 60-day terms. That's roughly 90 days where your S$500K is tied up. If you're doing this every month, you need S$1.5M in working capital just to keep the cycle running. Most trading companies don't have that sitting in the bank.</P>
          </Callout>

          <P>This is not a sign of a bad business. It's a normal structural feature of trading. The entire trade finance industry exists because of this gap. The question is not whether you need financing, it's whether you're using the right type and paying the right price for it.</P>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>Letters of credit and trust receipts</H2>
          <P>Letters of credit (LCs) are the backbone of international trade. An LC is a guarantee from your bank to your supplier's bank that payment will be made once the goods are shipped and the correct documents are presented. Your supplier gets certainty of payment. You get the goods without paying upfront out of your own pocket.</P>
          <P>There are several types. A sight LC means the supplier gets paid immediately once the documents are in order. A usance LC (also called a deferred payment LC) gives you a grace period, typically 30 to 180 days after the documents are presented. The supplier agrees to wait for payment because your bank's guarantee removes their risk. You still pay LC fees and potentially usance interest to your bank, but you get time to sell the goods before payment is due.</P>
          <P>Trust receipts work hand in hand with LCs. When the goods arrive and you take delivery, the bank releases the goods to you under a trust receipt. You hold the goods (or their proceeds) in trust for the bank. You sell the goods, collect payment from your buyer, and use that to repay the bank. The trust receipt period is usually 30 to 180 days, depending on the bank and the nature of the goods.</P>

          <Callout type="dark">
            <P style={{ margin: 0, fontSize: 14, color: C.black, fontWeight: 500, lineHeight: 1.7 }}>Key point: if you sell the goods and collect payment but don't repay the trust receipt, the bank can come after you personally. Trust receipts carry personal liability. The goods and their proceeds belong to the bank until the trust receipt is settled. This is not a technicality. Banks enforce it.</P>
          </Callout>

          <P>LC facilities require a banking relationship and a trade finance line. Banks assess your track record, the nature of the goods (commodities are easier than niche products), the creditworthiness of your buyers, and the countries involved. Sanctioned countries, conflict zones, and high-risk jurisdictions make LCs harder and more expensive to obtain.</P>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>Invoice financing and factoring</H2>
          <P>If you've already delivered the goods and you're waiting for your buyer to pay, invoice financing lets you access that cash now instead of waiting 30 to 90 days. You assign your outstanding invoices to a lender, and they advance you a percentage of the invoice value, typically 80 to 90%. When your buyer pays, the lender takes their cut and releases the balance to you.</P>

          {[
            { t: "Invoice discounting", d: "You retain control of your receivables and your buyer doesn't know a lender is involved. The lender advances against your invoices but you still collect payment from the buyer yourself. This is usually available to established companies with a track record." },
            { t: "Factoring", d: "The lender takes over collection. Your buyer pays the lender directly. This works if your buyers are creditworthy corporates and you don't mind them knowing you're using a factor. Some lenders offer non-recourse factoring, meaning if the buyer doesn't pay, the lender absorbs the loss, not you." },
            { t: "Supply chain financing (reverse factoring)", d: "Your buyer sets up a programme with a lender. The lender pays you early (at a discount), and the buyer pays the lender on their normal terms. This only works if your buyer is large enough and willing to set it up. For Singapore-based traders selling to major corporates or MNCs, this can be a powerful option." },
          ].map((item, i) => (
            <div key={i} style={{ marginBottom: 12, padding: "14px 16px", background: "#fff", borderRadius: 8, border: `1px solid ${C.greyLight}` }}>
              <h3 style={{ fontFamily: "Poppins, sans-serif", fontSize: 14, fontWeight: 700, color: C.black, marginBottom: 4 }}>{item.t}</h3>
              <P style={{ margin: 0, fontSize: 13 }}>{item.d}</P>
            </div>
          ))}

          <P>Invoice financing is one of the most accessible forms of trade financing because the lender's primary risk is your buyer, not you. If your buyers are reputable companies with good payment histories, the terms will be favourable. If your buyers are small or have patchy payment records, expect lower advance rates and higher fees.</P>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>Bank guarantees and performance bonds</H2>
          <P>Some trading arrangements require you to post a guarantee before the deal even starts. A bank guarantee (BG) is a commitment from your bank that if you fail to perform your obligations, the bank will pay the beneficiary up to the guaranteed amount.</P>
          <P>Performance bonds are a common type of BG in trading. If you're tendering for a government supply contract, or if a buyer requires assurance that you'll deliver on time and to specification, a performance bond gives them that security. The bond amount is typically 5 to 10% of the contract value.</P>
          <P>BGs tie up your credit line. The bank sets aside the guaranteed amount against your trade finance facility. If you have a S$2M trade line and you issue a S$500K BG, you effectively only have S$1.5M of the line available for LCs and trust receipts. For trading companies juggling multiple contracts, this can create a squeeze.</P>

          <Callout>
            <P style={{ margin: 0, fontSize: 14, color: C.black, fontWeight: 500 }}>Insurance-backed bonds are an alternative to bank guarantees for performance bonds. Instead of tying up your bank line, you get the bond issued through an insurer. The cost is typically a flat annual premium. This frees up your banking facilities for actual trade finance. Not all buyers accept insurance bonds, but many do, especially in government procurement.</P>
          </Callout>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>Working capital facilities</H2>
          <P>Sometimes you need cash that's not tied to a specific trade transaction. Payroll. Rent. Operational expenses. A deposit on a new warehouse. Bridging a gap between two large shipments. Working capital facilities cover these.</P>
          <P>For trading companies, working capital comes in two main forms. A revolving credit facility lets you draw and repay as needed, paying interest only on what you've drawn. A term loan gives you a lump sum with fixed monthly repayments. Revolving facilities offer more flexibility but usually require a stronger credit profile to obtain.</P>
          <P>Banks offer working capital to trading companies but they underwrite conservatively. They want to see at least 2 to 3 years of financial statements, consistent profitability, and a clean balance sheet. If you're newer or growing fast, non-bank lenders and fintech platforms may be more accessible, though the rates will be higher.</P>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>Revenue-based financing</H2>
          <P>Revenue-based financing (RBF) is a newer option that works well for trading companies with consistent monthly revenue. Instead of traditional interest, the lender takes a percentage of your revenue each month until the facility is repaid. If revenue is higher in a given month, you repay more. If it dips, you repay less.</P>
          <P>For seasonal traders, this can be attractive. If you do heavy volume in Q4 and lighter volume in Q1, revenue-based repayments flex with your business cycle instead of forcing fixed payments during your slow months.</P>
          <P>The total cost of RBF is usually expressed as a factor rate rather than an annual interest rate. A factor rate of 1.2x on a S$500K advance means you repay S$600K in total, regardless of how long it takes. If you repay quickly, the effective annualised cost is high. If it takes longer, the annualised cost is lower but you're paying for longer. Understand the total cost before you commit.</P>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>Property-backed lending for traders</H2>
          <P>If you or your directors own property in Singapore, that equity can be used to secure significantly more favourable financing for the trading business. Property-backed facilities typically offer the lowest interest rates available, higher loan quantums, and longer tenors than unsecured or trade-specific facilities.</P>
          <P>The common structure: a director pledges personal property (residential or commercial) as collateral, and the company gets a facility secured against it. This can be used as a general working capital line, a backup for trade finance, or to fund a major purchase or expansion.</P>

          <Callout>
            <P style={{ margin: 0, fontSize: 14, color: C.black, fontWeight: 500 }}>Important: pledging property means the property is at risk if the business defaults. This is real. If the trading business hits a bad patch, or a buyer defaults on a large receivable, and you can't service the loan, the lender can take the property. Make sure you're comfortable with this before going down this path. For more detail, read our <a href="https://quickfund.sg/guide/property-backed-loans" style={{ color: C.orange, textDecoration: "none", fontWeight: 600 }}>Property-Backed Loans guide</a>.</P>
          </Callout>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>What lenders look at in trading companies</H2>
          <P>Lenders assessing a trading company focus on a specific set of factors. Understanding what they're looking for helps you prepare and present your business in the strongest possible light.</P>
          {[
            { t: "Trade history and track record", d: "How long have you been trading? What's your volume? Do you have established relationships with both suppliers and buyers? A company with 5 years of consistent trading history is far easier to finance than one that started last year." },
            { t: "Buyer quality", d: "Who are you selling to? Lenders love it when your buyers are large, creditworthy corporates, listed companies, government agencies, or multinational firms. The stronger your buyer, the more comfortable the lender is, because the receivable is more likely to be paid." },
            { t: "Gross margin and profitability", d: "Trading margins are thin by nature, but lenders want to see that you're consistently profitable. If your margin is 3 to 5% but your volume is high and consistent, that's fine. What concerns lenders is volatility, loss-making quarters, or margins that are shrinking year on year." },
            { t: "Concentration risk", d: "If 80% of your revenue comes from one buyer, that's a red flag. If that buyer has a problem, so do you. Lenders prefer diversified buyer and supplier bases. Same applies to product concentration and geographic concentration." },
            { t: "Inventory management", d: "Are your goods moving? How long does inventory sit in the warehouse before it's sold? Slow-moving inventory ties up capital and increases the risk of obsolescence or spoilage. Lenders look at inventory turnover closely." },
            { t: "Financial hygiene", d: "Clean financial statements, filed on time. Bank statements that match your reported revenue. No unexplained related-party transactions. No aggressive accounting. Trading companies that mix personal and business finances will have a harder time getting approved." },
          ].map((item, i) => (
            <div key={i} style={{ marginBottom: 14 }}>
              <h3 style={{ fontFamily: "Poppins, sans-serif", fontSize: 15, fontWeight: 700, color: C.black, marginBottom: 4 }}>{item.t}</h3>
              <P style={{ margin: 0, fontSize: 14 }}>{item.d}</P>
            </div>
          ))}

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>Common mistakes that cost money</H2>
          {[
            { t: "Relying on a single trade finance line", d: "If your only facility is with one bank and that bank tightens your line (which happens, especially during economic uncertainty), your entire operation can grind to a halt. Diversify your financing sources. Have at least two relationships so you're never held hostage by one institution's credit committee." },
            { t: "Not matching the financing to the transaction", d: "Using a term loan to fund individual trade transactions is expensive and inflexible. Use LCs and trust receipts for imports. Use invoice financing for receivables. Use working capital for operational expenses. Each product is designed for a specific purpose and priced accordingly." },
            { t: "Ignoring the total cost of trade finance", d: "LC issuance fees, amendment fees, trust receipt interest, margin deposits, cable charges, document handling fees. They add up. If you're only looking at the headline interest rate and ignoring the ancillary fees, you're underestimating the real cost. Get the all-in cost for every facility before committing." },
            { t: "Overtrading", d: "Taking on more purchase orders than your financing can support. The temptation is real: a big buyer wants more volume, and you don't want to say no. But if you can't fund the purchase, or if one delayed payment cascades into missed obligations across multiple transactions, you're in trouble. Growth is only growth if it's funded." },
            { t: "Not reading the trust receipt terms", d: "Trust receipts carry personal liability in most jurisdictions. If the goods are sold and the proceeds aren't used to repay the bank, you can be personally liable. Some trading company directors don't fully understand this until something goes wrong. Read the fine print. Understand what you're signing." },
          ].map((item, i) => (
            <div key={i} style={{ marginBottom: 14 }}>
              <h3 style={{ fontFamily: "Poppins, sans-serif", fontSize: 15, fontWeight: 700, color: C.black, marginBottom: 4 }}>{item.t}</h3>
              <P style={{ margin: 0, fontSize: 14 }}>{item.d}</P>
            </div>
          ))}

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>Responsible borrowing for trading companies</H2>
          <P>Trade finance can accelerate your business dramatically. It can also destroy it if used carelessly. The leverage in a trading business cuts both ways. When things go well, financing lets you scale faster than your own capital would allow. When things go wrong, that same leverage magnifies the losses.</P>
          <div style={{ padding: "18px 20px", background: C.cream, borderLeft: `3px solid ${C.black}`, borderRadius: "0 8px 8px 0", marginBottom: 20 }}>
            <P style={{ margin: 0, fontSize: 14, color: C.black, fontWeight: 500, lineHeight: 1.7 }}>Before you take on any trade financing, ask yourself: if my biggest buyer delays payment by 60 days, or if a shipment is stuck at port for 3 weeks, or if commodity prices drop 15% while the goods are in transit, can I still meet my obligations? If the answer is only yes when everything goes perfectly, you're over-leveraged.</P>
          </div>
          {[
            "Can your business survive a single large buyer default without collapsing?",
            "Are you borrowing to fund real, confirmed orders, or speculative inventory?",
            "Do you have a cash reserve for unexpected costs, or is every dollar deployed?",
            "If prices move against you while goods are in transit, can you absorb the loss?",
            "Are you comfortable with the personal guarantees and security you're providing?",
          ].map((q, i) => (
            <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 8 }}>
              <span style={{ fontFamily: "Poppins, sans-serif", fontSize: 13, color: C.orange, fontWeight: 800, minWidth: 20 }}>{i + 1}.</span>
              <P style={{ margin: 0, fontSize: 14 }}>{q}</P>
            </div>
          ))}
          <P>Borrow for productive, confirmed transactions. Keep a buffer. Don't fund speculative positions with trade finance. And read our <a href="https://quickfund.sg/responsible-business-promise" style={{ color: C.orange, textDecoration: "none", fontWeight: 500 }}>Responsible Business Promise</a> for more on how we think about this.</P>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>When to talk to QuickFund</H2>
          <P>If you're a trading company in Singapore, whether you're importing consumer goods from China, exporting commodities across Southeast Asia, or distributing industrial products regionally, the financing options available to you are broader and more competitive than what any single bank will show you.</P>
          <P>We are not owned by any lender. No lender has equity in our business. We work across banks, finance companies, fintech platforms, and alternative lenders. When we recommend a facility, it's because we believe it's the right one for your situation, not because it earns us the highest fee.</P>
          <P>We've worked with trading companies that were paying too much for their trade lines because they'd never compared. We've helped businesses that were rejected by their bank find facilities elsewhere within days. We've restructured financing for traders who were using the wrong product for their transaction type and overpaying as a result.</P>
          <P>Trade finance is complex. LCs, trust receipts, invoice financing, working capital, guarantees, each has its place, and the right combination depends on your specific trade flows, your buyer profile, your margins, and your risk appetite. We help you work through all of that.</P>

          <Callout type="dark">
            <P style={{ margin: 0, fontSize: 14, color: C.black, fontWeight: 500, lineHeight: 1.7 }}>If you already have trade finance facilities in place, we can review your existing terms. As your trading volume grows, as you add new buyers or new geographies, your financing should evolve with you. We'll tell you when you're overpaying, when you should be splitting across multiple lenders, and when it's time to renegotiate.</P>
          </Callout>

          {/* CTAs */}
          <div style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 12 }}>
            <a onClick={() => setShowGate(true)} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 22px", background: C.orange, borderRadius: 10, cursor: "pointer", textDecoration: "none" }}>
              <div><div style={{ fontFamily: "Poppins, sans-serif", fontSize: 14, fontWeight: 700, color: "#fff" }}>Download the full guide</div><div style={{ fontFamily: "Figtree, sans-serif", fontSize: 12, color: "rgba(255,255,255,0.7)", marginTop: 2 }}>Trade finance structures, lender types, and a preparation checklist</div></div>
              <Bolt size={20} color="#fff" style={{ flexShrink: 0 }} />
            </a>
            <a href="https://quickfund.sg/#tools" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 22px", background: "#fff", borderRadius: 10, border: `1.5px solid ${C.greyLight}`, textDecoration: "none" }}>
              <div><div style={{ fontFamily: "Poppins, sans-serif", fontSize: 14, fontWeight: 700, color: C.black }}>Try the AI Loan Check-Up</div><div style={{ fontFamily: "Figtree, sans-serif", fontSize: 12, color: C.grey, marginTop: 2 }}>10 questions. Free. See what you qualify for.</div></div>
              <Bolt size={20} style={{ flexShrink: 0 }} />
            </a>
            <a href="https://wa.me/6580576702?text=Hi%20QuickFund%2C%20I%20have%20a%20question%20about%20trade%20financing" target="_blank" rel="noopener" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 22px", background: C.black, borderRadius: 10, textDecoration: "none" }}>
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
            {["Property-Backed Loans", "Doctors and Dentists", "Tech Companies", "Startups", "E-commerce", "Software", "F&B", "Construction", "Logistics", "Professional Services", "Retail"].map((s, i) => (
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
              All borrowing carries real and significant risks. Secured loans may result in the loss of pledged assets, including property, vehicles, equipment, or shares, in the event of default. Lenders may require personal guarantees, corporate guarantees, share charges, or other forms of security. Trust receipts carry personal liability. Letters of credit and trade finance facilities are subject to bank assessment, documentary compliance, and international trade regulations. Property values, asset values, commodity prices, and business conditions can change. Past performance is not indicative of future results.
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


module.exports = { TradingCompaniesGuide };
