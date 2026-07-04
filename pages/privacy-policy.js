import React from "react";

const C = { orange: "#FD5026", black: "#0D0D0D", offwhite: "#FAF8F5", grey: "#94918C", greyLight: "#E8E5E0", cream: "#F2EDE6" };
const Bolt = ({ size = 24, color = C.orange, style = {} }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" style={style}><path d="M18 2L6 18h8l-2 12 12-16h-8l2-12z" fill={color}/></svg>
);

export default function PrivacyPolicy() {
  const Section = ({ children }) => (<div style={{ maxWidth: 680, margin: "0 auto", padding: "0 20px" }}>{children}</div>);
  const H2 = ({ children }) => (<h2 style={{ fontFamily: "Syne, sans-serif", fontSize: 20, fontWeight: 800, color: C.black, lineHeight: 1.1, letterSpacing: "-0.5px", marginBottom: 12 }}>{children}</h2>);
  const P = ({ children, style = {} }) => (<p style={{ fontFamily: "Figtree, sans-serif", fontSize: 14, color: "#555", lineHeight: 1.75, marginBottom: 14, ...style }}>{children}</p>);

  return (
    <div style={{ background: C.offwhite, minHeight: "100vh" }}>
      <link href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Figtree:wght@400;500;600&display=swap" rel="stylesheet" />
      <style>{`*{box-sizing:border-box;margin:0;padding:0}::selection{background:${C.orange}25}`}</style>

      <nav style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(250,248,245,0.97)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(0,0,0,0.04)", padding: "0 20px" }}>
        <div style={{ maxWidth: 680, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 54 }}>
          <a href="https://quickfund.sg" style={{ display: "flex", alignItems: "center", gap: 7, textDecoration: "none" }}><Bolt size={14} /><span style={{ fontFamily: "Syne, sans-serif", fontSize: 14, fontWeight: 800, color: C.black, textTransform: "uppercase" }}>QuickFund</span></a>
          <a href="https://wa.me/6580576702" target="_blank" rel="noopener" style={{ fontFamily: "Syne, sans-serif", fontSize: 11, fontWeight: 700, color: "#fff", background: C.black, padding: "7px 14px", borderRadius: 6, textDecoration: "none" }}>WhatsApp</a>
        </div>
      </nav>

      <section style={{ padding: "60px 20px 40px" }}>
        <Section>
          <div style={{ fontFamily: "Syne, sans-serif", fontSize: 10, fontWeight: 800, color: C.orange, letterSpacing: "2px", textTransform: "uppercase", marginBottom: 12 }}>Legal</div>
          <h1 style={{ fontFamily: "Syne, sans-serif", fontSize: 36, fontWeight: 800, color: C.black, lineHeight: 0.95, letterSpacing: "-2px", marginBottom: 16 }}>Privacy Policy</h1>
          <P style={{ color: C.grey }}>Last updated: May 2026</P>
        </Section>
      </section>

      <article style={{ padding: "0 20px 60px" }}>
        <Section>
          <H2>Who we are</H2>
          <P>QuickFund Pte Ltd ("QuickFund," "we," "us," or "our") is a Singapore-registered company and part of the Levara Advisory Group. We operate the website quickfund.sg and related services. This Privacy Policy explains how we collect, use, disclose, and protect your personal data in accordance with the Personal Data Protection Act 2012 ("PDPA") of Singapore.</P>

          <div style={{ height: 1, background: C.greyLight, margin: "28px 0" }} />

          <H2>What data we collect</H2>
          <P>We collect personal data that you voluntarily provide to us through our website, WhatsApp communications, email, and AI-powered tools. This may include:</P>
          <P>Contact information such as your name, email address, phone number, and WhatsApp number. Business information such as your company name, industry, revenue range, business age, and financing requirements. Financial information you choose to share with us such as existing loan details, facility terms, interest rates, and property details. Information provided through our AI tools including your responses to assessment questions, term sheet content you paste for review, and rate information you provide for benchmarking.</P>

          <div style={{ height: 1, background: C.greyLight, margin: "28px 0" }} />

          <H2>How we use your data</H2>
          <P>We use your personal data to provide our services: matching you with suitable lenders, assessing your financing options, reviewing term sheets, benchmarking rates, and communicating with you about your enquiry. We use contact information to follow up on your enquiry via WhatsApp or email. We may use aggregated, non-identifiable data to improve our AI tools and services.</P>
          <P>We do not sell your personal data to third parties. We do not use your personal data for purposes unrelated to the services you have requested from us.</P>

          <div style={{ height: 1, background: C.greyLight, margin: "28px 0" }} />

          <H2>AI-powered tools</H2>
          <P>Our website features AI-powered tools (Loan Check-Up, Term Sheet Scanner, Rate Check) that process information you provide to generate assessments. The information you enter into these tools is sent to our servers and processed using third-party AI services (currently Anthropic's Claude). We do not store the AI-generated output permanently. The information you provide (your answers, term sheet content, or rate details) may be stored for the purpose of following up on your enquiry and improving our services.</P>
          <P>AI-generated assessments are for informational purposes only and should not be relied upon as financial, legal, or professional advice. See our website disclaimers for full details.</P>

          <div style={{ height: 1, background: C.greyLight, margin: "28px 0" }} />

          <H2>Sharing your data</H2>
          <P>We may share your personal data with lenders, financial institutions, or other capital providers as part of the financing process, and only with your knowledge. We share the information necessary for them to assess your application. We do not share your data with lenders without first discussing the approach with you.</P>
          <P>We may share your data with professional service providers who assist us in operating our business (such as CRM providers, email services, and hosting providers) where necessary for them to provide their services to us. These providers are bound by confidentiality obligations.</P>
          <P>We may disclose your personal data if required by law, regulation, legal process, or government request.</P>

          <div style={{ height: 1, background: C.greyLight, margin: "28px 0" }} />

          <H2>Data retention</H2>
          <P>We retain your personal data for as long as necessary to provide our services and fulfil the purposes described in this policy. For active client relationships, we retain data for the duration of the relationship and for a reasonable period afterwards. For enquiries that do not result in an engagement, we retain data for up to 24 months after the last communication. You may request deletion of your data at any time (see Your Rights below).</P>

          <div style={{ height: 1, background: C.greyLight, margin: "28px 0" }} />

          <H2>Cookies and analytics</H2>
          <P>Our website may use cookies and similar technologies (such as Google Analytics and Meta Pixel) to understand how visitors use our site, measure the effectiveness of our content, and improve user experience. These tools may collect information such as your IP address, browser type, pages visited, and time spent on the site. This data is used in aggregate form and is not used to personally identify you.</P>
          <P>You can control cookie settings through your browser. Disabling cookies may affect the functionality of certain features on our website.</P>

          <div style={{ height: 1, background: C.greyLight, margin: "28px 0" }} />

          <H2>Data security</H2>
          <P>We take reasonable steps to protect your personal data from unauthorised access, collection, use, disclosure, copying, modification, disposal, or similar risks. However, no method of transmission over the internet or method of electronic storage is completely secure. We cannot guarantee the absolute security of your data.</P>

          <div style={{ height: 1, background: C.greyLight, margin: "28px 0" }} />

          <H2>Your rights</H2>
          <P>Under the PDPA, you have the right to access your personal data held by us, to request correction of any inaccurate or incomplete data, and to withdraw consent for us to collect, use, or disclose your data. You may also request that we delete your personal data, subject to legal and business requirements for retention.</P>
          <P>To exercise any of these rights, contact us at leslie@quickfund.sg or WhatsApp +65 8057 6702. We will respond to your request within a reasonable time.</P>

          <div style={{ height: 1, background: C.greyLight, margin: "28px 0" }} />

          <H2>Third-party links</H2>
          <P>Our website may contain links to third-party websites (such as lender websites). We are not responsible for the privacy practices of these websites. We encourage you to read the privacy policies of any third-party websites you visit.</P>

          <div style={{ height: 1, background: C.greyLight, margin: "28px 0" }} />

          <H2>Changes to this policy</H2>
          <P>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last updated" date. Your continued use of our website and services after any changes constitutes acceptance of the revised policy.</P>

          <div style={{ height: 1, background: C.greyLight, margin: "28px 0" }} />

          <H2>Contact us</H2>
          <P>If you have questions about this Privacy Policy or our data practices, contact us at:</P>
          <P style={{ fontWeight: 500, color: C.black }}>
            QuickFund Pte Ltd<br />
            Part of the Levara Advisory Group<br />
            Email: leslie@quickfund.sg<br />
            WhatsApp: +65 8057 6702
          </P>
        </Section>
      </article>

      <footer style={{ padding: "24px 20px", maxWidth: 680, margin: "0 auto", borderTop: `1px solid ${C.greyLight}`, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <Bolt size={10} /><span style={{ fontFamily: "Syne, sans-serif", fontSize: 10, fontWeight: 800, color: C.black, textTransform: "uppercase" }}>QuickFund</span>
          <span style={{ fontFamily: "Figtree, sans-serif", fontSize: 10, color: C.greyLight, marginLeft: 4 }}>Part of Levara Advisory Group</span>
        </div>
        <a href="https://quickfund.sg/responsible-business-promise" style={{ fontFamily: "Figtree, sans-serif", fontSize: 10, color: C.greyLight, textDecoration: "none" }}>Responsible Business Promise</a>
      </footer>
    </div>
  );
}
