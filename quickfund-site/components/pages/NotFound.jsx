"use client";



const C = { orange: "#FD5026", black: "#0D0D0D", offwhite: "#FAF8F5", grey: "#94918C", greyLight: "#E8E5E0", cream: "#F2EDE6" };
const Bolt = ({ size = 24, color = C.orange, style = {} }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" style={style}><path d="M18 2L6 18h8l-2 12 12-16h-8l2-12z" fill={color}/></svg>
);

function NotFound() {
  return (
    <div style={{ background: C.offwhite, minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 24 }}>
      <style>{`*{box-sizing:border-box;margin:0;padding:0}::selection{background:${C.orange}25}`}</style>

      <Bolt size={48} style={{ marginBottom: 24, opacity: 0.3 }} />
      <h1 style={{ fontFamily: "Poppins, sans-serif", fontSize: 64, fontWeight: 800, color: C.black, letterSpacing:"-1.2px", lineHeight: 1 }}>404</h1>
      <p style={{ fontFamily: "Figtree, sans-serif", fontSize: 16, color: C.grey, marginTop: 12, marginBottom: 32, textAlign: "center", maxWidth: 400 }}>
        This page doesn't exist yet. If you're looking for a sector guide, it may be coming soon.
      </p>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center" }}>
        <a href="/" style={{ fontFamily: "Poppins, sans-serif", fontSize: 13, fontWeight: 700, color: "#fff", background: C.black, padding: "12px 24px", borderRadius: 8, textDecoration: "none" }}>Back to Home</a>
        <a href="/#tools" style={{ fontFamily: "Poppins, sans-serif", fontSize: 13, fontWeight: 700, color: C.black, padding: "12px 24px", borderRadius: 8, textDecoration: "none", border: `1.5px solid ${C.greyLight}` }}>Try the AI Tools</a>
        <a href="https://wa.me/6580576702?text=Hi%20QuickFund" target="_blank" rel="noopener" style={{ fontFamily: "Poppins, sans-serif", fontSize: 13, fontWeight: 700, color: C.orange, padding: "12px 24px", borderRadius: 8, textDecoration: "none", border: `1.5px solid ${C.orange}30` }}>WhatsApp Us</a>
      </div>

      <div style={{ marginTop: 48, fontFamily: "Figtree, sans-serif", fontSize: 12, color: C.greyLight, display: "flex", alignItems: "center", gap: 6 }}>
        <Bolt size={10} color={C.greyLight} />
        <span>QuickFund Pte Ltd.</span>
      </div>
    </div>
  );
}


export default NotFound;
