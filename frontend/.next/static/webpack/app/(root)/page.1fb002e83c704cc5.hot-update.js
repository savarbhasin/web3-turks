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

/***/ "(app-pages-browser)/./components/TaskSubmit.tsx":
/*!***********************************!*\
  !*** ./components/TaskSubmit.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SubmitTask; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _slices_workerSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/slices/workerSlice */ \"(app-pages-browser)/./slices/workerSlice.ts\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hot-toast */ \"(app-pages-browser)/./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction SubmitTask() {\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const { token, user } = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.auth);\n    const { balance } = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.worker);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();\n    const fetchData = async ()=>{\n        setLoading(true);\n        const res = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"http://localhost:3001/v1/worker/nextTask\", {\n            headers: {\n                Authorization: \"Bearer \".concat(token)\n            }\n        });\n        setData(res.data.taskDetails);\n        setLoading(false);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        token != null && user == \"worker\" && fetchData();\n    }, [\n        token\n    ]);\n    const handleClick = async (optionId, taskId)=>{\n        react_hot_toast__WEBPACK_IMPORTED_MODULE_3__[\"default\"].loading(\"Submitting task!\");\n        const submittedRes = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].post(\"http://localhost:3001/v1/worker/submission\", {\n            optionId,\n            taskId\n        }, {\n            headers: {\n                Authorization: \"Bearer \".concat(token)\n            }\n        });\n        dispatch((0,_slices_workerSlice__WEBPACK_IMPORTED_MODULE_1__.setBalance)(submittedRes.data.balance + balance));\n        react_hot_toast__WEBPACK_IMPORTED_MODULE_3__[\"default\"].dismiss();\n        react_hot_toast__WEBPACK_IMPORTED_MODULE_3__[\"default\"].success(\"Task submitted successfully!\");\n        fetchData();\n    };\n    const createTransation = ()=>{};\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            data && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col gap-5 w-full justify-center items-center my-20\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-xl font-bold\",\n                        children: data.title\n                    }, void 0, false, {\n                        fileName: \"D:\\\\fullstack-project\\\\user-frontend\\\\components\\\\TaskSubmit.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row gap-2\",\n                        children: data.options.map((option)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"max-h-[200px] cursor-pointer max-w-[300px]\",\n                                onClick: ()=>handleClick(option.id, data.id),\n                                src: option.image_url,\n                                alt: \"\"\n                            }, option.id, false, {\n                                fileName: \"D:\\\\fullstack-project\\\\user-frontend\\\\components\\\\TaskSubmit.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 32\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"D:\\\\fullstack-project\\\\user-frontend\\\\components\\\\TaskSubmit.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\fullstack-project\\\\user-frontend\\\\components\\\\TaskSubmit.tsx\",\n                lineNumber: 59,\n                columnNumber: 13\n            }, this),\n            !data && !loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col w-full justify-center items-center my-40\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-xl font-bold\",\n                    children: \"No tasks available. Check back in some time.\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\fullstack-project\\\\user-frontend\\\\components\\\\TaskSubmit.tsx\",\n                    lineNumber: 73,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\fullstack-project\\\\user-frontend\\\\components\\\\TaskSubmit.tsx\",\n                lineNumber: 72,\n                columnNumber: 17\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(SubmitTask, \"1FEryP/PQnzCYcL/8ddTS+9A7EE=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch\n    ];\n});\n_c = SubmitTask;\nvar _c;\n$RefreshReg$(_c, \"SubmitTask\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvVGFza1N1Ym1pdC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNrRDtBQUN4QjtBQUNrQjtBQUNSO0FBQ007QUFDQTtBQVkzQixTQUFTTzs7SUFDcEIsTUFBTSxDQUFDQyxNQUFLQyxRQUFRLEdBQUdOLCtDQUFRQTtJQUMvQixNQUFNLEVBQUNPLEtBQUssRUFBRUMsSUFBSSxFQUFDLEdBQUdMLHdEQUFXQSxDQUFDLENBQUNNLFFBQVlBLE1BQU1DLElBQUk7SUFDekQsTUFBTSxFQUFDQyxPQUFPLEVBQUMsR0FBR1Isd0RBQVdBLENBQUMsQ0FBQ00sUUFBWUEsTUFBTUcsTUFBTTtJQUN2RCxNQUFNLENBQUNDLFNBQVFDLFdBQVcsR0FBR2QsK0NBQVFBLENBQUM7SUFDdEMsTUFBTWUsV0FBV2Isd0RBQVdBO0lBRTVCLE1BQU1jLFlBQVk7UUFDZEYsV0FBVztRQUNYLE1BQU1HLE1BQU0sTUFBTW5CLDZDQUFLQSxDQUFDb0IsR0FBRyxDQUFDLDRDQUEyQztZQUFDQyxTQUFRO2dCQUFDQyxlQUFjLFVBQWdCLE9BQU5iO1lBQU87UUFBQztRQUNqSEQsUUFBUVcsSUFBSVosSUFBSSxDQUFDZ0IsV0FBVztRQUM1QlAsV0FBVztJQUNmO0lBRUFmLGdEQUFTQSxDQUFDO1FBQ05RLFNBQU8sUUFBUUMsUUFBTSxZQUFZUTtJQUNyQyxHQUFFO1FBQUNUO0tBQU07SUFFVCxNQUFNZSxjQUFjLE9BQU1DLFVBQWdCQztRQUN0Q3ZCLHVEQUFLQSxDQUFDWSxPQUFPLENBQUM7UUFDZCxNQUFNWSxlQUFnQixNQUFNM0IsNkNBQUtBLENBQUM0QixJQUFJLENBQUMsOENBQTZDO1lBQ2hGSDtZQUNBQztRQUNKLEdBQUU7WUFBQ0wsU0FBUTtnQkFBQ0MsZUFBYyxVQUFnQixPQUFOYjtZQUFPO1FBQUM7UUFDNUNRLFNBQVNsQiwrREFBVUEsQ0FBQzRCLGFBQWFwQixJQUFJLENBQUNNLE9BQU8sR0FBQ0E7UUFDOUNWLHVEQUFLQSxDQUFDMEIsT0FBTztRQUNiMUIsdURBQUtBLENBQUMyQixPQUFPLENBQUM7UUFDZFo7SUFDSjtJQUVBLE1BQU1hLG1CQUFtQixLQUV6QjtJQUtBLHFCQUNJOztZQUNFeEIsc0JBQ0UsOERBQUN5QjtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNDO3dCQUFHRCxXQUFVO2tDQUFxQjFCLEtBQUs0QixLQUFLOzs7Ozs7a0NBRTdDLDhEQUFDSDt3QkFBSUMsV0FBVTtrQ0FDVjFCLEtBQUs2QixPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFDQzs0QkFDZixxQkFBTyw4REFBQ0M7Z0NBQUlOLFdBQVU7Z0NBQTZDTyxTQUFTLElBQUloQixZQUFZYyxPQUFPRyxFQUFFLEVBQUNsQyxLQUFLa0MsRUFBRTtnQ0FBbUJDLEtBQUtKLE9BQU9LLFNBQVM7Z0NBQUVDLEtBQUk7K0JBQXRDTixPQUFPRyxFQUFFOzs7Ozt3QkFDbEk7Ozs7Ozs7Ozs7OztZQU1SLENBQUNsQyxRQUFRLENBQUNRLHlCQUNOLDhEQUFDaUI7Z0JBQUlDLFdBQVU7MEJBQ1gsNEVBQUNZO29CQUFFWixXQUFVOzhCQUFvQjs7Ozs7Ozs7Ozs7OztBQU9yRDtHQTdEd0IzQjs7UUFFRUQsb0RBQVdBO1FBQ2ZBLG9EQUFXQTtRQUVaRCxvREFBV0E7OztLQUxSRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Rhc2tTdWJtaXQudHN4P2RhMmYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuaW1wb3J0IHsgc2V0QmFsYW5jZSB9IGZyb20gXCJAL3NsaWNlcy93b3JrZXJTbGljZVwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHRvYXN0IGZyb20gXCJyZWFjdC1ob3QtdG9hc3RcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbmludGVyZmFjZSBEYXRhIHtcclxuICAgIGlkOm51bWJlcjtcclxuICAgIHRpdGxlOnN0cmluZztcclxuICAgIG9wdGlvbnM6e1xyXG4gICAgICAgIGltYWdlX3VybDpzdHJpbmc7XHJcbiAgICAgICAgaWQ6bnVtYmVyO1xyXG4gICAgfVtdXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdWJtaXRUYXNrICgpe1xyXG4gICAgY29uc3QgW2RhdGEsc2V0RGF0YV0gPSB1c2VTdGF0ZTxEYXRhPigpO1xyXG4gICAgY29uc3Qge3Rva2VuLCB1c2VyfSA9IHVzZVNlbGVjdG9yKChzdGF0ZTphbnkpPT5zdGF0ZS5hdXRoKTtcclxuICAgIGNvbnN0IHtiYWxhbmNlfSA9IHVzZVNlbGVjdG9yKChzdGF0ZTphbnkpPT5zdGF0ZS53b3JrZXIpO1xyXG4gICAgY29uc3QgW2xvYWRpbmcsc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYygpPT57XHJcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS92MS93b3JrZXIvbmV4dFRhc2snLHtoZWFkZXJzOntBdXRob3JpemF0aW9uOmBCZWFyZXIgJHt0b2tlbn1gfX0pXHJcbiAgICAgICAgc2V0RGF0YShyZXMuZGF0YS50YXNrRGV0YWlscyk7XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgdG9rZW4hPW51bGwgJiYgdXNlcj09J3dvcmtlcicgJiYgZmV0Y2hEYXRhKClcclxuICAgIH0sW3Rva2VuXSlcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbGljayA9IGFzeW5jKG9wdGlvbklkOm51bWJlcix0YXNrSWQ6bnVtYmVyKT0+e1xyXG4gICAgICAgIHRvYXN0LmxvYWRpbmcoXCJTdWJtaXR0aW5nIHRhc2shXCIpO1xyXG4gICAgICAgIGNvbnN0IHN1Ym1pdHRlZFJlcyAgPSBhd2FpdCBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDEvdjEvd29ya2VyL3N1Ym1pc3Npb24nLHtcclxuICAgICAgICAgICAgb3B0aW9uSWQsXHJcbiAgICAgICAgICAgIHRhc2tJZFxyXG4gICAgICAgIH0se2hlYWRlcnM6e0F1dGhvcml6YXRpb246YEJlYXJlciAke3Rva2VufWB9fSlcclxuICAgICAgICBkaXNwYXRjaChzZXRCYWxhbmNlKHN1Ym1pdHRlZFJlcy5kYXRhLmJhbGFuY2UrYmFsYW5jZSkpO1xyXG4gICAgICAgIHRvYXN0LmRpc21pc3MoKTtcclxuICAgICAgICB0b2FzdC5zdWNjZXNzKFwiVGFzayBzdWJtaXR0ZWQgc3VjY2Vzc2Z1bGx5IVwiKTtcclxuICAgICAgICBmZXRjaERhdGEoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjcmVhdGVUcmFuc2F0aW9uID0gKCk9PntcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuICggXHJcbiAgICAgICAgPD5cclxuICAgICAgICB7IGRhdGEgJiZcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC01IHctZnVsbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgbXktMjBcIj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZFwiPntkYXRhLnRpdGxlfTwvaDE+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGdhcC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2RhdGEub3B0aW9ucy5tYXAoKG9wdGlvbik9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxpbWcgY2xhc3NOYW1lPVwibWF4LWgtWzIwMHB4XSBjdXJzb3ItcG9pbnRlciBtYXgtdy1bMzAwcHhdXCIgb25DbGljaz17KCk9PmhhbmRsZUNsaWNrKG9wdGlvbi5pZCxkYXRhLmlkKX0ga2V5PXtvcHRpb24uaWR9IHNyYz17b3B0aW9uLmltYWdlX3VybH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgIWRhdGEgJiYgIWxvYWRpbmcgJiZcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB3LWZ1bGwganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIG15LTQwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGRcIj5ObyB0YXNrcyBhdmFpbGFibGUuIENoZWNrIGJhY2sgaW4gc29tZSB0aW1lLjwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICB9XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcblxyXG5cclxufSJdLCJuYW1lcyI6WyJzZXRCYWxhbmNlIiwiYXhpb3MiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInRvYXN0IiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsIlN1Ym1pdFRhc2siLCJkYXRhIiwic2V0RGF0YSIsInRva2VuIiwidXNlciIsInN0YXRlIiwiYXV0aCIsImJhbGFuY2UiLCJ3b3JrZXIiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImRpc3BhdGNoIiwiZmV0Y2hEYXRhIiwicmVzIiwiZ2V0IiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJ0YXNrRGV0YWlscyIsImhhbmRsZUNsaWNrIiwib3B0aW9uSWQiLCJ0YXNrSWQiLCJzdWJtaXR0ZWRSZXMiLCJwb3N0IiwiZGlzbWlzcyIsInN1Y2Nlc3MiLCJjcmVhdGVUcmFuc2F0aW9uIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJ0aXRsZSIsIm9wdGlvbnMiLCJtYXAiLCJvcHRpb24iLCJpbWciLCJvbkNsaWNrIiwiaWQiLCJzcmMiLCJpbWFnZV91cmwiLCJhbHQiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/TaskSubmit.tsx\n"));

/***/ })

});