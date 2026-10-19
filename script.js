:root {
  --background: #f6f2ec;
  --panel: #f1e9df;
  --panel-strong: #e5d9c8;
  --ink: #171717;
  --muted: #3b3b3b;
  --line: rgba(23, 23, 23, 0.18);
  --accent: #111111;
  --accent-soft: #2f2f2f;
  --highlight: #f5efe6;
  --success: #1d4d3a;
  --shadow: rgba(17, 17, 17, 0.14);
  --link: #1b1b1b;
  --focus: #0f6fff;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: 'Inter', sans-serif;
  background: var(--background);
  color: var(--ink);
  line-height: 1.6;
}

img {
  max-width: 100%;
  display: block;
}

a {
  color: var(--link);
}

a:focus-visible,
button:focus-visible,
input:focus-visible,
select:focus-visible,
textarea:focus-visible {
  outline: 3px solid var(--focus);
  outline-offset: 3px;
}

.skip-link {
  position: absolute;
  left: 0;
  top: -100px;
  background: var(--ink);
  color: #ffffff;
  padding: 0.75rem 1rem;
  z-index: 9999;
  border-radius: 0 0 0.5rem 0;
}

.skip-link:focus {
  top: 0;
}

.container {
  width: min(1200px, calc(100% - 2rem));
  margin: 0 auto;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 30;
  backdrop-filter: blur(12px);
  background: rgba(246, 242, 236, 0.9);
  border-bottom: 1px solid var(--line);
}

.nav-wrap,
.footer-wrap,
.nav-actions,
.main-nav,
.cta-row,
.product-bottom,
.footer-links,
.price-row,
.purchase-row,
.payment-row ul,
.field-row,
.summary-row,
.cart-topline,
.cart-meta,
.shop-toolbar,
.filter-pills,
.options-row,
.related-grid,
.value-card,
.metric-grid,
.social-grid,
.story-grid,
.contact-card,
.checkout-wrap,
.cart-layout,
.policy-grid,
.values-grid,
.stack-grid,
.strategy-grid {
  display: flex;
}

.nav-wrap,
.footer-wrap,
.nav-actions,
.main-nav,
.cta-row,
.shop-toolbar,
.filter-pills,
.options-row,
.related-grid,
.value-card,
.metric-grid,
.story-grid,
.contact-card,
.checkout-wrap,
.cart-layout,
.policy-grid,
.values-grid,
.stack-grid,
.strategy-grid {
  flex-wrap: wrap;
}

.nav-wrap {
  align-items: center;
  justify-content: space-between;
  min-height: 78px;
  gap: 1rem;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
}

.brand-mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  background: var(--ink);
  color: #ffffff;
  border-radius: 50%;
  font-size: 0.9rem;
}

.main-nav {
  gap: 1.2rem;
  align-items: center;
}

.main-nav a,
.nav-link,
.footer-links a,
.text-link,
.mini-btn,
.btn,
.filter-pill,
.remove-item,
.size-chip {
  transition: all 0.2s ease;
}

.main-nav a,
.nav-link,
.footer-links a,
.text-link,
.mini-btn {
  text-decoration: none;
  color: var(--ink);
}

.main-nav a:hover,
.nav-link:hover,
.footer-links a:hover,
.text-link:hover,
.mini-btn:hover {
  opacity: 0.8;
}

.nav-actions {
  align-items: center;
  gap: 0.75rem;
}

.nav-link,
.text-link,
.remove-item,
.mini-btn,
.filter-pill,
.size-chip {
  font-weight: 600;
}

.nav-toggle {
  background: transparent;
  border: 1px solid var(--line);
  border-radius: 0.5rem;
  width: 2.8rem;
  height: 2.8rem;
  padding: 0.55rem;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.3rem;
  cursor: pointer;
}

.nav-toggle span {
  display: block;
  width: 100%;
  height: 2px;
  background: var(--ink);
  border-radius: 2px;
}

.main-nav {
  display: none;
}

.main-nav.is-open {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1rem 0 0;
}

.hero {
  padding: 4rem 0 2rem;
}

.hero-grid,
.story-grid,
.social-grid,
.contact-card,
.checkout-wrap,
.cart-layout,
.policy-wrap,
.strategy-page,
.success-page {
  display: grid;
  gap: 2rem;
}

