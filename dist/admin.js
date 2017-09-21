(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react-router"), require("react"), require("common"));
	else if(typeof define === 'function' && define.amd)
		define(["react-router", "react", "common"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react-router"), require("react"), require("common")) : factory(root["react-router"], root["react"], root["common"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_1bc23c18b0ad6713e76d__, __WEBPACK_EXTERNAL_MODULE_910805551be436795309__, __WEBPACK_EXTERNAL_MODULE_92a5dc04bd6f9fb8f29f__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "ea1f7b44187938aacf6e");
/******/ })
/************************************************************************/
/******/ ({

/***/ "1bc23c18b0ad6713e76d":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1bc23c18b0ad6713e76d__;

/***/ }),

/***/ "3d5f9fcb226e0aeef858":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("1bc23c18b0ad6713e76d"))(16);

/***/ }),

/***/ "63f14ac74ce296f77f4d":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("910805551be436795309"))(172);

/***/ }),

/***/ "657e23e47d6bc2372772":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("1bc23c18b0ad6713e76d"))(271);

/***/ }),

/***/ "910805551be436795309":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_910805551be436795309__;

/***/ }),

/***/ "92a5dc04bd6f9fb8f29f":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_92a5dc04bd6f9fb8f29f__;

/***/ }),

/***/ "ea1f7b44187938aacf6e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__("3d5f9fcb226e0aeef858");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__("63f14ac74ce296f77f4d");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = __webpack_require__("657e23e47d6bc2372772");

var _common = __webpack_require__("92a5dc04bd6f9fb8f29f");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_common.Component, null),
    _react2.default.createElement(_common.Component2, null)
), document.getElementById("admin"));

/***/ })

/******/ });
});