// ============================================================
// StarkFix - az új design mozgásai (test ág)
// Nincs külső könyvtár, nincs tárolás a böngészőben.
// ============================================================

(function () {
    "use strict";

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // --------------------------------------------------------
    // Lamellák: a csúszka 0-nál zárt (a lamellák szemből látszanak),
    // 100-nál nyitott (élükkel fordulnak a néző felé).
    // Mindegyik ugyanabban a szögben áll, mint egy valódi zsalu,
    // és a mozgás közben is bármikor megfordítható.
    // --------------------------------------------------------

    const slider = document.getElementById("light-slider");
    const slats = Array.prototype.slice.call(document.querySelectorAll(".slat"));
    const dim = document.querySelector(".blinds-dim");
    const sunBand = document.querySelector(".sun-band");

    if (slider && slats.length) {
        const OPEN_ANGLE = 84;
        // Lapos lamella: a szomszédos sorok épp fedik egymást, nincs rés.
        const angles = slats.map(function () {
            return 0;
        });
        let frame = null;

        // Képléptető: amíg "closing" igaz, a lamellák a csúszkától függetlenül összezárnak,
        // zárt állapotban cserélődik a kép, majd visszaállnak a csúszka szerinti szögre.
        const figure = document.querySelector(".window");
        const photos = Array.prototype.slice.call(document.querySelectorAll(".window-photo"));
        const dots = Array.prototype.slice.call(document.querySelectorAll(".window-dot"));
        const caption = document.querySelector(".window-caption");
        // A feliratok rövid nevek; a képek részletes leírása az alt szövegben van.
        const captions = caption ? JSON.parse(caption.dataset.captions) : [];
        let current = 0;
        let pending = null;
        let closing = false;
        let swapping = false;

        function targetAngle() {
            return closing ? 0 : (Number(slider.value) / 100) * OPEN_ANGLE;
        }

        function paint() {
            slats.forEach(function (slat, i) {
                // Lamellánként saját perspektíva: így a felső és az alsó is ugyanúgy néz ki.
                slat.style.transform = "perspective(900px) rotateX(" + angles[i].toFixed(2) + "deg)";
            });
            const open = angles[Math.floor(angles.length / 2)] / OPEN_ANGLE;
            if (dim) dim.style.opacity = String((1 - open) * 0.45);
        }

        // A beengedett fény az oldal lejjebb lévő részén is látszik. A csúszkát követi,
        // ezért képváltáskor nem villog.
        function paintSun() {
            if (sunBand) sunBand.style.opacity = String(Number(slider.value) / 100);
        }

        function showPhoto(index) {
            photos[current].classList.remove("is-active");
            dots[current].classList.remove("is-active");
            dots[current].removeAttribute("aria-current");
            current = index;
            photos[current].classList.add("is-active");
            dots[current].classList.add("is-active");
            dots[current].setAttribute("aria-current", "true");

            caption.classList.add("swapping");
            setTimeout(function () {
                caption.textContent = captions[current];
                caption.classList.remove("swapping");
            }, 120);
        }

        // Zárt lamellák mögött cserélünk, de csak ha az új kép már betöltött.
        function swapBehindSlats() {
            swapping = true;
            const photo = photos[pending];
            photo.loading = "eager";
            const ready = photo.decode ? photo.decode().catch(function () {}) : Promise.resolve();
            ready.then(function () {
                showPhoto(pending);
                pending = null;
                closing = false;
                swapping = false;
                start();
            });
        }

        function goTo(index) {
            const next = (index + photos.length) % photos.length;
            if (next === current && !closing) return;
            if (reduceMotion) {
                showPhoto(next);
                return;
            }
            pending = next;
            closing = true;
            if (!swapping) start();
        }

        function step() {
            const target = targetAngle();
            let moving = false;
            angles.forEach(function (angle, i) {
                // Minden lamella azonos szögben, egyszerre mozog. Záráskor gyorsabb,
                // hogy a képváltás ne tartson sokáig.
                const pull = closing ? 0.3 : 0.2;
                const next = angle + (target - angle) * pull;
                if (Math.abs(target - next) > 0.05) moving = true;
                angles[i] = Math.abs(target - next) > 0.05 ? next : target;
            });
            paint();
            if (!moving && closing) {
                frame = null;
                swapBehindSlats();
                return;
            }
            frame = moving ? requestAnimationFrame(step) : null;
        }

        function start() {
            if (reduceMotion) {
                angles.fill(targetAngle());
                paint();
            } else if (!frame) {
                frame = requestAnimationFrame(step);
            }
        }

        function paintFill() {
            slider.style.setProperty("--fill", slider.value + "%");
        }

        slider.addEventListener("input", function () {
            paintFill();
            paintSun();
            start();
        });

        // Vezérlők. Az időzítő maga a pötty kitöltődése (CSS-animáció): ha az szünetel,
        // a léptetés is áll, és amikor véget ér, jön a következő kép.
        if (figure && photos.length > 1) {
            const pauseButton = figure.querySelector(".window-pause");
            let userPaused = false;
            let hovering = false;
            let focused = false;
            let inView = true;

            function syncPause() {
                figure.classList.toggle("paused", userPaused || hovering || focused || !inView || document.hidden);
                figure.classList.toggle("user-paused", userPaused);
            }

            figure.querySelector(".window-prev").addEventListener("click", function () {
                goTo((pending === null ? current : pending) - 1);
            });
            figure.querySelector(".window-next").addEventListener("click", function () {
                goTo((pending === null ? current : pending) + 1);
            });
            dots.forEach(function (dot, i) {
                dot.addEventListener("click", function () {
                    goTo(i);
                });
            });
            pauseButton.addEventListener("click", function () {
                userPaused = !userPaused;
                pauseButton.setAttribute("aria-label", userPaused ? pauseButton.dataset.play : pauseButton.dataset.pause);
                syncPause();
            });
            figure.querySelector(".window-dots").addEventListener("animationend", function (event) {
                if (event.animationName === "dot-fill") goTo(current + 1);
            });

            if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
                // Csak a vezérlők fölött áll meg: a nagy kép fölött pihenő egér ne állítsa le.
                const bar = figure.querySelector(".window-bar");
                bar.addEventListener("pointerenter", function () {
                    hovering = true;
                    syncPause();
                });
                bar.addEventListener("pointerleave", function () {
                    hovering = false;
                    syncPause();
                });
            }
            // Csak billentyűzetes fókusznál áll meg: kattintás után a gombon marad a fókusz,
            // és attól még mennie kell a léptetésnek.
            figure.addEventListener("focusin", function (event) {
                focused = event.target.matches(":focus-visible");
                syncPause();
            });
            figure.addEventListener("focusout", function () {
                focused = false;
                syncPause();
            });
            document.addEventListener("visibilitychange", syncPause);
            if ("IntersectionObserver" in window) {
                new IntersectionObserver(function (entries) {
                    inView = entries[0].isIntersecting;
                    syncPause();
                }).observe(figure);
            }
        }

        paintFill();
        paintSun();
        // Első betöltéskor a zsalu kinyílik: ez mutatja meg, hogy ez itt mozgatható.
        if (reduceMotion) start();
        else {
            paint();
            setTimeout(start, 450);
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
    const heroWindow = document.querySelector(".window");
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

        if (sunBand) {
            const rect = sunBand.parentElement.getBoundingClientRect();
            if (rect.bottom > 0 && rect.top < height) {
                sunBand.style.transform = "translateY(" + (rect.top * -0.12).toFixed(1) + "px) skewY(-7deg)";
            }
        }

        // Az ablak görgetésre teljes méretre nő.
        if (heroWindow) {
            const rect = heroWindow.getBoundingClientRect();
            if (rect.bottom > 0) {
                const grown = clamp((height - rect.top) / (height * 0.75));
                heroWindow.style.transform = "scale(" + (0.94 + grown * 0.06).toFixed(4) + ")";
            }
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
