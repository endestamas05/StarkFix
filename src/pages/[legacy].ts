// Redirect pages for the old URLs (e.g. /Rollläden.html → /de/rolllaeden/),
// so links and search results pointing at the old site keep working.
// GitHub Pages cannot send real HTTP redirects, so this is a tiny HTML page.
import type { APIRoute } from "astro";
import { languages, legacyFiles, pageKeys, pageUrl } from "../i18n";

export function getStaticPaths() {
  return pageKeys.flatMap((page) =>
    languages
      .filter((lang) => legacyFiles[page]?.[lang])
      .map((lang) => ({ file: legacyFiles[page]![lang], target: pageUrl(page, lang) }))
      // The old index.html is now the language detection page at "/".
      .filter(({ file }) => file !== "index.html")
      .map(({ file, target }) => ({ params: { legacy: file }, props: { target } })),
  );
}

export const GET: APIRoute = ({ props, site }) => {
  const target = props.target as string;
  const absolute = new URL(target, site).href;
  const html = `<!doctype html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>StarkFix Austria</title>
    <link rel="canonical" href="${absolute}" />
    <meta name="robots" content="noindex" />
    <script>location.replace(${JSON.stringify(target)} + location.hash);</script>
    <noscript><meta http-equiv="refresh" content="0; url=${target}" /></noscript>
  </head>
  <body>
    <a href="${target}">${absolute}</a>
  </body>
</html>
`;
  return new Response(html, { headers: { "Content-Type": "text/html; charset=utf-8" } });
};
