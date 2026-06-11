import Link from "next/link";
import { notFound } from "next/navigation";
import { diseases } from "@/data/diseases";
import { doctor } from "@/data/doctor";
import Breadcrumbs from "@/components/Breadcrumbs";
import { FadeUp } from "@/components/Animations";
import { FaBrain, FaListUl, FaShieldAlt, FaQuestionCircle, FaArrowLeft, FaWhatsapp } from "react-icons/fa";
import StructuredData from "@/components/StructuredData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return diseases.map((d) => ({
    slug: d.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const disease = diseases.find((d) => d.slug === slug);
  if (!disease) return {};

  return {
    title: disease.seo.title,
    description: disease.seo.description,
    keywords: disease.seo.keywords,
  };
}

export default async function DiseaseDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const d = diseases.find((disease) => disease.slug === slug);
  if (!d) notFound();

  const whatsappUrl = `https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}?text=Hola%20Psic%C3%B3logo%20Alberto%2C%20quisiera%20agendar%20una%20consulta%20para%20el%20tratamiento%20de%3A%20${encodeURIComponent(d.name)}`;

  // MedicalCondition Schema adapted for Psychology
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    "name": d.name,
    "alternateName": d.technicalName,
    "description": d.description,
    "possibleTreatment": d.treatments.map((t) => ({
      "@type": "MedicalTherapy",
      "name": t
    })),
    "signOrSymptom": d.symptoms.map((s) => ({
      "@type": "MedicalSignOrSymptom",
      "name": s
    }))
  };

  return (
    <div className="bg-stone-50 min-h-screen py-12 px-6 psychology-flow-bg">
      <StructuredData data={schema} />
      <div className="max-w-4xl mx-auto">
        <Breadcrumbs 
          items={[
            { label: "Inicio", href: "/" }, 
            { label: "Trastornos", href: "/enfermedades" },
            { label: d.name, href: `/enfermedades/${d.slug}` }
          ]} 
        />

        <div className="mt-8 mb-12">
          <Link href="/enfermedades" className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 hover:text-teal-800 transition mb-6">
            <FaArrowLeft size={10} /> Volver a trastornos
          </Link>
          <span className="text-[10px] font-extrabold text-teal-600 bg-teal-50 px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">
            {d.technicalName}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-stone-900 tracking-tight leading-tight mt-2">
            {d.name}
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Content (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            {/* Description & Stats */}
            <FadeUp className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200/50 shadow-xs">
              <h2 className="text-xl font-bold text-stone-900 mb-4 flex items-center gap-2 border-b border-stone-100 pb-3">
                <FaBrain className="text-teal-600" /> Abordaje Clínico del Trastorno
              </h2>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-6">
                {d.description}
              </p>
              {d.mexicoStats && (
                <div className="bg-stone-900 text-stone-300 p-5 rounded-2xl text-[11px] sm:text-xs leading-relaxed font-semibold">
                  <span className="font-extrabold text-white block mb-1 text-xs uppercase tracking-wider">Salud Mental en México:</span>
                  {d.mexicoStats}
                </div>
              )}
            </FadeUp>

            {/* Symptoms & Causes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <FadeUp className="bg-white p-6 rounded-3xl border border-stone-200/50 shadow-xs">
                <h3 className="font-bold text-stone-900 mb-4 flex items-center gap-2 border-b border-stone-100 pb-3 text-sm sm:text-base">
                  <FaListUl className="text-amber-600" /> Señales Comunes
                </h3>
                <ul className="space-y-3">
                  {d.symptoms.map((s, i) => (
                    <li key={i} className="text-stone-600 text-[11px] sm:text-xs leading-relaxed flex items-start gap-2">
                      <span className="text-amber-600 mt-1 shrink-0">•</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </FadeUp>

              <FadeUp className="bg-white p-6 rounded-3xl border border-stone-200/50 shadow-xs">
                <h3 className="font-bold text-stone-900 mb-4 flex items-center gap-2 border-b border-stone-100 pb-3 text-sm sm:text-base">
                  <FaShieldAlt className="text-teal-600" /> Factores de Origen
                </h3>
                <ul className="space-y-3">
                  {d.causes.map((c, i) => (
                    <li key={i} className="text-stone-600 text-[11px] sm:text-xs leading-relaxed flex items-start gap-2">
                      <span className="text-teal-600 mt-1 shrink-0">•</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </FadeUp>
            </div>

            {/* Treatments & Complications */}
            <FadeUp className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200/50 shadow-xs">
              <h2 className="text-xl font-bold text-stone-900 mb-4 flex items-center gap-2 border-b border-stone-100 pb-3">
                <FaBrain className="text-teal-600" /> Esquema de Intervención Psicoterapéutica
              </h2>
              <div className="space-y-4 mb-6">
                {d.treatments.map((t, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <span className="w-5 h-5 rounded-full bg-teal-50 text-teal-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 border border-teal-100">
                      {i + 1}
                    </span>
                    <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">{t}</p>
                  </div>
                ))}
              </div>

              <h4 className="font-extrabold text-stone-900 text-[10px] uppercase tracking-wider mb-3 mt-8">Posibles Consecuencias de Postergar la Ayuda</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {d.complications.map((c, i) => (
                  <div key={i} className="bg-stone-50 border border-stone-100 p-3 rounded-xl text-[11px] text-stone-600 leading-normal font-semibold">
                    ⚠️ {c}
                  </div>
                ))}
              </div>
            </FadeUp>

            {/* FAQs */}
            <FadeUp className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200/50 shadow-xs">
              <h2 className="text-xl font-bold text-stone-900 mb-6 flex items-center gap-2 border-b border-stone-100 pb-3">
                <FaQuestionCircle className="text-teal-600" /> Preguntas Frecuentes
              </h2>
              <div className="space-y-4">
                {d.faqs.map((faq, i) => (
                  <div key={i} className="border-b border-stone-100 pb-4 last:border-0 last:pb-0">
                    <h4 className="font-extrabold text-stone-950 mb-2 text-xs sm:text-sm">¿{faq.question}</h4>
                    <p className="text-stone-500 text-xs leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>

          {/* Sidebar CTA & Info (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Consultation Booking card */}
            <FadeUp className="bg-stone-900 text-white p-6 rounded-3xl border border-stone-800 shadow-md">
              <span className="text-[10px] font-extrabold text-teal-400 uppercase tracking-widest block mb-2">Agendar Sesión</span>
              <h3 className="text-lg font-black leading-tight mb-4">¿Te identificas con estas señales o deseas iniciar un proceso?</h3>
              <p className="text-stone-400 text-xs leading-relaxed mb-6">
                Recibe un acompañamiento ético y clínico bajo confidencialidad profesional absoluta en Tuxtla Gutiérrez.
              </p>

              <div className="space-y-4 border-t border-stone-800 pt-4 mb-6">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-stone-400">Primera sesión:</span>
                  <span className="text-white">${doctor.consultationPrice} MXN</span>
                </div>
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-stone-400">Modalidad:</span>
                  <span className="text-teal-400">Presencial / Online</span>
                </div>
              </div>

              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="w-full inline-flex justify-center items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs py-3.5 rounded-xl transition shadow-lg active:scale-95 duration-150 uppercase tracking-wider">
                <FaWhatsapp size={14} /> Contactar Psicoterapeuta
              </a>
            </FadeUp>

            {/* Quick stats / Licenses */}
            <div className="bg-white p-6 rounded-3xl border border-stone-200/50 shadow-xs text-xs">
              <h4 className="font-extrabold text-stone-900 uppercase tracking-wider mb-4 border-b border-stone-150 pb-2">Información del Especialista</h4>
              <ul className="space-y-3 font-semibold text-stone-500">
                <li className="flex justify-between">
                  <span>Psicólogo:</span>
                  <span className="font-extrabold text-stone-800">{doctor.name}</span>
                </li>
                <li className="flex justify-between">
                  <span>Cédula Profesional:</span>
                  <span className="font-bold text-stone-700">{doctor.cedula}</span>
                </li>
                <li className="flex justify-between">
                  <span>Institución:</span>
                  <span className="font-bold text-stone-700">UNAM</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
