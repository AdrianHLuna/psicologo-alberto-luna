import { MedicalService } from "../types/schema";

export const services: MedicalService[] = [
  {
    id: "psicoterapia-adultos",
    slug: "psicoterapia-adultos",
    name: "Psicoterapia para Adultos y Adolescentes",
    description: "Un espacio terapéutico seguro, confidencial y libre de juicios diseñado para ayudarte a procesar el malestar emocional y desarrollar herramientas efectivas.",
    longDescription: "La psicoterapia individual es un proceso colaborativo diseñado para abordar el sufrimiento emocional y fomentar el autoconocimiento. En adolescentes, nos enfocamos en el acompañamiento durante las transiciones de identidad, regulación escolar y familiar. En adultos, aplicamos técnicas cognitivo-conductuales e integradoras para tratar depresión, ansiedad, burnout y heridas de la infancia, ayudándote a salir del modo supervivencia.",
    type: "consultorio",
    duration: "50 a 60 minutos por sesión",
    isPainful: false,
    benefits: [
      "Espacio libre de estigmatización y con confidencialidad profesional absoluta",
      "Comprensión de los patrones de conducta repetitivos y autosaboteadores",
      "Herramientas de reestructuración de pensamientos automáticos negativos",
      "Acompañamiento empático en la sanación de heridas afectivas del pasado",
      "Establecimiento de límites saludables con el entorno familiar y laboral"
    ],
    postOpRecommendations: [
      "Asistir de forma regular a las sesiones programadas para consolidar el avance",
      "Realizar las bitácoras o ejercicios reflexivos acordados en las sesiones",
      "Ser honesto sobre tus emociones y procesos con tu psicoterapeuta",
      "Evitar presionar los tiempos de sanación personales, cada proceso es único"
    ],
    priceRange: "$400 - $500 MXN por sesión",
    relatedConditions: ["depresion-mayor", "ansiedad-generalizada", "estres-postraumatico", "trastorno-obsesivo-compulsivo", "tdah-en-adultos"],
    image: "/images/service-therapy.jpg",
    seo: {
      title: "Psicoterapia Individual en Tuxtla | Psic. Alberto Luna",
      description: "Consulta de psicoterapia individual para adolescentes y adultos en Tuxtla Gutiérrez. Supera la ansiedad y sana tu historia.",
      keywords: ["Psicoterapia en Tuxtla Gutiérrez", "Psicólogo clínico para adultos", "Terapia para adolescentes", "Gestión emocional Chiapas"]
    }
  },
  {
    id: "crisis-existenciales",
    slug: "acompanamiento-crisis-existenciales",
    name: "Acompañamiento en Crisis Existenciales y Transiciones",
    description: "Espacio enfocado en resolver preguntas sobre el sentido de vida, el vacío emocional y los dilemas de las crisis de los 20s y 30s.",
    longDescription: "Atravesar periodos de transición (un divorcio, un despido, o la sensación de no saber hacia dónde vas) puede generar un vacío profundo. Este servicio está inspirado en la logoterapia y el autoconocimiento. Te acompaño a cuestionar las expectativas familiares y sociales heredadas, a reconciliarte con tu historia personal y a redefinir un plan de vida congruente con tus propios valores.",
    type: "consultorio",
    duration: "50 minutos por sesión",
    isPainful: false,
    benefits: [
      "Claridad mental ante dilemas existenciales o pérdida de rumbo",
      "Resignificación de tu historia y de las crisis de vida como oportunidades de cambio",
      "Cuestionamiento constructivo de guiones y expectativas ajenas",
      "Construcción de un mapa de valores personales e Ikigai",
      "Soporte emocional y validación durante transiciones complejas"
    ],
    postOpRecommendations: [
      "Escribir reflexiones libres entre sesiones sobre tus prioridades personales",
      "Identificar qué metas actuales son heredadas y cuáles son verdaderamente tuyas",
      "Tener paciencia ante la incertidumbre, es parte del proceso de redescubrimiento",
      "Mantener un diálogo abierto y honesto sobre tus miedos profundos"
    ],
    priceRange: "$500 MXN por sesión",
    relatedConditions: ["depresion-mayor", "estres-postraumatico"],
    image: "/images/service-crisis.jpg",
    seo: {
      title: "Acompañamiento en Crisis Existenciales | Psic. Alberto Luna",
      description: "Supera la crisis de los 20 y 30 años. Encuentra tu sentido de vida y Ikigai mediante psicoterapia existencial en Tuxtla.",
      keywords: ["Crisis existencial psicólogo", "Sentido de vida terapia Tuxtla", "Logoterapia Chiapas", "Beto Luna psicólogo"]
    }
  },
  {
    id: "raices-y-alas",
    slug: "perfiles-vocacionales-metodo-raices-y-alas",
    name: "Perfiles Vocacionales: Método 'Raíces y Alas'",
    description: "Evaluación y orientación vocacional profunda mediante 3 dimensiones esenciales: Eneagrama, Ikigai y Plan de Acción Profesional.",
    longDescription: "Nuestro método exclusivo va mucho más allá de un test de opción múltiple escolar. Con 'Raíces y Alas', construimos tu perfil analizando 3 fases esenciales: 1) Fase Raíces (Autoconocimiento con Eneagrama para entender tu tipo de personalidad, miedos y talentos), 2) Fase Ikigai (Punto de equilibrio para cruzar tus aptitudes con lo que te apasiona y es viable económicamente), y 3) Fase Alas (Proyección al futuro, entregándote un reporte completo y un plan de acción estratégico para elegir carrera o reinventarte profesionalmente).",
    type: "consultorio",
    duration: "Proceso estructurado de 4 a 5 sesiones individuales",
    isPainful: false,
    benefits: [
      "Autoconocimiento profundo basado en la herramienta del Eneagrama de la personalidad",
      "Claridad absoluta sobre tus aptitudes reales e intereses profesionales",
      "Mapeo de opciones universitarias o laborales con viabilidad de mercado real",
      "Superación de la procrastinación o la parálisis por análisis ante la elección",
      "Entrega de un Reporte Vocacional e Ikigai detallado y por escrito"
    ],
    postOpRecommendations: [
      "Completar a tiempo las pruebas psicométricas y de personalidad asignadas",
      "Estar abierto a explorar opciones profesionales fuera de tu zona de confort",
      "Dialogar con profesionales de las áreas de interés sugeridas en el plan",
      "Elaborar un listado de dudas para resolver en la sesión de entrega del reporte"
    ],
    priceRange: "Paquete completo (todas las sesiones y reporte escrito): $2,200 MXN",
    relatedConditions: ["tdah-en-adultos", "ansiedad-generalizada"],
    image: "/images/service-vocational.jpg",
    seo: {
      title: "Orientación Vocacional Método Raíces y Alas | Beto Luna",
      description: "Proceso completo de orientación vocacional en Tuxtla Gutiérrez. Eneagrama, Ikigai y plan de carrera para jóvenes y adultos.",
      keywords: ["Orientación vocacional Tuxtla", "Test vocacional Eneagrama", "Ikigai profesional", "Psicólogo Alberto Luna"]
    }
  },
  {
    id: "talleres",
    slug: "talleres-psicoeducativos",
    name: "Talleres Psicoeducativos y Vivenciales",
    description: "Espacios grupales y dinámicos para el crecimiento en comunidad, compartiendo herramientas prácticas sobre comunicación y metas.",
    longDescription: "Creemos en el poder del aprendizaje colectivo. Diseñamos talleres interactivos presenciales y online enfocados en dotar de habilidades prácticas a jóvenes (preparación para la vida universitaria, metas) y a padres de familia (comunicación asertiva con hijos, manejo de expectativas sin imponer).",
    type: "ambulatorio",
    duration: "Sesiones de 2 a 4 horas (según el taller programado)",
    isPainful: false,
    benefits: [
      "Aprendizaje práctico mediante dinámicas vivenciales y de rol",
      "Intercambio de experiencias seguras con personas con inquietudes similares",
      "Herramientas de comunicación y límites listas para usar en casa",
      "Materiales didácticos y guías impresas/digitales de seguimiento",
      "Costos de acceso muy accesibles por participante"
    ],
    postOpRecommendations: [
      "Participar activamente en las dinámicas y debates grupales",
      "Mantener un ambiente de respeto y escucha empática hacia los demás",
      "Aplicar en tu rutina familiar o escolar el plan de metas diseñado en el taller",
      "Seguir el canal de comunicación del grupo para resolver dudas de seguimiento"
    ],
    priceRange: "$250 - $400 MXN por participante",
    relatedConditions: ["ansiedad-generalizada", "tdah-en-adultos"],
    image: "/images/service-workshops.jpg",
    seo: {
      title: "Talleres Psicoeducativos en Tuxtla | Psic. Alberto Luna",
      description: "Talleres grupales para padres e hijos. Aprende a poner límites sanos y a estructurar tus metas en Chiapas.",
      keywords: ["Talleres de psicología Tuxtla", "Escuela para padres Chiapas", "Metas y planificación jóvenes", "Grupos de apoyo emocional"]
    }
  },
  {
    id: "conferencias",
    slug: "conferencias-charlas",
    name: "Conferencias y Charlas Inspiracionales",
    description: "Ponencias dinámicas para instituciones y empresas enfocadas en derribar estigmas y concientizar sobre salud mental.",
    longDescription: "Brindamos charlas corporativas y escolares fluidas, empáticas y con rigor científico. Abordamos temáticas críticas como el Síndrome de Burnout (estrés laboral), el síndrome del impostor, salud mental en la era digital y la inteligencia emocional aplicada.",
    type: "hospitalario", // Representa evento externo/corporativo en nuestro esquema
    duration: "60 a 90 minutos por ponencia",
    isPainful: false,
    benefits: [
      "Concientización y sensibilización sobre salud mental de alto impacto",
      "Derribo de tabúes y estigmas asociados a pedir ayuda psicológica",
      "Estrategias prácticas de detección de estrés y burnout en el trabajo",
      "Conexión auténtica con audiencias jóvenes mediante lenguaje fresco",
      "Dinámica de preguntas y respuestas dirigida por el especialista"
    ],
    postOpRecommendations: [
      "Coordinar previamente los requerimientos de audio y proyección del recinto",
      "Brindar folletos informativos de ayuda psicológica al final de la ponencia",
      "Fomentar un espacio seguro para preguntas anónimas si es necesario",
      "Retroalimentar al ponente con las encuestas de satisfacción de la empresa"
    ],
    priceRange: "A cotizar según número de asistentes y viáticos",
    relatedConditions: ["ansiedad-generalizada", "depresion-mayor", "tdah-en-adultos"],
    image: "/images/service-conferences.jpg",
    seo: {
      title: "Conferencias de Salud Mental y Burnout | Beto Luna",
      description: "Charlas y conferencias para escuelas y empresas en Chiapas. Gestión del estrés laboral y salud mental digital.",
      keywords: ["Conferencias de psicología Monterrey Tuxtla", "Burnout pláticas empresas", "Salud mental escolar", "Beto Luna conferencista"]
    }
  },
  {
    id: "regulacion-emocional",
    slug: "entrenamiento-regulacion-emocional",
    name: "Entrenamiento en Regulación Emocional de Corto Plazo",
    description: "Protocolo de sesiones de corta duración enfocado en aprender a desactivar ataques de pánico y regular picos de ira o impulsividad.",
    longDescription: "Un servicio diseñado para consultantes que no buscan psicoterapia de larga duración, sino que necesitan adquirir habilidades de afrontamiento urgentes. Se entrena al paciente en respiración de desactivación simpática ante ataques de pánico, técnicas de tolerancia a la frustración y pautas de higiene mental digital.",
    type: "consultorio",
    duration: "45 minutos por sesión (esquema de 4 a 6 sesiones)",
    isPainful: false,
    benefits: [
      "Estrategias físicas inmediatas para frenar la taquicardia y ahogo de la ansiedad",
      "Pautas para desactivar el enojo explosivo y mejorar el control de impulsos",
      "Entrenamiento en higiene de pantallas y detox de redes sociales",
      "Reducción del estrés físico acumulado mediante relajación guiada",
      "Enfoque práctico y orientado 100% a la acción en el presente"
    ],
    postOpRecommendations: [
      "Practicar la respiración diafragmática diariamente 5 minutos, incluso sin ansiedad",
      "Usar las aplicaciones de bloqueo de tiempo de pantalla acordadas",
      "Identificar tus primeras señales corporales de enojo para retirarte a tiempo",
      "Llevar tu registro semanal de picos de tensión física y emocional"
    ],
    priceRange: "$500 MXN por sesión",
    relatedConditions: ["ansiedad-generalizada", "trastorno-obsesivo-compulsivo"],
    image: "/images/service-regulation.jpg",
    seo: {
      title: "Entrenamiento en Regulación Emocional | Psic. Alberto Luna",
      description: "Aprende técnicas rápidas para controlar el enojo, la impulsividad y calmar ataques de pánico. Sesiones prácticas en Tuxtla.",
      keywords: ["Control de la ira Tuxtla", "Desactivar ataques de pánico", "Ejercicios de respiración ansiedad", "Psicólogo Beto Luna"]
    }
  },
  {
    id: "sesion-unica",
    slug: "orientacion-asesoria-sesion-unica",
    name: "Orientación y Asesorías Psicológicas (Sesiones Únicas)",
    description: "Consultas breves y estratégicas (de 1 a 3 sesiones) para resolver un conflicto inmediato, tomar una decisión crucial o recibir guía focal.",
    longDescription: "Ideal para quienes necesitan un punto de vista objetivo, clínico y estratégico ante un dilema del momento (ej. resolver un desacuerdo familiar puntual, pautas de crianza específicas, o preparación mental para una entrevista de gran importancia). Te vas a casa con recomendaciones claras y un plan de acción por escrito.",
    type: "consultorio",
    duration: "60 minutos (sesión única o máxima de 3)",
    isPainful: false,
    benefits: [
      "Claridad objetiva e inmediata sobre un dilema de vida del presente",
      "Retroalimentación profesional directa libre de procesos prolongados",
      "Entrega escrita de pautas y sugerencias clínicas personalizadas",
      "Ideal para tomar decisiones de alta tensión o resolver conflictos de pareja",
      "Opción de canalización a psicoterapia formal si se detectan raíces profundas"
    ],
    postOpRecommendations: [
      "Ejecutar la lista de recomendaciones acordadas en las siguientes 48 horas",
      "Evitar sobreanalizar el dilema, apegarse al plan de acción por escrito",
      "Tomar notas durante la sesión para conservar las ideas clave",
      "Solicitar sesión de seguimiento breve a las 3 semanas de ser necesario"
    ],
    priceRange: "$600 MXN por sesión",
    relatedConditions: ["depresion-mayor", "ansiedad-generalizada"],
    image: "/images/service-single.jpg",
    seo: {
      title: "Asesoría Psicológica de Sesión Única | Beto Luna",
      description: "Consulta rápida y estratégica para tomar decisiones complejas o resolver conflictos inmediatos en Tuxtla. Entrega de pautas.",
      keywords: ["Sesión única psicología", "Consejería psicológica Tuxtla", "Ayuda toma de decisiones", "Psicólogo Alberto Luna"]
    }
  }
];
