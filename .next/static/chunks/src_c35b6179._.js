(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/NavBar.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>NavBar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const navLinks = [
    {
        label: "About",
        href: "/about"
    },
    {
        label: "Companies",
        href: "/companies"
    },
    {
        label: "Events",
        href: "/events"
    },
    {
        label: "Get Involved",
        href: "/involved"
    }
];
const companiesList = [
    {
        name: "braseltontech.ai",
        id: "braseltontech-ai"
    }
];
function NavBar() {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [dropdownHovered, setDropdownHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isAdmin, setIsAdmin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const isDropdownOpen = open || hovered || dropdownHovered;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NavBar.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                setIsAdmin(!!localStorage.getItem("admin_token"));
            }
        }
    }["NavBar.useEffect"], []);
    function scrollToCompany(companyId) {
        // Try to scroll to the element, retrying if not found (for navigation from another page)
        let attempts = 0;
        const maxAttempts = 10;
        const delay = 120;
        function tryScroll() {
            const el = document.getElementById(companyId);
            if (el) {
                el.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
            } else if (attempts < maxAttempts) {
                attempts++;
                setTimeout(tryScroll, delay);
            }
        }
        tryScroll();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "w-full bg-white px-12 py-3 flex items-center justify-between font-sans relative z-40 sticky top-0 border-b border-blue-100",
        style: {
            fontFamily: 'Geist, Inter, Arial, sans-serif'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                whileHover: {
                    scale: 1.12
                },
                transition: {
                    duration: 0.1
                },
                className: "inline-block",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: "flex items-center text-2xl font-extrabold text-gray-800 tracking-tight",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/474663336_565692403086428_3697079815872425189_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=mDN4scbfWEAQ7kNvwFVE3IJ&_nc_oc=AdmKgYnMvGvu6mV4SL8euPdHrPe81fjegRdO2TEFRMt15rUlBlWkkKQgoUqS7f57spVcJcPel12qMlzOoL5n0UBI&_nc_zt=23&_nc_ht=scontent-atl3-1.xx&_nc_gid=kjZW6_usxnzxiu2JbGZEvQ&oh=00_AfLzUOeBvjMSxr4oDk8OEPKOZPq69tMHSjjiuWfUGBOdOw&oe=683667B3",
                            alt: "Braselton Tech Logo",
                            className: "h-8 w-8 rounded-full mr-3 object-cover"
                        }, void 0, false, {
                            fileName: "[project]/src/components/NavBar.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this),
                        "BraseltonTech"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/NavBar.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/NavBar.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden xl:flex",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "flex gap-10 text-lg font-light text-gray-800",
                    style: {
                        fontFamily: 'Geist, Inter, Arial, sans-serif',
                        fontWeight: 300
                    },
                    children: navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "relative",
                            children: link.label === "Companies" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        whileHover: {
                                            scale: 1.15
                                        },
                                        transition: {
                                            duration: 0.1
                                        },
                                        onMouseEnter: ()=>setHovered('companies'),
                                        onMouseLeave: ()=>setHovered(false),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: link.href,
                                            className: "transition font-light text-gray-800",
                                            style: {
                                                fontWeight: 300
                                            },
                                            children: link.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/NavBar.tsx",
                                            lineNumber: 71,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/NavBar.tsx",
                                        lineNumber: 65,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                        children: hovered === 'companies' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                opacity: 0,
                                                y: 10
                                            },
                                            animate: {
                                                opacity: 1,
                                                y: 0
                                            },
                                            exit: {
                                                opacity: 0,
                                                y: 10
                                            },
                                            transition: {
                                                duration: 0.18
                                            },
                                            className: "absolute left-1/2 -translate-x-1/2 mt-2 z-50 min-w-[220px] bg-white border border-blue-100 shadow-xl rounded-xl p-4 text-center font-light",
                                            style: {
                                                fontFamily: 'Geist, Inter, Arial, sans-serif',
                                                fontWeight: 300
                                            },
                                            onMouseEnter: ()=>setHovered('companies'),
                                            onMouseLeave: ()=>setHovered(false),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                        whileHover: {
                                                            scale: 1.08
                                                        },
                                                        transition: {
                                                            duration: 0.12
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "/companies",
                                                            className: "text-gray-800 font-light transition",
                                                            style: {
                                                                fontWeight: 300
                                                            },
                                                            children: "Companies"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/NavBar.tsx",
                                                            lineNumber: 87,
                                                            columnNumber: 29
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/NavBar.tsx",
                                                        lineNumber: 86,
                                                        columnNumber: 27
                                                    }, this),
                                                    companiesList.map((company)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                            whileHover: {
                                                                scale: 1.08
                                                            },
                                                            transition: {
                                                                duration: 0.12
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: "/companies#" + company.id,
                                                                className: "text-gray-800 font-light transition block cursor-pointer",
                                                                style: {
                                                                    fontWeight: 300
                                                                },
                                                                onClick: (e)=>{
                                                                    e.preventDefault();
                                                                    if (window.location.pathname !== "/companies") {
                                                                        window.location.href = `/companies#${company.id}`;
                                                                        setTimeout(()=>scrollToCompany(company.id), 500);
                                                                    } else {
                                                                        scrollToCompany(company.id);
                                                                    }
                                                                    setOpen(false);
                                                                    setHovered(false);
                                                                },
                                                                children: company.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/NavBar.tsx",
                                                                lineNumber: 91,
                                                                columnNumber: 31
                                                            }, this)
                                                        }, company.id, false, {
                                                            fileName: "[project]/src/components/NavBar.tsx",
                                                            lineNumber: 90,
                                                            columnNumber: 29
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/NavBar.tsx",
                                                lineNumber: 85,
                                                columnNumber: 25
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/NavBar.tsx",
                                            lineNumber: 75,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/NavBar.tsx",
                                        lineNumber: 73,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true) : link.label === "Get Involved" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        whileHover: {
                                            scale: 1.15
                                        },
                                        transition: {
                                            duration: 0.1
                                        },
                                        onMouseEnter: ()=>setHovered('get-involved'),
                                        onMouseLeave: ()=>setHovered(false),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: link.href,
                                            className: "transition font-light text-gray-800",
                                            style: {
                                                fontWeight: 300
                                            },
                                            children: link.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/NavBar.tsx",
                                            lineNumber: 124,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/NavBar.tsx",
                                        lineNumber: 118,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                        children: hovered === 'get-involved' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                opacity: 0,
                                                y: 10
                                            },
                                            animate: {
                                                opacity: 1,
                                                y: 0
                                            },
                                            exit: {
                                                opacity: 0,
                                                y: 10
                                            },
                                            transition: {
                                                duration: 0.18
                                            },
                                            className: "absolute left-1/2 -translate-x-1/2 mt-2 z-50 min-w-[220px] bg-white border border-blue-100 shadow-xl rounded-xl p-4 text-center font-light",
                                            style: {
                                                fontFamily: 'Geist, Inter, Arial, sans-serif',
                                                fontWeight: 300
                                            },
                                            onMouseEnter: ()=>setHovered('get-involved'),
                                            onMouseLeave: ()=>setHovered(false),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                        whileHover: {
                                                            scale: 1.08
                                                        },
                                                        transition: {
                                                            duration: 0.12
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "/involved",
                                                            className: "text-gray-800 font-light transition",
                                                            style: {
                                                                fontWeight: 300
                                                            },
                                                            children: "Get Involved"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/NavBar.tsx",
                                                            lineNumber: 140,
                                                            columnNumber: 29
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/NavBar.tsx",
                                                        lineNumber: 139,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                        whileHover: {
                                                            scale: 1.08
                                                        },
                                                        transition: {
                                                            duration: 0.12
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "/involved/join",
                                                            className: "text-gray-800 font-light transition",
                                                            style: {
                                                                fontWeight: 300
                                                            },
                                                            children: "Join Braselton Tech"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/NavBar.tsx",
                                                            lineNumber: 143,
                                                            columnNumber: 29
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/NavBar.tsx",
                                                        lineNumber: 142,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                        whileHover: {
                                                            scale: 1.08
                                                        },
                                                        transition: {
                                                            duration: 0.12
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "/involved/levelup",
                                                            className: "text-gray-800 font-light transition",
                                                            style: {
                                                                fontWeight: 300
                                                            },
                                                            children: "Level Up Your Startup"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/NavBar.tsx",
                                                            lineNumber: 146,
                                                            columnNumber: 29
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/NavBar.tsx",
                                                        lineNumber: 145,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                        whileHover: {
                                                            scale: 1.08
                                                        },
                                                        transition: {
                                                            duration: 0.12
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "/involved/sponsor",
                                                            className: "text-gray-800 font-light transition",
                                                            style: {
                                                                fontWeight: 300
                                                            },
                                                            children: "Become a Sponsor"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/NavBar.tsx",
                                                            lineNumber: 149,
                                                            columnNumber: 29
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/NavBar.tsx",
                                                        lineNumber: 148,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                        whileHover: {
                                                            scale: 1.08
                                                        },
                                                        transition: {
                                                            duration: 0.12
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "/involved/mentor",
                                                            className: "text-gray-800 font-light transition",
                                                            style: {
                                                                fontWeight: 300
                                                            },
                                                            children: "Become a Mentor"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/NavBar.tsx",
                                                            lineNumber: 152,
                                                            columnNumber: 29
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/NavBar.tsx",
                                                        lineNumber: 151,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/NavBar.tsx",
                                                lineNumber: 138,
                                                columnNumber: 25
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/NavBar.tsx",
                                            lineNumber: 128,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/NavBar.tsx",
                                        lineNumber: 126,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true) : link.label === "About" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        whileHover: {
                                            scale: 1.15
                                        },
                                        transition: {
                                            duration: 0.1
                                        },
                                        onMouseEnter: ()=>setHovered('about'),
                                        onMouseLeave: ()=>setHovered(false),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: link.href,
                                            className: "transition font-light text-gray-800",
                                            style: {
                                                fontWeight: 300
                                            },
                                            children: link.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/NavBar.tsx",
                                            lineNumber: 167,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/NavBar.tsx",
                                        lineNumber: 161,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                        children: hovered === 'about' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                opacity: 0,
                                                y: 10
                                            },
                                            animate: {
                                                opacity: 1,
                                                y: 0
                                            },
                                            exit: {
                                                opacity: 0,
                                                y: 10
                                            },
                                            transition: {
                                                duration: 0.18
                                            },
                                            className: "absolute left-1/2 -translate-x-1/2 mt-2 z-50 min-w-[220px] bg-white border border-blue-100 shadow-xl rounded-xl p-4 text-center font-light",
                                            style: {
                                                fontFamily: 'Geist, Inter, Arial, sans-serif',
                                                fontWeight: 300
                                            },
                                            onMouseEnter: ()=>setHovered('about'),
                                            onMouseLeave: ()=>setHovered(false),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                        whileHover: {
                                                            scale: 1.08
                                                        },
                                                        transition: {
                                                            duration: 0.12
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "/about",
                                                            className: "text-gray-800 font-light transition",
                                                            style: {
                                                                fontWeight: 300
                                                            },
                                                            children: "About"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/NavBar.tsx",
                                                            lineNumber: 183,
                                                            columnNumber: 29
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/NavBar.tsx",
                                                        lineNumber: 182,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                        whileHover: {
                                                            scale: 1.08
                                                        },
                                                        transition: {
                                                            duration: 0.12
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "/about/board",
                                                            className: "text-gray-800 font-light transition",
                                                            style: {
                                                                fontWeight: 300
                                                            },
                                                            children: "Meet the Board"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/NavBar.tsx",
                                                            lineNumber: 186,
                                                            columnNumber: 29
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/NavBar.tsx",
                                                        lineNumber: 185,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/NavBar.tsx",
                                                lineNumber: 181,
                                                columnNumber: 25
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/NavBar.tsx",
                                            lineNumber: 171,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/NavBar.tsx",
                                        lineNumber: 169,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true) : link.label === "Events" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        whileHover: {
                                            scale: 1.15
                                        },
                                        transition: {
                                            duration: 0.1
                                        },
                                        onMouseEnter: ()=>setHovered('events'),
                                        onMouseLeave: ()=>setHovered(false),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: link.href,
                                            className: "transition font-light text-gray-800",
                                            style: {
                                                fontWeight: 300
                                            },
                                            children: link.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/NavBar.tsx",
                                            lineNumber: 201,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/NavBar.tsx",
                                        lineNumber: 195,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                        children: hovered === 'events' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                opacity: 0,
                                                y: 10
                                            },
                                            animate: {
                                                opacity: 1,
                                                y: 0
                                            },
                                            exit: {
                                                opacity: 0,
                                                y: 10
                                            },
                                            transition: {
                                                duration: 0.18
                                            },
                                            className: "absolute left-1/2 -translate-x-1/2 mt-2 z-50 min-w-[220px] bg-white border border-blue-100 shadow-xl rounded-xl p-4 text-center font-light",
                                            style: {
                                                fontFamily: 'Geist, Inter, Arial, sans-serif',
                                                fontWeight: 300
                                            },
                                            onMouseEnter: ()=>setHovered('events'),
                                            onMouseLeave: ()=>setHovered(false),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    whileHover: {
                                                        scale: 1.08
                                                    },
                                                    transition: {
                                                        duration: 0.12
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/events",
                                                        className: "text-gray-800 font-light transition",
                                                        style: {
                                                            fontWeight: 300
                                                        },
                                                        children: "Events"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/NavBar.tsx",
                                                        lineNumber: 217,
                                                        columnNumber: 29
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/NavBar.tsx",
                                                    lineNumber: 216,
                                                    columnNumber: 27
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/NavBar.tsx",
                                                lineNumber: 215,
                                                columnNumber: 25
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/NavBar.tsx",
                                            lineNumber: 205,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/NavBar.tsx",
                                        lineNumber: 203,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                whileHover: {
                                    scale: 1.15
                                },
                                transition: {
                                    duration: 0.1
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: link.href,
                                    className: "transition font-light text-gray-800",
                                    style: {
                                        fontWeight: 300
                                    },
                                    children: link.label
                                }, void 0, false, {
                                    fileName: "[project]/src/components/NavBar.tsx",
                                    lineNumber: 226,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/NavBar.tsx",
                                lineNumber: 225,
                                columnNumber: 17
                            }, this)
                        }, link.href, false, {
                            fileName: "[project]/src/components/NavBar.tsx",
                            lineNumber: 62,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/NavBar.tsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/NavBar.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                className: "xl:hidden flex flex-col gap-1",
                onClick: ()=>setOpen((o)=>!o),
                onMouseEnter: ()=>{
                    setHovered('get-involved');
                    setOpen(true);
                },
                onMouseLeave: ()=>{
                    setHovered(false);
                    setOpen(false);
                },
                "aria-label": "Open menu",
                animate: open ? {
                    rotate: 90,
                    scale: 1.15
                } : {
                    rotate: 0,
                    scale: 1
                },
                transition: {
                    type: 'spring',
                    stiffness: 400,
                    damping: 30
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                        className: "w-7 h-1 bg-gray-800 rounded transition-all",
                        animate: open ? {
                            scaleX: 1.2
                        } : {
                            scaleX: 1
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/NavBar.tsx",
                        lineNumber: 243,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                        className: "w-7 h-1 bg-gray-800 rounded transition-all",
                        animate: open ? {
                            scaleX: 0.8
                        } : {
                            scaleX: 1
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/NavBar.tsx",
                        lineNumber: 244,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                        className: "w-7 h-1 bg-gray-800 rounded transition-all",
                        animate: open ? {
                            scaleX: 1.2
                        } : {
                            scaleX: 1
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/NavBar.tsx",
                        lineNumber: 245,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/NavBar.tsx",
                lineNumber: 234,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden xl:flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/contact",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                            whileHover: {
                                scale: 1.15
                            },
                            transition: {
                                duration: 0.1
                            },
                            className: "bg-white text-gray-800 font-mono font-extrabold tracking-wide uppercase px-8 py-2 rounded-md shadow-lg border border-blue-100 hover:bg-blue-50 transition",
                            type: "button",
                            children: "Contact"
                        }, void 0, false, {
                            fileName: "[project]/src/components/NavBar.tsx",
                            lineNumber: 249,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/NavBar.tsx",
                        lineNumber: 248,
                        columnNumber: 9
                    }, this),
                    !isAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/login",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                            whileHover: {
                                scale: 1.15
                            },
                            transition: {
                                duration: 0.1
                            },
                            className: "bg-white text-blue-700 font-mono font-extrabold tracking-wide uppercase px-8 py-2 rounded-md shadow-lg border border-blue-100 hover:bg-blue-50 transition ml-2",
                            type: "button",
                            children: "Log In"
                        }, void 0, false, {
                            fileName: "[project]/src/components/NavBar.tsx",
                            lineNumber: 260,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/NavBar.tsx",
                        lineNumber: 259,
                        columnNumber: 11
                    }, this),
                    isAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/admin",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                    whileHover: {
                                        scale: 1.15
                                    },
                                    transition: {
                                        duration: 0.1
                                    },
                                    className: "bg-blue-700 text-white font-mono font-extrabold tracking-wide uppercase px-8 py-2 rounded-md shadow-lg border border-blue-100 hover:bg-blue-800 transition ml-2",
                                    type: "button",
                                    children: "Admin"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/NavBar.tsx",
                                    lineNumber: 273,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/NavBar.tsx",
                                lineNumber: 272,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                whileHover: {
                                    scale: 1.15
                                },
                                transition: {
                                    duration: 0.1
                                },
                                className: "bg-white text-red-700 font-mono font-extrabold tracking-wide uppercase px-8 py-2 rounded-md shadow-lg border border-blue-100 hover:bg-red-50 transition ml-2",
                                type: "button",
                                onClick: ()=>{
                                    localStorage.removeItem("admin_token");
                                    setIsAdmin(false);
                                    router.push("/");
                                },
                                children: "Log Out"
                            }, void 0, false, {
                                fileName: "[project]/src/components/NavBar.tsx",
                                lineNumber: 282,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/NavBar.tsx",
                lineNumber: 247,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isDropdownOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        scale: 0.95,
                        y: -30
                    },
                    animate: {
                        opacity: 1,
                        scale: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        scale: 0.95,
                        y: -30
                    },
                    transition: {
                        type: 'spring',
                        stiffness: 400,
                        damping: 32,
                        duration: 0.25
                    },
                    className: "absolute left-0 top-full w-full bg-white rounded-b-2xl flex flex-col items-center justify-center gap-6 py-8 xl:hidden border-b border-blue-100",
                    style: {
                        fontFamily: 'Geist, Inter, Arial, sans-serif',
                        fontWeight: 300
                    },
                    onMouseEnter: ()=>setDropdownHovered(true),
                    onMouseLeave: ()=>setDropdownHovered(false),
                    children: [
                        navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                whileHover: {
                                    scale: 1.15
                                },
                                transition: {
                                    duration: 0.1
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: link.href,
                                    className: "text-lg font-light text-gray-800 transition",
                                    style: {
                                        fontWeight: 300
                                    },
                                    onClick: ()=>setOpen(false),
                                    children: link.label
                                }, void 0, false, {
                                    fileName: "[project]/src/components/NavBar.tsx",
                                    lineNumber: 312,
                                    columnNumber: 17
                                }, this)
                            }, link.href, false, {
                                fileName: "[project]/src/components/NavBar.tsx",
                                lineNumber: 311,
                                columnNumber: 15
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/contact",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                whileHover: {
                                    scale: 1.15
                                },
                                transition: {
                                    duration: 0.1
                                },
                                className: "bg-white text-gray-800 font-mono font-extrabold tracking-wide uppercase px-8 py-2 rounded-md shadow-lg border border-blue-100 hover:bg-blue-50 transition",
                                type: "button",
                                children: "Contact"
                            }, void 0, false, {
                                fileName: "[project]/src/components/NavBar.tsx",
                                lineNumber: 316,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/NavBar.tsx",
                            lineNumber: 315,
                            columnNumber: 13
                        }, this),
                        !isAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/login",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                whileHover: {
                                    scale: 1.15
                                },
                                transition: {
                                    duration: 0.1
                                },
                                className: "bg-white text-blue-700 font-mono font-extrabold tracking-wide uppercase px-8 py-2 rounded-md shadow-lg border border-blue-100 hover:bg-blue-50 transition ml-2",
                                type: "button",
                                children: "Log In"
                            }, void 0, false, {
                                fileName: "[project]/src/components/NavBar.tsx",
                                lineNumber: 327,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/NavBar.tsx",
                            lineNumber: 326,
                            columnNumber: 15
                        }, this),
                        isAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/admin",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                        whileHover: {
                                            scale: 1.15
                                        },
                                        transition: {
                                            duration: 0.1
                                        },
                                        className: "bg-blue-700 text-white font-mono font-extrabold tracking-wide uppercase px-8 py-2 rounded-md shadow-lg border border-blue-100 hover:bg-blue-800 transition ml-2",
                                        type: "button",
                                        children: "Admin"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/NavBar.tsx",
                                        lineNumber: 340,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/NavBar.tsx",
                                    lineNumber: 339,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                    whileHover: {
                                        scale: 1.15
                                    },
                                    transition: {
                                        duration: 0.1
                                    },
                                    className: "bg-white text-red-700 font-mono font-extrabold tracking-wide uppercase px-8 py-2 rounded-md shadow-lg border border-blue-100 hover:bg-red-50 transition ml-2",
                                    type: "button",
                                    onClick: ()=>{
                                        localStorage.removeItem("admin_token");
                                        setIsAdmin(false);
                                        router.push("/");
                                    },
                                    children: "Log Out"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/NavBar.tsx",
                                    lineNumber: 349,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/NavBar.tsx",
                    lineNumber: 300,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/NavBar.tsx",
                lineNumber: 298,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/NavBar.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_s(NavBar, "cOylx0/a1WHgLebGyUnmPsnAvj4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = NavBar;
var _c;
__turbopack_context__.k.register(_c, "NavBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Footer.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Footer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
;
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "w-full py-10 bg-white border-t border-blue-100 shadow-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-gray-800 text-sm font-sans gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        whileHover: {
                            scale: 1.12
                        },
                        transition: {
                            duration: 0.1
                        },
                        className: "inline-block",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "flex items-center text-2xl font-extrabold text-gray-800",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/474663336_565692403086428_3697079815872425189_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=mDN4scbfWEAQ7kNvwFVE3IJ&_nc_oc=AdmKgYnMvGvu6mV4SL8euPdHrPe81fjegRdO2TEFRMt15rUlBlWkkKQgoUqS7f57spVcJcPel12qMlzOoL5n0UBI&_nc_zt=23&_nc_ht=scontent-atl3-1.xx&_nc_gid=kjZW6_usxnzxiu2JbGZEvQ&oh=00_AfLzUOeBvjMSxr4oDk8OEPKOZPq69tMHSjjiuWfUGBOdOw&oe=683667B3",
                                    alt: "Braselton Tech Logo",
                                    className: "h-8 w-8 rounded-full mr-3 object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 11,
                                    columnNumber: 13
                                }, this),
                                "BraseltonTech"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Footer.tsx",
                            lineNumber: 10,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Footer.tsx",
                        lineNumber: 9,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                                href: "https://www.linkedin.com/company/braselton-tech/",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                "aria-label": "LinkedIn",
                                className: "text-gray-800",
                                whileHover: {
                                    scale: 1.15
                                },
                                transition: {
                                    duration: 0.1
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "28",
                                    height: "28",
                                    fill: "currentColor",
                                    viewBox: "0 0 24 24",
                                    className: "inline align-middle",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 25,
                                        columnNumber: 113
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 25,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Footer.tsx",
                                lineNumber: 16,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                                href: "https://www.facebook.com/BraseltonTech",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                "aria-label": "Facebook",
                                className: "text-gray-800",
                                whileHover: {
                                    scale: 1.15
                                },
                                transition: {
                                    duration: 0.1
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "28",
                                    height: "28",
                                    fill: "currentColor",
                                    viewBox: "0 0 24 24",
                                    className: "inline align-middle",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.326v21.348c0 .733.592 1.326 1.325 1.326h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.312h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.326v-21.349c0-.734-.593-1.326-1.326-1.326z"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 36,
                                        columnNumber: 113
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 36,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Footer.tsx",
                                lineNumber: 27,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Footer.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Footer.tsx",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pt-8 text-center text-xs text-gray-400 font-sans",
                children: "© Copyright BraseltonTech. All rights reserved."
            }, void 0, false, {
                fileName: "[project]/src/components/Footer.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Footer.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/AdminEditableText.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>AdminEditableText)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
function AdminEditableText({ value, onChange, className = "", as = "p", children }) {
    _s();
    const [isAdmin, setIsAdmin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editing, setEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editValue, setEditValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(value);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminEditableText.useEffect": ()=>{
            setEditValue(value);
        }
    }["AdminEditableText.useEffect"], [
        value
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminEditableText.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                setIsAdmin(!!localStorage.getItem("admin_token"));
            }
        }
    }["AdminEditableText.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminEditableText.useEffect": ()=>{
            if (editing && inputRef.current) {
                inputRef.current.focus();
            }
        }
    }["AdminEditableText.useEffect"], [
        editing
    ]);
    const Tag = as;
    if (!isAdmin) {
        return children ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(Tag, {
            className
        }, children) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(Tag, {
            className
        }, value);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative group w-full",
        children: editing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                    ref: inputRef,
                    className: "w-full border border-blue-200 rounded-md p-2 text-gray-800 mb-2",
                    value: editValue,
                    onChange: (e)=>setEditValue(e.target.value),
                    rows: as === "h2" ? 2 : 4
                }, void 0, false, {
                    fileName: "[project]/src/components/AdminEditableText.tsx",
                    lineNumber: 43,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 font-bold",
                            onClick: ()=>{
                                setEditing(false);
                                onChange(editValue);
                            },
                            children: "Save"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AdminEditableText.tsx",
                            lineNumber: 51,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "px-4 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 font-bold",
                            onClick: ()=>{
                                setEditing(false);
                                setEditValue(value);
                            },
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AdminEditableText.tsx",
                            lineNumber: 55,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/AdminEditableText.tsx",
                    lineNumber: 50,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/AdminEditableText.tsx",
            lineNumber: 42,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                children ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(Tag, {
                    className
                }, children) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(Tag, {
                    className
                }, value),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "absolute top-0 right-0 text-xs px-3 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 font-bold shadow opacity-0 group-hover:opacity-100 transition",
                    onClick: ()=>setEditing(true),
                    style: {
                        zIndex: 10
                    },
                    "aria-label": "Edit text",
                    children: "Edit"
                }, void 0, false, {
                    fileName: "[project]/src/components/AdminEditableText.tsx",
                    lineNumber: 64,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true)
    }, void 0, false, {
        fileName: "[project]/src/components/AdminEditableText.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_s(AdminEditableText, "fGfDq8kF3rUmIr/9RMTDCGhvO9E=");
_c = AdminEditableText;
var _c;
__turbopack_context__.k.register(_c, "AdminEditableText");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/AdminEditableImage.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>AdminEditableImage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
function AdminEditableImage({ src, onChange, alt = "", className = "", style = {}, children }) {
    _s();
    const [isAdmin, setIsAdmin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editing, setEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editValue, setEditValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(src);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminEditableImage.useEffect": ()=>{
            setEditValue(src);
        }
    }["AdminEditableImage.useEffect"], [
        src
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminEditableImage.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                setIsAdmin(!!localStorage.getItem("admin_token"));
            }
        }
    }["AdminEditableImage.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminEditableImage.useEffect": ()=>{
            if (editing && inputRef.current) {
                inputRef.current.focus();
            }
        }
    }["AdminEditableImage.useEffect"], [
        editing
    ]);
    if (!isAdmin) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: className,
            style: style,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: src,
                    alt: alt,
                    className: "w-full h-full object-cover"
                }, void 0, false, {
                    fileName: "[project]/src/components/AdminEditableImage.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this),
                children
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/AdminEditableImage.tsx",
            lineNumber: 36,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative group " + className,
        style: style,
        children: editing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-2 items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    ref: inputRef,
                    type: "text",
                    className: "w-full border border-blue-200 rounded-md p-2 text-gray-800 mb-2",
                    value: editValue,
                    onChange: (e)=>setEditValue(e.target.value),
                    placeholder: "Paste image URL..."
                }, void 0, false, {
                    fileName: "[project]/src/components/AdminEditableImage.tsx",
                    lineNumber: 47,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 font-bold",
                            onClick: ()=>{
                                setEditing(false);
                                onChange(editValue);
                            },
                            children: "Save"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AdminEditableImage.tsx",
                            lineNumber: 56,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "px-4 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 font-bold",
                            onClick: ()=>{
                                setEditing(false);
                                setEditValue(src);
                            },
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AdminEditableImage.tsx",
                            lineNumber: 60,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/AdminEditableImage.tsx",
                    lineNumber: 55,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/AdminEditableImage.tsx",
            lineNumber: 46,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: src,
                    alt: alt,
                    className: "w-full h-full object-cover"
                }, void 0, false, {
                    fileName: "[project]/src/components/AdminEditableImage.tsx",
                    lineNumber: 68,
                    columnNumber: 11
                }, this),
                children,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "absolute top-0 right-0 text-xs px-3 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 font-bold shadow opacity-0 group-hover:opacity-100 transition",
                    onClick: ()=>setEditing(true),
                    style: {
                        zIndex: 10
                    },
                    "aria-label": "Edit image",
                    children: "Edit"
                }, void 0, false, {
                    fileName: "[project]/src/components/AdminEditableImage.tsx",
                    lineNumber: 70,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true)
    }, void 0, false, {
        fileName: "[project]/src/components/AdminEditableImage.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_s(AdminEditableImage, "VfySC9Rcj0AALGfO88f07mulH3w=");
_c = AdminEditableImage;
var _c;
__turbopack_context__.k.register(_c, "AdminEditableImage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/about/board/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>BoardPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NavBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/NavBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AdminEditableText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AdminEditableText.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AdminEditableImage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AdminEditableImage.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const members = [
    {
        name: "Marc Carson",
        title: "ADVISORY BOARD MEMBER",
        img: "https://xh0avnqjifo.makeswift.site/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fs.mkswft.com%2FRmlsZTpkYzM4NWI0Mi0wYTZjLTQ2MzUtOTVjNi04Yjc5MGE0NDAyOTc%3D%2FMarc%2520Carson%2520crop.jpg&w=3840&q=75",
        bio: `Meet Marc, the leader of a team of startup catalysts at ATDC, where he provides valuable services to help companies grow, connect, and scale. Prior to joining ATDC, Marc founded Keystone Industries and HOTPACK, serving as their President and CEO. Marc is also the Chair of the Planning Commission for the City of Braselton. Marc received his bachelor's degree in finance from Gannon University in Pennsylvania. With his extensive business experience, Marc is excited to help mentor young tech entrepreneurs and guide them through the tough decisions that come with building a successful company. Outside of work, he enjoys spending time outdoors, hunting, fishing, playing golf, and spending time with his family.`
    },
    {
        name: "Cindy Green",
        title: "ADVISORY BOARD MEMBER",
        img: "https://xh0avnqjifo.makeswift.site/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fs.mkswft.com%2FRmlsZTo1NjM1OTIzNi03YWRkLTQ3NWEtOWMyNS0xYWM2YTdlYjA2Njk%3D%2FCindy%2520Green%2520Crop.jpg&w=3840&q=75",
        bio: `Cindy graduated from Auburn University with a degree in Chemical Engineering. She started working for Dupont as a Business Unit President before transitioning to Chief Marketing Officer before she retired. Outside of her corporate career, Cindy is a member of the Board of Trustees for Northeast Hospital System, where she has made significant contributions to the organization. She also served ten years on the Braselton Downtown Development Authority, primarily focused on driving economic development in the area. Cindy is also an accomplished businesswoman; she owns The Cotton Calf Kitchen, a popular restaurant in downtown Braselton, with her husband. As an engineer and business leader, Cindy is excited to be a part of Braselton Tech and contribute to the growth and success of start-up technology businesses in the area.`
    },
    {
        name: "Jeff Ford",
        title: "VICE PRESIDENT",
        img: "https://xh0avnqjifo.makeswift.site/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fs.mkswft.com%2FRmlsZTphYjdmNDUwNS0wNzE4LTQ3OWEtYjIzNi1hYzg1YTEwZmFiYzI%3D%2FJeff%2520Ford%2520Crop.jpg&w=3840&q=75",
        bio: `Meet Jeff, an experienced executive, entrepreneur, and electrical engineer with a diverse portfolio spanning complex silicon, IoT, video compression, CGI, image processing, film scanning, and machine learning. Jeff has an MBA from Georgia Tech and a B.S. in Electrical Engineering from Mississippi State University. In addition to serving on Braselton Tech's advisory board, he's also a board member for a stealth med-tech startup, Falcomm, and iVue Robotics. As founder and CEO of ComplexIQ, Jeff designed multi-gigabit networking silicon and software used in over 50 million devices worldwide and won multi-million dollar intellectual property licensing contracts with international semiconductor manufacturers like Intel, Cisco, and ST Microelectronics. Prior to founding ComplexIQ, Jeff led Cisco's silicon development team and designed networking gateways for clients such as Comcast, Time Warner, and Cox. He also designed computer-generated imagery and video content creation workstations for Silicon Graphics and Intergraph Computer Systems. Jeff holds 14 patents and is the principal author of a peer-reviewed research publication that will be presented at the 2023 IEEE International Conference on Robotics and Automation (ICRA) in London.`
    },
    {
        name: "Dr. Patrick Fulbright",
        title: "ADVISORY BOARD MEMBER",
        img: "https://xh0avnqjifo.makeswift.site/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fs.mkswft.com%2FRmlsZToxZTI5NjgzNi0zNTM2LTQ0OTItYjZjZC03NjlhZGEyOWJlMWU%3D%2FDr.%2520W%2520Patrick_Fulbright.jpg&w=3840&q=75",
        bio: `Dr. Patrick Fulbright has over 25 years of executive management experience spending the majority of this time with The Home Depot where he honed his business experience in retail management, logistics, advertising, and finance. Previous to his time with The Home Depot, Dr. Fulbright spent ten years with Publix Supermarkets in Store Management and Expense Accounting. Dr. Fulbright has had his own businesses and partnerships throughout his life.  Dr. Fulbright was the Business Professor for the Savannah College of Art and Design (SCAD) from 2011 – 2017 where he taught graduate and undergraduate classes in business and finance.  In 2018, Dr. Fulbright joined the University of Georgia Public Service and Outreach Small Business Development Center as Area Director for Region II of Georgia.  Recently, Dr. Fulbright has assumed the interim Deputy Director Role for the UGA Georgia Center in Athens.  Dr. Fulbright earned his B.S. in Management from Florida Southern College, M.B.A. from Coles College of Business – Kennesaw State University and his Ph.D. in Educational Leadership from Trident University.  Dr. Fulbright has earned many awards throughout his career such as Georgia State's MAX Award for Excellence in Marketing Strategy and two UGA PSO SBDC Flewellens' for outstanding business consulting; is an avid woodworker and self-proclaimed business nerd.`
    },
    {
        name: "Chris Nedza",
        title: "ADVISORY BOARD MEMBER",
        img: "https://xh0avnqjifo.makeswift.site/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fs.mkswft.com%2FRmlsZTozZmE5NGI1MS1iZWUyLTRmZTQtOGE1Mi05ZjJiMTc4MzU5MGQ%3D%2FChris%2520Nedza.jpg&w=3840&q=75",
        bio: `Chris is a serial entrepreneur and avid keynote speaker with a passion for building unbeatable and sustainable cultures. Chris graduated from the University of Georgia with a B.S. in Economics and earned his MBA from Emory University's Goizueta Business School. When he's not studying industry trends, contributing to thought leadership, or drumming at church, Chris can be found spending quality time with his wife and six sons. He's built an Inc. 5000 company, served as CEO of a restaurant point-of-sale business, founded CMD Services, and currently serves as Interim Lead Entrepreneur-In-Residence for ATDC. He has also served as a teacher and coordinator of academy business partnerships through Gwinnett County Public Schools. Chris developed ZeeZor, a real-time mobile reporting tool for his wife, to help manage their chain of hair salons. Today, ZeeZor is a leader in employee engagement with high-profile clients.`
    },
    {
        name: "Larry Monroe",
        title: "ADVISORY BOARD MEMBER",
        img: "https://xh0avnqjifo.makeswift.site/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fs.mkswft.com%2FRmlsZTplNzA0ODg0Ni0yYWVjLTRjNmYtOWI2Ny0yODg1ODAzNzljYTk%3D%2FLarry%2520Monroe%2520crop.jpg&w=3840&q=75",
        bio: `Meet Larry Monroe, an energy and environment consultant with extensive experience in energy technology research. He holds a PhD in Chemical Engineering from MIT, and previously served as Southern Company's Chief Environmental Officer and executive in charge of all R&D. Larry is a part-owner of the Cotton Calf Kitchen in Braselton. He's passionate about supporting technology companies and bringing new jobs to the Braselton area. Larry sees Braselton Tech as a crucial step in establishing a supportive ecosystem for both established and startup tech companies.`
    },
    {
        name: "Jennifer Scott",
        title: "SECRETARY",
        img: "https://xh0avnqjifo.makeswift.site/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fs.mkswft.com%2FRmlsZTo4YjU1YWRkNC01OGQ0LTQyZjYtOTQxOS1jNWIyZTdkYWIwNmU%3D%2FJennifer%2520Scott.jpg&w=1920&q=75",
        bio: `Jennifer Scott is a skilled professional with over two decades of experience working for the Town of Braselton. Jennifer holds a Bachelor's degree in English from Huntingdon College, a Master of Science in Justice and Public Safety from Auburn University at Montgomery, and a Juris Doctor degree from Cumberland School of Law. As the overseer of all town services, Jennifer is responsible for supervising local government staff and serving as the liaison between the town council, town staff, volunteers, Agency and Authority members, and consultants. In 2004, Jennifer was named Local Government Administrator of the Year by the Northeast Georgia Regional Development Center, and in 2015, she was awarded Jackson County Woman of the Year.`
    },
    {
        name: "Russell Smith",
        title: "ADVISORY BOARD MEMBER",
        img: "https://xh0avnqjifo.makeswift.site/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fs.mkswft.com%2FRmlsZTphOTdkMWU3Yi02NTcwLTQ1YjYtYWYzMC00OGY3OTExYzUwZGU%3D%2FRussell%2520Smith%2520Crop.jpg&w=3840&q=75",
        bio: `Russell Smith is a seasoned angel investor, startup mentor, and business builder with a wealth of industry experience. A Georgia Tech President's Scholar graduate, Russell is also a graduate of the Entrepreneurial Masters Programme from the Entrepreneurs' Organization and MIT. With his broad expertise, Russell has been involved in building businesses in a variety of industries, including agriculture, fintech, healthcare, manufacturing, robotics, and telecommunications. He has invested directly in over 20 startup and early-stage businesses, providing active advisory support to many of them. In addition to his entrepreneurial pursuits, Russell has held leadership roles in various business and civic organizations such as Leadership Georgia, Georgia Technology Authority, NGHS Foundation, Young Presidents' Organization, and Gwinnett Tech Foundation.`
    },
    {
        name: "Rhonda Stites",
        title: "ADVISORY BOARD PRESIDENT",
        img: "https://xh0avnqjifo.makeswift.site/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fs.mkswft.com%2FRmlsZToxZjQwNjk1Zi02MWRiLTQ5NmMtYmJkOS1mMmNlZjg1NzNmM2Y%3D%2FRhonda%2520Stites.jpg&w=3840&q=75",
        bio: `Meet Rhonda, an accomplished technology leader with 25 years of experience in launching and growing businesses. She spent two decades at Google and Microsoft, leading sales, marketing, and partnerships. At Google Cloud, Rhonda launched incubation businesses, developed solutions for retail, manufacturing, and media industries, and built strong relationships with consulting firms and third-party software providers. She continued her success at Microsoft, transforming fintech businesses through product innovation and cloud services, and serving as the lead for Georgia Fintech Academy. Rhonda is committed to giving back to her community, having served on the Braselton Town Council, the Braselton Downtown Development Authority, and the Northeast Georgia Health System Foundation cabinet. Rhonda holds a B.S. in Computer Science from DePaul University, a fintech certificate from Harvard, and is currently pursuing a Master's in Leadership from Cornell.`
    },
    {
        name: "Kurt Ward",
        title: "ADVISORY BOARD MEMBER",
        img: "https://xh0avnqjifo.makeswift.site/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fs.mkswft.com%2FRmlsZTpmZDU4ZTU3Ni1hOGE2LTQxNDAtYTEzMy1mZDRkOWMxZmE3ODY%3D%2FKurt%2520Ward.jpg&w=3840&q=75",
        bio: `A native of DeKalb County, Kurt Ward graduated from Lithonia High in 1990, Baylor University in 1994, and Georgia State University College of Law in 2001.  He practices law in the areas of estate planning (wills, trusts, and probate), general counsel for small-to-medium size businesses, and litigation for disability and injury matters.  Outside of work, Kurt enjoys spending time outside with his wife Tamara and his two boys, volunteering in the community, and being an active member of Gwinnett Church.`
    }
];
function BoardPage() {
    _s();
    const [bios, setBios] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(members.map({
        "BoardPage.useState": (m)=>m.bio
    }["BoardPage.useState"]));
    const [imgs, setImgs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(members.map({
        "BoardPage.useState": (m)=>m.img
    }["BoardPage.useState"]));
    const handleClick = (anchor)=>(e)=>{
            e.preventDefault();
            const el = document.getElementById(anchor);
            if (el) {
                el.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
                window.history.replaceState(null, '', `#${anchor}`);
            }
        };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex flex-col bg-gradient-to-r from-[#f0f6ff] to-[#a7c7ff]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NavBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/about/board/page.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 py-16 px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-5xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-2xl shadow-xl border border-blue-100 p-8 mb-10 flex flex-col md:flex-row items-center gap-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 flex flex-col items-center justify-center text-center order-2 md:order-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-3xl sm:text-4xl font-extrabold text-gray-800 mb-2",
                                            children: "Meet the Board"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/about/board/page.tsx",
                                            lineNumber: 92,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-xl font-semibold mb-4 uppercase tracking-wide",
                                            style: {
                                                color: '#5b7bb3'
                                            },
                                            children: "Advisory Board Members"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/about/board/page.tsx",
                                            lineNumber: 93,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "text-gray-700 text-base sm:text-lg space-y-1 font-medium",
                                            children: members.map((member)=>{
                                                const anchor = member.name.replace(/\s+/g, '-').replace(/\./g, '').toLowerCase();
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                                                        href: `#${anchor}`,
                                                        onClick: handleClick(anchor),
                                                        whileHover: {
                                                            scale: 1.08
                                                        },
                                                        transition: {
                                                            duration: 0.1
                                                        },
                                                        style: {
                                                            display: 'inline-block'
                                                        },
                                                        className: "outline-none focus-visible:ring-2 focus-visible:ring-blue-300 rounded",
                                                        children: member.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/about/board/page.tsx",
                                                        lineNumber: 99,
                                                        columnNumber: 23
                                                    }, this)
                                                }, member.name, false, {
                                                    fileName: "[project]/src/app/about/board/page.tsx",
                                                    lineNumber: 98,
                                                    columnNumber: 21
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/about/board/page.tsx",
                                            lineNumber: 94,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/about/board/page.tsx",
                                    lineNumber: 91,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "https://xh0avnqjifo.makeswift.site/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fs.mkswft.com%2FRmlsZTo3MjJiZDBlZS1lZDI1LTRmMGYtOWEwMS0wZjU0M2NmZDI1YjE%3D%2FTeam%2520photo%2520cropped.jpg&w=3840&q=75",
                                    alt: "Braselton Tech Board Group",
                                    className: "w-full max-w-xs md:max-w-sm rounded-xl shadow-lg border border-blue-100 object-cover mb-6 md:mb-0 order-1 md:order-2"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/about/board/page.tsx",
                                    lineNumber: 114,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/about/board/page.tsx",
                            lineNumber: 90,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 gap-8",
                            children: members.map((member, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    id: member.name.replace(/\s+/g, '-').replace(/\./g, '').toLowerCase(),
                                    initial: {
                                        opacity: 0,
                                        y: 40
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    viewport: {
                                        once: true
                                    },
                                    transition: {
                                        duration: 0.7,
                                        delay: i * 0.1
                                    },
                                    className: "bg-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center md:items-start text-center md:text-left border border-blue-100 gap-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AdminEditableImage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: imgs[i],
                                            onChange: (url)=>setImgs((arr)=>arr.map((img, j)=>j === i ? url : img)),
                                            alt: member.name,
                                            className: "w-32 h-32 rounded-full object-cover mb-4 md:mb-0 shadow"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/about/board/page.tsx",
                                            lineNumber: 131,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-2xl font-bold text-gray-800 mb-1",
                                                    children: member.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/about/board/page.tsx",
                                                    lineNumber: 138,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-base font-semibold mb-2 uppercase tracking-wide",
                                                    style: {
                                                        color: '#5b7bb3'
                                                    },
                                                    children: member.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/about/board/page.tsx",
                                                    lineNumber: 139,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AdminEditableText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    value: bios[i],
                                                    onChange: (val)=>setBios((b)=>b.map((bio, j)=>j === i ? val : bio)),
                                                    className: "text-gray-700 text-base whitespace-pre-line",
                                                    as: "p"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/about/board/page.tsx",
                                                    lineNumber: 140,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/about/board/page.tsx",
                                            lineNumber: 137,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, member.name, true, {
                                    fileName: "[project]/src/app/about/board/page.tsx",
                                    lineNumber: 122,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/about/board/page.tsx",
                            lineNumber: 120,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/about/board/page.tsx",
                    lineNumber: 89,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/about/board/page.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/about/board/page.tsx",
                lineNumber: 147,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/about/board/page.tsx",
        lineNumber: 86,
        columnNumber: 5
    }, this);
}
_s(BoardPage, "OGHB0hoZiOClDgIKFn5uCSsvEao=");
_c = BoardPage;
var _c;
__turbopack_context__.k.register(_c, "BoardPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_c35b6179._.js.map