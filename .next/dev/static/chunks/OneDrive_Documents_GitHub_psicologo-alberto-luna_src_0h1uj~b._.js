(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/data/doctor.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "doctor",
    ()=>doctor
]);
const doctor = {
    name: "Psicólogo Alberto Luna",
    title: "Psicólogo Clínico",
    specialty: "Psicología",
    specialistTitle: "Psicoterapeuta y Orientador Vocacional",
    subspecialty: "Terapia Cognitivo-Conductual, Eneagrama y Sentido de Vida",
    cedula: "15674825",
    phone: "5635862471",
    whatsapp: "9615798647",
    email: "psicologobetoluna@gmail.com",
    address: "Avenida Querétaro N. 28, Colonia Residencial Hacienda (entre Taxco y Guanajuato)",
    city: "Tuxtla Gutiérrez",
    state: "Chiapas",
    country: "México",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Avenida+Quer%C3%A9taro+N.+28,+Residencial+Hacienda,+Tuxtla+Guti%C3%A9rrez,+Chiapas",
    consultationPrice: 400,
    paymentMethods: [
        "Efectivo",
        "Transferencia Bancaria",
        "Tarjeta de Débito",
        "Tarjeta de Crédito"
    ],
    insurances: [
        "Reembolso con Aseguradoras Privadas"
    ],
    schedule: "Lunes a Viernes: 09:00 - 13:00 y 16:00 - 21:00 | Sábado: 09:00 - 15:00",
    photo: "/images/doctor.jpg",
    bio: "El Psicólogo Alberto Luna (Beto Luna) es egresado de la Universidad Nacional Autónoma de México (UNAM). Cuenta con más de 6 años de experiencia en el ámbito de la psicoterapia individual, habiendo acompañado a más de 300 pacientes en procesos clínicos de gestión emocional, ansiedad y depresión. Asimismo, cuenta con una sólida trayectoria en el área de la orientación profesional, con más de 500 evaluaciones vocacionales realizadas bajo su metodología patentada 'Raíces y Alas'. Su enfoque terapéutico es dinámico, analítico y compasivo, proporcionando herramientas concretas para reestructurar pensamientos y sanar las heridas del alma.",
    philosophy: "El proceso de terapia no busca juzgar tus decisiones, sino brindarte la claridad y las herramientas necesarias para comprender su origen, sanar tus heridas y construir un proyecto de vida con significado y libertad.",
    experience: [
        {
            year: "2020 - Presente",
            title: "Psicólogo Clínico y Facilitador Vocacional",
            description: "Consulta psicoterapéutica privada para jóvenes y adultos. Creador y aplicador del Método 'Raíces y Alas'."
        },
        {
            year: "2018 - 2020",
            title: "Terapeuta y Orientador Escolar",
            description: "Aplicación de evaluaciones psicométricas, talleres de manejo de ansiedad y prevención de burnout."
        },
        {
            year: "2016 - 2018",
            title: "Facilitador de Grupos y Conferencias",
            description: "Ponencias sobre salud mental en la era digital e inteligencia emocional aplicadas en instituciones educativas."
        }
    ],
    certifications: [
        {
            name: "Licenciatura en Psicología por la Universidad Nacional Autónoma de México",
            institution: "UNAM",
            year: "2018"
        },
        {
            name: "Especialista en Evaluación Vocacional y Análisis de Personalidad",
            institution: "Asociación Mexicana de Orientación Vocacional",
            year: "2019"
        },
        {
            name: "Entrenamiento Avanzado en Terapia Cognitivo-Conductual y Eneagrama Clínico",
            institution: "Centro de Salud Mental y Desarrollo Humano",
            year: "2021"
        }
    ],
    education: [
        {
            degree: "Licenciado en Psicología",
            institution: "Universidad Nacional Autónoma de México (UNAM)",
            year: "2018"
        }
    ],
    testimonials: [
        {
            id: "t1",
            patientName: "Víctor H. Sánchez",
            rating: 5,
            text: "Al inicio me sentía muy mal conmigo mismo, lleno de culpa y confusión. Busqué ayuda porque necesitaba comprender mis acciones y salir de ese círculo. Con la guía de Beto aprendí a mirarme con compasión, entendí que mis decisiones venían de vacíos emocionales no atendidos y que sanar es posible. Hoy me siento más tranquilo, con una mirada más amable hacia mi historia y en paz.",
            sourceUrl: "https://www.doctoralia.com.mx/jorge-alberto-hernandez-luna/psicologo/tuxtla-gutierrez",
            date: "2026-03-10"
        },
        {
            id: "t2",
            patientName: "J.B.",
            rating: 5,
            text: "Antes del proceso cargaba con muchas situaciones que me sobrepasaban y no tenía con quién hablar por miedo al rechazo. Aprendí a conocerme mejor y a trabajar en mis emociones. Lo que más me gustó fue el dinamismo de las sesiones: analizamos películas y situaciones reales de forma muy práctica.",
            sourceUrl: "https://www.doctoralia.com.mx/jorge-alberto-hernandez-luna/psicologo/tuxtla-gutierrez",
            date: "2026-04-18"
        },
        {
            id: "t3",
            patientName: "D.Z.",
            rating: 5,
            text: "Recomiendo ampliamente al Psicólogo Beto Luna. Posee una empatía excepcional con las heridas del alma y una gran dedicación al crecimiento de sus pacientes. Sus herramientas y dinámicas personalizadas te ayudan a comprender profundamente tus pensamientos.",
            sourceUrl: "https://www.doctoralia.com.mx/jorge-alberto-hernandez-luna/psicologo/tuxtla-gutierrez",
            date: "2026-05-05"
        }
    ],
    ga4Id: "G-PSICO2026"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/lib/analytics.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "trackEvent",
    ()=>trackEvent,
    "trackScrollTo",
    ()=>trackScrollTo
]);
function trackEvent(eventName, params) {
    if (("TURBOPACK compile-time value", "object") !== "undefined" && window.gtag) {
        window.gtag("event", eventName, params);
    }
}
function trackScrollTo(sectionName) {
    trackEvent(`scroll_${sectionName}`, {
        section: sectionName
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/components/FloatingButtons.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$src$2f$data$2f$doctor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/data/doctor.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$src$2f$lib$2f$analytics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/lib/analytics.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
const FloatingButtons = ()=>{
    const cleanWhatsapp = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$src$2f$data$2f$doctor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doctor"].whatsapp.replace(/\D/g, "");
    const whatsappLink = `https://wa.me/${cleanWhatsapp}`;
    const phoneLink = `tel:${__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$src$2f$data$2f$doctor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doctor"].phone}`;
    const buttonBaseClass = "w-[50px] h-[50px] rounded-full text-white flex justify-center items-center shadow-lg hover:scale-115 transition-transform duration-300 relative z-50";
    const pulseClass = "absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping -z-10";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed right-5 bottom-5 flex flex-col gap-4 z-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                target: "_blank",
                href: whatsappLink,
                rel: "noreferrer",
                "aria-label": "Contactar por WhatsApp",
                className: `${buttonBaseClass} bg-[#25D366]`,
                onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$src$2f$lib$2f$analytics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackEvent"])("clic_whatsapp", {
                        source: "floating"
                    }),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `${pulseClass} bg-[#25D366]`
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/components/FloatingButtons.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaWhatsapp"], {
                        size: 26
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/components/FloatingButtons.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/components/FloatingButtons.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: phoneLink,
                "aria-label": "Llamar al psicólogo",
                className: `${buttonBaseClass} bg-teal-600`,
                onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$src$2f$lib$2f$analytics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackEvent"])("clic_llamar", {
                        source: "floating"
                    }),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `${pulseClass} bg-teal-600`
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/components/FloatingButtons.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaPhone"], {
                        size: 18
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/components/FloatingButtons.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/components/FloatingButtons.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/components/FloatingButtons.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = FloatingButtons;
const __TURBOPACK__default__export__ = FloatingButtons;
var _c;
__turbopack_context__.k.register(_c, "FloatingButtons");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/components/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$src$2f$data$2f$doctor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/data/doctor.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Header() {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const whatsappUrl = `https://wa.me/${__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$src$2f$data$2f$doctor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doctor"].whatsapp.replace(/\D/g, "")}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md shadow-sm border-b border-stone-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full bg-stone-900 text-stone-300 text-[10px] sm:text-xs py-2 px-6 font-medium tracking-wide",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-x-4 justify-center items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-teal-400 font-semibold",
                                    children: "Licenciatura en Psicología"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/components/Header.tsx",
                                    lineNumber: 18,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "hidden md:inline text-stone-600",
                                    children: "|"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/components/Header.tsx",
                                    lineNumber: 19,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        "Cédula Profesional: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            className: "text-white",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$src$2f$data$2f$doctor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doctor"].cedula
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/components/Header.tsx",
                                            lineNumber: 20,
                                            columnNumber: 39
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/components/Header.tsx",
                                    lineNumber: 20,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "hidden md:inline text-stone-600",
                                    children: "|"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/components/Header.tsx",
                                    lineNumber: 21,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "UNAM"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/components/Header.tsx",
                                    lineNumber: 22,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/components/Header.tsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: `tel:${__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$src$2f$data$2f$doctor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doctor"].phone}`,
                                className: "hover:text-white transition flex items-center gap-1.5 text-stone-300 font-medium",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaPhone"], {
                                        size: 10,
                                        className: "text-teal-400"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/components/Header.tsx",
                                        lineNumber: 26,
                                        columnNumber: 15
                                    }, this),
                                    " Tel: ",
                                    __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$src$2f$data$2f$doctor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doctor"].phone
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/components/Header.tsx",
                                lineNumber: 25,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/components/Header.tsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/components/Header.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/components/Header.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-6 py-4 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "flex flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-lg md:text-xl font-extrabold text-stone-800 leading-none tracking-tight flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-teal-600",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaBrain"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/components/Header.tsx",
                                            lineNumber: 36,
                                            columnNumber: 45
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/components/Header.tsx",
                                        lineNumber: 36,
                                        columnNumber: 13
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$src$2f$data$2f$doctor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doctor"].name
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/components/Header.tsx",
                                lineNumber: 35,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] md:text-xs font-bold text-amber-600 uppercase tracking-widest mt-1.5",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$src$2f$data$2f$doctor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doctor"].specialistTitle
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/components/Header.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/components/Header.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "hidden lg:flex items-center gap-8 font-bold text-stone-600",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "hover:text-teal-700 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-teal-600 hover:after:w-full after:transition-all",
                                children: "Inicio"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/components/Header.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/enfermedades",
                                className: "hover:text-teal-700 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-teal-600 hover:after:w-full after:transition-all",
                                children: "Trastornos"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/components/Header.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/servicios",
                                className: "hover:text-teal-700 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-teal-600 hover:after:w-full after:transition-all",
                                children: "Servicios"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/components/Header.tsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/sintomas",
                                className: "hover:text-teal-700 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-teal-600 hover:after:w-full after:transition-all",
                                children: "Síntomas"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/components/Header.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/contacto",
                                className: "hover:text-teal-700 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-teal-600 hover:after:w-full after:transition-all",
                                children: "Contacto"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/components/Header.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/components/Header.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: whatsappUrl,
                                target: "_blank",
                                rel: "noreferrer",
                                className: "hidden sm:flex items-center gap-2 bg-teal-600 text-white px-5 py-2.5 rounded-xl font-bold hover:bg-teal-700 transition shadow-md shadow-teal-700/10 active:scale-95 duration-150",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaWhatsapp"], {
                                        size: 14,
                                        className: "text-teal-100"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/components/Header.tsx",
                                        lineNumber: 65,
                                        columnNumber: 13
                                    }, this),
                                    " Agendar Sesión"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/components/Header.tsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                "aria-label": "Menu",
                                className: "lg:hidden text-stone-800 hover:text-teal-600 p-1",
                                onClick: ()=>setIsOpen(!isOpen),
                                children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaTimes"], {
                                    size: 22
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/components/Header.tsx",
                                    lineNumber: 70,
                                    columnNumber: 23
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaBars"], {
                                    size: 22
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/components/Header.tsx",
                                    lineNumber: 70,
                                    columnNumber: 47
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/components/Header.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/components/Header.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/components/Header.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lg:hidden bg-white border-t border-stone-100 p-6 flex flex-col gap-4 font-bold text-stone-800 shadow-xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        onClick: ()=>setIsOpen(false),
                        className: "py-2 border-b border-stone-100 hover:text-teal-600 transition",
                        children: "Inicio"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/components/Header.tsx",
                        lineNumber: 78,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/enfermedades",
                        onClick: ()=>setIsOpen(false),
                        className: "py-2 border-b border-stone-100 hover:text-teal-600 transition",
                        children: "Trastornos"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/components/Header.tsx",
                        lineNumber: 79,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/servicios",
                        onClick: ()=>setIsOpen(false),
                        className: "py-2 border-b border-stone-100 hover:text-teal-600 transition",
                        children: "Servicios"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/components/Header.tsx",
                        lineNumber: 80,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/sintomas",
                        onClick: ()=>setIsOpen(false),
                        className: "py-2 border-b border-stone-100 hover:text-teal-600 transition",
                        children: "Síntomas"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/components/Header.tsx",
                        lineNumber: 81,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/contacto",
                        onClick: ()=>setIsOpen(false),
                        className: "py-2 border-b border-stone-100 hover:text-teal-600 transition",
                        children: "Contacto"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/components/Header.tsx",
                        lineNumber: 82,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: whatsappUrl,
                        target: "_blank",
                        rel: "noreferrer",
                        className: "mt-2 flex items-center justify-center gap-2 bg-teal-600 text-white px-5 py-3 rounded-xl font-bold",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaWhatsapp"], {
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/components/Header.tsx",
                                lineNumber: 84,
                                columnNumber: 13
                            }, this),
                            " Agendar Sesión"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/components/Header.tsx",
                        lineNumber: 83,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/components/Header.tsx",
                lineNumber: 77,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/components/Header.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_s(Header, "+sus0Lb0ewKHdwiUhiTAJFoFyQ0=");
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=OneDrive_Documents_GitHub_psicologo-alberto-luna_src_0h1uj~b._.js.map