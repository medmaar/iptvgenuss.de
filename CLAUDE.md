# iptvgenuss.de

Static German site for IPTV Genuss, built with `node build.mjs` into `dist/` (not committed) and deployed on Cloudflare Pages (build command `npm run build`, output `dist`).

## Standing rules

- All business facts live in `src/site.mjs`; never hard-code prices, contact details or company data in pages.
- Content: German, formal "Sie". Do not add claims about third-party channels or brands (e.g. Sky, DAZN, Bundesliga, PPV), channel/film counts, uptime figures, ratings or testimonials unless the owner provides them and they are verifiable. Describe only the licensed offer in `offer`.
- `npm run build` must pass (it fails on broken links/anchors, missing or duplicate `<h1>`, invalid JSON-LD).
- Keep `site.live = false` until the owner approves the launch.
- Push changes straight to `main` (the owner's standing instruction); Cloudflare Pages deploys `main` to production.
