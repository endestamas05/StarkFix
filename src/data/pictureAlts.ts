// ============================================================
// A fotók leírása (alt szöveg) három nyelven, a kép tényleges tartalma alapján.
// A Picture komponens innen veszi, így minden helyen ugyanaz a leírás jelenik meg.
// Új fotó esetén ide is fel kell venni.
// ============================================================

import type { Lang } from "../i18n/routes";

const alts: Record<string, Record<Lang, string>> = {
  "products/conservatory-shading-1": {
    de: "Lange Reihe verglaster Dachfenster eines Gebäudes, im Hintergrund bewaldete Hügel",
    en: "Long row of glazed roof windows on a building, with wooded hills in the background",
    hu: "Üvegezett tetőablakok hosszú sora egy épületen, a háttérben erdős dombok",
  },
  "products/conservatory-shading-2": {
    de: "Glasdach mit Aluminiumrahmen und Gitterrost auf einem Flachdach",
    en: "Glass roof with aluminium frames and a metal grating on a flat roof",
    hu: "Alumíniumkeretes üvegtető és fémrács egy lapostetőn",
  },
  "products/insect-screen-frame-1": {
    de: "Balkontür mit eingebautem Insektenschutzrahmen in einer hellen Fassade",
    en: "Balcony door with a fitted insect screen frame in a light-coloured facade",
    hu: "Erkélyajtó beépített keretes szúnyoghálóval, világos homlokzaton",
  },
  "products/insect-screen-frame-2": {
    de: "Liegendes Fenster mit eingebautem Insektenschutzrahmen",
    en: "Horizontal window with a fitted insect screen frame",
    hu: "Fekvő ablak beépített keretes szúnyoghálóval",
  },
  "products/insect-screen-pleated": {
    de: "Geschlossene Plissee-Insektenschutztür an einem Balkonausgang",
    en: "Closed pleated insect screen door at a balcony exit",
    hu: "Behúzott pliszé szúnyogháló-ajtó egy erkélykijáraton",
  },
  "products/interior-venetian-blind": {
    de: "Dreiteiliges dunkles Fenster mit weißen Innenjalousien in einem Innenraum",
    en: "Three-part dark window with white interior venetian blinds in a room",
    hu: "Háromrészes sötét keretes ablak fehér belső reluxákkal, beltéren",
  },
  "products/outdoor-roller-blind-green": {
    de: "Türkisfarbene Außenrollos an der Glasfront eines weißen Hauses, davor Sitzkissen auf der Terrasse",
    en: "Turquoise outdoor roller blinds on the glass front of a white house, with seat cushions on the terrace",
    hu: "Türkiz kültéri rolók egy fehér ház üvegfalán, előtte ülőpárnák a teraszon",
  },
  "products/outdoor-roller-blind-grey": {
    de: "Balkon mit heruntergelassenem dunklem Außenrollo, durch das Gewebe sind Nachbarhäuser zu sehen, davor Pflanzen",
    en: "Balcony with a lowered dark outdoor roller blind, neighbouring houses visible through the fabric, plants in front",
    hu: "Erkély leengedett sötét kültéri rolóval, a szöveten át látszanak a szomszédos házak, előtte növények",
  },
  "products/pergola": {
    de: "Pergola mit hellen, verstellbaren Lamellen vor einem Haus mit Natursteinfassade",
    en: "Pergola with light-coloured adjustable slats in front of a house with a natural stone facade",
    hu: "Pergola világos, állítható lamellákkal egy terméskő homlokzatú ház előtt",
  },
  "products/service": {
    de: "Monteur in blau-weißem Shirt arbeitet auf einem Gerüst an einer Außenjalousie",
    en: "Fitter in a blue and white shirt working on an external venetian blind from scaffolding",
    hu: "Kék-fehér pólós szerelő egy kültéri zsaluzián dolgozik az állványon",
  },
  "products/shutters": {
    de: "Fast ganz geschlossener heller Rollladen an einem Fenster in einer hellen Fassade",
    en: "Almost fully closed light-coloured roller shutter on a window in a light facade",
    hu: "Majdnem teljesen leengedett világos redőny egy ablakon, világos homlokzaton",
  },
  "references/conservatory-slanted-windows/conservatory-slanted-windows-1": {
    de: "Luftaufnahme eines dunklen Hauses mit Schrägdach, Solarmodulen, Dachfenstern und einem Pool im Garten",
    en: "Aerial view of a dark house with a pitched roof, solar panels, roof windows and a pool in the garden",
    hu: "Légi felvétel egy sötét, magastetős házról napelemekkel, tetőablakokkal és medencével a kertben",
  },
  "references/conservatory-slanted-windows/conservatory-slanted-windows-2": {
    de: "Dunkles Haus mit markantem Giebel und großer verglaster Fläche unter blauem Himmel",
    en: "Dark house with a striking gable and a large glazed area under a blue sky",
    hu: "Sötét ház jellegzetes oromzattal és nagy üvegfelülettel, kék ég alatt",
  },
  "references/conservatory-slanted-windows/conservatory-slanted-windows-3": {
    de: "Zwei beschattete Dachfenster im dunklen Metalldach, daneben Solarmodule",
    en: "Two shaded roof windows in a dark metal roof, with solar panels beside them",
    hu: "Két árnyékolt tetőablak sötét fémtetőben, mellettük napelemek",
  },
  "references/linz-harbour/linz-harbour-1": {
    de: "Mehrstöckiges Gebäude im Hafen Linz mit Jalousien an den Fenstern unter blauem Himmel",
    en: "Multi-storey building at the Port of Linz with venetian blinds on its windows under a blue sky",
    hu: "Többemeletes épület a linzi kikötőben zsaluziákkal az ablakokon, kék ég alatt",
  },
  "references/linz-harbour/linz-harbour-2": {
    de: "Nahaufnahme der Fassade im Hafen Linz mit Jalousien in langen Fensterreihen",
    en: "Close-up of the facade at the Port of Linz with venetian blinds in long rows of windows",
    hu: "A linzi kikötői homlokzat közelről, zsaluziákkal a hosszú ablaksorokban",
  },
  "references/linz-harbour/linz-harbour-3": {
    de: "Helle Fassade im Hafen Linz mit schmalen, hohen Fenstern",
    en: "Light-coloured facade at the Port of Linz with tall, narrow windows",
    hu: "Világos homlokzat a linzi kikötőben, keskeny, magas ablakokkal",
  },
  "references/linz-harbour/linz-harbour-4": {
    de: "Gebäudeecke im Hafen Linz auf Betonstützen, daneben eine gelbe Hebebühne",
    en: "Building corner at the Port of Linz on concrete columns, with a yellow lifting platform beside it",
    hu: "Betonoszlopokon álló épületsarok a linzi kikötőben, mellette sárga emelőkosár",
  },
  "references/turquoise-outdoor-roller-blinds": {
    de: "Türkisfarbene Außenrollos an einem weißen Haus, davor Garten mit Rasen und Sitzkissen",
    en: "Turquoise outdoor roller blinds on a white house, with a lawn and seat cushions in front",
    hu: "Türkiz kültéri rolók egy fehér házon, előtte füves kert és ülőpárnák",
  },
  "references/venetian-blind-conversion/venetian-blind-conversion-1": {
    de: "Terrasse eines Hauses mit Flachdach, an den Fensterfronten dunkle Außenjalousien",
    en: "Terrace of a flat-roofed house with dark external venetian blinds on the window fronts",
    hu: "Lapostetős ház terasza, az üvegfalakon sötét kültéri zsaluziákkal",
  },
  "references/venetian-blind-conversion/venetian-blind-conversion-2": {
    de: "Breite Fensterfront mit dunklen Außenjalousien an einer Terrasse, links ein zugeklappter Sonnenschirm",
    en: "Wide window front with dark external venetian blinds on a terrace, a folded parasol on the left",
    hu: "Széles ablakfront sötét kültéri zsaluziákkal egy teraszon, balra összecsukott napernyő",
  },
  "references/venetian-blind-conversion/venetian-blind-conversion-3": {
    de: "Mit Schutzfolie abgedeckte Fensterfront während der Arbeiten, davor eine Leiter auf der Terrasse",
    en: "Window front covered with protective film during the work, with a ladder on the terrace",
    hu: "Védőfóliával takart ablakfront a munkálatok közben, előtte létra a teraszon",
  },
};

/** A fotó leírása az adott nyelven; ha nincs a listában, undefined. */
export function pictureAlt(src: string, lang: Lang): string | undefined {
  const key = src.replace(/^\/images\//, "").replace(/\.webp$/, "");
  return alts[key]?.[lang];
}
