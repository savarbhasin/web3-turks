"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(root)/nextTask/page",{

/***/ "(app-pages-browser)/./app/(root)/nextTask/page.tsx":
/*!**************************************!*\
  !*** ./app/(root)/nextTask/page.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SubmitTask; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _slices_workerSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/slices/workerSlice */ \"(app-pages-browser)/./slices/workerSlice.ts\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction SubmitTask() {\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const { token, user } = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.auth);\n    const { balance } = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.worker);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n    const fetchData = async ()=>{\n        const res = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:3001/v1/worker/nextTask\", {\n            headers: {\n                Authorization: \"Bearer \".concat(token)\n            }\n        });\n        setData(res.data.taskDetails);\n        console.log(data);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        token != null && user == \"worker\" && fetchData();\n    }, [\n        token\n    ]);\n    const handleClick = async (optionId, taskId)=>{\n        const submittedRes = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"http://localhost:3001/v1/worker/submission\", {\n            optionId,\n            taskId\n        });\n        dispatch((0,_slices_workerSlice__WEBPACK_IMPORTED_MODULE_1__.setBalance)(submittedRes.data.balance + balance));\n        fetchData();\n    };\n    const createTransation = ()=>{};\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: data && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: data.title\n                }, void 0, false, {\n                    fileName: \"D:\\\\fullstack-project\\\\user-frontend\\\\app\\\\(root)\\\\nextTask\\\\page.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: data.options.map((option)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            onClick: ()=>handleClick(option.id, data.id),\n                            src: option.image_url,\n                            alt: \"\"\n                        }, option.id, false, {\n                            fileName: \"D:\\\\fullstack-project\\\\user-frontend\\\\app\\\\(root)\\\\nextTask\\\\page.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 32\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"D:\\\\fullstack-project\\\\user-frontend\\\\app\\\\(root)\\\\nextTask\\\\page.tsx\",\n                    lineNumber: 56,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\fullstack-project\\\\user-frontend\\\\app\\\\(root)\\\\nextTask\\\\page.tsx\",\n            lineNumber: 53,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\fullstack-project\\\\user-frontend\\\\app\\\\(root)\\\\nextTask\\\\page.tsx\",\n        lineNumber: 51,\n        columnNumber: 9\n    }, this);\n}\n_s(SubmitTask, \"oVV8SJ3XZpEqeCqkXJ1K65xa6VI=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch\n    ];\n});\n_c = SubmitTask;\nvar _c;\n$RefreshReg$(_c, \"SubmitTask\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8ocm9vdCkvbmV4dFRhc2svcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ2tEO0FBQ3hCO0FBQ2tCO0FBQ0Y7QUFDQTtBQVkzQixTQUFTTTs7SUFDcEIsTUFBTSxDQUFDQyxNQUFLQyxRQUFRLEdBQUdMLCtDQUFRQTtJQUMvQixNQUFNLEVBQUNNLEtBQUssRUFBRUMsSUFBSSxFQUFDLEdBQUdMLHdEQUFXQSxDQUFDLENBQUNNLFFBQVlBLE1BQU1DLElBQUk7SUFDekQsTUFBTSxFQUFDQyxPQUFPLEVBQUMsR0FBR1Isd0RBQVdBLENBQUMsQ0FBQ00sUUFBWUEsTUFBTUcsTUFBTTtJQUN2RCxNQUFNQyxXQUFXWCx3REFBV0E7SUFFNUIsTUFBTVksWUFBWTtRQUNkLE1BQU1DLE1BQU0sTUFBTWhCLDZDQUFLQSxDQUFDaUIsR0FBRyxDQUFDLDRDQUEyQztZQUFDQyxTQUFRO2dCQUFDQyxlQUFjLFVBQWdCLE9BQU5YO1lBQU87UUFBQztRQUNqSEQsUUFBUVMsSUFBSVYsSUFBSSxDQUFDYyxXQUFXO1FBQzVCQyxRQUFRQyxHQUFHLENBQUNoQjtJQUNoQjtJQUVBTCxnREFBU0EsQ0FBQztRQUNOTyxTQUFPLFFBQVFDLFFBQU0sWUFBWU07SUFDckMsR0FBRTtRQUFDUDtLQUFNO0lBRVQsTUFBTWUsY0FBYyxPQUFNQyxVQUFnQkM7UUFDdEMsTUFBTUMsZUFBZSxNQUFNMUIsNkNBQUtBLENBQUMyQixJQUFJLENBQUMsOENBQTZDO1lBQy9FSDtZQUNBQztRQUNKO1FBQ0FYLFNBQVNmLCtEQUFVQSxDQUFDMkIsYUFBYXBCLElBQUksQ0FBQ00sT0FBTyxHQUFDQTtRQUM5Q0c7SUFDSjtJQUVBLE1BQU1hLG1CQUFtQixLQUV6QjtJQUtBLHFCQUNJLDhEQUFDQztrQkFDQXZCLHNCQUNHLDhEQUFDdUI7OzhCQUNHLDhEQUFDQzs4QkFBSXhCLEtBQUt5QixLQUFLOzs7Ozs7OEJBRWYsOERBQUNGOzhCQUNJdkIsS0FBSzBCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQUNDO3dCQUNmLHFCQUFPLDhEQUFDQzs0QkFBSUMsU0FBUyxJQUFJYixZQUFZVyxPQUFPRyxFQUFFLEVBQUMvQixLQUFLK0IsRUFBRTs0QkFBbUJDLEtBQUtKLE9BQU9LLFNBQVM7NEJBQUVDLEtBQUk7MkJBQXRDTixPQUFPRyxFQUFFOzs7OztvQkFDM0U7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU3BCO0dBbER3QmhDOztRQUVFRCxvREFBV0E7UUFDZkEsb0RBQVdBO1FBQ1pELG9EQUFXQTs7O0tBSlJFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC8ocm9vdCkvbmV4dFRhc2svcGFnZS50c3g/ZWQxNiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5pbXBvcnQgeyBzZXRCYWxhbmNlIH0gZnJvbSBcIkAvc2xpY2VzL3dvcmtlclNsaWNlXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxuaW50ZXJmYWNlIERhdGEge1xyXG4gICAgaWQ6bnVtYmVyO1xyXG4gICAgdGl0bGU6c3RyaW5nO1xyXG4gICAgb3B0aW9uczp7XHJcbiAgICAgICAgaW1hZ2VfdXJsOnN0cmluZztcclxuICAgICAgICBpZDpudW1iZXI7XHJcbiAgICB9W11cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN1Ym1pdFRhc2sgKCl7XHJcbiAgICBjb25zdCBbZGF0YSxzZXREYXRhXSA9IHVzZVN0YXRlPERhdGE+KCk7XHJcbiAgICBjb25zdCB7dG9rZW4sIHVzZXJ9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOmFueSk9PnN0YXRlLmF1dGgpO1xyXG4gICAgY29uc3Qge2JhbGFuY2V9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOmFueSk9PnN0YXRlLndvcmtlcik7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMoKT0+e1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL3YxL3dvcmtlci9uZXh0VGFzaycse2hlYWRlcnM6e0F1dGhvcml6YXRpb246YEJlYXJlciAke3Rva2VufWB9fSlcclxuICAgICAgICBzZXREYXRhKHJlcy5kYXRhLnRhc2tEZXRhaWxzKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIHRva2VuIT1udWxsICYmIHVzZXI9PSd3b3JrZXInICYmIGZldGNoRGF0YSgpXHJcbiAgICB9LFt0b2tlbl0pXHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSBhc3luYyhvcHRpb25JZDpudW1iZXIsdGFza0lkOm51bWJlcik9PntcclxuICAgICAgICBjb25zdCBzdWJtaXR0ZWRSZXMgPSBhd2FpdCBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDEvdjEvd29ya2VyL3N1Ym1pc3Npb24nLHtcclxuICAgICAgICAgICAgb3B0aW9uSWQsXHJcbiAgICAgICAgICAgIHRhc2tJZFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgZGlzcGF0Y2goc2V0QmFsYW5jZShzdWJtaXR0ZWRSZXMuZGF0YS5iYWxhbmNlK2JhbGFuY2UpKTtcclxuICAgICAgICBmZXRjaERhdGEoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjcmVhdGVUcmFuc2F0aW9uID0gKCk9PntcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuICggXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICB7ZGF0YSYmXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aDE+e2RhdGEudGl0bGV9PC9oMT5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHtkYXRhLm9wdGlvbnMubWFwKChvcHRpb24pPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8aW1nIG9uQ2xpY2s9eygpPT5oYW5kbGVDbGljayhvcHRpb24uaWQsZGF0YS5pZCl9IGtleT17b3B0aW9uLmlkfSBzcmM9e29wdGlvbi5pbWFnZV91cmx9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxuXHJcblxyXG59Il0sIm5hbWVzIjpbInNldEJhbGFuY2UiLCJheGlvcyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsIlN1Ym1pdFRhc2siLCJkYXRhIiwic2V0RGF0YSIsInRva2VuIiwidXNlciIsInN0YXRlIiwiYXV0aCIsImJhbGFuY2UiLCJ3b3JrZXIiLCJkaXNwYXRjaCIsImZldGNoRGF0YSIsInJlcyIsImdldCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwidGFza0RldGFpbHMiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ2xpY2siLCJvcHRpb25JZCIsInRhc2tJZCIsInN1Ym1pdHRlZFJlcyIsInBvc3QiLCJjcmVhdGVUcmFuc2F0aW9uIiwiZGl2IiwiaDEiLCJ0aXRsZSIsIm9wdGlvbnMiLCJtYXAiLCJvcHRpb24iLCJpbWciLCJvbkNsaWNrIiwiaWQiLCJzcmMiLCJpbWFnZV91cmwiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(root)/nextTask/page.tsx\n"));

/***/ })

});