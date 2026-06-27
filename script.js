function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function getDateTime() {
    const el = document.querySelector('#datetime');
    if (!el) return;

    const locale = currentLang === 'pt' ? 'pt-PT' : 'en-GB';
    const now = new Date();
    el.textContent = now.toLocaleString(locale, {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

function setCurrentYear() {
    const el = document.querySelector('#currentYear');
    if (!el) return;
    el.textContent = '©' + new Date().getFullYear();
}

function showMessage(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const alertEl = document.getElementById('alert_success');

    alertEl.textContent = t('contact.success', { name });
    alertEl.removeAttribute('hidden');
    event.target.reset();
    topFunction();
}

function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    reveals.forEach((el) => observer.observe(el));
}

function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('#mainNav .nav-link[href^="#"]');
    const offset = 100;

    function setActiveLink() {
        let current = sections[0]?.getAttribute('id') || 'home';
        const scrollPos = window.scrollY + offset;

        sections.forEach((section) => {
            if (scrollPos >= section.offsetTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach((link) => {
            link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
        });
    }

    window.addEventListener('scroll', setActiveLink, { passive: true });
    setActiveLink();
}

function initNavScroll() {
    const navLinks = document.querySelectorAll('#mainNav .nav-link[href^="#"]');
    const navbarCollapse = document.getElementById('navbarNav');

    navLinks.forEach((link) => {
        link.addEventListener('click', () => {
            if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                const toggler = document.querySelector('.navbar-toggler');
                if (toggler) toggler.click();
            }
        });
    });
}

function initNavHover() {
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach((navItem) => {
        const navLink = navItem.querySelector('.nav-link');
        if (!navLink) return;

        navItem.addEventListener('mouseenter', () => navLink.classList.add('heartbeat'));
        navItem.addEventListener('mouseleave', () => navLink.classList.remove('heartbeat'));
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initLanguageToggle();
    setCurrentYear();
    getDateTime();
    setInterval(getDateTime, 60000);
    initScrollReveal();
    initScrollSpy();
    initNavScroll();
    initNavHover();

    if (window.location.hash) {
        setTimeout(() => {
            const target = document.querySelector(window.location.hash);
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    }
});
