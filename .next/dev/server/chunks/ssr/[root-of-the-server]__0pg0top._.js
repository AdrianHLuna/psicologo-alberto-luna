module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/components/StructuredData.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StructuredData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function StructuredData({ data }) {
    const schemas = Array.isArray(data) ? data : [
        data
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: schemas.map((schema, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: {
                    __html: JSON.stringify(schema)
                }
            }, index, false, {
                fileName: "[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/components/StructuredData.tsx",
                lineNumber: 13,
                columnNumber: 9
            }, this))
    }, void 0, false);
}
}),
"[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/components/Breadcrumbs.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Breadcrumbs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$src$2f$components$2f$StructuredData$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/components/StructuredData.tsx [app-rsc] (ecmascript)");
;
;
;
function Breadcrumbs({ items }) {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "";
    const schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index)=>({
                "@type": "ListItem",
                position: index + 1,
                name: item.label,
                ...item.href ? {
                    item: `${baseUrl}${item.href}`
                } : {}
            }))
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$src$2f$components$2f$StructuredData$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                data: schema
            }, void 0, false, {
                fileName: "[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/components/Breadcrumbs.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                "aria-label": "Breadcrumb",
                className: "py-3 px-6 text-xs sm:text-sm text-teal-800 bg-stone-100/50 rounded-xl mb-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                    className: "flex flex-wrap items-center gap-1.5 font-medium",
                    children: items.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "flex items-center gap-1.5",
                            children: [
                                index > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    "aria-hidden": "true",
                                    className: "text-teal-400 font-normal",
                                    children: "/"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/components/Breadcrumbs.tsx",
                                    lineNumber: 34,
                                    columnNumber: 29
                                }, this),
                                item.href ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: item.href,
                                    className: "hover:text-teal-950 hover:underline transition-colors",
                                    children: item.label
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/components/Breadcrumbs.tsx",
                                    lineNumber: 36,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-stone-800 font-semibold",
                                    children: item.label
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/components/Breadcrumbs.tsx",
                                    lineNumber: 43,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/components/Breadcrumbs.tsx",
                            lineNumber: 33,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/components/Breadcrumbs.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/components/Breadcrumbs.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/components/Animations.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FadeUp",
    ()=>FadeUp,
    "StaggerContainer",
    ()=>StaggerContainer,
    "StaggerItem",
    ()=>StaggerItem
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const FadeUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call FadeUp() from the server but FadeUp is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/components/Animations.tsx <module evaluation>", "FadeUp");
const StaggerContainer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call StaggerContainer() from the server but StaggerContainer is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/components/Animations.tsx <module evaluation>", "StaggerContainer");
const StaggerItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call StaggerItem() from the server but StaggerItem is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/components/Animations.tsx <module evaluation>", "StaggerItem");
}),
"[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/components/Animations.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FadeUp",
    ()=>FadeUp,
    "StaggerContainer",
    ()=>StaggerContainer,
    "StaggerItem",
    ()=>StaggerItem
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const FadeUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call FadeUp() from the server but FadeUp is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/components/Animations.tsx", "FadeUp");
const StaggerContainer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call StaggerContainer() from the server but StaggerContainer is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/components/Animations.tsx", "StaggerContainer");
const StaggerItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call StaggerItem() from the server but StaggerItem is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/components/Animations.tsx", "StaggerItem");
}),
"[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/components/Animations.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$src$2f$components$2f$Animations$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/components/Animations.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$src$2f$components$2f$Animations$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/components/Animations.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$src$2f$components$2f$Animations$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/app/enfermedades/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DiseasesPage,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$src$2f$data$2f$diseases$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/data/diseases.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$src$2f$data$2f$doctor$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/data/doctor.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$src$2f$components$2f$Breadcrumbs$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/components/Breadcrumbs.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$src$2f$components$2f$Animations$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/components/Animations.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/node_modules/react-icons/fa/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$src$2f$components$2f$StructuredData$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/components/StructuredData.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
const metadata = {
    title: `Trastornos Clínicos y Motivos de Consulta | ${__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$src$2f$data$2f$doctor$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["doctor"].name}`,
    description: `Conoce los trastornos clínicos y motivos de consulta que atendemos en Tuxtla Gutiérrez: ansiedad, depresión, TOC, TEPT y TDAH en adultos.`,
    keywords: [
        "Trastornos psicológicos Tuxtla",
        "Ansiedad depresión Chiapas",
        "Acompañamiento clínico",
        "Beto Luna psicólogo"
    ]
};
function DiseasesPage() {
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
            items: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$src$2f$data$2f$diseases$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["diseases"].filter((d)=>[
                    "depresion",
                    "distimia",
                    "trastorno-bipolar"
                ].includes(d.id))
        },
        {
            name: "2. Trastornos de Ansiedad",
            description: "Estados de alerta intensos, temores específicos o generalizados que interfieren con la autonomía personal.",
            items: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$src$2f$data$2f$diseases$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["diseases"].filter((d)=>[
                    "ansiedad",
                    "panico",
                    "fobia-social",
                    "ansiedad-separacion"
                ].includes(d.id))
        },
        {
            name: "3. Trastornos Asociados al Estrés y Trauma",
            description: "Respuestas emocionales y fisiológicas detonadas por eventos traumáticos o periodos severos de transición.",
            items: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$src$2f$data$2f$diseases$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["diseases"].filter((d)=>[
                    "estres",
                    "adaptacion"
                ].includes(d.id))
        },
        {
            name: "4. Trastornos del Comportamiento y de la Personalidad",
            description: "Patrones de conducta, pensamiento y relaciones interpersonales rígidos que causan malestar significativo.",
            items: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$src$2f$data$2f$diseases$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["diseases"].filter((d)=>[
                    "toc",
                    "tlp",
                    "personalidad-evitativa"
                ].includes(d.id))
        },
        {
            name: "5. Trastornos del Desarrollo y de la Conducta Alimentaria",
            description: "Condiciones del neurodesarrollo o desregulaciones afectivas volcadas a la conducta alimentaria y somática.",
            items: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$src$2f$data$2f$diseases$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["diseases"].filter((d)=>[
                    "tdah",
                    "atracon",
                    "somatomorfo"
                ].includes(d.id))
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-stone-50 min-h-screen py-12 px-6 psychology-flow-bg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$src$2f$components$2f$StructuredData$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                data: schema
            }, void 0, false, {
                fileName: "[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/app/enfermedades/page.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-4xl mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$src$2f$components$2f$Breadcrumbs$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        items: [
                            {
                                label: "Inicio",
                                href: "/"
                            },
                            {
                                label: "Trastornos",
                                href: "/enfermedades"
                            }
                        ]
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/app/enfermedades/page.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-8 mb-16 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-teal-700 font-extrabold text-xs uppercase tracking-widest mb-3 inline-block",
                                children: "Áreas de Consulta"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/app/enfermedades/page.tsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight mb-5",
                                children: "Trastornos Clínicos y Acompañamiento"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/app/enfermedades/page.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-stone-500 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto",
                                children: "Brindamos un espacio confidencial y de sustento empírico para acompañar los diferentes motivos de consulta. Nuestro enfoque no busca etiquetar de manera inamovible, sino comprender y dotar de herramientas prácticas."
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/app/enfermedades/page.tsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/app/enfermedades/page.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-16",
                        children: categories.map((category, catIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border-b border-stone-200 pb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-2xl font-black text-stone-900",
                                                children: category.name
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/app/enfermedades/page.tsx",
                                                lineNumber: 70,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-stone-500 text-xs mt-1 font-semibold",
                                                children: category.description
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/app/enfermedades/page.tsx",
                                                lineNumber: 71,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/app/enfermedades/page.tsx",
                                        lineNumber: 69,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-6",
                                        children: category.items.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$src$2f$components$2f$Animations$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FadeUp"], {
                                                className: "bg-white border border-stone-200/50 p-6 sm:p-8 rounded-3xl shadow-xs hover:border-teal-500/20 transition-all",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col sm:flex-row justify-between items-start gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex gap-4 items-start w-full",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0 text-xl font-bold border border-teal-100",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FaBrain"], {}, void 0, false, {
                                                                        fileName: "[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/app/enfermedades/page.tsx",
                                                                        lineNumber: 80,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/app/enfermedades/page.tsx",
                                                                    lineNumber: 79,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex-1 min-w-0",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-[10px] font-extrabold text-teal-600 uppercase tracking-widest block mb-1",
                                                                            children: "Acompañamiento Clínico"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/app/enfermedades/page.tsx",
                                                                            lineNumber: 83,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                            className: "text-xl font-black text-stone-900 mb-2",
                                                                            children: d.name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/app/enfermedades/page.tsx",
                                                                            lineNumber: 84,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-stone-500 text-xs leading-relaxed mb-4",
                                                                            children: [
                                                                                d.description.substring(0, 200),
                                                                                "..."
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/app/enfermedades/page.tsx",
                                                                            lineNumber: 85,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex flex-wrap gap-2",
                                                                            children: d.symptoms.slice(0, 3).map((sym, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "bg-stone-50 border border-stone-150 text-stone-600 text-[10px] px-2.5 py-0.5 rounded-md font-semibold",
                                                                                    children: [
                                                                                        "• ",
                                                                                        sym
                                                                                    ]
                                                                                }, i, true, {
                                                                                    fileName: "[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/app/enfermedades/page.tsx",
                                                                                    lineNumber: 90,
                                                                                    columnNumber: 31
                                                                                }, this))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/app/enfermedades/page.tsx",
                                                                            lineNumber: 88,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/app/enfermedades/page.tsx",
                                                                    lineNumber: 82,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/app/enfermedades/page.tsx",
                                                            lineNumber: 78,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                            href: `/enfermedades/${d.slug}`,
                                                            className: "w-full sm:w-auto shrink-0 inline-flex justify-center items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs px-5 py-3 rounded-xl transition mt-4 sm:mt-0 shadow-sm shadow-teal-500/5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FaInfoCircle"], {
                                                                    size: 12
                                                                }, void 0, false, {
                                                                    fileName: "[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/app/enfermedades/page.tsx",
                                                                    lineNumber: 99,
                                                                    columnNumber: 25
                                                                }, this),
                                                                " Ver Abordaje"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/app/enfermedades/page.tsx",
                                                            lineNumber: 98,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/app/enfermedades/page.tsx",
                                                    lineNumber: 77,
                                                    columnNumber: 21
                                                }, this)
                                            }, d.id, false, {
                                                fileName: "[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/app/enfermedades/page.tsx",
                                                lineNumber: 76,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/app/enfermedades/page.tsx",
                                        lineNumber: 74,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, catIdx, true, {
                                fileName: "[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/app/enfermedades/page.tsx",
                                lineNumber: 68,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/app/enfermedades/page.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-16 bg-stone-100 border border-stone-200/60 p-6 rounded-3xl text-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-stone-550 text-[11px] leading-relaxed max-w-2xl mx-auto font-semibold",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$psicologo$2d$alberto$2d$luna$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Nota de Descargo (Disclaimer):"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/app/enfermedades/page.tsx",
                                    lineNumber: 112,
                                    columnNumber: 13
                                }, this),
                                " La información contenida en esta página es puramente informativa, de carácter educativo y de divulgación sobre salud mental. No sustituye en ningún caso el diagnóstico, evaluación clínica o tratamiento profesional por parte de un psicoterapeuta o médico psiquiatra calificado. Si experimentas malestar emocional severo o crisis de salud mental, te sugerimos agendar una consulta profesional para realizar una evaluación adecuada."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/app/enfermedades/page.tsx",
                            lineNumber: 111,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/app/enfermedades/page.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/app/enfermedades/page.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/app/enfermedades/page.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
}),
"[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/app/enfermedades/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/OneDrive/Documents/GitHub/psicologo-alberto-luna/src/app/enfermedades/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0pg0top._.js.map