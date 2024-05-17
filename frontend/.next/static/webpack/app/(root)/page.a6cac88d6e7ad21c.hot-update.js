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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @solana/wallet-adapter-react */ \"(app-pages-browser)/./node_modules/@solana/wallet-adapter-react/lib/esm/useWallet.js\");\n/* harmony import */ var _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @solana/wallet-adapter-react-ui */ \"(app-pages-browser)/./node_modules/@solana/wallet-adapter-react-ui/lib/esm/WalletMultiButton.js\");\n/* harmony import */ var _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @solana/wallet-adapter-react-ui */ \"(app-pages-browser)/./node_modules/@solana/wallet-adapter-react-ui/lib/esm/WalletDisconnectButton.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hot-toast */ \"(app-pages-browser)/./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _slices_authSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/slices/authSlice */ \"(app-pages-browser)/./slices/authSlice.ts\");\n/* harmony import */ var _slices_workerSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/slices/workerSlice */ \"(app-pages-browser)/./slices/workerSlice.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst Navbar = ()=>{\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();\n    const { publicKey, signMessage, disconnect } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_6__.useWallet)();\n    const { user, token } = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.auth);\n    const [isSigning, setIsSigning] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { balance } = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.worker);\n    const signWallet = async ()=>{\n        if (isSigning) return;\n        try {\n            setIsSigning(true);\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_2__[\"default\"].loading(\"Verifying wallet..\");\n            const messageText = \"\".concat(window.location.host, \" wants you to sign in with your Solana account:\\n\").concat(publicKey === null || publicKey === void 0 ? void 0 : publicKey.toBase58(), \"\\n\\nPlease sign in.\");\n            const message = new TextEncoder().encode(messageText);\n            const signature = await (signMessage === null || signMessage === void 0 ? void 0 : signMessage(message));\n            const res = await axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].post(\"http://localhost:3001/v1/\".concat(user, \"/signup\"), {\n                signature,\n                publicKey: publicKey === null || publicKey === void 0 ? void 0 : publicKey.toBase58(),\n                message\n            });\n            dispatch((0,_slices_authSlice__WEBPACK_IMPORTED_MODULE_3__.setToken)(res.data.token));\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_2__[\"default\"].dismiss();\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_2__[\"default\"].success(\"Wallet successfully verified!\");\n        } catch (e) {\n            console.error(e);\n            disconnect();\n            dispatch((0,_slices_authSlice__WEBPACK_IMPORTED_MODULE_3__.setToken)(null));\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_2__[\"default\"].dismiss();\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_2__[\"default\"].error(\"Failed to verify wallet. Please try again.\");\n        } finally{\n            setIsSigning(false);\n        }\n    };\n    const getBalance = async ()=>{\n        const res = await axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].get(\"http://localhost:3001/v1/worker/balance\", {\n            headers: {\n                Authorization: \"Bearer \".concat(token)\n            }\n        });\n        if (!res) {\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_2__[\"default\"].error(\"Failed to fetch balance\");\n            return;\n        }\n        dispatch((0,_slices_workerSlice__WEBPACK_IMPORTED_MODULE_4__.setBalance)(res.data.balance));\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        token != null && user == \"worker\" && getBalance();\n    }, [\n        token\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (publicKey && !isSigning) {\n            signWallet();\n        }\n    }, [\n        publicKey\n    ]);\n    const payOut = async ()=>{\n        const res = await axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].post(\"http://localhost:3001/v1/worker/payout\", {}, {\n            headers: {\n                Authorization: \"Bearer \".concat(token)\n            }\n        });\n        if (res) {\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_2__[\"default\"].success(\"Payout successful\");\n            dispatch((0,_slices_workerSlice__WEBPACK_IMPORTED_MODULE_4__.setBalance)(0));\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-h-20 flex items-center justify-between px-20 text-3xl p-5 w-full font-bold border\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"LabelData\"\n            }, void 0, false, {\n                fileName: \"D:\\\\fullstack-project\\\\user-frontend\\\\components\\\\Navbar.tsx\",\n                lineNumber: 84,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row gap-2\",\n                children: [\n                    user == \"worker\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: payOut,\n                        className: \"text-xl font-semibold border-2 border-black px-5 py-2 rounded-xl bg-pink-100\",\n                        children: [\n                            \"Pay out \",\n                            balance\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\fullstack-project\\\\user-frontend\\\\components\\\\Navbar.tsx\",\n                        lineNumber: 89,\n                        columnNumber: 21\n                    }, undefined),\n                    !publicKey ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_8__.WalletMultiButton, {}, void 0, false, {\n                        fileName: \"D:\\\\fullstack-project\\\\user-frontend\\\\components\\\\Navbar.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 34\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_9__.WalletDisconnectButton, {\n                        disabled: isSigning\n                    }, void 0, false, {\n                        fileName: \"D:\\\\fullstack-project\\\\user-frontend\\\\components\\\\Navbar.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 58\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            disabled: isSigning,\n                            className: \"text-xl font-semibold border-2 border-black px-5 py-2 rounded-xl bg-pink-100\",\n                            onClick: ()=>{\n                                disconnect();\n                                dispatch((0,_slices_authSlice__WEBPACK_IMPORTED_MODULE_3__.setToken)(null));\n                                dispatch((0,_slices_authSlice__WEBPACK_IMPORTED_MODULE_3__.setUser)(null));\n                                setIsSigning(false);\n                            },\n                            children: \"Logout\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\fullstack-project\\\\user-frontend\\\\components\\\\Navbar.tsx\",\n                            lineNumber: 98,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\fullstack-project\\\\user-frontend\\\\components\\\\Navbar.tsx\",\n                        lineNumber: 97,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\fullstack-project\\\\user-frontend\\\\components\\\\Navbar.tsx\",\n                lineNumber: 87,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\fullstack-project\\\\user-frontend\\\\components\\\\Navbar.tsx\",\n        lineNumber: 83,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Navbar, \"YquCzeuITnFN6Qgrq8uDx/kMjls=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch,\n        _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_6__.useWallet,\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector\n    ];\n});\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvTmF2YmFyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUF5RDtBQUNtQztBQUNsRTtBQUN5QjtBQUNmO0FBQ21CO0FBQ0E7QUFDTDtBQUdsRCxNQUFNYSxTQUFTOztJQUNYLE1BQU1DLFdBQVdOLHdEQUFXQTtJQUM1QixNQUFNLEVBQUVPLFNBQVMsRUFBRUMsV0FBVyxFQUFFQyxVQUFVLEVBQUUsR0FBR2pCLHVFQUFTQTtJQUV4RCxNQUFNLEVBQUVrQixJQUFJLEVBQUVDLEtBQUssRUFBRSxHQUFHVix3REFBV0EsQ0FBQyxDQUFDVyxRQUFjQSxNQUFNQyxJQUFJO0lBRTdELE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHakIsK0NBQVFBLENBQUM7SUFFM0MsTUFBTSxFQUFDa0IsT0FBTyxFQUFDLEdBQUdmLHdEQUFXQSxDQUFDLENBQUNXLFFBQVlBLE1BQU1LLE1BQU07SUFHdkQsTUFBTUMsYUFBYTtRQUNmLElBQUlKLFdBQVc7UUFFZixJQUFJO1lBQ0FDLGFBQWE7WUFDYmhCLHVEQUFLQSxDQUFDb0IsT0FBTyxDQUFDO1lBQ2QsTUFBTUMsY0FBYyxVQUFHQyxPQUFPQyxRQUFRLENBQUNDLElBQUksRUFBQyxxREFBeUUsT0FBdEJoQixzQkFBQUEsZ0NBQUFBLFVBQVdpQixRQUFRLElBQUc7WUFDckgsTUFBTUMsVUFBVSxJQUFJQyxjQUFjQyxNQUFNLENBQUNQO1lBQ3pDLE1BQU1RLFlBQVksT0FBTXBCLHdCQUFBQSxrQ0FBQUEsWUFBY2lCO1lBRXRDLE1BQU1JLE1BQU0sTUFBTWxDLDZDQUFLQSxDQUFDbUMsSUFBSSxDQUFDLDRCQUFpQyxPQUFMcEIsTUFBSyxZQUFVO2dCQUNwRWtCO2dCQUNBckIsU0FBUyxFQUFFQSxzQkFBQUEsZ0NBQUFBLFVBQVdpQixRQUFRO2dCQUM5QkM7WUFDSjtZQUVBbkIsU0FBU0osMkRBQVFBLENBQUMyQixJQUFJRSxJQUFJLENBQUNwQixLQUFLO1lBQ2hDWix1REFBS0EsQ0FBQ2lDLE9BQU87WUFDYmpDLHVEQUFLQSxDQUFDa0MsT0FBTyxDQUFDO1FBQ2xCLEVBQUUsT0FBT0MsR0FBRztZQUNSQyxRQUFRQyxLQUFLLENBQUNGO1lBQ2R6QjtZQUNBSCxTQUFTSiwyREFBUUEsQ0FBQztZQUNsQkgsdURBQUtBLENBQUNpQyxPQUFPO1lBQ2JqQyx1REFBS0EsQ0FBQ3FDLEtBQUssQ0FBQztRQUNoQixTQUFVO1lBQ05yQixhQUFhO1FBQ2pCO0lBQ0o7SUFFQSxNQUFNc0IsYUFBYTtRQUNmLE1BQU1SLE1BQU0sTUFBTWxDLDZDQUFLQSxDQUFDMkMsR0FBRyxDQUFFLDJDQUEwQztZQUNuRUMsU0FBUztnQkFBRUMsZUFBZSxVQUFnQixPQUFON0I7WUFBUTtRQUNoRDtRQUNBLElBQUksQ0FBQ2tCLEtBQUs7WUFDTjlCLHVEQUFLQSxDQUFDcUMsS0FBSyxDQUFDO1lBQ1o7UUFDSjtRQUNBOUIsU0FBU0YsK0RBQVVBLENBQUN5QixJQUFJRSxJQUFJLENBQUNmLE9BQU87SUFDeEM7SUFFQW5CLGdEQUFTQSxDQUFDO1FBQ05jLFNBQU8sUUFBUUQsUUFBTSxZQUFhMkI7SUFDdEMsR0FBRztRQUFDMUI7S0FBTTtJQUdWZCxnREFBU0EsQ0FBQztRQUNOLElBQUlVLGFBQWEsQ0FBQ08sV0FBVztZQUN6Qkk7UUFDSjtJQUNKLEdBQUc7UUFBQ1g7S0FBVTtJQUVkLE1BQU1rQyxTQUFTO1FBQ1gsTUFBTVosTUFBTSxNQUFNbEMsNkNBQUtBLENBQUNtQyxJQUFJLENBQUMsMENBQXlDLENBQUMsR0FBRTtZQUFDUyxTQUFRO2dCQUFDQyxlQUFjLFVBQWdCLE9BQU43QjtZQUFPO1FBQUM7UUFDbkgsSUFBR2tCLEtBQUk7WUFDSDlCLHVEQUFLQSxDQUFDa0MsT0FBTyxDQUFDO1lBQ2QzQixTQUFTRiwrREFBVUEsQ0FBQztRQUN4QjtJQUNKO0lBRUEscUJBQ0ksOERBQUNzQztRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0Q7MEJBQUk7Ozs7OzswQkFHTCw4REFBQ0E7Z0JBQUlDLFdBQVU7O29CQUNWakMsUUFBUSwwQkFDTCw4REFBQ2tDO3dCQUFPQyxTQUFTSjt3QkFDakJFLFdBQVU7OzRCQUErRTs0QkFDNUUzQjs7Ozs7OztvQkFJYixDQUFDVCwwQkFBWSw4REFBQ2IsOEVBQWlCQTs7OztrREFBTSw4REFBQ0QsbUZBQXNCQTt3QkFBQ3FELFVBQVVoQzs7Ozs7O2tDQUUzRSw4REFBQzRCO2tDQUNHLDRFQUFDRTs0QkFBT0UsVUFBVWhDOzRCQUNsQjZCLFdBQVU7NEJBQ1ZFLFNBQVM7Z0NBQ0xwQztnQ0FDQUgsU0FBU0osMkRBQVFBLENBQUM7Z0NBQ2xCSSxTQUFTSCwwREFBT0EsQ0FBQztnQ0FDakJZLGFBQWE7NEJBQ2pCO3NDQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU12QjtHQXBHTVY7O1FBQ2VMLG9EQUFXQTtRQUNtQlIsbUVBQVNBO1FBRWhDUyxvREFBV0E7UUFJakJBLG9EQUFXQTs7O0tBUjNCSTtBQXNHTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05hdmJhci50c3g/MWI4MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VXYWxsZXQgfSBmcm9tICdAc29sYW5hL3dhbGxldC1hZGFwdGVyLXJlYWN0JztcclxuaW1wb3J0IHsgV2FsbGV0RGlzY29ubmVjdEJ1dHRvbiwgV2FsbGV0TXVsdGlCdXR0b24gfSBmcm9tICdAc29sYW5hL3dhbGxldC1hZGFwdGVyLXJlYWN0LXVpJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB0b2FzdCBmcm9tICdyZWFjdC1ob3QtdG9hc3QnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IHNldFRva2VuLCBzZXRVc2VyIH0gZnJvbSAnQC9zbGljZXMvYXV0aFNsaWNlJztcclxuaW1wb3J0IHsgc2V0QmFsYW5jZSB9IGZyb20gJ0Avc2xpY2VzL3dvcmtlclNsaWNlJztcclxuaW1wb3J0IHsgaGVhZGVycyB9IGZyb20gJ25leHQvaGVhZGVycyc7XHJcblxyXG5jb25zdCBOYXZiYXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCB7IHB1YmxpY0tleSwgc2lnbk1lc3NhZ2UsIGRpc2Nvbm5lY3QgfSA9IHVzZVdhbGxldCgpO1xyXG4gICAgXHJcbiAgICBjb25zdCB7IHVzZXIsIHRva2VuIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGU6YW55KSA9PiBzdGF0ZS5hdXRoKTtcclxuXHJcbiAgICBjb25zdCBbaXNTaWduaW5nLCBzZXRJc1NpZ25pbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IHtiYWxhbmNlfSA9IHVzZVNlbGVjdG9yKChzdGF0ZTphbnkpPT5zdGF0ZS53b3JrZXIpXHJcblxyXG5cclxuICAgIGNvbnN0IHNpZ25XYWxsZXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGlzU2lnbmluZykgcmV0dXJuOyBcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgc2V0SXNTaWduaW5nKHRydWUpO1xyXG4gICAgICAgICAgICB0b2FzdC5sb2FkaW5nKCdWZXJpZnlpbmcgd2FsbGV0Li4nKTtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZVRleHQgPSBgJHt3aW5kb3cubG9jYXRpb24uaG9zdH0gd2FudHMgeW91IHRvIHNpZ24gaW4gd2l0aCB5b3VyIFNvbGFuYSBhY2NvdW50OlxcbiR7cHVibGljS2V5Py50b0Jhc2U1OCgpfVxcblxcblBsZWFzZSBzaWduIGluLmA7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBuZXcgVGV4dEVuY29kZXIoKS5lbmNvZGUobWVzc2FnZVRleHQpO1xyXG4gICAgICAgICAgICBjb25zdCBzaWduYXR1cmUgPSBhd2FpdCBzaWduTWVzc2FnZT8uKG1lc3NhZ2UpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdChgaHR0cDovL2xvY2FsaG9zdDozMDAxL3YxLyR7dXNlcn0vc2lnbnVwYCwge1xyXG4gICAgICAgICAgICAgICAgc2lnbmF0dXJlLFxyXG4gICAgICAgICAgICAgICAgcHVibGljS2V5OiBwdWJsaWNLZXk/LnRvQmFzZTU4KCksXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgZGlzcGF0Y2goc2V0VG9rZW4ocmVzLmRhdGEudG9rZW4pKTtcclxuICAgICAgICAgICAgdG9hc3QuZGlzbWlzcygpO1xyXG4gICAgICAgICAgICB0b2FzdC5zdWNjZXNzKCdXYWxsZXQgc3VjY2Vzc2Z1bGx5IHZlcmlmaWVkIScpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgICAgICAgICAgZGlzY29ubmVjdCgpO1xyXG4gICAgICAgICAgICBkaXNwYXRjaChzZXRUb2tlbihudWxsKSk7XHJcbiAgICAgICAgICAgIHRvYXN0LmRpc21pc3MoKTtcclxuICAgICAgICAgICAgdG9hc3QuZXJyb3IoJ0ZhaWxlZCB0byB2ZXJpZnkgd2FsbGV0LiBQbGVhc2UgdHJ5IGFnYWluLicpO1xyXG4gICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICAgIHNldElzU2lnbmluZyhmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldEJhbGFuY2UgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjMwMDEvdjEvd29ya2VyL2JhbGFuY2VgLCB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmICghcmVzKSB7XHJcbiAgICAgICAgICAgIHRvYXN0LmVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggYmFsYW5jZScpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRpc3BhdGNoKHNldEJhbGFuY2UocmVzLmRhdGEuYmFsYW5jZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgdG9rZW4hPW51bGwgJiYgdXNlcj09J3dvcmtlcicgJiYgIGdldEJhbGFuY2UoKTtcclxuICAgIH0sIFt0b2tlbl0pO1xyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChwdWJsaWNLZXkgJiYgIWlzU2lnbmluZykge1xyXG4gICAgICAgICAgICBzaWduV2FsbGV0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3B1YmxpY0tleV0pO1xyXG5cclxuICAgIGNvbnN0IHBheU91dCA9IGFzeW5jKCk9PntcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDEvdjEvd29ya2VyL3BheW91dCcse30se2hlYWRlcnM6e0F1dGhvcml6YXRpb246YEJlYXJlciAke3Rva2VufWB9fSk7XHJcbiAgICAgICAgaWYocmVzKXtcclxuICAgICAgICAgICAgdG9hc3Quc3VjY2VzcygnUGF5b3V0IHN1Y2Nlc3NmdWwnKTtcclxuICAgICAgICAgICAgZGlzcGF0Y2goc2V0QmFsYW5jZSgwKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21heC1oLTIwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBweC0yMCB0ZXh0LTN4bCBwLTUgdy1mdWxsIGZvbnQtYm9sZCBib3JkZXInPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgTGFiZWxEYXRhXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyBnYXAtMic+XHJcbiAgICAgICAgICAgICAgICB7dXNlciA9PSAnd29ya2VyJyAmJiBcclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3BheU91dH1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3RleHQteGwgZm9udC1zZW1pYm9sZCBib3JkZXItMiBib3JkZXItYmxhY2sgcHgtNSBweS0yIHJvdW5kZWQteGwgYmctcGluay0xMDAnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQYXkgb3V0IHtiYWxhbmNlfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICFwdWJsaWNLZXkgPyA8V2FsbGV0TXVsdGlCdXR0b24gLz4gOiA8V2FsbGV0RGlzY29ubmVjdEJ1dHRvbiBkaXNhYmxlZD17aXNTaWduaW5nfSAvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGRpc2FibGVkPXtpc1NpZ25pbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgYm9yZGVyLTIgYm9yZGVyLWJsYWNrIHB4LTUgcHktMiByb3VuZGVkLXhsIGJnLXBpbmstMTAwJ1xyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goc2V0VG9rZW4obnVsbCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChzZXRVc2VyKG51bGwpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXNTaWduaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9fT5Mb2dvdXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XHJcbiJdLCJuYW1lcyI6WyJ1c2VXYWxsZXQiLCJXYWxsZXREaXNjb25uZWN0QnV0dG9uIiwiV2FsbGV0TXVsdGlCdXR0b24iLCJheGlvcyIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ0b2FzdCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzZXRUb2tlbiIsInNldFVzZXIiLCJzZXRCYWxhbmNlIiwiTmF2YmFyIiwiZGlzcGF0Y2giLCJwdWJsaWNLZXkiLCJzaWduTWVzc2FnZSIsImRpc2Nvbm5lY3QiLCJ1c2VyIiwidG9rZW4iLCJzdGF0ZSIsImF1dGgiLCJpc1NpZ25pbmciLCJzZXRJc1NpZ25pbmciLCJiYWxhbmNlIiwid29ya2VyIiwic2lnbldhbGxldCIsImxvYWRpbmciLCJtZXNzYWdlVGV4dCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaG9zdCIsInRvQmFzZTU4IiwibWVzc2FnZSIsIlRleHRFbmNvZGVyIiwiZW5jb2RlIiwic2lnbmF0dXJlIiwicmVzIiwicG9zdCIsImRhdGEiLCJkaXNtaXNzIiwic3VjY2VzcyIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJnZXRCYWxhbmNlIiwiZ2V0IiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJwYXlPdXQiLCJkaXYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJvbkNsaWNrIiwiZGlzYWJsZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Navbar.tsx\n"));

/***/ })

});