const { useState } = React;

const C = { orange: "#FD5026", black: "#0D0D0D", offwhite: "#FAF8F5", grey: "#94918C", greyLight: "#E8E5E0", cream: "#F2EDE6" };

const Bolt = ({ size = 24, color = C.orange, style = {} }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" style={style}>
    <path d="M18 2L6 18h8l-2 12 12-16h-8l2-12z" fill={color} />
  </svg>
);

function FloatingWA() {
  return (
    <a href="https://wa.me/6580576702?text=Hi%20QuickFund" target="_blank" rel="noopener"
      style={{ position: "fixed", bottom: 24, right: 24, zIndex: 300, width: 56, height: 56, borderRadius: 16, background: "#25D366", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 16px rgba(37,211,102,0.35)", textDecoration: "none" }}>
      <svg width="28" height="28" viewBox="0 0 24 24" fill="#fff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
    </a>
  );
}

function ResponsiblePromise() {
  const Section = ({ children, style = {} }) => (
    <div style={{ maxWidth: 680, margin: "0 auto", padding: "0 20px", ...style }}>{children}</div>
  );
  const H2 = ({ children }) => (
    <h2 style={{ fontFamily: "Poppins, sans-serif", fontSize: 22, fontWeight: 800, color: C.black, lineHeight: 1.1, letterSpacing:"-0.35px", marginBottom: 14 }}>{children}</h2>
  );
  const P = ({ children, style = {} }) => (
    <p style={{ fontFamily: "Figtree, sans-serif", fontSize: 15, color: "#555", lineHeight: 1.75, marginBottom: 16, ...style }}>{children}</p>
  );

  return (
    <div style={{ background: C.offwhite, minHeight: "100vh" }}>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Figtree:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet" />
      <style>{`*{box-sizing:border-box;margin:0;padding:0}::selection{background:${C.orange}25}`}</style>
      <FloatingWA />

      {/* Nav */}
      <nav style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(250,248,245,0.97)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(0,0,0,0.04)", padding: "0 20px" }}>
        <div style={{ maxWidth: 680, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 54 }}>
          <a href="https://quickfund.sg" style={{ display: "flex", alignItems: "center", gap: 7, textDecoration: "none" }}>
            <Bolt size={14} />
            <span style={{ fontFamily: "Poppins, sans-serif", fontSize: 14, fontWeight: 800, color: C.black, textTransform: "uppercase" }}>QuickFund</span>
          </a>
          <a href="https://wa.me/6580576702?text=Hi%20QuickFund" target="_blank" rel="noopener" style={{ fontFamily: "Poppins, sans-serif", fontSize: 11, fontWeight: 700, color: "#fff", background: C.black, padding: "7px 14px", borderRadius: 6, textDecoration: "none" }}>WhatsApp</a>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ padding: "44px 20px 8px" }}>
        <Section>
          <div style={{ fontFamily: "Poppins, sans-serif", fontSize: 10, fontWeight: 800, color: C.orange, letterSpacing: "2px", textTransform: "uppercase", marginBottom: 12 }}>
            Our Commitment
          </div>
          <h1 style={{ fontFamily: "Poppins, sans-serif", fontSize: 38, fontWeight: 800, color: C.black, lineHeight: 0.95, letterSpacing:"-0.8px", marginBottom: 20 }}>
            Responsible<br />Business Promise
          </h1>
          <P style={{ fontSize: 16, color: C.grey, maxWidth: 500 }}>
            This is how we hold ourselves accountable. Every client, every deal, every conversation.
          </P>
        </Section>
      </section>

      {/* Content */}
      <article style={{ padding: "0 20px 60px" }}>
        <Section>
          <div style={{ height: 1, background: C.greyLight, margin: "16px 0 28px" }} />

          <H2>We will tell you the truth</H2>
          <P>
            If a loan will hurt your business, we will say so. If your plan doesn't support the borrowing, we will tell you. If a lender's terms have traps, we will flag them. Even if it means we lose the deal and earn nothing.
          </P>
          <P>
            We have turned clients away. We have told people not to borrow. We have walked away from fees because the deal was wrong for the client. We will continue to do this because our reputation is worth more than any single transaction.
          </P>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>We will never encourage irresponsible borrowing</H2>
          <P>
            Money is fungible. A dollar borrowed is still a liability, regardless of where it comes from. What matters is whether the business situation supports the debt. We assess this honestly based on the information available to us.
          </P>
          <P>
            Borrowing to fulfil confirmed demand, to fund profitable growth, or to bridge a temporary gap in a sound business can be the right decision. Borrowing to cover losses, to fund speculation, or to buy time without a clear repayment path makes things worse. We will tell you which category you're in.
          </P>
          <P>
            If you're considering pledging your home, your property, or your personal assets as security, we will make sure you understand exactly what that means. You could lose those assets. That's not a footnote. It's the most important thing you need to hear.
          </P>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>We are not owned by any lender</H2>
          <P>
            No lender has equity in our business. We are not a subsidiary, affiliate, or captive distribution channel of any lending institution. No lender directs our recommendations.
          </P>
          <P>
            When we recommend a facility, it's because we believe it fits your situation based on the information available to us. We work with banks, finance companies, fintech lenders, family offices, and private credit funds. We compare options across this network based on what works for you: the right product, the right terms, the right speed, and the right cost for your specific constraints.
          </P>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>We will explain the full cost</H2>
          <P>
            Interest rates are not the whole picture. Processing fees, commitment fees, valuation costs, legal fees, exit penalties, annual review charges, and hidden clauses all affect what you actually pay. We will help you understand the total cost of any facility, not just the headline number.
          </P>
          <P>
            We will also explain the non-financial costs: personal guarantees and what they expose you to, share charges and what they mean for control of your company, restrictive covenants and how they limit your future options, and cross-default clauses that link unrelated facilities.
          </P>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>We will read the term sheet properly</H2>
          <P>
            Most borrowers accept the first offer they receive without reading past the interest rate and the amount. We read the full term sheet. We flag clauses that matter. We explain what each provision means in plain language. We negotiate where we can.
          </P>
          <P>
            This includes: mandatory prepayment triggers, ROFR provisions on future financings, MAC clauses, restriction periods, penalty interest, default provisions, and security requirements that may be disproportionate to the facility size.
          </P>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>We will respect your confidentiality</H2>
          <P>
            Your financial information is sensitive. We will never share your financials, bank statements, personal details, or application materials with anyone other than the lenders we are jointly approaching, and only with your knowledge. We will never discuss your situation with other clients, referral partners, or competitors.
          </P>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>We will not charge you upfront for financing introductions</H2>
          <P>
            Our success fee is payable only when a facility is successfully disbursed. If we can't get you funded, you owe us nothing. This aligns our interests with yours: we only earn when you succeed.
          </P>
          <P>
            For advisory work such as debt restructuring, capital stack review, or strategy consulting, we charge a small upfront engagement fee. We will always agree this with you in writing before any work begins.
          </P>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>We are building long-term relationships</H2>
          <P>
            We don't want to earn a fee today and have you discover six months later that you could have done better. When we place a facility, we want you to come back for the next one, and the one after that. That only happens if every deal is genuinely right for you.
          </P>
          <P>
            We monitor your facilities. We watch the market for better rates. We tell you when to refinance. We help you average down your cost of capital over time. We negotiate your renewal terms. This is what a long-term partnership looks like.
          </P>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>We will operate with integrity</H2>
          <P>
            We present your application to lenders accurately and honestly, based on the information you provide to us. We rely on you to give us truthful and complete information. The better the information, the better the outcome.
          </P>
          <P>
            Every representation we make about your situation to a lender is truthful. Every term we communicate from a lender to you is exactly as stated. Our client-side fees are always agreed with you in writing before we begin work. Where applicable, we may also receive fees from lenders for successful introductions. We aim to be transparent about client-side fees and relevant commercial arrangements.
          </P>
          <P>
            We hold ourselves to a higher standard than the industry requires because that's the only standard worth operating at. Our clients deserve it. Our lender partners deserve it. And our reputation depends on it.
          </P>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>We will tell you if we're not the right fit</H2>
          <P>
            Not because we don't want your business. But because your time matters, and so does ours. If someone else can serve you better, we'd rather point you in the right direction than waste your time pretending we can help when we can't.
          </P>
          <P>
            We focus on:
          </P>
          <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 20 }}>
            {[
              "Companies with revenue. If your business is generating meaningful income, we can work with a wide range of lenders to find the right facility.",
              "Loan sizes of S$100K and above. Most deals we do are S$500K and above, but we take on smaller deals too. Feel free to contact us regardless.",
              "VC-backed startups looking for venture debt or working capital without further dilution.",
              "Listed companies and established SMEs needing working capital, trade finance, property-backed facilities, or refinancing.",
              "Companies across 8 markets: Singapore, Malaysia, Hong Kong, US, UK, Vietnam, Thailand, and Indonesia.",
              "Businesses where a local personal guarantor or meaningful collateral is available. Without either, options are significantly limited.",
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                <Bolt size={11} style={{ marginTop: 5, flexShrink: 0 }} />
                <P style={{ margin: 0, fontSize: 14 }}>{item}</P>
              </div>
            ))}
          </div>
          <P>
            We may not be the right fit if:
          </P>
          <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 20 }}>
            {[
              "You need a personal loan. We only work with businesses.",
              "Your company has no revenue and no collateral or personal guarantee available. Without these, most lenders cannot proceed and we don't want to give you false hope.",
              "You need very small amounts (under S$100K). There are simpler, faster channels for smaller facility sizes, though you're still welcome to reach out.",
              "You're looking for someone to just submit an application without understanding your situation. We diagnose first. If you want a form-filler, we're not the right fit.",
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                <span style={{ fontFamily: "Figtree, sans-serif", fontSize: 14, color: C.grey, flexShrink: 0 }}>-</span>
                <P style={{ margin: 0, fontSize: 14 }}>{item}</P>
              </div>
            ))}
          </div>
          <P>
            If you're unsure whether we can help, just ask. A 2-minute WhatsApp conversation will tell both of us whether this is the right fit.
          </P>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>Questions to ask yourself before you borrow</H2>
          <P>
            We encourage every prospective borrower to answer these honestly before proceeding with any loan, from us or anyone else:
          </P>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 20 }}>
            {[
              "Is the revenue that will repay this loan confirmed, or am I hoping it will come?",
              "Is my business profitable, or am I borrowing to cover losses?",
              "If the plan doesn't work, can I still make the repayments?",
              "Am I borrowing because the opportunity is real, or because I'm under pressure and a loan feels like the fastest way out?",
              "Do I understand what happens if I default? Do I understand what I'm pledging?",
              "Have I read the full term sheet, or just the headline numbers?",
              "Have I compared this offer against alternatives?",
            ].map((q, i) => (
              <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                <span style={{ fontFamily: "Poppins, sans-serif", fontSize: 14, color: C.orange, fontWeight: 800, minWidth: 20 }}>{i + 1}.</span>
                <P style={{ margin: 0, fontSize: 14 }}>{q}</P>
              </div>
            ))}
          </div>
          <P>
            If any of these questions make you uncomfortable, talk to us before you proceed. Or talk to someone you trust. The worst financial decisions are made under pressure, in a hurry, without enough information. Take the time.
          </P>

          <div style={{ height: 1, background: C.greyLight, margin: "32px 0" }} />

          <H2>Hold us to this</H2>
          <P>
            This promise is not a legal document. It's a statement of how we choose to operate. If we ever fall short of these standards, we want to know. Tell us. WhatsApp us directly at +65 8057 6702. We take this seriously.
          </P>

          {/* CTA */}
          <div style={{ marginTop: 40, padding: "28px 24px", background: C.black, borderRadius: 12, textAlign: "center" }}>
            <p style={{ fontFamily: "Poppins, sans-serif", fontSize: 16, fontWeight: 800, color: "#fff", marginBottom: 8 }}>Ready to work with someone who operates this way?</p>
            <p style={{ fontFamily: "Figtree, sans-serif", fontSize: 13, color: "rgba(255,255,255,0.4)", marginBottom: 20 }}>No forms. Just a conversation.</p>
            <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="https://wa.me/6580576702?text=Hi%20QuickFund" target="_blank" rel="noopener" style={{ padding: "12px 28px", background: C.orange, color: "#fff", borderRadius: 8, fontFamily: "Poppins, sans-serif", fontSize: 14, fontWeight: 700, textDecoration: "none" }}>WhatsApp Us</a>
              <a href="https://quickfund.sg/#tools" style={{ padding: "12px 28px", background: "transparent", color: "rgba(255,255,255,0.5)", border: "1.5px solid rgba(255,255,255,0.12)", borderRadius: 8, fontFamily: "Poppins, sans-serif", fontSize: 14, fontWeight: 700, textDecoration: "none" }}>Try the AI Tools</a>
            </div>
          </div>
        </Section>
      </article>

      {/* Footer */}
      <footer style={{ padding: "28px 20px", maxWidth: 680, margin: "0 auto", borderTop: `1px solid ${C.greyLight}` }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }}>
          <Bolt size={12} />
          <span style={{ fontFamily: "Poppins, sans-serif", fontSize: 11, fontWeight: 800, color: C.black, textTransform: "uppercase" }}>QuickFund</span>
          
        </div>
        <p style={{ fontFamily: "Figtree, sans-serif", fontSize: 10, color: "rgba(0,0,0,0.2)", lineHeight: 1.4 }}>
          This page is a statement of intent, not a contractual obligation. All financing decisions remain solely with the client.
        </p>
      </footer>
    </div>
  );
}


module.exports = { ResponsiblePromise };
