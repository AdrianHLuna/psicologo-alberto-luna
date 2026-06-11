import Breadcrumbs from "@/components/Breadcrumbs";
import { doctor } from "@/data/doctor";

export const metadata = {
  title: `Aviso de Privacidad | ${doctor.name}`,
  description: `Aviso de privacidad sobre el manejo confidencial de expedientes clínicos y datos personales en el consultorio del Psicólogo Alberto Luna.`
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-stone-50 min-h-screen py-12 px-6 psychology-flow-bg text-xs">
      <div className="max-w-3xl mx-auto bg-white border border-stone-200/50 p-8 sm:p-12 rounded-3xl shadow-xs">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Aviso de Privacidad", href: "/aviso-de-privacidad" }]} />

        <h1 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight mt-8 mb-6 border-b border-stone-100 pb-3">
          Aviso de Privacidad Simplificado
        </h1>

        <div className="space-y-6 text-stone-600 leading-relaxed font-semibold">
          <p>
            El consultorio del <strong>Psicólogo Alberto Luna</strong>, ubicado en {doctor.address}, es responsable de recabar sus datos personales y sensibles, del uso que se le dé a los mismos y de su protección, de conformidad con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (México).
          </p>

          <h3 className="font-extrabold text-stone-900 text-sm uppercase tracking-wider">1. Finalidades del Tratamiento de Datos</h3>
          <p>
            Su información personal y los datos sensibles que nos proporcione relacionados con su estado emocional, antecedentes familiares, historial psicoterapéutico y evaluaciones vocacionales, serán utilizados exclusivamente para:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Prestación de servicios profesionales de psicoterapia individual y orientación vocacional.</li>
            <li>Integración y actualización de su expediente clínico psicológico confidencial.</li>
            <li>Facturación electrónica de honorarios profesionales.</li>
            <li>Seguimiento de su avance terapéutico general.</li>
          </ul>

          <h3 className="font-extrabold text-stone-900 text-sm uppercase tracking-wider">2. Confidencialidad y Secreto Profesional</h3>
          <p>
            En virtud del secreto profesional y de la confidencialidad que rige la práctica clínica de la psicología, nos comprometemos a mantener el resguardo absoluto sobre sus datos sensibles e historial de sesiones. Sus datos no serán transferidos a terceros sin su previo consentimiento explícito por escrito, salvo las excepciones de ley (ej. riesgo inminente de vida para sí mismo o para terceros).
          </p>

          <h3 className="font-extrabold text-stone-900 text-sm uppercase tracking-wider">3. Derechos ARCO</h3>
          <p>
            Usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse al tratamiento de sus datos personales. Para ejercer cualquiera de estos derechos ARCO, deberá enviar una solicitud por escrito dirigida a la dirección de correo electrónico <strong>{doctor.email}</strong>, o manifestarlo directamente en nuestro espacio de consulta.
          </p>

          <p className="text-stone-400 text-[10px] mt-12 border-t border-stone-100 pt-6">
            Última actualización: 11 de junio de 2026.
          </p>
        </div>
      </div>
    </div>
  );
}
