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
    // Minden lamella a saját szögéből követi a célt, a felsők kicsit gyorsabban,
    // ezért hullámzik, és mozgás közben is bármikor megfordítható.
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

        function targetAngle() {
            return (Number(slider.value) / 100) * OPEN_ANGLE;
        }

        function paint() {
            slats.forEach(function (slat, i) {
                slat.style.transform = "rotateX(" + angles[i].toFixed(2) + "deg)";
            });
            const open = angles[Math.floor(angles.length / 2)] / OPEN_ANGLE;
            if (dim) dim.style.opacity = String((1 - open) * 0.45);
            // A beengedett fény az oldal lejjebb lévő részén is látszik.
            if (sunBand) sunBand.style.opacity = String(open);
        }

        function step() {
            const target = targetAngle();
            let moving = false;
            angles.forEach(function (angle, i) {
                const pull = 0.2 - i * 0.006;
                const next = angle + (target - angle) * pull;
                if (Math.abs(target - next) > 0.05) moving = true;
                angles[i] = Math.abs(target - next) > 0.05 ? next : target;
            });
            paint();
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
            start();
        });

        paintFill();
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

    const revealed = document.querySelectorAll(".reveal, .reveal-image");

    if ("IntersectionObserver" in window && !reduceMotion) {
        const observer = new IntersectionObserver(
            function (entries) {
                let order = 0;
                entries.forEach(function (entry) {
                    if (!entry.isIntersecting) return;
                    observer.unobserve(entry.target);
                    entry.target.style.transitionDelay = Math.min(order, 5) * 60 + "ms";
                    entry.target.classList.add("in");
                    order += 1;
                });
            },
            { rootMargin: "0px 0px -8% 0px" }
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
    // Görgetés: a menüsáv tömörebb lesz, a fénycsíkok lassan vándorolnak,
    // mintha a nap haladna. Csak a transzformot írjuk, képkockánként egyszer.
    // --------------------------------------------------------

    const nav = document.querySelector(".navbar");
    let ticking = false;

    function onScroll() {
        if (nav) nav.classList.toggle("scrolled", window.scrollY > 24);
        if (sunBand && !reduceMotion) {
            const rect = sunBand.parentElement.getBoundingClientRect();
            if (rect.bottom > 0 && rect.top < window.innerHeight) {
                sunBand.style.transform = "translateY(" + (rect.top * -0.12).toFixed(1) + "px) skewY(-7deg)";
            }
        }
        ticking = false;
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
    onScroll();

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
