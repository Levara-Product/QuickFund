# Handoff: QuickFund Website (quickfund.sg)

## Overview

Complete 18-page marketing + lead-generation site for QuickFund, a Singapore-based
business financing advisory: home page with three AI-powered lead tools, FAQ,
Partners, Responsible Business Promise, Privacy Policy, custom 404, and 12 sector
financing guides.

## About the design files

The files in `pages/` are **high-fidelity design references written as React
components**. They are the source of truth for layout, styling, copy, and
interaction behavior. They are close to production-ready React, but they were
adapted to run inside a design-preview environment, so DO NOT ship them verbatim.
Recreate them in the production codebase (recommended: Next.js or Astro with
static generation — see "Non-negotiable requirements" below), stripping the
preview shims listed here.

### Preview shims to strip from every page file

1. `const { useState, ... } = React;` at the top → replace with
   `import { useState, ... } from "react";`
2. `module.exports = { ComponentName };` at the bottom → replace with
   `export default ComponentName;`
3. **home.jsx only**: the `anthropicFetch()` helper at the top of the file is a
   preview stand-in. In production, the three AI tools MUST call your own backend
   endpoints (`/api/assess`, `/api/scan`, `/api/rate`) — never the Anthropic API
   from the browser. Full endpoint spec: `docs/quickfund-production-notes.md`.
   The system prompts embedded in home.jsx move server-side
   (`docs/quickfund-ai-prompts.md`) and must be deleted from frontend code.
4. Each page injects `<link>` fonts and a `<style>` block inline — hoist these
   into the document `<head>` / global stylesheet in production.

## Fidelity

**High-fidelity.** Copy, colors, typography, spacing, and all interaction states
are final (pending legal review of disclaimers). Recreate pixel-perfectly.

## Pages (18)

| Route | File |
|---|---|
| / | pages/home.jsx |
| /faq | pages/faq.jsx |
| /partners | pages/partners.jsx |
| /responsible-business-promise | pages/responsible-business-promise.jsx |
| /privacy-policy | pages/privacy-policy.jsx |
| 404 (catch-all, incl. unbuilt guide slugs) | pages/404.jsx |
| /guide/property-backed-loans | pages/guide-property-backed-loans.jsx |
| /guide/doctors-and-dentists | pages/guide-doctors-and-dentists.jsx |
| /guide/trading-companies | pages/guide-trading-companies.jsx |
| /guide/tech-companies | pages/guide-tech-companies.jsx |
| /guide/startups | pages/guide-startups.jsx |
| /guide/e-commerce | pages/guide-e-commerce.jsx |
| /guide/software | pages/guide-software.jsx |
| /guide/f-and-b | pages/guide-f-and-b.jsx |
| /guide/construction | pages/guide-construction.jsx |
| /guide/logistics | pages/guide-logistics.jsx |
| /guide/professional-services | pages/guide-professional-services.jsx |
| /guide/retail | pages/guide-retail.jsx |

Filenames match the canonical slugs. 301 redirects required:
`/guide/doctors-dentists` → `/guide/doctors-and-dentists`;
`/guide/f&b` → `/guide/f-and-b`.

Internal links in the files use absolute `https://quickfund.sg/...` URLs —
convert to relative routes in the production router.

## Design tokens

Defined as the `C` object at the top of every file:

