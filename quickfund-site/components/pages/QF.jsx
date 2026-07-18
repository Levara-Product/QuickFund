"use client";
import { useState, useEffect, useRef } from "react";
import { STEPS } from "@/lib/assessOptions";



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
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" style={style}>
    <path d="M18 2L6 18h8l-2 12 12-16h-8l2-12z" fill={color} />
  </svg>
);

/* ── FLOATING WHATSAPP ── */
function FloatingWA() {
  const [pulse, setPulse] = useState(true);
  useEffect(() => { const t = setTimeout(() => setPulse(false), 5000); return () => clearTimeout(t); }, []);
  return (
    <a href="https://wa.me/6580576702?text=Hi%20QuickFund" target="_blank" rel="noopener"
      style={{
        position: "fixed", bottom: 24, right: 24, zIndex: 300,
        width: 56, height: 56, borderRadius: 16, background: "#25D366",
        display: "flex", alignItems: "center", justifyContent: "center",
        boxShadow: "0 4px 16px rgba(37,211,102,0.35)", textDecoration: "none",
        animation: pulse ? "waPulse 2s ease infinite" : "none",
        transition: "transform 0.2s",
      }}
      onMouseEnter={e => e.currentTarget.style.transform = "scale(1.08)"}
      onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="#fff">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    </a>
  );
}

/* ── CONTACT GATE ── */
function ContactGate({ onSubmit, loading }) {
  const [email, setEmail] = useState("");
  const [wa, setWa] = useState("");
  const [method, setMethod] = useState("whatsapp");
  const ok = method === "whatsapp" ? wa.trim().length >= 8 : email.includes("@");
  return (
    <div style={{ animation: "fadeIn 0.3s ease" }}>
      <div style={{ textAlign: "center", marginBottom: 20 }}>
        <Bolt size={26} style={{ margin: "0 auto 10px" }} />
        <h3 style={{ fontFamily: "Poppins, sans-serif", fontSize: 18, fontWeight: 800, color: C.black, marginBottom: 5 }}>Your assessment is ready.</h3>
        <p style={{ fontFamily: "Figtree, sans-serif", fontSize: 13, color: C.grey }}>Where should we send your copy?</p>
      </div>
      <div style={{ display: "flex", background: C.cream, borderRadius: 8, padding: 3, marginBottom: 14 }}>
        {["whatsapp", "email"].map(m => (
          <button key={m} onClick={() => setMethod(m)} style={{
            flex: 1, padding: "8px 0", borderRadius: 6, border: "none", cursor: "pointer",
            fontFamily: "Poppins, sans-serif", fontSize: 12, fontWeight: 700,
            background: method === m ? "#fff" : "transparent", color: method === m ? C.black : C.grey,
            boxShadow: method === m ? "0 1px 3px rgba(0,0,0,0.08)" : "none",
          }}>{m === "whatsapp" ? "WhatsApp" : "Email"}</button>
        ))}
      </div>
      {method === "whatsapp" ? (
        <div style={{ display: "flex", gap: 8 }}>
          <span style={{ padding: "11px 12px", background: C.cream, borderRadius: 8, border: `1.5px solid ${C.greyLight}`, fontFamily: "Figtree, sans-serif", fontSize: 14, color: C.grey }}>+65</span>
          <input value={wa} onChange={e => setWa(e.target.value.replace(/\D/g, ""))} placeholder="9123 4567" maxLength={8} className="qf-input" style={{ flex: 1 }} />
        </div>
      ) : (
        <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="you@company.com" className="qf-input" style={{ width: "100%" }} />
      )}
      <button onClick={() => onSubmit({ email, wa, method })} disabled={!ok || loading} style={{
        width: "100%", padding: "13px", marginTop: 14, background: !ok ? C.greyLight : C.orange,
        border: "none", borderRadius: 8, fontFamily: "Poppins, sans-serif", fontSize: 14, fontWeight: 700,
        color: "#fff", cursor: !ok || loading ? "default" : "pointer",
        display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
      }}>
        {loading ? <><span className="qf-spinner" />Generating...</> : <>Show My Results</>}
      </button>
      <p style={{ fontFamily: "Figtree, sans-serif", fontSize: 10.5, color: C.grey, lineHeight: 1.55, marginTop: 10, padding: "8px 10px", background: C.cream, borderRadius: 6 }}>Your answers are processed by a third-party AI (large language model) to generate this assessment. The result is general information, not financial advice. Verify terms with the lender and your own advisers. Please don't include sensitive personal identifiers or confidential details beyond what the tool asks for — to the extent permitted by law, anything you choose to include is submitted at your own risk. You'll see your results on screen right away. Our team will also personally send you a copy and follow up — usually within one working day. No spam beyond that. By continuing you agree to our <a href="/privacy-policy" style={{ color: C.grey }}>Privacy Policy</a>.</p>
    </div>
  );
}

/* ── AI RESULT ── */
function AiResult({ result, onReset }) {
  const sections = [];
  for (const line of result.split("\n").filter(l => l.trim())) {
    const t = line.trim();
    const m = t.match(/^(GOOD|WATCH|VERDICT|NEXT|RED FLAG|AMBER|OK|MISSING|BOTTOM LINE):\s*(.*)/i);
    if (m) sections.push({ type: m[1].toLowerCase().replace(/ /g, "_"), text: m[2] });
    else if (sections.length > 0 && !t.match(/^[A-Z ]+:/)) sections[sections.length - 1].text += "\n" + t;
    else sections.push({ type: "plain", text: t });
  }
  const tm = { good:{bg:"#E8F5E9",c:"#2E7D32",l:"IN YOUR FAVOUR"}, watch:{bg:"#FFF3E0",c:"#E65100",l:"HEADS UP"}, verdict:{bg:`${C.orange}10`,c:C.orange,l:"THE VERDICT"}, next:{bg:"#E3F2FD",c:"#1565C0",l:"NEXT STEPS"}, red_flag:{bg:"#FFEBEE",c:"#C62828",l:"RED FLAG"}, amber:{bg:"#FFF8E1",c:"#F57F17",l:"NEGOTIATE"}, ok:{bg:"#E8F5E9",c:"#2E7D32",l:"STANDARD"}, missing:{bg:"#F3E5F5",c:"#7B1FA2",l:"MISSING"}, bottom_line:{bg:`${C.orange}10`,c:C.orange,l:"BOTTOM LINE"}, plain:{bg:"transparent",c:C.black,l:null} };
  return (
    <div style={{ animation: "fadeIn 0.4s ease" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16, paddingBottom: 12, borderBottom: `1.5px solid ${C.greyLight}` }}>
        <div style={{ display: "flex", alignItems: "center", gap: 7 }}><Bolt size={16} /><span style={{ fontFamily: "Poppins, sans-serif", fontSize: 14, fontWeight: 800, color: C.black, textTransform: "uppercase" }}>QuickFund</span></div>
        <span style={{ fontFamily: "Figtree, sans-serif", fontSize: 10, color: C.grey, background: C.cream, padding: "3px 8px", borderRadius: 4 }}>AI Assessment</span>
      </div>
      {sections.map((s, i) => { const tag = tm[s.type] || tm.plain; return (
        <div key={i} style={{ marginBottom: 8, padding: s.type === "plain" ? "4px 0" : "11px 12px", background: tag.bg, borderRadius: 8 }}>
          {tag.l && <div style={{ fontFamily: "Poppins, sans-serif", fontSize: 9, fontWeight: 800, color: tag.c, letterSpacing: "1.5px", marginBottom: 3 }}>{tag.l}</div>}
          <p style={{ fontFamily: "Figtree, sans-serif", fontSize: 13, color: "#333", lineHeight: 1.6, margin: 0, whiteSpace: "pre-wrap" }}>{s.text.replace(/\*\*/g, "")}</p>
        </div>
      );})}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 12, paddingTop: 10, borderTop: `1px solid ${C.greyLight}` }}>
        <span style={{ fontFamily: "Figtree, sans-serif", fontSize: 10, color: C.greyLight }}>Free at quickfund.sg</span>
        <span style={{ fontFamily: "Figtree, sans-serif", fontSize: 10, color: C.greyLight }}>Try it yourself</span>
      </div>
      <p style={{ fontFamily: "Figtree, sans-serif", fontSize: 11, color: C.grey, lineHeight: 1.5, marginTop: 10 }}>Our team will personally send you a copy of this assessment and follow up — usually within one working day.</p>
      <p style={{ fontFamily: "Figtree, sans-serif", fontSize: 10, color: C.grey, lineHeight: 1.5, marginTop: 8, padding: "8px 10px", background: C.cream, borderRadius: 6 }}>AI-generated general information based on what you entered. Not financial advice. Verify all terms directly with the lender and your own advisers before acting.</p>
      <a href="https://wa.me/6580576702?text=Hi%20QuickFund%2C%20just%20did%20the%20AI%20assessment%20and%20would%20like%20to%20discuss" target="_blank" rel="noopener" style={{
        display: "block", width: "100%", padding: "13px", marginTop: 16, background: C.orange, border: "none", borderRadius: 8,
        fontFamily: "Poppins, sans-serif", fontSize: 14, fontWeight: 700, color: "#fff", textAlign: "center", textDecoration: "none",
      }}>Discuss This With Our Team</a>
      <button onClick={onReset} style={{ display: "block", width: "100%", padding: "10px", marginTop: 8, background: "transparent", border: `1.5px solid ${C.greyLight}`, borderRadius: 8, fontFamily: "Figtree, sans-serif", fontSize: 13, color: C.grey, cursor: "pointer" }}>Start over</button>
    </div>
  );
}

