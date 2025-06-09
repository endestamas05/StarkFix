// Csak a szunyoghalok.html oldalhoz tartozó JS

// Szúnyogháló típus menü aktív állapot és smooth scroll
const mosquitoLinks = document.querySelectorAll('.mosquito-type-link');
let lastActiveId = '';
mosquitoLinks.forEach(link => {
    if (link.classList.contains('active')) {
        lastActiveId = link.getAttribute('href').replace('#', '');
    }
});
if (!lastActiveId && mosquitoLinks.length) {
    lastActiveId = mosquitoLinks[0].getAttribute('href').replace('#', '');
}
mosquitoLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href').replace('#', '');
        const section = document.getElementById(targetId);
        if (section) {
            e.preventDefault();
            const stickyNav = document.querySelector('.mosquito-type-nav');
            const stickyNavHeight = stickyNav ? stickyNav.offsetHeight : 0;
            const offset = stickyNavHeight + 110;
            const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
                top: sectionTop - offset,
                behavior: 'smooth'
            });
            setActiveMosquitoLink(targetId);
            lastActiveId = targetId;
        }
    });
    link.addEventListener('mouseenter', function() {
        mosquitoLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
    link.addEventListener('mouseleave', function() {
        mosquitoLinks.forEach(l => {
            const href = l.getAttribute('href').replace('#', '');
            if (href === lastActiveId) {
                l.classList.add('active');
                l.setAttribute('aria-current', 'true');
            } else {
                l.classList.remove('active');
                l.setAttribute('aria-current', 'false');
            }
        });
    });
});
function setActiveMosquitoLink(id) {
    lastActiveId = id;
    mosquitoLinks.forEach(link => {
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
