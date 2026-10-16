// Shape of one language file (de.ts, en.ts, hu.ts).
// Text fields that may contain <br /> are rendered as HTML.

export interface Meta {
  /** Shown after "StarkFix Austria - " in the browser tab. */
  title: string;
  description: string;
}

/** A simple product page: picture(s) on the left, text and advantages on the right. */
export interface ProductText {
  meta: Meta;
  heading: string;
  /** One alt text per picture (more than one = carousel). */
  imageAlts: string[];
  intro: string;
  advantagesTitle: string;
  advantages: string[];
}

export interface Section {
  navLabel: string;
  heading: string;
  imageAlts: string[];
  text: string;
  items: string[];
}

/** A page with a sticky sub-navigation (interior shading, insect screens). */
export interface SectionedText {
  meta: Meta;
  heading: string;
  navAriaLabel: string;
  sections: Section[];
}

export interface Translation {
  ui: {
    openNavigation: string;
    toggleTheme: string;
    selectLanguage: string;
    languageName: string;
    nav: { about: string; products: string; references: string; contact: string };
    back: string;
    allRightsReserved: string;
    legalLink: string;
    privacyLink: string;
    image: (n: number) => string;
    previousImage: string;
    previous: string;
    nextImage: string;
    next: string;
    close: string;
    /** "Picture coming soon" placeholder in this language. */
    placeholderImage: string;
  };
  home: {
    meta: Meta;
    heroAlt: (n: number) => string;
    aboutTitle: string;
    aboutText: string;
    productsTitle: string;
    products: Record<
      Exclude<import("./routes").PageKey, "home" | "legal" | "privacy">,
      { title: string; tagline: string }
    >;
    referencesTitle: string;
    references: { title: string; description: string }[];
    contactTitle: string;
    phoneLabel: string;
    addressLabel: string;
    contactNote: string;
  };
  shutters: ProductText;
  venetianBlinds: ProductText;
  outdoorRollerBlinds: ProductText;
  conservatoryShading: ProductText;
  pergolas: ProductText;
  awnings: ProductText;
  service: ProductText;
  interiorShading: SectionedText;
  insectScreens: SectionedText;
  legal: {
    meta: Meta;
    heading: string;
    intro: string;
    copyrightTitle: string;
    copyrightText: string;
    imprintTitle: string;
    /** Labels of the company details (values are in src/data/company.ts). */
    labels: {
      company: string;
      representative: string;
      registeredAddress: string;
      businessAddress: string;
      phone: string;
      email: string;
      website: string;
      registerNumber: string;
      registerCourt: string;
      vatId: string;
      businessPurpose: string;
      tradeAuthority: string;
      chamber: string;
      tradeLaw: string;
    };
    country: string;
    businessPurpose: string;
    /** May contain a link. */
    tradeLaw: string;
    mediaTitle: string;
    mediaOwnerLabel: string;
    mediaPolicyLabel: string;
    mediaPolicy: string;
    disclaimerTitle: string;
    disclaimerText: string;
    /** Only on the Hungarian page: labels of the Hungarian sister company block. */
    hungarianCompany?: {
      title: string;
      intro: string;
      company: string;
      representative: string;
      address: string;
      registerNumber: string;
      registerCourt: string;
      taxNumber: string;
      hosting: string;
      hostingValue: string;
    };
  };
  privacy: {
    meta: Meta;
    heading: string;
    intro: string;
    controllerTitle: string;
    controllerText: string;
    /** Paragraphs may contain links. */
    sections: { title: string; paragraphs: string[] }[];
    updated: string;
  };
}