/* ── LOAN CHECK-UP ── */


function LoanCheckup() {
  const [step, setStep] = useState(0);
  const [ans, setAns] = useState({});
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [err, setErr] = useState(null);
  const [fade, setFade] = useState(false);
  const [gate, setGate] = useState(false);
  const cur = STEPS[step]; const last = step === STEPS.length - 1;

  const pick = v => { setAns(p => ({...p,[cur.id]:v})); if(!last){setFade(true);setTimeout(()=>{setStep(s=>s+1);setFade(false);},200);} };
  const back = () => { if(gate){setGate(false);return;} if(step>0){setFade(true);setTimeout(()=>{setStep(s=>s-1);setFade(false);},200);} };

  const submit = async (contact) => {
    setLoading(true); setErr(null);
    try {
      const r = await fetch("/api/assess", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ answers: ans, contact }) });
      const d = await r.json();
      if (d.result) setResult(d.result); else setErr(d.error || "Couldn't generate. Try again?");
    } catch { setErr("Something went wrong."); }
    setLoading(false);
  };

  const reset = () => { setStep(0);setAns({});setResult(null);setErr(null);setGate(false); };
  if(result) return <AiResult result={result} onReset={reset} />;
  if(gate) return <ContactGate onSubmit={submit} loading={loading} />;

  return (
    <div>
      <div style={{display:"flex",gap:4,marginBottom:20}}>
        {STEPS.map((_,i)=><div key={i} style={{width:i===step?18:7,height:5,borderRadius:3,background:i<=step?C.orange:C.greyLight,transition:"all 0.3s"}}/>)}
      </div>
      <div style={{opacity:fade?0:1,transform:fade?"translateX(-8px)":"none",transition:"all 0.2s"}}>
        <div style={{fontFamily:"Poppins, sans-serif",fontSize:10,fontWeight:700,color:C.orange,textTransform:"uppercase",letterSpacing:"2px",marginBottom:6}}>{step+1}/{STEPS.length}</div>
        <h3 style={{fontFamily:"Poppins, sans-serif",fontSize:17,fontWeight:700,color:C.black,marginBottom:14,lineHeight:1.25}}>{cur.q}</h3>
        <div style={{display:"flex",flexDirection:"column",gap:5}}>
          {cur.opts.map(o=>{const sel=ans[cur.id]===o;return(
            <button key={o} onClick={()=>pick(o)} style={{
              padding:"10px 13px",borderRadius:7,cursor:"pointer",textAlign:"left",
              fontFamily:"Figtree, sans-serif",fontSize:13,lineHeight:1.3,
              color:sel?C.orange:C.black,fontWeight:sel?600:400,
              background:sel?`${C.orange}08`:"transparent",
              border:sel?`2px solid ${C.orange}`:`1.5px solid ${C.greyLight}`,
            }}>{o}</button>
          );})}
        </div>
      </div>
      <div style={{display:"flex",justifyContent:"space-between",marginTop:16}}>
        {step>0?<button onClick={back} style={{padding:"8px 14px",background:"transparent",border:`1.5px solid ${C.greyLight}`,borderRadius:7,fontFamily:"Figtree, sans-serif",fontSize:12,color:C.grey,cursor:"pointer"}}>Back</button>:<div/>}
        {last&&ans[cur.id]&&<button onClick={()=>setGate(true)} style={{padding:"10px 20px",background:C.black,border:"none",borderRadius:7,fontFamily:"Poppins, sans-serif",fontSize:12,fontWeight:700,color:"#fff",cursor:"pointer",display:"flex",alignItems:"center",gap:6}}>Get Assessment <Bolt size={12}/></button>}
      </div>
      {err&&<p style={{fontFamily:"Figtree, sans-serif",fontSize:12,color:C.orange,marginTop:8}}>{err}</p>}
    </div>
  );
}

/* ── TERM SHEET SCANNER ── */
function TermScanner() {
  const [terms,setTerms]=useState(""); const [loading,setLoading]=useState(false); const [result,setResult]=useState(null); const [err,setErr]=useState(null); const [gate,setGate]=useState(false);
  const submit = async(contact) => {
    setLoading(true);setErr(null);    try {
      const r = await fetch("/api/scan", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ terms, contact }) });
      const d = await r.json();
      if (d.result) setResult(d.result); else setErr(d.error || "Try again.");
    } catch{setErr("Try again.");} setLoading(false);
  };
  const reset=()=>{setTerms("");setResult(null);setErr(null);setGate(false);};
  if(result) return <AiResult result={result} onReset={reset}/>;
  if(gate) return <ContactGate onSubmit={submit} loading={loading}/>;
  return (<div>
    <p style={{fontFamily:"Figtree, sans-serif",fontSize:13,color:C.grey,marginBottom:8}}>Paste the key terms from your loan offer. Interest, fees, covenants, security, repayment.</p>
    <p style={{fontFamily:"Figtree, sans-serif",fontSize:11.5,color:C.grey,marginBottom:12,padding:"7px 10px",background:C.cream,borderRadius:6}}>Paste terms only — leave out names, NRIC/passport numbers, account numbers, and anything else sensitive. The scan works just as well without them. To the extent permitted by law, information you choose to include is submitted at your own risk.</p>
    <textarea value={terms} onChange={e=>setTerms(e.target.value)} placeholder="e.g. S$500K revolving, 8% p.a., PG from all directors, revenue covenant S$2M..." className="qf-input" style={{width:"100%",minHeight:130,resize:"vertical",lineHeight:1.6}}/>
    <button onClick={()=>{if(terms.trim().length<30){setErr("Need more detail.");return;}setGate(true);}} disabled={terms.trim().length<30} style={{width:"100%",padding:"12px",marginTop:12,background:terms.trim().length<30?C.greyLight:C.black,border:"none",borderRadius:7,fontFamily:"Poppins, sans-serif",fontSize:13,fontWeight:700,color:"#fff",cursor:terms.trim().length<30?"default":"pointer"}}>Scan My Terms</button>
    {err&&<p style={{fontFamily:"Figtree, sans-serif",fontSize:12,color:C.orange,marginTop:8}}>{err}</p>}
  </div>);
}

