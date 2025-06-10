// Közös funkciók: theme toggle, modal, stb.
// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Theme toggle
  const themeToggleBtn = document.getElementById("theme-toggle");
  const currentTheme = localStorage.getItem("theme");

  if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);

    if (currentTheme === "dark") {
      themeToggleBtn.checked = true;
    }
  }

  themeToggleBtn.addEventListener("change", function () {
    if (this.checked) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  });

  // Modal (csak ha létezik az oldalon)
  const modal = document.getElementById("myModal");
  const modalBtn = document.getElementById("modalBtn");
  const closeBtn = document.getElementsByClassName("close")[0];

  if (modal && modalBtn && closeBtn) {
    modalBtn.onclick = function () {
      modal.style.display = "block";
    };

    closeBtn.onclick = function () {
      modal.style.display = "none";
    };

    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  }

  // Reference modal functionality
  const referenceCards = document.querySelectorAll(".reference-card");
  const carouselInner = document.getElementById("referenceCarouselInner");
  const modalLabel = document.getElementById("referenceModalLabel");
  const modalDesc = document.getElementById("referenceModalDesc");
  let currentImages = [];
  let currentTitle = "";
  let currentDesc = "";

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

      // Carousel slides
      carouselInner.innerHTML = currentImages
        .map(
          (img, i) => `
      <div class="carousel-item${i === 0 ? " active" : ""}">
        <img src="${img}" class="d-block w-100 rounded" alt="${currentTitle}">
      </div>
    `
        )
        .join("");

      // Indicators
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

      // Modal title and description
      modalLabel.textContent = currentTitle;
      modalDesc.textContent = currentDesc;
    });
  });

  // Improved theme toggle logic (icon, OS preference, etc.)
  const themeToggle = document.getElementById("theme-toggle");
  const themeIcon = themeToggle ? themeToggle.querySelector(".theme-icon") : null;

  // --- TÉMA IKON VÁLTÁS ÁTTŰNÉS ---
  if (themeIcon) {
    const fadeDuration = 220;
    function fadeThemeIcon(newTheme) {
      themeIcon.style.transition = 'opacity 0.22s, filter 0.22s';
      themeIcon.style.opacity = '0';
      themeIcon.style.filter = 'blur(2px)';
      setTimeout(() => {
        updateThemeIcon(newTheme);
        themeIcon.style.opacity = '1';
        themeIcon.style.filter = 'none';
      }, fadeDuration);
    }
    // Sima témaváltáskor fadeThemeIcon-t hívunk
    function setTheme(theme) {
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
      fadeThemeIcon(theme);
    }
  }
  function updateThemeIcon(theme) {
    if (themeIcon) themeIcon.textContent = theme === "dark" ? "🌙" : "🌞";
  }
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    setTheme(savedTheme);
  } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    setTheme("dark");
  } else {
    setTheme("light");
  }
  if (window.matchMedia) {
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
      if (!localStorage.getItem("theme")) {
        setTheme(e.matches ? "dark" : "light");
      }
    });
  }
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      const newTheme = currentTheme === "light" ? "dark" : "light";
      setTheme(newTheme);
    });
  }

  // --- KÁRTYA BELÉPŐ ANIMÁCIÓ (IntersectionObserver) ---
  const cardObserver = new window.IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("inview");
          cardObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll('.card, .reference-card').forEach(card => {
    card.classList.add('card-animate');
    cardObserver.observe(card);
  });

  // --- GOMB RIPPLE ANIMÁCIÓ ---
  document.querySelectorAll('.btn, .btn-outline-primary, .btn-primary').forEach(btn => {
    btn.addEventListener('click', function(e) {
      const ripple = document.createElement('span');
      ripple.style.position = 'absolute';
      ripple.style.borderRadius = '50%';
      ripple.style.transform = 'translate(-50%, -50%)';
      ripple.style.background = 'rgba(21,101,192,0.18)';
      ripple.style.pointerEvents = 'none';
      ripple.style.zIndex = 2;
      const rect = btn.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height) * 1.2;
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = (e.clientX - rect.left) + 'px';
      ripple.style.top = (e.clientY - rect.top) + 'px';
      ripple.style.opacity = 1;
      ripple.style.transition = 'opacity 0.5s, transform 0.5s';
      btn.appendChild(ripple);
      setTimeout(() => {
        ripple.style.opacity = 0;
        ripple.style.transform = 'scale(2.5)';
      }, 10);
      setTimeout(() => ripple.remove(), 510);
    });
  });
});
