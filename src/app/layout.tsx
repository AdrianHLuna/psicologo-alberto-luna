import type { Metadata } from "next";
import "./globals.css";
import FloatingButtons from "@/components/FloatingButtons";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { doctor } from "@/data/doctor";

export const metadata: Metadata = {
  title: `${doctor.name} | ${doctor.specialistTitle} en ${doctor.city}`,
  description: doctor.bio.substring(0, 155) + "...",
  keywords: [
    `Psicólogo en Tuxtla Gutiérrez`,
    `Psicólogo clínico en Chiapas`,
    `Orientación Vocacional Tuxtla`,
    `Terapia Cognitivo-Conductual Chiapas`,
    `Método Raíces y Alas`,
    `Sentido de Vida psicólogo`,
    `Eneagrama de la personalidad`
  ],
  openGraph: {
    title: `${doctor.name} | ${doctor.specialistTitle} en Tuxtla Gutiérrez`,
    description: doctor.bio.substring(0, 155) + "...",
    url: "http://localhost:3021",
    siteName: doctor.name,
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({
  children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="antialiased flex flex-col min-h-screen bg-stone-50 text-stone-900 selection:bg-teal-600/20 selection:text-stone-900">
        <GoogleAnalytics />
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
