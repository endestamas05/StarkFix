// ============================================================
// StarkFix - Language choice
// ============================================================
//
// Every page has its own URL per language (/de/..., /en/..., /hu/...),
// and the language switcher links straight to the same page in the other
// language. Here we
//  - remember the visitor's choice, so that opening starkfixaustria.at/
//    next time goes to that language (see src/pages/index.astro), and
//  - keep the visitor's place on the page: after switching language the
//    new page opens scrolled to the same section.
//
// Pages are never redirected based on the browser language: a shared or
// Google-indexed link must always show the language in its URL.

(function () {
    "use strict";

    const STORAGE_KEY = "starkfix-language";
    const POSITION_KEY = "starkfix-language-position";

    // --------------------------------------------------------
    // Where am I? The nearest element with an id at the top of the screen
    // (the ids are the same in every language), and how far into it.
    // --------------------------------------------------------

    function topOffset() {
        const navbar = document.querySelector(".navbar");
        return navbar ? navbar.getBoundingClientRect().height : 0;
    }

    function currentPosition() {
        const top = topOffset() + 1;
        let anchor = null;
        document.querySelectorAll("header[id], main [id], main[id], section[id]").forEach(function (element) {
            if (element.closest("nav")) return; // menus stick to the top, they are not a place on the page
            const rect = element.getBoundingClientRect();
            if (rect.height === 0 || rect.top > top) return;
            if (!anchor || rect.top >= anchor.top) anchor = { id: element.id, top: rect.top };
        });
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        return {
            id: anchor ? anchor.id : null,
            offset: anchor ? top - anchor.top : 0,
            fraction: scrollable > 0 ? window.scrollY / scrollable : 0,
        };
    }

    function restorePosition(saved) {
        const element = saved.id && document.getElementById(saved.id);
        let y;
        if (element) {
            const elementTop = element.getBoundingClientRect().top + window.scrollY;
            y = elementTop + saved.offset - topOffset() - 1;
        } else {
            y = saved.fraction * (document.documentElement.scrollHeight - window.innerHeight);
        }
        window.scrollTo({ top: Math.max(0, y), behavior: "instant" });
        return window.scrollY;
    }

    // --------------------------------------------------------
    // Language switcher: remember the choice and the place on the page.
    // --------------------------------------------------------

    document.querySelectorAll("[data-lang-switch]").forEach(function (link) {
        link.addEventListener("click", function () {
            try {
                localStorage.setItem(STORAGE_KEY, link.getAttribute("data-lang-switch"));
                if (window.scrollY > 0) {
                    const position = currentPosition();
                    position.path = new URL(link.href, location.href).pathname;
                    sessionStorage.setItem(POSITION_KEY, JSON.stringify(position));
                }
            } catch (e) {
                // Storage blocked (e.g. private mode): the link still works.
            }
        });
    });

    // --------------------------------------------------------
    // Just arrived from the switcher: go back to the same place.
    // --------------------------------------------------------

    let saved = null;
    try {
        saved = JSON.parse(sessionStorage.getItem(POSITION_KEY));
        sessionStorage.removeItem(POSITION_KEY);
    } catch (e) {
        saved = null;
    }

    if (saved && saved.path === location.pathname && !location.hash) {
        if ("scrollRestoration" in history) history.scrollRestoration = "manual";
        const restoredAt = restorePosition(saved);

        // Pictures loading later can move things a little; correct once more,
        // unless the visitor has already scrolled away.
        window.addEventListener(
            "load",
            function () {
                if (Math.abs(window.scrollY - restoredAt) < 2) restorePosition(saved);
            },
            { once: true }
        );
    }
})();