- `orange  #FD5026` — primary accent, CTAs (brand ramp also has #FD8926, #FDCB26 — used sparingly)
- `black   #0D0D0D` — text, dark sections, footers
- `offwhite #FAF8F5` — page background
- `cream   #F2EDE6` — card / callout background
- `grey    #94918C` — secondary text
- `greyLight #E8E5E0` — borders, dividers, disabled
- WhatsApp green `#25D366` — WhatsApp buttons only

Typography (Google Fonts, self-host in production — see production notes):
- **Poppins** 700/800 — headings, buttons, labels (uppercase micro-labels at 10px / 2px letter-spacing)
- **Figtree** 400/500/600 — body text
- Hero h1: 52px desktop → 34px ≤768px → 28px ≤480px, weight 800, -1px letter-spacing

Spacing/radius conventions: cards 10–14px radius, buttons 7–8px, section padding
40–50px vertical, content max-widths 1100px (home), 720px (guides), 680–900px
(other pages). The logo is the inline `Bolt` SVG component (in every file).

## Interactions & behavior

- **Three AI tools** (home, tabbed): Loan Check-Up (10-step wizard), Term Sheet
  Scanner (textarea, min 30 chars), Rate Check (3 fields). All flow:
  input → contact gate (WhatsApp or email, with AI-processing + privacy consent
  notice) → POST to backend → color-coded result cards parsed from
  `GOOD:/WATCH:/VERDICT:/NEXT:` (and `RED FLAG:/AMBER:/OK:/MISSING:/BOTTOM LINE:`)
  prefixes → result footer disclaimer + WhatsApp CTA. Lead is saved server-side
  BEFORE the AI call.
- **Guide download modals**: every guide + home. Contact gate with consent line →
  "On its way" confirmation. Leads to CRM.
- **Floating WhatsApp button** on every page (bottom-right, pulses 5s on home).
- **FAQ accordions**: native `<details>` elements; category sidebar on /faq
  (sticky, stacks on mobile).
- **Sticky navs** with backdrop blur; home has a hamburger mobile menu.
- Smooth-scroll for in-page anchors (#tools, #partners, #faq) with ~70px offset
  for the sticky nav.
- Responsive: all grids collapse at 768px (and stats at 480px) via the
  class-based media queries in each file's `<style>` block.

## State management

All state is local component state (React useState). No global store needed.
Only network calls: the three AI endpoints + lead capture (both server-side).

## Non-negotiable requirements

1. **Static pre-rendering (SSG).** Every page's full text must be in the initial
   HTML response. AI crawlers don't execute JS. See `docs/quickfund-llm-audit.md`.
2. **AI backend server-side** with keyword output filter, prompt-injection input
   filter, rate limiting (5/IP/day), and lead capture. Full spec in
   `docs/quickfund-production-notes.md`; prompts in `docs/quickfund-ai-prompts.md`
   (server-only, never in a public repo).
3. **Deploy `seo/robots.txt`, `seo/llms.txt`, `seo/sitemap.xml`** to the site
   root, and implement per-page titles/meta/schema from
   `seo/seo-head-snippets.md` (includes viewport meta, canonical tags, OG spec).
4. `<meta name="viewport" content="width=device-width, initial-scale=1">` on all pages.
5. Keep all disclaimers verbatim (footers, guide disclaimers, AI gate/result
   notices, PDPA consent lines). They pass a deliberate compliance posture:
   not a lender, not a licensed financial adviser, AI output is not advice,
   inputs are processed by third-party AI services (do NOT name the provider).

## Assets

- Logo: inline `Bolt` SVG component (no external asset).
- Brand guide: `docs/Quickfund-brand-guide.pdf` (note: site intentionally uses
  Poppins headings + Figtree body; brand colors match).
- OG images still to be created (1200×630 main + one per guide) — spec in
  production notes.
- No photography/imagery used anywhere; the design is deliberately typographic.

## Launch checklist

See the "Before Launch Checklist" in `docs/quickfund-production-notes.md`, plus
the checklist at the bottom of `seo/seo-head-snippets.md`. Outstanding items
beyond code: GA4 + Meta Pixel IDs, OG images, WhatsApp Business verification on
+65 8057 6702, legal review of all disclaimers and the privacy policy (PDPA),
and building or removing the blog (footer links to it were removed for launch).

## Revision notes (10 Jul 2026)

- All guide links (home sector grid, home footer, guide-page "Explore other
  sectors" pills, guide-page footers) are now generated from a canonical
  `GUIDE_SLUGS` label->slug map defined near the top of each file — display
  labels are no longer slugified. This fixes five broken sector-grid links on
  the home page ("E-commerce and Product Manufacturers", "Software Companies",
  "F&B and Hospitality", "Construction and Contractors", "Logistics and
  Transport") and the home-footer `/guide/f&b` link. Keep the two 301 redirects
  above as a safety net for external links.
- Footer guide lists standardised to all 12 guides on every guide page; the
  Doctors and Dentists page now has the same footer nav section as its siblings.
- 404 and Privacy Policy font links corrected: Syne -> Poppins (headings were
  already styled as Poppins).
- Docs updated: the output keyword filter no longer blocks bare percentages
  (Rate Check / Scanner outputs legitimately contain them — see production
  notes), the font-performance section now references Poppins, and the sitemap
  section points at the complete `seo/sitemap.xml`.
