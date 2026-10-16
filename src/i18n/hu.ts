import type { Translation } from "./types";

const hu: Translation = {
  ui: {
    openNavigation: "Navigáció megnyitása",
    toggleTheme: "Téma váltása",
    selectLanguage: "Nyelv kiválasztása",
    languageName: "Magyar",
    nav: {
      about: "Rólunk",
      products: "Termékek",
      references: "Referenciák",
      contact: "Kapcsolat",
    },
    back: "Vissza",
    allRightsReserved: "Minden jog fenntartva.",
    legalLink: "Jogi nyilatkozat",
    privacyLink: "Adatvédelem",
    image: (n) => `${n}. kép`,
    previousImage: "Előző kép",
    previous: "Előző",
    nextImage: "Következő kép",
    next: "Következő",
    close: "Bezárás",
    placeholderImage: "/images/placeholders/coming-soon-hu.svg",
  },

  // ------------------------------------------------------------
  // FŐOLDAL
  // ------------------------------------------------------------
  home: {
    meta: {
      title: "Árnyékolástechnika",
      description:
        "StarkFix Árnyékolástechnika: professzionális árnyékolók, redőnyök, szúnyoghálók, napellenzők és egyéb megoldások otthonra, irodába és üzlethelyiségbe. Modern design, minőségi kivitelezés, szakértő csapat Ausztriában és Magyarországon.",
    },
    heroAlt: (n) => `Referencia ${n}`,
    aboutTitle: "Rólunk",
    aboutText:
      "Cégünk 2016 óta foglalkozik professzionális árnyékolástechnikával, de csapatunk több mint 20 éves szakmai tapasztalattal rendelkezik a területen. Fő célunk, hogy ügyfeleink számára minőségi, tartós és esztétikus megoldásokat nyújtsunk, legyen szó redőnyökről, reluxákról, napellenzőkről vagy egyedi árnyékoló rendszerekről. Ügyfélbarát hozzáállásunkkal, megbízható munkavégzéssel és precíz kivitelezéssel arra törekszünk, hogy minden projekt során maximálisan elégedett partnereket tudhassunk magunk mellett.",
    productsTitle: "Termékeink",
    products: {
      shutters: { title: "Redőnyök", tagline: "megbízható árnyékolás, egész évben" },
      venetianBlinds: { title: "Zsaluziák", tagline: "letisztult design, precíz fényvédelem" },
      outdoorRollerBlinds: {
        title: "Kültéri rollós árnyékolók",
        tagline: "modern megjelenés, hatékony védelem",
      },
      interiorShading: {
        title: "Belső árnyékolók",
        tagline: "stílusos fény- és hőszabályozás otthonában",
      },
      conservatoryShading: {
        title: "Télikerti árnyékolók",
        tagline: "optimális klíma egész évben",
      },
      pergolas: { title: "Pergolák", tagline: "időtálló elegancia a szabadban" },
      awnings: { title: "Könyökkaros napellenzők", tagline: "árnyék stílusosan" },
      insectScreens: {
        title: "Szúnyoghálók",
        tagline: "védelem rovarok ellen, kompromisszumok nélkül",
      },
      service: { title: "Szervizelés", tagline: "megbízható segítség, ha szükség van rá" },
    },
    referencesTitle: "Referenciák",
    references: [
      {
        title: "Linz kikötői zsaluziák",
        description: "Zsalúziák felszerelése a Linz-i kikitő egyik épületére.",
      },
      {
        title: "Zsaluzia speciális átalakítással",
        description:
          "Sodronyos vezetésű zsaluzia speciális átalakítással, Felső-Ausztriában.",
      },
      {
        title: "Télikert árnyékolás",
        description:
          "Egyedi árnyékolási megoldás nagy és egyedi formájú ablakfelületekkel rendelkező házra. Méretre készített rendszer a hatékony nap- és hővédelemért.",
      },
    ],
    contactTitle: "Kapcsolat",
    phoneLabel: "Telefon:",
    addressLabel: "Cím:",
    contactNote: "Kérdés esetén keressen minket bizalommal!",
  },

  // ------------------------------------------------------------
  // TERMÉKOLDALAK
  // ------------------------------------------------------------
  shutters: {
    meta: {
      title: "Redőnyök",
      description:
        "Redőnyök a StarkFixtől: tartós, biztonságos és energiatakarékos árnyékolók ablakokra és ajtókra. Alumínium és műanyag kivitel, motoros vagy kézi működtetés, kiváló hő- és hangszigetelés, széles színválaszték.",
    },
    heading: "Redőnyök",
    imageAlts: ["Modern redőnyök"],
    intro:
      "A redőnyök korszerű kialakítású kültéri árnyékolók, amelyek hatékony védelmet biztosítanak a napfény és a hő ellen, miközben esztétikusan illeszkednek az épület homlokzatához. <br />Kézi vagy motoros működtetéssel, műanyag vagy alumínium kivitelben is elérhetők, így minden igényhez igazodnak. <br />Ideális megoldást jelentenek családi házak, irodák és modern épületek számára, ahol a funkcionalitás és a megjelenés egyaránt fontos szempont.",
    advantagesTitle: "A redőnyök előnyei",
    advantages: [
      "Kiváló hőszigetelés télen-nyáron, energiamegtakarítás",
      "Teljes fényzárás, sötétítés és privát szféra",
      "Megbízható védelem betörés ellen, extra biztonság",
      "Zajcsökkentés, nyugodtabb otthoni környezet",
      "Véd a kíváncsi tekintetektől és az időjárástól",
      "Hosszú élettartam, minimális karbantartás",
      "Automatizálható, kényelmes vezérlés (motoros, okosotthon)",
    ],
  },

  venetianBlinds: {
    meta: {
      title: "Zsalúziák",
      description:
        "Zsalúziák a StarkFixtől: modern, esztétikus és funkcionális megoldások otthonok és irodák árnyékolására. Zsalúziák egyedi méretben, széles színválasztékban, időtálló kivitelben.",
    },
    heading: "Zsaluziák",
    imageAlts: ["Modern zsaluziák"],
    intro:
      "A zsaluziák korszerű, lamellás kialakítású kültéri árnyékolók, amelyek precíz fény- és hőszabályozást tesznek lehetővé nagy üvegfelületeken is. A lamellák dőlésszöge fokozatmentesen állítható, így a természetes fény mennyisége és a belső hőmérséklet optimálisan szabályozható, miközben a kilátás is megmarad. <br />A zsaluziák rendelhetők kézi vagy motoros mozgatással, sín- vagy sodronyos vezetési rendszerrel, valamint számos szín- és lamellatípusban. <br />Ideális választás modern családi házak, irodák és középületek homlokzatára, ahol a funkcionalitás mellett a letisztult, esztétikus megjelenés is fontos szempont.",
    advantagesTitle: "A zsaluziák előnyei",
    advantages: [
      "Kiváló fény- és hőszabályozás, akár teljes sötétítés",
      "Modern, esztétikus megjelenés minden homlokzaton",
      "Motoros vagy kézi vezérlés, okosotthon integráció",
      "Tartós, időjárásálló alumínium lamellák",
      "Energiatakarékosság: nyáron hűvös, télen meleg",
      "Sokféle szín, lamellaforma (C, S, Z)",
      "Családi házak, irodák, modern épületek ideális árnyékolója",
    ],
  },

  outdoorRollerBlinds: {
    meta: {
      title: "Kültéri rolós árnyékolók",
      description:
        "Kültéri rolós árnyékolók a StarkFixtől: modern, esztétikus és funkcionális megoldások otthonok és irodák külső árnyékolására. Kültéri rolók egyedi méretben, széles színválasztékban, időtálló kivitelben.",
    },
    heading: "Kültéri rollós árnyékolók",
    imageAlts: ["Zöld kültéri roló", "Szürke kültéri roló"],
    intro:
      "A kültéri rollós árnyékolók hatékony védelmet nyújtanak a napfény, hő és kíváncsi tekintetek ellen. Modern megjelenésüknek és sokoldalúságuknak köszönhetően családi házak, irodák és üzlethelyiségek számára is ideális választás. <br />Kézi vagy motoros működtetéssel, szúnyoghálóval kombinálva, számos színben és kivitelben elérhetők.",
    advantagesTitle: "A kültéri rollós árnyékolók előnyei",
    advantages: [
      "Hatékony hő- és fényvédelem, csökkenti a felmelegedést",
      "Megbízható védelem az időjárás viszontagságai ellen",
      "Teljes sötétítés és privát szféra igény szerint",
      "Könnyen kezelhető, motoros vagy kézi működtetés",
      "Szúnyoghálóval is kombinálható",
      "Hosszú élettartam, minimális karbantartás",
      "Széles szín- és típusválaszték, modern design",
    ],
  },

  conservatoryShading: {
    meta: {
      title: "Télikerti árnyékolók",
      description:
        "Télikerti árnyékolók a StarkFixtől: professzionális megoldások télikertek, üvegtetők és nagy üvegfelületek árnyékolására. Hatékony hővédelem, UV-szűrés, kellemes klíma, motoros vagy kézi működtetés, széles szín- és anyagválaszték.",
    },
    heading: "Télikerti árnyékolók",
    imageAlts: [
      "Télikerti árnyékoló 1",
      "Télikerti árnyékoló 2",
      "Télikerti árnyékoló 3",
      "Télikerti árnyékoló 4",
      "Télikerti árnyékoló 5",
    ],
    intro:
      "A télikerti árnyékolók kifejezetten télikertek, üvegtetők és nagy felületű üvegezett szerkezetek professzionális árnyékolására lettek tervezve. <br />Lehetővé teszik a bejutó napfény mennyiségének precíz szabályozását, hatékonyan mérséklik a nyári túlmelegedést, és hozzájárulnak az optimális belső klíma fenntartásához egész évben. <br />A rendszerek elérhetők motoros vagy kézi mozgatással, különféle színekben és anyagválasztékban, így tökéletesen igazodnak az egyedi építészeti és komfortigényekhez.",
    advantagesTitle: "A télikerti árnyékolók előnyei",
    advantages: [
      "Hatékony hővédelem, csökkenti a túlmelegedést",
      "Véd a káros UV-sugárzás ellen",
      "Kellemes klíma télen-nyáron",
      "Motoros vagy kézi működtetés",
      "Esztétikus megjelenés, többféle szín és anyag",
      "Könnyen tisztítható, időjárásálló",
    ],
  },

  pergolas: {
    meta: {
      title: "Pergolák",
      description:
        "Pergolák a StarkFixtől: modern, esztétikus és funkcionális megoldások teraszok, kertek és vendéglátóhelyek árnyékolására. Egyedi méret, széles színválaszték, időtálló kivitel.",
    },
    heading: "Pergolák",
    imageAlts: ["Modern pergolák"],
    intro:
      "A pergolák korszerű, időjárásálló kültéri árnyékoló rendszerek, amelyek nemcsak elegáns megjelenést kölcsönöznek a teraszoknak, kerteknek vagy vendéglátóhelyeknek, hanem hatékony védelmet is nyújtanak az időjárás viszontagságaival szemben. <br />Alumínium vagy fa szerkezettel, fix vagy mozgatható tetőmegoldással, integrált LED világítással és opcionális oldalfalakkal is elérhetők, így teljes mértékben testreszabhatók az egyedi igényekhez. <br />Ideális választás mindazok számára, akik szeretnék meghosszabbítani a kültéri tartózkodás időszakát, valamint növelni otthonuk vagy üzletük komfortját és értékét.",
    advantagesTitle: "A pergolák előnyei",
    advantages: [
      "Esztétikus, modern megjelenés bármilyen környezetben",
      "Véd az eső, nap és szél ellen, egész évben használható",
      "Mozgatható tető, árnyékolás igény szerint",
      "Bővíthető oldalfalakkal, LED világítással, fűtéssel",
      "Növeli az ingatlan értékét és komfortját",
      "Könnyen tisztítható, minimális karbantartás",
    ],
  },

  awnings: {
    meta: {
      title: "Könyökkaros napellenzők",
      description:
        "Könyökkaros napellenzők a StarkFixtől: modern, esztétikus és funkcionális megoldások teraszok, erkélyek és üzlethelyiségek árnyékolására. Egyedi méret, széles színválaszték, időtálló kivitel.",
    },
    heading: "Könyökkaros napellenzők",
    imageAlts: ["Könyökkaros napellenzők"],
    intro:
      "A könyökkaros napellenzők ideális megoldást nyújtanak teraszok, erkélyek és vendéglátóhelyek árnyékolására. Könnyen kezelhetők, modern megjelenésűek, és nagy felületet képesek lefedni. <br />Kézi vagy motoros működtetéssel, széles szín- és anyagválasztékkal rendelhetők, így minden igényhez igazíthatók.",
    advantagesTitle: "A könyökkaros napellenzők előnyei",
    advantages: [
      "Nagy árnyékolt felület, szabad térkihasználás",
      "Könnyű kezelhetőség, kézi vagy motoros működtetés",
      "Időjárásálló, UV-álló ponyva",
      "Modern, esztétikus megjelenés",
      "Széles szín- és mintaválaszték",
      "Hosszú élettartam, minimális karbantartás",
    ],
  },

  service: {
    meta: {
      title: "Szervizelés",
      description:
        "StarkFix szervizelés: árnyékolók, redőnyök, szúnyoghálók és egyéb árnyékolástechnikai rendszerek gyors, szakszerű javítása és karbantartása. Megbízható, tapasztalt csapat, minőségi alkatrészek, garanciával.",
    },
    heading: "Szervizelés",
    imageAlts: ["Szervizelés"],
    intro:
      "A StarkFix nemcsak új árnyékolók szakszerű telepítését vállalja, hanem meglévő rendszerek professzionális szervizelését és karbantartását is biztosítja. Legyen szó redőny, zsaluzia, napellenző, szúnyogháló vagy pergola javításáról, szakértő csapatunk gyorsan és megbízhatóan gondoskodik róla, hogy árnyékolója ismét kifogástalanul működjön.",
    advantagesTitle: "Miért válassza szervizszolgáltatásunkat?",
    advantages: [
      "Gyors, rugalmas kiszállás, akár sürgős esetekben is",
      "Tapasztalt, szakképzett szerelők",
      "Alkatrészbeszerzés és csere, garanciával",
      "Minden típusú árnyékoló javítása, karbantartása",
      "Precíz, tiszta munkavégzés, korrekt árak",
    ],
  },

  // ------------------------------------------------------------
  // ALNAVIGÁCIÓS OLDALAK
  // ------------------------------------------------------------
  interiorShading: {
    meta: {
      title: "Belső árnyékolók",
      description:
        "Belső árnyékolók a StarkFixtől: modern, esztétikus és funkcionális megoldások otthonok és irodák belső tereinek árnyékolására. Roletták, reluxák, pliszék, szalagfüggönyök – egyedi méretben, széles színválasztékban.",
    },
    heading: "Belső árnyékolók",
    navAriaLabel: "Belső árnyékoló típus választó",
    sections: [
      {
        navLabel: "Reluxa",
        heading: "Reluxa",
        imageAlts: ["Reluxa árnyékoló"],
        text: "A reluxák kiválóan szabályozzák a beáramló fényt, modern és letisztult megjelenést biztosítanak bármely helyiségben. Könnyen kezelhetők, tartósak, és számos színben, lamellaméretben elérhetők.",
        items: [
          "Precíz fényirányítás, tükröződésmentes munkakörnyezet",
          "Modern, letisztult design",
          "Könnyű kezelhetőség, egyszerű tisztítás",
        ],
      },
      {
        navLabel: "Pliszé",
        heading: "Pliszé",
        imageAlts: ["Pliszé árnyékoló"],
        text: "A pliszé árnyékolók korszerű, esztétikus árnyékolástechnikai megoldást jelentenek bármilyen ablakra. Egyedi, harmonikaszerű textil szerkezetük révén rendkívül rugalmasan mozgathatók, akár alulról felfelé, akár felülről lefelé is állíthatók. <br />Kiválóan alkalmazhatók speciális formájú, például ferde, íves vagy tetőtéri ablakok esetén is, így maximális fény- és belátásszabályozást biztosítanak.",
        items: [
          "Egyedi méretre gyártható, szinte bármilyen ablakformához",
          "Kiváló fény- és hőszabályozás",
          "Könnyű kezelhetőség, modern megjelenés",
        ],
      },
      {
        navLabel: "Roletta",
        heading: "Roletta",
        imageAlts: ["Roletta"],
        text: "A roletták letisztult, mégis hatékony belső árnyékolástechnikai megoldást kínálnak ablakok és ajtók számára. <br />Széles szín- és mintaválasztékban, fényáteresztő vagy teljesen sötétítő anyagokból is rendelhetők, így minden igényhez és enteriőrhöz könnyedén igazíthatók. <br />Egyszerű kezelhetőségük és sokoldalúságuk révén ideális választás otthoni és irodai környezetben egyaránt.",
        items: [
          "Fényáteresztő és sötétítő változatban",
          "Egyszerű, gyors felszerelés",
          "Széles szín- és mintaválaszték",
        ],
      },
      {
        navLabel: "Szalagfüggöny",
        heading: "Szalagfüggöny",
        imageAlts: ["Szalagfüggöny"],
        text: "A szalagfüggönyök esztétikus és funkcionális árnyékolástechnikai megoldást nyújtanak nagy üvegfelületek, irodák vagy tárgyalók számára. <br />Könnyen kezelhetők, modern megjelenésükkel illeszkednek bármilyen enteriőrhöz, és teljes mértékben egyedi méretben, igény szerinti szín- és anyagválasztékkal készülnek.",
        items: [
          "Nagy üvegfelületekhez ideális",
          "Egyedi méret, széles színválaszték",
          "Könnyű kezelhetőség, modern megjelenés",
        ],
      },
    ],
  },

  insectScreens: {
    meta: {
      title: "Szúnyoghálók",
      description:
        "Szúnyoghálók a StarkFixtől: hatékony rovarvédelem ablakokra és ajtókra, modern megjelenéssel. Fix, mobil és rolós kivitel, tartós anyagok, egyszerű használat, tökéletes illeszkedés minden nyílászáróra.",
    },
    heading: "Szúnyoghálók",
    navAriaLabel: "Szúnyogháló típus választó",
    sections: [
      {
        navLabel: "Pliszé",
        heading: "Szúnyogháló-pliszé",
        imageAlts: ["Szúnyogháló pliszé"],
        text: "Modern, harmonikaszerűen nyitható-zárható szerkezet, ideális nagyobb nyílásokhoz, teraszajtókhoz is. Könnyen kezelhető, tartós, esztétikus, kis helyen elfér.",
        items: [
          "Nagy nyílásokhoz, tolóajtókhoz is ideális",
          "Könnyen kezelhető, kis helyigény",
          "Tartós, esztétikus kivitel",
        ],
      },
      {
        navLabel: "Keret",
        heading: "Szúnyogháló-keret",
        imageAlts: ["Szúnyogháló keret 1", "Szúnyogháló keret 2"],
        text: "Klasszikus, fix vagy nyitható keretes megoldás ablakokra, ajtókra. Strapabíró alumínium vagy műanyag keret, UV-álló háló, egyszerű felszerelés.",
        items: [
          "Fix vagy nyitható kivitel",
          "Strapabíró, UV-álló háló",
          "Egyszerű felszerelés, hosszú élettartam",
        ],
      },
      {
        navLabel: "Rolók",
        heading: "Szúnyoghálós rolók",
        imageAlts: ["Szúnyoghálók"],
        text: "Fel- vagy oldalra húzható, helytakarékos, praktikus megoldás ablakokra, erkélyajtókra. Rugós vagy láncos működtetés, halk és megbízható mechanika.",
        items: [
          "Fel- vagy oldalra húzható kivitel",
          "Helytakarékos, szinte láthatatlan használaton kívül",
          "Halk, megbízható működés",
        ],
      },
    ],
  },

  // ------------------------------------------------------------
  // JOGI NYILATKOZAT
  // ------------------------------------------------------------
  legal: {
    meta: {
      title: "Jogi nyilatkozat",
      description: "Jogi nyilatkozat és impresszum a StarkFix Austria hivatalos weboldalán.",
    },
    heading: "Jogi nyilatkozat",
    intro: "A StarkFix Austria hivatalos weboldala.",
    copyrightTitle: "Szerzői jog",
    copyrightText:
      "A weboldalon található minden forráskód, kép és egyéb tartalom a StarkFix Austria tulajdona. Tilos a tartalom bármilyen formában történő másolása, terjesztése vagy módosítása a jogtulajdonos előzetes írásbeli engedélye nélkül.",
    imprintTitle: "Impresszum",
    labels: {
      company: "Cégnév:",
      representative: "Tulajdonos:",
      registeredAddress: "Székhely (cégjegyzék szerint):",
      businessAddress: "Üzleti cím:",
      phone: "Telefon:",
      email: "E-mail:",
      website: "Weboldal:",
      registerNumber: "Cégjegyzékszám:",
      registerCourt: "Cégbíróság:",
      vatId: "Közösségi adószám (UID):",
      businessPurpose: "Tevékenységi kör:",
      tradeAuthority: "Iparhatóság:",
      chamber: "Kamarai tagság:",
      tradeLaw: "Irányadó szakmai jogszabály:",
    },
    country: "Ausztria",
    businessPurpose:
      "Árnyékolástechnika – árnyékoló rendszerek értékesítése, szerelése, karbantartása és javítása",
    tradeLaw:
      'Osztrák iparűzési törvény (Gewerbeordnung, GewO), elérhető: <a href="https://www.ris.bka.gv.at" rel="noopener">www.ris.bka.gv.at</a>',
    mediaTitle: "Közzététel az osztrák médiatörvény (MedienG) 25. §-a alapján",
    mediaOwnerLabel: "Médiatulajdonos:",
    mediaPolicyLabel: "Alapvető irányvonal:",
    mediaPolicy:
      "Tájékoztatás a StarkFix Austria árnyékolástechnikai termékeiről és szolgáltatásairól.",
    disclaimerTitle: "Felelősség kizárása",
    disclaimerText:
      "A weboldalon található információk tájékoztató jellegűek, azok pontosságáért, teljességéért felelősséget nem vállalunk. A weboldal használatából eredő esetleges károkért a StarkFix Austria nem vállal felelősséget.",
    hungarianCompany: {
      title: "Magyarországi cég",
      intro: "A StarkFix magyarországi cégének adatai:",
      company: "Cégnév:",
      representative: "Ügyvezető:",
      address: "Székhely:",
      registerNumber: "Cégjegyzékszám:",
      registerCourt: "Nyilvántartó cégbíróság:",
      taxNumber: "Adószám:",
      hosting: "Tárhelyszolgáltató:",
      hostingValue:
        'GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA, <a href="https://support.github.com" rel="noopener">support.github.com</a>',
    },
  },

  // ------------------------------------------------------------
  // ADATVÉDELEM
  // ------------------------------------------------------------
  privacy: {
    meta: {
      title: "Adatvédelmi tájékoztató",
      description:
        "A StarkFix Austria adatvédelmi tájékoztatója: információk a személyes adatok kezeléséről ezen a weboldalon.",
    },
    heading: "Adatvédelmi tájékoztató",
    intro:
      "Személyes adatainak védelme fontos számunkra. Adatait kizárólag a jogszabályok (GDPR, az osztrák adatvédelmi törvény és az osztrák távközlési törvény, TKG 2021) alapján kezeljük. Ebben a tájékoztatóban a weboldalunkkal kapcsolatos adatkezelés legfontosabb kérdéseiről tájékoztatjuk.",
    controllerTitle: "Adatkezelő",
    controllerText: "A weboldalon történő adatkezelésért felelős:",
    sections: [
      {
        title: "Tárhely és szervernaplók",
        paragraphs: [
          "A weboldalt a GitHub Pages szolgáltatás biztosítja (GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA). A weboldal megnyitásakor a GitHub a működéshez szükséges adatokat kezeli, különösen az IP-címét, a látogatás dátumát és időpontját, a megnyitott oldalt, a böngésző típusát és az előzőleg meglátogatott oldalt (referrer). Ezek az adatok a weboldal kiszolgálásához, valamint biztonságának és stabilitásának biztosításához szükségesek.",
          'Az adatkezelés jogalapja a weboldal biztonságos és megbízható működtetéséhez fűződő jogos érdekünk (GDPR 6. cikk (1) bekezdés f) pont). Ennek során adatok kerülhetnek az Egyesült Államokba. A GitHub rendelkezik az EU–USA adatvédelmi keretrendszer (Data Privacy Framework) szerinti tanúsítással, amelyre az Európai Bizottság megfelelőségi határozata vonatkozik (GDPR 45. cikk). További információ: <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" rel="noopener">a GitHub adatvédelmi nyilatkozata</a>.',
        ],
      },
      {
        title: "Kapcsolatfelvétel",
        paragraphs: [
          "Ha e-mailben vagy telefonon felveszi velünk a kapcsolatot, az Ön által megadott adatokat (például nevét, elérhetőségeit és kérését) a megkeresés feldolgozása és szükség esetén árajánlat készítése céljából kezeljük. Az adatkezelés jogalapja a szerződéskötést megelőző lépések megtétele (GDPR 6. cikk (1) bekezdés b) pont), illetve a megkeresések megválaszolásához fűződő jogos érdekünk (GDPR 6. cikk (1) bekezdés f) pont).",
          "Az adatokat addig őrizzük, ameddig a megkeresés feldolgozásához szükséges. Szerződéskötés esetén a törvényes megőrzési kötelezettségnek megfelelően tároljuk őket (általában hét évig, az osztrák adórendtartás, BAO 132. §-a alapján). Adatait az Ön hozzájárulása nélkül nem adjuk át harmadik félnek.",
        ],
      },
      {
        title: "Sütik és helyi tárolás",
        paragraphs: [
          "A weboldal nem használ sütiket (cookie-kat). A beállítások megjegyzéséhez a weboldal a böngésző helyi tárolójában (localStorage) csak a választott nyelvet és színsémát (világos/sötét) menti el, és csak akkor, ha ezt a beállítást Ön maga módosítja. Ezek az adatok az Ön eszközén maradnak, nem jutnak el hozzánk, és nem szolgálnak követésre.",
          "Ez a tárolás az Ön által kifejezetten kért funkcióhoz feltétlenül szükséges, ezért hozzájárulás nélkül megengedett (TKG 2021 165. § (3) bekezdés). Ezeket az adatokat bármikor törölheti a böngésző beállításaiban.",
        ],
      },
      {
        title: "Nincs látogatottságmérés és követés",
        paragraphs: [
          "Nem használunk látogatottságmérő, követő vagy hirdetési szolgáltatásokat, és nem ágyazunk be harmadik féltől származó tartalmat (például betűtípust, térképet vagy videót). A weboldal minden fájlja közvetlenül a tárhelyszolgáltatótól töltődik be.",
        ],
      },
      {
        title: "Az Ön jogai",
        paragraphs: [
          'Önt megilleti a hozzáférés, a helyesbítés, a törlés, az adatkezelés korlátozása, az adathordozhatóság és a tiltakozás joga (GDPR 15–21. cikk). Jogai gyakorlásához kérjük, írjon nekünk: <a href="mailto:info@starkfixaustria.at">info@starkfixaustria.at</a>.',
          'Ha úgy véli, hogy adatainak kezelése sérti az adatvédelmi jogszabályokat, panaszt tehet a felügyeleti hatóságnál. Ausztriában ez az osztrák adatvédelmi hatóság (Datenschutzbehörde), Barichgasse 40–42, 1030 Bécs, <a href="https://www.dsb.gv.at" rel="noopener">www.dsb.gv.at</a>.',
        ],
      },
    ],
    updated: "Hatályos: 2026. október",
  },
};

export default hu;
