# QuickFund Production Implementation Notes

## Pages to Create

1. **Main site** (quickfund.sg) - from quickfund-final.jsx
2. **Property-Backed Loans Guide** (quickfund.sg/guide/property-backed-loans) - from quickfund-guide-property.jsx
3. **Responsible Business Promise** (quickfund.sg/responsible-business-promise) - standalone page, content from the Responsible Borrowing section expanded into a full-page commitment statement
4. **Privacy Policy** (quickfund.sg/privacy-policy) - required for PDPA compliance, especially since collecting WhatsApp numbers and emails
5. **404 Page** - custom page that shows when sector guide URLs aren't built yet. Should say "This guide is coming soon. In the meantime, try our AI Loan Check-Up or WhatsApp us directly."
6. **11 more Sector Guides** - Doctors and Dentists, Trading Companies, Tech Companies, Startups, E-commerce, Software, F&B, Construction, Logistics, Professional Services, Retail

## Tracking and Analytics

### Google Analytics 4
Add to every page in the `<head>`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Conversion Events to Track
- WhatsApp button clicks (all instances)
- AI tool completion (assessment generated)
- Contact gate submission (email/WhatsApp captured)
- Guide download modal submission
- Sector guide modal submission
- FAQ expansion (which questions get opened most)

### Meta Pixel
Add to `<head>` even if not running FB ads now. Builds audience for later:
```html
<script>
!function(f,b,e,v,n,t,s){...}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'YOUR_PIXEL_ID');
fbq('track', 'PageView');
</script>
```

## SEO Requirements

### Open Graph Tags (for every page)
```html
<meta property="og:title" content="QuickFund - Don't Just Take The Loan. Take The Right One." />
<meta property="og:description" content="Singapore-based financing advisory working across 8 markets. AI-powered loan assessment, term sheet review, and rate benchmarking. Free." />
<meta property="og:image" content="https://quickfund.sg/og-image.jpg" />
<meta property="og:url" content="https://quickfund.sg/" />
<meta property="og:type" content="website" />
<meta name="twitter:card" content="summary_large_image" />
```
Create a 1200x630px OG image with the QuickFund bolt logo, the headline, and the orange/black brand colours. This is what appears when someone shares the URL on WhatsApp, LinkedIn, or Telegram.

For each sector guide, create a specific OG image:
```html
<meta property="og:title" content="Property-Backed Loans in Singapore | QuickFund Guide" />
<meta property="og:description" content="How to unlock the equity in your property. LTV, TDSR, valuation, risks, and when it makes sense to borrow against property." />
<meta property="og:image" content="https://quickfund.sg/og-property-guide.jpg" />
```

### XML Sitemap
The complete sitemap lives at `seo/sitemap.xml` (all 17 URLs: home, FAQ, partners,
both policy pages, and all 12 sector guides; no /blog entry, since the blog was cut
for launch). Deploy it verbatim to quickfund.sg/sitemap.xml.
Submit it to Google Search Console AND Bing Webmaster Tools after deployment
(ChatGPT search and several assistants pull from Bing's index).

### Schema Markup for FAQ
Add to the main page for the FAQ section. This enables FAQ rich results in Google:
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do I pay anything upfront?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For financing introductions, no. We only earn when you do..."
      }
    }
    // ... repeat for each FAQ
  ]
}
</script>
```

### Schema for Organization
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "QuickFund Pte Ltd",
  "url": "https://quickfund.sg",
  "description": "Singapore-based financing advisory",
  "parentOrganization": {
    "@type": "Organization",
    "name": "Levara Advisory Group"
  },
  "areaServed": ["SG", "MY", "HK", "US", "GB", "VN", "TH", "ID"]
}
</script>
```

