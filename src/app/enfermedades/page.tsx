import Link from "next/link";
import { diseases } from "@/data/diseases";
import { doctor } from "@/data/doctor";
import Breadcrumbs from "@/components/Breadcrumbs";
import { FadeUp } from "@/components/Animations";
import { FaBrain, FaInfoCircle } from "react-icons/fa";
import StructuredData from "@/components/StructuredData";

export const metadata = {
  title: `Trastornos Clínicos y Motivos de Consulta | ${doctor.name}`,
  description: `Conoce los trastornos clínicos y motivos de consulta que atendemos en Tuxtla Gutiérrez: ansiedad, depresión, TOC, TEPT y TDAH en adultos.`,
  keywords: ["Trastornos psicológicos Tuxtla", "Ansiedad depresión Chiapas", "Acompañamiento clínico", "Beto Luna psicólogo"]
};

export default function DiseasesPage() {
  // MedicalWebPage schema adapted for psychology
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Trastornos Clínicos Tratados",
    "description": "Lista de trastornos y motivos de consulta psicológica atendidos con psicoterapia cognitiva y científica en Tuxtla Gutiérrez."
  };

  return (
    <div className="bg-stone-50 min-h-screen py-12 px-6 psychology-flow-bg">
      <StructuredData data={schema} />
      <div className="max-w-4xl mx-auto">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Trastornos", href: "/enfermedades" }]} />

        <div className="mt-8 mb-16 text-center">
          <span className="text-teal-700 font-extrabold text-xs uppercase tracking-widest mb-3 inline-block">Áreas de Consulta</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight mb-5">Trastornos Clínicos y Acompañamiento</h1>
          <p className="text-stone-500 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
            Brindamos un espacio confidencial y de sustento empírico para tratar picos de ansiedad, depresión crónica, estrés por trauma, desorganización por TDAH y conductas obsesivas.
          </p>
        </div>

        <div className="space-y-6">
          {diseases.map((d, idx) => (
            <FadeUp key={d.id} className="bg-white border border-stone-200/50 p-6 sm:p-8 rounded-3xl shadow-xs hover:border-teal-500/20 transition-all">
              <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0 text-xl font-bold border border-teal-100">
                    <FaBrain />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold text-teal-600 uppercase tracking-widest block mb-1">Acompañamiento Clínico</span>
                    <h2 className="text-xl font-black text-stone-900 mb-2">{d.name}</h2>
                    <p className="text-stone-500 text-xs leading-relaxed mb-4">
                      {d.description.substring(0, 200)}...
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {d.symptoms.slice(0, 3).map((sym, i) => (
                        <span key={i} className="bg-stone-50 border border-stone-150 text-stone-600 text-[10px] px-2.5 py-0.5 rounded-md font-semibold">
                          • {sym}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <Link href={`/enfermedades/${d.slug}`} className="w-full sm:w-auto shrink-0 inline-flex justify-center items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs px-5 py-3 rounded-xl transition mt-4 sm:mt-0 shadow-sm shadow-teal-500/5">
                  <FaInfoCircle size={12} /> Ver Abordaje
                </Link>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </div>
  );
}
