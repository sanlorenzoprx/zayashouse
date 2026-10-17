# Zayas House LLC Website

Public company and product website for **Zayas House LLC**, a Puerto Rico technology company building **StoryFactory — The Creative Intelligence System**.

The site is a dependency-free single-page application designed for Cloudflare.

## Positioning

The public hierarchy is intentionally simple:

`Zayas House LLC -> StoryFactory -> Creative Intelligence System -> GhostTown integrated use case -> Product Plugin Creation Engine scale path`

Zayas House is the technology company. StoryFactory is the flagship product. GhostTownTest is the first integrated product case used to prove StoryFactory against real product and conversion workflows.

## Included routes

- `/` — company + flagship StoryFactory overview
- `/storyfactory` — flagship product and commercial model
- `/technology` — architecture, infrastructure, and Product Plugin Creation Engine
- `/products` — flagship product + GhostTown proof environment
- `/about` — company identity and focus
- `/contact` — contact form, company email, and Copy email button
- `/support` — customer support and billing help
- `/terms` — Terms of Service
- `/privacy` — Privacy Policy
- `/refunds` — Refund and Cancellation Policy
- `/delivery` — Digital Delivery and Fulfillment Policy

## Local preview

Serve the repository with any static HTTP server. For example:

```powershell
python -m http.server 8080
```

Open `http://localhost:8080`.

## Cloudflare deployment

The repository includes `wrangler.jsonc` with static assets served from the repository root and SPA fallback enabled.

The production domain is:

`https://zayashouse.com`

## Contact form setup and deployment

The Worker handles `/api/contact`; other routes retain static SPA handling.
Cloudflare Email Service delivers inquiries to the existing verified destination
for `hello@zayashouse.com`. The private forwarding destination lives in the
`CONTACT_TO_EMAIL` Worker secret and is never returned to visitors or committed.
The email binding restricts the sender to `hello@zayashouse.com`; visitor email
is used only as Reply-To. No Resend account or API key is needed.

Before deploying:

1. Confirm the domain has Email Routing enabled and the `hello@` rule forwards
   to a verified destination in the same Cloudflare account.
2. Privately pipe that existing destination into `wrangler secret put CONTACT_TO_EMAIL`.
3. Run `node --test tests/contact.test.mjs`, `node --check app.js`, and
   `node --check worker.mjs`.
4. Use `wrangler deploy --dry-run` to verify assets and bindings.
5. Upload a candidate with `wrangler versions upload --preview-alias contact-email`.
   Test a controlled submission against the returned preview URL and confirm
   its receipt in the destination inbox before production deployment.
6. Deploy the tested revision with `wrangler deploy`; verify navigation,
   Copy email, direct /contact reload, and a production form submission.

The form is disabled with a visible email fallback if configuration is missing.
It reports submission only after Cloudflare returns a message receipt. Provider
acceptance alone does not prove inbox arrival. Failures preserve the visitor's
text. Double clicks are suppressed while sending. Native Email Service does not
provide the former Resend idempotency contract: a manual retry following an
uncertain network failure may produce a duplicate inquiry. The reference in
message text makes those duplicates identifiable; no automatic retries run.
Requests have input/body limits, origin validation, a honeypot, and per-IP rate
limiting (5 attempts per minute per Cloudflare location).

The site does not log or persist contact message content. Cloudflare processes
it for delivery and the existing destination mailbox retains received messages.
Use `wrangler dev` for local Worker development; static-only preview cannot send.
Keep credentials out of Git and static assets.

## Business information

- Legal name: Zayas House LLC
- Location: Puerto Rico, United States
- Company inquiries: hello@zayashouse.com
- Customer support: support@zayashouse.com
- Flagship product: StoryFactory
- Product category: Creative Intelligence System
- Current product status: Working MVP

## Grant / infrastructure narrative

The public technology page explains the infrastructure required to scale StoryFactory without turning the website into a grant application:

- AI/model inference
- media generation and rendering
- storage and analytics
- secure distribution infrastructure
- localization and market execution
- testing and observability

## Commercial direction

StoryFactory is being developed toward recurring creative production for businesses, including a 50-video production-package model and continuous learning from creative and product outcomes.

Exact commercial terms, pricing, delivery, and recurring billing must be disclosed in the applicable offer before purchase.

## Legal note

Policy text is a practical business template and should be reviewed for the company's final products, jurisdictions, and legal requirements before commercial launch.
