# Launch checklist — quickfund.sg

Ordered. Items marked (Zoe) are developer tasks; (Leslie) are founder tasks.

## 1. Secrets and access (do first)

- [ ] (Leslie) Generate the admin token: `openssl rand -base64 32`. Store it in
      a password manager. Never send it over plain chat/email.
- [ ] (Zoe) Set production env vars. AI provider — pick one:
      OpenRouter: `OPENROUTER_API_KEY` + `OPENROUTER_MODEL`
      (slug form, e.g. `anthropic/claude-sonnet-4.6`), or
      Anthropic direct: `ANTHROPIC_API_KEY` + `CLAUDE_MODEL`.
      Plus `ADMIN_TOKEN`, `LEAD_WEBHOOK_URL` (step 2), optional `SITE_URL`.
      Ensure `AI_MOCK` is NOT set in production.
- [ ] (Leslie) Turn on 2FA for: hosting account, domain registrar, Google
      account that owns the lead Sheet, Anthropic console. The hosting and
      registrar accounts are now effectively the site's security boundary.

## 2. Lead pipeline

- [ ] (Leslie) Create the lead destination (Google Sheet via Apps Script
      webhook, or Zapier/Make into the CRM). Set the Sheet's sharing to
      specific accounts only — never "anyone with the link". This is the
      single most likely leak vector in the whole system.
- [ ] (Zoe) Point `LEAD_WEBHOOK_URL` at it and send a test lead + AI run;
      confirm both the lead row and the linked `ai-result` row arrive.
- [ ] (Leslie) Check `/admin` with the token: leads and AI results visible.

## 3. Pre-cutover technical (Zoe)

- [ ] `npm run build`, then run `scripts/verify.py` against the production
      build with `AI_MOCK=1` and `ADMIN_TOKEN` set — all 50 checks green.
- [ ] One real-key smoke test per tool (assess, scan, rate) with `AI_MOCK`
      off; sanity-check response quality and that results persist.
- [ ] Crawl the OLD site (quickfund.sg is currently WordPress) and export all
      indexed URLs, especially `/blog/*`. Add 301s for each to the closest
      new page (blog posts → most relevant guide or `/`). The new build ships
      redirects only for `/guide/doctors-dentists` and `/guide/f&b`.
- [ ] Drop OG images into `public/`: `/og-image.jpg` (1200×630) and
      `/og-guide-<slug>-guide.jpg` per guide (paths already referenced in
      metadata).

## 3b. If an AI tool says "Couldn't generate"

- [ ] (Zoe) Open `/api/admin/health` with the admin token:
      `curl -H "Authorization: Bearer $ADMIN_TOKEN" https://<site>/api/admin/health`
      It reports whether the API key is set, which model is configured, and —
      if a key is present — the real upstream status and error from Anthropic
      (invalid key, unknown model name, out of credit, etc). It never returns
      secret values.
- [ ] (Zoe) Vercel > Logs also shows the exact upstream error, logged as
      `assess AI call failed: Anthropic API <status>: <body>`.
- [ ] Most common causes: ANTHROPIC_API_KEY missing on the deployment; an
      outdated CLAUDE_MODEL string; no credit on the Anthropic account.

## 4. Cutover

- [ ] (Zoe) Deploy, point DNS, confirm HTTPS.
- [ ] (Zoe) Verify with curl (no JS): full text present on `/`, one guide,
      `/robots.txt`, `/llms.txt`, `/sitemap.xml`; legacy redirects fire.
- [ ] (Zoe) Submit `sitemap.xml` to Google Search Console AND Bing Webmaster
      Tools (AI assistants lean on Bing's index).
- [ ] (Zoe) If behind Cloudflare/WAF: confirm GPTBot, ClaudeBot,
      PerplexityBot, CCBot are not blocked at that layer.

## 5. Legal and claims (Leslie)

- [ ] Forward `LAWYER-BRIEFING.md` + repo access to Singapore counsel; apply
      their edits (should be small — the heavy derisking is done).
- [ ] WhatsApp Business verification on +65 8057 6702.
- [ ] The "Trusted by listed companies..." trust bar was restored on your
      confirmation that listed clients exist. Keep engagement evidence on
      file in case the claim is ever challenged.

## Standing operational rule (this is now a promise on the site)

- [ ] (Leslie) Every AI-tool lead gets their assessment copy sent via their
      chosen channel (it's word-for-word in /admin and your Sheet), and every
      guide request gets the guide — personally, usually within one working
      day. The gate and result screens now say exactly this, so keeping it is
      what makes the wording honest.

## 6. First two weeks after launch

- [ ] (Leslie) Set `NEXT_PUBLIC_GA4_ID` (+ Meta Pixel if used) and watch:
      Check-Up starts vs completions, Scanner/Rate usage, WhatsApp clicks,
      guide-gate conversions. Let this data drive any further simplification
      of the home page — measure before redesigning.
- [ ] (Zoe) Check `/admin` and server logs for filtered outputs
      ("output blocked" warnings) and 429s; tune rate limit if legitimate
      users hit it.
- [ ] (Leslie) Review the first real AI results for tone/accuracy; adjust
      prompts in `lib/prompts.js` if needed (server restart applies them).
