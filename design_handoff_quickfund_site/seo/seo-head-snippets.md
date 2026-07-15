# SEO / LLM Head Snippets — for Claude Code

Instructions for the production build. Every page must be pre-rendered to static
HTML (full text content in the initial response — no client-side-only rendering).

## Canonical guide slugs (LOCKED — use exactly these)

- /guide/property-backed-loans — Property-Backed Loans
- /guide/doctors-and-dentists — Doctors and Dentists
- /guide/trading-companies — Trading Companies
- /guide/tech-companies — Tech Companies
- /guide/startups — Startups
- /guide/e-commerce — E-commerce
- /guide/software — Software
- /guide/f-and-b — F&B
- /guide/construction — Construction
- /guide/logistics — Logistics
- /guide/professional-services — Professional Services
- /guide/retail — Retail

301 redirects to set up (legacy/variant slugs):
- /guide/doctors-dentists -> /guide/doctors-and-dentists
- /guide/f&b (and /guide/f%26b) -> /guide/f-and-b

## Per-page titles + meta descriptions

| Page | <title> | meta description |
|---|---|---|
| / | QuickFund — Don't Just Take The Loan. Take The Right One. | Singapore-based business financing advisory across 8 markets. Free AI loan assessment, term sheet review, and rate benchmarking. |
| /faq | Business Financing FAQ — QuickFund | Fees, process, personal guarantees, share charges, and how QuickFund works with international clients. |
| /partners | Referral Partners — QuickFund | For accountants, lawyers and corporate secretaries: refer clients who need financing, we handle the rest. |
| /responsible-business-promise | Responsible Business Promise — QuickFund | Our commitments: honest advice, no irresponsible borrowing, full cost transparency, and reading every term sheet. |
| /privacy-policy | Privacy Policy — QuickFund | How QuickFund collects, uses and protects your data under Singapore's PDPA. |
| /guide/property-backed-loans | Property-Backed Loans Financing in Singapore — QuickFund Guide | How to unlock equity in Singapore property: LTV, TDSR, valuation, risks, and when borrowing against property makes sense. |
| /guide/doctors-and-dentists | Doctors and Dentists Financing in Singapore — QuickFund Guide | Financing for medical and dental practices: clinic expansion, equipment, buyouts, and working capital. |
| /guide/trading-companies | Trading Companies Financing in Singapore — QuickFund Guide | Trade finance for import/export businesses: LCs, trust receipts, invoice financing, and working capital. |
| /guide/tech-companies | Tech Companies Financing in Singapore — QuickFund Guide | Debt options for technology companies: revenue-based financing, working capital, and venture debt. |
| /guide/startups | Startups Financing in Singapore — QuickFund Guide | Non-dilutive financing for startups: venture debt, working capital, and what lenders need to see. |
| /guide/e-commerce | E-commerce Financing in Singapore — QuickFund Guide | Financing for e-commerce businesses: inventory funding, revenue-based financing, and marketplace lending. |
| /guide/software | Software Financing in Singapore — QuickFund Guide | Financing for software and SaaS companies: ARR-based lending, working capital, and growth debt. |
| /guide/f-and-b | F&B Financing in Singapore — QuickFund Guide | Financing for restaurants, cafes and hospitality: equipment, renovation, expansion, and working capital. |
| /guide/construction | Construction Financing in Singapore — QuickFund Guide | Financing for construction firms: project financing, performance bonds, equipment, and progress-payment gaps. |
| /guide/logistics | Logistics Financing in Singapore — QuickFund Guide | Financing for logistics companies: fleet, warehousing, invoice financing, and working capital. |
| /guide/professional-services | Professional Services Financing in Singapore — QuickFund Guide | Financing for law, accounting, consulting and agency businesses: working capital and expansion. |
| /guide/retail | Retail Financing in Singapore — QuickFund Guide | Financing for retail businesses: inventory, trade finance, renovation, expansion, and property-backed options. |

## Organization schema (all pages, in <head>)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "name": "QuickFund Pte Ltd",
  "url": "https://quickfund.sg",
  "description": "Singapore-based business financing advisory. Not a lender: connects companies with licensed, exempt or otherwise permitted lenders across 8 markets.",
  "areaServed": ["SG", "MY", "HK", "US", "GB", "VN", "TH", "ID"],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "telephone": "+65-8057-6702",
    "email": "leslie@quickfund.sg"
  }
}
</script>
```

## FAQPage schema (home + /faq)

Generate from the actual FAQ content at build time; one Question/acceptedAnswer
pair per FAQ item. Do NOT hand-maintain a duplicate copy of the answers.

## Article + BreadcrumbList schema (each guide)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "<guide H1>",
  "datePublished": "<publish date>",
  "dateModified": "<last edit>",
  "author": { "@type": "Organization", "name": "QuickFund Pte Ltd" }
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://quickfund.sg/" },
    { "@type": "ListItem", "position": 2, "name": "Guides", "item": "https://quickfund.sg/#guides" },
    { "@type": "ListItem", "position": 3, "name": "<guide name>" }
  ]
}
</script>
```

## Checklist

- [ ] `<meta name="viewport" content="width=device-width, initial-scale=1">` on every page.
- [ ] Pre-render all pages (SSG). View-source must show full text.
- [ ] Deploy robots.txt, llms.txt, sitemap.xml from this folder to site root.
- [ ] Verify Cloudflare/WAF is not blocking GPTBot / ClaudeBot / PerplexityBot.
- [ ] Submit sitemap to Google Search Console AND Bing Webmaster Tools.
- [ ] Set up the two 301 redirects above.
- [ ] Unique title + meta description per page (table above).
- [ ] OG tags per page (spec already in quickfund-production-notes.md).
- [ ] Canonical <link rel="canonical"> on every page.
