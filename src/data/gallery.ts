// ============================================================
// A galéria képei: a public/images alatt tárolt összes fotó.
// A "category" a termék, ezen szűrhet a látogató. A "reference" a referencia
// sorszáma a nyelvi fájlokban: ilyenkor a kép neve a referencia címe lesz.
// Új kép esetén ide is fel kell venni.
// ============================================================

import type { PageKey } from "../i18n/routes";

export type GalleryCategory = Exclude<PageKey, "home" | "legal" | "privacy" | "cookies" | "gallery" | "awnings">;

export interface GalleryPicture {
  src: string;
  category: GalleryCategory;
  reference?: number;
}

const linz = "/images/references/linz-harbour/linz-harbour";
const venetian = "/images/references/venetian-blind-conversion/venetian-blind-conversion";
const slanted = "/images/references/conservatory-slanted-windows/conservatory-slanted-windows";

export const galleryPictures: GalleryPicture[] = [
  { src: `${linz}-1.webp`, category: "venetianBlinds", reference: 0 },
  { src: `${slanted}-1.webp`, category: "conservatoryShading", reference: 2 },
  { src: "/images/references/turquoise-outdoor-roller-blinds.webp", category: "outdoorRollerBlinds" },
  { src: `${venetian}-1.webp`, category: "venetianBlinds", reference: 1 },
  { src: "/images/products/shutters.webp", category: "shutters" },
  { src: "/images/products/pergola.webp", category: "pergolas" },
  { src: `${linz}-2.webp`, category: "venetianBlinds", reference: 0 },
  { src: "/images/products/interior-venetian-blind.webp", category: "interiorShading" },
  { src: "/images/products/insect-screen-pleated.webp", category: "insectScreens" },
  { src: `${slanted}-2.webp`, category: "conservatoryShading", reference: 2 },
  { src: "/images/products/outdoor-roller-blind-green.webp", category: "outdoorRollerBlinds" },
  { src: "/images/products/service.webp", category: "service" },
  { src: `${venetian}-2.webp`, category: "venetianBlinds", reference: 1 },
  { src: "/images/products/conservatory-shading-1.webp", category: "conservatoryShading" },
  { src: `${linz}-3.webp`, category: "venetianBlinds", reference: 0 },
  { src: "/images/products/insect-screen-frame-1.webp", category: "insectScreens" },
  { src: "/images/products/outdoor-roller-blind-grey.webp", category: "outdoorRollerBlinds" },
  { src: `${slanted}-3.webp`, category: "conservatoryShading", reference: 2 },
  { src: `${venetian}-3.webp`, category: "venetianBlinds", reference: 1 },
  { src: "/images/products/insect-screen-frame-2.webp", category: "insectScreens" },
  { src: `${linz}-4.webp`, category: "venetianBlinds", reference: 0 },
  { src: "/images/products/conservatory-shading-2.webp", category: "conservatoryShading" },
];

// A szűrők sorrendje; csak azok a termékek, amelyekhez van fotó.
export const galleryCategories: GalleryCategory[] = [
  "venetianBlinds",
  "conservatoryShading",
  "outdoorRollerBlinds",
  "insectScreens",
  "shutters",
  "interiorShading",
  "pergolas",
  "service",
];
