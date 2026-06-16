import { DoctorProfile } from "../types/schema";

export const doctor: DoctorProfile = {
  name: "Psicólogo Alberto Luna",
  title: "Psicólogo Clínico",
  specialty: "Psicología",
  specialistTitle: "Psicoterapeuta y Orientador Vocacional",
  subspecialty: "Terapia Cognitivo-Conductual, Eneagrama y Sentido de Vida",
  cedula: "15674825",
  phone: "5635862471",
  whatsapp: "+52 1 961 579 8647",
  email: "psicologobetoluna@gmail.com",
  address: "Avenida Querétaro N. 28, Colonia Residencial Hacienda (entre Taxco y Guanajuato)",
  city: "Tuxtla Gutiérrez",
  state: "Chiapas",
  country: "México",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Avenida+Quer%C3%A9taro+N.+28,+Residencial+Hacienda,+Tuxtla+Guti%C3%A9rrez,+Chiapas",
  consultationPrice: 400,
  paymentMethods: ["Efectivo", "Transferencia Bancaria", "Tarjeta de Débito", "Tarjeta de Crédito"],
  insurances: ["Reembolso con Aseguradoras Privadas"],
  schedule: "Lunes a Viernes: 09:00 - 13:00 y 16:00 - 21:00 | Sábado: 09:00 - 15:00",
  photo: "/images/doctor.jpg",
  bio: "El Psicólogo Alberto Luna (Beto Luna) es egresado de la Universidad Nacional Autónoma de México (UNAM). Cuenta con más de 6 años de experiencia en el ámbito de la psicoterapia individual, habiendo acompañado a más de 300 pacientes en procesos clínicos de gestión emocional, ansiedad y depresión. Asimismo, cuenta con una sólida trayectoria en el área de la orientación profesional, con más de 500 evaluaciones vocacionales realizadas bajo su metodología patentada 'Raíces y Alas'. Su enfoque terapéutico es dinámico, analítico y compasivo, proporcionando herramientas concretas para reestructurar pensamientos y sanar las heridas del alma.",
  philosophy: "El proceso de terapia no busca juzgar tus decisiones, sino brindarte la claridad y las herramientas necesarias para comprender su origen, sanar tus heridas y construir un proyecto de vida con significado y libertad.",
  experience: [
    {
      year: "2020 - Presente",
      title: "Psicólogo Clínico y Facilitador Vocacional",
      description: "Consulta psicoterapéutica privada para jóvenes y adultos. Creador y aplicador del Método 'Raíces y Alas'."
    },
    {
      year: "2018 - 2020",
      title: "Terapeuta y Orientador Escolar",
      description: "Aplicación de evaluaciones psicométricas, talleres de manejo de ansiedad y prevención de burnout."
    },
    {
      year: "2016 - 2018",
      title: "Facilitador de Grupos y Conferencias",
      description: "Ponencias sobre salud mental en la era digital e inteligencia emocional aplicadas en instituciones educativas."
    }
  ],
  certifications: [
    {
      name: "Licenciatura en Psicología por la Universidad Nacional Autónoma de México",
      institution: "UNAM",
      year: "2018"
    },
    {
      name: "Especialista en Evaluación Vocacional y Análisis de Personalidad",
      institution: "Asociación Mexicana de Orientación Vocacional",
      year: "2019"
    },
    {
      name: "Entrenamiento Avanzado en Terapia Cognitivo-Conductual y Eneagrama Clínico",
      institution: "Centro de Salud Mental y Desarrollo Humano",
      year: "2021"
    }
  ],
  education: [
    {
      degree: "Licenciado en Psicología",
      institution: "Universidad Nacional Autónoma de México (UNAM)",
      year: "2018"
    }
  ],
  testimonials: [
    {
      id: "t1",
      patientName: "Víctor H. Sánchez",
      rating: 5,
      text: "Al inicio me sentía muy mal conmigo mismo, lleno de culpa y confusión. Busqué ayuda porque necesitaba comprender mis acciones y salir de ese círculo. Con la guía de Beto aprendí a mirarme con compasión, entendí que mis decisiones venían de vacíos emocionales no atendidos y que sanar es posible. Hoy me siento más tranquilo, con una mirada más amable hacia mi historia y en paz.",
      sourceUrl: "https://www.doctoralia.com.mx/jorge-alberto-hernandez-luna/psicologo/tuxtla-gutierrez",
      date: "2026-03-10"
    },
    {
      id: "t2",
      patientName: "J.B.",
      rating: 5,
      text: "Antes del proceso cargaba con muchas situaciones que me sobrepasaban y no tenía con quién hablar por miedo al rechazo. Aprendí a conocerme mejor y a trabajar en mis emociones. Lo que más me gustó fue el dinamismo de las sesiones: analizamos películas y situaciones reales de forma muy práctica.",
      sourceUrl: "https://www.doctoralia.com.mx/jorge-alberto-hernandez-luna/psicologo/tuxtla-gutierrez",
      date: "2026-04-18"
    },
    {
      id: "t3",
      patientName: "D.Z.",
      rating: 5,
      text: "Recomiendo ampliamente al Psicólogo Beto Luna. Posee una empatía excepcional con las heridas del alma y una gran dedicación al crecimiento de sus pacientes. Sus herramientas y dinámicas personalizadas te ayudan a comprender profundamente tus pensamientos.",
      sourceUrl: "https://www.doctoralia.com.mx/jorge-alberto-hernandez-luna/psicologo/tuxtla-gutierrez",
      date: "2026-05-05"
    }
  ],
  ga4Id: "G-PSICO2026"
};
