# QuickFund — LLM Discoverability & Site Audit (July 2026)

## Part 1: Is this site discoverable by LLMs?

**Short answer: not as currently built. This is the single biggest production risk after the API key issue.**

### The critical problem: client-side rendering

The site is client-side React. The HTML that a crawler receives is an empty shell —
all copy (headlines, guides, FAQ answers) only exists after JavaScript runs.

- Googlebot renders JS, so classic Google SEO mostly survives.
- **AI crawlers largely do NOT execute JavaScript**: GPTBot (ChatGPT), ClaudeBot,
  PerplexityBot, CCBot (Common Crawl, feeds many training sets), Bytespider.
  To them, quickfund.sg is a blank page. The site will not be cited or
  recommended by AI assistants — which is exactly where "best loan advisor
  Singapore"-type questions are increasingly asked.

**Fix (non-negotiable for the production build): pre-render every page to static
HTML.** All content is static prose, so this is easy — build with Next.js SSG /
Astro, or export plain HTML. The React interactivity (AI tools, modals, accordions)
can hydrate on top. Instruct Claude Code: "every page must contain its full text
content in the initial HTML response."

### Second: crawler access policy (robots.txt)

Explicitly allow the AI crawlers you want (default robots.txt silence is OK, but be
deliberate — many hosts/WAFs block these bots by default; check Cloudflare settings):

```
User-agent: GPTBot
Allow: /
User-agent: ClaudeBot
Allow: /
User-agent: PerplexityBot
Allow: /
User-agent: Google-Extended
Allow: /
Sitemap: https://quickfund.sg/sitemap.xml
```

### Third: llms.txt

Emerging convention, cheap to add. Create `https://quickfund.sg/llms.txt`:
a short markdown file saying what QuickFund is, what it does/doesn't do
(not a lender; advisory across 8 markets), and linking each sector guide with a
one-line description. Mirrors the sitemap but written for machine reading.

### Fourth: make Bing happy

ChatGPT search and several assistants pull from Bing's index. Submit the sitemap to
**Bing Webmaster Tools**, not just Google Search Console.

### What's already LLM-friendly (keep it)

- FAQ content is literally in Q&A form — ideal for answer engines. Add the
  FAQPage schema (already spec'd in production notes) so it's machine-labelled.
- Guides have clear H1/H2 hierarchy and direct, factual prose with numbers
  (LTV, TDSR, rates) — highly quotable.
- One page per intent (per sector) with descriptive URLs.

### Additions to the schema plan

Production notes already spec FAQPage + Organization. Add:
- `FinancialService` type on the Organization (areaServed already listed).
- `Article` schema on each guide (headline, datePublished, author = QuickFund).
- `BreadcrumbList` on guides (Home → Guides → Retail).
- Unique `<title>`/`<meta description>` per page, phrased the way people ask:
  e.g. "Business Loans for F&B in Singapore — rates, options, pitfalls (2026)".

## Part 2: Full site re-audit

### Fixed in this handoff revision (10 Jul 2026)
- **Home sector grid: 5 of 12 guide links were broken.** The grid slugified its
  long display labels ("F&B and Hospitality" -> /guide/f-and-b-and-hospitality,
  similarly E-commerce/Software/Construction/Logistics), landing on the 404.
  All guide links on every page now come from a canonical `GUIDE_SLUGS`
  label->slug map defined near the top of each file; no slugs are derived from
  display text anymore.
- **Home footer: "F&B" generated /guide/f&b** (its slugify lacked the `&` rule).
  Fixed by the same map.
- **Footer guide lists standardised**: every guide page footer now lists all 12
  guides (previously 9, omitting Logistics / Professional Services / Retail),
  and the Doctors and Dentists page, whose footer was missing the nav section
  entirely, now carries the same one as its siblings.
- **404 + Privacy Policy loaded the Syne font file** while styling headings as
  Poppins; both now load Poppins 700/800.
- **Output keyword filter narrowed**: bare "2%"/"3%" removed from the blocklist
  (Rate Check and the Term Sheet Scanner legitimately echo percentages);
  replaced with verbatim-leak phrases only. Details in production notes.
- **Production notes updated**: font section Syne -> Poppins; stale single-guide
  sitemap template replaced with a pointer to the complete seo/sitemap.xml.

### Fixed this round
- "Thailand SET" removed from both mentions (hero trust bar + FAQ answer) — now
  "Nasdaq, SGX, and London AIM".
- Headings switched Syne → Poppins (per brand book); tracking relaxed.
- Responsible Business Promise: hero/first-divider whitespace tightened.

### Still open before launch (carried from production notes)
1. **API key must move server-side** — the three endpoints (/api/assess, /api/scan,
   /api/rate) with keyword filter, rate limiting, lead capture. Spec is complete.
2. GA4 + Meta Pixel IDs.
3. OG images (main 1200×630 + one per guide).
4. Privacy Policy legal review (PDPA) + Rajiv's disclaimer review.
5. WhatsApp Business verified on +65 8057 6702.
6. ~~sitemap.xml — add all 12 guide URLs~~ ✓ Done: seo/sitemap.xml contains all
   17 URLs including every guide, and the stale template in the production notes
   now points to it.
7. ~~Blog is linked in every footer but doesn't exist~~ ✓ Done: no page links to
   /blog (footer blog links were removed for launch); building a blog remains an
   optional post-launch item.
8. "Levara Advisory Group" appears in every footer + schema — confirm the entity
   is incorporated before launch (flagged in notes, still open).

### Content consistency notes
- ✓ Footer guide lists standardised: every guide page footer now lists all 12
  guides, and the Doctors and Dentists page (which had no footer nav section)
  now carries the same one as its siblings.
- ✓ Guide slugs locked via the canonical `GUIDE_SLUGS` map in every file;
  display labels are no longer slugified. (Correction to the earlier note: the
  home page already generated `doctors-and-dentists` correctly — the live bugs
  were the five long-label sector-grid slugs and the footer `f&b` link, all now
  fixed. Keep the `/guide/doctors-dentists` and `/guide/f&b` 301s as a safety
  net for any external links.)
- All pages consistently use +65 8057 6702 and leslie@quickfund.sg. ✓
