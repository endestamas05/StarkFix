import fs from "node:fs";
import { fileURLToPath } from "node:url";
import { defineConfig } from "astro/config";
import { PurgeCSS } from "purgecss";

// Bootstrap ships ~230 KB of CSS; the site uses a small part of it. After the build,
// drop the rules no page uses. Bootstrap's own JS is scanned too, because it adds
// classes at runtime (show, collapsing, carousel-item-next, modal-backdrop, …).
function purgeBootstrapCss() {
  return {
    name: "purge-bootstrap-css",
    hooks: {
      "astro:build:done": async ({ dir, logger }) => {
        const out = fileURLToPath(dir).replace(/\\/g, "/").replace(/\/$/, "");
        // Forward slashes: PurgeCSS treats paths as glob patterns.
        const file = `${out}/bootstrap/css/bootstrap.min.css`;
        const before = fs.statSync(file).size;
        const [result] = await new PurgeCSS().purge({
          content: [`${out}/**/*.html`, `${out}/javascript/*.js`, `${out}/bootstrap/js/*.js`],
          css: [file],
          // Set by Bootstrap's JS under a computed name, so the scan can't see it (dropdown position).
          dynamicAttributes: ["data-bs-popper"],
        });
        fs.writeFileSync(file, result.css);
        logger.info(`bootstrap.min.css: ${Math.round(before / 1024)} KB → ${Math.round(result.css.length / 1024)} KB`);
      },
    },
  };
}

export default defineConfig({
  site: "https://starkfixaustria.at",
  trailingSlash: "always",
  build: {
    format: "directory",
    // src/styles/site.css goes into the page itself: one render-blocking request less.
    inlineStylesheets: "always",
  },
  // Keep the HTML readable, like the hand-written pages were.
  compressHTML: false,
  integrations: [purgeBootstrapCss()],
  // Keep CSS readable for older iPhones (e.g. "max-width" media queries instead of "width <=").
  vite: { build: { cssTarget: "safari14" } },
});