/* ── RATE CHECK ── */
function RateCheck() {
  const [f,sF]=useState({type:"",rate:"",amount:""}); const [loading,setLoading]=useState(false); const [result,setResult]=useState(null); const [err,setErr]=useState(null); const [gate,setGate]=useState(false);
  const ok=f.type&&f.rate&&f.amount;
  const submit = async(contact) => {
    setLoading(true);setErr(null);    try {
      const r = await fetch("/api/rate", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ type: f.type, amount: f.amount, rate: f.rate, contact }) });
      const d = await r.json();
      if (d.result) setResult(d.result); else setErr(d.error || "Try again.");
    } catch{setErr("Try again.");} setLoading(false);
  };
  const reset=()=>{sF({type:"",rate:"",amount:""});setResult(null);setErr(null);setGate(false);};
  if(result) return <AiResult result={result} onReset={reset}/>;
  if(gate) return <ContactGate onSubmit={submit} loading={loading}/>;
  return (<div>
    <p style={{fontFamily:"Figtree, sans-serif",fontSize:13,color:C.grey,marginBottom:12}}>Tell us what you're paying. We'll benchmark it.</p>
    {[{k:"type",l:"Facility type",ph:"e.g. Term loan, revolving credit"},{k:"amount",l:"Amount",ph:"e.g. S$500K"},{k:"rate",l:"Interest rate / cost",ph:"e.g. 8% p.a., 1.2%/month"}].map(field=>(
      <div key={field.k} style={{marginBottom:10}}>
        <label style={{fontFamily:"Figtree, sans-serif",fontSize:12,fontWeight:500,color:C.black,display:"block",marginBottom:3}}>{field.l} <span style={{color:C.orange}}>*</span></label>
        <input value={f[field.k]} onChange={e=>sF(p=>({...p,[field.k]:e.target.value}))} placeholder={field.ph} className="qf-input" style={{width:"100%"}}/>
      </div>
    ))}
    <button onClick={()=>setGate(true)} disabled={!ok} style={{width:"100%",padding:"12px",marginTop:8,background:!ok?C.greyLight:C.black,border:"none",borderRadius:7,fontFamily:"Poppins, sans-serif",fontSize:13,fontWeight:700,color:"#fff",cursor:!ok?"default":"pointer"}}>Check My Rate</button>
    {err&&<p style={{fontFamily:"Figtree, sans-serif",fontSize:12,color:C.orange,marginTop:8}}>{err}</p>}
  </div>);
}

/* ── TABBED TOOLS ── */
function Tools() {
  const [tab,setTab]=useState("checkup");
  const pill=(active)=>({flex:1,padding:"10px 8px",background:active?C.orange:"transparent",border:active?`1.5px solid ${C.orange}`:`1.5px solid ${C.greyLight}`,borderRadius:8,cursor:"pointer",fontFamily:"Poppins, sans-serif",fontSize:11,fontWeight:700,color:active?"#fff":C.grey});
  return (<div>
    <button onClick={()=>setTab("checkup")} style={{width:"100%",padding:"13px 10px",background:tab==="checkup"?C.orange:C.cream,border:`1.5px solid ${C.orange}`,borderRadius:8,cursor:"pointer",fontFamily:"Poppins, sans-serif",fontSize:12.5,fontWeight:800,color:tab==="checkup"?"#fff":C.orange,marginBottom:12}}>
      Loan Check-Up — Start Here
    </button>
    <div style={{display:"flex",alignItems:"center",gap:8,margin:"0 0 10px"}}>
      <div style={{flex:1,height:1,background:C.greyLight}}/>
      <span style={{fontFamily:"Poppins, sans-serif",fontSize:9,fontWeight:800,letterSpacing:"1.5px",color:C.grey,textTransform:"uppercase"}}>Already have an offer?</span>
      <div style={{flex:1,height:1,background:C.greyLight}}/>
    </div>
    <div style={{display:"flex",gap:8,marginBottom:18}}>
      <button onClick={()=>setTab("scan")} style={pill(tab==="scan")}>Review My Terms</button>
      <button onClick={()=>setTab("rate")} style={pill(tab==="rate")}>Check My Rate</button>
    </div>
    {tab==="checkup"?<LoanCheckup/>:tab==="scan"?<TermScanner/>:<RateCheck/>}
  </div>);
}

/* ── GUIDE MODAL ── */
function GuideModal({onClose}){
  const [wa,setWa]=useState("");const [email,setEmail]=useState("");const [method,setMethod]=useState("whatsapp");const [done,setDone]=useState(false);
  const ok=method==="whatsapp"?wa.trim().length>=8:email.includes("@");
  if(done) return(
    <div onClick={onClose} style={{position:"fixed",inset:0,zIndex:200,background:"rgba(0,0,0,0.5)",backdropFilter:"blur(8px)",display:"flex",alignItems:"center",justifyContent:"center",padding:20}}>
      <div onClick={e=>e.stopPropagation()} style={{background:C.offwhite,borderRadius:14,padding:32,maxWidth:380,width:"100%",textAlign:"center"}}>
        <Bolt size={28} style={{margin:"0 auto 12px"}}/><h3 style={{fontFamily:"Poppins, sans-serif",fontSize:18,fontWeight:800,color:C.black,marginBottom:6}}>On its way.</h3>
        <p style={{fontFamily:"Figtree, sans-serif",fontSize:13,color:C.grey}}>Our team sends it personally — it'll reach your {method==="whatsapp"?"WhatsApp":"inbox"} usually within one working day.</p>
        <button onClick={onClose} style={{marginTop:16,padding:"10px 24px",background:C.black,color:"#fff",border:"none",borderRadius:7,fontFamily:"Poppins, sans-serif",fontSize:13,fontWeight:700,cursor:"pointer"}}>Got it</button>
      </div>
    </div>);
  return(
    <div onClick={onClose} style={{position:"fixed",inset:0,zIndex:200,background:"rgba(0,0,0,0.5)",backdropFilter:"blur(8px)",display:"flex",alignItems:"center",justifyContent:"center",padding:20,animation:"fadeIn 0.2s ease"}}>
      <div onClick={e=>e.stopPropagation()} style={{background:C.offwhite,borderRadius:14,padding:"28px 26px",maxWidth:400,width:"100%",position:"relative"}}>
        <button onClick={onClose} style={{position:"absolute",top:12,right:12,background:"none",border:"none",fontSize:18,color:C.grey,cursor:"pointer"}}>x</button>
        <div style={{fontFamily:"Poppins, sans-serif",fontSize:10,fontWeight:800,color:C.orange,letterSpacing:"2px",textTransform:"uppercase",marginBottom:8}}>Free Guide</div>
        <h3 style={{fontFamily:"Poppins, sans-serif",fontSize:20,fontWeight:800,color:C.black,lineHeight:1.15,marginBottom:8}}>Before You Take The Loan</h3>
        <p style={{fontFamily:"Figtree, sans-serif",fontSize:13,color:C.grey,lineHeight:1.5,marginBottom:14}}>16 chapters on debt, cashflow, and hard decisions. How lenders actually think. Good loans vs bad loans. A decision tree to use before signing anything.</p>
        <div style={{display:"flex",background:C.cream,borderRadius:8,padding:3,marginBottom:12}}>
          {["whatsapp","email"].map(m=>(<button key={m} onClick={()=>setMethod(m)} style={{flex:1,padding:"7px 0",borderRadius:6,border:"none",cursor:"pointer",fontFamily:"Poppins, sans-serif",fontSize:11,fontWeight:700,background:method===m?"#fff":"transparent",color:method===m?C.black:C.grey}}>{m==="whatsapp"?"WhatsApp":"Email"}</button>))}
        </div>
        {method==="whatsapp"?(<div style={{display:"flex",gap:6}}><span style={{padding:"10px",background:C.cream,borderRadius:7,border:`1.5px solid ${C.greyLight}`,fontFamily:"Figtree, sans-serif",fontSize:13,color:C.grey}}>+65</span><input value={wa} onChange={e=>setWa(e.target.value.replace(/\D/g,""))} placeholder="9123 4567" maxLength={8} className="qf-input" style={{flex:1}}/></div>):(<input value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@company.com" className="qf-input" style={{width:"100%"}}/>)}
        <button onClick={()=>{fetch("/api/lead", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ guide: "Before You Take The Loan", contact: { method, wa, email } }) }).catch(() => {}); setDone(true);}} disabled={!ok} style={{width:"100%",padding:"12px",marginTop:12,background:!ok?C.greyLight:C.orange,border:"none",borderRadius:7,fontFamily:"Poppins, sans-serif",fontSize:13,fontWeight:700,color:"#fff",cursor:!ok?"default":"pointer"}}>Send Me The Guide</button><p style={{ fontFamily: "Figtree, sans-serif", fontSize: 10, color: C.greyLight, marginTop: 8, textAlign: "center" }}>By submitting you consent to being contacted about this guide. <a href="/privacy-policy" style={{ color: C.grey }}>Privacy Policy</a>.</p>
      </div>
    </div>);
}

