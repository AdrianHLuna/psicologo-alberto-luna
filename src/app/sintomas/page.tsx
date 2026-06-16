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

  const categories = [
    {
      name: "1. Crisis de Identidad y Transiciones de Vida",
      description: "Manejo de transiciones difíciles, redefinición de metas profesionales y procesamiento de pérdidas.",
      items: symptoms.filter(s => ["orientacion-vocacional", "crisis-cuarto-vida", "duelo-y-perdidas"].includes(s.id))
    },
    {
      name: "2. Relaciones Interpersonales y Vínculos",
      description: "Resolución de conflictos de pareja o familiares, asertividad en límites y superación del aislamiento.",
      items: symptoms.filter(s => ["rupturas-amorosas", "conflictos-familiares", "soledad-cronica"].includes(s.id))
    },
    {
      name: "3. Rendimiento, Trabajo y Presión Social",
      description: "Herramientas contra el estrés laboral agudo, parálisis por perfeccionismo y organización del tiempo.",
      items: symptoms.filter(s => ["burnout", "procrastinacion-extrema", "autoexigencia-destructiva"].includes(s.id))
    },
    {
      name: "4. Gestión Emocional y Autoestima",
      description: "Reconstrucción del autoconcepto, aceptación corporal y canalización saludable de la frustración e ira.",
      items: symptoms.filter(s => ["baja-autoestima-e-inseguridad", "inestabilidad-emocional", "gestion-ira"].includes(s.id))
    },
    {
      name: "5. Hábitos y Estilo de Vida",
      description: "Desconexión de estímulos digitales adictivos y reentrenamiento para un descanso nocturno reparador.",
      items: symptoms.filter(s => ["dependencia-pantallas", "insomnio-y-ansiedad"].includes(s.id))
    }
  ];

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

        <div className="space-y-16">
          {categories.map((category, catIdx) => (
            <div key={catIdx} className="space-y-6">
              <div className="border-b border-stone-200 pb-4">
                <h2 className="text-2xl font-black text-stone-900">{category.name}</h2>
                <p className="text-stone-500 text-xs mt-1 font-semibold">{category.description}</p>
              </div>

              <div className="space-y-6">
                {category.items.map((s) => (
                  <FadeUp key={s.id} className="bg-white border border-stone-200/50 p-6 sm:p-8 rounded-3xl shadow-xs hover:border-teal-500/20 transition-all">
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                      <div className="flex gap-4 items-start w-full">
                        <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0 text-xl font-bold border border-teal-100">
                          <FaBrain />
                        </div>
                        <div className="flex-1 min-w-0">
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
          ))}
        </div>

        {/* Disclaimer Section */}
        <div className="mt-16 bg-stone-100 border border-stone-200/60 p-6 rounded-3xl text-center">
          <p className="text-stone-550 text-[11px] leading-relaxed max-w-2xl mx-auto font-semibold">
            <strong>Nota de Descargo (Disclaimer):</strong> La información sobre motivos de consulta y señales de alerta es puramente educativa. No reemplaza un proceso formal de evaluación clínica. Si te sientes identificado con varias señales y deseas apoyo práctico, te invitamos a agendar una consulta profesional para analizar tu caso individualmente.
          </p>
        </div>
      </div>
    </div>
  );
}
