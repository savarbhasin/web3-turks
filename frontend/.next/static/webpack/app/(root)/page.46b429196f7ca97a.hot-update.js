"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(root)/page",{

/***/ "(app-pages-browser)/./app/(root)/page.tsx":
/*!*****************************!*\
  !*** ./app/(root)/page.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_Drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Drop */ \"(app-pages-browser)/./components/Drop.tsx\");\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Navbar */ \"(app-pages-browser)/./components/Navbar.tsx\");\n/* harmony import */ var _slices_authSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/slices/authSlice */ \"(app-pages-browser)/./slices/authSlice.ts\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    //@ts-ignore\n    const { user, token } = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.auth);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex flex-col bg-slate-200 h-screen overflow-hidden text-black\",\n        children: [\n            !user && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row w-full h-screen justify-center items-center gap-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"border border-black text-2xl px-5 py-2 rounded-xl font-bold\",\n                        onClick: ()=>dispatch((0,_slices_authSlice__WEBPACK_IMPORTED_MODULE_3__.setUser)(\"user\")),\n                        children: \"User\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\fullstack-project\\\\user-frontend\\\\app\\\\(root)\\\\page.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 15\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"border border-black text-2xl px-5 py-2 rounded-xl font-bold\",\n                        onClick: ()=>dispatch((0,_slices_authSlice__WEBPACK_IMPORTED_MODULE_3__.setUser)(\"worker\")),\n                        children: \"Worker\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\fullstack-project\\\\user-frontend\\\\app\\\\(root)\\\\page.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 15\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\fullstack-project\\\\user-frontend\\\\app\\\\(root)\\\\page.tsx\",\n                lineNumber: 20,\n                columnNumber: 13\n            }, this),\n            user && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\fullstack-project\\\\user-frontend\\\\app\\\\(root)\\\\page.tsx\",\n                lineNumber: 25,\n                columnNumber: 16\n            }, this),\n            user == \"user\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Drop__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\fullstack-project\\\\user-frontend\\\\app\\\\(root)\\\\page.tsx\",\n                lineNumber: 26,\n                columnNumber: 24\n            }, this),\n            user == \"worker\" && token && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SubmitTask, {}, void 0, false, {\n                fileName: \"D:\\\\fullstack-project\\\\user-frontend\\\\app\\\\(root)\\\\page.tsx\",\n                lineNumber: 27,\n                columnNumber: 37\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\fullstack-project\\\\user-frontend\\\\app\\\\(root)\\\\page.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"JjK4w5Up0AePm4Hm6A7IVljHGGI=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8ocm9vdCkvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDcUM7QUFDSTtBQUNJO0FBQ0g7QUFDQTtBQUszQixTQUFTSzs7SUFDdEIsWUFBWTtJQUNaLE1BQU0sRUFBQ0MsSUFBSSxFQUFFQyxLQUFLLEVBQUMsR0FBR0gsd0RBQVdBLENBQUNJLENBQUFBLFFBQU9BLE1BQU1DLElBQUk7SUFDbkQsTUFBTUMsV0FBV1Asd0RBQVdBO0lBRTVCLHFCQUNFLDhEQUFDUTtRQUFLQyxXQUFVOztZQUVaLENBQUNOLHNCQUNHLDhEQUFDTztnQkFBSUQsV0FBVTs7a0NBQ2IsOERBQUNFO3dCQUFPRixXQUFVO3dCQUE4REcsU0FBUyxJQUFJTCxTQUFTUiwwREFBT0EsQ0FBQztrQ0FBVTs7Ozs7O2tDQUN4SCw4REFBQ1k7d0JBQU9GLFdBQVU7d0JBQThERyxTQUFTLElBQUlMLFNBQVNSLDBEQUFPQSxDQUFDO2tDQUFZOzs7Ozs7Ozs7Ozs7WUFHaklJLHNCQUFRLDhEQUFDTCwwREFBTUE7Ozs7O1lBQ2ZLLFFBQU0sd0JBQVUsOERBQUNOLHdEQUFJQTs7Ozs7WUFDckJNLFFBQVEsWUFBWUMsdUJBQVMsOERBQUNTOzs7Ozs7Ozs7OztBQUlyQztHQXBCd0JYOztRQUVBRCxvREFBV0E7UUFDaEJELG9EQUFXQTs7O0tBSE5FIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC8ocm9vdCkvcGFnZS50c3g/ZmM3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IERyb3AgZnJvbSBcIkAvY29tcG9uZW50cy9Ecm9wXCI7XG5pbXBvcnQgTmF2YmFyIGZyb20gXCJAL2NvbXBvbmVudHMvTmF2YmFyXCI7XG5pbXBvcnQgeyBzZXRVc2VyIH0gZnJvbSBcIkAvc2xpY2VzL2F1dGhTbGljZVwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgVGFzayBmcm9tIFwiLi90YXNrL1t0YXNrSWRdL3BhZ2VcIjtcblxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIC8vQHRzLWlnbm9yZVxuICBjb25zdCB7dXNlciwgdG9rZW59ID0gdXNlU2VsZWN0b3Ioc3RhdGU9PnN0YXRlLmF1dGgpOyAgXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiBcbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGJnLXNsYXRlLTIwMCBoLXNjcmVlbiBvdmVyZmxvdy1oaWRkZW4gdGV4dC1ibGFja1wiPlxuICAgICAge1xuICAgICAgICAhdXNlciAmJiBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyB3LWZ1bGwgaC1zY3JlZW4ganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGdhcC0xMFwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItYmxhY2sgdGV4dC0yeGwgcHgtNSBweS0yIHJvdW5kZWQteGwgZm9udC1ib2xkXCIgb25DbGljaz17KCk9PmRpc3BhdGNoKHNldFVzZXIoJ3VzZXInKSl9PlVzZXI8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWJsYWNrIHRleHQtMnhsIHB4LTUgcHktMiByb3VuZGVkLXhsIGZvbnQtYm9sZFwiIG9uQ2xpY2s9eygpPT5kaXNwYXRjaChzZXRVc2VyKCd3b3JrZXInKSl9PldvcmtlcjwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICB9XG4gICAgICB7dXNlciAmJiA8TmF2YmFyLz4gfVxuICAgICAge3VzZXI9PSd1c2VyJyAmJiA8RHJvcC8+fVxuICAgICAge3VzZXIgPT0gJ3dvcmtlcicgJiYgdG9rZW4gJiYgPFN1Ym1pdFRhc2svPn1cbiAgICAgIFxuICAgIDwvbWFpbj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJEcm9wIiwiTmF2YmFyIiwic2V0VXNlciIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJIb21lIiwidXNlciIsInRva2VuIiwic3RhdGUiLCJhdXRoIiwiZGlzcGF0Y2giLCJtYWluIiwiY2xhc3NOYW1lIiwiZGl2IiwiYnV0dG9uIiwib25DbGljayIsIlN1Ym1pdFRhc2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(root)/page.tsx\n"));

/***/ })

});