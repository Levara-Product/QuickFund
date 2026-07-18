# QuickFund — Production Site (quickfund.sg)

Next.js (App Router) build of the QuickFund design handoff. Every content page
is **statically pre-rendered**: the full text of each page is in the initial
HTML response, so AI crawlers (GPTBot, ClaudeBot, PerplexityBot, CCBot) and
search engines see everything without executing JavaScript. React hydrates on
top for the interactive parts (AI tools, modals, accordions, mobile menu).

> **KEEP THIS REPOSITORY PRIVATE.** `lib/prompts.js` contains QuickFund's
> internal AI system prompts (lender knowledge, fee logic). They must never
> appear in a public repo or in frontend code.

## Quick start

```bash
npm install
cp .env.example .env.local        # fill in values (see below)
npm run dev                       # http://localhost:3000
```

To try the AI tools **without an Anthropic API key**, set `AI_MOCK=1` — the
three endpoints return canned, correctly-formatted responses so the whole
pipeline (validation, rate limiting, lead capture, output filter, result UI)
can be exercised end to end.

Production:

```bash
npm run build && npm run start
```

## Environment variables

Server-side only (never exposed to the browser):

- `ANTHROPIC_API_KEY` — required for real AI responses.
- `CLAUDE_MODEL` — defaults to `claude-sonnet-4-6`.
- `LEAD_WEBHOOK_URL` — optional; every lead is POSTed here as JSON. Point it at
  a Zapier/Make webhook or a Google Apps Script that appends to a Sheet/CRM.
  Leads are also appended to `data/leads.jsonl` on disk (dev convenience;
  ephemeral on serverless hosts, so use the webhook in production).
- `AI_MOCK` — set to `1` for canned AI responses (testing only).

Public:

- `NEXT_PUBLIC_GA4_ID` — GA4 measurement ID; the gtag snippet renders only when set.
- `NEXT_PUBLIC_META_PIXEL_ID` — Meta Pixel ID; same behaviour.

## Architecture

