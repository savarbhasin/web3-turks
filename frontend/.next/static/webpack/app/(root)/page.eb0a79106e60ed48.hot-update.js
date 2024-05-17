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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @solana/wallet-adapter-react */ \"(app-pages-browser)/./node_modules/@solana/wallet-adapter-react/lib/esm/useWallet.js\");\n/* harmony import */ var _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @solana/wallet-adapter-react-ui */ \"(app-pages-browser)/./node_modules/@solana/wallet-adapter-react-ui/lib/esm/WalletMultiButton.js\");\n/* harmony import */ var _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @solana/wallet-adapter-react-ui */ \"(app-pages-browser)/./node_modules/@solana/wallet-adapter-react-ui/lib/esm/WalletDisconnectButton.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hot-toast */ \"(app-pages-browser)/./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _slices_authSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/slices/authSlice */ \"(app-pages-browser)/./slices/authSlice.ts\");\n/* harmony import */ var _slices_workerSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/slices/workerSlice */ \"(app-pages-browser)/./slices/workerSlice.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst Navbar = ()=>{\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();\n    const { publicKey, signMessage, disconnect } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_6__.useWallet)();\n    const { user, token } = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.auth);\n    const [isSigning, setIsSigning] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { balance } = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.worker);\n    const signWallet = async ()=>{\n        if (isSigning) return;\n        try {\n            setIsSigning(true);\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_2__[\"default\"].loading(\"Verifying wallet\");\n            const messageText = \"\".concat(window.location.host, \" wants you to sign in with your Solana account:\\n\").concat(publicKey === null || publicKey === void 0 ? void 0 : publicKey.toBase58(), \"\\n\\nPlease sign in.\");\n            const message = new TextEncoder().encode(messageText);\n            const signature = await (signMessage === null || signMessage === void 0 ? void 0 : signMessage(message));\n            const res = await axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].post(\"http://localhost:3001/v1/\".concat(user, \"/signup\"), {\n                signature,\n                publicKey: publicKey === null || publicKey === void 0 ? void 0 : publicKey.toBase58(),\n                message\n            });\n            dispatch((0,_slices_authSlice__WEBPACK_IMPORTED_MODULE_3__.setToken)(res.data.token));\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_2__[\"default\"].dismiss();\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_2__[\"default\"].success(\"Wallet successfully verified!\");\n        } catch (e) {\n            console.error(e);\n            disconnect();\n            dispatch((0,_slices_authSlice__WEBPACK_IMPORTED_MODULE_3__.setToken)(null));\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_2__[\"default\"].dismiss();\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_2__[\"default\"].error(\"Failed to verify wallet. Please try again.\");\n        } finally{\n            setIsSigning(false);\n        }\n    };\n    const getBalance = async ()=>{\n        const res = await axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].get(\"http://localhost:3001/v1/worker/balance\", {\n            headers: {\n                Authorization: \"Bearer \".concat(token)\n            }\n        });\n        if (!res) {\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_2__[\"default\"].error(\"Failed to fetch balance\");\n            return;\n        }\n        dispatch((0,_slices_workerSlice__WEBPACK_IMPORTED_MODULE_4__.setBalance)(res.data.balance));\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        token != null && user == \"worker\" && getBalance();\n    }, [\n        token\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (publicKey && !isSigning) {\n            signWallet();\n        }\n    }, [\n        publicKey\n    ]);\n    const payOut = async ()=>{\n        const res = await axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].post(\"http://localhost:3001/v1/worker/payout\", {\n            headers: {\n                Authorization: \"Bearer \".concat(token)\n            }\n        });\n        if (res) {\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_2__[\"default\"].success(\"Payout successful\");\n            dispatch((0,_slices_workerSlice__WEBPACK_IMPORTED_MODULE_4__.setBalance)(0));\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-h-20 flex items-center justify-between px-20 text-3xl p-5 w-full font-bold border\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"LabelData\"\n            }, void 0, false, {\n                fileName: \"D:\\\\fullstack-project\\\\user-frontend\\\\components\\\\Navbar.tsx\",\n                lineNumber: 84,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row gap-2\",\n                children: [\n                    user == \"worker\" && token && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: payOut,\n                        className: \"text-xl font-semibold border-2 border-black px-5 py-2 rounded-xl bg-pink-100\",\n                        children: [\n                            \"Pay out \",\n                            balance\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\fullstack-project\\\\user-frontend\\\\components\\\\Navbar.tsx\",\n                        lineNumber: 89,\n                        columnNumber: 21\n                    }, undefined),\n                    !publicKey ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_8__.WalletMultiButton, {}, void 0, false, {\n                        fileName: \"D:\\\\fullstack-project\\\\user-frontend\\\\components\\\\Navbar.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 34\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_9__.WalletDisconnectButton, {\n                        disabled: isSigning\n                    }, void 0, false, {\n                        fileName: \"D:\\\\fullstack-project\\\\user-frontend\\\\components\\\\Navbar.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 58\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            disabled: isSigning,\n                            className: \"text-xl font-semibold border-2 border-black px-5 py-2 rounded-xl bg-pink-100\",\n                            onClick: ()=>{\n                                disconnect();\n                                dispatch((0,_slices_authSlice__WEBPACK_IMPORTED_MODULE_3__.setToken)(null));\n                                dispatch((0,_slices_authSlice__WEBPACK_IMPORTED_MODULE_3__.setUser)(null));\n                                setIsSigning(false);\n                            },\n                            children: \"Logout\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\fullstack-project\\\\user-frontend\\\\components\\\\Navbar.tsx\",\n                            lineNumber: 98,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\fullstack-project\\\\user-frontend\\\\components\\\\Navbar.tsx\",\n                        lineNumber: 97,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\fullstack-project\\\\user-frontend\\\\components\\\\Navbar.tsx\",\n                lineNumber: 87,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\fullstack-project\\\\user-frontend\\\\components\\\\Navbar.tsx\",\n        lineNumber: 83,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Navbar, \"YquCzeuITnFN6Qgrq8uDx/kMjls=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch,\n        _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_6__.useWallet,\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector\n    ];\n});\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvTmF2YmFyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUF5RDtBQUNtQztBQUNsRTtBQUN5QjtBQUNmO0FBQ21CO0FBQ0E7QUFDTDtBQUdsRCxNQUFNYSxTQUFTOztJQUNYLE1BQU1DLFdBQVdOLHdEQUFXQTtJQUM1QixNQUFNLEVBQUVPLFNBQVMsRUFBRUMsV0FBVyxFQUFFQyxVQUFVLEVBQUUsR0FBR2pCLHVFQUFTQTtJQUV4RCxNQUFNLEVBQUVrQixJQUFJLEVBQUVDLEtBQUssRUFBRSxHQUFHVix3REFBV0EsQ0FBQyxDQUFDVyxRQUFjQSxNQUFNQyxJQUFJO0lBRTdELE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHakIsK0NBQVFBLENBQUM7SUFFM0MsTUFBTSxFQUFDa0IsT0FBTyxFQUFDLEdBQUdmLHdEQUFXQSxDQUFDLENBQUNXLFFBQVlBLE1BQU1LLE1BQU07SUFHdkQsTUFBTUMsYUFBYTtRQUNmLElBQUlKLFdBQVc7UUFFZixJQUFJO1lBQ0FDLGFBQWE7WUFDYmhCLHVEQUFLQSxDQUFDb0IsT0FBTyxDQUFDO1lBQ2QsTUFBTUMsY0FBYyxVQUFHQyxPQUFPQyxRQUFRLENBQUNDLElBQUksRUFBQyxxREFBeUUsT0FBdEJoQixzQkFBQUEsZ0NBQUFBLFVBQVdpQixRQUFRLElBQUc7WUFDckgsTUFBTUMsVUFBVSxJQUFJQyxjQUFjQyxNQUFNLENBQUNQO1lBQ3pDLE1BQU1RLFlBQVksT0FBTXBCLHdCQUFBQSxrQ0FBQUEsWUFBY2lCO1lBRXRDLE1BQU1JLE1BQU0sTUFBTWxDLDZDQUFLQSxDQUFDbUMsSUFBSSxDQUFDLDRCQUFpQyxPQUFMcEIsTUFBSyxZQUFVO2dCQUNwRWtCO2dCQUNBckIsU0FBUyxFQUFFQSxzQkFBQUEsZ0NBQUFBLFVBQVdpQixRQUFRO2dCQUM5QkM7WUFDSjtZQUVBbkIsU0FBU0osMkRBQVFBLENBQUMyQixJQUFJRSxJQUFJLENBQUNwQixLQUFLO1lBQ2hDWix1REFBS0EsQ0FBQ2lDLE9BQU87WUFDYmpDLHVEQUFLQSxDQUFDa0MsT0FBTyxDQUFDO1FBQ2xCLEVBQUUsT0FBT0MsR0FBRztZQUNSQyxRQUFRQyxLQUFLLENBQUNGO1lBQ2R6QjtZQUNBSCxTQUFTSiwyREFBUUEsQ0FBQztZQUNsQkgsdURBQUtBLENBQUNpQyxPQUFPO1lBQ2JqQyx1REFBS0EsQ0FBQ3FDLEtBQUssQ0FBQztRQUNoQixTQUFVO1lBQ05yQixhQUFhO1FBQ2pCO0lBQ0o7SUFFQSxNQUFNc0IsYUFBYTtRQUNmLE1BQU1SLE1BQU0sTUFBTWxDLDZDQUFLQSxDQUFDMkMsR0FBRyxDQUFFLDJDQUEwQztZQUNuRUMsU0FBUztnQkFBRUMsZUFBZSxVQUFnQixPQUFON0I7WUFBUTtRQUNoRDtRQUNBLElBQUksQ0FBQ2tCLEtBQUs7WUFDTjlCLHVEQUFLQSxDQUFDcUMsS0FBSyxDQUFDO1lBQ1o7UUFDSjtRQUNBOUIsU0FBU0YsK0RBQVVBLENBQUN5QixJQUFJRSxJQUFJLENBQUNmLE9BQU87SUFDeEM7SUFFQW5CLGdEQUFTQSxDQUFDO1FBQ05jLFNBQU8sUUFBUUQsUUFBTSxZQUFhMkI7SUFDdEMsR0FBRztRQUFDMUI7S0FBTTtJQUdWZCxnREFBU0EsQ0FBQztRQUNOLElBQUlVLGFBQWEsQ0FBQ08sV0FBVztZQUN6Qkk7UUFDSjtJQUNKLEdBQUc7UUFBQ1g7S0FBVTtJQUVkLE1BQU1rQyxTQUFTO1FBQ1gsTUFBTVosTUFBTSxNQUFNbEMsNkNBQUtBLENBQUNtQyxJQUFJLENBQUMsMENBQXlDO1lBQUNTLFNBQVE7Z0JBQUNDLGVBQWMsVUFBZ0IsT0FBTjdCO1lBQU87UUFBQztRQUNoSCxJQUFHa0IsS0FBSTtZQUNIOUIsdURBQUtBLENBQUNrQyxPQUFPLENBQUM7WUFDZDNCLFNBQVNGLCtEQUFVQSxDQUFDO1FBQ3hCO0lBQ0o7SUFFQSxxQkFDSSw4REFBQ3NDO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDRDswQkFBSTs7Ozs7OzBCQUdMLDhEQUFDQTtnQkFBSUMsV0FBVTs7b0JBQ1ZqQyxRQUFRLFlBQVlDLHVCQUNqQiw4REFBQ2lDO3dCQUFPQyxTQUFTSjt3QkFDakJFLFdBQVU7OzRCQUErRTs0QkFDNUUzQjs7Ozs7OztvQkFJYixDQUFDVCwwQkFBWSw4REFBQ2IsOEVBQWlCQTs7OztrREFBTSw4REFBQ0QsbUZBQXNCQTt3QkFBQ3FELFVBQVVoQzs7Ozs7O2tDQUUzRSw4REFBQzRCO2tDQUNHLDRFQUFDRTs0QkFBT0UsVUFBVWhDOzRCQUNsQjZCLFdBQVU7NEJBQ1ZFLFNBQVM7Z0NBQ0xwQztnQ0FDQUgsU0FBU0osMkRBQVFBLENBQUM7Z0NBQ2xCSSxTQUFTSCwwREFBT0EsQ0FBQztnQ0FDakJZLGFBQWE7NEJBQ2pCO3NDQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU12QjtHQXBHTVY7O1FBQ2VMLG9EQUFXQTtRQUNtQlIsbUVBQVNBO1FBRWhDUyxvREFBV0E7UUFJakJBLG9EQUFXQTs7O0tBUjNCSTtBQXNHTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05hdmJhci50c3g/MWI4MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VXYWxsZXQgfSBmcm9tICdAc29sYW5hL3dhbGxldC1hZGFwdGVyLXJlYWN0JztcclxuaW1wb3J0IHsgV2FsbGV0RGlzY29ubmVjdEJ1dHRvbiwgV2FsbGV0TXVsdGlCdXR0b24gfSBmcm9tICdAc29sYW5hL3dhbGxldC1hZGFwdGVyLXJlYWN0LXVpJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB0b2FzdCBmcm9tICdyZWFjdC1ob3QtdG9hc3QnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IHNldFRva2VuLCBzZXRVc2VyIH0gZnJvbSAnQC9zbGljZXMvYXV0aFNsaWNlJztcclxuaW1wb3J0IHsgc2V0QmFsYW5jZSB9IGZyb20gJ0Avc2xpY2VzL3dvcmtlclNsaWNlJztcclxuaW1wb3J0IHsgaGVhZGVycyB9IGZyb20gJ25leHQvaGVhZGVycyc7XHJcblxyXG5jb25zdCBOYXZiYXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCB7IHB1YmxpY0tleSwgc2lnbk1lc3NhZ2UsIGRpc2Nvbm5lY3QgfSA9IHVzZVdhbGxldCgpO1xyXG4gICAgXHJcbiAgICBjb25zdCB7IHVzZXIsIHRva2VuIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGU6YW55KSA9PiBzdGF0ZS5hdXRoKTtcclxuXHJcbiAgICBjb25zdCBbaXNTaWduaW5nLCBzZXRJc1NpZ25pbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IHtiYWxhbmNlfSA9IHVzZVNlbGVjdG9yKChzdGF0ZTphbnkpPT5zdGF0ZS53b3JrZXIpXHJcblxyXG5cclxuICAgIGNvbnN0IHNpZ25XYWxsZXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGlzU2lnbmluZykgcmV0dXJuOyBcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgc2V0SXNTaWduaW5nKHRydWUpO1xyXG4gICAgICAgICAgICB0b2FzdC5sb2FkaW5nKCdWZXJpZnlpbmcgd2FsbGV0Jyk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2VUZXh0ID0gYCR7d2luZG93LmxvY2F0aW9uLmhvc3R9IHdhbnRzIHlvdSB0byBzaWduIGluIHdpdGggeW91ciBTb2xhbmEgYWNjb3VudDpcXG4ke3B1YmxpY0tleT8udG9CYXNlNTgoKX1cXG5cXG5QbGVhc2Ugc2lnbiBpbi5gO1xyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gbmV3IFRleHRFbmNvZGVyKCkuZW5jb2RlKG1lc3NhZ2VUZXh0KTtcclxuICAgICAgICAgICAgY29uc3Qgc2lnbmF0dXJlID0gYXdhaXQgc2lnbk1lc3NhZ2U/LihtZXNzYWdlKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS92MS8ke3VzZXJ9L3NpZ251cGAsIHtcclxuICAgICAgICAgICAgICAgIHNpZ25hdHVyZSxcclxuICAgICAgICAgICAgICAgIHB1YmxpY0tleTogcHVibGljS2V5Py50b0Jhc2U1OCgpLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHNldFRva2VuKHJlcy5kYXRhLnRva2VuKSk7XHJcbiAgICAgICAgICAgIHRvYXN0LmRpc21pc3MoKTtcclxuICAgICAgICAgICAgdG9hc3Quc3VjY2VzcygnV2FsbGV0IHN1Y2Nlc3NmdWxseSB2ZXJpZmllZCEnKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICAgICAgICAgIGRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgZGlzcGF0Y2goc2V0VG9rZW4obnVsbCkpO1xyXG4gICAgICAgICAgICB0b2FzdC5kaXNtaXNzKCk7XHJcbiAgICAgICAgICAgIHRvYXN0LmVycm9yKCdGYWlsZWQgdG8gdmVyaWZ5IHdhbGxldC4gUGxlYXNlIHRyeSBhZ2Fpbi4nKTtcclxuICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgICBzZXRJc1NpZ25pbmcoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXRCYWxhbmNlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDozMDAxL3YxL3dvcmtlci9iYWxhbmNlYCwge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoIXJlcykge1xyXG4gICAgICAgICAgICB0b2FzdC5lcnJvcignRmFpbGVkIHRvIGZldGNoIGJhbGFuY2UnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkaXNwYXRjaChzZXRCYWxhbmNlKHJlcy5kYXRhLmJhbGFuY2UpKTtcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHRva2VuIT1udWxsICYmIHVzZXI9PSd3b3JrZXInICYmICBnZXRCYWxhbmNlKCk7XHJcbiAgICB9LCBbdG9rZW5dKTtcclxuXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAocHVibGljS2V5ICYmICFpc1NpZ25pbmcpIHtcclxuICAgICAgICAgICAgc2lnbldhbGxldCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtwdWJsaWNLZXldKTtcclxuXHJcbiAgICBjb25zdCBwYXlPdXQgPSBhc3luYygpPT57XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL3YxL3dvcmtlci9wYXlvdXQnLHtoZWFkZXJzOntBdXRob3JpemF0aW9uOmBCZWFyZXIgJHt0b2tlbn1gfX0pO1xyXG4gICAgICAgIGlmKHJlcyl7XHJcbiAgICAgICAgICAgIHRvYXN0LnN1Y2Nlc3MoJ1BheW91dCBzdWNjZXNzZnVsJyk7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHNldEJhbGFuY2UoMCkpOyAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWF4LWgtMjAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHB4LTIwIHRleHQtM3hsIHAtNSB3LWZ1bGwgZm9udC1ib2xkIGJvcmRlcic+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICBMYWJlbERhdGFcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtcm93IGdhcC0yJz5cclxuICAgICAgICAgICAgICAgIHt1c2VyID09ICd3b3JrZXInICYmIHRva2VuICYmIFxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17cGF5T3V0fVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndGV4dC14bCBmb250LXNlbWlib2xkIGJvcmRlci0yIGJvcmRlci1ibGFjayBweC01IHB5LTIgcm91bmRlZC14bCBiZy1waW5rLTEwMCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFBheSBvdXQge2JhbGFuY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgIXB1YmxpY0tleSA/IDxXYWxsZXRNdWx0aUJ1dHRvbiAvPiA6IDxXYWxsZXREaXNjb25uZWN0QnV0dG9uIGRpc2FibGVkPXtpc1NpZ25pbmd9IC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gZGlzYWJsZWQ9e2lzU2lnbmluZ31cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3RleHQteGwgZm9udC1zZW1pYm9sZCBib3JkZXItMiBib3JkZXItYmxhY2sgcHgtNSBweS0yIHJvdW5kZWQteGwgYmctcGluay0xMDAnXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzY29ubmVjdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChzZXRUb2tlbihudWxsKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHNldFVzZXIobnVsbCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRJc1NpZ25pbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19PkxvZ291dDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcclxuIl0sIm5hbWVzIjpbInVzZVdhbGxldCIsIldhbGxldERpc2Nvbm5lY3RCdXR0b24iLCJXYWxsZXRNdWx0aUJ1dHRvbiIsImF4aW9zIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInRvYXN0IiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInNldFRva2VuIiwic2V0VXNlciIsInNldEJhbGFuY2UiLCJOYXZiYXIiLCJkaXNwYXRjaCIsInB1YmxpY0tleSIsInNpZ25NZXNzYWdlIiwiZGlzY29ubmVjdCIsInVzZXIiLCJ0b2tlbiIsInN0YXRlIiwiYXV0aCIsImlzU2lnbmluZyIsInNldElzU2lnbmluZyIsImJhbGFuY2UiLCJ3b3JrZXIiLCJzaWduV2FsbGV0IiwibG9hZGluZyIsIm1lc3NhZ2VUZXh0Iiwid2luZG93IiwibG9jYXRpb24iLCJob3N0IiwidG9CYXNlNTgiLCJtZXNzYWdlIiwiVGV4dEVuY29kZXIiLCJlbmNvZGUiLCJzaWduYXR1cmUiLCJyZXMiLCJwb3N0IiwiZGF0YSIsImRpc21pc3MiLCJzdWNjZXNzIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImdldEJhbGFuY2UiLCJnZXQiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInBheU91dCIsImRpdiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJkaXNhYmxlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Navbar.tsx\n"));

/***/ })

});