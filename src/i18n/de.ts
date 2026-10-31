import type { Translation } from "./types";

const de: Translation = {
  ui: {
    openNavigation: "Navigation öffnen",
    toggleTheme: "Thema wechseln",
    selectLanguage: "Sprache wählen",
    languageStorageNote: "Ihre Sprachauswahl wird in diesem Browser gespeichert.",
    languageName: "Deutsch",
    nav: {
      about: "Über uns",
      products: "Produkte",
      references: "Referenzen",
      gallery: "Galerie",
      contact: "Kontakt",
    },
    back: "Zurück",
    allRightsReserved: "Alle Rechte vorbehalten.",
    legalLink: "Impressum",
    privacyLink: "Datenschutz",
    cookiesLink: "Cookies",
    image: (n) => `Bild ${n}`,
    previousImage: "Vorheriges Bild",
    previous: "Vorheriges",
    nextImage: "Nächstes Bild",
    next: "Nächstes",
    close: "Schließen",
    placeholderImage: "/images/placeholders/coming-soon-de.svg",
  },

  // ------------------------------------------------------------
  // STARTSEITE
  // ------------------------------------------------------------
  home: {
    meta: {
      title: "Sonnenschutztechnik",
      description:
        "StarkFix Sonnenschutztechnik: Innovative Außen- und Innenbeschattung, Rollläden, Jalousien, Markisen und Insektenschutz für Wohn- und Geschäftsgebäude. Moderne Designs, fachgerechte Montage, zuverlässiger Service in Österreich und Deutschland.",
    },
    heroAlt: (n) => `Referenz ${n}`,
    aboutTitle: "Über uns",
    aboutText:
      "Unser Unternehmen hat sich seit 2016 auf den professionellen Sonnenschutz spezialisiert. Unser Team verfügt über mehr als 20 Jahre Erfahrung in diesem Bereich. Unser Hauptziel ist es, unseren Kunden hochwertige, langlebige und ästhetische Lösungen zu bieten. Dazu zählen Rollläden, Jalousien, Markisen und individuelle Systeme. Unser Ziel ist es, bei jedem Projekt die Zufriedenheit unserer Partner zu maximieren. Dies erreichen wir durch einen kundenorientierten Ansatz, verlässliche Arbeit und präzise Ausführung.",
    productsTitle: "Unsere Produkte",
    products: {
      shutters: { title: "Rollläden", tagline: "zuverlässiger Sonnenschutz, das ganze Jahr" },
      venetianBlinds: { title: "Jalousien", tagline: "modernes Design, präziser Lichtschutz" },
      outdoorRollerBlinds: { title: "Außenrollos", tagline: "moderner Look, effektiver Schutz" },
      interiorShading: {
        title: "Innenbeschattungen",
        tagline: "stilvolle Licht- und Wärmeregulierung für Ihr Zuhause",
      },
      conservatoryShading: {
        title: "Wintergartenbeschattung",
        tagline: "optimales Klima das ganze Jahr",
      },
      pergolas: { title: "Pergolen", tagline: "zeitlose Eleganz im Freien" },
      awnings: { title: "Markisen", tagline: "Schatten mit Stil" },
      insectScreens: { title: "Insektenschutz", tagline: "Schutz vor Insekten, ohne Kompromisse" },
      service: { title: "Service", tagline: "zuverlässige Hilfe, wenn Sie sie brauchen" },
    },
    referencesTitle: "Referenzen",
    references: [
      {
        title: "Jalousien im Hafen Linz",
        description: "Montage von Jalousien an einem Gebäude im Hafen Linz.",
      },
      {
        title: "Jalousie mit Spezialumbau",
        description: "Seilgeführte Jalousie mit Spezialumbau in Oberösterreich.",
      },
      {
        title: "Wintergartenbeschattung",
        description:
          "Individuelle Beschattungslösung für ein Haus mit großen und ungewöhnlich geformten Fensterflächen. Maßgeschneidertes System für einen wirksamen Sonnen- und Hitzeschutz.",
      },
    ],
    contactTitle: "Kontakt",
    phoneLabel: "Telefon:",
    addressLabel: "Adresse:",
    contactNote: "Bei Fragen kontaktieren Sie uns gerne!",
    heroTitle: "Licht, genau so viel Sie möchten.",
    lightLabel: "Lamellen verstellen",
    lightOpen: "Offen",
    lightClosed: "Zu",
    lightHint: "Probieren Sie es aus: Bewegen Sie die Lamellen.",
    referencesCta: "Bilder ansehen",
    heroPause: "Bildwechsel anhalten",
    heroPlay: "Bildwechsel starten",
    copyEmail: "E-Mail kopieren",
    copied: "Kopiert",
  },

  // ------------------------------------------------------------
  // PRODUKTSEITEN
  // ------------------------------------------------------------
  shutters: {
    meta: {
      title: "Rollläden",
      description:
        "Rollläden von StarkFix: moderne, ästhetische und funktionale Lösungen für die Außenbeschattung von Wohnungen und Büros. Rollläden nach Maß, große Farbauswahl, langlebige Ausführung.",
    },
    heading: "Rollläden",
    imageAlts: ["Moderne Rollläden"],
    intro:
      "Rollläden sind eine der am häufigsten verwendeten Lösungen für den Sonnenschutz im Außenbereich. Es konnte festgestellt werden, dass sie nicht nur einen effektiven Schutz vor Sonneneinstrahlung und Hitze bieten, sondern auch die Fassade des Gebäudes optisch aufwerten.<br /> Rollläden sind mit manueller oder motorisierter Steuerung sowie aus Kunststoff oder Aluminium erhältlich. <br />Sie eignen sich insbesondere für Einfamilienhäuser, Büroräume und moderne Gebäude.",
    advantagesTitle: "Vorteile der Rollläden",
    advantages: [
      "Hervorragende Wärmedämmung im Sommer und Winter, Energieeinsparung",
      "Komplette Verdunkelung, Sichtschutz und Privatsphäre",
      "Zuverlässiger Einbruchschutz, erhöhte Sicherheit",
      "Lärmschutz für ein ruhigeres Zuhause",
      "Schutz vor neugierigen Blicken und Witterungseinflüssen",
      "Lange Lebensdauer, minimaler Wartungsaufwand",
      "Automatisierbar, komfortable Steuerung (motorisiert, Smart Home)",
    ],
  },

  venetianBlinds: {
    meta: {
      title: "Jalousien",
      description:
        "Jalousien von StarkFix: moderne, ästhetische und funktionale Lösungen für die Außenbeschattung von Wohnungen und Büros. Außenjalousien nach Maß, große Farbauswahl, langlebige Ausführung.",
    },
    heading: "Jalousien",
    imageAlts: ["Moderne Jalousien"],
    intro:
      "Jalousien werden als moderne, lamellenbasierte Außenbeschattungssysteme bezeichnet. Sie ermöglichen eine präzise Licht- und Wärmeregulierung, auch bei großen Glasflächen. Der Neigungswinkel der Lamellen ist stufenlos verstellbar, sodass sowohl die Menge des natürlichen Lichts als auch die Innentemperatur reguliert werden können, während der Ausblick erhalten bleibt. <br />Jalousien sind mit manueller oder motorisierter Bedienung, mit Schienen- oder Seilführung sowie in einer Vielzahl von Farben und Lamellentypen erhältlich. <br />Sie stellen eine optimale Lösung für die Fassaden moderner Einfamilienhäuser, Büros und öffentlicher Gebäude dar, wobei neben der Funktionalität auch ein klares, ästhetisches Erscheinungsbild von großer Bedeutung ist.",
    advantagesTitle: "Vorteile der Jalousien",
    advantages: [
      "Hervorragende Licht- und Wärmeregulierung, sogar vollständige Verdunkelung",
      "Modernes, ästhetisches Erscheinungsbild für jede Fassade",
      "Motor- oder Handbedienung, Smart-Home-Integration",
      "Langlebige, wetterfeste Aluminiumlamellen",
      "Energiesparend: kühl im Sommer, warm im Winter",
      "Viele Farben, Lamellenformen (C, S, Z)",
      "Idealer Sonnenschutz für Einfamilienhäuser, Büros und moderne Gebäude",
    ],
  },

  outdoorRollerBlinds: {
    meta: {
      title: "Außenrollos",
      description:
        "Außenrollos von StarkFix: moderne, wetterfeste Außenbeschattung für Fenster und Fassaden. Effektiver Sonnen- und Sichtschutz, energiesparend, individuell anpassbar, in vielen Farben und Designs für Wohn- und Geschäftsgebäude.",
    },
    heading: "Außenrollos",
    imageAlts: ["Grünes Außenrollo", "Graues Außenrollo"],
    intro:
      "Der Einsatz von Außenrollos dient dazu, das Gebäude vor Sonneneinstrahlung, hohen Temperaturen und unerwünschten Blicken zu schützen. <br />Aufgrund ihres modernen Designs und ihrer Vielseitigkeit eignen sie sich insbesondere für den Einsatz in Einfamilienhäusern, Büros und Geschäftsräumen. <br />Sie sind mit manueller oder motorisierter Bedienung, mit integriertem Insektenschutz und in einer Vielzahl von Farben und Ausführungen erhältlich.",
    advantagesTitle: "Vorteile von Außenrollos",
    advantages: [
      "Effektiver Hitze- und Sonnenschutz, reduziert die Aufheizung",
      "Zuverlässiger Schutz vor Witterungseinflüssen",
      "Komplette Verdunkelung und Privatsphäre nach Wunsch",
      "Einfache Bedienung, motorisiert oder manuell",
      "Auch mit Insektenschutz kombinierbar",
      "Lange Lebensdauer, minimaler Wartungsaufwand",
      "Große Auswahl an Farben und Typen, modernes Design",
    ],
  },

  conservatoryShading: {
    meta: {
      title: "Wintergartenbeschattung",
      description:
        "Wintergartenbeschattung von StarkFix: Professionelle Lösungen für die Beschattung von Wintergärten, Glasdächern und großen Glasflächen. Effektiver Hitzeschutz, UV-Schutz und angenehmes Raumklima – individuell, motorisiert oder manuell, in vielen Farben und Designs.",
    },
    heading: "Wintergartenbeschattung",
    imageAlts: [
      "Wintergartenbeschattung 1",
      "Wintergartenbeschattung 2",
      "Wintergartenbeschattung 3",
      "Wintergartenbeschattung 4",
      "Wintergartenbeschattung 5",
    ],
    intro:
      "Wintergartenbeschattungen wurden speziell für die Beschattung von Wintergärten, Glasdächern und großen Glasflächen konzipiert. <br /> Sie dienen dazu, den Lichteinfall zu regulieren, sommerliche Überhitzungen zu minimieren und ganzjährig ein angenehmes Klima zu gewährleisten. <br /> Die Beschattungen können sowohl motorisch als auch manuell bedient werden und sind in einer Vielzahl von Farben und Materialien erhältlich.",
    advantagesTitle: "Vorteile der Wintergartenbeschattung",
    advantages: [
      "Effektiver Hitzeschutz, reduziert Überhitzung",
      "Schutz vor schädlicher UV-Strahlung",
      "Angenehmes Klima im Sommer und Winter",
      "Motor- oder Handbetrieb",
      "Ästhetisches Design, viele Farben und Materialien",
      "Leicht zu reinigen, wetterfest",
    ],
  },

  pergolas: {
    meta: {
      title: "Pergolen",
      description:
        "Pergolen von StarkFix: moderne, ästhetische und funktionale Lösungen für die Beschattung von Terrassen, Gärten und Gastronomiebereichen. Maßanfertigung, große Farbauswahl, langlebige Ausführung.",
    },
    heading: "Pergolen",
    imageAlts: ["Moderne Pergola"],
    intro:
      "Pergolen sind eine moderne Form der Außenbeschattung und zeichnen sich durch ihre Langlebigkeit aus. Mit ihrer eleganten Optik bieten sie Schutz auf Terrassen, in Gärten oder in der Gastronomie. Die Konstruktionen umfassen eine Aluminium- oder Holzbauweise, feste oder bewegliche Dächer, LED-Beleuchtungsanlagen sowie Seitenwände. <br />Wenn eine Verlängerung der Outdoor-Saison angestrebt wird und der Komfort und der Wert des Zuhauses oder des Geschäfts gesteigert werden sollen, ist diese Option ideal.",
    advantagesTitle: "Vorteile von Pergolen",
    advantages: [
      "Ästhetisches, modernes Erscheinungsbild in jeder Umgebung",
      "Schutz vor Regen, Sonne und Wind, ganzjährig nutzbar",
      "Bewegliches Dach, Beschattung nach Bedarf",
      "Erweiterbar mit Seitenwänden, LED-Beleuchtung, Heizung",
      "Steigert den Wert und Komfort der Immobilie",
      "Leicht zu reinigen, minimaler Wartungsaufwand",
    ],
  },

  awnings: {
    meta: {
      title: "Markisen",
      description:
        "Markisen von StarkFix: moderne, ästhetische und funktionale Lösungen für die Beschattung von Terrassen, Balkonen und Geschäftsräumen. Markisen nach Maß, große Farbauswahl, langlebige Ausführung.",
    },
    heading: "Markisen",
    imageAlts: ["Markisen"],
    intro:
      "Markisen sind eine ideale Lösung für die Beschattung von Terrassen, Balkonen sowie Gastronomiebereichen. Die Handhabung dieser Geräte ist unkompliziert, sie überzeugen durch ein zeitgenössisches Design und die Fähigkeit, großflächige Areale abzudecken. <br />Die Ausführung kann manuell oder motorisiert erfolgen und ist in einer breiten Auswahl an Farben und Materialien erhältlich. <br />So ist eine Anpassung an die jeweiligen Erfordernisse gewährleistet.",
    advantagesTitle: "Vorteile der Markisen",
    advantages: [
      "Große beschattete Fläche, freie Raumnutzung",
      "Einfache Bedienung, manuell oder motorisiert",
      "Wetterfestes, UV-beständiges Tuch",
      "Modernes, ästhetisches Erscheinungsbild",
      "Große Farb- und Musterauswahl",
      "Lange Lebensdauer, minimaler Wartungsaufwand",
    ],
  },

  service: {
    meta: {
      title: "Service",
      description:
        "StarkFix Service: professionelle Wartung, Reparatur und Modernisierung von Sonnenschutzsystemen. Zuverlässige Lösungen für Markisen, Jalousien, Rollläden, Pergolen und mehr.",
    },
    heading: "Service",
    imageAlts: ["Service"],
    intro:
      "Das Leistungsspektrum unseres Unternehmens umfasst die Montage neuer Sonnenschutzsysteme sowie die fachgerechte Wartung und Reparatur bestehender Anlagen. Wir reparieren und warten Sonnenschutzvorrichtungen wie Rollläden, Raffstores, Markisen, Insektenschutz und Pergolen. Wir garantieren eine schnelle und zuverlässige Ausführung, um die Funktionalität der Anlagen wiederherzustellen.",
    advantagesTitle: "Warum unseren Service wählen?",
    advantages: [
      "Schnelle, flexible Anfahrt – auch im Notfall",
      "Erfahrene, qualifizierte Monteure",
      "Ersatzteilbeschaffung und Austausch mit Garantie",
      "Reparatur und Wartung aller Sonnenschutztypen",
      "Präzise, saubere Arbeit, faire Preise",
    ],
  },

  // ------------------------------------------------------------
  // SEITEN MIT UNTERNAVIGATION
  // ------------------------------------------------------------
  interiorShading: {
    meta: {
      title: "Innenbeschattungen",
      description:
        "Innenbeschattungen von StarkFix: moderne, stilvolle und funktionale Lösungen für die Beschattung von Innenräumen. Rollos, Plissees, Jalousien und Lamellenvorhänge – maßgefertigt, große Farbauswahl, für Wohn- und Geschäftsräume.",
    },
    heading: "Innenbeschattungen",
    navAriaLabel: "Innenbeschattung Typauswahl",
    sections: [
      {
        navLabel: "Innenjalousie",
        heading: "Innenjalousie",
        imageAlts: ["Innenjalousie"],
        text: "Die Installation von Innenjalousien erlaubt die exakte Regulierung des Lichteinfalls und resultiert in einem zeitgenössischen, klaren Raumambiente. <br />Die Geräte zeichnen sich durch eine einfache Handhabung, eine lange Lebensdauer sowie eine breite Auswahl an Farben und Lamellenbreiten aus.",
        items: [
          "Präzise Lichtsteuerung, blendfreies Arbeiten",
          "Modernes, klares Design",
          "Einfache Bedienung, leichte Reinigung",
        ],
      },
      {
        navLabel: "Plissee",
        heading: "Plissee",
        imageAlts: ["Plissee"],
        text: "Plissees bieten eine moderne, elegante Lösung für jedes Fenster. Dank ihres besonderen, faltbaren Materials lassen sie sich flexibel von unten nach oben oder von oben nach unten bewegen. <br />Ideal auch für schräge, gebogene oder Dachfenster.",
        items: [
          "Maßanfertigung für nahezu jede Fensterform",
          "Hervorragende Licht- und Wärmeregulierung",
          "Einfache Bedienung, modernes Aussehen",
        ],
      },
      {
        navLabel: "Rollo",
        heading: "Rollo",
        imageAlts: ["Rollo"],
        text: "Rollos sind einfache, aber effektive Innenbeschattungen, die sich hervorragend für Fenster und Türen eignen. <br />Sie sind in verschiedenen Farben, Mustern sowie als lichtdurchlässige oder verdunkelnde Ausführung erhältlich.",
        items: [
          "Lichtdurchlässig oder verdunkelnd",
          "Einfache, schnelle Montage",
          "Große Auswahl an Farben und Mustern",
        ],
      },
      {
        navLabel: "Vertikaljalousien",
        heading: "Vertikaljalousien",
        imageAlts: ["Vertikaljalousien"],
        text: "Vertikaljalousien sind eine elegante und praktische Lösung für große Glasflächen, Büros és Besprechungsräume. <br />Sie sind einfach zu bedienen, modern im Design és werden individuell nach Maß gefertigt.",
        items: [
          "Ideal für große Glasflächen",
          "Maßanfertigung, große Farbauswahl",
          "Einfache Bedienung, modernes Design",
        ],
      },
    ],
  },

  insectScreens: {
    meta: {
      title: "Insektenschutz",
      description:
        "Insektenschutz von StarkFix: effektiver Schutz für Fenster und Türen gegen Insekten, modernes Design. Feste, mobile und Rollo-Varianten, langlebige Materialien, einfache Bedienung, perfekte Passform für jede Öffnung.",
    },
    heading: "Insektenschutz",
    navAriaLabel: "Insektenschutz Typauswahl",
    sections: [
      {
        navLabel: "Plissee",
        heading: "Plissee-Insektenschutz",
        imageAlts: ["Insektenschutz Plissee"],
        text: "Die vorliegende, als Ziehharmonika-faltbar beschriebene Lösung ist als ideal für große Öffnungen und Terrassentüren zu bewerten. <br />Das Produkt zeichnet sich durch eine einfache Handhabung, Langlebigkeit, Ästhetik und Platzersparnis aus.",
        items: [
          "Ideal für große Öffnungen und Schiebetüren",
          "Einfach zu bedienen, platzsparend",
          "Langlebig, ästhetisch",
        ],
      },
      {
        navLabel: "Rahmen",
        heading: "Insektenschutzrahmen",
        imageAlts: ["Insektenschutzrahmen 1", "Insektenschutzrahmen 2"],
        text: "Bei dem vorliegenden Objekt handelt es sich um eine klassische, feste oder zu öffnende Rahmenlösung für Fenster und Türen. Der Rahmen besteht aus robustem Aluminium oder Kunststoff, das Netz ist UV-beständig. Die Montage des Produkts ist unkompliziert.",
        items: [
          "Feste oder zu öffnende Ausführung",
          "Robustes, UV-beständiges Netz",
          "Einfache Montage, lange Lebensdauer",
        ],
      },
      {
        navLabel: "Rollos",
        heading: "Insektenschutzrollos",
        imageAlts: ["Insektenschutz"],
        text: "Es handelt sich um eine platzsparende und praktische Lösung für Fenster und Balkontüren, die sich nach oben oder zur Seite aufrollen lässt. Die Bedienung kann auf zwei Arten erfolgen: entweder durch eine Feder oder eine Kette. <br />Zudem zeichnet sich die Mechanik durch ihre leise und zuverlässige Funktionsweise aus.",
        items: [
          "Nach oben oder zur Seite aufrollbar",
          "Platzsparend, nahezu unsichtbar im Ruhezustand",
          "Leise, zuverlässige Bedienung",
        ],
      },
    ],
  },

  // ------------------------------------------------------------
  // IMPRESSUM
  // ------------------------------------------------------------
  legal: {
    meta: {
      title: "Impressum",
      description: "Impressum und rechtliche Hinweise auf der offiziellen Website von StarkFix Austria.",
    },
    heading: "Impressum",
    intro: "Die offizielle Website von StarkFix Austria.",
    copyrightTitle: "Urheberrecht",
    copyrightText:
      "Sämtlicher Quellcode, alle Bilder und sonstige Inhalte auf dieser Website sind Eigentum von StarkFix Austria. Jegliche Vervielfältigung, Verbreitung oder Veränderung der Inhalte ist ohne vorherige schriftliche Genehmigung des Rechteinhabers untersagt.",
    imprintTitle: "Impressum",
    labels: {
      company: "Firmenname:",
      representative: "Inhaber:",
      registeredAddress: "Firmensitz (lt. Firmenbuch):",
      businessAddress: "Geschäftsadresse:",
      phone: "Telefon:",
      email: "E-Mail:",
      website: "Website:",
      registerNumber: "Firmenbuchnummer:",
      registerCourt: "Firmenbuchgericht:",
      vatId: "UID-Nummer:",
      businessPurpose: "Unternehmensgegenstand:",
      professionalTitle: "Gewerbe / Berufsbezeichnung:",
      tradeAuthority: "Gewerbebehörde:",
      chamber: "Kammerzugehörigkeit:",
      tradeLaw: "Berufsrecht:",
    },
    country: "Österreich",
    businessPurpose:
      "Sonnenschutztechnik – Verkauf, Montage, Wartung und Reparatur von Sonnenschutzsystemen",
    tradeLaw:
      'Gewerbeordnung (GewO), abrufbar unter <a href="https://www.ris.bka.gv.at" rel="noopener">www.ris.bka.gv.at</a>',
    professionalTitle: "Tischler, eingeschränkt auf Bautischler; Handelsgewerbe mit Ausnahme der reglementierten Handelsgewerbe (Österreich)",
    mediaTitle: "Offenlegung gemäß § 25 Mediengesetz",
    mediaOwnerLabel: "Medieninhaber:",
    mediaPolicyLabel: "Grundlegende Richtung:",
    mediaPolicy:
      "Information über die Produkte und Dienstleistungen von StarkFix Austria im Bereich Sonnenschutztechnik.",
    disclaimerTitle: "Haftungsausschluss",
    disclaimerText:
      "Die auf dieser Website bereitgestellten Informationen dienen ausschließlich der allgemeinen Information. Für die Richtigkeit und Vollständigkeit der Inhalte wird keine Haftung übernommen. Soweit gesetzlich zulässig, übernimmt StarkFix Austria keine Haftung für Schäden, die aus der Nutzung der Website entstehen.",
  },

  // ------------------------------------------------------------
  // DATENSCHUTZ
  // ------------------------------------------------------------
  privacy: {
    meta: {
      title: "Datenschutzerklärung",
      description:
        "Datenschutzerklärung von StarkFix Austria: Informationen zur Verarbeitung personenbezogener Daten auf dieser Website.",
    },
    heading: "Datenschutzerklärung",
    intro:
      "Der Schutz Ihrer personenbezogenen Daten ist uns ein wichtiges Anliegen. Wir verarbeiten Ihre Daten ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, DSG, TKG 2021). In dieser Datenschutzerklärung informieren wir Sie über die wichtigsten Aspekte der Datenverarbeitung im Rahmen unserer Website.",
    controllerTitle: "Verantwortlicher",
    controllerText: "Verantwortlich für die Datenverarbeitung auf dieser Website ist:",
    sections: [
      {
        title: "Hosting und Server-Logfiles",
        paragraphs: [
          "Diese Website wird über GitHub Pages bereitgestellt, einen Dienst der GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA. Beim Aufruf der Website verarbeitet GitHub technisch notwendige Daten, insbesondere Ihre IP-Adresse, Datum und Uhrzeit des Zugriffs, die aufgerufene Seite, den Browsertyp sowie die zuvor besuchte Seite (Referrer). Diese Daten sind erforderlich, um die Website auszuliefern und ihre Sicherheit und Stabilität zu gewährleisten.",
          'Rechtsgrundlage ist unser berechtigtes Interesse an einer sicheren und zuverlässigen Bereitstellung der Website (Art. 6 Abs. 1 lit. f DSGVO). Dabei können Daten in die USA übermittelt werden. Nach eigenen Angaben nimmt GitHub am EU-U.S. Data Privacy Framework teil, für das ein Angemessenheitsbeschluss der Europäischen Kommission besteht (Art. 45 DSGVO), und stützt sich bei Übermittlungen in andere Länder ohne Angemessenheitsbeschluss in der Regel auf die Standardvertragsklauseln der Europäischen Kommission (Art. 46 DSGVO). Auf diese Logfiles haben wir keinen Zugriff. GitHub veröffentlicht dafür keine konkrete Speicherdauer; laut GitHub hängt sie vom Zweck der Erhebung und von rechtlichen Verpflichtungen ab. Weitere Informationen finden Sie in der <a href="https://docs.github.com/de/site-policy/privacy-policies/github-general-privacy-statement" rel="noopener">Datenschutzerklärung von GitHub</a>.',
        ],
      },
      {
        title: "Kontaktaufnahme",
        paragraphs: [
          "Wenn Sie uns per E-Mail oder Telefon kontaktieren, verarbeiten wir die von Ihnen mitgeteilten Daten (z. B. Name, Kontaktdaten und Ihr Anliegen), um Ihre Anfrage zu bearbeiten und gegebenenfalls ein Angebot zu erstellen. Rechtsgrundlage ist die Durchführung vorvertraglicher Maßnahmen (Art. 6 Abs. 1 lit. b DSGVO) bzw. unser berechtigtes Interesse an der Beantwortung von Anfragen (Art. 6 Abs. 1 lit. f DSGVO). E-Mails an info@starkfixaustria.at werden in unserem Auftrag von unserem E-Mail-Anbieter Hostinger International Ltd., 61 Lordou Vironos Street, 6023 Larnaka, Zypern, als Auftragsverarbeiter (Art. 28 DSGVO) verarbeitet. Nach den Angaben von Hostinger können Server und Unterauftragsverarbeiter auch außerhalb des EWR eingesetzt werden; für solche Übermittlungen sieht Hostinger die Standardvertragsklauseln der Europäischen Kommission vor (Art. 46 DSGVO).",
          "Wir speichern diese Daten, solange es für die Bearbeitung Ihrer Anfrage erforderlich ist. Kommt ein Vertrag zustande, bewahren wir die Daten im Rahmen der gesetzlichen Aufbewahrungspflichten auf (in der Regel sieben Jahre gemäß § 132 BAO). Darüber hinaus geben wir Ihre Daten ohne Ihre Einwilligung nur weiter, wenn dies zur Durchführung eines Vertrags erforderlich ist, wenn wir gesetzlich dazu verpflichtet sind (z. B. gegenüber Behörden) oder, soweit wir eine solche beauftragen, an unsere steuerliche Vertretung. Bei Anrufen und E-Mails sind außerdem die jeweiligen Telekommunikationsanbieter technisch beteiligt.",
        ],
      },
      {
        title: "Cookies und lokale Speicherung",
        paragraphs: [
          "Diese Website verwendet keine Cookies. Wenn Sie die Sprache selbst wählen, speichert die Website diese Auswahl im lokalen Speicher Ihres Browsers (localStorage); darauf weisen wir Sie im Sprachmenü hin. Sie bleibt gespeichert, bis Sie sie ändern oder löschen; eine automatische Ablauffrist gibt es nicht. Wenn Sie das Farbschema (hell/dunkel) selbst ändern, wird es im Sitzungsspeicher (sessionStorage) abgelegt und beim Schließen des Tabs oder Fensters gelöscht. Beim Sprachwechsel wird zusätzlich kurzzeitig die Scrollposition im sessionStorage abgelegt und nach dem Laden der neuen Seite sofort wieder gelöscht. Diese Angaben verbleiben auf Ihrem Gerät, werden nicht an uns übermittelt und dienen nicht der Nachverfolgung.",
          "Die Sprache speichern wir mit Ihrer Einwilligung, die Sie mit der Auswahl im Sprachmenü erteilen. Die kurzzeitige Speicherung im sessionStorage ist für die von Ihnen gewünschte Funktion unbedingt erforderlich (§ 165 Abs. 3 TKG 2021). Sie können diese Daten jederzeit über die Einstellungen Ihres Browsers löschen und damit auch Ihre Einwilligung widerrufen; die Website funktioniert auch ohne sie.",
          'Die Details finden Sie in unseren <a href="/de/cookies/">Cookie-Hinweisen</a>.',
        ],
      },
      {
        title: "Keine Analyse- und Trackingdienste",
        paragraphs: [
          "Wir setzen keine Analyse-, Tracking- oder Werbedienste ein und binden keine Inhalte von Drittanbietern (z. B. Schriftarten, Karten oder Videos) ein. Alle Dateien der Website werden direkt von unserem Hosting-Anbieter geladen.",
        ],
      },
      {
        title: "Bereitstellung der Daten und automatisierte Entscheidungen",
        paragraphs: [
          "Die Bereitstellung Ihrer Daten ist gesetzlich oder vertraglich nicht vorgeschrieben. Ohne die technisch notwendigen Daten (insbesondere die IP-Adresse) kann die Website jedoch nicht ausgeliefert werden. Die Kontaktaufnahme ist freiwillig; ohne Ihre Kontaktdaten können wir Ihre Anfrage nicht beantworten, und ohne die erforderlichen Angaben können wir kein Angebot erstellen und keinen Vertrag durchführen. Eine automatisierte Entscheidungsfindung einschließlich Profiling (Art. 22 DSGVO) findet nicht statt.",
        ],
      },
      {
        title: "Widerspruchsrecht",
        paragraphs: [
          '<strong>Soweit wir Ihre Daten auf Grundlage unseres berechtigten Interesses verarbeiten (Art. 6 Abs. 1 lit. f DSGVO), haben Sie das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen diese Verarbeitung Widerspruch einzulegen (Art. 21 DSGVO). Wenden Sie sich dazu einfach an <a href="mailto:info@starkfixaustria.at">info@starkfixaustria.at</a>.</strong>',
        ],
      },
      {
        title: "Ihre Rechte",
        paragraphs: [
          'Ihnen stehen grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch zu (Art. 15–21 DSGVO). Zur Ausübung Ihrer Rechte wenden Sie sich bitte an <a href="mailto:info@starkfixaustria.at">info@starkfixaustria.at</a>.',
          'Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt, können Sie sich bei der Aufsichtsbehörde beschweren. In Österreich ist dies die Datenschutzbehörde, Barichgasse 40–42, 1030 Wien, <a href="https://www.dsb.gv.at" rel="noopener">www.dsb.gv.at</a>. Sie können sich auch an die Aufsichtsbehörde Ihres gewöhnlichen Aufenthaltsorts oder Arbeitsplatzes in der EU wenden (Art. 77 DSGVO) und gerichtlichen Rechtsschutz in Anspruch nehmen (Art. 79 DSGVO).',
        ],
      },
    ],
    updated: "Stand: Oktober 2026",
  },

  // ------------------------------------------------------------
  // GALERIE
  // ------------------------------------------------------------
  gallery: {
    meta: {
      title: "Galerie",
      description: "Bildergalerie von StarkFix Austria: Fotos unserer Sonnenschutzlösungen und Referenzprojekte.",
    },
    heading: "Galerie",
    intro: "Alle unsere Fotos an einem Ort. Wählen Sie ein Produkt oder klicken Sie auf ein Bild, um es groß anzusehen.",
    all: "Alle",
    filterLabel: "Bilder nach Produkt filtern",
    linkText: "Alle Bilder ansehen",
  },

  // ------------------------------------------------------------
  // COOKIES
  // ------------------------------------------------------------
  cookies: {
    meta: {
      title: "Cookie-Hinweise",
      description: "Cookie-Hinweise von StarkFix Austria: Diese Website verwendet keine Cookies. Welche Einstellungen Ihr Browser speichert.",
    },
    heading: "Cookie-Hinweise",
    intro:
      'Diese Website verwendet keine Cookies und keine Analyse-, Tracking- oder Werbedienste. Deshalb sehen Sie auch kein Cookie-Banner. Weitere Informationen finden Sie in unserer <a href="/de/datenschutz/">Datenschutzerklärung</a>.',
    tableTitle: "Was in Ihrem Browser gespeichert wird",
    tableIntro:
      "Die folgenden Angaben werden nur gespeichert, wenn Sie die Sprache oder das Farbschema selbst ändern. Sie bleiben auf Ihrem Gerät, werden nicht an uns übermittelt und dienen nicht der Nachverfolgung.",
    columns: {
      name: "Name",
      storage: "Speicherort",
      provider: "Anbieter",
      purpose: "Zweck",
      lifetime: "Speicherdauer",
      type: "Art",
      legalBasis: "Rechtsgrundlage",
    },
    rows: [
      {
        name: "theme",
        storage: "sessionStorage",
        provider: "StarkFix e.U. (diese Website)",
        purpose: "Merkt sich das gewählte Farbschema (hell/dunkel).",
        lifetime: "Bis zum Schließen des Tabs oder Fensters",
        type: "Notwendig für die gewünschte Funktion, nur nach Ihrer Auswahl",
        legalBasis: "§ 165 Abs. 3 TKG 2021 (unbedingt erforderlich)",
      },
      {
        name: "starkfix-language",
        storage: "localStorage",
        provider: "StarkFix e.U. (diese Website)",
        purpose: "Merkt sich die gewählte Sprache für den nächsten Besuch der Startadresse.",
        lifetime: "Bis Sie es ändern oder löschen; kein automatischer Ablauf",
        type: "Einwilligung durch Ihre Auswahl im Sprachmenü",
        legalBasis: "§ 165 Abs. 3 TKG 2021 (Einwilligung)",
      },
      {
        name: "starkfix-language-position",
        storage: "sessionStorage",
        provider: "StarkFix e.U. (diese Website)",
        purpose: "Behält beim Sprachwechsel Ihre Position auf der Seite.",
        lifetime: "Wird nach dem Laden der neuen Seite sofort gelöscht",
        type: "Technisch, nur beim Sprachwechsel",
        legalBasis: "§ 165 Abs. 3 TKG 2021 (unbedingt erforderlich)",
      },
    ],
    sections: [
      {
        title: "So löschen Sie diese Daten",
        paragraphs: [
          "Sie können diese Daten jederzeit über die Einstellungen Ihres Browsers löschen (Websitedaten dieser Website). Die Website funktioniert auch ohne sie; es gelten dann wieder die Standardeinstellungen.",
        ],
      },
      {
        title: "Änderungen",
        paragraphs: [
          "Sollten wir künftig Cookies oder Dienste von Drittanbietern einsetzen, aktualisieren wir diese Seite vorab und holen, soweit erforderlich, Ihre Einwilligung ein.",
        ],
      },
    ],
    updated: "Stand: Oktober 2026",
  },
};

export default de;
