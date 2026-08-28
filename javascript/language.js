// ============================================================
// StarkFix - Language Redirect
// ============================================================

(function () {
    "use strict";

    // ------------------------------------------------------------
    // LANGUAGE SETTINGS
    // ------------------------------------------------------------

    const STORAGE_KEY = "starkfix-language";

    const languageMap = {

        // --------------------------------------------------------
        // HOME
        // --------------------------------------------------------

        "index.html": {
            de: "index.html",
            en: "index-en.html",
            hu: "index-hu.html"
        },

        "index-en.html": {
            de: "index.html",
            en: "index-en.html",
            hu: "index-hu.html"
        },

        "index-hu.html": {
            de: "index.html",
            en: "index-en.html",
            hu: "index-hu.html"
        },

        // --------------------------------------------------------
        // SHUTTERS / ROLLLÄDEN / REDŐNYÖK
        // --------------------------------------------------------

        "Rollläden.html": {
            de: "Rollläden.html",
            en: "Shutters.html",
            hu: "redonyok.html"
        },

        "Shutters.html": {
            de: "Rollläden.html",
            en: "Shutters.html",
            hu: "redonyok.html"
        },

        "redonyok.html": {
            de: "Rollläden.html",
            en: "Shutters.html",
            hu: "redonyok.html"
        },

        // --------------------------------------------------------
        // VENETIAN BLINDS / JALOUSIEN / ZSALUZIA
        // --------------------------------------------------------

        "Jalousien.html": {
            de: "Jalousien.html",
            en: "Venetian-blinds.html",
            hu: "zsaluzia.html"
        },

        "Venetian-blinds.html": {
            de: "Jalousien.html",
            en: "Venetian-blinds.html",
            hu: "zsaluzia.html"
        },

        "zsaluzia.html": {
            de: "Jalousien.html",
            en: "Venetian-blinds.html",
            hu: "zsaluzia.html"
        },

        // --------------------------------------------------------
        // OUTDOOR ROLLER BLINDS / AUSSENROLLOS / KÜLTÉRI ROLLÓ
        // --------------------------------------------------------

        "Außenrollos.html": {
            de: "Außenrollos.html",
            en: "Outdoor-roller-blinds.html",
            hu: "kulteri-rollos-arnyekolok.html"
        },

        "Outdoor-roller-blinds.html": {
            de: "Außenrollos.html",
            en: "Outdoor-roller-blinds.html",
            hu: "kulteri-rollos-arnyekolok.html"
        },

        "kulteri-rollos-arnyekolok.html": {
            de: "Außenrollos.html",
            en: "Outdoor-roller-blinds.html",
            hu: "kulteri-rollos-arnyekolok.html"
        },

        // --------------------------------------------------------
        // INTERIOR SHADING / INNENBESCHATTUNGEN / BELSŐ ÁRNYÉKOLÓ
        // --------------------------------------------------------

        "Innenbeschattungen.html": {
            de: "Innenbeschattungen.html",
            en: "Interior-shading.html",
            hu: "belso-arnyekolok.html"
        },

        "Interior-shading.html": {
            de: "Innenbeschattungen.html",
            en: "Interior-shading.html",
            hu: "belso-arnyekolok.html"
        },

        "belso-arnyekolok.html": {
            de: "Innenbeschattungen.html",
            en: "Interior-shading.html",
            hu: "belso-arnyekolok.html"
        },

        // --------------------------------------------------------
        // CONSERVATORY SHADING / WINTERGARTEN / TÉLIKERT
        // --------------------------------------------------------

        "Wintergartenbeschattung.html": {
            de: "Wintergartenbeschattung.html",
            en: "Conservatory-shading.html",
            hu: "Telkerti-arnyekolok.html"
        },

        "Conservatory-shading.html": {
            de: "Wintergartenbeschattung.html",
            en: "Conservatory-shading.html",
            hu: "Telkerti-arnyekolok.html"
        },

        "Telkerti-arnyekolok.html": {
            de: "Wintergartenbeschattung.html",
            en: "Conservatory-shading.html",
            hu: "Telkerti-arnyekolok.html"
        },

        // --------------------------------------------------------
        // AWNINGS / MARKISEN / KÖNYÖKKAROS NAPELLENZŐK
        // --------------------------------------------------------

        "Markisen.html": {
            de: "Markisen.html",
            en: "Awnings.html",
            hu: "konyokkaros-napellenzok.html"
        },

        "Awnings.html": {
            de: "Markisen.html",
            en: "Awnings.html",
            hu: "konyokkaros-napellenzok.html"
        },

        "konyokkaros-napellenzok.html": {
            de: "Markisen.html",
            en: "Awnings.html",
            hu: "konyokkaros-napellenzok.html"
        },

        // --------------------------------------------------------
        // PERGOLAS
        // --------------------------------------------------------

        "Pergolen.html": {
            de: "Pergolen.html",
            en: "Pergolas.html",
            hu: "pergolak.html"
        },

        "Pergolas.html": {
            de: "Pergolen.html",
            en: "Pergolas.html",
            hu: "pergolak.html"
        },

        "pergolak.html": {
            de: "Pergolen.html",
            en: "Pergolas.html",
            hu: "pergolak.html"
        },

        // --------------------------------------------------------
        // INSECT SCREENS / INSEKTENSCHUTZ / SZÚNYOGHÁLÓK
        // --------------------------------------------------------

        "Insektenschutz.html": {
            de: "Insektenschutz.html",
            en: "Insect-screens.html",
            hu: "szunyoghalok.html"
        },

        "Insect-screens.html": {
            de: "Insektenschutz.html",
            en: "Insect-screens.html",
            hu: "szunyoghalok.html"
        },

        "szunyoghalok.html": {
            de: "Insektenschutz.html",
            en: "Insect-screens.html",
            hu: "szunyoghalok.html"
        },

        // --------------------------------------------------------
        // SERVICE
        // --------------------------------------------------------

        "Service.html": {
            de: "Service.html",
            en: "Service-en.html",
            hu: "szervizeles.html"
        },

        "Service-en.html": {
            de: "Service.html",
            en: "Service-en.html",
            hu: "szervizeles.html"
        },

        "szervizeles.html": {
            de: "Service.html",
            en: "Service-en.html",
            hu: "szervizeles.html"
        },

        // --------------------------------------------------------
        // LEGAL
        // --------------------------------------------------------

        "legal.html": {
            de: "legal.html",
            en: "legal-en.html",
            hu: "legal-hu.html"
        },

        "legal-en.html": {
            de: "legal.html",
            en: "legal-en.html",
            hu: "legal-hu.html"
        },

        "legal-hu.html": {
            de: "legal.html",
            en: "legal-en.html",
            hu: "legal-hu.html"
        }
    };


    // ------------------------------------------------------------
    // GET CURRENT FILE
    // ------------------------------------------------------------

    function getCurrentFile() {
        let file = window.location.pathname.split("/").pop();

        if (!file) {
            file = "index.html";
        }

        return decodeURIComponent(file);
    }


    // ------------------------------------------------------------
    // NORMALIZE LANGUAGE
    // ------------------------------------------------------------

    function normalizeLanguage(language) {

        if (!language) {
            return null;
        }

        language = language.toLowerCase().trim();

        if (language.startsWith("de")) {
            return "de";
        }

        if (language.startsWith("en")) {
            return "en";
        }

        if (language.startsWith("hu")) {
            return "hu";
        }

        return null;
    }


    // ------------------------------------------------------------
    // GET BROWSER LANGUAGE
    // ------------------------------------------------------------

    function getBrowserLanguage() {

        const languages = navigator.languages || [
            navigator.language
        ];

        for (const language of languages) {

            const normalized = normalizeLanguage(language);

            if (normalized) {
                return normalized;
            }
        }

        return "de";
    }


    // ------------------------------------------------------------
    // SAVE SELECTED LANGUAGE
    // ------------------------------------------------------------

    function saveLanguage(language) {

        const normalized = normalizeLanguage(language);

        if (normalized) {
            localStorage.setItem(STORAGE_KEY, normalized);
        }
    }


    // ------------------------------------------------------------
    // GET SAVED LANGUAGE
    // ------------------------------------------------------------

    function getSavedLanguage() {

        return normalizeLanguage(
            localStorage.getItem(STORAGE_KEY)
        );
    }


    // ------------------------------------------------------------
    // REDIRECT TO LANGUAGE
    // ------------------------------------------------------------

    function redirectToLanguage(language) {

        const currentFile = getCurrentFile();

        const page = languageMap[currentFile];

        if (!page) {
            return;
        }

        const targetFile = page[language];

        if (!targetFile) {
            return;
        }

        // Már a megfelelő nyelvi oldalon vagyunk
        if (targetFile === currentFile) {
            return;
        }

        window.location.replace(targetFile);
    }


    // ------------------------------------------------------------
    // LANGUAGE SWITCHER
    // ------------------------------------------------------------

    function setupLanguageSwitcher() {

        const links = document.querySelectorAll(
            ".dropdown-menu a"
        );

        links.forEach(function (link) {

            const href = link.getAttribute("href");

            if (!href) {
                return;
            }

            const file = href.split("/").pop().split("#")[0];

            const page = languageMap[file];

            if (!page) {
                return;
            }

            let targetLanguage = null;

            if (page.de === file) {
                targetLanguage = "de";
            }

            if (page.en === file) {
                targetLanguage = "en";
            }

            if (page.hu === file) {
                targetLanguage = "hu";
            }

            if (!targetLanguage) {
                return;
            }

            link.addEventListener("click", function () {
                saveLanguage(targetLanguage);
            });
        });
    }


    // ------------------------------------------------------------
    // INITIAL LANGUAGE REDIRECT
    // ------------------------------------------------------------

    function initializeLanguage() {

        const currentFile = getCurrentFile();

        // Ha a fájl nincs a rendszerben, ne csináljon semmit
        if (!languageMap[currentFile]) {
            return;
        }

        const savedLanguage = getSavedLanguage();

        // --------------------------------------------------------
        // VAN MÁR ELMENTETT NYELV
        // --------------------------------------------------------

        if (savedLanguage) {

            const currentPage = languageMap[currentFile];

            // Ha az aktuális oldal nem az elmentett nyelvhez tartozik,
            // akkor az elmentett nyelvi verzióra megyünk.
            if (currentPage && currentPage[savedLanguage]) {

                const targetFile = currentPage[savedLanguage];

                if (targetFile !== currentFile) {
                    window.location.replace(targetFile);
                    return;
                }
            }

            return;
        }


        // --------------------------------------------------------
        // ELSŐ LÁTOGATÁS
        // --------------------------------------------------------

        const browserLanguage = getBrowserLanguage();

        saveLanguage(browserLanguage);

        redirectToLanguage(browserLanguage);
    }


    // ------------------------------------------------------------
    // START
    // ------------------------------------------------------------

    setupLanguageSwitcher();

    initializeLanguage();

})();