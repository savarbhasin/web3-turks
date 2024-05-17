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

/***/ "(app-pages-browser)/./components/Wallet.tsx":
/*!*******************************!*\
  !*** ./components/Wallet.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @solana/wallet-adapter-react */ \"(app-pages-browser)/./node_modules/@solana/wallet-adapter-react/lib/esm/useWallet.js\");\n/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @solana/wallet-adapter-react */ \"(app-pages-browser)/./node_modules/@solana/wallet-adapter-react/lib/esm/useConnection.js\");\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @solana/web3.js */ \"(app-pages-browser)/./node_modules/@solana/web3.js/lib/index.browser.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hot-toast */ \"(app-pages-browser)/./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Wallet = (param)=>{\n    let { files, title } = param;\n    _s();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [txSignature, setTxSignature] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const { publicKey, sendTransaction } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__.useWallet)();\n    const { connection } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_5__.useConnection)();\n    const { token } = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)((state)=>state.auth);\n    const pay = async ()=>{\n        setLoading(true);\n        react_hot_toast__WEBPACK_IMPORTED_MODULE_3__[\"default\"].loading(\"Paying 0.001 Sol\");\n        try {\n            if (files.length == 0) {\n                react_hot_toast__WEBPACK_IMPORTED_MODULE_3__[\"default\"].error(\"No file found!\");\n                throw new Error();\n            }\n            await sendTask();\n            await makeTransaction();\n            if (!txSignature) {\n                throw new Error(\"Transaction signature is missing\");\n            }\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__[\"default\"].dismiss();\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__[\"default\"].success(\"Made payment of 0.001 Sol!\");\n            try {\n                react_hot_toast__WEBPACK_IMPORTED_MODULE_3__[\"default\"].loading(\"Uploading task to server...\");\n                await sendTask();\n                react_hot_toast__WEBPACK_IMPORTED_MODULE_3__[\"default\"].dismiss();\n                react_hot_toast__WEBPACK_IMPORTED_MODULE_3__[\"default\"].success(\"Task uploaded successfully!\");\n            } catch (e) {\n                console.error(e);\n                react_hot_toast__WEBPACK_IMPORTED_MODULE_3__[\"default\"].dismiss();\n                react_hot_toast__WEBPACK_IMPORTED_MODULE_3__[\"default\"].error(\"Error uploading task to server.\");\n            }\n        } catch (e) {\n            console.error(e);\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__[\"default\"].dismiss();\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__[\"default\"].error(\"Error making payment\");\n        } finally{\n            setLoading(false);\n        }\n    };\n    const makeTransaction = async ()=>{\n        if (!publicKey) throw new Error(\"Wallet not connected\");\n        const transaction = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.Transaction().add(_solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.SystemProgram.transfer({\n            fromPubkey: publicKey,\n            toPubkey: new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.PublicKey(\"6toiurfNa7x1d69qGvbYaKzbsyTfuq99vcf4bocYnreW\"),\n            lamports: 1000000 // 0.001 SOL (1 SOL = 10^9 lamports)\n        }));\n        console.log(transaction);\n        const { context: { slot: minContextSlot }, value: { blockhash, lastValidBlockHeight } } = await connection.getLatestBlockhashAndContext();\n        const signature = await sendTransaction(transaction, connection, {\n            minContextSlot\n        });\n        await connection.confirmTransaction({\n            blockhash,\n            lastValidBlockHeight,\n            signature\n        });\n        setTxSignature(signature);\n    };\n    const sendTask = async ()=>{\n        const formData = new FormData();\n        formData.append(\"title\", title);\n        formData.append(\"signature\", txSignature);\n        files.forEach((file)=>{\n            formData.append(\"options\", file);\n        });\n        try {\n            await axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].post(\"http://localhost:3001/v1/user/task\", formData, {\n                headers: {\n                    Authorization: \"Bearer \".concat(token),\n                    \"Content-Type\": \"multipart/form-data\"\n                }\n            });\n        // try {\n        //   await axios.post('http://localhost:3001/v1/user/task', {\n        //     title:title, \n        //     signature:txSignature!,\n        //     options: files.map((file) => ({ imageUrl: URL.createObjectURL(file) })),\n        //   }, {\n        //     headers: {\n        //       Authorization: `Bearer ${token}`,\n        //     },\n        //   });\n        } catch (e) {\n            console.error(e);\n            throw new Error(\"Error while making task\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: \"border-2 cursor-wait border-black text-md font-extrabold px-5 py-2 rounded-xl bg-pink-100\",\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"D:\\\\fullstack-project\\\\user-frontend\\\\components\\\\Wallet.tsx\",\n            lineNumber: 114,\n            columnNumber: 11\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            className: \"border-2 border-black text-md font-extrabold px-5 py-2 rounded-xl bg-pink-100\",\n            onClick: pay,\n            children: \"Pay 0.001 Sol\"\n        }, void 0, false, {\n            fileName: \"D:\\\\fullstack-project\\\\user-frontend\\\\components\\\\Wallet.tsx\",\n            lineNumber: 115,\n            columnNumber: 11\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\fullstack-project\\\\user-frontend\\\\components\\\\Wallet.tsx\",\n        lineNumber: 112,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Wallet, \"G/jB1L1eEUPIAB31uPEY/G4qHKs=\", false, function() {\n    return [\n        _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__.useWallet,\n        _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_5__.useConnection,\n        react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector\n    ];\n});\n_c = Wallet;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Wallet);\nvar _c;\n$RefreshReg$(_c, \"Wallet\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvV2FsbGV0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFd0U7QUFDQTtBQUM5QztBQUNjO0FBRUo7QUFDTTtBQUUxQyxNQUFNVSxTQUFTO1FBQUMsRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQTRDOztJQUN4RSxNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR1AsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDUSxhQUFhQyxlQUFlLEdBQUdULCtDQUFRQTtJQUU5QyxNQUFNLEVBQUVVLFNBQVMsRUFBRUMsZUFBZSxFQUFFLEdBQUdqQix1RUFBU0E7SUFDaEQsTUFBTSxFQUFFa0IsVUFBVSxFQUFFLEdBQUduQiwyRUFBYUE7SUFDcEMsTUFBTSxFQUFFb0IsS0FBSyxFQUFFLEdBQUdYLHdEQUFXQSxDQUFDLENBQUNZLFFBQWVBLE1BQU1DLElBQUk7SUFJeEQsTUFBTUMsTUFBTTtRQUNWVCxXQUFXO1FBQ1hOLHVEQUFLQSxDQUFDSyxPQUFPLENBQUM7UUFFZCxJQUFJO1lBQ0YsSUFBR0YsTUFBTWEsTUFBTSxJQUFFLEdBQUU7Z0JBQ2pCaEIsdURBQUtBLENBQUNpQixLQUFLLENBQUM7Z0JBQ1osTUFBTSxJQUFJQztZQUNaO1lBQUMsTUFBTUM7WUFDUCxNQUFNQztZQUVOLElBQUksQ0FBQ2IsYUFBYTtnQkFDaEIsTUFBTSxJQUFJVyxNQUFNO1lBQ2xCO1lBRUFsQix1REFBS0EsQ0FBQ3FCLE9BQU87WUFDYnJCLHVEQUFLQSxDQUFDc0IsT0FBTyxDQUFDO1lBRWQsSUFBSTtnQkFDRnRCLHVEQUFLQSxDQUFDSyxPQUFPLENBQUM7Z0JBRWQsTUFBTWM7Z0JBQ05uQix1REFBS0EsQ0FBQ3FCLE9BQU87Z0JBQ2JyQix1REFBS0EsQ0FBQ3NCLE9BQU8sQ0FBQztZQUNoQixFQUFFLE9BQU9DLEdBQUc7Z0JBQ1ZDLFFBQVFQLEtBQUssQ0FBQ007Z0JBQ2R2Qix1REFBS0EsQ0FBQ3FCLE9BQU87Z0JBQ2JyQix1REFBS0EsQ0FBQ2lCLEtBQUssQ0FBQztZQUNkO1FBQ0YsRUFBRSxPQUFPTSxHQUFHO1lBQ1ZDLFFBQVFQLEtBQUssQ0FBQ007WUFDZHZCLHVEQUFLQSxDQUFDcUIsT0FBTztZQUNickIsdURBQUtBLENBQUNpQixLQUFLLENBQUM7UUFDZCxTQUFVO1lBQ1JYLFdBQVc7UUFDYjtJQUNGO0lBRUEsTUFBTWMsa0JBQWtCO1FBQ3RCLElBQUksQ0FBQ1gsV0FBVyxNQUFNLElBQUlTLE1BQU07UUFFaEMsTUFBTU8sY0FBYyxJQUFJN0Isd0RBQVdBLEdBQUc4QixHQUFHLENBQ3ZDL0IsMERBQWFBLENBQUNnQyxRQUFRLENBQUM7WUFDckJDLFlBQVluQjtZQUNab0IsVUFBVSxJQUFJbkMsc0RBQVNBLENBQUM7WUFDeEJvQyxVQUFVLFFBQVEsb0NBQW9DO1FBQ3hEO1FBRUZOLFFBQVFPLEdBQUcsQ0FBQ047UUFFWixNQUFNLEVBQUVPLFNBQVMsRUFBRUMsTUFBTUMsY0FBYyxFQUFFLEVBQUVDLE9BQU8sRUFBRUMsU0FBUyxFQUFFQyxvQkFBb0IsRUFBRSxFQUFFLEdBQUcsTUFBTTFCLFdBQVcyQiw0QkFBNEI7UUFDdkksTUFBTUMsWUFBWSxNQUFNN0IsZ0JBQWdCZSxhQUFhZCxZQUFZO1lBQUV1QjtRQUFlO1FBRWxGLE1BQU12QixXQUFXNkIsa0JBQWtCLENBQUM7WUFBRUo7WUFBV0M7WUFBc0JFO1FBQVU7UUFDakYvQixlQUFlK0I7SUFDakI7SUFFQSxNQUFNcEIsV0FBVztRQUNmLE1BQU1zQixXQUFXLElBQUlDO1FBQ3JCRCxTQUFTRSxNQUFNLENBQUMsU0FBU3ZDO1FBQ3pCcUMsU0FBU0UsTUFBTSxDQUFDLGFBQWFwQztRQUU3QkosTUFBTXlDLE9BQU8sQ0FBQyxDQUFDQztZQUNiSixTQUFTRSxNQUFNLENBQUUsV0FBVUU7UUFDN0I7UUFFQSxJQUFJO1lBQ0YsTUFBTWhELDZDQUFLQSxDQUFDaUQsSUFBSSxDQUFDLHNDQUFzQ0wsVUFBVTtnQkFDL0RNLFNBQVM7b0JBQ1BDLGVBQWUsVUFBZ0IsT0FBTnBDO29CQUN6QixnQkFBZ0I7Z0JBQ2xCO1lBQ0Y7UUFFRixRQUFRO1FBQ1IsNkRBQTZEO1FBQzdELG9CQUFvQjtRQUNwQiw4QkFBOEI7UUFDOUIsK0VBQStFO1FBQy9FLFNBQVM7UUFDVCxpQkFBaUI7UUFDakIsMENBQTBDO1FBQzFDLFNBQVM7UUFDVCxRQUFRO1FBQ1IsRUFBRSxPQUFPVyxHQUFHO1lBQ1ZDLFFBQVFQLEtBQUssQ0FBQ007WUFDZCxNQUFNLElBQUlMLE1BQU07UUFDbEI7SUFDRjtJQUVBLHFCQUNFLDhEQUFDK0I7a0JBQ0U1Qyx3QkFDRyw4REFBQzZDO1lBQUVDLFdBQVU7c0JBQTRGOzs7OztzQ0FDekcsOERBQUNDO1lBQU9ELFdBQVU7WUFBZ0ZFLFNBQVN0QztzQkFBSzs7Ozs7Ozs7Ozs7QUFJMUg7R0E1R01iOztRQUltQ1QsbUVBQVNBO1FBQ3pCRCx1RUFBYUE7UUFDbEJTLG9EQUFXQTs7O0tBTnpCQztBQThHTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1dhbGxldC50c3g/OGNjNCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IHsgQ2xvdWRpbmFyeSB9IGZyb20gJ0BjbG91ZGluYXJ5L3VybC1nZW4vaW5kZXgnO1xyXG5pbXBvcnQgeyB1c2VDb25uZWN0aW9uLCB1c2VXYWxsZXQgfSBmcm9tICdAc29sYW5hL3dhbGxldC1hZGFwdGVyLXJlYWN0JztcclxuaW1wb3J0IHsgUHVibGljS2V5LCBTeXN0ZW1Qcm9ncmFtLCBUcmFuc2FjdGlvbiB9IGZyb20gJ0Bzb2xhbmEvd2ViMy5qcyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRmlsZVdpdGhQYXRoIH0gZnJvbSAncmVhY3QtZHJvcHpvbmUnO1xyXG5pbXBvcnQgdG9hc3QgZnJvbSAncmVhY3QtaG90LXRvYXN0JztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5jb25zdCBXYWxsZXQgPSAoeyBmaWxlcywgdGl0bGUgfTogeyBmaWxlczogRmlsZVdpdGhQYXRoW10sIHRpdGxlOiBzdHJpbmcgfSkgPT4ge1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdHhTaWduYXR1cmUsIHNldFR4U2lnbmF0dXJlXSA9IHVzZVN0YXRlPHN0cmluZz4oKTtcclxuXHJcbiAgY29uc3QgeyBwdWJsaWNLZXksIHNlbmRUcmFuc2FjdGlvbiB9ID0gdXNlV2FsbGV0KCk7XHJcbiAgY29uc3QgeyBjb25uZWN0aW9uIH0gPSB1c2VDb25uZWN0aW9uKCk7XHJcbiAgY29uc3QgeyB0b2tlbiB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBhbnkpID0+IHN0YXRlLmF1dGgpO1xyXG5cclxuIFxyXG5cclxuICBjb25zdCBwYXkgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgdG9hc3QubG9hZGluZygnUGF5aW5nIDAuMDAxIFNvbCcpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGlmKGZpbGVzLmxlbmd0aD09MCl7XHJcbiAgICAgICAgdG9hc3QuZXJyb3IoXCJObyBmaWxlIGZvdW5kIVwiKVxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICB9YXdhaXQgc2VuZFRhc2soKTtcclxuICAgICAgYXdhaXQgbWFrZVRyYW5zYWN0aW9uKCk7XHJcblxyXG4gICAgICBpZiAoIXR4U2lnbmF0dXJlKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUcmFuc2FjdGlvbiBzaWduYXR1cmUgaXMgbWlzc2luZycpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0b2FzdC5kaXNtaXNzKCk7XHJcbiAgICAgIHRvYXN0LnN1Y2Nlc3MoJ01hZGUgcGF5bWVudCBvZiAwLjAwMSBTb2whJyk7XHJcblxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHRvYXN0LmxvYWRpbmcoJ1VwbG9hZGluZyB0YXNrIHRvIHNlcnZlci4uLicpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGF3YWl0IHNlbmRUYXNrKClcclxuICAgICAgICB0b2FzdC5kaXNtaXNzKCk7XHJcbiAgICAgICAgdG9hc3Quc3VjY2VzcyhcIlRhc2sgdXBsb2FkZWQgc3VjY2Vzc2Z1bGx5IVwiKTtcclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICAgICAgdG9hc3QuZGlzbWlzcygpO1xyXG4gICAgICAgIHRvYXN0LmVycm9yKFwiRXJyb3IgdXBsb2FkaW5nIHRhc2sgdG8gc2VydmVyLlwiKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgICB0b2FzdC5kaXNtaXNzKCk7XHJcbiAgICAgIHRvYXN0LmVycm9yKCdFcnJvciBtYWtpbmcgcGF5bWVudCcpO1xyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbWFrZVRyYW5zYWN0aW9uID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYgKCFwdWJsaWNLZXkpIHRocm93IG5ldyBFcnJvcignV2FsbGV0IG5vdCBjb25uZWN0ZWQnKTtcclxuXHJcbiAgICBjb25zdCB0cmFuc2FjdGlvbiA9IG5ldyBUcmFuc2FjdGlvbigpLmFkZChcclxuICAgICAgU3lzdGVtUHJvZ3JhbS50cmFuc2Zlcih7XHJcbiAgICAgICAgZnJvbVB1YmtleTogcHVibGljS2V5LFxyXG4gICAgICAgIHRvUHVia2V5OiBuZXcgUHVibGljS2V5KCc2dG9pdXJmTmE3eDFkNjlxR3ZiWWFLemJzeVRmdXE5OXZjZjRib2NZbnJlVycpLFxyXG4gICAgICAgIGxhbXBvcnRzOiAxMDAwMDAwIC8vIDAuMDAxIFNPTCAoMSBTT0wgPSAxMF45IGxhbXBvcnRzKVxyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICAgIGNvbnNvbGUubG9nKHRyYW5zYWN0aW9uKTtcclxuXHJcbiAgICBjb25zdCB7IGNvbnRleHQ6IHsgc2xvdDogbWluQ29udGV4dFNsb3QgfSwgdmFsdWU6IHsgYmxvY2toYXNoLCBsYXN0VmFsaWRCbG9ja0hlaWdodCB9IH0gPSBhd2FpdCBjb25uZWN0aW9uLmdldExhdGVzdEJsb2NraGFzaEFuZENvbnRleHQoKTtcclxuICAgIGNvbnN0IHNpZ25hdHVyZSA9IGF3YWl0IHNlbmRUcmFuc2FjdGlvbih0cmFuc2FjdGlvbiwgY29ubmVjdGlvbiwgeyBtaW5Db250ZXh0U2xvdCB9KTtcclxuXHJcbiAgICBhd2FpdCBjb25uZWN0aW9uLmNvbmZpcm1UcmFuc2FjdGlvbih7IGJsb2NraGFzaCwgbGFzdFZhbGlkQmxvY2tIZWlnaHQsIHNpZ25hdHVyZSB9KTtcclxuICAgIHNldFR4U2lnbmF0dXJlKHNpZ25hdHVyZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2VuZFRhc2sgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKCd0aXRsZScsIHRpdGxlKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZCgnc2lnbmF0dXJlJywgdHhTaWduYXR1cmUhKTtcclxuXHJcbiAgICBmaWxlcy5mb3JFYWNoKChmaWxlKSA9PiB7XHJcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChgb3B0aW9uc2AsIGZpbGUpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL3YxL3VzZXIvdGFzaycsIGZvcm1EYXRhLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGEnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAvLyB0cnkge1xyXG4gICAgLy8gICBhd2FpdCBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDEvdjEvdXNlci90YXNrJywge1xyXG4gICAgLy8gICAgIHRpdGxlOnRpdGxlLCBcclxuICAgIC8vICAgICBzaWduYXR1cmU6dHhTaWduYXR1cmUhLFxyXG4gICAgLy8gICAgIG9wdGlvbnM6IGZpbGVzLm1hcCgoZmlsZSkgPT4gKHsgaW1hZ2VVcmw6IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSkgfSkpLFxyXG4gICAgLy8gICB9LCB7XHJcbiAgICAvLyAgICAgaGVhZGVyczoge1xyXG4gICAgLy8gICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICAvLyAgICAgfSxcclxuICAgIC8vICAgfSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXJyb3Igd2hpbGUgbWFraW5nIHRhc2snKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAge2xvYWRpbmdcclxuICAgICAgICA/IDxwIGNsYXNzTmFtZT1cImJvcmRlci0yIGN1cnNvci13YWl0IGJvcmRlci1ibGFjayB0ZXh0LW1kIGZvbnQtZXh0cmFib2xkIHB4LTUgcHktMiByb3VuZGVkLXhsIGJnLXBpbmstMTAwXCI+TG9hZGluZy4uLjwvcD5cclxuICAgICAgICA6IDxidXR0b24gY2xhc3NOYW1lPVwiYm9yZGVyLTIgYm9yZGVyLWJsYWNrIHRleHQtbWQgZm9udC1leHRyYWJvbGQgcHgtNSBweS0yIHJvdW5kZWQteGwgYmctcGluay0xMDBcIiBvbkNsaWNrPXtwYXl9PlBheSAwLjAwMSBTb2w8L2J1dHRvbj5cclxuICAgICAgfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdhbGxldDtcclxuIl0sIm5hbWVzIjpbInVzZUNvbm5lY3Rpb24iLCJ1c2VXYWxsZXQiLCJQdWJsaWNLZXkiLCJTeXN0ZW1Qcm9ncmFtIiwiVHJhbnNhY3Rpb24iLCJheGlvcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJ0b2FzdCIsInVzZVNlbGVjdG9yIiwiV2FsbGV0IiwiZmlsZXMiLCJ0aXRsZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidHhTaWduYXR1cmUiLCJzZXRUeFNpZ25hdHVyZSIsInB1YmxpY0tleSIsInNlbmRUcmFuc2FjdGlvbiIsImNvbm5lY3Rpb24iLCJ0b2tlbiIsInN0YXRlIiwiYXV0aCIsInBheSIsImxlbmd0aCIsImVycm9yIiwiRXJyb3IiLCJzZW5kVGFzayIsIm1ha2VUcmFuc2FjdGlvbiIsImRpc21pc3MiLCJzdWNjZXNzIiwiZSIsImNvbnNvbGUiLCJ0cmFuc2FjdGlvbiIsImFkZCIsInRyYW5zZmVyIiwiZnJvbVB1YmtleSIsInRvUHVia2V5IiwibGFtcG9ydHMiLCJsb2ciLCJjb250ZXh0Iiwic2xvdCIsIm1pbkNvbnRleHRTbG90IiwidmFsdWUiLCJibG9ja2hhc2giLCJsYXN0VmFsaWRCbG9ja0hlaWdodCIsImdldExhdGVzdEJsb2NraGFzaEFuZENvbnRleHQiLCJzaWduYXR1cmUiLCJjb25maXJtVHJhbnNhY3Rpb24iLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiZm9yRWFjaCIsImZpbGUiLCJwb3N0IiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJkaXYiLCJwIiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Wallet.tsx\n"));

/***/ })

});