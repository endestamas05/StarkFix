import de from "./de";
import en from "./en";
import hu from "./hu";
import type { Lang } from "./routes";
import type { Translation } from "./types";

export const translations: Record<Lang, Translation> = { de, en, hu };

export function t(lang: Lang): Translation {
  return translations[lang];
}

export * from "./routes";
export type { Translation } from "./types";
