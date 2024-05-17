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

/***/ "(app-pages-browser)/./components/Navbar.tsx":
/*!*******************************!*\
  !*** ./components/Navbar.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @solana/wallet-adapter-react */ \"(app-pages-browser)/./node_modules/@solana/wallet-adapter-react/lib/esm/useWallet.js\");\n/* harmony import */ var _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @solana/wallet-adapter-react-ui */ \"(app-pages-browser)/./node_modules/@solana/wallet-adapter-react-ui/lib/esm/WalletMultiButton.js\");\n/* harmony import */ var _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @solana/wallet-adapter-react-ui */ \"(app-pages-browser)/./node_modules/@solana/wallet-adapter-react-ui/lib/esm/WalletDisconnectButton.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hot-toast */ \"(app-pages-browser)/./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _slices_authSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/slices/authSlice */ \"(app-pages-browser)/./slices/authSlice.ts\");\n/* harmony import */ var _slices_workerSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/slices/workerSlice */ \"(app-pages-browser)/./slices/workerSlice.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst Navbar = ()=>{\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();\n    const { publicKey, signMessage, disconnect } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_6__.useWallet)();\n    const { user, token } = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.auth);\n    const [isSigning, setIsSigning] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { balance } = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.worker);\n    const signWallet = async ()=>{\n        if (isSigning) return; // Prevent multiple calls\n        try {\n            setIsSigning(true);\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_2__[\"default\"].loading(\"Loading..\");\n            const messageText = \"\".concat(window.location.host, \" wants you to sign in with your Solana account:\\n\").concat(publicKey === null || publicKey === void 0 ? void 0 : publicKey.toBase58(), \"\\n\\nPlease sign in.\");\n            const message = new TextEncoder().encode(messageText);\n            const signature = await (signMessage === null || signMessage === void 0 ? void 0 : signMessage(message));\n            const res = await axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].post(\"http://localhost:3001/v1/\".concat(user, \"/signup\"), {\n                signature,\n                publicKey: publicKey === null || publicKey === void 0 ? void 0 : publicKey.toBase58(),\n                message\n            });\n            dispatch((0,_slices_authSlice__WEBPACK_IMPORTED_MODULE_3__.setToken)(res.data.token));\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_2__[\"default\"].dismiss();\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_2__[\"default\"].success(\"Wallet successfully verified!\");\n        } catch (e) {\n            console.error(e);\n            disconnect();\n            dispatch((0,_slices_authSlice__WEBPACK_IMPORTED_MODULE_3__.setToken)(null));\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_2__[\"default\"].dismiss();\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_2__[\"default\"].error(\"Failed to verify wallet. Please try again.\");\n        } finally{\n            setIsSigning(false);\n        }\n    };\n    const getBalance = async ()=>{\n        const res = await axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].get(\"http://localhost:3001/v1/worker/balance\", {\n            headers: {\n                Authorization: \"Bearer \".concat(token)\n            }\n        });\n        if (!res) {\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_2__[\"default\"].error(\"Failed to fetch balance\");\n            return;\n        }\n        dispatch((0,_slices_workerSlice__WEBPACK_IMPORTED_MODULE_4__.setBalance)(res.data.balance));\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        token != null && user == \"worker\" && getBalance();\n    }, [\n        token\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (publicKey && !isSigning) {\n            signWallet();\n        }\n    }, [\n        publicKey\n    ]);\n    const payOut = async ()=>{\n        const res = await axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].post(\"http://localhost:3001/v1/worker/payout\", {}, {\n            headers: {\n                Authorization: \"Bearer \".concat(token)\n            }\n        });\n        if (res) {\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_2__[\"default\"].success(\"Payout successful\");\n            dispatch((0,_slices_workerSlice__WEBPACK_IMPORTED_MODULE_4__.setBalance)(0));\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-h-20  top-0 flex items-center justify-between px-20 text-3xl p-5 w-full font-bold border\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"LabelData\"\n            }, void 0, false, {\n                fileName: \"D:\\\\fullstack-project\\\\user-frontend\\\\components\\\\Navbar.tsx\",\n                lineNumber: 84,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row gap-2\",\n                children: [\n                    user == \"worker\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: payOut,\n                        className: \"text-xl font-semibold border-2 border-black px-5 py-2 rounded-xl bg-pink-100\",\n                        children: [\n                            \"Pay out \",\n                            balance\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\fullstack-project\\\\user-frontend\\\\components\\\\Navbar.tsx\",\n                        lineNumber: 89,\n                        columnNumber: 21\n                    }, undefined),\n                    !publicKey ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_8__.WalletMultiButton, {}, void 0, false, {\n                        fileName: \"D:\\\\fullstack-project\\\\user-frontend\\\\components\\\\Navbar.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 34\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_9__.WalletDisconnectButton, {\n                        disabled: isSigning\n                    }, void 0, false, {\n                        fileName: \"D:\\\\fullstack-project\\\\user-frontend\\\\components\\\\Navbar.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 58\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            disabled: isSigning,\n                            className: \"text-xl font-semibold border-2 border-black px-5 py-2 rounded-xl bg-pink-100\",\n                            onClick: ()=>{\n                                disconnect();\n                                dispatch((0,_slices_authSlice__WEBPACK_IMPORTED_MODULE_3__.setToken)(null));\n                                dispatch((0,_slices_authSlice__WEBPACK_IMPORTED_MODULE_3__.setUser)(null));\n                                setIsSigning(false);\n                            },\n                            children: \"Logout\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\fullstack-project\\\\user-frontend\\\\components\\\\Navbar.tsx\",\n                            lineNumber: 98,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\fullstack-project\\\\user-frontend\\\\components\\\\Navbar.tsx\",\n                        lineNumber: 97,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\fullstack-project\\\\user-frontend\\\\components\\\\Navbar.tsx\",\n                lineNumber: 87,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\fullstack-project\\\\user-frontend\\\\components\\\\Navbar.tsx\",\n        lineNumber: 83,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Navbar, \"YquCzeuITnFN6Qgrq8uDx/kMjls=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch,\n        _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_6__.useWallet,\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector\n    ];\n});\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvTmF2YmFyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUF5RDtBQUNtQztBQUNsRTtBQUN5QjtBQUNmO0FBQ21CO0FBQ0E7QUFDTDtBQUdsRCxNQUFNYSxTQUFTOztJQUNYLE1BQU1DLFdBQVdOLHdEQUFXQTtJQUM1QixNQUFNLEVBQUVPLFNBQVMsRUFBRUMsV0FBVyxFQUFFQyxVQUFVLEVBQUUsR0FBR2pCLHVFQUFTQTtJQUV4RCxNQUFNLEVBQUVrQixJQUFJLEVBQUVDLEtBQUssRUFBRSxHQUFHVix3REFBV0EsQ0FBQyxDQUFDVyxRQUFjQSxNQUFNQyxJQUFJO0lBRTdELE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHakIsK0NBQVFBLENBQUM7SUFFM0MsTUFBTSxFQUFDa0IsT0FBTyxFQUFDLEdBQUdmLHdEQUFXQSxDQUFDLENBQUNXLFFBQVlBLE1BQU1LLE1BQU07SUFHdkQsTUFBTUMsYUFBYTtRQUNmLElBQUlKLFdBQVcsUUFBUSx5QkFBeUI7UUFFaEQsSUFBSTtZQUNBQyxhQUFhO1lBQ2JoQix1REFBS0EsQ0FBQ29CLE9BQU8sQ0FBQztZQUNkLE1BQU1DLGNBQWMsVUFBR0MsT0FBT0MsUUFBUSxDQUFDQyxJQUFJLEVBQUMscURBQXlFLE9BQXRCaEIsc0JBQUFBLGdDQUFBQSxVQUFXaUIsUUFBUSxJQUFHO1lBQ3JILE1BQU1DLFVBQVUsSUFBSUMsY0FBY0MsTUFBTSxDQUFDUDtZQUN6QyxNQUFNUSxZQUFZLE9BQU1wQix3QkFBQUEsa0NBQUFBLFlBQWNpQjtZQUV0QyxNQUFNSSxNQUFNLE1BQU1sQyw2Q0FBS0EsQ0FBQ21DLElBQUksQ0FBQyw0QkFBaUMsT0FBTHBCLE1BQUssWUFBVTtnQkFDcEVrQjtnQkFDQXJCLFNBQVMsRUFBRUEsc0JBQUFBLGdDQUFBQSxVQUFXaUIsUUFBUTtnQkFDOUJDO1lBQ0o7WUFFQW5CLFNBQVNKLDJEQUFRQSxDQUFDMkIsSUFBSUUsSUFBSSxDQUFDcEIsS0FBSztZQUNoQ1osdURBQUtBLENBQUNpQyxPQUFPO1lBQ2JqQyx1REFBS0EsQ0FBQ2tDLE9BQU8sQ0FBQztRQUNsQixFQUFFLE9BQU9DLEdBQUc7WUFDUkMsUUFBUUMsS0FBSyxDQUFDRjtZQUNkekI7WUFDQUgsU0FBU0osMkRBQVFBLENBQUM7WUFDbEJILHVEQUFLQSxDQUFDaUMsT0FBTztZQUNiakMsdURBQUtBLENBQUNxQyxLQUFLLENBQUM7UUFDaEIsU0FBVTtZQUNOckIsYUFBYTtRQUNqQjtJQUNKO0lBRUEsTUFBTXNCLGFBQWE7UUFDZixNQUFNUixNQUFNLE1BQU1sQyw2Q0FBS0EsQ0FBQzJDLEdBQUcsQ0FBRSwyQ0FBMEM7WUFDbkVDLFNBQVM7Z0JBQUVDLGVBQWUsVUFBZ0IsT0FBTjdCO1lBQVE7UUFDaEQ7UUFDQSxJQUFJLENBQUNrQixLQUFLO1lBQ045Qix1REFBS0EsQ0FBQ3FDLEtBQUssQ0FBQztZQUNaO1FBQ0o7UUFDQTlCLFNBQVNGLCtEQUFVQSxDQUFDeUIsSUFBSUUsSUFBSSxDQUFDZixPQUFPO0lBQ3hDO0lBRUFuQixnREFBU0EsQ0FBQztRQUNOYyxTQUFPLFFBQVFELFFBQU0sWUFBYTJCO0lBQ3RDLEdBQUc7UUFBQzFCO0tBQU07SUFHVmQsZ0RBQVNBLENBQUM7UUFDTixJQUFJVSxhQUFhLENBQUNPLFdBQVc7WUFDekJJO1FBQ0o7SUFDSixHQUFHO1FBQUNYO0tBQVU7SUFFZCxNQUFNa0MsU0FBUztRQUNYLE1BQU1aLE1BQU0sTUFBTWxDLDZDQUFLQSxDQUFDbUMsSUFBSSxDQUFDLDBDQUF5QyxDQUFDLEdBQUU7WUFBQ1MsU0FBUTtnQkFBQ0MsZUFBYyxVQUFnQixPQUFON0I7WUFBTztRQUFDO1FBQ25ILElBQUdrQixLQUFJO1lBQ0g5Qix1REFBS0EsQ0FBQ2tDLE9BQU8sQ0FBQztZQUNkM0IsU0FBU0YsK0RBQVVBLENBQUM7UUFDeEI7SUFDSjtJQUVBLHFCQUNJLDhEQUFDc0M7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNEOzBCQUFJOzs7Ozs7MEJBR0wsOERBQUNBO2dCQUFJQyxXQUFVOztvQkFDVmpDLFFBQVEsMEJBQ0wsOERBQUNrQzt3QkFBT0MsU0FBU0o7d0JBQ2pCRSxXQUFVOzs0QkFBK0U7NEJBQzVFM0I7Ozs7Ozs7b0JBSWIsQ0FBQ1QsMEJBQVksOERBQUNiLDhFQUFpQkE7Ozs7a0RBQU0sOERBQUNELG1GQUFzQkE7d0JBQUNxRCxVQUFVaEM7Ozs7OztrQ0FFM0UsOERBQUM0QjtrQ0FDRyw0RUFBQ0U7NEJBQU9FLFVBQVVoQzs0QkFDbEI2QixXQUFVOzRCQUNWRSxTQUFTO2dDQUNMcEM7Z0NBQ0FILFNBQVNKLDJEQUFRQSxDQUFDO2dDQUNsQkksU0FBU0gsMERBQU9BLENBQUM7Z0NBQ2pCWSxhQUFhOzRCQUNqQjtzQ0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNdkI7R0FwR01WOztRQUNlTCxvREFBV0E7UUFDbUJSLG1FQUFTQTtRQUVoQ1Msb0RBQVdBO1FBSWpCQSxvREFBV0E7OztLQVIzQkk7QUFzR04sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXIudHN4PzFiODMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlV2FsbGV0IH0gZnJvbSAnQHNvbGFuYS93YWxsZXQtYWRhcHRlci1yZWFjdCc7XHJcbmltcG9ydCB7IFdhbGxldERpc2Nvbm5lY3RCdXR0b24sIFdhbGxldE11bHRpQnV0dG9uIH0gZnJvbSAnQHNvbGFuYS93YWxsZXQtYWRhcHRlci1yZWFjdC11aSc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgdG9hc3QgZnJvbSAncmVhY3QtaG90LXRvYXN0JztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBzZXRUb2tlbiwgc2V0VXNlciB9IGZyb20gJ0Avc2xpY2VzL2F1dGhTbGljZSc7XHJcbmltcG9ydCB7IHNldEJhbGFuY2UgfSBmcm9tICdAL3NsaWNlcy93b3JrZXJTbGljZSc7XHJcbmltcG9ydCB7IGhlYWRlcnMgfSBmcm9tICduZXh0L2hlYWRlcnMnO1xyXG5cclxuY29uc3QgTmF2YmFyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgeyBwdWJsaWNLZXksIHNpZ25NZXNzYWdlLCBkaXNjb25uZWN0IH0gPSB1c2VXYWxsZXQoKTtcclxuICAgIFxyXG4gICAgY29uc3QgeyB1c2VyLCB0b2tlbiB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOmFueSkgPT4gc3RhdGUuYXV0aCk7XHJcblxyXG4gICAgY29uc3QgW2lzU2lnbmluZywgc2V0SXNTaWduaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCB7YmFsYW5jZX0gPSB1c2VTZWxlY3Rvcigoc3RhdGU6YW55KT0+c3RhdGUud29ya2VyKVxyXG5cclxuXHJcbiAgICBjb25zdCBzaWduV2FsbGV0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGlmIChpc1NpZ25pbmcpIHJldHVybjsgLy8gUHJldmVudCBtdWx0aXBsZSBjYWxsc1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBzZXRJc1NpZ25pbmcodHJ1ZSk7XHJcbiAgICAgICAgICAgIHRvYXN0LmxvYWRpbmcoJ0xvYWRpbmcuLicpO1xyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlVGV4dCA9IGAke3dpbmRvdy5sb2NhdGlvbi5ob3N0fSB3YW50cyB5b3UgdG8gc2lnbiBpbiB3aXRoIHlvdXIgU29sYW5hIGFjY291bnQ6XFxuJHtwdWJsaWNLZXk/LnRvQmFzZTU4KCl9XFxuXFxuUGxlYXNlIHNpZ24gaW4uYDtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IG5ldyBUZXh0RW5jb2RlcigpLmVuY29kZShtZXNzYWdlVGV4dCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNpZ25hdHVyZSA9IGF3YWl0IHNpZ25NZXNzYWdlPy4obWVzc2FnZSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KGBodHRwOi8vbG9jYWxob3N0OjMwMDEvdjEvJHt1c2VyfS9zaWdudXBgLCB7XHJcbiAgICAgICAgICAgICAgICBzaWduYXR1cmUsXHJcbiAgICAgICAgICAgICAgICBwdWJsaWNLZXk6IHB1YmxpY0tleT8udG9CYXNlNTgoKSxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBkaXNwYXRjaChzZXRUb2tlbihyZXMuZGF0YS50b2tlbikpO1xyXG4gICAgICAgICAgICB0b2FzdC5kaXNtaXNzKCk7XHJcbiAgICAgICAgICAgIHRvYXN0LnN1Y2Nlc3MoJ1dhbGxldCBzdWNjZXNzZnVsbHkgdmVyaWZpZWQhJyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgICAgICAgICBkaXNjb25uZWN0KCk7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHNldFRva2VuKG51bGwpKTtcclxuICAgICAgICAgICAgdG9hc3QuZGlzbWlzcygpO1xyXG4gICAgICAgICAgICB0b2FzdC5lcnJvcignRmFpbGVkIHRvIHZlcmlmeSB3YWxsZXQuIFBsZWFzZSB0cnkgYWdhaW4uJyk7XHJcbiAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgICAgc2V0SXNTaWduaW5nKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0QmFsYW5jZSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS92MS93b3JrZXIvYmFsYW5jZWAsIHtcclxuICAgICAgICAgICAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKCFyZXMpIHtcclxuICAgICAgICAgICAgdG9hc3QuZXJyb3IoJ0ZhaWxlZCB0byBmZXRjaCBiYWxhbmNlJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGlzcGF0Y2goc2V0QmFsYW5jZShyZXMuZGF0YS5iYWxhbmNlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICB0b2tlbiE9bnVsbCAmJiB1c2VyPT0nd29ya2VyJyAmJiAgZ2V0QmFsYW5jZSgpO1xyXG4gICAgfSwgW3Rva2VuXSk7XHJcblxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHB1YmxpY0tleSAmJiAhaXNTaWduaW5nKSB7XHJcbiAgICAgICAgICAgIHNpZ25XYWxsZXQoKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbcHVibGljS2V5XSk7XHJcblxyXG4gICAgY29uc3QgcGF5T3V0ID0gYXN5bmMoKT0+e1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS92MS93b3JrZXIvcGF5b3V0Jyx7fSx7aGVhZGVyczp7QXV0aG9yaXphdGlvbjpgQmVhcmVyICR7dG9rZW59YH19KTtcclxuICAgICAgICBpZihyZXMpe1xyXG4gICAgICAgICAgICB0b2FzdC5zdWNjZXNzKCdQYXlvdXQgc3VjY2Vzc2Z1bCcpO1xyXG4gICAgICAgICAgICBkaXNwYXRjaChzZXRCYWxhbmNlKDApKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWF4LWgtMjAgIHRvcC0wIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBweC0yMCB0ZXh0LTN4bCBwLTUgdy1mdWxsIGZvbnQtYm9sZCBib3JkZXInPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgTGFiZWxEYXRhXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyBnYXAtMic+XHJcbiAgICAgICAgICAgICAgICB7dXNlciA9PSAnd29ya2VyJyAmJiBcclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3BheU91dH1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3RleHQteGwgZm9udC1zZW1pYm9sZCBib3JkZXItMiBib3JkZXItYmxhY2sgcHgtNSBweS0yIHJvdW5kZWQteGwgYmctcGluay0xMDAnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQYXkgb3V0IHtiYWxhbmNlfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICFwdWJsaWNLZXkgPyA8V2FsbGV0TXVsdGlCdXR0b24gLz4gOiA8V2FsbGV0RGlzY29ubmVjdEJ1dHRvbiBkaXNhYmxlZD17aXNTaWduaW5nfSAvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGRpc2FibGVkPXtpc1NpZ25pbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgYm9yZGVyLTIgYm9yZGVyLWJsYWNrIHB4LTUgcHktMiByb3VuZGVkLXhsIGJnLXBpbmstMTAwJ1xyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goc2V0VG9rZW4obnVsbCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChzZXRVc2VyKG51bGwpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXNTaWduaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9fT5Mb2dvdXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XHJcbiJdLCJuYW1lcyI6WyJ1c2VXYWxsZXQiLCJXYWxsZXREaXNjb25uZWN0QnV0dG9uIiwiV2FsbGV0TXVsdGlCdXR0b24iLCJheGlvcyIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ0b2FzdCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzZXRUb2tlbiIsInNldFVzZXIiLCJzZXRCYWxhbmNlIiwiTmF2YmFyIiwiZGlzcGF0Y2giLCJwdWJsaWNLZXkiLCJzaWduTWVzc2FnZSIsImRpc2Nvbm5lY3QiLCJ1c2VyIiwidG9rZW4iLCJzdGF0ZSIsImF1dGgiLCJpc1NpZ25pbmciLCJzZXRJc1NpZ25pbmciLCJiYWxhbmNlIiwid29ya2VyIiwic2lnbldhbGxldCIsImxvYWRpbmciLCJtZXNzYWdlVGV4dCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaG9zdCIsInRvQmFzZTU4IiwibWVzc2FnZSIsIlRleHRFbmNvZGVyIiwiZW5jb2RlIiwic2lnbmF0dXJlIiwicmVzIiwicG9zdCIsImRhdGEiLCJkaXNtaXNzIiwic3VjY2VzcyIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJnZXRCYWxhbmNlIiwiZ2V0IiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJwYXlPdXQiLCJkaXYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJvbkNsaWNrIiwiZGlzYWJsZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Navbar.tsx\n"));

/***/ })

});