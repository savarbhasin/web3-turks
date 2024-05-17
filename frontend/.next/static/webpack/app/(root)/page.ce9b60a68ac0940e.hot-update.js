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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @solana/wallet-adapter-react */ \"(app-pages-browser)/./node_modules/@solana/wallet-adapter-react/lib/esm/useWallet.js\");\n/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @solana/wallet-adapter-react */ \"(app-pages-browser)/./node_modules/@solana/wallet-adapter-react/lib/esm/useConnection.js\");\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @solana/web3.js */ \"(app-pages-browser)/./node_modules/@solana/web3.js/lib/index.browser.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hot-toast */ \"(app-pages-browser)/./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Wallet = (param)=>{\n    let { files, title } = param;\n    _s();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [txSignature, setTxSignature] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const { publicKey, sendTransaction } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__.useWallet)();\n    const { connection } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_5__.useConnection)();\n    const { token } = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)((state)=>state.auth);\n    const pay = async ()=>{\n        setLoading(true);\n        react_hot_toast__WEBPACK_IMPORTED_MODULE_3__[\"default\"].loading(\"Paying 0.001 Sol\");\n        try {\n            if (files.length == 0) {\n                react_hot_toast__WEBPACK_IMPORTED_MODULE_3__[\"default\"].error(\"No file found!\");\n                throw new Error();\n            }\n            await makeTransaction();\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__[\"default\"].dismiss();\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__[\"default\"].success(\"Made payment of 0.001 Sol!\");\n            try {\n                react_hot_toast__WEBPACK_IMPORTED_MODULE_3__[\"default\"].loading(\"Uploading task to server...\");\n                await sendTask();\n                react_hot_toast__WEBPACK_IMPORTED_MODULE_3__[\"default\"].dismiss();\n                react_hot_toast__WEBPACK_IMPORTED_MODULE_3__[\"default\"].success(\"Task uploaded successfully!\");\n            } catch (e) {\n                console.error(e);\n                react_hot_toast__WEBPACK_IMPORTED_MODULE_3__[\"default\"].dismiss();\n                react_hot_toast__WEBPACK_IMPORTED_MODULE_3__[\"default\"].error(\"Error uploading task to server.\");\n            }\n        } catch (e) {\n            console.error(e);\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__[\"default\"].dismiss();\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__[\"default\"].error(\"Error making payment\");\n        } finally{\n            setLoading(false);\n        }\n    };\n    const makeTransaction = async ()=>{\n        if (!publicKey) throw new Error(\"Wallet not connected\");\n        const transaction = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.Transaction().add(_solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.SystemProgram.transfer({\n            fromPubkey: publicKey,\n            toPubkey: new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.PublicKey(\"6toiurfNa7x1d69qGvbYaKzbsyTfuq99vcf4bocYnreW\"),\n            lamports: 1000000 // 0.001 SOL (1 SOL = 10^9 lamports)\n        }));\n        console.log(transaction);\n        const { context: { slot: minContextSlot }, value: { blockhash, lastValidBlockHeight } } = await connection.getLatestBlockhashAndContext();\n        const signature = await sendTransaction(transaction, connection, {\n            minContextSlot\n        });\n        await connection.confirmTransaction({\n            blockhash,\n            lastValidBlockHeight,\n            signature\n        });\n        setTxSignature(signature);\n    };\n    const sendTask = async ()=>{\n        try {\n            await axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].post(\"http://localhost:3001/v1/user/task\", {\n                title: title,\n                signature: txSignature,\n                options: files.map((file)=>({\n                        imageUrl: URL.createObjectURL(file)\n                    }))\n            }, {\n                headers: {\n                    Authorization: \"Bearer \".concat(token)\n                }\n            });\n        } catch (e) {\n            console.error(e);\n            throw new Error(\"Error while making task\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: \"border-2 cursor-wait border-black text-md font-extrabold px-5 py-2 rounded-xl bg-pink-100\",\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"D:\\\\fullstack-project\\\\user-frontend\\\\components\\\\Wallet.tsx\",\n            lineNumber: 95,\n            columnNumber: 11\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            className: \"border-2 border-black text-md font-extrabold px-5 py-2 rounded-xl bg-pink-100\",\n            onClick: pay,\n            children: \"Pay 0.001 Sol\"\n        }, void 0, false, {\n            fileName: \"D:\\\\fullstack-project\\\\user-frontend\\\\components\\\\Wallet.tsx\",\n            lineNumber: 96,\n            columnNumber: 11\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\fullstack-project\\\\user-frontend\\\\components\\\\Wallet.tsx\",\n        lineNumber: 93,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Wallet, \"G/jB1L1eEUPIAB31uPEY/G4qHKs=\", false, function() {\n    return [\n        _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__.useWallet,\n        _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_5__.useConnection,\n        react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector\n    ];\n});\n_c = Wallet;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Wallet);\nvar _c;\n$RefreshReg$(_c, \"Wallet\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvV2FsbGV0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFd0U7QUFDQTtBQUM5QztBQUNjO0FBRUo7QUFDTTtBQUUxQyxNQUFNVSxTQUFTO1FBQUMsRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQTRDOztJQUN4RSxNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR1AsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDUSxhQUFhQyxlQUFlLEdBQUdULCtDQUFRQTtJQUU5QyxNQUFNLEVBQUVVLFNBQVMsRUFBRUMsZUFBZSxFQUFFLEdBQUdqQix1RUFBU0E7SUFDaEQsTUFBTSxFQUFFa0IsVUFBVSxFQUFFLEdBQUduQiwyRUFBYUE7SUFDcEMsTUFBTSxFQUFFb0IsS0FBSyxFQUFFLEdBQUdYLHdEQUFXQSxDQUFDLENBQUNZLFFBQWVBLE1BQU1DLElBQUk7SUFJeEQsTUFBTUMsTUFBTTtRQUNWVCxXQUFXO1FBQ1hOLHVEQUFLQSxDQUFDSyxPQUFPLENBQUM7UUFFZCxJQUFJO1lBQ0YsSUFBR0YsTUFBTWEsTUFBTSxJQUFFLEdBQUU7Z0JBQ2pCaEIsdURBQUtBLENBQUNpQixLQUFLLENBQUM7Z0JBQ1osTUFBTSxJQUFJQztZQUNaO1lBQ0EsTUFBTUM7WUFDTm5CLHVEQUFLQSxDQUFDb0IsT0FBTztZQUNicEIsdURBQUtBLENBQUNxQixPQUFPLENBQUM7WUFFZCxJQUFJO2dCQUNGckIsdURBQUtBLENBQUNLLE9BQU8sQ0FBQztnQkFFZCxNQUFNaUI7Z0JBQ050Qix1REFBS0EsQ0FBQ29CLE9BQU87Z0JBQ2JwQix1REFBS0EsQ0FBQ3FCLE9BQU8sQ0FBQztZQUNoQixFQUFFLE9BQU9FLEdBQUc7Z0JBQ1ZDLFFBQVFQLEtBQUssQ0FBQ007Z0JBQ2R2Qix1REFBS0EsQ0FBQ29CLE9BQU87Z0JBQ2JwQix1REFBS0EsQ0FBQ2lCLEtBQUssQ0FBQztZQUNkO1FBQ0YsRUFBRSxPQUFPTSxHQUFHO1lBQ1ZDLFFBQVFQLEtBQUssQ0FBQ007WUFDZHZCLHVEQUFLQSxDQUFDb0IsT0FBTztZQUNicEIsdURBQUtBLENBQUNpQixLQUFLLENBQUM7UUFDZCxTQUFVO1lBQ1JYLFdBQVc7UUFDYjtJQUNGO0lBRUEsTUFBTWEsa0JBQWtCO1FBQ3RCLElBQUksQ0FBQ1YsV0FBVyxNQUFNLElBQUlTLE1BQU07UUFFaEMsTUFBTU8sY0FBYyxJQUFJN0Isd0RBQVdBLEdBQUc4QixHQUFHLENBQ3ZDL0IsMERBQWFBLENBQUNnQyxRQUFRLENBQUM7WUFDckJDLFlBQVluQjtZQUNab0IsVUFBVSxJQUFJbkMsc0RBQVNBLENBQUM7WUFDeEJvQyxVQUFVLFFBQVEsb0NBQW9DO1FBQ3hEO1FBRUZOLFFBQVFPLEdBQUcsQ0FBQ047UUFFWixNQUFNLEVBQUVPLFNBQVMsRUFBRUMsTUFBTUMsY0FBYyxFQUFFLEVBQUVDLE9BQU8sRUFBRUMsU0FBUyxFQUFFQyxvQkFBb0IsRUFBRSxFQUFFLEdBQUcsTUFBTTFCLFdBQVcyQiw0QkFBNEI7UUFDdkksTUFBTUMsWUFBWSxNQUFNN0IsZ0JBQWdCZSxhQUFhZCxZQUFZO1lBQUV1QjtRQUFlO1FBRWxGLE1BQU12QixXQUFXNkIsa0JBQWtCLENBQUM7WUFBRUo7WUFBV0M7WUFBc0JFO1FBQVU7UUFDakYvQixlQUFlK0I7SUFDakI7SUFFQSxNQUFNakIsV0FBVztRQUdmLElBQUk7WUFDRixNQUFNekIsNkNBQUtBLENBQUM0QyxJQUFJLENBQUMsc0NBQXNDO2dCQUNyRHJDLE9BQU1BO2dCQUNObUMsV0FBVWhDO2dCQUNWbUMsU0FBU3ZDLE1BQU13QyxHQUFHLENBQUMsQ0FBQ0MsT0FBVTt3QkFBRUMsVUFBVUMsSUFBSUMsZUFBZSxDQUFDSDtvQkFBTTtZQUN0RSxHQUFHO2dCQUNESSxTQUFTO29CQUNQQyxlQUFlLFVBQWdCLE9BQU5yQztnQkFDM0I7WUFDRjtRQUNGLEVBQUUsT0FBT1csR0FBRztZQUNWQyxRQUFRUCxLQUFLLENBQUNNO1lBQ2QsTUFBTSxJQUFJTCxNQUFNO1FBQ2xCO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ2dDO2tCQUNFN0Msd0JBQ0csOERBQUM4QztZQUFFQyxXQUFVO3NCQUE0Rjs7Ozs7c0NBQ3pHLDhEQUFDQztZQUFPRCxXQUFVO1lBQWdGRSxTQUFTdkM7c0JBQUs7Ozs7Ozs7Ozs7O0FBSTFIO0dBekZNYjs7UUFJbUNULG1FQUFTQTtRQUN6QkQsdUVBQWFBO1FBQ2xCUyxvREFBV0E7OztLQU56QkM7QUEyRk4sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9XYWxsZXQudHN4PzhjYzQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCB7IENsb3VkaW5hcnkgfSBmcm9tICdAY2xvdWRpbmFyeS91cmwtZ2VuL2luZGV4JztcclxuaW1wb3J0IHsgdXNlQ29ubmVjdGlvbiwgdXNlV2FsbGV0IH0gZnJvbSAnQHNvbGFuYS93YWxsZXQtYWRhcHRlci1yZWFjdCc7XHJcbmltcG9ydCB7IFB1YmxpY0tleSwgU3lzdGVtUHJvZ3JhbSwgVHJhbnNhY3Rpb24gfSBmcm9tICdAc29sYW5hL3dlYjMuanMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEZpbGVXaXRoUGF0aCB9IGZyb20gJ3JlYWN0LWRyb3B6b25lJztcclxuaW1wb3J0IHRvYXN0IGZyb20gJ3JlYWN0LWhvdC10b2FzdCc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuY29uc3QgV2FsbGV0ID0gKHsgZmlsZXMsIHRpdGxlIH06IHsgZmlsZXM6IEZpbGVXaXRoUGF0aFtdLCB0aXRsZTogc3RyaW5nIH0pID0+IHtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3R4U2lnbmF0dXJlLCBzZXRUeFNpZ25hdHVyZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KCk7XHJcblxyXG4gIGNvbnN0IHsgcHVibGljS2V5LCBzZW5kVHJhbnNhY3Rpb24gfSA9IHVzZVdhbGxldCgpO1xyXG4gIGNvbnN0IHsgY29ubmVjdGlvbiB9ID0gdXNlQ29ubmVjdGlvbigpO1xyXG4gIGNvbnN0IHsgdG9rZW4gfSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogYW55KSA9PiBzdGF0ZS5hdXRoKTtcclxuXHJcbiBcclxuXHJcbiAgY29uc3QgcGF5ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIHRvYXN0LmxvYWRpbmcoJ1BheWluZyAwLjAwMSBTb2wnKTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBpZihmaWxlcy5sZW5ndGg9PTApe1xyXG4gICAgICAgIHRvYXN0LmVycm9yKFwiTm8gZmlsZSBmb3VuZCFcIilcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgfVxyXG4gICAgICBhd2FpdCBtYWtlVHJhbnNhY3Rpb24oKTtcclxuICAgICAgdG9hc3QuZGlzbWlzcygpO1xyXG4gICAgICB0b2FzdC5zdWNjZXNzKCdNYWRlIHBheW1lbnQgb2YgMC4wMDEgU29sIScpO1xyXG5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICB0b2FzdC5sb2FkaW5nKCdVcGxvYWRpbmcgdGFzayB0byBzZXJ2ZXIuLi4nKTtcclxuICAgICAgICBcclxuICAgICAgICBhd2FpdCBzZW5kVGFzaygpO1xyXG4gICAgICAgIHRvYXN0LmRpc21pc3MoKTtcclxuICAgICAgICB0b2FzdC5zdWNjZXNzKFwiVGFzayB1cGxvYWRlZCBzdWNjZXNzZnVsbHkhXCIpO1xyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgICAgICB0b2FzdC5kaXNtaXNzKCk7XHJcbiAgICAgICAgdG9hc3QuZXJyb3IoXCJFcnJvciB1cGxvYWRpbmcgdGFzayB0byBzZXJ2ZXIuXCIpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICAgIHRvYXN0LmRpc21pc3MoKTtcclxuICAgICAgdG9hc3QuZXJyb3IoJ0Vycm9yIG1ha2luZyBwYXltZW50Jyk7XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBtYWtlVHJhbnNhY3Rpb24gPSBhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAoIXB1YmxpY0tleSkgdGhyb3cgbmV3IEVycm9yKCdXYWxsZXQgbm90IGNvbm5lY3RlZCcpO1xyXG5cclxuICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gbmV3IFRyYW5zYWN0aW9uKCkuYWRkKFxyXG4gICAgICBTeXN0ZW1Qcm9ncmFtLnRyYW5zZmVyKHtcclxuICAgICAgICBmcm9tUHVia2V5OiBwdWJsaWNLZXksXHJcbiAgICAgICAgdG9QdWJrZXk6IG5ldyBQdWJsaWNLZXkoJzZ0b2l1cmZOYTd4MWQ2OXFHdmJZYUt6YnN5VGZ1cTk5dmNmNGJvY1lucmVXJyksXHJcbiAgICAgICAgbGFtcG9ydHM6IDEwMDAwMDAgLy8gMC4wMDEgU09MICgxIFNPTCA9IDEwXjkgbGFtcG9ydHMpXHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gICAgY29uc29sZS5sb2codHJhbnNhY3Rpb24pO1xyXG5cclxuICAgIGNvbnN0IHsgY29udGV4dDogeyBzbG90OiBtaW5Db250ZXh0U2xvdCB9LCB2YWx1ZTogeyBibG9ja2hhc2gsIGxhc3RWYWxpZEJsb2NrSGVpZ2h0IH0gfSA9IGF3YWl0IGNvbm5lY3Rpb24uZ2V0TGF0ZXN0QmxvY2toYXNoQW5kQ29udGV4dCgpO1xyXG4gICAgY29uc3Qgc2lnbmF0dXJlID0gYXdhaXQgc2VuZFRyYW5zYWN0aW9uKHRyYW5zYWN0aW9uLCBjb25uZWN0aW9uLCB7IG1pbkNvbnRleHRTbG90IH0pO1xyXG5cclxuICAgIGF3YWl0IGNvbm5lY3Rpb24uY29uZmlybVRyYW5zYWN0aW9uKHsgYmxvY2toYXNoLCBsYXN0VmFsaWRCbG9ja0hlaWdodCwgc2lnbmF0dXJlIH0pO1xyXG4gICAgc2V0VHhTaWduYXR1cmUoc2lnbmF0dXJlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzZW5kVGFzayA9IGFzeW5jICgpID0+IHtcclxuICAgIFxyXG4gICAgXHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDEvdjEvdXNlci90YXNrJywge1xyXG4gICAgICAgIHRpdGxlOnRpdGxlLCBcclxuICAgICAgICBzaWduYXR1cmU6dHhTaWduYXR1cmUhLFxyXG4gICAgICAgIG9wdGlvbnM6IGZpbGVzLm1hcCgoZmlsZSkgPT4gKHsgaW1hZ2VVcmw6IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSkgfSkpLFxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXJyb3Igd2hpbGUgbWFraW5nIHRhc2snKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAge2xvYWRpbmdcclxuICAgICAgICA/IDxwIGNsYXNzTmFtZT1cImJvcmRlci0yIGN1cnNvci13YWl0IGJvcmRlci1ibGFjayB0ZXh0LW1kIGZvbnQtZXh0cmFib2xkIHB4LTUgcHktMiByb3VuZGVkLXhsIGJnLXBpbmstMTAwXCI+TG9hZGluZy4uLjwvcD5cclxuICAgICAgICA6IDxidXR0b24gY2xhc3NOYW1lPVwiYm9yZGVyLTIgYm9yZGVyLWJsYWNrIHRleHQtbWQgZm9udC1leHRyYWJvbGQgcHgtNSBweS0yIHJvdW5kZWQteGwgYmctcGluay0xMDBcIiBvbkNsaWNrPXtwYXl9PlBheSAwLjAwMSBTb2w8L2J1dHRvbj5cclxuICAgICAgfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdhbGxldDtcclxuIl0sIm5hbWVzIjpbInVzZUNvbm5lY3Rpb24iLCJ1c2VXYWxsZXQiLCJQdWJsaWNLZXkiLCJTeXN0ZW1Qcm9ncmFtIiwiVHJhbnNhY3Rpb24iLCJheGlvcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJ0b2FzdCIsInVzZVNlbGVjdG9yIiwiV2FsbGV0IiwiZmlsZXMiLCJ0aXRsZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidHhTaWduYXR1cmUiLCJzZXRUeFNpZ25hdHVyZSIsInB1YmxpY0tleSIsInNlbmRUcmFuc2FjdGlvbiIsImNvbm5lY3Rpb24iLCJ0b2tlbiIsInN0YXRlIiwiYXV0aCIsInBheSIsImxlbmd0aCIsImVycm9yIiwiRXJyb3IiLCJtYWtlVHJhbnNhY3Rpb24iLCJkaXNtaXNzIiwic3VjY2VzcyIsInNlbmRUYXNrIiwiZSIsImNvbnNvbGUiLCJ0cmFuc2FjdGlvbiIsImFkZCIsInRyYW5zZmVyIiwiZnJvbVB1YmtleSIsInRvUHVia2V5IiwibGFtcG9ydHMiLCJsb2ciLCJjb250ZXh0Iiwic2xvdCIsIm1pbkNvbnRleHRTbG90IiwidmFsdWUiLCJibG9ja2hhc2giLCJsYXN0VmFsaWRCbG9ja0hlaWdodCIsImdldExhdGVzdEJsb2NraGFzaEFuZENvbnRleHQiLCJzaWduYXR1cmUiLCJjb25maXJtVHJhbnNhY3Rpb24iLCJwb3N0Iiwib3B0aW9ucyIsIm1hcCIsImZpbGUiLCJpbWFnZVVybCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiZGl2IiwicCIsImNsYXNzTmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Wallet.tsx\n"));

/***/ })

});