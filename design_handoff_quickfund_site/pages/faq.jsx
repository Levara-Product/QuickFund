const { useState } = React;

const C = { orange: "#FD5026", black: "#0D0D0D", offwhite: "#FAF8F5", grey: "#94918C", greyLight: "#E8E5E0", cream: "#F2EDE6" };
const Bolt = ({ size = 24, color = C.orange, style = {} }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" style={style}><path d="M18 2L6 18h8l-2 12 12-16h-8l2-12z" fill={color}/></svg>
);

const SECTIONS = [
  { title: "How We Work", items: [
    { q: "What does QuickFund actually do?", a: "We don't lend money ourselves. We diagnose your situation, match you with the right lender from our network of banks, finance companies, fintech lenders, family offices, and funds, then manage the application process and negotiate terms on your behalf. We also offer capital advisory for companies that need help with their overall debt structure." },
    { q: "Do I pay anything upfront?", a: "For financing introductions, no. We only earn when you do. Our success fee is typically 2-3% of the facility amount, agreed before you proceed and payable after successful disbursement. For advisory work like debt restructuring, capital stack review, or strategy, we charge a small upfront engagement fee agreed in writing before work begins." },
    { q: "Why not go to the lender directly?", a: "You can. But good luck getting in the queue. We have established relationships with every major bank in Singapore and a deep network of non-bank lenders. Our introductions get priority processing. We also compare across the full market so you're not just accepting the first offer." },
    { q: "How are you different?", a: "We diagnose before we recommend. We read every clause in the term sheet. We tell you when a loan will hurt you, even if it means we lose the deal. We answer your WhatsApp at 11pm. Most people in this space are transactional. We're building long-term relationships. That's why clients come back." },
    { q: "How long does the process take?", a: "Depends on the product and lender. Non-bank working capital can be 2 to 3 business days. Bank loans typically take a few weeks. Larger venture debt facilities can take up to 3 months. We'll give you a realistic timeline upfront." },
    { q: "What's your success rate?", a: "We only take cases forward when we believe there is a realistic financing path. If we don't think we can help, we tell you upfront rather than wasting your time." },
  ]},
  { title: "Products and Services", items: [
    { q: "What types of financing can you arrange?", a: "Working capital, invoice financing, revenue-based financing, property-backed loans (equity release, bridging, development), equipment purchase, car refinancing, venture debt, acquisition finance, and trade finance. We work across both bank and non-bank channels." },
    { q: "What is capital advisory?", a: "Sometimes the issue isn't one loan. It's the whole capital structure. Too much short-term debt, covenants from one lender blocking access to another, a structure that worked at S$2M revenue but is choking you at S$10M. We help companies see and fix the full picture. This includes debt restructuring, refinancing strategy, covenant management, and lender negotiation." },
    { q: "Do you do equity raises?", a: "We can help you think through equity, convertibles, and structured transactions, and work with appropriately licensed or specialist parties where required. If you're thinking about options beyond debt, talk to us." },
    { q: "What's the minimum loan size?", a: "S$100K and above. Most deals we do are S$500K and above, but we take on smaller deals too. Feel free to contact us regardless." },
    { q: "Do you do personal loans?", a: "No. We only work with businesses. For personal financing, approach your bank or a properly licensed lender directly." },
  ]},
  { title: "Property-Backed Lending", items: [
    { q: "How does property-backed lending work?", a: "If you own property, you can borrow against the equity. A lender values the property, lends you a percentage (LTV), and takes a charge over the property as security. Rates are typically much lower than unsecured lending because the lender has real collateral." },
    { q: "What types of property can I use?", a: "Shophouses, commercial property (offices, retail, industrial), residential property, and land. Each type has different lender appetite and LTV ranges." },
    { q: "What is TDSR and does it apply to me?", a: "Total Debt Servicing Ratio is a regulatory framework that can cap total monthly debt obligations at 55% of gross monthly income for certain property loans from financial institutions. Whether TDSR applies depends on the borrower, lender, property type and facility structure. Some alternative or private-credit structures use different underwriting, but every lender will still assess repayment ability and collateral risk." },
    { q: "Can I lose my property?", a: "Yes. If you cannot make the repayments, the lender has the legal right to seize and sell the property. This is a real risk. We will explain the implications before you proceed." },
  ]},
  { title: "International Clients", items: [
    { q: "Which markets do you cover?", a: "Singapore, Malaysia, Hong Kong, US, UK, Vietnam, Thailand, and Indonesia." },
    { q: "I'm a foreign company. Can you help?", a: "Yes. Many of our clients have foreign directors and shareholders. Options are narrower without a local personal guarantor, but they exist: revenue-based financing, invoice financing, property-backed facilities, and offshore funding if your numbers check out and there's security." },
    { q: "Do I need a Singapore entity?", a: "For most Singapore-based business facilities, lenders prefer a Singapore-incorporated company. Options for sole proprietorships are more limited and assessed case by case. For facilities in other markets, the requirements vary. Reach out and we can walk you through the requirements for your specific situation." },
  ]},
  { title: "Regulatory and Legal", items: [
    { q: "Is this like a moneylender?", a: "No. QuickFund does not lend money. We connect companies with banks, finance companies and other lenders that are licensed, exempt or otherwise permitted to lend. Whether a lender requires licensing or exemption depends on the lender and the specific lending activity." },
    { q: "Are you licensed?", a: "QuickFund is a registered Singapore company. We are not a licensed financial adviser and do not provide regulated financial, legal, tax or investment advice. For securities, equity, convertible, fund-raising or capital-markets transactions, we work with appropriately licensed or specialist parties where required." },
    { q: "What is a personal guarantee?", a: "A personal guarantee means a director or shareholder personally guarantees the company's loan. If the company can't pay, the guarantor becomes personally liable. This is common for SME working-capital facilities in Singapore. We will explain the implications before you sign." },
    { q: "What is a share charge?", a: "A share charge gives the lender security over the shares of the borrowing company. If you default, the lender can take control of the company's shares. If the company holds property or other assets, this effectively gives the lender indirect control of those assets." },
  ]},
  { title: "AI Tools", items: [
    { q: "How do the AI tools work?", a: "Our Loan Check-Up asks 10 questions about your business and gives you a personalised assessment of what you likely qualify for. The Term Sheet Scanner analyses your loan terms and flags potential issues. The Rate Check benchmarks your current rate against what's typical for your profile. All three are free, no signup required." },
    { q: "Can I rely on the AI assessment?", a: "The tools provide general guidance based on the information you provide. They are not financial advice and may contain errors or omissions. Think of them as a starting point for a conversation, not a final answer. For specific options and rates, speak to our team directly." },
  ]},
];