/* ── SECTOR GUIDE MODAL ── */
function SectorGuideModal({sector, onClose}){
  const [wa,setWa]=useState("");const [email,setEmail]=useState("");const [method,setMethod]=useState("whatsapp");const [done,setDone]=useState(false);
  const ok=method==="whatsapp"?wa.trim().length>=8:email.includes("@");
  if(done) return(
    <div onClick={onClose} style={{position:"fixed",inset:0,zIndex:200,background:"rgba(0,0,0,0.5)",backdropFilter:"blur(8px)",display:"flex",alignItems:"center",justifyContent:"center",padding:20}}>
      <div onClick={e=>e.stopPropagation()} style={{background:C.offwhite,borderRadius:14,padding:32,maxWidth:380,width:"100%",textAlign:"center"}}>
        <Bolt size={28} style={{margin:"0 auto 12px"}}/><h3 style={{fontFamily:"Poppins, sans-serif",fontSize:18,fontWeight:800,color:C.black,marginBottom:6}}>On its way.</h3>
        <p style={{fontFamily:"Figtree, sans-serif",fontSize:13,color:C.grey}}>Your {sector} financing guide is on its way via {method==="whatsapp"?"WhatsApp":"email"} — our team sends it personally, usually within one working day.</p>
        <button onClick={onClose} style={{marginTop:16,padding:"10px 24px",background:C.black,color:"#fff",border:"none",borderRadius:7,fontFamily:"Poppins, sans-serif",fontSize:13,fontWeight:700,cursor:"pointer"}}>Got it</button>
      </div>
    </div>);
  return(
    <div onClick={onClose} style={{position:"fixed",inset:0,zIndex:200,background:"rgba(0,0,0,0.5)",backdropFilter:"blur(8px)",display:"flex",alignItems:"center",justifyContent:"center",padding:20,animation:"fadeIn 0.2s ease"}}>
      <div onClick={e=>e.stopPropagation()} style={{background:C.offwhite,borderRadius:14,padding:"28px 26px",maxWidth:400,width:"100%",position:"relative"}}>
        <button onClick={onClose} style={{position:"absolute",top:12,right:12,background:"none",border:"none",fontSize:18,color:C.grey,cursor:"pointer"}}>x</button>
        <div style={{fontFamily:"Poppins, sans-serif",fontSize:10,fontWeight:800,color:C.orange,letterSpacing:"2px",textTransform:"uppercase",marginBottom:8}}>Free Sector Guide</div>
        <h3 style={{fontFamily:"Poppins, sans-serif",fontSize:20,fontWeight:800,color:C.black,lineHeight:1.15,marginBottom:8}}>
          Financing Guide:<br/>{sector}
        </h3>
        <p style={{fontFamily:"Figtree, sans-serif",fontSize:13,color:C.grey,lineHeight:1.5,marginBottom:14}}>
          What lenders look for in your industry, typical facility sizes and structures, common pitfalls, and which financing products may work best. Written specifically for {sector.toLowerCase()}.
        </p>
        <div style={{display:"flex",background:C.cream,borderRadius:8,padding:3,marginBottom:12}}>
          {["whatsapp","email"].map(m=>(<button key={m} onClick={()=>setMethod(m)} style={{flex:1,padding:"7px 0",borderRadius:6,border:"none",cursor:"pointer",fontFamily:"Poppins, sans-serif",fontSize:11,fontWeight:700,background:method===m?"#fff":"transparent",color:method===m?C.black:C.grey}}>{m==="whatsapp"?"WhatsApp":"Email"}</button>))}
        </div>
        {method==="whatsapp"?(<div style={{display:"flex",gap:6}}><span style={{padding:"10px",background:C.cream,borderRadius:7,border:`1.5px solid ${C.greyLight}`,fontFamily:"Figtree, sans-serif",fontSize:13,color:C.grey}}>+65</span><input value={wa} onChange={e=>setWa(e.target.value.replace(/\D/g,""))} placeholder="9123 4567" maxLength={8} className="qf-input" style={{flex:1}}/></div>):(<input value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@company.com" className="qf-input" style={{width:"100%"}}/>)}
        <button onClick={()=>{fetch("/api/lead", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ guide: sector, contact: { method, wa, email } }) }).catch(() => {}); setDone(true);}} disabled={!ok} style={{width:"100%",padding:"12px",marginTop:12,background:!ok?C.greyLight:C.orange,border:"none",borderRadius:7,fontFamily:"Poppins, sans-serif",fontSize:13,fontWeight:700,color:"#fff",cursor:!ok?"default":"pointer"}}>Send Me The Guide</button><p style={{ fontFamily: "Figtree, sans-serif", fontSize: 10, color: C.greyLight, marginTop: 8, textAlign: "center" }}>By submitting you consent to being contacted about this guide. <a href="/privacy-policy" style={{ color: C.grey }}>Privacy Policy</a>.</p>
      </div>
    </div>);
}

/* ═══════════════════════════════════════════
   MAIN PAGE - CONVERSION OPTIMIZED
   ═══════════════════════════════════════════ */
