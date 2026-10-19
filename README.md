# Strydë — premium streetwear storefront

This repository now contains a production-friendly frontend structure for the Strydë brand: a premium streetwear storefront concept for teens and young adults with a luxury / streetwear aesthetic.

## What is included

- Premium brand landing page
- Shop catalog page
- Product detail pages
- Cart and checkout flow
- Policy and support pages
- Newsletter and contact form handling using browser local storage
- Vite-based production build setup
- Netlify deployment config

## Local development

Install dependencies:

```bash
npm install
```

Start the local Vite dev server:

```bash
npm run dev
```

The site will be available at:

```text
http://localhost:3000
```

## Production build

Build the optimized production bundle:

```bash
npm run build
```

Preview the built site:

```bash
npm run preview
```

## Deploying to Netlify

1. Push this repo to GitHub
2. Import the repo into Netlify
3. Set the build command to:

```bash
npm run build
```

4. Set the publish directory to:

```bash
dist
```

## Notes

This is a frontend storefront prototype. For a real production commerce setup, the next step is to connect Stripe / PayPal, a backend database, and a real order management system.
