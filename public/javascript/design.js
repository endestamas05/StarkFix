// ============================================================
// StarkFix - az új design mozgásai (test ág)
// Nincs külső könyvtár, nincs tárolás a böngészőben.
// ============================================================

(function () {
    "use strict";

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // --------------------------------------------------------
    // Nyitókép: a képek lassan áttűnnek egymásba. Az időzítő az aktív vonal
    // kitöltődése (CSS-animáció): ha az szünetel, a léptetés is áll,
    // ha véget ér, jön a következő kép.
    // --------------------------------------------------------

    const hero = document.querySelector(".hero");
    const heroMedia = document.querySelector(".hero-media");

    if (hero) {
        const photos = Array.prototype.slice.call(hero.querySelectorAll(".hero-photo"));
        const segments = Array.prototype.slice.call(hero.querySelectorAll(".hero-segment"));
        const caption = hero.querySelector(".hero-caption");
        const captions = JSON.parse(caption.dataset.captions);
        const pauseButton = hero.querySelector(".hero-pause");
        let current = 0;
        let wanted = 0;
        let userPaused = false;
        let hovering = false;
        let focused = false;
        let inView = true;

        function showPhoto(index) {
            photos[current].classList.remove("is-active");
            segments[current].classList.remove("is-active");
            segments[current].removeAttribute("aria-current");
            current = index;
            photos[current].classList.add("is-active");
            segments[current].classList.add("is-active");
            segments[current].setAttribute("aria-current", "true");

            caption.classList.add("swapping");
            setTimeout(function () {
                caption.textContent = captions[current];
                caption.classList.remove("swapping");
            }, 200);
        }

        // Csak a már betöltött kép jöhet elő, különben üres lenne az áttűnés.
        function goTo(index) {
            const next = (index + photos.length) % photos.length;
            wanted = next;
            const photo = photos[next];
            photo.loading = "eager";
            const ready = photo.decode ? photo.decode().catch(function () {}) : Promise.resolve();
            ready.then(function () {
                if (wanted === next && next !== current) showPhoto(next);
            });
        }

        function syncPause() {
            hero.classList.toggle("paused", userPaused || hovering || focused || !inView || document.hidden);
            hero.classList.toggle("user-paused", userPaused);
        }

        hero.querySelector(".hero-prev").addEventListener("click", function () {
            goTo(wanted - 1);
        });
        hero.querySelector(".hero-next").addEventListener("click", function () {
            goTo(wanted + 1);
        });
        segments.forEach(function (segment, i) {
            segment.addEventListener("click", function () {
                goTo(i);
            });
        });
        pauseButton.addEventListener("click", function () {
            userPaused = !userPaused;
            pauseButton.setAttribute("aria-label", userPaused ? pauseButton.dataset.play : pauseButton.dataset.pause);
            syncPause();
        });
        hero.querySelector(".hero-segments").addEventListener("animationend", function (event) {
            if (event.animationName === "segment-fill") goTo(current + 1);
        });

        // Csak a vezérlők fölött áll meg: a kép fölött pihenő egér ne állítsa le.
        if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
            const bar = hero.querySelector(".hero-bar");
            bar.addEventListener("pointerenter", function () {
                hovering = true;
                syncPause();
            });
            bar.addEventListener("pointerleave", function () {
                hovering = false;
                syncPause();
            });
        }
        // Csak billentyűzetes fókusznál áll meg: kattintás után a gombon marad a fókusz.
        hero.addEventListener("focusin", function (event) {
            focused = event.target.matches(":focus-visible");
            syncPause();
        });
        hero.addEventListener("focusout", function () {
            focused = false;
            syncPause();
        });
        document.addEventListener("visibilitychange", syncPause);
        if ("IntersectionObserver" in window) {
            new IntersectionObserver(function (entries) {
                inView = entries[0].isIntersecting;
                syncPause();
            }).observe(hero);
        }
    }

    // --------------------------------------------------------
    // Görgetésre megjelenés: egy sorban érkezők kis késéssel követik egymást.
    // --------------------------------------------------------

    const revealed = document.querySelectorAll(
        ".reveal, .louver, .reference-main .list-group-item, .reference-main .img-fluid.rounded.shadow"
    );

    if ("IntersectionObserver" in window && !reduceMotion) {
        const observer = new IntersectionObserver(
            function (entries) {
                let order = 0;
                entries.forEach(function (entry) {
                    if (!entry.isIntersecting) return;
                    observer.unobserve(entry.target);
                    if (!entry.target.classList.contains("louver")) {
                        entry.target.style.transitionDelay = Math.min(order, 6) * 55 + "ms";
                        order += 1;
                    }
                    entry.target.classList.add("in");
                });
            },
            { rootMargin: "0px 0px -12% 0px" }
        );
        revealed.forEach(function (element) {
            observer.observe(element);
        });
    } else {
        revealed.forEach(function (element) {
            element.classList.add("in");
        });
    }

    // --------------------------------------------------------
    // Rólunk szöveg: szavakra bontjuk, görgetésre sorban világosodnak.
    // A szöveg ugyanaz marad, csak szavanként becsomagolva.
    // --------------------------------------------------------

    const aboutText = document.querySelector(".about-text");
    let aboutWords = [];

    if (aboutText && !reduceMotion) {
        const words = aboutText.textContent.trim().split(/\s+/);
        aboutText.textContent = "";
        words.forEach(function (word, i) {
            const span = document.createElement("span");
            span.className = "about-word";
            span.textContent = word;
            aboutText.appendChild(span);
            if (i < words.length - 1) aboutText.appendChild(document.createTextNode(" "));
            aboutWords.push(span);
        });
    }

    // --------------------------------------------------------
    // Görgetéshez kötött mozgások. Képkockánként egyszer futnak,
    // és csak a transzformot vagy az áttetszőséget írják.
    // --------------------------------------------------------

    const nav = document.querySelector(".navbar");
    const stackCards = Array.prototype.slice.call(document.querySelectorAll(".stack-card")).map(function (card) {
        return {
            card: card,
            inner: card.querySelector(".stack-inner"),
            photo: card.querySelector(".stack-photo"),
            dim: card.querySelector(".stack-dim"),
        };
    });
    let ticking = false;

    function clamp(value) {
        return Math.max(0, Math.min(1, value));
    }

    function onScroll() {
        const height = window.innerHeight;
        if (nav) nav.classList.toggle("scrolled", window.scrollY > 24);
        ticking = false;
        if (reduceMotion) return;

        // A kép görgetéskor lassabban halad, mint az oldal.
        if (heroMedia && window.scrollY < height * 1.2) {
            heroMedia.style.transform = "translateY(" + (window.scrollY * 0.22).toFixed(1) + "px)";
        }

        if (aboutWords.length) {
            const rect = aboutText.getBoundingClientRect();
            if (rect.bottom > -100 && rect.top < height) {
                const progress = clamp((height * 0.86 - rect.top) / (rect.height + height * 0.36));
                const lit = progress * (aboutWords.length + 6);
                aboutWords.forEach(function (word, i) {
                    word.style.opacity = (0.22 + clamp(lit - i) * 0.78).toFixed(2);
                });
            }
        }

        // Kártyák: a következő ráúszik, az előző kicsit hátrébb lép és sötétül.
        stackCards.forEach(function (item, i) {
            const rect = item.card.getBoundingClientRect();
            if (rect.bottom < -200 || rect.top > height + 200) return;
            const next = stackCards[i + 1];
            const covered = next ? clamp(1 - (next.card.getBoundingClientRect().top - rect.top) / rect.height) : 0;
            item.inner.style.transform = "scale(" + (1 - covered * 0.06).toFixed(4) + ")";
            item.dim.style.opacity = (covered * 0.6).toFixed(3);
            const travel = clamp((height - rect.top) / (height + rect.height));
            item.photo.style.transform = "translateY(" + ((travel - 0.5) * -10).toFixed(2) + "%)";
        });
    }

    window.addEventListener(
        "scroll",
        function () {
            if (!ticking) {
                ticking = true;
                requestAnimationFrame(onScroll);
            }
        },
        { passive: true }
    );
    window.addEventListener("resize", onScroll, { passive: true });
    onScroll();

    // --------------------------------------------------------
    // Termékkártyák: az egeret követő fényfolt és enyhe dőlés.
    // A cél felé közelítünk képkockánként, így rugalmas, nem követi mereven a mutatót.
    // Csak egérrel, érintőképernyőn nincs.
    // --------------------------------------------------------

    if (!reduceMotion && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
        document.querySelectorAll(".tile").forEach(function (tile) {
            const light = tile.querySelector(".tile-light");
            const state = { x: 0, y: 0, rx: 0, ry: 0, tx: 0, ty: 0, trx: 0, try_: 0, inside: false, frame: null };

            function animate() {
                state.x += (state.tx - state.x) * 0.18;
                state.y += (state.ty - state.y) * 0.18;
                state.rx += (state.trx - state.rx) * 0.12;
                state.ry += (state.try_ - state.ry) * 0.12;
                light.style.transform = "translate(" + state.x.toFixed(1) + "px, " + state.y.toFixed(1) + "px)";
                tile.style.transform =
                    "perspective(1100px) rotateX(" + state.rx.toFixed(2) + "deg) rotateY(" + state.ry.toFixed(2) + "deg)";
                const settled = Math.abs(state.rx) < 0.02 && Math.abs(state.ry) < 0.02;
                if (!state.inside && settled) {
                    tile.style.transform = "";
                    tile.classList.remove("tilting");
                    state.frame = null;
                    return;
                }
                state.frame = requestAnimationFrame(animate);
            }

            tile.addEventListener("pointermove", function (event) {
                const rect = tile.getBoundingClientRect();
                const px = (event.clientX - rect.left) / rect.width;
                const py = (event.clientY - rect.top) / rect.height;
                if (!state.inside) {
                    state.inside = true;
                    state.x = state.tx = px * rect.width;
                    state.y = state.ty = py * rect.height;
                    tile.style.transitionDelay = "0ms";
                    tile.classList.add("tilting");
                }
                state.tx = px * rect.width;
                state.ty = py * rect.height;
                state.trx = (0.5 - py) * 5;
                state.try_ = (px - 0.5) * 5;
                if (!state.frame) state.frame = requestAnimationFrame(animate);
            });
            tile.addEventListener("pointerleave", function () {
                state.inside = false;
                state.trx = 0;
                state.try_ = 0;
                if (!state.frame) state.frame = requestAnimationFrame(animate);
            });
        });
    }

    // --------------------------------------------------------
    // Galéria: szűrés termék szerint, kattintásra a képnéző a látható képekkel.
    // A cím lapozáskor az aktuális kép nevére vált.
    // --------------------------------------------------------

    const galleryItems = Array.prototype.slice.call(document.querySelectorAll(".gallery-item"));

    if (galleryItems.length) {
        const filters = document.querySelectorAll(".gallery-filter");

        filters.forEach(function (filter) {
            filter.addEventListener("click", function () {
                filters.forEach(function (other) {
                    const on = other === filter;
                    other.classList.toggle("is-active", on);
                    other.setAttribute("aria-pressed", on ? "true" : "false");
                });
                const wanted = filter.dataset.filter;
                galleryItems.forEach(function (item) {
                    item.hidden = wanted !== "all" && item.dataset.category !== wanted;
                    // A szűrés után előkerülő kép ne a görgetésre várjon.
                    if (!item.hidden) {
                        item.style.transitionDelay = "0ms";
                        item.classList.add("in");
                    }
                });
            });
        });

        galleryItems.forEach(function (item) {
            item.addEventListener("click", function () {
                const pictures = galleryItems
                    .filter(function (other) {
                        return !other.hidden;
                    })
                    .map(function (other) {
                        return other.querySelector("img");
                    });
                const picture = item.querySelector("img");
                viewerPictures = pictures;
                window.openPictureViewer(pictures, pictures.indexOf(picture), "");
                describeViewerPicture(pictures.indexOf(picture));
            });
        });

        // A címben a kép rövid neve; lapozáskor frissül. Szöveg a kép alatt nincs.
        let viewerPictures = [];

        function describeViewerPicture(index) {
            const picture = viewerPictures[index];
            if (!picture) return;
            document.getElementById("referenceModalLabel").textContent =
                picture.closest(".gallery-item").querySelector(".gallery-caption").textContent;
        }

        document.getElementById("referenceCarousel").addEventListener("slid.bs.carousel", function (event) {
            describeViewerPicture(event.to);
        });
    }

    // --------------------------------------------------------
    // Referenciák képnézője: minden kép a saját leírását kapja.
    // A kártyát a common.min.js tölti be, ezért közvetlenül utána írjuk át.
    // --------------------------------------------------------

    document.querySelectorAll(".reference-card[data-alts]").forEach(function (card) {
        card.addEventListener("click", function () {
            setTimeout(function () {
                const alts = JSON.parse(card.dataset.alts);
                document.querySelectorAll("#referenceCarouselInner img").forEach(function (img, i) {
                    img.alt = alts[i] || img.alt;
                });
                document.querySelectorAll("#referenceCarousel .carousel-indicators button").forEach(function (dot, i) {
                    dot.setAttribute("aria-label", alts[i] || "");
                });
            }, 0);
        });
    });

    // --------------------------------------------------------
    // Lapozósáv: a nyilak és az elhalványuló szélek jelzik, ha van még mit görgetni.
    // A nyilak csak egérnek és érintésnek valók: billentyűzettel a gombokon lehet végigmenni.
    // --------------------------------------------------------

    document.querySelectorAll(".scroll-nav").forEach(function (nav) {
        const track = nav.querySelector(".scroll-track");
        const behavior = reduceMotion ? "auto" : "smooth";

        function makeArrow(side, path) {
            const arrow = document.createElement("button");
            arrow.type = "button";
            arrow.className = "scroll-arrow scroll-arrow--" + side;
            arrow.tabIndex = -1;
            arrow.setAttribute("aria-hidden", "true");
            arrow.innerHTML =
                '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="' + path +
                '" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
            arrow.addEventListener("click", function () {
                track.scrollBy({ left: (side === "left" ? -1 : 1) * track.clientWidth * 0.7, behavior: behavior });
            });
            nav.appendChild(arrow);
        }

        function update() {
            const max = track.scrollWidth - track.clientWidth;
            nav.classList.toggle("can-left", track.scrollLeft > 4);
            nav.classList.toggle("can-right", track.scrollLeft < max - 4);
        }

        makeArrow("left", "M10 3 5 8l5 5");
        makeArrow("right", "m6 3 5 5-5 5");
        track.addEventListener("scroll", update, { passive: true });
        window.addEventListener("resize", update, { passive: true });
        update();

        // A választott elem középre kerül, így látszik, mi van mellette.
        track.addEventListener("click", function (event) {
            const chosen = event.target.closest("a, button");
            if (!chosen) return;
            track.scrollTo({ left: chosen.offsetLeft - (track.clientWidth - chosen.offsetWidth) / 2, behavior: behavior });
        });

        // Ha nem fér ki, egyszer megmozdul: ebből is látszik, hogy görgethető.
        if (!reduceMotion && nav.classList.contains("can-right")) {
            setTimeout(function () {
                track.scrollBy({ left: 48, behavior: "smooth" });
                setTimeout(function () {
                    track.scrollTo({ left: 0, behavior: "smooth" });
                }, 420);
            }, 900);
        }
    });

    // --------------------------------------------------------
    // E-mail másolása: a felirat rövid időre átvált, utána visszaáll.
    // --------------------------------------------------------

    document.querySelectorAll(".copy-button").forEach(function (button) {
        const label = button.querySelector(".copy-label");
        const original = label.textContent;
        let timer = null;

        function swap(text, done) {
            button.classList.add("swapping");
            setTimeout(function () {
                label.textContent = text;
                button.classList.remove("swapping");
                button.classList.toggle("done", done);
            }, 120);
        }

        button.addEventListener("click", function () {
            if (!navigator.clipboard) return;
            navigator.clipboard.writeText(button.dataset.copy).then(function () {
                clearTimeout(timer);
                swap(button.dataset.copied, true);
                timer = setTimeout(function () {
                    swap(original, false);
                }, 1600);
            });
        });
    });
})();
