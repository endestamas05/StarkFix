// Every .webp photo exists in three widths: name-400.webp, name-800.webp and name.webp
// (at most 1600px, see scripts/optimize-images.mjs).
export function srcsetFor(src: string): string | undefined {
  if (!src.endsWith(".webp")) return undefined;
  const base = src.slice(0, -".webp".length);
  return `${base}-400.webp 400w, ${base}-800.webp 800w, ${src} 1600w`;
}

export const contentSizes = "(max-width: 600px) 100vw, (max-width: 1200px) 800px, 1200px";
