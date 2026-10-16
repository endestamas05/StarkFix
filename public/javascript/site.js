// ============================================================
// StarkFix - small additions on top of common.min.js
// ============================================================

(function () {
    "use strict";

    // --------------------------------------------------------
    // Smooth scrolling to a place on the page. Done here instead of CSS
    // "scroll-behavior: smooth", because Chrome on Windows turns that into
    // a jump when the system's animations are switched off.
    // Also used by belso-arnyekolok.js and szunyoghalok.js.
    // --------------------------------------------------------

    let scrollAnimation = null;

    function smoothScrollTo(targetY) {
        const startY = window.scrollY;
        const maxY = document.documentElement.scrollHeight - window.innerHeight;
        targetY = Math.max(0, Math.min(maxY, targetY));
        const distance = targetY - startY;
        if (Math.abs(distance) < 2) return;

        const duration = Math.min(900, Math.max(350, Math.abs(distance) * 0.4));
        const ease = function (t) {
            return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
        };
        const start = performance.now();
        if (scrollAnimation) cancelAnimationFrame(scrollAnimation);

        (function step(now) {
            const t = Math.min(1, (now - start) / duration);
            window.scrollTo({ top: startY + distance * ease(t), behavior: "instant" });
            scrollAnimation = t < 1 ? requestAnimationFrame(step) : null;
        })(start);
    }

    window.smoothScrollTo = smoothScrollTo;

    // The visitor scrolling by hand stops the animation.
    ["wheel", "touchstart", "keydown"].forEach(function (type) {
        window.addEventListener(type, function () {
            if (scrollAnimation) cancelAnimationFrame(scrollAnimation);
            scrollAnimation = null;
        }, { passive: true });
    });

    // Links to a place on the same page (menu items, "#about", …).
    document.addEventListener("click", function (event) {
        const link = event.target.closest && event.target.closest('a[href*="#"]');
        if (!link || event.defaultPrevented || event.button > 0 || event.ctrlKey || event.metaKey || event.shiftKey) return;
        if (link.hasAttribute("data-bs-toggle") || link.hasAttribute("data-bs-slide")) return;

        const url = new URL(link.href, location.href);
        if (url.pathname !== location.pathname || !url.hash || url.hash === "#") return;
        const target = document.getElementById(decodeURIComponent(url.hash.slice(1)));
        if (!target) return;

        event.preventDefault();
        const margin = parseFloat(getComputedStyle(target).scrollMarginTop) || 0;
        smoothScrollTo(target.getBoundingClientRect().top + window.scrollY - margin);
        history.pushState(null, "", url.hash);
    });

    // --------------------------------------------------------
    // Carousel pictures after the first one are lazy-loaded. Once a carousel
    // comes into view (and the page has finished loading), load the rest,
    // so the next picture is ready before it slides in.
    // --------------------------------------------------------

    if ("IntersectionObserver" in window) {
        const carouselObserver = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (!entry.isIntersecting) return;
                    carouselObserver.unobserve(entry.target);

                    const loadRest = function () {
                        entry.target.querySelectorAll('img[loading="lazy"]').forEach(function (img) {
                            img.loading = "eager";
                        });
                    };

                    if (document.readyState === "complete") loadRest();
                    else window.addEventListener("load", loadRest, { once: true });
                });
            },
            { rootMargin: "200px" }
        );

        document.querySelectorAll(".carousel").forEach(function (carousel) {
            carouselObserver.observe(carousel);
        });
    }

    // --------------------------------------------------------
    // Picture viewer: product photos and carousel pictures open in it.
    // (Reference cards on the home page are handled by common.min.js.)
    // --------------------------------------------------------

    const modal = document.getElementById("referenceModal");
    const viewer = document.getElementById("referenceCarousel");

    function escapeHtml(text) {
        return text.replace(/[&<>"]/g, function (c) {
            return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
        });
    }

    function openViewer(pictures, start, title) {
        document.getElementById("referenceCarouselInner").innerHTML = pictures
            .map(function (img, i) {
                return (
                    '<div class="carousel-item' + (i === start ? " active" : "") + '">' +
                    '<img src="' + escapeHtml(img.getAttribute("src")) + '" class="d-block w-100 rounded" alt="' +
                    escapeHtml(img.alt) + '"></div>'
                );
            })
            .join("");

        viewer.querySelector(".carousel-indicators").innerHTML = pictures
            .map(function (img, i) {
                return (
                    '<button type="button" data-bs-target="#referenceCarousel" data-bs-slide-to="' + i + '"' +
                    (i === start ? ' class="active" aria-current="true"' : "") +
                    ' aria-label="' + escapeHtml(img.alt) + '"></button>'
                );
            })
            .join("");

        document.getElementById("referenceModalLabel").textContent = title;
        document.getElementById("referenceModalDesc").textContent = "";
        bootstrap.Modal.getOrCreateInstance(modal).show();
    }

    if (modal && viewer) {
        document
            .querySelectorAll("main .carousel-item img, main img.img-fluid.rounded.shadow")
            .forEach(function (img) {
                if (/\.svg$/.test(img.getAttribute("src"))) return; // "picture coming soon" placeholder

                img.classList.add("zoomable");
                img.addEventListener("click", function () {
                    const carousel = img.closest(".carousel");
                    const pictures = carousel
                        ? Array.prototype.slice.call(carousel.querySelectorAll(".carousel-item img"))
                        : [img];
                    const row = img.closest(".row");
                    const heading = row && row.querySelector("h1, h2");
                    openViewer(pictures, pictures.indexOf(img), heading ? heading.textContent.trim() : img.alt);
                });
            });

        // No slider controls for a single picture. (Watch the picture list itself:
        // Bootstrap opens the modal before common.min.js fills in the reference pictures.)
        new MutationObserver(function () {
            viewer.classList.toggle("single", viewer.querySelectorAll(".carousel-item").length < 2);
        }).observe(document.getElementById("referenceCarouselInner"), { childList: true });

        // ----------------------------------------------------
        // Zoom: click/tap a picture to zoom in where you clicked. While zoomed,
        // grab it (mouse button held down, or a finger) and drag it around;
        // click/tap again without dragging to zoom out.
        // ----------------------------------------------------

        const ZOOM = 2.5;
        let drag = null; // the picture being pressed: { img, startX, startY, startTx, startTy, moved }

        function setPan(img, tx, ty) {
            // Keep the picture's edges from being dragged past the frame.
            const maxX = ((ZOOM - 1) * img.clientWidth) / 2;
            const maxY = ((ZOOM - 1) * img.clientHeight) / 2;
            tx = Math.max(-maxX, Math.min(maxX, tx));
            ty = Math.max(-maxY, Math.min(maxY, ty));
            img.dataset.tx = tx;
            img.dataset.ty = ty;
            img.style.transform = "translate(" + tx + "px, " + ty + "px) scale(" + ZOOM + ")";
        }

        function zoomIn(img, event) {
            // Pan so the clicked point stays under the pointer.
            const rect = img.getBoundingClientRect();
            const dx = event.clientX - (rect.left + rect.width / 2);
            const dy = event.clientY - (rect.top + rect.height / 2);
            img.classList.add("zoomed");
            setPan(img, -dx * (ZOOM - 1), -dy * (ZOOM - 1));
        }

        function resetZoom() {
            viewer.querySelectorAll("img.zoomed").forEach(function (img) {
                img.classList.remove("zoomed", "dragging");
                img.style.transform = "";
            });
            drag = null;
        }

        // Capture phase: while a picture is zoomed, the carousel must not see the
        // pointer events, otherwise dragging would swipe to the next picture.
        viewer.addEventListener(
            "pointerdown",
            function (event) {
                const img = event.target.closest(".carousel-item img");
                if (!img || event.button > 0) return;
                event.preventDefault(); // no native image dragging
                drag = {
                    img: img,
                    startX: event.clientX,
                    startY: event.clientY,
                    startTx: Number(img.dataset.tx || 0),
                    startTy: Number(img.dataset.ty || 0),
                    moved: false,
                };
                if (img.classList.contains("zoomed")) {
                    event.stopPropagation();
                    img.setPointerCapture(event.pointerId);
                    img.classList.add("dragging");
                }
            },
            true
        );

        viewer.addEventListener(
            "pointermove",
            function (event) {
                if (!drag) return;
                const dx = event.clientX - drag.startX;
                const dy = event.clientY - drag.startY;
                if (Math.abs(dx) + Math.abs(dy) > 6) drag.moved = true;
                if (drag.img.classList.contains("zoomed")) {
                    event.stopPropagation();
                    setPan(drag.img, drag.startTx + dx, drag.startTy + dy);
                }
            },
            true
        );

        viewer.addEventListener(
            "pointerup",
            function (event) {
                if (!drag) return;
                const img = drag.img;
                const zoomed = img.classList.contains("zoomed");
                if (zoomed) event.stopPropagation();
                img.classList.remove("dragging");
                if (!drag.moved) {
                    if (zoomed) resetZoom();
                    else zoomIn(img, event);
                }
                drag = null;
            },
            true
        );

        viewer.addEventListener("pointercancel", function () {
            if (drag) drag.img.classList.remove("dragging");
            drag = null;
        }, true);

        viewer.addEventListener("slide.bs.carousel", resetZoom);
        modal.addEventListener("hidden.bs.modal", resetZoom);
    }

    // --------------------------------------------------------
    // Mobile menu: close it after choosing a menu item.
    // --------------------------------------------------------

    const menu = document.getElementById("navbarNav");

    if (menu) {
        menu.querySelectorAll(".nav-link").forEach(function (link) {
            link.addEventListener("click", function () {
                if (menu.classList.contains("show")) {
                    bootstrap.Collapse.getOrCreateInstance(menu).hide();
                }
            });
        });
    }
})();
