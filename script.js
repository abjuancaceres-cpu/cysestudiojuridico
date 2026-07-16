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

// Centro de Ayuda Jurídica: búsqueda y filtros.
const guideSearch=document.getElementById('guide-search');const guideCards=[...document.querySelectorAll('.guide-card')];const guideFilters=[...document.querySelectorAll('.guide-filter')];const clearGuideSearch=document.getElementById('clear-guide-search');const guideEmpty=document.getElementById('guide-empty');if(guideCards.length){let activeCategory='all';const normalize=v=>v.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');const update=()=>{const q=normalize(guideSearch?.value||'');let count=0;guideCards.forEach(card=>{const okCat=activeCategory==='all'||card.dataset.category===activeCategory;const txt=normalize(`${card.dataset.title||''} ${card.textContent||''}`);const show=okCat&&(!q||txt.includes(q));card.hidden=!show;if(show)count++});if(guideEmpty)guideEmpty.hidden=count!==0};guideFilters.forEach(btn=>btn.addEventListener('click',()=>{activeCategory=btn.dataset.category||'all';guideFilters.forEach(x=>x.classList.toggle('is-active',x===btn));update()}));guideSearch?.addEventListener('input',update);clearGuideSearch?.addEventListener('click',()=>{if(guideSearch){guideSearch.value='';guideSearch.focus()}activeCategory='all';guideFilters.forEach((x,i)=>x.classList.toggle('is-active',i===0));update()});update()}


// ==========================================================
// FASE 2D · EXPERIENCIA PREMIUM
// ==========================================================
(() => {
  const reduceMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  const body = document.body;
  const header = document.querySelector('.site-header');

  if (!reduceMotion) {
    body.classList.add('premium-loading');
    requestAnimationFrame(() => {
      body.classList.remove('premium-loading');
      body.classList.add('premium-ready');
    });
  } else {
    body.classList.add('premium-ready');
  }

  if (!reduceMotion) {
    const hero =
      document.querySelector('.hero') ||
      document.querySelector('.choice-hero') ||
      document.querySelector('.area-hero') ||
      document.querySelector('.landing-hero') ||
      document.querySelector('.guides-hero') ||
      document.querySelector('.article-header') ||
      document.querySelector('.services-simple-hero');

    if (hero) {
      const heroItems = [
        hero.querySelector('.eyebrow'),
        hero.querySelector('h1'),
        hero.querySelector(
          '.hero-copy > p:not(.eyebrow), .landing-intro, .article-lead, p:not(.eyebrow)'
        ),
        hero.querySelector(
          '.hero-actions, .guides-search, .article-meta, .area-back'
        )
      ].filter(Boolean);

      heroItems.forEach((element, index) => {
        element.classList.add('premium-hero-enter');
        if (index > 0) {
          element.classList.add(
            `premium-hero-enter--delay-${Math.min(index, 3)}`
          );
        }
      });
    }
  }

  const updateHeader = () => {
    if (!header) return;
    header.classList.toggle('is-scrolled', window.scrollY > 24);
  };

  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive:true });

  const selectors = [
    'main > section:not(:first-child)',
    '.home-pathway-card',
    '.choice-card',
    '.area-option',
    '.landing-situation',
    '.landing-step',
    '.guide-card',
    '.team-card',
    '.review-card',
    '.service-card',
    '.article-content > section',
    '.article-advice-card',
    '.article-related-grid > a'
  ];

  const revealElements = Array.from(
    document.querySelectorAll(selectors.join(','))
  ).filter((element, index, collection) => collection.indexOf(element) === index);

  revealElements.forEach((element, index) => {
    element.classList.add('reveal-on-scroll');
    element.style.setProperty(
      '--reveal-delay',
      `${Math.min(index % 4, 3) * 65}ms`
    );
  });

  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealElements.forEach((element) => {
      element.classList.add('is-revealed');
    });
  } else {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        });
      },
      {
        threshold:0.12,
        rootMargin:'0px 0px -8% 0px'
      }
    );

    revealElements.forEach((element) => revealObserver.observe(element));
  }

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    const targetId = link.getAttribute('href');
    if (!targetId || targetId === '#') return;

    link.addEventListener('click', (event) => {
      const target = document.querySelector(targetId);
      if (!target) return;

      event.preventDefault();

      const headerHeight = header?.offsetHeight || 0;
      const top =
        target.getBoundingClientRect().top +
        window.scrollY -
        headerHeight -
        16;

      window.scrollTo({
        top,
        behavior:reduceMotion ? 'auto' : 'smooth'
      });

      history.replaceState(null, '', targetId);
    });
  });
})();
