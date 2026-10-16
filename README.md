# StarkFix Austria – Website

This repository contains the source code for the official static website of StarkFix Austria.

## 📄 Description

This website presents the services, contact details, and general information about StarkFix Austria.  
It is built with [Astro](https://astro.build) (static HTML, CSS, and JavaScript) and is hosted via GitHub Pages.

## 🛠️ Development

```sh
npm install
npm run dev      # local dev server at http://localhost:4321
npm run build    # static site into dist/
```

Every page exists in German, English and Hungarian (`/de/…`, `/en/…`, `/hu/…`).

- **Texts:** `src/i18n/de.ts`, `src/i18n/en.ts`, `src/i18n/hu.ts` – one file per language.
- **URLs:** `src/i18n/routes.ts` – page slugs per language and the old `.html` file names, which redirect to the new URLs.
- **Layout and sections:** `src/layouts/` and `src/components/`.
- **Static files** (CSS, JS, images, `CNAME`): `public/`.

Pushing to `main` builds and deploys the site (`.github/workflows/deploy.yml`).

## 🌐 Live Version

The website is available at: [www.starkfixaustria.at)  

## ⚖️ Legal Notice

© 2025 StarkFix Austria. All rights reserved.  
All source code, images, and other content are the property of StarkFix Austria.  
Reproduction, distribution, or modification is strictly prohibited without prior written permission from the copyright holder.

---

info@starkfixaustria.at
