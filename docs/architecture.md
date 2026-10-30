# HARPS architecture

Release 0: static React + Vite landing page on Cloudflare Pages. No member data, authentication, database, or AI calls.

Release 1: before member data is collected, implement privacy notice and consent, secure authentication, role-based access, admin moderation, data export/deletion, audit logging, and abuse reporting. Directory visibility must be opt-in.

Release 2: AI matching through a server-side Worker. Validate input/output, protect secrets, apply rate and cost limits, keep matching opt-in and explainable, and avoid sensitive data where possible.

Engineering workflow: GitHub issues, pull requests, and CI coordinate agent roles. Required gates should include typecheck, build, unit/integration/E2E tests, accessibility, dependency and secret scanning, security review, and smoke tests. Human approval required for production deployment, spending, privacy changes, destructive migrations, and major architecture changes.
