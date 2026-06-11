"use client";

import Link from "next/link";
import { useState } from "react";
import { doctor } from "@/data/doctor";
import { diseases } from "@/data/diseases";
import { services } from "@/data/services";
import { symptoms } from "@/data/symptoms";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/Animations";
import { FaWhatsapp, FaPhone, FaCheck, FaStar, FaQuoteLeft, FaBrain, FaMapMarkerAlt, FaCalendarAlt, FaClipboardList, FaAward } from "react-icons/fa";
import StructuredData from "@/components/StructuredData";

export default function HomePage() {
  const whatsappUrl = `https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`;
  const [activeTab, setActiveTab] = useState(diseases[0].id);

  // Schema: PsychologyWebPage
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": `${doctor.name} | ${doctor.specialistTitle} en Tuxtla`,
    "description": doctor.bio,
    "about": {
      "@type": "Service",
      "name": "Psicoterapia Clínica y Orientación Vocacional"
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "Jóvenes y adultos que buscan psicoterapia o reorientación profesional"
    }
  };

  // Schema: ProfessionalService / Psychologist
  const professionalSchema = {
    "@context": "https://schema.org",
    "@type": "Psychologist",
    "name": doctor.name,
    "image": "http://localhost:3021/images/doctor.jpg",
    "telephone": doctor.phone,
    "email": doctor.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": doctor.address,
      "addressLocality": doctor.city,
      "addressRegion": doctor.state,
      "postalCode": "29030",
      "addressCountry": "MX"
    },
    "priceRange": `$$`,
    "license": doctor.cedula
  };

  // Group symptoms by sphere
  const spheres = [
    {
      name: "Crisis de Identidad y Transiciones",
      items: symptoms.filter(s => ["orientacion-vocacional", "crisis-cuarto-vida", "duelo-y-perdidas"].includes(s.id))
    },
    {
      name: "Rendimiento y Trabajo",
      items: symptoms.filter(s => ["procrastinacion-extrema", "autoexigencia-destructiva"].includes(s.id))
    },
    {
      name: "Gestión Emocional y Autoestima",
      items: symptoms.filter(s => ["baja-autoestima-e-inseguridad", "inestabilidad-emocional"].includes(s.id))
    },
    {
      name: "Hábitos y Estilo de Vida",
      items: symptoms.filter(s => ["insomnio-y-ansiedad"].includes(s.id))
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50 selection:bg-teal-600/10 selection:text-stone-900 overflow-hidden psychology-flow-bg">
      <StructuredData data={[webPageSchema, professionalSchema]} />

      {/* ─── HERO SECTION: Strict 100vh check (taking navbar into account) ─── */}
      <section className="relative min-h-[calc(100vh-130px)] flex items-center py-12 md:py-20 bg-stone-900 text-stone-100 overflow-hidden border-b border-teal-850/20">
        {/* Glow Spheres */}
        <div className="absolute top-1/4 left-1/3 w-[300px] h-[300px] rounded-full blur-[80px] -z-10 glow-bubble-teal pointer-events-none animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full blur-[90px] -z-10 glow-bubble-amber pointer-events-none animate-pulse-slow" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Value Proposition */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <FadeUp>
                <span className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/30 px-4 py-2 rounded-full text-teal-400 text-[10px] font-extrabold uppercase tracking-widest mb-6">
                  <FaBrain className="animate-pulse" /> PSICOTERAPIA CLÍNICA Y SENTIDO DE VIDA
                </span>
              </FadeUp>

              <FadeUp delay={0.1}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] mb-6 text-white">
                  Espacio para <br />
                  <span className="bg-gradient-to-r from-teal-400 to-amber-400 bg-clip-text text-transparent">
                    sanar, comprender y trascender
                  </span>
                </h1>
              </FadeUp>

              <FadeUp delay={0.2}>
                <p className="text-stone-400 text-xs sm:text-sm md:text-base leading-relaxed mb-8 max-w-xl">
                  Encuentra un acompañamiento psicoterapéutico empático y sin juicios en Tuxtla Gutiérrez. Herramientas prácticas de terapia cognitivo-conductual y diagnóstico vocacional profundo con el método <strong>Raíces y Alas</strong>.
                </p>
              </FadeUp>

              <FadeUp delay={0.3} className="w-full sm:w-auto">
                <div className="flex flex-col sm:flex-row gap-4 w-full">
                  <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-xl font-bold transition shadow-lg shadow-teal-700/15 active:scale-95 duration-150 text-xs tracking-wider uppercase">
                    <FaWhatsapp size={14} /> Agendar Sesión
                  </a>
                  <Link href="/contacto" className="inline-flex items-center justify-center gap-2 bg-stone-800 hover:bg-stone-750 border border-stone-700 text-stone-200 hover:text-white px-8 py-4 rounded-xl font-bold transition duration-150 text-xs tracking-wider uppercase">
                    <FaMapMarkerAlt size={11} className="text-teal-400" /> Ubicar Consultorio
                  </Link>
                </div>
              </FadeUp>
            </div>

            {/* Right Column: Premium Photo Container with Psychologist photo placeholder */}
            <div className="lg:col-span-5 flex justify-center w-full">
              <FadeUp delay={0.2} className="w-full max-w-sm">
                <div className="relative aspect-[3/4] w-full rounded-[2.5rem] bg-stone-950 border border-teal-500/15 overflow-hidden group shadow-2xl shadow-teal-500/5 hover:border-teal-500/30 transition-all duration-500">
                  {/* Subtle lighting overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/20 to-transparent z-10" />
                  <div className="absolute -inset-10 bg-[radial-gradient(circle,rgba(15,118,110,0.12)_0%,transparent_70%)] animate-pulse-slow pointer-events-none" />
                  
                  {/* Silhouette and Explicit Placeholder text */}
                  <div className="absolute inset-0 flex flex-col justify-end items-center pb-12 z-20">
                    <span className="text-6xl mb-4 animate-float-slow select-none filter drop-shadow-[0_10px_15px_rgba(15,118,110,0.2)]">🧠</span>
                    <span className="text-[10px] font-extrabold text-teal-400 uppercase tracking-widest bg-teal-500/10 border border-teal-500/20 px-4 py-2 rounded-full backdrop-blur-md">
                      Fotografía del Psicólogo
                    </span>
                    <span className="text-xs text-stone-300 mt-3 font-semibold">
                      {doctor.name}
                    </span>
                    <span className="text-[9px] text-stone-500 font-bold uppercase tracking-widest mt-1">
                      Cédula {doctor.cedula} • UNAM
                    </span>
                  </div>

                  {/* Clean micro-grid inside frame */}
                  <div className="absolute inset-0 bg-grid-white/[0.01] pointer-events-none" />
                </div>
              </FadeUp>
            </div>

          </div>
        </div>
      </section>

      {/* ─── DISORDERS TABS SECTION (Selector Interactivo de Trastornos) ─── */}
      <section className="py-24 max-w-7xl mx-auto px-6 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-teal-700 font-extrabold text-xs uppercase tracking-widest mb-3 inline-block">Trastornos Clínicos</span>
          <h2 className="text-3xl md:text-4xl font-black text-stone-900 tracking-tight mb-5">Áreas de Consulta Psicoterapéutica</h2>
          <p className="text-stone-500 text-xs sm:text-sm leading-relaxed">
            Abordamos el malestar emocional y conductual a través de procesos terapéuticos personalizados y validados científicamente, adaptados al ritmo y necesidades de cada consultante.
          </p>
        </div>

        {/* Tab Selectors */}
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 mb-10 border-b border-stone-200 pb-6">
            {diseases.map((d) => (
              <button
                key={d.id}
                onClick={() => setActiveTab(d.id)}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition duration-200 ${
                  activeTab === d.id
                    ? "bg-teal-700 text-white shadow-md shadow-teal-700/10"
                    : "bg-white text-stone-600 border border-stone-200 hover:bg-stone-100"
                }`}
              >
                {d.name}
              </button>
            ))}
          </div>

          {/* Active Tab Content */}
          <div className="bg-white border border-stone-200/60 p-8 sm:p-10 rounded-3xl shadow-sm transition-all duration-300">
            {diseases.map((d) => {
              if (d.id !== activeTab) return null;
              return (
                <div key={d.id} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-fade-in">
                  {/* Left (8 cols) */}
                  <div className="lg:col-span-8">
                    <span className="text-xs font-extrabold text-amber-650 uppercase tracking-widest block mb-2">
                      {d.technicalName}
                    </span>
                    <h3 className="text-2xl font-black text-stone-900 mb-4">{d.name}</h3>
                    <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-6">
                      {d.description}
                    </p>

                    <h4 className="font-extrabold text-stone-900 text-xs uppercase tracking-wider mb-3 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-600" /> Manifestaciones Frecuentes
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                      {d.symptoms.map((sym, i) => (
                        <div key={i} className="flex items-center gap-2 text-stone-600 text-xs font-medium">
                          <span className="text-teal-600 font-bold">✓</span>
                          <span>{sym}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-4 border-t border-stone-100 pt-6">
                      <span className="text-[10px] text-stone-500 font-bold uppercase tracking-wider">
                        Enfoque de Tratamiento Personalizado
                      </span>
                      <Link href={`/enfermedades/${d.slug}`} className="inline-flex items-center gap-1.5 text-teal-700 hover:text-teal-800 font-extrabold text-xs px-5 py-2.5 bg-teal-50 hover:bg-teal-100 rounded-xl transition-all">
                        Ver detalles y preguntas frecuentes &rarr;
                      </Link>
                    </div>
                  </div>

                  {/* Right (4 cols) */}
                  <div className="lg:col-span-4 bg-stone-50 p-6 rounded-2xl border border-stone-200/60">
                    <h4 className="text-stone-800 font-black text-xs uppercase tracking-widest mb-4">¿Cómo trabajamos?</h4>
                    <ul className="space-y-4">
                      {d.treatments.slice(0, 3).map((treat, idx) => (
                        <li key={idx} className="flex gap-2.5 items-start text-xs text-stone-650 leading-normal">
                          <span className="w-5 h-5 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-[10px] shrink-0">
                            {idx + 1}
                          </span>
                          <span>{treat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── VOCATIONAL SECTION: Método "Raíces y Alas" (Sección Destacada de Gran Formato) ─── */}
      <section className="py-24 bg-stone-900 text-stone-100 relative border-y border-stone-850">
        <div className="absolute top-10 right-10 w-[250px] h-[250px] rounded-full blur-[80px] -z-10 glow-bubble-teal pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-teal-400 font-extrabold text-xs uppercase tracking-widest mb-3 inline-block">Orientación Vocacional Profunda</span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-5 text-white">El Método "Raíces y Alas"</h2>
            <p className="text-stone-400 text-xs sm:text-sm leading-relaxed">
              Un proceso integral de orientación vocacional y reinvención profesional diseñado para jóvenes y adultos, analizando tres dimensiones humanas esenciales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Card 1: Raíces */}
            <div className="bg-stone-950 border border-stone-800 rounded-3xl p-8 flex flex-col justify-between hover:border-teal-500/20 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-teal-500/10 text-teal-400 text-7xl font-black p-4 select-none opacity-20">01</div>
              <div>
                <span className="text-[10px] font-extrabold text-teal-400 uppercase tracking-widest block mb-4">FASE UNO</span>
                <h3 className="text-xl font-bold tracking-tight text-white mb-3">Fase Raíces</h3>
                <h4 className="text-xs font-bold text-stone-400 mb-4 uppercase tracking-wider">Autoconocimiento y Eneagrama</h4>
                <p className="text-stone-400 text-xs leading-relaxed mb-6">
                  Evaluamos la estructura profunda de tu personalidad, miedos básicos y talentos innatos utilizando el Eneagrama Clínico. Identificamos los bloqueos y 'áreas ciegas' que dificultan tus elecciones profesionales.
                </p>
              </div>
              <div className="border-t border-stone-900 pt-4 text-[10px] text-stone-500 font-bold uppercase tracking-wider">
                Comprender la esencia
              </div>
            </div>

            {/* Card 2: Ikigai */}
            <div className="bg-stone-950 border border-stone-800 rounded-3xl p-8 flex flex-col justify-between hover:border-teal-500/20 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-amber-500/10 text-amber-400 text-7xl font-black p-4 select-none opacity-20">02</div>
              <div>
                <span className="text-[10px] font-extrabold text-amber-400 uppercase tracking-widest block mb-4">FASE DOS</span>
                <h3 className="text-xl font-bold tracking-tight text-white mb-3">Fase Ikigai</h3>
                <h4 className="text-xs font-bold text-stone-400 mb-4 uppercase tracking-wider">Alinear Pasión y Realidad</h4>
                <p className="text-stone-400 text-xs leading-relaxed mb-6">
                  Buscamos el punto de equilibrio cruzando tus talentos con tus pasiones, lo que el mercado laboral requiere y lo que es económicamente viable. Aplicamos instrumentos diagnósticos robustos e intereses vocacionales.
                </p>
              </div>
              <div className="border-t border-stone-900 pt-4 text-[10px] text-stone-500 font-bold uppercase tracking-wider">
                Punto de Equilibrio
              </div>
            </div>

            {/* Card 3: Alas */}
            <div className="bg-stone-950 border border-stone-800 rounded-3xl p-8 flex flex-col justify-between hover:border-teal-500/20 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-teal-500/10 text-teal-400 text-7xl font-black p-4 select-none opacity-20">03</div>
              <div>
                <span className="text-[10px] font-extrabold text-teal-400 uppercase tracking-widest block mb-4">FASE TRES</span>
                <h3 className="text-xl font-bold tracking-tight text-white mb-3">Fase Alas</h3>
                <h4 className="text-xs font-bold text-stone-400 mb-4 uppercase tracking-wider">Plan de Acción Profesional</h4>
                <p className="text-stone-400 text-xs leading-relaxed mb-6">
                  Traducimos el autoconocimiento en alternativas concretas. Te entrego un reporte detallado con las alternativas idóneas y un plan estratégico por escrito para ejecutar tu elección o cambio con seguridad.
                </p>
              </div>
              <div className="border-t border-stone-900 pt-4 text-[10px] text-stone-500 font-bold uppercase tracking-wider">
                Proyección al Futuro
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link href="/servicios/perfiles-vocacionales-metodo-raices-y-alas" className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs px-8 py-4 rounded-xl transition shadow-lg shadow-teal-500/10 uppercase tracking-wider">
              Conocer Detalles del Proceso &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ─── SYMPTOMS CHECKLIST SECTION (¿Cuándo buscar apoyo?) ─── */}
      <section className="py-24 max-w-7xl mx-auto px-6 relative">
        <div className="absolute bottom-10 left-10 w-[200px] h-[200px] rounded-full blur-[80px] -z-10 glow-bubble-amber pointer-events-none" />

        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-teal-750 font-extrabold text-xs uppercase tracking-widest mb-3 block">Autoevaluación</span>
          <h2 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight mb-6">¿Cuándo buscar apoyo psicológico?</h2>
          <p className="text-stone-500 text-xs sm:text-sm leading-relaxed">
            Identificar señales de alerta a nivel de comportamiento, pensamiento y estilo de vida es el primer paso para recuperar tu bienestar emocional. Revisa las áreas cotidianas a continuación:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {spheres.map((sphere, index) => (
            <div key={index} className="bg-white border border-stone-200/50 p-6 sm:p-8 rounded-3xl shadow-xs">
              <h3 className="text-base font-black text-stone-900 mb-6 flex items-center gap-2 border-b border-stone-100 pb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-600 shrink-0" />
                {sphere.name}
              </h3>
              <div className="space-y-4">
                {sphere.items.map((item) => (
                  <div key={item.id} className="group flex items-start gap-3.5">
                    <span className="w-5 h-5 rounded-full bg-teal-50 border border-teal-200/60 text-teal-600 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 group-hover:bg-teal-600 group-hover:text-white transition duration-200">
                      ?
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-stone-900 mb-1 group-hover:text-teal-700 transition">
                        {item.name}
                      </h4>
                      <p className="text-stone-550 text-xs leading-relaxed mb-2">
                        {item.description.substring(0, 110)}...
                      </p>
                      <Link href={`/sintomas/${item.slug}`} className="text-teal-750 hover:text-teal-850 font-bold text-[10px] inline-flex items-center gap-1">
                        ¿Cómo se trabaja en sesión? &rarr;
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── BIO SECTION: Detailed Psychologist Experience ─── */}
      <section className="py-24 bg-stone-100 border-y border-stone-200/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Biography text & details (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <FadeUp>
                <span className="text-teal-700 font-extrabold text-xs uppercase tracking-widest mb-3 inline-block">Tu Terapeuta</span>
                <h2 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight mb-6">{doctor.name}</h2>
              </FadeUp>

              <FadeUp delay={0.1}>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-6">
                  {doctor.bio}
                </p>
              </FadeUp>

              {/* Quote philosophy block */}
              <FadeUp delay={0.2} className="border-l-4 border-amber-600 bg-white p-6 rounded-r-2xl border border-stone-200/30 mb-8 shadow-xs flex gap-4">
                <FaQuoteLeft className="text-amber-500/20 text-3xl flex-shrink-0" />
                <p className="text-stone-900 italic font-semibold text-xs leading-relaxed">
                  "{doctor.philosophy}"
                </p>
              </FadeUp>

              {/* Education & Certifications lists */}
              <FadeUp delay={0.3} className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs">
                <div>
                  <h4 className="font-extrabold text-stone-900 uppercase tracking-wider mb-3 border-b border-stone-200 pb-2">Formación Profesional</h4>
                  <ul className="space-y-3 font-semibold text-stone-550">
                    {doctor.education.map((e, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="text-teal-600 font-bold">{e.year}</span>
                        <span>{e.degree} - <span className="font-bold text-stone-700">{e.institution}</span></span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-extrabold text-stone-900 uppercase tracking-wider mb-3 border-b border-stone-200 pb-2">Acreditaciones y Cursos</h4>
                  <ul className="space-y-3 font-semibold text-stone-550">
                    {doctor.certifications.map((c, idx) => (
                      <li key={idx} className="flex gap-2 items-start">
                        <span className="text-teal-600">★</span>
                        <span>{c.name} ({c.institution})</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>
            </div>

            {/* Profile Image card and Stats (5 cols) */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <FadeUp className="relative bg-white p-4 rounded-3xl border border-stone-200/40 shadow-sm w-full max-w-sm">
                <div className="w-full h-80 bg-stone-50 rounded-2xl flex items-center justify-center text-stone-400 text-4xl relative overflow-hidden border border-stone-200/50">
                  <div className="absolute w-36 h-36 rounded-full bg-teal-500/10 blur-xl animate-pulse" />
                  🧠
                </div>
                <div className="absolute -bottom-6 -right-6 bg-stone-900 text-white p-6 rounded-2xl shadow-lg flex flex-col justify-center items-center text-center border border-stone-800">
                  <span className="text-2xl font-black text-teal-400">+1,000</span>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-stone-300">Sesiones Realizadas</span>
                </div>
              </FadeUp>
            </div>

          </div>
        </div>
      </section>

      {/* ─── TESTIMONIOS SECTION ─── */}
      <section className="py-24 max-w-7xl mx-auto px-6 relative">
        <div className="absolute top-10 left-10 w-[200px] h-[200px] rounded-full blur-[80px] -z-10 glow-bubble-teal pointer-events-none" />

        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-teal-700 font-extrabold text-xs uppercase tracking-widest mb-3 inline-block">Testimonios Reales</span>
          <h2 className="text-3xl md:text-4xl font-black text-stone-900 tracking-tight mb-5">Experiencias en el Acompañamiento</h2>
          <p className="text-stone-500 text-xs sm:text-sm leading-relaxed">
            La confianza, seguridad y confidencialidad son la base de cada sesión de psicoterapia. Conoce la opinión de consultantes que han transitado por este proceso.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {doctor.testimonials?.map((t) => (
            <FadeUp key={t.id} className="bg-white rounded-2xl p-8 border border-stone-200/40 shadow-xs flex flex-col justify-between hover:border-teal-500/20 transition-all">
              <div>
                <div className="flex items-center gap-1 mb-4 text-amber-500">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <FaStar key={i} size={13} />
                  ))}
                </div>
                <p className="text-stone-600 italic text-xs leading-relaxed mb-6">
                  "{t.text}"
                </p>
              </div>

              <div className="flex justify-between items-center border-t border-stone-100 pt-4 text-[10px]">
                <span className="font-extrabold text-stone-900">{t.patientName}</span>
                <span className="text-stone-400 font-bold">{t.date}</span>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ─── INVESTMENT & FAQ SECTION ─── */}
      <section className="py-24 bg-stone-100 border-t border-stone-200/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Cost & Investment (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <span className="text-teal-700 font-extrabold text-xs uppercase tracking-widest mb-3 inline-block">Inversión y Métodos</span>
                <h2 className="text-3xl font-black text-stone-900 tracking-tight mb-6">Costo de Sesiones y Promociones</h2>
                <p className="text-stone-500 text-xs leading-relaxed mb-8">
                  Creemos en facilitar el acceso al cuidado emocional continuo. Ofrecemos tarifas justas por sesión individual y paquetes promocionales para procesos estables.
                </p>

                <h4 className="font-extrabold text-[10px] uppercase tracking-wider text-stone-400 mb-4">Métodos de Pago Aceptados</h4>
                <div className="flex flex-wrap gap-2 mb-8">
                  {doctor.paymentMethods.map((pm, idx) => (
                    <span key={idx} className="bg-white px-3 py-1.5 rounded-full border border-stone-200/60 font-semibold text-stone-600 text-[10px] shadow-xs">
                      {pm}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-stone-900 text-white p-6 rounded-3xl border border-stone-850 flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-[10px] font-extrabold text-teal-400 uppercase tracking-widest block mb-1">Sesión Primera Vez</span>
                    <span className="text-2xl font-black">${doctor.consultationPrice} MXN</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold text-amber-400 uppercase tracking-widest block mb-1">Sesiones Subsecuentes</span>
                    <span className="text-2xl font-black">$500 MXN</span>
                  </div>
                </div>
                <div className="border-t border-stone-800 pt-3">
                  <span className="text-[10px] font-bold text-teal-300 block">Descuento de Proceso:</span>
                  <p className="text-xs text-stone-400">Paquete promocional de <strong>3 sesiones por $1,000 MXN</strong> (ideal para dar continuidad).</p>
                </div>
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="w-full bg-teal-600 hover:bg-teal-700 text-center text-white font-bold text-xs py-3 rounded-xl transition-all shadow-md active:scale-95 duration-150 uppercase tracking-wider mt-2">
                  Agendar por WhatsApp
                </a>
              </div>
            </div>

            {/* FAQ's List (7 cols) */}
            <div className="lg:col-span-7">
              <h3 className="text-xl font-black text-stone-900 mb-6 border-b border-stone-200 pb-3">Preguntas Frecuentes</h3>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-xl border border-stone-200/30">
                  <h4 className="font-extrabold text-stone-900 mb-2 text-xs sm:text-sm">¿Cómo sé si necesito terapia o asesoría de sesión única?</h4>
                  <p className="text-stone-550 text-xs leading-relaxed">
                    Si experimentas un malestar continuo que afecta tu vida diaria o un patrón que deseas sanar a fondo, te recomendamos psicoterapia continua. Si tienes un dilema de vida inmediato, una toma de decisión crucial o una duda puntual, puedes optar por una asesoría de sesión única.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-stone-200/30">
                  <h4 className="font-extrabold text-stone-900 mb-2 text-xs sm:text-sm">¿Cuánto dura y con qué frecuencia son las sesiones?</h4>
                  <p className="text-stone-550 text-xs leading-relaxed">
                    Las sesiones de psicoterapia individual y regulación emocional tienen una duración de 50 a 60 minutos. Lo habitual es comenzar con una frecuencia semanal para asentar las primeras bases del proceso y, conforme hay avances, espaciarlas a quincenales.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-stone-200/30">
                  <h4 className="font-extrabold text-stone-900 mb-2 text-xs sm:text-sm">¿Qué es el Eneagrama y cómo se asocia al perfil vocacional?</h4>
                  <p className="text-stone-550 text-xs leading-relaxed">
                    El Eneagrama es un robusto mapa de personalidad que clasifica 9 estilos de comportamiento, motivaciones profundas y miedos básicos. En la orientación vocacional (Fase Raíces), nos sirve para identificar tu esencia innata y entender tus tendencias de aprendizaje, previniendo que elijas una carrera basándote en expectativas ajenas.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
