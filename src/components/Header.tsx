"use client";

import Link from "next/link";
import Image from "next/image";
import { doctor } from "@/data/doctor";
import { useState } from "react";
import { FaBars, FaTimes, FaWhatsapp, FaPhone } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappUrl = `https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`;

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md shadow-sm border-b border-stone-100">
      {/* Lower License Strip - slate with teal accent */}
      <div className="w-full bg-stone-900 text-stone-300 text-[10px] sm:text-xs py-2 px-6 font-medium tracking-wide">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex flex-wrap gap-x-4 justify-center items-center">
            <span className="text-teal-400 font-semibold">Licenciatura en Psicología</span>
            <span className="hidden md:inline text-stone-600">|</span>
            <span>Cédula Profesional: <strong className="text-white">{doctor.cedula}</strong></span>
            <span className="hidden md:inline text-stone-600">|</span>
            <span>UNAM</span>
          </div>
          <div className="flex gap-4">
            <a href={`tel:${doctor.phone}`} className="hover:text-white transition flex items-center gap-1.5 text-stone-300 font-medium">
              <FaPhone size={10} className="text-teal-400" /> Tel: {doctor.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-xl overflow-hidden shrink-0 border border-stone-200">
            <Image
              src="/logo-1.jpeg"
              alt={doctor.name}
              fill
              sizes="40px"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-base md:text-lg font-extrabold text-stone-800 leading-none tracking-tight">
              {doctor.name}
            </span>
            <span className="text-[9px] md:text-[10px] font-bold text-amber-600 uppercase tracking-widest mt-1">
              {doctor.specialistTitle}
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-8 font-bold text-stone-600">
          <Link href="/" className="hover:text-teal-700 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-teal-600 hover:after:w-full after:transition-all">
            Inicio
          </Link>
          <Link href="/enfermedades" className="hover:text-teal-700 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-teal-600 hover:after:w-full after:transition-all">
            Trastornos
          </Link>
          <Link href="/servicios" className="hover:text-teal-700 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-teal-600 hover:after:w-full after:transition-all">
            Servicios
          </Link>
          <Link href="/sintomas" className="hover:text-teal-700 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-teal-600 hover:after:w-full after:transition-all">
            Síntomas
          </Link>
          <Link href="/contacto" className="hover:text-teal-700 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-teal-600 hover:after:w-full after:transition-all">
            Contacto
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="hidden sm:flex items-center gap-2 bg-teal-600 text-white px-5 py-2.5 rounded-xl font-bold hover:bg-teal-700 transition shadow-md shadow-teal-700/10 active:scale-95 duration-150">
            <FaWhatsapp size={14} className="text-teal-100" /> Agendar Sesión
          </a>

          {/* Mobile Toggle */}
          <button aria-label="Menu" className="lg:hidden text-stone-800 hover:text-teal-600 p-1" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-stone-100 p-6 flex flex-col gap-4 font-bold text-stone-800 shadow-xl">
          <Link href="/" onClick={() => setIsOpen(false)} className="py-2 border-b border-stone-100 hover:text-teal-600 transition">Inicio</Link>
          <Link href="/enfermedades" onClick={() => setIsOpen(false)} className="py-2 border-b border-stone-100 hover:text-teal-600 transition">Trastornos</Link>
          <Link href="/servicios" onClick={() => setIsOpen(false)} className="py-2 border-b border-stone-100 hover:text-teal-600 transition">Servicios</Link>
          <Link href="/sintomas" onClick={() => setIsOpen(false)} className="py-2 border-b border-stone-100 hover:text-teal-600 transition">Síntomas</Link>
          <Link href="/contacto" onClick={() => setIsOpen(false)} className="py-2 border-b border-stone-100 hover:text-teal-600 transition">Contacto</Link>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-2 flex items-center justify-center gap-2 bg-teal-600 text-white px-5 py-3 rounded-xl font-bold">
            <FaWhatsapp size={18} /> Agendar Sesión
          </a>
        </div>
      )}
    </header>
  );
}
