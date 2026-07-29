/*
 * CyS Estudio Jurídico — SEO ETAPA 1
 * Configura metadatos únicos y datos estructurados según la página.
 * El archivo debe cargarse con: <script src="seo.js" defer></script>
 */
(() => {
  'use strict';

  const SITE = 'https://cysestudiojuridico.ar';
  const BUSINESS = {
    name: 'CyS Estudio Jurídico',
    alternateName: 'Cáceres & Silva Abogados',
    telephone: '+54 9 11 3400 5804',
    email: ['ab.juancaceres@gmail.com', 'dra.aracelisilva@gmail.com'],
    areas: [
      'Berazategui', 'Quilmes', 'Florencio Varela', 'Hudson',
      'Ranelagh', 'Ezpeleta', 'Zona Sur del Gran Buenos Aires',
      'Provincia de Buenos Aires', 'Ciudad Autónoma de Buenos Aires'
    ],
    sameAs: [
      'https://www.instagram.com/cys.estudiojuridico/',
      'https://www.google.com/maps/place/Cys.Estudio+Jur%C3%ADdico/'
    ]
  };

  const pages = {
    '/': {
      title: 'Abogados en Berazategui | CyS Estudio Jurídico',
      description: 'Estudio jurídico en Berazategui especializado en Familia, Sucesiones, Derecho Laboral, Jubilaciones, Empresas y Registro de Marcas. Atención presencial y virtual.',
      h1: 'Estudio Jurídico en Berazategui para Personas, Familias y Empresas',
      type: 'LegalService',
      service: 'Asesoramiento jurídico integral'
    },
    '/index.html': {
      title: 'Abogados en Berazategui | CyS Estudio Jurídico',
      description: 'Estudio jurídico en Berazategui especializado en Familia, Sucesiones, Derecho Laboral, Jubilaciones, Empresas y Registro de Marcas. Atención presencial y virtual.',
      h1: 'Estudio Jurídico en Berazategui para Personas, Familias y Empresas',
      type: 'LegalService',
      service: 'Asesoramiento jurídico integral'
    },
    '/servicios.html': {
      title: 'Servicios Jurídicos en Berazategui | CyS Abogados',
      description: 'Servicios jurídicos para personas, familias, empresas y emprendedores en Berazategui, Quilmes y zona sur. Conocé cómo podemos ayudarte.',
      h1: 'Servicios jurídicos para cada etapa personal y empresarial',
      type: 'CollectionPage',
      service: 'Servicios jurídicos'
    },
    '/personas-familias.html': {
      title: 'Abogados para Personas y Familias en Berazategui | CyS',
      description: 'Asesoramiento en Derecho de Familia, Sucesiones, Jubilaciones, Derecho Laboral y accidentes de trabajo en Berazategui y zona sur.',
      h1: 'Asesoramiento jurídico para personas y familias en Berazategui',
      type: 'CollectionPage',
      service: 'Asesoramiento para personas y familias'
    },
    '/empresas-emprendedores.html': {
      title: 'Abogados para Empresas y Emprendedores | CyS',
      description: 'Asesoramiento jurídico para empresas y emprendedores: sociedades, contratos, marcas, relaciones laborales y liquidación de sueldos.',
      h1: 'Asesoramiento jurídico para empresas y emprendedores',
      type: 'CollectionPage',
      service: 'Asesoramiento empresarial'
    },
    '/familia.html': {
      title: 'Abogado de Familia en Berazategui | CyS Estudio Jurídico',
      description: 'Abogado de familia en Berazategui. Asesoramiento en cuota alimentaria, divorcio, cuidado personal, régimen de comunicación, filiación, guarda y adopción.',
      h1: 'Abogado de Familia en Berazategui',
      type: 'LegalService',
      service: 'Derecho de Familia',
      faqs: [
        ['¿Puedo consultar antes de iniciar una demanda?', 'Sí. La entrevista permite evaluar si corresponde negociar, formalizar un acuerdo o iniciar una actuación judicial.'],
        ['¿Atienden consultas virtuales?', 'Sí. La atención puede ser virtual o presencial con cita previa.'],
        ['¿Qué documentación debo tener?', 'Depende del caso. En la entrevista te indicaremos qué partidas, resoluciones, acuerdos, comprobantes o comunicaciones conviene reunir.'],
        ['¿Trabajan en Berazategui y zona sur?', 'Sí. Atendemos asuntos de Berazategui, Quilmes, Florencio Varela y otras localidades de zona sur.']
      ]
    },
    '/sucesiones.html': {
      title: 'Abogado de Sucesiones en Berazategui | CyS',
      description: 'Abogado de sucesiones en Berazategui. Declaratoria de herederos, inmuebles, automotores, inscripción de bienes, cesiones y tracto abreviado.',
      h1: 'Abogado de Sucesiones en Berazategui',
      type: 'LegalService',
      service: 'Sucesiones',
      faqs: [
        ['¿Es obligatorio iniciar una sucesión?', 'Es necesaria cuando se pretende disponer, inscribir o regularizar bienes que pertenecían a una persona fallecida.'],
        ['¿Todos los herederos deben estar de acuerdo?', 'No siempre para iniciar el trámite. Determinadas adjudicaciones o ventas pueden requerir acuerdo.'],
        ['¿Se puede vender mediante tracto abreviado?', 'En algunos casos sí. Su viabilidad depende de la documentación, el expediente y la operación concreta.'],
        ['¿Cuánto tarda una sucesión?', 'Depende del juzgado, la documentación, los bienes involucrados y la existencia de conflictos.']
      ]
    },
    '/jubilaciones.html': {
      title: 'Abogado Previsional en Berazategui | Jubilaciones y Pensiones',
      description: 'Asesoramiento previsional en Berazategui: jubilaciones, pensiones, reconocimiento de servicios, aportes, moratorias y trámites ante ANSES.',
      h1: 'Abogado Previsional en Berazategui',
      type: 'LegalService',
      service: 'Jubilaciones y Pensiones'
    },
    '/empresas.html': {
      title: 'Abogado Empresarial y Societario | CyS Estudio Jurídico',
      description: 'Asesoramiento jurídico empresarial y societario: constitución y regularización de sociedades, contratos, actas, IGJ, DPPJ y conflictos societarios.',
      h1: 'Asesoramiento jurídico empresarial y societario',
      type: 'LegalService',
      service: 'Derecho Empresarial y Societario'
    },
    '/marcas.html': {
      title: 'Registro de Marca en Argentina | Abogados INPI | CyS',
      description: 'Registro de marcas ante el INPI en Argentina. Búsqueda, clasificación, presentación, seguimiento, oposiciones y renovación con atención online.',
      h1: 'Registro de Marca en Argentina',
      type: 'LegalService',
      service: 'Registro de Marcas ante el INPI'
    },
    '/payroll.html': {
      title: 'Liquidación de Sueldos y Jornales para Empresas | CyS',
      description: 'Servicio de liquidación de sueldos y jornales, cargas sociales, altas, bajas y asesoramiento laboral para empresas y empleadores.',
      h1: 'Liquidación de Sueldos y Jornales para Empresas',
      type: 'ProfessionalService',
      service: 'Liquidación de Sueldos y Jornales'
    },
    '/guias.html': {
      title: 'Guías Jurídicas | Información Legal Clara | CyS',
      description: 'Guías jurídicas claras sobre familia, sucesiones, jubilaciones, trabajo, sociedades y marcas. Información general elaborada por abogados.',
      h1: 'Guías jurídicas para comprender tus derechos y próximos pasos',
      type: 'CollectionPage',
      service: 'Guías Jurídicas'
    },
    '/guia-cuota-alimentaria.html': {
      title: 'Cuota Alimentaria en Argentina: Guía Completa | CyS',
      description: 'Guía sobre cuota alimentaria: quién debe pagar, qué gastos comprende, cómo se calcula, cómo reclamar y qué hacer ante el incumplimiento.',
      h1: 'Cuota alimentaria en Argentina: qué comprende y cómo reclamar',
      type: 'Article',
      service: 'Guía sobre cuota alimentaria'
    }
  };

  const normalizePath = (pathname) => {
    const clean = pathname.replace(/\/+/g, '/');
    return clean === '' ? '/' : clean;
  };

  const path = normalizePath(window.location.pathname);
  const config = pages[path];
  if (!config) return;

  const upsertMeta = (selector, attributes) => {
    let element = document.head.querySelector(selector);
    if (!element) {
      element = document.createElement('meta');
      document.head.appendChild(element);
    }
    Object.entries(attributes).forEach(([name, value]) => element.setAttribute(name, value));
  };

  const upsertLink = (rel, href) => {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement('link');
      link.rel = rel;
      document.head.appendChild(link);
    }
    link.href = href;
  };

  document.title = config.title;
  const canonical = `${SITE}${path === '/index.html' ? '/' : path}`;

  upsertMeta('meta[name="description"]', { name: 'description', content: config.description });
  upsertMeta('meta[name="robots"]', { name: 'robots', content: 'index, follow, max-image-preview:large' });
  upsertMeta('meta[property="og:title"]', { property: 'og:title', content: config.title });
  upsertMeta('meta[property="og:description"]', { property: 'og:description', content: config.description });
  upsertMeta('meta[property="og:type"]', { property: 'og:type', content: config.type === 'Article' ? 'article' : 'website' });
  upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonical });
  upsertMeta('meta[property="og:locale"]', { property: 'og:locale', content: 'es_AR' });
  upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary' });
  upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: config.title });
  upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: config.description });
  upsertLink('canonical', canonical);

  const currentH1 = document.querySelector('main h1');
  if (currentH1 && config.h1) currentH1.textContent = config.h1;

  document.querySelectorAll('script[data-cys-seo-schema]').forEach((node) => node.remove());

  const graph = [
    {
      '@type': 'LegalService',
      '@id': `${SITE}/#legalservice`,
      name: BUSINESS.name,
      alternateName: BUSINESS.alternateName,
      url: `${SITE}/`,
      telephone: BUSINESS.telephone,
      email: BUSINESS.email,
      areaServed: BUSINESS.areas,
      sameAs: BUSINESS.sameAs
    },
    {
      '@type': config.type,
      '@id': `${canonical}#webpage`,
      url: canonical,
      name: config.title,
      description: config.description,
      isPartOf: { '@id': `${SITE}/#website` },
      about: { '@id': `${SITE}/#legalservice` }
    },
    {
      '@type': 'Service',
      '@id': `${canonical}#service`,
      name: config.service,
      provider: { '@id': `${SITE}/#legalservice` },
      areaServed: BUSINESS.areas,
      url: canonical
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${canonical}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${SITE}/` },
        { '@type': 'ListItem', position: 2, name: config.service, item: canonical }
      ]
    }
  ];

  if (config.type === 'Article') {
    graph.push({
      '@type': 'Article',
      '@id': `${canonical}#article`,
      headline: config.h1,
      description: config.description,
      mainEntityOfPage: { '@id': `${canonical}#webpage` },
      author: [
        { '@type': 'Person', name: 'Juan Cáceres' },
        { '@type': 'Person', name: 'Araceli Silva' }
      ],
      publisher: { '@id': `${SITE}/#legalservice` },
      inLanguage: 'es-AR'
    });
  }

  if (config.faqs?.length) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${canonical}#faq`,
      mainEntity: config.faqs.map(([question, answer]) => ({
        '@type': 'Question',
        name: question,
        acceptedAnswer: { '@type': 'Answer', text: answer }
      }))
    });
  }

  const schema = document.createElement('script');
  schema.type = 'application/ld+json';
  schema.dataset.cysSeoSchema = 'true';
  schema.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${SITE}/#website`,
        url: `${SITE}/`,
        name: BUSINESS.name,
        inLanguage: 'es-AR'
      },
      ...graph
    ]
  });
  document.head.appendChild(schema);
})();