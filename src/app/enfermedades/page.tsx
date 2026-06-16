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

  const categories = [
    {
      name: "1. Trastornos del Estado de Ánimo y Afectivos",
      description: "Fluctuaciones o desbalances persistentes en el humor, la motivación y la energía afectiva.",
      items: diseases.filter(d => ["depresion", "distimia", "trastorno-bipolar"].includes(d.id))
    },
    {
      name: "2. Trastornos de Ansiedad",
      description: "Estados de alerta intensos, temores específicos o generalizados que interfieren con la autonomía personal.",
      items: diseases.filter(d => ["ansiedad", "panico", "fobia-social", "ansiedad-separacion"].includes(d.id))
    },
    {
      name: "3. Trastornos Asociados al Estrés y Trauma",
      description: "Respuestas emocionales y fisiológicas detonadas por eventos traumáticos o periodos severos de transición.",
      items: diseases.filter(d => ["estres", "adaptacion"].includes(d.id))
    },
    {
      name: "4. Trastornos del Comportamiento y de la Personalidad",
      description: "Patrones de conducta, pensamiento y relaciones interpersonales rígidos que causan malestar significativo.",
      items: diseases.filter(d => ["toc", "tlp", "personalidad-evitativa"].includes(d.id))
    },
    {
      name: "5. Trastornos del Desarrollo y de la Conducta Alimentaria",
      description: "Condiciones del neurodesarrollo o desregulaciones afectivas volcadas a la conducta alimentaria y somática.",
      items: diseases.filter(d => ["tdah", "atracon", "somatomorfo"].includes(d.id))
    }
  ];

  return (
    <div className="bg-stone-50 min-h-screen py-12 px-6 psychology-flow-bg">
      <StructuredData data={schema} />
      <div className="max-w-4xl mx-auto">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Trastornos", href: "/enfermedades" }]} />

        <div className="mt-8 mb-16 text-center">
          <span className="text-teal-700 font-extrabold text-xs uppercase tracking-widest mb-3 inline-block">Áreas de Consulta</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight mb-5">Trastornos Clínicos y Acompañamiento</h1>
          <p className="text-stone-500 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
            Brindamos un espacio confidencial y de sustento empírico para acompañar los diferentes motivos de consulta. Nuestro enfoque no busca etiquetar de manera inamovible, sino comprender y dotar de herramientas prácticas.
          </p>
        </div>

        <div className="space-y-16">
          {categories.map((category, catIdx) => (
            <div key={catIdx} className="space-y-6">
              <div className="border-b border-stone-200 pb-4">
                <h2 className="text-2xl font-black text-stone-900">{category.name}</h2>
                <p className="text-stone-500 text-xs mt-1 font-semibold">{category.description}</p>
              </div>

              <div className="space-y-6">
                {category.items.map((d) => (
                  <FadeUp key={d.id} className="bg-white border border-stone-200/50 p-6 sm:p-8 rounded-3xl shadow-xs hover:border-teal-500/20 transition-all">
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                      <div className="flex gap-4 items-start w-full">
                        <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0 text-xl font-bold border border-teal-100">
                          <FaBrain />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="text-[10px] font-extrabold text-teal-600 uppercase tracking-widest block mb-1">Acompañamiento Clínico</span>
                          <h3 className="text-xl font-black text-stone-900 mb-2">{d.name}</h3>
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
          ))}
        </div>

        {/* Disclaimer Section */}
        <div className="mt-16 bg-stone-100 border border-stone-200/60 p-6 rounded-3xl text-center">
          <p className="text-stone-550 text-[11px] leading-relaxed max-w-2xl mx-auto font-semibold">
            <strong>Nota de Descargo (Disclaimer):</strong> La información contenida en esta página es puramente informativa, de carácter educativo y de divulgación sobre salud mental. No sustituye en ningún caso el diagnóstico, evaluación clínica o tratamiento profesional por parte de un psicoterapeuta o médico psiquiatra calificado. Si experimentas malestar emocional severo o crisis de salud mental, te sugerimos agendar una consulta profesional para realizar una evaluación adecuada.
          </p>
        </div>
      </div>
    </div>
  );
}
