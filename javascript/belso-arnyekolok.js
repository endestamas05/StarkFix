// Csak a belso-arnyekolok.html oldalhoz tartozó JS

// Belső árnyékolók sticky menu active switching logic
const belsoLinks = document.querySelectorAll('.belso-type-link');
let lastActiveBelsoId = '';
belsoLinks.forEach(link => {
    if (link.classList.contains('active')) {
        lastActiveBelsoId = link.getAttribute('href').replace('#', '');
    }
});
if (!lastActiveBelsoId && belsoLinks.length) {
    lastActiveBelsoId = belsoLinks[0].getAttribute('href').replace('#', '');
}
belsoLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href').replace('#', '');
        const section = document.getElementById(targetId);
        if (section) {
            e.preventDefault();
            // Csak belso-type-nav-ot keresünk, mosquito-type-nav-ot nem
            const stickyNav = document.querySelector('.belso-type-nav');
            const stickyNavHeight = stickyNav ? stickyNav.offsetHeight : 0;
            const offset = stickyNavHeight + 110;
            const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
                top: sectionTop - offset,
                behavior: 'smooth'
            });
            setActiveBelsoLink(targetId);
            lastActiveBelsoId = targetId;
        }
    });
    link.addEventListener('mouseenter', function() {
        belsoLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
    link.addEventListener('mouseleave', function() {
        belsoLinks.forEach(l => {
            const href = l.getAttribute('href').replace('#', '');
            if (href === lastActiveBelsoId) {
                l.classList.add('active');
                l.setAttribute('aria-current', 'true');
            } else {
                l.classList.remove('active');
                l.setAttribute('aria-current', 'false');
            }
        });
    });
});
function setActiveBelsoLink(id) {
    lastActiveBelsoId = id;
    belsoLinks.forEach(link => {
        const href = link.getAttribute('href').replace('#', '');
        if (href === id) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'true');
        } else {
            link.classList.remove('active');
            link.setAttribute('aria-current', 'false');
        }
    });
}