.hero-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
  align-items: center;
}

.eyebrow {
  margin: 0 0 0.75rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-size: 0.72rem;
  font-weight: 700;
  color: var(--muted);
}

h1,
h2,
h3 {
  margin-top: 0;
  line-height: 1.08;
  color: var(--ink);
}

h1 {
  font-size: clamp(2.7rem, 5vw, 5rem);
  margin-bottom: 1rem;
  letter-spacing: -0.06em;
}

h2 {
  font-size: clamp(2rem, 3vw, 3rem);
  margin-bottom: 0.75rem;
}

.lead,
.story-grid p,
.social-copy p,
.product-description,
.spec-box p,
.value-card p,
.policy-card p,
.brand-summary-box p,
.strategy-card p,
.contact-copy p,
.empty-state p,
.checkout-form label,
.support-form label,
label {
  color: var(--muted);
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0.8rem 1.25rem;
  border-radius: 999px;
  border: 1px solid var(--ink);
  text-decoration: none;
  font-weight: 700;
  cursor: pointer;
}

.btn-primary {
  background: var(--ink);
  color: #ffffff;
}

.btn-secondary {
  background: transparent;
  color: var(--ink);
}

.btn:hover {
  transform: translateY(-1px);
}

.cta-row {
  gap: 1rem;
  margin: 1.5rem 0;
}

.trust-list {
  margin: 1.25rem 0 0;
  padding-left: 1.2rem;
  color: var(--muted);
}

.hero-visual,
.visual-card,
.collection-card,
.product-card,
.value-card,
.stat-box,
.policy-card,
.strategy-card,
.checkout-panel,
.cart-item,
.empty-state,
.success-box,
.stack-card {
  border: 1px solid var(--line);
  border-radius: 1.25rem;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 16px 32px var(--shadow);
}

