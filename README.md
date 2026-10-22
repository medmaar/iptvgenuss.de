# iptvgenuss.de

A single German homepage for IPTV Genuss, built with Node 22 and deployed to
Cloudflare Pages from `main`. The teal, white and yellow theme is self-hosted;
there are no external fonts, stylesheets, scripts or image dependencies.

## Development

```sh
npm run build   # rebuilds dist/ and validates links, anchors, h1 and JSON-LD
npm run dev     # builds and serves dist/ on port 8788
```

The build publishes only the homepage. Earlier content modules remain in `src/`
for later work but are not built or included in the sitemap. Old service-page
URLs redirect to the corresponding homepage sections via `public/_redirects`.
`dist/` is committed so Cloudflare can deploy with or without a build step.

## Files

- `src/site.mjs`: business details, contact email, packages, all 20 device/duration
  prices and homepage information adapted from the supplied IPTVkanal reference.
- `src/pages/home.mjs`: renders the homepage using `src/pages/home.html`.
- `public/css/home.css`: responsive theme and logo sizing.
- `public/js/home.js`: mobile menu, device selector and email enquiry selection.
- `public/brand/genuss-iptv.svg`: white genuss / yellow iptv logo, with a padded
  viewBox to keep the text descenders inside the image.
- `build.mjs`: static build and validation.

Prices and contact email were supplied by the owner. Packages support 1–5
simultaneous devices. Choosing a package prepares an email to
`kontakt@iptvgenuss.de` with the chosen duration, total price and device count;
free-test links prepare a test enquiry. The site does not process payments or
send email itself. The supplied WhatsApp number is a placeholder and is not
published. The homepage uses no tracking scripts, cookies or browser storage.
Source-site reviews, contact details and unverifiable catalogue counts were not
imported.

## Deployment

Cloudflare Pages: production branch `main`, build command `npm run build`, output
`dist`, framework preset None. The Build site GitHub action also rebuilds and
commits `dist/` after source changes on `main`.

`site.live` remains `false`: the homepage is noindex and robots.txt blocks
crawlers. Complete the business identity, licensed offer and legal content,
then obtain the owner's launch approval before enabling indexing. Legal pages
can be added in the later multipage phase.
