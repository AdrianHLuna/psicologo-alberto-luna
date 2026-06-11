import { MedicalCondition } from "../types/schema";

export const diseases: MedicalCondition[] = [
  {
    id: "depresion",
    slug: "depresion-mayor",
    name: "Depresión Mayor",
    technicalName: "Trastorno Depresivo Mayor",
    description: "Va mucho más allá de una tristeza pasajera. Se caracteriza por un estado de ánimo deprimido de forma persistente, pérdida de interés o placer en las actividades cotidianas (anedonia), cambios drásticos en el sueño y el apetito, fatiga crónica y sentimientos profundos de inutilidad o culpa. En terapia, se trabaja para reestructurar los pensamientos limitantes y reactivar conductualmente al paciente, guiándole para que recupere la conexión con su vida diaria.",
    symptoms: [
      "Tristeza o desesperanza la mayor parte del día",
      "Pérdida de interés en pasatiempos y actividades (anedonia)",
      "Insomnio o exceso de sueño casi todos los días",
      "Fatiga extrema o falta de energía persistente",
      "Sentimientos de inutilidad, culpa excesiva o autorreproche",
      "Dificultad para concentrarse o tomar decisiones sencillas"
    ],
    causes: [
      "Desequilibrios neuroquímicos y predisposición biológica",
      "Historial de eventos estresantes o pérdidas significativas",
      "Patrones de pensamiento disfuncionales o autoexigencia destructiva"
    ],
    riskFactors: [
      "Antecedentes familiares de trastornos del estado de ánimo",
      "Experiencias de trauma o abuso en la infancia",
      "Enfermedades crónicas o periodos prolongados de aislamiento social"
    ],
    mexicoStats: "La depresión es la primera causa de discapacidad laboral a nivel de salud mental en México. Cerca del 15% de la población experimenta algún episodio depresivo a lo largo de su vida.",
    complications: [
      "Aislamiento social extremo y deterioro de relaciones afectivas",
      "Bajo rendimiento laboral o académico severo",
      "Descuido de la salud física y alimentación",
      "Aparición de ideaciones de autolesión o desesperanza total"
    ],
    treatments: [
      "Psicoterapia Cognitivo-Conductual para reestructuración de pensamientos",
      "Terapia de Activación Conductual para recuperar hábitos saludables",
      "Técnicas de regulación emocional y autocompasión dirigida",
      "Canalización y monitoreo psiquiátrico conjunto en casos moderados a severos"
    ],
    faqs: [
      {
        question: "¿Cuál es la diferencia entre tristeza y depresión?",
        answer: "La tristeza es una emoción natural y pasajera provocada por un evento específico. La depresión es un trastorno persistente que dura al menos dos semanas, afecta el funcionamiento diario del cuerpo (sueño, apetito) y anula el placer en actividades que antes se disfrutaban."
      },
      {
        question: "¿Tomar psicoterapia es suficiente para curar la depresión?",
        answer: "En depresiones leves a moderadas, la psicoterapia cognitiva y la activación conductual son sumamente eficaces por sí solas. En casos severos o crónicos, el mejor abordaje es el tratamiento combinado (psicoterapia y apoyo farmacológico psiquiátrico)."
      },
      {
        question: "¿Cómo ayuda el análisis cognitivo en la depresión?",
        answer: "Permite al consultante identificar pensamientos automáticos negativos ('nada vale la pena', 'todo es mi culpa') y aprender a cuestionar su validez, reemplazándolos por perspectivas más objetivas y compasivas."
      }
    ],
    sources: [
      "Manual Diagnóstico y Estadístico de los Trastornos Mentales (DSM-5)",
      "Organización Mundial de la Salud (OMS) - Depresión",
      "Asociación Psiquiátrica Mexicana"
    ],
    relatedServices: ["psicoterapia-adultos", "acompanamiento-crisis-existenciales"],
    relatedSymptoms: ["duelo-y-perdidas", "baja-autoestima-e-inseguridad"],
    image: "/images/depression.jpg",
    seo: {
      title: "Tratamiento de Depresión en Tuxtla | Psic. Alberto Luna",
      description: "Supera la depresión y la distimia con psicoterapia cognitivo-conductual en Tuxtla Gutiérrez. Espacio seguro y confidencial.",
      keywords: ["Psicólogo depresión Tuxtla", "Terapia para la depresión Chiapas", "Reestructuración cognitiva", "Beto Luna psicólogo"]
    }
  },
  {
    id: "ansiedad",
    slug: "ansiedad-generalizada",
    name: "Ansiedad Generalizada",
    technicalName: "Trastorno de Ansiedad Generalizada (TAG)",
    description: "Implica una preocupación excesiva, persistente y difícil de controlar sobre diversas situaciones cotidianas (trabajo, salud, familia), incluso cuando no hay un peligro real o inminente. Se acompaña de síntomas físicos como tensión muscular, irritabilidad, problemas de sueño y una constante sensación de estar 'al límite'. La intervención psicológica dota al consultante de herramientas para regular su sistema nervioso y reinterpretar los estímulos de amenaza.",
    symptoms: [
      "Preocupación constante y desproporcionada por eventos cotidianos",
      "Dificultad marcada para controlar el flujo de preocupaciones",
      "Tensión muscular persistente y dolores de cabeza por estrés",
      "Irritabilidad, nerviosismo o sensación de estar al borde del abismo",
      "Problemas para conciliar o mantener el sueño por la noche",
      "Fatiga fácil debido al estado de alerta constante"
    ],
    causes: [
      "Hiperactividad del sistema de alarma biológico (amígdala)",
      "Estilos de crianza sobreprotectores o entornos de alta exigencia",
      "Creencias disfuncionales sobre la utilidad de preocuparse ('si me preocupo, controlo')"
    ],
    riskFactors: [
      "Personalidad con tendencia al perfeccionismo o evitación de la incertidumbre",
      "Acumulación prolongada de estresores menores en el trabajo o familia",
      "Historial personal de fobias o ataques de pánico"
    ],
    mexicoStats: "El trastorno de ansiedad generalizada es el motivo de consulta de salud mental más frecuente en México, con un incremento notable en adultos jóvenes en entornos urbanos.",
    complications: [
      "Fatiga crónica y dolores físicos generalizados por tensión muscular",
      "Desarrollo de problemas gastrointestinales y migrañas",
      "Dificultad para concentrarse que afecta el rendimiento laboral",
      "Evitación de actividades sociales por temor a desencadenar crisis"
    ],
    treatments: [
      "Terapia cognitivo-conductual centrada en la tolerancia a la incertidumbre",
      "Entrenamiento en respiración diafragmática y técnicas de relajación muscular progresiva",
      "Técnicas de exposición controlada a los desencadenantes de preocupación",
      "Desarrollo de rutinas de higiene del sueño y desconexión digital"
    ],
    faqs: [
      {
        question: "¿Por qué siento ansiedad si no está pasando nada malo?",
        answer: "La ansiedad del TAG es generalizada y difusa. El cerebro interpreta situaciones cotidianas comunes como amenazas severas y activa la respuesta física de 'lucha o huida' (tensión, taquicardia) de forma automática."
      },
      {
        question: "¿Cómo ayuda la terapia a controlar los pensamientos ansiosos?",
        answer: "Te ayuda a identificar tus sesgos cognitivos (como la catastrofización) y a poner a prueba tus pensamientos mediante técnicas de debate lógico y experimentos conductuales, reduciendo su intensidad."
      },
      {
        question: "¿La ansiedad se quita por completo?",
        answer: "La ansiedad es una emoción humana útil para sobrevivir, por lo que no se trata de eliminarla, sino de aprender a gestionarla para que vuelva a niveles funcionales y deje de interferir con tu paz y tus actividades diarias."
      }
    ],
    sources: [
      "DSM-5 - Trastornos de Ansiedad",
      "National Institute of Mental Health (NIMH)",
      "Guías de Práctica Clínica de Salud Mental de México"
    ],
    relatedServices: ["psicoterapia-adultos", "entrenamiento-regulacion-emocional"],
    relatedSymptoms: ["insomnio-y-ansiedad", "procrastinacion-extrema"],
    image: "/images/anxiety.jpg",
    seo: {
      title: "Tratamiento de Ansiedad en Tuxtla | Psic. Alberto Luna",
      description: "Aprende a regular la ansiedad generalizada y los ataques de pánico con psicoterapia en Tuxtla Gutiérrez. Técnicas de desactivación física.",
      keywords: ["Psicólogo ansiedad Tuxtla", "Ataques de pánico terapia Chiapas", "Manejo del estrés", "Terapia cognitivo conductual"]
    }
  },
  {
    id: "estres",
    slug: "estres-postraumatico",
    name: "Estrés Postraumático (TEPT)",
    technicalName: "Trastorno de Estrés Postraumático",
    description: "Se desarrolla después de haber vivido o presenciado un evento altamente amenazante, doloroso o traumático (accidentes graves, violencia, pérdidas repentinas, asaltos). El consultante revive el suceso a través de recuerdos intrusivos involuntarios (flashbacks), pesadillas y un estado de alerta constante (hipervigilancia), lo que lo lleva a evitar activamente cualquier estímulo, lugar o conversación asociado al trauma.",
    symptoms: [
      "Recuerdos angustiosos e intrusivos recurrentes del evento traumático",
      "Sueños o pesadillas vívidas sobre lo ocurrido",
      "Reacciones físicas severas (taquicardia, sudoración) ante recuerdos",
      "Evitación activa de lugares, personas o pensamientos relacionados",
      "Hipervigilancia constante y sobresaltos fáciles ante ruidos",
      "Sentimientos de desapego o distanciamiento de los seres queridos"
    ],
    causes: [
      "Falla en el procesamiento y almacenamiento de la memoria emocional en el cerebro",
      "Exposición a un evento de alto impacto con amenaza real a la integridad",
      "Falta de soporte social o validación emocional inmediata tras el evento"
    ],
    riskFactors: [
      "Haber vivido eventos traumáticos recurrentes o acumulativos",
      "Profesiones expuestas a situaciones críticas (paramédicos, bomberos, policías)",
      "Falta de recursos cognitivos o psicológicos de afrontamiento inicial"
    ],
    mexicoStats: "Cerca del 68% de los mexicanos reporta haber vivido al menos un evento traumático en su vida, siendo el TEPT un trastorno subdiagnosticado pero con alta tasa de recuperación bajo psicoterapia enfocada.",
    complications: [
      "Aislamiento severo y evitación de actividades cotidianas esenciales",
      "Desarrollo de fobias específicas o ansiedad generalizada secundaria",
      "Problemas crónicos de sueño e hiperalerta física",
      "Deterioro de la estabilidad de la pareja y el trabajo"
    ],
    treatments: [
      "Terapia Cognitiva Procesada para resignificar el significado del trauma",
      "Técnicas de desensibilización sistemática y reentrenamiento respiratorio",
      "Psicoterapia enfocada en trauma para integrar la memoria afectiva",
      "Entrenamiento en regulación emocional para manejar picos de hiperalerta"
    ],
    faqs: [
      {
        question: "¿Qué es un flashback y por qué ocurre?",
        answer: "Es la sensación repentina e involuntaria de que el evento traumático está ocurriendo de nuevo en el presente. Ocurre porque el cerebro no archivó correctamente el recuerdo en el pasado debido al impacto emocional, dejándolo 'activo' ante detonantes cotidianos."
      },
      {
        question: "¿Cuánto tiempo después del trauma puede aparecer el TEPT?",
        answer: "Los síntomas suelen aparecer en los primeros 3 meses, pero en ocasiones hay un inicio demorado que puede tardar meses o incluso años en manifestarse tras el evento estresante."
      },
      {
        question: "¿Es posible sanar un trauma en psicoterapia?",
        answer: "Sí. La psicoterapia no borra el recuerdo del evento, pero ayuda a procesarlo emocionalmente para que deje de detonar la respuesta de alerta extrema. Sanar el trauma te permite recordar el suceso como parte de tu historia sin que controle tu presente."
      }
    ],
    sources: [
      "APA - Trastorno de Estrés Postraumático",
      "World Health Organization (WHO) Trauma Guidelines",
      "Consenso de Psicoterapia del Trauma"
    ],
    relatedServices: ["psicoterapia-adultos", "acompanamiento-crisis-existenciales"],
    relatedSymptoms: ["duelo-y-perdidas", "inestabilidad-emocional"],
    image: "/images/trauma.jpg",
    seo: {
      title: "Terapia de Estrés Postraumático | Psic. Alberto Luna",
      description: "Supera el trauma, las pesadillas y la hipervigilancia mediante psicoterapia enfocada en Tuxtla Gutiérrez. Recupera tu paz.",
      keywords: ["Terapia de trauma Tuxtla", "Psicólogo estrés postraumático Chiapas", "Superar un asalto o pérdida", "Procesamiento cognitivo trauma"]
    }
  },
  {
    id: "toc",
    slug: "trastorno-obsesivo-compulsivo",
    name: "Trastorno Obsesivo-Compulsivo (TOC)",
    technicalName: "Trastorno Obsesivo-Compulsivo",
    description: "Se define por la presencia de obsesiones (pensamientos, imágenes o impulsos intrusivos, no deseados y repetitivos que causan mucha ansiedad) y compulsiones (conductas físicas o actos mentales repetitivos que la persona se siente obligada a realizar para intentar calmar esa ansiedad o evitar un escenario catastrófico). La terapia cognitivo-conductual dota al consultante de estrategias para romper el ciclo de retroalimentación de la obsesión.",
    symptoms: [
      "Pensamientos o imágenes intrusivas de daño, contaminación o simetría",
      "Ansiedad severa detonada por estos pensamientos automáticos no deseados",
      "Necesidad urgente de realizar compulsiones (lavado, verificación, conteo)",
      "Reglas mentales rígidas sobre cómo deben colocarse u ordenarse las cosas",
      "Sensación temporal de alivio tras realizar la conducta compulsiva",
      "Pérdida significativa de tiempo al día (más de una hora) debido a los rituales"
    ],
    causes: [
      "Alteraciones en los circuitos de comunicación entre el lóbulo frontal y los ganglios basales",
      "Factores de predisposición hereditaria y temperamento con alta evitación del daño",
      "Refuerzo negativo del ciclo obsesión-compulsión ('ritúo y baja mi ansiedad')"
    ],
    riskFactors: [
      "Antecedentes familiares directos de TOC o trastornos de ansiedad",
      "Personalidad perfeccionista o con alta rigidez cognitiva",
      "Acontecimientos estresantes agudos que actúen como detonadores"
    ],
    mexicoStats: "El TOC afecta aproximadamente al 2.5% de la población en México. El diagnóstico suele retrasarse varios años debido al tabú o al desconocimiento de que los pensamientos intrusivos son tratables.",
    complications: [
      "Deterioro severo de la calidad de vida y pérdida de tiempo productivo",
      "Problemas físicos derivados (lesiones cutáneas por lavado excesivo de manos)",
      "Conflictos severos en la convivencia familiar por la imposición de rituales",
      "Aparición de depresión secundaria por frustración y cansancio mental"
    ],
    treatments: [
      "Terapia Cognitivo-Conductual con enfoque de Exposición con Prevención de Respuesta (EPR)",
      "Reestructuración de creencias obsesivas (sobreestimación del peligro y perfeccionismo)",
      "Entrenamiento en flexibilidad mental y aceptación cognitiva",
      "Monitoreo conjunto con tratamiento psiquiátrico en casos moderados o graves"
    ],
    faqs: [
      {
        question: "¿Qué es el método de Exposición con Prevención de Respuesta (EPR)?",
        answer: "Es el tratamiento psicológico estándar de oro para el TOC. Consiste en exponer voluntariamente al consultante al pensamiento obsesivo (ej. tocar una superficie) y entrenarlo para que resista la realización de la compulsión (lavarse las manos), permitiendo que la ansiedad baje de forma natural."
      },
      {
        question: "¿Tener manías o ser ordenado significa que tengo TOC?",
        answer: "No. Muchas personas tienen hábitos estrictos de orden. El TOC se diagnostica solo cuando estas conductas son involuntarias, consumen mucho tiempo al día, causan una angustia significativa y limitan la vida laboral o personal de la persona."
      },
      {
        question: "¿Por qué los pensamientos intrusivos causan tanta culpa?",
        answer: "Porque suelen ser contrarios a los valores reales de la persona (pensamientos de daño, contaminación, tabúes). La persona cree falsamente que tener el pensamiento es tan malo como cometer la acción, lo cual incrementa la ansiedad y detona la compulsión."
      }
    ],
    sources: [
      "DSM-5 - Espectro del TOC y Trastornos Relacionados",
      "International OCD Foundation (IOCDF)",
      "Guías Clínicas del Instituto Nacional de Psiquiatría Ramón de la Fuente Muñiz"
    ],
    relatedServices: ["psicoterapia-adultos", "entrenamiento-regulacion-emocional"],
    relatedSymptoms: ["procrastinacion-extrema", "inestabilidad-emocional"],
    image: "/images/ocd.jpg",
    seo: {
      title: "Tratamiento de TOC en Tuxtla | Psic. Alberto Luna",
      description: "Supera el Trastorno Obsesivo Compulsivo y las obsesiones de simetría con terapia EPR en Tuxtla Gutiérrez. Recupera el control de tu tiempo.",
      keywords: ["Psicólogo TOC Tuxtla", "Terapia de exposición y prevención de respuesta", "Tratamiento de pensamientos intrusivos", "Beto Luna psicólogo"]
    }
  },
  {
    id: "tdah",
    slug: "tdah-en-adultos",
    name: "TDAH en Adultos",
    technicalName: "Trastorno por Déficit de Atención con Hiperactividad en la Adultez",
    description: "Aunque inicia en la infancia, muchísimos adultos llegan a terapia buscando respuestas a su desorganización crónica, dificultad para priorizar tareas, problemas severos de concentración, procrastinación extrema, olvidos recurrentes e impulsividad emocional. El diagnóstico y acompañamiento terapéutico en la adultez suele ser un alivio enorme que reestructura su vida laboral y su autoestima.",
    symptoms: [
      "Dificultad constante para iniciar tareas importantes (procrastinación crónica)",
      "Problemas para priorizar pendientes y desorganización en el espacio de trabajo",
      "Olvidos frecuentes de citas, llaves o compromisos diarios",
      "Dificultad marcada para mantener la atención en lecturas o pláticas largas",
      "Hiperactividad mental (la mente nunca se apaga) o inquietud física leve",
      "Impulsividad al hablar o tomar decisiones de compra"
    ],
    causes: [
      "Diferencias neurobiológicas en el lóbulo prefrontal y la captación de dopamina",
      "Fuerte componente genético y hereditario (alta probabilidad familiar)",
      "Alteración en las funciones ejecutivas del cerebro (planificación y memoria)"
    ],
    riskFactors: [
      "Haber presentado problemas de rendimiento escolar o conducta en la infancia",
      "Antecedentes familiares directos con diagnóstico de TDAH",
      "Ambientes laborales o académicos de alta demanda y nula estructuración"
    ],
    mexicoStats: "Se estima que cerca del 3% al 5% de los adultos en México presentan TDAH, y la gran mayoría desconoce su diagnóstico, atribuyendo sus problemas a 'falta de voluntad' o 'distracción'.",
    complications: [
      "Baja autoestima y autocrítica severa ('me siento inepto')",
      "Inestabilidad laboral o dificultad para consolidar proyectos profesionales",
      "Conflictos en la pareja debido a descuidos u olvidos recurrentes",
      "Desarrollo de ansiedad y depresión por sobreesfuerzo adaptativo"
    ],
    treatments: [
      "Psicoeducación para comprender el funcionamiento del cerebro con TDAH",
      "Entrenamiento en funciones ejecutivas (agendas, alarmas, técnicas de enfoque)",
      "Terapia cognitivo-conductual para manejar la procrastinación y la frustración",
      "Acompañamiento y derivación médica para evaluación farmacológica si es necesario"
    ],
    faqs: [
      {
        question: "¿El TDAH no es una enfermedad que solo le da a los niños?",
        answer: "No. El TDAH es una condición del neurodesarrollo. Aunque los síntomas de hiperactividad física suelen disminuir en la adultez, los problemas de desorganización, distracción, impulsividad y procrastinación persisten y afectan severamente la vida laboral y de pareja."
      },
      {
        question: "¿Cómo ayuda la terapia a un adulto con TDAH?",
        answer: "Le enseña a dejar de castigarse emocionalmente, a comprender cómo funciona su atención y a diseñar un sistema personalizado de organización externa (uso de agendas, fragmentación de tareas) que se adapte a su mente hiperactiva."
      },
      {
        question: "¿Qué es el Método 'Raíces y Alas' aplicado al TDAH?",
        answer: "Es nuestro protocolo vocacional y de metas. En adultos con TDAH, les ayuda a identificar sus talentos innatos y su Ikigai, estructurando un plan de acción profesional que respete su ritmo y evite la fatiga laboral crónica."
      }
    ],
    sources: [
      "DSM-5 - Trastornos del Neurodesarrollo",
      "CHADD - Children and Adults with ADHD (Adult Section)",
      "Estudios Clínicos de TDAH en la Adultez - INPRFM"
    ],
    relatedServices: ["perfiles-vocacionales-metodo-raices-y-alas", "psicoterapia-adultos"],
    relatedSymptoms: ["procrastinacion-extrema", "autoexigencia-destructiva"],
    image: "/images/adhd.jpg",
    seo: {
      title: "Tratamiento de TDAH en Adultos | Psic. Alberto Luna",
      description: "Diagnóstico y estrategias prácticas contra la procrastinación y desorganización por TDAH en Tuxtla Gutiérrez. Libera tu potencial.",
      keywords: ["TDAH adultos Tuxtla", "Psicólogo procrastinación Chiapas", "Entrenamiento funciones ejecutivas", "Beto Luna psicólogo"]
    }
  }
];
