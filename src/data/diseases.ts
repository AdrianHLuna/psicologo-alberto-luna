import { MedicalCondition } from "../types/schema";

export const diseases: MedicalCondition[] = [
  // ─── CATEGORY 1: Trastornos del Estado de Ánimo y Afectivos ────────
  {
    id: "depresion",
    slug: "depresion-mayor",
    name: "Depresión Mayor",
    technicalName: "Trastorno Depresivo Mayor",
    description: "Va mucho más allá de una tristeza pasajera. Las personas que transitan por esto experimentan un estado de ánimo deprimido de forma persistente, pérdida de interés o placer en las actividades cotidianas (anedonia), cambios drásticos en el sueño y el apetito, fatiga crónica y sentimientos profundos de inutilidad o culpa. En terapia, se trabaja para deconstruir pensamientos limitantes y reactivar conductualmente al consultante.",
    symptoms: [
      "Tristeza profunda o desesperanza la mayor parte del día",
      "Pérdida de interés en pasatiempos y actividades (anedonia)",
      "Insomnio o hipersomnia casi todos los días",
      "Fatiga extrema o falta de energía persistente",
      "Sentimientos de inutilidad, culpa excesiva o autorreproche",
      "Dificultad para concentrarse o tomar decisiones sencillas"
    ],
    causes: [
      "Desequilibrios en los neurotransmisores cerebrales",
      "Eventos estresantes acumulados o pérdidas significativas",
      "Patrones de pensamiento disfuncionales o autoexigencia destructiva"
    ],
    riskFactors: [
      "Antecedentes familiares de trastornos del estado de ánimo",
      "Experiencias de trauma o abuso en etapas de desarrollo",
      "Enfermedades crónicas o aislamiento social prolongado"
    ],
    mexicoStats: "La depresión es una de las primeras causas de discapacidad laboral a nivel de salud mental en México, afectando al 15% de la población en algún momento de su vida.",
    complications: [
      "Aislamiento social y deterioro de relaciones significativas",
      "Bajo rendimiento laboral o académico severo",
      "Descuido de la salud física y la alimentación",
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
      "Organización Mundial de la Salud (OMS)",
      "Asociación Psiquiátrica Mexicana"
    ],
    relatedServices: ["psicoterapia-adultos", "acompanamiento-crisis-existenciales"],
    relatedSymptoms: ["duelo-y-perdidas", "baja-autoestima-e-inseguridad"],
    image: "/transtornos/depresion_mayor.png",
    seo: {
      title: "Tratamiento de Depresión en Tuxtla | Psic. Alberto Luna",
      description: "Supera la depresión y la distimia con psicoterapia cognitivo-conductual en Tuxtla Gutiérrez. Espacio seguro y confidencial.",
      keywords: ["Psicólogo depresión Tuxtla", "Terapia para la depresión Chiapas", "Reestructuración cognitiva", "Beto Luna psicólogo"]
    }
  },
  {
    id: "distimia",
    slug: "distimia",
    name: "Distimia (Trastorno Depresivo Persistente)",
    technicalName: "Trastorno Depresivo Persistente",
    description: "Es una forma de depresión crónica pero de menor intensidad aparente. Quienes viven con distimia experimentan un estado de ánimo melancólico o desanimado la mayor parte del día, durante al menos dos años. Al ser tan prolongado, muchas personas lo normalizan diciendo 'es que yo siempre he sido así', por lo que la intervención psicológica es clave para devolver la calidad de vida.",
    symptoms: [
      "Estado de ánimo triste o melancólico la mayor parte del día",
      "Baja autoestima e inseguridad persistente",
      "Sentimientos de desesperanza crónicos",
      "Poco apetito o comer en exceso",
      "Falta de energía o fatiga constante",
      "Dificultad para concentrarse o tomar decisiones"
    ],
    causes: [
      "Factores biológicos y diferencias en la química cerebral",
      "Patrones de personalidad con tendencia a la rumiación",
      "Estrés ambiental crónico o situaciones de vida no resueltas"
    ],
    riskFactors: [
      "Tener un familiar de primer grado con trastorno depresivo",
      "Acontecimientos estresantes de vida prolongados",
      "Rasgos de personalidad con alta susceptibilidad al estrés"
    ],
    mexicoStats: "La distimia es uno de los trastornos del estado de ánimo más subdiagnosticados en México debido a su naturaleza silenciosa y de inicio lento.",
    complications: [
      "Deterioro crónico en las relaciones familiares y de pareja",
      "Pérdida de oportunidades de crecimiento laboral por baja autovaloración",
      "Desarrollo secundario de episodios de depresión mayor (depresión doble)",
      "Uso de sustancias como mecanismo de automedicación"
    ],
    treatments: [
      "Psicoterapia Cognitivo-Conductual de largo plazo enfocada en metas",
      "Terapia cognitivo-conductual para deconstruir creencias rígidas",
      "Ejercicios de autoafirmación y reconstrucción de la autoestima",
      "Coordinación médica si la cronicidad del cuadro lo requiere"
    ],
    faqs: [
      {
        question: "¿Cómo saber si tengo distimia o solo soy de personalidad melancólica?",
        answer: "La melancolía es un rasgo; la distimia es un trastorno que genera fatiga, problemas de sueño y una persistente falta de disfrute o proyección al futuro. Si el estado de desánimo dura más de 2 años, se requiere una valoración clínica."
      },
      {
        question: "¿Se puede curar la distimia por completo?",
        answer: "Sí, mediante un proceso terapéutico sostenido. El consultante aprende a desvincularse de la etiqueta de 'persona triste' y a desarrollar hábitos, límites y esquemas mentales más adaptativos y alegres."
      },
      {
        question: "¿Cuál es la diferencia entre distimia y depresión mayor?",
        answer: "La depresión mayor se presenta por episodios agudos y severos donde la persona puede quedar inhabilitada. La distimia es un estado de ánimo deprimido crónico pero menos paralizante en apariencia."
      }
    ],
    sources: [
      "DSM-5 - Trastornos Depresivos",
      "Asociación Americana de Psicología (APA)"
    ],
    relatedServices: ["psicoterapia-adultos", "acompanamiento-crisis-existenciales"],
    relatedSymptoms: ["inestabilidad-emocional", "baja-autoestima-e-inseguridad"],
    image: "/transtornos/distimia.png",
    seo: {
      title: "Tratamiento de Distimia en Tuxtla | Psic. Alberto Luna",
      description: "Supera la tristeza crónica y el desánimo constante con psicoterapia para la distimia en Tuxtla Gutiérrez. Recupera tu bienestar.",
      keywords: ["Tratamiento distimia Tuxtla", "Trastorno depresivo persistente", "Psicoterapia de apoyo", "Beto Luna psicólogo"]
    }
  },
  {
    id: "trastorno-bipolar",
    slug: "trastorno-bipolar",
    name: "Trastorno Bipolar",
    technicalName: "Trastorno Bipolar I y II",
    description: "Se caracteriza por fluctuaciones extremas en el estado de ánimo, la energía y los niveles de actividad. Las personas que transitan por esto pasan por episodios de manía o hipomanía (fases de euforia, grandiosidad, hiperactividad y poca necesidad de dormir) y episodios de depresión severa. El acompañamiento psicoterapéutico ayuda a identificar disparadores y mantener la estabilidad en conjunto con el tratamiento psiquiátrico.",
    symptoms: [
      "Episodios maníacos con energía desbordada y euforia exagerada",
      "Disminución drástica de la necesidad de dormir sin sentir cansancio",
      "Episodios depresivos con desesperanza profunda y fatiga extrema",
      "Pensamientos acelerados y verborrea (hablar muy rápido)",
      "Impulsividad y conductas de riesgo durante las fases de manía",
      "Cambios drásticos en los niveles de productividad y socialización"
    ],
    causes: [
      "Fuerte predisposición genética y heredabilidad biológica",
      "Diferencias neuroanatómicas en los sistemas de regulación emocional",
      "Alteraciones en los ritmos circadianos y del reloj biológico interno"
    ],
    riskFactors: [
      "Tener familiares cercanos con diagnóstico de trastorno bipolar",
      "Periodos de estrés extremo o eventos traumáticos intensos",
      "Abuso de sustancias estimulantes que desestabilicen el sistema nervioso"
    ],
    mexicoStats: "En México, el trastorno bipolar afecta a cerca del 1 al 2% de la población, requiriendo típicamente de 4 a 6 años de promedio para un diagnóstico correcto.",
    complications: [
      "Problemas económicos graves debido a compras impulsivas en fases maníacas",
      "Ruptura de relaciones interpersonales y familiares debido a la inestabilidad",
      "Dificultad para mantener una trayectoria laboral o profesional estable",
      "Riesgo elevado de autolesiones durante los episodios depresivos profundos"
    ],
    treatments: [
      "Psicoterapia enfocada en la psicoeducación del trastorno y detección de crisis",
      "Entrenamiento en regulación de hábitos, horarios de sueño y rutinas diarias",
      "Terapia cognitivo-conductual para modular pensamientos de grandiosidad y desesperanza",
      "Coordinación estrecha y obligatoria con psiquiatría para farmacoterapia"
    ],
    faqs: [
      {
        question: "¿El trastorno bipolar se cura?",
        answer: "No tiene una cura definitiva, pero es altamente controlable. Con un tratamiento interdisciplinario (psicoterapia + psiquiatría), la gran mayoría de las personas logran una estabilidad completa y una excelente calidad de vida."
      },
      {
        question: "¿Cuál es la diferencia entre bipolaridad y cambios normales de humor?",
        answer: "Los cambios normales de humor duran horas y no afectan gravemente tu vida. Los episodios del trastorno bipolar duran semanas o meses, son de intensidad clínica extrema y alteran tu juicio, sueño y funcionalidad."
      },
      {
        question: "¿Por qué es tan importante la psicoterapia si ya tomo medicamentos?",
        answer: "La psicoterapia te dota de herramientas para identificar las primeras señales de alerta de un episodio maníaco o depresivo, manejar el estrés que desestabiliza tus ritmos y te ayuda a adaptarte social y laboralmente."
      }
    ],
    sources: [
      "DSM-5 - Trastorno Bipolar",
      "National Alliance on Mental Illness (NAMI)"
    ],
    relatedServices: ["psicoterapia-adultos", "entrenamiento-regulacion-emocional"],
    relatedSymptoms: ["inestabilidad-emocional", "insomnio-y-ansiedad"],
    image: "/transtornos/bipolar.png",
    seo: {
      title: "Acompañamiento en Trastorno Bipolar | Psic. Alberto Luna",
      description: "Acompañamiento psicoterapéutico especializado en el Trastorno Bipolar en Tuxtla. Identifica disparadores y recupera tu estabilidad emocional.",
      keywords: ["Trastorno bipolar Tuxtla", "Psicoterapia trastorno bipolar Chiapas", "Regulación del humor", "Beto Luna psicólogo"]
    }
  },

  // ─── CATEGORY 2: Trastornos de Ansiedad ───────────────────────────
  {
    id: "ansiedad",
    slug: "ansiedad-generalizada",
    name: "Ansiedad Generalizada",
    technicalName: "Trastorno de Ansiedad Generalizada (TAG)",
    description: "Implica una preocupación excesiva, persistente y difícil de controlar sobre diversas situaciones cotidianas (trabajo, salud, familia), incluso cuando no hay un peligro real o inminente. Las personas que transitan por esto se acompañan de síntomas físicos como tensión muscular, irritabilidad, problemas de sueño y una constante sensación de estar 'al límite'. La intervención psicológica dota al consultante de herramientas para regular su sistema nervioso.",
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
    image: "/transtornos/ansiedad_generalizada.png",
    seo: {
      title: "Tratamiento de Ansiedad en Tuxtla | Psic. Alberto Luna",
      description: "Aprende a regular la ansiedad generalizada y los ataques de pánico con psicoterapia en Tuxtla Gutiérrez. Técnicas de desactivación física.",
      keywords: ["Psicólogo ansiedad Tuxtla", "Ataques de pánico terapia Chiapas", "Manejo del estrés", "Terapia cognitivo conductual"]
    }
  },
  {
    id: "panico",
    slug: "trastorno-de-panico",
    name: "Trastorno de Pánico (Ataques de Pánico)",
    technicalName: "Trastorno de Pánico",
    description: "Se manifiesta a través de crisis de angustia inesperadas y reincidentes. Quienes experimentan esto viven oleadas repentinas de miedo intenso que alcanzan su punto máximo en minutos, acompañadas de taquicardia, dificultad para respirar, mareos y un miedo paralizante a morir o perder el control. La terapia ayuda a perder el miedo a los síntomas físicos y a regular el sistema nervioso.",
    symptoms: [
      "Palpitaciones aceleradas o taquicardia repentina",
      "Sensación de ahogo, asfixia o dificultad para respirar",
      "Temblores, sudoración fría y escalofríos",
      "Opresión o dolor en el pecho que simula un problema cardíaco",
      "Mareos, inestabilidad o sensación de desmayo inminente",
      "Miedo intenso a morir, volverse loco o perder el control"
    ],
    causes: [
      "Hipersensibilidad biológica a las variaciones del dióxido de carbono y respiración",
      "Condicionamiento clásico del cuerpo: asociar una taquicardia menor con peligro de muerte",
      "Altos niveles de estrés acumulados que desbordan el umbral de alarma"
    ],
    riskFactors: [
      "Haber vivido un evento estresante agudo o traumático previo",
      "Consumo excesivo de estimulantes como cafeína o tabaco",
      "Rasgos de personalidad con tendencia a la hipervigilancia corporal"
    ],
    mexicoStats: "Los ataques de pánico representan uno de los motivos de urgencias médicas más comunes que terminan siendo canalizados a psicoterapia en los hospitales de México.",
    complications: [
      "Desarrollo de agorafobia: miedo a salir de casa o estar en lugares donde sea difícil escapar",
      "Ansiedad anticipatoria constante ('miedo al miedo' o miedo a volver a tener un ataque)",
      "Abuso de sedantes o sustancias para evitar la ansiedad física",
      "Deterioro de la libertad de movimiento y autonomía del paciente"
    ],
    treatments: [
      "Psicoterapia Cognitivo-Conductual enfocada en la Terapia de Exposición Interoceptiva",
      "Ejercicios prácticos para provocar y tolerar voluntariamente sensaciones corporales",
      "Técnicas de reentrenamiento respiratorio (respiración diafragmática)",
      "Deconstrucción de pensamientos catastróficos asociados a los ataques de pánico"
    ],
    faqs: [
      {
        question: "¿Me puedo morir o volver loco durante un ataque de pánico?",
        answer: "No. Aunque la sensación física es aterradora, el ataque de pánico es una activación de emergencia natural del cuerpo (adrenalina) que no causa daño físico, infartos ni locura, y remite por sí solo en unos minutos."
      },
      {
        question: "¿Qué debo hacer cuando empieza un ataque de pánico?",
        answer: "En lugar de luchar contra él o hiperventilar, intenta sentarte, respirar de forma lenta y pausada con el abdomen, y recordarte a ti mismo de forma compasiva que es un estado temporal que pasará pronto."
      },
      {
        question: "¿Cómo ayuda la exposición en la terapia para el pánico?",
        answer: "Te enseña a exponerte en un ambiente seguro a las sensaciones que te asustan (como acelerar tu ritmo cardíaco haciendo ejercicio leve) para que tu cerebro aprenda que no son peligrosas."
      }
    ],
    sources: [
      "DSM-5 - Trastorno de Pánico",
      "National Institute of Mental Health (NIMH)"
    ],
    relatedServices: ["psicoterapia-adultos", "entrenamiento-regulacion-emocional"],
    relatedSymptoms: ["insomnio-y-ansiedad", "inestabilidad-emocional"],
    image: "/transtornos/transtornos_panico.png",
    seo: {
      title: "Tratamiento de Ataques de Pánico en Tuxtla | Psic. Alberto Luna",
      description: "Supera el miedo al miedo y controla los ataques de pánico mediante terapia cognitivo-conductual en Tuxtla Gutiérrez. Técnicas de regulación física.",
      keywords: ["Ataques de pánico Tuxtla", "Crisis de ansiedad terapia Chiapas", "Exposición interoceptiva", "Beto Luna psicólogo"]
    }
  },
  {
    id: "fobia-social",
    slug: "fobia-social",
    name: "Fobia Social (Trastorno de Ansiedad Social)",
    technicalName: "Trastorno de Ansiedad Social",
    description: "Es un miedo intenso y persistente a ser juzgado, criticado o humillado por otros en situaciones sociales o al tener que hablar en público. Quienes transitan por este trastorno experimentan una evitación activa de interacciones que puede aislar significativamente a la persona en su vida laboral y personal, y va mucho más allá de la timidez común.",
    symptoms: [
      "Temor severo a hablar, comer o realizar actividades frente a otros",
      "Ansiedad anticipatoria intensa días o semanas antes de un evento social",
      "Síntomas físicos como sonrojarse, sudar frío, temblar o quedarse en blanco",
      "Evitación sistemática de reuniones, juntas de trabajo o eventos sociales",
      "Autoevaluación hipercrítica y rumiación después de interactuar",
      "Sensación extrema de incomodidad y de ser el centro de críticas negativas"
    ],
    causes: [
      "Experiencias de humillación, acoso o bullying en la infancia o adolescencia",
      "Modelos de comportamiento familiar de excesiva timidez o miedo al entorno",
      "Sesgo de atención: enfocar la mente únicamente en las señales de desaprobación ajenas"
    ],
    riskFactors: [
      "Antecedentes de experiencias sociales negativas o traumáticas",
      "Temperamento inhibido o temeroso desde la niñez",
      "Nuevas demandas sociales o laborales que requieran exposición pública"
    ],
    mexicoStats: "La fobia social se inicia comúnmente en la adolescencia media y afecta el rendimiento universitario y la empleabilidad de miles de jóvenes mexicanos en la actualidad.",
    complications: [
      "Aislamiento social extremo y dificultad severa para entablar amistades o pareja",
      "Subempleo o deserción académica debido a la evitación de exposiciones",
      "Baja autoestima cronificada y sentimientos de inferioridad",
      "Mayor vulnerabilidad a desarrollar trastornos depresivos de forma secundaria"
    ],
    treatments: [
      "Terapia Cognitivo-Conductual enfocada en el Cuestionamiento de Pensamientos Negativos",
      "Entrenamiento en Habilidades Sociales y asertividad práctica",
      "Terapia de Exposición Gradual a situaciones sociales temidas",
      "Mindfulness aplicado para disminuir la autoconciencia excesiva"
    ],
    faqs: [
      {
        question: "¿Cuál es la diferencia entre timidez y fobia social?",
        answer: "La timidez es un rasgo de personalidad que te hace ser reservado pero no te detiene. La fobia social es un trastorno clínico que te genera un sufrimiento intenso y te obliga a evitar situaciones cotidianas, limitando tu desarrollo laboral o académico."
      },
      {
        question: "¿Cómo ayuda la exposición en la fobia social?",
        answer: "En terapia diseñamos una 'jerarquía' de situaciones incómodas de menor a mayor dificultad (ej. saludar a un desconocido, luego preguntar una dirección, etc.) y nos exponemos gradualmente para reprogramar la respuesta de miedo."
      },
      {
        question: "¿Se puede superar el miedo a hablar en público?",
        answer: "Sí, es completamente viable. A través de técnicas de regulación de la ansiedad y la práctica estructurada de habilidades de oratoria y asertividad, el hablar en público se vuelve una habilidad manejable."
      }
    ],
    sources: [
      "DSM-5 - Trastorno de Ansiedad Social",
      "Social Anxiety Association"
    ],
    relatedServices: ["psicoterapia-adultos", "talleres-psicoeducativos"],
    relatedSymptoms: ["autoexigencia-destructiva", "baja-autoestima-e-inseguridad"],
    image: "/transtornos/fobia_social.png",
    seo: {
      title: "Tratamiento de Fobia Social en Tuxtla | Psic. Alberto Luna",
      description: "Supera el miedo al rechazo, al juicio y a hablar en público mediante psicoterapia cognitiva en Tuxtla Gutiérrez. Recupera tu confianza social.",
      keywords: ["Fobia social Tuxtla", "Ansiedad social tratamiento Chiapas", "Habilidades sociales psicólogo", "Beto Luna"]
    }
  },
  {
    id: "ansiedad-separacion",
    slug: "ansiedad-por-separacion",
    name: "Ansiedad por Separación",
    technicalName: "Trastorno de Ansiedad por Separación en Adultos",
    description: "Es un miedo o ansiedad excesiva ante la idea de alejarse de las figuras de apego principales (pareja, padres, hijos). Aunque comúnmente se asocia con los niños, las personas adultas que transitan por este trastorno experimentan una preocupación constante de que algo malo les pase a sus seres queridos y una resistencia marcada a estar solas o lejos de ellas.",
    symptoms: [
      "Preocupación persistente e irracional de perder a las figuras de apego",
      "Miedo obsesivo a que ocurra un accidente o desgracia a los seres queridos",
      "Resistencia o negativa a salir o trabajar lejos del hogar por temor a la separación",
      "Necesidad constante de mantener contacto o verificar la ubicación del ser querido",
      "Pesadillas recurrentes sobre el tema de la separación o pérdidas",
      "Malestar físico (dolores de cabeza, náuseas) ante la idea del distanciamiento"
    ],
    causes: [
      "Historial de pérdidas o muertes repentinas de seres queridos en el pasado",
      "Estilos de apego ansioso o dependiente desarrollados en el núcleo familiar",
      "Cambios estresantes severos en el entorno afectivo inmediato"
    ],
    riskFactors: [
      "Haber vivido el divorcio conflictivo de los padres o abandono en la niñez",
      "Personalidad con alta dependencia emocional y baja tolerancia a la soledad",
      "Pérdidas afectivas recientes o transiciones familiares bruscas"
    ],
    mexicoStats: "En la consulta psicológica en México, se observa frecuentemente en adultos jóvenes en relaciones de pareja simbióticas o dependientes, afectando su autonomía personal.",
    complications: [
      "Desarrollo de celotipia o conductas de control excesivo sobre la pareja",
      "Aislamiento laboral por no aceptar ofertas de trabajo fuera de la localidad",
      "Altos niveles de estrés familiar debido al agobio del ser querido",
      "Vulnerabilidad a tolerar abusos o relaciones poco saludables por miedo a la soledad"
    ],
    treatments: [
      "Psicoterapia enfocada en el fortalecimiento de la autonomía y el autoconcepto",
      "Reestructuración cognitiva de los miedos catastróficos asociados a la pérdida",
      "Terapia de apego y límites saludables en las relaciones afectivas",
      "Ejercicios de exposición gradual al distanciamiento y la soledad programada"
    ],
    faqs: [
      {
        question: "¿Es normal sentir miedo a que algo malo le pase a mi familia?",
        answer: "Es normal preocuparse por la seguridad de tus seres queridos. Se vuelve un trastorno por separación cuando la ansiedad es desproporcionada, consume horas de tu día, te impide salir a trabajar o te causa síntomas físicos severos."
      },
      {
        question: "¿Cómo ayuda la terapia a mejorar mi independencia?",
        answer: "Te ayuda a identificar tus patrones de apego, a gestionar los pensamientos catastróficos que detonan tus llamadas constantes y a construir una vida autónoma con pasatiempos y metas personales."
      },
      {
        question: "¿Este trastorno afecta mis relaciones de pareja?",
        answer: "Sí, suele generar dinámicas asfixiantes o de excesiva demanda de atención que cansan a la pareja. Trabajar la ansiedad por separación es la mejor manera de cimentar un amor libre y saludable."
      }
    ],
    sources: [
      "DSM-5 - Trastorno de Ansiedad por Separación",
      "Attachment Theory Research Center"
    ],
    relatedServices: ["psicoterapia-adultos", "acompanamiento-crisis-existenciales"],
    relatedSymptoms: ["inestabilidad-emocional", "baja-autoestima-e-inseguridad"],
    image: "/transtornos/ansiedad_separacion.png",
    seo: {
      title: "Ansiedad por Separación en Adultos | Psic. Alberto Luna",
      description: "Supera la dependencia emocional y el miedo obsesivo a perder a tus seres queridos con psicoterapia especializada en Tuxtla Gutiérrez.",
      keywords: ["Ansiedad por separación adultos", "Dependencia emocional terapia Tuxtla", "Límites saludables pareja", "Beto Luna psicólogo"]
    }
  },

  // ─── CATEGORY 3: Trastornos Asociados al Estrés y Trauma ──────────
  {
    id: "estres",
    slug: "estres-postraumatico",
    name: "Estrés Postraumático (TEPT)",
    technicalName: "Trastorno de Estrés Postraumático",
    description: "Se desarrolla después de haber vivido o presenciado un evento altamente amenazante, doloroso o traumático (accidentes graves, violencia, pérdidas repentinas, asaltos). Las personas que transitan por esto reviven el suceso a través de recuerdos intrusivos involuntarios (flashbacks), pesadillas y un estado de alerta constante (hipervigilancia), lo que los lleva a evitar activamente cualquier estímulo, lugar o conversación asociado al trauma.",
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
    image: "/transtornos/estres_postraumatico.png",
    seo: {
      title: "Terapia de Estrés Postraumático | Psic. Alberto Luna",
      description: "Supera el trauma, las pesadillas y la hipervigilancia mediante psicoterapia enfocada en Tuxtla Gutiérrez. Recupera tu paz.",
      keywords: ["Terapia de trauma Tuxtla", "Psicólogo estrés postraumático Chiapas", "Superar un asalto o pérdida", "Procesamiento cognitivo trauma"]
    }
  },
  {
    id: "adaptacion",
    slug: "trastorno-de-adaptacion",
    name: "Trastorno de Adaptación",
    technicalName: "Trastornos de Adaptación",
    description: "Ocurre cuando una persona experimenta una respuesta emocional o conductual desproporcionada ante un cambio, pérdida o estresor vital identificable (un divorcio, un despido, una mudanza, contraer una enfermedad o una crisis de transición de vida). A diferencia de otros cuadros crónicos, los síntomas suelen remitir una vez que el consultante desarrolla herramientas de afrontamiento en terapia para adaptarse a su nueva realidad.",
    symptoms: [
      "Tristeza, ganas de llorar con frecuencia o desesperanza",
      "Preocupación y ansiedad constantes por la situación de cambio",
      "Dificultades para dormir y falta de apetito",
      "Sentimiento de incapacidad para lidiar con el nuevo escenario de vida",
      "Aislamiento social temporal de amigos y familiares",
      "Deterioro en el desempeño laboral o escolar debido al agobio"
    ],
    causes: [
      "Presencia de un estresor identificable que altera la rutina de vida",
      "Falta de estrategias adaptativas o recursos emocionales para el cambio",
      "Significado catastrófico asignado a la nueva situación de vida"
    ],
    riskFactors: [
      "Acumulación de múltiples cambios o estresores al mismo tiempo",
      "Falta de una red de apoyo social o familiar sólida",
      "Experiencias previas de mala adaptación ante crisis anteriores"
    ],
    mexicoStats: "Es uno de los diagnósticos más frecuentes en la psicoterapia de consulta privada en México, especialmente en adultos que inician la vida independiente o cambian de empleo.",
    complications: [
      "Evolución hacia un cuadro de trastorno depresivo mayor si no se trata a tiempo",
      "Desarrollo de ansiedad cronificada ante futuros cambios de vida",
      "Dificultades en la toma de decisiones que complican más la situación de cambio",
      "Uso de la evitación o la procrastinación para no hacer frente al problema"
    ],
    treatments: [
      "Psicoterapia Cognitivo-Conductual enfocada en la resolución de problemas",
      "Técnicas cognitivas para flexibilizar esquemas de rigidez ante el cambio",
      "Acompañamiento y soporte emocional para validar el proceso de transición",
      "Diseño de un plan de acción concreto paso a paso para el nuevo escenario"
    ],
    faqs: [
      {
        question: "¿Cuánto tiempo duran los síntomas del trastorno de adaptación?",
        answer: "Los síntomas comienzan en los 3 meses posteriores a la aparición del estresor y, por lo general, no duran más de 6 meses una vez que el estresor ha cesado o el consultante ha aprendido a adaptarse en terapia."
      },
      {
        question: "¿Cuál es la diferencia con una depresión común?",
        answer: "El trastorno de adaptación está directamente vinculado a un cambio o estresor de vida identificable. Los síntomas son una respuesta a ese evento y disminuyen significativamente al asimilar el cambio."
      },
      {
        question: "¿Cómo me ayuda la psicoterapia en este proceso?",
        answer: "Te dota de herramientas de resolución de problemas, te ayuda a deconstruir la resistencia al cambio, a manejar la ansiedad de la incertidumbre y a diseñar hábitos que te ayuden a asimilar tu nueva realidad."
      }
    ],
    sources: [
      "DSM-5 - Trastornos Relacionados con Traumas y Factores de Estrés",
      "Cleveland Clinic - Adjustment Disorders"
    ],
    relatedServices: ["psicoterapia-adultos", "acompanamiento-crisis-existenciales"],
    relatedSymptoms: ["crisis-cuarto-vida", "duelo-y-perdidas"],
    image: "/transtornos/trastorno_adaptacion.png",
    seo: {
      title: "Terapia para Trastornos de Adaptación | Beto Luna",
      description: "Supera el agobio por cambios drásticos de vida (divorcio, mudanza, despido) mediante terapia en Tuxtla Gutiérrez. Aprende a adaptarte.",
      keywords: ["Trastorno de adaptación Tuxtla", "Terapia para el cambio de vida Chiapas", "Afrontamiento de crisis", "Psicólogo Alberto Luna"]
    }
  },

  // ─── CATEGORY 4: Trastornos del Comportamiento y Personalidad ──────
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
    image: "/transtornos/obsesivo_compulsivo.png",
    seo: {
      title: "Tratamiento de TOC en Tuxtla | Psic. Alberto Luna",
      description: "Supera el Trastorno Obsesivo Compulsivo y las obsesiones de simetría con terapia EPR en Tuxtla Gutiérrez. Recupera el control de tu tiempo.",
      keywords: ["Psicólogo TOC Tuxtla", "Terapia de exposición y prevención de respuesta", "Tratamiento de pensamientos intrusivos", "Beto Luna psicólogo"]
    }
  },
  {
    id: "tlp",
    slug: "trastorno-personalidad-limite",
    name: "Trastorno de la Personalidad Límite (TLP)",
    technicalName: "Trastorno de la Personalidad Límite",
    description: "Se caracteriza por un patrón generalizado de inestabilidad en las relaciones interpersonales, la autoimagen y los afectos, además de una marcada impulsividad. Las personas que transitan por esto suelen experimentar un miedo crónico al abandono, sentimientos de vacío existencial y dificultades para regular la ira, encontrando en el espacio terapéutico un contenedor seguro para aprender a validar y gestionar sus emociones.",
    symptoms: [
      "Esfuerzos frenéticos para evitar un abandono real o imaginado",
      "Patrón de relaciones interpersonales inestables e intensas (pasar del amor al odio)",
      "Alteración de la identidad con autoimagen marcadamente inestable",
      "Impulsividad dañina en áreas como gastos, alimentación o conducción",
      "Intentos o amenazas de autolesión o conductas autodestructivas",
      "Inestabilidad afectiva debida a una notable reactividad del estado de ánimo"
    ],
    causes: [
      "Hiperactividad del sistema límbico combinada con baja regulación prefrontal",
      "Ambientes de crianza invalidantes donde se minimizan o castigan las emociones",
      "Antecedentes de trauma, negligencia o abuso en etapas de desarrollo"
    ],
    riskFactors: [
      "Predisposición genética a la impulsividad y labilidad emocional",
      "Ambientes familiares inestables o de alta conflictividad en la infancia",
      "Pérdidas afectivas severas en la niñez temprana"
    ],
    mexicoStats: "El TLP representa uno de los diagnósticos de personalidad más atendidos en la consulta clínica de salud mental privada en México, requiriendo un abordaje estructurado y centrado en la validación.",
    complications: [
      "Rupturas continuas de relaciones de amistad, de pareja y familiares",
      "Dificultad severa para consolidar proyectos profesionales o de trabajo",
      "Riesgo de incurrir en adicciones como mecanismo de escape al dolor",
      "Episodios de crisis que requieran atención en urgencias médicas"
    ],
    treatments: [
      "Psicoterapia Cognitivo-Conductual y principios de Terapia Dialéctico Conductual (DBT)",
      "Entrenamiento en habilidades de tolerancia al malestar y efectividad interpersonal",
      "Técnicas de regulación emocional y de desactivación simpática ante picos de ira",
      "Canalización y supervisión médica constante para el control de la impulsividad"
    ],
    faqs: [
      {
        question: "¿El TLP se puede tratar con psicoterapia?",
        answer: "Sí, es el tratamiento principal y más efectivo. La terapia enseña al consultante a regular sus emociones intensas, a tolerar el malestar sin recurrir al autosabotaje y a establecer relaciones estables."
      },
      {
        question: "¿Qué es un 'ambiente invalidante' y cómo influye?",
        answer: "Es un entorno donde al crecer se le dice al niño que lo que siente es exagerado, tonto o mentira. Esto impide que la persona aprenda a confiar en sus emociones y a regularlas por sí misma de adulto."
      },
      {
        question: "¿Cómo ayuda la terapia Dialéctica Conductual (DBT)?",
        answer: "Es el modelo estándar que ayuda a balancear la aceptación de las emociones dolorosas con el cambio de conductas impulsivas, brindando herramientas prácticas de mindfulness y asertividad."
      }
    ],
    sources: [
      "DSM-5 - Trastornos de la Personalidad",
      "National Education Alliance for Borderline Personality Disorder"
    ],
    relatedServices: ["psicoterapia-adultos", "entrenamiento-regulacion-emocional"],
    relatedSymptoms: ["inestabilidad-emocional", "baja-autoestima-e-inseguridad"],
    image: "/transtornos/personalidad_limite.png",
    seo: {
      title: "Terapia para Trastorno Límite (TLP) en Tuxtla | Beto Luna",
      description: "Espacio psicoterapéutico seguro para la regulación emocional y el tratamiento del TLP en Tuxtla Gutiérrez. Aprende a manejar la impulsividad.",
      keywords: ["Terapia TLP Tuxtla", "Trastorno de personalidad límite Chiapas", "Terapia Dialéctica Conductual", "Psicólogo Alberto Luna"]
    }
  },
  {
    id: "personalidad-evitativa",
    slug: "trastorno-personalidad-evitativa",
    name: "Trastorno de la Personalidad Ansiosa o Evitativa",
    technicalName: "Trastorno de la Personalidad Evitativa",
    description: "Las personas con este perfil se perciben a sí mismas como socialmente ineptas, poco atractivas o inferiores. Tienen un deseo intrínseco de cercanía y conexión con los demás, pero su pavor absoluto al rechazo, a la desaprobación o al ridículo hace que eviten por completo las actividades o trabajos que impliquen contacto interpersonal significativo, limitando su desarrollo social.",
    symptoms: [
      "Evitación de actividades laborales que impliquen contacto interpersonal por miedo a la crítica",
      "Renuencia a implicarse con la gente si no están seguros de que les agradarán",
      "Preocupación constante por la posibilidad de ser criticados o rechazados",
      "Inhibición en nuevas situaciones interpersonales debido al sentimiento de inferioridad",
      "Autopercepción como socialmente ineptos, personalmente poco atractivos o inferiores",
      "Renuencia a asumir riesgos personales por temor a sonrojarse o quedar en ridículo"
    ],
    causes: [
      "Rechazo parental o críticas severas constantes durante la niñez temprana",
      "Temperamento hipersensible innato a la estimulación social y al castigo",
      "Creencias nucleares disfuncionales sobre la propia valía ('soy defectuoso y me rechazarán')"
    ],
    riskFactors: [
      "Experiencias infantiles de humillación o marginación social",
      "Padres con perfiles altamente evitativos o de ansiedad social",
      "Rasgos de introversión extrema en la infancia no acompañados de guía asertiva"
    ],
    mexicoStats: "Este trastorno de personalidad suele ser confundido en México con 'timidez extrema', retrasando la consulta hasta que se generan crisis de ansiedad o depresión por aislamiento.",
    complications: [
      "Aislamiento social casi total, limitando las oportunidades de tener pareja o amigos",
      "Subempleo grave debido a evitar puestos de liderazgo o trabajo en equipo",
      "Desarrollo crónico de trastornos de ansiedad y depresión mayor",
      "Falta de una red de apoyo social en momentos de crisis o transiciones"
    ],
    treatments: [
      "Psicoterapia cognitiva para reestructurar las creencias de inferioridad y rechazo",
      "Exposición gradual in-vivo e imaginada a interacciones sociales comunes",
      "Entrenamiento en habilidades de conversación y asertividad social",
      "Ejercicios de autoafirmación y reconstrucción de la autoestima corporal y personal"
    ],
    faqs: [
      {
        question: "¿Cuál es la diferencia con la fobia social común?",
        answer: "La fobia social se centra en la ansiedad ante situaciones públicas de desempeño. El trastorno evitativo es un patrón de personalidad más profundo y global que afecta toda la autopercepción e identidad del consultante."
      },
      {
        question: "¿Cómo ayuda la terapia a cambiar la creencia de ser inferior?",
        answer: "Te ayuda a identificar la voz autocrítica, evaluar con base en evidencias reales si eres 'inepto' y exponerte gradualmente a interacciones para comprobar que el rechazo no es inevitable ni catastrófico."
      },
      {
        question: "¿Se puede llegar a tener una vida social normal con este trastorno?",
        answer: "Sí, es completamente posible. El proceso terapéutico reduce el miedo a niveles manejables y enseña habilidades para entablar y mantener vínculos significativos con seguridad."
      }
    ],
    sources: [
      "DSM-5 - Trastornos de la Personalidad Grupo C",
      "International Society for the Study of Personality Disorders"
    ],
    relatedServices: ["psicoterapia-adultos", "talleres-psicoeducativos"],
    relatedSymptoms: ["baja-autoestima-e-inseguridad", "autoexigencia-destructiva"],
    image: "/transtornos/personalidad_ansiosa_evitativa.png",
    seo: {
      title: "Terapia para Personalidad Evitativa | Psic. Alberto Luna",
      description: "Supera el miedo crónico al rechazo, al ridículo y a la desaprobación social. Psicoterapia adaptada en Tuxtla Gutiérrez.",
      keywords: ["Trastorno de personalidad evitativa Tuxtla", "Miedo al rechazo terapia Chiapas", "Aislamiento social psicólogo", "Beto Luna"]
    }
  },

  // ─── CATEGORY 5: Trastornos del Desarrollo y Conducta Alimentaria ──
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
    image: "/transtornos/tdah_adultos.png",
    seo: {
      title: "Tratamiento de TDAH en Adultos | Psic. Alberto Luna",
      description: "Diagnóstico y estrategias prácticas contra la procrastinación y desorganización por TDAH en Tuxtla Gutiérrez. Libera tu potencial.",
      keywords: ["TDAH adultos Tuxtla", "Psicólogo procrastinación Chiapas", "Entrenamiento funciones ejecutivas", "Beto Luna psicólogo"]
    }
  },
  {
    id: "atracon",
    slug: "trastorno-por-atracon",
    name: "Trastorno por Atracón",
    technicalName: "Trastorno por Atracón (TCA)",
    description: "Es uno de los trastornos de la conducta alimentaria (TCA) más atendidos en la consulta general. A diferencia de la anorexia o la bulimia clásicas, las personas que transitan por este trastorno ingieren cantidades de comida significativamente superiores a lo normal en poco tiempo, acompañadas de una dolorosa sensación de pérdida de control, culpa y malestar emocional, utilizando la comida como un mecanismo fallido de regulación afectiva.",
    symptoms: [
      "Episodios recurrentes de atracones de comida en un periodo corto",
      "Sensación de pérdida de control sobre la ingesta durante el episodio",
      "Comer mucho más rápido de lo normal o hasta sentirse incómodamente lleno",
      "Comer grandes cantidades sin sentir hambre física real",
      "Comer a solas debido a la vergüenza o culpa por la cantidad ingerida",
      "Ausencia de conductas compensatorias regulares (no hay purgas o vómitos)"
    ],
    causes: [
      "Historial de restricciones o dietas extremas que detonan el bucle de atracón",
      "Uso de la comida para calmar emociones incómodas (aburrimiento, tristeza, ansiedad)",
      "Insatisfacción corporal severa e interiorización de estándares de belleza irreales"
    ],
    riskFactors: [
      "Baja autoestima y problemas previos de distorsión de la imagen corporal",
      "Dinámicas familiares centradas en el control estricto del peso y las calorías",
      "Dificultades en la regulación emocional y en el control de impulsos"
    ],
    mexicoStats: "El trastorno por atracón es la manifestación alimentaria de origen psicológico más recurrente en México, presentándose en adultos y adolescentes de todos los géneros.",
    complications: [
      "Desarrollo de problemas de salud asociados como diabetes, hipertensión o fatiga",
      "Altos sentimientos de culpa, depresión y aislamiento social por vergüenza",
      "Trastornos del sueño y dolores físicos gastrointestinales crónicos",
      "Deterioro de la relación con el cuerpo y cronificación de conductas de restricción"
    ],
    treatments: [
      "Psicoterapia cognitiva para romper el ciclo restricción-atracón",
      "Entrenamiento en alimentación consciente (Mindful Eating) y autorregulación afectiva",
      "Deconstrucción de pensamientos distorsionados sobre el cuerpo y la valía personal",
      "Monitoreo conjunto con especialistas en nutrición clínica y medicina general"
    ],
    faqs: [
      {
        question: "¿El trastorno por atracón es solo falta de fuerza de voluntad?",
        answer: "No. El atracón es un problema clínico de salud mental relacionado con la desregulación de las emociones y la impulsividad. Culpar a la 'fuerza de voluntad' solo incrementa la culpa y prolonga el ciclo del atracón."
      },
      {
        question: "¿Cómo ayuda la terapia a dejar de comer por ansiedad?",
        answer: "Te enseña a identificar tus detonantes emocionales, a diferenciar el hambre física del hambre emocional, y a desarrollar otras herramientas saludables para lidiar con el estrés sin recurrir a la comida."
      },
      {
        question: "¿Por qué las dietas estrictas empeoran los atracones?",
        answer: "Porque la restricción física y mental genera una privación que el cerebro interpreta como peligro. Esto incrementa la urgencia de comer, derivando inevitablemente en un episodio de atracón."
      }
    ],
    sources: [
      "DSM-5 - Trastornos de la Conducta Alimentaria",
      "National Eating Disorders Association (NEDA)"
    ],
    relatedServices: ["psicoterapia-adultos", "entrenamiento-regulacion-emocional"],
    relatedSymptoms: ["inestabilidad-emocional", "baja-autoestima-e-inseguridad"],
    image: "/transtornos/atracon.png",
    seo: {
      title: "Tratamiento de Trastorno por Atracón en Tuxtla | Psic. Alberto Luna",
      description: "Supera el comer por ansiedad, la culpa y el atracón crónico mediante terapia cognitiva y alimentación consciente en Tuxtla Gutiérrez.",
      keywords: ["Trastorno por atracón Tuxtla", "Comer por ansiedad tratamiento Chiapas", "Alimentación consciente psicólogo", "Beto Luna"]
    }
  },
  {
    id: "somatomorfo",
    slug: "trastorno-sintomas-somaticos",
    name: "Trastorno de Síntomas Somáticos (Somatización)",
    technicalName: "Trastorno de Síntomas Somáticos",
    description: "Se presenta cuando una persona experimenta una preocupación angustiante y desproporcionada por síntomas físicos (dolores de cabeza, fatiga, problemas estomacales, mareos), dedicando demasiado tiempo y energía a estos problemas de salud. Aunque el malestar físico es completamente real para quien lo padece, la raíz principal se encuentra en la ansiedad y en la interpretación catastrófica de las sensaciones corporales.",
    symptoms: [
      "Preocupación constante y persistente sobre la gravedad de los síntomas físicos",
      "Altos niveles de ansiedad acerca de la salud personal o corporal",
      "Gasto excesivo de tiempo y energía en consultas y exámenes médicos",
      "Interpretación catastrófica de sensaciones normales (creer que un dolor leve es cáncer)",
      "Persistencia de síntomas físicos reales que no tienen explicación orgánica clara",
      "Frustración severa ante la falta de diagnósticos médicos tradicionales"
    ],
    causes: [
      "Hipersensibilidad temperamental a las señales y sensaciones del cuerpo",
      "Historial de familiares con preocupaciones excesivas por enfermedades",
      "Mecanismo de defensa inconsciente para canalizar el estrés mental al plano físico"
    ],
    riskFactors: [
      "Haber vivido una enfermedad grave o traumática en la infancia",
      "Altos niveles de estrés laboral, familiar o académico acumulado",
      "Tendencia de personalidad a la catastrofización y rumiación"
    ],
    mexicoStats: "Es un motivo de consulta recurrente en los centros de salud de México, donde los consultantes realizan múltiples estudios médicos antes de ser canalizados a psicología clínica.",
    complications: [
      "Altos costos económicos por visitas frecuentes a múltiples médicos y exámenes",
      "Deterioro de la calidad de vida y desatención de actividades laborales",
      "Conflictos familiares debido a la incomprensión de que el dolor es de origen psicológico",
      "Desarrollo secundario de depresión mayor por frustración médica"
    ],
    treatments: [
      "Psicoterapia Cognitivo-Conductual para deconstruir la interpretación de las sensaciones corporales",
      "Técnicas de relajación muscular progresiva y biofeedback para disminuir la tensión",
      "Mindfulness aplicado a la aceptación y reducción de la hipervigilancia física",
      "Coordinación médica para evitar exámenes innecesivos y dar seguimiento estructurado"
    ],
    faqs: [
      {
        question: "¿Significa esto que me estoy inventando el dolor o los síntomas?",
        answer: "No. El dolor y los síntomas físicos son completamente reales y los sientes físicamente en el cuerpo. Lo que la terapia aborda es que la causa primaria no es un daño en los órganos, sino la ansiedad que amplifica e interpreta erróneamente las señales corporales."
      },
      {
        question: "¿Cómo ayuda la terapia cognitivo-conductual en la somatización?",
        answer: "Te ayuda a identificar pensamientos catastróficos, a disminuir la revisión obsesiva de tu cuerpo en busca de síntomas y a aprender técnicas para relajar tu sistema nervioso, reduciendo la intensidad física del dolor."
      },
      {
        question: "¿Por qué me duele el cuerpo cuando estoy estresado?",
        answer: "El estrés libera hormonas como el cortisol y activa la tensión muscular. Si esta tensión se mantiene por semanas, se traduce en dolores reales de cabeza, colitis, dolores de espalda y fatiga crónica."
      }
    ],
    sources: [
      "DSM-5 - Trastorno de Síntomas Somáticos",
      "Mayo Clinic - Somatic Symptom Disorder"
    ],
    relatedServices: ["psicoterapia-adultos", "entrenamiento-regulacion-emocional"],
    relatedSymptoms: ["insomnio-y-ansiedad", "inestabilidad-emocional"],
    image: "/transtornos/sintomas somaticos.png",
    seo: {
      title: "Terapia para Somatización en Tuxtla | Psic. Alberto Luna",
      description: "Tratamiento de la ansiedad por salud y la somatización del dolor en Tuxtla Gutiérrez. Aprende a calmar tu cuerpo y mente.",
      keywords: ["Trastorno de síntomas somáticos Tuxtla", "Hipocondría tratamiento Chiapas", "Somatización del estrés", "Beto Luna"]
    }
  }
];
