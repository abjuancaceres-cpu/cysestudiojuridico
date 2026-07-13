const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Abrir menú' : 'Cerrar menú');
    nav.classList.toggle('is-open', !isOpen);
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Abrir menú');
      nav.classList.remove('is-open');
    });
  });

  document.addEventListener('click', (event) => {
    if (!nav.contains(event.target) && !menuButton.contains(event.target)) {
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Abrir menú');
      nav.classList.remove('is-open');
    }
  });
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

// Garantiza que los enlaces “Inicio” vuelvan realmente al comienzo,
// incluso con el encabezado fijo y desde cualquier sección.
document.querySelectorAll('[data-scroll-top]').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    history.replaceState(null, '', window.location.pathname);
  });
});


// Evita repetir el mismo llamado a la acción.
// Mientras el botón principal “Solicitar una entrevista” está visible,
// se oculta el botón equivalente del encabezado.
const headerInterviewCta = document.getElementById('header-interview-cta');
const heroInterviewCta = document.getElementById('hero-interview-cta');

if (headerInterviewCta && heroInterviewCta) {
  const updateHeaderCta = (isHeroCtaVisible) => {
    headerInterviewCta.classList.toggle('is-context-hidden', isHeroCtaVisible);
    headerInterviewCta.setAttribute('aria-hidden', String(isHeroCtaVisible));
    headerInterviewCta.tabIndex = isHeroCtaVisible ? -1 : 0;
  };

  if ('IntersectionObserver' in window) {
    const interviewObserver = new IntersectionObserver(
      ([entry]) => updateHeaderCta(entry.isIntersecting),
      {
        root: null,
        // Descuenta aproximadamente la altura del encabezado fijo.
        rootMargin: '-72px 0px 0px 0px',
        threshold: 0.35
      }
    );

    interviewObserver.observe(heroInterviewCta);
  } else {
    // Compatibilidad básica para navegadores antiguos.
    const checkHeroCtaVisibility = () => {
      const rect = heroInterviewCta.getBoundingClientRect();
      const visible = rect.bottom > 72 && rect.top < window.innerHeight;
      updateHeaderCta(visible);
    };

    checkHeroCtaVisibility();
    window.addEventListener('scroll', checkHeroCtaVisibility, { passive: true });
    window.addEventListener('resize', checkHeroCtaVisibility);
  }
}
