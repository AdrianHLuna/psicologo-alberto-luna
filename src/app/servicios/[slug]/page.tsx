import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "@/data/services";
import { doctor } from "@/data/doctor";
import Breadcrumbs from "@/components/Breadcrumbs";
import { FadeUp } from "@/components/Animations";
import { FaBrain, FaCheckCircle, FaExclamationTriangle, FaArrowLeft, FaWhatsapp } from "react-icons/fa";
import StructuredData from "@/components/StructuredData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: service.seo.title,
    description: service.seo.description,
    keywords: service.seo.keywords,
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const s = services.find((service) => service.slug === slug);
  if (!s) notFound();

  const whatsappUrl = `https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}?text=Hola%20Psic%C3%B3logo%20Alberto%2C%20solicito%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20servicio%20de%3A%20${encodeURIComponent(s.name)}`;

  let label = "Sesión en Consultorio";
  if (s.type === "ambulatorio") label = "Taller Grupal / Vivencial";
  if (s.type === "hospitalario") label = "Conferencia / Ponencia Inspiracional";

  // WebPage Schema adapted for psychology services
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": s.name,
    "description": s.description,
    "provider": {
      "@type": "Psychologist",
      "name": doctor.name
    },
    "serviceOutput": s.benefits.join(", ")
  };

  return (
    <div className="bg-stone-50 min-h-screen py-12 px-6 psychology-flow-bg">
      <StructuredData data={schema} />
      <div className="max-w-4xl mx-auto">
        <Breadcrumbs 
          items={[
            { label: "Inicio", href: "/" }, 
            { label: "Servicios", href: "/servicios" },
            { label: s.name, href: `/servicios/${s.slug}` }
          ]} 
        />

        <div className="mt-8 mb-12">
          <Link href="/servicios" className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 hover:text-teal-800 transition mb-6">
            <FaArrowLeft size={10} /> Volver a servicios
          </Link>
          <span className="text-[10px] font-extrabold text-teal-600 bg-teal-50 px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">
            {label}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-stone-900 tracking-tight leading-tight mt-2">
            {s.name}
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Content (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            {/* Long Description */}
            <FadeUp className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200/50 shadow-xs">
              <h2 className="text-xl font-bold text-stone-900 mb-4 flex items-center gap-2 border-b border-stone-100 pb-3">
                <FaBrain className="text-teal-600" /> Descripción y Enfoque del Servicio
              </h2>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-4 whitespace-pre-line">
                {s.longDescription}
              </p>
            </FadeUp>

            {/* Benefits & Recommendations */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <FadeUp className="bg-white p-6 rounded-3xl border border-stone-200/50 shadow-xs">
                <h3 className="font-bold text-stone-900 mb-4 flex items-center gap-2 border-b border-stone-100 pb-3 text-sm sm:text-base">
                  <FaCheckCircle className="text-emerald-500 shrink-0" /> Objetivos Clave
                </h3>
                <ul className="space-y-3">
                  {s.benefits.map((b, i) => (
                    <li key={i} className="text-stone-600 text-[11px] sm:text-xs leading-relaxed flex items-start gap-2">
                      <FaCheckCircle className="text-emerald-500 mt-1 shrink-0 text-[10px]" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </FadeUp>

              <FadeUp className="bg-white p-6 rounded-3xl border border-stone-200/50 shadow-xs">
                <h3 className="font-bold text-stone-900 mb-4 flex items-center gap-2 border-b border-stone-100 pb-3 text-sm sm:text-base">
                  <FaExclamationTriangle className="text-teal-600 shrink-0" /> Pautas en el Proceso
                </h3>
                <ul className="space-y-3">
                  {s.postOpRecommendations.map((rec, i) => (
                    <li key={i} className="text-stone-600 text-[11px] sm:text-xs leading-relaxed flex items-start gap-2 font-semibold">
                      <span className="text-teal-600 mt-0.5 shrink-0">•</span>
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </FadeUp>
            </div>
          </div>

          {/* Sidebar CTA & Details (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <FadeUp className="bg-stone-900 text-white p-6 rounded-3xl border border-stone-800 shadow-md">
              <span className="text-[10px] font-extrabold text-teal-400 uppercase tracking-widest block mb-2">Costo del Proceso</span>
              <h3 className="text-2xl font-black text-white mb-2">{s.priceRange}</h3>
              <p className="text-stone-400 text-[10px] leading-relaxed mb-6 font-semibold">
                *Nota: Aceptamos pagos en efectivo y transferencia bancaria. Emitimos facturas de servicios profesionales.
              </p>

              <div className="space-y-3 border-t border-stone-800 pt-4 mb-6 text-xs">
                <div className="flex justify-between font-bold">
                  <span className="text-stone-400">Duración:</span>
                  <span className="text-white text-right max-w-[120px]">{s.duration}</span>
                </div>
              </div>

              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="w-full inline-flex justify-center items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs py-3.5 rounded-xl transition shadow-lg active:scale-95 duration-150 uppercase tracking-wider">
                <FaWhatsapp size={14} /> Solicitar Información
              </a>
            </FadeUp>
          </div>
        </div>
      </div>
    </div>
  );
}
