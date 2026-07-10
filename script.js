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
