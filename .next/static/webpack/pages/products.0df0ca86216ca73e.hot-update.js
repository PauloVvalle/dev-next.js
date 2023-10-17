"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/products",{

/***/ "./src/pages/products/index.js":
/*!*************************************!*\
  !*** ./src/pages/products/index.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_components_Appbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/components/Appbar */ \"./src/app/components/Appbar.js\");\n/* harmony import */ var _app_components_Bottom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/components/Bottom */ \"./src/app/components/Bottom.js\");\n/* harmony import */ var _app_components_Drawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/components/Drawer */ \"./src/app/components/Drawer.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tailwindcss/tailwind.css */ \"./node_modules/tailwindcss/tailwind.css\");\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _app_utils_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/app/utils/api */ \"./src/app/utils/api.js\");\n/* harmony import */ var _app_contexts_cartContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/app/contexts/cartContext */ \"./src/app/contexts/cartContext.js\");\n/* harmony import */ var _app_styles_ProductsStyles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/app/styles/ProductsStyles */ \"./src/app/styles/ProductsStyles.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst ProductsPage = ()=>{\n    _s();\n    const [isDrawerOpen, setIsDrawerOpen] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)();\n    const { addToCart } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useContext)(_app_contexts_cartContext__WEBPACK_IMPORTED_MODULE_9__.CartContext);\n    const handleMenuToggle = ()=>{\n        setIsDrawerOpen(!isDrawerOpen);\n    };\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{\n        const getProducts = async ()=>{\n            const productsData = await (0,_app_utils_api__WEBPACK_IMPORTED_MODULE_8__.fetchProducts)();\n            setProducts(productsData);\n        };\n        getProducts();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"min-h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Appbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                onMenuToggle: handleMenuToggle\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\paulo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\react\\\\projeto react\\\\dev-next.js\\\\src\\\\pages\\\\products\\\\index.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Drawer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                isOpen: isDrawerOpen,\n                onClose: handleMenuToggle\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\paulo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\react\\\\projeto react\\\\dev-next.js\\\\src\\\\pages\\\\products\\\\index.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"flex flex-wrap justify-around\",\n                children: products.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"flex justify-around\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_styles_ProductsStyles__WEBPACK_IMPORTED_MODULE_10__.ProductsCont, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_styles_ProductsStyles__WEBPACK_IMPORTED_MODULE_10__.ProductContainer, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_styles_ProductsStyles__WEBPACK_IMPORTED_MODULE_10__.ProductImage, {\n                                        src: product.image,\n                                        width: 50\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\paulo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\react\\\\projeto react\\\\dev-next.js\\\\src\\\\pages\\\\products\\\\index.js\",\n                                        lineNumber: 49,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: product.title\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\paulo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\react\\\\projeto react\\\\dev-next.js\\\\src\\\\pages\\\\products\\\\index.js\",\n                                        lineNumber: 50,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: product.price\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\paulo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\react\\\\projeto react\\\\dev-next.js\\\\src\\\\pages\\\\products\\\\index.js\",\n                                        lineNumber: 51,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: product.category\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\paulo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\react\\\\projeto react\\\\dev-next.js\\\\src\\\\pages\\\\products\\\\index.js\",\n                                        lineNumber: 53,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Bottomcont, {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\paulo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\react\\\\projeto react\\\\dev-next.js\\\\src\\\\pages\\\\products\\\\index.js\",\n                                        lineNumber: 54,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_styles_ProductsStyles__WEBPACK_IMPORTED_MODULE_10__.CardButton, {\n                                        onClick: ()=>addToCart(product),\n                                        className: \"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full\",\n                                        children: \"Add cart\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\paulo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\react\\\\projeto react\\\\dev-next.js\\\\src\\\\pages\\\\products\\\\index.js\",\n                                        lineNumber: 55,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\paulo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\react\\\\projeto react\\\\dev-next.js\\\\src\\\\pages\\\\products\\\\index.js\",\n                                lineNumber: 48,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\paulo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\react\\\\projeto react\\\\dev-next.js\\\\src\\\\pages\\\\products\\\\index.js\",\n                            lineNumber: 47,\n                            columnNumber: 13\n                        }, undefined)\n                    }, product.id, false, {\n                        fileName: \"C:\\\\Users\\\\paulo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\react\\\\projeto react\\\\dev-next.js\\\\src\\\\pages\\\\products\\\\index.js\",\n                        lineNumber: 46,\n                        columnNumber: 12\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\paulo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\react\\\\projeto react\\\\dev-next.js\\\\src\\\\pages\\\\products\\\\index.js\",\n                lineNumber: 43,\n                columnNumber: 11\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Bottom__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\paulo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\react\\\\projeto react\\\\dev-next.js\\\\src\\\\pages\\\\products\\\\index.js\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\paulo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\react\\\\projeto react\\\\dev-next.js\\\\src\\\\pages\\\\products\\\\index.js\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProductsPage, \"wHxeY++tEFHP6fNtHnQjyLp1d4g=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession,\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = ProductsPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductsPage);\nvar _c;\n$RefreshReg$(_c, \"ProductsPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJvZHVjdHMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQzZDO0FBQ0E7QUFDQTtBQUNpQjtBQUN0QjtBQUNxQjtBQUM1QjtBQUNlO0FBQ1M7QUFDOEM7QUFJdkcsTUFBTWlCLGVBQWU7O0lBQ25CLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdULCtDQUFRQTtJQUNoRCxNQUFNLEVBQUNVLFNBQVMsRUFBQyxHQUFHWixpREFBVUEsQ0FBQ0ksa0VBQVdBO0lBRzFDLE1BQU1TLG1CQUFvQjtRQUN4QkYsZ0JBQWdCLENBQUNEO0lBQ25CO0lBR0EsTUFBTSxFQUFFSSxNQUFNQyxPQUFPLEVBQUUsR0FBR3BCLDJEQUFVQTtJQUNwQyxNQUFNcUIsU0FBU2xCLHNEQUFTQTtJQUV4QixNQUFNLENBQUNtQixVQUFVQyxZQUFZLEdBQUdoQiwrQ0FBUUEsQ0FBQyxFQUFFO0lBRTNDRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1rQixjQUFjO1lBQ2xCLE1BQU1DLGVBQWUsTUFBTWpCLDZEQUFhQTtZQUN4Q2UsWUFBWUU7UUFDZDtRQUNBRDtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDRTtRQUFLQyxXQUFVOzswQkFDZCw4REFBQzlCLDhEQUFNQTtnQkFBQytCLGNBQWNWOzs7Ozs7MEJBQ3RCLDhEQUFDbkIsOERBQU1BO2dCQUFDOEIsUUFBUWQ7Z0JBQWNlLFNBQVNaOzs7Ozs7MEJBRW5DLDhEQUFDYTtnQkFBR0osV0FBVTswQkFDWkwsU0FBU1UsR0FBRyxDQUFDLENBQUNDLHdCQUVmLDhEQUFDQzt3QkFBR1AsV0FBVTtrQ0FDYiw0RUFBQ2pCLHFFQUFZQTtzQ0FDYiw0RUFBQ0MseUVBQWdCQTs7a0RBQ2pCLDhEQUFDQyxxRUFBWUE7d0NBQUN1QixLQUFLRixRQUFRRyxLQUFLO3dDQUFFQyxPQUFPOzs7Ozs7a0RBQ3pDLDhEQUFDQztrREFBR0wsUUFBUU0sS0FBSzs7Ozs7O2tEQUNqQiw4REFBQ0Q7a0RBQUdMLFFBQVFPLEtBQUs7Ozs7OztrREFFakIsOERBQUNGO2tEQUFHTCxRQUFRUSxRQUFROzs7Ozs7a0RBQ3BCLDhEQUFDQzs7Ozs7a0RBQ0QsOERBQUM3QixtRUFBVUE7d0NBQ1I4QixTQUFTLElBQU0xQixVQUFVZ0I7d0NBQzFCTixXQUFVO2tEQUE0RTs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBWGhETSxRQUFRVyxFQUFFOzs7Ozs7Ozs7OzBCQXlCeEQsOERBQUM5Qyw4REFBTUE7Ozs7Ozs7Ozs7O0FBU2I7R0FqRU1nQjs7UUFVc0JkLHVEQUFVQTtRQUNyQkcsa0RBQVNBOzs7S0FYcEJXO0FBa0VOLCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9wcm9kdWN0cy9pbmRleC5qcz81YTUxIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5pbXBvcnQgQXBwYmFyIGZyb20gJ0AvYXBwL2NvbXBvbmVudHMvQXBwYmFyJztcclxuaW1wb3J0IEJvdHRvbSBmcm9tICdAL2FwcC9jb21wb25lbnRzL0JvdHRvbSc7XHJcbmltcG9ydCBEcmF3ZXIgZnJvbSAnQC9hcHAvY29tcG9uZW50cy9EcmF3ZXInO1xyXG5pbXBvcnQgeyB1c2VTZXNzaW9uLCBzaWduSW4sIHNpZ25PdXQgfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAndGFpbHdpbmRjc3MvdGFpbHdpbmQuY3NzJ1xyXG5pbXBvcnQgeyBmZXRjaFByb2R1Y3RzIH0gZnJvbSAnQC9hcHAvdXRpbHMvYXBpJztcclxuaW1wb3J0IHsgQ2FydENvbnRleHQgfSBmcm9tICdAL2FwcC9jb250ZXh0cy9jYXJ0Q29udGV4dCc7XHJcbmltcG9ydCB7IFByb2R1Y3RzQ29udCwgUHJvZHVjdENvbnRhaW5lciwgUHJvZHVjdEltYWdlLCBDYXJkQnV0dG9uIH0gZnJvbSAnQC9hcHAvc3R5bGVzL1Byb2R1Y3RzU3R5bGVzJztcclxuXHJcblxyXG5cclxuY29uc3QgUHJvZHVjdHNQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtpc0RyYXdlck9wZW4sIHNldElzRHJhd2VyT3Blbl0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IHthZGRUb0NhcnR9ID0gdXNlQ29udGV4dChDYXJ0Q29udGV4dCk7XHJcbiBcclxuXHJcbiAgY29uc3QgaGFuZGxlTWVudVRvZ2dsZSAgPSAoKSA9PiB7XHJcbiAgICBzZXRJc0RyYXdlck9wZW4oIWlzRHJhd2VyT3BlbilcclxuICB9XHJcblxyXG5cclxuICBjb25zdCB7IGRhdGE6IHNlc3Npb24gfSA9IHVzZVNlc3Npb24oKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgW3Byb2R1Y3RzLCBzZXRQcm9kdWN0c10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBnZXRQcm9kdWN0cyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgcHJvZHVjdHNEYXRhID0gYXdhaXQgZmV0Y2hQcm9kdWN0cygpO1xyXG4gICAgICBzZXRQcm9kdWN0cyhwcm9kdWN0c0RhdGEpO1xyXG4gICAgfVxyXG4gICAgZ2V0UHJvZHVjdHMoKTtcclxuICB9LCBbXSk7XHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICAgIDxtYWluIGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlblwiPlxyXG4gICAgICA8QXBwYmFyIG9uTWVudVRvZ2dsZT17aGFuZGxlTWVudVRvZ2dsZX0+PC9BcHBiYXI+XHJcbiAgICAgIDxEcmF3ZXIgaXNPcGVuPXtpc0RyYXdlck9wZW59IG9uQ2xvc2U9e2hhbmRsZU1lbnVUb2dnbGV9PjwvRHJhd2VyPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdmbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWFyb3VuZCc+XHJcbiAgICAgICAgICAge3Byb2R1Y3RzLm1hcCgocHJvZHVjdCkgPT4gKFxyXG5cclxuICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktYXJvdW5kJyBrZXk9e3Byb2R1Y3QuaWR9PlxyXG4gICAgICAgICAgICA8UHJvZHVjdHNDb250PlxyXG4gICAgICAgICAgICA8UHJvZHVjdENvbnRhaW5lcj5cclxuICAgICAgICAgICAgPFByb2R1Y3RJbWFnZSBzcmM9e3Byb2R1Y3QuaW1hZ2V9IHdpZHRoPXs1MH0+PC9Qcm9kdWN0SW1hZ2U+XHJcbiAgICAgICAgICAgIDxwPntwcm9kdWN0LnRpdGxlfTwvcD5cclxuICAgICAgICAgICAgPHA+e3Byb2R1Y3QucHJpY2V9PC9wPlxyXG4gICAgICAgICAgICB7LyogPHA+e3Byb2R1Y3QuZGVzY3JpcHRpb259PC9wPiAqL31cclxuICAgICAgICAgICAgPHA+e3Byb2R1Y3QuY2F0ZWdvcnl9PC9wPlxyXG4gICAgICAgICAgICA8Qm90dG9tY29udD48L0JvdHRvbWNvbnQ+XHJcbiAgICAgICAgICAgIDxDYXJkQnV0dG9uXHJcbiAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGFkZFRvQ2FydChwcm9kdWN0KX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9J2JnLWJsdWUtNTAwIGhvdmVyOmJnLWJsdWUtNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkLWZ1bGwnPlxyXG4gICAgICAgICAgICAgICAgQWRkIGNhcnQ8L0NhcmRCdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9Qcm9kdWN0Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIDwvUHJvZHVjdHNDb250PlxyXG4gICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgKSl9XHJcblxyXG4gICAgICAgICAgPC91bD5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICA8Qm90dG9tPjwvQm90dG9tPlxyXG4gICAgPC9tYWluPlxyXG4gICk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdHNQYWdlOyJdLCJuYW1lcyI6WyJBcHBiYXIiLCJCb3R0b20iLCJEcmF3ZXIiLCJ1c2VTZXNzaW9uIiwic2lnbkluIiwic2lnbk91dCIsInVzZVJvdXRlciIsIlJlYWN0IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZmV0Y2hQcm9kdWN0cyIsIkNhcnRDb250ZXh0IiwiUHJvZHVjdHNDb250IiwiUHJvZHVjdENvbnRhaW5lciIsIlByb2R1Y3RJbWFnZSIsIkNhcmRCdXR0b24iLCJQcm9kdWN0c1BhZ2UiLCJpc0RyYXdlck9wZW4iLCJzZXRJc0RyYXdlck9wZW4iLCJhZGRUb0NhcnQiLCJoYW5kbGVNZW51VG9nZ2xlIiwiZGF0YSIsInNlc3Npb24iLCJyb3V0ZXIiLCJwcm9kdWN0cyIsInNldFByb2R1Y3RzIiwiZ2V0UHJvZHVjdHMiLCJwcm9kdWN0c0RhdGEiLCJtYWluIiwiY2xhc3NOYW1lIiwib25NZW51VG9nZ2xlIiwiaXNPcGVuIiwib25DbG9zZSIsInVsIiwibWFwIiwicHJvZHVjdCIsImxpIiwic3JjIiwiaW1hZ2UiLCJ3aWR0aCIsInAiLCJ0aXRsZSIsInByaWNlIiwiY2F0ZWdvcnkiLCJCb3R0b21jb250Iiwib25DbGljayIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/products/index.js\n"));

/***/ })

});