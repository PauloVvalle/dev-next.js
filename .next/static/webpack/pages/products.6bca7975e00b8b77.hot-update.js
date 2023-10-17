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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_components_Appbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/components/Appbar */ \"./src/app/components/Appbar.js\");\n/* harmony import */ var _app_components_Bottom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/components/Bottom */ \"./src/app/components/Bottom.js\");\n/* harmony import */ var _app_components_Drawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/components/Drawer */ \"./src/app/components/Drawer.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tailwindcss/tailwind.css */ \"./node_modules/tailwindcss/tailwind.css\");\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _app_utils_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/app/utils/api */ \"./src/app/utils/api.js\");\n/* harmony import */ var _app_contexts_cartContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/app/contexts/cartContext */ \"./src/app/contexts/cartContext.js\");\n/* harmony import */ var _app_styles_ProductsStyles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/app/styles/ProductsStyles */ \"./src/app/styles/ProductsStyles.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst ProductsPage = ()=>{\n    _s();\n    const [isDrawerOpen, setIsDrawerOpen] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)();\n    const { addToCart } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useContext)(_app_contexts_cartContext__WEBPACK_IMPORTED_MODULE_9__.CartContext);\n    const handleMenuToggle = ()=>{\n        setIsDrawerOpen(!isDrawerOpen);\n    };\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{\n        const getProducts = async ()=>{\n            const productsData = await (0,_app_utils_api__WEBPACK_IMPORTED_MODULE_8__.fetchProducts)();\n            setProducts(productsData);\n        };\n        getProducts();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"min-h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Appbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                onMenuToggle: handleMenuToggle\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\paulo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\react\\\\projeto react\\\\dev-next.js\\\\src\\\\pages\\\\products\\\\index.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Drawer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                isOpen: isDrawerOpen,\n                onClose: handleMenuToggle\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\paulo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\react\\\\projeto react\\\\dev-next.js\\\\src\\\\pages\\\\products\\\\index.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"flex flex-wrap justify-around\",\n                children: products.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"flex ju\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_styles_ProductsStyles__WEBPACK_IMPORTED_MODULE_10__.ProductsCont, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_styles_ProductsStyles__WEBPACK_IMPORTED_MODULE_10__.ProductContainer, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_styles_ProductsStyles__WEBPACK_IMPORTED_MODULE_10__.ProductImage, {\n                                        src: product.image,\n                                        width: 50\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\paulo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\react\\\\projeto react\\\\dev-next.js\\\\src\\\\pages\\\\products\\\\index.js\",\n                                        lineNumber: 49,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: product.title\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\paulo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\react\\\\projeto react\\\\dev-next.js\\\\src\\\\pages\\\\products\\\\index.js\",\n                                        lineNumber: 50,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: product.price\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\paulo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\react\\\\projeto react\\\\dev-next.js\\\\src\\\\pages\\\\products\\\\index.js\",\n                                        lineNumber: 51,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: product.category\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\paulo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\react\\\\projeto react\\\\dev-next.js\\\\src\\\\pages\\\\products\\\\index.js\",\n                                        lineNumber: 53,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_styles_ProductsStyles__WEBPACK_IMPORTED_MODULE_10__.CardButton, {\n                                        onClick: ()=>addToCart(product),\n                                        className: \"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full\",\n                                        children: \"Add cart\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\paulo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\react\\\\projeto react\\\\dev-next.js\\\\src\\\\pages\\\\products\\\\index.js\",\n                                        lineNumber: 54,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\paulo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\react\\\\projeto react\\\\dev-next.js\\\\src\\\\pages\\\\products\\\\index.js\",\n                                lineNumber: 48,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\paulo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\react\\\\projeto react\\\\dev-next.js\\\\src\\\\pages\\\\products\\\\index.js\",\n                            lineNumber: 47,\n                            columnNumber: 13\n                        }, undefined)\n                    }, product.id, false, {\n                        fileName: \"C:\\\\Users\\\\paulo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\react\\\\projeto react\\\\dev-next.js\\\\src\\\\pages\\\\products\\\\index.js\",\n                        lineNumber: 46,\n                        columnNumber: 12\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\paulo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\react\\\\projeto react\\\\dev-next.js\\\\src\\\\pages\\\\products\\\\index.js\",\n                lineNumber: 43,\n                columnNumber: 11\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Bottom__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\paulo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\react\\\\projeto react\\\\dev-next.js\\\\src\\\\pages\\\\products\\\\index.js\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\paulo\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\react\\\\projeto react\\\\dev-next.js\\\\src\\\\pages\\\\products\\\\index.js\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProductsPage, \"wHxeY++tEFHP6fNtHnQjyLp1d4g=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession,\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = ProductsPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductsPage);\nvar _c;\n$RefreshReg$(_c, \"ProductsPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJvZHVjdHMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQzZDO0FBQ0E7QUFDQTtBQUNpQjtBQUN0QjtBQUNxQjtBQUM1QjtBQUNlO0FBQ1M7QUFDOEM7QUFJdkcsTUFBTWlCLGVBQWU7O0lBQ25CLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdULCtDQUFRQTtJQUNoRCxNQUFNLEVBQUNVLFNBQVMsRUFBQyxHQUFHWixpREFBVUEsQ0FBQ0ksa0VBQVdBO0lBRzFDLE1BQU1TLG1CQUFvQjtRQUN4QkYsZ0JBQWdCLENBQUNEO0lBQ25CO0lBR0EsTUFBTSxFQUFFSSxNQUFNQyxPQUFPLEVBQUUsR0FBR3BCLDJEQUFVQTtJQUNwQyxNQUFNcUIsU0FBU2xCLHNEQUFTQTtJQUV4QixNQUFNLENBQUNtQixVQUFVQyxZQUFZLEdBQUdoQiwrQ0FBUUEsQ0FBQyxFQUFFO0lBRTNDRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1rQixjQUFjO1lBQ2xCLE1BQU1DLGVBQWUsTUFBTWpCLDZEQUFhQTtZQUN4Q2UsWUFBWUU7UUFDZDtRQUNBRDtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDRTtRQUFLQyxXQUFVOzswQkFDZCw4REFBQzlCLDhEQUFNQTtnQkFBQytCLGNBQWNWOzs7Ozs7MEJBQ3RCLDhEQUFDbkIsOERBQU1BO2dCQUFDOEIsUUFBUWQ7Z0JBQWNlLFNBQVNaOzs7Ozs7MEJBRW5DLDhEQUFDYTtnQkFBR0osV0FBVTswQkFDWkwsU0FBU1UsR0FBRyxDQUFDLENBQUNDLHdCQUVmLDhEQUFDQzt3QkFBR1AsV0FBVTtrQ0FDYiw0RUFBQ2pCLHFFQUFZQTtzQ0FDYiw0RUFBQ0MseUVBQWdCQTs7a0RBQ2pCLDhEQUFDQyxxRUFBWUE7d0NBQUN1QixLQUFLRixRQUFRRyxLQUFLO3dDQUFFQyxPQUFPOzs7Ozs7a0RBQ3pDLDhEQUFDQztrREFBR0wsUUFBUU0sS0FBSzs7Ozs7O2tEQUNqQiw4REFBQ0Q7a0RBQUdMLFFBQVFPLEtBQUs7Ozs7OztrREFFakIsOERBQUNGO2tEQUFHTCxRQUFRUSxRQUFROzs7Ozs7a0RBQ3BCLDhEQUFDNUIsbUVBQVVBO3dDQUNSNkIsU0FBUyxJQUFNekIsVUFBVWdCO3dDQUMxQk4sV0FBVTtrREFBNEU7Ozs7Ozs7Ozs7Ozs7Ozs7O3VCQVY1RE0sUUFBUVUsRUFBRTs7Ozs7Ozs7OzswQkF3QjVDLDhEQUFDN0MsOERBQU1BOzs7Ozs7Ozs7OztBQVNiO0dBaEVNZ0I7O1FBVXNCZCx1REFBVUE7UUFDckJHLGtEQUFTQTs7O0tBWHBCVztBQWlFTiwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvcHJvZHVjdHMvaW5kZXguanM/NWE1MSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuaW1wb3J0IEFwcGJhciBmcm9tICdAL2FwcC9jb21wb25lbnRzL0FwcGJhcic7XHJcbmltcG9ydCBCb3R0b20gZnJvbSAnQC9hcHAvY29tcG9uZW50cy9Cb3R0b20nO1xyXG5pbXBvcnQgRHJhd2VyIGZyb20gJ0AvYXBwL2NvbXBvbmVudHMvRHJhd2VyJztcclxuaW1wb3J0IHsgdXNlU2Vzc2lvbiwgc2lnbkluLCBzaWduT3V0IH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgJ3RhaWx3aW5kY3NzL3RhaWx3aW5kLmNzcydcclxuaW1wb3J0IHsgZmV0Y2hQcm9kdWN0cyB9IGZyb20gJ0AvYXBwL3V0aWxzL2FwaSc7XHJcbmltcG9ydCB7IENhcnRDb250ZXh0IH0gZnJvbSAnQC9hcHAvY29udGV4dHMvY2FydENvbnRleHQnO1xyXG5pbXBvcnQgeyBQcm9kdWN0c0NvbnQsIFByb2R1Y3RDb250YWluZXIsIFByb2R1Y3RJbWFnZSwgQ2FyZEJ1dHRvbiB9IGZyb20gJ0AvYXBwL3N0eWxlcy9Qcm9kdWN0c1N0eWxlcyc7XHJcblxyXG5cclxuXHJcbmNvbnN0IFByb2R1Y3RzUGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBbaXNEcmF3ZXJPcGVuLCBzZXRJc0RyYXdlck9wZW5dID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCB7YWRkVG9DYXJ0fSA9IHVzZUNvbnRleHQoQ2FydENvbnRleHQpO1xyXG4gXHJcblxyXG4gIGNvbnN0IGhhbmRsZU1lbnVUb2dnbGUgID0gKCkgPT4ge1xyXG4gICAgc2V0SXNEcmF3ZXJPcGVuKCFpc0RyYXdlck9wZW4pXHJcbiAgfVxyXG5cclxuXHJcbiAgY29uc3QgeyBkYXRhOiBzZXNzaW9uIH0gPSB1c2VTZXNzaW9uKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IFtwcm9kdWN0cywgc2V0UHJvZHVjdHNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZ2V0UHJvZHVjdHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHByb2R1Y3RzRGF0YSA9IGF3YWl0IGZldGNoUHJvZHVjdHMoKTtcclxuICAgICAgc2V0UHJvZHVjdHMocHJvZHVjdHNEYXRhKTtcclxuICAgIH1cclxuICAgIGdldFByb2R1Y3RzKCk7XHJcbiAgfSwgW10pO1xyXG4gIFxyXG4gIHJldHVybiAoXHJcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW5cIj5cclxuICAgICAgPEFwcGJhciBvbk1lbnVUb2dnbGU9e2hhbmRsZU1lbnVUb2dnbGV9PjwvQXBwYmFyPlxyXG4gICAgICA8RHJhd2VyIGlzT3Blbj17aXNEcmF3ZXJPcGVufSBvbkNsb3NlPXtoYW5kbGVNZW51VG9nZ2xlfT48L0RyYXdlcj5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT0nZmxleCBmbGV4LXdyYXAganVzdGlmeS1hcm91bmQnPlxyXG4gICAgICAgICAgIHtwcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+IChcclxuXHJcbiAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0nZmxleCBqdScga2V5PXtwcm9kdWN0LmlkfT5cclxuICAgICAgICAgICAgPFByb2R1Y3RzQ29udD5cclxuICAgICAgICAgICAgPFByb2R1Y3RDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxQcm9kdWN0SW1hZ2Ugc3JjPXtwcm9kdWN0LmltYWdlfSB3aWR0aD17NTB9PjwvUHJvZHVjdEltYWdlPlxyXG4gICAgICAgICAgICA8cD57cHJvZHVjdC50aXRsZX08L3A+XHJcbiAgICAgICAgICAgIDxwPntwcm9kdWN0LnByaWNlfTwvcD5cclxuICAgICAgICAgICAgey8qIDxwPntwcm9kdWN0LmRlc2NyaXB0aW9ufTwvcD4gKi99XHJcbiAgICAgICAgICAgIDxwPntwcm9kdWN0LmNhdGVnb3J5fTwvcD5cclxuICAgICAgICAgICAgPENhcmRCdXR0b25cclxuICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYWRkVG9DYXJ0KHByb2R1Y3QpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nYmctYmx1ZS01MDAgaG92ZXI6YmctYmx1ZS03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQtZnVsbCc+XHJcbiAgICAgICAgICAgICAgICBBZGQgY2FydDwvQ2FyZEJ1dHRvbj5cclxuICAgICAgICAgICAgICA8L1Byb2R1Y3RDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPC9Qcm9kdWN0c0NvbnQ+XHJcbiAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICApKX1cclxuXHJcbiAgICAgICAgICA8L3VsPlxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgIDxCb3R0b20+PC9Cb3R0b20+XHJcbiAgICA8L21haW4+XHJcbiAgKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0c1BhZ2U7Il0sIm5hbWVzIjpbIkFwcGJhciIsIkJvdHRvbSIsIkRyYXdlciIsInVzZVNlc3Npb24iLCJzaWduSW4iLCJzaWduT3V0IiwidXNlUm91dGVyIiwiUmVhY3QiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJmZXRjaFByb2R1Y3RzIiwiQ2FydENvbnRleHQiLCJQcm9kdWN0c0NvbnQiLCJQcm9kdWN0Q29udGFpbmVyIiwiUHJvZHVjdEltYWdlIiwiQ2FyZEJ1dHRvbiIsIlByb2R1Y3RzUGFnZSIsImlzRHJhd2VyT3BlbiIsInNldElzRHJhd2VyT3BlbiIsImFkZFRvQ2FydCIsImhhbmRsZU1lbnVUb2dnbGUiLCJkYXRhIiwic2Vzc2lvbiIsInJvdXRlciIsInByb2R1Y3RzIiwic2V0UHJvZHVjdHMiLCJnZXRQcm9kdWN0cyIsInByb2R1Y3RzRGF0YSIsIm1haW4iLCJjbGFzc05hbWUiLCJvbk1lbnVUb2dnbGUiLCJpc09wZW4iLCJvbkNsb3NlIiwidWwiLCJtYXAiLCJwcm9kdWN0IiwibGkiLCJzcmMiLCJpbWFnZSIsIndpZHRoIiwicCIsInRpdGxlIiwicHJpY2UiLCJjYXRlZ29yeSIsIm9uQ2xpY2siLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/products/index.js\n"));

/***/ })

});