/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 86);
/******/ })
/************************************************************************/
/******/ ({

/***/ 86:
/* no static exports found */
/* all exports used */
/*!************************************!*\
  !*** ./react-client/src/index.jsx ***!
  \************************************/
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: SyntaxError: C:/Users/ghazi/Desktop/mvp-starter/react-client/src/index.jsx: JSX attributes must only be assigned a non-empty expression (49:26)\\n\\n\\u001b[0m \\u001b[90m 47 | \\u001b[39m          \\u001b[33m<\\u001b[39m\\u001b[33mspan\\u001b[39m className\\u001b[33m=\\u001b[39m\\u001b[32m\\\"left\\\"\\u001b[39m\\u001b[33m>\\u001b[39m{key}\\u001b[33m<\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33mspan\\u001b[39m\\u001b[33m>\\u001b[39m\\n \\u001b[90m 48 | \\u001b[39m          \\u001b[33m<\\u001b[39m\\u001b[33mspan\\u001b[39m className\\u001b[33m=\\u001b[39m\\u001b[32m\\\"right\\\"\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[33m<\\u001b[39m\\u001b[33mNumberFormat\\u001b[39m value \\u001b[33m=\\u001b[39m{\\u001b[36mthis\\u001b[39m\\u001b[33m.\\u001b[39mstate\\u001b[33m.\\u001b[39mcryptos[key]\\u001b[33m.\\u001b[39m\\u001b[33mUSD\\u001b[39m} displayType\\u001b[33m=\\u001b[39m{\\u001b[32m'text'\\u001b[39m} thousandSeparator\\u001b[33m=\\u001b[39m{\\u001b[36mtrue\\u001b[39m} prefix\\u001b[33m=\\u001b[39m{\\u001b[32m'$'\\u001b[39m} \\u001b[33m/\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[33m<\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33mspan\\u001b[39m\\u001b[33m>\\u001b[39m\\n\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 49 | \\u001b[39m          \\u001b[33m<\\u001b[39m\\u001b[33mbutton\\u001b[39m onClick\\u001b[33m=\\u001b[39m{}\\u001b[33m>\\u001b[39m\\u001b[33mConvert\\u001b[39m to \\u001b[33mJOD\\u001b[39m\\u001b[33m<\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33mbutton\\u001b[39m\\u001b[33m>\\u001b[39m\\n \\u001b[90m    | \\u001b[39m                          \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\n \\u001b[90m 50 | \\u001b[39m          \\u001b[33m<\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33mdiv\\u001b[39m\\u001b[33m>\\u001b[39m\\n \\u001b[90m 51 | \\u001b[39m      ))}\\n \\u001b[90m 52 | \\u001b[39m    \\u001b[33m<\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33mdiv\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODYuanMiLCJzb3VyY2VzIjpbXSwibWFwcGluZ3MiOiIiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///86\n");

/***/ })

/******/ });