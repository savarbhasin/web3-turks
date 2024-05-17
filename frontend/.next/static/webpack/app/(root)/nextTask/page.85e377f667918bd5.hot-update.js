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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SubmitTask; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _slices_workerSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/slices/workerSlice */ \"(app-pages-browser)/./slices/workerSlice.ts\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction SubmitTask() {\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const { balance } = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.worker);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n    const fetchData = async ()=>{\n        const res = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:3001/v1/worker/nextTask\");\n        setData(res.data);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        fetchData();\n    }, []);\n    const handleClick = async (optionId, taskId)=>{\n        const submittedRes = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"http://localhost:3001/v1/worker/submission\", {\n            optionId,\n            taskId\n        });\n        dispatch((0,_slices_workerSlice__WEBPACK_IMPORTED_MODULE_1__.setBalance)(submittedRes.data.balance + balance));\n        fetchData();\n    };\n    const createTransation = ()=>{};\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: data && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: data.title\n                }, void 0, false, {\n                    fileName: \"D:\\\\fullstack-project\\\\user-frontend\\\\app\\\\(root)\\\\nextTask\\\\page.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: data.options.map((option)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            onClick: ()=>handleClick(option.id, data.id),\n                            src: option.image_url,\n                            alt: \"\"\n                        }, option.id, false, {\n                            fileName: \"D:\\\\fullstack-project\\\\user-frontend\\\\app\\\\(root)\\\\nextTask\\\\page.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 32\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"D:\\\\fullstack-project\\\\user-frontend\\\\app\\\\(root)\\\\nextTask\\\\page.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\fullstack-project\\\\user-frontend\\\\app\\\\(root)\\\\nextTask\\\\page.tsx\",\n            lineNumber: 52,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\fullstack-project\\\\user-frontend\\\\app\\\\(root)\\\\nextTask\\\\page.tsx\",\n        lineNumber: 50,\n        columnNumber: 9\n    }, this);\n}\n_s(SubmitTask, \"OkP2BZE+MGBOmOapOFZj8b3xd68=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch\n    ];\n});\n_c = SubmitTask;\nvar _c;\n$RefreshReg$(_c, \"SubmitTask\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8ocm9vdCkvbmV4dFRhc2svcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ2tEO0FBQ3hCO0FBQ2tCO0FBQ0Y7QUFDQTtBQVkzQixTQUFTTTs7SUFDcEIsTUFBTSxDQUFDQyxNQUFLQyxRQUFRLEdBQUdMLCtDQUFRQTtJQUUvQixNQUFNLEVBQUNNLE9BQU8sRUFBQyxHQUFHSix3REFBV0EsQ0FBQyxDQUFDSyxRQUFZQSxNQUFNQyxNQUFNO0lBQ3ZELE1BQU1DLFdBQVdSLHdEQUFXQTtJQUU1QixNQUFNUyxZQUFZO1FBQ2QsTUFBTUMsTUFBTSxNQUFNYiw2Q0FBS0EsQ0FBQ2MsR0FBRyxDQUFDO1FBQzVCUCxRQUFRTSxJQUFJUCxJQUFJO0lBQ3BCO0lBRUFMLGdEQUFTQSxDQUFDO1FBQ05XO0lBQ0osR0FBRSxFQUFFO0lBRUosTUFBTUcsY0FBYyxPQUFNQyxVQUFnQkM7UUFDdEMsTUFBTUMsZUFBZSxNQUFNbEIsNkNBQUtBLENBQUNtQixJQUFJLENBQUMsOENBQTZDO1lBQy9FSDtZQUNBQztRQUNKO1FBQ0FOLFNBQVNaLCtEQUFVQSxDQUFDbUIsYUFBYVosSUFBSSxDQUFDRSxPQUFPLEdBQUNBO1FBQzlDSTtJQUNKO0lBRUEsTUFBTVEsbUJBQW1CLEtBRXpCO0lBS0EscUJBQ0ksOERBQUNDO2tCQUNDZixzQkFDRSw4REFBQ2dCOzs4QkFDRyw4REFBQ0M7OEJBQUlqQixLQUFLa0IsS0FBSzs7Ozs7OzhCQUVmLDhEQUFDRjs4QkFDSWhCLEtBQUttQixPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFDQzt3QkFDZixxQkFBTyw4REFBQ0M7NEJBQUlDLFNBQVMsSUFBSWQsWUFBWVksT0FBT0csRUFBRSxFQUFDeEIsS0FBS3dCLEVBQUU7NEJBQW1CQyxLQUFLSixPQUFPSyxTQUFTOzRCQUFFQyxLQUFJOzJCQUF0Q04sT0FBT0csRUFBRTs7Ozs7b0JBQzNFOzs7Ozs7Ozs7Ozs7Ozs7OztBQVNwQjtHQWpEd0J6Qjs7UUFHRkQsb0RBQVdBO1FBQ1pELG9EQUFXQTs7O0tBSlJFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC8ocm9vdCkvbmV4dFRhc2svcGFnZS50c3g/ZWQxNiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5pbXBvcnQgeyBzZXRCYWxhbmNlIH0gZnJvbSBcIkAvc2xpY2VzL3dvcmtlclNsaWNlXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxuaW50ZXJmYWNlIERhdGEge1xyXG4gICAgaWQ6bnVtYmVyO1xyXG4gICAgdGl0bGU6c3RyaW5nO1xyXG4gICAgb3B0aW9uczp7XHJcbiAgICAgICAgaW1hZ2VfdXJsOnN0cmluZztcclxuICAgICAgICBpZDpudW1iZXI7XHJcbiAgICB9W11cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN1Ym1pdFRhc2sgKCl7XHJcbiAgICBjb25zdCBbZGF0YSxzZXREYXRhXSA9IHVzZVN0YXRlPERhdGE+KCk7XHJcblxyXG4gICAgY29uc3Qge2JhbGFuY2V9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOmFueSk9PnN0YXRlLndvcmtlcik7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMoKT0+e1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL3YxL3dvcmtlci9uZXh0VGFzaycpXHJcbiAgICAgICAgc2V0RGF0YShyZXMuZGF0YSlcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBmZXRjaERhdGEoKVxyXG4gICAgfSxbXSlcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbGljayA9IGFzeW5jKG9wdGlvbklkOm51bWJlcix0YXNrSWQ6bnVtYmVyKT0+e1xyXG4gICAgICAgIGNvbnN0IHN1Ym1pdHRlZFJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS92MS93b3JrZXIvc3VibWlzc2lvbicse1xyXG4gICAgICAgICAgICBvcHRpb25JZCxcclxuICAgICAgICAgICAgdGFza0lkXHJcbiAgICAgICAgfSlcclxuICAgICAgICBkaXNwYXRjaChzZXRCYWxhbmNlKHN1Ym1pdHRlZFJlcy5kYXRhLmJhbGFuY2UrYmFsYW5jZSkpO1xyXG4gICAgICAgIGZldGNoRGF0YSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNyZWF0ZVRyYW5zYXRpb24gPSAoKT0+e1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKCBcclxuICAgICAgICA8bWFpbj5cclxuICAgICAgICB7IGRhdGEgJiZcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxoMT57ZGF0YS50aXRsZX08L2gxPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge2RhdGEub3B0aW9ucy5tYXAoKG9wdGlvbik9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxpbWcgb25DbGljaz17KCk9PmhhbmRsZUNsaWNrKG9wdGlvbi5pZCxkYXRhLmlkKX0ga2V5PXtvcHRpb24uaWR9IHNyYz17b3B0aW9uLmltYWdlX3VybH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgIClcclxuXHJcblxyXG59Il0sIm5hbWVzIjpbInNldEJhbGFuY2UiLCJheGlvcyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsIlN1Ym1pdFRhc2siLCJkYXRhIiwic2V0RGF0YSIsImJhbGFuY2UiLCJzdGF0ZSIsIndvcmtlciIsImRpc3BhdGNoIiwiZmV0Y2hEYXRhIiwicmVzIiwiZ2V0IiwiaGFuZGxlQ2xpY2siLCJvcHRpb25JZCIsInRhc2tJZCIsInN1Ym1pdHRlZFJlcyIsInBvc3QiLCJjcmVhdGVUcmFuc2F0aW9uIiwibWFpbiIsImRpdiIsImgxIiwidGl0bGUiLCJvcHRpb25zIiwibWFwIiwib3B0aW9uIiwiaW1nIiwib25DbGljayIsImlkIiwic3JjIiwiaW1hZ2VfdXJsIiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(root)/nextTask/page.tsx\n"));

/***/ })

});