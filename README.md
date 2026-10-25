# Federico Del Pup — Portfolio

Personal portfolio in Italian and English. Computer Science graduate from the University of Udine, now studying Computer Science at the University of Padua (major IMS). Personal projects, thesis and web commissions.

## Stack

Static HTML, CSS and JavaScript. No build step or runtime dependencies. Inter is loaded from Google Fonts; a system fallback remains available.

## Features

- IT/EN switch; optional localStorage persistence and shareable `?lang=it` / `?lang=en` URLs.
- Light/dark theme with system preference fallback.
- Responsive project list, academic journey and thesis section.
- Visible content without JavaScript; mobile navigation remains available.
- Keyboard focus, skip link, Escape to close the menu and reduced-motion support.
- A single entrance animation and subtle link interactions; no magnetic motion.
- Shared bilingual custom 404 with the GitHub Pages deployment base.

## Run locally

Serve this folder using any static HTTP server, for example `npx serve .`.

## Files

- `index.html`: Italian content and English translations in `data-en` attributes.
- `assets/css/styles.css`: design tokens, themes and responsive layouts.
- `assets/js/script.js`: theme, language, navigation and year.
- `404.html`: error page; absolute assets use `/FedericoDelPup-portfolio/`.
- `PRODUCT.md`: confirmed product and profile facts.
- `DESIGN.md`: current visual conventions.

To update bilingual text, edit the Italian element content and its complete English `data-en` value. Labels use `data-en-aria`. Avoid placing translatable elements inside another translatable element.

## Deployment

The existing GitHub Actions workflow publishes to GitHub Pages on push to `main`. Production base: `/FedericoDelPup-portfolio/`. A different repository name or custom domain requires updating the 404 asset/home paths, canonical URL, sitemap and social metadata.

## Content pending

The thesis repository will be linked when published. The Bibliography repository URL has not been supplied. No placeholder action is shown. Dates of graduation, thesis outcomes and hackathon results must not be invented.

## License

MIT — see LICENSE.
