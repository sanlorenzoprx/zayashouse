# Zayas House LLC Website

Executive company website and policy center for Zayas House LLC. The site is a dependency-free single-page application designed for Cloudflare Pages.

## Included routes

- `/` — company homepage
- `/products` — products coming to market and in development
- `/about` — business description and identity
- `/support` — customer support and billing help
- `/terms` — Terms of Service
- `/privacy` — Privacy Policy
- `/refunds` — Refund and Cancellation Policy
- `/delivery` — Digital Delivery and Fulfillment Policy

## Cloudflare Pages deployment

1. In Cloudflare, open **Workers & Pages**.
2. Select **Create application → Pages → Import an existing Git repository**.
3. Choose `sanlorenzoprx/zayashouse`.
4. Configure:
   - Production branch: `main`
   - Framework preset: `None`
   - Build command: `exit 0` (or leave blank)
   - Build output directory: `/`
5. Deploy.
6. Under **Custom domains**, connect `zayashouse.com` and optionally redirect `www.zayashouse.com` to the apex domain.

The `_redirects` file enables History API routes to load directly on Cloudflare Pages.

## Local preview

Serve the repository with any static HTTP server. For example:

```powershell
python -m http.server 8080
```

Open `http://localhost:8080`.

## Business information used

- Legal name: Zayas House LLC
- Location: Puerto Rico, United States
- Support: support@zayashouse.com

## Before submitting to Stripe

- Deploy the site to the exact domain entered in Stripe.
- Confirm every route loads without a password or regional block.
- Confirm `support@zayashouse.com` receives mail and is monitored.
- Ensure Stripe's business description and statement descriptor match the website and checkout products.
- Show the exact price, currency, deliverable, delivery timing, and recurring billing terms on every checkout/product offer.
- Add a business phone number only after a dedicated number is active and monitored; it is intentionally omitted from this version.

Policy text is a practical business template and should be reviewed for the company's final products and legal requirements before launch.
