export default {
  global: {
    Name:
      'Evaluación de la calidad e inocuidad de los alimentos mediante APPCC.',
    Description:
      'Este componente formativo está orientado a adquirir y fortalecer en el aprendiz las competencias técnicas en gestión de calidad e inocuidad alimentaria, mediante la aplicación de Buenas Prácticas de Manufactura (BPM) y el sistema APPCC en contextos productivos reales, promoviendo la prevención de riesgos y la protección de la salud pública.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal2.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal2.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
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
        titulo: 'Prerrequisitos del sistema APPCC',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Buenas Prácticas de Manufactura (BPM)',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Programas de saneamiento',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Trazabilidad, control de proveedores y capacitación',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Aplicación práctica del sistema APPCC',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Etapas preliminares',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Aplicación de los siete principios',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Validación, verificación y mejora continua del sistema APPCC',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Validación del sistema APPCC',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Verificación del sistema APPCC',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Diferenciación técnica entre validación y verificación',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Gestión de cambios y actualización del plan APPCC',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo: 'Mejora continua en integración con ISO 22000:2023',
            hash: 't_5_5',
          },
          {
            numero: '5.6',
            titulo: 'Indicadores de desempeño',
            hash: 't_5_6',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Auditoría, evaluación del desempeño e inspección sanitaria',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Auditoría del sistema APPCC',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Evaluación del desempeño',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Inspección sanitaria en Colombia',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Gestión de no conformidades',
            hash: 't_6_4',
          },
          {
            numero: '6.5',
            titulo: 'Cultura de cumplimiento y responsabilidad sanitaria',
            hash: 't_6_5',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Tendencias actuales y desafíos emergentes',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo:
              'Innovación tecnológica y transformación digital en la gestión de la inocuidad',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo:
              'Riesgos emergentes globales y fortalecimiento de la cultura de inocuidad',
            hash: 't_7_2',
          },
        ],
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
      termino: 'Aditivo alimentario',
      significado:
        'Sustancia que se añade intencionalmente a un alimento con fines tecnológicos (conservación, color, sabor, textura), sin propósito nutritivo primario, y cuya seguridad está científicamente evaluada.',
    },
    {
      termino: 'Análisis de peligros',
      significado:
        'Proceso sistemático de identificación y evaluación de peligros biológicos, químicos y físicos que pueden afectar la inocuidad de un alimento.',
    },
    {
      termino: 'Análisis de riesgo',
      significado:
        'Enfoque científico compuesto por evaluación, gestión y comunicación del riesgo para proteger la salud pública.',
    },
    {
      termino: 'APPCC (Análisis de Peligros y Puntos Críticos de Control)',
      significado:
        'Sistema preventivo de gestión que identifica, evalúa y controla peligros significativos para la inocuidad alimentaria.',
    },
    {
      termino: 'Buenas Prácticas de Manufactura (BPM)',
      significado:
        'Conjunto de condiciones y prácticas higiénico-sanitarias básicas que constituyen la base de los sistemas de inocuidad.',
    },
    {
      termino: 'Calidad alimentaria',
      significado:
        'Grado de cumplimiento de requisitos técnicos, normativos y sensoriales que garantizan que un alimento es apto para el consumo humano y satisface expectativas establecidas.',
    },
    {
      termino: 'Contaminación cruzada',
      significado:
        'Transferencia de agentes contaminantes desde una fuente hacia un alimento, ya sea por contacto directo o indirecto.',
    },
    {
      termino: 'Cultura de Inocuidad',
      significado:
        'Conjunto de valores, creencias y comportamientos compartidos dentro de una organización que determinan su compromiso real con la seguridad alimentaria.',
    },
    {
      termino: 'Evaluación del riesgo',
      significado:
        'Componente científico del análisis de riesgo que estima la probabilidad y severidad de efectos adversos en la salud.',
    },
    {
      termino: 'Gestión del riesgo',
      significado:
        'Proceso mediante el cual se toman decisiones regulatorias o técnicas para controlar riesgos identificados.',
    },
    {
      termino: 'Inocuidad alimentaria',
      significado:
        'Condición que asegura que los alimentos no representan riesgo para la salud del consumidor bajo condiciones normales de consumo.',
    },
    {
      termino: 'Límite crítico',
      significado:
        'Valor máximo o mínimo que debe cumplirse en un punto crítico de control para prevenir o eliminar un peligro.',
    },
    {
      termino: 'Medida de control',
      significado:
        'Acción o actividad que puede utilizarse para prevenir, eliminar o reducir un peligro a un nivel aceptable.',
    },
    {
      termino: 'Monitoreo',
      significado:
        'Secuencia planificada de observaciones o mediciones para evaluar si un punto crítico de control se mantiene dentro de los límites establecidos.',
    },
    {
      termino: 'Peligro',
      significado:
        'Agente biológico, químico o físico con potencial de causar un efecto adverso en la salud.',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'Capacidad para seguir el movimiento de un alimento o ingrediente a través de todas las etapas de producción, transformación y distribución.',
    },
    {
      termino: 'Validación',
      significado:
        'Obtención de evidencia objetiva que demuestra que las medidas de control implementadas son eficaces para gestionar los peligros identificados.',
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
