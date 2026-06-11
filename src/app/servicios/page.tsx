import Link from "next/link";
import { services } from "@/data/services";
import { doctor } from "@/data/doctor";
import Breadcrumbs from "@/components/Breadcrumbs";
import { FadeUp } from "@/components/Animations";
import { FaBrain, FaArrowRight } from "react-icons/fa";
import StructuredData from "@/components/StructuredData";

export const metadata = {
  title: `Servicios de Apoyo Psicoterapéutico y Vocacional | ${doctor.name}`,
  description: `Explora nuestros servicios en Tuxtla Gutiérrez: psicoterapia individual para adolescentes y adultos, diagnóstico vocacional Raíces y Alas, y talleres.`,
  keywords: ["Psicoterapia Tuxtla", "Orientación vocacional Chiapas", "Talleres de desarrollo personal", "Beto Luna servicios"]
};

export default function ServicesPage() {
  // WebPage schema adapted for psychology
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Servicios de Apoyo y Acompañamiento",
    "description": "Portafolio de servicios de psicoterapia, orientación vocacional profunda y entrenamiento en regulación emocional en Tuxtla Gutiérrez."
  };

  return (
    <div className="bg-stone-50 min-h-screen py-12 px-6 psychology-flow-bg">
      <StructuredData data={schema} />
      <div className="max-w-4xl mx-auto">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Servicios", href: "/servicios" }]} />

        <div className="mt-8 mb-16 text-center">
          <span className="text-teal-700 font-extrabold text-xs uppercase tracking-widest mb-3 inline-block">Portafolio de Acompañamiento</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight mb-5">Servicios Psicoterapéuticos y Vocacionales</h1>
          <p className="text-stone-500 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
            Procesos éticos, interactivos y con base científica para guiarte en tu camino de autoconocimiento y bienestar emocional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s) => {
            let label = "Psicoterapia";
            if (s.type === "ambulatorio") label = "Talleres y Grupos";
            if (s.type === "hospitalario") label = "Conferencias y Empresas";

            return (
              <FadeUp key={s.id} className="bg-white border border-stone-200/50 p-6 rounded-3xl shadow-xs flex flex-col justify-between hover:border-teal-500/20 transition-all">
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mb-4 text-lg border border-teal-100">
                    <FaBrain />
                  </div>
                  <span className="text-[10px] font-extrabold text-teal-600 uppercase tracking-widest block mb-2">{label}</span>
                  <h2 className="text-lg font-bold text-stone-900 mb-2 leading-tight">{s.name}</h2>
                  <p className="text-stone-500 text-xs leading-relaxed mb-6">
                    {s.description}
                  </p>
                </div>

                <div className="border-t border-stone-100 pt-4 mt-6">
                  <Link href={`/servicios/${s.slug}`} className="w-full inline-flex justify-center items-center gap-1.5 bg-teal-600 text-white font-bold text-xs px-4 py-2.5 rounded-xl hover:bg-teal-700 transition-colors">
                    Ver Detalles <FaArrowRight size={8} />
                  </Link>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </div>
  );
}
