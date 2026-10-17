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

The Worker handles `/api/contact`; all other routes retain static SPA handling.
The form sends to the fixed company inbox `hello@zayashouse.com`. It uses
the visitor's email only as Reply-To, never as the authenticated sender.

Before deploying:

1. Verify a sending domain in Resend and create a sending API key.
2. Run `npx wrangler secret put RESEND_API_KEY` and enter that key privately.
3. Run `npx wrangler secret put CONTACT_FROM_EMAIL` and enter a sender address
   on that verified domain, optionally with a display name.
4. Run `node --test tests/contact.test.mjs` and `node --check app.js`.
5. Run `npx wrangler deploy` from the repository with authorized Cloudflare access.
6. Verify `/contact` loads directly, navigation and Copy email work on desktop
   and mobile, and a controlled form submission arrives in the company inbox.

The form is disabled with a visible email fallback if the delivery credentials
or rate-limit binding are missing. No message is reported submitted unless the
provider accepts it and returns a receipt. Inbox arrival still needs live verification.
Failed submissions preserve the visitor's text; retries reuse a content-bound
idempotency key. Requests have field/body limits, origin validation, a honeypot,
and Cloudflare per-IP rate limiting (5 requests per minute per location).
No contact message content is logged or stored by the site. Resend processes
the submitted name, email, subject and message for delivery under its retention
policies; the company mailbox retains received messages.

For local Worker development use `npx wrangler dev`; the static-only preview
cannot send form messages. Keep credentials out of Git and static assets.

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