function QF() {
  const [scrollY,setScrollY]=useState(0);
  const [menu,setMenu]=useState(false);
  const [guide,setGuide]=useState(false);
  const scrollTo=id=>{const el=document.getElementById(id);if(el){const y=el.getBoundingClientRect().top+window.scrollY-70;window.scrollTo({top:y,behavior:"smooth"});}setMenu(false);};

  useEffect(()=>{const h=()=>setScrollY(window.scrollY);window.addEventListener("scroll",h,{passive:true});return()=>window.removeEventListener("scroll",h);},[]);

  return (
    <div style={{background:C.offwhite,minHeight:"100vh",overflowX:"hidden"}}>
      <style>{`
        @keyframes fadeIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}
        @keyframes spin{to{transform:rotate(360deg)}}
        @keyframes waPulse{0%,100%{box-shadow:0 4px 16px rgba(37,211,102,0.35)}50%{box-shadow:0 4px 24px rgba(37,211,102,0.6)}}
        *{box-sizing:border-box;margin:0;padding:0}
        ::selection{background:${C.orange}25}
        .qf-input{padding:10px 12px;border-radius:7px;border:1.5px solid ${C.greyLight};background:${C.offwhite};font-family:Figtree,sans-serif;font-size:13px;color:${C.black}}
        .qf-input:focus{outline:none;border-color:${C.orange}}
        .qf-spinner{display:inline-block;width:13px;height:13px;border:2px solid rgba(255,255,255,.3);border-top:2px solid #fff;border-radius:50%;animation:spin .7s linear infinite}
        .qf-w{max-width:1100px;margin:0 auto;padding:0 20px}
        @media(max-width:768px){
          .qf-hero-grid{grid-template-columns:1fr!important;gap:24px!important}
          .qf-tool-grid{grid-template-columns:1fr!important;gap:24px!important}
          .qf-3col{grid-template-columns:1fr!important;gap:8px!important}
          .qf-2col{grid-template-columns:1fr!important;gap:20px!important}
          .qf-hide-mobile{display:none!important}
          .qf-show-mobile{display:block!important}
          .qf-hero-h1{font-size:34px!important}
          .qf-faq-grid{grid-template-columns:1fr!important}
          .qf-stat-grid{grid-template-columns:1fr 1fr!important}
          .qf-mobile-menu.open{display:flex!important}
        }
        @media(max-width:480px){.qf-hero-h1{font-size:28px!important}.qf-stat-grid{grid-template-columns:1fr!important}}
        details summary::-webkit-details-marker{display:none}
        details[open] summary span.qf-plus{transform:rotate(45deg)}
      `}</style>

      <FloatingWA />
      {guide && <GuideModal onClose={()=>setGuide(false)}/>}

      {/* ── NAV ── */}
      <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:100,background:scrollY>40?"rgba(250,248,245,0.97)":"transparent",backdropFilter:scrollY>40?"blur(16px)":"none",borderBottom:scrollY>40?"1px solid rgba(0,0,0,0.04)":"none",transition:"all 0.3s",padding:"0 20px"}}>
        <div style={{maxWidth:1100,margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"space-between",height:58}}>
          <div style={{display:"flex",alignItems:"center",gap:7}}>
            <Bolt size={16}/>
            <span style={{fontFamily:"Poppins, sans-serif",fontSize:15,fontWeight:800,color:C.black,textTransform:"uppercase",letterSpacing:"0px"}}>QuickFund</span>
          </div>
          <div style={{display:"flex",alignItems:"center",gap:20}}>
            <a onClick={()=>scrollTo("tools")} className="qf-hide-mobile" style={{fontFamily:"Figtree, sans-serif",fontSize:13,color:C.grey,textDecoration:"none",cursor:"pointer"}}>Tools</a>
            <a onClick={()=>scrollTo("partners")} className="qf-hide-mobile" style={{fontFamily:"Figtree, sans-serif",fontSize:13,color:C.grey,textDecoration:"none",cursor:"pointer"}}>Partners</a>
            <a onClick={()=>scrollTo("faq")} className="qf-hide-mobile" style={{fontFamily:"Figtree, sans-serif",fontSize:13,color:C.grey,textDecoration:"none",cursor:"pointer"}}>FAQ</a>
            <a href="https://wa.me/6580576702?text=Hi%20QuickFund" target="_blank" rel="noopener" style={{fontFamily:"Poppins, sans-serif",fontSize:11,fontWeight:700,color:"#fff",background:C.black,padding:"8px 16px",borderRadius:6,textDecoration:"none",textTransform:"uppercase",letterSpacing:"0.5px"}}>WhatsApp</a>
            <button onClick={()=>setMenu(!menu)} style={{display:"none",background:"none",border:"none",cursor:"pointer",padding:4}} className="qf-show-mobile">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={C.black} strokeWidth="2">
                {menu ? <path d="M18 6L6 18M6 6l12 12"/> : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>}
              </svg>
            </button>
          </div>
        </div>
      </nav>
      {/* Mobile menu */}
      <div className={`qf-mobile-menu ${menu?"open":""}`} style={{display:"none",position:"fixed",top:58,left:0,right:0,background:C.offwhite,padding:"20px 24px",borderBottom:`1px solid ${C.greyLight}`,zIndex:99,flexDirection:"column",gap:14,animation:"fadeIn 0.2s ease"}}>
        <a onClick={()=>scrollTo("tools")} style={{fontFamily:"Poppins, sans-serif",fontSize:15,fontWeight:700,color:C.black,cursor:"pointer"}}>AI Tools</a>
        <a onClick={()=>scrollTo("partners")} style={{fontFamily:"Poppins, sans-serif",fontSize:15,fontWeight:700,color:C.black,cursor:"pointer"}}>Partners</a>
        <a onClick={()=>scrollTo("faq")} style={{fontFamily:"Poppins, sans-serif",fontSize:15,fontWeight:700,color:C.black,cursor:"pointer"}}>FAQ</a>
        <a href="https://wa.me/6580576702?text=Hi%20QuickFund" target="_blank" rel="noopener" style={{fontFamily:"Poppins, sans-serif",fontSize:14,fontWeight:700,color:"#fff",background:C.orange,padding:"12px 0",borderRadius:8,textDecoration:"none",textAlign:"center",marginTop:4}}>WhatsApp Us</a>
      </div>

      {/* ── HERO + TOOL (above fold together) ── */}
      <section style={{paddingTop:100,paddingBottom:40}} className="qf-w">
        <div className="qf-hero-grid" style={{display:"grid",gridTemplateColumns:"1fr 440px",gap:40,alignItems:"start"}}>
          {/* Left: value prop */}
          <div>
            <div style={{fontFamily:"Figtree, sans-serif",fontSize:12,color:C.grey,marginBottom:14,display:"flex",alignItems:"center",gap:7}}>
              <span style={{width:5,height:5,borderRadius:"50%",background:"#4CAF50",display:"inline-block"}}/>
              Singapore, Malaysia, HK, US, UK, Vietnam, Thailand, Indonesia
            </div>
            <h1 className="qf-hero-h1" style={{fontFamily:"Poppins, sans-serif",fontSize:52,fontWeight:800,color:C.black,lineHeight:0.95,letterSpacing:"-1px",marginBottom:20}}>
              Don't just<br/>take the loan.<br/><span style={{color:C.orange}}>Take the right one.</span>
            </h1>
            <p style={{fontFamily:"Figtree, sans-serif",fontSize:15,color:C.grey,lineHeight:1.65,maxWidth:440,marginBottom:24}}>
              We've been on the other side of the table. We know what a bad loan can do to a good business. That's why we diagnose before we introduce anything, and we'll say so when we think walking away is the smarter move. Banks, fintech lenders, family offices, funds. We look for what fits.
            </p>
            <div style={{display:"flex",gap:10,flexWrap:"wrap",marginBottom:16}}>
              <a href="https://wa.me/6580576702?text=Hi%20QuickFund" target="_blank" rel="noopener" style={{fontFamily:"Poppins, sans-serif",fontSize:13,fontWeight:700,color:"#fff",background:C.orange,padding:"12px 24px",borderRadius:8,textDecoration:"none",display:"inline-flex",alignItems:"center",gap:7}}>
                WhatsApp Us Now
              </a>
              <a onClick={()=>scrollTo("tools")} style={{fontFamily:"Poppins, sans-serif",fontSize:13,fontWeight:700,color:C.black,background:"transparent",padding:"12px 24px",borderRadius:8,textDecoration:"none",border:`1.5px solid ${C.greyLight}`,cursor:"pointer"}}>
                Try the AI Tools
              </a>
            </div>
            <a onClick={()=>setGuide(true)} style={{fontFamily:"Poppins, sans-serif",fontSize:13,fontWeight:700,color:C.orange,background:"transparent",padding:"12px 24px",borderRadius:8,border:`1.5px solid ${C.orange}`,cursor:"pointer",display:"inline-flex",alignItems:"center",gap:7}}>
              <Bolt size={12}/> Get The Free Guide: Before You Take The Loan
            </a>

            {/* Trust bar */}
            <div style={{marginTop:28,padding:"14px 18px",background:C.cream,borderRadius:8,borderLeft:`3px solid ${C.orange}`}}>
              <p style={{fontFamily:"Figtree, sans-serif",fontSize:12,color:C.black,lineHeight:1.5,margin:0,fontWeight:500}}>
                Trusted by listed companies across Nasdaq, SGX, and London AIM, Series A and B startups, VCs, funds, and family offices across 8 markets.
              </p>
            </div>
            <div style={{marginTop:12,fontFamily:"Figtree, sans-serif",fontSize:13,color:C.black,lineHeight:1.5}}>
              <span style={{fontWeight:600}}>Thinking beyond debt?</span> For equity, convertibles, or structured deals, we introduce you to appropriately licensed or specialist parties — that work is carried out by them, not by us. <a href="https://wa.me/6580576702?text=Hi%20QuickFund%2C%20I%20want%20to%20explore%20capital%20raising%20options" target="_blank" rel="noopener" style={{color:C.orange,textDecoration:"none",fontWeight:600}}>Talk to us.</a>
            </div>
          </div>

          {/* Right: AI Tool */}
          <div id="tools" style={{background:"#fff",borderRadius:14,padding:"24px 22px",boxShadow:"0 0 0 1px rgba(0,0,0,0.04), 0 8px 32px rgba(0,0,0,0.05)"}}>
            <Tools/>
          </div>
        </div>
      </section>

      {/* ── WHAT WE DO (compact 3-col) ── */}
      <section style={{paddingTop:40,paddingBottom:50}} className="qf-w">
        <div className="qf-3col" style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:3}}>
          {[
            {t:"New Financing",d:"Working capital, invoice financing, revenue-based, property refinancing, equipment purchase, car refinancing, acquisition, trade finance. We match you with the right lender from our network across banks, fintech, family offices, and funds.",bg:"#fff"},
            {t:"Second Opinion",d:"Already have a loan or an offer? We scan your terms for traps, benchmark your rate, and tell you if you're overpaying. Many SMEs are.",bg:C.black,dark:true},
            {t:"Capital Advisory",d:"Debt restructuring, capital stack review, refinancing strategy, covenant management. Small upfront fee. It's cheaper than continuing to pay for a bad loan.",bg:C.cream},
          ].map((p,i)=>(
            <div key={i} style={{background:p.bg,padding:"28px 24px",borderRadius:2}}>
              <h3 style={{fontFamily:"Poppins, sans-serif",fontSize:16,fontWeight:800,color:p.dark?"#fff":C.black,marginBottom:8}}>{p.t}</h3>
              <p style={{fontFamily:"Figtree, sans-serif",fontSize:13,color:p.dark?"rgba(255,255,255,0.5)":C.grey,lineHeight:1.55}}>{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTOR GUIDES ── */}
      <section style={{paddingTop:40,paddingBottom:50}} className="qf-w">
        <div style={{fontFamily:"Poppins, sans-serif",fontSize:10,fontWeight:800,color:C.orange,letterSpacing:"2px",textTransform:"uppercase",marginBottom:10}}>Sector Guides</div>
        <h2 style={{fontFamily:"Poppins, sans-serif",fontSize:22,fontWeight:800,color:C.black,lineHeight:1.1,letterSpacing:"-0.35px",marginBottom:8}}>Every industry finances differently.</h2>
        <p style={{fontFamily:"Figtree, sans-serif",fontSize:13,color:C.grey,lineHeight:1.5,marginBottom:20,maxWidth:480}}>
          A trading company's needs are nothing like a dentist's. We've written specific guides for each sector so you know exactly what options exist and what lenders look for in your industry.
        </p>
        <div style={{display:"flex",flexWrap:"wrap",gap:6}}>
          {[
            "Property-Backed Loans",
            "Doctors and Dentists",
            "Trading Companies",
            "Tech Companies",
            "Startups",
            "E-commerce and Product Manufacturers",
            "Software Companies",
            "F&B and Hospitality",
            "Construction and Contractors",
            "Logistics and Transport",
            "Professional Services",
            "Retail",
          ].map((sector,i) => (
            <a key={i} href={`/guide/${GUIDE_SLUGS[sector]}`}
              style={{
                padding:"8px 16px", borderRadius:20, cursor:"pointer",
                fontFamily:"Figtree, sans-serif", fontSize:12, fontWeight:500,
                color: C.black,
                background: "#fff",
                textDecoration:"none",
                border: `1.5px solid ${C.greyLight}`,
                transition:"all 0.15s",
              }}
              onMouseEnter={e=>{e.currentTarget.style.borderColor=C.orange;e.currentTarget.style.color=C.orange;e.currentTarget.style.transform="translateY(-2px)";}}
              onMouseLeave={e=>{e.currentTarget.style.borderColor=C.greyLight;e.currentTarget.style.color=C.black;e.currentTarget.style.transform="none";}}
            >{sector}</a>
          ))}
        </div>
      </section>

      {/* ── WHY US (compact) ── */}
      <section style={{background:C.black,padding:"48px 20px"}}>
        <div style={{maxWidth:1100,margin:"0 auto"}}>
          <div className="qf-2col" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:40,alignItems:"center"}}>
            <div>
              <div style={{fontFamily:"Poppins, sans-serif",fontSize:10,fontWeight:800,color:C.orange,letterSpacing:"2px",textTransform:"uppercase",marginBottom:12}}>Why us</div>
              <h2 style={{fontFamily:"Poppins, sans-serif",fontSize:28,fontWeight:800,color:"#fff",lineHeight:1.1,letterSpacing:"-0.52px",marginBottom:14}}>
                We started QuickFund<br/>because we've been<br/>on the other side.
              </h2>
              <p style={{fontFamily:"Figtree, sans-serif",fontSize:14,color:"rgba(255,255,255,0.5)",lineHeight:1.7}}>
                We started QuickFund because we've been on the other side of the table. We know what it's like to need capital urgently, to sit through advice from people who don't understand your business, and to sign terms you later regret. That's why we do things differently.
              </p>
              <p style={{fontFamily:"Figtree, sans-serif",fontSize:14,color:"rgba(255,255,255,0.5)",lineHeight:1.7,marginTop:10}}>
                We are not owned by any lender. No lender has equity in our business. We've troubleshot real problems for clients: term sheets with hidden traps, facilities that cost more than expected, lender relationships that went wrong because nobody read the fine print. We believe capital strategy should be designed from day 1, not as an afterthought when things are already falling apart.
              </p>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}} className="qf-stat-grid">
              {[{n:"8",l:"Markets across Asia, US, and UK"},{n:"3 days",l:"Average time to first offer"},{n:"$0",l:"Upfront for financing introductions"},{n:"24/7",l:"We answer your WhatsApp"}].map((s,i)=>(
                <div key={i} style={{padding:20,background:"rgba(255,255,255,0.04)",borderRadius:8,border:"1px solid rgba(255,255,255,0.06)"}}>
                  <div style={{fontFamily:"Poppins, sans-serif",fontSize:28,fontWeight:800,color:C.orange,lineHeight:1}}>{s.n}</div>
                  <div style={{fontFamily:"Figtree, sans-serif",fontSize:11,color:"rgba(255,255,255,0.4)",marginTop:4}}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PARTNERS ── */}
      <section id="partners" style={{paddingTop:50,paddingBottom:50}} className="qf-w">
        <div style={{background:"#fff",borderRadius:12,padding:"clamp(24px,4vw,40px)",border:`1.5px solid ${C.greyLight}`}}>
          <div className="qf-2col" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:32,alignItems:"center"}}>
            <div>
              <div style={{fontFamily:"Poppins, sans-serif",fontSize:10,fontWeight:800,color:C.orange,letterSpacing:"2px",textTransform:"uppercase",marginBottom:10}}>Referral Partners</div>
              <h2 style={{fontFamily:"Poppins, sans-serif",fontSize:26,fontWeight:800,color:C.black,lineHeight:1.1,letterSpacing:"-0.52px",marginBottom:12}}>
                Your clients ask about<br/>financing. Now you<br/>have an answer.
              </h2>
              <p style={{fontFamily:"Figtree, sans-serif",fontSize:14,color:C.grey,lineHeight:1.65,marginBottom:10}}>
                Accountants, corporate secretaries, lawyers, property agents, consultants. Point your clients our way. We handle the financing process and keep you informed. Eligible referral fees are agreed in writing before we move forward, including how renewals, new facilities or advisory work are treated.
              </p>
              <p style={{fontFamily:"Figtree, sans-serif",fontSize:13,color:C.grey,lineHeight:1.65,marginBottom:18}}>
                It works both ways. When we have clients who need your services, we send them to you. This is a real partnership, not a referral form. Already doing loan introductions? We're your overflow partner for the complex ones.
              </p>
              <a href="https://wa.me/6580576702?text=Hi%20QuickFund%2C%20interested%20in%20partnership" target="_blank" rel="noopener" style={{fontFamily:"Poppins, sans-serif",fontSize:13,fontWeight:700,color:"#fff",background:C.black,padding:"12px 24px",borderRadius:8,textDecoration:"none",display:"inline-block"}}>Become a Partner</a>
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:8}}>
              {[
                {l:"Referral economics",d:"Fees, renewals and future work are documented upfront under the agreed partner terms."},
                {l:"It works both ways",d:"We send our clients to you when they need your services. Accounting, legal, corporate secretary, insurance. Real partnership."},
                {l:"Low admin on your end",d:"You introduce. We handle the financing process, keep you informed and protect your reputation."},
                {l:"AI tools to share",d:"Free Loan Check-Up, Term Sheet Scanner, and Rate Check. Useful resources that make you look good to your clients."},
              ].map((item,i)=>(
                <div key={i} style={{padding:"10px 14px",background:C.offwhite,borderRadius:8,display:"flex",gap:10,border:`1px solid ${C.greyLight}`}}>
                  <Bolt size={12} style={{marginTop:3,flexShrink:0}}/>
                  <div>
                    <div style={{fontFamily:"Poppins, sans-serif",fontSize:12,fontWeight:700,color:C.black}}>{item.l}</div>
                    <div style={{fontFamily:"Figtree, sans-serif",fontSize:11,color:C.grey,lineHeight:1.4}}>{item.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" style={{paddingBottom:50}} className="qf-w">
        <div style={{fontFamily:"Poppins, sans-serif",fontSize:10,fontWeight:800,color:C.orange,letterSpacing:"2px",textTransform:"uppercase",marginBottom:10}}>FAQ</div>
        <h2 style={{fontFamily:"Poppins, sans-serif",fontSize:26,fontWeight:800,color:C.black,lineHeight:1.1,letterSpacing:"-0.52px",marginBottom:24}}>The stuff you actually want to know.</h2>
        <div className="qf-faq-grid" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:2}}>
          {[
            {q:"Do I pay anything upfront?",a:"For financing introductions, no. We only earn when you do, with any success fee agreed before you proceed and payable after successful disbursement. For advisory work like debt restructuring, capital stack review, or covenant management, we may charge an upfront fee agreed in writing before work begins."},
            {q:"Why not go to the lender directly?",a:"You can. But good luck getting in the queue. We have established relationships with every major bank in Singapore and a deep network of non-bank lenders. Our introductions get priority processing. We also compare across the full market so you're not just taking whatever one lender offers."},
            {q:"How are you different?",a:"We diagnose before we introduce anything. We read term sheets line by line. We tell you when we think a loan will hurt you, even if it means we lose the deal. We keep WhatsApp close because we know what it feels like when the pressure is real and nobody is picking up. Most people in this space are transactional. We're building long-term relationships. That's why clients come back."},
            {q:"Is this like a moneylender?",a:"No. QuickFund does not lend money. We connect companies with banks, finance companies and other lenders that are licensed, exempt or otherwise permitted to lend. Whether a lender requires licensing or exemption depends on the lender and the specific lending activity."},
            {q:"We're based overseas. Can you help?",a:"Yes. We work across 8 markets: Singapore, Malaysia, Hong Kong, US, UK, Vietnam, Thailand, and Indonesia. Options for foreign directors, no local PG or cross-border structures are narrower, but they can exist depending on revenue, security, jurisdiction and lender appetite."},
            {q:"I've been rejected by a bank.",a:"Banks reject for specific reasons: too young, wrong industry, foreign directors. Non-bank lenders have different criteria. A bank rejection doesn't mean you can't get funded. It means you need the right lender for your profile."},
            {q:"What does capital advisory cost?",a:"A small upfront engagement fee based on complexity. To put it in perspective: paying 2% per month on a facility you could refinance at 0.8% per month costs you far more than our fee ever will."},
            {q:"How long does it take?",a:"Depends on the product and lender. Non-bank working capital can be 2 to 3 business days from application to disbursement. Bank loans typically take a few weeks. Larger venture debt facilities can take up to 3 months. We'll give you a realistic timeline upfront."},
            {q:"How do I know I can trust you?",a:"Registered Singapore company. We've worked with listed companies across Nasdaq, SGX, and London AIM, as well as Series A and B startups, VCs, funds, and family offices across 8 markets. Happy to provide references."},
          ].map((item,i)=>(
            <details key={i} style={{padding:"14px 18px",background:i%2===0?"#fff":C.offwhite,borderRadius:2,cursor:"pointer"}}>
              <summary style={{fontFamily:"Poppins, sans-serif",fontSize:14,fontWeight:700,color:C.black,listStyle:"none",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                {item.q}<span className="qf-plus" style={{color:C.orange,fontSize:16,flexShrink:0,marginLeft:10,transition:"transform 0.2s"}}>+</span>
              </summary>
              <p style={{fontFamily:"Figtree, sans-serif",fontSize:13,color:C.grey,lineHeight:1.65,marginTop:10,paddingRight:20}}>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ── RESPONSIBLE BORROWING ── */}
      <section style={{paddingBottom:50}} className="qf-w">
        <div style={{background:C.cream,borderRadius:12,padding:"clamp(28px,4vw,40px)",borderLeft:`4px solid ${C.black}`}}>
          <div style={{fontFamily:"Poppins, sans-serif",fontSize:10,fontWeight:800,color:C.black,letterSpacing:"2px",textTransform:"uppercase",marginBottom:10}}>Responsible Borrowing</div>
          <h2 style={{fontFamily:"Poppins, sans-serif",fontSize:"clamp(22px,3vw,28px)",fontWeight:800,color:C.black,lineHeight:1.1,letterSpacing:"-0.35px",marginBottom:24}}>
            We'd rather lose a deal than<br/>put you in a position you can't<br/>recover from.
          </h2>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(320px,1fr))",gap:"32px",alignItems:"start"}}>
          <div>
          <p style={{fontFamily:"Figtree, sans-serif",fontSize:14,color:C.grey,lineHeight:1.7,marginBottom:16}}>
            Money is fungible. A dollar borrowed is the same whether it comes from a bank, a fintech lender, or a family office. The money doesn't discriminate. What matters is why you're borrowing and whether the business situation supports it.
          </p>
          <p style={{fontFamily:"Figtree, sans-serif",fontSize:14,color:C.grey,lineHeight:1.7,marginBottom:16}}>
            Borrowing to fulfil a confirmed order, to buy inventory you've already sold forward, or to fund a signed contract can provide clearer repayment visibility. The revenue is not guaranteed until collected, but the borrowing purpose is more grounded than borrowing without a defined repayment source.
          </p>
          <p style={{fontFamily:"Figtree, sans-serif",fontSize:14,color:C.grey,lineHeight:1.7,marginBottom:16}}>
            Borrowing to cover working capital because the business is losing money? That's different. Unless there is clear visibility on new funds, repayment source or a return to profitability, borrowing to cover losses can make the hole deeper. Maybe something knocked you temporarily. Maybe a customer delayed payment. Maybe you had a bad quarter. If the business is sound and you just need to bridge a gap, that can work. But if the underlying economics don't add up, a loan won't fix them.
          </p>
          <p style={{fontFamily:"Figtree, sans-serif",fontSize:14,color:C.grey,lineHeight:1.7,marginBottom:0}}>
            We are not owned by any lender. No lender has equity in our business. When we introduce a facility, it's because we believe it fits your situation based on the information available to us. If we think a deal will hurt you, we'll say so.
          </p>
          </div>
          <div style={{background:"#fff",borderRadius:10,padding:"22px 24px"}}>
          <p style={{fontFamily:"Poppins, sans-serif",fontSize:13,fontWeight:700,color:C.black,marginBottom:14}}>
            Before you borrow, ask yourself:
          </p>
          <div style={{display:"flex",flexDirection:"column",gap:10}}>
            {[
              "Is the revenue that will repay this loan confirmed, or am I hoping it will come?",
              "Is my business profitable, or am I borrowing to cover losses?",
              "If the plan doesn't work, can I still make the repayments?",
              "Am I borrowing because the opportunity is real, or because I'm under pressure and a loan feels like the fastest way out?",
            ].map((q,i)=>(
              <div key={i} style={{display:"flex",gap:8,alignItems:"flex-start"}}>
                <Bolt size={11} style={{marginTop:4,flexShrink:0}}/>
                <span style={{fontFamily:"Figtree, sans-serif",fontSize:14,color:C.black,lineHeight:1.5}}>{q}</span>
              </div>
            ))}
          </div>
          <p style={{fontFamily:"Figtree, sans-serif",fontSize:13,color:C.grey,lineHeight:1.5,marginTop:16}}>
            If any of those make you uncomfortable, talk to us before you proceed. We'll help you figure out whether borrowing is the right move, or whether there's a better path.
          </p>
          <a href="/responsible-business-promise" style={{fontFamily:"Figtree, sans-serif",fontSize:12,fontWeight:500,color:C.orange,textDecoration:"none",display:"inline-flex",alignItems:"center",gap:5,marginTop:12}}>
            <Bolt size={10}/> Read our full Responsible Business Promise
          </a>
          </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{paddingBottom:60}} className="qf-w">
        <div style={{background:C.black,borderRadius:14,padding:"clamp(32px,5vw,48px) clamp(24px,4vw,40px)",textAlign:"center",position:"relative",overflow:"hidden"}}>
          <Bolt size={160} color="rgba(253,80,38,0.06)" style={{position:"absolute",right:-20,bottom:-30}}/>
          <div style={{position:"relative"}}>
            <h2 style={{fontFamily:"Poppins, sans-serif",fontSize:"clamp(22px,3.5vw,34px)",fontWeight:800,color:"#fff",lineHeight:1.1,letterSpacing:"-0.52px",marginBottom:10}}>
              Ready to talk to someone who gets it?
            </h2>
            <p style={{fontFamily:"Figtree, sans-serif",fontSize:14,color:"rgba(255,255,255,0.4)",marginBottom:24}}>No forms. No chatbots. Just WhatsApp us.</p>
            <div style={{display:"flex",gap:12,justifyContent:"center",flexWrap:"wrap"}}>
              <a href="https://wa.me/6580576702?text=Hi%20QuickFund" target="_blank" rel="noopener" style={{padding:"14px 32px",background:C.orange,color:"#fff",borderRadius:8,fontFamily:"Poppins, sans-serif",fontSize:14,fontWeight:700,textDecoration:"none"}}>WhatsApp Us</a>
              <a onClick={()=>scrollTo("tools")} style={{padding:"14px 32px",background:"transparent",color:"rgba(255,255,255,0.5)",border:"1.5px solid rgba(255,255,255,0.12)",borderRadius:8,fontFamily:"Poppins, sans-serif",fontSize:14,fontWeight:700,textDecoration:"none",cursor:"pointer"}}>Run the Free Loan Check-Up</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{background:C.black,padding:"40px 20px 28px"}}>
        <div style={{maxWidth:1100,margin:"0 auto"}}>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:24,marginBottom:28}} className="qf-3col">
            <div>
              <div style={{fontFamily:"Poppins, sans-serif",fontSize:10,fontWeight:800,color:C.orange,letterSpacing:"2px",textTransform:"uppercase",marginBottom:10}}>QuickFund</div>
              {["Home","AI Tools","Partners","FAQ","Responsible Business Promise"].map(l=>(
                <a key={l} href={l==="Home"?"/":l==="AI Tools"?"/#tools":`/${l.toLowerCase().replace(/ /g,"-")}`} style={{display:"block",fontFamily:"Figtree, sans-serif",fontSize:12,color:"rgba(255,255,255,0.35)",textDecoration:"none",marginBottom:5}}>{l}</a>
              ))}
            </div>
            <div>
              <div style={{fontFamily:"Poppins, sans-serif",fontSize:10,fontWeight:800,color:C.orange,letterSpacing:"2px",textTransform:"uppercase",marginBottom:10}}>Guides</div>
              {["Property-Backed Loans","Doctors and Dentists","Trading Companies","Tech Companies","Startups","E-commerce","Software","F&B","Construction","Logistics","Professional Services","Retail"].map(l=>(
                <a key={l} href={`/guide/${GUIDE_SLUGS[l]}`} style={{display:"block",fontFamily:"Figtree, sans-serif",fontSize:12,color:"rgba(255,255,255,0.35)",textDecoration:"none",marginBottom:5}}>{l}</a>
              ))}
            </div>
            <div>
              <div style={{fontFamily:"Poppins, sans-serif",fontSize:10,fontWeight:800,color:C.orange,letterSpacing:"2px",textTransform:"uppercase",marginBottom:10}}>Contact</div>
              <a href="https://wa.me/6580576702" target="_blank" rel="noopener" style={{display:"block",fontFamily:"Figtree, sans-serif",fontSize:12,color:"rgba(255,255,255,0.35)",textDecoration:"none",marginBottom:5}}>WhatsApp: +65 8057 6702</a>
              <a href="mailto:leslie@quickfund.sg" style={{display:"block",fontFamily:"Figtree, sans-serif",fontSize:12,color:"rgba(255,255,255,0.35)",textDecoration:"none",marginBottom:5}}>leslie@quickfund.sg</a>
              <div style={{fontFamily:"Figtree, sans-serif",fontSize:11,color:"rgba(255,255,255,0.2)",marginTop:12}}>
                Singapore, Malaysia, Hong Kong,<br/>US, UK, Vietnam, Thailand, Indonesia
              </div>
            </div>
          </div>
          <div style={{borderTop:"1px solid rgba(255,255,255,0.06)",paddingTop:20}}>
            <div style={{padding:"14px 16px",background:"rgba(255,255,255,0.03)",borderRadius:8,border:"1px solid rgba(255,255,255,0.05)",marginBottom:16}}>
              <p style={{fontFamily:"Figtree, sans-serif",fontSize:10,color:"rgba(255,255,255,0.25)",lineHeight:1.6,margin:0}}>
                <span style={{fontWeight:600,color:"rgba(255,255,255,0.4)"}}>Disclaimer:</span> This website is for general informational purposes only and does not constitute financial, legal, investment, or professional advice. QuickFund is not a licensed financial adviser and does not provide regulated financial, legal, tax or investment advice. For securities, equity, convertible, fund-raising or capital-markets transactions, appropriately licensed or specialist parties may be required. All loan terms, rates, and conditions are determined by individual lenders. You are solely responsible for your borrowing decisions and their consequences. Seek independent legal and financial advice before entering into any loan or guarantee arrangement. AI-powered tools on this site are for informational purposes only and may contain errors. Results should not be relied upon as the basis for any financial decision.
              </p>
            </div>
            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:8}}>
              <div style={{display:"flex",alignItems:"center",gap:6}}>
                <Bolt size={10} color="rgba(255,255,255,0.25)"/>
                <span style={{fontFamily:"Poppins, sans-serif",fontSize:10,fontWeight:800,color:"rgba(255,255,255,0.25)",textTransform:"uppercase"}}>QuickFund</span>
                
              </div>
              <div style={{display:"flex",gap:12}}>
                <a href="/privacy-policy" style={{fontFamily:"Figtree, sans-serif",fontSize:10,color:"rgba(255,255,255,0.15)",textDecoration:"none"}}>Privacy Policy</a>
                <a href="/responsible-business-promise" style={{fontFamily:"Figtree, sans-serif",fontSize:10,color:"rgba(255,255,255,0.15)",textDecoration:"none"}}>Responsible Business Promise</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}


export default QF;
