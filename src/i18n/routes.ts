// ============================================================
// Languages, page URLs and the old (pre-Astro) file names.
// Every page exists in every language; this table is the single
// source of truth for links, the language switcher, hreflang,
// the sitemap and the redirects from the old URLs.
// ============================================================

export const languages = ["de", "en", "hu"] as const;
export type Lang = (typeof languages)[number];

export const defaultLang: Lang = "de";

export const pageKeys = [
  "home",
  "shutters",
  "venetianBlinds",
  "outdoorRollerBlinds",
  "interiorShading",
  "conservatoryShading",
  "pergolas",
  "awnings",
  "insectScreens",
  "service",
  "legal",
  "privacy",
] as const;
export type PageKey = (typeof pageKeys)[number];

// URL slug of each page per language ("" = the language's home page).
export const slugs: Record<PageKey, Record<Lang, string>> = {
  home: { de: "", en: "", hu: "" },
  shutters: { de: "rolllaeden", en: "shutters", hu: "redonyok" },
  venetianBlinds: { de: "jalousien", en: "venetian-blinds", hu: "zsaluziak" },
  outdoorRollerBlinds: {
    de: "aussenrollos",
    en: "outdoor-roller-blinds",
    hu: "kulteri-rollos-arnyekolok",
  },
  interiorShading: {
    de: "innenbeschattungen",
    en: "interior-shading",
    hu: "belso-arnyekolok",
  },
  conservatoryShading: {
    de: "wintergartenbeschattung",
    en: "conservatory-shading",
    hu: "telikerti-arnyekolok",
  },
  pergolas: { de: "pergolen", en: "pergolas", hu: "pergolak" },
  awnings: { de: "markisen", en: "awnings", hu: "konyokkaros-napellenzok" },
  insectScreens: {
    de: "insektenschutz",
    en: "insect-screens",
    hu: "szunyoghalok",
  },
  service: { de: "service", en: "service", hu: "szervizeles" },
  legal: { de: "impressum", en: "legal-notice", hu: "jogi-nyilatkozat" },
  privacy: { de: "datenschutz", en: "privacy-policy", hu: "adatvedelem" },
};

// Old file names, so links already indexed by Google keep working.
export const legacyFiles: Partial<Record<PageKey, Record<Lang, string>>> = {
  home: { de: "index.html", en: "index-en.html", hu: "index-hu.html" },
  shutters: { de: "Rollläden.html", en: "Shutters.html", hu: "redonyok.html" },
  venetianBlinds: {
    de: "Jalousien.html",
    en: "Venetian-blinds.html",
    hu: "zsaluziak.html",
  },
  outdoorRollerBlinds: {
    de: "Außenrollos.html",
    en: "Outdoor-roller-blinds.html",
    hu: "kulteri-rollos-arnyekolok.html",
  },
  interiorShading: {
    de: "Innenbeschattungen.html",
    en: "Interior-shading.html",
    hu: "belso-arnyekolok.html",
  },
  conservatoryShading: {
    de: "Wintergartenbeschattung.html",
    en: "Conservatory-shading.html",
    hu: "Telikerti-arnyekolok.html",
  },
  pergolas: { de: "Pergolen.html", en: "Pergolas.html", hu: "pergolak.html" },
  awnings: {
    de: "Markisen.html",
    en: "Awnings.html",
    hu: "konyokkaros-napellenzok.html",
  },
  insectScreens: {
    de: "Insektenschutz.html",
    en: "Insect-screens.html",
    hu: "szunyoghalok.html",
  },
  service: { de: "Service.html", en: "Service-en.html", hu: "szervizeles.html" },
  legal: { de: "legal.html", en: "legal-en.html", hu: "legal-hu.html" },
};

/** Site-relative URL of a page, e.g. pageUrl("shutters", "de") → "/de/rolllaeden/". */
export function pageUrl(page: PageKey, lang: Lang): string {
  const slug = slugs[page][lang];
  return slug ? `/${lang}/${slug}/` : `/${lang}/`;
}