.visual-card {
  min-height: 560px;
  position: relative;
  overflow: hidden;
  background: linear-gradient(145deg, #b7afa3 0%, #e3d8cc 52%, #f3eee9 100%);
}

.visual-badge,
.product-tag,
.gallery-badge,
.mini-tag {
  position: absolute;
  top: 1rem;
  left: 1rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0.75rem;
  border-radius: 999px;
  background: rgba(17, 17, 17, 0.8);
  color: #ffffff;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.model-figure {
  position: absolute;
  bottom: 0;
  width: 40%;
  height: 72%;
  border-radius: 22% 22% 0 0;
  background: linear-gradient(180deg, #242424 0%, #111111 100%);
}

.model-one {
  left: 18%;
}

.model-two {
  right: 14%;
  width: 32%;
  background: linear-gradient(180deg, #59564f 0%, #1e1d1b 100%);
}

.visual-caption {
  position: absolute;
  right: 1.2rem;
  bottom: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  color: #ffffff;
  background: rgba(17, 17, 17, 0.42);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 0.85rem 1rem;
  border-radius: 1rem;
}

.metric-band {
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.12);
}

.metric-grid {
  justify-content: space-between;
  gap: 1rem;
  padding: 1.2rem 0;
}

.metric-grid div {
  display: flex;
  flex-direction: column;
  min-width: 160px;
}

.metric-grid strong {
  font-size: 1.8rem;
  letter-spacing: -0.04em;
}

.section {
  padding: 4rem 0;
}

.section-alt {
  background: rgba(255, 255, 255, 0.15);
}

.section-heading {
  margin-bottom: 2rem;
}

.split-heading {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 1rem;
}

.product-grid,
.collection-grid,
.values-grid,
.stack-grid,
.strategy-grid {
  display: grid;
  gap: 1.5rem;
}

.product-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.product-card {
  position: relative;
  overflow: hidden;
  min-height: 420px;
  background: #efe7df;
}

.product-visual {
  height: 260px;
  background: linear-gradient(160deg, #d2c7bb 0%, #efe6dc 100%);
}

.product-meta {
  padding: 1.2rem 1rem 1rem;
}

.product-meta h3,
.mini-body h3,
.cart-copy h3 {
  margin: 0 0 0.4rem;
  font-size: 1.2rem;
}

.product-meta p,
.cart-copy p,
.mini-body p {
  margin: 0;
  color: var(--muted);
}

.product-bottom {
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
}

.product-bottom span {
  font-weight: 700;
  font-size: 1.05rem;
}

.mini-btn,
.filter-pill,
.size-chip,
.remove-item {
  background: transparent;
  border: 1px solid var(--line);
  border-radius: 999px;
  padding: 0.65rem 1rem;
  text-decoration: none;
  color: var(--ink);
  cursor: pointer;
}

.collection-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.collection-card {
  min-height: 320px;
  padding: 1.5rem;
  display: flex;
  align-items: end;
  background: linear-gradient(180deg, rgba(19,19,19,0.15), rgba(19,19,19,0.55));
  color: #ffffff;
}

.collection-card .collection-copy {
  background: rgba(17,17,17,0.32);
  border: 1px solid rgba(255,255,255,0.2);
  padding: 1rem 1.1rem;
  border-radius: 1rem;
  backdrop-filter: blur(3px);
}

.collection-card h3,
.collection-card p {
  color: #ffffff;
}

.collection-dark {
  background: linear-gradient(135deg, #1b1b1b, #44413d);
}

.collection-warm {
  background: linear-gradient(135deg, #9a7d65, #d7b59a);
}

.collection-light {
  background: linear-gradient(135deg, #d9d7d1, #f4f0eb);
}

.collection-light .collection-copy {
  background: rgba(17,17,17,0.14);
}

.value-card,
.policy-card,
.strategy-card,
.stack-card,
.stat-box {
  padding: 1.35rem;
}

.values-grid,
.stack-grid,
.strategy-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.value-card span {
  display: inline-block;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--muted);
}

.social-grid,
.story-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
  align-items: center;
}

.social-stats {
  display: grid;
  gap: 1rem;
}

.contact-card {
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  background: linear-gradient(135deg, rgba(17,17,17,0.96), rgba(53,53,53,0.96));
  border-radius: 1.5rem;
}

.contact-copy h2,
.contact-copy p,
.contact-copy .eyebrow {
  color: #ffffff;
}

.newsletter-form {
  display: flex;
  gap: 0.75rem;
  align-items: center;
  width: min(520px, 100%);
}

.newsletter-form input,
.checkout-form input,
.checkout-form textarea,
.checkout-form select,
.support-form input,
.support-form textarea {
  width: 100%;
  border: 1px solid var(--line);
  border-radius: 0.8rem;
  min-height: 48px;
  padding: 0.8rem 0.9rem;
  font: inherit;
  background: #fff;
  color: var(--ink);
}

.newsletter-form input {
  flex: 1;
}

.site-footer {
  padding: 1.5rem 0 2.5rem;
  border-top: 1px solid var(--line);
}

.footer-wrap {
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.footer-links {
  gap: 1rem;
  flex-wrap: wrap;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

.product-page-wrap,
.strategy-page {
  padding-top: 2rem;
}

.product-hero {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 2rem;
  align-items: start;
}

.product-gallery {
  position: relative;
  min-height: 540px;
  border-radius: 1.5rem;
  background: linear-gradient(135deg, #d9d1c5, #efe7dd);
  border: 1px solid var(--line);
  overflow: hidden;
}

.product-info {
  padding: 1rem 0;
}

.price-row {
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.price-row strong {
  font-size: 2rem;
  letter-spacing: -0.06em;
}

.selection-block {
  margin-top: 1.25rem;
}

.options-row {
  gap: 0.75rem;
  align-items: center;
  margin-top: 0.6rem;
}

.size-chip.selected,
.filter-pill.active {
  background: var(--ink);
  color: #ffffff;
}

.purchase-row {
  gap: 0.8rem;
  margin-top: 1.5rem;
  flex-wrap: wrap;
}

.payment-row {
  margin-top: 1.5rem;
  display: grid;
  gap: 0.75rem;
}

.payment-row ul {
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 0.5rem 1rem;
  flex-wrap: wrap;
}

.payment-row li {
  color: var(--muted);
}

.specs-section {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.25rem;
  margin: 2.5rem 0;
}

.spec-box,
.related-products,
.brand-summary-box,
.production-flow,
.policy-card,
.success-box,
.checkout-panel,
.cart-item,
.empty-state {
  padding: 1.5rem;
  border: 1px solid var(--line);
  border-radius: 1.25rem;
  background: rgba(255,255,255,0.25);
}

.related-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

.mini-card {
  position: relative;
  min-height: 260px;
  border-radius: 1rem;
  overflow: hidden;
  background: linear-gradient(135deg, #d9d2c8, #efeae1);
  border: 1px solid var(--line);
}

.mini-body {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 1rem;
  background: linear-gradient(180deg, rgba(255,255,255,0), rgba(17,17,17,0.75));
  color: #ffffff;
}

.mini-body h3,
.mini-body p,
.mini-body a {
  color: #ffffff;
}

.shop-toolbar {
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.filter-pills {
  gap: 0.75rem;
  flex-wrap: wrap;
}

.sort-box {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.sort-box select {
  min-height: 2.75rem;
  border: 1px solid var(--line);
  border-radius: 0.75rem;
  background: #fff;
  color: var(--ink);
  padding: 0.6rem 0.8rem;
}

.cart-layout,
.checkout-wrap {
  grid-template-columns: 1.7fr 0.9fr;
  align-items: start;
}

.cart-items,
.checkout-summary-item,
.summary-row {
  display: grid;
  gap: 0.9rem;
}

.cart-item {
  display: grid;
  grid-template-columns: 120px 1fr auto;
  gap: 1rem;
  margin-bottom: 1rem;
  align-items: center;
}

.cart-thumb {
  height: 120px;
  border-radius: 1rem;
  border: 1px solid var(--line);
  background: linear-gradient(135deg, #e3d5bf, #f7efe6);
}

.cart-copy {
  min-width: 0;
}

.cart-topline {
  justify-content: space-between;
  align-items: start;
  gap: 1rem;
}

.cart-meta {
  gap: 1rem;
  margin-top: 0.5rem;
  color: var(--muted);
  flex-wrap: wrap;
}

.checkout-panel {
  position: sticky;
  top: 96px;
}

.summary-row {
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--line);
}

.total-row {
  font-size: 1.1rem;
  font-weight: 700;
}

.full-width {
  width: 100%;
  margin-top: 1rem;
}

.page-header {
  margin-bottom: 2rem;
}

.compact-header h1 {
  font-size: clamp(2.2rem, 4vw, 3.2rem);
}

.policy-grid,
.strategy-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.support-form,
.checkout-form {
  display: grid;
  gap: 1rem;
}

.field-row {
  gap: 1rem;
}

.field-row > label,
.checkout-form label,
.support-form label {
  display: grid;
  gap: 0.5rem;
  flex: 1;
}

.checkout-summary-item {
  grid-template-columns: 1fr auto;
  gap: 0.75rem;
  align-items: center;
}

.brand-summary-box,
.success-box {
  margin-bottom: 2rem;
}

.step-number {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 50%;
  background: var(--ink);
  color: #ffffff;
  font-size: 0.8rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
}

.flow-list {
  margin: 0;
  padding-left: 1.2rem;
  display: grid;
  gap: 0.8rem;
  color: var(--muted);
}

@media (max-width: 900px) {
  .hero-grid,
  .social-grid,
  .story-grid,
  .product-hero,
  .cart-layout,
  .checkout-wrap,
  .policy-grid,
  .strategy-grid,
  .values-grid,
  .stack-grid,
  .related-grid,
  .product-grid,
  .collection-grid,
  .specs-section {
    grid-template-columns: 1fr;
  }

  .main-nav {
    display: none;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 1rem;
  }

  .main-nav.is-open {
    display: flex;
  }

  .nav-actions {
    gap: 0.5rem;
  }

  .newsletter-form,
  .field-row,
  .shop-toolbar,
  .footer-wrap,
  .contact-card {
    flex-direction: column;
    align-items: flex-start;
  }

  .newsletter-form {
    width: 100%;
  }
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

@media (min-width: 901px) {
  .nav-toggle {
    display: none;
  }

  .main-nav {
    display: flex !important;
  }
}

::selection {
  background: rgba(15, 111, 255, 0.22);
}

