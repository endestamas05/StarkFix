// ============================================================
// Company details for the legal notice (Impressum) and the privacy policy.
// Fields set to null are left out of the page; the build prints a
// warning for each of them until they are filled in.
// ============================================================

import type { Lang } from "../i18n/routes";

/** The Austrian company operating starkfixaustria.at. */
export const company = {
  legalName: "StarkFix e.U.",
  /** Owner (e.U. = sole proprietorship), in each language's name order. */
  representative: { de: "László Stark", en: "László Stark", hu: "Stark László" } as Record<Lang, string>,
  /** Registered office as in the company register (Firmenbuch). */
  registeredAddress: { street: "Schickmayrstraße 14/2. Stock/7", postalCity: "4030 Linz" },
  /** Where customers can reach the company (also shown in the Contact section). */
  businessAddress: { street: "Denkstraße 29/6", postalCity: "4030 Linz" },
  phone: "+43 699 18391466",
  phoneHref: "tel:+4369918391466",
  email: "info@starkfixaustria.at",
  website: "www.starkfixaustria.at",
  websiteHref: "https://www.starkfixaustria.at",
  registerNumber: "FN 449857 f" as string | null,
  registerCourt: "Landesgericht Linz" as string | null,
  vatId: "ATU70433257" as string | null,
  tradeAuthority: "Magistrat der Landeshauptstadt Linz" as string | null,
  chamber: "Wirtschaftskammer Oberösterreich" as string | null,
};

/** The Hungarian sister company, shown on the Hungarian legal notice. */
export const hungarianCompany = {
  legalName: "StarkFix Korlátolt Felelősségű Társaság (StarkFix Kft.)",
  representative: "Stark László",
  address: "2330 Dunaharaszti, Gyárköz utca 4.",
  registerNumber: "13-09-245153",
  registerCourt: "Budapest Környéki Törvényszék Cégbírósága",
  taxNumber: "32982525-2-13",
  /** For now the Austrian contacts; replace the e-mail once there is a Hungarian one. */
  email: "info@starkfixaustria.at",
  phone: "+43 699 18391466",
  phoneHref: "tel:+4369918391466",
};

const missing = Object.entries(company)
  .filter(([, value]) => value === null)
  .map(([key]) => key);
if (missing.length) {
  console.warn(`[company] Missing legal notice details in src/data/company.ts: ${missing.join(", ")}`);
}
