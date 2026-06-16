import { Symptom } from "../types/schema";

export const symptoms: Symptom[] = [
  // ─── CATEGORY 1: Crisis de Identidad y Transiciones de Vida ────────
  {
    id: "orientacion-vocacional",
    slug: "orientacion-vocacional-sentido-de-vida",
    name: "Orientación Vocacional y Sentido de Vida",
    description: "Muy común en jóvenes que no saben qué carrera elegir, o en adultos que se sienten estancados en un trabajo que no les llena. Es esa dolorosa sensación de no saber quién eres, qué te apasiona o hacia dónde vas. En terapia se trabaja el autoconocimiento profundo para construir un proyecto de vida con significado propio.",
    causes: [
      "Falta de autoconocimiento sobre aptitudes y gustos reales",
      "Expectativas familiares y sociales heredadas o impuestas",
      "Miedo a tomar la decisión equivocada y fracasar en el futuro"
    ],
    whyConsult: "Elegir tu carrera o reinventarte profesionalmente no debe dejarse a un test automatizado. Un proceso guiado te ayuda a comprender quién eres (Raíces), alinear tu pasión con la realidad (Ikigai) y estructurar un plan de acción (Alas).",
    relatedConditions: ["tdah-en-adultos", "ansiedad-generalizada"],
    image: "/images/symptom-vocational.jpg",
    seo: {
      title: "Orientación Vocacional y Sentido de Vida | Beto Luna",
      description: "Descubre tu verdadera vocación y sentido de vida. Supera la indecisión con terapia vocacional especializada en Tuxtla Gutiérrez.",
      keywords: ["orientación vocacional", "sentido de vida", "elegir carrera", "eneagrama profesional"]
    }
  },
  {
    id: "crisis-cuarto-vida",
    slug: "crisis-de-los-20-y-30-anos",
    name: "Crisis de los Cuarto de Vida (Crisis de los 20s y 30s)",
    description: "Es el choque emocional al pasar de la etapa universitaria a la vida adulta e independiente. Viene acompañada de una enorme presión social por 'tener éxito', conseguir estabilidad económica, comprar una casa o formar una familia. Genera un vacío profundo al comparar las expectativas de la infancia con la realidad actual.",
    causes: [
      "Presión social por cumplir metas tradicionales en un contexto económico complejo",
      "Comparación destructiva en redes sociales con las 'vidas perfectas' de otros",
      "Transición y adaptación a la independencia total y responsabilidades"
    ],
    whyConsult: "La terapia ofrece un contenedor seguro para deconstruir las expectativas sociales, definir tus propios estándares de éxito y crear un mapa de vida auténtico y sin culpas.",
    relatedConditions: ["depresion-mayor", "ansiedad-generalizada"],
    image: "/images/symptom-crisis.jpg",
    seo: {
      title: "Crisis de los 20 y 30 Años | Psicólogo Alberto Luna",
      description: "Supera la crisis de cuarto de vida, el vacío existencial y la presión del éxito. Psicoterapia adaptada para jóvenes adultos en Tuxtla.",
      keywords: ["crisis de los 20", "crisis de los 30", "independencia emocional", "presión social"]
    }
  },
  {
    id: "duelo-y-perdidas",
    slug: "duelo-y-perdidas-significativas",
    name: "Procesos de Duelo y Pérdidas",
    description: "No solo se agenda terapia por el fallecimiento de un ser querido. Las personas buscan apoyo para procesar 'duelos secos' o simbólicos: el fin de una relación de años, una mudanza de ciudad, perder un empleo o la renuncia a un sueño. La terapia ofrece el espacio seguro para desahogar el dolor sin ser juzgado.",
    causes: [
      "Fallecimiento de un familiar, pareja, amigo o mascota",
      "Rupturas amorosas, divorcios o disolución de proyectos de vida",
      "Pérdidas de estatus (despido laboral, jubilación, pérdida de salud)"
    ],
    whyConsult: "Evitar o reprimir el dolor solo prolonga el sufrimiento. Acompañarte clínicamente te ayuda a transitar las etapas del duelo, liberando la culpa y resignificando la pérdida.",
    relatedConditions: ["depresion-mayor", "estres-postraumatico"],
    image: "/images/symptom-grief.jpg",
    seo: {
      title: "Terapia de Duelo y Pérdidas en Tuxtla | Beto Luna",
      description: "Sana el dolor de una pérdida o ruptura. Espacio psicoterapéutico de apoyo y contención emocional en Tuxtla Gutiérrez.",
      keywords: ["terapia de duelo", "superar ruptura", "procesar pérdida", "sanar el alma"]
    }
  },

  // ─── CATEGORY 2: Relaciones Interpersonales y Vínculos ────────────
  {
    id: "rupturas-amorosas",
    slug: "rupturas-amorosas-y-relaciones-a-distancia",
    name: "Rupturas Amorosas y Relaciones a Distancia",
    description: "El fin de un noviazgo o los desafíos de mantener un vínculo afectivo cuando hay kilómetros de por medio son detonantes frecuentes de consulta. Los jóvenes buscan herramientas para gestionar los celos, la incertidumbre, la falta de contacto físico o, en su defecto, para aprender a superar la dependencia emocional tras una separación.",
    causes: [
      "Falta de comunicación afectiva clara o infidelidades en la pareja",
      "Estrés físico y emocional provocado por la distancia física",
      "Dificultades para asimilar el fin del ciclo de relación y apego ansioso"
    ],
    whyConsult: "Te doto de herramientas prácticas para procesar la separación de manera saludable, establecer un contacto cero constructivo si es necesario, y aprender a regular la ansiedad que genera la distancia.",
    relatedConditions: ["ansiedad-generalizada", "depresion-mayor"],
    image: "/images/symptom-rupture.jpg",
    seo: {
      title: "Superar Rupturas Amorosas y Distancia | Psic. Beto Luna",
      description: "Aprende a gestionar el duelo por ruptura amorosa o los celos en relaciones a distancia con terapia psicológica en Tuxtla Gutiérrez.",
      keywords: ["Superar una ruptura", "Relación a distancia consejos", "Dependencia emocional psicólogo", "Beto Luna"]
    }
  },
  {
    id: "conflictos-familiares",
    slug: "conflictos-familiares-y-limites-padres",
    name: "Conflictos Familiares y Límites con los Padres",
    description: "Para los adultos jóvenes, aprender a convivir con la familia de origen o lograr la independencia emocional (y económica) es un reto. El motivo de consulta suele ser cómo aprender a decir 'no', cómo poner límites sanos a padres sobreprotectores o invasivos, y cómo sanar heridas de la infancia sin cortar el vínculo familiar.",
    causes: [
      "Expectativas y demandas parentales que chocan con la autonomía del hijo",
      "Patrones de comunicación pasivo-agresivos o de sobreprotección invasiva",
      "Dificultades en el proceso de individuación y emancipación emocional"
    ],
    whyConsult: "La psicoterapia te ayuda a desarrollar una asertividad firme para comunicar tus límites con amor, sin culpas y resguardando tu estabilidad mental e individualidad.",
    relatedConditions: ["ansiedad-generalizada", "trastorno-de-adaptacion"],
    image: "/images/symptom-family.jpg",
    seo: {
      title: "Límites con Padres y Conflictos Familiares | Beto Luna",
      description: "Establece límites asertivos con tus padres y sana dinámicas familiares invasivas. Terapia de apoyo familiar en Tuxtla.",
      keywords: ["Límites familiares", "Independencia emocional padres", "Sanar heridas infancia", "Beto Luna psicólogo"]
    }
  },
  {
    id: "soledad-cronica",
    slug: "dificultad-para-relacionarse-y-soledad-cronica",
    name: "Dificultad para Relacionarse y Soledad Crónica",
    description: "A pesar de estar más conectados que nunca en redes sociales, la sensación de aislamiento y la falta de conexiones profundas es una epidemia silenciosa. Las personas buscan terapia porque se sienten solas, les cuesta hacer nuevos amigos en la adultez o experimentan una profunda torpeza social que les impide abrirse con los demás.",
    causes: [
      "Miedo persistente al rechazo o a la crítica interpersonal",
      "Falta de espacios y habilidades de socialización en el entorno adulto",
      "Dependencia de la interacción digital que debilita las habilidades cara a cara"
    ],
    whyConsult: "A través del entrenamiento en asertividad y habilidades interpersonales, aprenderás a desmontar pensamientos de desaprobación y a entablar conexiones reales.",
    relatedConditions: ["fobia-social", "trastorno-personalidad-evitativa"],
    image: "/images/symptom-solitude.jpg",
    seo: {
      title: "Soledad Crónica y Habilidades Sociales | Beto Luna",
      description: "Supera la soledad crónica y la torpeza social. Aprende a crear relaciones profundas y asertivas en Tuxtla Gutiérrez.",
      keywords: ["Soledad crónica terapia", "Cómo hacer amigos de adulto", "Torpeza social psicólogo", "Beto Luna"]
    }
  },

  // ─── CATEGORY 3: Rendimiento, Trabajo y Presión Social ────────────
  {
    id: "burnout",
    slug: "sindrome-de-burnout-agotamiento-laboral",
    name: "Síndrome de Burnout (Agotamiento Laboral)",
    description: "Adultos que llegan a consulta completamente exhaustos, cínicos hacia su trabajo y sintiéndose ineficaces. El estrés crónico de las jornadas laborales, la incapacidad para desconectarse del teléfono y la sobrecarga de tareas terminan desgastando la salud física y mental, requiriendo un proceso de reconstrucción de hábitos.",
    causes: [
      "Jornadas laborales extenuantes y demandas de conectividad 24/7",
      "Ambientes de trabajo tóxicos, competitivos o de nulo reconocimiento",
      "Falta de límites personales entre la vida laboral y la privada"
    ],
    whyConsult: "La terapia de burnout te dota de estrategias de desconexión cognitiva, reorganización de prioridades de vida y establecimiento de límites en tu espacio de trabajo.",
    relatedConditions: ["ansiedad-generalizada", "depresion-mayor"],
    image: "/images/symptom-burnout.jpg",
    seo: {
      title: "Tratamiento de Síndrome de Burnout en Tuxtla | Beto Luna",
      description: "Recupera tu energía y supera el estrés por agotamiento laboral (burnout). Terapia cognitiva y manejo de límites en Chiapas.",
      keywords: ["Síndrome de burnout Tuxtla", "Estrés laboral tratamiento", "Agotamiento crónico psicólogo", "Beto Luna"]
    }
  },
  {
    id: "procrastinacion-extrema",
    slug: "procrastinacion-y-organizacion",
    name: "Procrastinación Extrema y Problemas de Organización",
    description: "'Sé lo que tengo que hacer, pero no puedo empezar'. Detrás de la procrastinación casi nunca hay flojera; hay un miedo profundo al fracaso, al juicio o niveles altísimos de ansiedad. Quienes consultan por esto buscan descifrar qué bloquea su productividad y cómo gestionar su tiempo sin castigarse en el proceso.",
    causes: [
      "Perfeccionismo paralizante y miedo crónico a cometer errores",
      "Dificultad para regular el malestar emocional que genera la tarea",
      "Dificultades en las funciones ejecutivas de planificación (asociado a TDAH)"
    ],
    whyConsult: "La terapia cognitivo-conductual te enseña a identificar las creencias que bloquean tu acción, a regular tu sistema nervioso y a usar herramientas funcionales de enfoque.",
    relatedConditions: ["tdah-en-adultos", "ansiedad-generalizada", "trastorno-obsesivo-compulsivo"],
    image: "/images/symptom-procrastination.jpg",
    seo: {
      title: "Terapia para Procrastinación Extrema | Beto Luna",
      description: "Supera la procrastinación crónica y los problemas de enfoque. Aprende técnicas de organización y funciones ejecutivas en Tuxtla.",
      keywords: ["procrastinación extrema", "problemas de organización", "productividad sin culpa", "TDAH adultos"]
    }
  },
  {
    id: "autoexigencia-destructiva",
    slug: "autoexigencia-y-sindrome-impostor",
    name: "Autoexigencia Destructiva y el 'Síndrome del Impostor'",
    description: "Perfil de jóvenes sumamente brillantes que, sin importar cuántos títulos o logros acumulen, sienten que están engañando a todo el mundo y que en cualquier momento 'los van a descubrir'. La incapacidad de internalizar sus propios éxitos los lleva a vivir en un estado de alerta y perfeccionismo paralizante.",
    causes: [
      "Estilos de crianza basados en el condicionamiento del afecto al logro escolar/deportivo",
      "Baja autoestima y distorsiones cognitivas sobre el propio valor",
      "Estándares perfeccionistas y autoexigencia inalcanzables"
    ],
    whyConsult: "Para aprender a internalizar tus logros, deconstruir la voz crítica interna y vivir tu carrera o proyectos con tranquilidad, disfrutando tus éxitos sin temor al juicio.",
    relatedConditions: ["tdah-en-adultos", "ansiedad-generalizada"],
    image: "/images/symptom-impostor.jpg",
    seo: {
      title: "Síndrome del Impostor y Autoexigencia | Psic. Alberto Luna",
      description: "Reduce la autoexigencia destructiva y el perfeccionismo paralizante. Reconcíliate con tus logros académicos y laborales.",
      keywords: ["síndrome del impostor", "autoexigencia", "perfeccionismo", "autoesteem laboral"]
    }
  },

  // ─── CATEGORY 4: Gestión Emocional y Autoestima ───────────────────
  {
    id: "baja-autoestima-e-inseguridad",
    slug: "baja-autoestima-e-inseguridad-corporal",
    name: "Baja Autoestima e Inseguridad Corporal",
    description: "La comparación constante con vidas perfectas y cuerpos irreales en internet ha destrozado la autopercepción. Los pacientes llegan a terapia cansados de hablarse mal frente al espejo, sintiéndose inferiores y buscando reconciliarse con su imagen y con su valor intrínseco como personas.",
    causes: [
      "Consumo masivo y poco regulado de redes sociales",
      "Comentarios críticos de familiares o entorno social sobre el peso o apariencia",
      "Vincular la valía personal a la aprobación y validación externa"
    ],
    whyConsult: "La psicoterapia te ayuda a identificar los sesgos cognitivos sobre tu imagen, a detener los bucles de autocrítica y a cimentar una autoestima basada en el amor propio y la compasión.",
    relatedConditions: ["depresion-mayor", "ansiedad-generalizada"],
    image: "/images/symptom-selfesteem.jpg",
    seo: {
      title: "Terapia para Baja Autoestima en Tuxtla | Beto Luna",
      description: "Construye una relación sana contigo mismo. Supera las inseguridades corporales y fortalece tu amor propio con psicoterapia clínica.",
      keywords: ["baja autoestima", "inseguridad corporal", "amor propio", "autopercepción"]
    }
  },
  {
    id: "inestabilidad-emocional",
    slug: "inestabilidad-emocional-e-impulsividad",
    name: "Inestabilidad Emocional e Impulsividad",
    description: "Personas que sienten que sus emociones son una montaña rusa: pasan del enojo a la tristeza o a la euforia en cuestión de horas. Buscan ayuda porque esa falta de control los lleva a reaccionar de manera impulsiva, lastimando a sus parejas, amigos o autosaboteando sus propios proyectos por arranques del momento.",
    causes: [
      "Falta de pautas de autorregulación emocional en la infancia",
      "Hipersensibilidad temperamental ante situaciones estresantes",
      "Vulnerabilidad emocional debida a heridas afectivas o traumas no resueltos"
    ],
    whyConsult: "Aprenderás a colocar una pausa reflexiva entre el estímulo y tu reacción. La terapia te brinda herramientas específicas de tolerancia al malestar y control de impulsos.",
    relatedConditions: ["estres-postraumatico", "trastorno-obsesivo-compulsivo"],
    image: "/images/symptom-instability.jpg",
    seo: {
      title: "Inestabilidad Emocional e Impulsividad | Psic. Beto Luna",
      description: "Aprende a regular tus emociones y a controlar impulsos. Sal del círculo del autosabotaje y las reacciones explosivas en Tuxtla.",
      keywords: ["inestabilidad emocional", "control de impulsos", "regulación afectiva", "inteligencia emocional"]
    }
  },
  {
    id: "gestion-ira",
    slug: "gestion-de-la-ira-y-frustracion",
    name: "Gestión de la Ira y Frustración",
    description: "Cuando el estrés del día a día sobrepasa los recursos de la persona, la respuesta suele ser la explosión. Adultos que asisten a consulta porque se dan cuenta de que gritan con facilidad, se desesperan ante el menor inconveniente o reaccionan de forma agresiva en el tráfico o el hogar, deteriorando su entorno.",
    causes: [
      "Acumulación de estrés y nula expresión de emociones de forma progresiva",
      "Creencias rígidas de cómo 'deberían' actuar las cosas o personas a tu alrededor",
      "Baja tolerancia a la frustración y sobrecarga del sistema de alarma corporal"
    ],
    whyConsult: "La terapia de manejo de ira te dota de técnicas de desactivación fisiológica inmediata y reestructuración cognitiva de pensamientos hostiles.",
    relatedConditions: ["ansiedad-generalizada", "trastorno-personalidad-limite"],
    image: "/images/symptom-anger.jpg",
    seo: {
      title: "Manejo de la Ira y Frustración en Tuxtla | Beto Luna",
      description: "Aprende a controlar el enojo y las reacciones explosivas. Terapia de asertividad y regulación de la ira en Tuxtla Gutiérrez.",
      keywords: ["Manejo de la ira Tuxtla", "Control del enojo psicoterapeuta", "Baja tolerancia frustración", "Beto Luna"]
    }
  },

  // ─── CATEGORY 5: Hábitos y Estilo de Vida ─────────────────────────
  {
    id: "dependencia-pantallas",
    slug: "dependencia-a-las-pantallas-y-redes-sociales",
    name: "Dependencia a las Pantallas y Redes Sociales",
    description: "Un motivo de consulta emergente y sumamente común en la actualidad. Jóvenes y adultos que se sienten adictos al scrolleo infinito, que pierden horas de sueño por estar en el celular y cuya salud mental se ve afectada por la dopamina barata de las aplicaciones, buscando un 'detox' guiado y herramientas de autocontrol.",
    causes: [
      "Diseño adictivo de las aplicaciones enfocado en la recompensa inmediata",
      "Uso del scrolleo digital como escape o anestesia de la ansiedad o aburrimiento",
      "Falta de actividades gratificantes alternativas en el mundo físico"
    ],
    whyConsult: "Te acompaño en un proceso estructurado de detox digital y en el rediseño de hábitos saludables para que retomes el control de tu tiempo y atención.",
    relatedConditions: ["tdah-en-adultos", "ansiedad-generalizada"],
    image: "/images/symptom-screen.jpg",
    seo: {
      title: "Dependencia al Celular y Redes Sociales | Beto Luna",
      description: "Detox digital guiado. Supera la adicción a las pantallas y recupera tu concentración con terapia cognitiva en Tuxtla.",
      keywords: ["Adicción al celular terapia", "Detox redes sociales Tuxtla", "Higiene digital psicólogo", "Beto Luna"]
    }
  },
  {
    id: "insomnio-y-ansiedad",
    slug: "insomnio-y-problemas-de-sueno",
    name: "Problemas Crónicos de Sueño e Insomnio por Ansiedad",
    description: "La famosa 'mente que no se apaga a las 3 de la mañana'. Muchas personas llegan al psicólogo porque el cuerpo está cansado pero la cabeza sigue repasando pendientes, errores del pasado o escenarios catastróficos del futuro, impidiendo un descanso reparador.",
    causes: [
      "Hiperactividad mental y pensamientos intrusivos al apagar la luz",
      "Asociar la cama con un espacio de estrés, trabajo o preocupación",
      "Consumo tardío de pantallas y malos hábitos de higiene del sueño"
    ],
    whyConsult: "La terapia cognitivo-conductual del insomnio es la intervención de primera línea para reentrenar a tu cerebro, disminuir la hiperalerta nocturna y recuperar el sueño profundo.",
    relatedConditions: ["ansiedad-generalizada", "depresion-mayor"],
    image: "/images/symptom-insomnia.jpg",
    seo: {
      title: "Insomnio y Sueño por Ansiedad | Psicólogo Alberto Luna",
      description: "Apaga tu mente por las noches. Recupera el descanso reparador con técnicas cognitivas y de relajación en Tuxtla Gutiérrez.",
      keywords: ["insomnio por ansiedad", "problemas de sueño", "higiene del sueño", "desactivación cognitiva"]
    }
  }
];
