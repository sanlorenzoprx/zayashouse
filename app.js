const supportEmail = 'support@zayashouse.com';
const companyEmail = 'hello@zayashouse.com';
const effectiveDate = 'July 30, 2026';

const policyHero = (eyebrow, title, summary) => `
  <section class="page-hero"><div class="shell">
    <p class="eyebrow">${eyebrow}</p><h1>${title}</h1><p>${summary}</p>
  </div></section>`;

const capabilityCard = (code, title, body) => `
  <article class="capability-card">
    <span class="capability-code">${code}</span>
    <h3>${title}</h3>
    <p>${body}</p>
  </article>`;

const proofItem = (value, label) => `
  <div class="proof-item"><strong>${value}</strong><span>${label}</span></div>`;

const pages = {
  '/': () => `
    <section class="hero hero-home">
      <div class="shell hero-grid">
        <div>
          <p class="eyebrow">Zayas House LLC Â· Puerto Rico technology company</p>
          <h1>We build the system that turns products into stories that learn.</h1>
          <p class="hero-lede">StoryFactory is our flagship technology: a Creative Intelligence System that understands a product, decides what is worth saying, creates media, distributes it, and learns from performance.</p>
          <div class="actions">
            <a class="button button-primary" href="/storyfactory" data-link>Explore StoryFactory</a>
            <a class="button button-secondary" href="/technology" data-link>See the technology</a>
          </div>
        </div>
        <aside class="hero-card hero-proof">
          <span class="status status-live">Working MVP</span>
          <strong>StoryFactory â€” The Creative Intelligence System</strong>
          <p>Built by Zayas House LLC and being proven through real product workflows, beginning with GhostTownTest.</p>
          <div class="mini-pipeline" aria-label="StoryFactory workflow">
            <span>Product</span><i>â†’</i><span>Story</span><i>â†’</i><span>Media</span><i>â†’</i><span>Distribution</span><i>â†’</i><span>Learning</span>
          </div>
        </aside>
      </div>
    </section>

    <section class="proof-strip" aria-label="Company and product proof">
      <div class="shell proof-grid">
        ${proofItem('Working MVP', 'Current product status')}
        ${proofItem('EN / ES', 'Bilingual foundation')}
        ${proofItem('5 platforms', 'Distribution architecture')}
        ${proofItem('Puerto Rico', 'Built in the United States')}
      </div>
    </section>

    <section class="section section-white">
      <div class="shell">
        <div class="section-heading">
          <div>
            <p class="eyebrow">Flagship technology</p>
            <h2>StoryFactory is not a video generator. It is a creative decision system.</h2>
          </div>
          <p>It learns what to notice, what story pattern exists, which format fits, how deep the story should go, and what actually produces attention and business action.</p>
        </div>
        <div class="grid-4">
          ${capabilityCard('01', 'Product Intelligence', 'Understands what is being sold, who it serves, the pain it solves, the offer, the proof, and the constraints.')}
          ${capabilityCard('02', 'Creative Intelligence', 'Chooses the story opportunity, hook, depth, scene structure, pacing, persuasion, and media plan.')}
          ${capabilityCard('03', 'Distribution Intelligence', 'Adapts creative for platform, language, market, account, timing, and controlled publishing.')}
          ${capabilityCard('04', 'Learning Intelligence', 'Connects attention, clicks, conversion events, purchases, revenue, and spend back to creative decisions.')}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="shell split">
        <div>
          <p class="eyebrow">How it works</p>
          <h2>From product understanding to a continuous creative loop.</h2>
          <p>StoryFactory converts structured product knowledge into stories, scenes, media, platform variants, and measurable learning. The system is designed to improve the next creative from evidence collected by the last one.</p>
          <a class="button button-dark" href="/storyfactory" data-link>See the full system</a>
        </div>
        <div class="pipeline-card">
          <div><b>1</b><span>Analyze the product</span></div>
          <div><b>2</b><span>Build the creative model</span></div>
          <div><b>3</b><span>Create stories and media</span></div>
          <div><b>4</b><span>Distribute across platforms</span></div>
          <div><b>5</b><span>Measure attention and business outcomes</span></div>
          <div><b>6</b><span>Improve the next creative</span></div>
        </div>
      </div>
    </section>

    <section class="section section-dark">
      <div class="shell split">
        <div>
          <p class="eyebrow">First integrated use case</p>
          <h2>GhostTown gives StoryFactory a real product to learn from.</h2>
          <p>GhostTownTest helps entrepreneurs test whether a business idea has real demand before they spend heavily. StoryFactory uses GhostTown as a first integrated product case: product context enters the system, creative is produced and distributed, and product outcomes can flow back into learning.</p>
          <a class="button button-primary" href="https://ghosttowntest.com" target="_blank" rel="noopener">Visit GhostTownTest</a>
        </div>
        <div class="dark-note">
          <span class="kicker">Why this matters</span>
          <p>StoryFactory is being built against real product constraints instead of as a demo. That gives Zayas House a working proof environment for product intelligence, creative generation, distribution, and performance learning.</p>
        </div>
      </div>
    </section>

    <section class="section section-white">
      <div class="shell split">
        <div>
          <p class="eyebrow">Scale path</p>
          <h2>Product Plugin Creation Engine</h2>
          <p>The next scaling layer is designed to analyze a business or product, normalize what matters, and generate a bounded Product Plugin for StoryFactory. AI proposes. Deterministic contracts validate. The plugin then improves as real creative and commercial evidence arrives.</p>
          <a class="button button-dark" href="/technology" data-link>Explore the architecture</a>
        </div>
        <div class="architecture-stack">
          <span>Product analysis</span>
          <span>Generic product model</span>
          <span>Specific product attributes</span>
          <span>Validated Product Plugin</span>
          <span>Creative Intelligence System</span>
          <span>Execution + learning</span>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="shell section-heading">
        <div>
          <p class="eyebrow">Company</p>
          <h2>Built by Zayas House LLC.</h2>
        </div>
        <p>Zayas House is the technology company. StoryFactory is the flagship product. Development has been self-funded to this stage. We are building from Puerto Rico with a bilingual foundation and a commercial path toward recurring creative production for businesses.</p>
      </div>
    </section>
  `,

  '/storyfactory': () => `
    ${policyHero('Flagship product', 'StoryFactory â€” The Creative Intelligence System', 'A working technology platform for understanding products, shaping stories, producing media, distributing creative, and learning from what performs.')}

    <section class="section section-white">
      <div class="shell split">
        <div>
          <span class="status status-live">Working MVP</span>
          <h2>What StoryFactory does</h2>
          <p>StoryFactory turns a product or business into a continuous creative system. It analyzes what the product is, what problem it solves, what matters to the audience, and what evidence is available. Then it decides what story to tell, how to shape it, how to produce it, where to distribute it, and what to learn from the result.</p>
        </div>
        <div class="product-facts">
          <div><strong>Category</strong><span>Creative Intelligence System</span></div>
          <div><strong>Primary output</strong><span>Short-form stories and media</span></div>
          <div><strong>Learning loop</strong><span>Creative + product outcomes</span></div>
          <div><strong>Commercial direction</strong><span>Recurring creative production / 50-video production packages</span></div>
          <div><strong>Built by</strong><span>Zayas House LLC</span></div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="shell">
        <div class="section-heading">
          <div><p class="eyebrow">System</p><h2>One product. Four intelligence engines.</h2></div>
          <p>Video production is one execution surface. The core technology is the decision and learning layer that sits above it.</p>
        </div>
        <div class="grid-4">
          ${capabilityCard('PI', 'Product Intelligence', 'Builds a structured understanding of audience, pain, desired outcome, mechanism, offer, proof, objections, constraints, and conversion events.')}
          ${capabilityCard('CI', 'Creative Intelligence', 'Selects topic, story family, show format, hook, depth, runtime, scene count, pacing, evidence treatment, and persuasion.')}
          ${capabilityCard('DI', 'Distribution Intelligence', 'Preserves creative lineage while adapting execution for YouTube, Instagram, Facebook, TikTok, X, language, and market context.')}
          ${capabilityCard('LI', 'Learning Intelligence', 'Measures attention, qualified clicks, product actions, purchases, revenue, and spend to improve creative decisions.')}
        </div>
      </div>
    </section>

    <section class="section section-dark">
      <div class="shell">
        <p class="eyebrow">Execution path</p>
        <h2 class="wide-title">Product analysis â†’ Story â†’ StoryShape â†’ Scenes â†’ Media â†’ Distribution â†’ Learning</h2>
        <p class="dark-lede">StoryFactory uses deterministic contracts around AI-assisted interpretation so production does not simply trust model output. Product truth, evidence authority, creative structure, distribution intent, and learning dimensions remain explicit.</p>
      </div>
    </section>

    <section class="section section-white">
      <div class="shell split">
        <div>
          <p class="eyebrow">Scale architecture</p>
          <h2>Product Plugin Creation Engine</h2>
          <p>StoryFactory is designed to move from hand-built product integrations toward generated product plugins. The engine will analyze a product, propose the specific attributes that matter creatively, validate those attributes against deterministic contracts, and generate a bounded plugin that can learn from observed performance.</p>
          <p>Core StoryFactory capabilities stay shared. Product plugins carry only product-specific identity, audience, pains, outcomes, evidence sources, learning attributes, conversion events, offers, CTA, and constraints.</p>
        </div>
        <div class="notice technology-note">
          <strong>Design rule</strong>
          <p>AI interprets. Deterministic contracts constrain. Runtime validation verifies. Observed learning refines.</p>
          <p>This is the path from one integrated product to a platform that can support many unrelated businesses without building a separate creative engine for each one.</p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="shell split">
        <div>
          <p class="eyebrow">Proof environment</p>
          <h2>GhostTownTest is the first integrated product case.</h2>
          <p>GhostTown supplies real product context, story opportunities, conversion events, and commercial outcomes. StoryFactory supplies the shared creative, production, distribution, and learning system.</p>
        </div>
        <div class="product-facts">
          <div><strong>Story inputs</strong><span>Pattern stories + factual cases</span></div>
          <div><strong>Creative outputs</strong><span>Variable story depth, scenes, runtime, media</span></div>
          <div><strong>Platforms</strong><span>YouTube, Instagram, Facebook, TikTok, X</span></div>
          <div><strong>Business learning</strong><span>Views â†’ clicks â†’ tests â†’ paid Blueprints â†’ revenue</span></div>
        </div>
      </div>
    </section>
  `,

  '/technology': () => `
    ${policyHero('Technology', 'Infrastructure for a Creative Intelligence System.', 'StoryFactory combines product analysis, AI-assisted creative reasoning, deterministic contracts, media execution, distribution, and performance learning into one system.')}

    <section class="section section-white">
      <div class="shell">
        <div class="section-heading">
          <div><p class="eyebrow">Architecture</p><h2>AI where interpretation helps. Determinism where trust matters.</h2></div>
          <p>The architecture separates product truth, creative decisions, production execution, publishing authorization, and learning so each layer can scale without turning into one opaque model call.</p>
        </div>
        <div class="grid-3">
          ${capabilityCard('A', 'AI interpretation', 'Product analysis, story opportunities, creative alternatives, language, visual planning, and other high-judgment tasks.')}
          ${capabilityCard('B', 'Deterministic contracts', 'Required fields, bounded dimensions, evidence authority, lineage, validation, publication gates, and reproducibility.')}
          ${capabilityCard('C', 'Observed learning', 'Creative performance and product outcomes feed back into what the system should try next.')}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="shell">
        <div class="section-heading">
          <div><p class="eyebrow">Infrastructure</p><h2>What the platform needs to scale.</h2></div>
          <p>Infrastructure funding accelerates the parts of StoryFactory that become costly as creative volume, media quality, markets, and product integrations grow.</p>
        </div>
        <div class="infra-grid">
          <article><strong>AI + model inference</strong><p>Product analysis, creative reasoning, language, evaluation, and controlled model experimentation.</p></article>
          <article><strong>Media generation + rendering</strong><p>Visual generation, voice, audio, deterministic motion, encoding, quality verification, and scalable media workers.</p></article>
          <article><strong>Storage + data</strong><p>Media archives, source contracts, production receipts, event history, analytics, and reproducible creative lineage.</p></article>
          <article><strong>Distribution infrastructure</strong><p>Secure account bindings, platform adapters, idempotent publishing, retries, receipts, and authorization gates.</p></article>
          <article><strong>Localization + market execution</strong><p>English/Spanish foundation, locale-aware creative, market context, platform policy, and future country profiles.</p></article>
          <article><strong>Testing + observability</strong><p>Quality gates, production acceptance, cost controls, telemetry, diagnostics, and evidence-backed release verification.</p></article>
        </div>
      </div>
    </section>

    <section class="section section-dark">
      <div class="shell split">
        <div>
          <p class="eyebrow">Product Plugin Creation Engine</p>
          <h2>Designed for many products, not one codebase per customer.</h2>
          <p>The long-term scaling layer converts product inputs into a normalized Product Model, identifies product-specific creative attributes, and generates a validated Product Plugin that plugs into the same StoryFactory core.</p>
        </div>
        <div class="architecture-stack architecture-stack-dark">
          <span>Website + docs + offer</span>
          <span>Product Model</span>
          <span>Candidate product attributes</span>
          <span>Contract validation</span>
          <span>Product Plugin</span>
          <span>Creative execution + learning</span>
        </div>
      </div>
    </section>
  `,

  '/products': () => `
    ${policyHero('Products', 'One technology company. One flagship platform.', 'Zayas House LLC is focused on StoryFactory. Other internal products serve as proving grounds and product integrations, not unrelated agency projects.')}

    <section class="section section-white">
      <div class="shell">
        <article class="flagship-card">
          <div>
            <p class="eyebrow">Flagship technology</p>
            <h2>StoryFactory</h2>
            <span class="status status-live">Working MVP</span>
            <p>Creative Intelligence System for product analysis, story creation, media production, multi-platform distribution, and performance learning.</p>
          </div>
          <a class="button button-dark" href="/storyfactory" data-link>Explore StoryFactory</a>
        </article>
      </div>
    </section>

    <section class="section">
      <div class="shell split">
        <div>
          <p class="eyebrow">First integrated product case</p>
          <h2>GhostTownTest</h2>
          <p>GhostTown helps entrepreneurs test whether a business idea has real demand before committing heavily. It provides StoryFactory with real product context, creative topics, conversion events, and business outcomes.</p>
          <a class="button button-dark" href="https://ghosttowntest.com" target="_blank" rel="noopener">Visit GhostTownTest</a>
        </div>
        <div class="notice">
          <strong>Why internal products matter</strong>
          <p>We use our own products as proving grounds for StoryFactory capabilities before expanding the platform commercially. That keeps the technology tied to real workflows instead of demo-only use cases.</p>
        </div>
      </div>
    </section>
  `,

  '/about': () => `
    ${policyHero('Company', 'Zayas House LLC is building StoryFactory.', 'We are a Puerto Rico technology company focused on a Creative Intelligence System for turning product understanding into creative execution and measurable learning.')}

    <article class="content-wrap">
      <h2>Company focus</h2>
      <p>Zayas House LLC is the technology company. StoryFactory is the flagship product. Development has been self-funded to this stage. The company is not positioned as an outsourced agency or a collection of unrelated experiments.</p>

      <h2>What we are building</h2>
      <p>StoryFactory combines product analysis, creative reasoning, story shaping, media production, localization, distribution, and performance learning. Video is an important output, but the core product is the intelligence layer that decides what to create and learns what works.</p>

      <h2>How we are proving it</h2>
      <p>We build against real internal products. GhostTownTest is the first integrated product case, providing real product context and measurable conversion outcomes while StoryFactory provides the shared creative and distribution system.</p>

      <h2>How it scales</h2>
      <p>The Product Plugin Creation Engine is the next scaling layer: AI-assisted product interpretation combined with deterministic contracts, runtime validation, and observed learning. The goal is to onboard different products without building a separate StoryFactory for each one.</p>

      <h2>Commercial direction</h2>
      <p>StoryFactory is being developed toward recurring creative production for businesses, including a 50-video production-package model and ongoing creative learning. Commercial offers will state exact scope, pricing, delivery, and billing terms before purchase.</p>

      <h2>Business identity</h2>
      <p><strong>Legal business name:</strong> Zayas House LLC<br><strong>Business location:</strong> Puerto Rico, United States<br><strong>Company inquiries:</strong> <a href="mailto:${companyEmail}">${companyEmail}</a><br><strong>Customer support:</strong> <a href="mailto:${supportEmail}">${supportEmail}</a></p>
    </article>
  `,

  '/support': () => `
    ${policyHero('Customer support', 'Help with purchases, access, billing, and product questions.', 'Email is our official customer-support channel. Include the email address used for purchase and enough detail for us to locate the relevant order.')}
    <article class="content-wrap">
      <div class="contact-card"><h2>Contact Zayas House Support</h2><p>Email <a href="mailto:${supportEmail}">${supportEmail}</a>. We normally respond within two business days, excluding U.S. federal holidays and emergency service interruptions.</p></div>
      <h2>For faster assistance</h2>
      <p>Please include your name, purchase email, product name, approximate purchase date, and a clear description of the problem. Never send a complete payment-card number, password, or government identification document by email.</p>
      <h2>Billing questions</h2>
      <p>For duplicate charges, an unrecognized Zayas House charge, subscription cancellation, or an invoice request, contact us promptly. We may ask for limited transaction details such as the charge date, amount, and last four digits shown on your statement.</p>
      <h2>Technical support</h2>
      <p>Support covers reasonable assistance with account access, digital delivery, and documented product features. Unless a written offer states otherwise, purchases do not include custom consulting, custom software development, device repair, or support for unrelated third-party products.</p>
    </article>
  `,

  '/delivery': () => `
    ${policyHero('Fulfillment', 'Digital delivery and service availability.', 'This policy explains how Zayas House LLC delivers digital products, reports, subscriptions, and online services.')}
    <article class="content-wrap">
      <p class="policy-meta"><strong>Effective date:</strong> ${effectiveDate}</p>
      <h2>Delivery methods</h2>
      <p>Depending on the product, delivery may occur through immediate on-screen access, a customer dashboard, a secure download link, an email sent to the purchase address, or access to a hosted web application. The checkout or product page will identify the delivery method.</p>
      <h2>Delivery timing</h2>
      <p>Standard automated digital products are normally made available immediately after successful payment, though processing, analysis, or generation may take additional time when stated before purchase. Custom or extended deliverables use the schedule shown in the applicable offer.</p>
      <h2>Customer responsibilities</h2>
      <p>Customers must provide a valid email address, maintain access to that inbox, satisfy stated technical requirements, and supply complete and lawful inputs. Delivery delays caused by inaccurate information, unavailable customer systems, or prohibited inputs are not failures by Zayas House LLC.</p>
      <h2>Failed or delayed delivery</h2>
      <p>Contact <a href="mailto:${supportEmail}">${supportEmail}</a> when a paid item is not accessible within the stated delivery period. We will verify the order and restore access, redeliver the item, complete the deliverable, or provide another remedy consistent with our Refund and Cancellation Policy.</p>
      <h2>Availability</h2>
      <p>Online services may occasionally be unavailable for maintenance, security work, provider outages, or circumstances beyond our reasonable control. We do not guarantee uninterrupted availability, but we will make commercially reasonable efforts to restore service.</p>
    </article>
  `,

  '/refunds': () => `
    ${policyHero('Customer policy', 'Refunds and cancellations.', 'We aim to resolve legitimate delivery and billing problems fairly while recognizing that digital products can be consumed immediately.')}
    <article class="content-wrap">
      <p class="policy-meta"><strong>Effective date:</strong> ${effectiveDate}</p>
      <h2>One-time digital purchases</h2>
      <p>Because downloadable reports, generated content, implementation plans, and other digital deliverables may be accessed or consumed immediately, completed digital purchases are generally final once the deliverable has been generated, downloaded, displayed, or made available in the customer account.</p>
      <h2>When a refund may be approved</h2>
      <p>We will review refund requests involving duplicate charges, a verified failure to deliver the purchased item, a materially defective or inaccessible deliverable that we cannot reasonably correct, or another circumstance where applicable law requires a refund. Requests should be submitted within 14 days of purchase unless a product page states a longer period.</p>
      <h2>Subscriptions</h2>
      <p>Customers may cancel a recurring subscription before the next renewal through the available account controls or by emailing <a href="mailto:${supportEmail}">${supportEmail}</a>. Cancellation stops future renewal charges and normally takes effect at the end of the current paid period. Partial-period refunds are not provided unless required by law or expressly stated in the applicable offer.</p>
      <h2>How to request a refund or cancellation</h2>
      <p>Email <a href="mailto:${supportEmail}">${supportEmail}</a> with the purchase email, product, transaction date, amount, and reason for the request. Approved card refunds are returned to the original payment method. Financial institutions may require additional business days to post the credit.</p>
      <h2>Charge disputes</h2>
      <p>Please contact us before initiating a payment dispute so we can investigate and resolve the issue. This does not limit any legal rights or card-network rights available to you.</p>
    </article>
  `,

  '/privacy': () => `
    ${policyHero('Legal', 'Privacy Policy.', 'This policy describes how Zayas House LLC collects, uses, shares, and protects personal information through its websites and products.')}
    <article class="content-wrap">
      <p class="policy-meta"><strong>Effective date:</strong> ${effectiveDate}</p>
      <h2>Information we collect</h2>
      <p>We may collect information you provide, including your name, email address, account information, customer-support communications, product inputs, uploaded content, and transaction-related information. Payment-card details are generally processed directly by our payment provider rather than stored by us.</p>
      <p>We may also collect technical and usage information such as device and browser details, IP address, approximate location derived from IP, timestamps, referral pages, application events, diagnostic logs, and cookies or similar technologies.</p>
      <h2>How we use information</h2>
      <p>We use information to provide and improve products, process transactions, deliver purchases, maintain accounts, respond to support requests, prevent fraud and abuse, protect security, comply with law, communicate service information, andâ€”with any consent required by lawâ€”send product or marketing communications.</p>
      <h2>How we share information</h2>
      <p>We may share information with service providers that support payments, hosting, authentication, communications, analytics, security, customer support, and product operations. We may also disclose information when required by law, to protect rights and safety, in connection with a corporate transaction, or at your direction. We do not sell personal information for money.</p>
      <h2>Product content and artificial intelligence</h2>
      <p>Some products may process customer inputs using automated systems or third-party artificial-intelligence providers to produce requested outputs. Product-specific notices may describe additional processing. Do not submit confidential, regulated, or sensitive information unless the product expressly permits it and provides appropriate safeguards.</p>
      <h2>Data retention and security</h2>
      <p>We retain information for as long as reasonably necessary for the purposes described, to satisfy legal or contractual obligations, resolve disputes, and enforce agreements. We use reasonable administrative, technical, and organizational safeguards, but no online system is completely secure.</p>
      <h2>Your choices and rights</h2>
      <p>You may request access, correction, deletion, or other action concerning personal information by contacting us. Rights vary by jurisdiction, and we may need to verify your identity. You may unsubscribe from promotional email using the message link or by contacting support.</p>
      <h2>Children</h2>
      <p>Our general commercial services are not directed to children under 13. Product-specific age requirements may apply. We do not knowingly collect personal information from a child in violation of applicable law.</p>
      <h2>International processing</h2>
      <p>Information may be processed in the United States and other countries where our providers operate. Those locations may have different data-protection laws from your jurisdiction.</p>
      <h2>Changes and contact</h2>
      <p>We may update this policy and will publish the revised effective date. Questions and privacy requests may be sent to <a href="mailto:${supportEmail}">${supportEmail}</a>.</p>
    </article>
  `,

  '/terms': () => `
    ${policyHero('Legal', 'Terms of Service.', 'These terms govern access to Zayas House LLC websites, software, digital products, reports, subscriptions, and related services.')}
    <article class="content-wrap">
      <p class="policy-meta"><strong>Effective date:</strong> ${effectiveDate}</p>
      <h2>Agreement and eligibility</h2>
      <p>By accessing or purchasing a service, you agree to these Terms and any product-specific terms presented before purchase. You must have legal capacity to enter a contract and may use the services only in compliance with applicable law.</p>
      <h2>Products and accounts</h2>
      <p>Features, availability, supported locations, technical requirements, usage limits, and deliverables may vary by product. You are responsible for accurate account information, protecting credentials, and activity under your account. Products marked "In development" are informational and are not an offer for sale.</p>
      <h2>Payments, renewals, and taxes</h2>
      <p>Prices and billing frequency are disclosed before payment. You authorize the applicable charges and any stated recurring renewals. You are responsible for taxes not collected by us. Failed or reversed payments may result in suspended access. Refunds and cancellations are governed by our Refund and Cancellation Policy and any product-specific terms.</p>
      <h2>Acceptable use</h2>
      <p>You may not misuse the services, violate law or third-party rights, introduce malicious code, bypass security or usage limits, scrape or reverse engineer except where law expressly permits, interfere with other users, use outputs for fraud or deception, or submit content you do not have the right to process.</p>
      <h2>Customer content</h2>
      <p>You retain ownership of content you submit. You grant Zayas House LLC and its service providers a limited license to host, process, reproduce, transmit, and transform that content as necessary to operate, secure, improve, and provide the requested service. You represent that you have all required rights and permissions.</p>
      <h2>Our intellectual property</h2>
      <p>The services, software, designs, branding, documentation, and related materials are owned by Zayas House LLC or its licensors. Except for rights expressly granted, no license or ownership right is transferred to you.</p>
      <h2>Automated outputs and professional decisions</h2>
      <p>Reports, evaluations, plans, generated media, summaries, and other automated outputs are informational tools and may contain errors or omissions. They are not legal, tax, financial, medical, engineering, or other licensed professional advice. You are responsible for reviewing outputs and making your own decisions.</p>
      <h2>Third-party services</h2>
      <p>Services may depend on third-party payment, hosting, authentication, communications, artificial-intelligence, or distribution providers. Their terms may apply to your use, and we are not responsible for third-party systems outside our reasonable control.</p>
      <h2>Disclaimers</h2>
      <p>To the maximum extent permitted by law, services are provided "as is" and "as available." We disclaim implied warranties, including merchantability, fitness for a particular purpose, noninfringement, and any guarantee of business results, revenue, audience growth, dispute prevention, payment collection, or permanent data preservation.</p>
      <h2>Limitation of liability</h2>
      <p>To the maximum extent permitted by law, Zayas House LLC will not be liable for indirect, incidental, special, consequential, exemplary, or punitive damages, or lost profits, revenues, data, goodwill, or opportunities. Our aggregate liability arising from a service will not exceed the amount you paid us for that service during the 12 months before the event giving rise to the claim.</p>
      <h2>Termination</h2>
      <p>You may stop using the services at any time. We may suspend or terminate access for material breach, unlawful conduct, security risk, nonpayment, or discontinuation of a service. Provisions that by their nature should survive will remain effective.</p>
      <h2>Governing law and disputes</h2>
      <p>These Terms are governed by the laws applicable in Puerto Rico and the United States, without regard to conflict-of-law rules. Before filing a formal claim, you agree to contact us and attempt an informal resolution. Nothing here eliminates rights that cannot legally be waived.</p>
      <h2>Changes and contact</h2>
      <p>We may update these Terms prospectively by publishing a revised effective date. Material changes may receive additional notice where appropriate. Contact <a href="mailto:${supportEmail}">${supportEmail}</a> with questions.</p>
    </article>
  `,

  '/404': () => `
    ${policyHero('404', 'That page could not be found.', 'The address may be incorrect or the page may have moved.')}
    <section class="section"><div class="shell"><a class="button button-dark" href="/" data-link>Return home</a></div></section>
  `
};