function FAQPage() {
  const [openCat, setOpenCat] = useState(SECTIONS[0].title);

  return (
    <div style={{ background: C.offwhite, minHeight: "100vh" }}>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Figtree:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet" />
      <style>{`*{box-sizing:border-box;margin:0;padding:0}::selection{background:${C.orange}25}details summary::-webkit-details-marker{display:none}@media(max-width:768px){.qf-faq-layout{grid-template-columns:1fr!important}.qf-faq-nav{position:static!important;display:flex;flex-wrap:wrap;gap:6px;margin-bottom:24px}}`}</style>

      <a href="https://wa.me/6580576702?text=Hi%20QuickFund" target="_blank" rel="noopener"
        style={{ position: "fixed", bottom: 24, right: 24, zIndex: 300, width: 56, height: 56, borderRadius: 16, background: "#25D366", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 16px rgba(37,211,102,0.35)", textDecoration: "none" }}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="#fff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>

      {/* Nav */}
      <nav style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(250,248,245,0.97)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(0,0,0,0.04)", padding: "0 20px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 54 }}>
          <a href="https://quickfund.sg" style={{ display: "flex", alignItems: "center", gap: 7, textDecoration: "none" }}>
            <Bolt size={14} />
            <span style={{ fontFamily: "Poppins, sans-serif", fontSize: 14, fontWeight: 800, color: C.black, textTransform: "uppercase" }}>QuickFund</span>
          </a>
          <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
            <a href="https://quickfund.sg/#tools" style={{ fontFamily: "Figtree, sans-serif", fontSize: 13, color: C.grey, textDecoration: "none" }}>AI Tools</a>
            <a href="https://wa.me/6580576702?text=Hi%20QuickFund" target="_blank" rel="noopener" style={{ fontFamily: "Poppins, sans-serif", fontSize: 11, fontWeight: 700, color: "#fff", background: C.black, padding: "7px 14px", borderRadius: 6, textDecoration: "none" }}>WhatsApp</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ padding: "60px 20px 32px", maxWidth: 900, margin: "0 auto" }}>
        <div style={{ fontFamily: "Poppins, sans-serif", fontSize: 10, fontWeight: 800, color: C.orange, letterSpacing: "2px", textTransform: "uppercase", marginBottom: 12 }}>FAQ</div>
        <h1 style={{ fontFamily: "Poppins, sans-serif", fontSize: 36, fontWeight: 800, color: C.black, lineHeight: 0.95, letterSpacing:"-0.8px", marginBottom: 12 }}>
          Frequently asked<br />questions
        </h1>
        <p style={{ fontFamily: "Figtree, sans-serif", fontSize: 15, color: C.grey }}>
          Can't find what you're looking for? <a href="https://wa.me/6580576702?text=Hi%20QuickFund%2C%20I%20have%20a%20question" target="_blank" rel="noopener" style={{ color: C.orange, textDecoration: "none", fontWeight: 500 }}>WhatsApp us</a> and we'll answer directly.
        </p>
      </section>

      {/* FAQ Grid */}
      <section style={{ padding: "0 20px 60px", maxWidth: 900, margin: "0 auto" }}>
        <div className="qf-faq-layout" style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: 32, alignItems: "start" }}>
          {/* Category nav */}
          <div className="qf-faq-nav" style={{ position: "sticky", top: 70 }}>
            {SECTIONS.map(s => (
              <button key={s.title} onClick={() => { setOpenCat(s.title); document.getElementById(`faq-${s.title}`)?.scrollIntoView({ behavior: "smooth", block: "start" }); }}
                style={{
                  display: "block", width: "100%", textAlign: "left", padding: "8px 12px",
                  borderRadius: 6, border: "none", cursor: "pointer",
                  fontFamily: "Figtree, sans-serif", fontSize: 13, fontWeight: openCat === s.title ? 600 : 400,
                  color: openCat === s.title ? C.orange : C.grey,
                  background: openCat === s.title ? `${C.orange}08` : "transparent",
                }}>
                {s.title}
              </button>
            ))}
          </div>

          {/* Questions */}
          <div>
            {SECTIONS.map(section => (
              <div key={section.title} id={`faq-${section.title}`} style={{ marginBottom: 32 }}>
                <h2 style={{ fontFamily: "Poppins, sans-serif", fontSize: 18, fontWeight: 800, color: C.black, marginBottom: 12, paddingTop: 8 }}>{section.title}</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  {section.items.map((item, i) => (
                    <details key={i} style={{ padding: "14px 16px", background: i % 2 === 0 ? "#fff" : C.offwhite, borderRadius: 4, cursor: "pointer" }}>
                      <summary style={{ fontFamily: "Poppins, sans-serif", fontSize: 14, fontWeight: 700, color: C.black, listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        {item.q}<span style={{ color: C.orange, fontSize: 16, flexShrink: 0, marginLeft: 10 }}>+</span>
                      </summary>
                      <p style={{ fontFamily: "Figtree, sans-serif", fontSize: 14, color: C.grey, lineHeight: 1.65, marginTop: 10, paddingRight: 20 }}>{item.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "0 20px 60px", maxWidth: 900, margin: "0 auto" }}>
        <div style={{ background: C.black, borderRadius: 12, padding: "36px 32px", textAlign: "center" }}>
          <h2 style={{ fontFamily: "Poppins, sans-serif", fontSize: 22, fontWeight: 800, color: "#fff", marginBottom: 8 }}>Still have questions?</h2>
          <p style={{ fontFamily: "Figtree, sans-serif", fontSize: 14, color: "rgba(255,255,255,0.4)", marginBottom: 20 }}>We're faster on WhatsApp than email.</p>
          <a href="https://wa.me/6580576702?text=Hi%20QuickFund%2C%20I%20have%20a%20question" target="_blank" rel="noopener" style={{ padding: "12px 28px", background: C.orange, color: "#fff", borderRadius: 8, fontFamily: "Poppins, sans-serif", fontSize: 14, fontWeight: 700, textDecoration: "none" }}>WhatsApp Us</a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: "24px 20px", maxWidth: 900, margin: "0 auto", borderTop: `1px solid ${C.greyLight}` }}>
        <div style={{ padding: "14px 16px", background: C.cream, borderRadius: 8, marginBottom: 16 }}>
          <p style={{ fontFamily: "Figtree, sans-serif", fontSize: 10, color: C.grey, lineHeight: 1.6, margin: 0 }}>
            <span style={{ fontWeight: 600, color: C.black }}>Disclaimer:</span> This page is for general informational purposes only and does not constitute financial, legal, investment, or professional advice. QuickFund does not provide regulated financial, legal, tax or investment advice. All loan terms, rates, and conditions are determined by individual lenders. You are solely responsible for your borrowing decisions. Seek independent legal and financial advice before entering into any loan or guarantee arrangement.
          </p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <Bolt size={10} /><span style={{ fontFamily: "Poppins, sans-serif", fontSize: 10, fontWeight: 800, color: C.black, textTransform: "uppercase" }}>QuickFund</span>
            
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            <a href="https://quickfund.sg/responsible-business-promise" style={{ fontFamily: "Figtree, sans-serif", fontSize: 10, color: C.greyLight, textDecoration: "none" }}>Responsible Business Promise</a>
            <a href="https://quickfund.sg/privacy-policy" style={{ fontFamily: "Figtree, sans-serif", fontSize: 10, color: C.greyLight, textDecoration: "none" }}>Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}


module.exports = { FAQPage };
