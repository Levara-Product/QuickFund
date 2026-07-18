# Briefing for legal review — quickfund.sg relaunch

Prepared 17 Jul 2026. Purpose: make counsel's review fast by listing exactly
what the site claims, what has already been de-risked, and the specific
questions we need answered. The full copy is in this repository
(`components/pages/*.jsx`); the live preview can be run with `npm install &&
npm run dev`.

## What QuickFund is (as presented on the site)

Business financing advisory / brokerage, Singapore-incorporated (QuickFund Pte
Ltd), operating across 8 markets. Explicitly **not a lender** and **not
presented as a licensed financial adviser**. Revenue: success fee on disbursed
facilities (introductions free to the client); separately-scoped advisory work
(restructuring, capital stack review) for an upfront fee agreed in writing.
Three AI tools generate automated general information from user inputs, each
carrying a "not financial advice" disclaimer. The home page also mentions capital raising beyond debt, worded as
referral-only: "For equity, convertibles, or structured deals, we introduce
you to appropriately licensed or specialist parties — that work is carried
out by them, not by us."

## De-risking already done (please confirm sufficiency)

1. **Responsible Business Promise** (`/responsible-business-promise`):
   rewritten from absolute future promises ("we will never/always") into
   present-tense statements of practice with opinion qualifiers ("if we
   think..."), a scope note stating it is a values statement and not advice, a
   warranty, or a contractual term, and no past-tense factual claims.
2. **Confidentiality**: the Promise's "never share with anyone" absolute now
   carries carve-outs for jointly-approached lenders (with client knowledge),
   service providers under confidentiality obligations, and legally required
   disclosure, and defers to the Privacy Policy.
3. **Term-sheet review language**: described as a second pair of eyes,
   explicitly "not legal advice", with an instruction to have the client's own
   lawyer review facility agreements before signing.
4. **Advice-flavoured language**: "recommend" replaced sitewide with
   "introduce / put in front of you"; no language directing clients to act.
5. **AI tools**: pre-run consent notice (third-party AI processing, not
   financial advice, Privacy Policy link, and a warning not to include
   sensitive identifiers with an "at your own risk, to the extent permitted by
   law" clause); the same warning appears on the term-sheet paste box and as a
   clause in the Privacy Policy. Results screens repeat the not-advice
   disclaimer.
6. **Marketing claims**: superlatives removed or qualified; the trust bar client claim ("Trusted by
   listed companies...") is retained on the founder's confirmation that
   listed-company clients exist — engagement evidence to be kept on file; no unverifiable
   past-tense claims remain; no "lowest fees" style claims (the outgoing
   WordPress site contains "lowest fees in the market" — that site is being
   replaced).
7. **Sector guides** (12): educational content, each ending with a prominent
   risk disclaimer (borrowing risks, sole responsibility, not advice).
8. **Site-wide footer disclaimer** on every page.

## Specific questions for counsel

1. Is the Promise page, as now worded, adequately reconciled with the
   site-wide disclaimer (no advice, own due diligence)? Any residual clauses
   that could found an assumed duty of care or misrepresentation claim?
2. Licensing perimeter: does anything on the site — particularly the loan
   brokerage description, the "capital advisory" services (debt restructuring,
   capital stack review), or the capital-raising referral line
   (reworded 17 Jul so QuickFund only introduces to licensed/specialist
   parties and does not arrange these itself) — engage MAS licensing
   requirements (FAA/SFA) or moneylending regulations as drafted? Please
   confirm the referral-only wording keeps this outside the perimeter.
3. PDPA: is the Privacy Policy adequate for (a) AI processing of user inputs
   by an overseas third-party API, (b) the "information you choose to submit
   at your own risk" clause — is it enforceable as drafted, and does it need
   tightening, (c) lead retention periods and the stated rights?
4. Is the fee description ("success fee only when a facility is disbursed";
   possible fees from lenders for successful introductions, with an intent to
   be transparent about client-side fees) sufficient disclosure, or should
   lender-side fee arrangements be disclosed more specifically?
5. Marketing standards: any remaining copy that would concern you under
   Singapore advertising/consumer-protection norms for financial-adjacent
   services (noting clients are businesses, not consumers)?
6. Anything required to be displayed that currently isn't (entity details,
   registration numbers, mandated statements)?

## Where things live

- Promise: `components/pages/ResponsiblePromise.jsx`
- Privacy Policy: `components/pages/PrivacyPolicy.jsx`
- Footer disclaimer + AI tool notices: `components/pages/QF.jsx`
- Guide disclaimers: end of each `components/pages/*Guide.jsx`
- The AI system prompts (internal, not user-facing): `lib/prompts.js`