function normalizePath(pathname) {
  if (!pathname || pathname === '/index.html') return '/';
  return pathname.length > 1 ? pathname.replace(/\/$/, '') : pathname;
}

function render() {
  const path = normalizePath(window.location.pathname);
  const view = pages[path] || pages['/404'];
  document.querySelector('#main').innerHTML = view();
  document.querySelectorAll('.nav a[data-link]').forEach(link => {
    link.toggleAttribute('aria-current', normalizePath(link.pathname) === path);
  });
  document.title = path === '/'
    ? 'Zayas House LLC | StoryFactory - The Creative Intelligence System'
    : `${document.querySelector('h1')?.textContent || 'Zayas House'} | Zayas House LLC`;
  window.scrollTo(0, 0);
  bindLinks();
}

function bindLinks() {
  document.querySelectorAll('a[data-link]').forEach(link => {
    link.addEventListener('click', event => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      if (link.origin !== window.location.origin) return;
      event.preventDefault();
      history.pushState({}, '', link.pathname);
      document.querySelector('.nav')?.classList.remove('open');
      document.querySelector('.menu-button')?.setAttribute('aria-expanded', 'false');
      render();
    });
  });
}

const menuButton = document.querySelector('.menu-button');
menuButton.addEventListener('click', () => {
  const nav = document.querySelector('.nav');
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

window.addEventListener('popstate', render);
document.querySelector('#year').textContent = new Date().getFullYear();
render();
