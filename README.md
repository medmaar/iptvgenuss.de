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

- `src/site.mjs`: business details, contact email, the free trial, the 10 monthly/yearly device-price combinations and the
  current homepage offer supplied by the owner.
- `src/pages/home.mjs`: renders the homepage using `src/pages/home.html`.
- `public/css/home.css`: responsive theme and logo sizing.
- `public/js/home.js`: mobile menu, device selector and email enquiry selection.
- `public/brand/genuss-iptv.svg`: white genuss / yellow iptv logo, with a padded
  viewBox to keep the text descenders inside the image.
- `build.mjs`: static build and validation.

Prices, catalogue counts, named programme features and contact email were
supplied by the owner. The homepage has exactly three cards: a free trial for
one device, one month, and one year. The paid plans support 1–5 simultaneous
devices. Choosing a package prepares an email to
`kontakt@iptvgenuss.de` with the chosen duration, total price and device count;
free-test links prepare a test enquiry. The site does not process payments or
send email itself. The supplied WhatsApp number is a placeholder and is not
published. The homepage uses no tracking scripts, cookies or browser storage.
The annual plan alone includes the free IBO Player subscription / IBO Player Pro
bonus. The eight common features appear on all three cards and throughout the
hero, feature grid, device section and FAQ. No trial duration is invented.

## Deployment

Cloudflare Pages: production branch `main`, build command `npm run build`, output
`dist`, framework preset None. The Build site GitHub action also rebuilds and
commits `dist/` after source changes on `main`.

`site.live` remains `false`: the homepage is noindex and robots.txt blocks
crawlers. Complete the business identity, licensed offer and legal content,
then obtain the owner's launch approval before enabling indexing. Legal pages
can be added in the later multipage phase.

## Customer reviews

`customerReviewGroups` in `src/site.mjs` contains the 60 historical reviews from
`Reviews german.txt`: 20 Trustpilot reviews, 20 WhatsApp messages and 20 Google
reviews. The owner confirmed that these are genuine reviews retrieved before
closing the former platforms and explicitly authorized their publication.
Their provenance has not been independently verified; no verified badges,
platform links or aggregate-rating structured data are added.

Review wording, author abbreviations, countries and supplied star ratings are
preserved. Trailing list numbers on author names are omitted from display.
WhatsApp messages have no invented ratings. The former sample labels are gone.
The responsive carousels use only a compact seven-visible-dot strip, with no
arrows, pause button, counter or visible scrollbar. A gold marker moves across
the dots as reviews advance, then the dot track slides to reveal the next
positions. Both stay synchronized with autoplay, swipes and keyboard navigation;
the track rebases without animation at an infinite-loop boundary. Offscreen dot
controls are excluded from the tab order and accessibility tree. Each row loops seamlessly
through all 20 reviews; offscreen, inert clones provide the wrap while the
original content appears once to assistive technology. Swiping and keyboard
navigation remain available. The most visible platform row begins advancing
after 1.6 seconds, then advances every 4.2 seconds after settling; other rows
wait until scrolled into view. Hover, focus, hidden tabs and reduced-motion
preferences suspend automatic movement. Larger gaps separate the platform rows.

## Hero photograph

`public/images/hero-goalkeeper.webp` is a landscape adaptation of the owner-supplied
goalkeeper photograph. It is preloaded and served locally, with
responsive cover positioning and a teal overlay in `public/css/home.css`.
The overlay is darker on phones to keep the heading, description and enquiry
links readable. The image is included in the asset fingerprint used for cache
refreshes.
