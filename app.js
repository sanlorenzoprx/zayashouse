const supportEmail = 'support@zayashouse.com';
const effectiveDate = 'July 30, 2026';

const products = [
  {
    name: 'GhostTown Test',
    status: 'Coming to market',
    statusClass: '',
    code: 'GT',
    description: 'A practical business-idea evaluation experience that helps entrepreneurs assess demand, competition, risks, and next validation steps before committing significant time or money.',
    url: 'https://lit-ghosttown.app'
  },
  {
    name: 'Shorts Factory',
    status: 'In development',
    statusClass: 'status-dev',
    code: 'SF',
    description: 'A supervised short-form media production and distribution system for creating, localizing, reviewing, scheduling, and measuring digital content.',
    url: null
  },
  {
    name: 'SiteProof',
    status: 'In development',
    statusClass: 'status-dev',
    code: 'SP',
    description: 'An offline-first proof-of-work and reporting product designed to help service contractors document jobs, reduce disputes, and support faster payment.',
    url: null
  },
  {
    name: 'Memories My Story',
    status: 'In development',
    statusClass: 'status-dev',
    code: 'MS',
    description: 'A photo-first, voice-led family memory experience for preserving the stories, voices, and context behind meaningful photographs.',
    url: null
  }
];

const productCards = (limit) => products.slice(0, limit || products.length).map(product => `
  <article class="card">
    <div class="icon-box">${product.code}</div>
    <h3>${product.name}</h3>
    <span class="status ${product.statusClass}">${product.status}</span>
    <p style="margin-top:16px">${product.description}</p>
    ${product.url ? `<a class="card-link" href="${product.url}" target="_blank" rel="noopener">Visit product →</a>` : `<a class="card-link" href="mailto:${supportEmail}?subject=${encodeURIComponent(product.name + ' availability')}">Ask about availability →</a>`}
  </article>
`).join('');

const policyHero = (eyebrow, title, summary) => `
  <section class="page-hero"><div class="shell">
    <p class="eyebrow">${eyebrow}</p><h1>${title}</h1><p>${summary}</p>
  </div></section>`;

const pages = {
  '/': () => `
    <section class="hero">
      <div class="shell hero-grid">
        <div>
          <p class="eyebrow">Zayas House LLC</p>
          <h1>Useful digital products, built for real work.</h1>
          <p class="hero-lede">We develop software, digital tools, and educational products that help entrepreneurs, creators, families, and small businesses move from uncertainty to clear action.</p>
          <div class="actions">
            <a class="button button-primary" href="/products" data-link>Explore our products</a>
            <a class="button button-secondary" href="mailto:${supportEmail}">Contact support</a>
          </div>
        </div>
        <aside class="hero-card">
          <strong>Built from Puerto Rico. Delivered online.</strong>
          <p>Our products are designed for practical outcomes: clearer decisions, better documentation, more efficient content production, and the preservation of meaningful stories.</p>
        </aside>
      </div>
    </section>
    <section class="section section-white">
      <div class="shell">
        <div class="section-heading">
          <h2>Products moving from development to market.</h2>
          <p>Each product addresses a specific, costly problem and is released only after its core workflow has been tested.</p>
        </div>
        <div class="grid-3">${productCards(3)}</div>
      </div>
    </section>
    <section class="section">
      <div class="shell split">
        <div>
          <p class="eyebrow">Our operating standard</p>
          <h2>Clear promises. Transparent terms. Human support.</h2>
          <p>We state what each product does, what customers receive, how delivery works, and when refunds or cancellations may apply. We do not sell undeclared services or hide support behind automated systems.</p>
          <a class="button button-dark" href="/about" data-link>About Zayas House</a>
        </div>
        <div class="values">
          <div class="value"><strong>Practical value</strong><span>Every product must help a customer complete a meaningful task or make a better decision.</span></div>
          <div class="value"><strong>Responsible automation</strong><span>Automation should reduce repetitive work while preserving review, control, and accountability.</span></div>
          <div class="value"><strong>Customer clarity</strong><span>Pricing, delivery, limitations, refund terms, and support channels should be easy to find.</span></div>
        </div>
      </div>
    </section>
  `,

  '/products': () => `
    ${policyHero('Products', 'Software and digital tools for practical outcomes.', 'Our portfolio includes products approaching commercial release and products still in active development. Availability is clearly identified below.')}
    <section class="section section-white"><div class="shell"><div class="grid-3">${productCards()}</div></div></section>
    <section class="section"><div class="shell split">
      <div><h2>What customers can expect</h2><p>Commercial products display their current price, included deliverables, delivery method, recurring-payment terms where applicable, and refund or cancellation conditions before payment.</p></div>
      <div class="notice"><strong>Development status matters.</strong><p>Products labeled “In development” are not currently offered for purchase through this company website. Contacting us about a development product does not create an order or payment obligation.</p></div>
    </div></section>
  `,

  '/about': () => `
    ${policyHero('Company', 'We build focused products for underserved workflows.', 'Zayas House LLC is a Puerto Rico limited liability company developing and publishing online software, digital tools, automated media systems, and educational content.')}
    <article class="content-wrap">
      <h2>What we do</h2>
      <p>We identify workflows where people lose time, money, evidence, or clarity and build focused digital products around those problems. Our work currently includes business-idea validation, content production, contractor documentation, and family-memory preservation.</p>
      <h2>Who we serve</h2>
      <p>Our intended customers include entrepreneurs, creators, small businesses, service contractors, and families. Specific eligibility, supported locations, technical requirements, and product limitations are disclosed on the applicable product or checkout page.</p>
      <h2>How we operate</h2>
      <p>Zayas House LLC sells and supports its products online. Digital products may be delivered through a web application, customer account, secure download, email, or a combination of these methods. We use third-party infrastructure and payment providers where appropriate.</p>
      <h2>Business identity</h2>
      <p><strong>Legal business name:</strong> Zayas House LLC<br><strong>Business location:</strong> Puerto Rico, United States<br><strong>Customer support:</strong> <a href="mailto:${supportEmail}">${supportEmail}</a></p>
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
      <p>We use information to provide and improve products, process transactions, deliver purchases, maintain accounts, respond to support requests, prevent fraud and abuse, protect security, comply with law, communicate service information, and—with any consent required by law—send product or marketing communications.</p>
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
      <p>Features, availability, supported locations, technical requirements, usage limits, and deliverables may vary by product. You are responsible for accurate account information, protecting credentials, and activity under your account. Products marked “In development” are informational and are not an offer for sale.</p>
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
      <p>To the maximum extent permitted by law, services are provided “as is” and “as available.” We disclaim implied warranties, including merchantability, fitness for a particular purpose, noninfringement, and any guarantee of business results, revenue, audience growth, dispute prevention, payment collection, or permanent data preservation.</p>
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
  document.title = path === '/' ? 'Zayas House LLC' : `${document.querySelector('h1')?.textContent || 'Zayas House'} | Zayas House LLC`;
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
