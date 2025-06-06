// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Reference modal functionality
    const referenceCards = document.querySelectorAll(".reference-card");
    const carouselInner = document.getElementById("referenceCarouselInner");
    const modalLabel = document.getElementById("referenceModalLabel");
    const modalDesc = document.getElementById("referenceModalDesc");
    let currentImages = [];
    let currentTitle = "";
    let currentDesc = "";

    // Helper: get images for a reference card (comma separated in data-images or fallback to data-img)
    function getImages(card) {
        const imagesAttr = card.getAttribute("data-images");
        if (imagesAttr) {
            return imagesAttr
                .split(",")
                .map((url) => url.trim())
                .filter(Boolean);
        }
        const img = card.getAttribute("data-img");
        return img ? [img] : [];
    }

    referenceCards.forEach((card) => {
        card.addEventListener("click", () => {
            currentImages = getImages(card);
            currentTitle = card.getAttribute("data-title") || "";
            currentDesc = card.getAttribute("data-desc") || "";

            // Carousel slide-ok generálása
            carouselInner.innerHTML = currentImages
                .map(
                    (img, i) => `
            <div class="carousel-item${i === 0 ? " active" : ""}">
                <img src="${img}" class="d-block w-100 rounded" alt="${currentTitle}">
            </div>
        `
                )
                .join("");

            // Indikátorok generálása
            const indicators = document.querySelector(
                "#referenceCarousel .carousel-indicators"
            );
            if (indicators) {
                indicators.innerHTML = currentImages
                    .map(
                        (img, i) =>
                            `<button type="button"
                    data-bs-target="#referenceCarousel"
                    data-bs-slide-to="${i}"
                    ${i === 0 ? 'class="active" aria-current="true"' : ""}
                    aria-label="${i + 1}. kép"></button>`
                    )
                    .join("");
            }

            // Modal cím és leírás frissítése
            modalLabel.textContent = currentTitle;
            modalDesc.textContent = currentDesc;
        });
    });

    // Theme Toggle Functionality
    const themeToggle = document.getElementById("theme-toggle");
    const themeIcon = themeToggle.querySelector(".theme-icon");

    // Function to set theme
    function setTheme(theme) {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
        updateThemeIcon(theme);
    }

    // Function to update the theme icon
    function updateThemeIcon(theme) {
        themeIcon.textContent = theme === "dark" ? "🌙" : "🌞";
    }

    // Check for saved theme preference or use OS preference
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        if (
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
        ) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }

    // Listen for OS theme changes if no saved preference
    window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", (e) => {
            if (!localStorage.getItem("theme")) {
                setTheme(e.matches ? "dark" : "light");
            }
        });

    // Theme toggle button click event
    themeToggle.addEventListener("click", () => {
        const currentTheme =
            document.documentElement.getAttribute("data-theme");
        const newTheme = currentTheme === "light" ? "dark" : "light";
        setTheme(newTheme);
    });
});
