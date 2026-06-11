import { doctor } from "@/data/doctor";
import Breadcrumbs from "@/components/Breadcrumbs";
import { FadeUp } from "@/components/Animations";
import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaCalendarAlt, FaCreditCard } from "react-icons/fa";
import StructuredData from "@/components/StructuredData";

export const metadata = {
  title: `Contacto y Ubicación | ${doctor.name}`,
  description: `Agenda tu sesión de psicoterapia o proceso vocacional en Tuxtla Gutiérrez. Horarios, teléfono de contacto y ubicación de consultorio.`,
  keywords: ["Contacto psicólogo Tuxtla", "Cita Beto Luna psicólogo", "Orientación vocacional Tuxtla", "Dirección Beto Luna"]
};

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`;

  // ContactPage Schema
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Página de Contacto",
    "description": `Detalles de ubicación, números de teléfono y métodos de contacto para las sesiones con el ${doctor.name}.`
  };

  return (
    <div className="bg-stone-50 min-h-screen py-12 px-6 psychology-flow-bg">
      <StructuredData data={schema} />
      <div className="max-w-4xl mx-auto">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Contacto", href: "/contacto" }]} />

        <div className="mt-8 mb-16 text-center">
          <span className="text-teal-700 font-extrabold text-xs uppercase tracking-widest mb-3 inline-block">Agendar Sesión</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight mb-5">Contacto y Ubicación</h1>
          <p className="text-stone-500 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
            Atención profesional en Tuxtla Gutiérrez. Contáctanos por vía telefónica o WhatsApp para iniciar tu proceso.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          {/* Contact Details (5 cols) */}
          <div className="md:col-span-5 space-y-6 flex flex-col justify-between">
            <FadeUp className="bg-white p-6 rounded-3xl border border-stone-200/50 shadow-xs space-y-6">
              <h2 className="text-lg font-bold text-stone-900 border-b border-stone-100 pb-3">Medios Directos</h2>
              
              <div className="space-y-4 text-xs">
                <div className="flex gap-3 items-center">
                  <FaPhone className="text-teal-600 shrink-0" />
                  <div>
                    <span className="text-stone-400 block font-bold">Llamadas:</span>
                    <a href={`tel:${doctor.phone}`} className="text-stone-700 font-bold hover:text-teal-700 transition">{doctor.phone}</a>
                  </div>
                </div>

                <div className="flex gap-3 items-center">
                  <FaWhatsapp className="text-emerald-500 shrink-0" />
                  <div>
                    <span className="text-stone-400 block font-bold">WhatsApp Citas:</span>
                    <a href={whatsappUrl} target="_blank" rel="noreferrer" className="text-stone-750 font-bold hover:text-emerald-600 transition">{doctor.whatsapp}</a>
                  </div>
                </div>

                <div className="flex gap-3 items-center">
                  <FaEnvelope className="text-teal-600 shrink-0" />
                  <div>
                    <span className="text-stone-400 block font-bold">Email de Contacto:</span>
                    <a href={`mailto:${doctor.email}`} className="text-stone-700 font-bold hover:text-teal-700 transition">{doctor.email}</a>
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Schedule & Payments */}
            <FadeUp className="bg-white p-6 rounded-3xl border border-stone-200/50 shadow-xs space-y-4">
              <div className="flex gap-3 items-start">
                <FaCalendarAlt className="text-teal-600 mt-1 shrink-0" />
                <div>
                  <h3 className="font-bold text-stone-900 text-xs sm:text-sm">Horarios de Atención</h3>
                  <p className="text-stone-500 text-[11px] sm:text-xs mt-1 leading-normal font-semibold">
                    {doctor.schedule}
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start pt-3 border-t border-stone-100">
                <FaCreditCard className="text-teal-600 mt-1 shrink-0" />
                <div>
                  <h3 className="font-bold text-stone-900 text-xs sm:text-sm">Métodos de Pago y Tarifas</h3>
                  <p className="text-stone-500 text-[11px] sm:text-xs mt-1 leading-normal font-semibold">
                    {doctor.paymentMethods.join(", ")}. <br />
                    Primera vez: $400 | Subsecuente: $500 | Paquete de 3 sesiones: $1,000 MXN.
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* Address & Maps (7 cols) */}
          <div className="md:col-span-7 flex flex-col">
            <FadeUp className="bg-white p-6 rounded-3xl border border-stone-200/50 shadow-xs flex-grow flex flex-col justify-between space-y-6">
              <div>
                <h2 className="text-lg font-bold text-stone-900 border-b border-stone-100 pb-3 flex items-center gap-2">
                  <FaMapMarkerAlt className="text-teal-600" /> Consultorio Psicológico
                </h2>
                <p className="text-stone-600 text-xs leading-relaxed mt-4 font-semibold">
                  {doctor.address}, {doctor.city}, {doctor.state}, {doctor.country}.
                </p>
              </div>

              {/* Google Maps Embed */}
              <div className="h-80 w-full rounded-2xl overflow-hidden border border-stone-200/80 shadow-xs relative group min-h-[320px]">
                <iframe
                  src="https://maps.google.com/maps?q=Avenida%20Quer%C3%A9taro%20N.%2028%2C%20Residencial%20Hacienda%2C%20Tuxtla%20Guti%C3%A9rrez%2C%20Chiapas&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación Consultorio Psicólogo Alberto Luna"
                ></iframe>
                <div className="absolute bottom-4 right-4 z-10">
                  <a
                    href={doctor.googleMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-stone-900/90 backdrop-blur-sm hover:bg-stone-900 text-white font-bold text-[10px] px-4 py-2 rounded-xl shadow-md border border-stone-700 transition active:scale-95 block uppercase tracking-wider"
                  >
                    Ver en Grande
                  </a>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </div>
  );
}
