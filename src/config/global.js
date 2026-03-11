export default {
  global: {
    Name:
      'Evaluación de la calidad e inocuidad de los alimentos mediante APPCC.',
    Description:
      'Este componente formativo está orientado a adquirir y fortalecer en el aprendiz las competencias técnicas en gestión de calidad e inocuidad alimentaria, mediante la aplicación de Buenas Prácticas de Manufactura (BPM) y el sistema APPCC en contextos productivos reales, promoviendo la prevención de riesgos y la protección de la salud pública.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Fundamentos de calidad e inocuidad alimentaria',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto de calidad en alimentos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Inocuidad alimentaria y riesgos asociados',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Relación entre calidad, inocuidad y salud pública',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Marco normativo y técnico del APPCC',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Evolución del sistema APPCC',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Codex Alimentarius y estándares internacionales',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Normatividad colombiana vigente',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Tema 3',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: '',
      link: '',
    },
  ],
  glosario: [
    {
      termino: '',
      significado: '',
    },
    {
      termino: '',
      significado: '',
    },
    {
      termino: '',
      significado: '',
    },
    {
      termino: '',
      significado: '',
    },
    {
      termino: '',
      significado: '',
    },
    {
      termino: '',
      significado: '',
    },
    {
      termino: '',
      significado: '',
    },
    {
      termino: '',
      significado: '',
    },
    {
      termino: '',
      significado: '',
    },
    {
      termino: '',
      significado: '',
    },
    {
      termino: '',
      significado: '',
    },
    {
      termino: '',
      significado: '',
    },
    {
      termino: '',
      significado: '',
    },
    {
      termino: '',
      significado: '',
    },
    {
      termino: '',
      significado: '',
    },
    {
      termino: '',
      significado: '',
    },
  ],
  referencias: [
    {
      referencia:
        'Codex Alimentarius Commission. (2023). General principles of food hygiene CXC 1-1969 (Rev. 2023).',
      link: 'https://www.fao.org/fao-who-codexalimentarius',
    },
    {
      referencia: '',
      link: '',
    },
    {
      referencia:
        'Food and Agriculture Organization of the United Nations (FAO). (2003). Sistema de calidad e inocuidad de los alimentos: Manual de capacitación sobre higiene de los alimentos y el sistema de análisis de peligros y de puntos críticos de control (APPCC). FAO.',
      link: 'https://www.fao.org/4/W8088S/W8088S00.htm',
    },
    {
      referencia:
        'Food and Agriculture Organization of the United Nations (FAO) & World Health Organization (WHO). (2022). Food safety risk analysis: A guide for national food safety authorities. FAO.',
      link: 'https://www.fao.org/home/en',
    },
    {
      referencia:
        'Fundación para la Seguridad y Calidad Alimentaria. (2018). Guía de autocontrol en establecimientos alimentarios. Universidad de Salamanca.',
      link: 'https://seguridadycalidadalimentaria.fundacionusal.es',
    },
    {
      referencia:
        'Instituto Nacional de Vigilancia de Medicamentos y Alimentos (INVIMA). (2023). Lineamientos técnicos de buenas prácticas de manufactura y sistemas de autocontrol sanitario.',
      link: 'https://www.invima.gov.co',
    },
    {
      referencia:
        'International Organization for Standardization. (2023). ISO 22000:2023 Sistemas de gestión de la inocuidad de los alimentos - Requisitos para cualquier organización de la cadena alimentaria. ISO.',
      link: '',
    },
    {
      referencia:
        'Organización Panamericana de la Salud (OPS). (2022). Inocuidad de los alimentos y salud pública.',
      link: 'https://www.paho.org',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
