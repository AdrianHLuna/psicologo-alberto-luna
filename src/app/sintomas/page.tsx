import Link from "next/link";
import { symptoms } from "@/data/symptoms";
import { doctor } from "@/data/doctor";
import Breadcrumbs from "@/components/Breadcrumbs";
import { FadeUp } from "@/components/Animations";
import { FaInfoCircle, FaBrain } from "react-icons/fa";
import StructuredData from "@/components/StructuredData";

export const metadata = {
  title: `¿Cuándo Buscar Apoyo? Síntomas y Señales de Alerta | ${doctor.name}`,
  description: `Aprende a identificar señales de alerta en salud mental y orientación profesional: crisis de identidad, procrastinación, baja autoestima e insomnio.`,
  keywords: ["Señales de alerta psicología", "Cuándo ir al psicólogo", "Crisis vocacional Tuxtla", "Insomnio ansiedad Tuxtla"]
};

export default function SymptomsPage() {
  // WebPage schema adapted for psychology
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Síntomas y Señales de Alerta Psicológica",
    "description": "Lista de señales y motivos de consulta que requieren evaluación psicoterapéutica y orientación clínica."
  };

  return (
    <div className="bg-stone-50 min-h-screen py-12 px-6 psychology-flow-bg">
      <StructuredData data={schema} />
      <div className="max-w-4xl mx-auto">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Síntomas", href: "/sintomas" }]} />

        <div className="mt-8 mb-16 text-center">
          <span className="text-teal-700 font-extrabold text-xs uppercase tracking-widest mb-3 inline-block">Autoevaluación Emocional</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight mb-5">Síntomas y Señales de Alerta</h1>
          <p className="text-stone-500 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
            Identificar a tiempo lo que sentimos, pensamos y cómo actuamos en la vida diaria es fundamental para buscar la guía adecuada. Conoce más sobre cada señal.
          </p>
        </div>

        <div className="space-y-6">
          {symptoms.map((s, idx) => (
            <FadeUp key={s.id} className="bg-white border border-stone-200/50 p-6 sm:p-8 rounded-3xl shadow-xs hover:border-teal-500/20 transition-all">
              <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0 text-xl font-bold border border-teal-100">
                    <FaBrain />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold text-amber-600 uppercase tracking-widest block mb-1">Motivo de Consulta</span>
                    <h2 className="text-xl font-black text-stone-900 mb-2">{s.name}</h2>
                    <p className="text-stone-550 text-xs leading-relaxed">
                      {s.description}
                    </p>
                  </div>
                </div>

                <Link href={`/sintomas/${s.slug}`} className="w-full sm:w-auto shrink-0 inline-flex justify-center items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs px-5 py-3 rounded-xl transition mt-4 sm:mt-0 shadow-sm shadow-teal-500/5">
                  <FaInfoCircle size={12} /> Analizar Caso
                </Link>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </div>
  );
}
