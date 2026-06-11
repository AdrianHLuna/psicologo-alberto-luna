import Link from "next/link";
import { notFound } from "next/navigation";
import { symptoms } from "@/data/symptoms";
import { doctor } from "@/data/doctor";
import Breadcrumbs from "@/components/Breadcrumbs";
import { FadeUp } from "@/components/Animations";
import { FaExclamationTriangle, FaClipboardList, FaBrain, FaArrowLeft, FaWhatsapp } from "react-icons/fa";
import StructuredData from "@/components/StructuredData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return symptoms.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const symptom = symptoms.find((s) => s.slug === slug);
  if (!symptom) return {};

  return {
    title: symptom.seo.title,
    description: symptom.seo.description,
    keywords: symptom.seo.keywords,
  };
}

export default async function SymptomDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const s = symptoms.find((symptom) => symptom.slug === slug);
  if (!s) notFound();

  const whatsappUrl = `https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}?text=Hola%20Psic%C3%B3logo%20Alberto%2C%20quisiera%20agendar%20una%20consulta%2520para%2520tratar%2520el%2520motivo%2520de%3A%2520${encodeURIComponent(s.name)}`;

  // MedicalSymptom Schema adapted for psychology
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalSymptom",
    "name": s.name,
    "description": s.description,
    "possibleCause": s.causes.map((c) => ({
      "@type": "MedicalCause",
      "name": c
    }))
  };

  return (
    <div className="bg-stone-50 min-h-screen py-12 px-6 psychology-flow-bg">
      <StructuredData data={schema} />
      <div className="max-w-4xl mx-auto">
        <Breadcrumbs 
          items={[
            { label: "Inicio", href: "/" }, 
            { label: "Síntomas", href: "/sintomas" },
            { label: s.name, href: `/sintomas/${s.slug}` }
          ]} 
        />

        <div className="mt-8 mb-12">
          <Link href="/sintomas" className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 hover:text-teal-800 transition mb-6">
            <FaArrowLeft size={10} /> Volver a síntomas
          </Link>
          <span className="text-[10px] font-extrabold text-teal-600 bg-teal-50 px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">
            Motivo de Consulta Psicológica
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-stone-900 tracking-tight leading-tight mt-2">
            {s.name}
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Content (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            {/* Description */}
            <FadeUp className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200/50 shadow-xs">
              <h2 className="text-xl font-bold text-stone-900 mb-4 flex items-center gap-2 border-b border-stone-100 pb-3">
                <FaExclamationTriangle className="text-teal-600" /> ¿En qué consiste esta señal?
              </h2>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                {s.description}
              </p>
            </FadeUp>

            {/* Why consult & causes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <FadeUp className="bg-white p-6 rounded-3xl border border-stone-200/50 shadow-xs">
                <h3 className="font-bold text-stone-900 mb-4 flex items-center gap-2 border-b border-stone-100 pb-3 text-sm sm:text-base">
                  <FaClipboardList className="text-teal-600" /> Factores Desencadenantes
                </h3>
                <ul className="space-y-3">
                  {s.causes.map((c, i) => (
                    <li key={i} className="text-stone-600 text-[11px] sm:text-xs leading-relaxed flex items-start gap-2">
                      <span className="text-teal-600 mt-1 shrink-0">•</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </FadeUp>

              <FadeUp className="bg-white p-6 rounded-3xl border border-stone-200/50 shadow-xs">
                <h3 className="font-bold text-stone-900 mb-4 flex items-center gap-2 border-b border-stone-100 pb-3 text-sm sm:text-base">
                  <FaBrain className="text-amber-600" /> Abordaje en Consulta
                </h3>
                <p className="text-stone-600 text-[11px] sm:text-xs leading-relaxed font-semibold">
                  {s.whyConsult}
                </p>
              </FadeUp>
            </div>
          </div>

          {/* Sidebar CTA & Details (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <FadeUp className="bg-stone-900 text-white p-6 rounded-3xl border border-stone-800 shadow-md">
              <span className="text-[10px] font-extrabold text-teal-400 uppercase tracking-widest block mb-2">Acompañamiento</span>
              <h3 className="text-lg font-black leading-tight mb-4">¿Estás experimentando esto de forma recurrente?</h3>
              <p className="text-stone-400 text-xs leading-relaxed mb-6 font-semibold">
                No postergues tu cuidado emocional. Iniciar un espacio seguro de autoconocimiento te ayuda a estructurar alternativas y sanar.
              </p>

              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="w-full inline-flex justify-center items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs py-3.5 rounded-xl transition shadow-lg active:scale-95 duration-150 uppercase tracking-wider">
                <FaWhatsapp size={14} /> Agendar Sesión
              </a>
            </FadeUp>
          </div>
        </div>
      </div>
    </div>
  );
}