- `components/pages/*.jsx` — the 18 design-reference pages, converted to client
  components: preview shims stripped, fonts hoisted, internal links made
  relative, and the three AI tools rewired from the browser-side preview stub
  to the real backend endpoints. Layout, styling and copy are otherwise
  untouched (the handoff's copy is final pending legal review).
- `app/**/page.jsx` — thin server wrappers adding per-page `<title>`, meta
  description, canonical URL and Open Graph tags (from
  `seo/seo-head-snippets.md`), plus JSON-LD: FinancialService/Organization
  site-wide, FAQPage on `/` and `/faq` (extracted from the actual page content
  at build time — no hand-maintained duplicate), Article + BreadcrumbList on
  each guide.
- `app/api/{assess,scan,rate}/route.js` — the three AI endpoints. Pipeline per
  the production notes: **validate input → rate limit → save lead → call
  Claude → output keyword filter → return**. Specifics:
  - `/api/assess`: every answer must exactly match a predefined option from
    `lib/assessOptions.js` (shared with the client wizard) — no freetext ever
    reaches the model.
  - `/api/scan` and `/api/rate`: length caps plus a prompt-injection input
    filter with the verbatim rejection message from the spec.
  - Rate limit: 5 requests/IP/day combined across all three endpoints
    (verbatim 429 message). In-memory — correct on a single long-lived server
    (Railway, Render, VPS, Docker); on serverless it's best-effort per
    instance, so swap in Upstash/Redis there (one function in
    `lib/rateLimit.js`).
  - Lead capture happens **before** the AI call and never fails the request.
  - Output filter (`lib/aiGuard.js`): blocks lender names and verbatim
    prompt-leak phrases, replaced with the generic fallback. It deliberately
    does **not** block bare percentages — Scanner/Rate Check outputs
    legitimately contain them.
- `app/api/lead/route.js` — guide-download lead capture. All 14 download
  gates (the home lead magnet, the home sector modal, and every guide page)
  POST here; in the design handoff these were preview stubs that only
  `console.log`-ed the lead. Contact is validated server-side, the lead records
  which guide was requested, and it uses its own rate bucket (10/day/IP) so
  downloading a guide never consumes a visitor's AI-tool quota. Fulfilment
  (actually sending the guide) is manual for now — leads land in the same
  webhook/JSONL sinks as the AI tools.
- AI results are persisted: after each tool run, the exact text the prospect
  saw is written to the same lead sinks (webhook + `data/leads.jsonl`) as an
  `ai-result` record linked to the lead by id — so follow-up conversations have
  full context. A token-gated viewer lives at `/admin` (set `ADMIN_TOKEN` to a
  long random string to enable; page is noindexed and the API rejects requests
  without the bearer token). On serverless hosts the local JSONL is ephemeral,
  so the webhook destination remains the durable record. If more people than
  the founder need access, replace the shared token with real auth.
- `middleware.js` — the `/guide/f&b → /guide/f-and-b` legacy redirect (a
  literal `&` can't be matched in `next.config` redirects);
  `/guide/doctors-dentists` is redirected in `next.config.mjs`. Both are 308
  (the modern permanent redirect; Google/Bing treat it exactly like 301).
- Fonts: Poppins + Figtree **self-hosted** via `@fontsource` (no
  fonts.googleapis.com requests), matching the production notes.
- `public/` — `robots.txt`, `llms.txt`, `sitemap.xml` deployed at the site
  root, verbatim from the handoff's `seo/` folder.
- Unbuilt guide slugs (and anything else unknown) land on the custom 404,
  which points to the AI Loan Check-Up and WhatsApp, per spec.
- Favicon: the brand bolt as `app/icon.svg` (auto-linked by Next).

## Verification

`scripts/verify.py` runs 43 checks against a running build: crawler-view
fetches of all 17 routes (full text, title, canonical, viewport, JSON-LD, size
thresholds), SEO root files, both legacy redirects, self-hosted font bundling,
the full API pipeline in mock mode (valid runs, tampered input, injection,
rate-limit 429, contact validation), lead capture, and unit checks on the
output filter, and the guide-download lead endpoint. All 43 pass on this build:

```bash
npm run build
rm -rf data && AI_MOCK=1 npm run start &
python3 scripts/verify.py
```

## Deploying

Any Node host works: Vercel, Railway, Render, or a VPS/Docker running
`npm run build && npm run start`. On serverless (Vercel), note the two caveats
above: use `LEAD_WEBHOOK_URL` (disk is ephemeral) and consider a shared store
for the rate limiter. If the site sits behind Cloudflare or a WAF, confirm the
AI crawlers welcomed in `robots.txt` aren't being blocked at that layer.

After deploy: submit `sitemap.xml` to **Google Search Console AND Bing
Webmaster Tools** (ChatGPT search and several assistants pull from Bing).

## Deviations from the design reference

- 17 Jul: hero free-guide trigger promoted from a 12px text link to an
  outlined orange CTA button ("Get The Free Guide: ...") per developer
  feedback — the link didn't read as an action that opens the download form.

- 17 Jul: full legal-derisk pass. The Responsible Business Promise rewritten
  from absolute future promises ("we will never/always...") into present-tense
  statements of practice with opinion qualifiers, a required-by-law carve-out
  on confidentiality, "not legal advice, use your own lawyer" language on term
  sheet review, and a strengthened scope note (values statement, not advice or
  warranty). Sitewide: "recommend" language replaced with "introduce/put in
  front of you", "read every clause" and "answer WhatsApp at 11pm" style
  service absolutes softened, "best terms" superlatives qualified, and the
  Property guide's "we will never encourage" absolute removed.
- 17 Jul: sensitive-data warnings added — the Term Sheet Scanner and the
  pre-run consent gate now tell users to leave out personal identifiers and
  state that included information is submitted at their own risk (qualified
  "to the extent permitted by law"); matching clause added to the Privacy
  Policy. Note: this disclaims responsibility for what users *choose to
  include*; it does not — and legally cannot — remove the PDPA duty to
  safeguard whatever data is actually received and stored.
- 17 Jul: home tools card restructured for clarity — Loan Check-Up is the
  single primary tool ("Start Here"), with Term Scanner and Rate Check grouped
  under "Already have an offer?" as secondary pills. Hero secondary CTA
  relabelled "Run the Free Loan Check-Up".

## Still outstanding (needs a human)

- `ANTHROPIC_API_KEY` in the production environment.
- GA4 property + Meta Pixel IDs.
- OG images: `/og-image.jpg` (1200×630) and `/og-guide-<slug>.jpg` per guide —
  the meta tags already reference these paths; drop the files into `public/`.
- WhatsApp Business verification on +65 8057 6702.
- Legal review: all disclaimers, Responsible Business Promise, Privacy Policy
  (PDPA) — copy is rendered verbatim from the handoff pending this review.
- Confirm "Levara Advisory Group" is incorporated (named in footers + schema).
- Choose the lead sink (`LEAD_WEBHOOK_URL`) and test end to end.
- ~~Substantiation of factual claims~~ Resolved 17 Jul: the Promise's
  past-tense claims ("We have turned clients away...") were removed and
  replaced with stance language, and the trust bar's "Trusted by listed companies..." line was restored after
  the founder confirmed listed-company clients exist (keep engagement evidence
  on file). The capital-raising mention was reworded to referral-only so the
  site does not present QuickFund as arranging equity/convertible deals
  itself.
- See `LAWYER-BRIEFING.md` (ready to forward to counsel) and
  `LAUNCH-CHECKLIST.md` (ordered ops/security steps) — these operationalise
  the two remaining human items.
- Final counsel pass on the Promise and disclaimers is still recommended —
  this derisk pass is thorough but is not legal certification.
- Decide whether to build the blog post-launch (no links to it exist today).