## Font Performance
In production, either:
1. Self-host Poppins and Figtree fonts (download from Google Fonts, serve from your own domain)
2. Or add preload hints in the `<head>`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link rel="preload" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Figtree:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap" as="style" />
```
The `display=swap` parameter is already in the Google Fonts URL, which ensures text is visible immediately while fonts load.

## AI Tool Backend

**CRITICAL: The current prototype calls the Anthropic API directly from frontend code (line 239 of quickfund-final.jsx). This MUST be replaced with server-side endpoints before production deployment. The system prompts and API key must never be exposed to the browser.**

### Architecture

Frontend (browser) → Your Backend (server) → Claude API (Anthropic)

The frontend sends user input to your server. Your server attaches the system prompt, calls Claude, filters the output, saves the lead, and returns only the result.

### Three Endpoints to Build

**POST /api/assess** (Loan Check-Up)
- Request body: `{ answers: { industry, age, revenue, rev_geo, need, debt, amount, collateral, pg, urgency }, contact: { method, wa, email } }`
- Server: validate answers match expected options, save lead to CRM/Google Sheet, attach Loan Check-Up prompt from quickfund-ai-prompts.md, call Claude API, filter output for blocked keywords, return result
- Response: `{ result: "GOOD: ... WATCH: ... VERDICT: ... NEXT: ..." }` or `{ error: "message" }`

**POST /api/scan** (Term Sheet Scanner)
- Request body: `{ terms: "pasted text content", contact: { method, wa, email } }`
- Future: also accept `{ file: base64_pdf, contact: {...} }` for PDF upload
- Server: validate input length (min 30 chars, max 10000), save lead, attach Term Sheet Scanner prompt, call Claude, filter output, return result
- Response: `{ result: "RED FLAG: ... AMBER: ... OK: ... BOTTOM LINE: ..." }` or `{ error: "message" }`

**POST /api/rate** (Rate Check)
- Request body: `{ type: "facility type", amount: "S$500K", rate: "8% p.a.", contact: { method, wa, email } }`
- Server: validate all three fields present, save lead, attach Rate Check prompt, call Claude, filter output, return result
- Response: `{ result: "GOOD: ... WATCH: ... VERDICT: ... NEXT: ..." }` or `{ error: "message" }`

### Frontend Change

In quickfund-final.jsx, replace:
```
const r = await fetch("https://api.anthropic.com/v1/messages", {
```
with:
```
const r = await fetch("/api/assess", {
```
Remove the `system: SYS_PROMPT` parameter from the body (the server attaches it).
Remove the `model` parameter (the server decides which model to use).
The body only sends `{ answers, contact }`.

Same pattern for the scanner and rate check endpoints.

### Output Keyword Filter

Before returning any AI response to the user, the server scans for keywords that must never appear. If detected, replace with a generic fallback response.

Blocked keywords:
- Lender names: Bizcap, Fornax, OSKVI, Chocoup, Jenfi, Teck Wei, Moneymax, Funding Societies, Luxor
- Internal terms: "system prompt", "my instructions", "internal guidelines", "KEY QUALIFYING CRITERIA" (block only the verbatim prompt heading; the plain phrase "qualifying criteria" is normal lending language the assessment output may legitimately use)
- Fee specifics (verbatim-leak phrases only): "success fee of 2", "success fee of 3", "2-3% on financing", "we typically charge"
- Do NOT block bare percentages ("2%", "3%") or "success fee" on its own: Rate Check and the Term Sheet Scanner legitimately echo user-supplied rates and market ranges (e.g. "penalty interest above 2% per month"), and the public site already states that QuickFund earns a success fee. Blocking those strings would replace most valid Scanner/Rate Check outputs with the fallback.
- Any content that looks like the AI is quoting its own instructions

Fallback response: "We've assessed your situation. For specific options and rates, WhatsApp us at +65 8057 6702."

### Rate Limiting

5 requests per IP per day across all three endpoints combined. Return HTTP 429 with message: "You've reached the daily limit. WhatsApp us at +65 8057 6702 for a personal assessment."

### Input Validation

For /api/assess: each answer must match one of the predefined options from the STEPS array. Reject any freetext input.

For /api/scan and /api/rate: scan input for prompt injection patterns:
- "ignore previous instructions"
- "ignore your instructions"
- "reveal your prompt"
- "what are your instructions"
- "system prompt"
If detected, reject with: "This tool is designed to assess financing situations. WhatsApp us at +65 8057 6702 for questions about how we work."

### Lead Capture

Save to CRM/Google Sheet BEFORE calling the Claude API. The lead is captured regardless of whether the AI call succeeds. Fields to save: timestamp, contact method, WhatsApp/email, all answers (for assess) or input text (for scan/rate), IP address, user agent.

### Environment Variables (server-side only, never in frontend)

```
ANTHROPIC_API_KEY=sk-ant-...
CLAUDE_MODEL=claude-sonnet-4-20250514
```

### Hosting

Any of: Vercel (serverless functions), Railway, Render, DigitalOcean, or a simple Express.js/Flask app on any VPS. If the WordPress site is on shared hosting, deploy the API separately on Vercel or Railway and point the frontend to it via CORS.

### System Prompts

All three prompts are documented in quickfund-ai-prompts.md. These files live on the server only. Never commit them to a public repository.


## WhatsApp Number
All instances now use +65 8057 6702. Verify this is the correct business WhatsApp number before deployment.

## Before Launch Checklist
- [ ] Real WhatsApp Business account set up on +65 8057 6702
- [ ] Privacy Policy page created
- [ ] Responsible Business Promise page created
- [ ] 404 page created
- [ ] GA4 property created and tracking code installed
- [ ] Meta Pixel installed
- [ ] OG images created (main site + each guide)
- [ ] XML sitemap created and submitted to Google Search Console
- [ ] FAQ schema markup added
- [ ] Organization schema markup added
- [ ] Font preload hints added
- [ ] AI backend endpoint set up (not client-side API calls)
- [ ] SSL certificate active (should be automatic on most hosts)
- [ ] Levara Advisory Group incorporated (if using the name on the site)
- [ ] Rajiv reviews all disclaimers and the Responsible Business Promise
- [ ] Test all WhatsApp links on mobile
- [ ] Test all AI tools end-to-end
- [ ] Test contact gates (email and WhatsApp capture)
- [ ] Test guide download modals
- [ ] Test sector guide modals
- [ ] Mobile responsive check on real devices (not just browser dev tools)
