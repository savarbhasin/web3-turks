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

/***/ "(app-pages-browser)/./app/(root)/nextTask/page.tsx":
/*!**************************************!*\
  !*** ./app/(root)/nextTask/page.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SubmitTask; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _slices_workerSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/slices/workerSlice */ \"(app-pages-browser)/./slices/workerSlice.ts\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction SubmitTask() {\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const { token } = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.auth);\n    const { balance } = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.worker);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n    const fetchData = async ()=>{\n        const res = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:3001/v1/worker/nextTask\", {\n            headers: {\n                Authorization: \"Bearer \".concat(token)\n            }\n        });\n        setData(res.data[0]);\n        console.log(data);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        token && fetchData();\n    }, [\n        token\n    ]);\n    const handleClick = async (optionId, taskId)=>{\n        const submittedRes = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"http://localhost:3001/v1/worker/submission\", {\n            optionId,\n            taskId\n        });\n        dispatch((0,_slices_workerSlice__WEBPACK_IMPORTED_MODULE_1__.setBalance)(submittedRes.data.balance + balance));\n        fetchData();\n    };\n    const createTransation = ()=>{};\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: data && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: data.title\n                }, void 0, false, {\n                    fileName: \"D:\\\\fullstack-project\\\\user-frontend\\\\app\\\\(root)\\\\nextTask\\\\page.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: data.options.map((option)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            onClick: ()=>handleClick(option.id, data.id),\n                            src: option.image_url,\n                            alt: \"\"\n                        }, option.id, false, {\n                            fileName: \"D:\\\\fullstack-project\\\\user-frontend\\\\app\\\\(root)\\\\nextTask\\\\page.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 32\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"D:\\\\fullstack-project\\\\user-frontend\\\\app\\\\(root)\\\\nextTask\\\\page.tsx\",\n                    lineNumber: 56,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\fullstack-project\\\\user-frontend\\\\app\\\\(root)\\\\nextTask\\\\page.tsx\",\n            lineNumber: 53,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\fullstack-project\\\\user-frontend\\\\app\\\\(root)\\\\nextTask\\\\page.tsx\",\n        lineNumber: 51,\n        columnNumber: 9\n    }, this);\n}\n_s(SubmitTask, \"qqd6lVEZZRyE9SzSXq3axB6hK4Y=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch\n    ];\n});\n_c = SubmitTask;\nvar _c;\n$RefreshReg$(_c, \"SubmitTask\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8ocm9vdCkvbmV4dFRhc2svcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ2tEO0FBQ3hCO0FBQ2tCO0FBQ0Y7QUFDQTtBQVkzQixTQUFTTTs7SUFDcEIsTUFBTSxDQUFDQyxNQUFLQyxRQUFRLEdBQUdMLCtDQUFRQTtJQUMvQixNQUFNLEVBQUNNLEtBQUssRUFBQyxHQUFHSix3REFBV0EsQ0FBQyxDQUFDSyxRQUFZQSxNQUFNQyxJQUFJO0lBQ25ELE1BQU0sRUFBQ0MsT0FBTyxFQUFDLEdBQUdQLHdEQUFXQSxDQUFDLENBQUNLLFFBQVlBLE1BQU1HLE1BQU07SUFDdkQsTUFBTUMsV0FBV1Ysd0RBQVdBO0lBRTVCLE1BQU1XLFlBQVk7UUFDZCxNQUFNQyxNQUFNLE1BQU1mLDZDQUFLQSxDQUFDZ0IsR0FBRyxDQUFDLDRDQUEyQztZQUFDQyxTQUFRO2dCQUFDQyxlQUFjLFVBQWdCLE9BQU5WO1lBQU87UUFBQztRQUNqSEQsUUFBUVEsSUFBSVQsSUFBSSxDQUFDLEVBQUU7UUFDbkJhLFFBQVFDLEdBQUcsQ0FBQ2Q7SUFDaEI7SUFFQUwsZ0RBQVNBLENBQUM7UUFDTk8sU0FBU007SUFDYixHQUFFO1FBQUNOO0tBQU07SUFFVCxNQUFNYSxjQUFjLE9BQU1DLFVBQWdCQztRQUN0QyxNQUFNQyxlQUFlLE1BQU14Qiw2Q0FBS0EsQ0FBQ3lCLElBQUksQ0FBQyw4Q0FBNkM7WUFDL0VIO1lBQ0FDO1FBQ0o7UUFDQVYsU0FBU2QsK0RBQVVBLENBQUN5QixhQUFhbEIsSUFBSSxDQUFDSyxPQUFPLEdBQUNBO1FBQzlDRztJQUNKO0lBRUEsTUFBTVksbUJBQW1CLEtBRXpCO0lBS0EscUJBQ0ksOERBQUNDO2tCQUNBckIsc0JBQ0csOERBQUNxQjs7OEJBQ0csOERBQUNDOzhCQUFJdEIsS0FBS3VCLEtBQUs7Ozs7Ozs4QkFFZiw4REFBQ0Y7OEJBQ0lyQixLQUFLd0IsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBQ0M7d0JBQ2YscUJBQU8sOERBQUNDOzRCQUFJQyxTQUFTLElBQUliLFlBQVlXLE9BQU9HLEVBQUUsRUFBQzdCLEtBQUs2QixFQUFFOzRCQUFtQkMsS0FBS0osT0FBT0ssU0FBUzs0QkFBRUMsS0FBSTsyQkFBdENOLE9BQU9HLEVBQUU7Ozs7O29CQUMzRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTcEI7R0FsRHdCOUI7O1FBRUpELG9EQUFXQTtRQUNUQSxvREFBV0E7UUFDWkQsb0RBQVdBOzs7S0FKUkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwLyhyb290KS9uZXh0VGFzay9wYWdlLnRzeD9lZDE2Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcbmltcG9ydCB7IHNldEJhbGFuY2UgfSBmcm9tIFwiQC9zbGljZXMvd29ya2VyU2xpY2VcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcblxyXG5pbnRlcmZhY2UgRGF0YSB7XHJcbiAgICBpZDpudW1iZXI7XHJcbiAgICB0aXRsZTpzdHJpbmc7XHJcbiAgICBvcHRpb25zOntcclxuICAgICAgICBpbWFnZV91cmw6c3RyaW5nO1xyXG4gICAgICAgIGlkOm51bWJlcjtcclxuICAgIH1bXVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3VibWl0VGFzayAoKXtcclxuICAgIGNvbnN0IFtkYXRhLHNldERhdGFdID0gdXNlU3RhdGU8RGF0YT4oKTtcclxuICAgIGNvbnN0IHt0b2tlbn0gPSB1c2VTZWxlY3Rvcigoc3RhdGU6YW55KT0+c3RhdGUuYXV0aCk7XHJcbiAgICBjb25zdCB7YmFsYW5jZX0gPSB1c2VTZWxlY3Rvcigoc3RhdGU6YW55KT0+c3RhdGUud29ya2VyKTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYygpPT57XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjMwMDEvdjEvd29ya2VyL25leHRUYXNrJyx7aGVhZGVyczp7QXV0aG9yaXphdGlvbjpgQmVhcmVyICR7dG9rZW59YH19KVxyXG4gICAgICAgIHNldERhdGEocmVzLmRhdGFbMF0pXHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgdG9rZW4gJiYgZmV0Y2hEYXRhKClcclxuICAgIH0sW3Rva2VuXSlcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbGljayA9IGFzeW5jKG9wdGlvbklkOm51bWJlcix0YXNrSWQ6bnVtYmVyKT0+e1xyXG4gICAgICAgIGNvbnN0IHN1Ym1pdHRlZFJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS92MS93b3JrZXIvc3VibWlzc2lvbicse1xyXG4gICAgICAgICAgICBvcHRpb25JZCxcclxuICAgICAgICAgICAgdGFza0lkXHJcbiAgICAgICAgfSlcclxuICAgICAgICBkaXNwYXRjaChzZXRCYWxhbmNlKHN1Ym1pdHRlZFJlcy5kYXRhLmJhbGFuY2UrYmFsYW5jZSkpO1xyXG4gICAgICAgIGZldGNoRGF0YSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNyZWF0ZVRyYW5zYXRpb24gPSAoKT0+e1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKCBcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgIHtkYXRhJiZcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxoMT57ZGF0YS50aXRsZX08L2gxPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge2RhdGEub3B0aW9ucy5tYXAoKG9wdGlvbik9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxpbWcgb25DbGljaz17KCk9PmhhbmRsZUNsaWNrKG9wdGlvbi5pZCxkYXRhLmlkKX0ga2V5PXtvcHRpb24uaWR9IHNyYz17b3B0aW9uLmltYWdlX3VybH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG5cclxuXHJcbn0iXSwibmFtZXMiOlsic2V0QmFsYW5jZSIsImF4aW9zIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwiU3VibWl0VGFzayIsImRhdGEiLCJzZXREYXRhIiwidG9rZW4iLCJzdGF0ZSIsImF1dGgiLCJiYWxhbmNlIiwid29ya2VyIiwiZGlzcGF0Y2giLCJmZXRjaERhdGEiLCJyZXMiLCJnZXQiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDbGljayIsIm9wdGlvbklkIiwidGFza0lkIiwic3VibWl0dGVkUmVzIiwicG9zdCIsImNyZWF0ZVRyYW5zYXRpb24iLCJkaXYiLCJoMSIsInRpdGxlIiwib3B0aW9ucyIsIm1hcCIsIm9wdGlvbiIsImltZyIsIm9uQ2xpY2siLCJpZCIsInNyYyIsImltYWdlX3VybCIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(root)/nextTask/page.tsx\n"));

/***/ })

});