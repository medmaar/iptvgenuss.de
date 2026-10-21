# iptvgenuss.de

The IPTV Genuss website: a fast, dependency-free static site in German, built for Cloudflare Pages.

## What's here

| Path | What it is |
| --- | --- |
| `src/site.mjs` | **Edit this first.** Business details (Impressum), contact, prices, included features, the licensed offer, analytics IDs and the `live` switch. |
| `src/content.mjs` | Device list with setup steps, and the FAQ. |
| `src/pages/` | Page content: home, pricing, guides, devices, IPTV explainer, FAQ, contact, free trial, legal pages, 404. |
| `src/layout.mjs`, `src/blocks.mjs` | Page shell (head, header, footer, structured data) and shared sections. |
| `public/` | Copied as-is: CSS, JS, self-hosted fonts, logo/icons, `_headers`, `_redirects`. |
| `build.mjs` | Builds every page into `dist/`, plus `sitemap.xml` and `robots.txt`. |

```sh
npm run build   # writes dist/ and checks links, anchors, <h1>, JSON-LD, title and description lengths
npm run dev     # builds, then serves dist/ on http://localhost:8788
```

## Before launch

`npm run build` and the yellow preview bar on every page list what is still missing. While `site.live` is `false`, every page is `noindex` and `robots.txt` blocks crawlers.

1. Fill in `email`, `whatsapp` and `company` (Impressum) in `src/site.mjs`.
2. Set the `price` of each package (`null` shows "Preis folgt").
3. Describe the licensed offer in `offer` — only what the business has the rights to distribute.
4. Have AGB, Widerrufsbelehrung and Datenschutzerklärung checked by a lawyer; add the AGB text in `src/pages/legal.mjs`.
5. Optional: add `ga4` / `metaPixel` IDs. They load only after consent in the cookie banner.
6. Set `live: true`, push, and submit `https://iptvgenuss.de/sitemap.xml` in Google Search Console.

## Deploy on Cloudflare Pages

1. Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git** → `medmaar/iptvgenuss.de`.
2. Build command `npm run build`, output directory `dist`, framework preset None, production branch `main`.
3. Every other branch gets its own preview URL (`<branch>.<project>.pages.dev`); `_headers` marks `*.pages.dev` as `noindex`.
4. **Custom domains → iptvgenuss.de** (and `www`) when ready to launch.

## Content rules

- German (`de-DE`), formal "Sie", prices in euros.
- Only describe what the business actually has the rights to offer. No third-party channel or brand claims, no channel/film counts, uptime figures, ratings or testimonials unless they are real and verifiable.
