import Link from "next/link";
import { doctor } from "@/data/doctor";

export default function NotFound() {
  return (
    <div className="bg-stone-50 min-h-[70vh] flex flex-col justify-center items-center text-center px-6">
      <span className="text-6xl mb-4 select-none animate-float-slow">🧠</span>
      <h1 className="text-4xl font-black text-stone-900 tracking-tight mb-2">404 - Página No Encontrada</h1>
      <p className="text-stone-600 text-xs sm:text-sm max-w-md mb-8">
        Lo sentimos, la página que buscas no existe o ha sido movida. Si necesitas orientación vocacional o acompañamiento terapéutico, contáctanos.
      </p>
      <div className="flex gap-4">
        <Link href="/" className="bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs px-6 py-3 rounded-xl transition shadow-md">
          Volver al Inicio
        </Link>
        <a href={`https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`} target="_blank" rel="noreferrer" className="bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs px-6 py-3 rounded-xl transition border border-stone-700">
          Contacto Directo
        </a>
      </div>
    </div>
  );
}
