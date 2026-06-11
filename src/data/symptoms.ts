import { Symptom } from "../types/schema";

export const symptoms: Symptom[] = [
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
    name: "Autoexigencia Destructiva y Síndrome del Impostor",
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
      keywords: ["síndrome del impostor", "autoexigencia", "perfeccionismo", "autoestima laboral"]
    }
  },
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
