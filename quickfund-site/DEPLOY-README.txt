QUICKFUND — COMPLETE SITE (2026-07-19)

This is the FULL project, not a patch. Everything needed to build and deploy.

IMPORTANT: the files sit at the ROOT of this archive (package.json is at the
top level, not inside a subfolder). When you unzip it, package.json must end
up directly in the folder Vercel builds from.

If you are recovering from a 404:
  The 404 means the deployment contained no pages. Two usual causes:
    a) A PATCH zip (6 files, no app/page.jsx) was deployed as the whole site.
    b) A full zip was unzipped into a parent folder, so Vercel's Root
       Directory pointed one level above package.json.
  Fix: deploy THIS archive's contents so package.json is at the build root,
  and in Vercel > Settings > Build & Deployment, leave Root Directory blank
  (or set it to the folder containing package.json).

DEPLOY
  npm install
  npm run build        # should end with "Generating static pages (27/27)"
  npm run start        # local check on :3000

ENV VARS (Vercel > Settings > Environment Variables)
  ANTHROPIC_API_KEY    required for live AI (or set AI_MOCK=1 to demo)
  ADMIN_TOKEN          enables /admin lead viewer (long random string)
  LEAD_WEBHOOK_URL     where leads are POSTed (Sheet/CRM) - durable store on Vercel
  NEXT_PUBLIC_GA4_ID   optional analytics
  AI_MOCK              must be UNSET in production

INCLUDES ALL FIXES TO DATE
  - footer nav on every page
  - API routes export maxDuration = 60 (Vercel's 10s default was killing the
    Claude call and returning a 504 the browser swallowed)
  - client fails loud: timeouts/non-JSON responses now show a readable message
  - "Loan Check-Up - Start Here" restarts the wizard (was a no-op)
  - result screen states when the copy arrives, naming channel + address

VERIFY (58 checks)
  npm run build
  rm -rf data && AI_MOCK=1 ADMIN_TOKEN=test npm run start &
  ADMIN_TOKEN=test python3 scripts/verify.py

Keep this repository PRIVATE: lib/prompts.js contains internal AI prompts.
