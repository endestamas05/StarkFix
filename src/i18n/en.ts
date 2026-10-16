import type { Translation } from "./types";

const en: Translation = {
  ui: {
    openNavigation: "Open navigation",
    toggleTheme: "Toggle theme",
    selectLanguage: "Select language",
    languageName: "English",
    nav: {
      about: "About Us",
      products: "Products",
      references: "References",
      contact: "Contact",
    },
    back: "Back",
    allRightsReserved: "All rights reserved.",
    legalLink: "Legal Notice",
    privacyLink: "Privacy Policy",
    image: (n) => `Image ${n}`,
    previousImage: "Previous image",
    previous: "Previous",
    nextImage: "Next image",
    next: "Next",
    close: "Close",
    placeholderImage: "/images/placeholders/coming-soon-en.svg",
  },

  // ------------------------------------------------------------
  // HOME
  // ------------------------------------------------------------
  home: {
    meta: {
      title: "Shading Solutions",
      description:
        "StarkFix Shading Solutions: professional sun protection systems for homes, offices, and commercial buildings. Innovative blinds, awnings, insect screens, and more – quality installation, modern design, and expert service in Austria and beyond.",
    },
    heroAlt: (n) => `Reference ${n}`,
    aboutTitle: "About Us",
    aboutText:
      "Since 2016, our company has been specializing in professional shading technology, with our team having over 20 years of experience in the field. Our main goal is to provide our clients with high-quality, durable, and aesthetic solutions, whether it is shutters, blinds, awnings, or custom shading systems. With a customer-friendly approach, reliable work, and precise execution, we strive to ensure maximum satisfaction for all our partners in every project.",
    productsTitle: "Our Products",
    products: {
      shutters: { title: "Shutters", tagline: "reliable shading, all year round" },
      venetianBlinds: { title: "Venetian Blinds", tagline: "clean design, precise light control" },
      outdoorRollerBlinds: {
        title: "Outdoor Roller Blinds",
        tagline: "modern look, effective protection",
      },
      interiorShading: {
        title: "Interior Shading",
        tagline: "stylish light and heat control in your home",
      },
      conservatoryShading: { title: "Conservatory Shading", tagline: "optimal climate all year" },
      pergolas: { title: "Pergolas", tagline: "timeless elegance outdoors" },
      awnings: { title: "Awnings", tagline: "stylish shade" },
      insectScreens: { title: "Insect Screens", tagline: "protection against insects, no compromise" },
      service: { title: "Service", tagline: "reliable help when you need it" },
    },
    referencesTitle: "References",
    references: [
      {
        title: "Venetian blinds at Linz port",
        description: "Installation of venetian blinds on a building at Linz port.",
      },
      {
        title: "Venetian blind with special conversion",
        description: "Cable-guided venetian blind with special conversion in Upper Austria.",
      },
      {
        title: "Conservatory Shading",
        description:
          "A custom shading solution for a house with large, uniquely shaped windows. A custom-made system for effective sun and heat protection.",
      },
    ],
    contactTitle: "Contact",
    phoneLabel: "Phone:",
    addressLabel: "Address:",
    contactNote: "If you have any questions, feel free to contact us!",
  },

  // ------------------------------------------------------------
  // PRODUCT PAGES
  // ------------------------------------------------------------
  shutters: {
    meta: {
      title: "Shutters",
      description:
        "Shutters by StarkFix: modern, aesthetic, and functional solutions for exterior shading of homes and offices. Custom-sized shutters, wide range of colors, durable design.",
    },
    heading: "Shutters",
    imageAlts: ["Modern shutters"],
    intro:
      "Shutters are one of the most popular outdoor shading solutions. They provide effective protection against sunlight and heat, while also enhancing your building's exterior appearance. <br />They are available with manual or motorised control and in plastic or aluminium versions. <br />They are an ideal choice for family homes, offices and modern building facades alike.",
    advantagesTitle: "Advantages of Shutters",
    advantages: [
      "Excellent thermal insulation all year round, energy saving",
      "Complete blackout, shading and privacy",
      "Reliable protection against burglary, extra security",
      "Noise reduction for a quieter home environment",
      "Protection from prying eyes and the weather",
      "Long lifespan, minimal maintenance",
      "Can be automated, convenient control (motorized, smart home)",
    ],
  },

  venetianBlinds: {
    meta: {
      title: "Venetian Blinds",
      description:
        "Venetian blinds by StarkFix: Professional, adjustable shading solutions for windows and facades. Modern design, precise light control, energy efficiency, and privacy for residential and commercial spaces.",
    },
    heading: "Venetian Blinds",
    imageAlts: ["Modern Venetian Blinds"],
    intro:
      "Venetian blinds represent a contemporary slatted exterior shading system, offering precise control of light and heat, even on large glass surfaces. The tilt angle of the slats can be adjusted steplessly, allowing optimal regulation of natural light and interior temperature while maintaining the view. <br />Venetian blinds are available with manual or motorised operation, with rail or cable guidance systems, and in a wide range of colours and slat types. <br />They are an ideal choice for the façades of modern family homes, offices, and public buildings, where both functionality and a clean, aesthetic appearance are important considerations.",
    advantagesTitle: "Advantages of Venetian Blinds",
    advantages: [
      "Excellent light and heat control, even total blackout",
      "Modern, aesthetic appearance for any facade",
      "Motor or manual control, smart home integration",
      "Durable, weather-resistant aluminum slats",
      "Energy saving: cool in summer, warm in winter",
      "Many colors, slat shapes (C, S, Z)",
      "Ideal shading for family homes, offices, and modern buildings",
    ],
  },

  outdoorRollerBlinds: {
    meta: {
      title: "Outdoor Roller Blinds",
      description:
        "Outdoor roller blinds by StarkFix: modern, aesthetic, and functional solutions for exterior shading of homes and offices. Custom-sized outdoor blinds, wide range of colors, durable design.",
    },
    heading: "Outdoor Roller Blinds",
    imageAlts: ["Green outdoor roller blind", "Grey outdoor roller blind"],
    intro:
      "Outdoor roller blinds offer effective protection against sunlight, heat and prying eyes. Their modern appearance and versatility make them an ideal choice for family homes, offices, and commercial premises. <br />This product is available with either manual or motorised operation, and can be combined with insect screens. <br />It is also available in a variety of colours and designs.",
    advantagesTitle: "Advantages of Outdoor Roller Blinds",
    advantages: [
      "Effective heat and sun protection, reduces overheating",
      "Reliable protection against the elements",
      "Complete blackout and privacy as needed",
      "Easy to use, motorized or manual operation",
      "Can be combined with insect screens",
      "Long lifespan, minimal maintenance",
      "Wide range of colors and types, modern design",
    ],
  },

  conservatoryShading: {
    meta: {
      title: "Conservatory Shading",
      description:
        "Conservatory shading by StarkFix: professional solutions for glass roofs, winter gardens, and large glazed areas. Effective heat and UV protection, comfortable indoor climate, motorized or manual operation, wide range of colors and materials.",
    },
    heading: "Conservatory Shading",
    imageAlts: [
      "Conservatory Shading 1",
      "Conservatory Shading 2",
      "Conservatory Shading 3",
      "Conservatory Shading 4",
      "Conservatory Shading 5",
    ],
    intro:
      "Conservatory shading systems have been developed specifically for use in conservatories, glass roofs and large glass surfaces. <br /> They enable precise control of the amount of incoming light, reduce overheating in summer, and create a pleasant climate all year round. <br /> This product is available with either motor or manual operation, and can be purchased in various colours and materials.",
    advantagesTitle: "Advantages of Conservatory Shading",
    advantages: [
      "Effective heat protection, reduces overheating",
      "Protection against harmful UV radiation",
      "Pleasant climate in summer and winter",
      "Motor or manual operation",
      "Aesthetic appearance, various colors and materials",
      "Easy to clean, weather resistant",
    ],
  },

  pergolas: {
    meta: {
      title: "Pergolas",
      description:
        "Pergolas by StarkFix: modern, aesthetic, and functional solutions for shading terraces, gardens, and hospitality spaces. Custom sizes, wide range of colors, durable design.",
    },
    heading: "Pergolas",
    imageAlts: ["Modern Pergola"],
    intro:
      "These modern, durable outdoor shading systems provide elegant protection for terraces, gardens and hospitality venues. They are available with aluminium or wooden structures, fixed or movable roofs, LED lighting and even side walls. <br />They are the ideal choice if you want to extend the outdoor season and increase the comfort and value of your home or business.",
    advantagesTitle: "Advantages of Pergolas",
    advantages: [
      "Aesthetic, modern appearance in any environment",
      "Protection from rain, sun, and wind, usable all year round",
      "Movable roof, shading as needed",
      "Expandable with side walls, LED lighting, heating",
      "Increases the value and comfort of the property",
      "Easy to clean, minimal maintenance",
    ],
  },

  awnings: {
    meta: {
      title: "Awnings",
      description:
        "Awnings by StarkFix: high-quality, retractable shading solutions for terraces, balconies, and shopfronts. Durable materials, modern design, manual or motorized operation, wide range of colors and fabrics for residential and commercial use.",
    },
    heading: "Awnings",
    imageAlts: ["Awnings"],
    intro:
      "Awnings are the perfect way to shade terraces, balconies and hospitality venues. They are easy to operate, have a modern appearance and can cover large areas. <br />They are available with manual or motorised operation and in a wide range of colours and materials, so they can be tailored to any need.",
    advantagesTitle: "Advantages of Awnings",
    advantages: [
      "Large shaded area, free space utilization",
      "Easy to use, manual or motorized operation",
      "Weather-resistant, UV-resistant fabric",
      "Modern, aesthetic appearance",
      "Wide range of colors and patterns",
      "Long lifespan, minimal maintenance",
    ],
  },

  service: {
    meta: {
      title: "Service",
      description:
        "StarkFix service: professional maintenance, repair, and modernization of shading systems. Reliable solutions for awnings, blinds, roller shutters, pergolas and more.",
    },
    heading: "Service",
    imageAlts: ["Service"],
    intro:
      "StarkFix not only installs new shading systems, but also provides a professional servicing and maintenance package for existing systems. Whether you need roller shutters, Venetian blinds, awnings, insect screens or pergolas repaired, we will help you quickly and reliably to ensure your shading system works perfectly again.",
    advantagesTitle: "Why choose our service?",
    advantages: [
      "Fast, flexible call-out, even in urgent cases",
      "Experienced, qualified technicians",
      "Spare parts procurement and replacement with warranty",
      "Repair and maintenance of all types of shading",
      "Precise, clean work, fair prices",
    ],
  },

  // ------------------------------------------------------------
  // PAGES WITH A SUB-NAVIGATION
  // ------------------------------------------------------------
  interiorShading: {
    meta: {
      title: "Interior Shading",
      description:
        "Interior blinds by StarkFix: modern, aesthetic, and functional solutions for shading the interiors of homes and offices. Roller blinds, venetian blinds, pleated blinds, vertical blinds – custom sizes, wide range of colors.",
    },
    heading: "Interior Shading",
    navAriaLabel: "Interior shading type selector",
    sections: [
      {
        navLabel: "Venetian",
        heading: "Venetian Blind",
        imageAlts: ["Venetian Blind"],
        text: "Venetian blinds provide excellent control over the amount of light entering a room, as well as a modern, unobtrusive aesthetic that suits any setting. <br />They are easy to operate, durable, and available in a wide range of colours and slat sizes.",
        items: [
          "Precise light control, glare-free workspace",
          "Modern, clean design",
          "Easy to use, simple to clean",
        ],
      },
      {
        navLabel: "Pleated",
        heading: "Pleated Blind",
        imageAlts: ["Pleated Blind"],
        text: "Pleated blinds represent a modern and elegant solution for any window. Thanks to their special pleated fabric, they can be flexibly moved from bottom to top or top to bottom. <br />They are ideal for slanted, arched, or skylight windows as well.",
        items: [
          "Custom-made for almost any window shape",
          "Excellent light and heat control",
          "Easy to use, modern appearance",
        ],
      },
      {
        navLabel: "Roller",
        heading: "Roller Blind",
        imageAlts: ["Roller Blind"],
        text: "Roller blinds represent a cost-effective and efficient solution for interior shading, ideal for windows and doors. <br />These blinds are available in a variety of colours, patterns and light-filtering or blackout options, to suit all tastes and requirements.",
        items: [
          "Available as light-filtering or blackout",
          "Simple, quick installation",
          "Wide range of colors and patterns",
        ],
      },
      {
        navLabel: "Vertical",
        heading: "Vertical Blind",
        imageAlts: ["Vertical Blind"],
        text: "Vertical blinds represent a sophisticated and pragmatic solution for oversized glass surfaces, office environments, and meeting rooms. <br />They are user-friendly, have a modern appearance, and are custom-made to size.",
        items: [
          "Ideal for large glass surfaces",
          "Custom size, wide color selection",
          "Easy to use, modern appearance",
        ],
      },
    ],
  },

  insectScreens: {
    meta: {
      title: "Insect Screens",
      description:
        "Insect screens by StarkFix: effective protection for windows and doors against insects, with modern design. Fixed, mobile, and roller types, durable materials, easy to use, perfect fit for every opening.",
    },
    heading: "Insect Screens",
    navAriaLabel: "Mosquito net type selector",
    sections: [
      {
        navLabel: "Pleated",
        heading: "Pleated Insect Screen",
        imageAlts: ["Insect Screens"],
        text: "The system features a modern accordion-style opening and closing mechanism, making it well-suited for larger openings and patio doors. <br />This product is characterised by its ease of use, durability, aesthetic appeal and space-saving design.",
        items: [
          "Ideal for large openings and sliding doors",
          "Easy to use, minimal space required",
          "Durable, aesthetic design",
        ],
      },
      {
        navLabel: "Frame",
        heading: "Frame Insect Screen",
        imageAlts: ["Frame insect screen 1", "Frame insect screen 2"],
        text: "This is a classic, fixed or openable frame solution for windows and doors. The frame is constructed from durable aluminium or plastic, and the mesh is UV-resistant. Installation is straightforward.",
        items: [
          "Fixed or openable version",
          "Durable, UV-resistant mesh",
          "Easy installation, long lifespan",
        ],
      },
      {
        navLabel: "Roller",
        heading: "Roller Insect Screens",
        imageAlts: ["Insect Screens"],
        text: "This pull-up or side-sliding system is a space-saving and practical solution for windows and balcony doors. <br />The mechanism is spring or chain operated, and is both quiet and reliable.",
        items: [
          "Pull-up or side-sliding version",
          "Space-saving, almost invisible when not in use",
          "Quiet, reliable operation",
        ],
      },
    ],
  },

  // ------------------------------------------------------------
  // LEGAL NOTICE
  // ------------------------------------------------------------
  legal: {
    meta: {
      title: "Legal Notice",
      description: "Legal notice and imprint on the official website of StarkFix Austria.",
    },
    heading: "Legal Notice",
    intro: "The official website of StarkFix Austria.",
    copyrightTitle: "Copyright",
    copyrightText:
      "All source code, images, and other content on this website are the property of StarkFix Austria. Any copying, distribution, or modification of the content in any form is prohibited without the prior written permission of the copyright holder.",
    imprintTitle: "Imprint",
    labels: {
      company: "Company name:",
      representative: "Owner:",
      registeredAddress: "Registered office (company register):",
      businessAddress: "Business address:",
      phone: "Phone:",
      email: "E-mail:",
      website: "Website:",
      registerNumber: "Company register number:",
      registerCourt: "Company register court:",
      vatId: "VAT ID:",
      businessPurpose: "Business activity:",
      tradeAuthority: "Trade authority:",
      chamber: "Chamber membership:",
      tradeLaw: "Applicable trade law:",
    },
    country: "Austria",
    businessPurpose:
      "Sun protection technology – sale, installation, maintenance and repair of shading systems",
    tradeLaw:
      'Austrian Trade Regulation Act (Gewerbeordnung, GewO), available at <a href="https://www.ris.bka.gv.at" rel="noopener">www.ris.bka.gv.at</a>',
    mediaTitle: "Disclosure pursuant to § 25 of the Austrian Media Act",
    mediaOwnerLabel: "Media owner:",
    mediaPolicyLabel: "Editorial policy:",
    mediaPolicy:
      "Information about the products and services of StarkFix Austria in the field of sun protection technology.",
    disclaimerTitle: "Disclaimer",
    disclaimerText:
      "The information provided on this website is for general information purposes only. No liability is accepted for the accuracy or completeness of the content. StarkFix Austria accepts no liability for any damages resulting from the use of the website.",
  },

  // ------------------------------------------------------------
  // PRIVACY POLICY
  // ------------------------------------------------------------
  privacy: {
    meta: {
      title: "Privacy Policy",
      description:
        "Privacy policy of StarkFix Austria: information on the processing of personal data on this website.",
    },
    heading: "Privacy Policy",
    intro:
      "Protecting your personal data is important to us. We process your data exclusively on the basis of the applicable legal provisions (GDPR, the Austrian Data Protection Act and the Austrian Telecommunications Act 2021). This privacy policy informs you about the most important aspects of data processing on our website.",
    controllerTitle: "Controller",
    controllerText: "The controller responsible for data processing on this website is:",
    sections: [
      {
        title: "Hosting and server log files",
        paragraphs: [
          "This website is provided via GitHub Pages, a service of GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA. When you visit the website, GitHub processes technically necessary data, in particular your IP address, the date and time of access, the page requested, your browser type and the previously visited page (referrer). This data is required to deliver the website and to ensure its security and stability.",
          'The legal basis is our legitimate interest in providing the website securely and reliably (Art. 6(1)(f) GDPR). Data may be transferred to the USA in the process. GitHub is certified under the EU-U.S. Data Privacy Framework, for which an adequacy decision of the European Commission exists (Art. 45 GDPR). For more information, see the <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" rel="noopener">GitHub Privacy Statement</a>.',
        ],
      },
      {
        title: "Contacting us",
        paragraphs: [
          "If you contact us by e-mail or phone, we process the data you provide (e.g. your name, contact details and your request) in order to handle your enquiry and, where applicable, to prepare a quotation. The legal basis is the performance of pre-contractual measures (Art. 6(1)(b) GDPR) or our legitimate interest in responding to enquiries (Art. 6(1)(f) GDPR).",
          "We store this data for as long as necessary to handle your enquiry. If a contract is concluded, we retain the data in accordance with the statutory retention obligations (generally seven years under § 132 of the Austrian Federal Fiscal Code). We do not pass your data on to third parties without your consent.",
        ],
      },
      {
        title: "Cookies and local storage",
        paragraphs: [
          "This website does not use cookies. To remember your settings, the website only stores your chosen language and colour scheme (light/dark) in your browser's local storage (localStorage) – and only if you change this setting yourself. This information stays on your device, is not transmitted to us and is not used for tracking.",
          "This storage is strictly necessary for the function you have expressly requested and is therefore permitted without consent (§ 165(3) of the Austrian Telecommunications Act 2021). You can delete this data at any time in your browser settings.",
        ],
      },
      {
        title: "No analytics or tracking services",
        paragraphs: [
          "We do not use any analytics, tracking or advertising services and do not embed any third-party content (e.g. fonts, maps or videos). All files of the website are loaded directly from our hosting provider.",
        ],
      },
      {
        title: "Your rights",
        paragraphs: [
          'You have the right to access, rectification, erasure, restriction of processing, data portability and objection (Art. 15–21 GDPR). To exercise your rights, please contact <a href="mailto:info@starkfixaustria.at">info@starkfixaustria.at</a>.',
          'If you believe that the processing of your data violates data protection law, you can lodge a complaint with the supervisory authority. In Austria, this is the Data Protection Authority (Datenschutzbehörde), Barichgasse 40–42, 1030 Vienna, <a href="https://www.dsb.gv.at" rel="noopener">www.dsb.gv.at</a>.',
        ],
      },
    ],
    updated: "Last updated: October 2026",
  },
};

export default en;
