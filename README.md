# Boyuan (Ben) Wang — portfolio draft

Based on https://github.com/BracoZS/astro-starter-portfolio (MIT). Original LICENSE retained.

## Run

Node 24. `npm ci`, then `npm run dev`. Build with `npm run build`.

## GitHub Pages

Create the public repository `benwang047.github.io`, push this source to `main`, and select GitHub Actions under Settings → Pages. The included workflow builds and deploys the static site. This setup assumes a user site at the domain root, not a project site under a subpath.

## Before publishing

This is an editorial draft, not an approved public release. Review all content. The hand project uses media from the public Duke GRL Shadow project with visible credit. Confirm that attribution and reuse are appropriate. Modular research currently has a high-level description only; check its disclosure boundary. Intubation and Trio have no project images yet. Autolab has only a confidential teaser. Resume/GitHub links are intentionally absent until provided. The canonical URL is https://benwang047.github.io; GitHub Actions also sets the URL from the repository owner. Remove `noindex, nofollow` in BaseHead.astro and the `Disallow: /` rule in public/robots.txt when the public content is approved.

Edit `src/site.config.ts` for identity and links. Project text lives in `src/content/work/*.md`. Homepage order and summary cards live in `src/pages/index.astro`. Theme colors live in `src/styles/global.css`.

## Content decisions

Hardware ownership comes first. Distinguish personal contributions from team algorithms. Do not claim completed physical validation for modular search results. Do not publish internal images or performance numbers from confidential work. Add real build photos, CAD details, and short experiment clips in the next pass.
