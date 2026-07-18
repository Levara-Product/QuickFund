// Single source of truth for the Loan Check-Up wizard.
// Imported by the client wizard AND by /api/assess for server-side validation.
export const STEPS = [
  { id: "industry", q: "What industry are you in?", opts: ["F&B / Hospitality", "Retail / E-commerce", "Tech / SaaS", "Manufacturing", "Trading / Import-Export", "Logistics", "Construction / Property", "Professional Services", "Healthcare", "Other"] },
  { id: "age", q: "How long in business?", opts: ["Less than 1 year", "1 to 2 years", "2 to 5 years", "5 to 10 years", "10+ years"] },
  { id: "revenue", q: "Annual revenue?", opts: ["Pre-revenue / under S$100K", "S$100K to S$500K", "S$500K to S$1M", "S$1M to S$5M", "S$5M to S$20M", "Above S$20M"] },
  { id: "rev_geo", q: "Where does the revenue come from?", opts: ["Mostly Singapore", "Mix of SG and overseas", "Mostly overseas", "Entirely overseas"] },
  { id: "need", q: "What problem are you solving?", opts: ["Cash flow gap", "Growth / expansion", "Refinancing existing debt", "Property refinancing or purchase", "Equipment purchase", "Acquisition", "Not sure yet"] },
  { id: "debt", q: "Any existing loans?", opts: ["No existing debt", "One facility, manageable", "Multiple, still okay", "Stretched", "Behind on payments"] },
  { id: "amount", q: "How much do you need?", opts: ["Under S$50K", "S$50K to S$200K", "S$200K to S$500K", "S$500K to S$1M", "S$1M to S$5M", "Above S$5M"] },
  { id: "collateral", q: "What security can you offer?", opts: ["Property in Singapore", "Equipment or inventory", "Receivables / invoices", "Shares (listed or private)", "A mix", "Nothing, need unsecured"] },
  { id: "pg", q: "Can a SG citizen or PR director provide a personal guarantee?", opts: ["Yes", "No, all directors are foreign", "Rather not provide a PG", "Not sure what this means"] },
  { id: "urgency", q: "When do you need the funds?", opts: ["Within 1 week", "2 to 4 weeks", "1 to 3 months", "No rush, exploring"] },
];
