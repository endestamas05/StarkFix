import type { APIRoute } from "astro";
import { defaultLang, languages, pageKeys, pageUrl } from "../i18n";

export const GET: APIRoute = ({ site }) => {
  const absolute = (path: string) => new URL(path, site).href;

  const urls = pageKeys.flatMap((page) =>
    languages.map((lang) => {
      const alternates = languages
        .map((other) => `    <xhtml:link rel="alternate" hreflang="${other}" href="${absolute(pageUrl(page, other))}" />`)
        .concat(`    <xhtml:link rel="alternate" hreflang="x-default" href="${absolute(pageUrl(page, defaultLang))}" />`)
        .join("\n");
      return `  <url>
    <loc>${absolute(pageUrl(page, lang))}</loc>
${alternates}
    <priority>${page === "home" ? "1.00" : "0.80"}</priority>
  </url>`;
    }),
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join("\n")}
</urlset>
`;
  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
