import Link from "next/link";
import Image from "next/image";
import { doctor } from "@/data/doctor";
import { diseases } from "@/data/diseases";
import { services } from "@/data/services";
import { symptoms } from "@/data/symptoms";
import { FaMapMarkerAlt, FaPhone, FaWhatsapp, FaGlobe, FaCcVisa, FaCcMastercard, FaCcAmex, FaBrain } from "react-icons/fa";

export default function Footer() {
  const whatsappUrl = `https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`;

  // Get first 5 items to keep it clean
  const limitedDiseases = diseases.slice(0, 5);
  const limitedServices = services.slice(0, 5);
  const limitedSymptoms = symptoms.slice(0, 5);

  return (
    <footer className="bg-stone-900 text-stone-400 pt-20 pb-12 border-t border-teal-800/20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Asymmetrical Grid Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-stone-800">
          
          {/* Main info (5 cols) */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-stone-800">
                <Image
                  src="/logo-2.jpeg"
                  alt={doctor.name}
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div>
                <span className="inline-flex items-center gap-1.5 bg-teal-500/10 border border-teal-500/30 text-teal-400 text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-md mb-1">
                  {doctor.specialty}
                </span>
                <h3 className="text-white text-lg font-black tracking-tight">{doctor.name}</h3>
              </div>
            </div>
            <p className="text-stone-400 text-sm mb-6 max-w-sm leading-relaxed">
              Egresado de la UNAM. Especialista en psicoterapia individual para adolescentes y adultos, orientación vocacional y sentido de vida con enfoque cognitivo-conductual.
            </p>
            <div className="flex flex-col gap-3.5 text-sm">
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-white transition">
                <FaWhatsapp className="text-teal-400 text-lg animate-pulse" />
                <span>WhatsApp: <strong className="text-stone-300 font-bold">{doctor.whatsapp}</strong></span>
              </a>
              <a href={`tel:${doctor.phone}`} className="flex items-center gap-3 hover:text-white transition">
                <FaPhone className="text-teal-400 text-base" />
                <span>Llamadas: <strong className="text-stone-300 font-bold">{doctor.phone}</strong></span>
              </a>
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-teal-400 text-lg mt-0.5 flex-shrink-0" />
                <span>{doctor.address}, {doctor.city}, {doctor.state}</span>
              </div>
            </div>
          </div>

          {/* Quick links columns (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
            
            {/* Trastornos */}
            <div>
              <h4 className="text-white text-xs font-black uppercase tracking-widest mb-6">Trastornos</h4>
              <ul className="flex flex-col gap-3.5 text-sm">
                {limitedDiseases.map(d => (
                  <li key={d.id}>
                    <Link href={`/enfermedades/${d.slug}`} className="hover:text-teal-400 transition-colors">
                      {d.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/enfermedades" className="text-teal-400 font-bold text-xs flex items-center gap-1 hover:text-teal-300">
                    Ver todos &rarr;
                  </Link>
                </li>
              </ul>
            </div>

            {/* Servicios */}
            <div>
              <h4 className="text-white text-xs font-black uppercase tracking-widest mb-6">Servicios</h4>
              <ul className="flex flex-col gap-3.5 text-sm">
                {limitedServices.map(s => (
                  <li key={s.id}>
                    <Link href={`/servicios/${s.slug}`} className="hover:text-teal-400 transition-colors">
                      {s.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/servicios" className="text-teal-400 font-bold text-xs flex items-center gap-1 hover:text-teal-300">
                    Ver todos &rarr;
                  </Link>
                </li>
              </ul>
            </div>

            {/* Síntomas e Info */}
            <div>
              <h4 className="text-white text-xs font-black uppercase tracking-widest mb-6">Síntomas</h4>
              <ul className="flex flex-col gap-3.5 text-sm mb-6">
                {limitedSymptoms.map(sym => (
                  <li key={sym.id}>
                    <Link href={`/sintomas/${sym.slug}`} className="hover:text-teal-400 transition-colors">
                      {sym.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/sintomas" className="text-teal-400 font-bold text-xs flex items-center gap-1 hover:text-teal-300">
                    Ver todos &rarr;
                  </Link>
                </li>
              </ul>
              <h4 className="text-white text-xs font-black uppercase tracking-widest mb-4">Legal</h4>
              <ul className="flex flex-col gap-2.5 text-sm">
                <li>
                  <Link href="/aviso-de-privacidad" className="hover:text-stone-300 transition-colors">
                    Aviso de Privacidad
                  </Link>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Payment Methods & Location Info */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-6 border-b border-stone-800">
          <div className="flex flex-col items-center md:items-start gap-2">
            <h4 className="text-stone-300 font-bold text-xs tracking-wider uppercase">Métodos de Pago</h4>
            <div className="flex items-center gap-3.5 text-stone-500">
              <FaCcVisa size={28} className="hover:text-stone-400 transition" />
              <FaCcMastercard size={28} className="hover:text-stone-400 transition" />
              <FaCcAmex size={28} className="hover:text-stone-400 transition" />
              <span className="text-[10px] bg-stone-800 border border-stone-700 text-stone-300 px-2 py-0.5 rounded">
                Transferencia
              </span>
              <span className="text-[10px] bg-stone-800 border border-stone-700 text-stone-300 px-2 py-0.5 rounded">
                Efectivo
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end gap-1 text-center md:text-right">
            <span className="text-stone-400 text-xs flex items-center gap-1.5">
              <FaGlobe className="text-teal-500" /> Colonia Residencial Hacienda, Tuxtla Gutiérrez, Chis.
            </span>
            <span className="text-[10px] text-stone-500">
              Sesiones presenciales en Tuxtla y sesiones online a todo México.
            </span>
          </div>
        </div>

        {/* Disclaimer / Nota de salud mental */}
        <div className="py-6 text-center border-b border-stone-850">
          <p className="text-[11px] text-stone-500 italic max-w-3xl mx-auto leading-relaxed">
            <strong>Descargo de responsabilidad médica y psicológica:</strong> Toda la información provista en este sitio web tiene únicamente fines educativos y divulgativos sobre salud mental. No debe considerarse en ningún caso como sustituto de un diagnóstico clínico, psicoterapia, orientación especializada o tratamiento médico. Si estás experimentando una situación de crisis grave o ideación suicida, por favor acude de inmediato a los servicios de emergencia de tu localidad o comunícate a la línea de ayuda de salud mental de tu país.
          </p>
        </div>

        {/* Lower Regulatory details & Copyright */}
        <div className="pt-8 text-center text-stone-500 text-[11px] sm:text-xs flex flex-col gap-2.5">
          <p className="font-semibold text-stone-400 tracking-wide">
            Cédula Profesional Licenciatura en Psicología: {doctor.cedula} | Egresado de la Universidad Nacional Autónoma de México
          </p>
          <p>© {new Date().getFullYear()} {doctor.name}. Todos los derechos reservados.</p>
        </div>

      </div>
    </footer>
  );
}
