/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./lib/useUser.ts":
/*!************************!*\
  !*** ./lib/useUser.ts ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ useUser)\n/* harmony export */ });\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"swr\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_2__]);\nswr__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction useUser(pathname) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();\n    const url = \"/api/users/me\";\n    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(pathname === \"/create-account\" ? null : url);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (data && !data.ok) {\n            router.replace(\"/create-account\");\n        }\n    }, [\n        data,\n        error\n    ]);\n    return {\n        user: data?.profile,\n        isLoading: !data && !error\n    };\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvdXNlVXNlci50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDd0M7QUFDTjtBQUNUO0FBT1YsU0FBU0csT0FBTyxDQUFDQyxRQUFpQixFQUFFO0lBQy9DLE1BQU1DLE1BQU0sR0FBR0wsc0RBQVMsRUFBRTtJQUMxQixNQUFNTSxHQUFHLEdBQUcsZUFBZTtJQUMzQixNQUFNLEVBQUVDLElBQUksR0FBRUMsS0FBSyxHQUFFLEdBQUdOLCtDQUFNLENBQUNFLFFBQVEsS0FBSyxpQkFBaUIsR0FBRyxJQUFJLEdBQUdFLEdBQUcsQ0FBQztJQUMzRUwsZ0RBQVMsQ0FBQyxJQUFNO1FBQ1osSUFBSU0sSUFBSSxJQUFJLENBQUNBLElBQUksQ0FBQ0UsRUFBRSxFQUFFO1lBQ2xCSixNQUFNLENBQUNLLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1NBQ3JDO0tBQ0osRUFBRTtRQUFDSCxJQUFJO1FBQUVDLEtBQUs7S0FBQyxDQUFDLENBQUM7SUFDbEIsT0FBTztRQUFFRyxJQUFJLEVBQUVKLElBQUksRUFBRUssT0FBTztRQUFFQyxTQUFTLEVBQUUsQ0FBQ04sSUFBSSxJQUFJLENBQUNDLEtBQUs7S0FBRSxDQUFDO0NBQzlEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLXByaXNtYS10eXBlc2NyaXB0LXRhaWx3aW5kLWJsdWVwcmludC8uL2xpYi91c2VVc2VyLnRzP2E3OTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVXNlciB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xyXG5cclxuaW50ZXJmYWNlIFByb2ZpbGVSZXNwb25zZSB7XHJcbiAgICBvazogYm9vbGVhbjtcclxuICAgIHByb2ZpbGU6IFVzZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVVzZXIocGF0aG5hbWU/OiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgdXJsID0gXCIvYXBpL3VzZXJzL21lXCI7XHJcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IocGF0aG5hbWUgPT09IFwiL2NyZWF0ZS1hY2NvdW50XCIgPyBudWxsIDogdXJsKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGRhdGEgJiYgIWRhdGEub2spIHtcclxuICAgICAgICAgICAgcm91dGVyLnJlcGxhY2UoXCIvY3JlYXRlLWFjY291bnRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2RhdGEsIGVycm9yXSk7XHJcbiAgICByZXR1cm4geyB1c2VyOiBkYXRhPy5wcm9maWxlLCBpc0xvYWRpbmc6ICFkYXRhICYmICFlcnJvciB9O1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTV1IiLCJ1c2VVc2VyIiwicGF0aG5hbWUiLCJyb3V0ZXIiLCJ1cmwiLCJkYXRhIiwiZXJyb3IiLCJvayIsInJlcGxhY2UiLCJ1c2VyIiwicHJvZmlsZSIsImlzTG9hZGluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/useUser.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var _global_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../global.css */ \"./global.css\");\n/* harmony import */ var _global_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_global_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _lib_useUser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../lib/useUser */ \"./lib/useUser.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_2__, _lib_useUser__WEBPACK_IMPORTED_MODULE_4__]);\n([swr__WEBPACK_IMPORTED_MODULE_2__, _lib_useUser__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nfunction App({ Component , pageProps  }) {\n    const { pathname  } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    (0,_lib_useUser__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(pathname);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swr__WEBPACK_IMPORTED_MODULE_2__.SWRConfig, {\n        value: {\n            fetcher: (url)=>fetch(url).then((response)=>response.json()\n                )\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\vanqu\\\\OneDrive\\\\\\uBC14\\uD0D5 \\uD654\\uBA74\\\\JavaScript\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\_app.tsx\",\n            lineNumber: 16,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\vanqu\\\\OneDrive\\\\\\uBC14\\uD0D5 \\uD654\\uBA74\\\\JavaScript\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\_app.tsx\",\n        lineNumber: 10,\n        columnNumber: 9\n    }, this);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUF3QztBQUNSO0FBQ1Q7QUFDZ0I7QUFFeEIsU0FBU0csR0FBRyxDQUFDLEVBQUVDLFNBQVMsR0FBRUMsU0FBUyxHQUFPLEVBQUU7SUFDdkQsTUFBTSxFQUFFQyxRQUFRLEdBQUUsR0FBR04sc0RBQVMsRUFBRTtJQUNoQ0Usd0RBQU8sQ0FBQ0ksUUFBUSxDQUFDLENBQUM7SUFDbEIscUJBQ0ksOERBQUNMLDBDQUFTO1FBQ05NLEtBQUssRUFBRTtZQUNIQyxPQUFPLEVBQUUsQ0FBQ0MsR0FBVyxHQUNqQkMsS0FBSyxDQUFDRCxHQUFHLENBQUMsQ0FBQ0UsSUFBSSxDQUFDLENBQUNDLFFBQVEsR0FBS0EsUUFBUSxDQUFDQyxJQUFJLEVBQUU7Z0JBQUEsQ0FBQztTQUNyRDtrQkFFRCw0RUFBQ1QsU0FBUztZQUFFLEdBQUdDLFNBQVM7Ozs7O2dCQUFJOzs7OztZQUNwQixDQUNkO0NBQ0wiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtcHJpc21hLXR5cGVzY3JpcHQtdGFpbHdpbmQtYmx1ZXByaW50Ly4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IFNXUkNvbmZpZyB9IGZyb20gXCJzd3JcIjtcbmltcG9ydCBcIi4uL2dsb2JhbC5jc3NcIjtcbmltcG9ydCB1c2VVc2VyIGZyb20gXCIuLy4uL2xpYi91c2VVc2VyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IGFueSkge1xuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHVzZVJvdXRlcigpO1xuICAgIHVzZVVzZXIocGF0aG5hbWUpO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxTV1JDb25maWdcbiAgICAgICAgICAgIHZhbHVlPXt7XG4gICAgICAgICAgICAgICAgZmV0Y2hlcjogKHVybDogc3RyaW5nKSA9PlxuICAgICAgICAgICAgICAgICAgICBmZXRjaCh1cmwpLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICA8L1NXUkNvbmZpZz5cbiAgICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIlNXUkNvbmZpZyIsInVzZVVzZXIiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJwYXRobmFtZSIsInZhbHVlIiwiZmV0Y2hlciIsInVybCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./global.css":
/*!********************!*\
  !*** ./global.css ***!
  \********************/
/***/ (() => {



/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();