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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * Strongly Typed Events for TypeScript
 * https://github.com/KeesCBakker/StronlyTypedEvents/
 * http://keestalkstech.com
 *
 * Copyright Kees C. Bakker / KeesTalksTech
 * Released under the MIT license
 */
Object.defineProperty(exports, "__esModule", { value: true });
var ste_core_1 = __webpack_require__(1);
exports.DispatcherBase = ste_core_1.DispatcherBase;
exports.DispatcherWrapper = ste_core_1.DispatcherWrapper;
exports.EventListBase = ste_core_1.EventListBase;
exports.Subscription = ste_core_1.Subscription;
var ste_events_1 = __webpack_require__(8);
exports.EventDispatcher = ste_events_1.EventDispatcher;
exports.EventHandlingBase = ste_events_1.EventHandlingBase;
exports.EventList = ste_events_1.EventList;
exports.NonUniformEventList = ste_events_1.NonUniformEventList;
var ste_simple_events_1 = __webpack_require__(10);
exports.SimpleEventDispatcher = ste_simple_events_1.SimpleEventDispatcher;
exports.SimpleEventHandlingBase = ste_simple_events_1.SimpleEventHandlingBase;
exports.SimpleEventList = ste_simple_events_1.SimpleEventList;
exports.NonUniformSimpleEventList = ste_simple_events_1.NonUniformSimpleEventList;
var ste_signals_1 = __webpack_require__(12);
exports.SignalDispatcher = ste_signals_1.SignalDispatcher;
exports.SignalHandlingBase = ste_signals_1.SignalHandlingBase;
exports.SignalList = ste_signals_1.SignalList;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * Strongly Typed Events for TypeScript - Core
 * https://github.com/KeesCBakker/StronlyTypedEvents/
 * http://keestalkstech.com
 *
 * Copyright Kees C. Bakker / KeesTalksTech
 * Released under the MIT license
 */
Object.defineProperty(exports, "__esModule", { value: true });
var dispatching_1 = __webpack_require__(6);
exports.DispatcherBase = dispatching_1.DispatcherBase;
exports.DispatcherWrapper = dispatching_1.DispatcherWrapper;
exports.EventListBase = dispatching_1.EventListBase;
var subscription_1 = __webpack_require__(3);
exports.Subscription = subscription_1.Subscription;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var _ponyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* global window */


var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {}

var result = Object(_ponyfill_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(root);
/* harmony default export */ __webpack_exports__["a"] = (result);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(14), __webpack_require__(15)(module)))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Stores a handler. Manages execution meta data.
 * @class Subscription
 * @template TEventHandler
 */
var Subscription = /** @class */ (function () {
    /**
     * Creates an instance of Subscription.
     *
     * @param {TEventHandler} handler The handler for the subscription.
     * @param {boolean} isOnce Indicates if the handler should only be executed once.
     */
    function Subscription(handler, isOnce) {
        this.handler = handler;
        this.isOnce = isOnce;
        /**
         * Indicates if the subscription has been executed before.
         */
        this.isExecuted = false;
    }
    /**
     * Executes the handler.
     *
     * @param {boolean} executeAsync True if the even should be executed async.
     * @param {*} scope The scope the scope of the event.
     * @param {IArguments} args The arguments for the event.
     */
    Subscription.prototype.execute = function (executeAsync, scope, args) {
        if (!this.isOnce || !this.isExecuted) {
            this.isExecuted = true;
            var fn = this.handler;
            if (executeAsync) {
                setTimeout(function () {
                    fn.apply(scope, args);
                }, 1);
            }
            else {
                fn.apply(scope, args);
            }
        }
    };
    return Subscription;
}());
exports.Subscription = Subscription;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return symbolObservablePonyfill; });
function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};


/***/ }),
/* 5 */
/***/ (function(module) {

module.exports = JSON.parse("{\"0\":{\"mnemonic\":\"nop\"},\"1\":{\"mnemonic\":\"ld\",\"params\":[\"bc\",\"nnnn\"]},\"2\":{\"mnemonic\":\"ld\",\"params\":[\"(bc)\",\"a\"]},\"3\":{\"mnemonic\":\"inc\",\"params\":[\"bc\"]},\"4\":{\"mnemonic\":\"inc\",\"params\":[\"b\"]},\"5\":{\"mnemonic\":\"dec\",\"params\":[\"b\"]},\"6\":{\"mnemonic\":\"ld\",\"params\":[\"b\",\"nn\"]},\"7\":{\"mnemonic\":\"rlca\"},\"8\":{\"mnemonic\":\"ex\",\"params\":[\"af\",\"af'\"]},\"9\":{\"mnemonic\":\"add\",\"params\":[\"hl\",\"bc\"]},\"10\":{\"mnemonic\":\"djnz\",\"params\":[\"offset\"]},\"11\":{\"mnemonic\":\"ld\",\"params\":[\"de\",\"nnnn\"]},\"12\":{\"mnemonic\":\"ld\",\"params\":[\"(de)\",\"a\"]},\"13\":{\"mnemonic\":\"inc\",\"params\":[\"de\"]},\"14\":{\"mnemonic\":\"inc\",\"params\":[\"d\"]},\"15\":{\"mnemonic\":\"dec\",\"params\":[\"d\"]},\"16\":{\"mnemonic\":\"ld\",\"params\":[\"d\",\"nn\"]},\"17\":{\"mnemonic\":\"rla\"},\"18\":{\"mnemonic\":\"jr\",\"params\":[\"offset\"]},\"19\":{\"mnemonic\":\"add\",\"params\":[\"hl\",\"de\"]},\"20\":{\"mnemonic\":\"jr\",\"params\":[\"nz\",\"offset\"]},\"21\":{\"mnemonic\":\"ld\",\"params\":[\"hl\",\"nnnn\"]},\"22\":{\"mnemonic\":\"ld\",\"params\":[\"(nnnn)\",\"hl\"]},\"23\":{\"mnemonic\":\"inc\",\"params\":[\"hl\"]},\"24\":{\"mnemonic\":\"inc\",\"params\":[\"h\"]},\"25\":{\"mnemonic\":\"dec\",\"params\":[\"h\"]},\"26\":{\"mnemonic\":\"ld\",\"params\":[\"h\",\"nn\"]},\"27\":{\"mnemonic\":\"daa\"},\"28\":{\"mnemonic\":\"jr\",\"params\":[\"z\",\"offset\"]},\"29\":{\"mnemonic\":\"add\",\"params\":[\"hl\",\"hl\"]},\"30\":{\"mnemonic\":\"jr\",\"params\":[\"nc\",\"offset\"]},\"31\":{\"mnemonic\":\"ld\",\"params\":[\"sp\",\"nnnn\"]},\"32\":{\"mnemonic\":\"ld\",\"params\":[\"(nnnn)\",\"a\"]},\"33\":{\"mnemonic\":\"inc\",\"params\":[\"sp\"]},\"34\":{\"mnemonic\":\"inc\",\"params\":[\"(hl)\"]},\"35\":{\"mnemonic\":\"dec\",\"params\":[\"(hl)\"]},\"36\":{\"mnemonic\":\"ld\",\"params\":[\"(hl)\",\"nn\"]},\"37\":{\"mnemonic\":\"scf\"},\"38\":{\"mnemonic\":\"jr\",\"params\":[\"c\",\"offset\"]},\"39\":{\"mnemonic\":\"add\",\"params\":[\"hl\",\"sp\"]},\"40\":{\"mnemonic\":\"ld\",\"params\":[\"b\",\"b\"]},\"41\":{\"mnemonic\":\"ld\",\"params\":[\"b\",\"c\"]},\"42\":{\"mnemonic\":\"ld\",\"params\":[\"b\",\"d\"]},\"43\":{\"mnemonic\":\"ld\",\"params\":[\"b\",\"e\"]},\"44\":{\"mnemonic\":\"ld\",\"params\":[\"b\",\"h\"]},\"45\":{\"mnemonic\":\"ld\",\"params\":[\"b\",\"l\"]},\"46\":{\"mnemonic\":\"ld\",\"params\":[\"b\",\"(hl)\"]},\"47\":{\"mnemonic\":\"ld\",\"params\":[\"b\",\"a\"]},\"48\":{\"mnemonic\":\"ld\",\"params\":[\"c\",\"b\"]},\"49\":{\"mnemonic\":\"ld\",\"params\":[\"c\",\"c\"]},\"50\":{\"mnemonic\":\"ld\",\"params\":[\"d\",\"b\"]},\"51\":{\"mnemonic\":\"ld\",\"params\":[\"d\",\"c\"]},\"52\":{\"mnemonic\":\"ld\",\"params\":[\"d\",\"d\"]},\"53\":{\"mnemonic\":\"ld\",\"params\":[\"d\",\"e\"]},\"54\":{\"mnemonic\":\"ld\",\"params\":[\"d\",\"h\"]},\"55\":{\"mnemonic\":\"ld\",\"params\":[\"d\",\"l\"]},\"56\":{\"mnemonic\":\"ld\",\"params\":[\"d\",\"(hl)\"]},\"57\":{\"mnemonic\":\"ld\",\"params\":[\"d\",\"a\"]},\"58\":{\"mnemonic\":\"ld\",\"params\":[\"e\",\"b\"]},\"59\":{\"mnemonic\":\"ld\",\"params\":[\"e\",\"c\"]},\"60\":{\"mnemonic\":\"ld\",\"params\":[\"h\",\"b\"]},\"61\":{\"mnemonic\":\"ld\",\"params\":[\"h\",\"c\"]},\"62\":{\"mnemonic\":\"ld\",\"params\":[\"h\",\"d\"]},\"63\":{\"mnemonic\":\"ld\",\"params\":[\"h\",\"e\"]},\"64\":{\"mnemonic\":\"ld\",\"params\":[\"h\",\"h\"]},\"65\":{\"mnemonic\":\"ld\",\"params\":[\"h\",\"l\"]},\"66\":{\"mnemonic\":\"ld\",\"params\":[\"h\",\"(hl)\"]},\"67\":{\"mnemonic\":\"ld\",\"params\":[\"h\",\"a\"]},\"68\":{\"mnemonic\":\"ld\",\"params\":[\"l\",\"b\"]},\"69\":{\"mnemonic\":\"ld\",\"params\":[\"l\",\"c\"]},\"70\":{\"mnemonic\":\"ld\",\"params\":[\"(hl)\",\"b\"]},\"71\":{\"mnemonic\":\"ld\",\"params\":[\"(hl)\",\"c\"]},\"72\":{\"mnemonic\":\"ld\",\"params\":[\"(hl)\",\"d\"]},\"73\":{\"mnemonic\":\"ld\",\"params\":[\"(hl)\",\"e\"]},\"74\":{\"mnemonic\":\"ld\",\"params\":[\"(hl)\",\"h\"]},\"75\":{\"mnemonic\":\"ld\",\"params\":[\"(hl)\",\"l\"]},\"76\":{\"mnemonic\":\"halt\"},\"77\":{\"mnemonic\":\"ld\",\"params\":[\"(hl)\",\"a\"]},\"78\":{\"mnemonic\":\"ld\",\"params\":[\"a\",\"b\"]},\"79\":{\"mnemonic\":\"ld\",\"params\":[\"a\",\"c\"]},\"80\":{\"mnemonic\":\"add\",\"params\":[\"a\",\"b\"]},\"81\":{\"mnemonic\":\"add\",\"params\":[\"a\",\"c\"]},\"82\":{\"mnemonic\":\"add\",\"params\":[\"a\",\"d\"]},\"83\":{\"mnemonic\":\"add\",\"params\":[\"a\",\"e\"]},\"84\":{\"mnemonic\":\"add\",\"params\":[\"a\",\"h\"]},\"85\":{\"mnemonic\":\"add\",\"params\":[\"a\",\"l\"]},\"86\":{\"mnemonic\":\"add\",\"params\":[\"a\",\"(hl)\"]},\"87\":{\"mnemonic\":\"add\",\"params\":[\"a\",\"a\"]},\"88\":{\"mnemonic\":\"adc\",\"params\":[\"a\",\"b\"]},\"89\":{\"mnemonic\":\"adc\",\"params\":[\"a\",\"c\"]},\"90\":{\"mnemonic\":\"sub\",\"params\":[\"a\",\"b\"]},\"91\":{\"mnemonic\":\"sub\",\"params\":[\"a\",\"c\"]},\"92\":{\"mnemonic\":\"sub\",\"params\":[\"a\",\"d\"]},\"93\":{\"mnemonic\":\"sub\",\"params\":[\"a\",\"e\"]},\"94\":{\"mnemonic\":\"sub\",\"params\":[\"a\",\"h\"]},\"95\":{\"mnemonic\":\"sub\",\"params\":[\"a\",\"l\"]},\"96\":{\"mnemonic\":\"sub\",\"params\":[\"a\",\"(hl)\"]},\"97\":{\"mnemonic\":\"sub\",\"params\":[\"a\",\"a\"]},\"98\":{\"mnemonic\":\"sbc\",\"params\":[\"a\",\"b\"]},\"99\":{\"mnemonic\":\"sbc\",\"params\":[\"a\",\"c\"]},\"a\":{\"mnemonic\":\"ld\",\"params\":[\"a\",\"(bc)\"]},\"b\":{\"mnemonic\":\"dec\",\"params\":[\"bc\"]},\"c\":{\"mnemonic\":\"inc\",\"params\":[\"c\"]},\"d\":{\"mnemonic\":\"dec\",\"params\":[\"c\"]},\"e\":{\"mnemonic\":\"ld\",\"params\":[\"c\",\"nn\"]},\"f\":{\"mnemonic\":\"rrca\"},\"1a\":{\"mnemonic\":\"ld\",\"params\":[\"a\",\"(de)\"]},\"1b\":{\"mnemonic\":\"dec\",\"params\":[\"de\"]},\"1c\":{\"mnemonic\":\"inc\",\"params\":[\"e\"]},\"1d\":{\"mnemonic\":\"dec\",\"params\":[\"e\"]},\"1e\":{\"mnemonic\":\"ld\",\"params\":[\"e\",\"nn\"]},\"1f\":{\"mnemonic\":\"rra\"},\"2a\":{\"mnemonic\":\"ld\",\"params\":[\"hl\",\"(nnnn)\"]},\"2b\":{\"mnemonic\":\"dec\",\"params\":[\"hl\"]},\"2c\":{\"mnemonic\":\"inc\",\"params\":[\"l\"]},\"2d\":{\"mnemonic\":\"dec\",\"params\":[\"l\"]},\"2e\":{\"mnemonic\":\"ld\",\"params\":[\"l\",\"nn\"]},\"2f\":{\"mnemonic\":\"cpl\"},\"3a\":{\"mnemonic\":\"ld\",\"params\":[\"a\",\"(nnnn)\"]},\"3b\":{\"mnemonic\":\"dec\",\"params\":[\"sp\"]},\"3c\":{\"mnemonic\":\"inc\",\"params\":[\"a\"]},\"3d\":{\"mnemonic\":\"dec\",\"params\":[\"a\"]},\"3e\":{\"mnemonic\":\"ld\",\"params\":[\"a\",\"nn\"]},\"3f\":{\"mnemonic\":\"ccf\"},\"4a\":{\"mnemonic\":\"ld\",\"params\":[\"c\",\"d\"]},\"4b\":{\"mnemonic\":\"ld\",\"params\":[\"c\",\"e\"]},\"4c\":{\"mnemonic\":\"ld\",\"params\":[\"c\",\"h\"]},\"4d\":{\"mnemonic\":\"ld\",\"params\":[\"c\",\"l\"]},\"4e\":{\"mnemonic\":\"ld\",\"params\":[\"c\",\"(hl)\"]},\"4f\":{\"mnemonic\":\"ld\",\"params\":[\"c\",\"a\"]},\"5a\":{\"mnemonic\":\"ld\",\"params\":[\"e\",\"d\"]},\"5b\":{\"mnemonic\":\"ld\",\"params\":[\"e\",\"e\"]},\"5c\":{\"mnemonic\":\"ld\",\"params\":[\"e\",\"h\"]},\"5d\":{\"mnemonic\":\"ld\",\"params\":[\"e\",\"l\"]},\"5e\":{\"mnemonic\":\"ld\",\"params\":[\"e\",\"(hl)\"]},\"5f\":{\"mnemonic\":\"ld\",\"params\":[\"e\",\"a\"]},\"6a\":{\"mnemonic\":\"ld\",\"params\":[\"l\",\"d\"]},\"6b\":{\"mnemonic\":\"ld\",\"params\":[\"l\",\"e\"]},\"6c\":{\"mnemonic\":\"ld\",\"params\":[\"l\",\"h\"]},\"6d\":{\"mnemonic\":\"ld\",\"params\":[\"l\",\"l\"]},\"6e\":{\"mnemonic\":\"ld\",\"params\":[\"l\",\"(hl)\"]},\"6f\":{\"mnemonic\":\"ld\",\"params\":[\"l\",\"a\"]},\"7a\":{\"mnemonic\":\"ld\",\"params\":[\"a\",\"d\"]},\"7b\":{\"mnemonic\":\"ld\",\"params\":[\"a\",\"e\"]},\"7c\":{\"mnemonic\":\"ld\",\"params\":[\"a\",\"h\"]},\"7d\":{\"mnemonic\":\"ld\",\"params\":[\"a\",\"l\"]},\"7e\":{\"mnemonic\":\"ld\",\"params\":[\"a\",\"(hl)\"]},\"7f\":{\"mnemonic\":\"ld\",\"params\":[\"a\",\"a\"]},\"8a\":{\"mnemonic\":\"adc\",\"params\":[\"a\",\"d\"]},\"8b\":{\"mnemonic\":\"adc\",\"params\":[\"a\",\"e\"]},\"8c\":{\"mnemonic\":\"adc\",\"params\":[\"a\",\"h\"]},\"8d\":{\"mnemonic\":\"adc\",\"params\":[\"a\",\"l\"]},\"8e\":{\"mnemonic\":\"adc\",\"params\":[\"a\",\"(hl)\"]},\"8f\":{\"mnemonic\":\"adc\",\"params\":[\"a\",\"a\"]},\"9a\":{\"mnemonic\":\"sbc\",\"params\":[\"a\",\"d\"]},\"9b\":{\"mnemonic\":\"sbc\",\"params\":[\"a\",\"e\"]},\"9c\":{\"mnemonic\":\"sbc\",\"params\":[\"a\",\"h\"]},\"9d\":{\"mnemonic\":\"sbc\",\"params\":[\"a\",\"l\"]},\"9e\":{\"mnemonic\":\"sbc\",\"params\":[\"a\",\"(hl)\"]},\"9f\":{\"mnemonic\":\"sbc\",\"params\":[\"a\",\"a\"]},\"a0\":{\"mnemonic\":\"and\",\"params\":[\"a\",\"b\"]},\"a1\":{\"mnemonic\":\"and\",\"params\":[\"a\",\"c\"]},\"a2\":{\"mnemonic\":\"and\",\"params\":[\"a\",\"d\"]},\"a3\":{\"mnemonic\":\"and\",\"params\":[\"a\",\"e\"]},\"a4\":{\"mnemonic\":\"and\",\"params\":[\"a\",\"h\"]},\"a5\":{\"mnemonic\":\"and\",\"params\":[\"a\",\"l\"]},\"a6\":{\"mnemonic\":\"and\",\"params\":[\"a\",\"(hl)\"]},\"a7\":{\"mnemonic\":\"and\",\"params\":[\"a\",\"a\"]},\"a8\":{\"mnemonic\":\"xor\",\"params\":[\"a\",\"b\"]},\"a9\":{\"mnemonic\":\"xor\",\"params\":[\"a\",\"c\"]},\"aa\":{\"mnemonic\":\"xor\",\"params\":[\"a\",\"d\"]},\"ab\":{\"mnemonic\":\"xor\",\"params\":[\"a\",\"e\"]},\"ac\":{\"mnemonic\":\"xor\",\"params\":[\"a\",\"h\"]},\"ad\":{\"mnemonic\":\"xor\",\"params\":[\"a\",\"l\"]},\"ae\":{\"mnemonic\":\"xor\",\"params\":[\"a\",\"(hl)\"]},\"af\":{\"mnemonic\":\"xor\",\"params\":[\"a\",\"a\"]},\"b0\":{\"mnemonic\":\"or\",\"params\":[\"a\",\"b\"]},\"b1\":{\"mnemonic\":\"or\",\"params\":[\"a\",\"c\"]},\"b2\":{\"mnemonic\":\"or\",\"params\":[\"a\",\"d\"]},\"b3\":{\"mnemonic\":\"or\",\"params\":[\"a\",\"e\"]},\"b4\":{\"mnemonic\":\"or\",\"params\":[\"a\",\"h\"]},\"b5\":{\"mnemonic\":\"or\",\"params\":[\"a\",\"l\"]},\"b6\":{\"mnemonic\":\"or\",\"params\":[\"a\",\"(hl)\"]},\"b7\":{\"mnemonic\":\"or\",\"params\":[\"a\",\"a\"]},\"b8\":{\"mnemonic\":\"cp\",\"params\":[\"b\"]},\"b9\":{\"mnemonic\":\"cp\",\"params\":[\"c\"]},\"ba\":{\"mnemonic\":\"cp\",\"params\":[\"d\"]},\"bb\":{\"mnemonic\":\"cp\",\"params\":[\"e\"]},\"bc\":{\"mnemonic\":\"cp\",\"params\":[\"h\"]},\"bd\":{\"mnemonic\":\"cp\",\"params\":[\"l\"]},\"be\":{\"mnemonic\":\"cp\",\"params\":[\"(hl)\"]},\"bf\":{\"mnemonic\":\"cp\",\"params\":[\"a\"]},\"c0\":{\"mnemonic\":\"ret\",\"params\":[\"nz\"]},\"c1\":{\"mnemonic\":\"pop\",\"params\":[\"bc\"]},\"c2\":{\"mnemonic\":\"jp\",\"params\":[\"nz\",\"nnnn\"]},\"c3\":{\"mnemonic\":\"jp\",\"params\":[\"nnnn\"]},\"c4\":{\"mnemonic\":\"call\",\"params\":[\"nz\",\"nnnn\"]},\"c5\":{\"mnemonic\":\"push\",\"params\":[\"bc\"]},\"c6\":{\"mnemonic\":\"add\",\"params\":[\"a\",\"nn\"]},\"c7\":{\"mnemonic\":\"rst\",\"params\":[\"00\"]},\"c8\":{\"mnemonic\":\"ret\",\"params\":[\"z\"]},\"c9\":{\"mnemonic\":\"ret\"},\"ca\":{\"mnemonic\":\"jp\",\"params\":[\"z\",\"nnnn\"]},\"cb\":{\"shift\":{\"0\":{\"mnemonic\":\"rlc\",\"params\":[\"b\"]},\"1\":{\"mnemonic\":\"rlc\",\"params\":[\"c\"]},\"2\":{\"mnemonic\":\"rlc\",\"params\":[\"d\"]},\"3\":{\"mnemonic\":\"rlc\",\"params\":[\"e\"]},\"4\":{\"mnemonic\":\"rlc\",\"params\":[\"h\"]},\"5\":{\"mnemonic\":\"rlc\",\"params\":[\"l\"]},\"6\":{\"mnemonic\":\"rlc\",\"params\":[\"(hl)\"]},\"7\":{\"mnemonic\":\"rlc\",\"params\":[\"a\"]},\"8\":{\"mnemonic\":\"rrc\",\"params\":[\"b\"]},\"9\":{\"mnemonic\":\"rrc\",\"params\":[\"c\"]},\"10\":{\"mnemonic\":\"rl\",\"params\":[\"b\"]},\"11\":{\"mnemonic\":\"rl\",\"params\":[\"c\"]},\"12\":{\"mnemonic\":\"rl\",\"params\":[\"d\"]},\"13\":{\"mnemonic\":\"rl\",\"params\":[\"e\"]},\"14\":{\"mnemonic\":\"rl\",\"params\":[\"h\"]},\"15\":{\"mnemonic\":\"rl\",\"params\":[\"l\"]},\"16\":{\"mnemonic\":\"rl\",\"params\":[\"(hl)\"]},\"17\":{\"mnemonic\":\"rl\",\"params\":[\"a\"]},\"18\":{\"mnemonic\":\"rr\",\"params\":[\"b\"]},\"19\":{\"mnemonic\":\"rr\",\"params\":[\"c\"]},\"20\":{\"mnemonic\":\"sla\",\"params\":[\"b\"]},\"21\":{\"mnemonic\":\"sla\",\"params\":[\"c\"]},\"22\":{\"mnemonic\":\"sla\",\"params\":[\"d\"]},\"23\":{\"mnemonic\":\"sla\",\"params\":[\"e\"]},\"24\":{\"mnemonic\":\"sla\",\"params\":[\"h\"]},\"25\":{\"mnemonic\":\"sla\",\"params\":[\"l\"]},\"26\":{\"mnemonic\":\"sla\",\"params\":[\"(hl)\"]},\"27\":{\"mnemonic\":\"sla\",\"params\":[\"a\"]},\"28\":{\"mnemonic\":\"sra\",\"params\":[\"b\"]},\"29\":{\"mnemonic\":\"sra\",\"params\":[\"c\"]},\"30\":{\"mnemonic\":\"sll\",\"params\":[\"b\"]},\"31\":{\"mnemonic\":\"sll\",\"params\":[\"c\"]},\"32\":{\"mnemonic\":\"sll\",\"params\":[\"d\"]},\"33\":{\"mnemonic\":\"sll\",\"params\":[\"e\"]},\"34\":{\"mnemonic\":\"sll\",\"params\":[\"h\"]},\"35\":{\"mnemonic\":\"sll\",\"params\":[\"l\"]},\"36\":{\"mnemonic\":\"sll\",\"params\":[\"(hl)\"]},\"37\":{\"mnemonic\":\"sll\",\"params\":[\"a\"]},\"38\":{\"mnemonic\":\"srl\",\"params\":[\"b\"]},\"39\":{\"mnemonic\":\"srl\",\"params\":[\"c\"]},\"40\":{\"mnemonic\":\"bit\",\"params\":[\"0\",\"b\"]},\"41\":{\"mnemonic\":\"bit\",\"params\":[\"0\",\"c\"]},\"42\":{\"mnemonic\":\"bit\",\"params\":[\"0\",\"d\"]},\"43\":{\"mnemonic\":\"bit\",\"params\":[\"0\",\"e\"]},\"44\":{\"mnemonic\":\"bit\",\"params\":[\"0\",\"h\"]},\"45\":{\"mnemonic\":\"bit\",\"params\":[\"0\",\"l\"]},\"46\":{\"mnemonic\":\"bit\",\"params\":[\"0\",\"(hl)\"]},\"47\":{\"mnemonic\":\"bit\",\"params\":[\"0\",\"a\"]},\"48\":{\"mnemonic\":\"bit\",\"params\":[\"1\",\"b\"]},\"49\":{\"mnemonic\":\"bit\",\"params\":[\"1\",\"c\"]},\"50\":{\"mnemonic\":\"bit\",\"params\":[\"2\",\"b\"]},\"51\":{\"mnemonic\":\"bit\",\"params\":[\"2\",\"c\"]},\"52\":{\"mnemonic\":\"bit\",\"params\":[\"2\",\"d\"]},\"53\":{\"mnemonic\":\"bit\",\"params\":[\"2\",\"e\"]},\"54\":{\"mnemonic\":\"bit\",\"params\":[\"2\",\"h\"]},\"55\":{\"mnemonic\":\"bit\",\"params\":[\"2\",\"l\"]},\"56\":{\"mnemonic\":\"bit\",\"params\":[\"2\",\"(hl)\"]},\"57\":{\"mnemonic\":\"bit\",\"params\":[\"2\",\"a\"]},\"58\":{\"mnemonic\":\"bit\",\"params\":[\"3\",\"b\"]},\"59\":{\"mnemonic\":\"bit\",\"params\":[\"3\",\"c\"]},\"60\":{\"mnemonic\":\"bit\",\"params\":[\"4\",\"b\"]},\"61\":{\"mnemonic\":\"bit\",\"params\":[\"4\",\"c\"]},\"62\":{\"mnemonic\":\"bit\",\"params\":[\"4\",\"d\"]},\"63\":{\"mnemonic\":\"bit\",\"params\":[\"4\",\"e\"]},\"64\":{\"mnemonic\":\"bit\",\"params\":[\"4\",\"h\"]},\"65\":{\"mnemonic\":\"bit\",\"params\":[\"4\",\"l\"]},\"66\":{\"mnemonic\":\"bit\",\"params\":[\"4\",\"(hl)\"]},\"67\":{\"mnemonic\":\"bit\",\"params\":[\"4\",\"a\"]},\"68\":{\"mnemonic\":\"bit\",\"params\":[\"5\",\"b\"]},\"69\":{\"mnemonic\":\"bit\",\"params\":[\"5\",\"c\"]},\"70\":{\"mnemonic\":\"bit\",\"params\":[\"6\",\"b\"]},\"71\":{\"mnemonic\":\"bit\",\"params\":[\"6\",\"c\"]},\"72\":{\"mnemonic\":\"bit\",\"params\":[\"6\",\"d\"]},\"73\":{\"mnemonic\":\"bit\",\"params\":[\"6\",\"e\"]},\"74\":{\"mnemonic\":\"bit\",\"params\":[\"6\",\"h\"]},\"75\":{\"mnemonic\":\"bit\",\"params\":[\"6\",\"l\"]},\"76\":{\"mnemonic\":\"bit\",\"params\":[\"6\",\"(hl)\"]},\"77\":{\"mnemonic\":\"bit\",\"params\":[\"6\",\"a\"]},\"78\":{\"mnemonic\":\"bit\",\"params\":[\"7\",\"b\"]},\"79\":{\"mnemonic\":\"bit\",\"params\":[\"7\",\"c\"]},\"80\":{\"mnemonic\":\"res\",\"params\":[\"0\",\"b\"]},\"81\":{\"mnemonic\":\"res\",\"params\":[\"0\",\"c\"]},\"82\":{\"mnemonic\":\"res\",\"params\":[\"0\",\"d\"]},\"83\":{\"mnemonic\":\"res\",\"params\":[\"0\",\"e\"]},\"84\":{\"mnemonic\":\"res\",\"params\":[\"0\",\"h\"]},\"85\":{\"mnemonic\":\"res\",\"params\":[\"0\",\"l\"]},\"86\":{\"mnemonic\":\"res\",\"params\":[\"0\",\"(hl)\"]},\"87\":{\"mnemonic\":\"res\",\"params\":[\"0\",\"a\"]},\"88\":{\"mnemonic\":\"res\",\"params\":[\"1\",\"b\"]},\"89\":{\"mnemonic\":\"res\",\"params\":[\"1\",\"c\"]},\"90\":{\"mnemonic\":\"res\",\"params\":[\"2\",\"b\"]},\"91\":{\"mnemonic\":\"res\",\"params\":[\"2\",\"c\"]},\"92\":{\"mnemonic\":\"res\",\"params\":[\"2\",\"d\"]},\"93\":{\"mnemonic\":\"res\",\"params\":[\"2\",\"e\"]},\"94\":{\"mnemonic\":\"res\",\"params\":[\"2\",\"h\"]},\"95\":{\"mnemonic\":\"res\",\"params\":[\"2\",\"l\"]},\"96\":{\"mnemonic\":\"res\",\"params\":[\"2\",\"(hl)\"]},\"97\":{\"mnemonic\":\"res\",\"params\":[\"2\",\"a\"]},\"98\":{\"mnemonic\":\"res\",\"params\":[\"3\",\"b\"]},\"99\":{\"mnemonic\":\"res\",\"params\":[\"3\",\"c\"]},\"a\":{\"mnemonic\":\"rrc\",\"params\":[\"d\"]},\"b\":{\"mnemonic\":\"rrc\",\"params\":[\"e\"]},\"c\":{\"mnemonic\":\"rrc\",\"params\":[\"h\"]},\"d\":{\"mnemonic\":\"rrc\",\"params\":[\"l\"]},\"e\":{\"mnemonic\":\"rrc\",\"params\":[\"(hl)\"]},\"f\":{\"mnemonic\":\"rrc\",\"params\":[\"a\"]},\"1a\":{\"mnemonic\":\"rr\",\"params\":[\"d\"]},\"1b\":{\"mnemonic\":\"rr\",\"params\":[\"e\"]},\"1c\":{\"mnemonic\":\"rr\",\"params\":[\"h\"]},\"1d\":{\"mnemonic\":\"rr\",\"params\":[\"l\"]},\"1e\":{\"mnemonic\":\"rr\",\"params\":[\"(hl)\"]},\"1f\":{\"mnemonic\":\"rr\",\"params\":[\"a\"]},\"2a\":{\"mnemonic\":\"sra\",\"params\":[\"d\"]},\"2b\":{\"mnemonic\":\"sra\",\"params\":[\"e\"]},\"2c\":{\"mnemonic\":\"sra\",\"params\":[\"h\"]},\"2d\":{\"mnemonic\":\"sra\",\"params\":[\"l\"]},\"2e\":{\"mnemonic\":\"sra\",\"params\":[\"(hl)\"]},\"2f\":{\"mnemonic\":\"sra\",\"params\":[\"a\"]},\"3a\":{\"mnemonic\":\"srl\",\"params\":[\"d\"]},\"3b\":{\"mnemonic\":\"srl\",\"params\":[\"e\"]},\"3c\":{\"mnemonic\":\"srl\",\"params\":[\"h\"]},\"3d\":{\"mnemonic\":\"srl\",\"params\":[\"l\"]},\"3e\":{\"mnemonic\":\"srl\",\"params\":[\"(hl)\"]},\"3f\":{\"mnemonic\":\"srl\",\"params\":[\"a\"]},\"4a\":{\"mnemonic\":\"bit\",\"params\":[\"1\",\"d\"]},\"4b\":{\"mnemonic\":\"bit\",\"params\":[\"1\",\"e\"]},\"4c\":{\"mnemonic\":\"bit\",\"params\":[\"1\",\"h\"]},\"4d\":{\"mnemonic\":\"bit\",\"params\":[\"1\",\"l\"]},\"4e\":{\"mnemonic\":\"bit\",\"params\":[\"1\",\"(hl)\"]},\"4f\":{\"mnemonic\":\"bit\",\"params\":[\"1\",\"a\"]},\"5a\":{\"mnemonic\":\"bit\",\"params\":[\"3\",\"d\"]},\"5b\":{\"mnemonic\":\"bit\",\"params\":[\"3\",\"e\"]},\"5c\":{\"mnemonic\":\"bit\",\"params\":[\"3\",\"h\"]},\"5d\":{\"mnemonic\":\"bit\",\"params\":[\"3\",\"l\"]},\"5e\":{\"mnemonic\":\"bit\",\"params\":[\"3\",\"(hl)\"]},\"5f\":{\"mnemonic\":\"bit\",\"params\":[\"3\",\"a\"]},\"6a\":{\"mnemonic\":\"bit\",\"params\":[\"5\",\"d\"]},\"6b\":{\"mnemonic\":\"bit\",\"params\":[\"5\",\"e\"]},\"6c\":{\"mnemonic\":\"bit\",\"params\":[\"5\",\"h\"]},\"6d\":{\"mnemonic\":\"bit\",\"params\":[\"5\",\"l\"]},\"6e\":{\"mnemonic\":\"bit\",\"params\":[\"5\",\"(hl)\"]},\"6f\":{\"mnemonic\":\"bit\",\"params\":[\"5\",\"a\"]},\"7a\":{\"mnemonic\":\"bit\",\"params\":[\"7\",\"d\"]},\"7b\":{\"mnemonic\":\"bit\",\"params\":[\"7\",\"e\"]},\"7c\":{\"mnemonic\":\"bit\",\"params\":[\"7\",\"h\"]},\"7d\":{\"mnemonic\":\"bit\",\"params\":[\"7\",\"l\"]},\"7e\":{\"mnemonic\":\"bit\",\"params\":[\"7\",\"(hl)\"]},\"7f\":{\"mnemonic\":\"bit\",\"params\":[\"7\",\"a\"]},\"8a\":{\"mnemonic\":\"res\",\"params\":[\"1\",\"d\"]},\"8b\":{\"mnemonic\":\"res\",\"params\":[\"1\",\"e\"]},\"8c\":{\"mnemonic\":\"res\",\"params\":[\"1\",\"h\"]},\"8d\":{\"mnemonic\":\"res\",\"params\":[\"1\",\"l\"]},\"8e\":{\"mnemonic\":\"res\",\"params\":[\"1\",\"(hl)\"]},\"8f\":{\"mnemonic\":\"res\",\"params\":[\"1\",\"a\"]},\"9a\":{\"mnemonic\":\"res\",\"params\":[\"3\",\"d\"]},\"9b\":{\"mnemonic\":\"res\",\"params\":[\"3\",\"e\"]},\"9c\":{\"mnemonic\":\"res\",\"params\":[\"3\",\"h\"]},\"9d\":{\"mnemonic\":\"res\",\"params\":[\"3\",\"l\"]},\"9e\":{\"mnemonic\":\"res\",\"params\":[\"3\",\"(hl)\"]},\"9f\":{\"mnemonic\":\"res\",\"params\":[\"3\",\"a\"]},\"a0\":{\"mnemonic\":\"res\",\"params\":[\"4\",\"b\"]},\"a1\":{\"mnemonic\":\"res\",\"params\":[\"4\",\"c\"]},\"a2\":{\"mnemonic\":\"res\",\"params\":[\"4\",\"d\"]},\"a3\":{\"mnemonic\":\"res\",\"params\":[\"4\",\"e\"]},\"a4\":{\"mnemonic\":\"res\",\"params\":[\"4\",\"h\"]},\"a5\":{\"mnemonic\":\"res\",\"params\":[\"4\",\"l\"]},\"a6\":{\"mnemonic\":\"res\",\"params\":[\"4\",\"(hl)\"]},\"a7\":{\"mnemonic\":\"res\",\"params\":[\"4\",\"a\"]},\"a8\":{\"mnemonic\":\"res\",\"params\":[\"5\",\"b\"]},\"a9\":{\"mnemonic\":\"res\",\"params\":[\"5\",\"c\"]},\"aa\":{\"mnemonic\":\"res\",\"params\":[\"5\",\"d\"]},\"ab\":{\"mnemonic\":\"res\",\"params\":[\"5\",\"e\"]},\"ac\":{\"mnemonic\":\"res\",\"params\":[\"5\",\"h\"]},\"ad\":{\"mnemonic\":\"res\",\"params\":[\"5\",\"l\"]},\"ae\":{\"mnemonic\":\"res\",\"params\":[\"5\",\"(hl)\"]},\"af\":{\"mnemonic\":\"res\",\"params\":[\"5\",\"a\"]},\"b0\":{\"mnemonic\":\"res\",\"params\":[\"6\",\"b\"]},\"b1\":{\"mnemonic\":\"res\",\"params\":[\"6\",\"c\"]},\"b2\":{\"mnemonic\":\"res\",\"params\":[\"6\",\"d\"]},\"b3\":{\"mnemonic\":\"res\",\"params\":[\"6\",\"e\"]},\"b4\":{\"mnemonic\":\"res\",\"params\":[\"6\",\"h\"]},\"b5\":{\"mnemonic\":\"res\",\"params\":[\"6\",\"l\"]},\"b6\":{\"mnemonic\":\"res\",\"params\":[\"6\",\"(hl)\"]},\"b7\":{\"mnemonic\":\"res\",\"params\":[\"6\",\"a\"]},\"b8\":{\"mnemonic\":\"res\",\"params\":[\"7\",\"b\"]},\"b9\":{\"mnemonic\":\"res\",\"params\":[\"7\",\"c\"]},\"ba\":{\"mnemonic\":\"res\",\"params\":[\"7\",\"d\"]},\"bb\":{\"mnemonic\":\"res\",\"params\":[\"7\",\"e\"]},\"bc\":{\"mnemonic\":\"res\",\"params\":[\"7\",\"h\"]},\"bd\":{\"mnemonic\":\"res\",\"params\":[\"7\",\"l\"]},\"be\":{\"mnemonic\":\"res\",\"params\":[\"7\",\"(hl)\"]},\"bf\":{\"mnemonic\":\"res\",\"params\":[\"7\",\"a\"]},\"c0\":{\"mnemonic\":\"set\",\"params\":[\"0\",\"b\"]},\"c1\":{\"mnemonic\":\"set\",\"params\":[\"0\",\"c\"]},\"c2\":{\"mnemonic\":\"set\",\"params\":[\"0\",\"d\"]},\"c3\":{\"mnemonic\":\"set\",\"params\":[\"0\",\"e\"]},\"c4\":{\"mnemonic\":\"set\",\"params\":[\"0\",\"h\"]},\"c5\":{\"mnemonic\":\"set\",\"params\":[\"0\",\"l\"]},\"c6\":{\"mnemonic\":\"set\",\"params\":[\"0\",\"(hl)\"]},\"c7\":{\"mnemonic\":\"set\",\"params\":[\"0\",\"a\"]},\"c8\":{\"mnemonic\":\"set\",\"params\":[\"1\",\"b\"]},\"c9\":{\"mnemonic\":\"set\",\"params\":[\"1\",\"c\"]},\"ca\":{\"mnemonic\":\"set\",\"params\":[\"1\",\"d\"]},\"cb\":{\"mnemonic\":\"set\",\"params\":[\"1\",\"e\"]},\"cc\":{\"mnemonic\":\"set\",\"params\":[\"1\",\"h\"]},\"cd\":{\"mnemonic\":\"set\",\"params\":[\"1\",\"l\"]},\"ce\":{\"mnemonic\":\"set\",\"params\":[\"1\",\"(hl)\"]},\"cf\":{\"mnemonic\":\"set\",\"params\":[\"1\",\"a\"]},\"d0\":{\"mnemonic\":\"set\",\"params\":[\"2\",\"b\"]},\"d1\":{\"mnemonic\":\"set\",\"params\":[\"2\",\"c\"]},\"d2\":{\"mnemonic\":\"set\",\"params\":[\"2\",\"d\"]},\"d3\":{\"mnemonic\":\"set\",\"params\":[\"2\",\"e\"]},\"d4\":{\"mnemonic\":\"set\",\"params\":[\"2\",\"h\"]},\"d5\":{\"mnemonic\":\"set\",\"params\":[\"2\",\"l\"]},\"d6\":{\"mnemonic\":\"set\",\"params\":[\"2\",\"(hl)\"]},\"d7\":{\"mnemonic\":\"set\",\"params\":[\"2\",\"a\"]},\"d8\":{\"mnemonic\":\"set\",\"params\":[\"3\",\"b\"]},\"d9\":{\"mnemonic\":\"set\",\"params\":[\"3\",\"c\"]},\"da\":{\"mnemonic\":\"set\",\"params\":[\"3\",\"d\"]},\"db\":{\"mnemonic\":\"set\",\"params\":[\"3\",\"e\"]},\"dc\":{\"mnemonic\":\"set\",\"params\":[\"3\",\"h\"]},\"dd\":{\"mnemonic\":\"set\",\"params\":[\"3\",\"l\"]},\"de\":{\"mnemonic\":\"set\",\"params\":[\"3\",\"(hl)\"]},\"df\":{\"mnemonic\":\"set\",\"params\":[\"3\",\"a\"]},\"e0\":{\"mnemonic\":\"set\",\"params\":[\"4\",\"b\"]},\"e1\":{\"mnemonic\":\"set\",\"params\":[\"4\",\"c\"]},\"e2\":{\"mnemonic\":\"set\",\"params\":[\"4\",\"d\"]},\"e3\":{\"mnemonic\":\"set\",\"params\":[\"4\",\"e\"]},\"e4\":{\"mnemonic\":\"set\",\"params\":[\"4\",\"h\"]},\"e5\":{\"mnemonic\":\"set\",\"params\":[\"4\",\"l\"]},\"e6\":{\"mnemonic\":\"set\",\"params\":[\"4\",\"(hl)\"]},\"e7\":{\"mnemonic\":\"set\",\"params\":[\"4\",\"a\"]},\"e8\":{\"mnemonic\":\"set\",\"params\":[\"5\",\"b\"]},\"e9\":{\"mnemonic\":\"set\",\"params\":[\"5\",\"c\"]},\"ea\":{\"mnemonic\":\"set\",\"params\":[\"5\",\"d\"]},\"eb\":{\"mnemonic\":\"set\",\"params\":[\"5\",\"e\"]},\"ec\":{\"mnemonic\":\"set\",\"params\":[\"5\",\"h\"]},\"ed\":{\"mnemonic\":\"set\",\"params\":[\"5\",\"l\"]},\"ee\":{\"mnemonic\":\"set\",\"params\":[\"5\",\"(hl)\"]},\"ef\":{\"mnemonic\":\"set\",\"params\":[\"5\",\"a\"]},\"f0\":{\"mnemonic\":\"set\",\"params\":[\"6\",\"b\"]},\"f1\":{\"mnemonic\":\"set\",\"params\":[\"6\",\"c\"]},\"f2\":{\"mnemonic\":\"set\",\"params\":[\"6\",\"d\"]},\"f3\":{\"mnemonic\":\"set\",\"params\":[\"6\",\"e\"]},\"f4\":{\"mnemonic\":\"set\",\"params\":[\"6\",\"h\"]},\"f5\":{\"mnemonic\":\"set\",\"params\":[\"6\",\"l\"]},\"f6\":{\"mnemonic\":\"set\",\"params\":[\"6\",\"(hl)\"]},\"f7\":{\"mnemonic\":\"set\",\"params\":[\"6\",\"a\"]},\"f8\":{\"mnemonic\":\"set\",\"params\":[\"7\",\"b\"]},\"f9\":{\"mnemonic\":\"set\",\"params\":[\"7\",\"c\"]},\"fa\":{\"mnemonic\":\"set\",\"params\":[\"7\",\"d\"]},\"fb\":{\"mnemonic\":\"set\",\"params\":[\"7\",\"e\"]},\"fc\":{\"mnemonic\":\"set\",\"params\":[\"7\",\"h\"]},\"fd\":{\"mnemonic\":\"set\",\"params\":[\"7\",\"l\"]},\"fe\":{\"mnemonic\":\"set\",\"params\":[\"7\",\"(hl)\"]},\"ff\":{\"mnemonic\":\"set\",\"params\":[\"7\",\"a\"]}}},\"cc\":{\"mnemonic\":\"call\",\"params\":[\"z\",\"nnnn\"]},\"cd\":{\"mnemonic\":\"call\",\"params\":[\"nnnn\"]},\"ce\":{\"mnemonic\":\"adc\",\"params\":[\"a\",\"nn\"]},\"cf\":{\"mnemonic\":\"rst\",\"params\":[\"8\"]},\"d0\":{\"mnemonic\":\"ret\",\"params\":[\"nc\"]},\"d1\":{\"mnemonic\":\"pop\",\"params\":[\"de\"]},\"d2\":{\"mnemonic\":\"jp\",\"params\":[\"nc\",\"nnnn\"]},\"d3\":{\"mnemonic\":\"out\",\"params\":[\"(nn)\",\"a\"]},\"d4\":{\"mnemonic\":\"call\",\"params\":[\"nc\",\"nnnn\"]},\"d5\":{\"mnemonic\":\"push\",\"params\":[\"de\"]},\"d6\":{\"mnemonic\":\"sub\",\"params\":[\"a\",\"nn\"]},\"d7\":{\"mnemonic\":\"rst\",\"params\":[\"10\"]},\"d8\":{\"mnemonic\":\"ret\",\"params\":[\"c\"]},\"d9\":{\"mnemonic\":\"exx\"},\"da\":{\"mnemonic\":\"jp\",\"params\":[\"c\",\"nnnn\"]},\"db\":{\"mnemonic\":\"in\",\"params\":[\"a\",\"(nn)\"]},\"dc\":{\"mnemonic\":\"call\",\"params\":[\"c\",\"nnnn\"]},\"dd\":{\"shift\":{\"9\":{\"mnemonic\":\"add\",\"params\":[\"ix\",\"bc\"]},\"19\":{\"mnemonic\":\"add\",\"params\":[\"ix\",\"de\"]},\"21\":{\"mnemonic\":\"ld\",\"params\":[\"ix\",\"nnnn\"]},\"22\":{\"mnemonic\":\"ld\",\"params\":[\"(nnnn)\",\"ix\"]},\"23\":{\"mnemonic\":\"inc\",\"params\":[\"ix\"]},\"24\":{\"mnemonic\":\"inc\",\"params\":[\"ixh\"]},\"25\":{\"mnemonic\":\"dec\",\"params\":[\"ixh\"]},\"26\":{\"mnemonic\":\"ld\",\"params\":[\"ixh\",\"nn\"]},\"29\":{\"mnemonic\":\"add\",\"params\":[\"ix\",\"ix\"]},\"34\":{\"mnemonic\":\"inc\",\"params\":[\"(ix+dd)\"]},\"35\":{\"mnemonic\":\"dec\",\"params\":[\"(ix+dd)\"]},\"36\":{\"mnemonic\":\"ld\",\"params\":[\"(ix+dd)\",\"nn\"]},\"39\":{\"mnemonic\":\"add\",\"params\":[\"ix\",\"sp\"]},\"44\":{\"mnemonic\":\"ld\",\"params\":[\"b\",\"ixh\"]},\"45\":{\"mnemonic\":\"ld\",\"params\":[\"b\",\"ixl\"]},\"46\":{\"mnemonic\":\"ld\",\"params\":[\"b\",\"(ix+dd)\"]},\"54\":{\"mnemonic\":\"ld\",\"params\":[\"d\",\"ixh\"]},\"55\":{\"mnemonic\":\"ld\",\"params\":[\"d\",\"ixl\"]},\"56\":{\"mnemonic\":\"ld\",\"params\":[\"d\",\"(ix+dd)\"]},\"60\":{\"mnemonic\":\"ld\",\"params\":[\"ixh\",\"b\"]},\"61\":{\"mnemonic\":\"ld\",\"params\":[\"ixh\",\"c\"]},\"62\":{\"mnemonic\":\"ld\",\"params\":[\"ixh\",\"d\"]},\"63\":{\"mnemonic\":\"ld\",\"params\":[\"ixh\",\"e\"]},\"64\":{\"mnemonic\":\"ld\",\"params\":[\"ixh\",\"ixh\"]},\"65\":{\"mnemonic\":\"ld\",\"params\":[\"ixh\",\"ixl\"]},\"66\":{\"mnemonic\":\"ld\",\"params\":[\"h\",\"(ix+dd)\"]},\"67\":{\"mnemonic\":\"ld\",\"params\":[\"ixh\",\"a\"]},\"68\":{\"mnemonic\":\"ld\",\"params\":[\"ixl\",\"b\"]},\"69\":{\"mnemonic\":\"ld\",\"params\":[\"ixl\",\"c\"]},\"70\":{\"mnemonic\":\"ld\",\"params\":[\"(ix+dd)\",\"b\"]},\"71\":{\"mnemonic\":\"ld\",\"params\":[\"(ix+dd)\",\"c\"]},\"72\":{\"mnemonic\":\"ld\",\"params\":[\"(ix+dd)\",\"d\"]},\"73\":{\"mnemonic\":\"ld\",\"params\":[\"(ix+dd)\",\"e\"]},\"74\":{\"mnemonic\":\"ld\",\"params\":[\"(ix+dd)\",\"h\"]},\"75\":{\"mnemonic\":\"ld\",\"params\":[\"(ix+dd)\",\"l\"]},\"77\":{\"mnemonic\":\"ld\",\"params\":[\"(ix+dd)\",\"a\"]},\"84\":{\"mnemonic\":\"add\",\"params\":[\"a\",\"ixh\"]},\"85\":{\"mnemonic\":\"add\",\"params\":[\"a\",\"ixl\"]},\"86\":{\"mnemonic\":\"add\",\"params\":[\"a\",\"(ix+dd)\"]},\"94\":{\"mnemonic\":\"sub\",\"params\":[\"a\",\"ixh\"]},\"95\":{\"mnemonic\":\"sub\",\"params\":[\"a\",\"ixl\"]},\"96\":{\"mnemonic\":\"sub\",\"params\":[\"a\",\"(ix+dd)\"]},\"2a\":{\"mnemonic\":\"ld\",\"params\":[\"ix\",\"(nnnn)\"]},\"2b\":{\"mnemonic\":\"dec\",\"params\":[\"ix\"]},\"2c\":{\"mnemonic\":\"inc\",\"params\":[\"ixl\"]},\"2d\":{\"mnemonic\":\"dec\",\"params\":[\"ixl\"]},\"2e\":{\"mnemonic\":\"ld\",\"params\":[\"ixl\",\"nn\"]},\"4c\":{\"mnemonic\":\"ld\",\"params\":[\"c\",\"ixh\"]},\"4d\":{\"mnemonic\":\"ld\",\"params\":[\"c\",\"ixl\"]},\"4e\":{\"mnemonic\":\"ld\",\"params\":[\"c\",\"(ix+dd)\"]},\"5c\":{\"mnemonic\":\"ld\",\"params\":[\"e\",\"ixh\"]},\"5d\":{\"mnemonic\":\"ld\",\"params\":[\"e\",\"ixl\"]},\"5e\":{\"mnemonic\":\"ld\",\"params\":[\"e\",\"(ix+dd)\"]},\"6a\":{\"mnemonic\":\"ld\",\"params\":[\"ixl\",\"d\"]},\"6b\":{\"mnemonic\":\"ld\",\"params\":[\"ixl\",\"e\"]},\"6c\":{\"mnemonic\":\"ld\",\"params\":[\"ixl\",\"ixh\"]},\"6d\":{\"mnemonic\":\"ld\",\"params\":[\"ixl\",\"ixl\"]},\"6e\":{\"mnemonic\":\"ld\",\"params\":[\"l\",\"(ix+dd)\"]},\"6f\":{\"mnemonic\":\"ld\",\"params\":[\"ixl\",\"a\"]},\"7c\":{\"mnemonic\":\"ld\",\"params\":[\"a\",\"ixh\"]},\"7d\":{\"mnemonic\":\"ld\",\"params\":[\"a\",\"ixl\"]},\"7e\":{\"mnemonic\":\"ld\",\"params\":[\"a\",\"(ix+dd)\"]},\"8c\":{\"mnemonic\":\"adc\",\"params\":[\"a\",\"ixh\"]},\"8d\":{\"mnemonic\":\"adc\",\"params\":[\"a\",\"ixl\"]},\"8e\":{\"mnemonic\":\"adc\",\"params\":[\"a\",\"(ix+dd)\"]},\"9c\":{\"mnemonic\":\"sbc\",\"params\":[\"a\",\"ixh\"]},\"9d\":{\"mnemonic\":\"sbc\",\"params\":[\"a\",\"ixl\"]},\"9e\":{\"mnemonic\":\"sbc\",\"params\":[\"a\",\"(ix+dd)\"]},\"a4\":{\"mnemonic\":\"and\",\"params\":[\"a\",\"ixh\"]},\"a5\":{\"mnemonic\":\"and\",\"params\":[\"a\",\"ixl\"]},\"a6\":{\"mnemonic\":\"and\",\"params\":[\"a\",\"(ix+dd)\"]},\"ac\":{\"mnemonic\":\"xor\",\"params\":[\"a\",\"ixh\"]},\"ad\":{\"mnemonic\":\"xor\",\"params\":[\"a\",\"ixl\"]},\"ae\":{\"mnemonic\":\"xor\",\"params\":[\"a\",\"(ix+dd)\"]},\"b4\":{\"mnemonic\":\"or\",\"params\":[\"a\",\"ixh\"]},\"b5\":{\"mnemonic\":\"or\",\"params\":[\"a\",\"ixl\"]},\"b6\":{\"mnemonic\":\"or\",\"params\":[\"a\",\"(ix+dd)\"]},\"bc\":{\"mnemonic\":\"cp\",\"params\":[\"ixh\"]},\"bd\":{\"mnemonic\":\"cp\",\"params\":[\"ixl\"]},\"be\":{\"mnemonic\":\"cp\",\"params\":[\"(ix+dd)\"]},\"cb\":{\"shift\":{\"0\":{\"mnemonic\":\"ld\",\"params\":[\"b\",\"rlc\"],\"extra\":[\"(ix+dd)\"]},\"1\":{\"mnemonic\":\"ld\",\"params\":[\"c\",\"rlc\"],\"extra\":[\"(ix+dd)\"]},\"2\":{\"mnemonic\":\"ld\",\"params\":[\"d\",\"rlc\"],\"extra\":[\"(ix+dd)\"]},\"3\":{\"mnemonic\":\"ld\",\"params\":[\"e\",\"rlc\"],\"extra\":[\"(ix+dd)\"]},\"4\":{\"mnemonic\":\"ld\",\"params\":[\"h\",\"rlc\"],\"extra\":[\"(ix+dd)\"]},\"5\":{\"mnemonic\":\"ld\",\"params\":[\"l\",\"rlc\"],\"extra\":[\"(ix+dd)\"]},\"6\":{\"mnemonic\":\"rlc\",\"params\":[\"(ix+dd)\"]},\"7\":{\"mnemonic\":\"ld\",\"params\":[\"a\",\"rlc\"],\"extra\":[\"(ix+dd)\"]},\"8\":{\"mnemonic\":\"ld\",\"params\":[\"b\",\"rrc\"],\"extra\":[\"(ix+dd)\"]},\"9\":{\"mnemonic\":\"ld\",\"params\":[\"c\",\"rrc\"],\"extra\":[\"(ix+dd)\"]},\"10\":{\"mnemonic\":\"ld\",\"params\":[\"b\",\"rl\"],\"extra\":[\"(ix+dd)\"]},\"11\":{\"mnemonic\":\"ld\",\"params\":[\"c\",\"rl\"],\"extra\":[\"(ix+dd)\"]},\"12\":{\"mnemonic\":\"ld\",\"params\":[\"d\",\"rl\"],\"extra\":[\"(ix+dd)\"]},\"13\":{\"mnemonic\":\"ld\",\"params\":[\"e\",\"rl\"],\"extra\":[\"(ix+dd)\"]},\"14\":{\"mnemonic\":\"ld\",\"params\":[\"h\",\"rl\"],\"extra\":[\"(ix+dd)\"]},\"15\":{\"mnemonic\":\"ld\",\"params\":[\"l\",\"rl\"],\"extra\":[\"(ix+dd)\"]},\"16\":{\"mnemonic\":\"rl\",\"params\":[\"(ix+dd)\"]},\"17\":{\"mnemonic\":\"ld\",\"params\":[\"a\",\"rl\"],\"extra\":[\"(ix+dd)\"]},\"18\":{\"mnemonic\":\"ld\",\"params\":[\"b\",\"rr\"],\"extra\":[\"(ix+dd)\"]},\"19\":{\"mnemonic\":\"ld\",\"params\":[\"c\",\"rr\"],\"extra\":[\"(ix+dd)\"]},\"20\":{\"mnemonic\":\"ld\",\"params\":[\"b\",\"sla\"],\"extra\":[\"(ix+dd)\"]},\"21\":{\"mnemonic\":\"ld\",\"params\":[\"c\",\"sla\"],\"extra\":[\"(ix+dd)\"]},\"22\":{\"mnemonic\":\"ld\",\"params\":[\"d\",\"sla\"],\"extra\":[\"(ix+dd)\"]},\"23\":{\"mnemonic\":\"ld\",\"params\":[\"e\",\"sla\"],\"extra\":[\"(ix+dd)\"]},\"24\":{\"mnemonic\":\"ld\",\"params\":[\"h\",\"sla\"],\"extra\":[\"(ix+dd)\"]},\"25\":{\"mnemonic\":\"ld\",\"params\":[\"l\",\"sla\"],\"extra\":[\"(ix+dd)\"]},\"26\":{\"mnemonic\":\"sla\",\"params\":[\"(ix+dd)\"]},\"27\":{\"mnemonic\":\"ld\",\"params\":[\"a\",\"sla\"],\"extra\":[\"(ix+dd)\"]},\"28\":{\"mnemonic\":\"ld\",\"params\":[\"b\",\"sra\"],\"extra\":[\"(ix+dd)\"]},\"29\":{\"mnemonic\":\"ld\",\"params\":[\"c\",\"sra\"],\"extra\":[\"(ix+dd)\"]},\"30\":{\"mnemonic\":\"ld\",\"params\":[\"b\",\"sll\"],\"extra\":[\"(ix+dd)\"]},\"31\":{\"mnemonic\":\"ld\",\"params\":[\"c\",\"sll\"],\"extra\":[\"(ix+dd)\"]},\"32\":{\"mnemonic\":\"ld\",\"params\":[\"d\",\"sll\"],\"extra\":[\"(ix+dd)\"]},\"33\":{\"mnemonic\":\"ld\",\"params\":[\"e\",\"sll\"],\"extra\":[\"(ix+dd)\"]},\"34\":{\"mnemonic\":\"ld\",\"params\":[\"h\",\"sll\"],\"extra\":[\"(ix+dd)\"]},\"35\":{\"mnemonic\":\"ld\",\"params\":[\"l\",\"sll\"],\"extra\":[\"(ix+dd)\"]},\"36\":{\"mnemonic\":\"sll\",\"params\":[\"(ix+dd)\"]},\"37\":{\"mnemonic\":\"ld\",\"params\":[\"a\",\"sll\"],\"extra\":[\"(ix+dd)\"]},\"38\":{\"mnemonic\":\"ld\",\"params\":[\"b\",\"srl\"],\"extra\":[\"(ix+dd)\"]},\"39\":{\"mnemonic\":\"ld\",\"params\":[\"c\",\"srl\"],\"extra\":[\"(ix+dd)\"]},\"40\":{\"mnemonic\":\"bit\",\"params\":[\"0\",\"(ix+dd)\"]},\"41\":{\"mnemonic\":\"bit\",\"params\":[\"0\",\"(ix+dd)\"]},\"42\":{\"mnemonic\":\"bit\",\"params\":[\"0\",\"(ix+dd)\"]},\"43\":{\"mnemonic\":\"bit\",\"params\":[\"0\",\"(ix+dd)\"]},\"44\":{\"mnemonic\":\"bit\",\"params\":[\"0\",\"(ix+dd)\"]},\"45\":{\"mnemonic\":\"bit\",\"params\":[\"0\",\"(ix+dd)\"]},\"46\":{\"mnemonic\":\"bit\",\"params\":[\"0\",\"(ix+dd)\"]},\"47\":{\"mnemonic\":\"bit\",\"params\":[\"0\",\"(ix+dd)\"]},\"48\":{\"mnemonic\":\"bit\",\"params\":[\"1\",\"(ix+dd)\"]},\"49\":{\"mnemonic\":\"bit\",\"params\":[\"1\",\"(ix+dd)\"]},\"50\":{\"mnemonic\":\"bit\",\"params\":[\"2\",\"(ix+dd)\"]},\"51\":{\"mnemonic\":\"bit\",\"params\":[\"2\",\"(ix+dd)\"]},\"52\":{\"mnemonic\":\"bit\",\"params\":[\"2\",\"(ix+dd)\"]},\"53\":{\"mnemonic\":\"bit\",\"params\":[\"2\",\"(ix+dd)\"]},\"54\":{\"mnemonic\":\"bit\",\"params\":[\"2\",\"(ix+dd)\"]},\"55\":{\"mnemonic\":\"bit\",\"params\":[\"2\",\"(ix+dd)\"]},\"56\":{\"mnemonic\":\"bit\",\"params\":[\"2\",\"(ix+dd)\"]},\"57\":{\"mnemonic\":\"bit\",\"params\":[\"2\",\"(ix+dd)\"]},\"58\":{\"mnemonic\":\"bit\",\"params\":[\"3\",\"(ix+dd)\"]},\"59\":{\"mnemonic\":\"bit\",\"params\":[\"3\",\"(ix+dd)\"]},\"60\":{\"mnemonic\":\"bit\",\"params\":[\"4\",\"(ix+dd)\"]},\"61\":{\"mnemonic\":\"bit\",\"params\":[\"4\",\"(ix+dd)\"]},\"62\":{\"mnemonic\":\"bit\",\"params\":[\"4\",\"(ix+dd)\"]},\"63\":{\"mnemonic\":\"bit\",\"params\":[\"4\",\"(ix+dd)\"]},\"64\":{\"mnemonic\":\"bit\",\"params\":[\"4\",\"(ix+dd)\"]},\"65\":{\"mnemonic\":\"bit\",\"params\":[\"4\",\"(ix+dd)\"]},\"66\":{\"mnemonic\":\"bit\",\"params\":[\"4\",\"(ix+dd)\"]},\"67\":{\"mnemonic\":\"bit\",\"params\":[\"4\",\"(ix+dd)\"]},\"68\":{\"mnemonic\":\"bit\",\"params\":[\"5\",\"(ix+dd)\"]},\"69\":{\"mnemonic\":\"bit\",\"params\":[\"5\",\"(ix+dd)\"]},\"70\":{\"mnemonic\":\"bit\",\"params\":[\"6\",\"(ix+dd)\"]},\"71\":{\"mnemonic\":\"bit\",\"params\":[\"6\",\"(ix+dd)\"]},\"72\":{\"mnemonic\":\"bit\",\"params\":[\"6\",\"(ix+dd)\"]},\"73\":{\"mnemonic\":\"bit\",\"params\":[\"6\",\"(ix+dd)\"]},\"74\":{\"mnemonic\":\"bit\",\"params\":[\"6\",\"(ix+dd)\"]},\"75\":{\"mnemonic\":\"bit\",\"params\":[\"6\",\"(ix+dd)\"]},\"76\":{\"mnemonic\":\"bit\",\"params\":[\"6\",\"(ix+dd)\"]},\"77\":{\"mnemonic\":\"bit\",\"params\":[\"6\",\"(ix+dd)\"]},\"78\":{\"mnemonic\":\"bit\",\"params\":[\"7\",\"(ix+dd)\"]},\"79\":{\"mnemonic\":\"bit\",\"params\":[\"7\",\"(ix+dd)\"]},\"80\":{\"mnemonic\":\"ld\",\"params\":[\"b\",\"res\"],\"extra\":[\"0\",\"(ix+dd)\"]},\"81\":{\"mnemonic\":\"ld\",\"params\":[\"c\",\"res\"],\"extra\":[\"0\",\"(ix+dd)\"]},\"82\":{\"mnemonic\":\"ld\",\"params\":[\"d\",\"res\"],\"extra\":[\"0\",\"(ix+dd)\"]},\"83\":{\"mnemonic\":\"ld\",\"params\":[\"e\",\"res\"],\"extra\":[\"0\",\"(ix+dd)\"]},\"84\":{\"mnemonic\":\"ld\",\"params\":[\"h\",\"res\"],\"extra\":[\"0\",\"(ix+dd)\"]},\"85\":{\"mnemonic\":\"ld\",\"params\":[\"l\",\"res\"],\"extra\":[\"0\",\"(ix+dd)\"]},\"86\":{\"mnemonic\":\"res\",\"params\":[\"0\",\"(ix+dd)\"]},\"87\":{\"mnemonic\":\"ld\",\"params\":[\"a\",\"res\"],\"extra\":[\"0\",\"(ix+dd)\"]},\"88\":{\"mnemonic\":\"ld\",\"params\":[\"b\",\"res\"],\"extra\":[\"1\",\"(ix+dd)\"]},\"89\":{\"mnemonic\":\"ld\",\"params\":[\"c\",\"res\"],\"extra\":[\"1\",\"(ix+dd)\"]},\"90\":{\"mnemonic\":\"ld\",\"params\":[\"b\",\"res\"],\"extra\":[\"2\",\"(ix+dd)\"]},\"91\":{\"mnemonic\":\"ld\",\"params\":[\"c\",\"res\"],\"extra\":[\"2\",\"(ix+dd)\"]},\"92\":{\"mnemonic\":\"ld\",\"params\":[\"d\",\"res\"],\"extra\":[\"2\",\"(ix+dd)\"]},\"93\":{\"mnemonic\":\"ld\",\"params\":[\"e\",\"res\"],\"extra\":[\"2\",\"(ix+dd)\"]},\"94\":{\"mnemonic\":\"ld\",\"params\":[\"h\",\"res\"],\"extra\":[\"2\",\"(ix+dd)\"]},\"95\":{\"mnemonic\":\"ld\",\"params\":[\"l\",\"res\"],\"extra\":[\"2\",\"(ix+dd)\"]},\"96\":{\"mnemonic\":\"res\",\"params\":[\"2\",\"(ix+dd)\"]},\"97\":{\"mnemonic\":\"ld\",\"params\":[\"a\",\"res\"],\"extra\":[\"2\",\"(ix+dd)\"]},\"98\":{\"mnemonic\":\"ld\",\"params\":[\"b\",\"res\"],\"extra\":[\"3\",\"(ix+dd)\"]},\"99\":{\"mnemonic\":\"ld\",\"params\":[\"c\",\"res\"],\"extra\":[\"3\",\"(ix+dd)\"]},\"a\":{\"mnemonic\":\"ld\",\"params\":[\"d\",\"rrc\"],\"extra\":[\"(ix+dd)\"]},\"b\":{\"mnemonic\":\"ld\",\"params\":[\"e\",\"rrc\"],\"extra\":[\"(ix+dd)\"]},\"c\":{\"mnemonic\":\"ld\",\"params\":[\"h\",\"rrc\"],\"extra\":[\"(ix+dd)\"]},\"d\":{\"mnemonic\":\"ld\",\"params\":[\"l\",\"rrc\"],\"extra\":[\"(ix+dd)\"]},\"e\":{\"mnemonic\":\"rrc\",\"params\":[\"(ix+dd)\"]},\"f\":{\"mnemonic\":\"ld\",\"params\":[\"a\",\"rrc\"],\"extra\":[\"(ix+dd)\"]},\"1a\":{\"mnemonic\":\"ld\",\"params\":[\"d\",\"rr\"],\"extra\":[\"(ix+dd)\"]},\"1b\":{\"mnemonic\":\"ld\",\"params\":[\"e\",\"rr\"],\"extra\":[\"(ix+dd)\"]},\"1c\":{\"mnemonic\":\"ld\",\"params\":[\"h\",\"rr\"],\"extra\":[\"(ix+dd)\"]},\"1d\":{\"mnemonic\":\"ld\",\"params\":[\"l\",\"rr\"],\"extra\":[\"(ix+dd)\"]},\"1e\":{\"mnemonic\":\"rr\",\"params\":[\"(ix+dd)\"]},\"1f\":{\"mnemonic\":\"ld\",\"params\":[\"a\",\"rr\"],\"extra\":[\"(ix+dd)\"]},\"2a\":{\"mnemonic\":\"ld\",\"params\":[\"d\",\"sra\"],\"extra\":[\"(ix+dd)\"]},\"2b\":{\"mnemonic\":\"ld\",\"params\":[\"e\",\"sra\"],\"extra\":[\"(ix+dd)\"]},\"2c\":{\"mnemonic\":\"ld\",\"params\":[\"h\",\"sra\"],\"extra\":[\"(ix+dd)\"]},\"2d\":{\"mnemonic\":\"ld\",\"params\":[\"l\",\"sra\"],\"extra\":[\"(ix+dd)\"]},\"2e\":{\"mnemonic\":\"sra\",\"params\":[\"(ix+dd)\"]},\"2f\":{\"mnemonic\":\"ld\",\"params\":[\"a\",\"sra\"],\"extra\":[\"(ix+dd)\"]},\"3a\":{\"mnemonic\":\"ld\",\"params\":[\"d\",\"srl\"],\"extra\":[\"(ix+dd)\"]},\"3b\":{\"mnemonic\":\"ld\",\"params\":[\"e\",\"srl\"],\"extra\":[\"(ix+dd)\"]},\"3c\":{\"mnemonic\":\"ld\",\"params\":[\"h\",\"srl\"],\"extra\":[\"(ix+dd)\"]},\"3d\":{\"mnemonic\":\"ld\",\"params\":[\"l\",\"srl\"],\"extra\":[\"(ix+dd)\"]},\"3e\":{\"mnemonic\":\"srl\",\"params\":[\"(ix+dd)\"]},\"3f\":{\"mnemonic\":\"ld\",\"params\":[\"a\",\"srl\"],\"extra\":[\"(ix+dd)\"]},\"4a\":{\"mnemonic\":\"bit\",\"params\":[\"1\",\"(ix+dd)\"]},\"4b\":{\"mnemonic\":\"bit\",\"params\":[\"1\",\"(ix+dd)\"]},\"4c\":{\"mnemonic\":\"bit\",\"params\":[\"1\",\"(ix+dd)\"]},\"4d\":{\"mnemonic\":\"bit\",\"params\":[\"1\",\"(ix+dd)\"]},\"4e\":{\"mnemonic\":\"bit\",\"params\":[\"1\",\"(ix+dd)\"]},\"4f\":{\"mnemonic\":\"bit\",\"params\":[\"1\",\"(ix+dd)\"]},\"5a\":{\"mnemonic\":\"bit\",\"params\":[\"3\",\"(ix+dd)\"]},\"5b\":{\"mnemonic\":\"bit\",\"params\":[\"3\",\"(ix+dd)\"]},\"5c\":{\"mnemonic\":\"bit\",\"params\":[\"3\",\"(ix+dd)\"]},\"5d\":{\"mnemonic\":\"bit\",\"params\":[\"3\",\"(ix+dd)\"]},\"5e\":{\"mnemonic\":\"bit\",\"params\":[\"3\",\"(ix+dd)\"]},\"5f\":{\"mnemonic\":\"bit\",\"params\":[\"3\",\"(ix+dd)\"]},\"6a\":{\"mnemonic\":\"bit\",\"params\":[\"5\",\"(ix+dd)\"]},\"6b\":{\"mnemonic\":\"bit\",\"params\":[\"5\",\"(ix+dd)\"]},\"6c\":{\"mnemonic\":\"bit\",\"params\":[\"5\",\"(ix+dd)\"]},\"6d\":{\"mnemonic\":\"bit\",\"params\":[\"5\",\"(ix+dd)\"]},\"6e\":{\"mnemonic\":\"bit\",\"params\":[\"5\",\"(ix+dd)\"]},\"6f\":{\"mnemonic\":\"bit\",\"params\":[\"5\",\"(ix+dd)\"]},\"7a\":{\"mnemonic\":\"bit\",\"params\":[\"7\",\"(ix+dd)\"]},\"7b\":{\"mnemonic\":\"bit\",\"params\":[\"7\",\"(ix+dd)\"]},\"7c\":{\"mnemonic\":\"bit\",\"params\":[\"7\",\"(ix+dd)\"]},\"7d\":{\"mnemonic\":\"bit\",\"params\":[\"7\",\"(ix+dd)\"]},\"7e\":{\"mnemonic\":\"bit\",\"params\":[\"7\",\"(ix+dd)\"]},\"7f\":{\"mnemonic\":\"bit\",\"params\":[\"7\",\"(ix+dd)\"]},\"8a\":{\"mnemonic\":\"ld\",\"params\":[\"d\",\"res\"],\"extra\":[\"1\",\"(ix+dd)\"]},\"8b\":{\"mnemonic\":\"ld\",\"params\":[\"e\",\"res\"],\"extra\":[\"1\",\"(ix+dd)\"]},\"8c\":{\"mnemonic\":\"ld\",\"params\":[\"h\",\"res\"],\"extra\":[\"1\",\"(ix+dd)\"]},\"8d\":{\"mnemonic\":\"ld\",\"params\":[\"l\",\"res\"],\"extra\":[\"1\",\"(ix+dd)\"]},\"8e\":{\"mnemonic\":\"res\",\"params\":[\"1\",\"(ix+dd)\"]},\"8f\":{\"mnemonic\":\"ld\",\"params\":[\"a\",\"res\"],\"extra\":[\"1\",\"(ix+dd)\"]},\"9a\":{\"mnemonic\":\"ld\",\"params\":[\"d\",\"res\"],\"extra\":[\"3\",\"(ix+dd)\"]},\"9b\":{\"mnemonic\":\"ld\",\"params\":[\"e\",\"res\"],\"extra\":[\"3\",\"(ix+dd)\"]},\"9c\":{\"mnemonic\":\"ld\",\"params\":[\"h\",\"res\"],\"extra\":[\"3\",\"(ix+dd)\"]},\"9d\":{\"mnemonic\":\"ld\",\"params\":[\"l\",\"res\"],\"extra\":[\"3\",\"(ix+dd)\"]},\"9e\":{\"mnemonic\":\"res\",\"params\":[\"3\",\"(ix+dd)\"]},\"9f\":{\"mnemonic\":\"ld\",\"params\":[\"a\",\"res\"],\"extra\":[\"3\",\"(ix+dd)\"]},\"a0\":{\"mnemonic\":\"ld\",\"params\":[\"b\",\"res\"],\"extra\":[\"4\",\"(ix+dd)\"]},\"a1\":{\"mnemonic\":\"ld\",\"params\":[\"c\",\"res\"],\"extra\":[\"4\",\"(ix+dd)\"]},\"a2\":{\"mnemonic\":\"ld\",\"params\":[\"d\",\"res\"],\"extra\":[\"4\",\"(ix+dd)\"]},\"a3\":{\"mnemonic\":\"ld\",\"params\":[\"e\",\"res\"],\"extra\":[\"4\",\"(ix+dd)\"]},\"a4\":{\"mnemonic\":\"ld\",\"params\":[\"h\",\"res\"],\"extra\":[\"4\",\"(ix+dd)\"]},\"a5\":{\"mnemonic\":\"ld\",\"params\":[\"l\",\"res\"],\"extra\":[\"4\",\"(ix+dd)\"]},\"a6\":{\"mnemonic\":\"res\",\"params\":[\"4\",\"(ix+dd)\"]},\"a7\":{\"mnemonic\":\"ld\",\"params\":[\"a\",\"res\"],\"extra\":[\"4\",\"(ix+dd)\"]},\"a8\":{\"mnemonic\":\"ld\",\"params\":[\"b\",\"res\"],\"extra\":[\"5\",\"(ix+dd)\"]},\"a9\":{\"mnemonic\":\"ld\",\"params\":[\"c\",\"res\"],\"extra\":[\"5\",\"(ix+dd)\"]},\"aa\":{\"mnemonic\":\"ld\",\"params\":[\"d\",\"res\"],\"extra\":[\"5\",\"(ix+dd)\"]},\"ab\":{\"mnemonic\":\"ld\",\"params\":[\"e\",\"res\"],\"extra\":[\"5\",\"(ix+dd)\"]},\"ac\":{\"mnemonic\":\"ld\",\"params\":[\"h\",\"res\"],\"extra\":[\"5\",\"(ix+dd)\"]},\"ad\":{\"mnemonic\":\"ld\",\"params\":[\"l\",\"res\"],\"extra\":[\"5\",\"(ix+dd)\"]},\"ae\":{\"mnemonic\":\"res\",\"params\":[\"5\",\"(ix+dd)\"]},\"af\":{\"mnemonic\":\"ld\",\"params\":[\"a\",\"res\"],\"extra\":[\"5\",\"(ix+dd)\"]},\"b0\":{\"mnemonic\":\"ld\",\"params\":[\"b\",\"res\"],\"extra\":[\"6\",\"(ix+dd)\"]},\"b1\":{\"mnemonic\":\"ld\",\"params\":[\"c\",\"res\"],\"extra\":[\"6\",\"(ix+dd)\"]},\"b2\":{\"mnemonic\":\"ld\",\"params\":[\"d\",\"res\"],\"extra\":[\"6\",\"(ix+dd)\"]},\"b3\":{\"mnemonic\":\"ld\",\"params\":[\"e\",\"res\"],\"extra\":[\"6\",\"(ix+dd)\"]},\"b4\":{\"mnemonic\":\"ld\",\"params\":[\"h\",\"res\"],\"extra\":[\"6\",\"(ix+dd)\"]},\"b5\":{\"mnemonic\":\"ld\",\"params\":[\"l\",\"res\"],\"extra\":[\"6\",\"(ix+dd)\"]},\"b6\":{\"mnemonic\":\"res\",\"params\":[\"6\",\"(ix+dd)\"]},\"b7\":{\"mnemonic\":\"ld\",\"params\":[\"a\",\"res\"],\"extra\":[\"6\",\"(ix+dd)\"]},\"b8\":{\"mnemonic\":\"ld\",\"params\":[\"b\",\"res\"],\"extra\":[\"7\",\"(ix+dd)\"]},\"b9\":{\"mnemonic\":\"ld\",\"params\":[\"c\",\"res\"],\"extra\":[\"7\",\"(ix+dd)\"]},\"ba\":{\"mnemonic\":\"ld\",\"params\":[\"d\",\"res\"],\"extra\":[\"7\",\"(ix+dd)\"]},\"bb\":{\"mnemonic\":\"ld\",\"params\":[\"e\",\"res\"],\"extra\":[\"7\",\"(ix+dd)\"]},\"bc\":{\"mnemonic\":\"ld\",\"params\":[\"h\",\"res\"],\"extra\":[\"7\",\"(ix+dd)\"]},\"bd\":{\"mnemonic\":\"ld\",\"params\":[\"l\",\"res\"],\"extra\":[\"7\",\"(ix+dd)\"]},\"be\":{\"mnemonic\":\"res\",\"params\":[\"7\",\"(ix+dd)\"]},\"bf\":{\"mnemonic\":\"ld\",\"params\":[\"a\",\"res\"],\"extra\":[\"7\",\"(ix+dd)\"]},\"c0\":{\"mnemonic\":\"ld\",\"params\":[\"b\",\"set\"],\"extra\":[\"0\",\"(ix+dd)\"]},\"c1\":{\"mnemonic\":\"ld\",\"params\":[\"c\",\"set\"],\"extra\":[\"0\",\"(ix+dd)\"]},\"c2\":{\"mnemonic\":\"ld\",\"params\":[\"d\",\"set\"],\"extra\":[\"0\",\"(ix+dd)\"]},\"c3\":{\"mnemonic\":\"ld\",\"params\":[\"e\",\"set\"],\"extra\":[\"0\",\"(ix+dd)\"]},\"c4\":{\"mnemonic\":\"ld\",\"params\":[\"h\",\"set\"],\"extra\":[\"0\",\"(ix+dd)\"]},\"c5\":{\"mnemonic\":\"ld\",\"params\":[\"l\",\"set\"],\"extra\":[\"0\",\"(ix+dd)\"]},\"c6\":{\"mnemonic\":\"set\",\"params\":[\"0\",\"(ix+dd)\"]},\"c7\":{\"mnemonic\":\"ld\",\"params\":[\"a\",\"set\"],\"extra\":[\"0\",\"(ix+dd)\"]},\"c8\":{\"mnemonic\":\"ld\",\"params\":[\"b\",\"set\"],\"extra\":[\"1\",\"(ix+dd)\"]},\"c9\":{\"mnemonic\":\"ld\",\"params\":[\"c\",\"set\"],\"extra\":[\"1\",\"(ix+dd)\"]},\"ca\":{\"mnemonic\":\"ld\",\"params\":[\"d\",\"set\"],\"extra\":[\"1\",\"(ix+dd)\"]},\"cb\":{\"mnemonic\":\"ld\",\"params\":[\"e\",\"set\"],\"extra\":[\"1\",\"(ix+dd)\"]},\"cc\":{\"mnemonic\":\"ld\",\"params\":[\"h\",\"set\"],\"extra\":[\"1\",\"(ix+dd)\"]},\"cd\":{\"mnemonic\":\"ld\",\"params\":[\"l\",\"set\"],\"extra\":[\"1\",\"(ix+dd)\"]},\"ce\":{\"mnemonic\":\"set\",\"params\":[\"1\",\"(ix+dd)\"]},\"cf\":{\"mnemonic\":\"ld\",\"params\":[\"a\",\"set\"],\"extra\":[\"1\",\"(ix+dd)\"]},\"d0\":{\"mnemonic\":\"ld\",\"params\":[\"b\",\"set\"],\"extra\":[\"2\",\"(ix+dd)\"]},\"d1\":{\"mnemonic\":\"ld\",\"params\":[\"c\",\"set\"],\"extra\":[\"2\",\"(ix+dd)\"]},\"d2\":{\"mnemonic\":\"ld\",\"params\":[\"d\",\"set\"],\"extra\":[\"2\",\"(ix+dd)\"]},\"d3\":{\"mnemonic\":\"ld\",\"params\":[\"e\",\"set\"],\"extra\":[\"2\",\"(ix+dd)\"]},\"d4\":{\"mnemonic\":\"ld\",\"params\":[\"h\",\"set\"],\"extra\":[\"2\",\"(ix+dd)\"]},\"d5\":{\"mnemonic\":\"ld\",\"params\":[\"l\",\"set\"],\"extra\":[\"2\",\"(ix+dd)\"]},\"d6\":{\"mnemonic\":\"set\",\"params\":[\"2\",\"(ix+dd)\"]},\"d7\":{\"mnemonic\":\"ld\",\"params\":[\"a\",\"set\"],\"extra\":[\"2\",\"(ix+dd)\"]},\"d8\":{\"mnemonic\":\"ld\",\"params\":[\"b\",\"set\"],\"extra\":[\"3\",\"(ix+dd)\"]},\"d9\":{\"mnemonic\":\"ld\",\"params\":[\"c\",\"set\"],\"extra\":[\"3\",\"(ix+dd)\"]},\"da\":{\"mnemonic\":\"ld\",\"params\":[\"d\",\"set\"],\"extra\":[\"3\",\"(ix+dd)\"]},\"db\":{\"mnemonic\":\"ld\",\"params\":[\"e\",\"set\"],\"extra\":[\"3\",\"(ix+dd)\"]},\"dc\":{\"mnemonic\":\"ld\",\"params\":[\"h\",\"set\"],\"extra\":[\"3\",\"(ix+dd)\"]},\"dd\":{\"mnemonic\":\"ld\",\"params\":[\"l\",\"set\"],\"extra\":[\"3\",\"(ix+dd)\"]},\"de\":{\"mnemonic\":\"set\",\"params\":[\"3\",\"(ix+dd)\"]},\"df\":{\"mnemonic\":\"ld\",\"params\":[\"a\",\"set\"],\"extra\":[\"3\",\"(ix+dd)\"]},\"e0\":{\"mnemonic\":\"ld\",\"params\":[\"b\",\"set\"],\"extra\":[\"4\",\"(ix+dd)\"]},\"e1\":{\"mnemonic\":\"ld\",\"params\":[\"c\",\"set\"],\"extra\":[\"4\",\"(ix+dd)\"]},\"e2\":{\"mnemonic\":\"ld\",\"params\":[\"d\",\"set\"],\"extra\":[\"4\",\"(ix+dd)\"]},\"e3\":{\"mnemonic\":\"ld\",\"params\":[\"e\",\"set\"],\"extra\":[\"4\",\"(ix+dd)\"]},\"e4\":{\"mnemonic\":\"ld\",\"params\":[\"h\",\"set\"],\"extra\":[\"4\",\"(ix+dd)\"]},\"e5\":{\"mnemonic\":\"ld\",\"params\":[\"l\",\"set\"],\"extra\":[\"4\",\"(ix+dd)\"]},\"e6\":{\"mnemonic\":\"set\",\"params\":[\"4\",\"(ix+dd)\"]},\"e7\":{\"mnemonic\":\"ld\",\"params\":[\"a\",\"set\"],\"extra\":[\"4\",\"(ix+dd)\"]},\"e8\":{\"mnemonic\":\"ld\",\"params\":[\"b\",\"set\"],\"extra\":[\"5\",\"(ix+dd)\"]},\"e9\":{\"mnemonic\":\"ld\",\"params\":[\"c\",\"set\"],\"extra\":[\"5\",\"(ix+dd)\"]},\"ea\":{\"mnemonic\":\"ld\",\"params\":[\"d\",\"set\"],\"extra\":[\"5\",\"(ix+dd)\"]},\"eb\":{\"mnemonic\":\"ld\",\"params\":[\"e\",\"set\"],\"extra\":[\"5\",\"(ix+dd)\"]},\"ec\":{\"mnemonic\":\"ld\",\"params\":[\"h\",\"set\"],\"extra\":[\"5\",\"(ix+dd)\"]},\"ed\":{\"mnemonic\":\"ld\",\"params\":[\"l\",\"set\"],\"extra\":[\"5\",\"(ix+dd)\"]},\"ee\":{\"mnemonic\":\"set\",\"params\":[\"5\",\"(ix+dd)\"]},\"ef\":{\"mnemonic\":\"ld\",\"params\":[\"a\",\"set\"],\"extra\":[\"5\",\"(ix+dd)\"]},\"f0\":{\"mnemonic\":\"ld\",\"params\":[\"b\",\"set\"],\"extra\":[\"6\",\"(ix+dd)\"]},\"f1\":{\"mnemonic\":\"ld\",\"params\":[\"c\",\"set\"],\"extra\":[\"6\",\"(ix+dd)\"]},\"f2\":{\"mnemonic\":\"ld\",\"params\":[\"d\",\"set\"],\"extra\":[\"6\",\"(ix+dd)\"]},\"f3\":{\"mnemonic\":\"ld\",\"params\":[\"e\",\"set\"],\"extra\":[\"6\",\"(ix+dd)\"]},\"f4\":{\"mnemonic\":\"ld\",\"params\":[\"h\",\"set\"],\"extra\":[\"6\",\"(ix+dd)\"]},\"f5\":{\"mnemonic\":\"ld\",\"params\":[\"l\",\"set\"],\"extra\":[\"6\",\"(ix+dd)\"]},\"f6\":{\"mnemonic\":\"set\",\"params\":[\"6\",\"(ix+dd)\"]},\"f7\":{\"mnemonic\":\"ld\",\"params\":[\"a\",\"set\"],\"extra\":[\"6\",\"(ix+dd)\"]},\"f8\":{\"mnemonic\":\"ld\",\"params\":[\"b\",\"set\"],\"extra\":[\"7\",\"(ix+dd)\"]},\"f9\":{\"mnemonic\":\"ld\",\"params\":[\"c\",\"set\"],\"extra\":[\"7\",\"(ix+dd)\"]},\"fa\":{\"mnemonic\":\"ld\",\"params\":[\"d\",\"set\"],\"extra\":[\"7\",\"(ix+dd)\"]},\"fb\":{\"mnemonic\":\"ld\",\"params\":[\"e\",\"set\"],\"extra\":[\"7\",\"(ix+dd)\"]},\"fc\":{\"mnemonic\":\"ld\",\"params\":[\"h\",\"set\"],\"extra\":[\"7\",\"(ix+dd)\"]},\"fd\":{\"mnemonic\":\"ld\",\"params\":[\"l\",\"set\"],\"extra\":[\"7\",\"(ix+dd)\"]},\"fe\":{\"mnemonic\":\"set\",\"params\":[\"7\",\"(ix+dd)\"]},\"ff\":{\"mnemonic\":\"ld\",\"params\":[\"a\",\"set\"],\"extra\":[\"7\",\"(ix+dd)\"]}}},\"e1\":{\"mnemonic\":\"pop\",\"params\":[\"ix\"]},\"e3\":{\"mnemonic\":\"ex\",\"params\":[\"(sp)\",\"ix\"]},\"e5\":{\"mnemonic\":\"push\",\"params\":[\"ix\"]},\"e9\":{\"mnemonic\":\"jp\",\"params\":[\"ix\"]},\"f9\":{\"mnemonic\":\"ld\",\"params\":[\"sp\",\"ix\"]}}},\"de\":{\"mnemonic\":\"sbc\",\"params\":[\"a\",\"nn\"]},\"df\":{\"mnemonic\":\"rst\",\"params\":[\"18\"]},\"e0\":{\"mnemonic\":\"ret\",\"params\":[\"po\"]},\"e1\":{\"mnemonic\":\"pop\",\"params\":[\"hl\"]},\"e2\":{\"mnemonic\":\"jp\",\"params\":[\"po\",\"nnnn\"]},\"e3\":{\"mnemonic\":\"ex\",\"params\":[\"(sp)\",\"hl\"]},\"e4\":{\"mnemonic\":\"call\",\"params\":[\"po\",\"nnnn\"]},\"e5\":{\"mnemonic\":\"push\",\"params\":[\"hl\"]},\"e6\":{\"mnemonic\":\"and\",\"params\":[\"nn\"]},\"e7\":{\"mnemonic\":\"rst\",\"params\":[\"20\"]},\"e8\":{\"mnemonic\":\"ret\",\"params\":[\"pe\"]},\"e9\":{\"mnemonic\":\"jp\",\"params\":[\"hl\"]},\"ea\":{\"mnemonic\":\"jp\",\"params\":[\"pe\",\"nnnn\"]},\"eb\":{\"mnemonic\":\"ex\",\"params\":[\"de\",\"hl\"]},\"ec\":{\"mnemonic\":\"call\",\"params\":[\"pe\",\"nnnn\"]},\"ed\":{\"shift\":{\"40\":{\"mnemonic\":\"in\",\"params\":[\"b\",\"(c)\"]},\"41\":{\"mnemonic\":\"out\",\"params\":[\"(c)\",\"b\"]},\"42\":{\"mnemonic\":\"sbc\",\"params\":[\"hl\",\"bc\"]},\"43\":{\"mnemonic\":\"ld\",\"params\":[\"(nnnn)\",\"bc\"]},\"44\":{\"mnemonic\":\"neg\"},\"45\":{\"mnemonic\":\"retn\"},\"46\":{\"mnemonic\":\"im\",\"params\":[\"0\"]},\"47\":{\"mnemonic\":\"ld\",\"params\":[\"i\",\"a\"]},\"48\":{\"mnemonic\":\"in\",\"params\":[\"c\",\"(c)\"]},\"49\":{\"mnemonic\":\"out\",\"params\":[\"(c)\",\"c\"]},\"50\":{\"mnemonic\":\"in\",\"params\":[\"d\",\"(c)\"]},\"51\":{\"mnemonic\":\"out\",\"params\":[\"(c)\",\"d\"]},\"52\":{\"mnemonic\":\"sbc\",\"params\":[\"hl\",\"de\"]},\"53\":{\"mnemonic\":\"ld\",\"params\":[\"(nnnn)\",\"de\"]},\"54\":{\"mnemonic\":\"neg\"},\"55\":{\"mnemonic\":\"retn\"},\"56\":{\"mnemonic\":\"im\",\"params\":[\"1\"]},\"57\":{\"mnemonic\":\"ld\",\"params\":[\"a\",\"i\"]},\"58\":{\"mnemonic\":\"in\",\"params\":[\"e\",\"(c)\"]},\"59\":{\"mnemonic\":\"out\",\"params\":[\"(c)\",\"e\"]},\"60\":{\"mnemonic\":\"in\",\"params\":[\"h\",\"(c)\"]},\"61\":{\"mnemonic\":\"out\",\"params\":[\"(c)\",\"h\"]},\"62\":{\"mnemonic\":\"sbc\",\"params\":[\"hl\",\"hl\"]},\"63\":{\"mnemonic\":\"ld\",\"params\":[\"(nnnn)\",\"hl\"]},\"64\":{\"mnemonic\":\"neg\"},\"65\":{\"mnemonic\":\"retn\"},\"66\":{\"mnemonic\":\"im\",\"params\":[\"0\"]},\"67\":{\"mnemonic\":\"rrd\"},\"68\":{\"mnemonic\":\"in\",\"params\":[\"l\",\"(c)\"]},\"69\":{\"mnemonic\":\"out\",\"params\":[\"(c)\",\"l\"]},\"70\":{\"mnemonic\":\"in\",\"params\":[\"f\",\"(c)\"]},\"71\":{\"mnemonic\":\"out\",\"params\":[\"(c)\",\"0\"]},\"72\":{\"mnemonic\":\"sbc\",\"params\":[\"hl\",\"sp\"]},\"73\":{\"mnemonic\":\"ld\",\"params\":[\"(nnnn)\",\"sp\"]},\"74\":{\"mnemonic\":\"neg\"},\"75\":{\"mnemonic\":\"retn\"},\"76\":{\"mnemonic\":\"im\",\"params\":[\"1\"]},\"78\":{\"mnemonic\":\"in\",\"params\":[\"a\",\"(c)\"]},\"79\":{\"mnemonic\":\"out\",\"params\":[\"(c)\",\"a\"]},\"4c\":{\"mnemonic\":\"neg\"},\"5c\":{\"mnemonic\":\"neg\"},\"6c\":{\"mnemonic\":\"neg\"},\"7c\":{\"mnemonic\":\"neg\"},\"5d\":{\"mnemonic\":\"retn\"},\"6d\":{\"mnemonic\":\"retn\"},\"7d\":{\"mnemonic\":\"retn\"},\"4e\":{\"mnemonic\":\"im\",\"params\":[\"0\"]},\"6e\":{\"mnemonic\":\"im\",\"params\":[\"0\"]},\"4a\":{\"mnemonic\":\"adc\",\"params\":[\"hl\",\"bc\"]},\"4b\":{\"mnemonic\":\"ld\",\"params\":[\"bc\",\"(nnnn)\"]},\"4d\":{\"mnemonic\":\"reti\"},\"4f\":{\"mnemonic\":\"ld\",\"params\":[\"r\",\"a\"]},\"5a\":{\"mnemonic\":\"adc\",\"params\":[\"hl\",\"de\"]},\"5b\":{\"mnemonic\":\"ld\",\"params\":[\"de\",\"(nnnn)\"]},\"5e\":{\"mnemonic\":\"im\",\"params\":[\"2\"]},\"7e\":{\"mnemonic\":\"im\",\"params\":[\"2\"]},\"5f\":{\"mnemonic\":\"ld\",\"params\":[\"a\",\"r\"]},\"6a\":{\"mnemonic\":\"adc\",\"params\":[\"hl\",\"hl\"]},\"6b\":{\"mnemonic\":\"ld\",\"params\":[\"hl\",\"(nnnn)\"]},\"6f\":{\"mnemonic\":\"rld\"},\"7a\":{\"mnemonic\":\"adc\",\"params\":[\"hl\",\"sp\"]},\"7b\":{\"mnemonic\":\"ld\",\"params\":[\"sp\",\"(nnnn)\"]},\"a0\":{\"mnemonic\":\"ldi\"},\"a1\":{\"mnemonic\":\"cpi\"},\"a2\":{\"mnemonic\":\"ini\"},\"a3\":{\"mnemonic\":\"outi\"},\"a8\":{\"mnemonic\":\"ldd\"},\"a9\":{\"mnemonic\":\"cpd\"},\"aa\":{\"mnemonic\":\"ind\"},\"ab\":{\"mnemonic\":\"outd\"},\"b0\":{\"mnemonic\":\"ldir\"},\"b1\":{\"mnemonic\":\"cpir\"},\"b2\":{\"mnemonic\":\"inir\"},\"b3\":{\"mnemonic\":\"otir\"},\"b8\":{\"mnemonic\":\"lddr\"},\"b9\":{\"mnemonic\":\"cpdr\"},\"ba\":{\"mnemonic\":\"indr\"},\"bb\":{\"mnemonic\":\"otdr\"}}},\"ee\":{\"mnemonic\":\"xor\",\"params\":[\"a\",\"nn\"]},\"ef\":{\"mnemonic\":\"rst\",\"params\":[\"28\"]},\"f0\":{\"mnemonic\":\"ret\",\"params\":[\"p\"]},\"f1\":{\"mnemonic\":\"pop\",\"params\":[\"af\"]},\"f2\":{\"mnemonic\":\"jp\",\"params\":[\"p\",\"nnnn\"]},\"f3\":{\"mnemonic\":\"di\"},\"f4\":{\"mnemonic\":\"call\",\"params\":[\"p\",\"nnnn\"]},\"f5\":{\"mnemonic\":\"push\",\"params\":[\"af\"]},\"f6\":{\"mnemonic\":\"or\",\"params\":[\"nn\"]},\"f7\":{\"mnemonic\":\"rst\",\"params\":[\"30\"]},\"f8\":{\"mnemonic\":\"ret\",\"params\":[\"m\"]},\"f9\":{\"mnemonic\":\"ld\",\"params\":[\"sp\",\"hl\"]},\"fa\":{\"mnemonic\":\"jp\",\"params\":[\"m\",\"nnnn\"]},\"fb\":{\"mnemonic\":\"ei\"},\"fc\":{\"mnemonic\":\"call\",\"params\":[\"m\",\"nnnn\"]},\"fd\":{\"shift\":{\"9\":{\"mnemonic\":\"add\",\"params\":[\"iy\",\"bc\"]},\"19\":{\"mnemonic\":\"add\",\"params\":[\"iy\",\"de\"]},\"21\":{\"mnemonic\":\"ld\",\"params\":[\"iy\",\"nnnn\"]},\"22\":{\"mnemonic\":\"ld\",\"params\":[\"(nnnn)\",\"iy\"]},\"23\":{\"mnemonic\":\"inc\",\"params\":[\"iy\"]},\"24\":{\"mnemonic\":\"inc\",\"params\":[\"iyh\"]},\"25\":{\"mnemonic\":\"dec\",\"params\":[\"iyh\"]},\"26\":{\"mnemonic\":\"ld\",\"params\":[\"iyh\",\"nn\"]},\"29\":{\"mnemonic\":\"add\",\"params\":[\"iy\",\"iy\"]},\"34\":{\"mnemonic\":\"inc\",\"params\":[\"(iy+dd)\"]},\"35\":{\"mnemonic\":\"dec\",\"params\":[\"(iy+dd)\"]},\"36\":{\"mnemonic\":\"ld\",\"params\":[\"(iy+dd)\",\"nn\"]},\"39\":{\"mnemonic\":\"add\",\"params\":[\"iy\",\"sp\"]},\"44\":{\"mnemonic\":\"ld\",\"params\":[\"b\",\"iyh\"]},\"45\":{\"mnemonic\":\"ld\",\"params\":[\"b\",\"iyl\"]},\"46\":{\"mnemonic\":\"ld\",\"params\":[\"b\",\"(iy+dd)\"]},\"54\":{\"mnemonic\":\"ld\",\"params\":[\"d\",\"iyh\"]},\"55\":{\"mnemonic\":\"ld\",\"params\":[\"d\",\"iyl\"]},\"56\":{\"mnemonic\":\"ld\",\"params\":[\"d\",\"(iy+dd)\"]},\"60\":{\"mnemonic\":\"ld\",\"params\":[\"iyh\",\"b\"]},\"61\":{\"mnemonic\":\"ld\",\"params\":[\"iyh\",\"c\"]},\"62\":{\"mnemonic\":\"ld\",\"params\":[\"iyh\",\"d\"]},\"63\":{\"mnemonic\":\"ld\",\"params\":[\"iyh\",\"e\"]},\"64\":{\"mnemonic\":\"ld\",\"params\":[\"iyh\",\"iyh\"]},\"65\":{\"mnemonic\":\"ld\",\"params\":[\"iyh\",\"iyl\"]},\"66\":{\"mnemonic\":\"ld\",\"params\":[\"h\",\"(iy+dd)\"]},\"67\":{\"mnemonic\":\"ld\",\"params\":[\"iyh\",\"a\"]},\"68\":{\"mnemonic\":\"ld\",\"params\":[\"iyl\",\"b\"]},\"69\":{\"mnemonic\":\"ld\",\"params\":[\"iyl\",\"c\"]},\"70\":{\"mnemonic\":\"ld\",\"params\":[\"(iy+dd)\",\"b\"]},\"71\":{\"mnemonic\":\"ld\",\"params\":[\"(iy+dd)\",\"c\"]},\"72\":{\"mnemonic\":\"ld\",\"params\":[\"(iy+dd)\",\"d\"]},\"73\":{\"mnemonic\":\"ld\",\"params\":[\"(iy+dd)\",\"e\"]},\"74\":{\"mnemonic\":\"ld\",\"params\":[\"(iy+dd)\",\"h\"]},\"75\":{\"mnemonic\":\"ld\",\"params\":[\"(iy+dd)\",\"l\"]},\"77\":{\"mnemonic\":\"ld\",\"params\":[\"(iy+dd)\",\"a\"]},\"84\":{\"mnemonic\":\"add\",\"params\":[\"a\",\"iyh\"]},\"85\":{\"mnemonic\":\"add\",\"params\":[\"a\",\"iyl\"]},\"86\":{\"mnemonic\":\"add\",\"params\":[\"a\",\"(iy+dd)\"]},\"94\":{\"mnemonic\":\"sub\",\"params\":[\"a\",\"iyh\"]},\"95\":{\"mnemonic\":\"sub\",\"params\":[\"a\",\"iyl\"]},\"96\":{\"mnemonic\":\"sub\",\"params\":[\"a\",\"(iy+dd)\"]},\"2a\":{\"mnemonic\":\"ld\",\"params\":[\"iy\",\"(nnnn)\"]},\"2b\":{\"mnemonic\":\"dec\",\"params\":[\"iy\"]},\"2c\":{\"mnemonic\":\"inc\",\"params\":[\"iyl\"]},\"2d\":{\"mnemonic\":\"dec\",\"params\":[\"iyl\"]},\"2e\":{\"mnemonic\":\"ld\",\"params\":[\"iyl\",\"nn\"]},\"4c\":{\"mnemonic\":\"ld\",\"params\":[\"c\",\"iyh\"]},\"4d\":{\"mnemonic\":\"ld\",\"params\":[\"c\",\"iyl\"]},\"4e\":{\"mnemonic\":\"ld\",\"params\":[\"c\",\"(iy+dd)\"]},\"5c\":{\"mnemonic\":\"ld\",\"params\":[\"e\",\"iyh\"]},\"5d\":{\"mnemonic\":\"ld\",\"params\":[\"e\",\"iyl\"]},\"5e\":{\"mnemonic\":\"ld\",\"params\":[\"e\",\"(iy+dd)\"]},\"6a\":{\"mnemonic\":\"ld\",\"params\":[\"iyl\",\"d\"]},\"6b\":{\"mnemonic\":\"ld\",\"params\":[\"iyl\",\"e\"]},\"6c\":{\"mnemonic\":\"ld\",\"params\":[\"iyl\",\"iyh\"]},\"6d\":{\"mnemonic\":\"ld\",\"params\":[\"iyl\",\"iyl\"]},\"6e\":{\"mnemonic\":\"ld\",\"params\":[\"l\",\"(iy+dd)\"]},\"6f\":{\"mnemonic\":\"ld\",\"params\":[\"iyl\",\"a\"]},\"7c\":{\"mnemonic\":\"ld\",\"params\":[\"a\",\"iyh\"]},\"7d\":{\"mnemonic\":\"ld\",\"params\":[\"a\",\"iyl\"]},\"7e\":{\"mnemonic\":\"ld\",\"params\":[\"a\",\"(iy+dd)\"]},\"8c\":{\"mnemonic\":\"adc\",\"params\":[\"a\",\"iyh\"]},\"8d\":{\"mnemonic\":\"adc\",\"params\":[\"a\",\"iyl\"]},\"8e\":{\"mnemonic\":\"adc\",\"params\":[\"a\",\"(iy+dd)\"]},\"9c\":{\"mnemonic\":\"sbc\",\"params\":[\"a\",\"iyh\"]},\"9d\":{\"mnemonic\":\"sbc\",\"params\":[\"a\",\"iyl\"]},\"9e\":{\"mnemonic\":\"sbc\",\"params\":[\"a\",\"(iy+dd)\"]},\"a4\":{\"mnemonic\":\"and\",\"params\":[\"a\",\"iyh\"]},\"a5\":{\"mnemonic\":\"and\",\"params\":[\"a\",\"iyl\"]},\"a6\":{\"mnemonic\":\"and\",\"params\":[\"a\",\"(iy+dd)\"]},\"ac\":{\"mnemonic\":\"xor\",\"params\":[\"a\",\"iyh\"]},\"ad\":{\"mnemonic\":\"xor\",\"params\":[\"a\",\"iyl\"]},\"ae\":{\"mnemonic\":\"xor\",\"params\":[\"a\",\"(iy+dd)\"]},\"b4\":{\"mnemonic\":\"or\",\"params\":[\"a\",\"iyh\"]},\"b5\":{\"mnemonic\":\"or\",\"params\":[\"a\",\"iyl\"]},\"b6\":{\"mnemonic\":\"or\",\"params\":[\"a\",\"(iy+dd)\"]},\"bc\":{\"mnemonic\":\"cp\",\"params\":[\"iyh\"]},\"bd\":{\"mnemonic\":\"cp\",\"params\":[\"iyl\"]},\"be\":{\"mnemonic\":\"cp\",\"params\":[\"(iy+dd)\"]},\"cb\":{\"shift\":{\"0\":{\"mnemonic\":\"ld\",\"params\":[\"b\",\"rlc\"],\"extra\":[\"(iy+dd)\"]},\"1\":{\"mnemonic\":\"ld\",\"params\":[\"c\",\"rlc\"],\"extra\":[\"(iy+dd)\"]},\"2\":{\"mnemonic\":\"ld\",\"params\":[\"d\",\"rlc\"],\"extra\":[\"(iy+dd)\"]},\"3\":{\"mnemonic\":\"ld\",\"params\":[\"e\",\"rlc\"],\"extra\":[\"(iy+dd)\"]},\"4\":{\"mnemonic\":\"ld\",\"params\":[\"h\",\"rlc\"],\"extra\":[\"(iy+dd)\"]},\"5\":{\"mnemonic\":\"ld\",\"params\":[\"l\",\"rlc\"],\"extra\":[\"(iy+dd)\"]},\"6\":{\"mnemonic\":\"rlc\",\"params\":[\"(iy+dd)\"]},\"7\":{\"mnemonic\":\"ld\",\"params\":[\"a\",\"rlc\"],\"extra\":[\"(iy+dd)\"]},\"8\":{\"mnemonic\":\"ld\",\"params\":[\"b\",\"rrc\"],\"extra\":[\"(iy+dd)\"]},\"9\":{\"mnemonic\":\"ld\",\"params\":[\"c\",\"rrc\"],\"extra\":[\"(iy+dd)\"]},\"10\":{\"mnemonic\":\"ld\",\"params\":[\"b\",\"rl\"],\"extra\":[\"(iy+dd)\"]},\"11\":{\"mnemonic\":\"ld\",\"params\":[\"c\",\"rl\"],\"extra\":[\"(iy+dd)\"]},\"12\":{\"mnemonic\":\"ld\",\"params\":[\"d\",\"rl\"],\"extra\":[\"(iy+dd)\"]},\"13\":{\"mnemonic\":\"ld\",\"params\":[\"e\",\"rl\"],\"extra\":[\"(iy+dd)\"]},\"14\":{\"mnemonic\":\"ld\",\"params\":[\"h\",\"rl\"],\"extra\":[\"(iy+dd)\"]},\"15\":{\"mnemonic\":\"ld\",\"params\":[\"l\",\"rl\"],\"extra\":[\"(iy+dd)\"]},\"16\":{\"mnemonic\":\"rl\",\"params\":[\"(iy+dd)\"]},\"17\":{\"mnemonic\":\"ld\",\"params\":[\"a\",\"rl\"],\"extra\":[\"(iy+dd)\"]},\"18\":{\"mnemonic\":\"ld\",\"params\":[\"b\",\"rr\"],\"extra\":[\"(iy+dd)\"]},\"19\":{\"mnemonic\":\"ld\",\"params\":[\"c\",\"rr\"],\"extra\":[\"(iy+dd)\"]},\"20\":{\"mnemonic\":\"ld\",\"params\":[\"b\",\"sla\"],\"extra\":[\"(iy+dd)\"]},\"21\":{\"mnemonic\":\"ld\",\"params\":[\"c\",\"sla\"],\"extra\":[\"(iy+dd)\"]},\"22\":{\"mnemonic\":\"ld\",\"params\":[\"d\",\"sla\"],\"extra\":[\"(iy+dd)\"]},\"23\":{\"mnemonic\":\"ld\",\"params\":[\"e\",\"sla\"],\"extra\":[\"(iy+dd)\"]},\"24\":{\"mnemonic\":\"ld\",\"params\":[\"h\",\"sla\"],\"extra\":[\"(iy+dd)\"]},\"25\":{\"mnemonic\":\"ld\",\"params\":[\"l\",\"sla\"],\"extra\":[\"(iy+dd)\"]},\"26\":{\"mnemonic\":\"sla\",\"params\":[\"(iy+dd)\"]},\"27\":{\"mnemonic\":\"ld\",\"params\":[\"a\",\"sla\"],\"extra\":[\"(iy+dd)\"]},\"28\":{\"mnemonic\":\"ld\",\"params\":[\"b\",\"sra\"],\"extra\":[\"(iy+dd)\"]},\"29\":{\"mnemonic\":\"ld\",\"params\":[\"c\",\"sra\"],\"extra\":[\"(iy+dd)\"]},\"30\":{\"mnemonic\":\"ld\",\"params\":[\"b\",\"sll\"],\"extra\":[\"(iy+dd)\"]},\"31\":{\"mnemonic\":\"ld\",\"params\":[\"c\",\"sll\"],\"extra\":[\"(iy+dd)\"]},\"32\":{\"mnemonic\":\"ld\",\"params\":[\"d\",\"sll\"],\"extra\":[\"(iy+dd)\"]},\"33\":{\"mnemonic\":\"ld\",\"params\":[\"e\",\"sll\"],\"extra\":[\"(iy+dd)\"]},\"34\":{\"mnemonic\":\"ld\",\"params\":[\"h\",\"sll\"],\"extra\":[\"(iy+dd)\"]},\"35\":{\"mnemonic\":\"ld\",\"params\":[\"l\",\"sll\"],\"extra\":[\"(iy+dd)\"]},\"36\":{\"mnemonic\":\"sll\",\"params\":[\"(iy+dd)\"]},\"37\":{\"mnemonic\":\"ld\",\"params\":[\"a\",\"sll\"],\"extra\":[\"(iy+dd)\"]},\"38\":{\"mnemonic\":\"ld\",\"params\":[\"b\",\"srl\"],\"extra\":[\"(iy+dd)\"]},\"39\":{\"mnemonic\":\"ld\",\"params\":[\"c\",\"srl\"],\"extra\":[\"(iy+dd)\"]},\"40\":{\"mnemonic\":\"bit\",\"params\":[\"0\",\"(iy+dd)\"]},\"41\":{\"mnemonic\":\"bit\",\"params\":[\"0\",\"(iy+dd)\"]},\"42\":{\"mnemonic\":\"bit\",\"params\":[\"0\",\"(iy+dd)\"]},\"43\":{\"mnemonic\":\"bit\",\"params\":[\"0\",\"(iy+dd)\"]},\"44\":{\"mnemonic\":\"bit\",\"params\":[\"0\",\"(iy+dd)\"]},\"45\":{\"mnemonic\":\"bit\",\"params\":[\"0\",\"(iy+dd)\"]},\"46\":{\"mnemonic\":\"bit\",\"params\":[\"0\",\"(iy+dd)\"]},\"47\":{\"mnemonic\":\"bit\",\"params\":[\"0\",\"(iy+dd)\"]},\"48\":{\"mnemonic\":\"bit\",\"params\":[\"1\",\"(iy+dd)\"]},\"49\":{\"mnemonic\":\"bit\",\"params\":[\"1\",\"(iy+dd)\"]},\"50\":{\"mnemonic\":\"bit\",\"params\":[\"2\",\"(iy+dd)\"]},\"51\":{\"mnemonic\":\"bit\",\"params\":[\"2\",\"(iy+dd)\"]},\"52\":{\"mnemonic\":\"bit\",\"params\":[\"2\",\"(iy+dd)\"]},\"53\":{\"mnemonic\":\"bit\",\"params\":[\"2\",\"(iy+dd)\"]},\"54\":{\"mnemonic\":\"bit\",\"params\":[\"2\",\"(iy+dd)\"]},\"55\":{\"mnemonic\":\"bit\",\"params\":[\"2\",\"(iy+dd)\"]},\"56\":{\"mnemonic\":\"bit\",\"params\":[\"2\",\"(iy+dd)\"]},\"57\":{\"mnemonic\":\"bit\",\"params\":[\"2\",\"(iy+dd)\"]},\"58\":{\"mnemonic\":\"bit\",\"params\":[\"3\",\"(iy+dd)\"]},\"59\":{\"mnemonic\":\"bit\",\"params\":[\"3\",\"(iy+dd)\"]},\"60\":{\"mnemonic\":\"bit\",\"params\":[\"4\",\"(iy+dd)\"]},\"61\":{\"mnemonic\":\"bit\",\"params\":[\"4\",\"(iy+dd)\"]},\"62\":{\"mnemonic\":\"bit\",\"params\":[\"4\",\"(iy+dd)\"]},\"63\":{\"mnemonic\":\"bit\",\"params\":[\"4\",\"(iy+dd)\"]},\"64\":{\"mnemonic\":\"bit\",\"params\":[\"4\",\"(iy+dd)\"]},\"65\":{\"mnemonic\":\"bit\",\"params\":[\"4\",\"(iy+dd)\"]},\"66\":{\"mnemonic\":\"bit\",\"params\":[\"4\",\"(iy+dd)\"]},\"67\":{\"mnemonic\":\"bit\",\"params\":[\"4\",\"(iy+dd)\"]},\"68\":{\"mnemonic\":\"bit\",\"params\":[\"5\",\"(iy+dd)\"]},\"69\":{\"mnemonic\":\"bit\",\"params\":[\"5\",\"(iy+dd)\"]},\"70\":{\"mnemonic\":\"bit\",\"params\":[\"6\",\"(iy+dd)\"]},\"71\":{\"mnemonic\":\"bit\",\"params\":[\"6\",\"(iy+dd)\"]},\"72\":{\"mnemonic\":\"bit\",\"params\":[\"6\",\"(iy+dd)\"]},\"73\":{\"mnemonic\":\"bit\",\"params\":[\"6\",\"(iy+dd)\"]},\"74\":{\"mnemonic\":\"bit\",\"params\":[\"6\",\"(iy+dd)\"]},\"75\":{\"mnemonic\":\"bit\",\"params\":[\"6\",\"(iy+dd)\"]},\"76\":{\"mnemonic\":\"bit\",\"params\":[\"6\",\"(iy+dd)\"]},\"77\":{\"mnemonic\":\"bit\",\"params\":[\"6\",\"(iy+dd)\"]},\"78\":{\"mnemonic\":\"bit\",\"params\":[\"7\",\"(iy+dd)\"]},\"79\":{\"mnemonic\":\"bit\",\"params\":[\"7\",\"(iy+dd)\"]},\"80\":{\"mnemonic\":\"ld\",\"params\":[\"b\",\"res\"],\"extra\":[\"0\",\"(iy+dd)\"]},\"81\":{\"mnemonic\":\"ld\",\"params\":[\"c\",\"res\"],\"extra\":[\"0\",\"(iy+dd)\"]},\"82\":{\"mnemonic\":\"ld\",\"params\":[\"d\",\"res\"],\"extra\":[\"0\",\"(iy+dd)\"]},\"83\":{\"mnemonic\":\"ld\",\"params\":[\"e\",\"res\"],\"extra\":[\"0\",\"(iy+dd)\"]},\"84\":{\"mnemonic\":\"ld\",\"params\":[\"h\",\"res\"],\"extra\":[\"0\",\"(iy+dd)\"]},\"85\":{\"mnemonic\":\"ld\",\"params\":[\"l\",\"res\"],\"extra\":[\"0\",\"(iy+dd)\"]},\"86\":{\"mnemonic\":\"res\",\"params\":[\"0\",\"(iy+dd)\"]},\"87\":{\"mnemonic\":\"ld\",\"params\":[\"a\",\"res\"],\"extra\":[\"0\",\"(iy+dd)\"]},\"88\":{\"mnemonic\":\"ld\",\"params\":[\"b\",\"res\"],\"extra\":[\"1\",\"(iy+dd)\"]},\"89\":{\"mnemonic\":\"ld\",\"params\":[\"c\",\"res\"],\"extra\":[\"1\",\"(iy+dd)\"]},\"90\":{\"mnemonic\":\"ld\",\"params\":[\"b\",\"res\"],\"extra\":[\"2\",\"(iy+dd)\"]},\"91\":{\"mnemonic\":\"ld\",\"params\":[\"c\",\"res\"],\"extra\":[\"2\",\"(iy+dd)\"]},\"92\":{\"mnemonic\":\"ld\",\"params\":[\"d\",\"res\"],\"extra\":[\"2\",\"(iy+dd)\"]},\"93\":{\"mnemonic\":\"ld\",\"params\":[\"e\",\"res\"],\"extra\":[\"2\",\"(iy+dd)\"]},\"94\":{\"mnemonic\":\"ld\",\"params\":[\"h\",\"res\"],\"extra\":[\"2\",\"(iy+dd)\"]},\"95\":{\"mnemonic\":\"ld\",\"params\":[\"l\",\"res\"],\"extra\":[\"2\",\"(iy+dd)\"]},\"96\":{\"mnemonic\":\"res\",\"params\":[\"2\",\"(iy+dd)\"]},\"97\":{\"mnemonic\":\"ld\",\"params\":[\"a\",\"res\"],\"extra\":[\"2\",\"(iy+dd)\"]},\"98\":{\"mnemonic\":\"ld\",\"params\":[\"b\",\"res\"],\"extra\":[\"3\",\"(iy+dd)\"]},\"99\":{\"mnemonic\":\"ld\",\"params\":[\"c\",\"res\"],\"extra\":[\"3\",\"(iy+dd)\"]},\"a\":{\"mnemonic\":\"ld\",\"params\":[\"d\",\"rrc\"],\"extra\":[\"(iy+dd)\"]},\"b\":{\"mnemonic\":\"ld\",\"params\":[\"e\",\"rrc\"],\"extra\":[\"(iy+dd)\"]},\"c\":{\"mnemonic\":\"ld\",\"params\":[\"h\",\"rrc\"],\"extra\":[\"(iy+dd)\"]},\"d\":{\"mnemonic\":\"ld\",\"params\":[\"l\",\"rrc\"],\"extra\":[\"(iy+dd)\"]},\"e\":{\"mnemonic\":\"rrc\",\"params\":[\"(iy+dd)\"]},\"f\":{\"mnemonic\":\"ld\",\"params\":[\"a\",\"rrc\"],\"extra\":[\"(iy+dd)\"]},\"1a\":{\"mnemonic\":\"ld\",\"params\":[\"d\",\"rr\"],\"extra\":[\"(iy+dd)\"]},\"1b\":{\"mnemonic\":\"ld\",\"params\":[\"e\",\"rr\"],\"extra\":[\"(iy+dd)\"]},\"1c\":{\"mnemonic\":\"ld\",\"params\":[\"h\",\"rr\"],\"extra\":[\"(iy+dd)\"]},\"1d\":{\"mnemonic\":\"ld\",\"params\":[\"l\",\"rr\"],\"extra\":[\"(iy+dd)\"]},\"1e\":{\"mnemonic\":\"rr\",\"params\":[\"(iy+dd)\"]},\"1f\":{\"mnemonic\":\"ld\",\"params\":[\"a\",\"rr\"],\"extra\":[\"(iy+dd)\"]},\"2a\":{\"mnemonic\":\"ld\",\"params\":[\"d\",\"sra\"],\"extra\":[\"(iy+dd)\"]},\"2b\":{\"mnemonic\":\"ld\",\"params\":[\"e\",\"sra\"],\"extra\":[\"(iy+dd)\"]},\"2c\":{\"mnemonic\":\"ld\",\"params\":[\"h\",\"sra\"],\"extra\":[\"(iy+dd)\"]},\"2d\":{\"mnemonic\":\"ld\",\"params\":[\"l\",\"sra\"],\"extra\":[\"(iy+dd)\"]},\"2e\":{\"mnemonic\":\"sra\",\"params\":[\"(iy+dd)\"]},\"2f\":{\"mnemonic\":\"ld\",\"params\":[\"a\",\"sra\"],\"extra\":[\"(iy+dd)\"]},\"3a\":{\"mnemonic\":\"ld\",\"params\":[\"d\",\"srl\"],\"extra\":[\"(iy+dd)\"]},\"3b\":{\"mnemonic\":\"ld\",\"params\":[\"e\",\"srl\"],\"extra\":[\"(iy+dd)\"]},\"3c\":{\"mnemonic\":\"ld\",\"params\":[\"h\",\"srl\"],\"extra\":[\"(iy+dd)\"]},\"3d\":{\"mnemonic\":\"ld\",\"params\":[\"l\",\"srl\"],\"extra\":[\"(iy+dd)\"]},\"3e\":{\"mnemonic\":\"srl\",\"params\":[\"(iy+dd)\"]},\"3f\":{\"mnemonic\":\"ld\",\"params\":[\"a\",\"srl\"],\"extra\":[\"(iy+dd)\"]},\"4a\":{\"mnemonic\":\"bit\",\"params\":[\"1\",\"(iy+dd)\"]},\"4b\":{\"mnemonic\":\"bit\",\"params\":[\"1\",\"(iy+dd)\"]},\"4c\":{\"mnemonic\":\"bit\",\"params\":[\"1\",\"(iy+dd)\"]},\"4d\":{\"mnemonic\":\"bit\",\"params\":[\"1\",\"(iy+dd)\"]},\"4e\":{\"mnemonic\":\"bit\",\"params\":[\"1\",\"(iy+dd)\"]},\"4f\":{\"mnemonic\":\"bit\",\"params\":[\"1\",\"(iy+dd)\"]},\"5a\":{\"mnemonic\":\"bit\",\"params\":[\"3\",\"(iy+dd)\"]},\"5b\":{\"mnemonic\":\"bit\",\"params\":[\"3\",\"(iy+dd)\"]},\"5c\":{\"mnemonic\":\"bit\",\"params\":[\"3\",\"(iy+dd)\"]},\"5d\":{\"mnemonic\":\"bit\",\"params\":[\"3\",\"(iy+dd)\"]},\"5e\":{\"mnemonic\":\"bit\",\"params\":[\"3\",\"(iy+dd)\"]},\"5f\":{\"mnemonic\":\"bit\",\"params\":[\"3\",\"(iy+dd)\"]},\"6a\":{\"mnemonic\":\"bit\",\"params\":[\"5\",\"(iy+dd)\"]},\"6b\":{\"mnemonic\":\"bit\",\"params\":[\"5\",\"(iy+dd)\"]},\"6c\":{\"mnemonic\":\"bit\",\"params\":[\"5\",\"(iy+dd)\"]},\"6d\":{\"mnemonic\":\"bit\",\"params\":[\"5\",\"(iy+dd)\"]},\"6e\":{\"mnemonic\":\"bit\",\"params\":[\"5\",\"(iy+dd)\"]},\"6f\":{\"mnemonic\":\"bit\",\"params\":[\"5\",\"(iy+dd)\"]},\"7a\":{\"mnemonic\":\"bit\",\"params\":[\"7\",\"(iy+dd)\"]},\"7b\":{\"mnemonic\":\"bit\",\"params\":[\"7\",\"(iy+dd)\"]},\"7c\":{\"mnemonic\":\"bit\",\"params\":[\"7\",\"(iy+dd)\"]},\"7d\":{\"mnemonic\":\"bit\",\"params\":[\"7\",\"(iy+dd)\"]},\"7e\":{\"mnemonic\":\"bit\",\"params\":[\"7\",\"(iy+dd)\"]},\"7f\":{\"mnemonic\":\"bit\",\"params\":[\"7\",\"(iy+dd)\"]},\"8a\":{\"mnemonic\":\"ld\",\"params\":[\"d\",\"res\"],\"extra\":[\"1\",\"(iy+dd)\"]},\"8b\":{\"mnemonic\":\"ld\",\"params\":[\"e\",\"res\"],\"extra\":[\"1\",\"(iy+dd)\"]},\"8c\":{\"mnemonic\":\"ld\",\"params\":[\"h\",\"res\"],\"extra\":[\"1\",\"(iy+dd)\"]},\"8d\":{\"mnemonic\":\"ld\",\"params\":[\"l\",\"res\"],\"extra\":[\"1\",\"(iy+dd)\"]},\"8e\":{\"mnemonic\":\"res\",\"params\":[\"1\",\"(iy+dd)\"]},\"8f\":{\"mnemonic\":\"ld\",\"params\":[\"a\",\"res\"],\"extra\":[\"1\",\"(iy+dd)\"]},\"9a\":{\"mnemonic\":\"ld\",\"params\":[\"d\",\"res\"],\"extra\":[\"3\",\"(iy+dd)\"]},\"9b\":{\"mnemonic\":\"ld\",\"params\":[\"e\",\"res\"],\"extra\":[\"3\",\"(iy+dd)\"]},\"9c\":{\"mnemonic\":\"ld\",\"params\":[\"h\",\"res\"],\"extra\":[\"3\",\"(iy+dd)\"]},\"9d\":{\"mnemonic\":\"ld\",\"params\":[\"l\",\"res\"],\"extra\":[\"3\",\"(iy+dd)\"]},\"9e\":{\"mnemonic\":\"res\",\"params\":[\"3\",\"(iy+dd)\"]},\"9f\":{\"mnemonic\":\"ld\",\"params\":[\"a\",\"res\"],\"extra\":[\"3\",\"(iy+dd)\"]},\"a0\":{\"mnemonic\":\"ld\",\"params\":[\"b\",\"res\"],\"extra\":[\"4\",\"(iy+dd)\"]},\"a1\":{\"mnemonic\":\"ld\",\"params\":[\"c\",\"res\"],\"extra\":[\"4\",\"(iy+dd)\"]},\"a2\":{\"mnemonic\":\"ld\",\"params\":[\"d\",\"res\"],\"extra\":[\"4\",\"(iy+dd)\"]},\"a3\":{\"mnemonic\":\"ld\",\"params\":[\"e\",\"res\"],\"extra\":[\"4\",\"(iy+dd)\"]},\"a4\":{\"mnemonic\":\"ld\",\"params\":[\"h\",\"res\"],\"extra\":[\"4\",\"(iy+dd)\"]},\"a5\":{\"mnemonic\":\"ld\",\"params\":[\"l\",\"res\"],\"extra\":[\"4\",\"(iy+dd)\"]},\"a6\":{\"mnemonic\":\"res\",\"params\":[\"4\",\"(iy+dd)\"]},\"a7\":{\"mnemonic\":\"ld\",\"params\":[\"a\",\"res\"],\"extra\":[\"4\",\"(iy+dd)\"]},\"a8\":{\"mnemonic\":\"ld\",\"params\":[\"b\",\"res\"],\"extra\":[\"5\",\"(iy+dd)\"]},\"a9\":{\"mnemonic\":\"ld\",\"params\":[\"c\",\"res\"],\"extra\":[\"5\",\"(iy+dd)\"]},\"aa\":{\"mnemonic\":\"ld\",\"params\":[\"d\",\"res\"],\"extra\":[\"5\",\"(iy+dd)\"]},\"ab\":{\"mnemonic\":\"ld\",\"params\":[\"e\",\"res\"],\"extra\":[\"5\",\"(iy+dd)\"]},\"ac\":{\"mnemonic\":\"ld\",\"params\":[\"h\",\"res\"],\"extra\":[\"5\",\"(iy+dd)\"]},\"ad\":{\"mnemonic\":\"ld\",\"params\":[\"l\",\"res\"],\"extra\":[\"5\",\"(iy+dd)\"]},\"ae\":{\"mnemonic\":\"res\",\"params\":[\"5\",\"(iy+dd)\"]},\"af\":{\"mnemonic\":\"ld\",\"params\":[\"a\",\"res\"],\"extra\":[\"5\",\"(iy+dd)\"]},\"b0\":{\"mnemonic\":\"ld\",\"params\":[\"b\",\"res\"],\"extra\":[\"6\",\"(iy+dd)\"]},\"b1\":{\"mnemonic\":\"ld\",\"params\":[\"c\",\"res\"],\"extra\":[\"6\",\"(iy+dd)\"]},\"b2\":{\"mnemonic\":\"ld\",\"params\":[\"d\",\"res\"],\"extra\":[\"6\",\"(iy+dd)\"]},\"b3\":{\"mnemonic\":\"ld\",\"params\":[\"e\",\"res\"],\"extra\":[\"6\",\"(iy+dd)\"]},\"b4\":{\"mnemonic\":\"ld\",\"params\":[\"h\",\"res\"],\"extra\":[\"6\",\"(iy+dd)\"]},\"b5\":{\"mnemonic\":\"ld\",\"params\":[\"l\",\"res\"],\"extra\":[\"6\",\"(iy+dd)\"]},\"b6\":{\"mnemonic\":\"res\",\"params\":[\"6\",\"(iy+dd)\"]},\"b7\":{\"mnemonic\":\"ld\",\"params\":[\"a\",\"res\"],\"extra\":[\"6\",\"(iy+dd)\"]},\"b8\":{\"mnemonic\":\"ld\",\"params\":[\"b\",\"res\"],\"extra\":[\"7\",\"(iy+dd)\"]},\"b9\":{\"mnemonic\":\"ld\",\"params\":[\"c\",\"res\"],\"extra\":[\"7\",\"(iy+dd)\"]},\"ba\":{\"mnemonic\":\"ld\",\"params\":[\"d\",\"res\"],\"extra\":[\"7\",\"(iy+dd)\"]},\"bb\":{\"mnemonic\":\"ld\",\"params\":[\"e\",\"res\"],\"extra\":[\"7\",\"(iy+dd)\"]},\"bc\":{\"mnemonic\":\"ld\",\"params\":[\"h\",\"res\"],\"extra\":[\"7\",\"(iy+dd)\"]},\"bd\":{\"mnemonic\":\"ld\",\"params\":[\"l\",\"res\"],\"extra\":[\"7\",\"(iy+dd)\"]},\"be\":{\"mnemonic\":\"res\",\"params\":[\"7\",\"(iy+dd)\"]},\"bf\":{\"mnemonic\":\"ld\",\"params\":[\"a\",\"res\"],\"extra\":[\"7\",\"(iy+dd)\"]},\"c0\":{\"mnemonic\":\"ld\",\"params\":[\"b\",\"set\"],\"extra\":[\"0\",\"(iy+dd)\"]},\"c1\":{\"mnemonic\":\"ld\",\"params\":[\"c\",\"set\"],\"extra\":[\"0\",\"(iy+dd)\"]},\"c2\":{\"mnemonic\":\"ld\",\"params\":[\"d\",\"set\"],\"extra\":[\"0\",\"(iy+dd)\"]},\"c3\":{\"mnemonic\":\"ld\",\"params\":[\"e\",\"set\"],\"extra\":[\"0\",\"(iy+dd)\"]},\"c4\":{\"mnemonic\":\"ld\",\"params\":[\"h\",\"set\"],\"extra\":[\"0\",\"(iy+dd)\"]},\"c5\":{\"mnemonic\":\"ld\",\"params\":[\"l\",\"set\"],\"extra\":[\"0\",\"(iy+dd)\"]},\"c6\":{\"mnemonic\":\"set\",\"params\":[\"0\",\"(iy+dd)\"]},\"c7\":{\"mnemonic\":\"ld\",\"params\":[\"a\",\"set\"],\"extra\":[\"0\",\"(iy+dd)\"]},\"c8\":{\"mnemonic\":\"ld\",\"params\":[\"b\",\"set\"],\"extra\":[\"1\",\"(iy+dd)\"]},\"c9\":{\"mnemonic\":\"ld\",\"params\":[\"c\",\"set\"],\"extra\":[\"1\",\"(iy+dd)\"]},\"ca\":{\"mnemonic\":\"ld\",\"params\":[\"d\",\"set\"],\"extra\":[\"1\",\"(iy+dd)\"]},\"cb\":{\"mnemonic\":\"ld\",\"params\":[\"e\",\"set\"],\"extra\":[\"1\",\"(iy+dd)\"]},\"cc\":{\"mnemonic\":\"ld\",\"params\":[\"h\",\"set\"],\"extra\":[\"1\",\"(iy+dd)\"]},\"cd\":{\"mnemonic\":\"ld\",\"params\":[\"l\",\"set\"],\"extra\":[\"1\",\"(iy+dd)\"]},\"ce\":{\"mnemonic\":\"set\",\"params\":[\"1\",\"(iy+dd)\"]},\"cf\":{\"mnemonic\":\"ld\",\"params\":[\"a\",\"set\"],\"extra\":[\"1\",\"(iy+dd)\"]},\"d0\":{\"mnemonic\":\"ld\",\"params\":[\"b\",\"set\"],\"extra\":[\"2\",\"(iy+dd)\"]},\"d1\":{\"mnemonic\":\"ld\",\"params\":[\"c\",\"set\"],\"extra\":[\"2\",\"(iy+dd)\"]},\"d2\":{\"mnemonic\":\"ld\",\"params\":[\"d\",\"set\"],\"extra\":[\"2\",\"(iy+dd)\"]},\"d3\":{\"mnemonic\":\"ld\",\"params\":[\"e\",\"set\"],\"extra\":[\"2\",\"(iy+dd)\"]},\"d4\":{\"mnemonic\":\"ld\",\"params\":[\"h\",\"set\"],\"extra\":[\"2\",\"(iy+dd)\"]},\"d5\":{\"mnemonic\":\"ld\",\"params\":[\"l\",\"set\"],\"extra\":[\"2\",\"(iy+dd)\"]},\"d6\":{\"mnemonic\":\"set\",\"params\":[\"2\",\"(iy+dd)\"]},\"d7\":{\"mnemonic\":\"ld\",\"params\":[\"a\",\"set\"],\"extra\":[\"2\",\"(iy+dd)\"]},\"d8\":{\"mnemonic\":\"ld\",\"params\":[\"b\",\"set\"],\"extra\":[\"3\",\"(iy+dd)\"]},\"d9\":{\"mnemonic\":\"ld\",\"params\":[\"c\",\"set\"],\"extra\":[\"3\",\"(iy+dd)\"]},\"da\":{\"mnemonic\":\"ld\",\"params\":[\"d\",\"set\"],\"extra\":[\"3\",\"(iy+dd)\"]},\"db\":{\"mnemonic\":\"ld\",\"params\":[\"e\",\"set\"],\"extra\":[\"3\",\"(iy+dd)\"]},\"dc\":{\"mnemonic\":\"ld\",\"params\":[\"h\",\"set\"],\"extra\":[\"3\",\"(iy+dd)\"]},\"dd\":{\"mnemonic\":\"ld\",\"params\":[\"l\",\"set\"],\"extra\":[\"3\",\"(iy+dd)\"]},\"de\":{\"mnemonic\":\"set\",\"params\":[\"3\",\"(iy+dd)\"]},\"df\":{\"mnemonic\":\"ld\",\"params\":[\"a\",\"set\"],\"extra\":[\"3\",\"(iy+dd)\"]},\"e0\":{\"mnemonic\":\"ld\",\"params\":[\"b\",\"set\"],\"extra\":[\"4\",\"(iy+dd)\"]},\"e1\":{\"mnemonic\":\"ld\",\"params\":[\"c\",\"set\"],\"extra\":[\"4\",\"(iy+dd)\"]},\"e2\":{\"mnemonic\":\"ld\",\"params\":[\"d\",\"set\"],\"extra\":[\"4\",\"(iy+dd)\"]},\"e3\":{\"mnemonic\":\"ld\",\"params\":[\"e\",\"set\"],\"extra\":[\"4\",\"(iy+dd)\"]},\"e4\":{\"mnemonic\":\"ld\",\"params\":[\"h\",\"set\"],\"extra\":[\"4\",\"(iy+dd)\"]},\"e5\":{\"mnemonic\":\"ld\",\"params\":[\"l\",\"set\"],\"extra\":[\"4\",\"(iy+dd)\"]},\"e6\":{\"mnemonic\":\"set\",\"params\":[\"4\",\"(iy+dd)\"]},\"e7\":{\"mnemonic\":\"ld\",\"params\":[\"a\",\"set\"],\"extra\":[\"4\",\"(iy+dd)\"]},\"e8\":{\"mnemonic\":\"ld\",\"params\":[\"b\",\"set\"],\"extra\":[\"5\",\"(iy+dd)\"]},\"e9\":{\"mnemonic\":\"ld\",\"params\":[\"c\",\"set\"],\"extra\":[\"5\",\"(iy+dd)\"]},\"ea\":{\"mnemonic\":\"ld\",\"params\":[\"d\",\"set\"],\"extra\":[\"5\",\"(iy+dd)\"]},\"eb\":{\"mnemonic\":\"ld\",\"params\":[\"e\",\"set\"],\"extra\":[\"5\",\"(iy+dd)\"]},\"ec\":{\"mnemonic\":\"ld\",\"params\":[\"h\",\"set\"],\"extra\":[\"5\",\"(iy+dd)\"]},\"ed\":{\"mnemonic\":\"ld\",\"params\":[\"l\",\"set\"],\"extra\":[\"5\",\"(iy+dd)\"]},\"ee\":{\"mnemonic\":\"set\",\"params\":[\"5\",\"(iy+dd)\"]},\"ef\":{\"mnemonic\":\"ld\",\"params\":[\"a\",\"set\"],\"extra\":[\"5\",\"(iy+dd)\"]},\"f0\":{\"mnemonic\":\"ld\",\"params\":[\"b\",\"set\"],\"extra\":[\"6\",\"(iy+dd)\"]},\"f1\":{\"mnemonic\":\"ld\",\"params\":[\"c\",\"set\"],\"extra\":[\"6\",\"(iy+dd)\"]},\"f2\":{\"mnemonic\":\"ld\",\"params\":[\"d\",\"set\"],\"extra\":[\"6\",\"(iy+dd)\"]},\"f3\":{\"mnemonic\":\"ld\",\"params\":[\"e\",\"set\"],\"extra\":[\"6\",\"(iy+dd)\"]},\"f4\":{\"mnemonic\":\"ld\",\"params\":[\"h\",\"set\"],\"extra\":[\"6\",\"(iy+dd)\"]},\"f5\":{\"mnemonic\":\"ld\",\"params\":[\"l\",\"set\"],\"extra\":[\"6\",\"(iy+dd)\"]},\"f6\":{\"mnemonic\":\"set\",\"params\":[\"6\",\"(iy+dd)\"]},\"f7\":{\"mnemonic\":\"ld\",\"params\":[\"a\",\"set\"],\"extra\":[\"6\",\"(iy+dd)\"]},\"f8\":{\"mnemonic\":\"ld\",\"params\":[\"b\",\"set\"],\"extra\":[\"7\",\"(iy+dd)\"]},\"f9\":{\"mnemonic\":\"ld\",\"params\":[\"c\",\"set\"],\"extra\":[\"7\",\"(iy+dd)\"]},\"fa\":{\"mnemonic\":\"ld\",\"params\":[\"d\",\"set\"],\"extra\":[\"7\",\"(iy+dd)\"]},\"fb\":{\"mnemonic\":\"ld\",\"params\":[\"e\",\"set\"],\"extra\":[\"7\",\"(iy+dd)\"]},\"fc\":{\"mnemonic\":\"ld\",\"params\":[\"h\",\"set\"],\"extra\":[\"7\",\"(iy+dd)\"]},\"fd\":{\"mnemonic\":\"ld\",\"params\":[\"l\",\"set\"],\"extra\":[\"7\",\"(iy+dd)\"]},\"fe\":{\"mnemonic\":\"set\",\"params\":[\"7\",\"(iy+dd)\"]},\"ff\":{\"mnemonic\":\"ld\",\"params\":[\"a\",\"set\"],\"extra\":[\"7\",\"(iy+dd)\"]}}},\"e1\":{\"mnemonic\":\"pop\",\"params\":[\"iy\"]},\"e3\":{\"mnemonic\":\"ex\",\"params\":[\"(sp)\",\"iy\"]},\"e5\":{\"mnemonic\":\"push\",\"params\":[\"iy\"]},\"e9\":{\"mnemonic\":\"jp\",\"params\":[\"iy\"]},\"f9\":{\"mnemonic\":\"ld\",\"params\":[\"sp\",\"iy\"]}}},\"fe\":{\"mnemonic\":\"cp\",\"params\":[\"nn\"]},\"ff\":{\"mnemonic\":\"rst\",\"params\":[\"38\"]}}");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var management_1 = __webpack_require__(7);
var subscription_1 = __webpack_require__(3);
/**
 * Base class for implementation of the dispatcher. It facilitates the subscribe
 * and unsubscribe methods based on generic handlers. The TEventType specifies
 * the type of event that should be exposed. Use the asEvent to expose the
 * dispatcher as event.
 */
var DispatcherBase = /** @class */ (function () {
    function DispatcherBase() {
        this._wrap = new DispatcherWrapper(this);
        this._subscriptions = new Array();
    }
    Object.defineProperty(DispatcherBase.prototype, "count", {
        /**
         * Returns the number of subscriptions.
         *
         * @readonly
         *
         * @memberOf DispatcherBase
         */
        get: function () {
            return this._subscriptions.length;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Subscribe to the event dispatcher.
     * @param fn The event handler that is called when the event is dispatched.
     * @returns A function that unsubscribes the event handler from the event.
     */
    DispatcherBase.prototype.subscribe = function (fn) {
        var _this = this;
        if (fn) {
            this._subscriptions.push(new subscription_1.Subscription(fn, false));
        }
        return function () {
            _this.unsubscribe(fn);
        };
    };
    /**
     * Subscribe to the event dispatcher.
     * @param fn The event handler that is called when the event is dispatched.
     * @returns A function that unsubscribes the event handler from the event.
     */
    DispatcherBase.prototype.sub = function (fn) {
        return this.subscribe(fn);
    };
    /**
     * Subscribe once to the event with the specified name.
     * @param fn The event handler that is called when the event is dispatched.
     * @returns A function that unsubscribes the event handler from the event.
     */
    DispatcherBase.prototype.one = function (fn) {
        var _this = this;
        if (fn) {
            this._subscriptions.push(new subscription_1.Subscription(fn, true));
        }
        return function () {
            _this.unsubscribe(fn);
        };
    };
    /**
     * Checks it the event has a subscription for the specified handler.
     * @param fn The event handler.
     */
    DispatcherBase.prototype.has = function (fn) {
        if (!fn)
            return false;
        return this._subscriptions.some(function (sub) { return sub.handler == fn; });
    };
    /**
     * Unsubscribes the handler from the dispatcher.
     * @param fn The event handler.
     */
    DispatcherBase.prototype.unsubscribe = function (fn) {
        if (!fn)
            return;
        for (var i = 0; i < this._subscriptions.length; i++) {
            if (this._subscriptions[i].handler == fn) {
                this._subscriptions.splice(i, 1);
                break;
            }
        }
    };
    /**
     * Unsubscribes the handler from the dispatcher.
     * @param fn The event handler.
     */
    DispatcherBase.prototype.unsub = function (fn) {
        this.unsubscribe(fn);
    };
    /**
     * Generic dispatch will dispatch the handlers with the given arguments.
     *
     * @protected
     * @param {boolean} executeAsync True if the even should be executed async.
     * @param {*} The scope the scope of the event. The scope becomes the "this" for handler.
     * @param {IArguments} args The arguments for the event.
     */
    DispatcherBase.prototype._dispatch = function (executeAsync, scope, args) {
        var _this = this;
        var _loop_1 = function (sub) {
            var ev = new management_1.EventManagement(function () { return _this.unsub(sub.handler); });
            var nargs = Array.prototype.slice.call(args);
            nargs.push(ev);
            sub.execute(executeAsync, scope, nargs);
            //cleanup subs that are no longer needed
            this_1.cleanup(sub);
            if (!executeAsync && ev.propagationStopped) {
                return "break";
            }
        };
        var this_1 = this;
        //execute on a copy because of bug #9
        for (var _i = 0, _a = __spreadArrays(this._subscriptions); _i < _a.length; _i++) {
            var sub = _a[_i];
            var state_1 = _loop_1(sub);
            if (state_1 === "break")
                break;
        }
    };
    /**
     * Cleans up subs that ran and should run only once.
     */
    DispatcherBase.prototype.cleanup = function (sub) {
        if (sub.isOnce && sub.isExecuted) {
            var i = this._subscriptions.indexOf(sub);
            if (i > -1) {
                this._subscriptions.splice(i, 1);
            }
        }
    };
    /**
     * Creates an event from the dispatcher. Will return the dispatcher
     * in a wrapper. This will prevent exposure of any dispatcher methods.
     */
    DispatcherBase.prototype.asEvent = function () {
        return this._wrap;
    };
    /**
     * Clears all the subscriptions.
     */
    DispatcherBase.prototype.clear = function () {
        this._subscriptions.splice(0, this._subscriptions.length);
    };
    return DispatcherBase;
}());
exports.DispatcherBase = DispatcherBase;
/**
 * Base class for event lists classes. Implements the get and remove.
 */
var EventListBase = /** @class */ (function () {
    function EventListBase() {
        this._events = {};
    }
    /**
     * Gets the dispatcher associated with the name.
     * @param name The name of the event.
     */
    EventListBase.prototype.get = function (name) {
        var event = this._events[name];
        if (event) {
            return event;
        }
        event = this.createDispatcher();
        this._events[name] = event;
        return event;
    };
    /**
     * Removes the dispatcher associated with the name.
     * @param name The name of the event.
     */
    EventListBase.prototype.remove = function (name) {
        delete this._events[name];
    };
    return EventListBase;
}());
exports.EventListBase = EventListBase;
/**
 * Hides the implementation of the event dispatcher. Will expose methods that
 * are relevent to the event.
 */
var DispatcherWrapper = /** @class */ (function () {
    /**
     * Creates a new EventDispatcherWrapper instance.
     * @param dispatcher The dispatcher.
     */
    function DispatcherWrapper(dispatcher) {
        this._subscribe = function (fn) { return dispatcher.subscribe(fn); };
        this._unsubscribe = function (fn) { return dispatcher.unsubscribe(fn); };
        this._one = function (fn) { return dispatcher.one(fn); };
        this._has = function (fn) { return dispatcher.has(fn); };
        this._clear = function () { return dispatcher.clear(); };
        this._count = function () { return dispatcher.count; };
    }
    Object.defineProperty(DispatcherWrapper.prototype, "count", {
        /**
         * Returns the number of subscriptions.
         *
         * @readonly
         * @type {number}
         * @memberOf DispatcherWrapper
         */
        get: function () {
            return this._count();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Subscribe to the event dispatcher.
     * @param fn The event handler that is called when the event is dispatched.
     * @returns A function that unsubscribes the event handler from the event.
     */
    DispatcherWrapper.prototype.subscribe = function (fn) {
        return this._subscribe(fn);
    };
    /**
     * Subscribe to the event dispatcher.
     * @param fn The event handler that is called when the event is dispatched.
     * @returns A function that unsubscribes the event handler from the event.
     */
    DispatcherWrapper.prototype.sub = function (fn) {
        return this.subscribe(fn);
    };
    /**
     * Unsubscribe from the event dispatcher.
     * @param fn The event handler that is called when the event is dispatched.
     */
    DispatcherWrapper.prototype.unsubscribe = function (fn) {
        this._unsubscribe(fn);
    };
    /**
     * Unsubscribe from the event dispatcher.
     * @param fn The event handler that is called when the event is dispatched.
     */
    DispatcherWrapper.prototype.unsub = function (fn) {
        this.unsubscribe(fn);
    };
    /**
     * Subscribe once to the event with the specified name.
     * @param fn The event handler that is called when the event is dispatched.
     */
    DispatcherWrapper.prototype.one = function (fn) {
        return this._one(fn);
    };
    /**
     * Checks it the event has a subscription for the specified handler.
     * @param fn The event handler.
     */
    DispatcherWrapper.prototype.has = function (fn) {
        return this._has(fn);
    };
    /**
     * Clears all the subscriptions.
     */
    DispatcherWrapper.prototype.clear = function () {
        this._clear();
    };
    return DispatcherWrapper;
}());
exports.DispatcherWrapper = DispatcherWrapper;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Allows the user to interact with the event.
 *
 * @class EventManagement
 * @implements {IEventManagement}
 */
var EventManagement = /** @class */ (function () {
    function EventManagement(unsub) {
        this.unsub = unsub;
        this.propagationStopped = false;
    }
    EventManagement.prototype.stopPropagation = function () {
        this.propagationStopped = true;
    };
    return EventManagement;
}());
exports.EventManagement = EventManagement;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var events_1 = __webpack_require__(9);
exports.EventDispatcher = events_1.EventDispatcher;
exports.EventHandlingBase = events_1.EventHandlingBase;
exports.EventList = events_1.EventList;
exports.NonUniformEventList = events_1.NonUniformEventList;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ste_core_1 = __webpack_require__(1);
/**
 * Dispatcher implementation for events. Can be used to subscribe, unsubscribe
 * or dispatch events. Use the ToEvent() method to expose the event.
 */
var EventDispatcher = /** @class */ (function (_super) {
    __extends(EventDispatcher, _super);
    /**
     * Creates a new EventDispatcher instance.
     */
    function EventDispatcher() {
        return _super.call(this) || this;
    }
    /**
     * Dispatches the event.
     * @param sender The sender.
     * @param args The arguments object.
     */
    EventDispatcher.prototype.dispatch = function (sender, args) {
        this._dispatch(false, this, arguments);
    };
    /**
     * Dispatches the events thread.
     * @param sender The sender.
     * @param args The arguments object.
     */
    EventDispatcher.prototype.dispatchAsync = function (sender, args) {
        this._dispatch(true, this, arguments);
    };
    /**
     * Creates an event from the dispatcher. Will return the dispatcher
     * in a wrapper. This will prevent exposure of any dispatcher methods.
     */
    EventDispatcher.prototype.asEvent = function () {
        return _super.prototype.asEvent.call(this);
    };
    return EventDispatcher;
}(ste_core_1.DispatcherBase));
exports.EventDispatcher = EventDispatcher;
/**
 * Similar to EventList, but instead of TArgs, a map of event names ang argument types is provided with TArgsMap.
 */
var NonUniformEventList = /** @class */ (function () {
    function NonUniformEventList() {
        this._events = {};
    }
    /**
     * Gets the dispatcher associated with the name.
     * @param name The name of the event.
     */
    NonUniformEventList.prototype.get = function (name) {
        if (this._events[name]) {
            // @TODO avoid typecasting. Not sure why TS thinks this._events[name] could still be undefined.
            return this._events[name];
        }
        var event = this.createDispatcher();
        this._events[name] = event;
        return event;
    };
    /**
     * Removes the dispatcher associated with the name.
     * @param name The name of the event.
     */
    NonUniformEventList.prototype.remove = function (name) {
        delete this._events[name];
    };
    /**
     * Creates a new dispatcher instance.
     */
    NonUniformEventList.prototype.createDispatcher = function () {
        return new EventDispatcher();
    };
    return NonUniformEventList;
}());
exports.NonUniformEventList = NonUniformEventList;
/**
 * Storage class for multiple events that are accessible by name.
 * Events dispatchers are automatically created.
 */
var EventList = /** @class */ (function (_super) {
    __extends(EventList, _super);
    /**
     * Creates a new EventList instance.
     */
    function EventList() {
        return _super.call(this) || this;
    }
    /**
     * Creates a new dispatcher instance.
     */
    EventList.prototype.createDispatcher = function () {
        return new EventDispatcher();
    };
    return EventList;
}(ste_core_1.EventListBase));
exports.EventList = EventList;
/**
 * Extends objects with event handling capabilities.
 */
var EventHandlingBase = /** @class */ (function () {
    function EventHandlingBase() {
        this._events = new EventList();
    }
    Object.defineProperty(EventHandlingBase.prototype, "events", {
        /**
         * Gets the list with all the event dispatchers.
         */
        get: function () {
            return this._events;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Subscribes to the event with the specified name.
     * @param name The name of the event.
     * @param fn The event handler.
     */
    EventHandlingBase.prototype.subscribe = function (name, fn) {
        this._events.get(name).subscribe(fn);
    };
    /**
     * Subscribes to the event with the specified name.
     * @param name The name of the event.
     * @param fn The event handler.
     */
    EventHandlingBase.prototype.sub = function (name, fn) {
        this.subscribe(name, fn);
    };
    /**
     * Unsubscribes from the event with the specified name.
     * @param name The name of the event.
     * @param fn The event handler.
     */
    EventHandlingBase.prototype.unsubscribe = function (name, fn) {
        this._events.get(name).unsubscribe(fn);
    };
    /**
     * Unsubscribes from the event with the specified name.
     * @param name The name of the event.
     * @param fn The event handler.
     */
    EventHandlingBase.prototype.unsub = function (name, fn) {
        this.unsubscribe(name, fn);
    };
    /**
     * Subscribes to once the event with the specified name.
     * @param name The name of the event.
     * @param fn The event handler.
     */
    EventHandlingBase.prototype.one = function (name, fn) {
        this._events.get(name).one(fn);
    };
    /**
     * Subscribes to once the event with the specified name.
     * @param name The name of the event.
     * @param fn The event handler.
     */
    EventHandlingBase.prototype.has = function (name, fn) {
        return this._events.get(name).has(fn);
    };
    return EventHandlingBase;
}());
exports.EventHandlingBase = EventHandlingBase;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var simple_events_1 = __webpack_require__(11);
exports.SimpleEventDispatcher = simple_events_1.SimpleEventDispatcher;
exports.SimpleEventHandlingBase = simple_events_1.SimpleEventHandlingBase;
exports.SimpleEventList = simple_events_1.SimpleEventList;
exports.NonUniformSimpleEventList = simple_events_1.NonUniformSimpleEventList;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ste_core_1 = __webpack_require__(1);
/**
 * The dispatcher handles the storage of subsciptions and facilitates
 * subscription, unsubscription and dispatching of a simple event
 */
var SimpleEventDispatcher = /** @class */ (function (_super) {
    __extends(SimpleEventDispatcher, _super);
    /**
     * Creates a new SimpleEventDispatcher instance.
     */
    function SimpleEventDispatcher() {
        return _super.call(this) || this;
    }
    /**
     * Dispatches the event.
     * @param args The arguments object.
     */
    SimpleEventDispatcher.prototype.dispatch = function (args) {
        this._dispatch(false, this, arguments);
    };
    /**
     * Dispatches the events thread.
     * @param args The arguments object.
     */
    SimpleEventDispatcher.prototype.dispatchAsync = function (args) {
        this._dispatch(true, this, arguments);
    };
    /**
     * Creates an event from the dispatcher. Will return the dispatcher
     * in a wrapper. This will prevent exposure of any dispatcher methods.
     */
    SimpleEventDispatcher.prototype.asEvent = function () {
        return _super.prototype.asEvent.call(this);
    };
    return SimpleEventDispatcher;
}(ste_core_1.DispatcherBase));
exports.SimpleEventDispatcher = SimpleEventDispatcher;
/**
 * Similar to EventList, but instead of TArgs, a map of event names ang argument types is provided with TArgsMap.
 */
var NonUniformSimpleEventList = /** @class */ (function () {
    function NonUniformSimpleEventList() {
        this._events = {};
    }
    /**
     * Gets the dispatcher associated with the name.
     * @param name The name of the event.
     */
    NonUniformSimpleEventList.prototype.get = function (name) {
        if (this._events[name]) {
            // @TODO avoid typecasting. Not sure why TS thinks this._events[name] could still be undefined.
            return this._events[name];
        }
        var event = this.createDispatcher();
        this._events[name] = event;
        return event;
    };
    /**
     * Removes the dispatcher associated with the name.
     * @param name The name of the event.
     */
    NonUniformSimpleEventList.prototype.remove = function (name) {
        delete this._events[name];
    };
    /**
     * Creates a new dispatcher instance.
     */
    NonUniformSimpleEventList.prototype.createDispatcher = function () {
        return new SimpleEventDispatcher();
    };
    return NonUniformSimpleEventList;
}());
exports.NonUniformSimpleEventList = NonUniformSimpleEventList;
/**
 * Storage class for multiple simple events that are accessible by name.
 * Events dispatchers are automatically created.
 */
var SimpleEventList = /** @class */ (function (_super) {
    __extends(SimpleEventList, _super);
    /**
     * Creates a new SimpleEventList instance.
     */
    function SimpleEventList() {
        return _super.call(this) || this;
    }
    /**
     * Creates a new dispatcher instance.
     */
    SimpleEventList.prototype.createDispatcher = function () {
        return new SimpleEventDispatcher();
    };
    return SimpleEventList;
}(ste_core_1.EventListBase));
exports.SimpleEventList = SimpleEventList;
/**
 * Extends objects with simple event handling capabilities.
 */
var SimpleEventHandlingBase = /** @class */ (function () {
    function SimpleEventHandlingBase() {
        this._events = new SimpleEventList();
    }
    Object.defineProperty(SimpleEventHandlingBase.prototype, "events", {
        get: function () {
            return this._events;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Subscribes to the event with the specified name.
     * @param name The name of the event.
     * @param fn The event handler.
     */
    SimpleEventHandlingBase.prototype.subscribe = function (name, fn) {
        this._events.get(name).subscribe(fn);
    };
    /**
     * Subscribes to the event with the specified name.
     * @param name The name of the event.
     * @param fn The event handler.
     */
    SimpleEventHandlingBase.prototype.sub = function (name, fn) {
        this.subscribe(name, fn);
    };
    /**
     * Subscribes once to the event with the specified name.
     * @param name The name of the event.
     * @param fn The event handler.
     */
    SimpleEventHandlingBase.prototype.one = function (name, fn) {
        this._events.get(name).one(fn);
    };
    /**
     * Checks it the event has a subscription for the specified handler.
     * @param name The name of the event.
     * @param fn The event handler.
     */
    SimpleEventHandlingBase.prototype.has = function (name, fn) {
        return this._events.get(name).has(fn);
    };
    /**
     * Unsubscribes from the event with the specified name.
     * @param name The name of the event.
     * @param fn The event handler.
     */
    SimpleEventHandlingBase.prototype.unsubscribe = function (name, fn) {
        this._events.get(name).unsubscribe(fn);
    };
    /**
     * Unsubscribes from the event with the specified name.
     * @param name The name of the event.
     * @param fn The event handler.
     */
    SimpleEventHandlingBase.prototype.unsub = function (name, fn) {
        this.unsubscribe(name, fn);
    };
    return SimpleEventHandlingBase;
}());
exports.SimpleEventHandlingBase = SimpleEventHandlingBase;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var signals_1 = __webpack_require__(13);
exports.SignalDispatcher = signals_1.SignalDispatcher;
exports.SignalHandlingBase = signals_1.SignalHandlingBase;
exports.SignalList = signals_1.SignalList;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ste_core_1 = __webpack_require__(1);
/**
 * The dispatcher handles the storage of subsciptions and facilitates
 * subscription, unsubscription and dispatching of a signal event.
 */
var SignalDispatcher = /** @class */ (function (_super) {
    __extends(SignalDispatcher, _super);
    /**
     * Creates a new SignalDispatcher instance.
     */
    function SignalDispatcher() {
        return _super.call(this) || this;
    }
    /**
     * Dispatches the signal.
     */
    SignalDispatcher.prototype.dispatch = function () {
        this._dispatch(false, this, arguments);
    };
    /**
     * Dispatches the signal threaded.
     */
    SignalDispatcher.prototype.dispatchAsync = function () {
        this._dispatch(true, this, arguments);
    };
    /**
     * Creates an event from the dispatcher. Will return the dispatcher
     * in a wrapper. This will prevent exposure of any dispatcher methods.
     */
    SignalDispatcher.prototype.asEvent = function () {
        return _super.prototype.asEvent.call(this);
    };
    return SignalDispatcher;
}(ste_core_1.DispatcherBase));
exports.SignalDispatcher = SignalDispatcher;
/**
 * Storage class for multiple signal events that are accessible by name.
 * Events dispatchers are automatically created.
 */
var SignalList = /** @class */ (function (_super) {
    __extends(SignalList, _super);
    /**
     * Creates a new SignalList instance.
     */
    function SignalList() {
        return _super.call(this) || this;
    }
    /**
     * Creates a new dispatcher instance.
     */
    SignalList.prototype.createDispatcher = function () {
        return new SignalDispatcher();
    };
    return SignalList;
}(ste_core_1.EventListBase));
exports.SignalList = SignalList;
/**
 * Extends objects with signal event handling capabilities.
 */
var SignalHandlingBase = /** @class */ (function () {
    function SignalHandlingBase() {
        this._events = new SignalList();
    }
    Object.defineProperty(SignalHandlingBase.prototype, "events", {
        get: function () {
            return this._events;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Subscribes once to the event with the specified name.
     * @param name The name of the event.
     * @param fn The event handler.
     */
    SignalHandlingBase.prototype.one = function (name, fn) {
        this._events.get(name).one(fn);
    };
    /**
     * Checks it the event has a subscription for the specified handler.
     * @param name The name of the event.
     * @param fn The event handler.
     */
    SignalHandlingBase.prototype.has = function (name, fn) {
        return this._events.get(name).has(fn);
    };
    /**
     * Subscribes to the event with the specified name.
     * @param name The name of the event.
     * @param fn The event handler.
     */
    SignalHandlingBase.prototype.subscribe = function (name, fn) {
        this._events.get(name).subscribe(fn);
    };
    /**
     * Subscribes to the event with the specified name.
     * @param name The name of the event.
     * @param fn The event handler.
     */
    SignalHandlingBase.prototype.sub = function (name, fn) {
        this.subscribe(name, fn);
    };
    /**
     * Unsubscribes from the event with the specified name.
     * @param name The name of the event.
     * @param fn The event handler.
     */
    SignalHandlingBase.prototype.unsubscribe = function (name, fn) {
        this._events.get(name).unsubscribe(fn);
    };
    /**
     * Unsubscribes from the event with the specified name.
     * @param name The name of the event.
     * @param fn The event handler.
     */
    SignalHandlingBase.prototype.unsub = function (name, fn) {
        this.unsubscribe(name, fn);
    };
    return SignalHandlingBase;
}());
exports.SignalHandlingBase = SignalHandlingBase;


/***/ }),
/* 14 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/BitData.ts
/**
 * Information about one particular bit (its position and status).
 */
class BitData {
    /**
     * Create an object representing a bit.
     *
     * @param startFrame the first frame, inclusive.
     * @param endFrame the last frame, inclusive.
     * @param bitType what kind of bit it is.
     */
    constructor(startFrame, endFrame, bitType) {
        this.startFrame = startFrame;
        this.endFrame = endFrame;
        this.bitType = bitType;
    }
}

// CONCATENATED MODULE: ./src/BitType.ts
/**
 * Information about a particular bit.
 */
var BitType;
(function (BitType) {
    /**
     * Represents a numerical zero (0).
     */
    BitType[BitType["ZERO"] = 0] = "ZERO";
    /**
     * Represents a numerical one (1).
     */
    BitType[BitType["ONE"] = 1] = "ONE";
    /**
     * Represents a start bit in a byte.
     */
    BitType[BitType["START"] = 2] = "START";
    /**
     * Represents an undecoded bit.
     */
    BitType[BitType["BAD"] = 3] = "BAD";
})(BitType || (BitType = {}));

// CONCATENATED MODULE: ./src/TapeDecoderState.ts
// Enum for the state of a tape decoder.
var TapeDecoderState;
(function (TapeDecoderState) {
    /**
     * Decoder must start in UNDECIDED state.
     */
    TapeDecoderState[TapeDecoderState["UNDECIDED"] = 0] = "UNDECIDED";
    /**
     * Go from UNDECIDED to DETECTED once it's sure that the encoding is its own. This usually
     * happens at the end of the header.
     */
    TapeDecoderState[TapeDecoderState["DETECTED"] = 1] = "DETECTED";
    /**
     * Go from DETECTED to FINISHED once the program is fully read.
     * Once in the FINISHED state, the decoder won't be given any more samples.
     */
    TapeDecoderState[TapeDecoderState["FINISHED"] = 2] = "FINISHED";
})(TapeDecoderState || (TapeDecoderState = {}));

// CONCATENATED MODULE: ./src/ByteData.ts
/**
 * Information about one particular byte (its position).
 */
class ByteData {
    /**
     * Create an object representing a byte.
     *
     * @param value the byte value (0-255).
     * @param startFrame the first frame, inclusive.
     * @param endFrame the last frame, inclusive.
     */
    constructor(value, startFrame, endFrame) {
        this.value = value;
        this.startFrame = startFrame;
        this.endFrame = endFrame;
    }
}

// CONCATENATED MODULE: ./src/DisplaySamples.ts
/**
 * Samples that are pre-filtered so we can display them zoomed out quickly.
 */
class DisplaySamples {
    constructor(samples) {
        this.samplesList = [samples];
        this.filterDown();
    }
    /**
     * Sample down for quick display.
     */
    filterDown() {
        while (this.samplesList[this.samplesList.length - 1].length > 500) {
            const samples = this.samplesList[this.samplesList.length - 1];
            const half = Math.floor(samples.length / 2);
            const down = new Int16Array(half);
            for (let i = 0, j = 0; i < half; i++, j += 2) {
                down[i] = Math.max(samples[j], samples[j + 1]);
            }
            this.samplesList.push(down);
        }
    }
}

// EXTERNAL MODULE: ./node_modules/strongly-typed-events/dist/index.js
var dist = __webpack_require__(0);

// CONCATENATED MODULE: ./src/ByteReader.ts
const EOF = -1;
/**
 * Provides an API for reading through a byte array.
 */
class ByteReader {
    constructor(b) {
        this.b = b;
        this.pos = 0;
    }
    /**
     * Return the next byte, or EOF on end of array.
     *
     * @returns {number}
     */
    read() {
        return this.pos < this.b.length ? this.b[this.pos++] : EOF;
    }
    /**
     * Return the byte address of the next byte to be read.
     */
    addr() {
        return this.pos;
    }
    /**
     * Reads a little-endian short (two-byte) integer.
     *
     * @param allowEofAfterFirstByte if true, an EOF after the first byte will result in just the
     * first byte. Otherwise an EOF is returned.
     * @returns the integer, or EOF on end of file.
     */
    readShort(allowEofAfterFirstByte) {
        const low = this.read();
        if (low === EOF) {
            return EOF;
        }
        const high = this.read();
        if (high === EOF) {
            return allowEofAfterFirstByte ? low : EOF;
        }
        return low + high * 256;
    }
    /**
     * Reads a string from the stream. If the returned string is shorter than "length", then we hit EOF.
     */
    readString(length) {
        let s = "";
        while (length-- > 0) {
            const letter = this.read();
            if (letter === EOF) {
                break;
            }
            // Here we could check to see if it's a valid (ASCII?) letter.
            s += String.fromCharCode(letter);
        }
        return s;
    }
    /**
     * Returns the next "length" bytes. If the returned array is shorter than "length", then we hit EOF.
     */
    readBytes(length) {
        const pos = this.pos;
        length = Math.min(length, this.b.length - pos);
        this.pos += length;
        // In principle we can use this to get a view to part of the underlying array, but it
        // doesn't work in Chrome, we get a view to the whole array.
        /// return new Uint8Array(this.b, pos, length);
        // So instead make a copy.
        return this.b.slice(pos, pos + length);
    }
}

// CONCATENATED MODULE: ./node_modules/z80-base/dist/module/Register.js
/**
 * List of all word registers.
 */
const WORD_REG = new Set(["af", "bc", "de", "hl", "af'", "bc'", "de'", "hl'", "ix", "iy", "sp", "pc"]);
/**
 * List of all byte registers.
 */
const BYTE_REG = new Set(["a", "f", "b", "c", "d", "e", "h", "l", "ixh", "ixl", "iyh", "iyl"]);
/**
 * Determine whether a register stores a word.
 */
function isWordReg(s) {
    return WORD_REG.has(s.toLowerCase());
}
/**
 * Determine whether a register stores a byte.
 */
function isByteReg(s) {
    return BYTE_REG.has(s.toLowerCase());
}

// CONCATENATED MODULE: ./node_modules/z80-base/dist/module/Utils.js
// Various utility functions.
/**
 * Convert a number to hex and zero-pad to the specified number of hex digits.
 */
function toHex(value, digits) {
    return value.toString(16).toUpperCase().padStart(digits, "0");
}
/**
 * Convert a byte to hex.
 */
function toHexByte(value) {
    return toHex(value, 2);
}
/**
 * Convert a word to hex.
 */
function toHexWord(value) {
    return toHex(value, 4);
}
/**
 * Return the high byte of a word.
 */
function hi(value) {
    return (value >> 8) & 0xFF;
}
/**
 * Return the low byte of a word.
 */
function lo(value) {
    return value & 0xFF;
}
/**
 * Create a word from a high and low byte.
 */
function word(highByte, lowByte) {
    return ((highByte & 0xFF) << 8) | (lowByte & 0xFF);
}
/**
 * Increment a byte.
 */
function inc8(value) {
    return add8(value, 1);
}
/**
 * Increment a word.
 */
function inc16(value) {
    return add16(value, 1);
}
/**
 * Decrement a byte.
 */
function dec8(value) {
    return sub8(value, 1);
}
/**
 * Decrement a word.
 */
function dec16(value) {
    return sub16(value, 1);
}
/**
 * Add two bytes together.
 */
function add8(a, b) {
    return (a + b) & 0xFF;
}
/**
 * Add two words together.
 */
function add16(a, b) {
    return (a + b) & 0xFFFF;
}
/**
 * Subtract two bytes.
 */
function sub8(a, b) {
    return (a - b) & 0xFF;
}
/**
 * Subtract two words.
 */
function sub16(a, b) {
    return (a - b) & 0xFFFF;
}
/**
 * Convert a byte to a signed number (e.g., 0xff to -1).
 */
function signedByte(value) {
    return value >= 128 ? value - 256 : value;
}

// CONCATENATED MODULE: ./node_modules/z80-base/dist/module/RegisterSet.js

/**
 * All registers in a Z80.
 */
class RegisterSet_RegisterSet {
    constructor() {
        // External state:
        this.af = 0;
        this.bc = 0;
        this.de = 0;
        this.hl = 0;
        this.afPrime = 0;
        this.bcPrime = 0;
        this.dePrime = 0;
        this.hlPrime = 0;
        this.ix = 0;
        this.iy = 0;
        this.sp = 0;
        this.pc = 0;
        // Internal state:
        this.memptr = 0;
        this.i = 0;
        this.r = 0; // Low 7 bits of R.
        this.r7 = 0; // Bit 7 of R.
        this.iff1 = 0;
        this.iff2 = 0;
        this.im = 0;
        this.halted = 0;
    }
    get a() {
        return hi(this.af);
    }
    set a(value) {
        this.af = word(value, this.f);
    }
    get f() {
        return lo(this.af);
    }
    set f(value) {
        this.af = word(this.a, value);
    }
    get b() {
        return hi(this.bc);
    }
    set b(value) {
        this.bc = word(value, this.c);
    }
    get c() {
        return lo(this.bc);
    }
    set c(value) {
        this.bc = word(this.b, value);
    }
    get d() {
        return hi(this.de);
    }
    set d(value) {
        this.de = word(value, this.e);
    }
    get e() {
        return lo(this.de);
    }
    set e(value) {
        this.de = word(this.d, value);
    }
    get h() {
        return hi(this.hl);
    }
    set h(value) {
        this.hl = word(value, this.l);
    }
    get l() {
        return lo(this.hl);
    }
    set l(value) {
        this.hl = word(this.h, value);
    }
    get ixh() {
        return hi(this.ix);
    }
    set ixh(value) {
        this.ix = word(value, this.ixl);
    }
    get ixl() {
        return lo(this.ix);
    }
    set ixl(value) {
        this.ix = word(this.ixh, value);
    }
    get iyh() {
        return hi(this.iy);
    }
    set iyh(value) {
        this.iy = word(value, this.iyl);
    }
    get iyl() {
        return lo(this.iy);
    }
    set iyl(value) {
        this.iy = word(this.iyh, value);
    }
    /**
     * Combine the two R parts together.
     */
    get rCombined() {
        return (this.r7 & 0x80) | (this.r & 0xF7);
    }
}
/**
 * All real fields of RegisterSet, for enumeration.
 */
const registerSetFields = [
    "af", "bc", "de", "hl",
    "afPrime", "bcPrime", "dePrime", "hlPrime",
    "ix", "iy", "sp", "pc",
    "memptr", "i", "r", "iff1", "iff2", "im", "halted"
];

// CONCATENATED MODULE: ./node_modules/z80-base/dist/module/Flag.js
/**
 * The flag bits in the F register.
 */
var Flag;
(function (Flag) {
    /**
     * Carry and borrow. Indicates that the addition or subtraction did not
     * fit in the register.
     */
    Flag[Flag["C"] = 1] = "C";
    /**
     * Set if the last operation was a subtraction.
     */
    Flag[Flag["N"] = 2] = "N";
    /**
     * Parity: Indicates that the result has an even number of bits set.
     */
    Flag[Flag["P"] = 4] = "P";
    /**
     * Overflow: Indicates that two's complement does not fit in register.
     */
    Flag[Flag["V"] = 4] = "V";
    /**
     * Undocumented bit, but internal state can leak into it.
     */
    Flag[Flag["X3"] = 8] = "X3";
    /**
     * Half carry: Carry from bit 3 to bit 4 during BCD operations.
     */
    Flag[Flag["H"] = 16] = "H";
    /**
     * Undocumented bit, but internal state can leak into it.
     */
    Flag[Flag["X5"] = 32] = "X5";
    /**
     * Set if value is zero.
     */
    Flag[Flag["Z"] = 64] = "Z";
    /**
     * Set of value is negative.
     */
    Flag[Flag["S"] = 128] = "S";
})(Flag || (Flag = {}));

// CONCATENATED MODULE: ./node_modules/z80-base/dist/module/index.js





// CONCATENATED MODULE: ./src/Annotations.ts
/**
 * Information about one particular section of a program. Because this is program-based, the indices
 * are byte-oriented.
 */
class ProgramAnnotation {
    /**
     * Create an object representing a section to annotate.
     *
     * @param text any text to display for that section.
     * @param firstIndex the first index into the binary, inclusive.
     * @param lastIndex the last index into the binary, inclusive.
     */
    constructor(text, firstIndex, lastIndex) {
        this.text = text;
        this.firstIndex = firstIndex;
        this.lastIndex = lastIndex;
    }
}
/**
 * Annotation to draw a point.
 */
class PointAnnotation {
    constructor(frame, value) {
        this.frame = frame;
        this.value = value;
    }
    draw(ctx) {
        const x = ctx.frameToX(this.frame);
        const y = ctx.valueToY(this.value);
        ctx.context.fillStyle = ctx.highlightColor;
        ctx.context.beginPath();
        ctx.context.arc(x, y, 3, 0, 2 * Math.PI);
        ctx.context.fill();
    }
}
/**
 * Annotation to draw a horizontal line.
 */
class HorizontalLineAnnotation {
    constructor(value, x1, x2) {
        this.value = value;
        this.x1 = x1;
        this.x2 = x2;
    }
    draw(ctx) {
        const y = ctx.valueToY(this.value);
        ctx.context.strokeStyle = ctx.highlightColor;
        ctx.context.beginPath();
        ctx.context.moveTo(ctx.frameToX(this.x1), y);
        ctx.context.lineTo(ctx.frameToX(this.x2), y);
        ctx.context.stroke();
    }
}
/**
 * Annotation to draw a vertical line.
 */
class VerticalLineAnnotation {
    constructor(frame) {
        this.frame = frame;
    }
    draw(ctx) {
        const x = ctx.frameToX(this.frame);
        ctx.context.strokeStyle = ctx.highlightColor;
        ctx.context.beginPath();
        ctx.context.moveTo(x, 0);
        ctx.context.lineTo(x, ctx.height);
        ctx.context.stroke();
    }
}
/**
 * Label with braces.
 */
class LabelAnnotation {
    constructor(label, left, right, onTop) {
        this.label = label;
        this.left = left;
        this.right = right;
        this.onTop = onTop;
    }
    draw(ctx) {
        const x1 = ctx.frameToX(this.left);
        const x2 = ctx.frameToX(this.right);
        drawBraceAndLabel(ctx.context, ctx.height, x1, x2, ctx.secondaryForegroundColor, this.label, ctx.foregroundColor, this.onTop);
    }
}
/**
 * Draw a brace with specified label.
 */
function drawBraceAndLabel(ctx, height, left, right, braceColor, label, labelColor, drawOnTop) {
    const middle = (left + right) / 2;
    const leading = 16;
    // Don't have more than two lines, there's no space for it.
    const lines = label.split("\n");
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        // Don't use a custom font here, they load asynchronously and we're not told when they
        // finish loading, so we can't redraw and the initial draw uses some default serif font.
        ctx.font = '10pt monospace';
        ctx.fillStyle = labelColor;
        ctx.textAlign = "center";
        ctx.textBaseline = "alphabetic";
        const y = drawOnTop ? 38 - (lines.length - i - 1) * leading : height - 35 + i * leading;
        ctx.fillText(line, middle, y);
    }
    ctx.strokeStyle = braceColor;
    ctx.lineWidth = 1;
    drawBrace(ctx, left, middle, right, 40, height - 40, drawOnTop);
}
/**
 * Draw a horizontal brace.
 */
function drawBrace(ctx, left, middle, right, top, bottom, drawOnTop) {
    const radius = Math.min(10, (right - left) / 4);
    const lineY = drawOnTop ? top + 20 : bottom - 20;
    const pointY = drawOnTop ? top : bottom;
    const otherY = drawOnTop ? bottom - 40 : top + 40;
    ctx.beginPath();
    ctx.moveTo(left, otherY);
    if (left === right || radius <= 0) {
        ctx.lineTo(left, lineY);
    }
    else {
        ctx.arcTo(left, lineY, left + radius, lineY, radius);
        ctx.arcTo(middle, lineY, middle, pointY, radius);
        ctx.arcTo(middle, lineY, middle + radius, lineY, radius);
        ctx.arcTo(right, lineY, right, lineY + (drawOnTop ? radius : -radius), radius);
        ctx.lineTo(right, otherY);
    }
    ctx.stroke();
}

// CONCATENATED MODULE: ./src/SystemProgram.ts
/**
 * Tools for dealing with SYSTEM (machine language) programs.
 *
 * http://www.trs-80.com/wordpress/zaps-patches-pokes-tips/tape-and-file-formats-structures/
 */



const FILE_HEADER = 0x55;
const DATA_HEADER = 0x3C;
const END_OF_FILE_MARKER = 0x78;
const FILENAME_LENGTH = 6;
/**
 * Represents a chunk of bytes from the file, with a checksum.
 */
class SystemChunk {
    constructor(loadAddress, data, checksum) {
        this.loadAddress = loadAddress;
        this.data = data;
        this.checksum = checksum;
    }
    /**
     * Whether the checksum supplied on tape matches what we compute.
     */
    isChecksumValid() {
        let checksum = 0;
        // Include load address and data.
        checksum += (this.loadAddress >> 8) & 0xFF;
        checksum += this.loadAddress & 0xFF;
        for (const b of this.data) {
            checksum += b;
        }
        checksum &= 0xFF;
        return checksum === this.checksum;
    }
}
/**
 * Whether this is a program that can be loaded with the SYSTEM command.
 */
function isSystemProgram(binary) {
    return binary != null &&
        binary.length >= 1 &&
        binary[0] === FILE_HEADER;
}
/**
 * Class representing a SYSTEM (machine language) program. If the "error" field is set, then something
 * went wrong with the program and the data may be partially loaded.
 */
class SystemProgram_SystemProgram {
    constructor(binary) {
        this.filename = "";
        this.chunks = [];
        this.entryPointAddress = 0;
        this.annotations = [];
        const b = new ByteReader(binary);
        this.annotations.push(new ProgramAnnotation("File\nHead", b.addr(), b.addr()));
        const headerByte = b.read();
        if (headerByte === EOF) {
            this.error = "File is empty";
            return;
        }
        if (headerByte != FILE_HEADER) {
            this.error = "Not a SYSTEM file";
            return;
        }
        this.filename = b.readString(FILENAME_LENGTH);
        if (this.filename.length < FILENAME_LENGTH) {
            // Binary is truncated.
            this.error = "File is truncated at filename";
            return;
        }
        this.filename = this.filename.trim();
        this.annotations.push(new ProgramAnnotation("Filename\n\"" + this.filename + "\"", b.addr() - FILENAME_LENGTH, b.addr() - 1));
        while (true) {
            this.annotations.push(new ProgramAnnotation("Data\nHead", b.addr(), b.addr()));
            const marker = b.read();
            if (marker === EOF) {
                this.error = "File is truncated at start of block";
                return;
            }
            if (marker === END_OF_FILE_MARKER) {
                break;
            }
            if (marker !== DATA_HEADER) {
                this.error = "Unexpected byte " + toHexByte(marker) + " at start of block";
                return;
            }
            let length = b.read();
            if (length === EOF) {
                this.error = "File is truncated at block length";
                return;
            }
            // 0 means 256.
            if (length === 0) {
                length = 256;
            }
            this.annotations.push(new ProgramAnnotation("Len\n" + length, b.addr() - 1, b.addr() - 1));
            const loadAddress = b.readShort(false);
            if (loadAddress === EOF) {
                this.error = "File is truncated at load address";
                return;
            }
            this.annotations.push(new ProgramAnnotation("Addr\n" + toHexWord(loadAddress), b.addr() - 2, b.addr() - 1));
            const data = b.readBytes(length);
            if (data.length < length) {
                this.error = "File is truncated at data";
                return;
            }
            const checksum = b.read();
            if (loadAddress === EOF) {
                this.error = "File is truncated at checksum";
                return;
            }
            this.annotations.push(new ProgramAnnotation("XSum\n0x" + toHexByte(checksum), b.addr() - 1, b.addr() - 1));
            this.chunks.push(new SystemChunk(loadAddress, data, checksum));
        }
        this.entryPointAddress = b.readShort(false);
        if (this.entryPointAddress === EOF) {
            this.error = "File is truncated at entry point address";
            this.entryPointAddress = 0;
            return;
        }
        this.annotations.push(new ProgramAnnotation("Run\n" + toHexWord(this.entryPointAddress), b.addr() - 2, b.addr() - 1));
    }
    /**
     * Convert an address in memory to the original byte offset in the binary. Returns undefined if
     * not found in any chunk.
     */
    addressToByteOffset(address) {
        // Skip file header and block header.
        let offset = 1 + FILENAME_LENGTH + 4;
        for (const chunk of this.chunks) {
            if (address >= chunk.loadAddress && address < chunk.loadAddress + chunk.data.length) {
                return offset + (address - chunk.loadAddress);
            }
            // Skip checksum and block header of the next block.
            offset += chunk.data.length + 5;
        }
        return undefined;
    }
}

// CONCATENATED MODULE: ./src/Utils.ts
/**
 * Convert a number to a string.
 *
 * @param n number to convert
 * @param base base of the number
 * @param size zero-pad to this many digits
 */
function pad(n, base, size) {
    let s = n.toString(base);
    if (base === 16) {
        // I prefer upper case hex.
        s = s.toUpperCase();
    }
    while (s.length < size) {
        s = "0" + s;
    }
    return s;
}
/**
 * Generate the string version of a number, in base 10, with commas for thousands groups.
 */
function withCommas(n) {
    let s = typeof n === "number" ? Math.round(n).toString(10) : n;
    const negative = s.length >= 1 && s.charAt(0) === "-";
    const firstDigit = negative ? 1 : 0;
    if (s.length - firstDigit > 4) {
        for (let i = s.length - 3; i > firstDigit; i -= 3) {
            s = s.substring(0, i) + "," + s.substring(i);
        }
    }
    return s;
}
/**
 * Remove all children from element.
 */
function clearElement(e) {
    while (e.firstChild) {
        e.removeChild(e.firstChild);
    }
}
/**
 * Flash the node as if a photo were taken.
 */
function flashNode(node) {
    // Position a semi-transparent white div over the screen, and reduce its transparency over time.
    const oldNodePosition = node.style.position;
    node.style.position = "relative";
    const overlay = document.createElement("div");
    overlay.style.position = "absolute";
    overlay.style.left = "0";
    overlay.style.top = "0";
    overlay.style.right = "0";
    overlay.style.bottom = "0";
    overlay.style.backgroundColor = "#ffffff";
    // Fade out.
    let opacity = 1;
    const updateOpacity = () => {
        overlay.style.opacity = opacity.toString();
        opacity -= 0.05;
        if (opacity >= 0) {
            window.requestAnimationFrame(updateOpacity);
        }
        else {
            node.removeChild(overlay);
            node.style.position = oldNodePosition;
        }
    };
    updateOpacity();
    node.appendChild(overlay);
}
/**
 * Concatenate a list of byte arrays into one.
 */
function concatByteArrays(samplesList) {
    const length = samplesList.reduce((sum, samples) => sum + samples.length, 0);
    const allBytes = new Uint8Array(length);
    let offset = 0;
    for (const samples of samplesList) {
        allBytes.set(samples, offset);
        offset += samples.length;
    }
    return allBytes;
}

// CONCATENATED MODULE: ./src/AudioUtils.ts

class AudioFile {
    constructor(rate, samples) {
        this.rate = rate;
        this.samples = samples;
    }
}
/**
 * Simple high-pass filter.
 *
 * @param samples samples to filter.
 * @param size size of filter
 * @returns filtered samples.
 */
function highPassFilter(samples, size) {
    const out = new Int16Array(samples.length);
    let sum = 0;
    for (let i = 0; i < size; i++) {
        sum += samples[i];
        // Subtract out the average of the last "size" samples (to estimate local DC component).
        out[i] = clampToInt16(samples[i] - sum / size);
    }
    for (let i = size; i < samples.length; i++) {
        sum += samples[i] - samples[i - size];
        // Subtract out the average of the last "size" samples (to estimate local DC component).
        out[i] = clampToInt16(samples[i] - sum / size);
    }
    return out;
}
/**
 * @param frame the frame number to be described as a timestamp.
 * @param hz number of frames per second in original recording.
 * @param brief omit hour if zero, omit milliseconds and frame itself.
 */
function frameToTimestamp(frame, hz, brief) {
    const time = frame / hz;
    let ms = Math.floor(time * 1000);
    let sec = Math.floor(ms / 1000);
    ms -= sec * 1000;
    let min = Math.floor(sec / 60);
    sec -= min * 60;
    const hour = Math.floor(min / 60);
    min -= hour * 60;
    if (brief) {
        return (hour !== 0 ? hour + ":" + pad(min, 10, 2) : min) + ":" + pad(sec, 10, 2);
    }
    else {
        return hour + ":" + pad(min, 10, 2) + ":" + pad(sec, 10, 2) + "." + pad(ms, 10, 3) + " (frame " + withCommas(frame) + ")";
    }
}
/**
 * @param frame the frame duration to be described as a string.
 * @param hz number of frames per second in original recording.
 */
function frameDurationToString(frame, hz) {
    const time = frame / hz;
    let us = Math.floor(time * 1000000);
    let sec = Math.floor(us / 1000000);
    us -= sec * 1000000;
    let min = Math.floor(sec / 60);
    sec -= min * 60;
    const hour = Math.floor(min / 60);
    min -= hour * 60;
    return (hour !== 0 ? hour + ":" + pad(min, 10, 2) : min) + ":" + pad(sec, 10, 2) + "." +
        withCommas(pad(us, 10, 6)) + " (" + withCommas(frame) + " frames)";
}
/**
 * Concatenate a list of audio samples into one.
 */
function concatAudio(samplesList) {
    const length = samplesList.reduce((sum, samples) => sum + samples.length, 0);
    const allSamples = new Int16Array(length);
    let offset = 0;
    for (const samples of samplesList) {
        allSamples.set(samples, offset);
        offset += samples.length;
    }
    return allSamples;
}
/**
 * Clamp the number to the range of signed 16-bit int.
 */
function clampToInt16(x) {
    return Math.max(Math.min(Math.round(x), 32767), -32768);
}
/**
 * Generate a certain amount of silence.
 */
function makeSilence(seconds, sampleRate) {
    return new Int16Array(Math.round(seconds * sampleRate));
}

// CONCATENATED MODULE: ./src/HighSpeedTapeEncoder.ts


const SYNC_BYTE = 0x7F;
/**
 * Generate one cycle of a sine wave.
 * @param length number of samples in the full cycle.
 * @return audio samples for one cycle.
 */
function generateCycle(length) {
    const audio = new Int16Array(length);
    for (let i = 0; i < length; i++) {
        const t = 2 * Math.PI * i / length;
        // -0.5 to 0.5, matches recorded audio.
        audio[i] = Math.sin(t) * 16384;
    }
    return audio;
}
/**
 * Generate a half cycle that fades off to zero instead of coming down hard to zero.
 *
 * @param length number of samples to generate.
 * @param previousBit the previous cycle, so we copy the ending slope.
 */
function generateFinalHalfCycle(length, previousBit) {
    // Copy the slope of the end of the zero bit.
    const slope = previousBit[previousBit.length - 1] - previousBit[previousBit.length - 2];
    // Points on the Bezier.
    const x1 = 0;
    const y1 = 0;
    const y2 = 32767;
    const x2 = (y2 - y1 + x1 * slope) / slope;
    const x3 = length / 2;
    const y3 = 0;
    const x4 = length - 1;
    const y4 = 0;
    // Generated audio;
    const audio = new Int16Array(length);
    // Go through Bezier in small steps.
    let position = 0;
    for (let i = 0; i <= 128; i++) {
        const t = i / 128.0;
        // Compute Bezier value.
        const x12 = x1 + (x2 - x1) * t;
        const y12 = y1 + (y2 - y1) * t;
        const x23 = x2 + (x3 - x2) * t;
        const y23 = y2 + (y3 - y2) * t;
        const x34 = x3 + (x4 - x3) * t;
        const y34 = y3 + (y4 - y3) * t;
        const x123 = x12 + (x23 - x12) * t;
        const y123 = y12 + (y23 - y12) * t;
        const x234 = x23 + (x34 - x23) * t;
        const y234 = y23 + (y34 - y23) * t;
        const x1234 = x123 + (x234 - x123) * t;
        const y1234 = y123 + (y234 - y123) * t;
        // Draw a crude horizontal line from the previous point.
        const newPosition = Math.min(Math.floor(x1234), length - 1);
        while (position <= newPosition) {
            audio[position] = y1234;
            position += 1;
        }
    }
    // Finish up anything left.
    while (position <= length - 1) {
        audio[position] = 0;
        position += 1;
    }
    return audio;
}
/**
 * Adds the byte "b" to the samples list, most significant bit first.
 * @param samplesList list of samples we're adding to.
 * @param b byte to generate.
 * @param zero samples for a zero bit.
 * @param one samples for a one bit.
 */
function addByte(samplesList, b, zero, one) {
    // MSb first.
    for (let i = 7; i >= 0; i--) {
        if ((b & (1 << i)) != 0) {
            samplesList.push(one);
        }
        else {
            samplesList.push(zero);
        }
    }
}
/**
 * Adds the header bytes and start bits necessary for writing high-speed cassettes. The input bytes
 * must not have the start bits already inserted.
 */
function wrapHighSpeed(bytes) {
    // Add tape header.
    const buffers = [
        new Uint8Array(256).fill(0x55),
        new Uint8Array([SYNC_BYTE]),
        insertStartBits(bytes),
    ];
    return concatByteArrays(buffers);
}
/**
 * Inserts a zero start bit before every byte.
 */
function insertStartBits(inBytes) {
    const outBytes = new Uint8Array(Math.ceil(inBytes.length * 9 / 8));
    for (let i = 0; i < inBytes.length; i++) {
        const byte = inBytes[i];
        const bitPos = i * 9 + 1;
        const bytePos = Math.floor(bitPos / 8);
        const bitOffset = bitPos % 8;
        outBytes[bytePos] |= byte >> bitOffset;
        if (bitOffset !== 0) {
            outBytes[bytePos + 1] |= byte << (8 - bitOffset);
        }
    }
    return outBytes;
}
/**
 * High-speed CAS files have start bits built-in. Strip these out because
 * we re-insert them below when encoding. We could also remove the
 * writing of start bits below, but we don't really know how many bits
 * there are at the end that we shouldn't write.
 *
 * Update: We no longer insert start bits in encodeHighSpeed(), so this
 * routine is no longer necessary, but we keep it around anyway.
 */
function stripStartBits(inBytes) {
    // Find sync byte.
    let headerSize = undefined;
    for (let i = 0; i < inBytes.length; i++) {
        if (inBytes[i] === SYNC_BYTE) {
            headerSize = i + 1;
            break;
        }
    }
    if (headerSize === undefined) {
        console.log("Can't find sync byte in high-speed CAS file");
        return inBytes;
    }
    // Compute new size of array.
    const outBytes = new Uint8Array(Math.floor(headerSize + (inBytes.length - headerSize) * 8 / 9));
    // First bytes, up to and including sync byte, don't have a start bit.
    outBytes.set(inBytes.slice(0, headerSize));
    // Strip start bit from the rest.
    for (let i = headerSize; i < outBytes.length; i++) {
        // Index of most-significant data bit.
        const bitIndex = headerSize * 8 + (i - headerSize) * 9 + 1;
        const byteIndex = Math.floor(bitIndex / 8);
        const bitOffset = bitIndex % 8;
        let value = inBytes[byteIndex] << bitOffset;
        if (bitOffset !== 0) {
            value |= inBytes[byteIndex + 1] >> (8 - bitOffset);
        }
        outBytes[i] = value;
    }
    return outBytes;
}
/**
 * Encode the sequence of bytes as an array of audio samples for high-speed (1500 baud) cassettes.
 * @param bytes cas-style array of bytes, including 256 0x55 bytes, sync byte, and start bits.
 * @param sampleRate number of samples per second in the generated audio.
 */
function encodeHighSpeed(bytes, sampleRate) {
    // Length of a zero bit, in samples.
    const zeroLength = Math.round(0.00072 * sampleRate);
    // Length of a one bit, in samples.
    const oneLength = Math.round(0.00034 * sampleRate);
    // Samples representing a zero bit.
    const zero = generateCycle(zeroLength);
    // Samples representing a one bit.
    const one = generateCycle(oneLength);
    // The final cycle in the entire waveform, which is necessary
    // to force that last negative-to-positive transition (and interrupt).
    // We could just use a simple half cycle here, but it's nicer to do
    // something like the original analog.
    const finalHalfCycle = generateFinalHalfCycle(zeroLength * 3, zero);
    // List of samples.
    const samplesList = [];
    // Start with half a second of silence.
    samplesList.push(new Int16Array(sampleRate / 2));
    // Write program.
    for (const b of bytes) {
        addByte(samplesList, b, zero, one);
    }
    // Finish off the last cycle, so that it generates an interrupt.
    samplesList.push(finalHalfCycle);
    // End with half a second of silence.
    samplesList.push(new Int16Array(sampleRate / 2));
    // Concatenate all samples.
    return concatAudio(samplesList);
}

// CONCATENATED MODULE: ./src/LowSpeedTapeEncoder.ts


const LowSpeedTapeEncoder_SYNC_BYTE = 0xA5;
/**
 * Generate one pulse for 500 baud audio.
 */
function generatePulse(length) {
    const audio = new Int16Array(length);
    // Center it in the audio.
    const offset = Math.round(length / 4);
    for (let i = 0; i < length / 2; i++) {
        const t = 2 * Math.PI * i / (length / 2);
        // -0.5 to 0.5, matches recorded audio.
        audio[i + offset] = Math.sin(t) * 16384;
    }
    return audio;
}
/**
 * Adds the byte "b" to the samples list, most significant bit first.
 * @param samplesList list of samples we're adding to.
 * @param b byte to generate.
 * @param cycle samples for a cycle.
 * @param silence samples for silence.
 */
function LowSpeedTapeEncoder_addByte(samplesList, b, cycle, silence) {
    // MSb first.
    for (let i = 7; i >= 0; i--) {
        // Clock pulse.
        samplesList.push(cycle);
        // Data pulse.
        const bit = (b & (1 << i)) != 0;
        samplesList.push(bit ? cycle : silence);
    }
}
/**
 * Adds the header bytes necessary for writing low-speed cassettes.
 */
function wrapLowSpeed(bytes) {
    // Add tape header.
    const buffers = [
        new Uint8Array(256),
        new Uint8Array([LowSpeedTapeEncoder_SYNC_BYTE]),
        bytes,
    ];
    return concatByteArrays(buffers);
}
/**
 * Encode the sequence of bytes as an array of audio samples for low-speed (500 baud) cassettes.
 * @param bytes cas-style array of bytes, including 256 zero bytes, sync byte, and trailing zero bytes.
 * @param sampleRate number of samples per second in the generated audio.
 */
function encodeLowSpeed(bytes, sampleRate) {
    // Length of one cycle, in samples. They're all 1ms.
    const cycleLength = Math.round(0.001 * sampleRate);
    // Samples representing one cycle.
    const cycle = generatePulse(cycleLength);
    // Samples representing 1ms of silence.
    const silence = new Int16Array(cycleLength);
    // List of samples.
    const samplesList = [];
    // Start with half a second of silence.
    samplesList.push(makeSilence(0.5, sampleRate));
    // All data bytes.
    for (let i = 0; i < bytes.length; i++) {
        LowSpeedTapeEncoder_addByte(samplesList, bytes[i], cycle, silence);
    }
    // End with half a second of silence.
    samplesList.push(makeSilence(0.5, sampleRate));
    // Concatenate all samples.
    return concatAudio(samplesList);
}

// CONCATENATED MODULE: ./src/WavFile.ts


/**
 * Rate used for writing files.
 */
const DEFAULT_SAMPLE_RATE = 44100;
/**
 * Values for the "audioFormat" field.
 */
const WAVE_FORMAT_UNKNOWN = 0x0000; // Microsoft Unknown Wave Format
const WAVE_FORMAT_PCM = 0x0001; // Microsoft PCM Format
const WAVE_FORMAT_ADPCM = 0x0002; // Microsoft ADPCM Format
const WAVE_FORMAT_IEEE_FLOAT = 0x0003; // IEEE float
const WAVE_FORMAT_VSELP = 0x0004; // Compaq Computer's VSELP
const WAVE_FORMAT_IBM_CVSD = 0x0005; // IBM CVSD
const WAVE_FORMAT_ALAW = 0x0006; // 8-bit ITU-T G.711 A-law
const WAVE_FORMAT_MULAW = 0x0007; // 8-bit ITU-T G.711 µ-law
const WAVE_FORMAT_EXTENSIBLE = 0xFFFE; // Determined by SubFormat
/**
 * Reads strings, numbers, and arrays from a buffer.
 */
class ArrayBufferReader {
    constructor(arrayBuffer) {
        this.littleEndian = false;
        this.arrayBuffer = arrayBuffer;
        this.dataView = new DataView(arrayBuffer);
        this.index = 0;
    }
    /**
     * Whether we've reached the end of the buffer.
     */
    eof() {
        return this.index >= this.arrayBuffer.byteLength;
    }
    /**
     * Read an ASCII string of length "length" from the input file.
     */
    readString(length) {
        let s = "";
        for (let i = 0; i < length; i++) {
            s += String.fromCharCode(this.dataView.getInt8(this.index++));
        }
        return s;
    }
    /**
     * Read an unsigned 8-bit value.
     */
    readUint8() {
        const value = this.dataView.getUint8(this.index);
        this.index += 1;
        return value;
    }
    /**
     * Read an unsigned 16-bit value.
     */
    readUint16() {
        const value = this.dataView.getUint16(this.index, this.littleEndian);
        this.index += 2;
        return value;
    }
    /**
     * Read an unsigned 32-bit value.
     */
    readUint32() {
        const value = this.dataView.getUint32(this.index, this.littleEndian);
        this.index += 4;
        return value;
    }
    /**
     * Read a buffer of Uint8 numbers.
     */
    readUint8Array(byteLength) {
        const array = new Uint8Array(this.arrayBuffer, this.index, byteLength);
        this.index += byteLength;
        return array;
    }
    /**
     * Read a buffer of Int16 numbers.
     */
    readInt16Array(byteLength) {
        const array = new Int16Array(this.arrayBuffer, this.index, byteLength / 2);
        this.index += byteLength;
        return array;
    }
}
/**
 * Reads a WAV file from a buffer, returning an AudioFile object.
*/
function readWavFile(arrayBuffer) {
    const reader = new ArrayBufferReader(arrayBuffer);
    let rate = undefined;
    let samples = undefined;
    let bitDepth = undefined;
    // Read ID.
    const riffId = reader.readString(4);
    if (riffId === "RIFF") {
        reader.littleEndian = true;
    }
    else if (riffId === "RIFX") {
        reader.littleEndian = false;
    }
    else {
        throw new Error('bad "chunk id": expected "RIFF" or "RIFX", got ' + riffId);
    }
    // Read chunk size. This is really how much is left in the entire file.
    const chunkSize = reader.readUint32();
    // Read format.
    const waveId = reader.readString(4);
    if (waveId !== "WAVE") {
        throw new Error('bad "format": expected "WAVE", got ' + waveId);
    }
    // Keep reading chunks.
    while (!reader.eof()) {
        // Chunk ID.
        const chunkId = reader.readString(4);
        const chunkSize = reader.readUint32();
        switch (chunkId) {
            case "fmt ": {
                if (chunkSize < 16) {
                    throw new Error("Expected fmt size of at least 16, got " + chunkSize);
                }
                const audioFormat = reader.readUint16();
                const channels = reader.readUint16();
                rate = reader.readUint32();
                const byteRate = reader.readUint32(); // useless...
                const blockAlign = reader.readUint16(); // useless...
                bitDepth = reader.readUint16();
                if (audioFormat !== WAVE_FORMAT_PCM) {
                    throw new Error("Can only handle PCM, not " + audioFormat);
                }
                if (channels !== 1) {
                    throw new Error("Can only handle mono streams, not " + channels + " channels");
                }
                const expectBlockAlign = Math.ceil(bitDepth / 8);
                if (blockAlign !== expectBlockAlign) {
                    throw new Error("Expected block align of " + expectBlockAlign + ", not " + blockAlign);
                }
                // Read the rest of the optional parameters. These are allowed but we don't do anything
                // with them.
                for (let i = 16; i < chunkSize; i++) {
                    const byte = reader.readUint8();
                    console.log("Got extra byte in wav fmt chunk: 0x" + toHexByte(byte));
                }
                break;
            }
            case "fact": {
                if (chunkSize !== 4) {
                    throw new Error("Expected fact size of 4, got " + chunkSize);
                }
                // There is currently only one field defined for the format dependant data.
                // It is a single 4-byte value that specifies the number of samples in the
                // waveform data chunk.
                //
                // The number of samples field is redundant for sampled data, since the Data
                // chunk indicates the length of the data. The number of samples can be
                // determined from the length of the data and the container size as determined
                // from the Format chunk.
                const numSamples = reader.readUint32();
                break;
            }
            case "data": {
                if (chunkSize === 0) {
                    // If we run into this, just read the rest of the array.
                    throw new Error("We don't handle 0-sized data");
                }
                if (bitDepth === 8) {
                    const samples8 = reader.readUint8Array(chunkSize);
                    // Convert from 8-bit unsigned to 16-bit signed.
                    samples = new Int16Array(samples8.length);
                    for (let i = 0; i < samples.length; i++) {
                        samples[i] = -(samples8[i] - 128) * 255;
                    }
                }
                else if (bitDepth === 16) {
                    samples = reader.readInt16Array(chunkSize);
                }
                else {
                    throw new Error("Can only handle bit depths of 8 and 16, not " + bitDepth);
                }
                break;
            }
        }
    }
    if (samples === undefined || rate === undefined) {
        throw new Error("didn't get all the fields we need from WAV file");
    }
    return new AudioFile(rate, samples);
}
/**
 * Convert samples to a WAV file.
 *
 * http://soundfile.sapp.org/doc/WaveFormat/
 */
function writeWavFile(samples, sampleRate) {
    const channelCount = 1;
    const bitDepth = 16;
    // Total size of WAV file.
    const totalSize = 11 * 4 + samples.length * 2;
    const wav = new ArrayBuffer(totalSize);
    const wavData = new DataView(wav);
    let index = 0;
    const writeString = (s) => {
        for (let i = 0; i < s.length; i++) {
            wavData.setUint8(index, s.charCodeAt(i));
            index += 1;
        }
    };
    const writeUint16 = (n) => {
        wavData.setUint16(index, n, true);
        index += 2;
    };
    const writeInt16 = (n) => {
        wavData.setInt16(index, n, true);
        index += 2;
    };
    const writeUint32 = (n) => {
        wavData.setUint32(index, n, true);
        index += 4;
    };
    // Main header.
    writeString("RIFF");
    writeUint32(totalSize - 8);
    writeString("WAVE");
    // Format chunk.
    writeString("fmt ");
    writeUint32(16);
    writeUint16(WAVE_FORMAT_PCM);
    writeUint16(channelCount);
    writeUint32(sampleRate);
    writeUint32(sampleRate * channelCount * bitDepth / 8); // Byte rate.
    writeUint16(channelCount * bitDepth / 8); // Block align.
    writeUint16(bitDepth);
    // Data chunk.
    writeString("data");
    writeUint32(samples.length * 2);
    for (let i = 0; i < samples.length; i++) {
        writeInt16(samples[i]);
    }
    if (index !== totalSize) {
        throw new Error("wrote " + index + " but expected " + totalSize);
    }
    return new Uint8Array(wav);
}

// CONCATENATED MODULE: ./src/Program.ts







class Program_Program {
    constructor(trackNumber, copyNumber, startFrame, endFrame, decoder, binary, bitData, byteData) {
        this.name = "";
        this.notes = "";
        this.screenshot = "";
        this.onName = new dist["SimpleEventDispatcher"]();
        this.onNotes = new dist["SimpleEventDispatcher"]();
        this.onScreenshot = new dist["SimpleEventDispatcher"]();
        this.trackNumber = trackNumber;
        this.copyNumber = copyNumber;
        this.startFrame = startFrame;
        this.endFrame = endFrame;
        this.decoder = decoder;
        this.binary = binary;
        this.bitData = bitData;
        this.byteData = byteData;
    }
    /**
     * Set the high-speed samples reconstructed from the binary.
     */
    setReconstructedSamples(reconstructedSamples) {
        this.reconstructedSamples = new DisplaySamples(reconstructedSamples);
    }
    /**
     * Get a generic label for the program.
     */
    getLabel() {
        return "Track " + this.trackNumber + ", copy " + this.copyNumber + ", " + this.decoder.getName();
    }
    /**
     * Get a generic short label for the program.
     */
    getShortLabel() {
        return "T" + this.trackNumber + " C" + this.copyNumber;
    }
    /**
     * Whether the binary represents a Basic program.
     */
    isBasicProgram() {
        return this.binary != null &&
            this.binary.length >= 3 &&
            this.binary[0] === 0xD3 &&
            this.binary[1] === 0xD3 &&
            this.binary[2] === 0xD3;
    }
    /**
     * Set the name of the program, as set by the user.
     */
    setName(name) {
        if (name !== this.name) {
            this.name = name;
            this.onName.dispatch(name);
        }
    }
    /**
     * Set the notes for the program, as set by the user.
     */
    setNotes(notes) {
        if (notes !== this.notes) {
            this.notes = notes;
            this.onNotes.dispatch(notes);
        }
    }
    /**
     * Set the screenshot for the program.
     */
    setScreenshot(screenshot) {
        if (screenshot !== this.screenshot) {
            this.screenshot = screenshot;
            this.onScreenshot.dispatch(screenshot);
        }
    }
    /**
     * Get a representative timestamp for this program, in seconds.
     */
    getTimestamp(sampleRate) {
        return (this.startFrame + this.endFrame) / 2 / sampleRate;
    }
    /**
     * Whether the given timestamp (in seconds) could apply to this program.
     */
    isForTimestamp(timestamp, sampleRate) {
        const startTimestamp = this.startFrame / sampleRate;
        const endTimestamp = this.endFrame / sampleRate;
        return startTimestamp <= timestamp && timestamp <= endTimestamp;
    }
    /**
     * Whether the binary represents an EDTASM program.
     *
     * http://www.trs-80.com/wordpress/zaps-patches-pokes-tips/edtasm-file-format/
     */
    isEdtasmProgram() {
        function isValidProgramNameChar(n) {
            return (n >= 0x41 && n <= 0x5A) || n === 0x20;
        }
        function isValidLineNumberChar(n) {
            return n >= 0xB0 && n <= 0xB9;
        }
        return this.binary != null &&
            this.binary.length >= 13 &&
            this.binary[0] === 0xD3 &&
            isValidProgramNameChar(this.binary[1]) &&
            isValidProgramNameChar(this.binary[2]) &&
            isValidProgramNameChar(this.binary[3]) &&
            isValidProgramNameChar(this.binary[4]) &&
            isValidProgramNameChar(this.binary[5]) &&
            isValidProgramNameChar(this.binary[6]) &&
            isValidLineNumberChar(this.binary[7]) &&
            isValidLineNumberChar(this.binary[8]) &&
            isValidLineNumberChar(this.binary[9]) &&
            isValidLineNumberChar(this.binary[10]) &&
            isValidLineNumberChar(this.binary[11]) &&
            this.binary[12] === 0x20;
    }
    /**
     * Whether this is a program that can be loaded with the SYSTEM command.
     *
     * http://www.trs-80.com/wordpress/zaps-patches-pokes-tips/tape-and-file-formats-structures/
     */
    isSystemProgram() {
        return isSystemProgram(this.binary);
    }
    /**
     * Whether these two programs have the same binaries.
     */
    sameBinaryAs(other) {
        if (this.binary.length !== other.binary.length) {
            return false;
        }
        for (let i = 0; i < this.binary.length; i++) {
            if (this.binary[i] !== other.binary[i]) {
                return false;
            }
        }
        return true;
    }
    /**
     * Return a .cas file version of the binary.
     */
    asCasFile() {
        if (this.decoder.isHighSpeed()) {
            return wrapHighSpeed(this.binary);
        }
        else {
            return wrapLowSpeed(this.binary);
        }
    }
    /**
     * Return just the audio portion of a WAV file for this program.
     */
    asAudio() {
        const bytes = this.asCasFile();
        return this.decoder.isHighSpeed()
            ? encodeHighSpeed(bytes, DEFAULT_SAMPLE_RATE)
            : encodeLowSpeed(bytes, DEFAULT_SAMPLE_RATE);
    }
    /**
     * Return a .wav file version of the binary.
     */
    asWavFile() {
        return writeWavFile(this.asAudio(), DEFAULT_SAMPLE_RATE);
    }
    /**
     * Whether this program is strictly nested in the other program, with margin to spare.
     */
    isNestedIn(candidate, marginFrames) {
        // Full nested, but also with margin on at least one side.
        return this.startFrame > candidate.startFrame &&
            this.endFrame < candidate.endFrame &&
            (this.startFrame > candidate.startFrame + marginFrames ||
                this.endFrame < candidate.endFrame - marginFrames);
    }
    /**
     * Return the number of bit errors we've found. This is not super cheap, cache if you need it a lot.
     */
    countBitErrors() {
        let count = 0;
        for (const bitData of this.bitData) {
            if (bitData.bitType === BitType.BAD) {
                count += 1;
            }
        }
        return count;
    }
}

// CONCATENATED MODULE: ./src/HighSpeedTapeDecoder.ts







// What distance away from 0 counts as "positive" (or, when negative, "negative").
const THRESHOLD = 500;
/**
 * Decodes high-speed (1500 baud) cassettes.
 */
class HighSpeedTapeDecoder_HighSpeedTapeDecoder {
    constructor(tape) {
        this.state = TapeDecoderState.UNDECIDED;
        this.programBytes = [];
        this.bits = [];
        this.byteData = [];
        this.tape = tape;
        // Our "number of samples" comparisons assume DEFAULT_SAMPLE_RATE, so adjust for that.
        this.lengthMultiplier = tape.sampleRate / DEFAULT_SAMPLE_RATE;
    }
    getName() {
        return "High speed";
    }
    isHighSpeed() {
        return true;
    }
    findNextProgram(startFrame, waveformAnnotations) {
        const samples = this.tape.filteredSamples.samplesList[0];
        let programStartFrame = undefined;
        let bitCount = 0;
        let recentBits = 0;
        while (this.state !== TapeDecoderState.FINISHED) {
            const bitInfo = this.findBit(samples, startFrame);
            if (bitInfo === undefined) {
                // Ran off the end of the cassette.
                this.state = TapeDecoderState.FINISHED;
            }
            else {
                const [crossing, bit] = bitInfo;
                if (bit === undefined) {
                    // Bad bit. If we've not started decoding yet, then it's noise we ignore. Otherwise it indicates
                    // the end of the recording.
                    if (this.state === TapeDecoderState.DETECTED) {
                        this.state = TapeDecoderState.FINISHED;
                    }
                }
                else {
                    // Bits are MSb to LSb.
                    recentBits = (recentBits << 1) | (bit ? 1 : 0);
                    bitCount += 1;
                    let bitType;
                    if (bitCount === 1 && this.state === TapeDecoderState.DETECTED) {
                        // Just got a start bit. Must be zero.
                        bitType = bit ? BitType.BAD : BitType.START;
                    }
                    else {
                        bitType = bit ? BitType.ONE : BitType.ZERO;
                    }
                    this.bits.push(new BitData(startFrame, crossing, bitType));
                    // If we're in the program, add the bit to our stream.
                    if (this.state === TapeDecoderState.DETECTED) {
                        // Got enough bits for a byte (including the start bit).
                        if (bitCount === 9) {
                            let byteValue = recentBits & 0xFF;
                            this.programBytes.push(byteValue);
                            this.byteData.push(new ByteData(byteValue, this.bits[this.bits.length - 8].startFrame, this.bits[this.bits.length - 1].endFrame));
                            bitCount = 0;
                        }
                    }
                    else {
                        // Detect end of header.
                        if ((recentBits & 0xFFFFFFFF) === 0x5555557F) {
                            this.state = TapeDecoderState.DETECTED;
                            bitCount = 0;
                            recentBits = 0;
                            programStartFrame = startFrame;
                            waveformAnnotations.push(new LabelAnnotation("Sync", this.bits[this.bits.length - 8].startFrame, this.bits[this.bits.length - 1].endFrame, false));
                        }
                    }
                }
                startFrame = crossing;
            }
        }
        if (programStartFrame === undefined) {
            return undefined;
        }
        return new Program_Program(0, 0, programStartFrame, startFrame, this, this.getBinary(), this.getBitData(), this.getByteData());
    }
    /**
     * Find the next bit, starting at the positive crossing of the end of the previous bit. Returns
     * the positive crossing at the end of this bit, and the value of the bit. The bit is undefined
     * if the length was too short or too long. Returns undefined if we ran off the end of the tape.
     */
    findBit(samples, startFrame) {
        const crossing = this.findPositiveCrossing(samples, startFrame);
        if (crossing === undefined) {
            // Ran off the end of the cassette.
            return undefined;
        }
        const cycleSize = crossing - startFrame;
        if (cycleSize > 7 * this.lengthMultiplier && cycleSize < 100 * this.lengthMultiplier) {
            // Long cycle is "0", short cycle is "1".
            const bit = cycleSize < 22 * this.lengthMultiplier;
            return [crossing, bit];
        }
        else {
            return [crossing, undefined];
        }
    }
    /**
     * Find the next positive crossing, starting at startFrame. If none is found, returns undefined.
     */
    findPositiveCrossing(samples, startFrame) {
        let oldSign = 0;
        for (let frame = startFrame; frame < samples.length; frame++) {
            const sample = samples[frame];
            const newSign = sample > THRESHOLD ? 1 : sample < -THRESHOLD ? -1 : 0;
            if (oldSign === -1 && newSign === 1) {
                // Positive edge.
                return frame;
            }
            if (newSign !== 0) {
                oldSign = newSign;
            }
        }
        return undefined;
    }
    /**
     * Read a sequence of bits (the characters "0" and "1"). This is for testing.
     */
    readBits(frame) {
        const samples = this.tape.filteredSamples.samplesList[0];
        let bits = "";
        const waveformAnnotation = [];
        const explanations = [];
        let firstBit = true;
        while (true) {
            const bitInfo = this.findBit(samples, frame);
            if (bitInfo === undefined) {
                // Ran off the end of the cassette.
                break;
            }
            else {
                const [crossing, bit] = bitInfo;
                if (bit === undefined) {
                    waveformAnnotation.push(new LabelAnnotation("Bad", frame, crossing, true));
                    if (bits.length !== 0) {
                        break;
                    }
                }
                else {
                    if (firstBit) {
                        waveformAnnotation.push(new LabelAnnotation("Ign", frame, crossing, true));
                        firstBit = false;
                    }
                    else {
                        const bitChar = bit ? "1" : "0";
                        waveformAnnotation.push(new LabelAnnotation(bitChar, frame, crossing, true));
                        bits += bitChar;
                    }
                }
                frame = crossing;
            }
        }
        return [bits, waveformAnnotation, explanations];
    }
    getState() {
        return this.state;
    }
    getBinary() {
        const bytes = new Uint8Array(this.programBytes.length);
        for (let i = 0; i < bytes.length; i++) {
            bytes[i] = this.programBytes[i];
        }
        return bytes;
    }
    getBitData() {
        return this.bits;
    }
    getByteData() {
        return this.byteData;
    }
}

// CONCATENATED MODULE: ./src/LowSpeedAnteoTapeDecoder.ts
// Low speed tape decode based on anteo's version.
// https://github.com/anteo







const LowSpeedAnteoTapeDecoder_SYNC_BYTE = 0xA5;
// When not finding a pulse, what kind of audio we found.
var PulseResultType;
(function (PulseResultType) {
    // Pulse found.
    PulseResultType[PulseResultType["PULSE"] = 0] = "PULSE";
    // No pulse found but there was audio there. Could be a mis-read.
    PulseResultType[PulseResultType["NOISE"] = 1] = "NOISE";
    // Mostly just silence.
    PulseResultType[PulseResultType["SILENCE"] = 2] = "SILENCE";
})(PulseResultType || (PulseResultType = {}));
// Result of a pulse detection.
class Pulse {
    constructor(resultType, value, frame, range, explanation) {
        this.waveformAnnotations = [];
        this.resultType = resultType;
        this.value = value;
        this.frame = frame;
        this.range = range;
        this.explanation = explanation;
    }
}
class LowSpeedAnteoTapeDecoder_LowSpeedAnteoTapeDecoder {
    constructor(tape) {
        this.state = TapeDecoderState.UNDECIDED;
        this.peakThreshold = LowSpeedAnteoTapeDecoder_LowSpeedAnteoTapeDecoder.DEFAULT_THRESHOLD;
        const samples = tape.lowSpeedSamples.samplesList[0];
        if (true) {
            this.samples = samples;
        }
        else {}
        this.period = Math.round(tape.sampleRate * 0.002); // 2ms period.
        this.halfPeriod = Math.round(this.period / 2);
        this.quarterPeriod = Math.round(this.period / 4);
        this.pulseSearchRadius = Math.round(this.period / 6);
    }
    findNextProgram(frame, waveformAnnotations) {
        while (true) {
            const pulse = this.findPulse(frame, this.peakThreshold);
            if (pulse === undefined) {
                // Ran off the end of the tape.
                return undefined;
            }
            frame = pulse.frame;
            const success = this.proofPulseDistance(frame, waveformAnnotations);
            if (success) {
                const program = this.loadData(frame, waveformAnnotations);
                if (program.binary.length > 0) {
                    return program;
                }
            }
            // Jump forward 1/10 second.
            frame += this.period * 50;
        }
    }
    /**
     * Verifies that we have pulses every period starting at frame.
     */
    proofPulseDistance(frame, waveformAnnotations) {
        const startFrame = frame;
        let lastPulseFrame = frame;
        for (let i = 0; i < 200; i++) {
            // We expect a pulse every period.
            const expectedPulse = this.isPulseAt(frame, this.peakThreshold);
            if (expectedPulse.resultType !== PulseResultType.PULSE) {
                waveformAnnotations.push(new LabelAnnotation("Missing pulse", startFrame, expectedPulse.frame, false));
                return false;
            }
            lastPulseFrame = expectedPulse.frame;
            // And no pulse in between, which would indicate a "1" bit.
            const expectedNoPulse = this.isPulseAt(frame + this.halfPeriod, expectedPulse.range / 2, true);
            if (expectedNoPulse.resultType === PulseResultType.PULSE) {
                waveformAnnotations.push(new LabelAnnotation("Extra pulse", startFrame, expectedNoPulse.frame, false));
                return false;
            }
            frame = expectedPulse.frame + this.period;
        }
        waveformAnnotations.push(new LabelAnnotation("Proof", startFrame, lastPulseFrame, false));
        return true;
    }
    /**
     * Load the program starting at the start frame.
     */
    loadData(startFrame, waveformAnnotations) {
        // We want a sequence of 0 bit followed by the sync byte, so initialize our recent bits to
        // all ones so that if we happen to land at the beginning of a sync byte (preceded by
        // non-zeros) we don't wrongly detect it. Force all these 1s to get flushed out by
        // real zeros.
        let recentBits = 0xFFFFFFFF;
        let frame = startFrame;
        let foundSyncByte = false;
        let bitCount = 0;
        let allowLateClockPulse = false;
        const bitData = [];
        const byteData = [];
        const binary = [];
        while (true) {
            const [bit, clockPulse, dataPulse] = this.readBit(frame, allowLateClockPulse);
            allowLateClockPulse = false;
            if (clockPulse.resultType === PulseResultType.SILENCE) {
                // End of program.
                break;
            }
            if (clockPulse.resultType === PulseResultType.NOISE) {
                const nextFrame = frame + this.period;
                recentBits = (recentBits << 1) | 0;
                bitData.push(new BitData(nextFrame - this.quarterPeriod, nextFrame + this.period - this.quarterPeriod, BitType.BAD));
                frame = nextFrame;
            }
            else {
                const nextFrame = clockPulse.frame;
                recentBits = (recentBits << 1) | (bit ? 1 : 0);
                bitData.push(new BitData(nextFrame - this.quarterPeriod, nextFrame + this.period - this.quarterPeriod, bit ? BitType.ONE : BitType.ZERO));
                if (foundSyncByte) {
                    bitCount += 1;
                    if (bitCount === 8) {
                        const byteValue = recentBits & 0xFF;
                        binary.push(byteValue);
                        byteData.push(new ByteData(byteValue, bitData[bitData.length - 8].startFrame, bitData[bitData.length - 1].endFrame));
                        bitCount = 0;
                    }
                }
                else {
                    if (recentBits === LowSpeedAnteoTapeDecoder_SYNC_BYTE) {
                        waveformAnnotations.push(new LabelAnnotation("Sync", bitData[bitData.length - 8].startFrame, bitData[bitData.length - 1].endFrame, false));
                        foundSyncByte = true;
                        allowLateClockPulse = true;
                        bitCount = 0;
                    }
                }
                frame = nextFrame;
                this.peakThreshold = Math.round(clockPulse.range / 4);
            }
        }
        // Remove trailing BAD bits, they're probably just junk after the last bit.
        while (bitData.length > 0 && bitData[bitData.length - 1].bitType === BitType.BAD) {
            bitData.splice(bitData.length - 1, 1);
        }
        return new Program_Program(0, 0, startFrame, frame, this, new Uint8Array(binary), bitData, byteData);
    }
    /**
     * Read a bit at position "frame", which should be the position of the previous bit's clock pulse.
     * @return the value of the bit, the clock pulse, and the data pulse.
     */
    readBit(frame, allowLateClockPulse, includeExplanation) {
        // Clock pulse is one period away.
        let clockPulse = this.isPulseAt(frame + this.period, this.peakThreshold, includeExplanation);
        if (clockPulse.resultType !== PulseResultType.PULSE) {
            if (allowLateClockPulse) {
                const latePulse = this.findNextClosePulse(frame + this.period, this.peakThreshold, this.samples[frame] > 0);
                if (latePulse === undefined) {
                    // Failed to find late pulse.
                    return [false, clockPulse, clockPulse];
                }
                clockPulse = latePulse;
            }
            else {
                return [false, clockPulse, clockPulse];
            }
        }
        // Data pulse is half a period after the clock pulse.
        const dataPulse = this.isPulseAt(clockPulse.frame + this.halfPeriod, this.peakThreshold, includeExplanation);
        const bit = dataPulse.resultType === PulseResultType.PULSE;
        return [bit, clockPulse, dataPulse];
    }
    /**
     * Read a sequence of bits (the characters "0" and "1"). Frame is the position of the previous clock bit.
     * This is for testing.
     */
    readBits(frame) {
        let bits = "";
        const waveformAnnotation = [];
        const explanations = [];
        waveformAnnotation.push(new LabelAnnotation("Previous", frame, frame, true));
        while (true) {
            const expectedNextFrame = frame + this.period;
            const [bit, clockPulse, dataPulse] = this.readBit(frame, false, true);
            if (clockPulse.resultType === PulseResultType.NOISE || clockPulse.resultType === PulseResultType.SILENCE) {
                const left = expectedNextFrame - this.quarterPeriod;
                const right = expectedNextFrame + this.period - this.quarterPeriod;
                waveformAnnotation.push(new LabelAnnotation(clockPulse.resultType === PulseResultType.NOISE ? "Noise" : "Silence", left, right, true));
                if (clockPulse.explanation !== "") {
                    explanations.push(clockPulse.explanation);
                }
                waveformAnnotation.push(...clockPulse.waveformAnnotations);
                break;
            }
            const bitChar = bit ? "1" : "0";
            bits += bitChar;
            if (clockPulse.explanation !== "") {
                explanations.push(clockPulse.explanation);
            }
            if (dataPulse.explanation !== "") {
                explanations.push(dataPulse.explanation);
            }
            waveformAnnotation.push(...clockPulse.waveformAnnotations);
            waveformAnnotation.push(...dataPulse.waveformAnnotations);
            const nextFrame = clockPulse.frame;
            const left = nextFrame - this.quarterPeriod;
            const right = nextFrame + this.period - this.quarterPeriod;
            waveformAnnotation.push(new LabelAnnotation(bitChar, left, right, true));
            frame = nextFrame;
            this.peakThreshold = Math.round(clockPulse.range / 4);
        }
        return [bits, waveformAnnotation, explanations];
    }
    /**
     * Look for a pulse in the samples, starting at frame. The pulse may not be the very next one; this
     * is a fast algorithm to find the pulses in the header.
     *
     * @return a pulse if one was found. If one was not found, then the frame ran off the end of the audio.
     */
    findPulse(frame, threshold) {
        while (frame < this.samples.length) {
            let maxAbsValue = 0;
            let maxPulse = undefined;
            for (let i = 0; i < this.period * 2; i += this.pulseSearchRadius) {
                const pulse = this.isPulseAt(frame + i, LowSpeedAnteoTapeDecoder_LowSpeedAnteoTapeDecoder.DEFAULT_THRESHOLD);
                if (pulse.resultType === PulseResultType.PULSE) {
                    const absValue = Math.abs(pulse.value);
                    if (absValue > maxAbsValue) {
                        maxAbsValue = absValue;
                        maxPulse = pulse;
                    }
                }
            }
            if (maxPulse !== undefined) {
                return maxPulse;
            }
            frame += this.period * 50;
        }
        return undefined;
    }
    /**
     * Find the very next pulse of the specified polarity. The pulse must be in the next two periods.
     */
    findNextClosePulse(frame, threshold, positive) {
        for (let i = 0; i < this.period * 2; i += this.pulseSearchRadius) {
            const pulse = this.isPulseAt(frame + i, threshold);
            if (pulse.resultType === PulseResultType.PULSE && (positive ? (pulse.value > 0) : (pulse.value < 0))) {
                return pulse;
            }
        }
        return undefined;
    }
    /**
     * Look for a pulse around frame.
     */
    isPulseAt(frame, peakThreshold, includeExplanation) {
        const searchStart = Math.max(frame - this.pulseSearchRadius, 0);
        const searchEnd = Math.min(frame + this.pulseSearchRadius, this.samples.length - 1);
        // Find min and max around frame.
        let minFrame = searchStart;
        let maxFrame = searchStart;
        let minValue = this.samples[minFrame];
        let maxValue = this.samples[maxFrame];
        for (let frame = searchStart; frame <= searchEnd; frame++) {
            const value = this.samples[frame];
            if (value < minValue) {
                minValue = value;
                minFrame = frame;
            }
            if (value > maxValue) {
                maxValue = value;
                maxFrame = frame;
            }
        }
        const range = maxValue - minValue;
        let pulseEndOffset = peakThreshold / 4;
        const posPulseEndThreshold = maxValue - pulseEndOffset;
        const negPulseEndThreshold = minValue + pulseEndOffset;
        const annotations = [];
        if (range > peakThreshold) {
            if (includeExplanation) {
                annotations.push(new PointAnnotation(searchStart, this.samples[searchStart]));
                annotations.push(new PointAnnotation(searchEnd, this.samples[searchEnd]));
                annotations.push(new HorizontalLineAnnotation(posPulseEndThreshold, searchStart, searchEnd));
                annotations.push(new HorizontalLineAnnotation(negPulseEndThreshold, searchStart, searchEnd));
            }
            let foundPosPulse = this.samples[searchStart] < posPulseEndThreshold &&
                this.samples[searchEnd] < posPulseEndThreshold;
            let foundNegPulse = this.samples[searchStart] > negPulseEndThreshold &&
                this.samples[searchEnd] > negPulseEndThreshold;
            // If we found both, prefer the one that has the highest peak.
            if (foundPosPulse && foundNegPulse) {
                if (maxValue > -minValue) {
                    foundNegPulse = false;
                }
                else {
                    foundPosPulse = false;
                }
            }
            if (foundPosPulse) {
                const explanation = includeExplanation ?
                    "Looked for pulse at " + withCommas(frame) + " and found it at " + withCommas(maxFrame) +
                        ", which is within the search radius of " + withCommas(this.pulseSearchRadius) + ". " +
                        "Range " + withCommas(range) + " is greater than pulse threshold " + withCommas(peakThreshold) +
                        ", start " + withCommas(this.samples[searchStart]) + " < " + withCommas(posPulseEndThreshold) +
                        ", and end " + withCommas(this.samples[searchEnd]) + " < " + withCommas(posPulseEndThreshold) + "." : "";
                let pulse = new Pulse(PulseResultType.PULSE, maxValue, maxFrame, range, explanation);
                if (includeExplanation) {
                    pulse.waveformAnnotations.push(new PointAnnotation(pulse.frame, pulse.value));
                    pulse.waveformAnnotations.push(new VerticalLineAnnotation(frame));
                    pulse.waveformAnnotations.push(...annotations);
                }
                return pulse;
            }
            if (foundNegPulse) {
                const explanation = includeExplanation ?
                    "Looked for pulse at " + withCommas(frame) + " and found it at " + withCommas(minFrame) +
                        ", which is within the search radius of " + withCommas(this.pulseSearchRadius) + ". " +
                        "Range " + withCommas(range) + " is greater than pulse threshold " + withCommas(peakThreshold) +
                        ", start " + withCommas(this.samples[searchStart]) + " > " + withCommas(negPulseEndThreshold) +
                        ", and end " + withCommas(this.samples[searchEnd]) + " > " + withCommas(negPulseEndThreshold) + "." : "";
                const pulse = new Pulse(PulseResultType.PULSE, minValue, minFrame, range, explanation);
                if (includeExplanation) {
                    pulse.waveformAnnotations.push(new PointAnnotation(pulse.frame, pulse.value));
                    pulse.waveformAnnotations.push(new VerticalLineAnnotation(frame));
                    pulse.waveformAnnotations.push(...annotations);
                }
                return pulse;
            }
            const explanation = includeExplanation ? "Range " + range + " is greater than pulse threshold " + withCommas(peakThreshold) +
                " but the sides don't pull away enough." : "";
            const pulse = new Pulse(PulseResultType.NOISE, 0, 0, 0, explanation);
            pulse.waveformAnnotations.push(...annotations);
            return pulse;
        }
        const noiseThreshold = peakThreshold / 2;
        if (range > noiseThreshold) {
            const explanation = includeExplanation ? "Range " + range + " is less than pulse threshold " + withCommas(peakThreshold) +
                " but greater than noise threshold " + noiseThreshold + "." : "";
            const pulse = new Pulse(PulseResultType.NOISE, 0, 0, 0, explanation);
            pulse.waveformAnnotations.push(...annotations);
            return pulse;
        }
        const explanation = includeExplanation ? "Range " + range + " is less than or equal to noise threshold " + noiseThreshold + "." : "";
        let pulse = new Pulse(PulseResultType.SILENCE, 0, 0, 0, explanation);
        pulse.waveformAnnotations.push(...annotations);
        return pulse;
    }
    getBinary() {
        return new Uint8Array(0);
    }
    getBitData() {
        return [];
    }
    getByteData() {
        return [];
    }
    getName() {
        return "Low speed (Anteo)";
    }
    isHighSpeed() {
        return false;
    }
    getState() {
        return this.state;
    }
}
LowSpeedAnteoTapeDecoder_LowSpeedAnteoTapeDecoder.DEFAULT_THRESHOLD = 3000;

// CONCATENATED MODULE: ./src/Decoder.ts
// Uses tape decoders to work through the tape, finding programs and decoding them.




class Transition {
    constructor(candidate, isStart, frame) {
        this.candidate = candidate;
        this.isStart = isStart;
        this.frame = frame;
    }
}
/**
 * Uses various decoders to decode an audio file.
 */
class Decoder_Decoder {
    constructor(tape) {
        this.tape = tape;
    }
    /**
     * Decode the tape, populating the tape's "programs" array.
     */
    decode() {
        let sampleLength = this.tape.filteredSamples.samplesList[0].length;
        // All decoders we're interested in. We use factories because they're created
        // multiple times, once for each program found.
        let tapeDecoderFactories = [
            // () => new LowSpeedTapeDecoder(this.tape, true),
            // () => new LowSpeedTapeDecoder(this.tape, false),
            () => new LowSpeedAnteoTapeDecoder_LowSpeedAnteoTapeDecoder(this.tape),
            () => new HighSpeedTapeDecoder_HighSpeedTapeDecoder(this.tape),
        ];
        // All programs we detect.
        const candidates = [];
        // Clear all annotations.
        this.tape.waveformAnnotations.splice(0, this.tape.waveformAnnotations.length);
        // Try each decoder, feeding it the whole tape.
        for (const tapeDecoderFactory of tapeDecoderFactories) {
            let startFrame = 0;
            while (true) {
                const tapeDecoder = tapeDecoderFactory();
                const program = tapeDecoder.findNextProgram(startFrame, this.tape.waveformAnnotations);
                if (program === undefined) {
                    break;
                }
                candidates.push(program);
                startFrame = Math.round(program.endFrame + this.tape.sampleRate * 0.01);
            }
        }
        // Make a sorted list of start/end of candidates.
        const transitions = [];
        for (const candidate of candidates) {
            transitions.push(new Transition(candidate, true, candidate.startFrame));
            transitions.push(new Transition(candidate, false, candidate.endFrame));
        }
        transitions.sort((a, b) => a.frame - b.frame);
        // Go through them, keeping track of which candidates are active, and deleting
        // clearly bad candidates (those completely nested in others).
        candidates.splice(0, candidates.length);
        const activeCandidates = [];
        for (const transition of transitions) {
            // See if this new one is nested in an active one.
            if (transition.isStart) {
                let keepCandidate = true;
                for (const candidate of activeCandidates) {
                    if (transition.candidate.isNestedIn(candidate, this.tape.sampleRate * 0.1)) {
                        keepCandidate = false;
                        break;
                    }
                }
                if (keepCandidate) {
                    activeCandidates.push(transition.candidate);
                    candidates.push(transition.candidate);
                }
            }
            else {
                const index = activeCandidates.indexOf(transition.candidate);
                if (index !== -1) {
                    activeCandidates.splice(index, 1);
                }
            }
        }
        // Sort programs by tape order.
        candidates.sort((a, b) => a.startFrame - b.startFrame);
        // Convert remaining candidates to programs.
        let trackNumber = 0;
        let copyNumber = 0;
        let endOfLastProgram = 0;
        for (const candidate of candidates) {
            // Skip very short programs, they're mis-detects.
            if (candidate.endFrame - candidate.startFrame > this.tape.sampleRate / 10) {
                // See how long it took to find it. A large gap means a new track.
                const leadTime = (candidate.startFrame - endOfLastProgram) / this.tape.sampleRate;
                if (trackNumber === 0 || leadTime > 5) {
                    trackNumber++;
                    copyNumber = 1;
                }
                else {
                    copyNumber += 1;
                }
                candidate.trackNumber = trackNumber;
                candidate.copyNumber = copyNumber;
                candidate.setReconstructedSamples(this.reencode(candidate.binary));
                this.tape.addProgram(candidate);
                endOfLastProgram = candidate.endFrame;
            }
        }
    }
    /**
     * Re-encodes a binary as a clean low-speed audio.
     */
    reencode(binary) {
        // Here we could re-encode in either low speed or high speed. Do low speed so that
        // the audio is usable on a Model I.
        if (true) {
            return encodeLowSpeed(wrapLowSpeed(binary), this.tape.sampleRate);
        }
        else {}
    }
}

// CONCATENATED MODULE: ./src/LowSpeedTapeDecoder.ts






/**
 * Number of consecutive zero bits we require in the header before we're pretty
 * sure this is a low speed program.
 */
const MIN_HEADER_ZEROS = 6;
class LowSpeedTapeDecoder_LowSpeedTapeDecoder {
    constructor(tape, invert) {
        this.programBytes = [];
        this.byteData = [];
        this.tape = tape;
        this.invert = invert;
        this.state = TapeDecoderState.UNDECIDED;
        // The frame where we last detected a pulse.
        this.lastPulseFrame = 0;
        this.eatNextPulse = false;
        this.bitCount = 0;
        this.recentBits = 0;
        this.lenientFirstBit = false;
        this.detectedZeros = 0;
        // Height of the previous pulse. We set each pulse's threshold
        // to 1/3 of the previous pulse's height.
        this.pulseHeight = 0;
        this.bitData = [];
        this.pulseCount = 0;
        // Number of samples between start of pulse detection and end of pulse. Once
        // we detect a pulse, we ignore this number of samples.
        // TODO make tape.sampleRate-sensitive.
        this.pulseWidth = 22;
        // Number of samples that determines a zero (longer) or one (shorter) bit.
        // TODO make tape.sampleRate-sensitive.
        this.bitDeterminator = 68;
        // Number of quiet samples that would indicate the end of the program.
        this.endOfProgramSilence = tape.sampleRate / 10;
    }
    /**
     * Differentiating filter to accentuate pulses.
     *
     * @param samples samples to filter.
     * @param sampleRate number of samples per second in the recording.
     * @returns filtered samples.
     */
    static filterSamples(samples, sampleRate) {
        const out = new Int16Array(samples.length);
        // Number of samples between the top of the pulse and the bottom of it. Each pulse
        // lasts 125µs, so assume the distance between crest and trough is 125µs.
        const pulseWidth = Math.round(125e-6 * sampleRate);
        if (false) {}
        else {
            // Convolution with a pulse similar to what the original should have looked like (125 µs pulse
            // up, then 125 µs pulse down).
            let posSum = 0;
            let negSum = 0;
            let denom = pulseWidth * 2;
            for (let i = 0; i < samples.length; i++) {
                let aheadSample = i + pulseWidth >= samples.length ? 0 : samples[i + pulseWidth];
                let nowSample = samples[i];
                let behindSample = i - pulseWidth < 0 ? 0 : samples[i - pulseWidth];
                posSum += nowSample - behindSample;
                negSum += aheadSample - nowSample;
                out[i] = clampToInt16((posSum - negSum) / denom);
            }
        }
        return out;
    }
    getName() {
        return "Low speed" + (this.invert ? " (Inv)" : "");
    }
    isHighSpeed() {
        return false;
    }
    findNextProgram(startFrame, waveformAnnotation) {
        const samples = this.tape.lowSpeedSamples.samplesList[0];
        let programStartFrame = -1;
        for (let frame = startFrame; frame < samples.length; frame++) {
            this.handleSample(frame);
            if (this.state === TapeDecoderState.DETECTED && programStartFrame === -1) {
                programStartFrame = frame;
            }
            if (this.state === TapeDecoderState.FINISHED && programStartFrame !== -1) {
                return new Program_Program(0, 0, programStartFrame, frame, this, this.getBinary(), this.getBitData(), this.getByteData());
            }
        }
        return undefined;
    }
    handleSample(frame) {
        const samples = this.tape.lowSpeedSamples.samplesList[0];
        const pulse = this.invert ? -samples[frame] : samples[frame];
        const timeDiff = frame - this.lastPulseFrame;
        const pulsing = timeDiff > this.pulseWidth && pulse >= this.pulseHeight / 3;
        // Keep track of the height of this pulse, to calibrate for the next one.
        if (timeDiff < this.pulseWidth) {
            this.pulseHeight = Math.max(this.pulseHeight, pulse);
        }
        if (this.state === TapeDecoderState.DETECTED && timeDiff > this.endOfProgramSilence) {
            // End of program.
            this.state = TapeDecoderState.FINISHED;
        }
        else if (pulsing) {
            const bit = timeDiff < this.bitDeterminator;
            if (this.pulseCount++ === 1000) {
                // For debugging, forces a detection so we can inspect the bits.
                /// this.state = TapeDecoderState.DETECTED;
            }
            if (this.eatNextPulse) {
                if (this.state === TapeDecoderState.DETECTED && !bit && !this.lenientFirstBit) {
                    this.bitData.push(new BitData(this.lastPulseFrame, frame, BitType.BAD));
                }
                else {
                    const lastBit = this.bitData[this.bitData.length - 1];
                    if (lastBit && lastBit.bitType === BitType.ONE && lastBit.endFrame === this.lastPulseFrame) {
                        // Merge with previous 1 bit.
                        lastBit.endFrame = frame;
                    }
                    const lastByte = this.byteData[this.byteData.length - 1];
                    if (lastByte && lastByte.endFrame === this.lastPulseFrame) {
                        // Adjust last bit.
                        lastByte.endFrame = frame;
                    }
                }
                this.eatNextPulse = false;
                this.lenientFirstBit = false;
            }
            else {
                // If we see a 1 in the header, reset the count. We want a bunch of consecutive zeros.
                if (bit && this.state === TapeDecoderState.UNDECIDED && this.detectedZeros < MIN_HEADER_ZEROS) {
                    // Still not in header. Reset count.
                    this.detectedZeros = 0;
                }
                else {
                    if (bit) {
                        this.eatNextPulse = true;
                    }
                    else {
                        this.detectedZeros += 1;
                    }
                    this.recentBits = (this.recentBits << 1) | (bit ? 1 : 0);
                    if (this.lastPulseFrame !== 0) {
                        this.bitData.push(new BitData(this.lastPulseFrame, frame, bit ? BitType.ONE : BitType.ZERO));
                    }
                    if (this.state === TapeDecoderState.UNDECIDED) {
                        // Haven't found end of header yet. Look for it, preceded by zeros.
                        if (this.recentBits === 0x000000A5) {
                            this.bitCount = 0;
                            // For some reason we don't get a clock after this last 1.
                            this.lenientFirstBit = true;
                            this.state = TapeDecoderState.DETECTED;
                        }
                    }
                    else {
                        this.bitCount += 1;
                        if (this.bitCount === 8) {
                            let byteValue = this.recentBits & 0xFF;
                            this.programBytes.push(byteValue);
                            this.byteData.push(new ByteData(byteValue, this.bitData[this.bitData.length - 8].startFrame, frame));
                            this.bitCount = 0;
                        }
                    }
                }
            }
            this.lastPulseFrame = frame;
            this.pulseHeight = 0;
        }
    }
    getState() {
        return this.state;
    }
    getBinary() {
        const bytes = new Uint8Array(this.programBytes.length);
        for (let i = 0; i < bytes.length; i++) {
            bytes[i] = this.programBytes[i];
        }
        return bytes;
    }
    getBitData() {
        return this.bitData;
    }
    getByteData() {
        return this.byteData;
    }
    readBits(frame) {
        throw new Error("Method not implemented.");
    }
}

// CONCATENATED MODULE: ./src/Tape.ts
// Represents a recorded tape, with its audio samples,
// filtered-down samples for display, and other information
// we got from it.




const LOCAL_DATA_KEY = "tapes";
class Tape_Tape {
    /**
     * @param name text to display (e.g., "LOAD80-Feb82-s1").
     * @param audioFile original samples from the tape.
     */
    constructor(name, audioFile) {
        this.notes = "";
        this.waveformAnnotations = [];
        this.onName = new dist["SimpleEventDispatcher"]();
        this.onNotes = new dist["SimpleEventDispatcher"]();
        this.name = name;
        this.originalSamples = new DisplaySamples(audioFile.samples);
        this.filteredSamples = new DisplaySamples(highPassFilter(audioFile.samples, 500));
        this.lowSpeedSamples = new DisplaySamples(LowSpeedTapeDecoder_LowSpeedTapeDecoder.filterSamples(this.filteredSamples.samplesList[0], audioFile.rate));
        this.sampleRate = audioFile.rate;
        this.programs = [];
    }
    addProgram(program) {
        this.programs.push(program);
    }
    /**
     * Set the name of the tape, as set by the user.
     */
    setName(name) {
        if (name !== this.name) {
            this.name = name;
            this.onName.dispatch(name);
        }
    }
    /**
     * Set the notes for the tape, as set by the user.
     */
    setNotes(notes) {
        if (notes !== this.notes) {
            this.notes = notes;
            this.onNotes.dispatch(notes);
        }
    }
    /**
     * Listen for changes to local storage and apply them.
     */
    listenForStorageChanges() {
        window.addEventListener("storage", event => {
            if (event.key === LOCAL_DATA_KEY) {
                this.loadUserData();
            }
        });
    }
    /**
     * Load the saved user data and apply to existing programs.
     */
    loadUserData() {
        var _a, _b, _c;
        const data = Tape_Tape.loadAllData();
        for (const tapeData of data.tapes) {
            if (tapeData.name === this.name) {
                this.notes = tapeData.notes;
                for (const programData of tapeData.programs) {
                    for (const program of this.programs) {
                        if (program.isForTimestamp(programData.timestamp, this.sampleRate)) {
                            program.setName((_a = programData.name, (_a !== null && _a !== void 0 ? _a : "")));
                            program.setNotes((_b = programData.notes, (_b !== null && _b !== void 0 ? _b : "")));
                            program.setScreenshot((_c = programData.screenshot, (_c !== null && _c !== void 0 ? _c : "")));
                        }
                    }
                }
            }
        }
    }
    /**
     * Synchronously saves all user data (names and notes) to local storage.
     */
    saveUserData() {
        const data = {
            tapes: [
                {
                    name: this.name,
                    notes: this.notes,
                    programs: this.programs.map(program => ({
                        name: program.name,
                        notes: program.notes,
                        screenshot: program.screenshot,
                        timestamp: program.getTimestamp(this.sampleRate),
                    })),
                },
            ],
        };
        Tape_Tape.saveAllDataAsJson(JSON.stringify(data));
    }
    /**
     * Get user data as a SavedData object.
     */
    static loadAllData() {
        const jsonData = window.localStorage.getItem(LOCAL_DATA_KEY);
        if (jsonData === null) {
            return { tapes: [] };
        }
        return JSON.parse(jsonData);
    }
    /**
     * Get user data as a formatted JSON object.
     */
    static getAllDataAsJson() {
        // Re-format it nicely.
        return JSON.stringify(this.loadAllData(), null, 2);
    }
    /**
     * Set the full data from a JSON string.
     */
    static saveAllDataAsJson(jsonData) {
        window.localStorage.setItem(LOCAL_DATA_KEY, jsonData);
    }
}

// CONCATENATED MODULE: ./src/Basic.ts
// Tools for decoding Basic programs.


const BASIC_HEADER_BYTE = 0xD3;
// Starts at 0x80.
const TOKENS = [
    "END", "FOR", "RESET", "SET", "CLS", "CMD", "RANDOM", "NEXT",
    "DATA", "INPUT", "DIM", "READ", "LET", "GOTO", "RUN", "IF",
    "RESTORE", "GOSUB", "RETURN", "REM", "STOP", "ELSE", "TRON", "TROFF",
    "DEFSTR", "DEFINT", "DEFSNG", "DEFDBL", "LINE", "EDIT", "ERROR", "RESUME",
    "OUT", "ON", "OPEN", "FIELD", "GET", "PUT", "CLOSE", "LOAD",
    "MERGE", "NAME", "KILL", "LSET", "RSET", "SAVE", "SYSTEM", "LPRINT",
    "DEF", "POKE", "PRINT", "CONT", "LIST", "LLIST", "DELETE", "AUTO",
    "CLEAR", "CLOAD", "CSAVE", "NEW", "TAB(", "TO", "FN", "USING",
    "VARPTR", "USR", "ERL", "ERR", "STRING", "INSTR", "POINT", "TIME$",
    "MEM", "INKEY$", "THEN", "NOT", "STEP", "+", "-", "*",
    "/", "[", "AND", "OR", ">", "=", "<", "SGN",
    "INT", "ABS", "FRE", "INP", "POS", "SQR", "RND", "LOG",
    "EXP", "COS", "SIN", "TAN", "ATN", "PEEK", "CVI", "CVS",
    "CVD", "EOF", "LOC", "LOF", "MKI", "MKS$", "MKD$", "CINT",
    "CSNG", "CDBL", "FIX", "LEN", "STR$", "VAL", "ASC", "CHR$",
    "LEFT$", "RIGHT$", "MID$",
];
const REM = 0x93;
const DATA = 0x88;
const REMQUOT = 0xFB;
const ELSE = 0x95;
/**
 * Parser state.
 */
// Normal part of line.
const NORMAL = 0;
// Inside string literal.
const STRING_LITERAL = 1;
// After REM or DATA statement to end of line.
const RAW = 2;
// Just ate a colon.
const COLON = 3;
// Just ate a colon and a REM.
const COLON_REM = 4;
/**
 * Get the token for the byte value, or undefined if the value does
 * not map to a token.
 */
function getToken(c) {
    return c >= 128 && c < 128 + TOKENS.length ? TOKENS[c - 128] : undefined;
}
/**
 * Type of Basic element, for syntax highlighting.
 */
var ElementType;
(function (ElementType) {
    ElementType[ElementType["ERROR"] = 0] = "ERROR";
    ElementType[ElementType["LINE_NUMBER"] = 1] = "LINE_NUMBER";
    ElementType[ElementType["PUNCTUATION"] = 2] = "PUNCTUATION";
    ElementType[ElementType["KEYWORD"] = 3] = "KEYWORD";
    ElementType[ElementType["REGULAR"] = 4] = "REGULAR";
    ElementType[ElementType["STRING"] = 5] = "STRING";
    ElementType[ElementType["COMMENT"] = 6] = "COMMENT";
})(ElementType || (ElementType = {}));
/**
 * Piece of a Basic program (token, character, line number).
 */
class BasicElement {
    constructor(offset, text, elementType) {
        // Length of section in "bytes" array.
        this.length = 1;
        this.offset = offset;
        this.text = text;
        this.elementType = elementType;
    }
}
/**
 * Adds the header bytes necessary for writing Basic cassettes.
 */
function wrapBasic(bytes) {
    // Add Basic header.
    const buffers = [
        new Uint8Array([BASIC_HEADER_BYTE, BASIC_HEADER_BYTE, BASIC_HEADER_BYTE]),
        bytes,
    ];
    return concatByteArrays(buffers);
}
/**
 * Decode a tokenized Basic program.
 * @param bytes tokenized program.
 * @return array of generated BasicElements, index by byte index.
 */
function fromTokenized(bytes) {
    const b = new ByteReader(bytes);
    let state;
    // Map from byte address to BasicElement for that byte.
    const elements = [];
    if (b.read() !== BASIC_HEADER_BYTE || b.read() !== BASIC_HEADER_BYTE || b.read() !== BASIC_HEADER_BYTE) {
        elements.push(new BasicElement(undefined, "Basic: missing magic -- not a BASIC file.", ElementType.ERROR));
        return elements;
    }
    // One-byte ASCII program name. This is nearly always meaningless, so we do nothing with it.
    b.read();
    while (true) {
        // Read the address of the next line. We ignore this (as does Basic when
        // loading programs), only using it to detect end of program. (In the real
        // Basic these are regenerated after loading.)
        const address = b.readShort(true);
        if (address === EOF) {
            elements.push(new BasicElement(undefined, "[EOF in next line's address]", ElementType.ERROR));
            break;
        }
        // Zero address indicates end of program.
        if (address === 0) {
            break;
        }
        // Read current line number.
        const lineNumber = b.readShort(false);
        if (lineNumber === EOF) {
            elements.push(new BasicElement(undefined, "[EOF in line number]", ElementType.ERROR));
            break;
        }
        let lineNumberElement = new BasicElement(b.addr() - 2, lineNumber.toString(), ElementType.LINE_NUMBER);
        lineNumberElement.length = 2;
        elements.push(lineNumberElement);
        elements.push(new BasicElement(undefined, " ", ElementType.REGULAR));
        // Read rest of line.
        let c; // Uint8 value.
        let ch; // String value.
        let colonAddr = 0;
        state = NORMAL;
        while (true) {
            c = b.read();
            if (c === EOF || c === 0) {
                break;
            }
            ch = String.fromCharCode(c);
            // Detect the ":REM'" sequence (colon, REM, single quote), because
            // that translates to a single quote. Must be a backward-compatible
            // way to add a single quote as a comment.
            if (ch === ":" && state === NORMAL) {
                state = COLON;
                colonAddr = b.addr() - 1;
            }
            else if (ch === ":" && state === COLON) {
                elements.push(new BasicElement(colonAddr, ":", ElementType.PUNCTUATION));
                colonAddr = b.addr() - 1;
            }
            else if (c === REM && state === COLON) {
                state = COLON_REM;
                colonAddr = 0;
            }
            else if (c === REMQUOT && state === COLON_REM) {
                elements.push(new BasicElement(b.addr() - 1, "'", ElementType.COMMENT));
                state = RAW;
            }
            else if (c === ELSE && state === COLON) {
                elements.push(new BasicElement(b.addr() - 1, "ELSE", ElementType.KEYWORD));
                state = NORMAL;
                colonAddr = 0;
            }
            else {
                if (state === COLON || state === COLON_REM) {
                    elements.push(new BasicElement(colonAddr, ":", ElementType.PUNCTUATION));
                    if (state === COLON_REM) {
                        elements.push(new BasicElement(b.addr() - 1, "REM", ElementType.COMMENT));
                        state = RAW;
                    }
                    else {
                        state = NORMAL;
                    }
                    colonAddr = 0;
                }
                switch (state) {
                    case NORMAL:
                        const token = getToken(c);
                        elements.push(token !== undefined
                            ? new BasicElement(b.addr() - 1, token, c === DATA || c === REM ? ElementType.COMMENT
                                : token.length === 1 ? ElementType.PUNCTUATION
                                    : ElementType.KEYWORD)
                            : new BasicElement(b.addr() - 1, ch, ch === '"' ? ElementType.STRING : ElementType.REGULAR));
                        if (c === DATA || c === REM) {
                            state = RAW;
                        }
                        else if (ch === '"') {
                            state = STRING_LITERAL;
                        }
                        break;
                    case STRING_LITERAL:
                        var e;
                        if (ch === "\r") {
                            e = new BasicElement(b.addr() - 1, "\\n", ElementType.PUNCTUATION);
                        }
                        else if (ch === "\\") {
                            e = new BasicElement(b.addr() - 1, "\\" + pad(c, 8, 3), ElementType.PUNCTUATION);
                        }
                        else if (c >= 32 && c < 128) {
                            e = new BasicElement(b.addr() - 1, ch, ElementType.STRING);
                        }
                        else {
                            e = new BasicElement(b.addr() - 1, "\\" + pad(c, 8, 3), ElementType.PUNCTUATION);
                        }
                        elements.push(e);
                        if (ch === '"') {
                            // End of string.
                            state = NORMAL;
                        }
                        break;
                    case RAW:
                        elements.push(new BasicElement(b.addr() - 1, ch, ElementType.COMMENT));
                        break;
                }
            }
        }
        if (c === EOF) {
            elements.push(new BasicElement(undefined, "[EOF in line]", ElementType.ERROR));
            break;
        }
        // Deal with eaten tokens.
        if (state === COLON || state === COLON_REM) {
            elements.push(new BasicElement(colonAddr, ":", ElementType.PUNCTUATION));
            if (state === COLON_REM) {
                elements.push(new BasicElement(b.addr() - 1, "REM", ElementType.COMMENT));
            }
            /// state = NORMAL;
            /// colonAddr = 0;
        }
    }
    return elements;
}

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}
// CONCATENATED MODULE: ./node_modules/is-in-browser/dist/module.js
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var isBrowser = (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" && (typeof document === "undefined" ? "undefined" : _typeof(document)) === 'object' && document.nodeType === 9;

/* harmony default export */ var dist_module = (isBrowser);

// CONCATENATED MODULE: ./node_modules/tiny-warning/dist/tiny-warning.esm.js
var isProduction = "production" === 'production';
function warning(condition, message) {
  if (!isProduction) {
    if (condition) {
      return;
    }

    var text = "Warning: " + message;

    if (typeof console !== 'undefined') {
      console.warn(text);
    }

    try {
      throw Error(text);
    } catch (x) {}
  }
}

/* harmony default export */ var tiny_warning_esm = (warning);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}
// CONCATENATED MODULE: ./node_modules/jss/dist/jss.esm.js








var plainObjectConstrurctor = {}.constructor;
function cloneStyle(style) {
  if (style == null || typeof style !== 'object') return style;
  if (Array.isArray(style)) return style.map(cloneStyle);
  if (style.constructor !== plainObjectConstrurctor) return style;
  var newStyle = {};

  for (var name in style) {
    newStyle[name] = cloneStyle(style[name]);
  }

  return newStyle;
}

/**
 * Create a rule instance.
 */

function createRule(name, decl, options) {
  if (name === void 0) {
    name = 'unnamed';
  }

  var jss = options.jss;
  var declCopy = cloneStyle(decl);
  var rule = jss.plugins.onCreateRule(name, declCopy, options);
  if (rule) return rule; // It is an at-rule and it has no instance.

  if (name[0] === '@') {
     false ? undefined : void 0;
  }

  return null;
}

var join = function join(value, by) {
  var result = '';

  for (var i = 0; i < value.length; i++) {
    // Remove !important from the value, it will be readded later.
    if (value[i] === '!important') break;
    if (result) result += by;
    result += value[i];
  }

  return result;
};
/**
 * Converts array values to string.
 *
 * `margin: [['5px', '10px']]` > `margin: 5px 10px;`
 * `border: ['1px', '2px']` > `border: 1px, 2px;`
 * `margin: [['5px', '10px'], '!important']` > `margin: 5px 10px !important;`
 * `color: ['red', !important]` > `color: red !important;`
 */


function toCssValue(value, ignoreImportant) {
  if (ignoreImportant === void 0) {
    ignoreImportant = false;
  }

  if (!Array.isArray(value)) return value;
  var cssValue = ''; // Support space separated values via `[['5px', '10px']]`.

  if (Array.isArray(value[0])) {
    for (var i = 0; i < value.length; i++) {
      if (value[i] === '!important') break;
      if (cssValue) cssValue += ', ';
      cssValue += join(value[i], ' ');
    }
  } else cssValue = join(value, ', '); // Add !important, because it was ignored.


  if (!ignoreImportant && value[value.length - 1] === '!important') {
    cssValue += ' !important';
  }

  return cssValue;
}

/**
 * Indent a string.
 * http://jsperf.com/array-join-vs-for
 */
function indentStr(str, indent) {
  var result = '';

  for (var index = 0; index < indent; index++) {
    result += '  ';
  }

  return result + str;
}
/**
 * Converts a Rule to CSS string.
 */


function toCss(selector, style, options) {
  if (options === void 0) {
    options = {};
  }

  var result = '';
  if (!style) return result;
  var _options = options,
      _options$indent = _options.indent,
      indent = _options$indent === void 0 ? 0 : _options$indent;
  var fallbacks = style.fallbacks;
  if (selector) indent++; // Apply fallbacks first.

  if (fallbacks) {
    // Array syntax {fallbacks: [{prop: value}]}
    if (Array.isArray(fallbacks)) {
      for (var index = 0; index < fallbacks.length; index++) {
        var fallback = fallbacks[index];

        for (var prop in fallback) {
          var value = fallback[prop];

          if (value != null) {
            if (result) result += '\n';
            result += "" + indentStr(prop + ": " + toCssValue(value) + ";", indent);
          }
        }
      }
    } else {
      // Object syntax {fallbacks: {prop: value}}
      for (var _prop in fallbacks) {
        var _value = fallbacks[_prop];

        if (_value != null) {
          if (result) result += '\n';
          result += "" + indentStr(_prop + ": " + toCssValue(_value) + ";", indent);
        }
      }
    }
  }

  for (var _prop2 in style) {
    var _value2 = style[_prop2];

    if (_value2 != null && _prop2 !== 'fallbacks') {
      if (result) result += '\n';
      result += "" + indentStr(_prop2 + ": " + toCssValue(_value2) + ";", indent);
    }
  } // Allow empty style in this case, because properties will be added dynamically.


  if (!result && !options.allowEmpty) return result; // When rule is being stringified before selector was defined.

  if (!selector) return result;
  indent--;
  if (result) result = "\n" + result + "\n";
  return indentStr(selector + " {" + result, indent) + indentStr('}', indent);
}

var escapeRegex = /([[\].#*$><+~=|^:(),"'`\s])/g;
var nativeEscape = typeof CSS !== 'undefined' && CSS.escape;
var jss_esm_escape = (function (str) {
  return nativeEscape ? nativeEscape(str) : str.replace(escapeRegex, '\\$1');
});

var BaseStyleRule =
/*#__PURE__*/
function () {
  function BaseStyleRule(key, style, options) {
    this.type = 'style';
    this.key = void 0;
    this.isProcessed = false;
    this.style = void 0;
    this.renderer = void 0;
    this.renderable = void 0;
    this.options = void 0;
    var sheet = options.sheet,
        Renderer = options.Renderer;
    this.key = key;
    this.options = options;
    this.style = style;
    if (sheet) this.renderer = sheet.renderer;else if (Renderer) this.renderer = new Renderer();
  }
  /**
   * Get or set a style property.
   */


  var _proto = BaseStyleRule.prototype;

  _proto.prop = function prop(name, value, options) {
    // It's a getter.
    if (value === undefined) return this.style[name]; // Don't do anything if the value has not changed.

    var force = options ? options.force : false;
    if (!force && this.style[name] === value) return this;
    var newValue = value;

    if (!options || options.process !== false) {
      newValue = this.options.jss.plugins.onChangeValue(value, name, this);
    }

    var isEmpty = newValue == null || newValue === false;
    var isDefined = name in this.style; // Value is empty and wasn't defined before.

    if (isEmpty && !isDefined && !force) return this; // We are going to remove this value.

    var remove = isEmpty && isDefined;
    if (remove) delete this.style[name];else this.style[name] = newValue; // Renderable is defined if StyleSheet option `link` is true.

    if (this.renderable && this.renderer) {
      if (remove) this.renderer.removeProperty(this.renderable, name);else this.renderer.setProperty(this.renderable, name, newValue);
      return this;
    }

    var sheet = this.options.sheet;

    if (sheet && sheet.attached) {
       false ? undefined : void 0;
    }

    return this;
  };

  return BaseStyleRule;
}();
var jss_esm_StyleRule =
/*#__PURE__*/
function (_BaseStyleRule) {
  _inheritsLoose(StyleRule, _BaseStyleRule);

  function StyleRule(key, style, options) {
    var _this;

    _this = _BaseStyleRule.call(this, key, style, options) || this;
    _this.selectorText = void 0;
    _this.id = void 0;
    _this.renderable = void 0;
    var selector = options.selector,
        scoped = options.scoped,
        sheet = options.sheet,
        generateId = options.generateId;

    if (selector) {
      _this.selectorText = selector;
    } else if (scoped !== false) {
      _this.id = generateId(_assertThisInitialized(_assertThisInitialized(_this)), sheet);
      _this.selectorText = "." + jss_esm_escape(_this.id);
    }

    return _this;
  }
  /**
   * Set selector string.
   * Attention: use this with caution. Most browsers didn't implement
   * selectorText setter, so this may result in rerendering of entire Style Sheet.
   */


  var _proto2 = StyleRule.prototype;

  /**
   * Apply rule to an element inline.
   */
  _proto2.applyTo = function applyTo(renderable) {
    var renderer = this.renderer;

    if (renderer) {
      var json = this.toJSON();

      for (var prop in json) {
        renderer.setProperty(renderable, prop, json[prop]);
      }
    }

    return this;
  }
  /**
   * Returns JSON representation of the rule.
   * Fallbacks are not supported.
   * Useful for inline styles.
   */
  ;

  _proto2.toJSON = function toJSON() {
    var json = {};

    for (var prop in this.style) {
      var value = this.style[prop];
      if (typeof value !== 'object') json[prop] = value;else if (Array.isArray(value)) json[prop] = toCssValue(value);
    }

    return json;
  }
  /**
   * Generates a CSS string.
   */
  ;

  _proto2.toString = function toString(options) {
    var sheet = this.options.sheet;
    var link = sheet ? sheet.options.link : false;
    var opts = link ? _extends({}, options, {
      allowEmpty: true
    }) : options;
    return toCss(this.selectorText, this.style, opts);
  };

  _createClass(StyleRule, [{
    key: "selector",
    set: function set(selector) {
      if (selector === this.selectorText) return;
      this.selectorText = selector;
      var renderer = this.renderer,
          renderable = this.renderable;
      if (!renderable || !renderer) return;
      var hasChanged = renderer.setSelector(renderable, selector); // If selector setter is not implemented, rerender the rule.

      if (!hasChanged) {
        renderer.replaceRule(renderable, this);
      }
    }
    /**
     * Get selector string.
     */
    ,
    get: function get() {
      return this.selectorText;
    }
  }]);

  return StyleRule;
}(BaseStyleRule);
var pluginStyleRule = {
  onCreateRule: function onCreateRule(name, style, options) {
    if (name[0] === '@' || options.parent && options.parent.type === 'keyframes') {
      return null;
    }

    return new jss_esm_StyleRule(name, style, options);
  }
};

var defaultToStringOptions = {
  indent: 1,
  children: true
};
var atRegExp = /@([\w-]+)/;
/**
 * Conditional rule for @media, @supports
 */

var jss_esm_ConditionalRule =
/*#__PURE__*/
function () {
  function ConditionalRule(key, styles, options) {
    this.type = 'conditional';
    this.at = void 0;
    this.key = void 0;
    this.query = void 0;
    this.rules = void 0;
    this.options = void 0;
    this.isProcessed = false;
    this.renderable = void 0;
    this.key = key; // Key might contain a unique suffix in case the `name` passed by user was duplicate.

    this.query = options.name;
    var atMatch = key.match(atRegExp);
    this.at = atMatch ? atMatch[1] : 'unknown';
    this.options = options;
    this.rules = new jss_esm_RuleList(_extends({}, options, {
      parent: this
    }));

    for (var name in styles) {
      this.rules.add(name, styles[name]);
    }

    this.rules.process();
  }
  /**
   * Get a rule.
   */


  var _proto = ConditionalRule.prototype;

  _proto.getRule = function getRule(name) {
    return this.rules.get(name);
  }
  /**
   * Get index of a rule.
   */
  ;

  _proto.indexOf = function indexOf(rule) {
    return this.rules.indexOf(rule);
  }
  /**
   * Create and register rule, run plugins.
   */
  ;

  _proto.addRule = function addRule(name, style, options) {
    var rule = this.rules.add(name, style, options);
    if (!rule) return null;
    this.options.jss.plugins.onProcessRule(rule);
    return rule;
  }
  /**
   * Generates a CSS string.
   */
  ;

  _proto.toString = function toString(options) {
    if (options === void 0) {
      options = defaultToStringOptions;
    }

    if (options.indent == null) options.indent = defaultToStringOptions.indent;
    if (options.children == null) options.children = defaultToStringOptions.children;

    if (options.children === false) {
      return this.query + " {}";
    }

    var children = this.rules.toString(options);
    return children ? this.query + " {\n" + children + "\n}" : '';
  };

  return ConditionalRule;
}();
var keyRegExp = /@media|@supports\s+/;
var pluginConditionalRule = {
  onCreateRule: function onCreateRule(key, styles, options) {
    return keyRegExp.test(key) ? new jss_esm_ConditionalRule(key, styles, options) : null;
  }
};

var defaultToStringOptions$1 = {
  indent: 1,
  children: true
};
var nameRegExp = /@keyframes\s+([\w-]+)/;
/**
 * Rule for @keyframes
 */

var jss_esm_KeyframesRule =
/*#__PURE__*/
function () {
  function KeyframesRule(key, frames, options) {
    this.type = 'keyframes';
    this.at = '@keyframes';
    this.key = void 0;
    this.name = void 0;
    this.id = void 0;
    this.rules = void 0;
    this.options = void 0;
    this.isProcessed = false;
    this.renderable = void 0;
    var nameMatch = key.match(nameRegExp);

    if (nameMatch && nameMatch[1]) {
      this.name = nameMatch[1];
    } else {
      this.name = 'noname';
       false ? undefined : void 0;
    }

    this.key = this.type + "-" + this.name;
    this.options = options;
    var scoped = options.scoped,
        sheet = options.sheet,
        generateId = options.generateId;
    this.id = scoped === false ? this.name : jss_esm_escape(generateId(this, sheet));
    this.rules = new jss_esm_RuleList(_extends({}, options, {
      parent: this
    }));

    for (var name in frames) {
      this.rules.add(name, frames[name], _extends({}, options, {
        parent: this
      }));
    }

    this.rules.process();
  }
  /**
   * Generates a CSS string.
   */


  var _proto = KeyframesRule.prototype;

  _proto.toString = function toString(options) {
    if (options === void 0) {
      options = defaultToStringOptions$1;
    }

    if (options.indent == null) options.indent = defaultToStringOptions$1.indent;
    if (options.children == null) options.children = defaultToStringOptions$1.children;

    if (options.children === false) {
      return this.at + " " + this.id + " {}";
    }

    var children = this.rules.toString(options);
    if (children) children = "\n" + children + "\n";
    return this.at + " " + this.id + " {" + children + "}";
  };

  return KeyframesRule;
}();
var keyRegExp$1 = /@keyframes\s+/;
var refRegExp = /\$([\w-]+)/g;

var findReferencedKeyframe = function findReferencedKeyframe(val, keyframes) {
  if (typeof val === 'string') {
    return val.replace(refRegExp, function (match, name) {
      if (name in keyframes) {
        return keyframes[name];
      }

       false ? undefined : void 0;
      return match;
    });
  }

  return val;
};
/**
 * Replace the reference for a animation name.
 */


var jss_esm_replaceRef = function replaceRef(style, prop, keyframes) {
  var value = style[prop];
  var refKeyframe = findReferencedKeyframe(value, keyframes);

  if (refKeyframe !== value) {
    style[prop] = refKeyframe;
  }
};

var jss_esm_plugin = {
  onCreateRule: function onCreateRule(key, frames, options) {
    return typeof key === 'string' && keyRegExp$1.test(key) ? new jss_esm_KeyframesRule(key, frames, options) : null;
  },
  // Animation name ref replacer.
  onProcessStyle: function onProcessStyle(style, rule, sheet) {
    if (rule.type !== 'style' || !sheet) return style;
    if ('animation-name' in style) jss_esm_replaceRef(style, 'animation-name', sheet.keyframes);
    if ('animation' in style) jss_esm_replaceRef(style, 'animation', sheet.keyframes);
    return style;
  },
  onChangeValue: function onChangeValue(val, prop, rule) {
    var sheet = rule.options.sheet;

    if (!sheet) {
      return val;
    }

    switch (prop) {
      case 'animation':
        return findReferencedKeyframe(val, sheet.keyframes);

      case 'animation-name':
        return findReferencedKeyframe(val, sheet.keyframes);

      default:
        return val;
    }
  }
};

var jss_esm_KeyframeRule =
/*#__PURE__*/
function (_BaseStyleRule) {
  _inheritsLoose(KeyframeRule, _BaseStyleRule);

  function KeyframeRule() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _BaseStyleRule.call.apply(_BaseStyleRule, [this].concat(args)) || this;
    _this.renderable = void 0;
    return _this;
  }

  var _proto = KeyframeRule.prototype;

  /**
   * Generates a CSS string.
   */
  _proto.toString = function toString(options) {
    var sheet = this.options.sheet;
    var link = sheet ? sheet.options.link : false;
    var opts = link ? _extends({}, options, {
      allowEmpty: true
    }) : options;
    return toCss(this.key, this.style, opts);
  };

  return KeyframeRule;
}(BaseStyleRule);
var pluginKeyframeRule = {
  onCreateRule: function onCreateRule(key, style, options) {
    if (options.parent && options.parent.type === 'keyframes') {
      return new jss_esm_KeyframeRule(key, style, options);
    }

    return null;
  }
};

var FontFaceRule =
/*#__PURE__*/
function () {
  function FontFaceRule(key, style, options) {
    this.type = 'font-face';
    this.at = '@font-face';
    this.key = void 0;
    this.style = void 0;
    this.options = void 0;
    this.isProcessed = false;
    this.renderable = void 0;
    this.key = key;
    this.style = style;
    this.options = options;
  }
  /**
   * Generates a CSS string.
   */


  var _proto = FontFaceRule.prototype;

  _proto.toString = function toString(options) {
    if (Array.isArray(this.style)) {
      var str = '';

      for (var index = 0; index < this.style.length; index++) {
        str += toCss(this.key, this.style[index]);
        if (this.style[index + 1]) str += '\n';
      }

      return str;
    }

    return toCss(this.key, this.style, options);
  };

  return FontFaceRule;
}();
var pluginFontFaceRule = {
  onCreateRule: function onCreateRule(key, style, options) {
    return key === '@font-face' ? new FontFaceRule(key, style, options) : null;
  }
};

var ViewportRule =
/*#__PURE__*/
function () {
  function ViewportRule(key, style, options) {
    this.type = 'viewport';
    this.at = '@viewport';
    this.key = void 0;
    this.style = void 0;
    this.options = void 0;
    this.isProcessed = false;
    this.renderable = void 0;
    this.key = key;
    this.style = style;
    this.options = options;
  }
  /**
   * Generates a CSS string.
   */


  var _proto = ViewportRule.prototype;

  _proto.toString = function toString(options) {
    return toCss(this.key, this.style, options);
  };

  return ViewportRule;
}();
var pluginViewportRule = {
  onCreateRule: function onCreateRule(key, style, options) {
    return key === '@viewport' || key === '@-ms-viewport' ? new ViewportRule(key, style, options) : null;
  }
};

var SimpleRule =
/*#__PURE__*/
function () {
  function SimpleRule(key, value, options) {
    this.type = 'simple';
    this.key = void 0;
    this.value = void 0;
    this.options = void 0;
    this.isProcessed = false;
    this.renderable = void 0;
    this.key = key;
    this.value = value;
    this.options = options;
  }
  /**
   * Generates a CSS string.
   */
  // eslint-disable-next-line no-unused-vars


  var _proto = SimpleRule.prototype;

  _proto.toString = function toString(options) {
    if (Array.isArray(this.value)) {
      var str = '';

      for (var index = 0; index < this.value.length; index++) {
        str += this.key + " " + this.value[index] + ";";
        if (this.value[index + 1]) str += '\n';
      }

      return str;
    }

    return this.key + " " + this.value + ";";
  };

  return SimpleRule;
}();
var keysMap = {
  '@charset': true,
  '@import': true,
  '@namespace': true
};
var pluginSimpleRule = {
  onCreateRule: function onCreateRule(key, value, options) {
    return key in keysMap ? new SimpleRule(key, value, options) : null;
  }
};

var plugins = [pluginStyleRule, pluginConditionalRule, jss_esm_plugin, pluginKeyframeRule, pluginFontFaceRule, pluginViewportRule, pluginSimpleRule];

var defaultUpdateOptions = {
  process: true
};
var forceUpdateOptions = {
  force: true,
  process: true
  /**
   * Contains rules objects and allows adding/removing etc.
   * Is used for e.g. by `StyleSheet` or `ConditionalRule`.
   */

};

var jss_esm_RuleList =
/*#__PURE__*/
function () {
  // Rules registry for access by .get() method.
  // It contains the same rule registered by name and by selector.
  // Original styles object.
  // Used to ensure correct rules order.
  function RuleList(options) {
    this.map = {};
    this.raw = {};
    this.index = [];
    this.counter = 0;
    this.options = void 0;
    this.classes = void 0;
    this.keyframes = void 0;
    this.options = options;
    this.classes = options.classes;
    this.keyframes = options.keyframes;
  }
  /**
   * Create and register rule.
   *
   * Will not render after Style Sheet was rendered the first time.
   */


  var _proto = RuleList.prototype;

  _proto.add = function add(name, decl, ruleOptions) {
    var _this$options = this.options,
        parent = _this$options.parent,
        sheet = _this$options.sheet,
        jss = _this$options.jss,
        Renderer = _this$options.Renderer,
        generateId = _this$options.generateId,
        scoped = _this$options.scoped;

    var options = _extends({
      classes: this.classes,
      parent: parent,
      sheet: sheet,
      jss: jss,
      Renderer: Renderer,
      generateId: generateId,
      scoped: scoped,
      name: name
    }, ruleOptions); // When user uses .createStyleSheet(), duplicate names are not possible, but
    // `sheet.addRule()` opens the door for any duplicate rule name. When this happens
    // we need to make the key unique within this RuleList instance scope.


    var key = name;

    if (name in this.raw) {
      key = name + "-d" + this.counter++;
    } // We need to save the original decl before creating the rule
    // because cache plugin needs to use it as a key to return a cached rule.


    this.raw[key] = decl;

    if (key in this.classes) {
      // E.g. rules inside of @media container
      options.selector = "." + jss_esm_escape(this.classes[key]);
    }

    var rule = createRule(key, decl, options);
    if (!rule) return null;
    this.register(rule);
    var index = options.index === undefined ? this.index.length : options.index;
    this.index.splice(index, 0, rule);
    return rule;
  }
  /**
   * Get a rule.
   */
  ;

  _proto.get = function get(name) {
    return this.map[name];
  }
  /**
   * Delete a rule.
   */
  ;

  _proto.remove = function remove(rule) {
    this.unregister(rule);
    delete this.raw[rule.key];
    this.index.splice(this.index.indexOf(rule), 1);
  }
  /**
   * Get index of a rule.
   */
  ;

  _proto.indexOf = function indexOf(rule) {
    return this.index.indexOf(rule);
  }
  /**
   * Run `onProcessRule()` plugins on every rule.
   */
  ;

  _proto.process = function process() {
    var plugins$$1 = this.options.jss.plugins; // We need to clone array because if we modify the index somewhere else during a loop
    // we end up with very hard-to-track-down side effects.

    this.index.slice(0).forEach(plugins$$1.onProcessRule, plugins$$1);
  }
  /**
   * Register a rule in `.map`, `.classes` and `.keyframes` maps.
   */
  ;

  _proto.register = function register(rule) {
    this.map[rule.key] = rule;

    if (rule instanceof jss_esm_StyleRule) {
      this.map[rule.selector] = rule;
      if (rule.id) this.classes[rule.key] = rule.id;
    } else if (rule instanceof jss_esm_KeyframesRule && this.keyframes) {
      this.keyframes[rule.name] = rule.id;
    }
  }
  /**
   * Unregister a rule.
   */
  ;

  _proto.unregister = function unregister(rule) {
    delete this.map[rule.key];

    if (rule instanceof jss_esm_StyleRule) {
      delete this.map[rule.selector];
      delete this.classes[rule.key];
    } else if (rule instanceof jss_esm_KeyframesRule) {
      delete this.keyframes[rule.name];
    }
  }
  /**
   * Update the function values with a new data.
   */
  ;

  _proto.update = function update() {
    var name;
    var data;
    var options;

    if (typeof (arguments.length <= 0 ? undefined : arguments[0]) === 'string') {
      name = arguments.length <= 0 ? undefined : arguments[0]; // $FlowFixMe

      data = arguments.length <= 1 ? undefined : arguments[1]; // $FlowFixMe

      options = arguments.length <= 2 ? undefined : arguments[2];
    } else {
      data = arguments.length <= 0 ? undefined : arguments[0]; // $FlowFixMe

      options = arguments.length <= 1 ? undefined : arguments[1];
      name = null;
    }

    if (name) {
      this.updateOne(this.map[name], data, options);
    } else {
      for (var index = 0; index < this.index.length; index++) {
        this.updateOne(this.index[index], data, options);
      }
    }
  }
  /**
   * Execute plugins, update rule props.
   */
  ;

  _proto.updateOne = function updateOne(rule, data, options) {
    if (options === void 0) {
      options = defaultUpdateOptions;
    }

    var _this$options2 = this.options,
        plugins$$1 = _this$options2.jss.plugins,
        sheet = _this$options2.sheet; // It is a rules container like for e.g. ConditionalRule.

    if (rule.rules instanceof RuleList) {
      rule.rules.update(data, options);
      return;
    }

    var styleRule = rule;
    var style = styleRule.style;
    plugins$$1.onUpdate(data, rule, sheet, options); // We rely on a new `style` ref in case it was mutated during onUpdate hook.

    if (options.process && style && style !== styleRule.style) {
      // We need to run the plugins in case new `style` relies on syntax plugins.
      plugins$$1.onProcessStyle(styleRule.style, styleRule, sheet); // Update and add props.

      for (var prop in styleRule.style) {
        var nextValue = styleRule.style[prop];
        var prevValue = style[prop]; // We need to use `force: true` because `rule.style` has been updated during onUpdate hook, so `rule.prop()` will not update the CSSOM rule.
        // We do this comparison to avoid unneeded `rule.prop()` calls, since we have the old `style` object here.

        if (nextValue !== prevValue) {
          styleRule.prop(prop, nextValue, forceUpdateOptions);
        }
      } // Remove props.


      for (var _prop in style) {
        var _nextValue = styleRule.style[_prop];
        var _prevValue = style[_prop]; // We need to use `force: true` because `rule.style` has been updated during onUpdate hook, so `rule.prop()` will not update the CSSOM rule.
        // We do this comparison to avoid unneeded `rule.prop()` calls, since we have the old `style` object here.

        if (_nextValue == null && _nextValue !== _prevValue) {
          styleRule.prop(_prop, null, forceUpdateOptions);
        }
      }
    }
  }
  /**
   * Convert rules to a CSS string.
   */
  ;

  _proto.toString = function toString(options) {
    var str = '';
    var sheet = this.options.sheet;
    var link = sheet ? sheet.options.link : false;

    for (var index = 0; index < this.index.length; index++) {
      var rule = this.index[index];
      var css = rule.toString(options); // No need to render an empty rule.

      if (!css && !link) continue;
      if (str) str += '\n';
      str += css;
    }

    return str;
  };

  return RuleList;
}();

var jss_esm_StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet(styles, options) {
    this.options = void 0;
    this.deployed = void 0;
    this.attached = void 0;
    this.rules = void 0;
    this.renderer = void 0;
    this.classes = void 0;
    this.keyframes = void 0;
    this.queue = void 0;
    this.attached = false;
    this.deployed = false;
    this.classes = {};
    this.keyframes = {};
    this.options = _extends({}, options, {
      sheet: this,
      parent: this,
      classes: this.classes,
      keyframes: this.keyframes
    });

    if (options.Renderer) {
      this.renderer = new options.Renderer(this);
    }

    this.rules = new jss_esm_RuleList(this.options);

    for (var name in styles) {
      this.rules.add(name, styles[name]);
    }

    this.rules.process();
  }
  /**
   * Attach renderable to the render tree.
   */


  var _proto = StyleSheet.prototype;

  _proto.attach = function attach() {
    if (this.attached) return this;
    if (this.renderer) this.renderer.attach();
    this.attached = true; // Order is important, because we can't use insertRule API if style element is not attached.

    if (!this.deployed) this.deploy();
    return this;
  }
  /**
   * Remove renderable from render tree.
   */
  ;

  _proto.detach = function detach() {
    if (!this.attached) return this;
    if (this.renderer) this.renderer.detach();
    this.attached = false;
    return this;
  }
  /**
   * Add a rule to the current stylesheet.
   * Will insert a rule also after the stylesheet has been rendered first time.
   */
  ;

  _proto.addRule = function addRule(name, decl, options) {
    var queue = this.queue; // Plugins can create rules.
    // In order to preserve the right order, we need to queue all `.addRule` calls,
    // which happen after the first `rules.add()` call.

    if (this.attached && !queue) this.queue = [];
    var rule = this.rules.add(name, decl, options);
    if (!rule) return null;
    this.options.jss.plugins.onProcessRule(rule);

    if (this.attached) {
      if (!this.deployed) return rule; // Don't insert rule directly if there is no stringified version yet.
      // It will be inserted all together when .attach is called.

      if (queue) queue.push(rule);else {
        this.insertRule(rule);

        if (this.queue) {
          this.queue.forEach(this.insertRule, this);
          this.queue = undefined;
        }
      }
      return rule;
    } // We can't add rules to a detached style node.
    // We will redeploy the sheet once user will attach it.


    this.deployed = false;
    return rule;
  }
  /**
   * Insert rule into the StyleSheet
   */
  ;

  _proto.insertRule = function insertRule(rule) {
    if (this.renderer) {
      this.renderer.insertRule(rule);
    }
  }
  /**
   * Create and add rules.
   * Will render also after Style Sheet was rendered the first time.
   */
  ;

  _proto.addRules = function addRules(styles, options) {
    var added = [];

    for (var name in styles) {
      var rule = this.addRule(name, styles[name], options);
      if (rule) added.push(rule);
    }

    return added;
  }
  /**
   * Get a rule by name.
   */
  ;

  _proto.getRule = function getRule(name) {
    return this.rules.get(name);
  }
  /**
   * Delete a rule by name.
   * Returns `true`: if rule has been deleted from the DOM.
   */
  ;

  _proto.deleteRule = function deleteRule(name) {
    var rule = typeof name === 'object' ? name : this.rules.get(name);
    if (!rule) return false;
    this.rules.remove(rule);

    if (this.attached && rule.renderable && this.renderer) {
      return this.renderer.deleteRule(rule.renderable);
    }

    return true;
  }
  /**
   * Get index of a rule.
   */
  ;

  _proto.indexOf = function indexOf(rule) {
    return this.rules.indexOf(rule);
  }
  /**
   * Deploy pure CSS string to a renderable.
   */
  ;

  _proto.deploy = function deploy() {
    if (this.renderer) this.renderer.deploy();
    this.deployed = true;
    return this;
  }
  /**
   * Update the function values with a new data.
   */
  ;

  _proto.update = function update() {
    var _this$rules;

    (_this$rules = this.rules).update.apply(_this$rules, arguments);

    return this;
  }
  /**
   * Updates a single rule.
   */
  ;

  _proto.updateOne = function updateOne(rule, data, options) {
    this.rules.updateOne(rule, data, options);
    return this;
  }
  /**
   * Convert rules to a CSS string.
   */
  ;

  _proto.toString = function toString(options) {
    return this.rules.toString(options);
  };

  return StyleSheet;
}();

var PluginsRegistry =
/*#__PURE__*/
function () {
  function PluginsRegistry() {
    this.plugins = {
      internal: [],
      external: []
    };
    this.registry = void 0;
  }

  var _proto = PluginsRegistry.prototype;

  /**
   * Call `onCreateRule` hooks and return an object if returned by a hook.
   */
  _proto.onCreateRule = function onCreateRule(name, decl, options) {
    for (var i = 0; i < this.registry.onCreateRule.length; i++) {
      var rule = this.registry.onCreateRule[i](name, decl, options);
      if (rule) return rule;
    }

    return null;
  }
  /**
   * Call `onProcessRule` hooks.
   */
  ;

  _proto.onProcessRule = function onProcessRule(rule) {
    if (rule.isProcessed) return;
    var sheet = rule.options.sheet;

    for (var i = 0; i < this.registry.onProcessRule.length; i++) {
      this.registry.onProcessRule[i](rule, sheet);
    }

    if (rule.style) this.onProcessStyle(rule.style, rule, sheet);
    rule.isProcessed = true;
  }
  /**
   * Call `onProcessStyle` hooks.
   */
  ;

  _proto.onProcessStyle = function onProcessStyle(style, rule, sheet) {
    for (var i = 0; i < this.registry.onProcessStyle.length; i++) {
      // $FlowFixMe
      rule.style = this.registry.onProcessStyle[i](rule.style, rule, sheet);
    }
  }
  /**
   * Call `onProcessSheet` hooks.
   */
  ;

  _proto.onProcessSheet = function onProcessSheet(sheet) {
    for (var i = 0; i < this.registry.onProcessSheet.length; i++) {
      this.registry.onProcessSheet[i](sheet);
    }
  }
  /**
   * Call `onUpdate` hooks.
   */
  ;

  _proto.onUpdate = function onUpdate(data, rule, sheet, options) {
    for (var i = 0; i < this.registry.onUpdate.length; i++) {
      this.registry.onUpdate[i](data, rule, sheet, options);
    }
  }
  /**
   * Call `onChangeValue` hooks.
   */
  ;

  _proto.onChangeValue = function onChangeValue(value, prop, rule) {
    var processedValue = value;

    for (var i = 0; i < this.registry.onChangeValue.length; i++) {
      processedValue = this.registry.onChangeValue[i](processedValue, prop, rule);
    }

    return processedValue;
  }
  /**
   * Register a plugin.
   */
  ;

  _proto.use = function use(newPlugin, options) {
    if (options === void 0) {
      options = {
        queue: 'external'
      };
    }

    var plugins = this.plugins[options.queue]; // Avoids applying same plugin twice, at least based on ref.

    if (plugins.indexOf(newPlugin) !== -1) {
      return;
    }

    plugins.push(newPlugin);
    this.registry = [].concat(this.plugins.external, this.plugins.internal).reduce(function (registry, plugin) {
      for (var name in plugin) {
        if (name in registry) {
          registry[name].push(plugin[name]);
        } else {
           false ? undefined : void 0;
        }
      }

      return registry;
    }, {
      onCreateRule: [],
      onProcessRule: [],
      onProcessStyle: [],
      onProcessSheet: [],
      onChangeValue: [],
      onUpdate: []
    });
  };

  return PluginsRegistry;
}();

/**
 * Sheets registry to access them all at one place.
 */
var jss_esm_SheetsRegistry =
/*#__PURE__*/
function () {
  function SheetsRegistry() {
    this.registry = [];
  }

  var _proto = SheetsRegistry.prototype;

  /**
   * Register a Style Sheet.
   */
  _proto.add = function add(sheet) {
    var registry = this.registry;
    var index = sheet.options.index;
    if (registry.indexOf(sheet) !== -1) return;

    if (registry.length === 0 || index >= this.index) {
      registry.push(sheet);
      return;
    } // Find a position.


    for (var i = 0; i < registry.length; i++) {
      if (registry[i].options.index > index) {
        registry.splice(i, 0, sheet);
        return;
      }
    }
  }
  /**
   * Reset the registry.
   */
  ;

  _proto.reset = function reset() {
    this.registry = [];
  }
  /**
   * Remove a Style Sheet.
   */
  ;

  _proto.remove = function remove(sheet) {
    var index = this.registry.indexOf(sheet);
    this.registry.splice(index, 1);
  }
  /**
   * Convert all attached sheets to a CSS string.
   */
  ;

  _proto.toString = function toString(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        attached = _ref.attached,
        options = _objectWithoutPropertiesLoose(_ref, ["attached"]);

    var css = '';

    for (var i = 0; i < this.registry.length; i++) {
      var sheet = this.registry[i];

      if (attached != null && sheet.attached !== attached) {
        continue;
      }

      if (css) css += '\n';
      css += sheet.toString(options);
    }

    return css;
  };

  _createClass(SheetsRegistry, [{
    key: "index",

    /**
     * Current highest index number.
     */
    get: function get() {
      return this.registry.length === 0 ? 0 : this.registry[this.registry.length - 1].options.index;
    }
  }]);

  return SheetsRegistry;
}();

/**
 * This is a global sheets registry. Only DomRenderer will add sheets to it.
 * On the server one should use an own SheetsRegistry instance and add the
 * sheets to it, because you need to make sure to create a new registry for
 * each request in order to not leak sheets across requests.
 */

var sheets = new jss_esm_SheetsRegistry();

/* eslint-disable */
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var globalThis = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();

var ns = '2f1acc6c3a606b082e5eef5e54414ffb';
if (globalThis[ns] == null) globalThis[ns] = 0; // Bundle may contain multiple JSS versions at the same time. In order to identify
// the current version with just one short number and use it for classes generation
// we use a counter. Also it is more accurate, because user can manually reevaluate
// the module.

var moduleId = globalThis[ns]++;

var maxRules = 1e10;

/**
 * Returns a function which generates unique class names based on counters.
 * When new generator function is created, rule counter is reseted.
 * We need to reset the rule counter for SSR for each request.
 */
var createGenerateId = function createGenerateId(options) {
  if (options === void 0) {
    options = {};
  }

  var ruleCounter = 0;
  return function (rule, sheet) {
    ruleCounter += 1;

    if (ruleCounter > maxRules) {
       false ? undefined : void 0;
    }

    var jssId = '';
    var prefix = '';

    if (sheet) {
      if (sheet.options.classNamePrefix) {
        prefix = sheet.options.classNamePrefix;
      }

      if (sheet.options.jss.id != null) {
        jssId = String(sheet.options.jss.id);
      }
    }

    if (options.minify) {
      // Using "c" because a number can't be the first char in a class name.
      return "" + (prefix || 'c') + moduleId + jssId + ruleCounter;
    }

    return prefix + rule.key + "-" + moduleId + (jssId ? "-" + jssId : '') + "-" + ruleCounter;
  };
};

/**
 * Cache the value from the first time a function is called.
 */
var memoize = function memoize(fn) {
  var value;
  return function () {
    if (!value) value = fn();
    return value;
  };
};
/**
 * Get a style property value.
 */


function getPropertyValue(cssRule, prop) {
  try {
    // Support CSSTOM.
    if (cssRule.attributeStyleMap) {
      return cssRule.attributeStyleMap.get(prop);
    }

    return cssRule.style.getPropertyValue(prop);
  } catch (err) {
    // IE may throw if property is unknown.
    return '';
  }
}
/**
 * Set a style property.
 */


function setProperty(cssRule, prop, value) {
  try {
    var cssValue = value;

    if (Array.isArray(value)) {
      cssValue = toCssValue(value, true);

      if (value[value.length - 1] === '!important') {
        cssRule.style.setProperty(prop, cssValue, 'important');
        return true;
      }
    } // Support CSSTOM.


    if (cssRule.attributeStyleMap) {
      cssRule.attributeStyleMap.set(prop, cssValue);
    } else {
      cssRule.style.setProperty(prop, cssValue);
    }
  } catch (err) {
    // IE may throw if property is unknown.
    return false;
  }

  return true;
}
/**
 * Remove a style property.
 */


function removeProperty(cssRule, prop) {
  try {
    // Support CSSTOM.
    if (cssRule.attributeStyleMap) {
      cssRule.attributeStyleMap.delete(prop);
    } else {
      cssRule.style.removeProperty(prop);
    }
  } catch (err) {
     false ? undefined : void 0;
  }
}
/**
 * Set the selector.
 */


function setSelector(cssRule, selectorText) {
  cssRule.selectorText = selectorText; // Return false if setter was not successful.
  // Currently works in chrome only.

  return cssRule.selectorText === selectorText;
}
/**
 * Gets the `head` element upon the first call and caches it.
 * We assume it can't be null.
 */


var getHead = memoize(function () {
  return document.querySelector('head');
});
/**
 * Find attached sheet with an index higher than the passed one.
 */

function findHigherSheet(registry, options) {
  for (var i = 0; i < registry.length; i++) {
    var sheet = registry[i];

    if (sheet.attached && sheet.options.index > options.index && sheet.options.insertionPoint === options.insertionPoint) {
      return sheet;
    }
  }

  return null;
}
/**
 * Find attached sheet with the highest index.
 */


function findHighestSheet(registry, options) {
  for (var i = registry.length - 1; i >= 0; i--) {
    var sheet = registry[i];

    if (sheet.attached && sheet.options.insertionPoint === options.insertionPoint) {
      return sheet;
    }
  }

  return null;
}
/**
 * Find a comment with "jss" inside.
 */


function findCommentNode(text) {
  var head = getHead();

  for (var i = 0; i < head.childNodes.length; i++) {
    var node = head.childNodes[i];

    if (node.nodeType === 8 && node.nodeValue.trim() === text) {
      return node;
    }
  }

  return null;
}

/**
 * Find a node before which we can insert the sheet.
 */
function findPrevNode(options) {
  var registry = sheets.registry;

  if (registry.length > 0) {
    // Try to insert before the next higher sheet.
    var sheet = findHigherSheet(registry, options);

    if (sheet && sheet.renderer) {
      return {
        parent: sheet.renderer.element.parentNode,
        node: sheet.renderer.element
      };
    } // Otherwise insert after the last attached.


    sheet = findHighestSheet(registry, options);

    if (sheet && sheet.renderer) {
      return {
        parent: sheet.renderer.element.parentNode,
        node: sheet.renderer.element.nextSibling
      };
    }
  } // Try to find a comment placeholder if registry is empty.


  var insertionPoint = options.insertionPoint;

  if (insertionPoint && typeof insertionPoint === 'string') {
    var comment = findCommentNode(insertionPoint);

    if (comment) {
      return {
        parent: comment.parentNode,
        node: comment.nextSibling
      };
    } // If user specifies an insertion point and it can't be found in the document -
    // bad specificity issues may appear.


     false ? undefined : void 0;
  }

  return false;
}
/**
 * Insert style element into the DOM.
 */


function insertStyle(style, options) {
  var insertionPoint = options.insertionPoint;
  var nextNode = findPrevNode(options);

  if (nextNode !== false && nextNode.parent) {
    nextNode.parent.insertBefore(style, nextNode.node);
    return;
  } // Works with iframes and any node types.


  if (insertionPoint && typeof insertionPoint.nodeType === 'number') {
    // https://stackoverflow.com/questions/41328728/force-casting-in-flow
    var insertionPointElement = insertionPoint;
    var parentNode = insertionPointElement.parentNode;
    if (parentNode) parentNode.insertBefore(style, insertionPointElement.nextSibling);else  false ? undefined : void 0;
    return;
  }

  getHead().appendChild(style);
}
/**
 * Read jss nonce setting from the page if the user has set it.
 */


var getNonce = memoize(function () {
  var node = document.querySelector('meta[property="csp-nonce"]');
  return node ? node.getAttribute('content') : null;
});

var _insertRule = function insertRule(container, rule, index) {
  var maxIndex = container.cssRules.length; // In case previous insertion fails, passed index might be wrong

  if (index === undefined || index > maxIndex) {
    // eslint-disable-next-line no-param-reassign
    index = maxIndex;
  }

  try {
    if ('insertRule' in container) {
      var c = container;
      c.insertRule(rule, index);
    } // Keyframes rule.
    else if ('appendRule' in container) {
        var _c = container;

        _c.appendRule(rule);
      }
  } catch (err) {
     false ? undefined : void 0;
    return false;
  }

  return container.cssRules[index];
};

var createStyle = function createStyle() {
  var el = document.createElement('style'); // Without it, IE will have a broken source order specificity if we
  // insert rules after we insert the style tag.
  // It seems to kick-off the source order specificity algorithm.

  el.textContent = '\n';
  return el;
};

var DomRenderer =
/*#__PURE__*/
function () {
  // HTMLStyleElement needs fixing https://github.com/facebook/flow/issues/2696
  function DomRenderer(sheet) {
    this.getPropertyValue = getPropertyValue;
    this.setProperty = setProperty;
    this.removeProperty = removeProperty;
    this.setSelector = setSelector;
    this.element = void 0;
    this.sheet = void 0;
    this.hasInsertedRules = false;
    // There is no sheet when the renderer is used from a standalone StyleRule.
    if (sheet) sheets.add(sheet);
    this.sheet = sheet;

    var _ref = this.sheet ? this.sheet.options : {},
        media = _ref.media,
        meta = _ref.meta,
        element = _ref.element;

    this.element = element || createStyle();
    this.element.setAttribute('data-jss', '');
    if (media) this.element.setAttribute('media', media);
    if (meta) this.element.setAttribute('data-meta', meta);
    var nonce = getNonce();
    if (nonce) this.element.setAttribute('nonce', nonce);
  }
  /**
   * Insert style element into render tree.
   */


  var _proto = DomRenderer.prototype;

  _proto.attach = function attach() {
    // In the case the element node is external and it is already in the DOM.
    if (this.element.parentNode || !this.sheet) return;
    insertStyle(this.element, this.sheet.options); // When rules are inserted using `insertRule` API, after `sheet.detach().attach()`
    // most browsers create a new CSSStyleSheet, except of all IEs.

    var deployed = Boolean(this.sheet && this.sheet.deployed);

    if (this.hasInsertedRules && deployed) {
      this.hasInsertedRules = false;
      this.deploy();
    }
  }
  /**
   * Remove style element from render tree.
   */
  ;

  _proto.detach = function detach() {
    var parentNode = this.element.parentNode;
    if (parentNode) parentNode.removeChild(this.element);
  }
  /**
   * Inject CSS string into element.
   */
  ;

  _proto.deploy = function deploy() {
    var sheet = this.sheet;
    if (!sheet) return;

    if (sheet.options.link) {
      this.insertRules(sheet.rules);
      return;
    }

    this.element.textContent = "\n" + sheet.toString() + "\n";
  }
  /**
   * Insert RuleList into an element.
   */
  ;

  _proto.insertRules = function insertRules(rules, nativeParent) {
    for (var i = 0; i < rules.index.length; i++) {
      this.insertRule(rules.index[i], i, nativeParent);
    }
  }
  /**
   * Insert a rule into element.
   */
  ;

  _proto.insertRule = function insertRule(rule, index, nativeParent) {
    if (nativeParent === void 0) {
      nativeParent = this.element.sheet;
    }

    if (rule.rules) {
      var parent = rule;
      var latestNativeParent = nativeParent;

      if (rule.type === 'conditional' || rule.type === 'keyframes') {
        // We need to render the container without children first.
        latestNativeParent = _insertRule(nativeParent, parent.toString({
          children: false
        }), index);

        if (latestNativeParent === false) {
          return false;
        }
      }

      this.insertRules(parent.rules, latestNativeParent);
      return latestNativeParent;
    } // IE keeps the CSSStyleSheet after style node has been reattached,
    // so we need to check if the `renderable` reference the right style sheet and not
    // rerender those rules.


    if (rule.renderable && rule.renderable.parentStyleSheet === this.element.sheet) {
      return rule.renderable;
    }

    var ruleStr = rule.toString();
    if (!ruleStr) return false;

    var nativeRule = _insertRule(nativeParent, ruleStr, index);

    if (nativeRule === false) {
      return false;
    }

    this.hasInsertedRules = true;
    rule.renderable = nativeRule;
    return nativeRule;
  }
  /**
   * Delete a rule.
   */
  ;

  _proto.deleteRule = function deleteRule(cssRule) {
    var sheet = this.element.sheet;
    var index = this.indexOf(cssRule);
    if (index === -1) return false;
    sheet.deleteRule(index);
    return true;
  }
  /**
   * Get index of a CSS Rule.
   */
  ;

  _proto.indexOf = function indexOf(cssRule) {
    var cssRules = this.element.sheet.cssRules;

    for (var index = 0; index < cssRules.length; index++) {
      if (cssRule === cssRules[index]) return index;
    }

    return -1;
  }
  /**
   * Generate a new CSS rule and replace the existing one.
   *
   * Only used for some old browsers because they can't set a selector.
   */
  ;

  _proto.replaceRule = function replaceRule(cssRule, rule) {
    var index = this.indexOf(cssRule);
    if (index === -1) return false;
    this.element.sheet.deleteRule(index);
    return this.insertRule(rule, index);
  }
  /**
   * Get all rules elements.
   */
  ;

  _proto.getRules = function getRules() {
    return this.element.sheet.cssRules;
  };

  return DomRenderer;
}();

var instanceCounter = 0;

var jss_esm_Jss =
/*#__PURE__*/
function () {
  function Jss(options) {
    this.id = instanceCounter++;
    this.version = "10.0.3";
    this.plugins = new PluginsRegistry();
    this.options = {
      id: {
        minify: false
      },
      createGenerateId: createGenerateId,
      Renderer: dist_module ? DomRenderer : null,
      plugins: []
    };
    this.generateId = createGenerateId({
      minify: false
    });

    for (var i = 0; i < plugins.length; i++) {
      this.plugins.use(plugins[i], {
        queue: 'internal'
      });
    }

    this.setup(options);
  }
  /**
   * Prepares various options, applies plugins.
   * Should not be used twice on the same instance, because there is no plugins
   * deduplication logic.
   */


  var _proto = Jss.prototype;

  _proto.setup = function setup(options) {
    if (options === void 0) {
      options = {};
    }

    if (options.createGenerateId) {
      this.options.createGenerateId = options.createGenerateId;
    }

    if (options.id) {
      this.options.id = _extends({}, this.options.id, options.id);
    }

    if (options.createGenerateId || options.id) {
      this.generateId = this.options.createGenerateId(this.options.id);
    }

    if (options.insertionPoint != null) this.options.insertionPoint = options.insertionPoint;

    if ('Renderer' in options) {
      this.options.Renderer = options.Renderer;
    } // eslint-disable-next-line prefer-spread


    if (options.plugins) this.use.apply(this, options.plugins);
    return this;
  }
  /**
   * Create a Style Sheet.
   */
  ;

  _proto.createStyleSheet = function createStyleSheet(styles, options) {
    if (options === void 0) {
      options = {};
    }

    var _options = options,
        index = _options.index;

    if (typeof index !== 'number') {
      index = sheets.index === 0 ? 0 : sheets.index + 1;
    }

    var sheet = new jss_esm_StyleSheet(styles, _extends({}, options, {
      jss: this,
      generateId: options.generateId || this.generateId,
      insertionPoint: this.options.insertionPoint,
      Renderer: this.options.Renderer,
      index: index
    }));
    this.plugins.onProcessSheet(sheet);
    return sheet;
  }
  /**
   * Detach the Style Sheet and remove it from the registry.
   */
  ;

  _proto.removeStyleSheet = function removeStyleSheet(sheet) {
    sheet.detach();
    sheets.remove(sheet);
    return this;
  }
  /**
   * Create a rule without a Style Sheet.
   * [Deprecated] will be removed in the next major version.
   */
  ;

  _proto.createRule = function createRule$$1(name, style, options) {
    if (style === void 0) {
      style = {};
    }

    if (options === void 0) {
      options = {};
    }

    // Enable rule without name for inline styles.
    if (typeof name === 'object') {
      return this.createRule(undefined, name, style);
    }

    var ruleOptions = _extends({}, options, {
      name: name,
      jss: this,
      Renderer: this.options.Renderer
    });

    if (!ruleOptions.generateId) ruleOptions.generateId = this.generateId;
    if (!ruleOptions.classes) ruleOptions.classes = {};
    if (!ruleOptions.keyframes) ruleOptions.keyframes = {};

    var rule = createRule(name, style, ruleOptions);

    if (rule) this.plugins.onProcessRule(rule);
    return rule;
  }
  /**
   * Register plugin. Passed function will be invoked with a rule instance.
   */
  ;

  _proto.use = function use() {
    var _this = this;

    for (var _len = arguments.length, plugins$$1 = new Array(_len), _key = 0; _key < _len; _key++) {
      plugins$$1[_key] = arguments[_key];
    }

    plugins$$1.forEach(function (plugin) {
      _this.plugins.use(plugin);
    });
    return this;
  };

  return Jss;
}();

/**
 * Extracts a styles object with only props that contain function values.
 */
function getDynamicStyles(styles) {
  var to = null;

  for (var key in styles) {
    var value = styles[key];
    var type = typeof value;

    if (type === 'function') {
      if (!to) to = {};
      to[key] = value;
    } else if (type === 'object' && value !== null && !Array.isArray(value)) {
      var extracted = getDynamicStyles(value);

      if (extracted) {
        if (!to) to = {};
        to[key] = extracted;
      }
    }
  }

  return to;
}

/**
 * SheetsManager is like a WeakMap which is designed to count StyleSheet
 * instances and attach/detach automatically.
 */
var jss_esm_SheetsManager =
/*#__PURE__*/
function () {
  function SheetsManager() {
    this.length = 0;
    this.sheets = new WeakMap();
  }

  var _proto = SheetsManager.prototype;

  _proto.get = function get(key) {
    var entry = this.sheets.get(key);
    return entry && entry.sheet;
  };

  _proto.add = function add(key, sheet) {
    if (this.sheets.has(key)) return;
    this.length++;
    this.sheets.set(key, {
      sheet: sheet,
      refs: 0
    });
  };

  _proto.manage = function manage(key) {
    var entry = this.sheets.get(key);

    if (entry) {
      if (entry.refs === 0) {
        entry.sheet.attach();
      }

      entry.refs++;
      return entry.sheet;
    }

    tiny_warning_esm(false, "[JSS] SheetsManager: can't find sheet to manage");
    return undefined;
  };

  _proto.unmanage = function unmanage(key) {
    var entry = this.sheets.get(key);

    if (entry) {
      if (entry.refs > 0) {
        entry.refs--;
        if (entry.refs === 0) entry.sheet.detach();
      }
    } else {
      tiny_warning_esm(false, "SheetsManager: can't find sheet to unmanage");
    }
  };

  _createClass(SheetsManager, [{
    key: "size",
    get: function get() {
      return this.length;
    }
  }]);

  return SheetsManager;
}();

/**
 * A better abstraction over CSS.
 *
 * @copyright Oleg Isonen (Slobodskoi) / Isonen 2014-present
 * @website https://github.com/cssinjs/jss
 * @license MIT
 */

/**
 * Export a constant indicating if this browser has CSSTOM support.
 * https://developers.google.com/web/updates/2018/03/cssom
 */
var hasCSSTOMSupport = typeof CSS !== 'undefined' && CSS && 'number' in CSS;
/**
 * Creates a new instance of Jss.
 */

var create = function create(options) {
  return new jss_esm_Jss(options);
};
/**
 * A global Jss instance.
 */

var jss_esm_index = create();

/* harmony default export */ var jss_esm = (jss_esm_index);


// CONCATENATED MODULE: ./node_modules/jss-plugin-rule-value-function/dist/jss-plugin-rule-value-function.esm.js


var now = Date.now();
var fnValuesNs = "fnValues" + now;
var fnRuleNs = "fnStyle" + ++now;
function functionPlugin() {
  return {
    onCreateRule: function onCreateRule(name, decl, options) {
      if (typeof decl !== 'function') return null;
      var rule = createRule(name, {}, options);
      rule[fnRuleNs] = decl;
      return rule;
    },
    onProcessStyle: function onProcessStyle(style, rule) {
      // We need to extract function values from the declaration, so that we can keep core unaware of them.
      // We need to do that only once.
      // We don't need to extract functions on each style update, since this can happen only once.
      // We don't support function values inside of function rules.
      if (fnValuesNs in rule || fnRuleNs in rule) return style;
      var fnValues = {};

      for (var prop in style) {
        var value = style[prop];
        if (typeof value !== 'function') continue;
        delete style[prop];
        fnValues[prop] = value;
      } // $FlowFixMe


      rule[fnValuesNs] = fnValues;
      return style;
    },
    onUpdate: function onUpdate(data, rule, sheet, options) {
      var styleRule = rule;
      var fnRule = styleRule[fnRuleNs]; // If we have a style function, the entire rule is dynamic and style object
      // will be returned from that function.

      if (fnRule) {
        // Empty object will remove all currently defined props
        // in case function rule returns a falsy value.
        styleRule.style = fnRule(data) || {};
      }

      var fnValues = styleRule[fnValuesNs]; // If we have a fn values map, it is a rule with function values.

      if (fnValues) {
        for (var prop in fnValues) {
          styleRule.prop(prop, fnValues[prop](data), options);
        }
      }
    }
  };
}

/* harmony default export */ var jss_plugin_rule_value_function_esm = (functionPlugin);

// EXTERNAL MODULE: ./node_modules/symbol-observable/es/index.js
var es = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/jss-plugin-rule-value-observable/dist/jss-plugin-rule-value-observable.esm.js



var jss_plugin_rule_value_observable_esm_isObservable = function isObservable(value) {
  return value && value[es["a" /* default */]] && value === value[es["a" /* default */]]();
};

function observablePlugin(updateOptions) {
  return {
    onCreateRule: function onCreateRule(name, decl, options) {
      if (!jss_plugin_rule_value_observable_esm_isObservable(decl)) return null; // Cast `decl` to `Observable`, since it passed the type guard.

      var style$ = decl;
      var rule = createRule(name, {}, options); // TODO
      // Call `stream.subscribe()` returns a subscription, which should be explicitly
      // unsubscribed from when we know this sheet is no longer needed.

      style$.subscribe(function (style) {
        for (var prop in style) {
          rule.prop(prop, style[prop], updateOptions);
        }
      });
      return rule;
    },
    onProcessRule: function onProcessRule(rule) {
      if (rule && rule.type !== 'style') return;
      var styleRule = rule;
      var style = styleRule.style;

      var _loop = function _loop(prop) {
        var value = style[prop];
        if (!jss_plugin_rule_value_observable_esm_isObservable(value)) return "continue";
        delete style[prop];
        value.subscribe({
          next: function next(nextValue) {
            styleRule.prop(prop, nextValue, updateOptions);
          }
        });
      };

      for (var prop in style) {
        var _ret = _loop(prop);

        if (_ret === "continue") continue;
      }
    }
  };
}

/* harmony default export */ var jss_plugin_rule_value_observable_esm = (observablePlugin);

// CONCATENATED MODULE: ./node_modules/jss-plugin-template/dist/jss-plugin-template.esm.js


var semiWithNl = /;\n/;
/**
 * Naive CSS parser.
 * - Supports only rule body (no selectors)
 * - Requires semicolon and new line after the value (except of last line)
 * - No nested rules support
 */

var parse = (function (cssText) {
  var style = {};
  var split = cssText.split(semiWithNl);

  for (var i = 0; i < split.length; i++) {
    var decl = (split[i] || '').trim();
    if (!decl) continue;
    var colonIndex = decl.indexOf(':');

    if (colonIndex === -1) {
       false ? undefined : void 0;
      continue;
    }

    var prop = decl.substr(0, colonIndex).trim();
    var value = decl.substr(colonIndex + 1).trim();
    style[prop] = value;
  }

  return style;
});

var jss_plugin_template_esm_onProcessRule = function onProcessRule(rule) {
  if (typeof rule.style === 'string') {
    // $FlowFixMe: We can safely assume that rule has the style property
    rule.style = parse(rule.style);
  }
};

function templatePlugin() {
  return {
    onProcessRule: jss_plugin_template_esm_onProcessRule
  };
}

/* harmony default export */ var jss_plugin_template_esm = (templatePlugin);

// CONCATENATED MODULE: ./node_modules/jss-plugin-global/dist/jss-plugin-global.esm.js



var at = '@global';
var atPrefix = '@global ';

var jss_plugin_global_esm_GlobalContainerRule =
/*#__PURE__*/
function () {
  function GlobalContainerRule(key, styles, options) {
    this.type = 'global';
    this.at = at;
    this.rules = void 0;
    this.options = void 0;
    this.key = void 0;
    this.isProcessed = false;
    this.key = key;
    this.options = options;
    this.rules = new jss_esm_RuleList(_extends({}, options, {
      parent: this
    }));

    for (var selector in styles) {
      this.rules.add(selector, styles[selector]);
    }

    this.rules.process();
  }
  /**
   * Get a rule.
   */


  var _proto = GlobalContainerRule.prototype;

  _proto.getRule = function getRule(name) {
    return this.rules.get(name);
  }
  /**
   * Create and register rule, run plugins.
   */
  ;

  _proto.addRule = function addRule(name, style, options) {
    var rule = this.rules.add(name, style, options);
    this.options.jss.plugins.onProcessRule(rule);
    return rule;
  }
  /**
   * Get index of a rule.
   */
  ;

  _proto.indexOf = function indexOf(rule) {
    return this.rules.indexOf(rule);
  }
  /**
   * Generates a CSS string.
   */
  ;

  _proto.toString = function toString() {
    return this.rules.toString();
  };

  return GlobalContainerRule;
}();

var jss_plugin_global_esm_GlobalPrefixedRule =
/*#__PURE__*/
function () {
  function GlobalPrefixedRule(key, style, options) {
    this.type = 'global';
    this.at = at;
    this.options = void 0;
    this.rule = void 0;
    this.isProcessed = false;
    this.key = void 0;
    this.key = key;
    this.options = options;
    var selector = key.substr(atPrefix.length);
    this.rule = options.jss.createRule(selector, style, _extends({}, options, {
      parent: this
    }));
  }

  var _proto2 = GlobalPrefixedRule.prototype;

  _proto2.toString = function toString(options) {
    return this.rule ? this.rule.toString(options) : '';
  };

  return GlobalPrefixedRule;
}();

var separatorRegExp = /\s*,\s*/g;

function addScope(selector, scope) {
  var parts = selector.split(separatorRegExp);
  var scoped = '';

  for (var i = 0; i < parts.length; i++) {
    scoped += scope + " " + parts[i].trim();
    if (parts[i + 1]) scoped += ', ';
  }

  return scoped;
}

function handleNestedGlobalContainerRule(rule) {
  var options = rule.options,
      style = rule.style;
  var rules = style ? style[at] : null;
  if (!rules) return;

  for (var name in rules) {
    options.sheet.addRule(name, rules[name], _extends({}, options, {
      selector: addScope(name, rule.selector)
    }));
  }

  delete style[at];
}

function handlePrefixedGlobalRule(rule) {
  var options = rule.options,
      style = rule.style;

  for (var prop in style) {
    if (prop[0] !== '@' || prop.substr(0, at.length) !== at) continue;
    var selector = addScope(prop.substr(at.length), rule.selector);
    options.sheet.addRule(selector, style[prop], _extends({}, options, {
      selector: selector
    }));
    delete style[prop];
  }
}
/**
 * Convert nested rules to separate, remove them from original styles.
 *
 * @param {Rule} rule
 * @api public
 */


function jssGlobal() {
  function onCreateRule(name, styles, options) {
    if (!name) return null;

    if (name === at) {
      return new jss_plugin_global_esm_GlobalContainerRule(name, styles, options);
    }

    if (name[0] === '@' && name.substr(0, atPrefix.length) === atPrefix) {
      return new jss_plugin_global_esm_GlobalPrefixedRule(name, styles, options);
    }

    var parent = options.parent;

    if (parent) {
      if (parent.type === 'global' || parent.options.parent && parent.options.parent.type === 'global') {
        options.scoped = false;
      }
    }

    if (options.scoped === false) {
      options.selector = name;
    }

    return null;
  }

  function onProcessRule(rule) {
    if (rule.type !== 'style') return;
    handleNestedGlobalContainerRule(rule);
    handlePrefixedGlobalRule(rule);
  }

  return {
    onCreateRule: onCreateRule,
    onProcessRule: onProcessRule
  };
}

/* harmony default export */ var jss_plugin_global_esm = (jssGlobal);

// CONCATENATED MODULE: ./node_modules/jss-plugin-extend/dist/jss-plugin-extend.esm.js


/* eslint-disable no-use-before-define */

var isObject = function isObject(obj) {
  return obj && typeof obj === 'object' && !Array.isArray(obj);
};

var valueNs = "extendCurrValue" + Date.now();

function mergeExtend(style, rule, sheet, newStyle) {
  var extendType = typeof style.extend; // Extend using a rule name.

  if (extendType === 'string') {
    if (!sheet) return;
    var refRule = sheet.getRule(style.extend);
    if (!refRule) return;

    if (refRule === rule) {
       false ? undefined : void 0;
      return;
    }

    var parent = refRule.options.parent;

    if (parent) {
      var originalStyle = parent.rules.raw[style.extend];
      extend(originalStyle, rule, sheet, newStyle);
    }

    return;
  } // Extend using an array of objects.


  if (Array.isArray(style.extend)) {
    for (var index = 0; index < style.extend.length; index++) {
      extend(style.extend[index], rule, sheet, newStyle);
    }

    return;
  } // Extend is a style object.


  for (var prop in style.extend) {
    if (prop === 'extend') {
      extend(style.extend.extend, rule, sheet, newStyle);
      continue;
    }

    if (isObject(style.extend[prop])) {
      if (!(prop in newStyle)) newStyle[prop] = {};
      extend(style.extend[prop], rule, sheet, newStyle[prop]);
      continue;
    }

    newStyle[prop] = style.extend[prop];
  }
}

function mergeRest(style, rule, sheet, newStyle) {
  // Copy base style.
  for (var prop in style) {
    if (prop === 'extend') continue;

    if (isObject(newStyle[prop]) && isObject(style[prop])) {
      extend(style[prop], rule, sheet, newStyle[prop]);
      continue;
    }

    if (isObject(style[prop])) {
      newStyle[prop] = extend(style[prop], rule, sheet);
      continue;
    }

    newStyle[prop] = style[prop];
  }
}
/**
 * Recursively extend styles.
 */


function extend(style, rule, sheet, newStyle) {
  if (newStyle === void 0) {
    newStyle = {};
  }

  mergeExtend(style, rule, sheet, newStyle);
  mergeRest(style, rule, sheet, newStyle);
  return newStyle;
}
/**
 * Handle `extend` property.
 *
 * @param {Rule} rule
 * @api public
 */


function jssExtend() {
  function onProcessStyle(style, rule, sheet) {
    if ('extend' in style) return extend(style, rule, sheet);
    return style;
  }

  function onChangeValue(value, prop, rule) {
    if (prop !== 'extend') return value; // Value is empty, remove properties set previously.

    if (value == null || value === false) {
      // $FlowFixMe: Flow complains because there is no indexer property in StyleRule
      for (var key in rule[valueNs]) {
        rule.prop(key, null);
      } // $FlowFixMe: Flow complains because there is no indexer property in StyleRule


      rule[valueNs] = null;
      return null;
    }

    if (typeof value === 'object') {
      // $FlowFixMe: This will be an object
      for (var _key in value) {
        rule.prop(_key, value[_key]);
      } // $FlowFixMe: Flow complains because there is no indexer property in StyleRule


      rule[valueNs] = value;
    } // Make sure we don't set the value in the core.


    return null;
  }

  return {
    onProcessStyle: onProcessStyle,
    onChangeValue: onChangeValue
  };
}

/* harmony default export */ var jss_plugin_extend_esm = (jssExtend);

// CONCATENATED MODULE: ./node_modules/jss-plugin-nested/dist/jss-plugin-nested.esm.js



var jss_plugin_nested_esm_separatorRegExp = /\s*,\s*/g;
var parentRegExp = /&/g;
var jss_plugin_nested_esm_refRegExp = /\$([\w-]+)/g;
/**
 * Convert nested rules to separate, remove them from original styles.
 *
 * @param {Rule} rule
 * @api public
 */

function jssNested() {
  // Get a function to be used for $ref replacement.
  function getReplaceRef(container, sheet) {
    return function (match, key) {
      var rule = container.getRule(key) || sheet && sheet.getRule(key);

      if (rule) {
        rule = rule;
        return rule.selector;
      }

       false ? undefined : void 0;
      return key;
    };
  }

  function replaceParentRefs(nestedProp, parentProp) {
    var parentSelectors = parentProp.split(jss_plugin_nested_esm_separatorRegExp);
    var nestedSelectors = nestedProp.split(jss_plugin_nested_esm_separatorRegExp);
    var result = '';

    for (var i = 0; i < parentSelectors.length; i++) {
      var parent = parentSelectors[i];

      for (var j = 0; j < nestedSelectors.length; j++) {
        var nested = nestedSelectors[j];
        if (result) result += ', '; // Replace all & by the parent or prefix & with the parent.

        result += nested.indexOf('&') !== -1 ? nested.replace(parentRegExp, parent) : parent + " " + nested;
      }
    }

    return result;
  }

  function getOptions(rule, container, prevOptions) {
    // Options has been already created, now we only increase index.
    if (prevOptions) return _extends({}, prevOptions, {
      index: prevOptions.index + 1
    });
    var nestingLevel = rule.options.nestingLevel;
    nestingLevel = nestingLevel === undefined ? 1 : nestingLevel + 1;

    var options = _extends({}, rule.options, {
      nestingLevel: nestingLevel,
      index: container.indexOf(rule) + 1 // We don't need the parent name to be set options for chlid.

    });

    delete options.name;
    return options;
  }

  function onProcessStyle(style, rule, sheet) {
    if (rule.type !== 'style') return style;
    var styleRule = rule;
    var container = styleRule.options.parent;
    var options;
    var replaceRef;

    for (var prop in style) {
      var isNested = prop.indexOf('&') !== -1;
      var isNestedConditional = prop[0] === '@';
      if (!isNested && !isNestedConditional) continue;
      options = getOptions(styleRule, container, options);

      if (isNested) {
        var selector = replaceParentRefs(prop, styleRule.selector); // Lazily create the ref replacer function just once for
        // all nested rules within the sheet.

        if (!replaceRef) replaceRef = getReplaceRef(container, sheet); // Replace all $refs.

        selector = selector.replace(jss_plugin_nested_esm_refRegExp, replaceRef);
        container.addRule(selector, style[prop], _extends({}, options, {
          selector: selector
        }));
      } else if (isNestedConditional) {
        // Place conditional right after the parent rule to ensure right ordering.
        container.addRule(prop, {}, options) // Flow expects more options but they aren't required
        // And flow doesn't know this will always be a StyleRule which has the addRule method
        // $FlowFixMe
        .addRule(styleRule.key, style[prop], {
          selector: styleRule.selector
        });
      }

      delete style[prop];
    }

    return style;
  }

  return {
    onProcessStyle: onProcessStyle
  };
}

/* harmony default export */ var jss_plugin_nested_esm = (jssNested);

// CONCATENATED MODULE: ./node_modules/jss-plugin-compose/dist/jss-plugin-compose.esm.js


/**
 * Set selector.
 *
 * @param {Object} original rule
 * @param {String} className class string
 * @return {Boolean} flag, indicating function was successfull or not
 */
function registerClass(rule, className) {
  // Skip falsy values
  if (!className) return true; // Support array of class names `{composes: ['foo', 'bar']}`

  if (Array.isArray(className)) {
    for (var index = 0; index < className.length; index++) {
      var isSetted = registerClass(rule, className[index]);
      if (!isSetted) return false;
    }

    return true;
  } // Support space separated class names `{composes: 'foo bar'}`


  if (className.indexOf(' ') > -1) {
    return registerClass(rule, className.split(' '));
  }

  var _ref = rule.options,
      parent = _ref.parent; // It is a ref to a local rule.

  if (className[0] === '$') {
    var refRule = parent.getRule(className.substr(1));

    if (!refRule) {
       false ? undefined : void 0;
      return false;
    }

    if (refRule === rule) {
       false ? undefined : void 0;
      return false;
    }

    parent.classes[rule.key] += " " + parent.classes[refRule.key];
    return true;
  }

  parent.classes[rule.key] += " " + className;
  return true;
}
/**
 * Convert compose property to additional class, remove property from original styles.
 *
 * @param {Rule} rule
 * @api public
 */


function jssCompose() {
  function onProcessStyle(style, rule) {
    if (!('composes' in style)) return style;
    registerClass(rule, style.composes); // Remove composes property to prevent infinite loop.

    delete style.composes;
    return style;
  }

  return {
    onProcessStyle: onProcessStyle
  };
}

/* harmony default export */ var jss_plugin_compose_esm = (jssCompose);

// CONCATENATED MODULE: ./node_modules/hyphenate-style-name/index.js
/* eslint-disable no-var, prefer-template */
var uppercasePattern = /[A-Z]/g
var msPattern = /^ms-/
var cache = {}

function toHyphenLower(match) {
  return '-' + match.toLowerCase()
}

function hyphenateStyleName(name) {
  if (cache.hasOwnProperty(name)) {
    return cache[name]
  }

  var hName = name.replace(uppercasePattern, toHyphenLower)
  return (cache[name] = msPattern.test(hName) ? '-' + hName : hName)
}

/* harmony default export */ var hyphenate_style_name = (hyphenateStyleName);

// CONCATENATED MODULE: ./node_modules/jss-plugin-camel-case/dist/jss-plugin-camel-case.esm.js


/**
 * Convert camel cased property names to dash separated.
 *
 * @param {Object} style
 * @return {Object}
 */

function convertCase(style) {
  var converted = {};

  for (var prop in style) {
    var key = prop.indexOf('--') === 0 ? prop : hyphenate_style_name(prop);
    converted[key] = style[prop];
  }

  if (style.fallbacks) {
    if (Array.isArray(style.fallbacks)) converted.fallbacks = style.fallbacks.map(convertCase);else converted.fallbacks = convertCase(style.fallbacks);
  }

  return converted;
}
/**
 * Allow camel cased property names by converting them back to dasherized.
 *
 * @param {Rule} rule
 */


function camelCase() {
  function onProcessStyle(style) {
    if (Array.isArray(style)) {
      // Handle rules like @font-face, which can have multiple styles in an array
      for (var index = 0; index < style.length; index++) {
        style[index] = convertCase(style[index]);
      }

      return style;
    }

    return convertCase(style);
  }

  function onChangeValue(value, prop, rule) {
    if (prop.indexOf('--') === 0) {
      return value;
    }

    var hyphenatedProp = hyphenate_style_name(prop); // There was no camel case in place

    if (prop === hyphenatedProp) return value;
    rule.prop(hyphenatedProp, value); // Core will ignore that property value we set the proper one above.

    return null;
  }

  return {
    onProcessStyle: onProcessStyle,
    onChangeValue: onChangeValue
  };
}

/* harmony default export */ var jss_plugin_camel_case_esm = (camelCase);

// CONCATENATED MODULE: ./node_modules/jss-plugin-default-unit/dist/jss-plugin-default-unit.esm.js


var px = hasCSSTOMSupport && CSS ? CSS.px : 'px';
var jss_plugin_default_unit_esm_ms = hasCSSTOMSupport && CSS ? CSS.ms : 'ms';
var percent = hasCSSTOMSupport && CSS ? CSS.percent : '%';
/**
 * Generated jss-plugin-default-unit CSS property units
 *
 * @type object
 */

var defaultUnits = {
  // Animation properties
  'animation-delay': jss_plugin_default_unit_esm_ms,
  'animation-duration': jss_plugin_default_unit_esm_ms,
  // Background properties
  'background-position': px,
  'background-position-x': px,
  'background-position-y': px,
  'background-size': px,
  // Border Properties
  border: px,
  'border-bottom': px,
  'border-bottom-left-radius': px,
  'border-bottom-right-radius': px,
  'border-bottom-width': px,
  'border-left': px,
  'border-left-width': px,
  'border-radius': px,
  'border-right': px,
  'border-right-width': px,
  'border-top': px,
  'border-top-left-radius': px,
  'border-top-right-radius': px,
  'border-top-width': px,
  'border-width': px,
  // Margin properties
  margin: px,
  'margin-bottom': px,
  'margin-left': px,
  'margin-right': px,
  'margin-top': px,
  // Padding properties
  padding: px,
  'padding-bottom': px,
  'padding-left': px,
  'padding-right': px,
  'padding-top': px,
  // Mask properties
  'mask-position-x': px,
  'mask-position-y': px,
  'mask-size': px,
  // Width and height properties
  height: px,
  width: px,
  'min-height': px,
  'max-height': px,
  'min-width': px,
  'max-width': px,
  // Position properties
  bottom: px,
  left: px,
  top: px,
  right: px,
  // Shadow properties
  'box-shadow': px,
  'text-shadow': px,
  // Column properties
  'column-gap': px,
  'column-rule': px,
  'column-rule-width': px,
  'column-width': px,
  // Font and text properties
  'font-size': px,
  'font-size-delta': px,
  'letter-spacing': px,
  'text-indent': px,
  'text-stroke': px,
  'text-stroke-width': px,
  'word-spacing': px,
  // Motion properties
  motion: px,
  'motion-offset': px,
  // Outline properties
  outline: px,
  'outline-offset': px,
  'outline-width': px,
  // Perspective properties
  perspective: px,
  'perspective-origin-x': percent,
  'perspective-origin-y': percent,
  // Transform properties
  'transform-origin': percent,
  'transform-origin-x': percent,
  'transform-origin-y': percent,
  'transform-origin-z': percent,
  // Transition properties
  'transition-delay': jss_plugin_default_unit_esm_ms,
  'transition-duration': jss_plugin_default_unit_esm_ms,
  // Alignment properties
  'vertical-align': px,
  'flex-basis': px,
  // Some random properties
  'shape-margin': px,
  size: px,
  // Grid properties
  grid: px,
  'grid-gap': px,
  'grid-row-gap': px,
  'grid-column-gap': px,
  'grid-template-rows': px,
  'grid-template-columns': px,
  'grid-auto-rows': px,
  'grid-auto-columns': px,
  // Not existing properties.
  // Used to avoid issues with jss-plugin-expand integration.
  'box-shadow-x': px,
  'box-shadow-y': px,
  'box-shadow-blur': px,
  'box-shadow-spread': px,
  'font-line-height': px,
  'text-shadow-x': px,
  'text-shadow-y': px,
  'text-shadow-blur': px
};

/**
 * Clones the object and adds a camel cased property version.
 */
function addCamelCasedVersion(obj) {
  var regExp = /(-[a-z])/g;

  var replace = function replace(str) {
    return str[1].toUpperCase();
  };

  var newObj = {};

  for (var _key in obj) {
    newObj[_key] = obj[_key];
    newObj[_key.replace(regExp, replace)] = obj[_key];
  }

  return newObj;
}

var units = addCamelCasedVersion(defaultUnits);
/**
 * Recursive deep style passing function
 */

function iterate(prop, value, options) {
  if (!value) return value;

  if (Array.isArray(value)) {
    for (var i = 0; i < value.length; i++) {
      value[i] = iterate(prop, value[i], options);
    }
  } else if (typeof value === 'object') {
    if (prop === 'fallbacks') {
      for (var innerProp in value) {
        value[innerProp] = iterate(innerProp, value[innerProp], options);
      }
    } else {
      for (var _innerProp in value) {
        value[_innerProp] = iterate(prop + "-" + _innerProp, value[_innerProp], options);
      }
    }
  } else if (typeof value === 'number') {
    if (options[prop]) {
      return "" + value + options[prop];
    }

    if (units[prop]) {
      return typeof units[prop] === 'function' ? units[prop](value).toString() : "" + value + units[prop];
    }

    return value.toString();
  }

  return value;
}
/**
 * Add unit to numeric values.
 */


function defaultUnit(options) {
  if (options === void 0) {
    options = {};
  }

  var camelCasedOptions = addCamelCasedVersion(options);

  function onProcessStyle(style, rule) {
    if (rule.type !== 'style') return style;

    for (var prop in style) {
      style[prop] = iterate(prop, style[prop], camelCasedOptions);
    }

    return style;
  }

  function onChangeValue(value, prop) {
    return iterate(prop, value, camelCasedOptions);
  }

  return {
    onProcessStyle: onProcessStyle,
    onChangeValue: onChangeValue
  };
}

/* harmony default export */ var jss_plugin_default_unit_esm = (defaultUnit);

// CONCATENATED MODULE: ./node_modules/jss-plugin-expand/dist/jss-plugin-expand.esm.js
/**
 * A scheme for converting properties from array to regular style.
 * All properties listed below will be transformed to a string separated by space.
 */
var propArray = {
  'background-size': true,
  'background-position': true,
  border: true,
  'border-bottom': true,
  'border-left': true,
  'border-top': true,
  'border-right': true,
  'border-radius': true,
  'border-image': true,
  'border-width': true,
  'border-style': true,
  'border-color': true,
  'box-shadow': true,
  flex: true,
  margin: true,
  padding: true,
  outline: true,
  'transform-origin': true,
  transform: true,
  transition: true
  /**
   * A scheme for converting arrays to regular styles inside of objects.
   * For e.g.: "{position: [0, 0]}" => "background-position: 0 0;".
   */

};
var propArrayInObj = {
  position: true,
  // background-position
  size: true // background-size

  /**
   * A scheme for parsing and building correct styles from passed objects.
   */

};
var propObj = {
  padding: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  margin: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  background: {
    attachment: null,
    color: null,
    image: null,
    position: null,
    repeat: null
  },
  border: {
    width: null,
    style: null,
    color: null
  },
  'border-top': {
    width: null,
    style: null,
    color: null
  },
  'border-right': {
    width: null,
    style: null,
    color: null
  },
  'border-bottom': {
    width: null,
    style: null,
    color: null
  },
  'border-left': {
    width: null,
    style: null,
    color: null
  },
  outline: {
    width: null,
    style: null,
    color: null
  },
  'list-style': {
    type: null,
    position: null,
    image: null
  },
  transition: {
    property: null,
    duration: null,
    'timing-function': null,
    timingFunction: null,
    // Needed for avoiding comilation issues with jss-plugin-camel-case
    delay: null
  },
  animation: {
    name: null,
    duration: null,
    'timing-function': null,
    timingFunction: null,
    // Needed to avoid compilation issues with jss-plugin-camel-case
    delay: null,
    'iteration-count': null,
    iterationCount: null,
    // Needed to avoid compilation issues with jss-plugin-camel-case
    direction: null,
    'fill-mode': null,
    fillMode: null,
    // Needed to avoid compilation issues with jss-plugin-camel-case
    'play-state': null,
    playState: null // Needed to avoid compilation issues with jss-plugin-camel-case

  },
  'box-shadow': {
    x: 0,
    y: 0,
    blur: 0,
    spread: 0,
    color: null,
    inset: null
  },
  'text-shadow': {
    x: 0,
    y: 0,
    blur: null,
    color: null
  }
  /**
   * A scheme for converting non-standart properties inside object.
   * For e.g.: include 'border-radius' property inside 'border' object.
   */

};
var customPropObj = {
  border: {
    radius: 'border-radius',
    image: 'border-image',
    width: 'border-width',
    style: 'border-style',
    color: 'border-color'
  },
  'border-bottom': {
    width: 'border-bottom-width',
    style: 'border-bottom-style',
    color: 'border-bottom-color'
  },
  'border-top': {
    width: 'border-top-width',
    style: 'border-top-style',
    color: 'border-top-color'
  },
  'border-left': {
    width: 'border-left-width',
    style: 'border-left-style',
    color: 'border-left-color'
  },
  'border-right': {
    width: 'border-right-width',
    style: 'border-right-style',
    color: 'border-right-color'
  },
  background: {
    size: 'background-size',
    image: 'background-image'
  },
  font: {
    style: 'font-style',
    variant: 'font-variant',
    weight: 'font-weight',
    stretch: 'font-stretch',
    size: 'font-size',
    family: 'font-family',
    lineHeight: 'line-height',
    // Needed to avoid compilation issues with jss-plugin-camel-case
    'line-height': 'line-height'
  },
  flex: {
    grow: 'flex-grow',
    basis: 'flex-basis',
    direction: 'flex-direction',
    wrap: 'flex-wrap',
    flow: 'flex-flow',
    shrink: 'flex-shrink'
  },
  align: {
    self: 'align-self',
    items: 'align-items',
    content: 'align-content'
  },
  grid: {
    'template-columns': 'grid-template-columns',
    templateColumns: 'grid-template-columns',
    'template-rows': 'grid-template-rows',
    templateRows: 'grid-template-rows',
    'template-areas': 'grid-template-areas',
    templateAreas: 'grid-template-areas',
    template: 'grid-template',
    'auto-columns': 'grid-auto-columns',
    autoColumns: 'grid-auto-columns',
    'auto-rows': 'grid-auto-rows',
    autoRows: 'grid-auto-rows',
    'auto-flow': 'grid-auto-flow',
    autoFlow: 'grid-auto-flow',
    row: 'grid-row',
    column: 'grid-column',
    'row-start': 'grid-row-start',
    rowStart: 'grid-row-start',
    'row-end': 'grid-row-end',
    rowEnd: 'grid-row-end',
    'column-start': 'grid-column-start',
    columnStart: 'grid-column-start',
    'column-end': 'grid-column-end',
    columnEnd: 'grid-column-end',
    area: 'grid-area',
    gap: 'grid-gap',
    'row-gap': 'grid-row-gap',
    rowGap: 'grid-row-gap',
    'column-gap': 'grid-column-gap',
    columnGap: 'grid-column-gap'
  }
};

/* eslint-disable no-use-before-define */

/**
 * Map values by given prop.
 *
 * @param {Array} array of values
 * @param {String} original property
 * @param {String} original rule
 * @return {String} mapped values
 */
function mapValuesByProp(value, prop, rule) {
  return value.map(function (item) {
    return objectToArray(item, prop, rule, false, true);
  });
}
/**
 * Convert array to nested array, if needed
 */


function processArray(value, prop, scheme, rule) {
  if (scheme[prop] == null) return value;
  if (value.length === 0) return [];
  if (Array.isArray(value[0])) return processArray(value[0], prop, scheme, rule);

  if (typeof value[0] === 'object') {
    return mapValuesByProp(value, prop, rule);
  }

  return [value];
}
/**
 * Convert object to array.
 */


function objectToArray(value, prop, rule, isFallback, isInArray) {
  if (!(propObj[prop] || customPropObj[prop])) return [];
  var result = []; // Check if exists any non-standard property

  if (customPropObj[prop]) {
    // eslint-disable-next-line no-param-reassign
    value = customPropsToStyle(value, rule, customPropObj[prop], isFallback);
  } // Pass throught all standart props


  if (Object.keys(value).length) {
    for (var baseProp in propObj[prop]) {
      if (value[baseProp]) {
        if (Array.isArray(value[baseProp])) {
          result.push(propArrayInObj[baseProp] === null ? value[baseProp] : value[baseProp].join(' '));
        } else result.push(value[baseProp]);

        continue;
      } // Add default value from props config.


      if (propObj[prop][baseProp] != null) {
        result.push(propObj[prop][baseProp]);
      }
    }
  }

  if (!result.length || isInArray) return result;
  return [result];
}
/**
 * Convert custom properties values to styles adding them to rule directly
 */


function customPropsToStyle(value, rule, customProps, isFallback) {
  for (var prop in customProps) {
    var propName = customProps[prop]; // If current property doesn't exist already in rule - add new one

    if (typeof value[prop] !== 'undefined' && (isFallback || !rule.prop(propName))) {
      var _styleDetector;

      var appendedValue = styleDetector((_styleDetector = {}, _styleDetector[propName] = value[prop], _styleDetector), rule)[propName]; // Add style directly in rule

      if (isFallback) rule.style.fallbacks[propName] = appendedValue;else rule.style[propName] = appendedValue;
    } // Delete converted property to avoid double converting


    delete value[prop];
  }

  return value;
}
/**
 * Detect if a style needs to be converted.
 */


function styleDetector(style, rule, isFallback) {
  for (var prop in style) {
    var value = style[prop];

    if (Array.isArray(value)) {
      // Check double arrays to avoid recursion.
      if (!Array.isArray(value[0])) {
        if (prop === 'fallbacks') {
          for (var index = 0; index < style.fallbacks.length; index++) {
            style.fallbacks[index] = styleDetector(style.fallbacks[index], rule, true);
          }

          continue;
        }

        style[prop] = processArray(value, prop, propArray, rule); // Avoid creating properties with empty values

        if (!style[prop].length) delete style[prop];
      }
    } else if (typeof value === 'object') {
      if (prop === 'fallbacks') {
        style.fallbacks = styleDetector(style.fallbacks, rule, true);
        continue;
      }

      style[prop] = objectToArray(value, prop, rule, isFallback); // Avoid creating properties with empty values

      if (!style[prop].length) delete style[prop];
    } // Maybe a computed value resulting in an empty string
    else if (style[prop] === '') delete style[prop];
  }

  return style;
}
/**
 * Adds possibility to write expanded styles.
 */


function jssExpand() {
  function onProcessStyle(style, rule) {
    if (!style || rule.type !== 'style') return style;

    if (Array.isArray(style)) {
      // Pass rules one by one and reformat them
      for (var index = 0; index < style.length; index++) {
        style[index] = styleDetector(style[index], rule);
      }

      return style;
    }

    return styleDetector(style, rule);
  }

  return {
    onProcessStyle: onProcessStyle
  };
}

/* harmony default export */ var jss_plugin_expand_esm = (jssExpand);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js



function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}
// CONCATENATED MODULE: ./node_modules/css-vendor/dist/css-vendor.esm.js



// Export javascript style and css style vendor prefixes.
var js = '';
var css_vendor_esm_css = '';
var vendor = '';
var browser = '';
var isTouch = dist_module && 'ontouchstart' in document.documentElement; // We should not do anything if required serverside.

if (dist_module) {
  // Order matters. We need to check Webkit the last one because
  // other vendors use to add Webkit prefixes to some properties
  var jsCssMap = {
    Moz: '-moz-',
    ms: '-ms-',
    O: '-o-',
    Webkit: '-webkit-'
  };

  var _document$createEleme = document.createElement('p'),
      css_vendor_esm_style = _document$createEleme.style;

  var testProp = 'Transform';

  for (var css_vendor_esm_key in jsCssMap) {
    if (css_vendor_esm_key + testProp in css_vendor_esm_style) {
      js = css_vendor_esm_key;
      css_vendor_esm_css = jsCssMap[css_vendor_esm_key];
      break;
    }
  } // Correctly detect the Edge browser.


  if (js === 'Webkit' && 'msHyphens' in css_vendor_esm_style) {
    js = 'ms';
    css_vendor_esm_css = jsCssMap.ms;
    browser = 'edge';
  } // Correctly detect the Safari browser.


  if (js === 'Webkit' && '-apple-trailing-word' in css_vendor_esm_style) {
    vendor = 'apple';
  }
}
/**
 * Vendor prefix string for the current browser.
 *
 * @type {{js: String, css: String, vendor: String, browser: String}}
 * @api public
 */


var prefix = {
  js: js,
  css: css_vendor_esm_css,
  vendor: vendor,
  browser: browser,
  isTouch: isTouch
};

/**
 * Test if a keyframe at-rule should be prefixed or not
 *
 * @param {String} vendor prefix string for the current browser.
 * @return {String}
 * @api public
 */

function supportedKeyframes(key) {
  // Keyframes is already prefixed. e.g. key = '@-webkit-keyframes a'
  if (key[1] === '-') return key; // No need to prefix IE/Edge. Older browsers will ignore unsupported rules.
  // https://caniuse.com/#search=keyframes

  if (prefix.js === 'ms') return key;
  return "@" + prefix.css + "keyframes" + key.substr(10);
}

// https://caniuse.com/#search=appearance

var appearence = {
  noPrefill: ['appearance'],
  supportedProperty: function supportedProperty(prop) {
    if (prop !== 'appearance') return false;
    if (prefix.js === 'ms') return "-webkit-" + prop;
    return prefix.css + prop;
  }
};

// https://caniuse.com/#search=color-adjust

var colorAdjust = {
  noPrefill: ['color-adjust'],
  supportedProperty: function supportedProperty(prop) {
    if (prop !== 'color-adjust') return false;
    if (prefix.js === 'Webkit') return prefix.css + "print-" + prop;
    return prop;
  }
};

var regExp = /[-\s]+(.)?/g;
/**
 * Replaces the letter with the capital letter
 *
 * @param {String} match
 * @param {String} c
 * @return {String}
 * @api private
 */

function toUpper(match, c) {
  return c ? c.toUpperCase() : '';
}
/**
 * Convert dash separated strings to camel-cased.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */


function camelize(str) {
  return str.replace(regExp, toUpper);
}

/**
 * Convert dash separated strings to pascal cased.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */

function pascalize(str) {
  return camelize("-" + str);
}

// but we can use a longhand property instead.
// https://caniuse.com/#search=mask

var mask = {
  noPrefill: ['mask'],
  supportedProperty: function supportedProperty(prop, style) {
    if (!/^mask/.test(prop)) return false;

    if (prefix.js === 'Webkit') {
      var longhand = 'mask-image';

      if (camelize(longhand) in style) {
        return prop;
      }

      if (prefix.js + pascalize(longhand) in style) {
        return prefix.css + prop;
      }
    }

    return prop;
  }
};

// https://caniuse.com/#search=text-orientation

var textOrientation = {
  noPrefill: ['text-orientation'],
  supportedProperty: function supportedProperty(prop) {
    if (prop !== 'text-orientation') return false;

    if (prefix.vendor === 'apple' && !prefix.isTouch) {
      return prefix.css + prop;
    }

    return prop;
  }
};

// https://caniuse.com/#search=transform

var transform = {
  noPrefill: ['transform'],
  supportedProperty: function supportedProperty(prop, style, options) {
    if (prop !== 'transform') return false;

    if (options.transform) {
      return prop;
    }

    return prefix.css + prop;
  }
};

// https://caniuse.com/#search=transition

var transition = {
  noPrefill: ['transition'],
  supportedProperty: function supportedProperty(prop, style, options) {
    if (prop !== 'transition') return false;

    if (options.transition) {
      return prop;
    }

    return prefix.css + prop;
  }
};

// https://caniuse.com/#search=writing-mode

var writingMode = {
  noPrefill: ['writing-mode'],
  supportedProperty: function supportedProperty(prop) {
    if (prop !== 'writing-mode') return false;

    if (prefix.js === 'Webkit' || prefix.js === 'ms') {
      return prefix.css + prop;
    }

    return prop;
  }
};

// https://caniuse.com/#search=user-select

var userSelect = {
  noPrefill: ['user-select'],
  supportedProperty: function supportedProperty(prop) {
    if (prop !== 'user-select') return false;

    if (prefix.js === 'Moz' || prefix.js === 'ms' || prefix.vendor === 'apple') {
      return prefix.css + prop;
    }

    return prop;
  }
};

// https://caniuse.com/#search=multicolumn
// https://github.com/postcss/autoprefixer/issues/491
// https://github.com/postcss/autoprefixer/issues/177

var breakPropsOld = {
  supportedProperty: function supportedProperty(prop, style) {
    if (!/^break-/.test(prop)) return false;

    if (prefix.js === 'Webkit') {
      var jsProp = "WebkitColumn" + pascalize(prop);
      return jsProp in style ? prefix.css + "column-" + prop : false;
    }

    if (prefix.js === 'Moz') {
      var _jsProp = "page" + pascalize(prop);

      return _jsProp in style ? "page-" + prop : false;
    }

    return false;
  }
};

// See https://github.com/postcss/autoprefixer/issues/324.

var inlineLogicalOld = {
  supportedProperty: function supportedProperty(prop, style) {
    if (!/^(border|margin|padding)-inline/.test(prop)) return false;
    if (prefix.js === 'Moz') return prop;
    var newProp = prop.replace('-inline', '');
    return prefix.js + pascalize(newProp) in style ? prefix.css + newProp : false;
  }
};

// Camelization is required because we can't test using.
// CSS syntax for e.g. in FF.

var unprefixed = {
  supportedProperty: function supportedProperty(prop, style) {
    return camelize(prop) in style ? prop : false;
  }
};

var prefixed = {
  supportedProperty: function supportedProperty(prop, style) {
    var pascalized = pascalize(prop); // Return custom CSS variable without prefixing.

    if (prop[0] === '-') return prop; // Return already prefixed value without prefixing.

    if (prop[0] === '-' && prop[1] === '-') return prop;
    if (prefix.js + pascalized in style) return prefix.css + prop; // Try webkit fallback.

    if (prefix.js !== 'Webkit' && "Webkit" + pascalized in style) return "-webkit-" + prop;
    return false;
  }
};

// https://caniuse.com/#search=scroll-snap

var scrollSnap = {
  supportedProperty: function supportedProperty(prop) {
    if (prop.substring(0, 11) !== 'scroll-snap') return false;

    if (prefix.js === 'ms') {
      return "" + prefix.css + prop;
    }

    return prop;
  }
};

// https://caniuse.com/#search=overscroll-behavior

var overscrollBehavior = {
  supportedProperty: function supportedProperty(prop) {
    if (prop !== 'overscroll-behavior') return false;

    if (prefix.js === 'ms') {
      return prefix.css + "scroll-chaining";
    }

    return prop;
  }
};

var propMap = {
  'flex-grow': 'flex-positive',
  'flex-shrink': 'flex-negative',
  'flex-basis': 'flex-preferred-size',
  'justify-content': 'flex-pack',
  order: 'flex-order',
  'align-items': 'flex-align',
  'align-content': 'flex-line-pack' // 'align-self' is handled by 'align-self' plugin.

}; // Support old flex spec from 2012.

var flex2012 = {
  supportedProperty: function supportedProperty(prop, style) {
    var newProp = propMap[prop];
    if (!newProp) return false;
    return prefix.js + pascalize(newProp) in style ? prefix.css + newProp : false;
  }
};

var propMap$1 = {
  flex: 'box-flex',
  'flex-grow': 'box-flex',
  'flex-direction': ['box-orient', 'box-direction'],
  order: 'box-ordinal-group',
  'align-items': 'box-align',
  'flex-flow': ['box-orient', 'box-direction'],
  'justify-content': 'box-pack'
};
var propKeys = Object.keys(propMap$1);

var prefixCss = function prefixCss(p) {
  return prefix.css + p;
}; // Support old flex spec from 2009.


var flex2009 = {
  supportedProperty: function supportedProperty(prop, style, _ref) {
    var multiple = _ref.multiple;

    if (propKeys.indexOf(prop) > -1) {
      var newProp = propMap$1[prop];

      if (!Array.isArray(newProp)) {
        return prefix.js + pascalize(newProp) in style ? prefix.css + newProp : false;
      }

      if (!multiple) return false;

      for (var i = 0; i < newProp.length; i++) {
        if (!(prefix.js + pascalize(newProp[0]) in style)) {
          return false;
        }
      }

      return newProp.map(prefixCss);
    }

    return false;
  }
};

// plugins = [
//   ...plugins,
//    breakPropsOld,
//    inlineLogicalOld,
//    unprefixed,
//    prefixed,
//    scrollSnap,
//    flex2012,
//    flex2009
// ]
// Plugins without 'noPrefill' value, going last.
// 'flex-*' plugins should be at the bottom.
// 'flex2009' going after 'flex2012'.
// 'prefixed' going after 'unprefixed'

var css_vendor_esm_plugins = [appearence, colorAdjust, mask, textOrientation, transform, transition, writingMode, userSelect, breakPropsOld, inlineLogicalOld, unprefixed, prefixed, scrollSnap, overscrollBehavior, flex2012, flex2009];
var propertyDetectors = css_vendor_esm_plugins.filter(function (p) {
  return p.supportedProperty;
}).map(function (p) {
  return p.supportedProperty;
});
var noPrefill = css_vendor_esm_plugins.filter(function (p) {
  return p.noPrefill;
}).reduce(function (a, p) {
  a.push.apply(a, _toConsumableArray(p.noPrefill));
  return a;
}, []);

var el;
var css_vendor_esm_cache = {};

if (dist_module) {
  el = document.createElement('p'); // We test every property on vendor prefix requirement.
  // Once tested, result is cached. It gives us up to 70% perf boost.
  // http://jsperf.com/element-style-object-access-vs-plain-object
  //
  // Prefill cache with known css properties to reduce amount of
  // properties we need to feature test at runtime.
  // http://davidwalsh.name/vendor-prefix

  var computed = window.getComputedStyle(document.documentElement, '');

  for (var key$1 in computed) {
    // eslint-disable-next-line no-restricted-globals
    if (!isNaN(key$1)) css_vendor_esm_cache[computed[key$1]] = computed[key$1];
  } // Properties that cannot be correctly detected using the
  // cache prefill method.


  noPrefill.forEach(function (x) {
    return delete css_vendor_esm_cache[x];
  });
}
/**
 * Test if a property is supported, returns supported property with vendor
 * prefix if required. Returns `false` if not supported.
 *
 * @param {String} prop dash separated
 * @param {Object} [options]
 * @return {String|Boolean}
 * @api public
 */


function supportedProperty(prop, options) {
  if (options === void 0) {
    options = {};
  }

  // For server-side rendering.
  if (!el) return prop; // Remove cache for benchmark tests or return property from the cache.

  if ( true && css_vendor_esm_cache[prop] != null) {
    return css_vendor_esm_cache[prop];
  } // Check if 'transition' or 'transform' natively supported in browser.


  if (prop === 'transition' || prop === 'transform') {
    options[prop] = prop in el.style;
  } // Find a plugin for current prefix property.


  for (var i = 0; i < propertyDetectors.length; i++) {
    css_vendor_esm_cache[prop] = propertyDetectors[i](prop, el.style, options); // Break loop, if value found.

    if (css_vendor_esm_cache[prop]) break;
  } // Reset styles for current property.
  // Firefox can even throw an error for invalid properties, e.g., "0".


  try {
    el.style[prop] = '';
  } catch (err) {
    return false;
  }

  return css_vendor_esm_cache[prop];
}

var cache$1 = {};
var transitionProperties = {
  transition: 1,
  'transition-property': 1,
  '-webkit-transition': 1,
  '-webkit-transition-property': 1
};
var transPropsRegExp = /(^\s*[\w-]+)|, (\s*[\w-]+)(?![^()]*\))/g;
var el$1;
/**
 * Returns prefixed value transition/transform if needed.
 *
 * @param {String} match
 * @param {String} p1
 * @param {String} p2
 * @return {String}
 * @api private
 */

function prefixTransitionCallback(match, p1, p2) {
  if (p1 === 'var') return 'var';
  if (p1 === 'all') return 'all';
  if (p2 === 'all') return ', all';
  var prefixedValue = p1 ? supportedProperty(p1) : ", " + supportedProperty(p2);
  if (!prefixedValue) return p1 || p2;
  return prefixedValue;
}

if (dist_module) el$1 = document.createElement('p');
/**
 * Returns prefixed value if needed. Returns `false` if value is not supported.
 *
 * @param {String} property
 * @param {String} value
 * @return {String|Boolean}
 * @api public
 */

function supportedValue(property, value) {
  // For server-side rendering.
  var prefixedValue = value;
  if (!el$1 || property === 'content') return value; // It is a string or a number as a string like '1'.
  // We want only prefixable values here.
  // eslint-disable-next-line no-restricted-globals

  if (typeof prefixedValue !== 'string' || !isNaN(parseInt(prefixedValue, 10))) {
    return prefixedValue;
  } // Create cache key for current value.


  var cacheKey = property + prefixedValue; // Remove cache for benchmark tests or return value from cache.

  if ( true && cache$1[cacheKey] != null) {
    return cache$1[cacheKey];
  } // IE can even throw an error in some cases, for e.g. style.content = 'bar'.


  try {
    // Test value as it is.
    el$1.style[property] = prefixedValue;
  } catch (err) {
    // Return false if value not supported.
    cache$1[cacheKey] = false;
    return false;
  } // If 'transition' or 'transition-property' property.


  if (transitionProperties[property]) {
    prefixedValue = prefixedValue.replace(transPropsRegExp, prefixTransitionCallback);
  } else if (el$1.style[property] === '') {
    // Value with a vendor prefix.
    prefixedValue = prefix.css + prefixedValue; // Hardcode test to convert "flex" to "-ms-flexbox" for IE10.

    if (prefixedValue === '-ms-flex') el$1.style[property] = '-ms-flexbox'; // Test prefixed value.

    el$1.style[property] = prefixedValue; // Return false if value not supported.

    if (el$1.style[property] === '') {
      cache$1[cacheKey] = false;
      return false;
    }
  } // Reset styles for current property.


  el$1.style[property] = ''; // Write current value to cache.

  cache$1[cacheKey] = prefixedValue;
  return cache$1[cacheKey];
}



// CONCATENATED MODULE: ./node_modules/jss-plugin-vendor-prefixer/dist/jss-plugin-vendor-prefixer.esm.js



/**
 * Add vendor prefix to a property name when needed.
 *
 * @api public
 */

function jssVendorPrefixer() {
  function onProcessRule(rule) {
    if (rule.type === 'keyframes') {
      var atRule = rule;
      atRule.at = supportedKeyframes(atRule.at);
    }
  }

  function prefixStyle(style) {
    for (var prop in style) {
      var value = style[prop];

      if (prop === 'fallbacks' && Array.isArray(value)) {
        style[prop] = value.map(prefixStyle);
        continue;
      }

      var changeProp = false;
      var supportedProp = supportedProperty(prop);
      if (supportedProp && supportedProp !== prop) changeProp = true;
      var changeValue = false;
      var supportedValue$$1 = supportedValue(supportedProp, toCssValue(value));
      if (supportedValue$$1 && supportedValue$$1 !== value) changeValue = true;

      if (changeProp || changeValue) {
        if (changeProp) delete style[prop];
        style[supportedProp || prop] = supportedValue$$1 || value;
      }
    }

    return style;
  }

  function onProcessStyle(style, rule) {
    if (rule.type !== 'style') return style;
    return prefixStyle(style);
  }

  function onChangeValue(value, prop) {
    return supportedValue(prop, toCssValue(value)) || value;
  }

  return {
    onProcessRule: onProcessRule,
    onProcessStyle: onProcessStyle,
    onChangeValue: onChangeValue
  };
}

/* harmony default export */ var jss_plugin_vendor_prefixer_esm = (jssVendorPrefixer);

// CONCATENATED MODULE: ./node_modules/jss-plugin-props-sort/dist/jss-plugin-props-sort.esm.js
/**
 * Sort props by length.
 */
function jssPropsSort() {
  var sort = function sort(prop0, prop1) {
    if (prop0.length === prop1.length) {
      return prop0 > prop1 ? 1 : -1;
    }

    return prop0.length - prop1.length;
  };

  return {
    onProcessStyle: function onProcessStyle(style, rule) {
      if (rule.type !== 'style') return style;
      var newStyle = {};
      var props = Object.keys(style).sort(sort);

      for (var i = 0; i < props.length; i++) {
        newStyle[props[i]] = style[props[i]];
      }

      return newStyle;
    }
  };
}

/* harmony default export */ var jss_plugin_props_sort_esm = (jssPropsSort);

// CONCATENATED MODULE: ./node_modules/jss-preset-default/dist/jss-preset-default.esm.js













var jss_preset_default_esm_index = (function (options) {
  if (options === void 0) {
    options = {};
  }

  return {
    plugins: [jss_plugin_rule_value_function_esm(), jss_plugin_rule_value_observable_esm(options.observable), jss_plugin_template_esm(), jss_plugin_global_esm(), jss_plugin_extend_esm(), jss_plugin_nested_esm(), jss_plugin_compose_esm(), jss_plugin_camel_case_esm(), jss_plugin_default_unit_esm(options.defaultUnit), jss_plugin_expand_esm(), jss_plugin_vendor_prefixer_esm(), jss_plugin_props_sort_esm()]
  };
});

/* harmony default export */ var jss_preset_default_esm = (jss_preset_default_esm_index);

// CONCATENATED MODULE: ./src/Jss.ts


// Be sure to set up JSS before anyone tries to use it.
jss_esm.setup(jss_preset_default_esm());
/* harmony default export */ var src_Jss = (jss_esm);

// CONCATENATED MODULE: ./src/Highlight.ts
/**
 * Current selection or highlight.
 */
class Highlight {
    constructor(program, firstIndex, lastIndex) {
        this.program = program;
        // Default to one byte.
        lastIndex = (lastIndex !== null && lastIndex !== void 0 ? lastIndex : firstIndex);
        // Re-order so that begin <= end.
        this.firstIndex = Math.min(firstIndex, lastIndex);
        this.lastIndex = Math.max(firstIndex, lastIndex);
    }
}

// CONCATENATED MODULE: ./src/Highlighter.ts

/**
 * Represents an item that's highlightable and maps to a part of the program's binary.
 */
class Highlightable {
    constructor(firstIndex, lastIndex, element) {
        this.firstIndex = firstIndex;
        this.lastIndex = lastIndex;
        this.element = element;
    }
}
/**
 * Helper class to highlight or select elements.
 */
class Highlighter_Highlighter {
    constructor(tapeBrowser, program, container) {
        /**
         * All elements, index by the byte index.
         */
        this.elements = [];
        /**
         * Currently-highlighted elements.
         */
        this.highlightedElements = [];
        /**
         * Currently-selected elements.
         */
        this.selectedElements = [];
        this.tapeBrowser = tapeBrowser;
        this.program = program;
        this.container = container;
        container.addEventListener("mousedown", event => event.preventDefault());
        window.addEventListener("mouseup", event => {
            if (this.selectionBeginIndex !== undefined) {
                this.selectionBeginIndex = undefined;
                this.tapeBrowser.doneSelecting(this);
                event.preventDefault();
            }
        });
    }
    /**
     * Add the highlightable element to the highlighter.
     */
    addHighlightable(h) {
        // Allow undefined element for convenience of caller. Just ignore it.
        const element = h.element;
        if (element === undefined) {
            return;
        }
        for (let byteIndex = h.firstIndex; byteIndex <= h.lastIndex; byteIndex++) {
            this.elements[byteIndex] = element;
        }
        // Set up event listeners for highlighting.
        element.addEventListener("mouseenter", () => {
            this.tapeBrowser.setHighlight(new Highlight(this.program, h.firstIndex, h.lastIndex));
            if (this.selectionBeginIndex !== undefined) {
                const highlight = h.firstIndex <= this.selectionBeginIndex && this.selectionBeginIndex <= h.lastIndex
                    ? new Highlight(this.program, h.firstIndex, h.lastIndex)
                    : this.selectionBeginIndex < h.firstIndex
                        ? new Highlight(this.program, this.selectionBeginIndex, h.lastIndex)
                        : new Highlight(this.program, h.firstIndex, this.selectionBeginIndex);
                this.tapeBrowser.setSelection(highlight);
            }
        });
        element.addEventListener("mouseleave", () => {
            if (this.selectionBeginIndex === undefined) {
                this.tapeBrowser.setHighlight(undefined);
            }
        });
        // Set up event listeners for selecting.
        element.addEventListener("mousedown", event => {
            this.tapeBrowser.setSelection(new Highlight(this.program, h.firstIndex, h.lastIndex));
            // This isn't right, it depends on which way they'll select. Might have to fix later.
            this.selectionBeginIndex = h.firstIndex;
            event.preventDefault();
        });
    }
    /**
     * Add all highlightables to the highlighter.
     */
    addHighlightables(highlightables) {
        for (const highlightable of highlightables) {
            this.addHighlightable(highlightable);
        }
    }
    /**
     * Highlight the specified elements.
     */
    highlight(highlight, program, highlightClassName) {
        for (const e of this.highlightedElements) {
            e.classList.remove(highlightClassName);
        }
        this.highlightedElements.splice(0);
        if (highlight !== undefined && highlight.program === program) {
            const e = this.elements[highlight.firstIndex];
            if (e !== undefined) {
                e.classList.add(highlightClassName);
                this.highlightedElements.push(e);
            }
        }
    }
    /**
     * Select the specified elements.
     */
    select(highlight, program, selectClassName) {
        for (const e of this.selectedElements) {
            e.classList.remove(selectClassName);
        }
        this.selectedElements.splice(0);
        if (highlight !== undefined && highlight.program === program) {
            for (let byteIndex = highlight.firstIndex; byteIndex <= highlight.lastIndex; byteIndex++) {
                const e = this.elements[byteIndex];
                if (e !== undefined) {
                    e.classList.add(selectClassName);
                    this.selectedElements.push(e);
                }
            }
        }
    }
    /**
     * Called when the user is done selecting and we should scroll to the selection.
     */
    doneSelecting() {
        // Bring the middle element into view.
        if (this.selectedElements.length > 0) {
            const midElement = this.selectedElements[Math.floor(this.selectedElements.length / 2)];
            if (midElement.offsetHeight === 0) {
                // Not visible, do this later.
                this.scrollToElement = midElement;
            }
            else {
                midElement.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                });
            }
        }
    }
    /**
     * This set of elements was just shown.
     */
    didShow() {
        if (this.scrollToElement !== undefined) {
            this.scrollToElement.scrollIntoView({
                behavior: "auto",
                block: "center",
            });
            this.scrollToElement = undefined;
        }
    }
}

// CONCATENATED MODULE: ./src/BasicRender.ts



/**
 * Add text to the line with the specified class.
 *
 * @param out the enclosing element to add to.
 * @param text the text to add.
 * @param className the name of the class for the item.
 */
function BasicRender_add(out, text, className) {
    const e = document.createElement("span");
    e.innerText = text;
    e.classList.add(className);
    out.appendChild(e);
    return e;
}
// Stylesheet.
const BACKGROUND_COLOR = "var(--background)";
const STYLE = {
    error: {
        color: "var(--red)",
        "&$highlighted": {
            backgroundColor: "var(--red)",
            color: BACKGROUND_COLOR,
        },
    },
    lineNumber: {
        color: "var(--foreground-secondary)",
        "&$highlighted": {
            backgroundColor: "var(--foreground-secondary)",
            color: BACKGROUND_COLOR,
        },
    },
    punctuation: {
        color: "var(--foreground-secondary)",
        "&$highlighted": {
            backgroundColor: "var(--foreground-secondary)",
            color: BACKGROUND_COLOR,
        },
    },
    keyword: {
        color: "var(--blue)",
        "&$highlighted": {
            backgroundColor: "var(--blue)",
            color: BACKGROUND_COLOR,
        },
    },
    regular: {
        color: "var(--foreground)",
        "&$highlighted": {
            backgroundColor: "var(--foreground)",
            color: BACKGROUND_COLOR,
        },
    },
    string: {
        color: "var(--orange)",
        "&$highlighted": {
            backgroundColor: "var(--orange)",
            color: BACKGROUND_COLOR,
        },
    },
    comment: {
        color: "var(--cyan)",
        "&$highlighted": {
            backgroundColor: "var(--cyan)",
            color: BACKGROUND_COLOR,
        },
    },
    selected: {
        backgroundColor: "var(--background-highlights)",
    },
    highlighted: {
    // Empty style that's referenced above as $highlighted.
    },
};
const BasicRender_sheet = src_Jss.createStyleSheet(STYLE);
const highlightClassName = BasicRender_sheet.classes.highlighted;
const selectClassName = BasicRender_sheet.classes.selected;
/**
 * Render an array of Basic elements to a DIV.
 */
function toDiv(basicElements, out) {
    BasicRender_sheet.attach();
    const classes = BasicRender_sheet.classes;
    // Map from byte address to HTML element for that byte.
    const elements = [];
    let line = undefined;
    for (const basicElement of basicElements) {
        let className;
        if (line === undefined || basicElement.elementType === ElementType.LINE_NUMBER) {
            line = document.createElement("div");
            out.appendChild(line);
        }
        switch (basicElement.elementType) {
            case ElementType.ERROR:
                className = classes.error;
                break;
            case ElementType.LINE_NUMBER:
                className = classes.lineNumber;
                break;
            case ElementType.PUNCTUATION:
                className = classes.punctuation;
                break;
            case ElementType.KEYWORD:
                className = classes.keyword;
                break;
            case ElementType.REGULAR:
            default:
                className = classes.regular;
                break;
            case ElementType.STRING:
                className = classes.string;
                break;
            case ElementType.COMMENT:
                className = classes.comment;
                break;
        }
        const e = BasicRender_add(line, basicElement.text, className);
        if (basicElement.offset !== undefined) {
            elements.push(new Highlightable(basicElement.offset, basicElement.offset + basicElement.length - 1, e));
        }
    }
    return elements;
}

// EXTERNAL MODULE: ./node_modules/z80-disasm/dist/module/Opcodes.json
var Opcodes = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/z80-disasm/node_modules/z80-base/dist/module/Register.js
/**
 * List of all word registers.
 */
const Register_WORD_REG = new Set(["af", "bc", "de", "hl", "af'", "bc'", "de'", "hl'", "ix", "iy", "sp", "pc"]);
/**
 * List of all byte registers.
 */
const Register_BYTE_REG = new Set(["a", "f", "b", "c", "d", "e", "h", "l", "ixh", "ixl", "iyh", "iyl", "i", "r"]);
/**
 * Determine whether a register stores a word.
 */
function Register_isWordReg(s) {
    return Register_WORD_REG.has(s.toLowerCase());
}
/**
 * Determine whether a register stores a byte.
 */
function Register_isByteReg(s) {
    return Register_BYTE_REG.has(s.toLowerCase());
}

// CONCATENATED MODULE: ./node_modules/z80-disasm/node_modules/z80-base/dist/module/Utils.js
// Various utility functions.
/**
 * Convert a number to hex and zero-pad to the specified number of hex digits.
 */
function Utils_toHex(value, digits) {
    return value.toString(16).toUpperCase().padStart(digits, "0");
}
/**
 * Convert a byte to hex.
 */
function Utils_toHexByte(value) {
    return Utils_toHex(value, 2);
}
/**
 * Convert a word to hex.
 */
function Utils_toHexWord(value) {
    return Utils_toHex(value, 4);
}
/**
 * Return the high byte of a word.
 */
function Utils_hi(value) {
    return (value >> 8) & 0xFF;
}
/**
 * Return the low byte of a word.
 */
function Utils_lo(value) {
    return value & 0xFF;
}
/**
 * Create a word from a high and low byte.
 */
function Utils_word(highByte, lowByte) {
    return ((highByte & 0xFF) << 8) | (lowByte & 0xFF);
}
/**
 * Increment a byte.
 */
function Utils_inc8(value) {
    return Utils_add8(value, 1);
}
/**
 * Increment a word.
 */
function Utils_inc16(value) {
    return Utils_add16(value, 1);
}
/**
 * Decrement a byte.
 */
function Utils_dec8(value) {
    return Utils_sub8(value, 1);
}
/**
 * Decrement a word.
 */
function Utils_dec16(value) {
    return Utils_sub16(value, 1);
}
/**
 * Add two bytes together.
 */
function Utils_add8(a, b) {
    return (a + b) & 0xFF;
}
/**
 * Add two words together.
 */
function Utils_add16(a, b) {
    return (a + b) & 0xFFFF;
}
/**
 * Subtract two bytes.
 */
function Utils_sub8(a, b) {
    return (a - b) & 0xFF;
}
/**
 * Subtract two words.
 */
function Utils_sub16(a, b) {
    return (a - b) & 0xFFFF;
}
/**
 * Convert a byte to a signed number (e.g., 0xff to -1).
 */
function Utils_signedByte(value) {
    return value >= 128 ? value - 256 : value;
}

// CONCATENATED MODULE: ./node_modules/z80-disasm/node_modules/z80-base/dist/module/RegisterSet.js

/**
 * All registers in a Z80.
 */
class module_RegisterSet_RegisterSet {
    constructor() {
        // External state:
        this.af = 0;
        this.bc = 0;
        this.de = 0;
        this.hl = 0;
        this.afPrime = 0;
        this.bcPrime = 0;
        this.dePrime = 0;
        this.hlPrime = 0;
        this.ix = 0;
        this.iy = 0;
        this.sp = 0;
        this.pc = 0;
        // Internal state:
        this.memptr = 0;
        this.i = 0;
        this.r = 0; // Low 7 bits of R.
        this.r7 = 0; // Bit 7 of R.
        this.iff1 = 0;
        this.iff2 = 0;
        this.im = 0;
        this.halted = 0;
    }
    get a() {
        return Utils_hi(this.af);
    }
    set a(value) {
        this.af = Utils_word(value, this.f);
    }
    get f() {
        return Utils_lo(this.af);
    }
    set f(value) {
        this.af = Utils_word(this.a, value);
    }
    get b() {
        return Utils_hi(this.bc);
    }
    set b(value) {
        this.bc = Utils_word(value, this.c);
    }
    get c() {
        return Utils_lo(this.bc);
    }
    set c(value) {
        this.bc = Utils_word(this.b, value);
    }
    get d() {
        return Utils_hi(this.de);
    }
    set d(value) {
        this.de = Utils_word(value, this.e);
    }
    get e() {
        return Utils_lo(this.de);
    }
    set e(value) {
        this.de = Utils_word(this.d, value);
    }
    get h() {
        return Utils_hi(this.hl);
    }
    set h(value) {
        this.hl = Utils_word(value, this.l);
    }
    get l() {
        return Utils_lo(this.hl);
    }
    set l(value) {
        this.hl = Utils_word(this.h, value);
    }
    get ixh() {
        return Utils_hi(this.ix);
    }
    set ixh(value) {
        this.ix = Utils_word(value, this.ixl);
    }
    get ixl() {
        return Utils_lo(this.ix);
    }
    set ixl(value) {
        this.ix = Utils_word(this.ixh, value);
    }
    get iyh() {
        return Utils_hi(this.iy);
    }
    set iyh(value) {
        this.iy = Utils_word(value, this.iyl);
    }
    get iyl() {
        return Utils_lo(this.iy);
    }
    set iyl(value) {
        this.iy = Utils_word(this.iyh, value);
    }
    /**
     * Combine the two R parts together.
     */
    get rCombined() {
        return (this.r7 & 0x80) | (this.r & 0xF7);
    }
}
/**
 * All real fields of RegisterSet, for enumeration.
 */
const RegisterSet_registerSetFields = [
    "af", "bc", "de", "hl",
    "afPrime", "bcPrime", "dePrime", "hlPrime",
    "ix", "iy", "sp", "pc",
    "memptr", "i", "r", "iff1", "iff2", "im", "halted"
];

// CONCATENATED MODULE: ./node_modules/z80-disasm/node_modules/z80-base/dist/module/Flag.js
/**
 * The flag bits in the F register.
 */
var Flag_Flag;
(function (Flag) {
    /**
     * Carry and borrow. Indicates that the addition or subtraction did not
     * fit in the register.
     */
    Flag[Flag["C"] = 1] = "C";
    /**
     * Set if the last operation was a subtraction.
     */
    Flag[Flag["N"] = 2] = "N";
    /**
     * Parity: Indicates that the result has an even number of bits set.
     */
    Flag[Flag["P"] = 4] = "P";
    /**
     * Overflow: Indicates that two's complement does not fit in register.
     */
    Flag[Flag["V"] = 4] = "V";
    /**
     * Undocumented bit, but internal state can leak into it.
     */
    Flag[Flag["X3"] = 8] = "X3";
    /**
     * Half carry: Carry from bit 3 to bit 4 during BCD operations.
     */
    Flag[Flag["H"] = 16] = "H";
    /**
     * Undocumented bit, but internal state can leak into it.
     */
    Flag[Flag["X5"] = 32] = "X5";
    /**
     * Set if value is zero.
     */
    Flag[Flag["Z"] = 64] = "Z";
    /**
     * Set of value is negative.
     */
    Flag[Flag["S"] = 128] = "S";
})(Flag_Flag || (Flag_Flag = {}));

// CONCATENATED MODULE: ./node_modules/z80-disasm/node_modules/z80-base/dist/module/index.js





// CONCATENATED MODULE: ./node_modules/z80-disasm/dist/module/Instruction.js

class Instruction_Instruction {
    constructor(address, bin, mnemonic, params, args) {
        this.address = address;
        this.bin = bin;
        this.mnemonic = mnemonic;
        this.params = (params !== null && params !== void 0 ? params : []);
        this.args = (args !== null && args !== void 0 ? args : []);
    }
    /**
     * Text version of the binary: two-digit hex numbers separated by a space.
     */
    binText() {
        return this.bin.map(Utils_toHexByte).join(" ");
    }
    /**
     * Text of the instruction (e.g., "ld hl,0x1234").
     */
    toText() {
        return (this.mnemonic + " " + this.args.join(",")).trim();
    }
    /**
     * Replace all instances of "varName" in the args field with a replacement.
     */
    replaceArgVariable(varName, replacement) {
        const args = this.args;
        for (let i = 0; i < args.length; i++) {
            let arg = args[i];
            let changed;
            do {
                changed = false;
                const pos = arg.indexOf(varName);
                if (pos >= 0) {
                    arg = arg.substr(0, pos) + replacement + arg.substr(pos + varName.length);
                    changed = true;
                }
            } while (changed);
            args[i] = arg;
        }
    }
    /**
     * Whether this instruction, when executed, potentially continues on to the next instructions. For example,
     * "nop" and "jr z,foo" return true, but "ret" and "jr foo" return false.
     */
    continues() {
        // Return without a flag test.
        if (this.mnemonic === "ret" && this.args.length === 0) {
            return false;
        }
        // Return from interrupt.
        if (this.mnemonic === "reti" || this.mnemonic === "retn") {
            return false;
        }
        // Jump without a flag test.
        if ((this.mnemonic === "jp" || this.mnemonic === "jr") && this.args.length === 1) {
            return false;
        }
        // All else might continue.
        return true;
    }
}

// CONCATENATED MODULE: ./node_modules/z80-disasm/dist/module/Disasm.js



// Temporary string used for address substitution.
const TARGET = "TARGET";
// Number of bytes in memory.
const MEM_SIZE = 64 * 1024;
class Disasm_Disasm {
    constructor() {
        this.memory = new Uint8Array(MEM_SIZE);
        this.hasContent = new Uint8Array(MEM_SIZE);
        this.isDecoded = new Uint8Array(MEM_SIZE);
        this.instructions = new Array(MEM_SIZE);
        this.knownLabels = new Map();
        /**
         * Addresses that might be jumped to when running the code.
         */
        this.entryPoints = [];
    }
    /**
     * Add a chunk of binary somewhere in memory.
     */
    addChunk(bin, address) {
        this.memory.set(bin, address);
        this.hasContent.fill(1, address, address + bin.length);
    }
    /**
     * Add a memory location that might be jumped to when running this program. If no entry
     * points are specified, then the lower address for which we have binary will be used.
     */
    addEntryPoint(entryPoint) {
        this.entryPoints.push(entryPoint);
    }
    /**
     * Disassemble one instruction.
     *
     * @param address the address to disassemble.
     */
    disassembleOne(address) {
        var _a;
        // Bytes decoded so far in the instruction being disassembled.
        let bytes = [];
        // Get the next byte.
        const next = () => {
            const byte = this.memory[address];
            bytes.push(byte);
            address = Utils_inc16(address);
            return byte;
        };
        const startAddress = address;
        let jumpTarget = undefined;
        // Fetch base instruction.
        let byte = next();
        let map = Opcodes;
        let instruction;
        while (instruction === undefined) {
            let value = map[byte.toString(16)];
            if (value === undefined) {
                // TODO
                // asm.push(".byte 0x" + byte.toString(16));
                const stringParams = bytes.map((n) => "0x" + Utils_toHex(n, 2));
                instruction = new Instruction_Instruction(startAddress, bytes, ".byte", stringParams, stringParams);
            }
            else if (value.shift !== undefined) {
                // Descend to sub-map.
                map = value.shift;
                byte = next();
            }
            else {
                // Found instruction. Parse arguments.
                const args = (_a = value.params, (_a !== null && _a !== void 0 ? _a : [])).slice();
                for (let i = 0; i < args.length; i++) {
                    let arg = args[i];
                    let changed;
                    do {
                        changed = false;
                        // Fetch word argument.
                        let pos = arg.indexOf("nnnn");
                        if (pos >= 0) {
                            const lowByte = next();
                            const highByte = next();
                            const nnnn = Utils_word(highByte, lowByte);
                            let target;
                            if (value.mnemonic === "call" || value.mnemonic === "jp") {
                                jumpTarget = nnnn;
                                target = TARGET;
                            }
                            else {
                                target = "0x" + Utils_toHex(nnnn, 4);
                            }
                            arg = arg.substr(0, pos) + target + arg.substr(pos + 4);
                            changed = true;
                        }
                        // Fetch byte argument.
                        pos = arg.indexOf("nn");
                        if (pos === -1) {
                            pos = arg.indexOf("dd");
                        }
                        if (pos >= 0) {
                            const nn = next();
                            arg = arg.substr(0, pos) + "0x" + Utils_toHex(nn, 2) + arg.substr(pos + 2);
                            changed = true;
                        }
                        // Fetch offset argument.
                        pos = arg.indexOf("offset");
                        if (pos >= 0) {
                            const offset = Utils_signedByte(next());
                            jumpTarget = address + offset;
                            arg = arg.substr(0, pos) + TARGET + arg.substr(pos + 6);
                            changed = true;
                        }
                    } while (changed);
                    args[i] = arg;
                }
                instruction = new Instruction_Instruction(startAddress, bytes, value.mnemonic, value.params, args);
                if (jumpTarget !== undefined) {
                    instruction.jumpTarget = jumpTarget;
                }
            }
        }
        return instruction;
    }
    /**
     * Makes a data (.byte, .text) instruction starting at the specified address.
     */
    makeDataInstruction(address) {
        const startAddress = address;
        // Whether the byte is appropriate for a .text instruction.
        const isPrintable = (b) => b >= 32 && b < 127;
        const isText = (b) => isPrintable(b) || b === 10 || b === 13;
        const parts = [];
        let mnemonic = undefined;
        // Look for contiguous sequence of either text or not text.
        if (isText(this.memory[address])) {
            mnemonic = ".text";
            while (address < MEM_SIZE && this.hasContent[address] && !this.isDecoded[address] && isText(this.memory[address]) && address - startAddress < 50) {
                const byte = this.memory[address];
                if (isPrintable(byte)) {
                    let char = String.fromCharCode(byte);
                    if (char === "\"") {
                        // zasm doesn't support this backslash syntax. We'd have to enclose the whole string
                        // with single quotes.
                        // http://k1.spdns.de/Develop/Projects/zasm/Documentation/z79.htm#R
                        char = "\\\"";
                    }
                    if (parts.length > 0 && parts[parts.length - 1].startsWith("\"")) {
                        const s = parts[parts.length - 1];
                        parts[parts.length - 1] = s.substring(0, s.length - 1) + char + "\"";
                    }
                    else {
                        parts.push("\"" + char + "\"");
                    }
                }
                else {
                    parts.push("0x" + Utils_toHexByte(byte));
                }
                address += 1;
            }
            if (address - startAddress < 2) {
                // Probably not actual text.
                mnemonic = undefined;
                parts.splice(0, parts.length);
                address = startAddress;
            }
            else {
                // Allow terminating NUL.
                if (address < MEM_SIZE && this.hasContent[address] && !this.isDecoded[address] && this.memory[address] === 0) {
                    parts.push("0x" + Utils_toHexByte(0));
                    address += 1;
                }
            }
        }
        if (mnemonic === undefined) {
            mnemonic = ".byte";
            while (address < MEM_SIZE && this.hasContent[address] && !this.isDecoded[address] && address - startAddress < 8) {
                parts.push("0x" + Utils_toHexByte(this.memory[address]));
                address += 1;
            }
        }
        const bytes = Array.from(this.memory.slice(startAddress, address));
        return new Instruction_Instruction(startAddress, bytes, mnemonic, parts, parts);
    }
    /**
     * Add an array of known label ([address, label] pairs).
     */
    addLabels(labels) {
        for (const [address, label] of labels) {
            this.knownLabels.set(address, label);
        }
    }
    /**
     * Disassemble all instructions and assign labels.
     */
    disassemble() {
        var _a;
        // Create set of addresses we want to decode, starting with our entry points.
        const addressesToDecode = new Set();
        const addAddressToDecode = (number) => {
            if (number !== undefined &&
                this.hasContent[number] &&
                this.instructions[number] === undefined) {
                addressesToDecode.add(number);
            }
        };
        if (this.entryPoints.length === 0) {
            // No explicit entry points. Default to lowest address we have data for.
            for (let address = 0; address < MEM_SIZE; address++) {
                if (this.hasContent[address]) {
                    addressesToDecode.add(address);
                    break;
                }
            }
            if (this.entryPoints.length === 0) {
                throw new Error("not binary content was specified");
            }
        }
        else {
            for (const address of this.entryPoints) {
                addressesToDecode.add(address);
            }
        }
        // Keep decoding as long as we have addresses to decode.
        while (addressesToDecode.size !== 0) {
            // Pick any to do next.
            const address = addressesToDecode.values().next().value;
            addressesToDecode.delete(address);
            const instruction = this.disassembleOne(address);
            this.instructions[address] = instruction;
            this.isDecoded.fill(1, address, address + instruction.bin.length);
            addAddressToDecode(instruction.jumpTarget);
            if (instruction.continues()) {
                addAddressToDecode(address + instruction.bin.length);
            }
        }
        // Map from jump target to list of instructions that jump there.
        const jumpTargetMap = new Map();
        const instructions = [];
        for (let address = 0; address < MEM_SIZE; address++) {
            if (this.hasContent[address]) {
                let instruction = this.instructions[address];
                if (instruction === undefined) {
                    instruction = this.makeDataInstruction(address);
                }
                instructions.push(instruction);
                if (instruction.jumpTarget !== undefined) {
                    // Add this instruction to the list of instructions that call this target.
                    let sources = jumpTargetMap.get(instruction.jumpTarget);
                    if (sources === undefined) {
                        sources = [];
                        jumpTargetMap.set(instruction.jumpTarget, sources);
                    }
                    sources.push(instruction);
                }
                address += instruction.bin.length - 1;
            }
        }
        // Assign labels.
        let labelCounter = 1;
        for (const instruction of instructions) {
            let label = this.knownLabels.get(instruction.address);
            const sources = (_a = jumpTargetMap.get(instruction.address), (_a !== null && _a !== void 0 ? _a : []));
            if (sources.length !== 0) {
                if (label === undefined) {
                    // Make anonymous label.
                    label = "L" + labelCounter++;
                }
            }
            if (label !== undefined) {
                instruction.label = label;
                // Replace pseudo-target in instruction.
                for (const source of sources) {
                    source.replaceArgVariable(TARGET, label);
                }
            }
        }
        // Replace the target variable with the actual address for those
        // jumps that go outside our disassembled code.
        for (const instruction of instructions) {
            if (instruction.jumpTarget !== undefined) {
                instruction.replaceArgVariable(TARGET, "0x" + Utils_toHexWord(instruction.jumpTarget));
            }
        }
        return instructions;
    }
}

// CONCATENATED MODULE: ./node_modules/z80-disasm/dist/module/KnownLabels.js
const Z80_KNOWN_LABELS = [
    [0x0000, "rst00"],
    [0x0008, "rst08"],
    [0x0010, "rst10"],
    [0x0018, "rst18"],
    [0x0020, "rst20"],
    [0x0028, "rst28"],
    [0x0030, "rst30"],
    [0x0038, "rst38"],
];
const TRS80_MODEL_III_KNOWN_LABELS = [
    [0x0298, "clkon"],
    [0x02a1, "clkoff"],
    [0x0296, "cshin"],
    [0x0235, "csin"],
    [0x0287, "cshwr"],
    [0x01f8, "csoff"],
    [0x0264, "csout"],
    [0x3033, "date"],
    [0x0060, "delay"],
    [0x0069, "initio"],
    [0x002b, "kbchar"],
    [0x0040, "kbline"],
    [0x0049, "kbwait"],
    [0x028d, "kbbrk"],
    [0x003b, "prchar"],
    [0x01d9, "prscn"],
    [0x1a19, "ready"],
    [0x0000, "reset"],
    [0x006c, "route"],
    [0x005a, "rsinit"],
    [0x0050, "rsrcv"],
    [0x0055, "rstx"],
    [0x3042, "setcas"],
    [0x3036, "time"],
    [0x0033, "vdchar"],
    [0x01c9, "vdcls"],
    [0x021b, "vdline"],
];

// CONCATENATED MODULE: ./node_modules/z80-disasm/dist/module/index.js




// CONCATENATED MODULE: ./node_modules/trs80-emulator/dist/module/Cassette.js
/**
 * Interface for fetching cassette audio data. We make this a concrete
 * class because rollup.js can't handle exported interfaces.
 */
class Cassette {
    constructor() {
        /**
         * The number of samples per second that this audio represents.
         */
        this.samplesPerSecond = 44100;
    }
    /**
     * Called when the motor starts.
     */
    onMotorStart() {
        // Optional function.
    }
    /**
     * Read the next sample. Must be in the range -1 to 1. If we try to read off
     * the end of the cassette, just return zero.
     */
    readSample() {
        return 0;
    }
    /**
     * Called when the motor stops.
     */
    onMotorStop() {
        // Optional function.
    }
}

// CONCATENATED MODULE: ./node_modules/z80-emulator/dist/module/Decode.js
// Do not modify. This file is generated by GenerateOpcodes.ts.

// Tables for computing flags after an operation.
const halfCarryAddTable = [0, Flag.H, Flag.H, Flag.H, 0, 0, 0, Flag.H];
const halfCarrySubTable = [0, 0, Flag.H, 0, Flag.H, 0, Flag.H, Flag.H];
const overflowAddTable = [0, 0, 0, Flag.V, Flag.V, 0, 0, 0];
const overflowSubTable = [0, Flag.V, 0, 0, 0, 0, Flag.V, 0];
let fillMap;
const decodeMap = new Map();
fillMap = decodeMap;
// The contents of this map are auto-generated by GenerateOpcodes.ts.
fillMap.set(0x00, (z80) => {
});
fillMap.set(0x01, (z80) => {
    let value;
    value = z80.readByte(z80.regs.pc);
    z80.regs.pc = inc16(z80.regs.pc);
    value = word(z80.readByte(z80.regs.pc), value);
    z80.regs.pc = inc16(z80.regs.pc);
    z80.regs.bc = value;
});
fillMap.set(0x02, (z80) => {
    let value;
    value = z80.regs.a;
    z80.regs.memptr = word(z80.regs.a, inc16(z80.regs.bc));
    z80.writeByte(z80.regs.bc, value);
});
fillMap.set(0x03, (z80) => {
    let value;
    value = z80.regs.bc;
    const oldValue = value;
    z80.incTStateCount(2);
    value = inc16(value);
    z80.regs.bc = value;
});
fillMap.set(0x04, (z80) => {
    let value;
    value = z80.regs.b;
    const oldValue = value;
    value = inc8(value);
    z80.regs.f = (z80.regs.f & Flag.C) | (value === 0x80 ? Flag.V : 0) | ((value & 0x0F) !== 0 ? 0 : Flag.H) | z80.sz53Table[value];
    z80.regs.b = value;
});
fillMap.set(0x05, (z80) => {
    let value;
    value = z80.regs.b;
    const oldValue = value;
    value = dec8(value);
    z80.regs.f = (z80.regs.f & Flag.C) | (value === 0x7F ? Flag.V : 0) | ((oldValue & 0x0F) !== 0 ? 0 : Flag.H) | Flag.N | z80.sz53Table[value];
    z80.regs.b = value;
});
fillMap.set(0x06, (z80) => {
    let value;
    value = z80.readByte(z80.regs.pc);
    z80.regs.pc = inc16(z80.regs.pc);
    z80.regs.b = value;
});
fillMap.set(0x07, (z80) => {
    const oldA = z80.regs.a;
    z80.regs.a = ((z80.regs.a >> 7) | (z80.regs.a << 1)) & 0xFF;
    z80.regs.f = (z80.regs.f & (Flag.P | Flag.Z | Flag.S)) | (z80.regs.a & (Flag.X3 | Flag.X5)) | ((oldA & 0x80) !== 0 ? Flag.C : 0);
});
fillMap.set(0x08, (z80) => {
    const rightValue = z80.regs.afPrime;
    z80.regs.afPrime = z80.regs.af;
    z80.regs.af = rightValue;
});
fillMap.set(0x09, (z80) => {
    let value;
    z80.incTStateCount(7);
    value = z80.regs.bc;
    let result = z80.regs.hl + value;
    const lookup = (((z80.regs.hl & 0x0800) >> 11) |
        ((value & 0x0800) >> 10) |
        ((result & 0x0800) >> 9)) & 0xFF;
    z80.regs.memptr = inc16(z80.regs.hl);
    z80.regs.hl = result & 0xFFFF;
    z80.regs.f = (z80.regs.f & (Flag.V | Flag.Z | Flag.S)) | ((result & 0x10000) !== 0 ? Flag.C : 0) | ((result >> 8) & (Flag.X3 | Flag.X5)) | halfCarryAddTable[lookup];
});
fillMap.set(0x0A, (z80) => {
    let value;
    z80.regs.memptr = inc16(z80.regs.bc);
    value = z80.readByte(z80.regs.bc);
    z80.regs.a = value;
});
fillMap.set(0x0B, (z80) => {
    let value;
    value = z80.regs.bc;
    const oldValue = value;
    z80.incTStateCount(2);
    value = dec16(value);
    z80.regs.bc = value;
});
fillMap.set(0x0C, (z80) => {
    let value;
    value = z80.regs.c;
    const oldValue = value;
    value = inc8(value);
    z80.regs.f = (z80.regs.f & Flag.C) | (value === 0x80 ? Flag.V : 0) | ((value & 0x0F) !== 0 ? 0 : Flag.H) | z80.sz53Table[value];
    z80.regs.c = value;
});
fillMap.set(0x0D, (z80) => {
    let value;
    value = z80.regs.c;
    const oldValue = value;
    value = dec8(value);
    z80.regs.f = (z80.regs.f & Flag.C) | (value === 0x7F ? Flag.V : 0) | ((oldValue & 0x0F) !== 0 ? 0 : Flag.H) | Flag.N | z80.sz53Table[value];
    z80.regs.c = value;
});
fillMap.set(0x0E, (z80) => {
    let value;
    value = z80.readByte(z80.regs.pc);
    z80.regs.pc = inc16(z80.regs.pc);
    z80.regs.c = value;
});
fillMap.set(0x0F, (z80) => {
    const oldA = z80.regs.a;
    z80.regs.a = ((z80.regs.a >> 1) | (z80.regs.a << 7)) & 0xFF;
    z80.regs.f = (z80.regs.f & (Flag.P | Flag.Z | Flag.S)) | (z80.regs.a & (Flag.X3 | Flag.X5)) | ((oldA & 0x01) !== 0 ? Flag.C : 0);
});
fillMap.set(0x10, (z80) => {
    z80.incTStateCount(1);
    z80.regs.b = dec8(z80.regs.b);
    if (z80.regs.b !== 0) {
        const offset = z80.readByte(z80.regs.pc);
        z80.incTStateCount(5);
        z80.regs.pc = add16(z80.regs.pc, signedByte(offset));
        z80.regs.pc = inc16(z80.regs.pc);
        z80.regs.memptr = z80.regs.pc;
    }
    else {
        z80.incTStateCount(3);
        z80.regs.pc = inc16(z80.regs.pc);
    }
});
fillMap.set(0x11, (z80) => {
    let value;
    value = z80.readByte(z80.regs.pc);
    z80.regs.pc = inc16(z80.regs.pc);
    value = word(z80.readByte(z80.regs.pc), value);
    z80.regs.pc = inc16(z80.regs.pc);
    z80.regs.de = value;
});
fillMap.set(0x12, (z80) => {
    let value;
    value = z80.regs.a;
    z80.regs.memptr = word(z80.regs.a, inc16(z80.regs.de));
    z80.writeByte(z80.regs.de, value);
});
fillMap.set(0x13, (z80) => {
    let value;
    value = z80.regs.de;
    const oldValue = value;
    z80.incTStateCount(2);
    value = inc16(value);
    z80.regs.de = value;
});
fillMap.set(0x14, (z80) => {
    let value;
    value = z80.regs.d;
    const oldValue = value;
    value = inc8(value);
    z80.regs.f = (z80.regs.f & Flag.C) | (value === 0x80 ? Flag.V : 0) | ((value & 0x0F) !== 0 ? 0 : Flag.H) | z80.sz53Table[value];
    z80.regs.d = value;
});
fillMap.set(0x15, (z80) => {
    let value;
    value = z80.regs.d;
    const oldValue = value;
    value = dec8(value);
    z80.regs.f = (z80.regs.f & Flag.C) | (value === 0x7F ? Flag.V : 0) | ((oldValue & 0x0F) !== 0 ? 0 : Flag.H) | Flag.N | z80.sz53Table[value];
    z80.regs.d = value;
});
fillMap.set(0x16, (z80) => {
    let value;
    value = z80.readByte(z80.regs.pc);
    z80.regs.pc = inc16(z80.regs.pc);
    z80.regs.d = value;
});
fillMap.set(0x17, (z80) => {
    const oldA = z80.regs.a;
    z80.regs.a = ((z80.regs.a << 1) | ((z80.regs.f & Flag.C) !== 0 ? 0x01 : 0)) & 0xFF;
    z80.regs.f = (z80.regs.f & (Flag.P | Flag.Z | Flag.S)) | (z80.regs.a & (Flag.X3 | Flag.X5)) | ((oldA & 0x80) !== 0 ? Flag.C : 0);
});
fillMap.set(0x18, (z80) => {
    const offset = z80.readByte(z80.regs.pc);
    z80.incTStateCount(5);
    z80.regs.pc = add16(z80.regs.pc, signedByte(offset));
    z80.regs.pc = inc16(z80.regs.pc);
    z80.regs.memptr = z80.regs.pc;
});
fillMap.set(0x19, (z80) => {
    let value;
    z80.incTStateCount(7);
    value = z80.regs.de;
    let result = z80.regs.hl + value;
    const lookup = (((z80.regs.hl & 0x0800) >> 11) |
        ((value & 0x0800) >> 10) |
        ((result & 0x0800) >> 9)) & 0xFF;
    z80.regs.memptr = inc16(z80.regs.hl);
    z80.regs.hl = result & 0xFFFF;
    z80.regs.f = (z80.regs.f & (Flag.V | Flag.Z | Flag.S)) | ((result & 0x10000) !== 0 ? Flag.C : 0) | ((result >> 8) & (Flag.X3 | Flag.X5)) | halfCarryAddTable[lookup];
});
fillMap.set(0x1A, (z80) => {
    let value;
    z80.regs.memptr = inc16(z80.regs.de);
    value = z80.readByte(z80.regs.de);
    z80.regs.a = value;
});
fillMap.set(0x1B, (z80) => {
    let value;
    value = z80.regs.de;
    const oldValue = value;
    z80.incTStateCount(2);
    value = dec16(value);
    z80.regs.de = value;
});
fillMap.set(0x1C, (z80) => {
    let value;
    value = z80.regs.e;
    const oldValue = value;
    value = inc8(value);
    z80.regs.f = (z80.regs.f & Flag.C) | (value === 0x80 ? Flag.V : 0) | ((value & 0x0F) !== 0 ? 0 : Flag.H) | z80.sz53Table[value];
    z80.regs.e = value;
});
fillMap.set(0x1D, (z80) => {
    let value;
    value = z80.regs.e;
    const oldValue = value;
    value = dec8(value);
    z80.regs.f = (z80.regs.f & Flag.C) | (value === 0x7F ? Flag.V : 0) | ((oldValue & 0x0F) !== 0 ? 0 : Flag.H) | Flag.N | z80.sz53Table[value];
    z80.regs.e = value;
});
fillMap.set(0x1E, (z80) => {
    let value;
    value = z80.readByte(z80.regs.pc);
    z80.regs.pc = inc16(z80.regs.pc);
    z80.regs.e = value;
});
fillMap.set(0x1F, (z80) => {
    const oldA = z80.regs.a;
    z80.regs.a = (z80.regs.a >> 1) | ((z80.regs.f & Flag.C) !== 0 ? 0x80 : 0);
    z80.regs.f = (z80.regs.f & (Flag.P | Flag.Z | Flag.S)) | (z80.regs.a & (Flag.X3 | Flag.X5)) | ((oldA & 0x01) !== 0 ? Flag.C : 0);
});
fillMap.set(0x20, (z80) => {
    if ((z80.regs.f & Flag.Z) === 0) {
        const offset = z80.readByte(z80.regs.pc);
        z80.incTStateCount(5);
        z80.regs.pc = add16(z80.regs.pc, signedByte(offset));
        z80.regs.pc = inc16(z80.regs.pc);
        z80.regs.memptr = z80.regs.pc;
    }
    else {
        z80.incTStateCount(3);
        z80.regs.pc = inc16(z80.regs.pc);
    }
});
fillMap.set(0x21, (z80) => {
    let value;
    value = z80.readByte(z80.regs.pc);
    z80.regs.pc = inc16(z80.regs.pc);
    value = word(z80.readByte(z80.regs.pc), value);
    z80.regs.pc = inc16(z80.regs.pc);
    z80.regs.hl = value;
});
fillMap.set(0x22, (z80) => {
    let value;
    value = z80.regs.hl;
    let addr = z80.readByte(z80.regs.pc);
    z80.regs.pc = inc16(z80.regs.pc);
    addr = word(z80.readByte(z80.regs.pc), addr);
    z80.regs.pc = inc16(z80.regs.pc);
    z80.writeByte(addr, lo(value));
    addr = inc16(addr);
    z80.regs.memptr = addr;
    z80.writeByte(addr, hi(value));
});
fillMap.set(0x23, (z80) => {
    let value;
    value = z80.regs.hl;
    const oldValue = value;
    z80.incTStateCount(2);
    value = inc16(value);
    z80.regs.hl = value;
});
fillMap.set(0x24, (z80) => {
    let value;
    value = z80.regs.h;
    const oldValue = value;
    value = inc8(value);
    z80.regs.f = (z80.regs.f & Flag.C) | (value === 0x80 ? Flag.V : 0) | ((value & 0x0F) !== 0 ? 0 : Flag.H) | z80.sz53Table[value];
    z80.regs.h = value;
});
fillMap.set(0x25, (z80) => {
    let value;
    value = z80.regs.h;
    const oldValue = value;
    value = dec8(value);
    z80.regs.f = (z80.regs.f & Flag.C) | (value === 0x7F ? Flag.V : 0) | ((oldValue & 0x0F) !== 0 ? 0 : Flag.H) | Flag.N | z80.sz53Table[value];
    z80.regs.h = value;
});
fillMap.set(0x26, (z80) => {
    let value;
    value = z80.readByte(z80.regs.pc);
    z80.regs.pc = inc16(z80.regs.pc);
    z80.regs.h = value;
});
fillMap.set(0x27, (z80) => {
    let value = 0;
    let carry = z80.regs.f & Flag.C;
    if ((z80.regs.f & Flag.H) !== 0 || ((z80.regs.a & 0x0F) > 9)) {
        value = 6; // Skip over hex digits in lower nybble.
    }
    if (carry !== 0 || z80.regs.a > 0x99) {
        value |= 0x60; // Skip over hex digits in upper nybble.
    }
    if (z80.regs.a > 0x99) {
        carry = Flag.C;
    }
    if ((z80.regs.f & Flag.N) !== 0) {
        let result = sub16(z80.regs.a, value);
        const lookup = (((z80.regs.a & 0x88) >> 3) |
            ((value & 0x88) >> 2) |
            ((result & 0x88) >> 1)) & 0xFF;
        z80.regs.a = result & 0xFF;
        z80.regs.f = (((result & 0x100) !== 0) ? Flag.C : 0) | Flag.N | halfCarrySubTable[lookup & 0x07] | overflowSubTable[lookup >> 4] | z80.sz53Table[z80.regs.a];
    }
    else {
        let result = add16(z80.regs.a, value);
        const lookup = (((z80.regs.a & 0x88) >> 3) |
            ((value & 0x88) >> 2) |
            ((result & 0x88) >> 1)) & 0xFF;
        z80.regs.a = result & 0xFF;
        z80.regs.f = (((result & 0x100) !== 0) ? Flag.C : 0) | halfCarryAddTable[lookup & 0x07] | overflowAddTable[lookup >> 4] | z80.sz53Table[z80.regs.a];
    }
    z80.regs.f = (z80.regs.f & ~(Flag.C | Flag.P)) | carry | z80.parityTable[z80.regs.a];
});
fillMap.set(0x28, (z80) => {
    if ((z80.regs.f & Flag.Z) !== 0) {
        const offset = z80.readByte(z80.regs.pc);
        z80.incTStateCount(5);
        z80.regs.pc = add16(z80.regs.pc, signedByte(offset));
        z80.regs.pc = inc16(z80.regs.pc);
        z80.regs.memptr = z80.regs.pc;
    }
    else {
        z80.incTStateCount(3);
        z80.regs.pc = inc16(z80.regs.pc);
    }
});
fillMap.set(0x29, (z80) => {
    let value;
    z80.incTStateCount(7);
    value = z80.regs.hl;
    let result = z80.regs.hl + value;
    const lookup = (((z80.regs.hl & 0x0800) >> 11) |
        ((value & 0x0800) >> 10) |
        ((result & 0x0800) >> 9)) & 0xFF;
    z80.regs.memptr = inc16(z80.regs.hl);
    z80.regs.hl = result & 0xFFFF;
    z80.regs.f = (z80.regs.f & (Flag.V | Flag.Z | Flag.S)) | ((result & 0x10000) !== 0 ? Flag.C : 0) | ((result >> 8) & (Flag.X3 | Flag.X5)) | halfCarryAddTable[lookup];
});
fillMap.set(0x2A, (z80) => {
    let value;
    let addr = z80.readByte(z80.regs.pc);
    z80.regs.pc = inc16(z80.regs.pc);
    addr = word(z80.readByte(z80.regs.pc), addr);
    z80.regs.pc = inc16(z80.regs.pc);
    value = z80.readByte(addr);
    z80.regs.memptr = inc16(addr);
    value = word(z80.readByte(z80.regs.memptr), value);
    z80.regs.hl = value;
});
fillMap.set(0x2B, (z80) => {
    let value;
    value = z80.regs.hl;
    const oldValue = value;
    z80.incTStateCount(2);
    value = dec16(value);
    z80.regs.hl = value;
});
fillMap.set(0x2C, (z80) => {
    let value;
    value = z80.regs.l;
    const oldValue = value;
    value = inc8(value);
    z80.regs.f = (z80.regs.f & Flag.C) | (value === 0x80 ? Flag.V : 0) | ((value & 0x0F) !== 0 ? 0 : Flag.H) | z80.sz53Table[value];
    z80.regs.l = value;
});
fillMap.set(0x2D, (z80) => {
    let value;
    value = z80.regs.l;
    const oldValue = value;
    value = dec8(value);
    z80.regs.f = (z80.regs.f & Flag.C) | (value === 0x7F ? Flag.V : 0) | ((oldValue & 0x0F) !== 0 ? 0 : Flag.H) | Flag.N | z80.sz53Table[value];
    z80.regs.l = value;
});
fillMap.set(0x2E, (z80) => {
    let value;
    value = z80.readByte(z80.regs.pc);
    z80.regs.pc = inc16(z80.regs.pc);
    z80.regs.l = value;
});
fillMap.set(0x2F, (z80) => {
    z80.regs.a ^= 0xFF;
    z80.regs.f = (z80.regs.f & (Flag.C | Flag.P | Flag.Z | Flag.S)) | (z80.regs.a & (Flag.X3 | Flag.X5)) | Flag.N | Flag.H;
});
fillMap.set(0x30, (z80) => {
    if ((z80.regs.f & Flag.C) === 0) {
        const offset = z80.readByte(z80.regs.pc);
        z80.incTStateCount(5);
        z80.regs.pc = add16(z80.regs.pc, signedByte(offset));
        z80.regs.pc = inc16(z80.regs.pc);
        z80.regs.memptr = z80.regs.pc;
    }
    else {
        z80.incTStateCount(3);
        z80.regs.pc = inc16(z80.regs.pc);
    }
});
fillMap.set(0x31, (z80) => {
    let value;
    value = z80.readByte(z80.regs.pc);
    z80.regs.pc = inc16(z80.regs.pc);
    value = word(z80.readByte(z80.regs.pc), value);
    z80.regs.pc = inc16(z80.regs.pc);
    z80.regs.sp = value;
});
fillMap.set(0x32, (z80) => {
    let value;
    value = z80.regs.a;
    value = z80.readByte(z80.regs.pc);
    z80.regs.pc = inc16(z80.regs.pc);
    value = word(z80.readByte(z80.regs.pc), value);
    z80.regs.pc = inc16(z80.regs.pc);
    z80.regs.memptr = word(z80.regs.a, inc16(value));
    z80.writeByte(value, z80.regs.a);
});
fillMap.set(0x33, (z80) => {
    let value;
    value = z80.regs.sp;
    const oldValue = value;
    z80.incTStateCount(2);
    value = inc16(value);
    z80.regs.sp = value;
});
fillMap.set(0x34, (z80) => {
    let value;
    value = z80.readByte(z80.regs.hl);
    z80.incTStateCount(1);
    const oldValue = value;
    value = inc8(value);
    z80.regs.f = (z80.regs.f & Flag.C) | (value === 0x80 ? Flag.V : 0) | ((value & 0x0F) !== 0 ? 0 : Flag.H) | z80.sz53Table[value];
    z80.writeByte(z80.regs.hl, value);
});
fillMap.set(0x35, (z80) => {
    let value;
    value = z80.readByte(z80.regs.hl);
    z80.incTStateCount(1);
    const oldValue = value;
    value = dec8(value);
    z80.regs.f = (z80.regs.f & Flag.C) | (value === 0x7F ? Flag.V : 0) | ((oldValue & 0x0F) !== 0 ? 0 : Flag.H) | Flag.N | z80.sz53Table[value];
    z80.writeByte(z80.regs.hl, value);
});
fillMap.set(0x36, (z80) => {
    let value;
    value = z80.readByte(z80.regs.pc);
    z80.regs.pc = inc16(z80.regs.pc);
    z80.writeByte(z80.regs.hl, value);
});
fillMap.set(0x37, (z80) => {
    z80.regs.f = (z80.regs.f & (Flag.P | Flag.Z | Flag.S)) | Flag.C | (z80.regs.a & (Flag.X3 | Flag.X5));
});
fillMap.set(0x38, (z80) => {
    if ((z80.regs.f & Flag.C) !== 0) {
        const offset = z80.readByte(z80.regs.pc);
        z80.incTStateCount(5);
        z80.regs.pc = add16(z80.regs.pc, signedByte(offset));
        z80.regs.pc = inc16(z80.regs.pc);
        z80.regs.memptr = z80.regs.pc;
    }
    else {
        z80.incTStateCount(3);
        z80.regs.pc = inc16(z80.regs.pc);
    }
});
fillMap.set(0x39, (z80) => {
    let value;
    z80.incTStateCount(7);
    value = z80.regs.sp;
    let result = z80.regs.hl + value;
    const lookup = (((z80.regs.hl & 0x0800) >> 11) |
        ((value & 0x0800) >> 10) |
        ((result & 0x0800) >> 9)) & 0xFF;
    z80.regs.memptr = inc16(z80.regs.hl);
    z80.regs.hl = result & 0xFFFF;
    z80.regs.f = (z80.regs.f & (Flag.V | Flag.Z | Flag.S)) | ((result & 0x10000) !== 0 ? Flag.C : 0) | ((result >> 8) & (Flag.X3 | Flag.X5)) | halfCarryAddTable[lookup];
});
fillMap.set(0x3A, (z80) => {
    let value;
    value = z80.readByte(z80.regs.pc);
    z80.regs.pc = inc16(z80.regs.pc);
    value = word(z80.readByte(z80.regs.pc), value);
    z80.regs.pc = inc16(z80.regs.pc);
    z80.regs.memptr = inc16(value);
    value = z80.readByte(value);
    z80.regs.a = value;
});
fillMap.set(0x3B, (z80) => {
    let value;
    value = z80.regs.sp;
    const oldValue = value;
    z80.incTStateCount(2);
    value = dec16(value);
    z80.regs.sp = value;
});
fillMap.set(0x3C, (z80) => {
    let value;
    value = z80.regs.a;
    const oldValue = value;
    value = inc8(value);
    z80.regs.f = (z80.regs.f & Flag.C) | (value === 0x80 ? Flag.V : 0) | ((value & 0x0F) !== 0 ? 0 : Flag.H) | z80.sz53Table[value];
    z80.regs.a = value;
});
fillMap.set(0x3D, (z80) => {
    let value;
    value = z80.regs.a;
    const oldValue = value;
    value = dec8(value);
    z80.regs.f = (z80.regs.f & Flag.C) | (value === 0x7F ? Flag.V : 0) | ((oldValue & 0x0F) !== 0 ? 0 : Flag.H) | Flag.N | z80.sz53Table[value];
    z80.regs.a = value;
});
fillMap.set(0x3E, (z80) => {
    let value;
    value = z80.readByte(z80.regs.pc);
    z80.regs.pc = inc16(z80.regs.pc);
    z80.regs.a = value;
});
fillMap.set(0x3F, (z80) => {
    z80.regs.f = (z80.regs.f & (Flag.P | Flag.Z | Flag.S)) | ((z80.regs.f & Flag.C) !== 0 ? Flag.H : Flag.C) | (z80.regs.a & (Flag.X3 | Flag.X5));
});
fillMap.set(0x40, (z80) => {
    let value;
    value = z80.regs.b;
    z80.regs.b = value;
});
fillMap.set(0x41, (z80) => {
    let value;
    value = z80.regs.c;
    z80.regs.b = value;
});
fillMap.set(0x42, (z80) => {
    let value;
    value = z80.regs.d;
    z80.regs.b = value;
});
fillMap.set(0x43, (z80) => {
    let value;
    value = z80.regs.e;
    z80.regs.b = value;
});
fillMap.set(0x44, (z80) => {
    let value;
    value = z80.regs.h;
    z80.regs.b = value;
});
fillMap.set(0x45, (z80) => {
    let value;
    value = z80.regs.l;
    z80.regs.b = value;
});
fillMap.set(0x46, (z80) => {
    let value;
    value = z80.readByte(z80.regs.hl);
    z80.regs.b = value;
});
fillMap.set(0x47, (z80) => {
    let value;
    value = z80.regs.a;
    z80.regs.b = value;
});
fillMap.set(0x48, (z80) => {
    let value;
    value = z80.regs.b;
    z80.regs.c = value;
});
fillMap.set(0x49, (z80) => {
    let value;
    value = z80.regs.c;
    z80.regs.c = value;
});
fillMap.set(0x4A, (z80) => {
    let value;
    value = z80.regs.d;
    z80.regs.c = value;
});
fillMap.set(0x4B, (z80) => {
    let value;
    value = z80.regs.e;
    z80.regs.c = value;
});
fillMap.set(0x4C, (z80) => {
    let value;
    value = z80.regs.h;
    z80.regs.c = value;
});
fillMap.set(0x4D, (z80) => {
    let value;
    value = z80.regs.l;
    z80.regs.c = value;
});
fillMap.set(0x4E, (z80) => {
    let value;
    value = z80.readByte(z80.regs.hl);
    z80.regs.c = value;
});
fillMap.set(0x4F, (z80) => {
    let value;
    value = z80.regs.a;
    z80.regs.c = value;
});
fillMap.set(0x50, (z80) => {
    let value;
    value = z80.regs.b;
    z80.regs.d = value;
});
fillMap.set(0x51, (z80) => {
    let value;
    value = z80.regs.c;
    z80.regs.d = value;
});
fillMap.set(0x52, (z80) => {
    let value;
    value = z80.regs.d;
    z80.regs.d = value;
});
fillMap.set(0x53, (z80) => {
    let value;
    value = z80.regs.e;
    z80.regs.d = value;
});
fillMap.set(0x54, (z80) => {
    let value;
    value = z80.regs.h;
    z80.regs.d = value;
});
fillMap.set(0x55, (z80) => {
    let value;
    value = z80.regs.l;
    z80.regs.d = value;
});
fillMap.set(0x56, (z80) => {
    let value;
    value = z80.readByte(z80.regs.hl);
    z80.regs.d = value;
});
fillMap.set(0x57, (z80) => {
    let value;
    value = z80.regs.a;
    z80.regs.d = value;
});
fillMap.set(0x58, (z80) => {
    let value;
    value = z80.regs.b;
    z80.regs.e = value;
});
fillMap.set(0x59, (z80) => {
    let value;
    value = z80.regs.c;
    z80.regs.e = value;
});
fillMap.set(0x5A, (z80) => {
    let value;
    value = z80.regs.d;
    z80.regs.e = value;
});
fillMap.set(0x5B, (z80) => {
    let value;
    value = z80.regs.e;
    z80.regs.e = value;
});
fillMap.set(0x5C, (z80) => {
    let value;
    value = z80.regs.h;
    z80.regs.e = value;
});
fillMap.set(0x5D, (z80) => {
    let value;
    value = z80.regs.l;
    z80.regs.e = value;
});
fillMap.set(0x5E, (z80) => {
    let value;
    value = z80.readByte(z80.regs.hl);
    z80.regs.e = value;
});
fillMap.set(0x5F, (z80) => {
    let value;
    value = z80.regs.a;
    z80.regs.e = value;
});
fillMap.set(0x60, (z80) => {
    let value;
    value = z80.regs.b;
    z80.regs.h = value;
});
fillMap.set(0x61, (z80) => {
    let value;
    value = z80.regs.c;
    z80.regs.h = value;
});
fillMap.set(0x62, (z80) => {
    let value;
    value = z80.regs.d;
    z80.regs.h = value;
});
fillMap.set(0x63, (z80) => {
    let value;
    value = z80.regs.e;
    z80.regs.h = value;
});
fillMap.set(0x64, (z80) => {
    let value;
    value = z80.regs.h;
    z80.regs.h = value;
});
fillMap.set(0x65, (z80) => {
    let value;
    value = z80.regs.l;
    z80.regs.h = value;
});
fillMap.set(0x66, (z80) => {
    let value;
    value = z80.readByte(z80.regs.hl);
    z80.regs.h = value;
});
fillMap.set(0x67, (z80) => {
    let value;
    value = z80.regs.a;
    z80.regs.h = value;
});
fillMap.set(0x68, (z80) => {
    let value;
    value = z80.regs.b;
    z80.regs.l = value;
});
fillMap.set(0x69, (z80) => {
    let value;
    value = z80.regs.c;
    z80.regs.l = value;
});
fillMap.set(0x6A, (z80) => {
    let value;
    value = z80.regs.d;
    z80.regs.l = value;
});
fillMap.set(0x6B, (z80) => {
    let value;
    value = z80.regs.e;
    z80.regs.l = value;
});
fillMap.set(0x6C, (z80) => {
    let value;
    value = z80.regs.h;
    z80.regs.l = value;
});
fillMap.set(0x6D, (z80) => {
    let value;
    value = z80.regs.l;
    z80.regs.l = value;
});
fillMap.set(0x6E, (z80) => {
    let value;
    value = z80.readByte(z80.regs.hl);
    z80.regs.l = value;
});
fillMap.set(0x6F, (z80) => {
    let value;
    value = z80.regs.a;
    z80.regs.l = value;
});
fillMap.set(0x70, (z80) => {
    let value;
    value = z80.regs.b;
    z80.writeByte(z80.regs.hl, value);
});
fillMap.set(0x71, (z80) => {
    let value;
    value = z80.regs.c;
    z80.writeByte(z80.regs.hl, value);
});
fillMap.set(0x72, (z80) => {
    let value;
    value = z80.regs.d;
    z80.writeByte(z80.regs.hl, value);
});
fillMap.set(0x73, (z80) => {
    let value;
    value = z80.regs.e;
    z80.writeByte(z80.regs.hl, value);
});
fillMap.set(0x74, (z80) => {
    let value;
    value = z80.regs.h;
    z80.writeByte(z80.regs.hl, value);
});
fillMap.set(0x75, (z80) => {
    let value;
    value = z80.regs.l;
    z80.writeByte(z80.regs.hl, value);
});
fillMap.set(0x76, (z80) => {
    z80.regs.halted = 1;
    z80.regs.pc = dec16(z80.regs.pc);
});
fillMap.set(0x77, (z80) => {
    let value;
    value = z80.regs.a;
    z80.writeByte(z80.regs.hl, value);
});
fillMap.set(0x78, (z80) => {
    let value;
    value = z80.regs.b;
    z80.regs.a = value;
});
fillMap.set(0x79, (z80) => {
    let value;
    value = z80.regs.c;
    z80.regs.a = value;
});
fillMap.set(0x7A, (z80) => {
    let value;
    value = z80.regs.d;
    z80.regs.a = value;
});
fillMap.set(0x7B, (z80) => {
    let value;
    value = z80.regs.e;
    z80.regs.a = value;
});
fillMap.set(0x7C, (z80) => {
    let value;
    value = z80.regs.h;
    z80.regs.a = value;
});
fillMap.set(0x7D, (z80) => {
    let value;
    value = z80.regs.l;
    z80.regs.a = value;
});
fillMap.set(0x7E, (z80) => {
    let value;
    value = z80.readByte(z80.regs.hl);
    z80.regs.a = value;
});
fillMap.set(0x7F, (z80) => {
    let value;
    value = z80.regs.a;
    z80.regs.a = value;
});
fillMap.set(0x80, (z80) => {
    let value;
    value = z80.regs.b;
    let result = add16(z80.regs.a, value);
    const lookup = (((z80.regs.a & 0x88) >> 3) |
        ((value & 0x88) >> 2) |
        ((result & 0x88) >> 1)) & 0xFF;
    z80.regs.a = result & 0xFF;
    z80.regs.f = (((result & 0x100) !== 0) ? Flag.C : 0) | halfCarryAddTable[lookup & 0x07] | overflowAddTable[lookup >> 4] | z80.sz53Table[z80.regs.a];
});
fillMap.set(0x81, (z80) => {
    let value;
    value = z80.regs.c;
    let result = add16(z80.regs.a, value);
    const lookup = (((z80.regs.a & 0x88) >> 3) |
        ((value & 0x88) >> 2) |
        ((result & 0x88) >> 1)) & 0xFF;
    z80.regs.a = result & 0xFF;
    z80.regs.f = (((result & 0x100) !== 0) ? Flag.C : 0) | halfCarryAddTable[lookup & 0x07] | overflowAddTable[lookup >> 4] | z80.sz53Table[z80.regs.a];
});
fillMap.set(0x82, (z80) => {
    let value;
    value = z80.regs.d;
    let result = add16(z80.regs.a, value);
    const lookup = (((z80.regs.a & 0x88) >> 3) |
        ((value & 0x88) >> 2) |
        ((result & 0x88) >> 1)) & 0xFF;
    z80.regs.a = result & 0xFF;
    z80.regs.f = (((result & 0x100) !== 0) ? Flag.C : 0) | halfCarryAddTable[lookup & 0x07] | overflowAddTable[lookup >> 4] | z80.sz53Table[z80.regs.a];
});
fillMap.set(0x83, (z80) => {
    let value;
    value = z80.regs.e;
    let result = add16(z80.regs.a, value);
    const lookup = (((z80.regs.a & 0x88) >> 3) |
        ((value & 0x88) >> 2) |
        ((result & 0x88) >> 1)) & 0xFF;
    z80.regs.a = result & 0xFF;
    z80.regs.f = (((result & 0x100) !== 0) ? Flag.C : 0) | halfCarryAddTable[lookup & 0x07] | overflowAddTable[lookup >> 4] | z80.sz53Table[z80.regs.a];
});
fillMap.set(0x84, (z80) => {
    let value;
    value = z80.regs.h;
    let result = add16(z80.regs.a, value);
    const lookup = (((z80.regs.a & 0x88) >> 3) |
        ((value & 0x88) >> 2) |
        ((result & 0x88) >> 1)) & 0xFF;
    z80.regs.a = result & 0xFF;
    z80.regs.f = (((result & 0x100) !== 0) ? Flag.C : 0) | halfCarryAddTable[lookup & 0x07] | overflowAddTable[lookup >> 4] | z80.sz53Table[z80.regs.a];
});
fillMap.set(0x85, (z80) => {
    let value;
    value = z80.regs.l;
    let result = add16(z80.regs.a, value);
    const lookup = (((z80.regs.a & 0x88) >> 3) |
        ((value & 0x88) >> 2) |
        ((result & 0x88) >> 1)) & 0xFF;
    z80.regs.a = result & 0xFF;
    z80.regs.f = (((result & 0x100) !== 0) ? Flag.C : 0) | halfCarryAddTable[lookup & 0x07] | overflowAddTable[lookup >> 4] | z80.sz53Table[z80.regs.a];
});
fillMap.set(0x86, (z80) => {
    let value;
    value = z80.readByte(z80.regs.hl);
    let result = add16(z80.regs.a, value);
    const lookup = (((z80.regs.a & 0x88) >> 3) |
        ((value & 0x88) >> 2) |
        ((result & 0x88) >> 1)) & 0xFF;
    z80.regs.a = result & 0xFF;
    z80.regs.f = (((result & 0x100) !== 0) ? Flag.C : 0) | halfCarryAddTable[lookup & 0x07] | overflowAddTable[lookup >> 4] | z80.sz53Table[z80.regs.a];
});
fillMap.set(0x87, (z80) => {
    let value;
    value = z80.regs.a;
    let result = add16(z80.regs.a, value);
    const lookup = (((z80.regs.a & 0x88) >> 3) |
        ((value & 0x88) >> 2) |
        ((result & 0x88) >> 1)) & 0xFF;
    z80.regs.a = result & 0xFF;
    z80.regs.f = (((result & 0x100) !== 0) ? Flag.C : 0) | halfCarryAddTable[lookup & 0x07] | overflowAddTable[lookup >> 4] | z80.sz53Table[z80.regs.a];
});
fillMap.set(0x88, (z80) => {
    let value;
    value = z80.regs.b;
    let result = add16(z80.regs.a, value);
    if ((z80.regs.f & Flag.C) !== 0) {
        result = inc16(result);
    }
    const lookup = (((z80.regs.a & 0x88) >> 3) |
        ((value & 0x88) >> 2) |
        ((result & 0x88) >> 1)) & 0xFF;
    z80.regs.a = result & 0xFF;
    z80.regs.f = (((result & 0x100) !== 0) ? Flag.C : 0) | halfCarryAddTable[lookup & 0x07] | overflowAddTable[lookup >> 4] | z80.sz53Table[z80.regs.a];
});
fillMap.set(0x89, (z80) => {
    let value;
    value = z80.regs.c;
    let result = add16(z80.regs.a, value);
    if ((z80.regs.f & Flag.C) !== 0) {
        result = inc16(result);
    }
    const lookup = (((z80.regs.a & 0x88) >> 3) |
        ((value & 0x88) >> 2) |
        ((result & 0x88) >> 1)) & 0xFF;
    z80.regs.a = result & 0xFF;
    z80.regs.f = (((result & 0x100) !== 0) ? Flag.C : 0) | halfCarryAddTable[lookup & 0x07] | overflowAddTable[lookup >> 4] | z80.sz53Table[z80.regs.a];
});
fillMap.set(0x8A, (z80) => {
    let value;
    value = z80.regs.d;
    let result = add16(z80.regs.a, value);
    if ((z80.regs.f & Flag.C) !== 0) {
        result = inc16(result);
    }
    const lookup = (((z80.regs.a & 0x88) >> 3) |
        ((value & 0x88) >> 2) |
        ((result & 0x88) >> 1)) & 0xFF;
    z80.regs.a = result & 0xFF;
    z80.regs.f = (((result & 0x100) !== 0) ? Flag.C : 0) | halfCarryAddTable[lookup & 0x07] | overflowAddTable[lookup >> 4] | z80.sz53Table[z80.regs.a];
});
fillMap.set(0x8B, (z80) => {
    let value;
    value = z80.regs.e;
    let result = add16(z80.regs.a, value);
    if ((z80.regs.f & Flag.C) !== 0) {
        result = inc16(result);
    }
    const lookup = (((z80.regs.a & 0x88) >> 3) |
        ((value & 0x88) >> 2) |
        ((result & 0x88) >> 1)) & 0xFF;
    z80.regs.a = result & 0xFF;
    z80.regs.f = (((result & 0x100) !== 0) ? Flag.C : 0) | halfCarryAddTable[lookup & 0x07] | overflowAddTable[lookup >> 4] | z80.sz53Table[z80.regs.a];
});
fillMap.set(0x8C, (z80) => {
    let value;
    value = z80.regs.h;
    let result = add16(z80.regs.a, value);
    if ((z80.regs.f & Flag.C) !== 0) {
        result = inc16(result);
    }
    const lookup = (((z80.regs.a & 0x88) >> 3) |
        ((value & 0x88) >> 2) |
        ((result & 0x88) >> 1)) & 0xFF;
    z80.regs.a = result & 0xFF;
    z80.regs.f = (((result & 0x100) !== 0) ? Flag.C : 0) | halfCarryAddTable[lookup & 0x07] | overflowAddTable[lookup >> 4] | z80.sz53Table[z80.regs.a];
});
fillMap.set(0x8D, (z80) => {
    let value;
    value = z80.regs.l;
    let result = add16(z80.regs.a, value);
    if ((z80.regs.f & Flag.C) !== 0) {
        result = inc16(result);
    }
    const lookup = (((z80.regs.a & 0x88) >> 3) |
        ((value & 0x88) >> 2) |
        ((result & 0x88) >> 1)) & 0xFF;
    z80.regs.a = result & 0xFF;
    z80.regs.f = (((result & 0x100) !== 0) ? Flag.C : 0) | halfCarryAddTable[lookup & 0x07] | overflowAddTable[lookup >> 4] | z80.sz53Table[z80.regs.a];
});
fillMap.set(0x8E, (z80) => {
    let value;
    value = z80.readByte(z80.regs.hl);
    let result = add16(z80.regs.a, value);
    if ((z80.regs.f & Flag.C) !== 0) {
        result = inc16(result);
    }
    const lookup = (((z80.regs.a & 0x88) >> 3) |
        ((value & 0x88) >> 2) |
        ((result & 0x88) >> 1)) & 0xFF;
    z80.regs.a = result & 0xFF;
    z80.regs.f = (((result & 0x100) !== 0) ? Flag.C : 0) | halfCarryAddTable[lookup & 0x07] | overflowAddTable[lookup >> 4] | z80.sz53Table[z80.regs.a];
});
fillMap.set(0x8F, (z80) => {
    let value;
    value = z80.regs.a;
    let result = add16(z80.regs.a, value);
    if ((z80.regs.f & Flag.C) !== 0) {
        result = inc16(result);
    }
    const lookup = (((z80.regs.a & 0x88) >> 3) |
        ((value & 0x88) >> 2) |
        ((result & 0x88) >> 1)) & 0xFF;
    z80.regs.a = result & 0xFF;
    z80.regs.f = (((result & 0x100) !== 0) ? Flag.C : 0) | halfCarryAddTable[lookup & 0x07] | overflowAddTable[lookup >> 4] | z80.sz53Table[z80.regs.a];
});
fillMap.set(0x90, (z80) => {
    let value;
    value = z80.regs.b;
    let result = sub16(z80.regs.a, value);
    const lookup = (((z80.regs.a & 0x88) >> 3) |
        ((value & 0x88) >> 2) |
        ((result & 0x88) >> 1)) & 0xFF;
    z80.regs.a = result & 0xFF;
    z80.regs.f = (((result & 0x100) !== 0) ? Flag.C : 0) | Flag.N | halfCarrySubTable[lookup & 0x07] | overflowSubTable[lookup >> 4] | z80.sz53Table[z80.regs.a];
});
fillMap.set(0x91, (z80) => {
    let value;
    value = z80.regs.c;
    let result = sub16(z80.regs.a, value);
    const lookup = (((z80.regs.a & 0x88) >> 3) |
        ((value & 0x88) >> 2) |
        ((result & 0x88) >> 1)) & 0xFF;
    z80.regs.a = result & 0xFF;
    z80.regs.f = (((result & 0x100) !== 0) ? Flag.C : 0) | Flag.N | halfCarrySubTable[lookup & 0x07] | overflowSubTable[lookup >> 4] | z80.sz53Table[z80.regs.a];
});
fillMap.set(0x92, (z80) => {
    let value;
    value = z80.regs.d;
    let result = sub16(z80.regs.a, value);
    const lookup = (((z80.regs.a & 0x88) >> 3) |
        ((value & 0x88) >> 2) |
        ((result & 0x88) >> 1)) & 0xFF;
    z80.regs.a = result & 0xFF;
    z80.regs.f = (((result & 0x100) !== 0) ? Flag.C : 0) | Flag.N | halfCarrySubTable[lookup & 0x07] | overflowSubTable[lookup >> 4] | z80.sz53Table[z80.regs.a];
});
fillMap.set(0x93, (z80) => {
    let value;
    value = z80.regs.e;
    let result = sub16(z80.regs.a, value);
    const lookup = (((z80.regs.a & 0x88) >> 3) |
        ((value & 0x88) >> 2) |
        ((result & 0x88) >> 1)) & 0xFF;
    z80.regs.a = result & 0xFF;
    z80.regs.f = (((result & 0x100) !== 0) ? Flag.C : 0) | Flag.N | halfCarrySubTable[lookup & 0x07] | overflowSubTable[lookup >> 4] | z80.sz53Table[z80.regs.a];
});
fillMap.set(0x94, (z80) => {
    let value;
    value = z80.regs.h;
    let result = sub16(z80.regs.a, value);
    const lookup = (((z80.regs.a & 0x88) >> 3) |
        ((value & 0x88) >> 2) |
        ((result & 0x88) >> 1)) & 0xFF;
    z80.regs.a = result & 0xFF;
    z80.regs.f = (((result & 0x100) !== 0) ? Flag.C : 0) | Flag.N | halfCarrySubTable[lookup & 0x07] | overflowSubTable[lookup >> 4] | z80.sz53Table[z80.regs.a];
});
fillMap.set(0x95, (z80) => {
    let value;
    value = z80.regs.l;
    let result = sub16(z80.regs.a, value);
    const lookup = (((z80.regs.a & 0x88) >> 3) |
        ((value & 0x88) >> 2) |
        ((result & 0x88) >> 1)) & 0xFF;
    z80.regs.a = result & 0xFF;
    z80.regs.f = (((result & 0x100) !== 0) ? Flag.C : 0) | Flag.N | halfCarrySubTable[lookup & 0x07] | overflowSubTable[lookup >> 4] | z80.sz53Table[z80.regs.a];
});
fillMap.set(0x96, (z80) => {
    let value;
    value = z80.readByte(z80.regs.hl);
    let result = sub16(z80.regs.a, value);
    const lookup = (((z80.regs.a & 0x88) >> 3) |
        ((value & 0x88) >> 2) |
        ((result & 0x88) >> 1)) & 0xFF;
    z80.regs.a = result & 0xFF;
    z80.regs.f = (((result & 0x100) !== 0) ? Flag.C : 0) | Flag.N | halfCarrySubTable[lookup & 0x07] | overflowSubTable[lookup >> 4] | z80.sz53Table[z80.regs.a];
});
fillMap.set(0x97, (z80) => {
    let value;
    value = z80.regs.a;
    let result = sub16(z80.regs.a, value);
    const lookup = (((z80.regs.a & 0x88) >> 3) |
        ((value & 0x88) >> 2) |
        ((result & 0x88) >> 1)) & 0xFF;
    z80.regs.a = result & 0xFF;
    z80.regs.f = (((result & 0x100) !== 0) ? Flag.C : 0) | Flag.N | halfCarrySubTable[lookup & 0x07] | overflowSubTable[lookup >> 4] | z80.sz53Table[z80.regs.a];
});
fillMap.set(0x98, (z80) => {
    let value;
    value = z80.regs.b;
    let result = sub16(z80.regs.a, value);
    if ((z80.regs.f & Flag.C) !== 0) {
        result = dec16(result);
    }
    const lookup = (((z80.regs.a & 0x88) >> 3) |
        ((value & 0x88) >> 2) |
        ((result & 0x88) >> 1)) & 0xFF;
    z80.regs.a = result & 0xFF;
    z80.regs.f = (((result & 0x100) !== 0) ? Flag.C : 0) | Flag.N | halfCarrySubTable[lookup & 0x07] | overflowSubTable[lookup >> 4] | z80.sz53Table[z80.regs.a];
});
fillMap.set(0x99, (z80) => {
    let value;
    value = z80.regs.c;
    let result = sub16(z80.regs.a, value);
    if ((z80.regs.f & Flag.C) !== 0) {
        result = dec16(result);
    }
    const lookup = (((z80.regs.a & 0x88) >> 3) |
        ((value & 0x88) >> 2) |
        ((result & 0x88) >> 1)) & 0xFF;
    z80.regs.a = result & 0xFF;
    z80.regs.f = (((result & 0x100) !== 0) ? Flag.C : 0) | Flag.N | halfCarrySubTable[lookup & 0x07] | overflowSubTable[lookup >> 4] | z80.sz53Table[z80.regs.a];
});
fillMap.set(0x9A, (z80) => {
    let value;
    value = z80.regs.d;
    let result = sub16(z80.regs.a, value);
    if ((z80.regs.f & Flag.C) !== 0) {
        result = dec16(result);
    }
    const lookup = (((z80.regs.a & 0x88) >> 3) |
        ((value & 0x88) >> 2) |
        ((result & 0x88) >> 1)) & 0xFF;
    z80.regs.a = result & 0xFF;
    z80.regs.f = (((result & 0x100) !== 0) ? Flag.C : 0) | Flag.N | halfCarrySubTable[lookup & 0x07] | overflowSubTable[lookup >> 4] | z80.sz53Table[z80.regs.a];
});
fillMap.set(0x9B, (z80) => {
    let value;
    value = z80.regs.e;
    let result = sub16(z80.regs.a, value);
    if ((z80.regs.f & Flag.C) !== 0) {
        result = dec16(result);
    }
    const lookup = (((z80.regs.a & 0x88) >> 3) |
        ((value & 0x88) >> 2) |
        ((result & 0x88) >> 1)) & 0xFF;
    z80.regs.a = result & 0xFF;
    z80.regs.f = (((result & 0x100) !== 0) ? Flag.C : 0) | Flag.N | halfCarrySubTable[lookup & 0x07] | overflowSubTable[lookup >> 4] | z80.sz53Table[z80.regs.a];
});
fillMap.set(0x9C, (z80) => {
    let value;
    value = z80.regs.h;
    let result = sub16(z80.regs.a, value);
    if ((z80.regs.f & Flag.C) !== 0) {
        result = dec16(result);
    }
    const lookup = (((z80.regs.a & 0x88) >> 3) |
        ((value & 0x88) >> 2) |
        ((result & 0x88) >> 1)) & 0xFF;
    z80.regs.a = result & 0xFF;
    z80.regs.f = (((result & 0x100) !== 0) ? Flag.C : 0) | Flag.N | halfCarrySubTable[lookup & 0x07] | overflowSubTable[lookup >> 4] | z80.sz53Table[z80.regs.a];
});
fillMap.set(0x9D, (z80) => {
    let value;
    value = z80.regs.l;
    let result = sub16(z80.regs.a, value);
    if ((z80.regs.f & Flag.C) !== 0) {
        result = dec16(result);
    }
    const lookup = (((z80.regs.a & 0x88) >> 3) |
        ((value & 0x88) >> 2) |
        ((result & 0x88) >> 1)) & 0xFF;
    z80.regs.a = result & 0xFF;
    z80.regs.f = (((result & 0x100) !== 0) ? Flag.C : 0) | Flag.N | halfCarrySubTable[lookup & 0x07] | overflowSubTable[lookup >> 4] | z80.sz53Table[z80.regs.a];
});
fillMap.set(0x9E, (z80) => {
    let value;
    value = z80.readByte(z80.regs.hl);
    let result = sub16(z80.regs.a, value);
    if ((z80.regs.f & Flag.C) !== 0) {
        result = dec16(result);
    }
    const lookup = (((z80.regs.a & 0x88) >> 3) |
        ((value & 0x88) >> 2) |
        ((result & 0x88) >> 1)) & 0xFF;
    z80.regs.a = result & 0xFF;
    z80.regs.f = (((result & 0x100) !== 0) ? Flag.C : 0) | Flag.N | halfCarrySubTable[lookup & 0x07] | overflowSubTable[lookup >> 4] | z80.sz53Table[z80.regs.a];
});
fillMap.set(0x9F, (z80) => {
    let value;
    value = z80.regs.a;
    let result = sub16(z80.regs.a, value);
    if ((z80.regs.f & Flag.C) !== 0) {
        result = dec16(result);
    }
    const lookup = (((z80.regs.a & 0x88) >> 3) |
        ((value & 0x88) >> 2) |
        ((result & 0x88) >> 1)) & 0xFF;
    z80.regs.a = result & 0xFF;
    z80.regs.f = (((result & 0x100) !== 0) ? Flag.C : 0) | Flag.N | halfCarrySubTable[lookup & 0x07] | overflowSubTable[lookup >> 4] | z80.sz53Table[z80.regs.a];
});
fillMap.set(0xA0, (z80) => {
    let value;
    value = z80.regs.b;
    z80.regs.a &= value;
    z80.regs.f = z80.sz53pTable[z80.regs.a];
    z80.regs.f |= Flag.H;
});
fillMap.set(0xA1, (z80) => {
    let value;
    value = z80.regs.c;
    z80.regs.a &= value;
    z80.regs.f = z80.sz53pTable[z80.regs.a];
    z80.regs.f |= Flag.H;
});
fillMap.set(0xA2, (z80) => {
    let value;
    value = z80.regs.d;
    z80.regs.a &= value;
    z80.regs.f = z80.sz53pTable[z80.regs.a];
    z80.regs.f |= Flag.H;
});
fillMap.set(0xA3, (z80) => {
    let value;
    value = z80.regs.e;
    z80.regs.a &= value;
    z80.regs.f = z80.sz53pTable[z80.regs.a];
    z80.regs.f |= Flag.H;
});
fillMap.set(0xA4, (z80) => {
    let value;
    value = z80.regs.h;
    z80.regs.a &= value;
    z80.regs.f = z80.sz53pTable[z80.regs.a];
    z80.regs.f |= Flag.H;
});
fillMap.set(0xA5, (z80) => {
    let value;
    value = z80.regs.l;
    z80.regs.a &= value;
    z80.regs.f = z80.sz53pTable[z80.regs.a];
    z80.regs.f |= Flag.H;
});
fillMap.set(0xA6, (z80) => {
    let value;
    value = z80.readByte(z80.regs.hl);
    z80.regs.a &= value;
    z80.regs.f = z80.sz53pTable[z80.regs.a];
    z80.regs.f |= Flag.H;
});
fillMap.set(0xA7, (z80) => {
    let value;
    value = z80.regs.a;
    z80.regs.a &= value;
    z80.regs.f = z80.sz53pTable[z80.regs.a];
    z80.regs.f |= Flag.H;
});
fillMap.set(0xA8, (z80) => {
    let value;
    value = z80.regs.b;
    z80.regs.a ^= value;
    z80.regs.f = z80.sz53pTable[z80.regs.a];
});
fillMap.set(0xA9, (z80) => {
    let value;
    value = z80.regs.c;
    z80.regs.a ^= value;
    z80.regs.f = z80.sz53pTable[z80.regs.a];
});
fillMap.set(0xAA, (z80) => {
    let value;
    value = z80.regs.d;
    z80.regs.a ^= value;
    z80.regs.f = z80.sz53pTable[z80.regs.a];
});
fillMap.set(0xAB, (z80) => {
    let value;
    value = z80.regs.e;
    z80.regs.a ^= value;
    z80.regs.f = z80.sz53pTable[z80.regs.a];
});
fillMap.set(0xAC, (z80) => {
    let value;
    value = z80.regs.h;
    z80.regs.a ^= value;
    z80.regs.f = z80.sz53pTable[z80.regs.a];
});
fillMap.set(0xAD, (z80) => {
    let value;
    value = z80.regs.l;
    z80.regs.a ^= value;
    z80.regs.f = z80.sz53pTable[z80.regs.a];
});
fillMap.set(0xAE, (z80) => {
    let value;
    value = z80.readByte(z80.regs.hl);
    z80.regs.a ^= value;
    z80.regs.f = z80.sz53pTable[z80.regs.a];
});
fillMap.set(0xAF, (z80) => {
    let value;
    value = z80.regs.a;
    z80.regs.a ^= value;
    z80.regs.f = z80.sz53pTable[z80.regs.a];
});
fillMap.set(0xB0, (z80) => {
    let value;
    value = z80.regs.b;
    z80.regs.a |= value;
    z80.regs.f = z80.sz53pTable[z80.regs.a];
});
fillMap.set(0xB1, (z80) => {
    let value;
    value = z80.regs.c;
    z80.regs.a |= value;
    z80.regs.f = z80.sz53pTable[z80.regs.a];
});
fillMap.set(0xB2, (z80) => {
    let value;
    value = z80.regs.d;
    z80.regs.a |= value;
    z80.regs.f = z80.sz53pTable[z80.regs.a];
});
fillMap.set(0xB3, (z80) => {
    let value;
    value = z80.regs.e;
    z80.regs.a |= value;
    z80.regs.f = z80.sz53pTable[z80.regs.a];
});
fillMap.set(0xB4, (z80) => {
    let value;
    value = z80.regs.h;
    z80.regs.a |= value;
    z80.regs.f = z80.sz53pTable[z80.regs.a];
});
fillMap.set(0xB5, (z80) => {
    let value;
    value = z80.regs.l;
    z80.regs.a |= value;
    z80.regs.f = z80.sz53pTable[z80.regs.a];
});
fillMap.set(0xB6, (z80) => {
    let value;
    value = z80.readByte(z80.regs.hl);
    z80.regs.a |= value;
    z80.regs.f = z80.sz53pTable[z80.regs.a];
});
fillMap.set(0xB7, (z80) => {
    let value;
    value = z80.regs.a;
    z80.regs.a |= value;
    z80.regs.f = z80.sz53pTable[z80.regs.a];
});
fillMap.set(0xB8, (z80) => {
    let value;
    value = z80.regs.b;
    const diff = (z80.regs.a - value) & 0xFFFF;
    const lookup = (((z80.regs.a & 0x88) >> 3) |
        ((value & 0x88) >> 2) |
        ((diff & 0x88) >> 1)) & 0xFF;
    let f = Flag.N;
    if ((diff & 0x100) != 0)
        f |= Flag.C;
    if (diff == 0)
        f |= Flag.Z;
    f |= halfCarrySubTable[lookup & 0x07];
    f |= overflowSubTable[lookup >> 4];
    f |= value & (Flag.X3 | Flag.X5);
    f |= diff & Flag.S;
    z80.regs.af = word(z80.regs.a, f);
});
fillMap.set(0xB9, (z80) => {
    let value;
    value = z80.regs.c;
    const diff = (z80.regs.a - value) & 0xFFFF;
    const lookup = (((z80.regs.a & 0x88) >> 3) |
        ((value & 0x88) >> 2) |
        ((diff & 0x88) >> 1)) & 0xFF;
    let f = Flag.N;
    if ((diff & 0x100) != 0)
        f |= Flag.C;
    if (diff == 0)
        f |= Flag.Z;
    f |= halfCarrySubTable[lookup & 0x07];
    f |= overflowSubTable[lookup >> 4];
    f |= value & (Flag.X3 | Flag.X5);
    f |= diff & Flag.S;
    z80.regs.af = word(z80.regs.a, f);
});
fillMap.set(0xBA, (z80) => {
    let value;
    value = z80.regs.d;
    const diff = (z80.regs.a - value) & 0xFFFF;
    const lookup = (((z80.regs.a & 0x88) >> 3) |
        ((value & 0x88) >> 2) |
        ((diff & 0x88) >> 1)) & 0xFF;
    let f = Flag.N;
    if ((diff & 0x100) != 0)
        f |= Flag.C;
    if (diff == 0)
        f |= Flag.Z;
    f |= halfCarrySubTable[lookup & 0x07];
    f |= overflowSubTable[lookup >> 4];
    f |= value & (Flag.X3 | Flag.X5);
    f |= diff & Flag.S;
    z80.regs.af = word(z80.regs.a, f);
});
fillMap.set(0xBB, (z80) => {
    let value;
    value = z80.regs.e;
    const diff = (z80.regs.a - value) & 0xFFFF;
    const lookup = (((z80.regs.a & 0x88) >> 3) |
        ((value & 0x88) >> 2) |
        ((diff & 0x88) >> 1)) & 0xFF;
    let f = Flag.N;
    if ((diff & 0x100) != 0)
        f |= Flag.C;
    if (diff == 0)
        f |= Flag.Z;
    f |= halfCarrySubTable[lookup & 0x07];
    f |= overflowSubTable[lookup >> 4];
    f |= value & (Flag.X3 | Flag.X5);
    f |= diff & Flag.S;
    z80.regs.af = word(z80.regs.a, f);
});
fillMap.set(0xBC, (z80) => {
    let value;
    value = z80.regs.h;
    const diff = (z80.regs.a - value) & 0xFFFF;
    const lookup = (((z80.regs.a & 0x88) >> 3) |
        ((value & 0x88) >> 2) |
        ((diff & 0x88) >> 1)) & 0xFF;
    let f = Flag.N;
    if ((diff & 0x100) != 0)
        f |= Flag.C;
    if (diff == 0)
        f |= Flag.Z;
    f |= halfCarrySubTable[lookup & 0x07];
    f |= overflowSubTable[lookup >> 4];
    f |= value & (Flag.X3 | Flag.X5);
    f |= diff & Flag.S;
    z80.regs.af = word(z80.regs.a, f);
});
fillMap.set(0xBD, (z80) => {
    let value;
    value = z80.regs.l;
    const diff = (z80.regs.a - value) & 0xFFFF;
    const lookup = (((z80.regs.a & 0x88) >> 3) |
        ((value & 0x88) >> 2) |
        ((diff & 0x88) >> 1)) & 0xFF;
    let f = Flag.N;
    if ((diff & 0x100) != 0)
        f |= Flag.C;
    if (diff == 0)
        f |= Flag.Z;
    f |= halfCarrySubTable[lookup & 0x07];
    f |= overflowSubTable[lookup >> 4];
    f |= value & (Flag.X3 | Flag.X5);
    f |= diff & Flag.S;
    z80.regs.af = word(z80.regs.a, f);
});
fillMap.set(0xBE, (z80) => {
    let value;
    value = z80.readByte(z80.regs.hl);
    const diff = (z80.regs.a - value) & 0xFFFF;
    const lookup = (((z80.regs.a & 0x88) >> 3) |
        ((value & 0x88) >> 2) |
        ((diff & 0x88) >> 1)) & 0xFF;
    let f = Flag.N;
    if ((diff & 0x100) != 0)
        f |= Flag.C;
    if (diff == 0)
        f |= Flag.Z;
    f |= halfCarrySubTable[lookup & 0x07];
    f |= overflowSubTable[lookup >> 4];
    f |= value & (Flag.X3 | Flag.X5);
    f |= diff & Flag.S;
    z80.regs.af = word(z80.regs.a, f);
});
fillMap.set(0xBF, (z80) => {
    let value;
    value = z80.regs.a;
    const diff = (z80.regs.a - value) & 0xFFFF;
    const lookup = (((z80.regs.a & 0x88) >> 3) |
        ((value & 0x88) >> 2) |
        ((diff & 0x88) >> 1)) & 0xFF;
    let f = Flag.N;
    if ((diff & 0x100) != 0)
        f |= Flag.C;
    if (diff == 0)
        f |= Flag.Z;
    f |= halfCarrySubTable[lookup & 0x07];
    f |= overflowSubTable[lookup >> 4];
    f |= value & (Flag.X3 | Flag.X5);
    f |= diff & Flag.S;
    z80.regs.af = word(z80.regs.a, f);
});
fillMap.set(0xC0, (z80) => {
    z80.incTStateCount(1);
    if ((z80.regs.f & Flag.Z) === 0) {
        z80.regs.pc = z80.popWord();
        z80.regs.memptr = z80.regs.pc;
    }
});
fillMap.set(0xC1, (z80) => {
    z80.regs.bc = z80.popWord();
});
fillMap.set(0xC2, (z80) => {
    z80.regs.memptr = z80.readByte(z80.regs.pc);
    z80.regs.pc = inc16(z80.regs.pc);
    z80.regs.memptr = word(z80.readByte(z80.regs.pc), z80.regs.memptr);
    z80.regs.pc = inc16(z80.regs.pc);
    if ((z80.regs.f & Flag.Z) === 0) {
        z80.regs.pc = z80.regs.memptr;
    }
});
fillMap.set(0xC3, (z80) => {
    z80.regs.memptr = z80.readByte(z80.regs.pc);
    z80.regs.pc = inc16(z80.regs.pc);
    z80.regs.memptr = word(z80.readByte(z80.regs.pc), z80.regs.memptr);
    z80.regs.pc = inc16(z80.regs.pc);
    z80.regs.pc = z80.regs.memptr;
});
fillMap.set(0xC4, (z80) => {
    z80.regs.memptr = z80.readByte(z80.regs.pc);
    z80.regs.pc = inc16(z80.regs.pc);
    z80.regs.memptr = word(z80.readByte(z80.regs.pc), z80.regs.memptr);
    z80.regs.pc = inc16(z80.regs.pc);
    if ((z80.regs.f & Flag.Z) === 0) {
        z80.incTStateCount(1);
        z80.pushWord(z80.regs.pc);
        z80.regs.pc = z80.regs.memptr;
    }
});
fillMap.set(0xC5, (z80) => {
    z80.incTStateCount(1);
    z80.pushWord(z80.regs.bc);
});
fillMap.set(0xC6, (z80) => {
    let value;
    value = z80.readByte(z80.regs.pc);
    z80.regs.pc = inc16(z80.regs.pc);
    let result = add16(z80.regs.a, value);
    const lookup = (((z80.regs.a & 0x88) >> 3) |
        ((value & 0x88) >> 2) |
        ((result & 0x88) >> 1)) & 0xFF;
    z80.regs.a = result & 0xFF;
    z80.regs.f = (((result & 0x100) !== 0) ? Flag.C : 0) | halfCarryAddTable[lookup & 0x07] | overflowAddTable[lookup >> 4] | z80.sz53Table[z80.regs.a];
});
fillMap.set(0xC7, (z80) => {
    z80.incTStateCount(1);
    z80.pushWord(z80.regs.pc);
    z80.regs.pc = 0x0000;
    z80.regs.memptr = z80.regs.pc;
});
fillMap.set(0xC8, (z80) => {
    z80.incTStateCount(1);
    if ((z80.regs.f & Flag.Z) !== 0) {
        z80.regs.pc = z80.popWord();
        z80.regs.memptr = z80.regs.pc;
    }
});
fillMap.set(0xC9, (z80) => {
    z80.regs.pc = z80.popWord();
    z80.regs.memptr = z80.regs.pc;
});
fillMap.set(0xCA, (z80) => {
    z80.regs.memptr = z80.readByte(z80.regs.pc);
    z80.regs.pc = inc16(z80.regs.pc);
    z80.regs.memptr = word(z80.readByte(z80.regs.pc), z80.regs.memptr);
    z80.regs.pc = inc16(z80.regs.pc);
    if ((z80.regs.f & Flag.Z) !== 0) {
        z80.regs.pc = z80.regs.memptr;
    }
});
fillMap.set(0xCB, (z80) => {
    decodeCB(z80);
});
fillMap.set(0xCC, (z80) => {
    z80.regs.memptr = z80.readByte(z80.regs.pc);
    z80.regs.pc = inc16(z80.regs.pc);
    z80.regs.memptr = word(z80.readByte(z80.regs.pc), z80.regs.memptr);
    z80.regs.pc = inc16(z80.regs.pc);
    if ((z80.regs.f & Flag.Z) !== 0) {
        z80.incTStateCount(1);
        z80.pushWord(z80.regs.pc);
        z80.regs.pc = z80.regs.memptr;
    }
});
fillMap.set(0xCD, (z80) => {
    z80.regs.memptr = z80.readByte(z80.regs.pc);
    z80.regs.pc = inc16(z80.regs.pc);
    z80.regs.memptr = word(z80.readByte(z80.regs.pc), z80.regs.memptr);
    z80.regs.pc = inc16(z80.regs.pc);
    z80.incTStateCount(1);
    z80.pushWord(z80.regs.pc);
    z80.regs.pc = z80.regs.memptr;
});
fillMap.set(0xCE, (z80) => {
    let value;
    value = z80.readByte(z80.regs.pc);
    z80.regs.pc = inc16(z80.regs.pc);
    let result = add16(z80.regs.a, value);
    if ((z80.regs.f & Flag.C) !== 0) {
        result = inc16(result);
    }
    const lookup = (((z80.regs.a & 0x88) >> 3) |
        ((value & 0x88) >> 2) |
        ((result & 0x88) >> 1)) & 0xFF;
    z80.regs.a = result & 0xFF;
    z80.regs.f = (((result & 0x100) !== 0) ? Flag.C : 0) | halfCarryAddTable[lookup & 0x07] | overflowAddTable[lookup >> 4] | z80.sz53Table[z80.regs.a];
});
fillMap.set(0xCF, (z80) => {
    z80.incTStateCount(1);
    z80.pushWord(z80.regs.pc);
    z80.regs.pc = 0x0008;
    z80.regs.memptr = z80.regs.pc;
});
fillMap.set(0xD0, (z80) => {
    z80.incTStateCount(1);
    if ((z80.regs.f & Flag.C) === 0) {
        z80.regs.pc = z80.popWord();
        z80.regs.memptr = z80.regs.pc;
    }
});
fillMap.set(0xD1, (z80) => {
    z80.regs.de = z80.popWord();
});
fillMap.set(0xD2, (z80) => {
    z80.regs.memptr = z80.readByte(z80.regs.pc);
    z80.regs.pc = inc16(z80.regs.pc);
    z80.regs.memptr = word(z80.readByte(z80.regs.pc), z80.regs.memptr);
    z80.regs.pc = inc16(z80.regs.pc);
    if ((z80.regs.f & Flag.C) === 0) {
        z80.regs.pc = z80.regs.memptr;
    }
});
fillMap.set(0xD3, (z80) => {
    const port = z80.readByte(z80.regs.pc);
    z80.regs.pc = inc16(z80.regs.pc);
    z80.regs.memptr = word(z80.regs.a, inc8(port));
    z80.writePort(word(z80.regs.a, port), z80.regs.a);
});
fillMap.set(0xD4, (z80) => {
    z80.regs.memptr = z80.readByte(z80.regs.pc);
    z80.regs.pc = inc16(z80.regs.pc);
    z80.regs.memptr = word(z80.readByte(z80.regs.pc), z80.regs.memptr);
    z80.regs.pc = inc16(z80.regs.pc);
    if ((z80.regs.f & Flag.C) === 0) {
        z80.incTStateCount(1);
        z80.pushWord(z80.regs.pc);
        z80.regs.pc = z80.regs.memptr;
    }
});
fillMap.set(0xD5, (z80) => {
    z80.incTStateCount(1);
    z80.pushWord(z80.regs.de);
});
fillMap.set(0xD6, (z80) => {
    let value;
    value = z80.readByte(z80.regs.pc);
    z80.regs.pc = inc16(z80.regs.pc);
    let result = sub16(z80.regs.a, value);
    const lookup = (((z80.regs.a & 0x88) >> 3) |
        ((value & 0x88) >> 2) |
        ((result & 0x88) >> 1)) & 0xFF;
    z80.regs.a = result & 0xFF;
    z80.regs.f = (((result & 0x100) !== 0) ? Flag.C : 0) | Flag.N | halfCarrySubTable[lookup & 0x07] | overflowSubTable[lookup >> 4] | z80.sz53Table[z80.regs.a];
});
fillMap.set(0xD7, (z80) => {
    z80.incTStateCount(1);
    z80.pushWord(z80.regs.pc);
    z80.regs.pc = 0x0010;
    z80.regs.memptr = z80.regs.pc;
});
fillMap.set(0xD8, (z80) => {
    z80.incTStateCount(1);
    if ((z80.regs.f & Flag.C) !== 0) {
        z80.regs.pc = z80.popWord();
        z80.regs.memptr = z80.regs.pc;
    }
});
fillMap.set(0xD9, (z80) => {
    let tmp;
    tmp = z80.regs.bc;
    z80.regs.bc = z80.regs.bcPrime;
    z80.regs.bcPrime = tmp;
    tmp = z80.regs.de;
    z80.regs.de = z80.regs.dePrime;
    z80.regs.dePrime = tmp;
    tmp = z80.regs.hl;
    z80.regs.hl = z80.regs.hlPrime;
    z80.regs.hlPrime = tmp;
});
fillMap.set(0xDA, (z80) => {
    z80.regs.memptr = z80.readByte(z80.regs.pc);
    z80.regs.pc = inc16(z80.regs.pc);
    z80.regs.memptr = word(z80.readByte(z80.regs.pc), z80.regs.memptr);
    z80.regs.pc = inc16(z80.regs.pc);
    if ((z80.regs.f & Flag.C) !== 0) {
        z80.regs.pc = z80.regs.memptr;
    }
});
fillMap.set(0xDB, (z80) => {
    const port = word(z80.regs.a, z80.readByte(z80.regs.pc));
    z80.regs.pc = inc16(z80.regs.pc);
    z80.regs.a = z80.readPort(port);
    z80.regs.memptr = inc16(port);
});
fillMap.set(0xDC, (z80) => {
    z80.regs.memptr = z80.readByte(z80.regs.pc);
    z80.regs.pc = inc16(z80.regs.pc);
    z80.regs.memptr = word(z80.readByte(z80.regs.pc), z80.regs.memptr);
    z80.regs.pc = inc16(z80.regs.pc);
    if ((z80.regs.f & Flag.C) !== 0) {
        z80.incTStateCount(1);
        z80.pushWord(z80.regs.pc);
        z80.regs.pc = z80.regs.memptr;
    }
});
fillMap.set(0xDD, (z80) => {
    decodeDD(z80);
});
fillMap.set(0xDE, (z80) => {
    let value;
    value = z80.readByte(z80.regs.pc);
    z80.regs.pc = inc16(z80.regs.pc);
    let result = sub16(z80.regs.a, value);
    if ((z80.regs.f & Flag.C) !== 0) {
        result = dec16(result);
    }
    const lookup = (((z80.regs.a & 0x88) >> 3) |
        ((value & 0x88) >> 2) |
        ((result & 0x88) >> 1)) & 0xFF;
    z80.regs.a = result & 0xFF;
    z80.regs.f = (((result & 0x100) !== 0) ? Flag.C : 0) | Flag.N | halfCarrySubTable[lookup & 0x07] | overflowSubTable[lookup >> 4] | z80.sz53Table[z80.regs.a];
});
fillMap.set(0xDF, (z80) => {
    z80.incTStateCount(1);
    z80.pushWord(z80.regs.pc);
    z80.regs.pc = 0x0018;
    z80.regs.memptr = z80.regs.pc;
});
fillMap.set(0xE0, (z80) => {
    z80.incTStateCount(1);
    if ((z80.regs.f & Flag.P) === 0) {
        z80.regs.pc = z80.popWord();
        z80.regs.memptr = z80.regs.pc;
    }
});
fillMap.set(0xE1, (z80) => {
    z80.regs.hl = z80.popWord();
});
fillMap.set(0xE2, (z80) => {
    z80.regs.memptr = z80.readByte(z80.regs.pc);
    z80.regs.pc = inc16(z80.regs.pc);
    z80.regs.memptr = word(z80.readByte(z80.regs.pc), z80.regs.memptr);
    z80.regs.pc = inc16(z80.regs.pc);
    if ((z80.regs.f & Flag.P) === 0) {
        z80.regs.pc = z80.regs.memptr;
    }
});
fillMap.set(0xE3, (z80) => {
    const rightValue = z80.regs.hl;
    const leftValueL = z80.readByte(z80.regs.sp);
    const leftValueH = z80.readByte(inc16(z80.regs.sp));
    z80.incTStateCount(1);
    z80.writeByte(inc16(z80.regs.sp), hi(rightValue));
    z80.writeByte(z80.regs.sp, lo(rightValue));
    z80.incTStateCount(2);
    z80.regs.memptr = word(leftValueH, leftValueL);
    z80.regs.hl = word(leftValueH, leftValueL);
});
fillMap.set(0xE4, (z80) => {
    z80.regs.memptr = z80.readByte(z80.regs.pc);
    z80.regs.pc = inc16(z80.regs.pc);
    z80.regs.memptr = word(z80.readByte(z80.regs.pc), z80.regs.memptr);
    z80.regs.pc = inc16(z80.regs.pc);
    if ((z80.regs.f & Flag.P) === 0) {
        z80.incTStateCount(1);
        z80.pushWord(z80.regs.pc);
        z80.regs.pc = z80.regs.memptr;
    }
});
fillMap.set(0xE5, (z80) => {
    z80.incTStateCount(1);
    z80.pushWord(z80.regs.hl);
});
fillMap.set(0xE6, (z80) => {
    let value;
    value = z80.readByte(z80.regs.pc);
    z80.regs.pc = inc16(z80.regs.pc);
    z80.regs.a &= value;
    z80.regs.f = z80.sz53pTable[z80.regs.a];
    z80.regs.f |= Flag.H;
});
fillMap.set(0xE7, (z80) => {
    z80.incTStateCount(1);
    z80.pushWord(z80.regs.pc);
    z80.regs.pc = 0x0020;
    z80.regs.memptr = z80.regs.pc;
});
fillMap.set(0xE8, (z80) => {
    z80.incTStateCount(1);
    if ((z80.regs.f & Flag.P) !== 0) {
        z80.regs.pc = z80.popWord();
        z80.regs.memptr = z80.regs.pc;
    }
});
fillMap.set(0xE9, (z80) => {
    z80.regs.pc = z80.regs.hl;
});
fillMap.set(0xEA, (z80) => {
    z80.regs.memptr = z80.readByte(z80.regs.pc);
    z80.regs.pc = inc16(z80.regs.pc);
    z80.regs.memptr = word(z80.readByte(z80.regs.pc), z80.regs.memptr);
    z80.regs.pc = inc16(z80.regs.pc);
    if ((z80.regs.f & Flag.P) !== 0) {
        z80.regs.pc = z80.regs.memptr;
    }
});
fillMap.set(0xEB, (z80) => {
    const rightValue = z80.regs.hl;
    z80.regs.hl = z80.regs.de;
    z80.regs.de = rightValue;
});
fillMap.set(0xEC, (z80) => {
    z80.regs.memptr = z80.readByte(z80.regs.pc);
    z80.regs.pc = inc16(z80.regs.pc);
    z80.regs.memptr = word(z80.readByte(z80.regs.pc), z80.regs.memptr);
    z80.regs.pc = inc16(z80.regs.pc);
    if ((z80.regs.f & Flag.P) !== 0) {
        z80.incTStateCount(1);
        z80.pushWord(z80.regs.pc);
        z80.regs.pc = z80.regs.memptr;
    }
});
fillMap.set(0xED, (z80) => {
    decodeED(z80);
});
fillMap.set(0xEE, (z80) => {
    let value;
    value = z80.readByte(z80.regs.pc);
    z80.regs.pc = inc16(z80.regs.pc);
    z80.regs.a ^= value;
    z80.regs.f = z80.sz53pTable[z80.regs.a];
});
fillMap.set(0xEF, (z80) => {
    z80.incTStateCount(1);
    z80.pushWord(z80.regs.pc);
    z80.regs.pc = 0x0028;
    z80.regs.memptr = z80.regs.pc;
});
fillMap.set(0xF0, (z80) => {
    z80.incTStateCount(1);
    if ((z80.regs.f & Flag.S) === 0) {
        z80.regs.pc = z80.popWord();
        z80.regs.memptr = z80.regs.pc;
    }
});
fillMap.set(0xF1, (z80) => {
    z80.regs.af = z80.popWord();
});
fillMap.set(0xF2, (z80) => {
    z80.regs.memptr = z80.readByte(z80.regs.pc);
    z80.regs.pc = inc16(z80.regs.pc);
    z80.regs.memptr = word(z80.readByte(z80.regs.pc), z80.regs.memptr);
    z80.regs.pc = inc16(z80.regs.pc);
    if ((z80.regs.f & Flag.S) === 0) {
        z80.regs.pc = z80.regs.memptr;
    }
});
fillMap.set(0xF3, (z80) => {
    z80.regs.iff1 = 0;
    z80.regs.iff2 = 0;
});
fillMap.set(0xF4, (z80) => {
    z80.regs.memptr = z80.readByte(z80.regs.pc);
    z80.regs.pc = inc16(z80.regs.pc);
    z80.regs.memptr = word(z80.readByte(z80.regs.pc), z80.regs.memptr);
    z80.regs.pc = inc16(z80.regs.pc);
    if ((z80.regs.f & Flag.S) === 0) {
        z80.incTStateCount(1);
        z80.pushWord(z80.regs.pc);
        z80.regs.pc = z80.regs.memptr;
    }
});
fillMap.set(0xF5, (z80) => {
    z80.incTStateCount(1);
    z80.pushWord(z80.regs.af);
});
fillMap.set(0xF6, (z80) => {
    let value;
    value = z80.readByte(z80.regs.pc);
    z80.regs.pc = inc16(z80.regs.pc);
    z80.regs.a |= value;
    z80.regs.f = z80.sz53pTable[z80.regs.a];
});
fillMap.set(0xF7, (z80) => {
    z80.incTStateCount(1);
    z80.pushWord(z80.regs.pc);
    z80.regs.pc = 0x0030;
    z80.regs.memptr = z80.regs.pc;
});
fillMap.set(0xF8, (z80) => {
    z80.incTStateCount(1);
    if ((z80.regs.f & Flag.S) !== 0) {
        z80.regs.pc = z80.popWord();
        z80.regs.memptr = z80.regs.pc;
    }
});
fillMap.set(0xF9, (z80) => {
    let value;
    value = z80.regs.hl;
    z80.incTStateCount(2);
    z80.regs.sp = value;
});
fillMap.set(0xFA, (z80) => {
    z80.regs.memptr = z80.readByte(z80.regs.pc);
    z80.regs.pc = inc16(z80.regs.pc);
    z80.regs.memptr = word(z80.readByte(z80.regs.pc), z80.regs.memptr);
    z80.regs.pc = inc16(z80.regs.pc);
    if ((z80.regs.f & Flag.S) !== 0) {
        z80.regs.pc = z80.regs.memptr;
    }
});
fillMap.set(0xFB, (z80) => {
    z80.regs.iff1 = 1;
    z80.regs.iff2 = 1;
});
fillMap.set(0xFC, (z80) => {
    z80.regs.memptr = z80.readByte(z80.regs.pc);
    z80.regs.pc = inc16(z80.regs.pc);
    z80.regs.memptr = word(z80.readByte(z80.regs.pc), z80.regs.memptr);
    z80.regs.pc = inc16(z80.regs.pc);
    if ((z80.regs.f & Flag.S) !== 0) {
        z80.incTStateCount(1);
        z80.pushWord(z80.regs.pc);
        z80.regs.pc = z80.regs.memptr;
    }
});
fillMap.set(0xFD, (z80) => {
    decodeFD(z80);
});
fillMap.set(0xFE, (z80) => {
    let value;
    value = z80.readByte(z80.regs.pc);
    z80.regs.pc = inc16(z80.regs.pc);
    const diff = (z80.regs.a - value) & 0xFFFF;
    const lookup = (((z80.regs.a & 0x88) >> 3) |
        ((value & 0x88) >> 2) |
        ((diff & 0x88) >> 1)) & 0xFF;
    let f = Flag.N;
    if ((diff & 0x100) != 0)
        f |= Flag.C;
    if (diff == 0)
        f |= Flag.Z;
    f |= halfCarrySubTable[lookup & 0x07];
    f |= overflowSubTable[lookup >> 4];
    f |= value & (Flag.X3 | Flag.X5);
    f |= diff & Flag.S;
    z80.regs.af = word(z80.regs.a, f);
});
fillMap.set(0xFF, (z80) => {
    z80.incTStateCount(1);
    z80.pushWord(z80.regs.pc);
    z80.regs.pc = 0x0038;
    z80.regs.memptr = z80.regs.pc;
});
const decodeMapCB = new Map();
fillMap = decodeMapCB;
// The contents of this map are auto-generated by GenerateOpcodes.ts.
fillMap.set(0x00, (z80) => {
    let value;
    value = z80.regs.b;
    const oldValue = value;
    value = ((value << 1) | (value >> 7)) & 0xFF;
    z80.regs.f = ((oldValue & 0x80) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
    z80.regs.b = value;
});
fillMap.set(0x01, (z80) => {
    let value;
    value = z80.regs.c;
    const oldValue = value;
    value = ((value << 1) | (value >> 7)) & 0xFF;
    z80.regs.f = ((oldValue & 0x80) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
    z80.regs.c = value;
});
fillMap.set(0x02, (z80) => {
    let value;
    value = z80.regs.d;
    const oldValue = value;
    value = ((value << 1) | (value >> 7)) & 0xFF;
    z80.regs.f = ((oldValue & 0x80) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
    z80.regs.d = value;
});
fillMap.set(0x03, (z80) => {
    let value;
    value = z80.regs.e;
    const oldValue = value;
    value = ((value << 1) | (value >> 7)) & 0xFF;
    z80.regs.f = ((oldValue & 0x80) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
    z80.regs.e = value;
});
fillMap.set(0x04, (z80) => {
    let value;
    value = z80.regs.h;
    const oldValue = value;
    value = ((value << 1) | (value >> 7)) & 0xFF;
    z80.regs.f = ((oldValue & 0x80) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
    z80.regs.h = value;
});
fillMap.set(0x05, (z80) => {
    let value;
    value = z80.regs.l;
    const oldValue = value;
    value = ((value << 1) | (value >> 7)) & 0xFF;
    z80.regs.f = ((oldValue & 0x80) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
    z80.regs.l = value;
});
fillMap.set(0x06, (z80) => {
    let value;
    value = z80.readByte(z80.regs.hl);
    z80.incTStateCount(1);
    const oldValue = value;
    value = ((value << 1) | (value >> 7)) & 0xFF;
    z80.regs.f = ((oldValue & 0x80) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
    z80.writeByte(z80.regs.hl, value);
});
fillMap.set(0x07, (z80) => {
    let value;
    value = z80.regs.a;
    const oldValue = value;
    value = ((value << 1) | (value >> 7)) & 0xFF;
    z80.regs.f = ((oldValue & 0x80) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
    z80.regs.a = value;
});
fillMap.set(0x08, (z80) => {
    let value;
    value = z80.regs.b;
    const oldValue = value;
    value = ((value >> 1) | (value << 7)) & 0xFF;
    z80.regs.f = ((oldValue & 0x01) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
    z80.regs.b = value;
});
fillMap.set(0x09, (z80) => {
    let value;
    value = z80.regs.c;
    const oldValue = value;
    value = ((value >> 1) | (value << 7)) & 0xFF;
    z80.regs.f = ((oldValue & 0x01) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
    z80.regs.c = value;
});
fillMap.set(0x0A, (z80) => {
    let value;
    value = z80.regs.d;
    const oldValue = value;
    value = ((value >> 1) | (value << 7)) & 0xFF;
    z80.regs.f = ((oldValue & 0x01) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
    z80.regs.d = value;
});
fillMap.set(0x0B, (z80) => {
    let value;
    value = z80.regs.e;
    const oldValue = value;
    value = ((value >> 1) | (value << 7)) & 0xFF;
    z80.regs.f = ((oldValue & 0x01) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
    z80.regs.e = value;
});
fillMap.set(0x0C, (z80) => {
    let value;
    value = z80.regs.h;
    const oldValue = value;
    value = ((value >> 1) | (value << 7)) & 0xFF;
    z80.regs.f = ((oldValue & 0x01) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
    z80.regs.h = value;
});
fillMap.set(0x0D, (z80) => {
    let value;
    value = z80.regs.l;
    const oldValue = value;
    value = ((value >> 1) | (value << 7)) & 0xFF;
    z80.regs.f = ((oldValue & 0x01) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
    z80.regs.l = value;
});
fillMap.set(0x0E, (z80) => {
    let value;
    value = z80.readByte(z80.regs.hl);
    z80.incTStateCount(1);
    const oldValue = value;
    value = ((value >> 1) | (value << 7)) & 0xFF;
    z80.regs.f = ((oldValue & 0x01) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
    z80.writeByte(z80.regs.hl, value);
});
fillMap.set(0x0F, (z80) => {
    let value;
    value = z80.regs.a;
    const oldValue = value;
    value = ((value >> 1) | (value << 7)) & 0xFF;
    z80.regs.f = ((oldValue & 0x01) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
    z80.regs.a = value;
});
fillMap.set(0x10, (z80) => {
    let value;
    value = z80.regs.b;
    const oldValue = value;
    value = ((value << 1) | ((z80.regs.f & Flag.C) !== 0 ? 1 : 0)) & 0xFF;
    z80.regs.f = ((oldValue & 0x80) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
    z80.regs.b = value;
});
fillMap.set(0x11, (z80) => {
    let value;
    value = z80.regs.c;
    const oldValue = value;
    value = ((value << 1) | ((z80.regs.f & Flag.C) !== 0 ? 1 : 0)) & 0xFF;
    z80.regs.f = ((oldValue & 0x80) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
    z80.regs.c = value;
});
fillMap.set(0x12, (z80) => {
    let value;
    value = z80.regs.d;
    const oldValue = value;
    value = ((value << 1) | ((z80.regs.f & Flag.C) !== 0 ? 1 : 0)) & 0xFF;
    z80.regs.f = ((oldValue & 0x80) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
    z80.regs.d = value;
});
fillMap.set(0x13, (z80) => {
    let value;
    value = z80.regs.e;
    const oldValue = value;
    value = ((value << 1) | ((z80.regs.f & Flag.C) !== 0 ? 1 : 0)) & 0xFF;
    z80.regs.f = ((oldValue & 0x80) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
    z80.regs.e = value;
});
fillMap.set(0x14, (z80) => {
    let value;
    value = z80.regs.h;
    const oldValue = value;
    value = ((value << 1) | ((z80.regs.f & Flag.C) !== 0 ? 1 : 0)) & 0xFF;
    z80.regs.f = ((oldValue & 0x80) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
    z80.regs.h = value;
});
fillMap.set(0x15, (z80) => {
    let value;
    value = z80.regs.l;
    const oldValue = value;
    value = ((value << 1) | ((z80.regs.f & Flag.C) !== 0 ? 1 : 0)) & 0xFF;
    z80.regs.f = ((oldValue & 0x80) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
    z80.regs.l = value;
});
fillMap.set(0x16, (z80) => {
    let value;
    value = z80.readByte(z80.regs.hl);
    z80.incTStateCount(1);
    const oldValue = value;
    value = ((value << 1) | ((z80.regs.f & Flag.C) !== 0 ? 1 : 0)) & 0xFF;
    z80.regs.f = ((oldValue & 0x80) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
    z80.writeByte(z80.regs.hl, value);
});
fillMap.set(0x17, (z80) => {
    let value;
    value = z80.regs.a;
    const oldValue = value;
    value = ((value << 1) | ((z80.regs.f & Flag.C) !== 0 ? 1 : 0)) & 0xFF;
    z80.regs.f = ((oldValue & 0x80) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
    z80.regs.a = value;
});
fillMap.set(0x18, (z80) => {
    let value;
    value = z80.regs.b;
    const oldValue = value;
    value = (value >> 1) | ((z80.regs.f & Flag.C) !== 0 ? 0x80 : 0);
    z80.regs.f = ((oldValue & 0x01) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
    z80.regs.b = value;
});
fillMap.set(0x19, (z80) => {
    let value;
    value = z80.regs.c;
    const oldValue = value;
    value = (value >> 1) | ((z80.regs.f & Flag.C) !== 0 ? 0x80 : 0);
    z80.regs.f = ((oldValue & 0x01) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
    z80.regs.c = value;
});
fillMap.set(0x1A, (z80) => {
    let value;
    value = z80.regs.d;
    const oldValue = value;
    value = (value >> 1) | ((z80.regs.f & Flag.C) !== 0 ? 0x80 : 0);
    z80.regs.f = ((oldValue & 0x01) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
    z80.regs.d = value;
});
fillMap.set(0x1B, (z80) => {
    let value;
    value = z80.regs.e;
    const oldValue = value;
    value = (value >> 1) | ((z80.regs.f & Flag.C) !== 0 ? 0x80 : 0);
    z80.regs.f = ((oldValue & 0x01) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
    z80.regs.e = value;
});
fillMap.set(0x1C, (z80) => {
    let value;
    value = z80.regs.h;
    const oldValue = value;
    value = (value >> 1) | ((z80.regs.f & Flag.C) !== 0 ? 0x80 : 0);
    z80.regs.f = ((oldValue & 0x01) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
    z80.regs.h = value;
});
fillMap.set(0x1D, (z80) => {
    let value;
    value = z80.regs.l;
    const oldValue = value;
    value = (value >> 1) | ((z80.regs.f & Flag.C) !== 0 ? 0x80 : 0);
    z80.regs.f = ((oldValue & 0x01) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
    z80.regs.l = value;
});
fillMap.set(0x1E, (z80) => {
    let value;
    value = z80.readByte(z80.regs.hl);
    z80.incTStateCount(1);
    const oldValue = value;
    value = (value >> 1) | ((z80.regs.f & Flag.C) !== 0 ? 0x80 : 0);
    z80.regs.f = ((oldValue & 0x01) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
    z80.writeByte(z80.regs.hl, value);
});
fillMap.set(0x1F, (z80) => {
    let value;
    value = z80.regs.a;
    const oldValue = value;
    value = (value >> 1) | ((z80.regs.f & Flag.C) !== 0 ? 0x80 : 0);
    z80.regs.f = ((oldValue & 0x01) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
    z80.regs.a = value;
});
fillMap.set(0x20, (z80) => {
    let value;
    value = z80.regs.b;
    const oldValue = value;
    value = (value << 1) & 0xFF;
    z80.regs.f = ((oldValue & 0x80) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
    z80.regs.b = value;
});
fillMap.set(0x21, (z80) => {
    let value;
    value = z80.regs.c;
    const oldValue = value;
    value = (value << 1) & 0xFF;
    z80.regs.f = ((oldValue & 0x80) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
    z80.regs.c = value;
});
fillMap.set(0x22, (z80) => {
    let value;
    value = z80.regs.d;
    const oldValue = value;
    value = (value << 1) & 0xFF;
    z80.regs.f = ((oldValue & 0x80) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
    z80.regs.d = value;
});
fillMap.set(0x23, (z80) => {
    let value;
    value = z80.regs.e;
    const oldValue = value;
    value = (value << 1) & 0xFF;
    z80.regs.f = ((oldValue & 0x80) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
    z80.regs.e = value;
});
fillMap.set(0x24, (z80) => {
    let value;
    value = z80.regs.h;
    const oldValue = value;
    value = (value << 1) & 0xFF;
    z80.regs.f = ((oldValue & 0x80) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
    z80.regs.h = value;
});
fillMap.set(0x25, (z80) => {
    let value;
    value = z80.regs.l;
    const oldValue = value;
    value = (value << 1) & 0xFF;
    z80.regs.f = ((oldValue & 0x80) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
    z80.regs.l = value;
});
fillMap.set(0x26, (z80) => {
    let value;
    value = z80.readByte(z80.regs.hl);
    z80.incTStateCount(1);
    const oldValue = value;
    value = (value << 1) & 0xFF;
    z80.regs.f = ((oldValue & 0x80) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
    z80.writeByte(z80.regs.hl, value);
});
fillMap.set(0x27, (z80) => {
    let value;
    value = z80.regs.a;
    const oldValue = value;
    value = (value << 1) & 0xFF;
    z80.regs.f = ((oldValue & 0x80) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
    z80.regs.a = value;
});
fillMap.set(0x28, (z80) => {
    let value;
    value = z80.regs.b;
    const oldValue = value;
    value = (value & 0x80) | (value >> 1);
    z80.regs.f = ((oldValue & 0x01) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
    z80.regs.b = value;
});
fillMap.set(0x29, (z80) => {
    let value;
    value = z80.regs.c;
    const oldValue = value;
    value = (value & 0x80) | (value >> 1);
    z80.regs.f = ((oldValue & 0x01) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
    z80.regs.c = value;
});
fillMap.set(0x2A, (z80) => {
    let value;
    value = z80.regs.d;
    const oldValue = value;
    value = (value & 0x80) | (value >> 1);
    z80.regs.f = ((oldValue & 0x01) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
    z80.regs.d = value;
});
fillMap.set(0x2B, (z80) => {
    let value;
    value = z80.regs.e;
    const oldValue = value;
    value = (value & 0x80) | (value >> 1);
    z80.regs.f = ((oldValue & 0x01) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
    z80.regs.e = value;
});
fillMap.set(0x2C, (z80) => {
    let value;
    value = z80.regs.h;
    const oldValue = value;
    value = (value & 0x80) | (value >> 1);
    z80.regs.f = ((oldValue & 0x01) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
    z80.regs.h = value;
});
fillMap.set(0x2D, (z80) => {
    let value;
    value = z80.regs.l;
    const oldValue = value;
    value = (value & 0x80) | (value >> 1);
    z80.regs.f = ((oldValue & 0x01) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
    z80.regs.l = value;
});
fillMap.set(0x2E, (z80) => {
    let value;
    value = z80.readByte(z80.regs.hl);
    z80.incTStateCount(1);
    const oldValue = value;
    value = (value & 0x80) | (value >> 1);
    z80.regs.f = ((oldValue & 0x01) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
    z80.writeByte(z80.regs.hl, value);
});
fillMap.set(0x2F, (z80) => {
    let value;
    value = z80.regs.a;
    const oldValue = value;
    value = (value & 0x80) | (value >> 1);
    z80.regs.f = ((oldValue & 0x01) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
    z80.regs.a = value;
});
fillMap.set(0x30, (z80) => {
    let value;
    value = z80.regs.b;
    const oldValue = value;
    value = ((value << 1) | 0x01) & 0xFF;
    z80.regs.f = ((oldValue & 0x80) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
    z80.regs.b = value;
});
fillMap.set(0x31, (z80) => {
    let value;
    value = z80.regs.c;
    const oldValue = value;
    value = ((value << 1) | 0x01) & 0xFF;
    z80.regs.f = ((oldValue & 0x80) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
    z80.regs.c = value;
});
fillMap.set(0x32, (z80) => {
    let value;
    value = z80.regs.d;
    const oldValue = value;
    value = ((value << 1) | 0x01) & 0xFF;
    z80.regs.f = ((oldValue & 0x80) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
    z80.regs.d = value;
});
fillMap.set(0x33, (z80) => {
    let value;
    value = z80.regs.e;
    const oldValue = value;
    value = ((value << 1) | 0x01) & 0xFF;
    z80.regs.f = ((oldValue & 0x80) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
    z80.regs.e = value;
});
fillMap.set(0x34, (z80) => {
    let value;
    value = z80.regs.h;
    const oldValue = value;
    value = ((value << 1) | 0x01) & 0xFF;
    z80.regs.f = ((oldValue & 0x80) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
    z80.regs.h = value;
});
fillMap.set(0x35, (z80) => {
    let value;
    value = z80.regs.l;
    const oldValue = value;
    value = ((value << 1) | 0x01) & 0xFF;
    z80.regs.f = ((oldValue & 0x80) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
    z80.regs.l = value;
});
fillMap.set(0x36, (z80) => {
    let value;
    value = z80.readByte(z80.regs.hl);
    z80.incTStateCount(1);
    const oldValue = value;
    value = ((value << 1) | 0x01) & 0xFF;
    z80.regs.f = ((oldValue & 0x80) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
    z80.writeByte(z80.regs.hl, value);
});
fillMap.set(0x37, (z80) => {
    let value;
    value = z80.regs.a;
    const oldValue = value;
    value = ((value << 1) | 0x01) & 0xFF;
    z80.regs.f = ((oldValue & 0x80) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
    z80.regs.a = value;
});
fillMap.set(0x38, (z80) => {
    let value;
    value = z80.regs.b;
    const oldValue = value;
    value = value >> 1;
    z80.regs.f = ((oldValue & 0x01) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
    z80.regs.b = value;
});
fillMap.set(0x39, (z80) => {
    let value;
    value = z80.regs.c;
    const oldValue = value;
    value = value >> 1;
    z80.regs.f = ((oldValue & 0x01) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
    z80.regs.c = value;
});
fillMap.set(0x3A, (z80) => {
    let value;
    value = z80.regs.d;
    const oldValue = value;
    value = value >> 1;
    z80.regs.f = ((oldValue & 0x01) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
    z80.regs.d = value;
});
fillMap.set(0x3B, (z80) => {
    let value;
    value = z80.regs.e;
    const oldValue = value;
    value = value >> 1;
    z80.regs.f = ((oldValue & 0x01) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
    z80.regs.e = value;
});
fillMap.set(0x3C, (z80) => {
    let value;
    value = z80.regs.h;
    const oldValue = value;
    value = value >> 1;
    z80.regs.f = ((oldValue & 0x01) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
    z80.regs.h = value;
});
fillMap.set(0x3D, (z80) => {
    let value;
    value = z80.regs.l;
    const oldValue = value;
    value = value >> 1;
    z80.regs.f = ((oldValue & 0x01) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
    z80.regs.l = value;
});
fillMap.set(0x3E, (z80) => {
    let value;
    value = z80.readByte(z80.regs.hl);
    z80.incTStateCount(1);
    const oldValue = value;
    value = value >> 1;
    z80.regs.f = ((oldValue & 0x01) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
    z80.writeByte(z80.regs.hl, value);
});
fillMap.set(0x3F, (z80) => {
    let value;
    value = z80.regs.a;
    const oldValue = value;
    value = value >> 1;
    z80.regs.f = ((oldValue & 0x01) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
    z80.regs.a = value;
});
fillMap.set(0x40, (z80) => {
    const value = z80.regs.b;
    const hiddenValue = value;
    let f = (z80.regs.f & Flag.C) | Flag.H | (hiddenValue & (Flag.X3 | Flag.X5));
    if ((value & 0x01) === 0) {
        f |= Flag.P | Flag.Z;
    }
    z80.regs.f = f;
});
fillMap.set(0x41, (z80) => {
    const value = z80.regs.c;
    const hiddenValue = value;
    let f = (z80.regs.f & Flag.C) | Flag.H | (hiddenValue & (Flag.X3 | Flag.X5));
    if ((value & 0x01) === 0) {
        f |= Flag.P | Flag.Z;
    }
    z80.regs.f = f;
});
fillMap.set(0x42, (z80) => {
    const value = z80.regs.d;
    const hiddenValue = value;
    let f = (z80.regs.f & Flag.C) | Flag.H | (hiddenValue & (Flag.X3 | Flag.X5));
    if ((value & 0x01) === 0) {
        f |= Flag.P | Flag.Z;
    }
    z80.regs.f = f;
});
fillMap.set(0x43, (z80) => {
    const value = z80.regs.e;
    const hiddenValue = value;
    let f = (z80.regs.f & Flag.C) | Flag.H | (hiddenValue & (Flag.X3 | Flag.X5));
    if ((value & 0x01) === 0) {
        f |= Flag.P | Flag.Z;
    }
    z80.regs.f = f;
});
fillMap.set(0x44, (z80) => {
    const value = z80.regs.h;
    const hiddenValue = value;
    let f = (z80.regs.f & Flag.C) | Flag.H | (hiddenValue & (Flag.X3 | Flag.X5));
    if ((value & 0x01) === 0) {
        f |= Flag.P | Flag.Z;
    }
    z80.regs.f = f;
});
fillMap.set(0x45, (z80) => {
    const value = z80.regs.l;
    const hiddenValue = value;
    let f = (z80.regs.f & Flag.C) | Flag.H | (hiddenValue & (Flag.X3 | Flag.X5));
    if ((value & 0x01) === 0) {
        f |= Flag.P | Flag.Z;
    }
    z80.regs.f = f;
});
fillMap.set(0x46, (z80) => {
    const value = z80.readByte(z80.regs.hl);
    const hiddenValue = hi(z80.regs.memptr);
    z80.incTStateCount(1);
    let f = (z80.regs.f & Flag.C) | Flag.H | (hiddenValue & (Flag.X3 | Flag.X5));
    if ((value & 0x01) === 0) {
        f |= Flag.P | Flag.Z;
    }
    z80.regs.f = f;
});
fillMap.set(0x47, (z80) => {
    const value = z80.regs.a;
    const hiddenValue = value;
    let f = (z80.regs.f & Flag.C) | Flag.H | (hiddenValue & (Flag.X3 | Flag.X5));
    if ((value & 0x01) === 0) {
        f |= Flag.P | Flag.Z;
    }
    z80.regs.f = f;
});
fillMap.set(0x48, (z80) => {
    const value = z80.regs.b;
    const hiddenValue = value;
    let f = (z80.regs.f & Flag.C) | Flag.H | (hiddenValue & (Flag.X3 | Flag.X5));
    if ((value & 0x02) === 0) {
        f |= Flag.P | Flag.Z;
    }
    z80.regs.f = f;
});
fillMap.set(0x49, (z80) => {
    const value = z80.regs.c;
    const hiddenValue = value;
    let f = (z80.regs.f & Flag.C) | Flag.H | (hiddenValue & (Flag.X3 | Flag.X5));
    if ((value & 0x02) === 0) {
        f |= Flag.P | Flag.Z;
    }
    z80.regs.f = f;
});
fillMap.set(0x4A, (z80) => {
    const value = z80.regs.d;
    const hiddenValue = value;
    let f = (z80.regs.f & Flag.C) | Flag.H | (hiddenValue & (Flag.X3 | Flag.X5));
    if ((value & 0x02) === 0) {
        f |= Flag.P | Flag.Z;
    }
    z80.regs.f = f;
});
fillMap.set(0x4B, (z80) => {
    const value = z80.regs.e;
    const hiddenValue = value;
    let f = (z80.regs.f & Flag.C) | Flag.H | (hiddenValue & (Flag.X3 | Flag.X5));
    if ((value & 0x02) === 0) {
        f |= Flag.P | Flag.Z;
    }
    z80.regs.f = f;
});
fillMap.set(0x4C, (z80) => {
    const value = z80.regs.h;
    const hiddenValue = value;
    let f = (z80.regs.f & Flag.C) | Flag.H | (hiddenValue & (Flag.X3 | Flag.X5));
    if ((value & 0x02) === 0) {
        f |= Flag.P | Flag.Z;
    }
    z80.regs.f = f;
});
fillMap.set(0x4D, (z80) => {
    const value = z80.regs.l;
    const hiddenValue = value;
    let f = (z80.regs.f & Flag.C) | Flag.H | (hiddenValue & (Flag.X3 | Flag.X5));
    if ((value & 0x02) === 0) {
        f |= Flag.P | Flag.Z;
    }
    z80.regs.f = f;
});
fillMap.set(0x4E, (z80) => {
    const value = z80.readByte(z80.regs.hl);
    const hiddenValue = hi(z80.regs.memptr);
    z80.incTStateCount(1);
    let f = (z80.regs.f & Flag.C) | Flag.H | (hiddenValue & (Flag.X3 | Flag.X5));
    if ((value & 0x02) === 0) {
        f |= Flag.P | Flag.Z;
    }
    z80.regs.f = f;
});
fillMap.set(0x4F, (z80) => {
    const value = z80.regs.a;
    const hiddenValue = value;
    let f = (z80.regs.f & Flag.C) | Flag.H | (hiddenValue & (Flag.X3 | Flag.X5));
    if ((value & 0x02) === 0) {
        f |= Flag.P | Flag.Z;
    }
    z80.regs.f = f;
});
fillMap.set(0x50, (z80) => {
    const value = z80.regs.b;
    const hiddenValue = value;
    let f = (z80.regs.f & Flag.C) | Flag.H | (hiddenValue & (Flag.X3 | Flag.X5));
    if ((value & 0x04) === 0) {
        f |= Flag.P | Flag.Z;
    }
    z80.regs.f = f;
});
fillMap.set(0x51, (z80) => {
    const value = z80.regs.c;
    const hiddenValue = value;
    let f = (z80.regs.f & Flag.C) | Flag.H | (hiddenValue & (Flag.X3 | Flag.X5));
    if ((value & 0x04) === 0) {
        f |= Flag.P | Flag.Z;
    }
    z80.regs.f = f;
});
fillMap.set(0x52, (z80) => {
    const value = z80.regs.d;
    const hiddenValue = value;
    let f = (z80.regs.f & Flag.C) | Flag.H | (hiddenValue & (Flag.X3 | Flag.X5));
    if ((value & 0x04) === 0) {
        f |= Flag.P | Flag.Z;
    }
    z80.regs.f = f;
});
fillMap.set(0x53, (z80) => {
    const value = z80.regs.e;
    const hiddenValue = value;
    let f = (z80.regs.f & Flag.C) | Flag.H | (hiddenValue & (Flag.X3 | Flag.X5));
    if ((value & 0x04) === 0) {
        f |= Flag.P | Flag.Z;
    }
    z80.regs.f = f;
});
fillMap.set(0x54, (z80) => {
    const value = z80.regs.h;
    const hiddenValue = value;
    let f = (z80.regs.f & Flag.C) | Flag.H | (hiddenValue & (Flag.X3 | Flag.X5));
    if ((value & 0x04) === 0) {
        f |= Flag.P | Flag.Z;
    }
    z80.regs.f = f;
});
fillMap.set(0x55, (z80) => {
    const value = z80.regs.l;
    const hiddenValue = value;
    let f = (z80.regs.f & Flag.C) | Flag.H | (hiddenValue & (Flag.X3 | Flag.X5));
    if ((value & 0x04) === 0) {
        f |= Flag.P | Flag.Z;
    }
    z80.regs.f = f;
});
fillMap.set(0x56, (z80) => {
    const value = z80.readByte(z80.regs.hl);
    const hiddenValue = hi(z80.regs.memptr);
    z80.incTStateCount(1);
    let f = (z80.regs.f & Flag.C) | Flag.H | (hiddenValue & (Flag.X3 | Flag.X5));
    if ((value & 0x04) === 0) {
        f |= Flag.P | Flag.Z;
    }
    z80.regs.f = f;
});
fillMap.set(0x57, (z80) => {
    const value = z80.regs.a;
    const hiddenValue = value;
    let f = (z80.regs.f & Flag.C) | Flag.H | (hiddenValue & (Flag.X3 | Flag.X5));
    if ((value & 0x04) === 0) {
        f |= Flag.P | Flag.Z;
    }
    z80.regs.f = f;
});
fillMap.set(0x58, (z80) => {
    const value = z80.regs.b;
    const hiddenValue = value;
    let f = (z80.regs.f & Flag.C) | Flag.H | (hiddenValue & (Flag.X3 | Flag.X5));
    if ((value & 0x08) === 0) {
        f |= Flag.P | Flag.Z;
    }
    z80.regs.f = f;
});
fillMap.set(0x59, (z80) => {
    const value = z80.regs.c;
    const hiddenValue = value;
    let f = (z80.regs.f & Flag.C) | Flag.H | (hiddenValue & (Flag.X3 | Flag.X5));
    if ((value & 0x08) === 0) {
        f |= Flag.P | Flag.Z;
    }
    z80.regs.f = f;
});
fillMap.set(0x5A, (z80) => {
    const value = z80.regs.d;
    const hiddenValue = value;
    let f = (z80.regs.f & Flag.C) | Flag.H | (hiddenValue & (Flag.X3 | Flag.X5));
    if ((value & 0x08) === 0) {
        f |= Flag.P | Flag.Z;
    }
    z80.regs.f = f;
});
fillMap.set(0x5B, (z80) => {
    const value = z80.regs.e;
    const hiddenValue = value;
    let f = (z80.regs.f & Flag.C) | Flag.H | (hiddenValue & (Flag.X3 | Flag.X5));
    if ((value & 0x08) === 0) {
        f |= Flag.P | Flag.Z;
    }
    z80.regs.f = f;
});
fillMap.set(0x5C, (z80) => {
    const value = z80.regs.h;
    const hiddenValue = value;
    let f = (z80.regs.f & Flag.C) | Flag.H | (hiddenValue & (Flag.X3 | Flag.X5));
    if ((value & 0x08) === 0) {
        f |= Flag.P | Flag.Z;
    }
    z80.regs.f = f;
});
fillMap.set(0x5D, (z80) => {
    const value = z80.regs.l;
    const hiddenValue = value;
    let f = (z80.regs.f & Flag.C) | Flag.H | (hiddenValue & (Flag.X3 | Flag.X5));
    if ((value & 0x08) === 0) {
        f |= Flag.P | Flag.Z;
    }
    z80.regs.f = f;
});
fillMap.set(0x5E, (z80) => {
    const value = z80.readByte(z80.regs.hl);
    const hiddenValue = hi(z80.regs.memptr);
    z80.incTStateCount(1);
    let f = (z80.regs.f & Flag.C) | Flag.H | (hiddenValue & (Flag.X3 | Flag.X5));
    if ((value & 0x08) === 0) {
        f |= Flag.P | Flag.Z;
    }
    z80.regs.f = f;
});
fillMap.set(0x5F, (z80) => {
    const value = z80.regs.a;
    const hiddenValue = value;
    let f = (z80.regs.f & Flag.C) | Flag.H | (hiddenValue & (Flag.X3 | Flag.X5));
    if ((value & 0x08) === 0) {
        f |= Flag.P | Flag.Z;
    }
    z80.regs.f = f;
});
fillMap.set(0x60, (z80) => {
    const value = z80.regs.b;
    const hiddenValue = value;
    let f = (z80.regs.f & Flag.C) | Flag.H | (hiddenValue & (Flag.X3 | Flag.X5));
    if ((value & 0x10) === 0) {
        f |= Flag.P | Flag.Z;
    }
    z80.regs.f = f;
});
fillMap.set(0x61, (z80) => {
    const value = z80.regs.c;
    const hiddenValue = value;
    let f = (z80.regs.f & Flag.C) | Flag.H | (hiddenValue & (Flag.X3 | Flag.X5));
    if ((value & 0x10) === 0) {
        f |= Flag.P | Flag.Z;
    }
    z80.regs.f = f;
});
fillMap.set(0x62, (z80) => {
    const value = z80.regs.d;
    const hiddenValue = value;
    let f = (z80.regs.f & Flag.C) | Flag.H | (hiddenValue & (Flag.X3 | Flag.X5));
    if ((value & 0x10) === 0) {
        f |= Flag.P | Flag.Z;
    }
    z80.regs.f = f;
});
fillMap.set(0x63, (z80) => {
    const value = z80.regs.e;
    const hiddenValue = value;
    let f = (z80.regs.f & Flag.C) | Flag.H | (hiddenValue & (Flag.X3 | Flag.X5));
    if ((value & 0x10) === 0) {
        f |= Flag.P | Flag.Z;
    }
    z80.regs.f = f;
});
fillMap.set(0x64, (z80) => {
    const value = z80.regs.h;
    const hiddenValue = value;
    let f = (z80.regs.f & Flag.C) | Flag.H | (hiddenValue & (Flag.X3 | Flag.X5));
    if ((value & 0x10) === 0) {
        f |= Flag.P | Flag.Z;
    }
    z80.regs.f = f;
});
fillMap.set(0x65, (z80) => {
    const value = z80.regs.l;
    const hiddenValue = value;
    let f = (z80.regs.f & Flag.C) | Flag.H | (hiddenValue & (Flag.X3 | Flag.X5));
    if ((value & 0x10) === 0) {
        f |= Flag.P | Flag.Z;
    }
    z80.regs.f = f;
});
fillMap.set(0x66, (z80) => {
    const value = z80.readByte(z80.regs.hl);
    const hiddenValue = hi(z80.regs.memptr);
    z80.incTStateCount(1);
    let f = (z80.regs.f & Flag.C) | Flag.H | (hiddenValue & (Flag.X3 | Flag.X5));
    if ((value & 0x10) === 0) {
        f |= Flag.P | Flag.Z;
    }
    z80.regs.f = f;
});
fillMap.set(0x67, (z80) => {
    const value = z80.regs.a;
    const hiddenValue = value;
    let f = (z80.regs.f & Flag.C) | Flag.H | (hiddenValue & (Flag.X3 | Flag.X5));
    if ((value & 0x10) === 0) {
        f |= Flag.P | Flag.Z;
    }
    z80.regs.f = f;
});
fillMap.set(0x68, (z80) => {
    const value = z80.regs.b;
    const hiddenValue = value;
    let f = (z80.regs.f & Flag.C) | Flag.H | (hiddenValue & (Flag.X3 | Flag.X5));
    if ((value & 0x20) === 0) {
        f |= Flag.P | Flag.Z;
    }
    z80.regs.f = f;
});
fillMap.set(0x69, (z80) => {
    const value = z80.regs.c;
    const hiddenValue = value;
    let f = (z80.regs.f & Flag.C) | Flag.H | (hiddenValue & (Flag.X3 | Flag.X5));
    if ((value & 0x20) === 0) {
        f |= Flag.P | Flag.Z;
    }
    z80.regs.f = f;
});
fillMap.set(0x6A, (z80) => {
    const value = z80.regs.d;
    const hiddenValue = value;
    let f = (z80.regs.f & Flag.C) | Flag.H | (hiddenValue & (Flag.X3 | Flag.X5));
    if ((value & 0x20) === 0) {
        f |= Flag.P | Flag.Z;
    }
    z80.regs.f = f;
});
fillMap.set(0x6B, (z80) => {
    const value = z80.regs.e;
    const hiddenValue = value;
    let f = (z80.regs.f & Flag.C) | Flag.H | (hiddenValue & (Flag.X3 | Flag.X5));
    if ((value & 0x20) === 0) {
        f |= Flag.P | Flag.Z;
    }
    z80.regs.f = f;
});
fillMap.set(0x6C, (z80) => {
    const value = z80.regs.h;
    const hiddenValue = value;
    let f = (z80.regs.f & Flag.C) | Flag.H | (hiddenValue & (Flag.X3 | Flag.X5));
    if ((value & 0x20) === 0) {
        f |= Flag.P | Flag.Z;
    }
    z80.regs.f = f;
});
fillMap.set(0x6D, (z80) => {
    const value = z80.regs.l;
    const hiddenValue = value;
    let f = (z80.regs.f & Flag.C) | Flag.H | (hiddenValue & (Flag.X3 | Flag.X5));
    if ((value & 0x20) === 0) {
        f |= Flag.P | Flag.Z;
    }
    z80.regs.f = f;
});
fillMap.set(0x6E, (z80) => {
    const value = z80.readByte(z80.regs.hl);
    const hiddenValue = hi(z80.regs.memptr);
    z80.incTStateCount(1);
    let f = (z80.regs.f & Flag.C) | Flag.H | (hiddenValue & (Flag.X3 | Flag.X5));
    if ((value & 0x20) === 0) {
        f |= Flag.P | Flag.Z;
    }
    z80.regs.f = f;
});
fillMap.set(0x6F, (z80) => {
    const value = z80.regs.a;
    const hiddenValue = value;
    let f = (z80.regs.f & Flag.C) | Flag.H | (hiddenValue & (Flag.X3 | Flag.X5));
    if ((value & 0x20) === 0) {
        f |= Flag.P | Flag.Z;
    }
    z80.regs.f = f;
});
fillMap.set(0x70, (z80) => {
    const value = z80.regs.b;
    const hiddenValue = value;
    let f = (z80.regs.f & Flag.C) | Flag.H | (hiddenValue & (Flag.X3 | Flag.X5));
    if ((value & 0x40) === 0) {
        f |= Flag.P | Flag.Z;
    }
    z80.regs.f = f;
});
fillMap.set(0x71, (z80) => {
    const value = z80.regs.c;
    const hiddenValue = value;
    let f = (z80.regs.f & Flag.C) | Flag.H | (hiddenValue & (Flag.X3 | Flag.X5));
    if ((value & 0x40) === 0) {
        f |= Flag.P | Flag.Z;
    }
    z80.regs.f = f;
});
fillMap.set(0x72, (z80) => {
    const value = z80.regs.d;
    const hiddenValue = value;
    let f = (z80.regs.f & Flag.C) | Flag.H | (hiddenValue & (Flag.X3 | Flag.X5));
    if ((value & 0x40) === 0) {
        f |= Flag.P | Flag.Z;
    }
    z80.regs.f = f;
});
fillMap.set(0x73, (z80) => {
    const value = z80.regs.e;
    const hiddenValue = value;
    let f = (z80.regs.f & Flag.C) | Flag.H | (hiddenValue & (Flag.X3 | Flag.X5));
    if ((value & 0x40) === 0) {
        f |= Flag.P | Flag.Z;
    }
    z80.regs.f = f;
});
fillMap.set(0x74, (z80) => {
    const value = z80.regs.h;
    const hiddenValue = value;
    let f = (z80.regs.f & Flag.C) | Flag.H | (hiddenValue & (Flag.X3 | Flag.X5));
    if ((value & 0x40) === 0) {
        f |= Flag.P | Flag.Z;
    }
    z80.regs.f = f;
});
fillMap.set(0x75, (z80) => {
    const value = z80.regs.l;
    const hiddenValue = value;
    let f = (z80.regs.f & Flag.C) | Flag.H | (hiddenValue & (Flag.X3 | Flag.X5));
    if ((value & 0x40) === 0) {
        f |= Flag.P | Flag.Z;
    }
    z80.regs.f = f;
});
fillMap.set(0x76, (z80) => {
    const value = z80.readByte(z80.regs.hl);
    const hiddenValue = hi(z80.regs.memptr);
    z80.incTStateCount(1);
    let f = (z80.regs.f & Flag.C) | Flag.H | (hiddenValue & (Flag.X3 | Flag.X5));
    if ((value & 0x40) === 0) {
        f |= Flag.P | Flag.Z;
    }
    z80.regs.f = f;
});
fillMap.set(0x77, (z80) => {
    const value = z80.regs.a;
    const hiddenValue = value;
    let f = (z80.regs.f & Flag.C) | Flag.H | (hiddenValue & (Flag.X3 | Flag.X5));
    if ((value & 0x40) === 0) {
        f |= Flag.P | Flag.Z;
    }
    z80.regs.f = f;
});
fillMap.set(0x78, (z80) => {
    const value = z80.regs.b;
    const hiddenValue = value;
    let f = (z80.regs.f & Flag.C) | Flag.H | (hiddenValue & (Flag.X3 | Flag.X5));
    if ((value & 0x80) === 0) {
        f |= Flag.P | Flag.Z;
    }
    if ((value & 0x80) !== 0) {
        f |= Flag.S;
    }
    z80.regs.f = f;
});
fillMap.set(0x79, (z80) => {
    const value = z80.regs.c;
    const hiddenValue = value;
    let f = (z80.regs.f & Flag.C) | Flag.H | (hiddenValue & (Flag.X3 | Flag.X5));
    if ((value & 0x80) === 0) {
        f |= Flag.P | Flag.Z;
    }
    if ((value & 0x80) !== 0) {
        f |= Flag.S;
    }
    z80.regs.f = f;
});
fillMap.set(0x7A, (z80) => {
    const value = z80.regs.d;
    const hiddenValue = value;
    let f = (z80.regs.f & Flag.C) | Flag.H | (hiddenValue & (Flag.X3 | Flag.X5));
    if ((value & 0x80) === 0) {
        f |= Flag.P | Flag.Z;
    }
    if ((value & 0x80) !== 0) {
        f |= Flag.S;
    }
    z80.regs.f = f;
});
fillMap.set(0x7B, (z80) => {
    const value = z80.regs.e;
    const hiddenValue = value;
    let f = (z80.regs.f & Flag.C) | Flag.H | (hiddenValue & (Flag.X3 | Flag.X5));
    if ((value & 0x80) === 0) {
        f |= Flag.P | Flag.Z;
    }
    if ((value & 0x80) !== 0) {
        f |= Flag.S;
    }
    z80.regs.f = f;
});
fillMap.set(0x7C, (z80) => {
    const value = z80.regs.h;
    const hiddenValue = value;
    let f = (z80.regs.f & Flag.C) | Flag.H | (hiddenValue & (Flag.X3 | Flag.X5));
    if ((value & 0x80) === 0) {
        f |= Flag.P | Flag.Z;
    }
    if ((value & 0x80) !== 0) {
        f |= Flag.S;
    }
    z80.regs.f = f;
});
fillMap.set(0x7D, (z80) => {
    const value = z80.regs.l;
    const hiddenValue = value;
    let f = (z80.regs.f & Flag.C) | Flag.H | (hiddenValue & (Flag.X3 | Flag.X5));
    if ((value & 0x80) === 0) {
        f |= Flag.P | Flag.Z;
    }
    if ((value & 0x80) !== 0) {
        f |= Flag.S;
    }
    z80.regs.f = f;
});
fillMap.set(0x7E, (z80) => {
    const value = z80.readByte(z80.regs.hl);
    const hiddenValue = hi(z80.regs.memptr);
    z80.incTStateCount(1);
    let f = (z80.regs.f & Flag.C) | Flag.H | (hiddenValue & (Flag.X3 | Flag.X5));
    if ((value & 0x80) === 0) {
        f |= Flag.P | Flag.Z;
    }
    if ((value & 0x80) !== 0) {
        f |= Flag.S;
    }
    z80.regs.f = f;
});
fillMap.set(0x7F, (z80) => {
    const value = z80.regs.a;
    const hiddenValue = value;
    let f = (z80.regs.f & Flag.C) | Flag.H | (hiddenValue & (Flag.X3 | Flag.X5));
    if ((value & 0x80) === 0) {
        f |= Flag.P | Flag.Z;
    }
    if ((value & 0x80) !== 0) {
        f |= Flag.S;
    }
    z80.regs.f = f;
});
fillMap.set(0x80, (z80) => {
    z80.regs.b &= 0xFE;
});
fillMap.set(0x81, (z80) => {
    z80.regs.c &= 0xFE;
});
fillMap.set(0x82, (z80) => {
    z80.regs.d &= 0xFE;
});
fillMap.set(0x83, (z80) => {
    z80.regs.e &= 0xFE;
});
fillMap.set(0x84, (z80) => {
    z80.regs.h &= 0xFE;
});
fillMap.set(0x85, (z80) => {
    z80.regs.l &= 0xFE;
});
fillMap.set(0x86, (z80) => {
    const value = z80.readByte(z80.regs.hl);
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.hl, value & 0xFE);
});
fillMap.set(0x87, (z80) => {
    z80.regs.a &= 0xFE;
});
fillMap.set(0x88, (z80) => {
    z80.regs.b &= 0xFD;
});
fillMap.set(0x89, (z80) => {
    z80.regs.c &= 0xFD;
});
fillMap.set(0x8A, (z80) => {
    z80.regs.d &= 0xFD;
});
fillMap.set(0x8B, (z80) => {
    z80.regs.e &= 0xFD;
});
fillMap.set(0x8C, (z80) => {
    z80.regs.h &= 0xFD;
});
fillMap.set(0x8D, (z80) => {
    z80.regs.l &= 0xFD;
});
fillMap.set(0x8E, (z80) => {
    const value = z80.readByte(z80.regs.hl);
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.hl, value & 0xFD);
});
fillMap.set(0x8F, (z80) => {
    z80.regs.a &= 0xFD;
});
fillMap.set(0x90, (z80) => {
    z80.regs.b &= 0xFB;
});
fillMap.set(0x91, (z80) => {
    z80.regs.c &= 0xFB;
});
fillMap.set(0x92, (z80) => {
    z80.regs.d &= 0xFB;
});
fillMap.set(0x93, (z80) => {
    z80.regs.e &= 0xFB;
});
fillMap.set(0x94, (z80) => {
    z80.regs.h &= 0xFB;
});
fillMap.set(0x95, (z80) => {
    z80.regs.l &= 0xFB;
});
fillMap.set(0x96, (z80) => {
    const value = z80.readByte(z80.regs.hl);
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.hl, value & 0xFB);
});
fillMap.set(0x97, (z80) => {
    z80.regs.a &= 0xFB;
});
fillMap.set(0x98, (z80) => {
    z80.regs.b &= 0xF7;
});
fillMap.set(0x99, (z80) => {
    z80.regs.c &= 0xF7;
});
fillMap.set(0x9A, (z80) => {
    z80.regs.d &= 0xF7;
});
fillMap.set(0x9B, (z80) => {
    z80.regs.e &= 0xF7;
});
fillMap.set(0x9C, (z80) => {
    z80.regs.h &= 0xF7;
});
fillMap.set(0x9D, (z80) => {
    z80.regs.l &= 0xF7;
});
fillMap.set(0x9E, (z80) => {
    const value = z80.readByte(z80.regs.hl);
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.hl, value & 0xF7);
});
fillMap.set(0x9F, (z80) => {
    z80.regs.a &= 0xF7;
});
fillMap.set(0xA0, (z80) => {
    z80.regs.b &= 0xEF;
});
fillMap.set(0xA1, (z80) => {
    z80.regs.c &= 0xEF;
});
fillMap.set(0xA2, (z80) => {
    z80.regs.d &= 0xEF;
});
fillMap.set(0xA3, (z80) => {
    z80.regs.e &= 0xEF;
});
fillMap.set(0xA4, (z80) => {
    z80.regs.h &= 0xEF;
});
fillMap.set(0xA5, (z80) => {
    z80.regs.l &= 0xEF;
});
fillMap.set(0xA6, (z80) => {
    const value = z80.readByte(z80.regs.hl);
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.hl, value & 0xEF);
});
fillMap.set(0xA7, (z80) => {
    z80.regs.a &= 0xEF;
});
fillMap.set(0xA8, (z80) => {
    z80.regs.b &= 0xDF;
});
fillMap.set(0xA9, (z80) => {
    z80.regs.c &= 0xDF;
});
fillMap.set(0xAA, (z80) => {
    z80.regs.d &= 0xDF;
});
fillMap.set(0xAB, (z80) => {
    z80.regs.e &= 0xDF;
});
fillMap.set(0xAC, (z80) => {
    z80.regs.h &= 0xDF;
});
fillMap.set(0xAD, (z80) => {
    z80.regs.l &= 0xDF;
});
fillMap.set(0xAE, (z80) => {
    const value = z80.readByte(z80.regs.hl);
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.hl, value & 0xDF);
});
fillMap.set(0xAF, (z80) => {
    z80.regs.a &= 0xDF;
});
fillMap.set(0xB0, (z80) => {
    z80.regs.b &= 0xBF;
});
fillMap.set(0xB1, (z80) => {
    z80.regs.c &= 0xBF;
});
fillMap.set(0xB2, (z80) => {
    z80.regs.d &= 0xBF;
});
fillMap.set(0xB3, (z80) => {
    z80.regs.e &= 0xBF;
});
fillMap.set(0xB4, (z80) => {
    z80.regs.h &= 0xBF;
});
fillMap.set(0xB5, (z80) => {
    z80.regs.l &= 0xBF;
});
fillMap.set(0xB6, (z80) => {
    const value = z80.readByte(z80.regs.hl);
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.hl, value & 0xBF);
});
fillMap.set(0xB7, (z80) => {
    z80.regs.a &= 0xBF;
});
fillMap.set(0xB8, (z80) => {
    z80.regs.b &= 0x7F;
});
fillMap.set(0xB9, (z80) => {
    z80.regs.c &= 0x7F;
});
fillMap.set(0xBA, (z80) => {
    z80.regs.d &= 0x7F;
});
fillMap.set(0xBB, (z80) => {
    z80.regs.e &= 0x7F;
});
fillMap.set(0xBC, (z80) => {
    z80.regs.h &= 0x7F;
});
fillMap.set(0xBD, (z80) => {
    z80.regs.l &= 0x7F;
});
fillMap.set(0xBE, (z80) => {
    const value = z80.readByte(z80.regs.hl);
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.hl, value & 0x7F);
});
fillMap.set(0xBF, (z80) => {
    z80.regs.a &= 0x7F;
});
fillMap.set(0xC0, (z80) => {
    z80.regs.b |= 0x01;
});
fillMap.set(0xC1, (z80) => {
    z80.regs.c |= 0x01;
});
fillMap.set(0xC2, (z80) => {
    z80.regs.d |= 0x01;
});
fillMap.set(0xC3, (z80) => {
    z80.regs.e |= 0x01;
});
fillMap.set(0xC4, (z80) => {
    z80.regs.h |= 0x01;
});
fillMap.set(0xC5, (z80) => {
    z80.regs.l |= 0x01;
});
fillMap.set(0xC6, (z80) => {
    const value = z80.readByte(z80.regs.hl);
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.hl, value | 0x01);
});
fillMap.set(0xC7, (z80) => {
    z80.regs.a |= 0x01;
});
fillMap.set(0xC8, (z80) => {
    z80.regs.b |= 0x02;
});
fillMap.set(0xC9, (z80) => {
    z80.regs.c |= 0x02;
});
fillMap.set(0xCA, (z80) => {
    z80.regs.d |= 0x02;
});
fillMap.set(0xCB, (z80) => {
    z80.regs.e |= 0x02;
});
fillMap.set(0xCC, (z80) => {
    z80.regs.h |= 0x02;
});
fillMap.set(0xCD, (z80) => {
    z80.regs.l |= 0x02;
});
fillMap.set(0xCE, (z80) => {
    const value = z80.readByte(z80.regs.hl);
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.hl, value | 0x02);
});
fillMap.set(0xCF, (z80) => {
    z80.regs.a |= 0x02;
});
fillMap.set(0xD0, (z80) => {
    z80.regs.b |= 0x04;
});
fillMap.set(0xD1, (z80) => {
    z80.regs.c |= 0x04;
});
fillMap.set(0xD2, (z80) => {
    z80.regs.d |= 0x04;
});
fillMap.set(0xD3, (z80) => {
    z80.regs.e |= 0x04;
});
fillMap.set(0xD4, (z80) => {
    z80.regs.h |= 0x04;
});
fillMap.set(0xD5, (z80) => {
    z80.regs.l |= 0x04;
});
fillMap.set(0xD6, (z80) => {
    const value = z80.readByte(z80.regs.hl);
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.hl, value | 0x04);
});
fillMap.set(0xD7, (z80) => {
    z80.regs.a |= 0x04;
});
fillMap.set(0xD8, (z80) => {
    z80.regs.b |= 0x08;
});
fillMap.set(0xD9, (z80) => {
    z80.regs.c |= 0x08;
});
fillMap.set(0xDA, (z80) => {
    z80.regs.d |= 0x08;
});
fillMap.set(0xDB, (z80) => {
    z80.regs.e |= 0x08;
});
fillMap.set(0xDC, (z80) => {
    z80.regs.h |= 0x08;
});
fillMap.set(0xDD, (z80) => {
    z80.regs.l |= 0x08;
});
fillMap.set(0xDE, (z80) => {
    const value = z80.readByte(z80.regs.hl);
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.hl, value | 0x08);
});
fillMap.set(0xDF, (z80) => {
    z80.regs.a |= 0x08;
});
fillMap.set(0xE0, (z80) => {
    z80.regs.b |= 0x10;
});
fillMap.set(0xE1, (z80) => {
    z80.regs.c |= 0x10;
});
fillMap.set(0xE2, (z80) => {
    z80.regs.d |= 0x10;
});
fillMap.set(0xE3, (z80) => {
    z80.regs.e |= 0x10;
});
fillMap.set(0xE4, (z80) => {
    z80.regs.h |= 0x10;
});
fillMap.set(0xE5, (z80) => {
    z80.regs.l |= 0x10;
});
fillMap.set(0xE6, (z80) => {
    const value = z80.readByte(z80.regs.hl);
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.hl, value | 0x10);
});
fillMap.set(0xE7, (z80) => {
    z80.regs.a |= 0x10;
});
fillMap.set(0xE8, (z80) => {
    z80.regs.b |= 0x20;
});
fillMap.set(0xE9, (z80) => {
    z80.regs.c |= 0x20;
});
fillMap.set(0xEA, (z80) => {
    z80.regs.d |= 0x20;
});
fillMap.set(0xEB, (z80) => {
    z80.regs.e |= 0x20;
});
fillMap.set(0xEC, (z80) => {
    z80.regs.h |= 0x20;
});
fillMap.set(0xED, (z80) => {
    z80.regs.l |= 0x20;
});
fillMap.set(0xEE, (z80) => {
    const value = z80.readByte(z80.regs.hl);
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.hl, value | 0x20);
});
fillMap.set(0xEF, (z80) => {
    z80.regs.a |= 0x20;
});
fillMap.set(0xF0, (z80) => {
    z80.regs.b |= 0x40;
});
fillMap.set(0xF1, (z80) => {
    z80.regs.c |= 0x40;
});
fillMap.set(0xF2, (z80) => {
    z80.regs.d |= 0x40;
});
fillMap.set(0xF3, (z80) => {
    z80.regs.e |= 0x40;
});
fillMap.set(0xF4, (z80) => {
    z80.regs.h |= 0x40;
});
fillMap.set(0xF5, (z80) => {
    z80.regs.l |= 0x40;
});
fillMap.set(0xF6, (z80) => {
    const value = z80.readByte(z80.regs.hl);
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.hl, value | 0x40);
});
fillMap.set(0xF7, (z80) => {
    z80.regs.a |= 0x40;
});
fillMap.set(0xF8, (z80) => {
    z80.regs.b |= 0x80;
});
fillMap.set(0xF9, (z80) => {
    z80.regs.c |= 0x80;
});
fillMap.set(0xFA, (z80) => {
    z80.regs.d |= 0x80;
});
fillMap.set(0xFB, (z80) => {
    z80.regs.e |= 0x80;
});
fillMap.set(0xFC, (z80) => {
    z80.regs.h |= 0x80;
});
fillMap.set(0xFD, (z80) => {
    z80.regs.l |= 0x80;
});
fillMap.set(0xFE, (z80) => {
    const value = z80.readByte(z80.regs.hl);
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.hl, value | 0x80);
});
fillMap.set(0xFF, (z80) => {
    z80.regs.a |= 0x80;
});
const decodeMapDD = new Map();
fillMap = decodeMapDD;
// The contents of this map are auto-generated by GenerateOpcodes.ts.
fillMap.set(0x09, (z80) => {
    let value;
    z80.incTStateCount(7);
    value = z80.regs.bc;
    let result = z80.regs.ix + value;
    const lookup = (((z80.regs.ix & 0x0800) >> 11) |
        ((value & 0x0800) >> 10) |
        ((result & 0x0800) >> 9)) & 0xFF;
    z80.regs.memptr = inc16(z80.regs.ix);
    z80.regs.ix = result & 0xFFFF;
    z80.regs.f = (z80.regs.f & (Flag.V | Flag.Z | Flag.S)) | ((result & 0x10000) !== 0 ? Flag.C : 0) | ((result >> 8) & (Flag.X3 | Flag.X5)) | halfCarryAddTable[lookup];
});
fillMap.set(0x19, (z80) => {
    let value;
    z80.incTStateCount(7);
    value = z80.regs.de;
    let result = z80.regs.ix + value;
    const lookup = (((z80.regs.ix & 0x0800) >> 11) |
        ((value & 0x0800) >> 10) |
        ((result & 0x0800) >> 9)) & 0xFF;
    z80.regs.memptr = inc16(z80.regs.ix);
    z80.regs.ix = result & 0xFFFF;
    z80.regs.f = (z80.regs.f & (Flag.V | Flag.Z | Flag.S)) | ((result & 0x10000) !== 0 ? Flag.C : 0) | ((result >> 8) & (Flag.X3 | Flag.X5)) | halfCarryAddTable[lookup];
});
fillMap.set(0x21, (z80) => {
    let value;
    value = z80.readByte(z80.regs.pc);
    z80.regs.pc = inc16(z80.regs.pc);
    value = word(z80.readByte(z80.regs.pc), value);
    z80.regs.pc = inc16(z80.regs.pc);
    z80.regs.ix = value;
});
fillMap.set(0x22, (z80) => {
    let value;
    value = z80.regs.ix;
    let addr = z80.readByte(z80.regs.pc);
    z80.regs.pc = inc16(z80.regs.pc);
    addr = word(z80.readByte(z80.regs.pc), addr);
    z80.regs.pc = inc16(z80.regs.pc);
    z80.writeByte(addr, lo(value));
    addr = inc16(addr);
    z80.regs.memptr = addr;
    z80.writeByte(addr, hi(value));
});
fillMap.set(0x23, (z80) => {
    let value;
    value = z80.regs.ix;
    const oldValue = value;
    z80.incTStateCount(2);
    value = inc16(value);
    z80.regs.ix = value;
});
fillMap.set(0x24, (z80) => {
    let value;
    value = z80.regs.ixh;
    const oldValue = value;
    value = inc8(value);
    z80.regs.f = (z80.regs.f & Flag.C) | (value === 0x80 ? Flag.V : 0) | ((value & 0x0F) !== 0 ? 0 : Flag.H) | z80.sz53Table[value];
    z80.regs.ixh = value;
});
fillMap.set(0x25, (z80) => {
    let value;
    value = z80.regs.ixh;
    const oldValue = value;
    value = dec8(value);
    z80.regs.f = (z80.regs.f & Flag.C) | (value === 0x7F ? Flag.V : 0) | ((oldValue & 0x0F) !== 0 ? 0 : Flag.H) | Flag.N | z80.sz53Table[value];
    z80.regs.ixh = value;
});
fillMap.set(0x26, (z80) => {
    let value;
    value = z80.readByte(z80.regs.pc);
    z80.regs.pc = inc16(z80.regs.pc);
    z80.regs.ixh = value;
});
fillMap.set(0x29, (z80) => {
    let value;
    z80.incTStateCount(7);
    value = z80.regs.ix;
    let result = z80.regs.ix + value;
    const lookup = (((z80.regs.ix & 0x0800) >> 11) |
        ((value & 0x0800) >> 10) |
        ((result & 0x0800) >> 9)) & 0xFF;
    z80.regs.memptr = inc16(z80.regs.ix);
    z80.regs.ix = result & 0xFFFF;
    z80.regs.f = (z80.regs.f & (Flag.V | Flag.Z | Flag.S)) | ((result & 0x10000) !== 0 ? Flag.C : 0) | ((result >> 8) & (Flag.X3 | Flag.X5)) | halfCarryAddTable[lookup];
});
fillMap.set(0x2A, (z80) => {
    let value;
    let addr = z80.readByte(z80.regs.pc);
    z80.regs.pc = inc16(z80.regs.pc);
    addr = word(z80.readByte(z80.regs.pc), addr);
    z80.regs.pc = inc16(z80.regs.pc);
    value = z80.readByte(addr);
    z80.regs.memptr = inc16(addr);
    value = word(z80.readByte(z80.regs.memptr), value);
    z80.regs.ix = value;
});
fillMap.set(0x2B, (z80) => {
    let value;
    value = z80.regs.ix;
    const oldValue = value;
    z80.incTStateCount(2);
    value = dec16(value);
    z80.regs.ix = value;
});
fillMap.set(0x2C, (z80) => {
    let value;
    value = z80.regs.ixl;
    const oldValue = value;
    value = inc8(value);
    z80.regs.f = (z80.regs.f & Flag.C) | (value === 0x80 ? Flag.V : 0) | ((value & 0x0F) !== 0 ? 0 : Flag.H) | z80.sz53Table[value];
    z80.regs.ixl = value;
});
fillMap.set(0x2D, (z80) => {
    let value;
    value = z80.regs.ixl;
    const oldValue = value;
    value = dec8(value);
    z80.regs.f = (z80.regs.f & Flag.C) | (value === 0x7F ? Flag.V : 0) | ((oldValue & 0x0F) !== 0 ? 0 : Flag.H) | Flag.N | z80.sz53Table[value];
    z80.regs.ixl = value;
});
fillMap.set(0x2E, (z80) => {
    let value;
    value = z80.readByte(z80.regs.pc);
    z80.regs.pc = inc16(z80.regs.pc);
    z80.regs.ixl = value;
});
fillMap.set(0x34, (z80) => {
    let value;
    const offset = z80.readByte(z80.regs.pc);
    z80.incTStateCount(5);
    z80.regs.pc = inc16(z80.regs.pc);
    z80.regs.memptr = add16(z80.regs.ix, signedByte(offset));
    value = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    const oldValue = value;
    value = inc8(value);
    z80.regs.f = (z80.regs.f & Flag.C) | (value === 0x80 ? Flag.V : 0) | ((value & 0x0F) !== 0 ? 0 : Flag.H) | z80.sz53Table[value];
    z80.writeByte(z80.regs.memptr, value);
});
fillMap.set(0x35, (z80) => {
    let value;
    const offset = z80.readByte(z80.regs.pc);
    z80.incTStateCount(5);
    z80.regs.pc = inc16(z80.regs.pc);
    z80.regs.memptr = add16(z80.regs.ix, signedByte(offset));
    value = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    const oldValue = value;
    value = dec8(value);
    z80.regs.f = (z80.regs.f & Flag.C) | (value === 0x7F ? Flag.V : 0) | ((oldValue & 0x0F) !== 0 ? 0 : Flag.H) | Flag.N | z80.sz53Table[value];
    z80.writeByte(z80.regs.memptr, value);
});
fillMap.set(0x36, (z80) => {
    const dd = z80.readByte(z80.regs.pc);
    z80.regs.pc = inc16(z80.regs.pc);
    let value;
    value = z80.readByte(z80.regs.pc);
    z80.incTStateCount(2);
    z80.regs.pc = inc16(z80.regs.pc);
    z80.regs.memptr = (z80.regs.ix + signedByte(dd)) & 0xFFFF;
    z80.writeByte(z80.regs.memptr, value);
});
fillMap.set(0x39, (z80) => {
    let value;
    z80.incTStateCount(7);
    value = z80.regs.sp;
    let result = z80.regs.ix + value;
    const lookup = (((z80.regs.ix & 0x0800) >> 11) |
        ((value & 0x0800) >> 10) |
        ((result & 0x0800) >> 9)) & 0xFF;
    z80.regs.memptr = inc16(z80.regs.ix);
    z80.regs.ix = result & 0xFFFF;
    z80.regs.f = (z80.regs.f & (Flag.V | Flag.Z | Flag.S)) | ((result & 0x10000) !== 0 ? Flag.C : 0) | ((result >> 8) & (Flag.X3 | Flag.X5)) | halfCarryAddTable[lookup];
});
fillMap.set(0x44, (z80) => {
    let value;
    value = z80.regs.ixh;
    z80.regs.b = value;
});
fillMap.set(0x45, (z80) => {
    let value;
    value = z80.regs.ixl;
    z80.regs.b = value;
});
fillMap.set(0x46, (z80) => {
    let value;
    value = z80.readByte(z80.regs.pc);
    z80.incTStateCount(5);
    z80.regs.pc = inc16(z80.regs.pc);
    z80.regs.memptr = (z80.regs.ix + signedByte(value)) & 0xFFFF;
    value = z80.readByte(z80.regs.memptr);
    z80.regs.b = value;
});
fillMap.set(0x4C, (z80) => {
    let value;
    value = z80.regs.ixh;
    z80.regs.c = value;
});
fillMap.set(0x4D, (z80) => {
    let value;
    value = z80.regs.ixl;
    z80.regs.c = value;
});
fillMap.set(0x4E, (z80) => {
    let value;
    value = z80.readByte(z80.regs.pc);
    z80.incTStateCount(5);
    z80.regs.pc = inc16(z80.regs.pc);
    z80.regs.memptr = (z80.regs.ix + signedByte(value)) & 0xFFFF;
    value = z80.readByte(z80.regs.memptr);
    z80.regs.c = value;
});
fillMap.set(0x54, (z80) => {
    let value;
    value = z80.regs.ixh;
    z80.regs.d = value;
});
fillMap.set(0x55, (z80) => {
    let value;
    value = z80.regs.ixl;
    z80.regs.d = value;
});
fillMap.set(0x56, (z80) => {
    let value;
    value = z80.readByte(z80.regs.pc);
    z80.incTStateCount(5);
    z80.regs.pc = inc16(z80.regs.pc);
    z80.regs.memptr = (z80.regs.ix + signedByte(value)) & 0xFFFF;
    value = z80.readByte(z80.regs.memptr);
    z80.regs.d = value;
});
fillMap.set(0x5C, (z80) => {
    let value;
    value = z80.regs.ixh;
    z80.regs.e = value;
});
fillMap.set(0x5D, (z80) => {
    let value;
    value = z80.regs.ixl;
    z80.regs.e = value;
});
fillMap.set(0x5E, (z80) => {
    let value;
    value = z80.readByte(z80.regs.pc);
    z80.incTStateCount(5);
    z80.regs.pc = inc16(z80.regs.pc);
    z80.regs.memptr = (z80.regs.ix + signedByte(value)) & 0xFFFF;
    value = z80.readByte(z80.regs.memptr);
    z80.regs.e = value;
});
fillMap.set(0x60, (z80) => {
    let value;
    value = z80.regs.b;
    z80.regs.ixh = value;
});
fillMap.set(0x61, (z80) => {
    let value;
    value = z80.regs.c;
    z80.regs.ixh = value;
});
fillMap.set(0x62, (z80) => {
    let value;
    value = z80.regs.d;
    z80.regs.ixh = value;
});
fillMap.set(0x63, (z80) => {
    let value;
    value = z80.regs.e;
    z80.regs.ixh = value;
});
fillMap.set(0x64, (z80) => {
    let value;
    value = z80.regs.ixh;
    z80.regs.ixh = value;
});
fillMap.set(0x65, (z80) => {
    let value;
    value = z80.regs.ixl;
    z80.regs.ixh = value;
});
fillMap.set(0x66, (z80) => {
    let value;
    value = z80.readByte(z80.regs.pc);
    z80.incTStateCount(5);
    z80.regs.pc = inc16(z80.regs.pc);
    z80.regs.memptr = (z80.regs.ix + signedByte(value)) & 0xFFFF;
    value = z80.readByte(z80.regs.memptr);
    z80.regs.h = value;
});
fillMap.set(0x67, (z80) => {
    let value;
    value = z80.regs.a;
    z80.regs.ixh = value;
});
fillMap.set(0x68, (z80) => {
    let value;
    value = z80.regs.b;
    z80.regs.ixl = value;
});
fillMap.set(0x69, (z80) => {
    let value;
    value = z80.regs.c;
    z80.regs.ixl = value;
});
fillMap.set(0x6A, (z80) => {
    let value;
    value = z80.regs.d;
    z80.regs.ixl = value;
});
fillMap.set(0x6B, (z80) => {
    let value;
    value = z80.regs.e;
    z80.regs.ixl = value;
});
fillMap.set(0x6C, (z80) => {
    let value;
    value = z80.regs.ixh;
    z80.regs.ixl = value;
});
fillMap.set(0x6D, (z80) => {
    let value;
    value = z80.regs.ixl;
    z80.regs.ixl = value;
});
fillMap.set(0x6E, (z80) => {
    let value;
    value = z80.readByte(z80.regs.pc);
    z80.incTStateCount(5);
    z80.regs.pc = inc16(z80.regs.pc);
    z80.regs.memptr = (z80.regs.ix + signedByte(value)) & 0xFFFF;
    value = z80.readByte(z80.regs.memptr);
    z80.regs.l = value;
});
fillMap.set(0x6F, (z80) => {
    let value;
    value = z80.regs.a;
    z80.regs.ixl = value;
});
fillMap.set(0x70, (z80) => {
    const dd = z80.readByte(z80.regs.pc);
    z80.incTStateCount(5);
    z80.regs.pc = inc16(z80.regs.pc);
    let value;
    value = z80.regs.b;
    z80.regs.memptr = (z80.regs.ix + signedByte(dd)) & 0xFFFF;
    z80.writeByte(z80.regs.memptr, value);
});
fillMap.set(0x71, (z80) => {
    const dd = z80.readByte(z80.regs.pc);
    z80.incTStateCount(5);
    z80.regs.pc = inc16(z80.regs.pc);
    let value;
    value = z80.regs.c;
    z80.regs.memptr = (z80.regs.ix + signedByte(dd)) & 0xFFFF;
    z80.writeByte(z80.regs.memptr, value);
});
fillMap.set(0x72, (z80) => {
    const dd = z80.readByte(z80.regs.pc);
    z80.incTStateCount(5);
    z80.regs.pc = inc16(z80.regs.pc);
    let value;
    value = z80.regs.d;
    z80.regs.memptr = (z80.regs.ix + signedByte(dd)) & 0xFFFF;
    z80.writeByte(z80.regs.memptr, value);
});
fillMap.set(0x73, (z80) => {
    const dd = z80.readByte(z80.regs.pc);
    z80.incTStateCount(5);
    z80.regs.pc = inc16(z80.regs.pc);
    let value;
    value = z80.regs.e;
    z80.regs.memptr = (z80.regs.ix + signedByte(dd)) & 0xFFFF;
    z80.writeByte(z80.regs.memptr, value);
});
fillMap.set(0x74, (z80) => {
    const dd = z80.readByte(z80.regs.pc);
    z80.incTStateCount(5);
    z80.regs.pc = inc16(z80.regs.pc);
    let value;
    value = z80.regs.h;
    z80.regs.memptr = (z80.regs.ix + signedByte(dd)) & 0xFFFF;
    z80.writeByte(z80.regs.memptr, value);
});
fillMap.set(0x75, (z80) => {
    const dd = z80.readByte(z80.regs.pc);
    z80.incTStateCount(5);
    z80.regs.pc = inc16(z80.regs.pc);
    let value;
    value = z80.regs.l;
    z80.regs.memptr = (z80.regs.ix + signedByte(dd)) & 0xFFFF;
    z80.writeByte(z80.regs.memptr, value);
});
fillMap.set(0x77, (z80) => {
    const dd = z80.readByte(z80.regs.pc);
    z80.incTStateCount(5);
    z80.regs.pc = inc16(z80.regs.pc);
    let value;
    value = z80.regs.a;
    z80.regs.memptr = (z80.regs.ix + signedByte(dd)) & 0xFFFF;
    z80.writeByte(z80.regs.memptr, value);
});
fillMap.set(0x7C, (z80) => {
    let value;
    value = z80.regs.ixh;
    z80.regs.a = value;
});
fillMap.set(0x7D, (z80) => {
    let value;
    value = z80.regs.ixl;
    z80.regs.a = value;
});
fillMap.set(0x7E, (z80) => {
    let value;
    value = z80.readByte(z80.regs.pc);
    z80.incTStateCount(5);
    z80.regs.pc = inc16(z80.regs.pc);
    z80.regs.memptr = (z80.regs.ix + signedByte(value)) & 0xFFFF;
    value = z80.readByte(z80.regs.memptr);
    z80.regs.a = value;
});
fillMap.set(0x84, (z80) => {
    let value;
    value = z80.regs.ixh;
    let result = add16(z80.regs.a, value);
    const lookup = (((z80.regs.a & 0x88) >> 3) |
        ((value & 0x88) >> 2) |
        ((result & 0x88) >> 1)) & 0xFF;
    z80.regs.a = result & 0xFF;
    z80.regs.f = (((result & 0x100) !== 0) ? Flag.C : 0) | halfCarryAddTable[lookup & 0x07] | overflowAddTable[lookup >> 4] | z80.sz53Table[z80.regs.a];
});
fillMap.set(0x85, (z80) => {
    let value;
    value = z80.regs.ixl;
    let result = add16(z80.regs.a, value);
    const lookup = (((z80.regs.a & 0x88) >> 3) |
        ((value & 0x88) >> 2) |
        ((result & 0x88) >> 1)) & 0xFF;
    z80.regs.a = result & 0xFF;
    z80.regs.f = (((result & 0x100) !== 0) ? Flag.C : 0) | halfCarryAddTable[lookup & 0x07] | overflowAddTable[lookup >> 4] | z80.sz53Table[z80.regs.a];
});
fillMap.set(0x86, (z80) => {
    let value;
    value = z80.readByte(z80.regs.pc);
    z80.incTStateCount(5);
    z80.regs.pc = inc16(z80.regs.pc);
    z80.regs.memptr = (z80.regs.ix + signedByte(value)) & 0xFFFF;
    value = z80.readByte(z80.regs.memptr);
    let result = add16(z80.regs.a, value);
    const lookup = (((z80.regs.a & 0x88) >> 3) |
        ((value & 0x88) >> 2) |
        ((result & 0x88) >> 1)) & 0xFF;
    z80.regs.a = result & 0xFF;
    z80.regs.f = (((result & 0x100) !== 0) ? Flag.C : 0) | halfCarryAddTable[lookup & 0x07] | overflowAddTable[lookup >> 4] | z80.sz53Table[z80.regs.a];
});
fillMap.set(0x8C, (z80) => {
    let value;
    value = z80.regs.ixh;
    let result = add16(z80.regs.a, value);
    if ((z80.regs.f & Flag.C) !== 0) {
        result = inc16(result);
    }
    const lookup = (((z80.regs.a & 0x88) >> 3) |
        ((value & 0x88) >> 2) |
        ((result & 0x88) >> 1)) & 0xFF;
    z80.regs.a = result & 0xFF;
    z80.regs.f = (((result & 0x100) !== 0) ? Flag.C : 0) | halfCarryAddTable[lookup & 0x07] | overflowAddTable[lookup >> 4] | z80.sz53Table[z80.regs.a];
});
fillMap.set(0x8D, (z80) => {
    let value;
    value = z80.regs.ixl;
    let result = add16(z80.regs.a, value);
    if ((z80.regs.f & Flag.C) !== 0) {
        result = inc16(result);
    }
    const lookup = (((z80.regs.a & 0x88) >> 3) |
        ((value & 0x88) >> 2) |
        ((result & 0x88) >> 1)) & 0xFF;
    z80.regs.a = result & 0xFF;
    z80.regs.f = (((result & 0x100) !== 0) ? Flag.C : 0) | halfCarryAddTable[lookup & 0x07] | overflowAddTable[lookup >> 4] | z80.sz53Table[z80.regs.a];
});
fillMap.set(0x8E, (z80) => {
    let value;
    value = z80.readByte(z80.regs.pc);
    z80.incTStateCount(5);
    z80.regs.pc = inc16(z80.regs.pc);
    z80.regs.memptr = (z80.regs.ix + signedByte(value)) & 0xFFFF;
    value = z80.readByte(z80.regs.memptr);
    let result = add16(z80.regs.a, value);
    if ((z80.regs.f & Flag.C) !== 0) {
        result = inc16(result);
    }
    const lookup = (((z80.regs.a & 0x88) >> 3) |
        ((value & 0x88) >> 2) |
        ((result & 0x88) >> 1)) & 0xFF;
    z80.regs.a = result & 0xFF;
    z80.regs.f = (((result & 0x100) !== 0) ? Flag.C : 0) | halfCarryAddTable[lookup & 0x07] | overflowAddTable[lookup >> 4] | z80.sz53Table[z80.regs.a];
});
fillMap.set(0x94, (z80) => {
    let value;
    value = z80.regs.ixh;
    let result = sub16(z80.regs.a, value);
    const lookup = (((z80.regs.a & 0x88) >> 3) |
        ((value & 0x88) >> 2) |
        ((result & 0x88) >> 1)) & 0xFF;
    z80.regs.a = result & 0xFF;
    z80.regs.f = (((result & 0x100) !== 0) ? Flag.C : 0) | Flag.N | halfCarrySubTable[lookup & 0x07] | overflowSubTable[lookup >> 4] | z80.sz53Table[z80.regs.a];
});
fillMap.set(0x95, (z80) => {
    let value;
    value = z80.regs.ixl;
    let result = sub16(z80.regs.a, value);
    const lookup = (((z80.regs.a & 0x88) >> 3) |
        ((value & 0x88) >> 2) |
        ((result & 0x88) >> 1)) & 0xFF;
    z80.regs.a = result & 0xFF;
    z80.regs.f = (((result & 0x100) !== 0) ? Flag.C : 0) | Flag.N | halfCarrySubTable[lookup & 0x07] | overflowSubTable[lookup >> 4] | z80.sz53Table[z80.regs.a];
});
fillMap.set(0x96, (z80) => {
    let value;
    value = z80.readByte(z80.regs.pc);
    z80.incTStateCount(5);
    z80.regs.pc = inc16(z80.regs.pc);
    z80.regs.memptr = (z80.regs.ix + signedByte(value)) & 0xFFFF;
    value = z80.readByte(z80.regs.memptr);
    let result = sub16(z80.regs.a, value);
    const lookup = (((z80.regs.a & 0x88) >> 3) |
        ((value & 0x88) >> 2) |
        ((result & 0x88) >> 1)) & 0xFF;
    z80.regs.a = result & 0xFF;
    z80.regs.f = (((result & 0x100) !== 0) ? Flag.C : 0) | Flag.N | halfCarrySubTable[lookup & 0x07] | overflowSubTable[lookup >> 4] | z80.sz53Table[z80.regs.a];
});
fillMap.set(0x9C, (z80) => {
    let value;
    value = z80.regs.ixh;
    let result = sub16(z80.regs.a, value);
    if ((z80.regs.f & Flag.C) !== 0) {
        result = dec16(result);
    }
    const lookup = (((z80.regs.a & 0x88) >> 3) |
        ((value & 0x88) >> 2) |
        ((result & 0x88) >> 1)) & 0xFF;
    z80.regs.a = result & 0xFF;
    z80.regs.f = (((result & 0x100) !== 0) ? Flag.C : 0) | Flag.N | halfCarrySubTable[lookup & 0x07] | overflowSubTable[lookup >> 4] | z80.sz53Table[z80.regs.a];
});
fillMap.set(0x9D, (z80) => {
    let value;
    value = z80.regs.ixl;
    let result = sub16(z80.regs.a, value);
    if ((z80.regs.f & Flag.C) !== 0) {
        result = dec16(result);
    }
    const lookup = (((z80.regs.a & 0x88) >> 3) |
        ((value & 0x88) >> 2) |
        ((result & 0x88) >> 1)) & 0xFF;
    z80.regs.a = result & 0xFF;
    z80.regs.f = (((result & 0x100) !== 0) ? Flag.C : 0) | Flag.N | halfCarrySubTable[lookup & 0x07] | overflowSubTable[lookup >> 4] | z80.sz53Table[z80.regs.a];
});
fillMap.set(0x9E, (z80) => {
    let value;
    value = z80.readByte(z80.regs.pc);
    z80.incTStateCount(5);
    z80.regs.pc = inc16(z80.regs.pc);
    z80.regs.memptr = (z80.regs.ix + signedByte(value)) & 0xFFFF;
    value = z80.readByte(z80.regs.memptr);
    let result = sub16(z80.regs.a, value);
    if ((z80.regs.f & Flag.C) !== 0) {
        result = dec16(result);
    }
    const lookup = (((z80.regs.a & 0x88) >> 3) |
        ((value & 0x88) >> 2) |
        ((result & 0x88) >> 1)) & 0xFF;
    z80.regs.a = result & 0xFF;
    z80.regs.f = (((result & 0x100) !== 0) ? Flag.C : 0) | Flag.N | halfCarrySubTable[lookup & 0x07] | overflowSubTable[lookup >> 4] | z80.sz53Table[z80.regs.a];
});
fillMap.set(0xA4, (z80) => {
    let value;
    value = z80.regs.ixh;
    z80.regs.a &= value;
    z80.regs.f = z80.sz53pTable[z80.regs.a];
    z80.regs.f |= Flag.H;
});
fillMap.set(0xA5, (z80) => {
    let value;
    value = z80.regs.ixl;
    z80.regs.a &= value;
    z80.regs.f = z80.sz53pTable[z80.regs.a];
    z80.regs.f |= Flag.H;
});
fillMap.set(0xA6, (z80) => {
    let value;
    value = z80.readByte(z80.regs.pc);
    z80.incTStateCount(5);
    z80.regs.pc = inc16(z80.regs.pc);
    z80.regs.memptr = (z80.regs.ix + signedByte(value)) & 0xFFFF;
    value = z80.readByte(z80.regs.memptr);
    z80.regs.a &= value;
    z80.regs.f = z80.sz53pTable[z80.regs.a];
    z80.regs.f |= Flag.H;
});
fillMap.set(0xAC, (z80) => {
    let value;
    value = z80.regs.ixh;
    z80.regs.a ^= value;
    z80.regs.f = z80.sz53pTable[z80.regs.a];
});
fillMap.set(0xAD, (z80) => {
    let value;
    value = z80.regs.ixl;
    z80.regs.a ^= value;
    z80.regs.f = z80.sz53pTable[z80.regs.a];
});
fillMap.set(0xAE, (z80) => {
    let value;
    value = z80.readByte(z80.regs.pc);
    z80.incTStateCount(5);
    z80.regs.pc = inc16(z80.regs.pc);
    z80.regs.memptr = (z80.regs.ix + signedByte(value)) & 0xFFFF;
    value = z80.readByte(z80.regs.memptr);
    z80.regs.a ^= value;
    z80.regs.f = z80.sz53pTable[z80.regs.a];
});
fillMap.set(0xB4, (z80) => {
    let value;
    value = z80.regs.ixh;
    z80.regs.a |= value;
    z80.regs.f = z80.sz53pTable[z80.regs.a];
});
fillMap.set(0xB5, (z80) => {
    let value;
    value = z80.regs.ixl;
    z80.regs.a |= value;
    z80.regs.f = z80.sz53pTable[z80.regs.a];
});
fillMap.set(0xB6, (z80) => {
    let value;
    value = z80.readByte(z80.regs.pc);
    z80.incTStateCount(5);
    z80.regs.pc = inc16(z80.regs.pc);
    z80.regs.memptr = (z80.regs.ix + signedByte(value)) & 0xFFFF;
    value = z80.readByte(z80.regs.memptr);
    z80.regs.a |= value;
    z80.regs.f = z80.sz53pTable[z80.regs.a];
});
fillMap.set(0xBC, (z80) => {
    let value;
    value = z80.regs.ixh;
    const diff = (z80.regs.a - value) & 0xFFFF;
    const lookup = (((z80.regs.a & 0x88) >> 3) |
        ((value & 0x88) >> 2) |
        ((diff & 0x88) >> 1)) & 0xFF;
    let f = Flag.N;
    if ((diff & 0x100) != 0)
        f |= Flag.C;
    if (diff == 0)
        f |= Flag.Z;
    f |= halfCarrySubTable[lookup & 0x07];
    f |= overflowSubTable[lookup >> 4];
    f |= value & (Flag.X3 | Flag.X5);
    f |= diff & Flag.S;
    z80.regs.af = word(z80.regs.a, f);
});
fillMap.set(0xBD, (z80) => {
    let value;
    value = z80.regs.ixl;
    const diff = (z80.regs.a - value) & 0xFFFF;
    const lookup = (((z80.regs.a & 0x88) >> 3) |
        ((value & 0x88) >> 2) |
        ((diff & 0x88) >> 1)) & 0xFF;
    let f = Flag.N;
    if ((diff & 0x100) != 0)
        f |= Flag.C;
    if (diff == 0)
        f |= Flag.Z;
    f |= halfCarrySubTable[lookup & 0x07];
    f |= overflowSubTable[lookup >> 4];
    f |= value & (Flag.X3 | Flag.X5);
    f |= diff & Flag.S;
    z80.regs.af = word(z80.regs.a, f);
});
fillMap.set(0xBE, (z80) => {
    let value;
    value = z80.readByte(z80.regs.pc);
    z80.incTStateCount(5);
    z80.regs.pc = inc16(z80.regs.pc);
    z80.regs.memptr = (z80.regs.ix + signedByte(value)) & 0xFFFF;
    value = z80.readByte(z80.regs.memptr);
    const diff = (z80.regs.a - value) & 0xFFFF;
    const lookup = (((z80.regs.a & 0x88) >> 3) |
        ((value & 0x88) >> 2) |
        ((diff & 0x88) >> 1)) & 0xFF;
    let f = Flag.N;
    if ((diff & 0x100) != 0)
        f |= Flag.C;
    if (diff == 0)
        f |= Flag.Z;
    f |= halfCarrySubTable[lookup & 0x07];
    f |= overflowSubTable[lookup >> 4];
    f |= value & (Flag.X3 | Flag.X5);
    f |= diff & Flag.S;
    z80.regs.af = word(z80.regs.a, f);
});
fillMap.set(0xCB, (z80) => {
    decodeDDCB(z80);
});
fillMap.set(0xE1, (z80) => {
    z80.regs.ix = z80.popWord();
});
fillMap.set(0xE3, (z80) => {
    const rightValue = z80.regs.ix;
    const leftValueL = z80.readByte(z80.regs.sp);
    const leftValueH = z80.readByte(inc16(z80.regs.sp));
    z80.incTStateCount(1);
    z80.writeByte(inc16(z80.regs.sp), hi(rightValue));
    z80.writeByte(z80.regs.sp, lo(rightValue));
    z80.incTStateCount(2);
    z80.regs.memptr = word(leftValueH, leftValueL);
    z80.regs.ix = word(leftValueH, leftValueL);
});
fillMap.set(0xE5, (z80) => {
    z80.incTStateCount(1);
    z80.pushWord(z80.regs.ix);
});
fillMap.set(0xE9, (z80) => {
    z80.regs.pc = z80.regs.ix;
});
fillMap.set(0xF9, (z80) => {
    let value;
    value = z80.regs.ix;
    z80.incTStateCount(2);
    z80.regs.sp = value;
});
const decodeMapDDCB = new Map();
fillMap = decodeMapDDCB;
// The contents of this map are auto-generated by GenerateOpcodes.ts.
fillMap.set(0x00, (z80) => {
    z80.regs.b = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.b;
        const oldValue = value;
        value = ((value << 1) | (value >> 7)) & 0xFF;
        z80.regs.f = ((oldValue & 0x80) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.b = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.b);
});
fillMap.set(0x01, (z80) => {
    z80.regs.c = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.c;
        const oldValue = value;
        value = ((value << 1) | (value >> 7)) & 0xFF;
        z80.regs.f = ((oldValue & 0x80) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.c = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.c);
});
fillMap.set(0x02, (z80) => {
    z80.regs.d = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.d;
        const oldValue = value;
        value = ((value << 1) | (value >> 7)) & 0xFF;
        z80.regs.f = ((oldValue & 0x80) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.d = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.d);
});
fillMap.set(0x03, (z80) => {
    z80.regs.e = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.e;
        const oldValue = value;
        value = ((value << 1) | (value >> 7)) & 0xFF;
        z80.regs.f = ((oldValue & 0x80) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.e = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.e);
});
fillMap.set(0x04, (z80) => {
    z80.regs.h = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.h;
        const oldValue = value;
        value = ((value << 1) | (value >> 7)) & 0xFF;
        z80.regs.f = ((oldValue & 0x80) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.h = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.h);
});
fillMap.set(0x05, (z80) => {
    z80.regs.l = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.l;
        const oldValue = value;
        value = ((value << 1) | (value >> 7)) & 0xFF;
        z80.regs.f = ((oldValue & 0x80) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.l = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.l);
});
fillMap.set(0x06, (z80) => {
    let value;
    value = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    const oldValue = value;
    value = ((value << 1) | (value >> 7)) & 0xFF;
    z80.regs.f = ((oldValue & 0x80) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
    z80.writeByte(z80.regs.memptr, value);
});
fillMap.set(0x07, (z80) => {
    z80.regs.a = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.a;
        const oldValue = value;
        value = ((value << 1) | (value >> 7)) & 0xFF;
        z80.regs.f = ((oldValue & 0x80) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.a = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.a);
});
fillMap.set(0x08, (z80) => {
    z80.regs.b = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.b;
        const oldValue = value;
        value = ((value >> 1) | (value << 7)) & 0xFF;
        z80.regs.f = ((oldValue & 0x01) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.b = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.b);
});
fillMap.set(0x09, (z80) => {
    z80.regs.c = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.c;
        const oldValue = value;
        value = ((value >> 1) | (value << 7)) & 0xFF;
        z80.regs.f = ((oldValue & 0x01) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.c = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.c);
});
fillMap.set(0x0A, (z80) => {
    z80.regs.d = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.d;
        const oldValue = value;
        value = ((value >> 1) | (value << 7)) & 0xFF;
        z80.regs.f = ((oldValue & 0x01) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.d = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.d);
});
fillMap.set(0x0B, (z80) => {
    z80.regs.e = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.e;
        const oldValue = value;
        value = ((value >> 1) | (value << 7)) & 0xFF;
        z80.regs.f = ((oldValue & 0x01) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.e = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.e);
});
fillMap.set(0x0C, (z80) => {
    z80.regs.h = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.h;
        const oldValue = value;
        value = ((value >> 1) | (value << 7)) & 0xFF;
        z80.regs.f = ((oldValue & 0x01) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.h = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.h);
});
fillMap.set(0x0D, (z80) => {
    z80.regs.l = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.l;
        const oldValue = value;
        value = ((value >> 1) | (value << 7)) & 0xFF;
        z80.regs.f = ((oldValue & 0x01) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.l = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.l);
});
fillMap.set(0x0E, (z80) => {
    let value;
    value = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    const oldValue = value;
    value = ((value >> 1) | (value << 7)) & 0xFF;
    z80.regs.f = ((oldValue & 0x01) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
    z80.writeByte(z80.regs.memptr, value);
});
fillMap.set(0x0F, (z80) => {
    z80.regs.a = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.a;
        const oldValue = value;
        value = ((value >> 1) | (value << 7)) & 0xFF;
        z80.regs.f = ((oldValue & 0x01) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.a = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.a);
});
fillMap.set(0x10, (z80) => {
    z80.regs.b = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.b;
        const oldValue = value;
        value = ((value << 1) | ((z80.regs.f & Flag.C) !== 0 ? 1 : 0)) & 0xFF;
        z80.regs.f = ((oldValue & 0x80) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.b = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.b);
});
fillMap.set(0x11, (z80) => {
    z80.regs.c = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.c;
        const oldValue = value;
        value = ((value << 1) | ((z80.regs.f & Flag.C) !== 0 ? 1 : 0)) & 0xFF;
        z80.regs.f = ((oldValue & 0x80) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.c = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.c);
});
fillMap.set(0x12, (z80) => {
    z80.regs.d = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.d;
        const oldValue = value;
        value = ((value << 1) | ((z80.regs.f & Flag.C) !== 0 ? 1 : 0)) & 0xFF;
        z80.regs.f = ((oldValue & 0x80) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.d = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.d);
});
fillMap.set(0x13, (z80) => {
    z80.regs.e = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.e;
        const oldValue = value;
        value = ((value << 1) | ((z80.regs.f & Flag.C) !== 0 ? 1 : 0)) & 0xFF;
        z80.regs.f = ((oldValue & 0x80) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.e = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.e);
});
fillMap.set(0x14, (z80) => {
    z80.regs.h = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.h;
        const oldValue = value;
        value = ((value << 1) | ((z80.regs.f & Flag.C) !== 0 ? 1 : 0)) & 0xFF;
        z80.regs.f = ((oldValue & 0x80) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.h = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.h);
});
fillMap.set(0x15, (z80) => {
    z80.regs.l = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.l;
        const oldValue = value;
        value = ((value << 1) | ((z80.regs.f & Flag.C) !== 0 ? 1 : 0)) & 0xFF;
        z80.regs.f = ((oldValue & 0x80) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.l = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.l);
});
fillMap.set(0x16, (z80) => {
    let value;
    value = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    const oldValue = value;
    value = ((value << 1) | ((z80.regs.f & Flag.C) !== 0 ? 1 : 0)) & 0xFF;
    z80.regs.f = ((oldValue & 0x80) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
    z80.writeByte(z80.regs.memptr, value);
});
fillMap.set(0x17, (z80) => {
    z80.regs.a = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.a;
        const oldValue = value;
        value = ((value << 1) | ((z80.regs.f & Flag.C) !== 0 ? 1 : 0)) & 0xFF;
        z80.regs.f = ((oldValue & 0x80) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.a = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.a);
});
fillMap.set(0x18, (z80) => {
    z80.regs.b = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.b;
        const oldValue = value;
        value = (value >> 1) | ((z80.regs.f & Flag.C) !== 0 ? 0x80 : 0);
        z80.regs.f = ((oldValue & 0x01) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.b = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.b);
});
fillMap.set(0x19, (z80) => {
    z80.regs.c = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.c;
        const oldValue = value;
        value = (value >> 1) | ((z80.regs.f & Flag.C) !== 0 ? 0x80 : 0);
        z80.regs.f = ((oldValue & 0x01) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.c = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.c);
});
fillMap.set(0x1A, (z80) => {
    z80.regs.d = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.d;
        const oldValue = value;
        value = (value >> 1) | ((z80.regs.f & Flag.C) !== 0 ? 0x80 : 0);
        z80.regs.f = ((oldValue & 0x01) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.d = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.d);
});
fillMap.set(0x1B, (z80) => {
    z80.regs.e = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.e;
        const oldValue = value;
        value = (value >> 1) | ((z80.regs.f & Flag.C) !== 0 ? 0x80 : 0);
        z80.regs.f = ((oldValue & 0x01) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.e = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.e);
});
fillMap.set(0x1C, (z80) => {
    z80.regs.h = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.h;
        const oldValue = value;
        value = (value >> 1) | ((z80.regs.f & Flag.C) !== 0 ? 0x80 : 0);
        z80.regs.f = ((oldValue & 0x01) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.h = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.h);
});
fillMap.set(0x1D, (z80) => {
    z80.regs.l = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.l;
        const oldValue = value;
        value = (value >> 1) | ((z80.regs.f & Flag.C) !== 0 ? 0x80 : 0);
        z80.regs.f = ((oldValue & 0x01) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.l = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.l);
});
fillMap.set(0x1E, (z80) => {
    let value;
    value = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    const oldValue = value;
    value = (value >> 1) | ((z80.regs.f & Flag.C) !== 0 ? 0x80 : 0);
    z80.regs.f = ((oldValue & 0x01) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
    z80.writeByte(z80.regs.memptr, value);
});
fillMap.set(0x1F, (z80) => {
    z80.regs.a = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.a;
        const oldValue = value;
        value = (value >> 1) | ((z80.regs.f & Flag.C) !== 0 ? 0x80 : 0);
        z80.regs.f = ((oldValue & 0x01) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.a = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.a);
});
fillMap.set(0x20, (z80) => {
    z80.regs.b = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.b;
        const oldValue = value;
        value = (value << 1) & 0xFF;
        z80.regs.f = ((oldValue & 0x80) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.b = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.b);
});
fillMap.set(0x21, (z80) => {
    z80.regs.c = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.c;
        const oldValue = value;
        value = (value << 1) & 0xFF;
        z80.regs.f = ((oldValue & 0x80) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.c = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.c);
});
fillMap.set(0x22, (z80) => {
    z80.regs.d = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.d;
        const oldValue = value;
        value = (value << 1) & 0xFF;
        z80.regs.f = ((oldValue & 0x80) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.d = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.d);
});
fillMap.set(0x23, (z80) => {
    z80.regs.e = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.e;
        const oldValue = value;
        value = (value << 1) & 0xFF;
        z80.regs.f = ((oldValue & 0x80) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.e = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.e);
});
fillMap.set(0x24, (z80) => {
    z80.regs.h = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.h;
        const oldValue = value;
        value = (value << 1) & 0xFF;
        z80.regs.f = ((oldValue & 0x80) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.h = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.h);
});
fillMap.set(0x25, (z80) => {
    z80.regs.l = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.l;
        const oldValue = value;
        value = (value << 1) & 0xFF;
        z80.regs.f = ((oldValue & 0x80) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.l = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.l);
});
fillMap.set(0x26, (z80) => {
    let value;
    value = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    const oldValue = value;
    value = (value << 1) & 0xFF;
    z80.regs.f = ((oldValue & 0x80) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
    z80.writeByte(z80.regs.memptr, value);
});
fillMap.set(0x27, (z80) => {
    z80.regs.a = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.a;
        const oldValue = value;
        value = (value << 1) & 0xFF;
        z80.regs.f = ((oldValue & 0x80) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.a = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.a);
});
fillMap.set(0x28, (z80) => {
    z80.regs.b = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.b;
        const oldValue = value;
        value = (value & 0x80) | (value >> 1);
        z80.regs.f = ((oldValue & 0x01) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.b = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.b);
});
fillMap.set(0x29, (z80) => {
    z80.regs.c = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.c;
        const oldValue = value;
        value = (value & 0x80) | (value >> 1);
        z80.regs.f = ((oldValue & 0x01) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.c = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.c);
});
fillMap.set(0x2A, (z80) => {
    z80.regs.d = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.d;
        const oldValue = value;
        value = (value & 0x80) | (value >> 1);
        z80.regs.f = ((oldValue & 0x01) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.d = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.d);
});
fillMap.set(0x2B, (z80) => {
    z80.regs.e = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.e;
        const oldValue = value;
        value = (value & 0x80) | (value >> 1);
        z80.regs.f = ((oldValue & 0x01) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.e = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.e);
});
fillMap.set(0x2C, (z80) => {
    z80.regs.h = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.h;
        const oldValue = value;
        value = (value & 0x80) | (value >> 1);
        z80.regs.f = ((oldValue & 0x01) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.h = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.h);
});
fillMap.set(0x2D, (z80) => {
    z80.regs.l = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.l;
        const oldValue = value;
        value = (value & 0x80) | (value >> 1);
        z80.regs.f = ((oldValue & 0x01) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.l = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.l);
});
fillMap.set(0x2E, (z80) => {
    let value;
    value = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    const oldValue = value;
    value = (value & 0x80) | (value >> 1);
    z80.regs.f = ((oldValue & 0x01) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
    z80.writeByte(z80.regs.memptr, value);
});
fillMap.set(0x2F, (z80) => {
    z80.regs.a = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.a;
        const oldValue = value;
        value = (value & 0x80) | (value >> 1);
        z80.regs.f = ((oldValue & 0x01) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.a = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.a);
});
fillMap.set(0x30, (z80) => {
    z80.regs.b = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.b;
        const oldValue = value;
        value = ((value << 1) | 0x01) & 0xFF;
        z80.regs.f = ((oldValue & 0x80) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.b = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.b);
});
fillMap.set(0x31, (z80) => {
    z80.regs.c = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.c;
        const oldValue = value;
        value = ((value << 1) | 0x01) & 0xFF;
        z80.regs.f = ((oldValue & 0x80) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.c = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.c);
});
fillMap.set(0x32, (z80) => {
    z80.regs.d = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.d;
        const oldValue = value;
        value = ((value << 1) | 0x01) & 0xFF;
        z80.regs.f = ((oldValue & 0x80) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.d = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.d);
});
fillMap.set(0x33, (z80) => {
    z80.regs.e = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.e;
        const oldValue = value;
        value = ((value << 1) | 0x01) & 0xFF;
        z80.regs.f = ((oldValue & 0x80) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.e = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.e);
});
fillMap.set(0x34, (z80) => {
    z80.regs.h = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.h;
        const oldValue = value;
        value = ((value << 1) | 0x01) & 0xFF;
        z80.regs.f = ((oldValue & 0x80) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.h = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.h);
});
fillMap.set(0x35, (z80) => {
    z80.regs.l = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.l;
        const oldValue = value;
        value = ((value << 1) | 0x01) & 0xFF;
        z80.regs.f = ((oldValue & 0x80) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.l = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.l);
});
fillMap.set(0x36, (z80) => {
    let value;
    value = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    const oldValue = value;
    value = ((value << 1) | 0x01) & 0xFF;
    z80.regs.f = ((oldValue & 0x80) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
    z80.writeByte(z80.regs.memptr, value);
});
fillMap.set(0x37, (z80) => {
    z80.regs.a = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.a;
        const oldValue = value;
        value = ((value << 1) | 0x01) & 0xFF;
        z80.regs.f = ((oldValue & 0x80) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.a = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.a);
});
fillMap.set(0x38, (z80) => {
    z80.regs.b = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.b;
        const oldValue = value;
        value = value >> 1;
        z80.regs.f = ((oldValue & 0x01) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.b = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.b);
});
fillMap.set(0x39, (z80) => {
    z80.regs.c = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.c;
        const oldValue = value;
        value = value >> 1;
        z80.regs.f = ((oldValue & 0x01) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.c = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.c);
});
fillMap.set(0x3A, (z80) => {
    z80.regs.d = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.d;
        const oldValue = value;
        value = value >> 1;
        z80.regs.f = ((oldValue & 0x01) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.d = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.d);
});
fillMap.set(0x3B, (z80) => {
    z80.regs.e = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.e;
        const oldValue = value;
        value = value >> 1;
        z80.regs.f = ((oldValue & 0x01) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.e = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.e);
});
fillMap.set(0x3C, (z80) => {
    z80.regs.h = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.h;
        const oldValue = value;
        value = value >> 1;
        z80.regs.f = ((oldValue & 0x01) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.h = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.h);
});
fillMap.set(0x3D, (z80) => {
    z80.regs.l = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.l;
        const oldValue = value;
        value = value >> 1;
        z80.regs.f = ((oldValue & 0x01) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.l = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.l);
});
fillMap.set(0x3E, (z80) => {
    let value;
    value = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    const oldValue = value;
    value = value >> 1;
    z80.regs.f = ((oldValue & 0x01) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
    z80.writeByte(z80.regs.memptr, value);
});
fillMap.set(0x3F, (z80) => {
    z80.regs.a = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.a;
        const oldValue = value;
        value = value >> 1;
        z80.regs.f = ((oldValue & 0x01) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.a = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.a);
});
fillMap.set(0x47, (z80) => {
    const value = z80.readByte(z80.regs.memptr);
    const hiddenValue = hi(z80.regs.memptr);
    z80.incTStateCount(1);
    let f = (z80.regs.f & Flag.C) | Flag.H | (hiddenValue & (Flag.X3 | Flag.X5));
    if ((value & 0x01) === 0) {
        f |= Flag.P | Flag.Z;
    }
    z80.regs.f = f;
});
fillMap.set(0x40, fillMap.get(0x47));
fillMap.set(0x41, fillMap.get(0x47));
fillMap.set(0x42, fillMap.get(0x47));
fillMap.set(0x43, fillMap.get(0x47));
fillMap.set(0x44, fillMap.get(0x47));
fillMap.set(0x45, fillMap.get(0x47));
fillMap.set(0x46, fillMap.get(0x47));
fillMap.set(0x4F, (z80) => {
    const value = z80.readByte(z80.regs.memptr);
    const hiddenValue = hi(z80.regs.memptr);
    z80.incTStateCount(1);
    let f = (z80.regs.f & Flag.C) | Flag.H | (hiddenValue & (Flag.X3 | Flag.X5));
    if ((value & 0x02) === 0) {
        f |= Flag.P | Flag.Z;
    }
    z80.regs.f = f;
});
fillMap.set(0x48, fillMap.get(0x4F));
fillMap.set(0x49, fillMap.get(0x4F));
fillMap.set(0x4A, fillMap.get(0x4F));
fillMap.set(0x4B, fillMap.get(0x4F));
fillMap.set(0x4C, fillMap.get(0x4F));
fillMap.set(0x4D, fillMap.get(0x4F));
fillMap.set(0x4E, fillMap.get(0x4F));
fillMap.set(0x57, (z80) => {
    const value = z80.readByte(z80.regs.memptr);
    const hiddenValue = hi(z80.regs.memptr);
    z80.incTStateCount(1);
    let f = (z80.regs.f & Flag.C) | Flag.H | (hiddenValue & (Flag.X3 | Flag.X5));
    if ((value & 0x04) === 0) {
        f |= Flag.P | Flag.Z;
    }
    z80.regs.f = f;
});
fillMap.set(0x50, fillMap.get(0x57));
fillMap.set(0x51, fillMap.get(0x57));
fillMap.set(0x52, fillMap.get(0x57));
fillMap.set(0x53, fillMap.get(0x57));
fillMap.set(0x54, fillMap.get(0x57));
fillMap.set(0x55, fillMap.get(0x57));
fillMap.set(0x56, fillMap.get(0x57));
fillMap.set(0x5F, (z80) => {
    const value = z80.readByte(z80.regs.memptr);
    const hiddenValue = hi(z80.regs.memptr);
    z80.incTStateCount(1);
    let f = (z80.regs.f & Flag.C) | Flag.H | (hiddenValue & (Flag.X3 | Flag.X5));
    if ((value & 0x08) === 0) {
        f |= Flag.P | Flag.Z;
    }
    z80.regs.f = f;
});
fillMap.set(0x58, fillMap.get(0x5F));
fillMap.set(0x59, fillMap.get(0x5F));
fillMap.set(0x5A, fillMap.get(0x5F));
fillMap.set(0x5B, fillMap.get(0x5F));
fillMap.set(0x5C, fillMap.get(0x5F));
fillMap.set(0x5D, fillMap.get(0x5F));
fillMap.set(0x5E, fillMap.get(0x5F));
fillMap.set(0x67, (z80) => {
    const value = z80.readByte(z80.regs.memptr);
    const hiddenValue = hi(z80.regs.memptr);
    z80.incTStateCount(1);
    let f = (z80.regs.f & Flag.C) | Flag.H | (hiddenValue & (Flag.X3 | Flag.X5));
    if ((value & 0x10) === 0) {
        f |= Flag.P | Flag.Z;
    }
    z80.regs.f = f;
});
fillMap.set(0x60, fillMap.get(0x67));
fillMap.set(0x61, fillMap.get(0x67));
fillMap.set(0x62, fillMap.get(0x67));
fillMap.set(0x63, fillMap.get(0x67));
fillMap.set(0x64, fillMap.get(0x67));
fillMap.set(0x65, fillMap.get(0x67));
fillMap.set(0x66, fillMap.get(0x67));
fillMap.set(0x6F, (z80) => {
    const value = z80.readByte(z80.regs.memptr);
    const hiddenValue = hi(z80.regs.memptr);
    z80.incTStateCount(1);
    let f = (z80.regs.f & Flag.C) | Flag.H | (hiddenValue & (Flag.X3 | Flag.X5));
    if ((value & 0x20) === 0) {
        f |= Flag.P | Flag.Z;
    }
    z80.regs.f = f;
});
fillMap.set(0x68, fillMap.get(0x6F));
fillMap.set(0x69, fillMap.get(0x6F));
fillMap.set(0x6A, fillMap.get(0x6F));
fillMap.set(0x6B, fillMap.get(0x6F));
fillMap.set(0x6C, fillMap.get(0x6F));
fillMap.set(0x6D, fillMap.get(0x6F));
fillMap.set(0x6E, fillMap.get(0x6F));
fillMap.set(0x77, (z80) => {
    const value = z80.readByte(z80.regs.memptr);
    const hiddenValue = hi(z80.regs.memptr);
    z80.incTStateCount(1);
    let f = (z80.regs.f & Flag.C) | Flag.H | (hiddenValue & (Flag.X3 | Flag.X5));
    if ((value & 0x40) === 0) {
        f |= Flag.P | Flag.Z;
    }
    z80.regs.f = f;
});
fillMap.set(0x70, fillMap.get(0x77));
fillMap.set(0x71, fillMap.get(0x77));
fillMap.set(0x72, fillMap.get(0x77));
fillMap.set(0x73, fillMap.get(0x77));
fillMap.set(0x74, fillMap.get(0x77));
fillMap.set(0x75, fillMap.get(0x77));
fillMap.set(0x76, fillMap.get(0x77));
fillMap.set(0x7F, (z80) => {
    const value = z80.readByte(z80.regs.memptr);
    const hiddenValue = hi(z80.regs.memptr);
    z80.incTStateCount(1);
    let f = (z80.regs.f & Flag.C) | Flag.H | (hiddenValue & (Flag.X3 | Flag.X5));
    if ((value & 0x80) === 0) {
        f |= Flag.P | Flag.Z;
    }
    if ((value & 0x80) !== 0) {
        f |= Flag.S;
    }
    z80.regs.f = f;
});
fillMap.set(0x78, fillMap.get(0x7F));
fillMap.set(0x79, fillMap.get(0x7F));
fillMap.set(0x7A, fillMap.get(0x7F));
fillMap.set(0x7B, fillMap.get(0x7F));
fillMap.set(0x7C, fillMap.get(0x7F));
fillMap.set(0x7D, fillMap.get(0x7F));
fillMap.set(0x7E, fillMap.get(0x7F));
fillMap.set(0x80, (z80) => {
    z80.regs.b = z80.readByte(z80.regs.memptr) & 0xFE;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.b);
});
fillMap.set(0x81, (z80) => {
    z80.regs.c = z80.readByte(z80.regs.memptr) & 0xFE;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.c);
});
fillMap.set(0x82, (z80) => {
    z80.regs.d = z80.readByte(z80.regs.memptr) & 0xFE;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.d);
});
fillMap.set(0x83, (z80) => {
    z80.regs.e = z80.readByte(z80.regs.memptr) & 0xFE;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.e);
});
fillMap.set(0x84, (z80) => {
    z80.regs.h = z80.readByte(z80.regs.memptr) & 0xFE;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.h);
});
fillMap.set(0x85, (z80) => {
    z80.regs.l = z80.readByte(z80.regs.memptr) & 0xFE;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.l);
});
fillMap.set(0x86, (z80) => {
    const value = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, value & 0xFE);
});
fillMap.set(0x87, (z80) => {
    z80.regs.a = z80.readByte(z80.regs.memptr) & 0xFE;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.a);
});
fillMap.set(0x88, (z80) => {
    z80.regs.b = z80.readByte(z80.regs.memptr) & 0xFD;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.b);
});
fillMap.set(0x89, (z80) => {
    z80.regs.c = z80.readByte(z80.regs.memptr) & 0xFD;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.c);
});
fillMap.set(0x8A, (z80) => {
    z80.regs.d = z80.readByte(z80.regs.memptr) & 0xFD;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.d);
});
fillMap.set(0x8B, (z80) => {
    z80.regs.e = z80.readByte(z80.regs.memptr) & 0xFD;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.e);
});
fillMap.set(0x8C, (z80) => {
    z80.regs.h = z80.readByte(z80.regs.memptr) & 0xFD;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.h);
});
fillMap.set(0x8D, (z80) => {
    z80.regs.l = z80.readByte(z80.regs.memptr) & 0xFD;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.l);
});
fillMap.set(0x8E, (z80) => {
    const value = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, value & 0xFD);
});
fillMap.set(0x8F, (z80) => {
    z80.regs.a = z80.readByte(z80.regs.memptr) & 0xFD;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.a);
});
fillMap.set(0x90, (z80) => {
    z80.regs.b = z80.readByte(z80.regs.memptr) & 0xFB;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.b);
});
fillMap.set(0x91, (z80) => {
    z80.regs.c = z80.readByte(z80.regs.memptr) & 0xFB;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.c);
});
fillMap.set(0x92, (z80) => {
    z80.regs.d = z80.readByte(z80.regs.memptr) & 0xFB;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.d);
});
fillMap.set(0x93, (z80) => {
    z80.regs.e = z80.readByte(z80.regs.memptr) & 0xFB;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.e);
});
fillMap.set(0x94, (z80) => {
    z80.regs.h = z80.readByte(z80.regs.memptr) & 0xFB;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.h);
});
fillMap.set(0x95, (z80) => {
    z80.regs.l = z80.readByte(z80.regs.memptr) & 0xFB;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.l);
});
fillMap.set(0x96, (z80) => {
    const value = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, value & 0xFB);
});
fillMap.set(0x97, (z80) => {
    z80.regs.a = z80.readByte(z80.regs.memptr) & 0xFB;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.a);
});
fillMap.set(0x98, (z80) => {
    z80.regs.b = z80.readByte(z80.regs.memptr) & 0xF7;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.b);
});
fillMap.set(0x99, (z80) => {
    z80.regs.c = z80.readByte(z80.regs.memptr) & 0xF7;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.c);
});
fillMap.set(0x9A, (z80) => {
    z80.regs.d = z80.readByte(z80.regs.memptr) & 0xF7;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.d);
});
fillMap.set(0x9B, (z80) => {
    z80.regs.e = z80.readByte(z80.regs.memptr) & 0xF7;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.e);
});
fillMap.set(0x9C, (z80) => {
    z80.regs.h = z80.readByte(z80.regs.memptr) & 0xF7;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.h);
});
fillMap.set(0x9D, (z80) => {
    z80.regs.l = z80.readByte(z80.regs.memptr) & 0xF7;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.l);
});
fillMap.set(0x9E, (z80) => {
    const value = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, value & 0xF7);
});
fillMap.set(0x9F, (z80) => {
    z80.regs.a = z80.readByte(z80.regs.memptr) & 0xF7;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.a);
});
fillMap.set(0xA0, (z80) => {
    z80.regs.b = z80.readByte(z80.regs.memptr) & 0xEF;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.b);
});
fillMap.set(0xA1, (z80) => {
    z80.regs.c = z80.readByte(z80.regs.memptr) & 0xEF;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.c);
});
fillMap.set(0xA2, (z80) => {
    z80.regs.d = z80.readByte(z80.regs.memptr) & 0xEF;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.d);
});
fillMap.set(0xA3, (z80) => {
    z80.regs.e = z80.readByte(z80.regs.memptr) & 0xEF;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.e);
});
fillMap.set(0xA4, (z80) => {
    z80.regs.h = z80.readByte(z80.regs.memptr) & 0xEF;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.h);
});
fillMap.set(0xA5, (z80) => {
    z80.regs.l = z80.readByte(z80.regs.memptr) & 0xEF;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.l);
});
fillMap.set(0xA6, (z80) => {
    const value = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, value & 0xEF);
});
fillMap.set(0xA7, (z80) => {
    z80.regs.a = z80.readByte(z80.regs.memptr) & 0xEF;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.a);
});
fillMap.set(0xA8, (z80) => {
    z80.regs.b = z80.readByte(z80.regs.memptr) & 0xDF;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.b);
});
fillMap.set(0xA9, (z80) => {
    z80.regs.c = z80.readByte(z80.regs.memptr) & 0xDF;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.c);
});
fillMap.set(0xAA, (z80) => {
    z80.regs.d = z80.readByte(z80.regs.memptr) & 0xDF;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.d);
});
fillMap.set(0xAB, (z80) => {
    z80.regs.e = z80.readByte(z80.regs.memptr) & 0xDF;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.e);
});
fillMap.set(0xAC, (z80) => {
    z80.regs.h = z80.readByte(z80.regs.memptr) & 0xDF;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.h);
});
fillMap.set(0xAD, (z80) => {
    z80.regs.l = z80.readByte(z80.regs.memptr) & 0xDF;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.l);
});
fillMap.set(0xAE, (z80) => {
    const value = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, value & 0xDF);
});
fillMap.set(0xAF, (z80) => {
    z80.regs.a = z80.readByte(z80.regs.memptr) & 0xDF;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.a);
});
fillMap.set(0xB0, (z80) => {
    z80.regs.b = z80.readByte(z80.regs.memptr) & 0xBF;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.b);
});
fillMap.set(0xB1, (z80) => {
    z80.regs.c = z80.readByte(z80.regs.memptr) & 0xBF;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.c);
});
fillMap.set(0xB2, (z80) => {
    z80.regs.d = z80.readByte(z80.regs.memptr) & 0xBF;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.d);
});
fillMap.set(0xB3, (z80) => {
    z80.regs.e = z80.readByte(z80.regs.memptr) & 0xBF;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.e);
});
fillMap.set(0xB4, (z80) => {
    z80.regs.h = z80.readByte(z80.regs.memptr) & 0xBF;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.h);
});
fillMap.set(0xB5, (z80) => {
    z80.regs.l = z80.readByte(z80.regs.memptr) & 0xBF;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.l);
});
fillMap.set(0xB6, (z80) => {
    const value = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, value & 0xBF);
});
fillMap.set(0xB7, (z80) => {
    z80.regs.a = z80.readByte(z80.regs.memptr) & 0xBF;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.a);
});
fillMap.set(0xB8, (z80) => {
    z80.regs.b = z80.readByte(z80.regs.memptr) & 0x7F;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.b);
});
fillMap.set(0xB9, (z80) => {
    z80.regs.c = z80.readByte(z80.regs.memptr) & 0x7F;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.c);
});
fillMap.set(0xBA, (z80) => {
    z80.regs.d = z80.readByte(z80.regs.memptr) & 0x7F;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.d);
});
fillMap.set(0xBB, (z80) => {
    z80.regs.e = z80.readByte(z80.regs.memptr) & 0x7F;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.e);
});
fillMap.set(0xBC, (z80) => {
    z80.regs.h = z80.readByte(z80.regs.memptr) & 0x7F;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.h);
});
fillMap.set(0xBD, (z80) => {
    z80.regs.l = z80.readByte(z80.regs.memptr) & 0x7F;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.l);
});
fillMap.set(0xBE, (z80) => {
    const value = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, value & 0x7F);
});
fillMap.set(0xBF, (z80) => {
    z80.regs.a = z80.readByte(z80.regs.memptr) & 0x7F;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.a);
});
fillMap.set(0xC0, (z80) => {
    z80.regs.b = z80.readByte(z80.regs.memptr) | 0x01;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.b);
});
fillMap.set(0xC1, (z80) => {
    z80.regs.c = z80.readByte(z80.regs.memptr) | 0x01;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.c);
});
fillMap.set(0xC2, (z80) => {
    z80.regs.d = z80.readByte(z80.regs.memptr) | 0x01;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.d);
});
fillMap.set(0xC3, (z80) => {
    z80.regs.e = z80.readByte(z80.regs.memptr) | 0x01;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.e);
});
fillMap.set(0xC4, (z80) => {
    z80.regs.h = z80.readByte(z80.regs.memptr) | 0x01;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.h);
});
fillMap.set(0xC5, (z80) => {
    z80.regs.l = z80.readByte(z80.regs.memptr) | 0x01;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.l);
});
fillMap.set(0xC6, (z80) => {
    const value = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, value | 0x01);
});
fillMap.set(0xC7, (z80) => {
    z80.regs.a = z80.readByte(z80.regs.memptr) | 0x01;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.a);
});
fillMap.set(0xC8, (z80) => {
    z80.regs.b = z80.readByte(z80.regs.memptr) | 0x02;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.b);
});
fillMap.set(0xC9, (z80) => {
    z80.regs.c = z80.readByte(z80.regs.memptr) | 0x02;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.c);
});
fillMap.set(0xCA, (z80) => {
    z80.regs.d = z80.readByte(z80.regs.memptr) | 0x02;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.d);
});
fillMap.set(0xCB, (z80) => {
    z80.regs.e = z80.readByte(z80.regs.memptr) | 0x02;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.e);
});
fillMap.set(0xCC, (z80) => {
    z80.regs.h = z80.readByte(z80.regs.memptr) | 0x02;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.h);
});
fillMap.set(0xCD, (z80) => {
    z80.regs.l = z80.readByte(z80.regs.memptr) | 0x02;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.l);
});
fillMap.set(0xCE, (z80) => {
    const value = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, value | 0x02);
});
fillMap.set(0xCF, (z80) => {
    z80.regs.a = z80.readByte(z80.regs.memptr) | 0x02;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.a);
});
fillMap.set(0xD0, (z80) => {
    z80.regs.b = z80.readByte(z80.regs.memptr) | 0x04;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.b);
});
fillMap.set(0xD1, (z80) => {
    z80.regs.c = z80.readByte(z80.regs.memptr) | 0x04;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.c);
});
fillMap.set(0xD2, (z80) => {
    z80.regs.d = z80.readByte(z80.regs.memptr) | 0x04;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.d);
});
fillMap.set(0xD3, (z80) => {
    z80.regs.e = z80.readByte(z80.regs.memptr) | 0x04;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.e);
});
fillMap.set(0xD4, (z80) => {
    z80.regs.h = z80.readByte(z80.regs.memptr) | 0x04;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.h);
});
fillMap.set(0xD5, (z80) => {
    z80.regs.l = z80.readByte(z80.regs.memptr) | 0x04;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.l);
});
fillMap.set(0xD6, (z80) => {
    const value = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, value | 0x04);
});
fillMap.set(0xD7, (z80) => {
    z80.regs.a = z80.readByte(z80.regs.memptr) | 0x04;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.a);
});
fillMap.set(0xD8, (z80) => {
    z80.regs.b = z80.readByte(z80.regs.memptr) | 0x08;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.b);
});
fillMap.set(0xD9, (z80) => {
    z80.regs.c = z80.readByte(z80.regs.memptr) | 0x08;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.c);
});
fillMap.set(0xDA, (z80) => {
    z80.regs.d = z80.readByte(z80.regs.memptr) | 0x08;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.d);
});
fillMap.set(0xDB, (z80) => {
    z80.regs.e = z80.readByte(z80.regs.memptr) | 0x08;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.e);
});
fillMap.set(0xDC, (z80) => {
    z80.regs.h = z80.readByte(z80.regs.memptr) | 0x08;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.h);
});
fillMap.set(0xDD, (z80) => {
    z80.regs.l = z80.readByte(z80.regs.memptr) | 0x08;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.l);
});
fillMap.set(0xDE, (z80) => {
    const value = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, value | 0x08);
});
fillMap.set(0xDF, (z80) => {
    z80.regs.a = z80.readByte(z80.regs.memptr) | 0x08;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.a);
});
fillMap.set(0xE0, (z80) => {
    z80.regs.b = z80.readByte(z80.regs.memptr) | 0x10;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.b);
});
fillMap.set(0xE1, (z80) => {
    z80.regs.c = z80.readByte(z80.regs.memptr) | 0x10;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.c);
});
fillMap.set(0xE2, (z80) => {
    z80.regs.d = z80.readByte(z80.regs.memptr) | 0x10;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.d);
});
fillMap.set(0xE3, (z80) => {
    z80.regs.e = z80.readByte(z80.regs.memptr) | 0x10;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.e);
});
fillMap.set(0xE4, (z80) => {
    z80.regs.h = z80.readByte(z80.regs.memptr) | 0x10;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.h);
});
fillMap.set(0xE5, (z80) => {
    z80.regs.l = z80.readByte(z80.regs.memptr) | 0x10;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.l);
});
fillMap.set(0xE6, (z80) => {
    const value = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, value | 0x10);
});
fillMap.set(0xE7, (z80) => {
    z80.regs.a = z80.readByte(z80.regs.memptr) | 0x10;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.a);
});
fillMap.set(0xE8, (z80) => {
    z80.regs.b = z80.readByte(z80.regs.memptr) | 0x20;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.b);
});
fillMap.set(0xE9, (z80) => {
    z80.regs.c = z80.readByte(z80.regs.memptr) | 0x20;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.c);
});
fillMap.set(0xEA, (z80) => {
    z80.regs.d = z80.readByte(z80.regs.memptr) | 0x20;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.d);
});
fillMap.set(0xEB, (z80) => {
    z80.regs.e = z80.readByte(z80.regs.memptr) | 0x20;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.e);
});
fillMap.set(0xEC, (z80) => {
    z80.regs.h = z80.readByte(z80.regs.memptr) | 0x20;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.h);
});
fillMap.set(0xED, (z80) => {
    z80.regs.l = z80.readByte(z80.regs.memptr) | 0x20;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.l);
});
fillMap.set(0xEE, (z80) => {
    const value = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, value | 0x20);
});
fillMap.set(0xEF, (z80) => {
    z80.regs.a = z80.readByte(z80.regs.memptr) | 0x20;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.a);
});
fillMap.set(0xF0, (z80) => {
    z80.regs.b = z80.readByte(z80.regs.memptr) | 0x40;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.b);
});
fillMap.set(0xF1, (z80) => {
    z80.regs.c = z80.readByte(z80.regs.memptr) | 0x40;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.c);
});
fillMap.set(0xF2, (z80) => {
    z80.regs.d = z80.readByte(z80.regs.memptr) | 0x40;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.d);
});
fillMap.set(0xF3, (z80) => {
    z80.regs.e = z80.readByte(z80.regs.memptr) | 0x40;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.e);
});
fillMap.set(0xF4, (z80) => {
    z80.regs.h = z80.readByte(z80.regs.memptr) | 0x40;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.h);
});
fillMap.set(0xF5, (z80) => {
    z80.regs.l = z80.readByte(z80.regs.memptr) | 0x40;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.l);
});
fillMap.set(0xF6, (z80) => {
    const value = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, value | 0x40);
});
fillMap.set(0xF7, (z80) => {
    z80.regs.a = z80.readByte(z80.regs.memptr) | 0x40;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.a);
});
fillMap.set(0xF8, (z80) => {
    z80.regs.b = z80.readByte(z80.regs.memptr) | 0x80;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.b);
});
fillMap.set(0xF9, (z80) => {
    z80.regs.c = z80.readByte(z80.regs.memptr) | 0x80;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.c);
});
fillMap.set(0xFA, (z80) => {
    z80.regs.d = z80.readByte(z80.regs.memptr) | 0x80;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.d);
});
fillMap.set(0xFB, (z80) => {
    z80.regs.e = z80.readByte(z80.regs.memptr) | 0x80;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.e);
});
fillMap.set(0xFC, (z80) => {
    z80.regs.h = z80.readByte(z80.regs.memptr) | 0x80;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.h);
});
fillMap.set(0xFD, (z80) => {
    z80.regs.l = z80.readByte(z80.regs.memptr) | 0x80;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.l);
});
fillMap.set(0xFE, (z80) => {
    const value = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, value | 0x80);
});
fillMap.set(0xFF, (z80) => {
    z80.regs.a = z80.readByte(z80.regs.memptr) | 0x80;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.a);
});
const decodeMapED = new Map();
fillMap = decodeMapED;
// The contents of this map are auto-generated by GenerateOpcodes.ts.
fillMap.set(0x40, (z80) => {
    z80.regs.memptr = inc16(z80.regs.bc);
    z80.regs.b = z80.readPort(z80.regs.bc);
    z80.regs.f = (z80.regs.f & Flag.C) | z80.sz53pTable[z80.regs.b];
});
fillMap.set(0x41, (z80) => {
    z80.writePort(z80.regs.bc, z80.regs.b);
    z80.regs.memptr = inc16(z80.regs.bc);
});
fillMap.set(0x42, (z80) => {
    let value;
    z80.incTStateCount(7);
    value = z80.regs.bc;
    let result = z80.regs.hl - value;
    if ((z80.regs.f & Flag.C) !== 0) {
        result -= 1;
    }
    const lookup = (((z80.regs.hl & 0x8800) >> 11) |
        ((value & 0x8800) >> 10) |
        ((result & 0x8800) >> 9)) & 0xFF;
    z80.regs.memptr = inc16(z80.regs.hl);
    z80.regs.hl = result & 0xFFFF;
    z80.regs.f = ((result & 0x10000) !== 0 ? Flag.C : 0) | Flag.N | overflowSubTable[lookup >> 4] | ((result >> 8) & (Flag.X3 | Flag.X5 | Flag.S)) | halfCarrySubTable[lookup & 0x07] | (result !== 0 ? 0 : Flag.Z);
});
fillMap.set(0x43, (z80) => {
    let value;
    value = z80.regs.bc;
    let addr = z80.readByte(z80.regs.pc);
    z80.regs.pc = inc16(z80.regs.pc);
    addr = word(z80.readByte(z80.regs.pc), addr);
    z80.regs.pc = inc16(z80.regs.pc);
    z80.writeByte(addr, lo(value));
    addr = inc16(addr);
    z80.regs.memptr = addr;
    z80.writeByte(addr, hi(value));
});
fillMap.set(0x7C, (z80) => {
    const value = z80.regs.a;
    z80.regs.a = 0;
    const diff = sub16(z80.regs.a, value);
    const lookup = (((z80.regs.a & 0x88) >> 3) |
        ((value & 0x88) >> 2) |
        ((diff & 0x88) >> 1)) & 0xFF;
    z80.regs.a = diff;
    let f = Flag.N;
    if ((diff & 0x100) != 0)
        f |= Flag.C;
    f |= halfCarrySubTable[lookup & 0x07];
    f |= overflowSubTable[lookup >> 4];
    f |= z80.sz53Table[z80.regs.a];
    z80.regs.f = f;
});
fillMap.set(0x44, fillMap.get(0x7C));
fillMap.set(0x4C, fillMap.get(0x7C));
fillMap.set(0x54, fillMap.get(0x7C));
fillMap.set(0x5C, fillMap.get(0x7C));
fillMap.set(0x64, fillMap.get(0x7C));
fillMap.set(0x6C, fillMap.get(0x7C));
fillMap.set(0x74, fillMap.get(0x7C));
fillMap.set(0x7D, (z80) => {
    z80.regs.iff1 = z80.regs.iff2;
    z80.regs.pc = z80.popWord();
    z80.regs.memptr = z80.regs.pc;
});
fillMap.set(0x45, fillMap.get(0x7D));
fillMap.set(0x4D, fillMap.get(0x7D));
fillMap.set(0x55, fillMap.get(0x7D));
fillMap.set(0x5D, fillMap.get(0x7D));
fillMap.set(0x65, fillMap.get(0x7D));
fillMap.set(0x6D, fillMap.get(0x7D));
fillMap.set(0x75, fillMap.get(0x7D));
fillMap.set(0x6E, (z80) => {
    z80.regs.im = 0;
});
fillMap.set(0x46, fillMap.get(0x6E));
fillMap.set(0x4E, fillMap.get(0x6E));
fillMap.set(0x66, fillMap.get(0x6E));
fillMap.set(0x47, (z80) => {
    let value;
    value = z80.regs.a;
    z80.incTStateCount(1);
    z80.regs.i = value;
});
fillMap.set(0x48, (z80) => {
    z80.regs.memptr = inc16(z80.regs.bc);
    z80.regs.c = z80.readPort(z80.regs.bc);
    z80.regs.f = (z80.regs.f & Flag.C) | z80.sz53pTable[z80.regs.c];
});
fillMap.set(0x49, (z80) => {
    z80.writePort(z80.regs.bc, z80.regs.c);
    z80.regs.memptr = inc16(z80.regs.bc);
});
fillMap.set(0x4A, (z80) => {
    let value;
    z80.incTStateCount(7);
    value = z80.regs.bc;
    let result = z80.regs.hl + value;
    if ((z80.regs.f & Flag.C) !== 0) {
        result += 1;
    }
    const lookup = (((z80.regs.hl & 0x8800) >> 11) |
        ((value & 0x8800) >> 10) |
        ((result & 0x8800) >> 9)) & 0xFF;
    z80.regs.memptr = inc16(z80.regs.hl);
    z80.regs.hl = result & 0xFFFF;
    z80.regs.f = ((result & 0x10000) !== 0 ? Flag.C : 0) | overflowAddTable[lookup >> 4] | ((result >> 8) & (Flag.X3 | Flag.X5 | Flag.S)) | halfCarryAddTable[lookup & 0x07] | (result !== 0 ? 0 : Flag.Z);
});
fillMap.set(0x4B, (z80) => {
    let value;
    let addr = z80.readByte(z80.regs.pc);
    z80.regs.pc = inc16(z80.regs.pc);
    addr = word(z80.readByte(z80.regs.pc), addr);
    z80.regs.pc = inc16(z80.regs.pc);
    value = z80.readByte(addr);
    z80.regs.memptr = inc16(addr);
    value = word(z80.readByte(z80.regs.memptr), value);
    z80.regs.bc = value;
});
fillMap.set(0x4F, (z80) => {
    let value;
    value = z80.regs.a;
    z80.incTStateCount(1);
    z80.regs.r = value;
});
fillMap.set(0x50, (z80) => {
    z80.regs.memptr = inc16(z80.regs.bc);
    z80.regs.d = z80.readPort(z80.regs.bc);
    z80.regs.f = (z80.regs.f & Flag.C) | z80.sz53pTable[z80.regs.d];
});
fillMap.set(0x51, (z80) => {
    z80.writePort(z80.regs.bc, z80.regs.d);
    z80.regs.memptr = inc16(z80.regs.bc);
});
fillMap.set(0x52, (z80) => {
    let value;
    z80.incTStateCount(7);
    value = z80.regs.de;
    let result = z80.regs.hl - value;
    if ((z80.regs.f & Flag.C) !== 0) {
        result -= 1;
    }
    const lookup = (((z80.regs.hl & 0x8800) >> 11) |
        ((value & 0x8800) >> 10) |
        ((result & 0x8800) >> 9)) & 0xFF;
    z80.regs.memptr = inc16(z80.regs.hl);
    z80.regs.hl = result & 0xFFFF;
    z80.regs.f = ((result & 0x10000) !== 0 ? Flag.C : 0) | Flag.N | overflowSubTable[lookup >> 4] | ((result >> 8) & (Flag.X3 | Flag.X5 | Flag.S)) | halfCarrySubTable[lookup & 0x07] | (result !== 0 ? 0 : Flag.Z);
});
fillMap.set(0x53, (z80) => {
    let value;
    value = z80.regs.de;
    let addr = z80.readByte(z80.regs.pc);
    z80.regs.pc = inc16(z80.regs.pc);
    addr = word(z80.readByte(z80.regs.pc), addr);
    z80.regs.pc = inc16(z80.regs.pc);
    z80.writeByte(addr, lo(value));
    addr = inc16(addr);
    z80.regs.memptr = addr;
    z80.writeByte(addr, hi(value));
});
fillMap.set(0x76, (z80) => {
    z80.regs.im = 1;
});
fillMap.set(0x56, fillMap.get(0x76));
fillMap.set(0x57, (z80) => {
    let value;
    value = z80.regs.i;
    z80.incTStateCount(1);
    z80.regs.a = value;
    z80.regs.f = (z80.regs.f & Flag.C) | z80.sz53Table[z80.regs.a] | (z80.regs.iff2 ? Flag.V : 0);
});
fillMap.set(0x58, (z80) => {
    z80.regs.memptr = inc16(z80.regs.bc);
    z80.regs.e = z80.readPort(z80.regs.bc);
    z80.regs.f = (z80.regs.f & Flag.C) | z80.sz53pTable[z80.regs.e];
});
fillMap.set(0x59, (z80) => {
    z80.writePort(z80.regs.bc, z80.regs.e);
    z80.regs.memptr = inc16(z80.regs.bc);
});
fillMap.set(0x5A, (z80) => {
    let value;
    z80.incTStateCount(7);
    value = z80.regs.de;
    let result = z80.regs.hl + value;
    if ((z80.regs.f & Flag.C) !== 0) {
        result += 1;
    }
    const lookup = (((z80.regs.hl & 0x8800) >> 11) |
        ((value & 0x8800) >> 10) |
        ((result & 0x8800) >> 9)) & 0xFF;
    z80.regs.memptr = inc16(z80.regs.hl);
    z80.regs.hl = result & 0xFFFF;
    z80.regs.f = ((result & 0x10000) !== 0 ? Flag.C : 0) | overflowAddTable[lookup >> 4] | ((result >> 8) & (Flag.X3 | Flag.X5 | Flag.S)) | halfCarryAddTable[lookup & 0x07] | (result !== 0 ? 0 : Flag.Z);
});
fillMap.set(0x5B, (z80) => {
    let value;
    let addr = z80.readByte(z80.regs.pc);
    z80.regs.pc = inc16(z80.regs.pc);
    addr = word(z80.readByte(z80.regs.pc), addr);
    z80.regs.pc = inc16(z80.regs.pc);
    value = z80.readByte(addr);
    z80.regs.memptr = inc16(addr);
    value = word(z80.readByte(z80.regs.memptr), value);
    z80.regs.de = value;
});
fillMap.set(0x7E, (z80) => {
    z80.regs.im = 2;
});
fillMap.set(0x5E, fillMap.get(0x7E));
fillMap.set(0x5F, (z80) => {
    let value;
    value = z80.regs.rCombined;
    z80.incTStateCount(1);
    z80.regs.a = value;
    z80.regs.f = (z80.regs.f & Flag.C) | z80.sz53Table[z80.regs.a] | (z80.regs.iff2 ? Flag.V : 0);
});
fillMap.set(0x60, (z80) => {
    z80.regs.memptr = inc16(z80.regs.bc);
    z80.regs.h = z80.readPort(z80.regs.bc);
    z80.regs.f = (z80.regs.f & Flag.C) | z80.sz53pTable[z80.regs.h];
});
fillMap.set(0x61, (z80) => {
    z80.writePort(z80.regs.bc, z80.regs.h);
    z80.regs.memptr = inc16(z80.regs.bc);
});
fillMap.set(0x62, (z80) => {
    let value;
    z80.incTStateCount(7);
    value = z80.regs.hl;
    let result = z80.regs.hl - value;
    if ((z80.regs.f & Flag.C) !== 0) {
        result -= 1;
    }
    const lookup = (((z80.regs.hl & 0x8800) >> 11) |
        ((value & 0x8800) >> 10) |
        ((result & 0x8800) >> 9)) & 0xFF;
    z80.regs.memptr = inc16(z80.regs.hl);
    z80.regs.hl = result & 0xFFFF;
    z80.regs.f = ((result & 0x10000) !== 0 ? Flag.C : 0) | Flag.N | overflowSubTable[lookup >> 4] | ((result >> 8) & (Flag.X3 | Flag.X5 | Flag.S)) | halfCarrySubTable[lookup & 0x07] | (result !== 0 ? 0 : Flag.Z);
});
fillMap.set(0x63, (z80) => {
    let value;
    value = z80.regs.hl;
    let addr = z80.readByte(z80.regs.pc);
    z80.regs.pc = inc16(z80.regs.pc);
    addr = word(z80.readByte(z80.regs.pc), addr);
    z80.regs.pc = inc16(z80.regs.pc);
    z80.writeByte(addr, lo(value));
    addr = inc16(addr);
    z80.regs.memptr = addr;
    z80.writeByte(addr, hi(value));
});
fillMap.set(0x67, (z80) => {
    const tmp = z80.readByte(z80.regs.hl);
    z80.incTStateCount(4);
    z80.writeByte(z80.regs.hl, ((z80.regs.a << 4) | (tmp >> 4)) & 0xFF);
    z80.regs.a = (z80.regs.a & 0xF0) | (tmp & 0x0F);
    z80.regs.f = (z80.regs.f & Flag.C) | z80.sz53pTable[z80.regs.a];
    z80.regs.memptr = inc16(z80.regs.hl);
});
fillMap.set(0x68, (z80) => {
    z80.regs.memptr = inc16(z80.regs.bc);
    z80.regs.l = z80.readPort(z80.regs.bc);
    z80.regs.f = (z80.regs.f & Flag.C) | z80.sz53pTable[z80.regs.l];
});
fillMap.set(0x69, (z80) => {
    z80.writePort(z80.regs.bc, z80.regs.l);
    z80.regs.memptr = inc16(z80.regs.bc);
});
fillMap.set(0x6A, (z80) => {
    let value;
    z80.incTStateCount(7);
    value = z80.regs.hl;
    let result = z80.regs.hl + value;
    if ((z80.regs.f & Flag.C) !== 0) {
        result += 1;
    }
    const lookup = (((z80.regs.hl & 0x8800) >> 11) |
        ((value & 0x8800) >> 10) |
        ((result & 0x8800) >> 9)) & 0xFF;
    z80.regs.memptr = inc16(z80.regs.hl);
    z80.regs.hl = result & 0xFFFF;
    z80.regs.f = ((result & 0x10000) !== 0 ? Flag.C : 0) | overflowAddTable[lookup >> 4] | ((result >> 8) & (Flag.X3 | Flag.X5 | Flag.S)) | halfCarryAddTable[lookup & 0x07] | (result !== 0 ? 0 : Flag.Z);
});
fillMap.set(0x6B, (z80) => {
    let value;
    let addr = z80.readByte(z80.regs.pc);
    z80.regs.pc = inc16(z80.regs.pc);
    addr = word(z80.readByte(z80.regs.pc), addr);
    z80.regs.pc = inc16(z80.regs.pc);
    value = z80.readByte(addr);
    z80.regs.memptr = inc16(addr);
    value = word(z80.readByte(z80.regs.memptr), value);
    z80.regs.hl = value;
});
fillMap.set(0x6F, (z80) => {
    const tmp = z80.readByte(z80.regs.hl);
    z80.incTStateCount(4);
    z80.writeByte(z80.regs.hl, ((tmp << 4) | (z80.regs.a & 0x0F)) & 0xFF);
    z80.regs.a = (z80.regs.a & 0xF0) | (tmp >> 4);
    z80.regs.f = (z80.regs.f & Flag.C) | z80.sz53pTable[z80.regs.a];
    z80.regs.memptr = inc16(z80.regs.hl);
});
fillMap.set(0x70, (z80) => {
    z80.regs.memptr = inc16(z80.regs.bc);
    z80.regs.f = z80.readPort(z80.regs.bc);
    z80.regs.f = (z80.regs.f & Flag.C) | z80.sz53pTable[z80.regs.f];
});
fillMap.set(0x71, (z80) => {
    z80.writePort(z80.regs.bc, 0x00);
    z80.regs.memptr = inc16(z80.regs.bc);
});
fillMap.set(0x72, (z80) => {
    let value;
    z80.incTStateCount(7);
    value = z80.regs.sp;
    let result = z80.regs.hl - value;
    if ((z80.regs.f & Flag.C) !== 0) {
        result -= 1;
    }
    const lookup = (((z80.regs.hl & 0x8800) >> 11) |
        ((value & 0x8800) >> 10) |
        ((result & 0x8800) >> 9)) & 0xFF;
    z80.regs.memptr = inc16(z80.regs.hl);
    z80.regs.hl = result & 0xFFFF;
    z80.regs.f = ((result & 0x10000) !== 0 ? Flag.C : 0) | Flag.N | overflowSubTable[lookup >> 4] | ((result >> 8) & (Flag.X3 | Flag.X5 | Flag.S)) | halfCarrySubTable[lookup & 0x07] | (result !== 0 ? 0 : Flag.Z);
});
fillMap.set(0x73, (z80) => {
    let value;
    value = z80.regs.sp;
    let addr = z80.readByte(z80.regs.pc);
    z80.regs.pc = inc16(z80.regs.pc);
    addr = word(z80.readByte(z80.regs.pc), addr);
    z80.regs.pc = inc16(z80.regs.pc);
    z80.writeByte(addr, lo(value));
    addr = inc16(addr);
    z80.regs.memptr = addr;
    z80.writeByte(addr, hi(value));
});
fillMap.set(0x78, (z80) => {
    z80.regs.memptr = inc16(z80.regs.bc);
    z80.regs.a = z80.readPort(z80.regs.bc);
    z80.regs.f = (z80.regs.f & Flag.C) | z80.sz53pTable[z80.regs.a];
});
fillMap.set(0x79, (z80) => {
    z80.writePort(z80.regs.bc, z80.regs.a);
    z80.regs.memptr = inc16(z80.regs.bc);
});
fillMap.set(0x7A, (z80) => {
    let value;
    z80.incTStateCount(7);
    value = z80.regs.sp;
    let result = z80.regs.hl + value;
    if ((z80.regs.f & Flag.C) !== 0) {
        result += 1;
    }
    const lookup = (((z80.regs.hl & 0x8800) >> 11) |
        ((value & 0x8800) >> 10) |
        ((result & 0x8800) >> 9)) & 0xFF;
    z80.regs.memptr = inc16(z80.regs.hl);
    z80.regs.hl = result & 0xFFFF;
    z80.regs.f = ((result & 0x10000) !== 0 ? Flag.C : 0) | overflowAddTable[lookup >> 4] | ((result >> 8) & (Flag.X3 | Flag.X5 | Flag.S)) | halfCarryAddTable[lookup & 0x07] | (result !== 0 ? 0 : Flag.Z);
});
fillMap.set(0x7B, (z80) => {
    let value;
    let addr = z80.readByte(z80.regs.pc);
    z80.regs.pc = inc16(z80.regs.pc);
    addr = word(z80.readByte(z80.regs.pc), addr);
    z80.regs.pc = inc16(z80.regs.pc);
    value = z80.readByte(addr);
    z80.regs.memptr = inc16(addr);
    value = word(z80.readByte(z80.regs.memptr), value);
    z80.regs.sp = value;
});
fillMap.set(0xA0, (z80) => {
    let value = z80.readByte(z80.regs.hl);
    z80.writeByte(z80.regs.de, value);
    z80.incTStateCount(2);
    z80.regs.bc = dec16(z80.regs.bc);
    value = add16(value, z80.regs.a);
    z80.regs.f = (z80.regs.f & (Flag.C | Flag.Z | Flag.S)) | (z80.regs.bc !== 0 ? Flag.V : 0) | (value & Flag.X3) | ((value & 0x02) !== 0 ? Flag.X5 : 0);
    z80.regs.hl = inc16(z80.regs.hl);
    z80.regs.de = inc16(z80.regs.de);
});
fillMap.set(0xA1, (z80) => {
    const value = z80.readByte(z80.regs.hl);
    let diff = (z80.regs.a - value) & 0xFF;
    const lookup = ((z80.regs.a & 0x08) >> 3) | ((value & 0x08) >> 2) | ((diff & 0x08) >> 1);
    z80.incTStateCount(5);
    z80.regs.bc = dec16(z80.regs.bc);
    z80.regs.f = (z80.regs.f & Flag.C) | (z80.regs.bc !== 0 ? Flag.V : 0) | Flag.N | halfCarrySubTable[lookup] | (diff !== 0 ? 0 : Flag.Z) | (diff & Flag.S);
    if ((z80.regs.f & Flag.H) !== 0)
        diff = dec8(diff);
    z80.regs.f |= (diff & Flag.X3) | (((diff & 0x02) !== 0) ? Flag.X5 : 0);
    z80.regs.memptr = inc16(z80.regs.memptr);
    z80.regs.hl = inc16(z80.regs.hl);
});
fillMap.set(0xA2, (z80) => {
    z80.incTStateCount(1);
    const value = z80.readPort(z80.regs.bc);
    z80.writeByte(z80.regs.hl, value);
    z80.regs.memptr = inc16(z80.regs.bc);
    z80.regs.b = dec8(z80.regs.b);
    const other = inc8(add8(value, z80.regs.c));
    z80.regs.f = (value & 0x80 ? Flag.N : 0) | (other < value ? Flag.H | Flag.C : 0) | (z80.parityTable[(other & 0x07) ^ z80.regs.b] ? Flag.P : 0) | z80.sz53Table[z80.regs.b];
    z80.regs.hl = inc16(z80.regs.hl);
});
fillMap.set(0xA3, (z80) => {
    z80.incTStateCount(1);
    const value = z80.readByte(z80.regs.hl);
    z80.regs.b = dec8(z80.regs.b);
    z80.regs.memptr = inc16(z80.regs.bc);
    z80.writePort(z80.regs.bc, value);
    z80.regs.hl = inc16(z80.regs.hl);
    const other = add8(value, z80.regs.l);
    z80.regs.f = (value & 0x80 ? Flag.N : 0) | (other < value ? Flag.H | Flag.C : 0) | (z80.parityTable[(other & 0x07) ^ z80.regs.b] ? Flag.P : 0) | z80.sz53Table[z80.regs.b];
});
fillMap.set(0xA8, (z80) => {
    let value = z80.readByte(z80.regs.hl);
    z80.writeByte(z80.regs.de, value);
    z80.incTStateCount(2);
    z80.regs.bc = dec16(z80.regs.bc);
    value = add16(value, z80.regs.a);
    z80.regs.f = (z80.regs.f & (Flag.C | Flag.Z | Flag.S)) | (z80.regs.bc !== 0 ? Flag.V : 0) | (value & Flag.X3) | ((value & 0x02) !== 0 ? Flag.X5 : 0);
    z80.regs.hl = dec16(z80.regs.hl);
    z80.regs.de = dec16(z80.regs.de);
});
fillMap.set(0xA9, (z80) => {
    const value = z80.readByte(z80.regs.hl);
    let diff = (z80.regs.a - value) & 0xFF;
    const lookup = ((z80.regs.a & 0x08) >> 3) | ((value & 0x08) >> 2) | ((diff & 0x08) >> 1);
    z80.incTStateCount(5);
    z80.regs.bc = dec16(z80.regs.bc);
    z80.regs.f = (z80.regs.f & Flag.C) | (z80.regs.bc !== 0 ? Flag.V : 0) | Flag.N | halfCarrySubTable[lookup] | (diff !== 0 ? 0 : Flag.Z) | (diff & Flag.S);
    if ((z80.regs.f & Flag.H) !== 0)
        diff = dec8(diff);
    z80.regs.f |= (diff & Flag.X3) | (((diff & 0x02) !== 0) ? Flag.X5 : 0);
    z80.regs.memptr = dec16(z80.regs.memptr);
    z80.regs.hl = dec16(z80.regs.hl);
});
fillMap.set(0xAA, (z80) => {
    z80.incTStateCount(1);
    const value = z80.readPort(z80.regs.bc);
    z80.writeByte(z80.regs.hl, value);
    z80.regs.memptr = dec16(z80.regs.bc);
    z80.regs.b = dec8(z80.regs.b);
    const other = dec8(add8(value, z80.regs.c));
    z80.regs.f = (value & 0x80 ? Flag.N : 0) | (other < value ? Flag.H | Flag.C : 0) | (z80.parityTable[(other & 0x07) ^ z80.regs.b] ? Flag.P : 0) | z80.sz53Table[z80.regs.b];
    z80.regs.hl = dec16(z80.regs.hl);
});
fillMap.set(0xAB, (z80) => {
    z80.incTStateCount(1);
    const value = z80.readByte(z80.regs.hl);
    z80.regs.b = dec8(z80.regs.b);
    z80.regs.memptr = dec16(z80.regs.bc);
    z80.writePort(z80.regs.bc, value);
    z80.regs.hl = dec16(z80.regs.hl);
    const other = add8(value, z80.regs.l);
    z80.regs.f = (value & 0x80 ? Flag.N : 0) | (other < value ? Flag.H | Flag.C : 0) | (z80.parityTable[(other & 0x07) ^ z80.regs.b] ? Flag.P : 0) | z80.sz53Table[z80.regs.b];
});
fillMap.set(0xB0, (z80) => {
    let value = z80.readByte(z80.regs.hl);
    z80.writeByte(z80.regs.de, value);
    z80.incTStateCount(2);
    z80.regs.bc = dec16(z80.regs.bc);
    value = add16(value, z80.regs.a);
    z80.regs.f = (z80.regs.f & (Flag.C | Flag.Z | Flag.S)) | (z80.regs.bc !== 0 ? Flag.V : 0) | (value & Flag.X3) | ((value & 0x02) !== 0 ? Flag.X5 : 0);
    if (z80.regs.bc !== 0) {
        z80.incTStateCount(5);
        z80.regs.pc = add16(z80.regs.pc, -2);
        z80.regs.memptr = add16(z80.regs.pc, 1);
    }
    z80.regs.hl = inc16(z80.regs.hl);
    z80.regs.de = inc16(z80.regs.de);
});
fillMap.set(0xB1, (z80) => {
    const value = z80.readByte(z80.regs.hl);
    let diff = (z80.regs.a - value) & 0xFF;
    const lookup = ((z80.regs.a & 0x08) >> 3) | ((value & 0x08) >> 2) | ((diff & 0x08) >> 1);
    z80.incTStateCount(5);
    z80.regs.bc = dec16(z80.regs.bc);
    z80.regs.f = (z80.regs.f & Flag.C) | (z80.regs.bc !== 0 ? Flag.V : 0) | Flag.N | halfCarrySubTable[lookup] | (diff !== 0 ? 0 : Flag.Z) | (diff & Flag.S);
    if ((z80.regs.f & Flag.H) !== 0)
        diff = dec8(diff);
    z80.regs.f |= (diff & Flag.X3) | (((diff & 0x02) !== 0) ? Flag.X5 : 0);
    if ((z80.regs.f & (Flag.V | Flag.Z)) === Flag.V) {
        z80.incTStateCount(5);
        z80.regs.pc = add16(z80.regs.pc, -2);
        z80.regs.memptr = add16(z80.regs.pc, 1);
    }
    else {
        z80.regs.memptr = inc16(z80.regs.memptr);
    }
    z80.regs.hl = inc16(z80.regs.hl);
});
fillMap.set(0xB2, (z80) => {
    z80.incTStateCount(1);
    const value = z80.readPort(z80.regs.bc);
    z80.writeByte(z80.regs.hl, value);
    z80.regs.memptr = inc16(z80.regs.bc);
    z80.regs.b = dec8(z80.regs.b);
    const other = inc8(add8(value, z80.regs.c));
    z80.regs.f = (value & 0x80 ? Flag.N : 0) | (other < value ? Flag.H | Flag.C : 0) | (z80.parityTable[(other & 0x07) ^ z80.regs.b] ? Flag.P : 0) | z80.sz53Table[z80.regs.b];
    if (z80.regs.b > 0) {
        z80.incTStateCount(5);
        z80.regs.pc = add16(z80.regs.pc, -2);
    }
    z80.regs.hl = inc16(z80.regs.hl);
});
fillMap.set(0xB3, (z80) => {
    z80.incTStateCount(1);
    const value = z80.readByte(z80.regs.hl);
    z80.regs.b = dec8(z80.regs.b);
    z80.regs.memptr = inc16(z80.regs.bc);
    z80.writePort(z80.regs.bc, value);
    z80.regs.hl = inc16(z80.regs.hl);
    const other = add8(value, z80.regs.l);
    z80.regs.f = (value & 0x80 ? Flag.N : 0) | (other < value ? Flag.H | Flag.C : 0) | (z80.parityTable[(other & 0x07) ^ z80.regs.b] ? Flag.P : 0) | z80.sz53Table[z80.regs.b];
    if (z80.regs.b > 0) {
        z80.incTStateCount(5);
        z80.regs.pc = add16(z80.regs.pc, -2);
    }
});
fillMap.set(0xB8, (z80) => {
    let value = z80.readByte(z80.regs.hl);
    z80.writeByte(z80.regs.de, value);
    z80.incTStateCount(2);
    z80.regs.bc = dec16(z80.regs.bc);
    value = add16(value, z80.regs.a);
    z80.regs.f = (z80.regs.f & (Flag.C | Flag.Z | Flag.S)) | (z80.regs.bc !== 0 ? Flag.V : 0) | (value & Flag.X3) | ((value & 0x02) !== 0 ? Flag.X5 : 0);
    if (z80.regs.bc !== 0) {
        z80.incTStateCount(5);
        z80.regs.pc = add16(z80.regs.pc, -2);
        z80.regs.memptr = add16(z80.regs.pc, 1);
    }
    z80.regs.hl = dec16(z80.regs.hl);
    z80.regs.de = dec16(z80.regs.de);
});
fillMap.set(0xB9, (z80) => {
    const value = z80.readByte(z80.regs.hl);
    let diff = (z80.regs.a - value) & 0xFF;
    const lookup = ((z80.regs.a & 0x08) >> 3) | ((value & 0x08) >> 2) | ((diff & 0x08) >> 1);
    z80.incTStateCount(5);
    z80.regs.bc = dec16(z80.regs.bc);
    z80.regs.f = (z80.regs.f & Flag.C) | (z80.regs.bc !== 0 ? Flag.V : 0) | Flag.N | halfCarrySubTable[lookup] | (diff !== 0 ? 0 : Flag.Z) | (diff & Flag.S);
    if ((z80.regs.f & Flag.H) !== 0)
        diff = dec8(diff);
    z80.regs.f |= (diff & Flag.X3) | (((diff & 0x02) !== 0) ? Flag.X5 : 0);
    if ((z80.regs.f & (Flag.V | Flag.Z)) === Flag.V) {
        z80.incTStateCount(5);
        z80.regs.pc = add16(z80.regs.pc, -2);
        z80.regs.memptr = add16(z80.regs.pc, 1);
    }
    else {
        z80.regs.memptr = dec16(z80.regs.memptr);
    }
    z80.regs.hl = dec16(z80.regs.hl);
});
fillMap.set(0xBA, (z80) => {
    z80.incTStateCount(1);
    const value = z80.readPort(z80.regs.bc);
    z80.writeByte(z80.regs.hl, value);
    z80.regs.memptr = dec16(z80.regs.bc);
    z80.regs.b = dec8(z80.regs.b);
    const other = dec8(add8(value, z80.regs.c));
    z80.regs.f = (value & 0x80 ? Flag.N : 0) | (other < value ? Flag.H | Flag.C : 0) | (z80.parityTable[(other & 0x07) ^ z80.regs.b] ? Flag.P : 0) | z80.sz53Table[z80.regs.b];
    if (z80.regs.b > 0) {
        z80.incTStateCount(5);
        z80.regs.pc = add16(z80.regs.pc, -2);
    }
    z80.regs.hl = dec16(z80.regs.hl);
});
fillMap.set(0xBB, (z80) => {
    z80.incTStateCount(1);
    const value = z80.readByte(z80.regs.hl);
    z80.regs.b = dec8(z80.regs.b);
    z80.regs.memptr = dec16(z80.regs.bc);
    z80.writePort(z80.regs.bc, value);
    z80.regs.hl = dec16(z80.regs.hl);
    const other = add8(value, z80.regs.l);
    z80.regs.f = (value & 0x80 ? Flag.N : 0) | (other < value ? Flag.H | Flag.C : 0) | (z80.parityTable[(other & 0x07) ^ z80.regs.b] ? Flag.P : 0) | z80.sz53Table[z80.regs.b];
    if (z80.regs.b > 0) {
        z80.incTStateCount(5);
        z80.regs.pc = add16(z80.regs.pc, -2);
    }
});
const decodeMapFD = new Map();
fillMap = decodeMapFD;
// The contents of this map are auto-generated by GenerateOpcodes.ts.
fillMap.set(0x09, (z80) => {
    let value;
    z80.incTStateCount(7);
    value = z80.regs.bc;
    let result = z80.regs.iy + value;
    const lookup = (((z80.regs.iy & 0x0800) >> 11) |
        ((value & 0x0800) >> 10) |
        ((result & 0x0800) >> 9)) & 0xFF;
    z80.regs.memptr = inc16(z80.regs.iy);
    z80.regs.iy = result & 0xFFFF;
    z80.regs.f = (z80.regs.f & (Flag.V | Flag.Z | Flag.S)) | ((result & 0x10000) !== 0 ? Flag.C : 0) | ((result >> 8) & (Flag.X3 | Flag.X5)) | halfCarryAddTable[lookup];
});
fillMap.set(0x19, (z80) => {
    let value;
    z80.incTStateCount(7);
    value = z80.regs.de;
    let result = z80.regs.iy + value;
    const lookup = (((z80.regs.iy & 0x0800) >> 11) |
        ((value & 0x0800) >> 10) |
        ((result & 0x0800) >> 9)) & 0xFF;
    z80.regs.memptr = inc16(z80.regs.iy);
    z80.regs.iy = result & 0xFFFF;
    z80.regs.f = (z80.regs.f & (Flag.V | Flag.Z | Flag.S)) | ((result & 0x10000) !== 0 ? Flag.C : 0) | ((result >> 8) & (Flag.X3 | Flag.X5)) | halfCarryAddTable[lookup];
});
fillMap.set(0x21, (z80) => {
    let value;
    value = z80.readByte(z80.regs.pc);
    z80.regs.pc = inc16(z80.regs.pc);
    value = word(z80.readByte(z80.regs.pc), value);
    z80.regs.pc = inc16(z80.regs.pc);
    z80.regs.iy = value;
});
fillMap.set(0x22, (z80) => {
    let value;
    value = z80.regs.iy;
    let addr = z80.readByte(z80.regs.pc);
    z80.regs.pc = inc16(z80.regs.pc);
    addr = word(z80.readByte(z80.regs.pc), addr);
    z80.regs.pc = inc16(z80.regs.pc);
    z80.writeByte(addr, lo(value));
    addr = inc16(addr);
    z80.regs.memptr = addr;
    z80.writeByte(addr, hi(value));
});
fillMap.set(0x23, (z80) => {
    let value;
    value = z80.regs.iy;
    const oldValue = value;
    z80.incTStateCount(2);
    value = inc16(value);
    z80.regs.iy = value;
});
fillMap.set(0x24, (z80) => {
    let value;
    value = z80.regs.iyh;
    const oldValue = value;
    value = inc8(value);
    z80.regs.f = (z80.regs.f & Flag.C) | (value === 0x80 ? Flag.V : 0) | ((value & 0x0F) !== 0 ? 0 : Flag.H) | z80.sz53Table[value];
    z80.regs.iyh = value;
});
fillMap.set(0x25, (z80) => {
    let value;
    value = z80.regs.iyh;
    const oldValue = value;
    value = dec8(value);
    z80.regs.f = (z80.regs.f & Flag.C) | (value === 0x7F ? Flag.V : 0) | ((oldValue & 0x0F) !== 0 ? 0 : Flag.H) | Flag.N | z80.sz53Table[value];
    z80.regs.iyh = value;
});
fillMap.set(0x26, (z80) => {
    let value;
    value = z80.readByte(z80.regs.pc);
    z80.regs.pc = inc16(z80.regs.pc);
    z80.regs.iyh = value;
});
fillMap.set(0x29, (z80) => {
    let value;
    z80.incTStateCount(7);
    value = z80.regs.iy;
    let result = z80.regs.iy + value;
    const lookup = (((z80.regs.iy & 0x0800) >> 11) |
        ((value & 0x0800) >> 10) |
        ((result & 0x0800) >> 9)) & 0xFF;
    z80.regs.memptr = inc16(z80.regs.iy);
    z80.regs.iy = result & 0xFFFF;
    z80.regs.f = (z80.regs.f & (Flag.V | Flag.Z | Flag.S)) | ((result & 0x10000) !== 0 ? Flag.C : 0) | ((result >> 8) & (Flag.X3 | Flag.X5)) | halfCarryAddTable[lookup];
});
fillMap.set(0x2A, (z80) => {
    let value;
    let addr = z80.readByte(z80.regs.pc);
    z80.regs.pc = inc16(z80.regs.pc);
    addr = word(z80.readByte(z80.regs.pc), addr);
    z80.regs.pc = inc16(z80.regs.pc);
    value = z80.readByte(addr);
    z80.regs.memptr = inc16(addr);
    value = word(z80.readByte(z80.regs.memptr), value);
    z80.regs.iy = value;
});
fillMap.set(0x2B, (z80) => {
    let value;
    value = z80.regs.iy;
    const oldValue = value;
    z80.incTStateCount(2);
    value = dec16(value);
    z80.regs.iy = value;
});
fillMap.set(0x2C, (z80) => {
    let value;
    value = z80.regs.iyl;
    const oldValue = value;
    value = inc8(value);
    z80.regs.f = (z80.regs.f & Flag.C) | (value === 0x80 ? Flag.V : 0) | ((value & 0x0F) !== 0 ? 0 : Flag.H) | z80.sz53Table[value];
    z80.regs.iyl = value;
});
fillMap.set(0x2D, (z80) => {
    let value;
    value = z80.regs.iyl;
    const oldValue = value;
    value = dec8(value);
    z80.regs.f = (z80.regs.f & Flag.C) | (value === 0x7F ? Flag.V : 0) | ((oldValue & 0x0F) !== 0 ? 0 : Flag.H) | Flag.N | z80.sz53Table[value];
    z80.regs.iyl = value;
});
fillMap.set(0x2E, (z80) => {
    let value;
    value = z80.readByte(z80.regs.pc);
    z80.regs.pc = inc16(z80.regs.pc);
    z80.regs.iyl = value;
});
fillMap.set(0x34, (z80) => {
    let value;
    const offset = z80.readByte(z80.regs.pc);
    z80.incTStateCount(5);
    z80.regs.pc = inc16(z80.regs.pc);
    z80.regs.memptr = add16(z80.regs.iy, signedByte(offset));
    value = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    const oldValue = value;
    value = inc8(value);
    z80.regs.f = (z80.regs.f & Flag.C) | (value === 0x80 ? Flag.V : 0) | ((value & 0x0F) !== 0 ? 0 : Flag.H) | z80.sz53Table[value];
    z80.writeByte(z80.regs.memptr, value);
});
fillMap.set(0x35, (z80) => {
    let value;
    const offset = z80.readByte(z80.regs.pc);
    z80.incTStateCount(5);
    z80.regs.pc = inc16(z80.regs.pc);
    z80.regs.memptr = add16(z80.regs.iy, signedByte(offset));
    value = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    const oldValue = value;
    value = dec8(value);
    z80.regs.f = (z80.regs.f & Flag.C) | (value === 0x7F ? Flag.V : 0) | ((oldValue & 0x0F) !== 0 ? 0 : Flag.H) | Flag.N | z80.sz53Table[value];
    z80.writeByte(z80.regs.memptr, value);
});
fillMap.set(0x36, (z80) => {
    const dd = z80.readByte(z80.regs.pc);
    z80.regs.pc = inc16(z80.regs.pc);
    let value;
    value = z80.readByte(z80.regs.pc);
    z80.incTStateCount(2);
    z80.regs.pc = inc16(z80.regs.pc);
    z80.regs.memptr = (z80.regs.iy + signedByte(dd)) & 0xFFFF;
    z80.writeByte(z80.regs.memptr, value);
});
fillMap.set(0x39, (z80) => {
    let value;
    z80.incTStateCount(7);
    value = z80.regs.sp;
    let result = z80.regs.iy + value;
    const lookup = (((z80.regs.iy & 0x0800) >> 11) |
        ((value & 0x0800) >> 10) |
        ((result & 0x0800) >> 9)) & 0xFF;
    z80.regs.memptr = inc16(z80.regs.iy);
    z80.regs.iy = result & 0xFFFF;
    z80.regs.f = (z80.regs.f & (Flag.V | Flag.Z | Flag.S)) | ((result & 0x10000) !== 0 ? Flag.C : 0) | ((result >> 8) & (Flag.X3 | Flag.X5)) | halfCarryAddTable[lookup];
});
fillMap.set(0x44, (z80) => {
    let value;
    value = z80.regs.iyh;
    z80.regs.b = value;
});
fillMap.set(0x45, (z80) => {
    let value;
    value = z80.regs.iyl;
    z80.regs.b = value;
});
fillMap.set(0x46, (z80) => {
    let value;
    value = z80.readByte(z80.regs.pc);
    z80.incTStateCount(5);
    z80.regs.pc = inc16(z80.regs.pc);
    z80.regs.memptr = (z80.regs.iy + signedByte(value)) & 0xFFFF;
    value = z80.readByte(z80.regs.memptr);
    z80.regs.b = value;
});
fillMap.set(0x4C, (z80) => {
    let value;
    value = z80.regs.iyh;
    z80.regs.c = value;
});
fillMap.set(0x4D, (z80) => {
    let value;
    value = z80.regs.iyl;
    z80.regs.c = value;
});
fillMap.set(0x4E, (z80) => {
    let value;
    value = z80.readByte(z80.regs.pc);
    z80.incTStateCount(5);
    z80.regs.pc = inc16(z80.regs.pc);
    z80.regs.memptr = (z80.regs.iy + signedByte(value)) & 0xFFFF;
    value = z80.readByte(z80.regs.memptr);
    z80.regs.c = value;
});
fillMap.set(0x54, (z80) => {
    let value;
    value = z80.regs.iyh;
    z80.regs.d = value;
});
fillMap.set(0x55, (z80) => {
    let value;
    value = z80.regs.iyl;
    z80.regs.d = value;
});
fillMap.set(0x56, (z80) => {
    let value;
    value = z80.readByte(z80.regs.pc);
    z80.incTStateCount(5);
    z80.regs.pc = inc16(z80.regs.pc);
    z80.regs.memptr = (z80.regs.iy + signedByte(value)) & 0xFFFF;
    value = z80.readByte(z80.regs.memptr);
    z80.regs.d = value;
});
fillMap.set(0x5C, (z80) => {
    let value;
    value = z80.regs.iyh;
    z80.regs.e = value;
});
fillMap.set(0x5D, (z80) => {
    let value;
    value = z80.regs.iyl;
    z80.regs.e = value;
});
fillMap.set(0x5E, (z80) => {
    let value;
    value = z80.readByte(z80.regs.pc);
    z80.incTStateCount(5);
    z80.regs.pc = inc16(z80.regs.pc);
    z80.regs.memptr = (z80.regs.iy + signedByte(value)) & 0xFFFF;
    value = z80.readByte(z80.regs.memptr);
    z80.regs.e = value;
});
fillMap.set(0x60, (z80) => {
    let value;
    value = z80.regs.b;
    z80.regs.iyh = value;
});
fillMap.set(0x61, (z80) => {
    let value;
    value = z80.regs.c;
    z80.regs.iyh = value;
});
fillMap.set(0x62, (z80) => {
    let value;
    value = z80.regs.d;
    z80.regs.iyh = value;
});
fillMap.set(0x63, (z80) => {
    let value;
    value = z80.regs.e;
    z80.regs.iyh = value;
});
fillMap.set(0x64, (z80) => {
    let value;
    value = z80.regs.iyh;
    z80.regs.iyh = value;
});
fillMap.set(0x65, (z80) => {
    let value;
    value = z80.regs.iyl;
    z80.regs.iyh = value;
});
fillMap.set(0x66, (z80) => {
    let value;
    value = z80.readByte(z80.regs.pc);
    z80.incTStateCount(5);
    z80.regs.pc = inc16(z80.regs.pc);
    z80.regs.memptr = (z80.regs.iy + signedByte(value)) & 0xFFFF;
    value = z80.readByte(z80.regs.memptr);
    z80.regs.h = value;
});
fillMap.set(0x67, (z80) => {
    let value;
    value = z80.regs.a;
    z80.regs.iyh = value;
});
fillMap.set(0x68, (z80) => {
    let value;
    value = z80.regs.b;
    z80.regs.iyl = value;
});
fillMap.set(0x69, (z80) => {
    let value;
    value = z80.regs.c;
    z80.regs.iyl = value;
});
fillMap.set(0x6A, (z80) => {
    let value;
    value = z80.regs.d;
    z80.regs.iyl = value;
});
fillMap.set(0x6B, (z80) => {
    let value;
    value = z80.regs.e;
    z80.regs.iyl = value;
});
fillMap.set(0x6C, (z80) => {
    let value;
    value = z80.regs.iyh;
    z80.regs.iyl = value;
});
fillMap.set(0x6D, (z80) => {
    let value;
    value = z80.regs.iyl;
    z80.regs.iyl = value;
});
fillMap.set(0x6E, (z80) => {
    let value;
    value = z80.readByte(z80.regs.pc);
    z80.incTStateCount(5);
    z80.regs.pc = inc16(z80.regs.pc);
    z80.regs.memptr = (z80.regs.iy + signedByte(value)) & 0xFFFF;
    value = z80.readByte(z80.regs.memptr);
    z80.regs.l = value;
});
fillMap.set(0x6F, (z80) => {
    let value;
    value = z80.regs.a;
    z80.regs.iyl = value;
});
fillMap.set(0x70, (z80) => {
    const dd = z80.readByte(z80.regs.pc);
    z80.incTStateCount(5);
    z80.regs.pc = inc16(z80.regs.pc);
    let value;
    value = z80.regs.b;
    z80.regs.memptr = (z80.regs.iy + signedByte(dd)) & 0xFFFF;
    z80.writeByte(z80.regs.memptr, value);
});
fillMap.set(0x71, (z80) => {
    const dd = z80.readByte(z80.regs.pc);
    z80.incTStateCount(5);
    z80.regs.pc = inc16(z80.regs.pc);
    let value;
    value = z80.regs.c;
    z80.regs.memptr = (z80.regs.iy + signedByte(dd)) & 0xFFFF;
    z80.writeByte(z80.regs.memptr, value);
});
fillMap.set(0x72, (z80) => {
    const dd = z80.readByte(z80.regs.pc);
    z80.incTStateCount(5);
    z80.regs.pc = inc16(z80.regs.pc);
    let value;
    value = z80.regs.d;
    z80.regs.memptr = (z80.regs.iy + signedByte(dd)) & 0xFFFF;
    z80.writeByte(z80.regs.memptr, value);
});
fillMap.set(0x73, (z80) => {
    const dd = z80.readByte(z80.regs.pc);
    z80.incTStateCount(5);
    z80.regs.pc = inc16(z80.regs.pc);
    let value;
    value = z80.regs.e;
    z80.regs.memptr = (z80.regs.iy + signedByte(dd)) & 0xFFFF;
    z80.writeByte(z80.regs.memptr, value);
});
fillMap.set(0x74, (z80) => {
    const dd = z80.readByte(z80.regs.pc);
    z80.incTStateCount(5);
    z80.regs.pc = inc16(z80.regs.pc);
    let value;
    value = z80.regs.h;
    z80.regs.memptr = (z80.regs.iy + signedByte(dd)) & 0xFFFF;
    z80.writeByte(z80.regs.memptr, value);
});
fillMap.set(0x75, (z80) => {
    const dd = z80.readByte(z80.regs.pc);
    z80.incTStateCount(5);
    z80.regs.pc = inc16(z80.regs.pc);
    let value;
    value = z80.regs.l;
    z80.regs.memptr = (z80.regs.iy + signedByte(dd)) & 0xFFFF;
    z80.writeByte(z80.regs.memptr, value);
});
fillMap.set(0x77, (z80) => {
    const dd = z80.readByte(z80.regs.pc);
    z80.incTStateCount(5);
    z80.regs.pc = inc16(z80.regs.pc);
    let value;
    value = z80.regs.a;
    z80.regs.memptr = (z80.regs.iy + signedByte(dd)) & 0xFFFF;
    z80.writeByte(z80.regs.memptr, value);
});
fillMap.set(0x7C, (z80) => {
    let value;
    value = z80.regs.iyh;
    z80.regs.a = value;
});
fillMap.set(0x7D, (z80) => {
    let value;
    value = z80.regs.iyl;
    z80.regs.a = value;
});
fillMap.set(0x7E, (z80) => {
    let value;
    value = z80.readByte(z80.regs.pc);
    z80.incTStateCount(5);
    z80.regs.pc = inc16(z80.regs.pc);
    z80.regs.memptr = (z80.regs.iy + signedByte(value)) & 0xFFFF;
    value = z80.readByte(z80.regs.memptr);
    z80.regs.a = value;
});
fillMap.set(0x84, (z80) => {
    let value;
    value = z80.regs.iyh;
    let result = add16(z80.regs.a, value);
    const lookup = (((z80.regs.a & 0x88) >> 3) |
        ((value & 0x88) >> 2) |
        ((result & 0x88) >> 1)) & 0xFF;
    z80.regs.a = result & 0xFF;
    z80.regs.f = (((result & 0x100) !== 0) ? Flag.C : 0) | halfCarryAddTable[lookup & 0x07] | overflowAddTable[lookup >> 4] | z80.sz53Table[z80.regs.a];
});
fillMap.set(0x85, (z80) => {
    let value;
    value = z80.regs.iyl;
    let result = add16(z80.regs.a, value);
    const lookup = (((z80.regs.a & 0x88) >> 3) |
        ((value & 0x88) >> 2) |
        ((result & 0x88) >> 1)) & 0xFF;
    z80.regs.a = result & 0xFF;
    z80.regs.f = (((result & 0x100) !== 0) ? Flag.C : 0) | halfCarryAddTable[lookup & 0x07] | overflowAddTable[lookup >> 4] | z80.sz53Table[z80.regs.a];
});
fillMap.set(0x86, (z80) => {
    let value;
    value = z80.readByte(z80.regs.pc);
    z80.incTStateCount(5);
    z80.regs.pc = inc16(z80.regs.pc);
    z80.regs.memptr = (z80.regs.iy + signedByte(value)) & 0xFFFF;
    value = z80.readByte(z80.regs.memptr);
    let result = add16(z80.regs.a, value);
    const lookup = (((z80.regs.a & 0x88) >> 3) |
        ((value & 0x88) >> 2) |
        ((result & 0x88) >> 1)) & 0xFF;
    z80.regs.a = result & 0xFF;
    z80.regs.f = (((result & 0x100) !== 0) ? Flag.C : 0) | halfCarryAddTable[lookup & 0x07] | overflowAddTable[lookup >> 4] | z80.sz53Table[z80.regs.a];
});
fillMap.set(0x8C, (z80) => {
    let value;
    value = z80.regs.iyh;
    let result = add16(z80.regs.a, value);
    if ((z80.regs.f & Flag.C) !== 0) {
        result = inc16(result);
    }
    const lookup = (((z80.regs.a & 0x88) >> 3) |
        ((value & 0x88) >> 2) |
        ((result & 0x88) >> 1)) & 0xFF;
    z80.regs.a = result & 0xFF;
    z80.regs.f = (((result & 0x100) !== 0) ? Flag.C : 0) | halfCarryAddTable[lookup & 0x07] | overflowAddTable[lookup >> 4] | z80.sz53Table[z80.regs.a];
});
fillMap.set(0x8D, (z80) => {
    let value;
    value = z80.regs.iyl;
    let result = add16(z80.regs.a, value);
    if ((z80.regs.f & Flag.C) !== 0) {
        result = inc16(result);
    }
    const lookup = (((z80.regs.a & 0x88) >> 3) |
        ((value & 0x88) >> 2) |
        ((result & 0x88) >> 1)) & 0xFF;
    z80.regs.a = result & 0xFF;
    z80.regs.f = (((result & 0x100) !== 0) ? Flag.C : 0) | halfCarryAddTable[lookup & 0x07] | overflowAddTable[lookup >> 4] | z80.sz53Table[z80.regs.a];
});
fillMap.set(0x8E, (z80) => {
    let value;
    value = z80.readByte(z80.regs.pc);
    z80.incTStateCount(5);
    z80.regs.pc = inc16(z80.regs.pc);
    z80.regs.memptr = (z80.regs.iy + signedByte(value)) & 0xFFFF;
    value = z80.readByte(z80.regs.memptr);
    let result = add16(z80.regs.a, value);
    if ((z80.regs.f & Flag.C) !== 0) {
        result = inc16(result);
    }
    const lookup = (((z80.regs.a & 0x88) >> 3) |
        ((value & 0x88) >> 2) |
        ((result & 0x88) >> 1)) & 0xFF;
    z80.regs.a = result & 0xFF;
    z80.regs.f = (((result & 0x100) !== 0) ? Flag.C : 0) | halfCarryAddTable[lookup & 0x07] | overflowAddTable[lookup >> 4] | z80.sz53Table[z80.regs.a];
});
fillMap.set(0x94, (z80) => {
    let value;
    value = z80.regs.iyh;
    let result = sub16(z80.regs.a, value);
    const lookup = (((z80.regs.a & 0x88) >> 3) |
        ((value & 0x88) >> 2) |
        ((result & 0x88) >> 1)) & 0xFF;
    z80.regs.a = result & 0xFF;
    z80.regs.f = (((result & 0x100) !== 0) ? Flag.C : 0) | Flag.N | halfCarrySubTable[lookup & 0x07] | overflowSubTable[lookup >> 4] | z80.sz53Table[z80.regs.a];
});
fillMap.set(0x95, (z80) => {
    let value;
    value = z80.regs.iyl;
    let result = sub16(z80.regs.a, value);
    const lookup = (((z80.regs.a & 0x88) >> 3) |
        ((value & 0x88) >> 2) |
        ((result & 0x88) >> 1)) & 0xFF;
    z80.regs.a = result & 0xFF;
    z80.regs.f = (((result & 0x100) !== 0) ? Flag.C : 0) | Flag.N | halfCarrySubTable[lookup & 0x07] | overflowSubTable[lookup >> 4] | z80.sz53Table[z80.regs.a];
});
fillMap.set(0x96, (z80) => {
    let value;
    value = z80.readByte(z80.regs.pc);
    z80.incTStateCount(5);
    z80.regs.pc = inc16(z80.regs.pc);
    z80.regs.memptr = (z80.regs.iy + signedByte(value)) & 0xFFFF;
    value = z80.readByte(z80.regs.memptr);
    let result = sub16(z80.regs.a, value);
    const lookup = (((z80.regs.a & 0x88) >> 3) |
        ((value & 0x88) >> 2) |
        ((result & 0x88) >> 1)) & 0xFF;
    z80.regs.a = result & 0xFF;
    z80.regs.f = (((result & 0x100) !== 0) ? Flag.C : 0) | Flag.N | halfCarrySubTable[lookup & 0x07] | overflowSubTable[lookup >> 4] | z80.sz53Table[z80.regs.a];
});
fillMap.set(0x9C, (z80) => {
    let value;
    value = z80.regs.iyh;
    let result = sub16(z80.regs.a, value);
    if ((z80.regs.f & Flag.C) !== 0) {
        result = dec16(result);
    }
    const lookup = (((z80.regs.a & 0x88) >> 3) |
        ((value & 0x88) >> 2) |
        ((result & 0x88) >> 1)) & 0xFF;
    z80.regs.a = result & 0xFF;
    z80.regs.f = (((result & 0x100) !== 0) ? Flag.C : 0) | Flag.N | halfCarrySubTable[lookup & 0x07] | overflowSubTable[lookup >> 4] | z80.sz53Table[z80.regs.a];
});
fillMap.set(0x9D, (z80) => {
    let value;
    value = z80.regs.iyl;
    let result = sub16(z80.regs.a, value);
    if ((z80.regs.f & Flag.C) !== 0) {
        result = dec16(result);
    }
    const lookup = (((z80.regs.a & 0x88) >> 3) |
        ((value & 0x88) >> 2) |
        ((result & 0x88) >> 1)) & 0xFF;
    z80.regs.a = result & 0xFF;
    z80.regs.f = (((result & 0x100) !== 0) ? Flag.C : 0) | Flag.N | halfCarrySubTable[lookup & 0x07] | overflowSubTable[lookup >> 4] | z80.sz53Table[z80.regs.a];
});
fillMap.set(0x9E, (z80) => {
    let value;
    value = z80.readByte(z80.regs.pc);
    z80.incTStateCount(5);
    z80.regs.pc = inc16(z80.regs.pc);
    z80.regs.memptr = (z80.regs.iy + signedByte(value)) & 0xFFFF;
    value = z80.readByte(z80.regs.memptr);
    let result = sub16(z80.regs.a, value);
    if ((z80.regs.f & Flag.C) !== 0) {
        result = dec16(result);
    }
    const lookup = (((z80.regs.a & 0x88) >> 3) |
        ((value & 0x88) >> 2) |
        ((result & 0x88) >> 1)) & 0xFF;
    z80.regs.a = result & 0xFF;
    z80.regs.f = (((result & 0x100) !== 0) ? Flag.C : 0) | Flag.N | halfCarrySubTable[lookup & 0x07] | overflowSubTable[lookup >> 4] | z80.sz53Table[z80.regs.a];
});
fillMap.set(0xA4, (z80) => {
    let value;
    value = z80.regs.iyh;
    z80.regs.a &= value;
    z80.regs.f = z80.sz53pTable[z80.regs.a];
    z80.regs.f |= Flag.H;
});
fillMap.set(0xA5, (z80) => {
    let value;
    value = z80.regs.iyl;
    z80.regs.a &= value;
    z80.regs.f = z80.sz53pTable[z80.regs.a];
    z80.regs.f |= Flag.H;
});
fillMap.set(0xA6, (z80) => {
    let value;
    value = z80.readByte(z80.regs.pc);
    z80.incTStateCount(5);
    z80.regs.pc = inc16(z80.regs.pc);
    z80.regs.memptr = (z80.regs.iy + signedByte(value)) & 0xFFFF;
    value = z80.readByte(z80.regs.memptr);
    z80.regs.a &= value;
    z80.regs.f = z80.sz53pTable[z80.regs.a];
    z80.regs.f |= Flag.H;
});
fillMap.set(0xAC, (z80) => {
    let value;
    value = z80.regs.iyh;
    z80.regs.a ^= value;
    z80.regs.f = z80.sz53pTable[z80.regs.a];
});
fillMap.set(0xAD, (z80) => {
    let value;
    value = z80.regs.iyl;
    z80.regs.a ^= value;
    z80.regs.f = z80.sz53pTable[z80.regs.a];
});
fillMap.set(0xAE, (z80) => {
    let value;
    value = z80.readByte(z80.regs.pc);
    z80.incTStateCount(5);
    z80.regs.pc = inc16(z80.regs.pc);
    z80.regs.memptr = (z80.regs.iy + signedByte(value)) & 0xFFFF;
    value = z80.readByte(z80.regs.memptr);
    z80.regs.a ^= value;
    z80.regs.f = z80.sz53pTable[z80.regs.a];
});
fillMap.set(0xB4, (z80) => {
    let value;
    value = z80.regs.iyh;
    z80.regs.a |= value;
    z80.regs.f = z80.sz53pTable[z80.regs.a];
});
fillMap.set(0xB5, (z80) => {
    let value;
    value = z80.regs.iyl;
    z80.regs.a |= value;
    z80.regs.f = z80.sz53pTable[z80.regs.a];
});
fillMap.set(0xB6, (z80) => {
    let value;
    value = z80.readByte(z80.regs.pc);
    z80.incTStateCount(5);
    z80.regs.pc = inc16(z80.regs.pc);
    z80.regs.memptr = (z80.regs.iy + signedByte(value)) & 0xFFFF;
    value = z80.readByte(z80.regs.memptr);
    z80.regs.a |= value;
    z80.regs.f = z80.sz53pTable[z80.regs.a];
});
fillMap.set(0xBC, (z80) => {
    let value;
    value = z80.regs.iyh;
    const diff = (z80.regs.a - value) & 0xFFFF;
    const lookup = (((z80.regs.a & 0x88) >> 3) |
        ((value & 0x88) >> 2) |
        ((diff & 0x88) >> 1)) & 0xFF;
    let f = Flag.N;
    if ((diff & 0x100) != 0)
        f |= Flag.C;
    if (diff == 0)
        f |= Flag.Z;
    f |= halfCarrySubTable[lookup & 0x07];
    f |= overflowSubTable[lookup >> 4];
    f |= value & (Flag.X3 | Flag.X5);
    f |= diff & Flag.S;
    z80.regs.af = word(z80.regs.a, f);
});
fillMap.set(0xBD, (z80) => {
    let value;
    value = z80.regs.iyl;
    const diff = (z80.regs.a - value) & 0xFFFF;
    const lookup = (((z80.regs.a & 0x88) >> 3) |
        ((value & 0x88) >> 2) |
        ((diff & 0x88) >> 1)) & 0xFF;
    let f = Flag.N;
    if ((diff & 0x100) != 0)
        f |= Flag.C;
    if (diff == 0)
        f |= Flag.Z;
    f |= halfCarrySubTable[lookup & 0x07];
    f |= overflowSubTable[lookup >> 4];
    f |= value & (Flag.X3 | Flag.X5);
    f |= diff & Flag.S;
    z80.regs.af = word(z80.regs.a, f);
});
fillMap.set(0xBE, (z80) => {
    let value;
    value = z80.readByte(z80.regs.pc);
    z80.incTStateCount(5);
    z80.regs.pc = inc16(z80.regs.pc);
    z80.regs.memptr = (z80.regs.iy + signedByte(value)) & 0xFFFF;
    value = z80.readByte(z80.regs.memptr);
    const diff = (z80.regs.a - value) & 0xFFFF;
    const lookup = (((z80.regs.a & 0x88) >> 3) |
        ((value & 0x88) >> 2) |
        ((diff & 0x88) >> 1)) & 0xFF;
    let f = Flag.N;
    if ((diff & 0x100) != 0)
        f |= Flag.C;
    if (diff == 0)
        f |= Flag.Z;
    f |= halfCarrySubTable[lookup & 0x07];
    f |= overflowSubTable[lookup >> 4];
    f |= value & (Flag.X3 | Flag.X5);
    f |= diff & Flag.S;
    z80.regs.af = word(z80.regs.a, f);
});
fillMap.set(0xCB, (z80) => {
    decodeFDCB(z80);
});
fillMap.set(0xE1, (z80) => {
    z80.regs.iy = z80.popWord();
});
fillMap.set(0xE3, (z80) => {
    const rightValue = z80.regs.iy;
    const leftValueL = z80.readByte(z80.regs.sp);
    const leftValueH = z80.readByte(inc16(z80.regs.sp));
    z80.incTStateCount(1);
    z80.writeByte(inc16(z80.regs.sp), hi(rightValue));
    z80.writeByte(z80.regs.sp, lo(rightValue));
    z80.incTStateCount(2);
    z80.regs.memptr = word(leftValueH, leftValueL);
    z80.regs.iy = word(leftValueH, leftValueL);
});
fillMap.set(0xE5, (z80) => {
    z80.incTStateCount(1);
    z80.pushWord(z80.regs.iy);
});
fillMap.set(0xE9, (z80) => {
    z80.regs.pc = z80.regs.iy;
});
fillMap.set(0xF9, (z80) => {
    let value;
    value = z80.regs.iy;
    z80.incTStateCount(2);
    z80.regs.sp = value;
});
const decodeMapFDCB = new Map();
fillMap = decodeMapFDCB;
// The contents of this map are auto-generated by GenerateOpcodes.ts.
fillMap.set(0x00, (z80) => {
    z80.regs.b = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.b;
        const oldValue = value;
        value = ((value << 1) | (value >> 7)) & 0xFF;
        z80.regs.f = ((oldValue & 0x80) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.b = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.b);
});
fillMap.set(0x01, (z80) => {
    z80.regs.c = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.c;
        const oldValue = value;
        value = ((value << 1) | (value >> 7)) & 0xFF;
        z80.regs.f = ((oldValue & 0x80) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.c = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.c);
});
fillMap.set(0x02, (z80) => {
    z80.regs.d = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.d;
        const oldValue = value;
        value = ((value << 1) | (value >> 7)) & 0xFF;
        z80.regs.f = ((oldValue & 0x80) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.d = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.d);
});
fillMap.set(0x03, (z80) => {
    z80.regs.e = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.e;
        const oldValue = value;
        value = ((value << 1) | (value >> 7)) & 0xFF;
        z80.regs.f = ((oldValue & 0x80) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.e = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.e);
});
fillMap.set(0x04, (z80) => {
    z80.regs.h = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.h;
        const oldValue = value;
        value = ((value << 1) | (value >> 7)) & 0xFF;
        z80.regs.f = ((oldValue & 0x80) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.h = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.h);
});
fillMap.set(0x05, (z80) => {
    z80.regs.l = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.l;
        const oldValue = value;
        value = ((value << 1) | (value >> 7)) & 0xFF;
        z80.regs.f = ((oldValue & 0x80) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.l = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.l);
});
fillMap.set(0x06, (z80) => {
    let value;
    value = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    const oldValue = value;
    value = ((value << 1) | (value >> 7)) & 0xFF;
    z80.regs.f = ((oldValue & 0x80) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
    z80.writeByte(z80.regs.memptr, value);
});
fillMap.set(0x07, (z80) => {
    z80.regs.a = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.a;
        const oldValue = value;
        value = ((value << 1) | (value >> 7)) & 0xFF;
        z80.regs.f = ((oldValue & 0x80) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.a = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.a);
});
fillMap.set(0x08, (z80) => {
    z80.regs.b = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.b;
        const oldValue = value;
        value = ((value >> 1) | (value << 7)) & 0xFF;
        z80.regs.f = ((oldValue & 0x01) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.b = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.b);
});
fillMap.set(0x09, (z80) => {
    z80.regs.c = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.c;
        const oldValue = value;
        value = ((value >> 1) | (value << 7)) & 0xFF;
        z80.regs.f = ((oldValue & 0x01) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.c = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.c);
});
fillMap.set(0x0A, (z80) => {
    z80.regs.d = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.d;
        const oldValue = value;
        value = ((value >> 1) | (value << 7)) & 0xFF;
        z80.regs.f = ((oldValue & 0x01) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.d = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.d);
});
fillMap.set(0x0B, (z80) => {
    z80.regs.e = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.e;
        const oldValue = value;
        value = ((value >> 1) | (value << 7)) & 0xFF;
        z80.regs.f = ((oldValue & 0x01) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.e = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.e);
});
fillMap.set(0x0C, (z80) => {
    z80.regs.h = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.h;
        const oldValue = value;
        value = ((value >> 1) | (value << 7)) & 0xFF;
        z80.regs.f = ((oldValue & 0x01) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.h = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.h);
});
fillMap.set(0x0D, (z80) => {
    z80.regs.l = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.l;
        const oldValue = value;
        value = ((value >> 1) | (value << 7)) & 0xFF;
        z80.regs.f = ((oldValue & 0x01) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.l = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.l);
});
fillMap.set(0x0E, (z80) => {
    let value;
    value = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    const oldValue = value;
    value = ((value >> 1) | (value << 7)) & 0xFF;
    z80.regs.f = ((oldValue & 0x01) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
    z80.writeByte(z80.regs.memptr, value);
});
fillMap.set(0x0F, (z80) => {
    z80.regs.a = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.a;
        const oldValue = value;
        value = ((value >> 1) | (value << 7)) & 0xFF;
        z80.regs.f = ((oldValue & 0x01) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.a = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.a);
});
fillMap.set(0x10, (z80) => {
    z80.regs.b = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.b;
        const oldValue = value;
        value = ((value << 1) | ((z80.regs.f & Flag.C) !== 0 ? 1 : 0)) & 0xFF;
        z80.regs.f = ((oldValue & 0x80) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.b = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.b);
});
fillMap.set(0x11, (z80) => {
    z80.regs.c = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.c;
        const oldValue = value;
        value = ((value << 1) | ((z80.regs.f & Flag.C) !== 0 ? 1 : 0)) & 0xFF;
        z80.regs.f = ((oldValue & 0x80) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.c = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.c);
});
fillMap.set(0x12, (z80) => {
    z80.regs.d = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.d;
        const oldValue = value;
        value = ((value << 1) | ((z80.regs.f & Flag.C) !== 0 ? 1 : 0)) & 0xFF;
        z80.regs.f = ((oldValue & 0x80) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.d = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.d);
});
fillMap.set(0x13, (z80) => {
    z80.regs.e = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.e;
        const oldValue = value;
        value = ((value << 1) | ((z80.regs.f & Flag.C) !== 0 ? 1 : 0)) & 0xFF;
        z80.regs.f = ((oldValue & 0x80) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.e = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.e);
});
fillMap.set(0x14, (z80) => {
    z80.regs.h = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.h;
        const oldValue = value;
        value = ((value << 1) | ((z80.regs.f & Flag.C) !== 0 ? 1 : 0)) & 0xFF;
        z80.regs.f = ((oldValue & 0x80) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.h = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.h);
});
fillMap.set(0x15, (z80) => {
    z80.regs.l = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.l;
        const oldValue = value;
        value = ((value << 1) | ((z80.regs.f & Flag.C) !== 0 ? 1 : 0)) & 0xFF;
        z80.regs.f = ((oldValue & 0x80) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.l = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.l);
});
fillMap.set(0x16, (z80) => {
    let value;
    value = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    const oldValue = value;
    value = ((value << 1) | ((z80.regs.f & Flag.C) !== 0 ? 1 : 0)) & 0xFF;
    z80.regs.f = ((oldValue & 0x80) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
    z80.writeByte(z80.regs.memptr, value);
});
fillMap.set(0x17, (z80) => {
    z80.regs.a = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.a;
        const oldValue = value;
        value = ((value << 1) | ((z80.regs.f & Flag.C) !== 0 ? 1 : 0)) & 0xFF;
        z80.regs.f = ((oldValue & 0x80) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.a = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.a);
});
fillMap.set(0x18, (z80) => {
    z80.regs.b = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.b;
        const oldValue = value;
        value = (value >> 1) | ((z80.regs.f & Flag.C) !== 0 ? 0x80 : 0);
        z80.regs.f = ((oldValue & 0x01) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.b = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.b);
});
fillMap.set(0x19, (z80) => {
    z80.regs.c = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.c;
        const oldValue = value;
        value = (value >> 1) | ((z80.regs.f & Flag.C) !== 0 ? 0x80 : 0);
        z80.regs.f = ((oldValue & 0x01) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.c = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.c);
});
fillMap.set(0x1A, (z80) => {
    z80.regs.d = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.d;
        const oldValue = value;
        value = (value >> 1) | ((z80.regs.f & Flag.C) !== 0 ? 0x80 : 0);
        z80.regs.f = ((oldValue & 0x01) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.d = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.d);
});
fillMap.set(0x1B, (z80) => {
    z80.regs.e = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.e;
        const oldValue = value;
        value = (value >> 1) | ((z80.regs.f & Flag.C) !== 0 ? 0x80 : 0);
        z80.regs.f = ((oldValue & 0x01) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.e = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.e);
});
fillMap.set(0x1C, (z80) => {
    z80.regs.h = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.h;
        const oldValue = value;
        value = (value >> 1) | ((z80.regs.f & Flag.C) !== 0 ? 0x80 : 0);
        z80.regs.f = ((oldValue & 0x01) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.h = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.h);
});
fillMap.set(0x1D, (z80) => {
    z80.regs.l = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.l;
        const oldValue = value;
        value = (value >> 1) | ((z80.regs.f & Flag.C) !== 0 ? 0x80 : 0);
        z80.regs.f = ((oldValue & 0x01) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.l = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.l);
});
fillMap.set(0x1E, (z80) => {
    let value;
    value = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    const oldValue = value;
    value = (value >> 1) | ((z80.regs.f & Flag.C) !== 0 ? 0x80 : 0);
    z80.regs.f = ((oldValue & 0x01) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
    z80.writeByte(z80.regs.memptr, value);
});
fillMap.set(0x1F, (z80) => {
    z80.regs.a = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.a;
        const oldValue = value;
        value = (value >> 1) | ((z80.regs.f & Flag.C) !== 0 ? 0x80 : 0);
        z80.regs.f = ((oldValue & 0x01) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.a = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.a);
});
fillMap.set(0x20, (z80) => {
    z80.regs.b = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.b;
        const oldValue = value;
        value = (value << 1) & 0xFF;
        z80.regs.f = ((oldValue & 0x80) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.b = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.b);
});
fillMap.set(0x21, (z80) => {
    z80.regs.c = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.c;
        const oldValue = value;
        value = (value << 1) & 0xFF;
        z80.regs.f = ((oldValue & 0x80) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.c = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.c);
});
fillMap.set(0x22, (z80) => {
    z80.regs.d = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.d;
        const oldValue = value;
        value = (value << 1) & 0xFF;
        z80.regs.f = ((oldValue & 0x80) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.d = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.d);
});
fillMap.set(0x23, (z80) => {
    z80.regs.e = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.e;
        const oldValue = value;
        value = (value << 1) & 0xFF;
        z80.regs.f = ((oldValue & 0x80) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.e = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.e);
});
fillMap.set(0x24, (z80) => {
    z80.regs.h = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.h;
        const oldValue = value;
        value = (value << 1) & 0xFF;
        z80.regs.f = ((oldValue & 0x80) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.h = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.h);
});
fillMap.set(0x25, (z80) => {
    z80.regs.l = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.l;
        const oldValue = value;
        value = (value << 1) & 0xFF;
        z80.regs.f = ((oldValue & 0x80) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.l = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.l);
});
fillMap.set(0x26, (z80) => {
    let value;
    value = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    const oldValue = value;
    value = (value << 1) & 0xFF;
    z80.regs.f = ((oldValue & 0x80) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
    z80.writeByte(z80.regs.memptr, value);
});
fillMap.set(0x27, (z80) => {
    z80.regs.a = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.a;
        const oldValue = value;
        value = (value << 1) & 0xFF;
        z80.regs.f = ((oldValue & 0x80) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.a = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.a);
});
fillMap.set(0x28, (z80) => {
    z80.regs.b = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.b;
        const oldValue = value;
        value = (value & 0x80) | (value >> 1);
        z80.regs.f = ((oldValue & 0x01) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.b = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.b);
});
fillMap.set(0x29, (z80) => {
    z80.regs.c = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.c;
        const oldValue = value;
        value = (value & 0x80) | (value >> 1);
        z80.regs.f = ((oldValue & 0x01) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.c = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.c);
});
fillMap.set(0x2A, (z80) => {
    z80.regs.d = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.d;
        const oldValue = value;
        value = (value & 0x80) | (value >> 1);
        z80.regs.f = ((oldValue & 0x01) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.d = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.d);
});
fillMap.set(0x2B, (z80) => {
    z80.regs.e = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.e;
        const oldValue = value;
        value = (value & 0x80) | (value >> 1);
        z80.regs.f = ((oldValue & 0x01) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.e = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.e);
});
fillMap.set(0x2C, (z80) => {
    z80.regs.h = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.h;
        const oldValue = value;
        value = (value & 0x80) | (value >> 1);
        z80.regs.f = ((oldValue & 0x01) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.h = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.h);
});
fillMap.set(0x2D, (z80) => {
    z80.regs.l = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.l;
        const oldValue = value;
        value = (value & 0x80) | (value >> 1);
        z80.regs.f = ((oldValue & 0x01) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.l = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.l);
});
fillMap.set(0x2E, (z80) => {
    let value;
    value = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    const oldValue = value;
    value = (value & 0x80) | (value >> 1);
    z80.regs.f = ((oldValue & 0x01) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
    z80.writeByte(z80.regs.memptr, value);
});
fillMap.set(0x2F, (z80) => {
    z80.regs.a = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.a;
        const oldValue = value;
        value = (value & 0x80) | (value >> 1);
        z80.regs.f = ((oldValue & 0x01) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.a = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.a);
});
fillMap.set(0x30, (z80) => {
    z80.regs.b = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.b;
        const oldValue = value;
        value = ((value << 1) | 0x01) & 0xFF;
        z80.regs.f = ((oldValue & 0x80) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.b = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.b);
});
fillMap.set(0x31, (z80) => {
    z80.regs.c = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.c;
        const oldValue = value;
        value = ((value << 1) | 0x01) & 0xFF;
        z80.regs.f = ((oldValue & 0x80) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.c = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.c);
});
fillMap.set(0x32, (z80) => {
    z80.regs.d = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.d;
        const oldValue = value;
        value = ((value << 1) | 0x01) & 0xFF;
        z80.regs.f = ((oldValue & 0x80) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.d = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.d);
});
fillMap.set(0x33, (z80) => {
    z80.regs.e = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.e;
        const oldValue = value;
        value = ((value << 1) | 0x01) & 0xFF;
        z80.regs.f = ((oldValue & 0x80) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.e = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.e);
});
fillMap.set(0x34, (z80) => {
    z80.regs.h = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.h;
        const oldValue = value;
        value = ((value << 1) | 0x01) & 0xFF;
        z80.regs.f = ((oldValue & 0x80) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.h = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.h);
});
fillMap.set(0x35, (z80) => {
    z80.regs.l = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.l;
        const oldValue = value;
        value = ((value << 1) | 0x01) & 0xFF;
        z80.regs.f = ((oldValue & 0x80) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.l = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.l);
});
fillMap.set(0x36, (z80) => {
    let value;
    value = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    const oldValue = value;
    value = ((value << 1) | 0x01) & 0xFF;
    z80.regs.f = ((oldValue & 0x80) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
    z80.writeByte(z80.regs.memptr, value);
});
fillMap.set(0x37, (z80) => {
    z80.regs.a = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.a;
        const oldValue = value;
        value = ((value << 1) | 0x01) & 0xFF;
        z80.regs.f = ((oldValue & 0x80) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.a = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.a);
});
fillMap.set(0x38, (z80) => {
    z80.regs.b = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.b;
        const oldValue = value;
        value = value >> 1;
        z80.regs.f = ((oldValue & 0x01) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.b = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.b);
});
fillMap.set(0x39, (z80) => {
    z80.regs.c = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.c;
        const oldValue = value;
        value = value >> 1;
        z80.regs.f = ((oldValue & 0x01) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.c = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.c);
});
fillMap.set(0x3A, (z80) => {
    z80.regs.d = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.d;
        const oldValue = value;
        value = value >> 1;
        z80.regs.f = ((oldValue & 0x01) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.d = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.d);
});
fillMap.set(0x3B, (z80) => {
    z80.regs.e = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.e;
        const oldValue = value;
        value = value >> 1;
        z80.regs.f = ((oldValue & 0x01) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.e = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.e);
});
fillMap.set(0x3C, (z80) => {
    z80.regs.h = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.h;
        const oldValue = value;
        value = value >> 1;
        z80.regs.f = ((oldValue & 0x01) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.h = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.h);
});
fillMap.set(0x3D, (z80) => {
    z80.regs.l = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.l;
        const oldValue = value;
        value = value >> 1;
        z80.regs.f = ((oldValue & 0x01) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.l = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.l);
});
fillMap.set(0x3E, (z80) => {
    let value;
    value = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    const oldValue = value;
    value = value >> 1;
    z80.regs.f = ((oldValue & 0x01) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
    z80.writeByte(z80.regs.memptr, value);
});
fillMap.set(0x3F, (z80) => {
    z80.regs.a = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    {
        let value;
        value = z80.regs.a;
        const oldValue = value;
        value = value >> 1;
        z80.regs.f = ((oldValue & 0x01) !== 0 ? Flag.C : 0) | z80.sz53pTable[value];
        z80.regs.a = value;
    }
    z80.writeByte(z80.regs.memptr, z80.regs.a);
});
fillMap.set(0x47, (z80) => {
    const value = z80.readByte(z80.regs.memptr);
    const hiddenValue = hi(z80.regs.memptr);
    z80.incTStateCount(1);
    let f = (z80.regs.f & Flag.C) | Flag.H | (hiddenValue & (Flag.X3 | Flag.X5));
    if ((value & 0x01) === 0) {
        f |= Flag.P | Flag.Z;
    }
    z80.regs.f = f;
});
fillMap.set(0x40, fillMap.get(0x47));
fillMap.set(0x41, fillMap.get(0x47));
fillMap.set(0x42, fillMap.get(0x47));
fillMap.set(0x43, fillMap.get(0x47));
fillMap.set(0x44, fillMap.get(0x47));
fillMap.set(0x45, fillMap.get(0x47));
fillMap.set(0x46, fillMap.get(0x47));
fillMap.set(0x4F, (z80) => {
    const value = z80.readByte(z80.regs.memptr);
    const hiddenValue = hi(z80.regs.memptr);
    z80.incTStateCount(1);
    let f = (z80.regs.f & Flag.C) | Flag.H | (hiddenValue & (Flag.X3 | Flag.X5));
    if ((value & 0x02) === 0) {
        f |= Flag.P | Flag.Z;
    }
    z80.regs.f = f;
});
fillMap.set(0x48, fillMap.get(0x4F));
fillMap.set(0x49, fillMap.get(0x4F));
fillMap.set(0x4A, fillMap.get(0x4F));
fillMap.set(0x4B, fillMap.get(0x4F));
fillMap.set(0x4C, fillMap.get(0x4F));
fillMap.set(0x4D, fillMap.get(0x4F));
fillMap.set(0x4E, fillMap.get(0x4F));
fillMap.set(0x57, (z80) => {
    const value = z80.readByte(z80.regs.memptr);
    const hiddenValue = hi(z80.regs.memptr);
    z80.incTStateCount(1);
    let f = (z80.regs.f & Flag.C) | Flag.H | (hiddenValue & (Flag.X3 | Flag.X5));
    if ((value & 0x04) === 0) {
        f |= Flag.P | Flag.Z;
    }
    z80.regs.f = f;
});
fillMap.set(0x50, fillMap.get(0x57));
fillMap.set(0x51, fillMap.get(0x57));
fillMap.set(0x52, fillMap.get(0x57));
fillMap.set(0x53, fillMap.get(0x57));
fillMap.set(0x54, fillMap.get(0x57));
fillMap.set(0x55, fillMap.get(0x57));
fillMap.set(0x56, fillMap.get(0x57));
fillMap.set(0x5F, (z80) => {
    const value = z80.readByte(z80.regs.memptr);
    const hiddenValue = hi(z80.regs.memptr);
    z80.incTStateCount(1);
    let f = (z80.regs.f & Flag.C) | Flag.H | (hiddenValue & (Flag.X3 | Flag.X5));
    if ((value & 0x08) === 0) {
        f |= Flag.P | Flag.Z;
    }
    z80.regs.f = f;
});
fillMap.set(0x58, fillMap.get(0x5F));
fillMap.set(0x59, fillMap.get(0x5F));
fillMap.set(0x5A, fillMap.get(0x5F));
fillMap.set(0x5B, fillMap.get(0x5F));
fillMap.set(0x5C, fillMap.get(0x5F));
fillMap.set(0x5D, fillMap.get(0x5F));
fillMap.set(0x5E, fillMap.get(0x5F));
fillMap.set(0x67, (z80) => {
    const value = z80.readByte(z80.regs.memptr);
    const hiddenValue = hi(z80.regs.memptr);
    z80.incTStateCount(1);
    let f = (z80.regs.f & Flag.C) | Flag.H | (hiddenValue & (Flag.X3 | Flag.X5));
    if ((value & 0x10) === 0) {
        f |= Flag.P | Flag.Z;
    }
    z80.regs.f = f;
});
fillMap.set(0x60, fillMap.get(0x67));
fillMap.set(0x61, fillMap.get(0x67));
fillMap.set(0x62, fillMap.get(0x67));
fillMap.set(0x63, fillMap.get(0x67));
fillMap.set(0x64, fillMap.get(0x67));
fillMap.set(0x65, fillMap.get(0x67));
fillMap.set(0x66, fillMap.get(0x67));
fillMap.set(0x6F, (z80) => {
    const value = z80.readByte(z80.regs.memptr);
    const hiddenValue = hi(z80.regs.memptr);
    z80.incTStateCount(1);
    let f = (z80.regs.f & Flag.C) | Flag.H | (hiddenValue & (Flag.X3 | Flag.X5));
    if ((value & 0x20) === 0) {
        f |= Flag.P | Flag.Z;
    }
    z80.regs.f = f;
});
fillMap.set(0x68, fillMap.get(0x6F));
fillMap.set(0x69, fillMap.get(0x6F));
fillMap.set(0x6A, fillMap.get(0x6F));
fillMap.set(0x6B, fillMap.get(0x6F));
fillMap.set(0x6C, fillMap.get(0x6F));
fillMap.set(0x6D, fillMap.get(0x6F));
fillMap.set(0x6E, fillMap.get(0x6F));
fillMap.set(0x77, (z80) => {
    const value = z80.readByte(z80.regs.memptr);
    const hiddenValue = hi(z80.regs.memptr);
    z80.incTStateCount(1);
    let f = (z80.regs.f & Flag.C) | Flag.H | (hiddenValue & (Flag.X3 | Flag.X5));
    if ((value & 0x40) === 0) {
        f |= Flag.P | Flag.Z;
    }
    z80.regs.f = f;
});
fillMap.set(0x70, fillMap.get(0x77));
fillMap.set(0x71, fillMap.get(0x77));
fillMap.set(0x72, fillMap.get(0x77));
fillMap.set(0x73, fillMap.get(0x77));
fillMap.set(0x74, fillMap.get(0x77));
fillMap.set(0x75, fillMap.get(0x77));
fillMap.set(0x76, fillMap.get(0x77));
fillMap.set(0x7F, (z80) => {
    const value = z80.readByte(z80.regs.memptr);
    const hiddenValue = hi(z80.regs.memptr);
    z80.incTStateCount(1);
    let f = (z80.regs.f & Flag.C) | Flag.H | (hiddenValue & (Flag.X3 | Flag.X5));
    if ((value & 0x80) === 0) {
        f |= Flag.P | Flag.Z;
    }
    if ((value & 0x80) !== 0) {
        f |= Flag.S;
    }
    z80.regs.f = f;
});
fillMap.set(0x78, fillMap.get(0x7F));
fillMap.set(0x79, fillMap.get(0x7F));
fillMap.set(0x7A, fillMap.get(0x7F));
fillMap.set(0x7B, fillMap.get(0x7F));
fillMap.set(0x7C, fillMap.get(0x7F));
fillMap.set(0x7D, fillMap.get(0x7F));
fillMap.set(0x7E, fillMap.get(0x7F));
fillMap.set(0x80, (z80) => {
    z80.regs.b = z80.readByte(z80.regs.memptr) & 0xFE;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.b);
});
fillMap.set(0x81, (z80) => {
    z80.regs.c = z80.readByte(z80.regs.memptr) & 0xFE;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.c);
});
fillMap.set(0x82, (z80) => {
    z80.regs.d = z80.readByte(z80.regs.memptr) & 0xFE;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.d);
});
fillMap.set(0x83, (z80) => {
    z80.regs.e = z80.readByte(z80.regs.memptr) & 0xFE;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.e);
});
fillMap.set(0x84, (z80) => {
    z80.regs.h = z80.readByte(z80.regs.memptr) & 0xFE;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.h);
});
fillMap.set(0x85, (z80) => {
    z80.regs.l = z80.readByte(z80.regs.memptr) & 0xFE;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.l);
});
fillMap.set(0x86, (z80) => {
    const value = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, value & 0xFE);
});
fillMap.set(0x87, (z80) => {
    z80.regs.a = z80.readByte(z80.regs.memptr) & 0xFE;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.a);
});
fillMap.set(0x88, (z80) => {
    z80.regs.b = z80.readByte(z80.regs.memptr) & 0xFD;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.b);
});
fillMap.set(0x89, (z80) => {
    z80.regs.c = z80.readByte(z80.regs.memptr) & 0xFD;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.c);
});
fillMap.set(0x8A, (z80) => {
    z80.regs.d = z80.readByte(z80.regs.memptr) & 0xFD;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.d);
});
fillMap.set(0x8B, (z80) => {
    z80.regs.e = z80.readByte(z80.regs.memptr) & 0xFD;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.e);
});
fillMap.set(0x8C, (z80) => {
    z80.regs.h = z80.readByte(z80.regs.memptr) & 0xFD;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.h);
});
fillMap.set(0x8D, (z80) => {
    z80.regs.l = z80.readByte(z80.regs.memptr) & 0xFD;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.l);
});
fillMap.set(0x8E, (z80) => {
    const value = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, value & 0xFD);
});
fillMap.set(0x8F, (z80) => {
    z80.regs.a = z80.readByte(z80.regs.memptr) & 0xFD;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.a);
});
fillMap.set(0x90, (z80) => {
    z80.regs.b = z80.readByte(z80.regs.memptr) & 0xFB;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.b);
});
fillMap.set(0x91, (z80) => {
    z80.regs.c = z80.readByte(z80.regs.memptr) & 0xFB;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.c);
});
fillMap.set(0x92, (z80) => {
    z80.regs.d = z80.readByte(z80.regs.memptr) & 0xFB;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.d);
});
fillMap.set(0x93, (z80) => {
    z80.regs.e = z80.readByte(z80.regs.memptr) & 0xFB;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.e);
});
fillMap.set(0x94, (z80) => {
    z80.regs.h = z80.readByte(z80.regs.memptr) & 0xFB;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.h);
});
fillMap.set(0x95, (z80) => {
    z80.regs.l = z80.readByte(z80.regs.memptr) & 0xFB;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.l);
});
fillMap.set(0x96, (z80) => {
    const value = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, value & 0xFB);
});
fillMap.set(0x97, (z80) => {
    z80.regs.a = z80.readByte(z80.regs.memptr) & 0xFB;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.a);
});
fillMap.set(0x98, (z80) => {
    z80.regs.b = z80.readByte(z80.regs.memptr) & 0xF7;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.b);
});
fillMap.set(0x99, (z80) => {
    z80.regs.c = z80.readByte(z80.regs.memptr) & 0xF7;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.c);
});
fillMap.set(0x9A, (z80) => {
    z80.regs.d = z80.readByte(z80.regs.memptr) & 0xF7;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.d);
});
fillMap.set(0x9B, (z80) => {
    z80.regs.e = z80.readByte(z80.regs.memptr) & 0xF7;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.e);
});
fillMap.set(0x9C, (z80) => {
    z80.regs.h = z80.readByte(z80.regs.memptr) & 0xF7;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.h);
});
fillMap.set(0x9D, (z80) => {
    z80.regs.l = z80.readByte(z80.regs.memptr) & 0xF7;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.l);
});
fillMap.set(0x9E, (z80) => {
    const value = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, value & 0xF7);
});
fillMap.set(0x9F, (z80) => {
    z80.regs.a = z80.readByte(z80.regs.memptr) & 0xF7;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.a);
});
fillMap.set(0xA0, (z80) => {
    z80.regs.b = z80.readByte(z80.regs.memptr) & 0xEF;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.b);
});
fillMap.set(0xA1, (z80) => {
    z80.regs.c = z80.readByte(z80.regs.memptr) & 0xEF;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.c);
});
fillMap.set(0xA2, (z80) => {
    z80.regs.d = z80.readByte(z80.regs.memptr) & 0xEF;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.d);
});
fillMap.set(0xA3, (z80) => {
    z80.regs.e = z80.readByte(z80.regs.memptr) & 0xEF;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.e);
});
fillMap.set(0xA4, (z80) => {
    z80.regs.h = z80.readByte(z80.regs.memptr) & 0xEF;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.h);
});
fillMap.set(0xA5, (z80) => {
    z80.regs.l = z80.readByte(z80.regs.memptr) & 0xEF;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.l);
});
fillMap.set(0xA6, (z80) => {
    const value = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, value & 0xEF);
});
fillMap.set(0xA7, (z80) => {
    z80.regs.a = z80.readByte(z80.regs.memptr) & 0xEF;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.a);
});
fillMap.set(0xA8, (z80) => {
    z80.regs.b = z80.readByte(z80.regs.memptr) & 0xDF;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.b);
});
fillMap.set(0xA9, (z80) => {
    z80.regs.c = z80.readByte(z80.regs.memptr) & 0xDF;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.c);
});
fillMap.set(0xAA, (z80) => {
    z80.regs.d = z80.readByte(z80.regs.memptr) & 0xDF;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.d);
});
fillMap.set(0xAB, (z80) => {
    z80.regs.e = z80.readByte(z80.regs.memptr) & 0xDF;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.e);
});
fillMap.set(0xAC, (z80) => {
    z80.regs.h = z80.readByte(z80.regs.memptr) & 0xDF;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.h);
});
fillMap.set(0xAD, (z80) => {
    z80.regs.l = z80.readByte(z80.regs.memptr) & 0xDF;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.l);
});
fillMap.set(0xAE, (z80) => {
    const value = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, value & 0xDF);
});
fillMap.set(0xAF, (z80) => {
    z80.regs.a = z80.readByte(z80.regs.memptr) & 0xDF;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.a);
});
fillMap.set(0xB0, (z80) => {
    z80.regs.b = z80.readByte(z80.regs.memptr) & 0xBF;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.b);
});
fillMap.set(0xB1, (z80) => {
    z80.regs.c = z80.readByte(z80.regs.memptr) & 0xBF;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.c);
});
fillMap.set(0xB2, (z80) => {
    z80.regs.d = z80.readByte(z80.regs.memptr) & 0xBF;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.d);
});
fillMap.set(0xB3, (z80) => {
    z80.regs.e = z80.readByte(z80.regs.memptr) & 0xBF;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.e);
});
fillMap.set(0xB4, (z80) => {
    z80.regs.h = z80.readByte(z80.regs.memptr) & 0xBF;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.h);
});
fillMap.set(0xB5, (z80) => {
    z80.regs.l = z80.readByte(z80.regs.memptr) & 0xBF;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.l);
});
fillMap.set(0xB6, (z80) => {
    const value = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, value & 0xBF);
});
fillMap.set(0xB7, (z80) => {
    z80.regs.a = z80.readByte(z80.regs.memptr) & 0xBF;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.a);
});
fillMap.set(0xB8, (z80) => {
    z80.regs.b = z80.readByte(z80.regs.memptr) & 0x7F;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.b);
});
fillMap.set(0xB9, (z80) => {
    z80.regs.c = z80.readByte(z80.regs.memptr) & 0x7F;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.c);
});
fillMap.set(0xBA, (z80) => {
    z80.regs.d = z80.readByte(z80.regs.memptr) & 0x7F;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.d);
});
fillMap.set(0xBB, (z80) => {
    z80.regs.e = z80.readByte(z80.regs.memptr) & 0x7F;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.e);
});
fillMap.set(0xBC, (z80) => {
    z80.regs.h = z80.readByte(z80.regs.memptr) & 0x7F;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.h);
});
fillMap.set(0xBD, (z80) => {
    z80.regs.l = z80.readByte(z80.regs.memptr) & 0x7F;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.l);
});
fillMap.set(0xBE, (z80) => {
    const value = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, value & 0x7F);
});
fillMap.set(0xBF, (z80) => {
    z80.regs.a = z80.readByte(z80.regs.memptr) & 0x7F;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.a);
});
fillMap.set(0xC0, (z80) => {
    z80.regs.b = z80.readByte(z80.regs.memptr) | 0x01;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.b);
});
fillMap.set(0xC1, (z80) => {
    z80.regs.c = z80.readByte(z80.regs.memptr) | 0x01;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.c);
});
fillMap.set(0xC2, (z80) => {
    z80.regs.d = z80.readByte(z80.regs.memptr) | 0x01;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.d);
});
fillMap.set(0xC3, (z80) => {
    z80.regs.e = z80.readByte(z80.regs.memptr) | 0x01;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.e);
});
fillMap.set(0xC4, (z80) => {
    z80.regs.h = z80.readByte(z80.regs.memptr) | 0x01;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.h);
});
fillMap.set(0xC5, (z80) => {
    z80.regs.l = z80.readByte(z80.regs.memptr) | 0x01;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.l);
});
fillMap.set(0xC6, (z80) => {
    const value = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, value | 0x01);
});
fillMap.set(0xC7, (z80) => {
    z80.regs.a = z80.readByte(z80.regs.memptr) | 0x01;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.a);
});
fillMap.set(0xC8, (z80) => {
    z80.regs.b = z80.readByte(z80.regs.memptr) | 0x02;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.b);
});
fillMap.set(0xC9, (z80) => {
    z80.regs.c = z80.readByte(z80.regs.memptr) | 0x02;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.c);
});
fillMap.set(0xCA, (z80) => {
    z80.regs.d = z80.readByte(z80.regs.memptr) | 0x02;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.d);
});
fillMap.set(0xCB, (z80) => {
    z80.regs.e = z80.readByte(z80.regs.memptr) | 0x02;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.e);
});
fillMap.set(0xCC, (z80) => {
    z80.regs.h = z80.readByte(z80.regs.memptr) | 0x02;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.h);
});
fillMap.set(0xCD, (z80) => {
    z80.regs.l = z80.readByte(z80.regs.memptr) | 0x02;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.l);
});
fillMap.set(0xCE, (z80) => {
    const value = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, value | 0x02);
});
fillMap.set(0xCF, (z80) => {
    z80.regs.a = z80.readByte(z80.regs.memptr) | 0x02;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.a);
});
fillMap.set(0xD0, (z80) => {
    z80.regs.b = z80.readByte(z80.regs.memptr) | 0x04;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.b);
});
fillMap.set(0xD1, (z80) => {
    z80.regs.c = z80.readByte(z80.regs.memptr) | 0x04;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.c);
});
fillMap.set(0xD2, (z80) => {
    z80.regs.d = z80.readByte(z80.regs.memptr) | 0x04;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.d);
});
fillMap.set(0xD3, (z80) => {
    z80.regs.e = z80.readByte(z80.regs.memptr) | 0x04;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.e);
});
fillMap.set(0xD4, (z80) => {
    z80.regs.h = z80.readByte(z80.regs.memptr) | 0x04;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.h);
});
fillMap.set(0xD5, (z80) => {
    z80.regs.l = z80.readByte(z80.regs.memptr) | 0x04;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.l);
});
fillMap.set(0xD6, (z80) => {
    const value = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, value | 0x04);
});
fillMap.set(0xD7, (z80) => {
    z80.regs.a = z80.readByte(z80.regs.memptr) | 0x04;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.a);
});
fillMap.set(0xD8, (z80) => {
    z80.regs.b = z80.readByte(z80.regs.memptr) | 0x08;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.b);
});
fillMap.set(0xD9, (z80) => {
    z80.regs.c = z80.readByte(z80.regs.memptr) | 0x08;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.c);
});
fillMap.set(0xDA, (z80) => {
    z80.regs.d = z80.readByte(z80.regs.memptr) | 0x08;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.d);
});
fillMap.set(0xDB, (z80) => {
    z80.regs.e = z80.readByte(z80.regs.memptr) | 0x08;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.e);
});
fillMap.set(0xDC, (z80) => {
    z80.regs.h = z80.readByte(z80.regs.memptr) | 0x08;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.h);
});
fillMap.set(0xDD, (z80) => {
    z80.regs.l = z80.readByte(z80.regs.memptr) | 0x08;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.l);
});
fillMap.set(0xDE, (z80) => {
    const value = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, value | 0x08);
});
fillMap.set(0xDF, (z80) => {
    z80.regs.a = z80.readByte(z80.regs.memptr) | 0x08;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.a);
});
fillMap.set(0xE0, (z80) => {
    z80.regs.b = z80.readByte(z80.regs.memptr) | 0x10;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.b);
});
fillMap.set(0xE1, (z80) => {
    z80.regs.c = z80.readByte(z80.regs.memptr) | 0x10;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.c);
});
fillMap.set(0xE2, (z80) => {
    z80.regs.d = z80.readByte(z80.regs.memptr) | 0x10;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.d);
});
fillMap.set(0xE3, (z80) => {
    z80.regs.e = z80.readByte(z80.regs.memptr) | 0x10;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.e);
});
fillMap.set(0xE4, (z80) => {
    z80.regs.h = z80.readByte(z80.regs.memptr) | 0x10;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.h);
});
fillMap.set(0xE5, (z80) => {
    z80.regs.l = z80.readByte(z80.regs.memptr) | 0x10;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.l);
});
fillMap.set(0xE6, (z80) => {
    const value = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, value | 0x10);
});
fillMap.set(0xE7, (z80) => {
    z80.regs.a = z80.readByte(z80.regs.memptr) | 0x10;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.a);
});
fillMap.set(0xE8, (z80) => {
    z80.regs.b = z80.readByte(z80.regs.memptr) | 0x20;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.b);
});
fillMap.set(0xE9, (z80) => {
    z80.regs.c = z80.readByte(z80.regs.memptr) | 0x20;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.c);
});
fillMap.set(0xEA, (z80) => {
    z80.regs.d = z80.readByte(z80.regs.memptr) | 0x20;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.d);
});
fillMap.set(0xEB, (z80) => {
    z80.regs.e = z80.readByte(z80.regs.memptr) | 0x20;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.e);
});
fillMap.set(0xEC, (z80) => {
    z80.regs.h = z80.readByte(z80.regs.memptr) | 0x20;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.h);
});
fillMap.set(0xED, (z80) => {
    z80.regs.l = z80.readByte(z80.regs.memptr) | 0x20;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.l);
});
fillMap.set(0xEE, (z80) => {
    const value = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, value | 0x20);
});
fillMap.set(0xEF, (z80) => {
    z80.regs.a = z80.readByte(z80.regs.memptr) | 0x20;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.a);
});
fillMap.set(0xF0, (z80) => {
    z80.regs.b = z80.readByte(z80.regs.memptr) | 0x40;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.b);
});
fillMap.set(0xF1, (z80) => {
    z80.regs.c = z80.readByte(z80.regs.memptr) | 0x40;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.c);
});
fillMap.set(0xF2, (z80) => {
    z80.regs.d = z80.readByte(z80.regs.memptr) | 0x40;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.d);
});
fillMap.set(0xF3, (z80) => {
    z80.regs.e = z80.readByte(z80.regs.memptr) | 0x40;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.e);
});
fillMap.set(0xF4, (z80) => {
    z80.regs.h = z80.readByte(z80.regs.memptr) | 0x40;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.h);
});
fillMap.set(0xF5, (z80) => {
    z80.regs.l = z80.readByte(z80.regs.memptr) | 0x40;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.l);
});
fillMap.set(0xF6, (z80) => {
    const value = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, value | 0x40);
});
fillMap.set(0xF7, (z80) => {
    z80.regs.a = z80.readByte(z80.regs.memptr) | 0x40;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.a);
});
fillMap.set(0xF8, (z80) => {
    z80.regs.b = z80.readByte(z80.regs.memptr) | 0x80;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.b);
});
fillMap.set(0xF9, (z80) => {
    z80.regs.c = z80.readByte(z80.regs.memptr) | 0x80;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.c);
});
fillMap.set(0xFA, (z80) => {
    z80.regs.d = z80.readByte(z80.regs.memptr) | 0x80;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.d);
});
fillMap.set(0xFB, (z80) => {
    z80.regs.e = z80.readByte(z80.regs.memptr) | 0x80;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.e);
});
fillMap.set(0xFC, (z80) => {
    z80.regs.h = z80.readByte(z80.regs.memptr) | 0x80;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.h);
});
fillMap.set(0xFD, (z80) => {
    z80.regs.l = z80.readByte(z80.regs.memptr) | 0x80;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.l);
});
fillMap.set(0xFE, (z80) => {
    const value = z80.readByte(z80.regs.memptr);
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, value | 0x80);
});
fillMap.set(0xFF, (z80) => {
    z80.regs.a = z80.readByte(z80.regs.memptr) | 0x80;
    z80.incTStateCount(1);
    z80.writeByte(z80.regs.memptr, z80.regs.a);
});
/**
 * Fetch an instruction for decode.
 */
function fetchInstruction(z80) {
    z80.incTStateCount(4);
    const inst = z80.readByteInternal(z80.regs.pc);
    z80.regs.pc = (z80.regs.pc + 1) & 0xFFFF;
    z80.regs.r = (z80.regs.r + 1) & 0xFF;
    return inst;
}
/**
 * Decode the "CB" prefix (bit instructions).
 */
function decodeCB(z80) {
    const inst = fetchInstruction(z80);
    const func = decodeMapCB.get(inst);
    if (func === undefined) {
        console.log("Unhandled opcode in CB: " + toHex(inst, 2));
    }
    else {
        func(z80);
    }
}
/**
 * Decode the "DD" prefix (IX instructions).
 */
function decodeDD(z80) {
    const inst = fetchInstruction(z80);
    const func = decodeMapDD.get(inst);
    if (func === undefined) {
        console.log("Unhandled opcode in DD: " + toHex(inst, 2));
    }
    else {
        func(z80);
    }
}
/**
 * Decode the "DDCB" prefix (IX bit instructions).
 */
function decodeDDCB(z80) {
    z80.incTStateCount(3);
    const offset = z80.readByteInternal(z80.regs.pc);
    z80.regs.memptr = add16(z80.regs.ix, signedByte(offset));
    z80.regs.pc = inc16(z80.regs.pc);
    z80.incTStateCount(3);
    const inst = z80.readByteInternal(z80.regs.pc);
    z80.incTStateCount(2);
    z80.regs.pc = inc16(z80.regs.pc);
    const func = decodeMapDDCB.get(inst);
    if (func === undefined) {
        console.log("Unhandled opcode in DDCB: " + toHex(inst, 2));
    }
    else {
        func(z80);
    }
}
/**
 * Decode the "ED" prefix (extended instructions).
 */
function decodeED(z80) {
    const inst = fetchInstruction(z80);
    const func = decodeMapED.get(inst);
    if (func === undefined) {
        console.log("Unhandled opcode in ED: " + toHex(inst, 2));
    }
    else {
        func(z80);
    }
}
/**
 * Decode the "FD" prefix (IY instructions).
 */
function decodeFD(z80) {
    const inst = fetchInstruction(z80);
    const func = decodeMapFD.get(inst);
    if (func === undefined) {
        console.log("Unhandled opcode in FD: " + toHex(inst, 2));
    }
    else {
        func(z80);
    }
}
/**
 * Decode the "FDCB" prefix (IY bit instructions).
 */
function decodeFDCB(z80) {
    z80.incTStateCount(3);
    const offset = z80.readByteInternal(z80.regs.pc);
    z80.regs.memptr = add16(z80.regs.iy, signedByte(offset));
    z80.regs.pc = inc16(z80.regs.pc);
    z80.incTStateCount(3);
    const inst = z80.readByteInternal(z80.regs.pc);
    z80.incTStateCount(2);
    z80.regs.pc = inc16(z80.regs.pc);
    const func = decodeMapFDCB.get(inst);
    if (func === undefined) {
        console.log("Unhandled opcode in FDCB: " + toHex(inst, 2));
    }
    else {
        func(z80);
    }
}
/**
 * Decode the base (un-prefixed) instructions.
 */
function decode(z80) {
    const inst = fetchInstruction(z80);
    const func = decodeMap.get(inst);
    if (func === undefined) {
        console.log("Unhandled opcode " + toHex(inst, 2));
    }
    else {
        func(z80);
    }
}

// CONCATENATED MODULE: ./node_modules/z80-emulator/dist/module/Z80.js


/**
 * Emulated Z80 processor.
 */
class Z80_Z80 {
    constructor(hal) {
        /**
         * Full set of registers.
         */
        this.regs = new RegisterSet_RegisterSet();
        /**
         * Tables for computing flags. Public so that the decoding function
         * can access them.
         */
        this.sz53Table = []; /* The S, Z, 5 and 3 bits of the index */
        this.parityTable = []; /* The parity of the lookup value */
        this.sz53pTable = []; /* OR the above two tables together */
        this.hal = hal;
        this.initTables();
    }
    /**
     * Reset the Z80 to a known state.
     */
    reset() {
        this.regs = new RegisterSet_RegisterSet();
    }
    /**
     * Execute one instruction.
     */
    step() {
        decode(this);
    }
    /**
     * Increment the clock count.
     */
    incTStateCount(count) {
        this.hal.tStateCount += count;
    }
    /**
     * Interrupt the CPU with a maskable interrupt
     */
    maskableInterrupt() {
        if (this.regs.iff1 !== 0) {
            this.interrupt(true);
        }
    }
    /**
     * Interrupt the CPU with a non-maskable interrupt
     */
    nonMaskableInterrupt() {
        this.interrupt(false);
    }
    /**
     * Read a byte from memory, taking as many clock cycles as necessary.
     */
    readByte(address) {
        this.incTStateCount(3);
        return this.readByteInternal(address);
    }
    /**
     * Reads a word at the specified address. Reads the low byte first.
     */
    readWord(address) {
        const lowByte = this.readByte(address);
        const highByte = this.readByte(address + 1);
        return word(highByte, lowByte);
    }
    /**
     * Read a byte from memory (not affecting clock).
     */
    readByteInternal(address) {
        return this.hal.readMemory(address);
    }
    /**
     * Write a byte to memory, taking as many clock cycles as necessary.
     */
    writeByte(address, value) {
        this.incTStateCount(3);
        this.writeByteInternal(address, value);
    }
    /**
     * Write a byte to memory (not affecting clock).
     */
    writeByteInternal(address, value) {
        this.hal.writeMemory(address, value);
    }
    /**
     * Write a byte to a port, taking as many clock cycles as necessary.
     */
    writePort(address, value) {
        this.incTStateCount(1);
        this.hal.writePort(address, value);
        this.incTStateCount(3);
    }
    /**
     * Read a byte from a port, taking as many clock cycles as necessary.
     */
    readPort(address) {
        this.incTStateCount(1);
        const value = this.hal.readPort(address);
        this.incTStateCount(3);
        return value;
    }
    /**
     * Push a word on the stack.
     */
    pushWord(value) {
        this.pushByte(hi(value));
        this.pushByte(lo(value));
    }
    /**
     * Push a byte on the stack.
     */
    pushByte(value) {
        this.regs.sp = (this.regs.sp - 1) & 0xFFFF;
        this.writeByte(this.regs.sp, value);
    }
    /**
     * Pop a word from the stack.
     */
    popWord() {
        const lowByte = this.popByte();
        const highByte = this.popByte();
        return word(highByte, lowByte);
    }
    /**
     * Pop a byte from the stack.
     */
    popByte() {
        const value = this.readByte(this.regs.sp);
        this.regs.sp = inc16(this.regs.sp);
        return value;
    }
    /**
     * Process either kind of interrupt. If maskable, assumes that
     * the mask has already been checked.
     */
    interrupt(maskable) {
        if (this.regs.halted) {
            // Skip past HALT instruction.
            this.regs.pc++;
            this.regs.halted = 0;
        }
        this.incTStateCount(7);
        this.regs.r += 1;
        this.regs.iff1 = 0;
        this.regs.iff2 = 0;
        this.pushWord(this.regs.pc);
        if (maskable) {
            switch (this.regs.im) {
                case 0:
                case 1:
                    this.regs.pc = 0x0038;
                    break;
                case 2: {
                    // The LSB here is taken from the data bus, so it's
                    // unpredictable. We use 0xFF but any value would do.
                    const address = word(this.regs.i, 0xFF);
                    this.regs.pc = this.readWord(address);
                    break;
                }
                default:
                    throw new Error("Unknown im mode " + this.regs.im);
            }
        }
        else {
            this.regs.pc = 0x0066;
        }
    }
    initTables() {
        for (let i = 0; i < 0x100; i++) {
            this.sz53Table.push(i & (Flag.X3 | Flag.X5 | Flag.S));
            let bits = i;
            let parity = 0;
            for (let bit = 0; bit < 8; bit++) {
                parity ^= bits & 1;
                bits >>= 1;
            }
            this.parityTable.push(parity ? 0 : Flag.P);
            this.sz53pTable.push(this.sz53Table[i] | this.parityTable[i]);
        }
        this.sz53Table[0] |= Flag.Z;
        this.sz53pTable[0] |= Flag.Z;
    }
}

// CONCATENATED MODULE: ./node_modules/z80-emulator/dist/module/index.js


// CONCATENATED MODULE: ./node_modules/trs80-emulator/dist/module/Keyboard.js
// Handle keyboard mapping. The TRS-80 Model III keyboard has keys in different
// places, so we must occasionally fake a Shift key being up or down when it's
// really not.
const BEGIN_ADDR = 0x3800;
const END_ADDR = BEGIN_ADDR + 256;
const KEY_DELAY_CLOCK_CYCLES = 50000;
// Whether to force a Shift key, and how.
var ShiftState;
(function (ShiftState) {
    ShiftState[ShiftState["NEUTRAL"] = 0] = "NEUTRAL";
    ShiftState[ShiftState["FORCE_DOWN"] = 1] = "FORCE_DOWN";
    ShiftState[ShiftState["FORCE_UP"] = 2] = "FORCE_UP";
})(ShiftState || (ShiftState = {}));
// For each ASCII character or key we keep track of how to trigger it.
class KeyInfo {
    constructor(byteIndex, bitNumber, shiftForce) {
        this.byteIndex = byteIndex;
        this.bitNumber = bitNumber;
        this.shiftForce = shiftForce;
    }
}
// A queued-up key.
class KeyActivity {
    constructor(keyInfo, isPressed) {
        this.keyInfo = keyInfo;
        this.isPressed = isPressed;
    }
}
// Map from ASCII or special key to the info of which byte and bit it's mapped
// to, and whether to force Shift.
const keyMap = new Map();
// http://www.trs-80.com/trs80-zaps-internals.htm#keyboard13
keyMap.set("@", new KeyInfo(0, 0, ShiftState.FORCE_UP));
keyMap.set("A", new KeyInfo(0, 1, ShiftState.FORCE_DOWN));
keyMap.set("B", new KeyInfo(0, 2, ShiftState.FORCE_DOWN));
keyMap.set("C", new KeyInfo(0, 3, ShiftState.FORCE_DOWN));
keyMap.set("D", new KeyInfo(0, 4, ShiftState.FORCE_DOWN));
keyMap.set("E", new KeyInfo(0, 5, ShiftState.FORCE_DOWN));
keyMap.set("F", new KeyInfo(0, 6, ShiftState.FORCE_DOWN));
keyMap.set("G", new KeyInfo(0, 7, ShiftState.FORCE_DOWN));
keyMap.set("H", new KeyInfo(1, 0, ShiftState.FORCE_DOWN));
keyMap.set("I", new KeyInfo(1, 1, ShiftState.FORCE_DOWN));
keyMap.set("J", new KeyInfo(1, 2, ShiftState.FORCE_DOWN));
keyMap.set("K", new KeyInfo(1, 3, ShiftState.FORCE_DOWN));
keyMap.set("L", new KeyInfo(1, 4, ShiftState.FORCE_DOWN));
keyMap.set("M", new KeyInfo(1, 5, ShiftState.FORCE_DOWN));
keyMap.set("N", new KeyInfo(1, 6, ShiftState.FORCE_DOWN));
keyMap.set("O", new KeyInfo(1, 7, ShiftState.FORCE_DOWN));
keyMap.set("P", new KeyInfo(2, 0, ShiftState.FORCE_DOWN));
keyMap.set("Q", new KeyInfo(2, 1, ShiftState.FORCE_DOWN));
keyMap.set("R", new KeyInfo(2, 2, ShiftState.FORCE_DOWN));
keyMap.set("S", new KeyInfo(2, 3, ShiftState.FORCE_DOWN));
keyMap.set("T", new KeyInfo(2, 4, ShiftState.FORCE_DOWN));
keyMap.set("U", new KeyInfo(2, 5, ShiftState.FORCE_DOWN));
keyMap.set("V", new KeyInfo(2, 6, ShiftState.FORCE_DOWN));
keyMap.set("W", new KeyInfo(2, 7, ShiftState.FORCE_DOWN));
keyMap.set("X", new KeyInfo(3, 0, ShiftState.FORCE_DOWN));
keyMap.set("Y", new KeyInfo(3, 1, ShiftState.FORCE_DOWN));
keyMap.set("Z", new KeyInfo(3, 2, ShiftState.FORCE_DOWN));
keyMap.set("a", new KeyInfo(0, 1, ShiftState.FORCE_UP));
keyMap.set("b", new KeyInfo(0, 2, ShiftState.FORCE_UP));
keyMap.set("c", new KeyInfo(0, 3, ShiftState.FORCE_UP));
keyMap.set("d", new KeyInfo(0, 4, ShiftState.FORCE_UP));
keyMap.set("e", new KeyInfo(0, 5, ShiftState.FORCE_UP));
keyMap.set("f", new KeyInfo(0, 6, ShiftState.FORCE_UP));
keyMap.set("g", new KeyInfo(0, 7, ShiftState.FORCE_UP));
keyMap.set("h", new KeyInfo(1, 0, ShiftState.FORCE_UP));
keyMap.set("i", new KeyInfo(1, 1, ShiftState.FORCE_UP));
keyMap.set("j", new KeyInfo(1, 2, ShiftState.FORCE_UP));
keyMap.set("k", new KeyInfo(1, 3, ShiftState.FORCE_UP));
keyMap.set("l", new KeyInfo(1, 4, ShiftState.FORCE_UP));
keyMap.set("m", new KeyInfo(1, 5, ShiftState.FORCE_UP));
keyMap.set("n", new KeyInfo(1, 6, ShiftState.FORCE_UP));
keyMap.set("o", new KeyInfo(1, 7, ShiftState.FORCE_UP));
keyMap.set("p", new KeyInfo(2, 0, ShiftState.FORCE_UP));
keyMap.set("q", new KeyInfo(2, 1, ShiftState.FORCE_UP));
keyMap.set("r", new KeyInfo(2, 2, ShiftState.FORCE_UP));
keyMap.set("s", new KeyInfo(2, 3, ShiftState.FORCE_UP));
keyMap.set("t", new KeyInfo(2, 4, ShiftState.FORCE_UP));
keyMap.set("u", new KeyInfo(2, 5, ShiftState.FORCE_UP));
keyMap.set("v", new KeyInfo(2, 6, ShiftState.FORCE_UP));
keyMap.set("w", new KeyInfo(2, 7, ShiftState.FORCE_UP));
keyMap.set("x", new KeyInfo(3, 0, ShiftState.FORCE_UP));
keyMap.set("y", new KeyInfo(3, 1, ShiftState.FORCE_UP));
keyMap.set("z", new KeyInfo(3, 2, ShiftState.FORCE_UP));
keyMap.set("0", new KeyInfo(4, 0, ShiftState.FORCE_UP));
keyMap.set("1", new KeyInfo(4, 1, ShiftState.FORCE_UP));
keyMap.set("2", new KeyInfo(4, 2, ShiftState.FORCE_UP));
keyMap.set("3", new KeyInfo(4, 3, ShiftState.FORCE_UP));
keyMap.set("4", new KeyInfo(4, 4, ShiftState.FORCE_UP));
keyMap.set("5", new KeyInfo(4, 5, ShiftState.FORCE_UP));
keyMap.set("6", new KeyInfo(4, 6, ShiftState.FORCE_UP));
keyMap.set("7", new KeyInfo(4, 7, ShiftState.FORCE_UP));
keyMap.set("8", new KeyInfo(5, 0, ShiftState.FORCE_UP));
keyMap.set("9", new KeyInfo(5, 1, ShiftState.FORCE_UP));
keyMap.set("`", new KeyInfo(4, 0, ShiftState.FORCE_DOWN)); // Simulate Shift-0.
keyMap.set("!", new KeyInfo(4, 1, ShiftState.FORCE_DOWN));
keyMap.set("\"", new KeyInfo(4, 2, ShiftState.FORCE_DOWN));
keyMap.set("#", new KeyInfo(4, 3, ShiftState.FORCE_DOWN));
keyMap.set("$", new KeyInfo(4, 4, ShiftState.FORCE_DOWN));
keyMap.set("%", new KeyInfo(4, 5, ShiftState.FORCE_DOWN));
keyMap.set("&", new KeyInfo(4, 6, ShiftState.FORCE_DOWN));
keyMap.set("'", new KeyInfo(4, 7, ShiftState.FORCE_DOWN));
keyMap.set("(", new KeyInfo(5, 0, ShiftState.FORCE_DOWN));
keyMap.set(")", new KeyInfo(5, 1, ShiftState.FORCE_DOWN));
keyMap.set(":", new KeyInfo(5, 2, ShiftState.FORCE_UP));
keyMap.set(";", new KeyInfo(5, 3, ShiftState.FORCE_UP));
keyMap.set(",", new KeyInfo(5, 4, ShiftState.FORCE_UP));
keyMap.set("-", new KeyInfo(5, 5, ShiftState.FORCE_UP));
keyMap.set(".", new KeyInfo(5, 6, ShiftState.FORCE_UP));
keyMap.set("/", new KeyInfo(5, 7, ShiftState.FORCE_UP));
keyMap.set("*", new KeyInfo(5, 2, ShiftState.FORCE_DOWN));
keyMap.set("+", new KeyInfo(5, 3, ShiftState.FORCE_DOWN));
keyMap.set("<", new KeyInfo(5, 4, ShiftState.FORCE_DOWN));
keyMap.set("=", new KeyInfo(5, 5, ShiftState.FORCE_DOWN));
keyMap.set(">", new KeyInfo(5, 6, ShiftState.FORCE_DOWN));
keyMap.set("?", new KeyInfo(5, 7, ShiftState.FORCE_DOWN));
keyMap.set("Enter", new KeyInfo(6, 0, ShiftState.NEUTRAL));
keyMap.set("Tab", new KeyInfo(6, 1, ShiftState.NEUTRAL)); // Clear
keyMap.set("Escape", new KeyInfo(6, 2, ShiftState.NEUTRAL)); // Break
keyMap.set("ArrowUp", new KeyInfo(6, 3, ShiftState.NEUTRAL));
keyMap.set("ArrowDown", new KeyInfo(6, 4, ShiftState.NEUTRAL));
keyMap.set("ArrowLeft", new KeyInfo(6, 5, ShiftState.NEUTRAL));
keyMap.set("Backspace", new KeyInfo(6, 5, ShiftState.NEUTRAL)); // Left arrow
keyMap.set("ArrowRight", new KeyInfo(6, 6, ShiftState.NEUTRAL));
keyMap.set(" ", new KeyInfo(6, 7, ShiftState.NEUTRAL));
keyMap.set("Shift", new KeyInfo(7, 0, ShiftState.NEUTRAL));
class Keyboard {
    constructor() {
        // We queue up keystrokes so that we don't overwhelm the ROM polling routines.
        this.keyQueue = [];
        // Whether browser keys should be intercepted.
        this.interceptKeys = false;
        this.keyProcessMinClock = 0;
        // 8 bytes, each a bitfield of keys currently pressed.
        this.keys = new Uint8Array(8);
        this.shiftForce = ShiftState.NEUTRAL;
    }
    static isInRange(address) {
        return address >= BEGIN_ADDR && address < END_ADDR;
    }
    // Release all keys.
    clearKeyboard() {
        this.keys.fill(0);
        this.shiftForce = ShiftState.NEUTRAL;
    }
    // Read a byte from the keyboard memory bank. This is an odd system where
    // bits in the address map to the various bytes, and you can read the OR'ed
    // addresses to read more than one byte at a time. This isn't used by the
    // ROM, I don't think. For the last byte we fake the Shift key if necessary.
    readKeyboard(addr, clock) {
        addr -= BEGIN_ADDR;
        let b = 0;
        // Dequeue if necessary.
        if (clock > this.keyProcessMinClock) {
            const keyWasPressed = this.processKeyQueue();
            if (keyWasPressed) {
                this.keyProcessMinClock = clock + KEY_DELAY_CLOCK_CYCLES;
            }
        }
        // OR together the various bytes.
        for (let i = 0; i < this.keys.length; i++) {
            let keys = this.keys[i];
            if ((addr & (1 << i)) !== 0) {
                if (i === 7) {
                    // Modify keys based on the shift force.
                    switch (this.shiftForce) {
                        case ShiftState.NEUTRAL:
                            // Nothing.
                            break;
                        case ShiftState.FORCE_UP:
                            // On the Model III the first two bits are left and right shift,
                            // though we don't handle the right shift anywhere.
                            keys &= ~0x03;
                            break;
                        case ShiftState.FORCE_DOWN:
                            keys |= 0x01;
                            break;
                    }
                }
                b |= keys;
            }
        }
        return b;
    }
    // Enqueue a key press or release.
    keyEvent(key, isPressed) {
        // Look up the key info.
        const keyInfo = keyMap.get(key);
        if (keyInfo === undefined) {
            // Meta is noisy.
            if (key !== "Meta") {
                console.log("Unknown key \"" + key + "\"");
            }
        }
        else {
            // Append key to queue.
            this.keyQueue.push(new KeyActivity(keyInfo, isPressed));
        }
    }
    // Convert keys on the keyboard to ASCII letters or special strings like "Enter".
    configureKeyboard() {
        // Handle a key event by mapping it and sending it to the emulator.
        const keyEvent = (event, isPressed) => {
            // Don't do anything if we're not active.
            if (!this.interceptKeys) {
                return;
            }
            // Don't send to virtual computer if a text input field is selected.
            // if ($(document.activeElement).attr("type") === "text") {
            //     return;
            // }
            // Don't interfere with browser keys.
            if (event.metaKey || event.ctrlKey) {
                return;
            }
            const key = event.key;
            if (key !== "") {
                this.keyEvent(key, isPressed);
                event.preventDefault();
            }
        };
        const body = document.getElementsByTagName("body")[0];
        body.addEventListener("keydown", (event) => keyEvent(event, true));
        body.addEventListener("keyup", (event) => keyEvent(event, false));
        body.addEventListener("paste", (event) => {
            if (event.clipboardData) {
                const pastedText = event.clipboardData.getData("text/plain");
                if (pastedText) {
                    for (let ch of pastedText) {
                        if (ch === "\n" || ch === "\r") {
                            ch = "Enter";
                        }
                        this.keyEvent(ch, true);
                        this.keyEvent(ch, false);
                    }
                }
            }
            event.preventDefault();
        });
    }
    // Dequeue the next key and set its bit. Return whether a key was processed.
    processKeyQueue() {
        const keyActivity = this.keyQueue.shift();
        if (keyActivity === undefined) {
            return false;
        }
        this.shiftForce = keyActivity.keyInfo.shiftForce;
        const bit = 1 << keyActivity.keyInfo.bitNumber;
        if (keyActivity.isPressed) {
            this.keys[keyActivity.keyInfo.byteIndex] |= bit;
        }
        else {
            this.keys[keyActivity.keyInfo.byteIndex] &= ~bit;
        }
        return true;
    }
}

// CONCATENATED MODULE: ./node_modules/trs80-emulator/dist/module/Model1Level1Rom.js
const model1Level1Rom = `
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
`;

// CONCATENATED MODULE: ./node_modules/trs80-emulator/dist/module/Model1Level2Rom.js
const model1Level2Rom = `
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
`;

// CONCATENATED MODULE: ./node_modules/trs80-emulator/dist/module/Model3Rom.js
const model3Rom = `
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
`;

// CONCATENATED MODULE: ./node_modules/trs80-emulator/dist/module/Utils.js
const CSS_PREFIX = "trs80-emulator";
// RAM address range of screen.
const SCREEN_BEGIN = 15 * 1024;
const SCREEN_END = 16 * 1024;
/**
 * Remove all children from element.
 */
function Utils_clearElement(e) {
    while (e.firstChild) {
        e.removeChild(e.firstChild);
    }
}

// CONCATENATED MODULE: ./node_modules/trs80-emulator/dist/module/Config.js
/**
 * The TRS-80 models we support.
 */
var ModelType;
(function (ModelType) {
    ModelType[ModelType["MODEL1"] = 0] = "MODEL1";
    ModelType[ModelType["MODEL3"] = 1] = "MODEL3";
})(ModelType || (ModelType = {}));
/**
 * The levels of Basic.
 */
var BasicLevel;
(function (BasicLevel) {
    BasicLevel[BasicLevel["LEVEL1"] = 0] = "LEVEL1";
    BasicLevel[BasicLevel["LEVEL2"] = 1] = "LEVEL2";
})(BasicLevel || (BasicLevel = {}));
/**
 * The character generator chip we support.
 */
var CGChip;
(function (CGChip) {
    CGChip[CGChip["ORIGINAL"] = 0] = "ORIGINAL";
    CGChip[CGChip["LOWER_CASE"] = 1] = "LOWER_CASE";
})(CGChip || (CGChip = {}));
/**
 * The amounts of RAM we support.
 */
var RamSize;
(function (RamSize) {
    RamSize[RamSize["RAM_4_KB"] = 0] = "RAM_4_KB";
    RamSize[RamSize["RAM_16_KB"] = 1] = "RAM_16_KB";
    RamSize[RamSize["RAM_32_KB"] = 2] = "RAM_32_KB";
    RamSize[RamSize["RAM_48_KB"] = 3] = "RAM_48_KB";
})(RamSize || (RamSize = {}));
/**
 * Phosphor color.
 */
var Phosphor;
(function (Phosphor) {
    Phosphor[Phosphor["WHITE"] = 0] = "WHITE";
    Phosphor[Phosphor["GREEN"] = 1] = "GREEN";
    Phosphor[Phosphor["AMBER"] = 2] = "AMBER";
})(Phosphor || (Phosphor = {}));
/**
 * Background color.
 */
var Background;
(function (Background) {
    Background[Background["BLACK"] = 0] = "BLACK";
    Background[Background["AUTHENTIC"] = 1] = "AUTHENTIC";
})(Background || (Background = {}));
/**
 * Whether to display scan lines.
 */
var ScanLines;
(function (ScanLines) {
    ScanLines[ScanLines["OFF"] = 0] = "OFF";
    ScanLines[ScanLines["ON"] = 1] = "ON";
})(ScanLines || (ScanLines = {}));
/**
 * A specific configuration of model and RAM.
 */
class Config {
    constructor(modelType, basicLevel, cgChip, ramSize, phosphor, background, scanLines) {
        this.modelType = modelType;
        this.basicLevel = basicLevel;
        this.cgChip = cgChip;
        this.ramSize = ramSize;
        this.phosphor = phosphor;
        this.background = background;
        this.scanLines = scanLines;
    }
    withModelType(modelType) {
        return new Config(modelType, this.basicLevel, this.cgChip, this.ramSize, this.phosphor, this.background, this.scanLines);
    }
    withBasicLevel(basicLevel) {
        return new Config(this.modelType, basicLevel, this.cgChip, this.ramSize, this.phosphor, this.background, this.scanLines);
    }
    withCGChip(cgChip) {
        return new Config(this.modelType, this.basicLevel, cgChip, this.ramSize, this.phosphor, this.background, this.scanLines);
    }
    withRamSize(ramSize) {
        return new Config(this.modelType, this.basicLevel, this.cgChip, ramSize, this.phosphor, this.background, this.scanLines);
    }
    withPhosphor(phosphor) {
        return new Config(this.modelType, this.basicLevel, this.cgChip, this.ramSize, phosphor, this.background, this.scanLines);
    }
    withBackground(background) {
        return new Config(this.modelType, this.basicLevel, this.cgChip, this.ramSize, this.phosphor, background, this.scanLines);
    }
    withScanLines(scanLines) {
        return new Config(this.modelType, this.basicLevel, this.cgChip, this.ramSize, this.phosphor, this.background, scanLines);
    }
    /**
     * Make a default configuration.
     */
    static makeDefault() {
        return new Config(ModelType.MODEL3, BasicLevel.LEVEL2, CGChip.LOWER_CASE, RamSize.RAM_48_KB, Phosphor.WHITE, Background.AUTHENTIC, ScanLines.OFF);
    }
    /**
     * Whether this particular config is valid.
     */
    isValid() {
        // Model III only had Level 2. (I've read that it actually shipped with Level 1, but
        // we don't have that ROM.)
        if (this.modelType === ModelType.MODEL3 && this.basicLevel === BasicLevel.LEVEL1) {
            return false;
        }
        // Model III only had lower case.
        if (this.modelType === ModelType.MODEL3 && this.cgChip === CGChip.ORIGINAL) {
            return false;
        }
        // Rest are okay.
        return true;
    }
    /**
     * Whether this new config needs to be rebooted, if the emulator currently is running the old config.
     */
    needsReboot(oldConfig) {
        // Maybe here we could not reboot if only the CG chip changed. The software is able to detect the
        // difference (since bit 6 is synthetic in one case).
        return this.modelType !== oldConfig.modelType ||
            this.basicLevel !== oldConfig.basicLevel ||
            this.cgChip !== oldConfig.cgChip ||
            this.ramSize !== oldConfig.ramSize;
    }
    /**
     * Return the RAM size in bytes.
     */
    getRamSize() {
        let kb;
        switch (this.ramSize) {
            case RamSize.RAM_4_KB:
                kb = 4;
                break;
            case RamSize.RAM_16_KB:
                kb = 16;
                break;
            case RamSize.RAM_32_KB:
                kb = 32;
                break;
            case RamSize.RAM_48_KB:
            default:
                kb = 48;
                break;
        }
        return kb * 1024;
    }
}

// CONCATENATED MODULE: ./node_modules/trs80-emulator/dist/module/Trs80.js








// IRQs
const M1_TIMER_IRQ_MASK = 0x80;
const M3_CASSETTE_RISE_IRQ_MASK = 0x01;
const M3_CASSETTE_FALL_IRQ_MASK = 0x02;
const M3_TIMER_IRQ_MASK = 0x04;
const M3_IO_BUS_IRQ_MASK = 0x08;
const M3_UART_SED_IRQ_MASK = 0x10;
const M3_UART_RECEIVE_IRQ_MASK = 0x20;
const M3_UART_ERROR_IRQ_MASK = 0x40;
const CASSETTE_IRQ_MASKS = M3_CASSETTE_RISE_IRQ_MASK | M3_CASSETTE_FALL_IRQ_MASK;
// NMIs
const RESET_NMI_MASK = 0x20;
const DISK_MOTOR_OFF_NMI_MASK = 0x40;
const DISK_INTRQ_NMI_MASK = 0x80;
// Timer.
const M1_TIMER_HZ = 40;
const M3_TIMER_HZ = 30;
const M4_TIMER_HZ = 60;
const ROM_SIZE = 14 * 1024;
const RAM_START = 16 * 1024;
// CPU clock speeds.
const M1_CLOCK_HZ = 1774080;
const M3_CLOCK_HZ = 2027520;
const M4_CLOCK_HZ = 4055040;
const INITIAL_CLICKS_PER_TICK = 2000;
const CASSETTE_THRESHOLD = 5000 / 32768.0;
// State of the cassette hardware. We don't support writing.
var CassetteState;
(function (CassetteState) {
    CassetteState[CassetteState["CLOSE"] = 0] = "CLOSE";
    CassetteState[CassetteState["READ"] = 1] = "READ";
    CassetteState[CassetteState["FAIL"] = 2] = "FAIL";
})(CassetteState || (CassetteState = {}));
// Value of wave in audio: negative, neutral (around zero), or positive.
var CassetteValue;
(function (CassetteValue) {
    CassetteValue[CassetteValue["NEGATIVE"] = 0] = "NEGATIVE";
    CassetteValue[CassetteValue["NEUTRAL"] = 1] = "NEUTRAL";
    CassetteValue[CassetteValue["POSITIVE"] = 2] = "POSITIVE";
})(CassetteValue || (CassetteValue = {}));
/**
 * Whether the memory address maps to a screen location.
 */
function isScreenAddress(address) {
    return address >= SCREEN_BEGIN && address < SCREEN_END;
}
/**
 * See the FONT.md file for an explanation of this, but basically bit 6 is the NOR of bits 5 and 7.
 */
function computeVideoBit6(value) {
    const bit5 = (value >> 5) & 1;
    const bit7 = (value >> 7) & 1;
    const bit6 = (bit5 | bit7) ^ 1;
    return (value & 0xBF) | (bit6 << 6);
}
/**
 * HAL for the TRS-80 Model III.
 */
class Trs80_Trs80 {
    constructor(screen, cassette) {
        this.timerHz = M3_TIMER_HZ;
        this.clockHz = M3_CLOCK_HZ;
        this.tStateCount = 0;
        this.memory = new Uint8Array(0);
        this.keyboard = new Keyboard();
        this.modeImage = 0x80;
        // Which IRQs should be handled.
        this.irqMask = 0;
        // Which IRQs have been requested by the hardware.
        this.irqLatch = 0;
        // Which NMIs should be handled.
        this.nmiMask = 0;
        // Which NMIs have been requested by the hardware.
        this.nmiLatch = 0;
        // Whether we've seen this NMI and handled it.
        this.nmiSeen = false;
        this.previousTimerClock = 0;
        this.z80 = new Z80_Z80(this);
        this.clocksPerTick = INITIAL_CLICKS_PER_TICK;
        this.startTime = Date.now();
        this.started = false;
        // Internal state of the cassette controller.
        // Whether the motor is running.
        this.cassetteMotorOn = false;
        // State machine.
        this.cassetteState = CassetteState.CLOSE;
        // Internal register state.
        this.cassetteValue = CassetteValue.NEUTRAL;
        this.cassetteLastNonZeroValue = CassetteValue.NEUTRAL;
        this.cassetteFlipFlop = false;
        // When we turned on the motor (started reading the file) and how many samples
        // we've read since then.
        this.cassetteMotorOnClock = 0;
        this.cassetteSamplesRead = 0;
        this.cassetteRiseInterruptCount = 0;
        this.cassetteFallInterruptCount = 0;
        this.screen = screen;
        this.cassette = cassette;
        this.config = Config.makeDefault();
        this.updateFromConfig();
        this.loadRom();
        this.tStateCount = 0;
        this.keyboard.configureKeyboard();
    }
    /**
     * Get the current emulator's configuration.
     */
    getConfig() {
        return this.config;
    }
    /**
     * Sets a new configuration and reboots into it if necessary.
     */
    setConfig(config) {
        const needsReboot = config.needsReboot(this.config);
        this.config = config;
        this.screen.setConfig(this.config);
        if (needsReboot) {
            this.updateFromConfig();
            this.reset();
        }
    }
    /**
     * Update our settings based on the config. Wipes memory.
     */
    updateFromConfig() {
        this.memory = new Uint8Array(RAM_START + this.config.getRamSize());
        this.memory.fill(0);
        this.loadRom();
        switch (this.config.modelType) {
            case ModelType.MODEL1:
                this.timerHz = M1_TIMER_HZ;
                this.clockHz = M1_CLOCK_HZ;
                break;
            case ModelType.MODEL3:
            default:
                this.timerHz = M3_TIMER_HZ;
                this.clockHz = M3_CLOCK_HZ;
                break;
        }
    }
    /**
     * Load the config-specific ROM into memory.
     */
    loadRom() {
        let rom;
        switch (this.config.modelType) {
            case ModelType.MODEL1:
                switch (this.config.basicLevel) {
                    case BasicLevel.LEVEL1:
                        rom = model1Level1Rom;
                        break;
                    case BasicLevel.LEVEL2:
                    default:
                        rom = model1Level2Rom;
                        break;
                }
                break;
            case ModelType.MODEL3:
            default:
                rom = model3Rom;
                break;
        }
        const raw = window.atob(rom);
        for (let i = 0; i < raw.length; i++) {
            this.memory[i] = raw.charCodeAt(i);
        }
    }
    reset() {
        this.setIrqMask(0);
        this.setNmiMask(0);
        this.resetCassette();
        this.keyboard.clearKeyboard();
        this.setTimerInterrupt(false);
        this.z80.reset();
    }
    /**
     * Start the CPU and intercept browser keys.
     */
    start() {
        if (!this.started) {
            this.keyboard.interceptKeys = true;
            this.scheduleNextTick();
            this.started = true;
        }
    }
    /**
     * Stop the CPU and no longer intercept browser keys.
     */
    stop() {
        if (this.started) {
            this.keyboard.interceptKeys = false;
            this.cancelTickTimeout();
            this.started = false;
        }
    }
    // Set the mask for IRQ (regular) interrupts.
    setIrqMask(irqMask) {
        this.irqMask = irqMask;
    }
    // Set the mask for non-maskable interrupts. (Yes.)
    setNmiMask(nmiMask) {
        // Reset is always allowed:
        this.nmiMask = nmiMask | RESET_NMI_MASK;
        this.updateNmiSeen();
    }
    interruptLatchRead() {
        if (this.config.modelType === ModelType.MODEL1) {
            const irqLatch = this.irqLatch;
            this.setTimerInterrupt(false);
            // TODO irq = this.irqLatch !== 0;
            return irqLatch;
        }
        else {
            return ~this.irqLatch & 0xFF;
        }
    }
    step() {
        this.z80.step();
        // Handle non-maskable interrupts.
        if ((this.nmiLatch & this.nmiMask) !== 0 && !this.nmiSeen) {
            this.z80.nonMaskableInterrupt();
            this.nmiSeen = true;
            // Simulate the reset button being released. TODO
            // this.resetButtonInterrupt(false);
        }
        // Handle interrupts.
        if ((this.irqLatch & this.irqMask) !== 0) {
            this.z80.maskableInterrupt();
        }
        // Set off a timer interrupt.
        if (this.tStateCount > this.previousTimerClock + this.clockHz / this.timerHz) {
            this.handleTimer();
            this.previousTimerClock = this.tStateCount;
        }
        // Update cassette state.
        this.updateCassette();
    }
    contendMemory(address) {
        // Ignore.
    }
    contendPort(address) {
        // Ignore.
    }
    readMemory(address) {
        if (address < ROM_SIZE || address >= RAM_START || isScreenAddress(address)) {
            return address < this.memory.length ? this.memory[address] : 0xFF;
        }
        else if (address === 0x37E8) {
            // Printer. 0x30 = Printer selected, ready, with paper, not busy.
            return 0x30;
        }
        else if (Keyboard.isInRange(address)) {
            // Keyboard.
            return this.keyboard.readKeyboard(address, this.tStateCount);
        }
        else {
            // Unmapped memory.
            console.log("Reading from unmapped memory at 0x" + toHex(address, 4));
            return 0;
        }
    }
    readPort(address) {
        const port = address & 0xFF;
        let value = 0xFF; // Default value for missing ports.
        switch (port) {
            case 0x00:
                // Joystick.
                value = 0xFF;
                break;
            case 0xE0:
                if (this.config.modelType !== ModelType.MODEL1) {
                    // IRQ latch read.
                    value = this.interruptLatchRead();
                }
                break;
            case 0xE4:
                if (this.config.modelType !== ModelType.MODEL1) {
                    // NMI latch read.
                    value = ~this.nmiLatch & 0xFF;
                }
                break;
            case 0xEC:
            case 0xED:
            case 0xEE:
            case 0xEF:
                if (this.config.modelType !== ModelType.MODEL1) {
                    // Acknowledge timer.
                    this.setTimerInterrupt(false);
                    value = 0xFF;
                }
                break;
            case 0xF0:
                // No diskette.
                value = 0xFF;
                break;
            case 0xFF:
                // Cassette and various flags.
                if (this.config.modelType === ModelType.MODEL1) {
                    value = 0x3F;
                    if (!this.screen.isExpandedCharacters()) {
                        value |= 0x40;
                    }
                }
                else {
                    value = this.modeImage & 0x7E;
                }
                value |= this.getCassetteByte();
                break;
            default:
                console.log("Reading from unknown port 0x" + toHex(lo(address), 2));
                return 0;
        }
        // console.log("Reading 0x" + toHex(value, 2) + " from port 0x" + toHex(lo(address), 2));
        return value;
    }
    writePort(address, value) {
        const port = address & 0xFF;
        switch (port) {
            case 0xE0:
                if (this.config.modelType !== ModelType.MODEL1) {
                    // Set interrupt mask.
                    this.setIrqMask(value);
                }
                break;
            case 0xE4:
            case 0xE5:
            case 0xE6:
            case 0xE7:
                if (this.config.modelType !== ModelType.MODEL1) {
                    // Set NMI state.
                    this.setNmiMask(value);
                }
                break;
            case 0xEC:
            case 0xED:
            case 0xEE:
            case 0xEF:
                if (this.config.modelType !== ModelType.MODEL1) {
                    // Various controls.
                    this.modeImage = value;
                    this.setCassetteMotor((value & 0x02) !== 0);
                    this.screen.setExpandedCharacters((value & 0x04) !== 0);
                    this.screen.setAlternateCharacters((value & 0x08) === 0);
                }
                break;
            case 0xF0:
                // Disk command.
                // TODO
                // this.writeDiskCommand(value)
                break;
            case 0xF4:
            case 0xF5:
            case 0xF6:
            case 0xF7:
                // Disk select.
                // TODO
                // this.writeDiskSelect(value)
                break;
            case 0xFC:
            case 0xFD:
            case 0xFE:
            case 0xFF:
                if (this.config.modelType === ModelType.MODEL1) {
                    this.setCassetteMotor((value & 0x04) !== 0);
                    this.screen.setExpandedCharacters((value & 0x08) !== 0);
                }
                if ((value & 0x20) !== 0) {
                    // Model III Micro Labs graphics card.
                    console.log("Sending 0x" + toHex(value, 2) + " to Micro Labs graphics card");
                }
                else {
                    // Do cassette emulation.
                    this.putCassetteByte(value & 0x03);
                }
                break;
            default:
                console.log("Writing 0x" + toHex(value, 2) + " to unknown port 0x" + toHex(port, 2));
                return;
        }
        // console.log("Wrote 0x" + toHex(value, 2) + " to port 0x" + toHex(port, 2));
    }
    writeMemory(address, value) {
        if (address < ROM_SIZE) {
            console.log("Warning: Writing to ROM location 0x" + toHex(address, 4));
        }
        else {
            if (address >= SCREEN_BEGIN && address < SCREEN_END) {
                if (this.config.cgChip === CGChip.ORIGINAL) {
                    // No bit 6 in video memory, need to compute it.
                    value = computeVideoBit6(value);
                }
                this.screen.writeChar(address, value);
            }
            else if (address < RAM_START) {
                console.log("Writing to unmapped memory at 0x" + toHex(address, 4));
            }
            this.memory[address] = value;
        }
    }
    // Reset cassette edge interrupts.
    cassetteClearInterrupt() {
        this.irqLatch &= ~CASSETTE_IRQ_MASKS;
    }
    // Check whether the software has enabled these interrupts.
    cassetteInterruptsEnabled() {
        return (this.irqMask & CASSETTE_IRQ_MASKS) !== 0;
    }
    /**
     * Get an opaque string that represents the state of the screen. Flashes the screen.
     */
    getScreenshot() {
        const buf = [];
        // First byte is screen mode, where 0 means normal (64 columns) and 1 means wide (32 columns).
        buf.push(this.screen.isExpandedCharacters() ? 1 : 0);
        // Run-length encode bytes with (value,count) pairs, with a max count of 255. Bytes
        // in the range 33 to 127 inclusive have an implicit count of 1.
        for (let address = SCREEN_BEGIN; address < SCREEN_END; address++) {
            const value = this.memory[address];
            if (value > 32 && value < 128) {
                // Bytes in this range don't store a count.
                buf.push(value);
            }
            else if (buf.length < 2 || buf[buf.length - 1] === 255 || buf[buf.length - 2] !== value) {
                // New entry.
                buf.push(value);
                buf.push(1);
            }
            else {
                // Increment existing count.
                buf[buf.length - 1] += 1;
            }
        }
        // Convert to a binary string.
        let s = buf.map(n => String.fromCharCode(n)).join("");
        // Start visual flash effect.
        Trs80_Trs80.flashNode(this.screen.getNode());
        // Base-64 encode and prefix with version number.
        return "0:" + btoa(s);
    }
    /**
     * Flash the node as if a photo were taken.
     */
    static flashNode(node) {
        // Position a semi-transparent white div over the screen, and reduce its transparency over time.
        const oldNodePosition = node.style.position;
        node.style.position = "relative";
        const overlay = document.createElement("div");
        overlay.style.position = "absolute";
        overlay.style.left = "0";
        overlay.style.top = "0";
        overlay.style.right = "0";
        overlay.style.bottom = "0";
        overlay.style.backgroundColor = "#ffffff";
        // Fade out.
        let opacity = 1;
        const updateOpacity = () => {
            overlay.style.opacity = opacity.toString();
            opacity -= 0.1;
            if (opacity >= 0) {
                window.requestAnimationFrame(updateOpacity);
            }
            else {
                node.removeChild(overlay);
                node.style.position = oldNodePosition;
            }
        };
        updateOpacity();
        node.appendChild(overlay);
    }
    // Reset whether we've seen this NMI interrupt if the mask and latch no longer overlap.
    updateNmiSeen() {
        if ((this.nmiLatch & this.nmiMask) === 0) {
            this.nmiSeen = false;
        }
    }
    /**
     * Run a certain number of CPU instructions and schedule another tick.
     */
    tick() {
        for (let i = 0; i < this.clocksPerTick; i++) {
            this.step();
        }
        this.scheduleNextTick();
    }
    /**
     * Figure out how many CPU cycles we should optimally run and how long
     * to wait until scheduling it, then schedule it to be run later.
     */
    scheduleNextTick() {
        let delay;
        if (this.cassetteMotorOn || this.keyboard.keyQueue.length > 4) {
            // Go fast if we're accessing the cassette or pasting.
            this.clocksPerTick = 100000;
            delay = 0;
        }
        else {
            // Delay to match original clock speed.
            const now = Date.now();
            const actualElapsed = now - this.startTime;
            const expectedElapsed = this.tStateCount * 1000 / this.clockHz;
            let behind = expectedElapsed - actualElapsed;
            if (behind < -100 || behind > 100) {
                // We're too far behind or ahead. Catch up artificially.
                this.startTime = now - expectedElapsed;
                behind = 0;
            }
            delay = Math.round(Math.max(0, behind));
            if (delay === 0) {
                // Delay too short, do more each tick.
                this.clocksPerTick = Math.min(this.clocksPerTick + 100, 10000);
            }
            else if (delay > 1) {
                // Delay too long, do less each tick.
                this.clocksPerTick = Math.max(this.clocksPerTick - 100, 100);
            }
        }
        // console.log(this.clocksPerTick, delay);
        this.cancelTickTimeout();
        this.tickHandle = window.setTimeout(() => {
            this.tickHandle = undefined;
            this.tick();
        }, delay);
    }
    /**
     * Stop the tick timeout, if it's running.
     */
    cancelTickTimeout() {
        if (this.tickHandle !== undefined) {
            window.clearTimeout(this.tickHandle);
            this.tickHandle = undefined;
        }
    }
    // Set or reset the timer interrupt.
    setTimerInterrupt(state) {
        if (this.config.modelType === ModelType.MODEL1) {
            if (state) {
                this.irqLatch |= M1_TIMER_IRQ_MASK;
            }
            else {
                this.irqLatch &= ~M1_TIMER_IRQ_MASK;
            }
        }
        else {
            if (state) {
                this.irqLatch |= M3_TIMER_IRQ_MASK;
            }
            else {
                this.irqLatch &= ~M3_TIMER_IRQ_MASK;
            }
        }
    }
    // What to do when the hardware timer goes off.
    handleTimer() {
        this.setTimerInterrupt(true);
    }
    // Reset the controller to a known state.
    resetCassette() {
        this.setCassetteState(CassetteState.CLOSE);
    }
    // Get a byte from the I/O port.
    getCassetteByte() {
        // If the motor's running, and we're reading a byte, then get into read mode.
        if (this.cassetteMotorOn) {
            this.setCassetteState(CassetteState.READ);
        }
        // Clear any interrupt that may have triggered this read.
        this.cassetteClearInterrupt();
        // Cassette owns bits 0 and 7.
        let b = 0;
        if (this.cassetteFlipFlop) {
            b |= 0x80;
        }
        if (this.config.modelType !== ModelType.MODEL1 && this.cassetteLastNonZeroValue === CassetteValue.POSITIVE) {
            b |= 0x01;
        }
        return b;
    }
    // Write to the cassette port. We don't support writing tapes, but this is used
    // for 500-baud reading to trigger the next analysis of the tape.
    putCassetteByte(b) {
        if (this.cassetteMotorOn) {
            if (this.cassetteState === CassetteState.READ) {
                this.updateCassette();
                this.cassetteFlipFlop = false;
            }
        }
    }
    // Kick off the reading process when doing 1500-baud reads.
    kickOffCassette() {
        if (this.cassetteMotorOn &&
            this.cassetteState === CassetteState.CLOSE &&
            this.cassetteInterruptsEnabled()) {
            // Kick off the process.
            this.cassetteRiseInterrupt();
            this.cassetteFallInterrupt();
        }
    }
    // Turn the motor on or off.
    setCassetteMotor(cassetteMotorOn) {
        if (cassetteMotorOn !== this.cassetteMotorOn) {
            if (cassetteMotorOn) {
                this.cassetteFlipFlop = false;
                this.cassetteLastNonZeroValue = CassetteValue.NEUTRAL;
                // Waits a second before kicking off the cassette.
                // TODO this should be in CPU cycles, not browser cycles.
                if (this.config.modelType !== ModelType.MODEL1) {
                    setTimeout(() => this.kickOffCassette(), 1000);
                }
            }
            else {
                this.setCassetteState(CassetteState.CLOSE);
            }
            this.cassetteMotorOn = cassetteMotorOn;
            if (cassetteMotorOn) {
                this.cassette.onMotorStart();
            }
            else {
                this.cassette.onMotorStop();
            }
        }
    }
    // Read some of the cassette to see if we should be triggering a rise/fall interrupt.
    updateCassette() {
        if (this.cassetteMotorOn && this.setCassetteState(CassetteState.READ) >= 0) {
            // See how many samples we should have read by now.
            const samplesToRead = Math.round((this.tStateCount - this.cassetteMotorOnClock) *
                this.cassette.samplesPerSecond / this.clockHz);
            // Catch up.
            while (this.cassetteSamplesRead < samplesToRead) {
                const sample = this.cassette.readSample();
                this.cassetteSamplesRead++;
                // Convert to state, where neutral is some noisy in-between state.
                let cassetteValue = CassetteValue.NEUTRAL;
                if (sample > CASSETTE_THRESHOLD) {
                    cassetteValue = CassetteValue.POSITIVE;
                }
                else if (sample < -CASSETTE_THRESHOLD) {
                    cassetteValue = CassetteValue.NEGATIVE;
                }
                // See if we've changed value.
                if (cassetteValue !== this.cassetteValue) {
                    if (cassetteValue === CassetteValue.POSITIVE) {
                        // Positive edge.
                        this.cassetteFlipFlop = true;
                        this.cassetteRiseInterrupt();
                    }
                    else if (cassetteValue === CassetteValue.NEGATIVE) {
                        // Negative edge.
                        this.cassetteFlipFlop = true;
                        this.cassetteFallInterrupt();
                    }
                    this.cassetteValue = cassetteValue;
                    if (cassetteValue !== CassetteValue.NEUTRAL) {
                        this.cassetteLastNonZeroValue = cassetteValue;
                    }
                }
            }
        }
    }
    // Returns 0 if the state was changed, 1 if it wasn't, and -1 on error.
    setCassetteState(newState) {
        const oldCassetteState = this.cassetteState;
        // See if we're changing anything.
        if (oldCassetteState === newState) {
            return 1;
        }
        // Once in error, everything will fail until we close.
        if (oldCassetteState === CassetteState.FAIL && newState !== CassetteState.CLOSE) {
            return -1;
        }
        // Change things based on new state.
        switch (newState) {
            case CassetteState.READ:
                this.openCassetteFile();
                break;
        }
        // Update state.
        this.cassetteState = newState;
        return 0;
    }
    // Open file, get metadata, and get read to read the tape.
    openCassetteFile() {
        // TODO open/rewind cassette?
        // Reset the clock.
        this.cassetteMotorOnClock = this.tStateCount;
        this.cassetteSamplesRead = 0;
    }
    // Saw a positive edge on cassette.
    cassetteRiseInterrupt() {
        this.cassetteRiseInterruptCount++;
        this.irqLatch = (this.irqLatch & ~M3_CASSETTE_RISE_IRQ_MASK) |
            (this.irqMask & M3_CASSETTE_RISE_IRQ_MASK);
    }
    // Saw a negative edge on cassette.
    cassetteFallInterrupt() {
        this.cassetteFallInterruptCount++;
        this.irqLatch = (this.irqLatch & ~M3_CASSETTE_FALL_IRQ_MASK) |
            (this.irqMask & M3_CASSETTE_FALL_IRQ_MASK);
    }
}

// CONCATENATED MODULE: ./node_modules/trs80-emulator/dist/module/Trs80Screen.js

/**
 * Abstract base class for displaying a screen.
 */
class Trs80Screen_Trs80Screen {
    constructor() {
        this.expanded = false;
        this.alternate = false;
    }
    /**
     * Set the config for this screen. Before this is called, the screen is permitted to use any config
     * it wants.
     */
    setConfig(config) {
        throw new Error("Must be implemented");
    }
    /**
     * Write a character to the screen.
     * @param address address of the character, where 15360 is the upper-left of the screen.
     * @param value the 0-255 value to write.
     */
    writeChar(address, value) {
        throw new Error("Must be implemented");
    }
    /**
     * Get the HTML node for this screen.
     */
    getNode() {
        throw new Error("Must be implemented");
    }
    /**
     * Enable or disable expanded (wide) character mode.
     */
    setExpandedCharacters(expanded) {
        this.expanded = expanded;
    }
    /**
     * Return whether we're in expanded (wide) character mode.
     */
    isExpandedCharacters() {
        return this.expanded;
    }
    /**
     * Enable or disable alternate (Katakana) character mode.
     */
    setAlternateCharacters(alternate) {
        this.alternate = alternate;
    }
    /**
     * Return whether we're in alternate (Katakana) character mode.
     */
    isAlternateCharacters() {
        return this.alternate;
    }
    /**
     * Fill the screen with the screenshot.
     */
    displayScreenshot(screenshot) {
        // Leave it blank if screenshot string is blank.
        if (screenshot === "") {
            return;
        }
        if (!screenshot.startsWith("0:")) {
            throw new Error("Invalid screenshot version number");
        }
        // Decode screenshot.
        const s = atob(screenshot.substring(2));
        if (s.length === 0) {
            throw new Error("Screenshot string is empty");
        }
        // Set expanded mode.
        this.setExpandedCharacters(s.charCodeAt(0) === 1);
        let address = SCREEN_BEGIN;
        for (let i = 1; i < s.length; i++) {
            const value = s.charCodeAt(i);
            let count = 1;
            if (value > 32 && value < 128) {
                // Implicit count of 1.
            }
            else {
                i++;
                if (i === s.length) {
                    throw new Error("Missing count in RLE");
                }
                count = s.charCodeAt(i);
            }
            // Emit "count" values.
            while (count--) {
                this.writeChar(address++, value);
            }
        }
        if (address !== SCREEN_END) {
            throw new Error("Screenshot was of the wrong length");
        }
    }
}

// CONCATENATED MODULE: ./node_modules/trs80-emulator/dist/module/Fonts.js
/**
 * These fonts are from the xtrs emulator, and the CG# references match those.
 * They're identical to the fonts in the sdltrs emulator. They don't include
 * the 2x3 graphical characters; we generate those procedurally.
 *
 * See the original trs_chars.c file for Tim Mann's explanations and historical
 * notes.
 */
// Here is the LICENSE file from the xtrs emulator:
/*

Copyright (C) 1992 Clarendon Hill Software.

Permission is granted to any individual or institution to use, copy,
or redistribute this software, provided this copyright notice is retained.

This software is provided "as is" without any expressed or implied
warranty.  If this software brings on any sort of damage -- physical,
monetary, emotional, or brain -- too bad.  You've got no one to blame
but yourself.

The software may be modified for your own purposes, but modified versions
must retain this notice.

***

Copyright (c) 1996-2020, Timothy P. Mann

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use, copy,
modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/
/**
 * Original Model I character set.
 */
const GLYPH_CG1 = [
    0x00, 0x1f, 0x11, 0x11, 0x11, 0x11, 0x11, 0x1f, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x1f, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x04, 0x04, 0x04, 0x04, 0x04, 0x04, 0x1f, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x10, 0x10, 0x10, 0x10, 0x10, 0x10, 0x1f, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x02, 0x04, 0x08, 0x1e, 0x04, 0x08, 0x10, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x1f, 0x11, 0x1b, 0x15, 0x1b, 0x11, 0x1f, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x10, 0x08, 0x05, 0x03, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x0e, 0x11, 0x11, 0x1f, 0x0a, 0x0a, 0x1b, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x04, 0x02, 0x0f, 0x12, 0x14, 0x10, 0x10, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x04, 0x08, 0x1f, 0x08, 0x04, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x1f, 0x00, 0x00, 0x1f, 0x00, 0x00, 0x1f, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x04, 0x04, 0x15, 0x0e, 0x04, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x04, 0x15, 0x0e, 0x04, 0x15, 0x0e, 0x04, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x04, 0x02, 0x1f, 0x02, 0x04, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x0e, 0x11, 0x1b, 0x15, 0x1b, 0x11, 0x0e, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x0e, 0x11, 0x11, 0x15, 0x11, 0x11, 0x0e, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x1f, 0x11, 0x11, 0x1f, 0x11, 0x11, 0x1f, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x0e, 0x15, 0x15, 0x1d, 0x11, 0x11, 0x0e, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x0e, 0x11, 0x11, 0x1d, 0x15, 0x15, 0x0e, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x0e, 0x11, 0x11, 0x17, 0x15, 0x15, 0x0e, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x0e, 0x15, 0x15, 0x17, 0x11, 0x11, 0x0e, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x14, 0x08, 0x15, 0x03, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x0e, 0x0a, 0x0a, 0x0a, 0x0a, 0x0a, 0x1b, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x10, 0x10, 0x10, 0x1f, 0x10, 0x10, 0x10, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x1f, 0x11, 0x0a, 0x04, 0x0a, 0x11, 0x1f, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x04, 0x04, 0x0e, 0x0e, 0x04, 0x04, 0x04, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x0e, 0x11, 0x01, 0x02, 0x04, 0x00, 0x04, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x0e, 0x11, 0x11, 0x1f, 0x11, 0x11, 0x0e, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x1f, 0x15, 0x15, 0x17, 0x11, 0x11, 0x1f, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x1f, 0x11, 0x11, 0x17, 0x15, 0x15, 0x1f, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x1f, 0x11, 0x11, 0x1d, 0x15, 0x15, 0x1f, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x1f, 0x15, 0x15, 0x1d, 0x11, 0x11, 0x1f, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x04, 0x04, 0x04, 0x04, 0x04, 0x00, 0x04, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x0a, 0x0a, 0x0a, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x0a, 0x0a, 0x1f, 0x0a, 0x1f, 0x0a, 0x0a, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x04, 0x1e, 0x05, 0x0e, 0x14, 0x0f, 0x04, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x03, 0x13, 0x08, 0x04, 0x02, 0x19, 0x18, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x02, 0x05, 0x05, 0x02, 0x15, 0x09, 0x16, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x06, 0x06, 0x02, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x08, 0x04, 0x02, 0x02, 0x02, 0x04, 0x08, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x02, 0x04, 0x08, 0x08, 0x08, 0x04, 0x02, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x04, 0x15, 0x0e, 0x1f, 0x0e, 0x15, 0x04, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x04, 0x04, 0x1f, 0x04, 0x04, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x00, 0x06, 0x06, 0x02, 0x01, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x00, 0x1f, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x06, 0x06, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x10, 0x08, 0x04, 0x02, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x0e, 0x11, 0x19, 0x15, 0x13, 0x11, 0x0e, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x04, 0x06, 0x04, 0x04, 0x04, 0x04, 0x0e, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x0e, 0x11, 0x10, 0x0e, 0x01, 0x01, 0x1f, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x0e, 0x11, 0x10, 0x0c, 0x10, 0x11, 0x0e, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x08, 0x0c, 0x0a, 0x09, 0x1f, 0x08, 0x08, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x1f, 0x01, 0x0f, 0x10, 0x10, 0x11, 0x0e, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x0c, 0x02, 0x01, 0x0f, 0x11, 0x11, 0x0e, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x1f, 0x10, 0x08, 0x04, 0x02, 0x01, 0x01, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x0e, 0x11, 0x11, 0x0e, 0x11, 0x11, 0x0e, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x0e, 0x11, 0x11, 0x1e, 0x10, 0x08, 0x06, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x06, 0x06, 0x00, 0x06, 0x06, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x06, 0x06, 0x00, 0x06, 0x06, 0x02, 0x01, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x08, 0x04, 0x02, 0x01, 0x02, 0x04, 0x08, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x1f, 0x00, 0x1f, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x02, 0x04, 0x08, 0x10, 0x08, 0x04, 0x02, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x0e, 0x11, 0x10, 0x08, 0x04, 0x00, 0x04, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x0e, 0x11, 0x10, 0x16, 0x15, 0x15, 0x0e, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x04, 0x0a, 0x11, 0x11, 0x1f, 0x11, 0x11, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x0f, 0x12, 0x12, 0x0e, 0x12, 0x12, 0x0f, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x0e, 0x11, 0x01, 0x01, 0x01, 0x11, 0x0e, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x0f, 0x12, 0x12, 0x12, 0x12, 0x12, 0x0f, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x1f, 0x01, 0x01, 0x07, 0x01, 0x01, 0x1f, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x1f, 0x01, 0x01, 0x07, 0x01, 0x01, 0x01, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x1e, 0x01, 0x01, 0x19, 0x11, 0x11, 0x1e, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x11, 0x11, 0x11, 0x1f, 0x11, 0x11, 0x11, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x0e, 0x04, 0x04, 0x04, 0x04, 0x04, 0x0e, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x10, 0x10, 0x10, 0x10, 0x10, 0x11, 0x0e, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x11, 0x09, 0x05, 0x03, 0x05, 0x09, 0x11, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x1f, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x11, 0x1b, 0x15, 0x15, 0x11, 0x11, 0x11, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x11, 0x13, 0x15, 0x19, 0x11, 0x11, 0x11, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x0e, 0x11, 0x11, 0x11, 0x11, 0x11, 0x0e, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x0f, 0x11, 0x11, 0x0f, 0x01, 0x01, 0x01, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x0e, 0x11, 0x11, 0x11, 0x15, 0x09, 0x16, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x0f, 0x11, 0x11, 0x0f, 0x05, 0x09, 0x11, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x0e, 0x11, 0x01, 0x0e, 0x10, 0x11, 0x0e, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x1f, 0x04, 0x04, 0x04, 0x04, 0x04, 0x04, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x11, 0x11, 0x11, 0x11, 0x11, 0x11, 0x0e, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x11, 0x11, 0x11, 0x0a, 0x0a, 0x04, 0x04, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x11, 0x11, 0x11, 0x11, 0x15, 0x1b, 0x11, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x11, 0x11, 0x0a, 0x04, 0x0a, 0x11, 0x11, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x11, 0x11, 0x0a, 0x04, 0x04, 0x04, 0x04, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x1f, 0x10, 0x08, 0x04, 0x02, 0x01, 0x1f, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x04, 0x0e, 0x15, 0x04, 0x04, 0x04, 0x04, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x04, 0x04, 0x04, 0x04, 0x15, 0x0e, 0x04, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x04, 0x02, 0x1f, 0x02, 0x04, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x04, 0x08, 0x1f, 0x08, 0x04, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x1f, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x0c, 0x0c, 0x04, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x0e, 0x10, 0x1e, 0x11, 0x1e, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x01, 0x01, 0x0d, 0x13, 0x11, 0x13, 0x0d, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x0e, 0x11, 0x01, 0x11, 0x0e, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x10, 0x10, 0x16, 0x19, 0x11, 0x19, 0x16, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x0e, 0x11, 0x1f, 0x01, 0x0e, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x08, 0x14, 0x04, 0x0e, 0x04, 0x04, 0x04, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x16, 0x19, 0x19, 0x16, 0x10, 0x11, 0x0e, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x01, 0x01, 0x0d, 0x13, 0x11, 0x11, 0x11, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x04, 0x00, 0x06, 0x04, 0x04, 0x04, 0x0e, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x10, 0x00, 0x10, 0x10, 0x10, 0x11, 0x0e, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x01, 0x01, 0x09, 0x05, 0x03, 0x05, 0x09, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x06, 0x04, 0x04, 0x04, 0x04, 0x04, 0x0e, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x0b, 0x15, 0x15, 0x15, 0x15, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x0d, 0x13, 0x11, 0x11, 0x11, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x0e, 0x11, 0x11, 0x11, 0x0e, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x0d, 0x13, 0x11, 0x13, 0x0d, 0x01, 0x01, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x16, 0x19, 0x11, 0x19, 0x16, 0x10, 0x10, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x0d, 0x13, 0x01, 0x01, 0x01, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x1e, 0x01, 0x0e, 0x10, 0x0f, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x04, 0x04, 0x1f, 0x04, 0x04, 0x14, 0x08, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x11, 0x11, 0x11, 0x19, 0x16, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x11, 0x11, 0x11, 0x0a, 0x04, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x11, 0x11, 0x15, 0x15, 0x0a, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x11, 0x0a, 0x04, 0x0a, 0x11, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x11, 0x11, 0x11, 0x1e, 0x10, 0x11, 0x0e, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x1f, 0x08, 0x04, 0x02, 0x1f, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x08, 0x04, 0x04, 0x02, 0x04, 0x04, 0x08, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x04, 0x04, 0x04, 0x00, 0x04, 0x04, 0x04, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x02, 0x04, 0x04, 0x08, 0x04, 0x04, 0x02, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x02, 0x15, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x0a, 0x15, 0x0a, 0x15, 0x0a, 0x15, 0x0a, 0x00, 0x00, 0x00, 0x00,
];
/**
 * Model I character set with official Radio Shack upgrade.
 */
const GLYPH_CG2 = [
    0x0e, 0x11, 0x10, 0x16, 0x15, 0x15, 0x0e, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x04, 0x0a, 0x11, 0x11, 0x1f, 0x11, 0x11, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x0f, 0x12, 0x12, 0x0e, 0x12, 0x12, 0x0f, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x0e, 0x11, 0x01, 0x01, 0x01, 0x11, 0x0e, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x0f, 0x12, 0x12, 0x12, 0x12, 0x12, 0x0f, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x1f, 0x01, 0x01, 0x07, 0x01, 0x01, 0x1f, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x1f, 0x01, 0x01, 0x07, 0x01, 0x01, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x1e, 0x01, 0x01, 0x19, 0x11, 0x11, 0x1e, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x11, 0x11, 0x11, 0x1f, 0x11, 0x11, 0x11, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x0e, 0x04, 0x04, 0x04, 0x04, 0x04, 0x0e, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x10, 0x10, 0x10, 0x10, 0x10, 0x11, 0x0e, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x11, 0x09, 0x05, 0x03, 0x05, 0x09, 0x11, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x1f, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x11, 0x1b, 0x15, 0x15, 0x11, 0x11, 0x11, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x11, 0x13, 0x15, 0x19, 0x11, 0x11, 0x11, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x0e, 0x11, 0x11, 0x11, 0x11, 0x11, 0x0e, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x0f, 0x11, 0x11, 0x0f, 0x01, 0x01, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x0e, 0x11, 0x11, 0x11, 0x15, 0x09, 0x16, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x0f, 0x11, 0x11, 0x0f, 0x05, 0x09, 0x11, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x0e, 0x11, 0x01, 0x0e, 0x10, 0x11, 0x0e, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x1f, 0x04, 0x04, 0x04, 0x04, 0x04, 0x04, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x11, 0x11, 0x11, 0x11, 0x11, 0x11, 0x0e, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x11, 0x11, 0x11, 0x0a, 0x0a, 0x04, 0x04, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x11, 0x11, 0x11, 0x11, 0x15, 0x1b, 0x11, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x11, 0x11, 0x0a, 0x04, 0x0a, 0x11, 0x11, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x11, 0x11, 0x0a, 0x04, 0x04, 0x04, 0x04, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x1f, 0x10, 0x08, 0x04, 0x02, 0x01, 0x1f, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x04, 0x0e, 0x15, 0x04, 0x04, 0x04, 0x04, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x04, 0x04, 0x04, 0x04, 0x15, 0x0e, 0x04, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x04, 0x02, 0x1f, 0x02, 0x04, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x04, 0x08, 0x1f, 0x08, 0x04, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x1f, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x04, 0x04, 0x04, 0x04, 0x04, 0x00, 0x04, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x0a, 0x0a, 0x0a, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x0a, 0x0a, 0x1f, 0x0a, 0x1f, 0x0a, 0x0a, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x04, 0x1e, 0x05, 0x0e, 0x14, 0x0f, 0x04, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x03, 0x13, 0x08, 0x04, 0x02, 0x19, 0x18, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x02, 0x05, 0x05, 0x02, 0x15, 0x09, 0x16, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x06, 0x06, 0x02, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x08, 0x04, 0x02, 0x02, 0x02, 0x04, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x02, 0x04, 0x08, 0x08, 0x08, 0x04, 0x02, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x04, 0x15, 0x0e, 0x1f, 0x0e, 0x15, 0x04, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x04, 0x04, 0x1f, 0x04, 0x04, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x00, 0x06, 0x06, 0x02, 0x01, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x1f, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x00, 0x00, 0x06, 0x06, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x10, 0x08, 0x04, 0x02, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x0e, 0x11, 0x19, 0x15, 0x13, 0x11, 0x0e, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x04, 0x06, 0x04, 0x04, 0x04, 0x04, 0x0e, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x0e, 0x11, 0x10, 0x0e, 0x01, 0x01, 0x1f, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x0e, 0x11, 0x10, 0x0c, 0x10, 0x11, 0x0e, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x08, 0x0c, 0x0a, 0x09, 0x1f, 0x08, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x1f, 0x01, 0x0f, 0x10, 0x10, 0x11, 0x0e, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x0c, 0x02, 0x01, 0x0f, 0x11, 0x11, 0x0e, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x1f, 0x10, 0x08, 0x04, 0x02, 0x02, 0x02, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x0e, 0x11, 0x11, 0x0e, 0x11, 0x11, 0x0e, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x0e, 0x11, 0x11, 0x1e, 0x10, 0x08, 0x06, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x06, 0x06, 0x00, 0x06, 0x06, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x06, 0x06, 0x00, 0x06, 0x06, 0x02, 0x01, 0x00, 0x00, 0x00, 0x00,
    0x08, 0x04, 0x02, 0x01, 0x02, 0x04, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x1f, 0x00, 0x1f, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x02, 0x04, 0x08, 0x10, 0x08, 0x04, 0x02, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x0e, 0x11, 0x10, 0x08, 0x04, 0x00, 0x04, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x0e, 0x11, 0x10, 0x16, 0x15, 0x15, 0x0e, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x04, 0x0a, 0x11, 0x11, 0x1f, 0x11, 0x11, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x0f, 0x12, 0x12, 0x0e, 0x12, 0x12, 0x0f, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x0e, 0x11, 0x01, 0x01, 0x01, 0x11, 0x0e, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x0f, 0x12, 0x12, 0x12, 0x12, 0x12, 0x0f, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x1f, 0x01, 0x01, 0x07, 0x01, 0x01, 0x1f, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x1f, 0x01, 0x01, 0x07, 0x01, 0x01, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x1e, 0x01, 0x01, 0x19, 0x11, 0x11, 0x1e, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x11, 0x11, 0x11, 0x1f, 0x11, 0x11, 0x11, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x0e, 0x04, 0x04, 0x04, 0x04, 0x04, 0x0e, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x10, 0x10, 0x10, 0x10, 0x10, 0x11, 0x0e, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x11, 0x09, 0x05, 0x03, 0x05, 0x09, 0x11, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x1f, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x11, 0x1b, 0x15, 0x15, 0x11, 0x11, 0x11, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x11, 0x13, 0x15, 0x19, 0x11, 0x11, 0x11, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x0e, 0x11, 0x11, 0x11, 0x11, 0x11, 0x0e, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x0f, 0x11, 0x11, 0x0f, 0x01, 0x01, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x0e, 0x11, 0x11, 0x11, 0x15, 0x09, 0x16, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x0f, 0x11, 0x11, 0x0f, 0x05, 0x09, 0x11, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x0e, 0x11, 0x01, 0x0e, 0x10, 0x11, 0x0e, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x1f, 0x04, 0x04, 0x04, 0x04, 0x04, 0x04, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x11, 0x11, 0x11, 0x11, 0x11, 0x11, 0x0e, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x11, 0x11, 0x11, 0x0a, 0x0a, 0x04, 0x04, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x11, 0x11, 0x11, 0x11, 0x15, 0x1b, 0x11, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x11, 0x11, 0x0a, 0x04, 0x0a, 0x11, 0x11, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x11, 0x11, 0x0a, 0x04, 0x04, 0x04, 0x04, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x1f, 0x10, 0x08, 0x04, 0x02, 0x01, 0x1f, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x04, 0x0e, 0x15, 0x04, 0x04, 0x04, 0x04, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x04, 0x04, 0x04, 0x04, 0x15, 0x0e, 0x04, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x04, 0x02, 0x1f, 0x02, 0x04, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x04, 0x08, 0x1f, 0x08, 0x04, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x1f, 0x00, 0x00, 0x00, 0x00,
    0x04, 0x0a, 0x02, 0x07, 0x02, 0x12, 0x0f, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x0e, 0x10, 0x1e, 0x11, 0x1e, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x01, 0x01, 0x0d, 0x13, 0x11, 0x13, 0x0d, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x0e, 0x11, 0x01, 0x11, 0x0e, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x10, 0x10, 0x16, 0x19, 0x11, 0x19, 0x16, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x0e, 0x11, 0x1f, 0x01, 0x0e, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x08, 0x14, 0x04, 0x0e, 0x04, 0x04, 0x04, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x0e, 0x11, 0x11, 0x1e, 0x10, 0x0e, 0x00, 0x00, 0x00, 0x00,
    0x01, 0x01, 0x0d, 0x13, 0x11, 0x11, 0x11, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x04, 0x00, 0x06, 0x04, 0x04, 0x04, 0x0e, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x10, 0x00, 0x18, 0x10, 0x10, 0x10, 0x12, 0x0c, 0x00, 0x00, 0x00, 0x00,
    0x02, 0x02, 0x12, 0x0a, 0x06, 0x0a, 0x12, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x06, 0x04, 0x04, 0x04, 0x04, 0x04, 0x0e, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x0b, 0x15, 0x15, 0x15, 0x15, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x0d, 0x13, 0x11, 0x11, 0x11, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x0e, 0x11, 0x11, 0x11, 0x0e, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x0d, 0x13, 0x13, 0x0d, 0x01, 0x01, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x16, 0x19, 0x19, 0x16, 0x10, 0x10, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x0d, 0x13, 0x01, 0x01, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x1e, 0x01, 0x0e, 0x10, 0x0f, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x04, 0x04, 0x0e, 0x04, 0x04, 0x14, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x11, 0x11, 0x11, 0x19, 0x16, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x11, 0x11, 0x11, 0x0a, 0x04, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x11, 0x11, 0x15, 0x15, 0x0a, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x11, 0x0a, 0x04, 0x0a, 0x11, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x11, 0x11, 0x11, 0x1e, 0x10, 0x0e, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x1f, 0x08, 0x04, 0x02, 0x1f, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x08, 0x04, 0x04, 0x02, 0x04, 0x04, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x04, 0x04, 0x04, 0x00, 0x04, 0x04, 0x04, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x02, 0x04, 0x04, 0x08, 0x04, 0x04, 0x02, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x11, 0x0a, 0x04, 0x1f, 0x04, 0x1f, 0x04, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x15, 0x0a, 0x15, 0x0a, 0x15, 0x0a, 0x15, 0x0a, 0x00, 0x00, 0x00, 0x00,
];
/**
 * Original Model III character set.
 */
const GLYPH_CG4 = [
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x30, 0x48, 0x08, 0x3e, 0x08, 0x48, 0x3e, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x10, 0x10, 0x10, 0x10, 0x10, 0x10, 0x10, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x20, 0x10, 0x3c, 0x42, 0x7e, 0x02, 0x3c, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x24, 0x00, 0x42, 0x42, 0x42, 0x42, 0x3c, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x10, 0x28, 0x10, 0x28, 0x44, 0x7c, 0x44, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x7e, 0x40, 0x40, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x28, 0x00, 0x38, 0x44, 0x44, 0x44, 0x38, 0x00, 0x00, 0x00, 0x00, 0x00,
    0xb8, 0x44, 0x64, 0x54, 0x4c, 0x44, 0x3a, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x08, 0x10, 0x42, 0x42, 0x42, 0x62, 0x5c, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x4c, 0x32, 0x00, 0x34, 0x4c, 0x44, 0x44, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x10, 0x20, 0x40, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x1c, 0x00, 0x1c, 0x20, 0x3c, 0x22, 0x5c, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x7c, 0x5e, 0x22, 0x22, 0x1e, 0x12, 0x22, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x28, 0x00, 0x10, 0x28, 0x44, 0x7c, 0x44, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x4c, 0x32, 0x10, 0x28, 0x44, 0x7c, 0x44, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x4c, 0x32, 0x44, 0x4c, 0x54, 0x64, 0x44, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x28, 0x38, 0x44, 0x44, 0x44, 0x38, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x90, 0x68, 0x64, 0x54, 0x4c, 0x2c, 0x12, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x4c, 0x32, 0x00, 0x3c, 0x42, 0x42, 0x3c, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x3c, 0x44, 0x44, 0x3c, 0x44, 0x44, 0x3e, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x24, 0x00, 0x42, 0x42, 0x42, 0x62, 0x5c, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x4c, 0x32, 0x00, 0x18, 0x24, 0x24, 0x18, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x38, 0x54, 0x50, 0x38, 0x14, 0x54, 0x38, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x14, 0x00, 0x1c, 0x20, 0x3c, 0x22, 0x5c, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x04, 0x08, 0x1c, 0x20, 0x3c, 0x22, 0x5c, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x08, 0x00, 0x1c, 0x20, 0x3c, 0x22, 0x5c, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x3c, 0x02, 0x3e, 0x42, 0x7c, 0x40, 0x3c, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x20, 0x10, 0x7c, 0x04, 0x7c, 0x04, 0x7c, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x10, 0x78, 0x24, 0x64, 0x3c, 0x24, 0x64, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x38, 0x44, 0x04, 0x04, 0x44, 0x38, 0x10, 0x08, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x4c, 0x32, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x10, 0x10, 0x10, 0x10, 0x10, 0x00, 0x10, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x24, 0x24, 0x24, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x24, 0x24, 0x7e, 0x24, 0x7e, 0x24, 0x24, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x10, 0x78, 0x14, 0x38, 0x50, 0x3c, 0x10, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x46, 0x26, 0x10, 0x08, 0x64, 0x62, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x0c, 0x12, 0x12, 0x0c, 0x52, 0x22, 0x5c, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x20, 0x10, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x20, 0x10, 0x08, 0x08, 0x08, 0x10, 0x20, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x04, 0x08, 0x10, 0x10, 0x10, 0x08, 0x04, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x10, 0x54, 0x38, 0x7c, 0x38, 0x54, 0x10, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x10, 0x10, 0x7c, 0x10, 0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x00, 0x00, 0x10, 0x10, 0x08, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x7e, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x10, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x40, 0x20, 0x10, 0x08, 0x04, 0x02, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x3c, 0x42, 0x62, 0x5a, 0x46, 0x42, 0x3c, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x10, 0x18, 0x14, 0x10, 0x10, 0x10, 0x7c, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x3c, 0x42, 0x40, 0x30, 0x0c, 0x02, 0x7e, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x3c, 0x42, 0x40, 0x38, 0x40, 0x42, 0x3c, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x20, 0x30, 0x28, 0x24, 0x7e, 0x20, 0x20, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x7e, 0x02, 0x1e, 0x20, 0x40, 0x22, 0x1c, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x38, 0x04, 0x02, 0x3e, 0x42, 0x42, 0x3c, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x7e, 0x42, 0x20, 0x10, 0x08, 0x08, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x3c, 0x42, 0x42, 0x3c, 0x42, 0x42, 0x3c, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x3c, 0x42, 0x42, 0x7c, 0x40, 0x20, 0x1c, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x10, 0x00, 0x00, 0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x10, 0x00, 0x00, 0x10, 0x10, 0x08, 0x00, 0x00, 0x00, 0x00,
    0x60, 0x30, 0x18, 0x0c, 0x18, 0x30, 0x60, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x7e, 0x00, 0x7e, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x06, 0x0c, 0x18, 0x30, 0x18, 0x0c, 0x06, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x3c, 0x42, 0x40, 0x30, 0x08, 0x00, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x38, 0x44, 0x52, 0x6a, 0x32, 0x04, 0x78, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x18, 0x24, 0x42, 0x7e, 0x42, 0x42, 0x42, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x3e, 0x44, 0x44, 0x3c, 0x44, 0x44, 0x3e, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x38, 0x44, 0x02, 0x02, 0x02, 0x44, 0x38, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x1e, 0x24, 0x44, 0x44, 0x44, 0x24, 0x1e, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x7e, 0x02, 0x02, 0x1e, 0x02, 0x02, 0x7e, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x7e, 0x02, 0x02, 0x1e, 0x02, 0x02, 0x02, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x38, 0x44, 0x02, 0x72, 0x42, 0x44, 0x38, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x42, 0x42, 0x42, 0x7e, 0x42, 0x42, 0x42, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x38, 0x10, 0x10, 0x10, 0x10, 0x10, 0x38, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x70, 0x20, 0x20, 0x20, 0x20, 0x22, 0x1c, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x42, 0x22, 0x12, 0x0e, 0x12, 0x22, 0x42, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x02, 0x02, 0x02, 0x02, 0x02, 0x02, 0x7e, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x42, 0x66, 0x5a, 0x5a, 0x42, 0x42, 0x42, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x42, 0x46, 0x4a, 0x52, 0x62, 0x42, 0x42, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x3c, 0x42, 0x42, 0x42, 0x42, 0x42, 0x3c, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x3e, 0x42, 0x42, 0x3e, 0x02, 0x02, 0x02, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x3c, 0x42, 0x42, 0x42, 0x52, 0x22, 0x5c, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x3e, 0x42, 0x42, 0x3e, 0x12, 0x22, 0x42, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x3c, 0x42, 0x02, 0x3c, 0x40, 0x42, 0x3c, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x7c, 0x10, 0x10, 0x10, 0x10, 0x10, 0x10, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x42, 0x42, 0x42, 0x42, 0x42, 0x42, 0x3c, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x42, 0x42, 0x42, 0x24, 0x24, 0x18, 0x18, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x42, 0x42, 0x42, 0x5a, 0x5a, 0x66, 0x42, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x42, 0x42, 0x24, 0x18, 0x24, 0x42, 0x42, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x44, 0x44, 0x44, 0x38, 0x10, 0x10, 0x10, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x7e, 0x40, 0x20, 0x18, 0x04, 0x02, 0x7e, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x3c, 0x04, 0x04, 0x04, 0x04, 0x04, 0x3c, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x3c, 0x20, 0x20, 0x20, 0x20, 0x20, 0x3c, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x10, 0x28, 0x44, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xff, 0x00, 0x00, 0x00, 0x00,
    0x08, 0x10, 0x20, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x1c, 0x20, 0x3c, 0x22, 0x5c, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x02, 0x02, 0x3a, 0x46, 0x42, 0x46, 0x3a, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x3c, 0x42, 0x02, 0x42, 0x3c, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x40, 0x40, 0x5c, 0x62, 0x42, 0x62, 0x5c, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x3c, 0x42, 0x7e, 0x02, 0x3c, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x30, 0x48, 0x08, 0x3e, 0x08, 0x08, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x5c, 0x62, 0x62, 0x5c, 0x40, 0x3c, 0x00, 0x00, 0x00, 0x00,
    0x02, 0x02, 0x3a, 0x46, 0x42, 0x42, 0x42, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x10, 0x00, 0x18, 0x10, 0x10, 0x10, 0x38, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x20, 0x00, 0x30, 0x20, 0x20, 0x20, 0x22, 0x1c, 0x00, 0x00, 0x00, 0x00,
    0x02, 0x02, 0x22, 0x12, 0x0a, 0x16, 0x22, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x18, 0x10, 0x10, 0x10, 0x10, 0x10, 0x38, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x6e, 0x92, 0x92, 0x92, 0x92, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x3a, 0x46, 0x42, 0x42, 0x42, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x3c, 0x42, 0x42, 0x42, 0x3c, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x3a, 0x46, 0x46, 0x3a, 0x02, 0x02, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x5c, 0x62, 0x62, 0x5c, 0x40, 0x40, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x3a, 0x46, 0x02, 0x02, 0x02, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x7c, 0x02, 0x3c, 0x40, 0x3e, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x08, 0x08, 0x3e, 0x08, 0x08, 0x48, 0x30, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x42, 0x42, 0x42, 0x62, 0x5c, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x42, 0x42, 0x42, 0x24, 0x18, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x82, 0x92, 0x92, 0x92, 0x6c, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x42, 0x24, 0x18, 0x24, 0x42, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x42, 0x42, 0x62, 0x5c, 0x40, 0x3c, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x7e, 0x20, 0x18, 0x04, 0x7e, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x30, 0x08, 0x08, 0x04, 0x08, 0x08, 0x30, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x10, 0x10, 0x10, 0x00, 0x10, 0x10, 0x10, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x0c, 0x10, 0x10, 0x20, 0x10, 0x10, 0x0c, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x0c, 0x92, 0x60, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x10, 0x10, 0x7c, 0x10, 0x10, 0x00, 0x7c, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x10, 0x38, 0x7c, 0xfe, 0xfe, 0x7c, 0x10, 0x10, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x6c, 0xfe, 0xfe, 0x7c, 0x38, 0x10, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x10, 0x38, 0x7c, 0xfe, 0x7c, 0x38, 0x10, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x38, 0x38, 0x10, 0xd6, 0xfe, 0xd6, 0x10, 0x38, 0x00, 0x00, 0x00, 0x00,
    0x3c, 0x42, 0xa5, 0x81, 0xa5, 0x99, 0x42, 0x3c, 0x00, 0x00, 0x00, 0x00,
    0x3c, 0x42, 0xa5, 0x81, 0x99, 0xa5, 0x42, 0x3c, 0x00, 0x00, 0x00, 0x00,
    0x20, 0x10, 0x08, 0x04, 0x08, 0x10, 0x20, 0x3c, 0x00, 0x00, 0x00, 0x00,
    0x04, 0x08, 0x10, 0x20, 0x10, 0x08, 0x04, 0x3c, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x9c, 0x62, 0x62, 0x9c, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x3c, 0x44, 0x3c, 0x44, 0x44, 0x3c, 0x04, 0x02, 0x00, 0x00, 0x00, 0x00,
    0x86, 0x48, 0x28, 0x18, 0x08, 0x0c, 0x0c, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x30, 0x48, 0x08, 0x30, 0x50, 0x48, 0x30, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x60, 0x10, 0x08, 0x7c, 0x08, 0x10, 0x60, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x68, 0x60, 0x10, 0x08, 0x38, 0x40, 0x30, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x34, 0x4a, 0x48, 0x48, 0x40, 0x40, 0x40, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x10, 0x28, 0x44, 0x7c, 0x44, 0x28, 0x10, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x04, 0x04, 0x04, 0x44, 0x44, 0x38, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x02, 0x12, 0x0a, 0x06, 0x0a, 0x52, 0x22, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x04, 0x08, 0x08, 0x08, 0x18, 0x24, 0x42, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x24, 0x24, 0x24, 0x24, 0x5c, 0x04, 0x04, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x4c, 0x48, 0x28, 0x18, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x10, 0x38, 0x04, 0x18, 0x04, 0x38, 0x40, 0x30, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x18, 0x24, 0x42, 0x42, 0x24, 0x18, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x7c, 0x2a, 0x28, 0x28, 0x28, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x18, 0x24, 0x24, 0x1c, 0x04, 0x04, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x7c, 0x12, 0x12, 0x0c, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x7c, 0x12, 0x10, 0x10, 0x10, 0x10, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x40, 0x26, 0x24, 0x24, 0x24, 0x18, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x10, 0x38, 0x54, 0x54, 0x54, 0x38, 0x10, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x46, 0x28, 0x10, 0x28, 0xc4, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x92, 0x54, 0x54, 0x38, 0x10, 0x10, 0x10, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x44, 0x82, 0x92, 0x92, 0x6c, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x38, 0x44, 0x82, 0x82, 0xc6, 0x44, 0xc6, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x78, 0x08, 0x08, 0x08, 0x0a, 0x0c, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x10, 0x00, 0x7c, 0x00, 0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x7e, 0x04, 0x08, 0x30, 0x08, 0x04, 0x7e, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x4c, 0x32, 0x00, 0x4c, 0x32, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x10, 0x28, 0x44, 0xfe, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x20, 0x10, 0x08, 0x08, 0x10, 0x10, 0x08, 0x04, 0x00, 0x00, 0x00, 0x00,
    0x80, 0x40, 0xfe, 0x10, 0xfe, 0x04, 0x02, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x08, 0x10, 0x20, 0x7c, 0x08, 0x10, 0x20, 0x00, 0x00, 0x00, 0x00, 0x00,
    0xfc, 0x4a, 0x24, 0x10, 0x48, 0xa4, 0x42, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x38, 0x44, 0x82, 0x82, 0xfe, 0x44, 0x44, 0xc6, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x6c, 0x92, 0x92, 0x6c, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x40, 0x20, 0x12, 0x0a, 0x06, 0x02, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x78, 0x04, 0x38, 0x44, 0x38, 0x40, 0x3c, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x44, 0xaa, 0x54, 0x28, 0x54, 0xaa, 0x44, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x3c, 0x42, 0xb9, 0x85, 0x85, 0xb9, 0x42, 0x3c, 0x00, 0x00, 0x00, 0x00,
    0x42, 0x24, 0x18, 0x24, 0x18, 0x24, 0x42, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x7c, 0x52, 0x52, 0x5c, 0x50, 0x50, 0x50, 0x50, 0x00, 0x00, 0x00, 0x00,
    0x10, 0x38, 0x54, 0x14, 0x54, 0x38, 0x10, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x3c, 0x5e, 0xa5, 0xa5, 0x9d, 0x95, 0x66, 0x3c, 0x00, 0x00, 0x00, 0x00,
    0xfa, 0x06, 0xc6, 0x46, 0x26, 0xde, 0x06, 0xfa, 0x00, 0x00, 0x00, 0x00,
    0xff, 0x20, 0xc0, 0x3f, 0x40, 0x3f, 0x20, 0x1f, 0x00, 0x00, 0x00, 0x00,
    0x3f, 0x40, 0x3f, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x1e, 0x22, 0x22, 0x1e, 0x52, 0x22, 0xd2, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x86, 0x41, 0x21, 0x16, 0x68, 0x94, 0x92, 0x61, 0x00, 0x00, 0x00, 0x00,
    0x70, 0x60, 0x50, 0x0e, 0x09, 0x09, 0x06, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x38, 0x44, 0x44, 0x44, 0x38, 0x10, 0x38, 0x10, 0x00, 0x00, 0x00, 0x00,
    0x70, 0x10, 0x10, 0x70, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0xff, 0xc7, 0xbb, 0xcf, 0xef, 0xff, 0xef, 0xff, 0x00, 0x00, 0x00, 0x00,
    0x10, 0x28, 0x10, 0x38, 0x54, 0x10, 0x28, 0x44, 0x00, 0x00, 0x00, 0x00,
    0x10, 0x28, 0x10, 0x38, 0x54, 0x28, 0x7c, 0x28, 0x00, 0x00, 0x00, 0x00,
    0x10, 0x28, 0x44, 0x44, 0x44, 0x54, 0x6c, 0x44, 0x00, 0x00, 0x00, 0x00,
    0x44, 0x28, 0x10, 0x7c, 0x10, 0x7c, 0x10, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x00, 0x04, 0x0a, 0x04, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x7c, 0x04, 0x04, 0x04, 0x04, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x20, 0x20, 0x20, 0x20, 0x3e, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x02, 0x04, 0x08, 0x10, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x04, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x3c, 0x20, 0x3c, 0x10, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x7c, 0x40, 0x30, 0x10, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x20, 0x10, 0x18, 0x14, 0x10, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x10, 0x7c, 0x44, 0x40, 0x20, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x38, 0x10, 0x10, 0x7c, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x10, 0x3c, 0x18, 0x14, 0x10, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x08, 0x7c, 0x48, 0x08, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x38, 0x20, 0x20, 0x7c, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x7c, 0x40, 0x78, 0x40, 0x7c, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x54, 0x54, 0x44, 0x20, 0x10, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x7e, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x7e, 0x40, 0x28, 0x18, 0x08, 0x08, 0x04, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x40, 0x20, 0x10, 0x18, 0x14, 0x10, 0x10, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x10, 0x7c, 0x44, 0x44, 0x20, 0x10, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x7c, 0x10, 0x10, 0x10, 0x10, 0x10, 0x7c, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x10, 0x7e, 0x10, 0x18, 0x14, 0x12, 0x10, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x08, 0x7e, 0x48, 0x48, 0x48, 0x44, 0x72, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x10, 0x38, 0x10, 0x7c, 0x10, 0x10, 0x10, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x7c, 0x44, 0x44, 0x42, 0x20, 0x10, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x04, 0x04, 0x7c, 0x14, 0x12, 0x10, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x7e, 0x40, 0x40, 0x40, 0x40, 0x40, 0x7e, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x24, 0x7e, 0x24, 0x24, 0x20, 0x10, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x1c, 0x40, 0x4e, 0x40, 0x40, 0x24, 0x18, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x7e, 0x40, 0x20, 0x10, 0x18, 0x24, 0x42, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x08, 0x7e, 0x48, 0x28, 0x08, 0x48, 0x38, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x42, 0x44, 0x48, 0x20, 0x10, 0x08, 0x04, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x7e, 0x42, 0x42, 0x50, 0x20, 0x10, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x50, 0x3e, 0x10, 0x7c, 0x10, 0x10, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x7e, 0x00, 0x7e, 0x40, 0x20, 0x10, 0x0c, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x38, 0x00, 0x7c, 0x10, 0x10, 0x08, 0x04, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x04, 0x04, 0x1c, 0x24, 0x44, 0x04, 0x04, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x10, 0x7c, 0x10, 0x10, 0x10, 0x08, 0x04, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x38, 0x00, 0x00, 0x00, 0x00, 0x00, 0x7c, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x7e, 0x40, 0x40, 0x28, 0x10, 0x28, 0x44, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x10, 0x7e, 0x40, 0x20, 0x30, 0x58, 0x14, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x60, 0x40, 0x20, 0x10, 0x08, 0x04, 0x02, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x10, 0x20, 0x50, 0x50, 0x50, 0x48, 0x44, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x02, 0x02, 0x7e, 0x02, 0x02, 0x42, 0x3c, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x7e, 0x40, 0x40, 0x20, 0x10, 0x08, 0x04, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x08, 0x14, 0x22, 0x40, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x10, 0x7c, 0x10, 0x54, 0x54, 0x54, 0x10, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x7e, 0x40, 0x40, 0x28, 0x10, 0x20, 0x40, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x02, 0x3c, 0x42, 0x3c, 0x42, 0x3c, 0x40, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x20, 0x10, 0x08, 0x04, 0x12, 0x22, 0x5e, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x40, 0x44, 0x28, 0x10, 0x28, 0x04, 0x02, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x7e, 0x08, 0x3c, 0x08, 0x08, 0x48, 0x30, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x08, 0x7e, 0x48, 0x28, 0x08, 0x08, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x3c, 0x20, 0x20, 0x20, 0x10, 0x08, 0x7e, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x7e, 0x40, 0x40, 0x7c, 0x40, 0x40, 0x7e, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x54, 0x54, 0x44, 0x40, 0x20, 0x10, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x42, 0x42, 0x42, 0x42, 0x22, 0x10, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x0a, 0x0a, 0x0a, 0x4a, 0x4a, 0x2a, 0x1a, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x04, 0x04, 0x04, 0x44, 0x44, 0x24, 0x1c, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x7e, 0x42, 0x42, 0x42, 0x42, 0x42, 0x7e, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x7e, 0x42, 0x42, 0x40, 0x20, 0x10, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x4e, 0x40, 0x40, 0x40, 0x20, 0x12, 0x0e, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x08, 0x12, 0x24, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x04, 0x0a, 0x04, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
];
/**
 * Class representing a font and able to generate its glyphs.
 */
class Font {
    constructor(bits, width, height, banks) {
        this.bits = bits;
        this.width = width;
        this.height = height;
        this.banks = banks;
    }
    /**
     * Make a bitmap for the specified character (0-255). "on" pixels are the
     * specified color, "off" pixels are fully transparent.
     */
    makeImage(char, expanded, options) {
        const canvas = document.createElement("canvas");
        let expandedMultiplier = expanded ? 2 : 1;
        canvas.width = this.width * expandedMultiplier;
        canvas.height = this.height * 2;
        const ctx = canvas.getContext("2d");
        if (ctx === null) {
            throw new Error("2d context not supported");
        }
        const imageData = ctx.createImageData(canvas.width, canvas.height);
        // Light pixel at (x,y) in imageData if bit "bit" of "byte" is on.
        const lightPixel = (x, y, byte, bit) => {
            const pixel = (byte & (1 << bit)) !== 0;
            if (pixel) {
                const pixelOffset = (y * canvas.width + x) * 4;
                const alpha = options.scanLines ? (y % 2 == 0 ? 0xFF : 0xAA) : 0xFF;
                imageData.data[pixelOffset + 0] = options.color[0];
                imageData.data[pixelOffset + 1] = options.color[1];
                imageData.data[pixelOffset + 2] = options.color[2];
                imageData.data[pixelOffset + 3] = alpha;
            }
        };
        const bankOffset = this.banks[Math.floor(char / 64)];
        if (bankOffset === -1) {
            // Graphical character.
            const byte = char % 64;
            for (let y = 0; y < canvas.height; y++) {
                const py = Math.floor(y / (canvas.height / 3));
                for (let x = 0; x < canvas.width; x++) {
                    const px = Math.floor(x / (canvas.width / 2));
                    const bit = py * 2 + px;
                    lightPixel(x, y, byte, bit);
                }
            }
        }
        else {
            // Bitmap character.
            const charOffset = bankOffset + char % 64;
            const byteOffset = charOffset * 12;
            for (let y = 0; y < canvas.height; y++) {
                const byte = this.bits[byteOffset + Math.floor(y / 2)];
                for (let x = 0; x < canvas.width; x++) {
                    lightPixel(x, y, byte, Math.floor(x / expandedMultiplier));
                }
            }
        }
        ctx.putImageData(imageData, 0, 0);
        return canvas;
    }
}
// Original Model I.
const MODEL1A_FONT = new Font(GLYPH_CG1, 6, 12, [0, 64, -1, -1]);
// Model I with lower case mod.
const MODEL1B_FONT = new Font(GLYPH_CG2, 6, 12, [0, 64, -1, -1]);
// Original Model III, with special symbols.
const MODEL3_FONT = new Font(GLYPH_CG4, 8, 12, [0, 64, -1, 128]);
// Original Model III, with Katakana.
const MODEL3_ALT_FONT = new Font(GLYPH_CG4, 8, 12, [0, 64, -1, 192]);

// CONCATENATED MODULE: ./node_modules/trs80-emulator/dist/module/CanvasScreen.js




const gCssPrefix = CSS_PREFIX + "-canvas-screen";
const gBlackBackgroundClass = gCssPrefix + "-black-background";
const AUTHENTIC_BACKGROUND = "#334843";
const BLACK_BACKGROUND = "#000000";
const BASE_CSS = `

.${gCssPrefix} {
    display: inline-block;
    padding: 10px;
    background-color: ${AUTHENTIC_BACKGROUND};
    border-radius: 8px;
    transition: background-color .5s ease-in-out;
}

.${gCssPrefix}.${gBlackBackgroundClass} {
    background-color: ${BLACK_BACKGROUND};
}

`;
/**
 * Make a global stylesheet for all TRS-80 emulators on this page. Idempotent.
 */
function configureStylesheet() {
    const styleId = gCssPrefix;
    if (document.getElementById(styleId) !== null) {
        // Already created.
        return;
    }
    const node = document.createElement("style");
    node.id = styleId;
    node.innerHTML = BASE_CSS;
    document.head.appendChild(node);
}
// Run it on the next event cycle.
const UPDATE_THUMBNAIL_TIMEOUT_MS = 0;
const WHITE_PHOSPHOR = [230, 231, 252];
const AMBER_PHOSPHOR = [247, 190, 64];
const GREEN_PHOSPHOR = [122, 244, 96];
// Gets an RGB array (0-255) for a phosphor.
function phosphorToRgb(phosphor) {
    switch (phosphor) {
        case Phosphor.WHITE:
        default:
            return WHITE_PHOSPHOR;
        case Phosphor.GREEN:
            return GREEN_PHOSPHOR;
        case Phosphor.AMBER:
            return AMBER_PHOSPHOR;
    }
}
/**
 * TRS-80 screen based on an HTML canvas element.
 */
class CanvasScreen_CanvasScreen extends Trs80Screen_Trs80Screen {
    constructor(parentNode, isThumbnail) {
        super();
        this.memory = new Uint8Array(SCREEN_END - SCREEN_BEGIN);
        this.glyphs = [];
        this.config = Config.makeDefault();
        this.glyphWidth = 0;
        Utils_clearElement(parentNode);
        // Make our own sub-node that we have control over.
        this.node = document.createElement("div");
        this.node.classList.add(gCssPrefix);
        parentNode.appendChild(this.node);
        this.canvas = document.createElement("canvas");
        this.canvas.width = 64 * 8;
        this.canvas.height = 16 * 24;
        this.canvas.style.display = "block";
        this.context = this.canvas.getContext("2d");
        if (!isThumbnail) {
            this.node.appendChild(this.canvas);
        }
        if (isThumbnail) {
            this.thumbnailImage = document.createElement("img");
            this.thumbnailImage.width = 64 * 8 / 3;
            this.thumbnailImage.height = 16 * 24 / 3;
            this.node.appendChild(this.thumbnailImage);
        }
        this.updateFromConfig();
        // Make global CSS if necessary.
        configureStylesheet();
    }
    setConfig(config) {
        this.config = config;
        this.updateFromConfig();
    }
    /**
     * Update the font and screen from the config and other state.
     */
    updateFromConfig() {
        let font;
        switch (this.config.cgChip) {
            case CGChip.ORIGINAL:
                font = MODEL1A_FONT;
                break;
            case CGChip.LOWER_CASE:
            default:
                switch (this.config.modelType) {
                    case ModelType.MODEL1:
                        font = MODEL1B_FONT;
                        break;
                    case ModelType.MODEL3:
                    default:
                        font = this.isAlternateCharacters() ? MODEL3_ALT_FONT : MODEL3_FONT;
                        break;
                }
                break;
        }
        switch (this.config.background) {
            case Background.BLACK:
                this.node.classList.add(gBlackBackgroundClass);
                break;
            case Background.AUTHENTIC:
            default:
                this.node.classList.remove(gBlackBackgroundClass);
                break;
        }
        const glyphOptions = {
            color: phosphorToRgb(this.config.phosphor),
            scanLines: this.config.scanLines === ScanLines.ON,
        };
        for (let i = 0; i < 256; i++) {
            this.glyphs[i] = font.makeImage(i, this.isExpandedCharacters(), glyphOptions);
        }
        this.glyphWidth = font.width;
        this.refresh();
    }
    writeChar(address, value) {
        const offset = address - SCREEN_BEGIN;
        this.memory[offset] = value;
        this.drawChar(offset, value);
        this.scheduleUpdateThumbnail();
    }
    /**
     * Draw a single character to the canvas.
     */
    drawChar(offset, value) {
        const screenX = (offset % 64) * 8;
        const screenY = Math.floor(offset / 64) * 24;
        if (this.isExpandedCharacters()) {
            if (offset % 2 === 0) {
                this.context.clearRect(screenX, screenY, 16, 24);
                this.context.drawImage(this.glyphs[value], 0, 0, this.glyphWidth * 2, 24, screenX, screenY, 16, 24);
            }
        }
        else {
            this.context.clearRect(screenX, screenY, 8, 24);
            this.context.drawImage(this.glyphs[value], 0, 0, this.glyphWidth, 24, screenX, screenY, 8, 24);
        }
    }
    getNode() {
        return this.node;
    }
    setExpandedCharacters(expanded) {
        if (expanded !== this.isExpandedCharacters()) {
            super.setExpandedCharacters(expanded);
            this.updateFromConfig();
        }
    }
    setAlternateCharacters(alternate) {
        if (alternate !== this.isAlternateCharacters()) {
            super.setAlternateCharacters(alternate);
            this.updateFromConfig();
        }
    }
    /**
     * Refresh the display based on what we've kept track of.
     */
    refresh() {
        for (let offset = 0; offset < this.memory.length; offset++) {
            this.drawChar(offset, this.memory[offset]);
        }
        this.scheduleUpdateThumbnail();
    }
    /**
     * Schedule a future update of our thumbnail.
     */
    scheduleUpdateThumbnail() {
        this.cancelUpdateThumbnail();
        this.updateThumbnailTimeout = window.setTimeout(() => {
            this.updateThumbnailTimeout = undefined;
            this.updateThumbnail();
        }, UPDATE_THUMBNAIL_TIMEOUT_MS);
    }
    /**
     * Cancel any previously-cancelled scheduled thumbnail update.
     */
    cancelUpdateThumbnail() {
        if (this.updateThumbnailTimeout !== undefined) {
            window.clearTimeout(this.updateThumbnailTimeout);
            this.updateThumbnailTimeout = undefined;
        }
    }
    /**
     * Synchronously update the thumbnail.
     */
    updateThumbnail() {
        if (this.thumbnailImage !== undefined) {
            this.thumbnailImage.src = this.canvas.toDataURL();
        }
    }
}

// CONCATENATED MODULE: ./node_modules/trs80-emulator/dist/module/SettingsPanel.js



const SettingsPanel_gCssPrefix = CSS_PREFIX + "-settings-panel";
const gScreenNodeCssClass = SettingsPanel_gCssPrefix + "-screen-node";
const gPanelCssClass = SettingsPanel_gCssPrefix + "-panel";
const gShownCssClass = SettingsPanel_gCssPrefix + "-shown";
const gAcceptButtonCssClass = SettingsPanel_gCssPrefix + "-accept";
const gRebootButtonCssClass = SettingsPanel_gCssPrefix + "-reboot";
const gOptionsClass = SettingsPanel_gCssPrefix + "-options";
const gButtonsClass = SettingsPanel_gCssPrefix + "-buttons";
const gColorButtonClass = SettingsPanel_gCssPrefix + "-color-button";
const gDarkColorButtonClass = SettingsPanel_gCssPrefix + "-dark-color-button";
const gAcceptButtonColor = "#449944";
const GLOBAL_CSS = `
.${gPanelCssClass} {
    display: flex;
    align-items: stretch;
    justify-content: center;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    opacity: 0;
    visibility: hidden;
    transition: opacity .20s ease-in-out;
}

.${gPanelCssClass}.${gShownCssClass} {
    opacity: 1;
    visibility: visible;
}

.${gPanelCssClass} > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    background-color: rgba(40, 40, 40, 0.8);
    border-radius: 15px;
    color: #ccc;
    font-family: sans-serif;
    font-size: 10pt;
    line-height: normal;
    margin: 20px 0;
    padding: 10px 30px;
    min-width: 200px;
}

.${gPanelCssClass} h1 {
    text-transform: uppercase;
    text-align: center;
    letter-spacing: .5px;
    font-size: 10pt;
    margin: 0 0 10px 0;
}

.${gPanelCssClass} .${gOptionsClass} {
    display: flex;
    justify-content: center;
}

.${gPanelCssClass} input[type=radio] {
    display: none;
}

.${gPanelCssClass} input[type=radio] + label {
    display: block;
    flex-grow: 1;
    flex-basis: 0;
    text-align: center;
    padding: 4px 16px;
    margin-left: 10px;
    border-radius: 3px;
    background-color: #44443A;
    white-space: nowrap;
}

.${gPanelCssClass} input[type=radio] + label.${gColorButtonClass} {
    flex-grow: 0;
    flex-basis: auto;
    width: 24px;
    height: 24px;
    padding: 0;
    border-radius: 999px;
    border: 2px solid transparent;
    color: transparent;
    transition: color .20s ease-in-out;
}

.${gPanelCssClass} input[type=radio] + label.${gColorButtonClass}.${gDarkColorButtonClass} {
    border: solid 2px #ccc;
}

.${gPanelCssClass} input[type=radio]:checked + label.${gColorButtonClass}::after {
    content: "✓";
    font-size: 20px;
}

.${gPanelCssClass} input[type=radio]:checked + label.${gColorButtonClass} {
    color: black;
}

.${gPanelCssClass} input[type=radio]:checked + label.${gColorButtonClass}.${gDarkColorButtonClass} {
    color: #ccc;
}

.${gPanelCssClass} input[type=radio] + label:first-of-type {
    margin-left: 0;
}

.${gPanelCssClass} input[type=radio]:enabled + label:hover {
    background-color: #66665A;
}

.${gPanelCssClass} input[type=radio]:disabled + label {
    color: #666;
}

.${gPanelCssClass} input[type=radio]:enabled:checked + label {
    color: #444;
    background-color: #ccc;
}

.${gPanelCssClass} .${gButtonsClass} {
    display: flex;
}

.${gPanelCssClass} a {
    display: block;
    flex-grow: 1;
    flex-basis: 0;
    text-align: center;
    padding: 4px 16px;
    border-radius: 3px;
    margin-left: 10px;
    color: #ccc;
    background-color: #44443A;
    cursor: default;
}

.${gPanelCssClass} a:first-of-type {
    margin-left: 0;
}

.${gPanelCssClass} a.${gAcceptButtonCssClass} {
    font-weight: bold;
    color: #eee;
    background-color: ${gAcceptButtonColor};
}

.${gPanelCssClass} a.${gAcceptButtonCssClass}:hover {
    background-color: #338833;
}

.${gPanelCssClass} a.${gRebootButtonCssClass} {
    background-color: #D25F43;
}

.${gPanelCssClass} a:hover {
    background-color: #66665A;
}

.${gPanelCssClass} a.${gRebootButtonCssClass}:hover {
    background-color: #BD563C;
}

.${gScreenNodeCssClass} {
    /* Force the screen node to relative positioning. Hope that doesn't screw anything up. */
    position: relative;
}
`;
/**
 * An option that's currently displayed to the user.
 */
class DisplayedOption {
    constructor(input, block, option) {
        this.input = input;
        this.block = block;
        this.option = option;
    }
}
// Convert RGB array (0-255) to a CSS string.
function rgbToCss(color) {
    return "#" + color.map(c => c.toString(16).padStart(2, "0").toUpperCase()).join("");
}
// Multiplies an RGB (0-255) color by a factor.
function adjustColor(color, factor) {
    return color.map(c => Math.max(0, Math.min(255, Math.round(c * factor))));
}
/**
 * Our full configuration options.
 */
const HARDWARE_OPTION_BLOCKS = [
    {
        title: "Model",
        isChecked: (modelType, config) => modelType === config.modelType,
        updateConfig: (modelType, config) => config.withModelType(modelType),
        options: [
            {
                label: "Model I",
                value: ModelType.MODEL1,
            },
            {
                label: "Model III",
                value: ModelType.MODEL3,
            },
        ]
    },
    {
        title: "Basic",
        isChecked: (basicLevel, config) => basicLevel === config.basicLevel,
        updateConfig: (basicLevel, config) => config.withBasicLevel(basicLevel),
        options: [
            {
                label: "Level 1",
                value: BasicLevel.LEVEL1,
            },
            {
                label: "Level 2",
                value: BasicLevel.LEVEL2,
            },
        ]
    },
    {
        title: "Characters",
        isChecked: (cgChip, config) => cgChip === config.cgChip,
        updateConfig: (cgChip, config) => config.withCGChip(cgChip),
        options: [
            {
                label: "Original",
                value: CGChip.ORIGINAL,
            },
            {
                label: "Lower case",
                value: CGChip.LOWER_CASE,
            },
        ]
    },
    {
        title: "RAM",
        isChecked: (ramSize, config) => ramSize === config.ramSize,
        updateConfig: (ramSize, config) => config.withRamSize(ramSize),
        options: [
            {
                label: "4 kB",
                value: RamSize.RAM_4_KB,
            },
            {
                label: "16 kB",
                value: RamSize.RAM_16_KB,
            },
            {
                label: "32 kB",
                value: RamSize.RAM_32_KB,
            },
            {
                label: "48 kB",
                value: RamSize.RAM_48_KB,
            },
        ]
    },
];
const VIEW_OPTION_BLOCKS = [
    {
        title: "Phosphor",
        isChecked: (phosphor, config) => phosphor === config.phosphor,
        updateConfig: (phosphor, config) => config.withPhosphor(phosphor),
        options: [
            {
                label: rgbToCss(adjustColor(phosphorToRgb(Phosphor.WHITE), 0.8)),
                value: Phosphor.WHITE,
            },
            {
                // Cheat and use the green from the OK button so that the two greens don't clash.
                label: gAcceptButtonColor,
                value: Phosphor.GREEN,
            },
            {
                label: rgbToCss(adjustColor(phosphorToRgb(Phosphor.AMBER), 0.8)),
                value: Phosphor.AMBER,
            },
        ]
    },
    {
        title: "Background",
        isChecked: (background, config) => background === config.background,
        updateConfig: (background, config) => config.withBackground(background),
        options: [
            {
                label: BLACK_BACKGROUND,
                value: Background.BLACK,
            },
            {
                label: AUTHENTIC_BACKGROUND,
                value: Background.AUTHENTIC,
            },
        ]
    },
    {
        title: "Scan Lines",
        isChecked: (scanLines, config) => scanLines === config.scanLines,
        updateConfig: (scanLines, config) => config.withScanLines(scanLines),
        options: [
            {
                label: "Off",
                value: ScanLines.OFF,
            },
            {
                label: "On",
                value: ScanLines.ON,
            },
        ]
    },
];
// Type of panel to show.
var PanelType;
(function (PanelType) {
    // Model, RAM, etc.
    PanelType[PanelType["HARDWARE"] = 0] = "HARDWARE";
    // Phosphor color, background, etc.
    PanelType[PanelType["VIEW"] = 1] = "VIEW";
})(PanelType || (PanelType = {}));
// Get the right options blocks for the panel type.
function optionBlocksForPanelType(panelType) {
    switch (panelType) {
        case PanelType.HARDWARE:
        default:
            return HARDWARE_OPTION_BLOCKS;
        case PanelType.VIEW:
            return VIEW_OPTION_BLOCKS;
    }
}
/**
 * Whether the given CSS color is dark.
 *
 * @param color an CSS color in the form "#rrggbb".
 */
function isDarkColor(color) {
    if (!color.startsWith("#") || color.length !== 7) {
        throw new Error("isDarkColor: not a color (" + color + ")");
    }
    const red = parseInt(color.substr(1, 2), 16);
    const grn = parseInt(color.substr(3, 2), 16);
    const blu = parseInt(color.substr(5, 2), 16);
    const gray = red * 0.3 + grn * 0.6 + blu * 0.1;
    return gray < 110;
}
let gRadioButtonCounter = 1;
/**
 * A full-screen control panel for configuring the emulator.
 */
class SettingsPanel {
    constructor(screenNode, trs80, panelType) {
        this.displayedOptions = [];
        this.panelType = panelType;
        this.trs80 = trs80;
        // Make global CSS if necessary.
        SettingsPanel.configureStyle();
        screenNode.classList.add(gScreenNodeCssClass);
        this.panelNode = document.createElement("div");
        this.panelNode.classList.add(gPanelCssClass);
        screenNode.appendChild(this.panelNode);
        const div = document.createElement("div");
        this.panelNode.appendChild(div);
        for (const block of optionBlocksForPanelType(panelType)) {
            const name = SettingsPanel_gCssPrefix + "-" + gRadioButtonCounter++;
            const blockDiv = document.createElement("div");
            div.appendChild(blockDiv);
            const h1 = document.createElement("h1");
            h1.innerText = block.title;
            blockDiv.appendChild(h1);
            const optionsDiv = document.createElement("div");
            optionsDiv.classList.add(gOptionsClass);
            blockDiv.appendChild(optionsDiv);
            for (const option of block.options) {
                const id = SettingsPanel_gCssPrefix + "-" + gRadioButtonCounter++;
                const input = document.createElement("input");
                input.id = id;
                input.type = "radio";
                input.name = name;
                input.addEventListener("change", () => this.updateEnabledOptions());
                optionsDiv.appendChild(input);
                const label = document.createElement("label");
                label.htmlFor = id;
                if (option.label.startsWith("#")) {
                    // It's a color, show a swatch.
                    label.classList.add(gColorButtonClass);
                    label.style.backgroundColor = option.label;
                    if (isDarkColor(option.label)) {
                        label.classList.add(gDarkColorButtonClass);
                    }
                }
                else {
                    label.innerText = option.label;
                }
                optionsDiv.appendChild(label);
                this.displayedOptions.push(new DisplayedOption(input, block, option));
            }
        }
        const buttonsDiv = document.createElement("div");
        buttonsDiv.classList.add(gButtonsClass);
        div.appendChild(buttonsDiv);
        this.acceptButton = document.createElement("a");
        this.acceptButton.classList.add(gAcceptButtonCssClass);
        this.acceptButton.addEventListener("click", (event) => {
            event.preventDefault();
            this.accept();
        });
        buttonsDiv.appendChild(this.acceptButton);
        this.configureAcceptButton(this.trs80.getConfig());
        const cancelButton = document.createElement("a");
        cancelButton.innerText = "Cancel";
        cancelButton.addEventListener("click", (event) => {
            event.preventDefault();
            this.close();
        });
        buttonsDiv.appendChild(cancelButton);
    }
    /**
     * Open the settings panel.
     */
    open() {
        if (this.onOpen !== undefined) {
            this.onOpen();
        }
        // Configure options.
        for (const displayedOption of this.displayedOptions) {
            displayedOption.input.checked = displayedOption.block.isChecked(displayedOption.option.value, this.trs80.getConfig());
        }
        this.updateEnabledOptions();
        this.panelNode.classList.add(gShownCssClass);
    }
    /**
     * Accept the changes, configure the machine, and close the dialog box.
     */
    accept() {
        this.trs80.setConfig(this.getConfig());
        this.close();
    }
    /**
     * Close the settings panel.
     */
    close() {
        this.panelNode.classList.remove(gShownCssClass);
        if (this.onClose !== undefined) {
            this.onClose();
        }
    }
    /**
     * Update which options are enabled based on the current selection.
     */
    updateEnabledOptions() {
        const config = this.getConfig();
        for (const displayedOption of this.displayedOptions) {
            const enabled = displayedOption.block.updateConfig(displayedOption.option.value, config).isValid();
            displayedOption.input.disabled = !enabled;
        }
        this.configureAcceptButton(config);
    }
    /**
     * Set the accept button to be OK or Reboot.
     */
    configureAcceptButton(config) {
        if (config.needsReboot(this.trs80.getConfig())) {
            this.acceptButton.classList.add(gRebootButtonCssClass);
            this.acceptButton.innerText = "Reboot";
        }
        else {
            this.acceptButton.classList.remove(gRebootButtonCssClass);
            this.acceptButton.innerText = "OK";
        }
    }
    /**
     * Make a new config from the user's currently selected options.
     */
    getConfig() {
        let config = this.trs80.getConfig();
        for (const displayedOption of this.displayedOptions) {
            if (displayedOption.input.checked) {
                config = displayedOption.block.updateConfig(displayedOption.option.value, config);
            }
        }
        return config;
    }
    /**
     * Make a global stylesheet for all TRS-80 emulators on this page.
     */
    static configureStyle() {
        const styleId = SettingsPanel_gCssPrefix;
        if (document.getElementById(styleId) !== null) {
            // Already created.
            return;
        }
        const node = document.createElement("style");
        node.id = styleId;
        node.innerHTML = GLOBAL_CSS;
        document.head.appendChild(node);
    }
}

// CONCATENATED MODULE: ./node_modules/trs80-emulator/dist/module/ControlPanel.js


const ControlPanel_gCssPrefix = CSS_PREFIX + "-control-panel";
const ControlPanel_gScreenNodeCssClass = ControlPanel_gCssPrefix + "-screen-node";
const ControlPanel_gPanelCssClass = ControlPanel_gCssPrefix + "-panel";
const gButtonCssClass = ControlPanel_gCssPrefix + "-button";
const gShowingOtherPanelCssClass = ControlPanel_gCssPrefix + "-showing-other-panel";
// https://thenounproject.com/search/?q=reset&i=3012384
const RESET_ICON = `
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" width="30" height="30" viewBox="0 0 100 100" xml:space="preserve">
    <switch>
        <g fill="white">
            <path d="M5273.1,2400.1v-2c0-2.8-5-4-9.7-4s-9.7,1.3-9.7,4v2c0,1.8,0.7,3.6,2,4.9l5,4.9c0.3,0.3,0.4,0.6,0.4,1v6.4     c0,0.4,0.2,0.7,0.6,0.8l2.9,0.9c0.5,0.1,1-0.2,1-0.8v-7.2c0-0.4,0.2-0.7,0.4-1l5.1-5C5272.4,2403.7,5273.1,2401.9,5273.1,2400.1z      M5263.4,2400c-4.8,0-7.4-1.3-7.5-1.8v0c0.1-0.5,2.7-1.8,7.5-1.8c4.8,0,7.3,1.3,7.5,1.8C5270.7,2398.7,5268.2,2400,5263.4,2400z"/>
            <path d="M5268.4,2410.3c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1h4.3c0.6,0,1-0.4,1-1c0-0.6-0.4-1-1-1H5268.4z"/>
            <path d="M5272.7,2413.7h-4.3c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1h4.3c0.6,0,1-0.4,1-1C5273.7,2414.1,5273.3,2413.7,5272.7,2413.7z"/>
            <path d="M5272.7,2417h-4.3c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1h4.3c0.6,0,1-0.4,1-1C5273.7,2417.5,5273.3,2417,5272.7,2417z"/>
            <path d="M84.3,18C67.1,0.8,39.5,0.4,21.8,16.5l-4.1-4.1c-1.6-1.6-4-2.2-6.2-1.6c-2.2,0.7-3.9,2.5-4.3,4.7L2.6,36.9    c-0.4,2.1,0.2,4.2,1.7,5.7c1.5,1.5,3.6,2.1,5.7,1.7l21.4-4.5c1.2-0.3,2.3-0.9,3.1-1.7c0.7-0.7,1.3-1.6,1.6-2.6    c0.6-2.2,0-4.6-1.6-6.2l-3.9-3.9C43.5,14,63.1,14.5,75.4,26.8c12.8,12.8,12.8,33.6,0,46.4C62.6,86,41.8,86,29,73.2    c-4.1-4.1-7-9.2-8.5-14.8c-0.9-3.3-4.3-5.3-7.6-4.4c-3.3,0.9-5.3,4.3-4.4,7.6c2,7.7,6.1,14.8,11.8,20.4    c17.7,17.7,46.4,17.7,64.1,0C101.9,64.4,101.9,35.6,84.3,18z"/>
        </g>
    </switch>
</svg>
`;
// https://thenounproject.com/search/?q=camera&i=1841396
const CAMERA_ICON = `
<svg xmlns="http://www.w3.org/2000/svg"  version="1.1" x="0px" y="0px" width="30" height="30" viewBox="0 0 100 100" xml:space="preserve">
    <g fill="white">
        <circle cx="50" cy="55.4" r="13.8"/>
        <path d="M80.6,25.4H67.1l-1.8-7.2c-0.5-2.1-2.5-3.6-4.7-3.6H39.3c-2.2,0-4.1,1.5-4.7,3.6l-1.8,7.2H19.4C11.5,25.4,5,31.9,5,39.8V71   c0,7.9,6.5,14.4,14.4,14.4h61.2C88.5,85.4,95,78.9,95,71V39.8C95,31.9,88.5,25.4,80.6,25.4z M50,76.4c-11.6,0-21-9.4-21-21   s9.4-21,21-21s21,9.4,21,21S61.6,76.4,50,76.4z M81.4,40.3c-2,0-3.6-1.6-3.6-3.6c0-2,1.6-3.6,3.6-3.6s3.6,1.6,3.6,3.6   C85,38.7,83.4,40.3,81.4,40.3z"/>
    </g>
</svg>
`;
// https://thenounproject.com/search/?q=previous%20track&i=658409
const PREVIOUS_TRACK_ICON = `
<svg xmlns="http://www.w3.org/2000/svg"  width="30" height="30" viewBox="-1 -2 16 21" version="1.1" x="0px" y="0px">
    <g fill="white" fill-rule="evenodd">
        <g transform="translate(-320.000000, -618.000000)">
            <path d="M330,628.032958 L330,634.00004 C330,634.545291 330.45191,635 331.009369,635 L332.990631,635 C333.556647,635 334,634.552303 334,634.00004 L334,618.99996 C334,618.454709 333.54809,618 332.990631,618 L331.009369,618 C330.443353,618 330,618.447697 330,618.99996 L330,624.967057 C329.894605,624.850473 329.775773,624.739153 329.643504,624.634441 L322.356496,618.865559 C321.054403,617.834736 320,618.3432 320,620.000122 L320,632.999878 C320,634.663957 321.055039,635.164761 322.356496,634.134441 L329.643504,628.365559 C329.775779,628.260841 329.894611,628.149527 330,628.032958 Z" transform="translate(327.000000, 626.500000) scale(-1, 1) translate(-327.000000, -626.500000) "/>
        </g>
    </g>
</svg>
`;
// https://thenounproject.com/search/?q=settings&i=3593545
const HARDWARE_SETTINGS_ICON = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="7 7 121 121" version="1.1" x="0px" y="0px" width="30" height="30">
    <g fill="white" transform="translate(0,-161.53332)">
        <path d="m 61.57997,173.33818 c -1.653804,0 -3.159177,0.77847 -4.132553,1.85984 -0.973402,1.08136 -1.513575,2.40442 -1.771491,3.76721 a 2.1609049,2.1609049 0 0 0 0,0.002 l -1.654678,8.74831 c -2.047981,0.67947 -4.038494,1.50768 -5.964476,2.48047 l -7.367508,-5.02347 c -1.145302,-0.78076 -2.462953,-1.33572 -3.916045,-1.41232 -1.4546,-0.0764 -3.068029,0.44118 -4.235926,1.60921 l -8.699209,8.69921 c -1.169405,1.16909 -1.685211,2.78351 -1.609725,4.23643 0.07501,1.45291 0.629259,2.7738 1.410256,3.92018 l 5.001762,7.336 c -0.9702,1.93582 -1.794192,3.93628 -2.468589,5.99392 l -8.740034,1.65417 c -1.362789,0.25787 -2.688378,0.79815 -3.769783,1.77147 -1.081405,0.97346 -1.859333,2.4815 -1.859333,4.13526 v 12.30262 c 0,1.65378 0.777928,3.1592 1.859333,4.13255 1.081405,0.97338 2.406994,1.51567 3.769783,1.77353 l 8.754004,1.6583 c 0.679477,2.04603 1.506088,4.03461 2.478379,5.95882 l -5.025522,7.3675 c -0.781606,1.14644 -1.334744,2.4664 -1.410256,3.91967 -0.07498,1.45325 0.439817,3.06745 1.609725,4.23643 l 8.699209,8.69921 c 1.1693,1.16941 2.782914,1.68325 4.235926,1.60713 1.452986,-0.0761 2.771908,-0.63037 3.918109,-1.41179 l 7.33597,-5.00022 c 1.9363,0.97001 3.937926,1.79294 5.996014,2.46702 l 1.654175,8.74004 c 0.257889,1.36284 0.798486,2.68843 1.771994,3.76981 0.973402,1.08138 2.478749,1.8593 4.132553,1.8593 H 73.88672 c 1.653805,0 3.159152,-0.77792 4.132554,-1.8593 0.973005,-1.0809 1.513999,-2.40554 1.771994,-3.76772 v -0.003 l 1.656212,-8.74778 c 2.048113,-0.67943 4.038415,-1.50768 5.964502,-2.48047 l 7.365445,5.02142 c 1.146095,0.78144 2.465096,1.33567 3.918108,1.41179 1.452905,0.0761 3.068585,-0.43786 4.237995,-1.60713 l 8.6992,-8.69921 c 1.16931,-1.16946 1.68395,-2.78551 1.60767,-4.23852 -0.076,-1.45301 -0.63074,-2.77196 -1.41232,-3.91811 l -5.00177,-7.33547 c 0.9705,-1.93617 1.79398,-3.93639 2.46857,-5.99445 l 8.74003,-1.65418 c 1.36271,-0.25794 2.68841,-0.80018 3.76981,-1.77352 1.0813,-0.97335 1.85931,-2.47881 1.85931,-4.13256 v -12.30312 c 0,-1.65378 -0.77801,-3.16127 -1.85931,-4.13465 -1.0809,-0.97292 -2.40562,-1.51344 -3.76772,-1.77146 l -8.74988,-1.65624 c -0.67918,-2.04684 -1.50825,-4.03585 -2.48046,-5.96088 l 5.02348,-7.36698 c 0.78118,-1.14583 1.33572,-2.46501 1.41232,-3.91811 0.077,-1.45309 -0.43952,-3.06905 -1.60973,-4.2385 l -8.69714,-8.69921 c -1.16962,-1.16891 -2.78461,-1.68557 -4.238494,-1.6092 -1.4528,0.0768 -2.770425,0.63186 -3.915542,1.41232 l -7.33597,5.00176 c -1.9363,-0.96998 -3.937926,-1.79297 -5.996014,-2.46703 l -1.656768,-8.74211 c -0.257783,-1.36269 -0.798062,-2.68582 -1.771464,-3.76721 -0.973297,-1.0814 -2.478749,-1.85984 -4.132554,-1.85984 z m 6.152595,34.74051 c 11.726704,0 21.185664,9.46065 21.185267,21.18735 0,11.7262 -9.459066,21.18696 -21.185267,21.18733 -11.726704,0 -21.187463,-9.4606 -21.18786,-21.18733 0,-11.72726 9.460653,-21.18772 21.18786,-21.18735 z"/>
    </g>
</svg>
`;
// https://thenounproject.com/search/?q=view&i=485540
const VIEW_SETTINGS_ICON = `
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="20 20 60 60">
    <g fill="white">
        <path d="M80,48.6c-7.8-10.4-18.4-16.7-30-16.7c-11.6,0-22.2,6.4-30,16.7c-0.6,0.9-0.6,2,0,2.9c7.8,10.4,18.4,16.7,30,16.7  s22.2-6.4,30-16.7C80.7,50.6,80.7,49.4,80,48.6z M62.8,50.8c-0.4,6.4-5.6,11.6-12,12c-7.7,0.5-14.1-5.9-13.6-13.6  c0.4-6.4,5.6-11.6,12-12C56.9,36.7,63.3,43.1,62.8,50.8z M56.9,50.4c-0.2,3.4-3,6.2-6.4,6.4c-4.2,0.3-7.6-3.2-7.3-7.3  c0.2-3.4,3-6.2,6.4-6.4C53.7,42.8,57.2,46.3,56.9,50.4z"/>
    </g>
</svg>
`;
const ControlPanel_GLOBAL_CSS = `
.${ControlPanel_gPanelCssClass} {
    background-color: rgba(40, 40, 40, 0.8);
    position: absolute;
    right: 10px;
    top: 10px;
    border-radius: 5px;
    opacity: 0;
    transition: opacity .20s ease-in-out;
}

.${ControlPanel_gScreenNodeCssClass} {
    /* Force the screen node to relative positioning. Hope that doesn't screw anything up. */
    position: relative;
}

.${ControlPanel_gScreenNodeCssClass}:hover .${ControlPanel_gPanelCssClass} {
    opacity: 1;
}

/* Hide the control panel if any other panel is showing (like settings). */
.${ControlPanel_gScreenNodeCssClass}.${gShowingOtherPanelCssClass}:hover .${ControlPanel_gPanelCssClass} {
    opacity: 0;
}

.${gButtonCssClass} {
    display: block;
    margin: 15px;
    cursor: pointer;
    opacity: 0.5;
    transition: opacity .05s ease-in-out;
    transition: transform 0.05s ease-in-out;
}

.${gButtonCssClass}:hover {
    opacity: 1;
}

.${gButtonCssClass}:active {
    transform: scale(1.15);
}
`;
/**
 * Control panel that hovers in the screen for doing things like resetting the computer.
 */
class ControlPanel_ControlPanel {
    /**
     * @param screenNode the node from the Trs80Screen object's getNode() method.
     */
    constructor(screenNode) {
        // Make global CSS if necessary.
        ControlPanel_ControlPanel.configureStyle();
        this.screenNode = screenNode;
        screenNode.classList.add(ControlPanel_gScreenNodeCssClass);
        this.panelNode = document.createElement("div");
        this.panelNode.classList.add(ControlPanel_gPanelCssClass);
        screenNode.appendChild(this.panelNode);
    }
    /**
     * Add a reset button.
     */
    addResetButton(callback) {
        let icon = document.createElement("img");
        icon.classList.add(gButtonCssClass);
        icon.src = "data:image/svg+xml;base64," + btoa(RESET_ICON);
        icon.title = "Reboot the computer";
        icon.addEventListener("click", callback);
        this.panelNode.appendChild(icon);
    }
    /**
     * Add a screenshot button.
     */
    addScreenshotButton(callback) {
        let icon = document.createElement("img");
        icon.classList.add(gButtonCssClass);
        icon.src = "data:image/svg+xml;base64," + btoa(CAMERA_ICON);
        icon.title = "Take a screenshot";
        icon.addEventListener("click", callback);
        this.panelNode.appendChild(icon);
    }
    /**
     * Add a tape rewind button.
     */
    addTapeRewindButton(callback) {
        let icon = document.createElement("img");
        icon.classList.add(gButtonCssClass);
        icon.src = "data:image/svg+xml;base64," + btoa(PREVIOUS_TRACK_ICON);
        icon.title = "Rewind the cassette";
        icon.addEventListener("click", callback);
        this.panelNode.appendChild(icon);
    }
    /**
     * Add a settings button.
     */
    addSettingsButton(settingsPanel) {
        settingsPanel.onOpen = () => this.screenNode.classList.add(gShowingOtherPanelCssClass);
        settingsPanel.onClose = () => this.screenNode.classList.remove(gShowingOtherPanelCssClass);
        let iconSvg;
        switch (settingsPanel.panelType) {
            case PanelType.HARDWARE:
            default:
                iconSvg = HARDWARE_SETTINGS_ICON;
                break;
            case PanelType.VIEW:
                iconSvg = VIEW_SETTINGS_ICON;
                break;
        }
        let icon = document.createElement("img");
        icon.classList.add(gButtonCssClass);
        icon.src = "data:image/svg+xml;base64," + btoa(iconSvg);
        icon.title = "Show the settings panel";
        icon.addEventListener("click", () => settingsPanel.open());
        this.panelNode.appendChild(icon);
    }
    /**
     * Make a global stylesheet for all TRS-80 emulators on this page.
     */
    static configureStyle() {
        const styleId = ControlPanel_gCssPrefix;
        if (document.getElementById(styleId) !== null) {
            // Already created.
            return;
        }
        const node = document.createElement("style");
        node.id = styleId;
        node.innerHTML = ControlPanel_GLOBAL_CSS;
        document.head.appendChild(node);
    }
}

// CONCATENATED MODULE: ./node_modules/trs80-emulator/dist/module/ProgressBar.js

const ProgressBar_gCssPrefix = CSS_PREFIX + "-progress-bar";
const ProgressBar_gScreenNodeCssClass = ProgressBar_gCssPrefix + "-screen-node";
const gBarCssClass = ProgressBar_gCssPrefix + "-bar";
const gSubbarCssClass = ProgressBar_gCssPrefix + "-subbar";
const ProgressBar_GLOBAL_CSS = "." + gBarCssClass + ` {
    background-color: rgba(0, 0, 0, 0.2);
    position: absolute;
    left: 15%;
    width: 70%;
    bottom: 10%;
    height: 20px;
    border-radius: 10px;
    overflow: hidden;
    opacity: 0;
    transition: opacity .20s ease-in-out;
}

.` + gSubbarCssClass + ` {
    background-color: rgba(255, 255, 255, 0.4);
    width: 0;
    height: 20px;
}

.` + ProgressBar_gScreenNodeCssClass + ` {
    /* Force the screen node to relative positioning. Hope that doesn't screw anything up. */
    position: relative;
}

`;
/**
 * Overlay on top of a screen to show progress, for instance the position of a cassette tape.
 */
class ProgressBar {
    /**
     * @param screenNode the node from the Trs80Screen object's getNode() method.
     */
    constructor(screenNode) {
        this.maxValue = 100;
        // Make global CSS if necessary.
        ProgressBar.configureStyle();
        screenNode.classList.add(ProgressBar_gScreenNodeCssClass);
        this.barNode = document.createElement("div");
        this.barNode.classList.add(gBarCssClass);
        screenNode.appendChild(this.barNode);
        this.subbarNode = document.createElement("div");
        this.subbarNode.classList.add(gSubbarCssClass);
        this.barNode.appendChild(this.subbarNode);
    }
    setMaxValue(maxValue) {
        this.maxValue = maxValue;
    }
    setValue(value) {
        this.subbarNode.style.width = "" + Math.round(value * 100 / this.maxValue) + "%";
    }
    show() {
        this.barNode.style.opacity = "1";
    }
    hide() {
        this.barNode.style.opacity = "0";
    }
    /**
     * Make a global stylesheet for all TRS-80 emulators on this page.
     */
    static configureStyle() {
        const styleId = ProgressBar_gCssPrefix;
        if (document.getElementById(styleId) !== null) {
            // Already created.
            return;
        }
        const node = document.createElement("style");
        node.id = styleId;
        node.innerHTML = ProgressBar_GLOBAL_CSS;
        document.head.appendChild(node);
    }
}

// CONCATENATED MODULE: ./node_modules/trs80-emulator/dist/module/index.js







// CONCATENATED MODULE: ./src/SystemProgramRender.ts






// RAM address range of screen.
const SystemProgramRender_SCREEN_BEGIN = 15 * 1024;
const SystemProgramRender_SCREEN_END = 16 * 1024;
/**
 * Add text to the line with the specified class.
 *
 * @param out the enclosing element to add to.
 * @param text the text to add.
 * @param className the name of the class for the item.
 */
function SystemProgramRender_add(out, text, className) {
    const e = document.createElement("span");
    e.innerText = text;
    e.classList.add(className);
    out.appendChild(e);
    return e;
}
// Stylesheet.
const SystemProgramRender_BACKGROUND_COLOR = "var(--background)";
const SystemProgramRender_STYLE = {
    error: {
        color: "var(--red)",
    },
    address: {
        color: "var(--foreground-secondary)",
    },
    hex: {
        color: "var(--blue)",
    },
    opcodes: {
        color: "var(--cyan)",
    },
    label: {
        color: "var(--orange)",
    },
    space: {
        color: "var(--foreground-secondary)",
    },
    punctuation: {
        color: "var(--foreground-secondary)",
    },
    selected: {
        backgroundColor: "var(--background-highlights)",
    },
    highlighted: {
        backgroundColor: "var(--foreground-secondary)",
        "& $hex": {
            backgroundColor: "var(--blue)",
            color: SystemProgramRender_BACKGROUND_COLOR,
        },
        "& $punctuation": {
            backgroundColor: "var(--foreground-secondary)",
            color: SystemProgramRender_BACKGROUND_COLOR,
        },
        "& $space": {
            backgroundColor: "var(--foreground-secondary)",
            color: SystemProgramRender_BACKGROUND_COLOR,
        },
        "& $label": {
            backgroundColor: "var(--orange)",
            color: SystemProgramRender_BACKGROUND_COLOR,
        },
        "& $opcodes": {
            backgroundColor: "var(--cyan)",
            color: SystemProgramRender_BACKGROUND_COLOR,
        },
        "& $address": {
            backgroundColor: "var(--foreground-secondary)",
            color: SystemProgramRender_BACKGROUND_COLOR,
        },
        "& $error": {
            backgroundColor: "var(--red)",
            color: SystemProgramRender_BACKGROUND_COLOR,
        },
    },
};
const SystemProgramRender_sheet = src_Jss.createStyleSheet(SystemProgramRender_STYLE);
const SystemProgramRender_highlightClassName = SystemProgramRender_sheet.classes.highlighted;
const SystemProgramRender_selectClassName = SystemProgramRender_sheet.classes.selected;
/**
 * Render a disassembled system program.
 *
 * @return array of the elements added, with the index being the offset into the original bytes array.
 */
function SystemProgramRender_toDiv(systemProgram, out) {
    SystemProgramRender_sheet.attach();
    const classes = SystemProgramRender_sheet.classes;
    // Every element we render that maps to a byte in the program.
    const elements = [];
    // Waveform annotations.
    const annotations = [];
    if (systemProgram.error !== undefined) {
        const line = document.createElement("div");
        out.appendChild(line);
        SystemProgramRender_add(line, systemProgram.error, classes.error);
    }
    function okChunk(chunk) {
        if (chunk.loadAddress >= SystemProgramRender_SCREEN_BEGIN && chunk.loadAddress + chunk.data.length <= SystemProgramRender_SCREEN_END) {
            return false;
        }
        if (chunk.loadAddress === 0x4210 || chunk.loadAddress === 0x401E) {
            return false;
        }
        return true;
    }
    // Prepare screenshot, in case loading process writes to screen.
    const screenDiv = document.createElement("div");
    const screen = new CanvasScreen_CanvasScreen(screenDiv, false);
    let wroteToScreen = false;
    // List chunks on tape.
    let h1 = document.createElement("h1");
    h1.innerText = "Chunks";
    out.appendChild(h1);
    // Display a row for each chunk.
    let programAddress = undefined;
    for (const chunk of systemProgram.chunks) {
        const line = document.createElement("div");
        out.appendChild(line);
        // Address and length.
        let length = chunk.data.length;
        let text = toHexWord(chunk.loadAddress) + "-" + toHexWord(chunk.loadAddress + length - 1) +
            " (" + length + " byte" + (length === 1 ? "" : "s") + ")";
        text = text.padEnd(23, " ");
        SystemProgramRender_add(line, text, classes.address);
        // First few bytes.
        const bytes = chunk.data.slice(0, Math.min(3, length));
        text = Array.from(bytes).map(toHexByte).join(" ") + (bytes.length < length ? " ..." : "");
        text = text.padEnd(14, " ");
        SystemProgramRender_add(line, text, classes.hex);
        // Write explanation.
        if (chunk.loadAddress >= SystemProgramRender_SCREEN_BEGIN && chunk.loadAddress + chunk.data.length <= SystemProgramRender_SCREEN_END) {
            SystemProgramRender_add(line, "Screen", classes.opcodes);
            if (!wroteToScreen) {
                SystemProgramRender_add(line, " (see screenshot below)", classes.error);
            }
            for (let i = 0; i < length; i++) {
                screen.writeChar(chunk.loadAddress + i, chunk.data[i]);
            }
            wroteToScreen = true;
        }
        else if (chunk.loadAddress === 0x4210) {
            SystemProgramRender_add(line, "Port 0xEC bitmask", classes.opcodes);
        }
        else if (chunk.loadAddress === 0x401E) {
            SystemProgramRender_add(line, "Video driver pointer", classes.opcodes);
        }
        else {
            SystemProgramRender_add(line, "Program code", classes.opcodes);
            if (programAddress !== undefined && chunk.loadAddress !== programAddress) {
                SystemProgramRender_add(line, " (not contiguous, expected " + toHexWord(programAddress) + ")", classes.error);
            }
            programAddress = chunk.loadAddress + length;
        }
        if (!chunk.isChecksumValid()) {
            SystemProgramRender_add(line, " (invalid checksum)", classes.error);
        }
    }
    const entryPointDiv = document.createElement("div");
    entryPointDiv.style.marginTop = "10px";
    out.appendChild(entryPointDiv);
    SystemProgramRender_add(entryPointDiv, "Entry point: ", classes.label);
    SystemProgramRender_add(entryPointDiv, toHexWord(systemProgram.entryPointAddress), classes.address);
    if (wroteToScreen) {
        h1 = document.createElement("h1");
        h1.innerText = "Loading Screen";
        out.appendChild(h1);
        out.appendChild(screenDiv);
    }
    h1 = document.createElement("h1");
    h1.innerText = "Disassembly";
    out.appendChild(h1);
    const disasm = new Disasm_Disasm();
    disasm.addLabels(Z80_KNOWN_LABELS);
    disasm.addLabels(TRS80_MODEL_III_KNOWN_LABELS);
    disasm.addLabels([[systemProgram.entryPointAddress, "MAIN"]]);
    for (const chunk of systemProgram.chunks) {
        if (okChunk(chunk)) {
            disasm.addChunk(chunk.data, chunk.loadAddress);
        }
    }
    disasm.addEntryPoint(systemProgram.entryPointAddress);
    const instructions = disasm.disassemble();
    for (const instruction of instructions) {
        if (instruction.label !== undefined) {
            const line = document.createElement("div");
            out.appendChild(line);
            SystemProgramRender_add(line, "                  ", classes.space);
            SystemProgramRender_add(line, instruction.label, classes.label);
            SystemProgramRender_add(line, ":", classes.punctuation);
        }
        let address = instruction.address;
        const bytes = instruction.bin;
        while (bytes.length > 0) {
            const subbytes = bytes.slice(0, Math.min(4, bytes.length));
            const subbytesText = subbytes.map(toHexByte).join(" ");
            const line = document.createElement("div");
            out.appendChild(line);
            SystemProgramRender_add(line, toHexWord(instruction.address), classes.address);
            SystemProgramRender_add(line, "  ", classes.space);
            SystemProgramRender_add(line, subbytesText, classes.hex);
            if (address === instruction.address) {
                SystemProgramRender_add(line, "".padEnd(12 - subbytesText.length + 8), classes.space);
                SystemProgramRender_add(line, instruction.toText(), classes.opcodes);
            }
            const byteOffset = systemProgram.addressToByteOffset(address);
            if (byteOffset !== undefined) {
                const lastIndex = byteOffset + subbytes.length - 1;
                elements.push(new Highlightable(byteOffset, lastIndex, line));
                annotations.push(new ProgramAnnotation(instruction.toText() + "\n" + instruction.binText(), byteOffset, lastIndex));
            }
            address += subbytes.length;
            bytes.splice(0, subbytes.length);
        }
    }
    return [elements, annotations];
}

// CONCATENATED MODULE: ./src/Hexdump.ts
// Tools for generating a hex dump of a binary file.



// Stylesheet.
const Hexdump_BACKGROUND_COLOR = "var(--background)";
const Hexdump_STYLE = {
    address: {
        color: "var(--foreground-secondary)",
        "&$highlighted": {
            backgroundColor: "var(--foreground-secondary)",
            color: Hexdump_BACKGROUND_COLOR,
        },
    },
    hex: {
        color: "var(--blue)",
        "&$highlighted": {
            backgroundColor: "var(--blue)",
            color: Hexdump_BACKGROUND_COLOR,
        },
    },
    ascii: {
        color: "var(--cyan)",
        "&$highlighted": {
            backgroundColor: "var(--cyan)",
            color: Hexdump_BACKGROUND_COLOR,
        },
    },
    asciiUnprintable: {
        color: "var(--foreground-secondary)",
        "&$highlighted": {
            backgroundColor: "var(--foreground-secondary)",
            color: Hexdump_BACKGROUND_COLOR,
        },
    },
    selected: {
        backgroundColor: "var(--background-highlights)",
    },
    highlighted: {
    // Empty style that's referenced above as $highlighted.
    },
};
const Hexdump_sheet = src_Jss.createStyleSheet(Hexdump_STYLE);
const Hexdump_highlightClassName = Hexdump_sheet.classes.highlighted;
const Hexdump_selectClassName = Hexdump_sheet.classes.selected;
function Hexdump_create(binary, div) {
    Hexdump_sheet.attach();
    const classes = Hexdump_sheet.classes;
    const hexElements = [];
    const asciiElements = [];
    for (let addr = 0; addr < binary.length; addr += 16) {
        const line = document.createElement("div");
        let e = document.createElement("span");
        e.classList.add(classes.address);
        e.innerText = pad(addr, 16, 4) + "  ";
        line.appendChild(e);
        // Hex.
        let subAddr;
        for (subAddr = addr; subAddr < binary.length && subAddr < addr + 16; subAddr++) {
            e = document.createElement("span");
            e.classList.add(classes.hex);
            e.innerText = pad(binary[subAddr], 16, 2);
            hexElements.push(new Highlightable(hexElements.length, hexElements.length, e));
            line.appendChild(e);
            line.appendChild(document.createTextNode(" "));
        }
        for (; subAddr < addr + 16; subAddr++) {
            line.appendChild(document.createTextNode("   "));
        }
        line.appendChild(document.createTextNode("  "));
        // ASCII.
        for (subAddr = addr; subAddr < binary.length && subAddr < addr + 16; subAddr++) {
            const c = binary[subAddr];
            e = document.createElement("span");
            if (c >= 32 && c < 127) {
                e.classList.add(classes.ascii);
                e.innerText = String.fromCharCode(c);
            }
            else {
                e.classList.add(classes.asciiUnprintable);
                e.innerText = ".";
            }
            asciiElements.push(new Highlightable(asciiElements.length, asciiElements.length, e));
            line.appendChild(e);
        }
        div.appendChild(line);
    }
    return [hexElements, asciiElements];
}

// CONCATENATED MODULE: ./src/WaveformDisplay.ts









let WaveformDisplay_gRadioButtonCounter = 1;
/**
 * Whether the user is selecting whole bytes or audio samples.
 */
var SelectionMode;
(function (SelectionMode) {
    SelectionMode[SelectionMode["BYTES"] = 0] = "BYTES";
    SelectionMode[SelectionMode["SAMPLES"] = 1] = "SAMPLES";
})(SelectionMode || (SelectionMode = {}));
/**
 * When adjusting the selection, whether changing one of its ends, or creating it from scratch.
 */
var SelectionAdjustMode;
(function (SelectionAdjustMode) {
    SelectionAdjustMode[SelectionAdjustMode["LEFT"] = 0] = "LEFT";
    SelectionAdjustMode[SelectionAdjustMode["CREATE"] = 1] = "CREATE";
    SelectionAdjustMode[SelectionAdjustMode["RIGHT"] = 2] = "RIGHT";
})(SelectionAdjustMode || (SelectionAdjustMode = {}));
/**
 * An individual waveform to be displayed.
 */
class Waveform {
    constructor(canvas, infoPanel, samples) {
        this.canvas = canvas;
        this.infoPanel = infoPanel;
        this.samples = samples;
    }
}
/**
 * Displays a list of different waveforms, synchronizing their pan and zoom.
 */
class WaveformDisplay_WaveformDisplay {
    constructor(sampleRate) {
        /**
         * Dispatchers when the user highlights or selects in the canvas.
         */
        this.onHighlight = new dist["SimpleEventDispatcher"]();
        this.onSelection = new dist["SimpleEventDispatcher"]();
        this.onDoneSelecting = new dist["SimpleEventDispatcher"]();
        /**
         * The width of the canvases, in pixels.
         */
        this.displayWidth = 0;
        /**
         * The zoom level, where 0 means all the way zoomed in and each original
         * audio sample maps to one column of pixels on the screen; 1 means
         * zoomed out from that by a factor of two, etc.
         */
        this.zoom = 0; // Initialized in zoomToFitAll()
        /**
         * The max value that zoom can have.
         */
        this.maxZoom = 0;
        /**
         * The sample in the middle of the display, in original samples.
         */
        this.centerSample = 0; // Initialized in zoomToFitAll()
        /**
         * All the waveforms we're displaying, and their canvases.
         */
        this.waveforms = [];
        /**
         * All the programs represented on these waveforms.
         */
        this.programs = [];
        /**
         * Listeners of the maxZoom property.
         */
        this.onMaxZoom = new dist["SimpleEventDispatcher"]();
        /**
         * Listeners of the zoom property.
         */
        this.onZoom = new dist["SimpleEventDispatcher"]();
        /**
         * What the user wants to select.
         */
        this.selectionMode = SelectionMode.BYTES;
        /**
         * Waveform annotations to draw.
         */
        this.waveformAnnotations = [];
        /**
         * Handle to the timeout to redraw.
         */
        this.drawTimeout = undefined;
        this.sampleRate = sampleRate;
    }
    /**
     * Add a waveform to display.
     */
    addWaveform(canvas, infoPanel, samples) {
        const displayWidth = canvas.width;
        if (this.displayWidth === 0) {
            this.displayWidth = displayWidth;
        }
        else if (this.displayWidth !== displayWidth) {
            throw new Error("Widths of the canvases must match");
        }
        // Compute max display level.
        let newMaxZoom = samples.samplesList.length - 1;
        if (newMaxZoom !== this.maxZoom) {
            this.maxZoom = newMaxZoom;
            this.onMaxZoom.dispatch(newMaxZoom);
        }
        this.waveforms.push(new Waveform(canvas, infoPanel, samples));
        this.configureCanvas(canvas);
    }
    /**
     * Make the canvas and its surrounding elements to display a waveform.
     */
    addWaveformAndChrome(label, samples, parent) {
        let labelElement = document.createElement("p");
        labelElement.innerText = label;
        parent.appendChild(labelElement);
        let container = document.createElement("div");
        container.style.display = "flex";
        container.style.flexFlow = "row nowrap";
        container.style.justifyContent = "flex-start";
        container.style.alignItems = "flex-start";
        parent.appendChild(container);
        let canvas = document.createElement("canvas");
        canvas.classList.add("waveform");
        canvas.width = 800;
        canvas.height = 400;
        container.appendChild(canvas);
        let infoPanel = document.createElement("div");
        infoPanel.style.marginLeft = "30px";
        container.appendChild(infoPanel);
        this.addWaveform(canvas, infoPanel, samples);
        this.queueDraw();
    }
    /**
     * Add a program to highlight in the waveform.
     */
    addProgram(program) {
        this.programs.push(program);
    }
    /**
     * Add the list of annotations.
     */
    addWaveformAnnotations(waveformAnnotations) {
        this.waveformAnnotations.push(...waveformAnnotations);
        this.queueDraw();
    }
    /**
     * Add an annotation to draw.
     */
    addWaveformAnnotation(waveformAnnotation) {
        this.waveformAnnotations.push(waveformAnnotation);
        this.queueDraw();
    }
    /**
     * Update the current highlight.
     */
    setHighlight(highlight) {
        this.startHighlightFrame = undefined;
        this.endHighlightFrame = undefined;
        if (highlight !== undefined) {
            let byteData = highlight.program.byteData[highlight.firstIndex];
            if (byteData !== undefined) {
                this.startHighlightFrame = byteData.startFrame;
                this.endHighlightFrame = byteData.endFrame;
            }
            byteData = highlight.program.byteData[highlight.lastIndex];
            if (byteData !== undefined) {
                this.endHighlightFrame = byteData.endFrame;
            }
        }
        this.queueDraw();
    }
    /**
     * Update the current highlight.
     */
    setSelection(selection) {
        this.startSelectionFrame = undefined;
        this.endSelectionFrame = undefined;
        if (selection !== undefined) {
            let byteData = selection.program.byteData[selection.firstIndex];
            if (byteData !== undefined) {
                this.startSelectionFrame = byteData.startFrame;
                this.endSelectionFrame = byteData.endFrame;
            }
            byteData = selection.program.byteData[selection.lastIndex];
            if (byteData !== undefined) {
                this.endSelectionFrame = byteData.endFrame;
            }
        }
        this.draw();
        this.updateInfoPanels();
    }
    /**
     * Zoom to fit the current selection, if any.
     */
    doneSelecting() {
        if (this.startSelectionFrame !== undefined && this.endSelectionFrame !== undefined) {
            this.zoomToFit(this.startSelectionFrame, this.endSelectionFrame);
        }
    }
    /**
     * Makes a block element to place above a set of waveform displays.
     */
    makeControls(showSelectionType) {
        const controls = document.createElement("div");
        // Zoom controls.
        controls.appendChild(this.makeZoomControls());
        // Instructions.
        const instructions = document.createElement("span");
        instructions.innerHTML = "<b>Shift</b>: Zoom in&nbsp;&nbsp;&nbsp;&nbsp;<b>Alt-Shift</b>: Zoom out&nbsp;&nbsp;&nbsp;&nbsp;<b>Alt</b>: Select";
        instructions.style.marginLeft = "30px";
        controls.appendChild(instructions);
        // Selection type.
        if (showSelectionType) {
            const selectionLabel = document.createElement("span");
            selectionLabel.innerText = "Select: ";
            selectionLabel.style.marginLeft = "30px";
            selectionLabel.style.fontWeight = "bold";
            controls.append(selectionLabel);
            // Unique name for this group of inputs.
            const name = "selection-type-radio-name-" + WaveformDisplay_gRadioButtonCounter;
            WaveformDisplay_gRadioButtonCounter += 1;
            // Options for selection mode.
            let selectionModes = [
                {
                    label: "Bytes",
                    selectionMode: SelectionMode.BYTES,
                    checked: true,
                },
                {
                    label: "Samples",
                    selectionMode: SelectionMode.SAMPLES,
                    checked: false,
                },
            ];
            for (const { label, selectionMode, checked } of selectionModes) {
                const labelNode = document.createElement("label");
                const radioInput = document.createElement("input");
                radioInput.type = "radio";
                radioInput.name = name;
                radioInput.checked = checked;
                radioInput.addEventListener("change", () => this.setSelectionMode(selectionMode));
                labelNode.appendChild(radioInput);
                labelNode.append(" " + label);
                controls.appendChild(labelNode);
            }
        }
        return controls;
    }
    /**
     * Sets the selection mode. Does not update the radio buttons. Defaults to BYTES.
     */
    setSelectionMode(selectionMode) {
        this.selectionMode = selectionMode;
        this.draw();
        this.updateInfoPanels();
    }
    /**
     * Create zoom control elements, bind them to this waveform display, and return them.
     * These are not guaranteed to be a block element. Caller should warp them in
     * a div if that's what they want.
     */
    makeZoomControls() {
        const label = document.createElement("label");
        label.innerText = "Zoom: ";
        const input = document.createElement("input");
        input.type = "range";
        label.appendChild(input);
        // We want to flip this horizontally, so make the slider's value
        // the negative of the real zoom.
        input.min = (-this.maxZoom).toString();
        input.max = "0";
        this.onMaxZoom.subscribe(maxZoom => input.min = (-maxZoom).toString());
        this.onZoom.subscribe(zoom => input.value = (-zoom).toString());
        input.addEventListener("input", () => {
            this.setZoom(-parseInt(input.value), undefined);
        });
        return label;
    }
    /**
     * Configure the mouse and keyboard events in the canvas.
     */
    configureCanvas(canvas) {
        let dragging = false;
        let dragInitialX = 0;
        let dragInitialCenterSample = 0;
        let inCanvas = false;
        let holdingShift = false;
        let holdingAlt = false;
        let selectionStart = undefined;
        let selectingSamples = false;
        let selectionAdjustMode = SelectionAdjustMode.CREATE;
        let lastSeenMouseX = 0;
        let lastSeenMouseY = 0;
        const updateCursor = () => {
            canvas.style.cursor = holdingShift ? (holdingAlt ? "zoom-out" : "zoom-in")
                : holdingAlt ? (selectionAdjustMode === SelectionAdjustMode.CREATE ? "auto" : "col-resize")
                    : dragging ? "grabbing"
                        : "grab";
        };
        updateCursor();
        // See if we're on the edge of a sample selection area.
        const updateSelectionAdjustMode = () => {
            selectionAdjustMode = SelectionAdjustMode.CREATE;
            if (holdingAlt && this.selectionMode === SelectionMode.SAMPLES &&
                this.startSampleSelectionFrame !== undefined && this.endSampleSelectionFrame !== undefined) {
                const startX = this.originalFrameToScreenX(this.startSampleSelectionFrame);
                if (Math.abs(lastSeenMouseX - startX) < 4) {
                    selectionAdjustMode = SelectionAdjustMode.LEFT;
                }
                const endX = this.originalFrameToScreenX(this.endSampleSelectionFrame);
                if (Math.abs(lastSeenMouseX - endX) < 4) {
                    selectionAdjustMode = SelectionAdjustMode.RIGHT;
                }
            }
            updateCursor();
        };
        // Mouse enter/leave events.
        canvas.addEventListener("mouseenter", event => {
            inCanvas = true;
            holdingAlt = event.altKey;
            holdingShift = event.shiftKey;
            updateSelectionAdjustMode();
            updateCursor();
        });
        canvas.addEventListener("mouseleave", () => {
            inCanvas = false;
        });
        // Mouse click events.
        canvas.addEventListener("mousedown", event => {
            if (holdingShift) {
                // Zoom.
                if (holdingAlt) {
                    // Zoom out.
                    this.setZoom(this.zoom + 1, event.offsetX);
                }
                else {
                    // Zoom in.
                    this.setZoom(this.zoom - 1, event.offsetX);
                }
            }
            else if (holdingAlt) {
                // Start selecting.
                const frame = this.screenXToOriginalFrame(event.offsetX);
                if (this.selectionMode === SelectionMode.BYTES) {
                    // Selecting bytes.
                    const highlight = this.highlightAt(frame);
                    if (highlight !== undefined) {
                        selectionStart = highlight;
                        this.onSelection.dispatch(highlight);
                    }
                }
                else {
                    // Selecting samples.
                    switch (selectionAdjustMode) {
                        case SelectionAdjustMode.LEFT:
                            this.startSampleSelectionFrame = this.endSampleSelectionFrame;
                            break;
                        case SelectionAdjustMode.CREATE:
                            this.startSampleSelectionFrame = frame;
                            break;
                        case SelectionAdjustMode.RIGHT:
                            // Nothing.
                            break;
                    }
                    this.endSampleSelectionFrame = frame;
                    selectingSamples = true;
                    this.draw();
                }
                this.updateInfoPanels();
            }
            else {
                // Start pan.
                dragging = true;
                dragInitialX = event.offsetX;
                dragInitialCenterSample = this.centerSample;
                updateCursor();
            }
        });
        window.addEventListener("mouseup", () => {
            if (dragging) {
                dragging = false;
                updateCursor();
            }
            else if (selectionStart !== undefined) {
                this.onDoneSelecting.dispatch(this);
                this.updateInfoPanels();
                selectionStart = undefined;
            }
            else if (selectingSamples) {
                // Done selecting samples.
                if (this.startSampleSelectionFrame !== undefined && this.endSampleSelectionFrame !== undefined) {
                    if (this.startSampleSelectionFrame === this.endSampleSelectionFrame) {
                        // Deselect.
                        this.startSampleSelectionFrame = undefined;
                        this.endSampleSelectionFrame = undefined;
                    }
                    else if (this.startSampleSelectionFrame > this.endSampleSelectionFrame) {
                        // Put in the right order.
                        const tmp = this.startSampleSelectionFrame;
                        this.startSampleSelectionFrame = this.endSampleSelectionFrame;
                        this.endSampleSelectionFrame = tmp;
                    }
                }
                selectingSamples = false;
                this.draw();
                this.updateInfoPanels();
            }
        });
        canvas.addEventListener("mousemove", event => {
            lastSeenMouseX = event.offsetX;
            lastSeenMouseY = event.offsetY;
            if (dragging) {
                const dx = event.offsetX - dragInitialX;
                const mag = Math.pow(2, this.zoom);
                this.centerSample = Math.round(dragInitialCenterSample - dx * mag);
                this.draw();
            }
            else if (selectionStart !== undefined) {
                const frame = this.screenXToOriginalFrame(event.offsetX);
                const highlight = this.highlightAt(frame);
                if (highlight !== undefined && highlight.program === selectionStart.program) {
                    this.onSelection.dispatch(new Highlight(highlight.program, selectionStart.firstIndex, highlight.lastIndex));
                }
            }
            else if (selectingSamples) {
                this.endSampleSelectionFrame = this.screenXToOriginalFrame(event.offsetX);
                this.draw();
                this.updateInfoPanels();
            }
            else if (holdingAlt) {
                const frame = this.screenXToOriginalFrame(event.offsetX);
                const highlight = this.highlightAt(frame);
                this.onHighlight.dispatch(highlight);
                updateSelectionAdjustMode();
            }
        });
        // Keyboard events.
        document.addEventListener("keydown", event => {
            if (inCanvas) {
                if (event.key === "Alt") {
                    holdingAlt = true;
                    updateSelectionAdjustMode();
                    updateCursor();
                }
                if (event.key === "Shift") {
                    holdingShift = true;
                    updateCursor();
                }
            }
        });
        document.addEventListener("keyup", event => {
            if (inCanvas) {
                if (event.key === "Alt") {
                    holdingAlt = false;
                    updateSelectionAdjustMode();
                    updateCursor();
                }
                if (event.key === "Shift") {
                    holdingShift = false;
                    updateCursor();
                }
            }
        });
    }
    /**
     * Queue a redraw to happen as soon as possible. This is useful if many of these might be called
     * synchronously -- they will be collapsed.
     */
    queueDraw() {
        this.cancelQueuedDraw();
        this.drawTimeout = window.setTimeout(() => this.draw(), 0);
    }
    /**
     * Cancel any queued draw.
     */
    cancelQueuedDraw() {
        if (this.drawTimeout !== undefined) {
            window.clearTimeout(this.drawTimeout);
            this.drawTimeout = undefined;
        }
    }
    /**
     * Draw all the waveforms.
     */
    draw() {
        this.cancelQueuedDraw();
        for (const waveform of this.waveforms) {
            this.drawInCanvas(waveform.canvas, waveform.samples);
        }
    }
    /**
     * Compute fit level to fit the specified number of samples.
     *
     * @param sampleCount number of samples we want to display.
     */
    computeFitLevel(sampleCount) {
        let zoom = Math.ceil(Math.log2(sampleCount / this.displayWidth));
        zoom = Math.max(zoom, 0);
        zoom = Math.min(zoom, sampleCount - 1);
        return zoom;
    }
    /**
     * @param {HTMLCanvasElement} canvas
     * @param {DisplaySamples} displaySamples
     */
    drawInCanvas(canvas, displaySamples) {
        const ctx = canvas.getContext("2d");
        const width = canvas.width;
        const height = canvas.height;
        // Get the theme variables.
        canvas.classList.add("dark-mode");
        const style = getComputedStyle(canvas);
        const backgroundColor = style.getPropertyValue("--background");
        const selectionColor = style.getPropertyValue("--background-highlights");
        const highlightColor = "rgba(0, 0, 0, 0.2)";
        const braceColor = style.getPropertyValue("--foreground-secondary");
        const labelColor = style.getPropertyValue("--foreground");
        const waveformColor = style.getPropertyValue("--blue");
        const startColor = style.getPropertyValue("--cyan");
        const badColor = style.getPropertyValue("--red");
        // Background.
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, width, height);
        const samplesList = displaySamples.samplesList;
        const samples = samplesList[this.zoom];
        const mag = Math.pow(2, this.zoom);
        const centerSample = Math.floor(this.centerSample / mag);
        // From zoom space sample to X.
        const frameToX = (i) => Math.floor(width / 2) + (i - centerSample);
        // Compute viewing window in zoom space.
        const firstSample = Math.max(centerSample - Math.floor(width / 2), 0);
        const lastSample = Math.min(centerSample + width - 1, samples.length - 1);
        // Compute viewing window in original space.
        const firstOrigSample = Math.floor(firstSample * mag);
        const lastOrigSample = Math.ceil(lastSample * mag);
        // Whether we're zoomed in enough to draw and line and individual bits.
        const drawingLine = this.zoom < 3;
        if (this.selectionMode === SelectionMode.BYTES) {
            // Selection.
            if (this.startSelectionFrame !== undefined && this.endSelectionFrame !== undefined) {
                ctx.fillStyle = selectionColor;
                const x1 = frameToX(this.startSelectionFrame / mag);
                const x2 = frameToX(this.endSelectionFrame / mag);
                ctx.fillRect(x1, 0, Math.max(x2 - x1, 1), height);
            }
            // Highlight.
            if (this.startHighlightFrame !== undefined && this.endHighlightFrame !== undefined) {
                ctx.fillStyle = highlightColor;
                const x1 = frameToX(this.startHighlightFrame / mag);
                const x2 = frameToX(this.endHighlightFrame / mag);
                ctx.fillRect(x1, 0, Math.max(x2 - x1, 1), height);
            }
        }
        else {
            // Selecting samples.
            if (this.startSampleSelectionFrame !== undefined && this.endSampleSelectionFrame !== undefined) {
                ctx.fillStyle = selectionColor;
                let x1 = frameToX(this.startSampleSelectionFrame / mag);
                let x2 = frameToX(this.endSampleSelectionFrame / mag);
                if (x2 < x1) {
                    // Might be backwards while dragging.
                    const tmp = x1;
                    x1 = x2;
                    x2 = tmp;
                }
                ctx.fillRect(x1, 0, Math.max(x2 - x1, 1), height);
                // Highlight center of selection.
                const midX = (x1 + x2) / 2;
                ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
                ctx.beginPath();
                ctx.moveTo(midX, 0);
                ctx.lineTo(midX, height);
                ctx.stroke();
            }
        }
        // Y=0 axis.
        ctx.strokeStyle = selectionColor;
        ctx.beginPath();
        ctx.moveTo(0, height / 2);
        ctx.lineTo(width, height / 2);
        ctx.stroke();
        // Programs and bits.
        for (const program of this.programs) {
            if (drawingLine) {
                // Highlight bits.
                for (const bitInfo of program.bitData) {
                    if (bitInfo.endFrame >= firstOrigSample && bitInfo.startFrame <= lastOrigSample) {
                        const x1 = frameToX(bitInfo.startFrame / mag);
                        const x2 = frameToX(bitInfo.endFrame / mag);
                        let bitBraceColor;
                        let label;
                        let bitLabelColor;
                        switch (bitInfo.bitType) {
                            case BitType.ZERO:
                                bitBraceColor = braceColor;
                                bitLabelColor = labelColor;
                                label = "0";
                                break;
                            case BitType.ONE:
                                bitBraceColor = braceColor;
                                bitLabelColor = labelColor;
                                label = "1";
                                break;
                            case BitType.START:
                                bitBraceColor = startColor;
                                bitLabelColor = startColor;
                                label = "START";
                                break;
                            case BitType.BAD:
                                bitBraceColor = badColor;
                                bitLabelColor = badColor;
                                label = "BAD";
                                break;
                        }
                        drawBraceAndLabel(ctx, height, x1, x2, bitBraceColor, label, bitLabelColor, true);
                    }
                }
            }
            else if (this.zoom < 5) {
                // Highlight annotations, if we have them.
                if (program.annotations !== undefined) {
                    for (const annotation of program.annotations) {
                        let startFrame = undefined;
                        let endFrame = undefined;
                        for (let i = annotation.firstIndex; i <= annotation.lastIndex; i++) {
                            const byteInfo = program.byteData[i];
                            if (byteInfo !== undefined) {
                                if (startFrame === undefined || endFrame === undefined) {
                                    startFrame = byteInfo.startFrame;
                                    endFrame = byteInfo.endFrame;
                                }
                                else {
                                    startFrame = Math.min(startFrame, byteInfo.startFrame);
                                    endFrame = Math.max(endFrame, byteInfo.endFrame);
                                }
                            }
                        }
                        if (endFrame !== undefined && startFrame !== undefined &&
                            endFrame >= firstOrigSample && startFrame <= lastOrigSample) {
                            const x1 = frameToX(startFrame / mag);
                            const x2 = frameToX(endFrame / mag);
                            drawBraceAndLabel(ctx, height, x1, x2, braceColor, annotation.text, labelColor, true);
                        }
                    }
                }
                else {
                    // Highlight bytes.
                    for (const byteInfo of program.byteData) {
                        if (byteInfo.endFrame >= firstOrigSample && byteInfo.startFrame <= lastOrigSample) {
                            const x1 = frameToX(byteInfo.startFrame / mag);
                            const x2 = frameToX(byteInfo.endFrame / mag);
                            let byteValue = byteInfo.value;
                            const basicToken = getToken(byteValue);
                            const label = byteValue < 32 ? "^" + String.fromCodePoint(byteValue + 64)
                                : byteValue === 32 ? '\u2423' // Open box to represent space.
                                    : byteValue < 128 ? String.fromCodePoint(byteValue)
                                        : program.isBasicProgram() && basicToken !== undefined ? basicToken
                                            : toHexByte(byteValue);
                            drawBraceAndLabel(ctx, height, x1, x2, braceColor, label, labelColor, true);
                        }
                    }
                }
            }
            else {
                // Highlight the whole program.
                const x1 = frameToX(program.startFrame / mag);
                const x2 = frameToX(program.endFrame / mag);
                drawBraceAndLabel(ctx, height, x1, x2, braceColor, program.getShortLabel(), labelColor, true);
            }
        }
        // Draw waveform.
        ctx.strokeStyle = waveformColor;
        if (drawingLine) {
            ctx.beginPath();
        }
        for (let i = firstSample; i <= lastSample; i++) {
            const value = samples[i];
            const x = frameToX(i);
            const y = value * height / 65536;
            if (drawingLine) {
                if (i === firstSample) {
                    ctx.moveTo(x, height / 2 - y);
                }
                else {
                    ctx.lineTo(x, height / 2 - y);
                }
            }
            else {
                ctx.beginPath();
                ctx.moveTo(x, height / 2 - y);
                ctx.lineTo(x, height / 2 + y);
                ctx.stroke();
            }
        }
        if (drawingLine) {
            ctx.stroke();
        }
        // Draw waveform annotations.
        const annotationContext = {
            width: width,
            height: height,
            frameToX(frame) {
                return frameToX(frame / mag);
            },
            valueToY(value) {
                return height / 2 - value * height / 65536;
            },
            context: ctx,
            highlightColor: badColor,
            foregroundColor: style.getPropertyValue("--foreground"),
            secondaryForegroundColor: style.getPropertyValue("--foreground-secondary"),
        };
        for (const waveformAnnotation of this.waveformAnnotations) {
            waveformAnnotation.draw(annotationContext);
        }
    }
    /**
     * Set the zoom level to a particular value.
     *
     * @param zoom new zoom level.
     * @param screenX pixel to keep at the same place, or undefined to mean the horizontal center.
     */
    setZoom(zoom, screenX) {
        if (screenX === undefined) {
            screenX = Math.round(this.displayWidth / 2);
        }
        const newZoom = Math.min(Math.max(0, zoom), this.maxZoom);
        if (newZoom !== this.zoom) {
            const frame = this.screenXToOriginalFrame(screenX);
            this.zoom = newZoom;
            this.centerSample = frame - Math.round((screenX - this.displayWidth / 2) * Math.pow(2, newZoom));
            this.onZoom.dispatch(newZoom);
            this.draw();
        }
    }
    /**
     * Zoom to fit a particular bit.
     */
    zoomToBitData(bitData) {
        // Show a bit after a many bits before.
        const startFrame = bitData.startFrame - 1500;
        const endFrame = bitData.endFrame + 300;
        this.zoomToFit(startFrame, endFrame);
    }
    /**
     * Zoom to fit a range of samples.
     */
    zoomToFit(startFrame, endFrame) {
        const sampleCount = endFrame - startFrame;
        // Visually centered sample (in level 0).
        this.centerSample = Math.floor((startFrame + endFrame) / 2);
        // Find appropriate zoom.
        this.setZoom(this.computeFitLevel(sampleCount), undefined);
        this.draw();
    }
    /**
     * Zoom to fit all samples.
     */
    zoomToFitAll() {
        if (this.waveforms.length > 0 && this.waveforms[0].samples !== undefined) {
            this.zoomToFit(0, this.waveforms[0].samples.samplesList[0].length);
        }
    }
    /**
     * Convert a screen (pixel) X location to the frame number in the original waveform.
     */
    screenXToOriginalFrame(screenX) {
        const mag = Math.pow(2, this.zoom);
        // Offset in pixels from center of canvas.
        const pixelOffset = screenX - Math.floor(this.displayWidth / 2);
        // Convert to frame.
        let frame = this.centerSample + pixelOffset * mag;
        // Clamp at end.
        if (this.waveforms.length > 0) {
            const waveform = this.waveforms[0];
            if (waveform.samples.samplesList.length > 0) {
                const maxFrame = waveform.samples.samplesList[0].length - 1;
                frame = Math.min(frame, maxFrame);
            }
        }
        // Clamp at start.
        frame = Math.max(frame, 0);
        return frame;
    }
    /**
     * Convert an original (unzoomed) sample to its X coordinate. Does not clamp to display range.
     */
    originalFrameToScreenX(frame) {
        const mag = Math.pow(2, this.zoom);
        const centerSample = Math.floor(this.centerSample / mag);
        return Math.floor(this.displayWidth / 2) + (frame / mag - centerSample);
    }
    /**
     * Return a highlight for the specified frame (in original samples), or undefined
     * if not found.
     */
    highlightAt(frame) {
        for (const program of this.programs) {
            for (let byteIndex = 0; byteIndex < program.byteData.length; byteIndex++) {
                const byteData = program.byteData[byteIndex];
                if (frame >= byteData.startFrame && frame <= byteData.endFrame) {
                    return new Highlight(program, byteIndex);
                }
            }
        }
        return undefined;
    }
    /**
     * Update the statistics displayed on the info panels of each waveform.
     */
    updateInfoPanels() {
        let startFrame = undefined;
        let endFrame = undefined;
        if (this.selectionMode === SelectionMode.BYTES && this.startSelectionFrame !== undefined && this.endSelectionFrame !== undefined) {
            // Swap around.
            startFrame = Math.min(this.startSelectionFrame, this.endSelectionFrame);
            endFrame = Math.max(this.startSelectionFrame, this.endSelectionFrame);
        }
        else if (this.selectionMode === SelectionMode.SAMPLES && this.startSampleSelectionFrame !== undefined && this.endSampleSelectionFrame !== undefined) {
            // Swap around.
            startFrame = Math.min(this.startSampleSelectionFrame, this.endSampleSelectionFrame);
            endFrame = Math.max(this.startSampleSelectionFrame, this.endSampleSelectionFrame);
        }
        if (startFrame !== undefined && endFrame !== undefined) {
            for (const waveform of this.waveforms) {
                const infoPanel = waveform.infoPanel;
                const duration = endFrame - startFrame;
                let minValue = undefined;
                let maxValue = undefined;
                let samples = waveform.samples.samplesList[0];
                for (let frame = startFrame; frame <= endFrame; frame++) {
                    const value = samples[frame];
                    if (minValue === undefined || value < minValue) {
                        minValue = value;
                    }
                    if (maxValue === undefined || value > maxValue) {
                        maxValue = value;
                    }
                }
                const parts = [];
                parts.push("<b>Start frame:</b> " + frameToTimestamp(startFrame, this.sampleRate) + "<br>");
                parts.push("<b>End frame:</b> " + frameToTimestamp(endFrame, this.sampleRate) + "<br>");
                parts.push("<b>Duration:</b> " + frameDurationToString(duration, this.sampleRate) + "<br>");
                if (maxValue !== undefined) {
                    parts.push("<b>Maximum value:</b> " + withCommas(maxValue) + "<br>");
                }
                if (minValue !== undefined) {
                    parts.push("<b>Minimum value:</b> " + withCommas(minValue) + "<br>");
                }
                infoPanel.innerHTML = parts.join("");
                // Button to save WAV file of selection.
                const saveButton = document.createElement("button");
                saveButton.innerText = "Save WAV File";
                saveButton.classList.add("nice_button");
                saveButton.style.marginTop = "20px";
                const constStartFrame = startFrame;
                const constEndFrame = endFrame;
                saveButton.addEventListener("click", () => this.saveWavFile(waveform.samples.samplesList[0], constStartFrame, constEndFrame));
                infoPanel.appendChild(saveButton);
            }
        }
        else {
            // No selection, erase panel.
            for (const waveform of this.waveforms) {
                clearElement(waveform.infoPanel);
            }
        }
    }
    /**
     * Create a WAV file and auto-download it to the user.
     */
    saveWavFile(samples, startFrame, endFrame) {
        const wav = writeWavFile(samples.subarray(startFrame, endFrame + 1), this.sampleRate);
        const a = document.createElement("a");
        const blob = new Blob([wav], { type: "audio/wav" });
        a.href = window.URL.createObjectURL(blob);
        a.download = "clip.wav";
        a.click();
    }
}

// CONCATENATED MODULE: ./src/Edtasm.ts
// Tools for decoding EDTASM programs.
//
// http://www.trs-80.com/wordpress/zaps-patches-pokes-tips/edtasm-file-format/


// Stylesheet.
const Edtasm_BACKGROUND_COLOR = "#1E1E1E";
const Edtasm_STYLE = {
    error: {
        color: "#aa0000",
        "&$highlighted": {
            backgroundColor: "#aa0000",
            color: Edtasm_BACKGROUND_COLOR,
        },
    },
    lineNumber: {
        color: "#858585",
        "&$highlighted": {
            backgroundColor: "#858585",
            color: Edtasm_BACKGROUND_COLOR,
        },
    },
    regular: {
        color: "#9CDCFE",
        "&$highlighted": {
            backgroundColor: "#9CDCFE",
            color: Edtasm_BACKGROUND_COLOR,
        },
    },
    comment: {
        color: "#6A9955",
        "&$highlighted": {
            backgroundColor: "#6A9955",
            color: Edtasm_BACKGROUND_COLOR,
        },
    },
    selected: {
        backgroundColor: "#555555",
    },
    highlighted: {
    // Empty style that's referenced above as $highlighted.
    },
};
const Edtasm_sheet = src_Jss.createStyleSheet(Edtasm_STYLE);
const Edtasm_highlightClassName = Edtasm_sheet.classes.highlighted;
const Edtasm_selectClassName = Edtasm_sheet.classes.selected;
/**
 * TODO share this code with Basic.ts.
 *
 * @param out the enclosing element to add to.
 * @param text the text to add.
 * @param className the name of the class for the item.
 * @return the new element.
 */
function Edtasm_add(out, text, className) {
    const e = document.createElement("span");
    e.innerText = text;
    e.classList.add(className);
    out.appendChild(e);
    return e;
}
/**
 * Decoded the program into the DIV, returning the program name and array of created elements.
 */
function decodeEdtasm(bytes, out) {
    Edtasm_sheet.attach();
    const classes = Edtasm_sheet.classes;
    const elements = [];
    let e;
    // Check magic.
    if (bytes.length < 7 || bytes[0] !== 0xD3) {
        Edtasm_add(out, "EDTASM: missing magic -- not a EDTASM file.", classes.error);
        return ["Error", elements];
    }
    // Read name of program.
    const name = (String.fromCodePoint(bytes[1]) +
        String.fromCodePoint(bytes[2]) +
        String.fromCodePoint(bytes[3]) +
        String.fromCodePoint(bytes[4]) +
        String.fromCodePoint(bytes[5]) +
        String.fromCodePoint(bytes[6])).trim();
    let i = 7;
    while (true) {
        if (bytes.length - i < 5) {
            // End of program.
            return [name, elements];
        }
        const line = document.createElement("div");
        // Read line number.
        for (let j = 0; j < 5; j++) {
            e = Edtasm_add(line, (bytes[i] - 0xB0).toString(), classes.lineNumber);
            elements.push(new Highlightable(i, i, e));
            i++;
        }
        // Parse line.
        let pos = 0;
        let className = classes.regular;
        while (i < bytes.length && bytes[i] != 0x0D && bytes[i] !== 0x0A && bytes[i] !== 0x1A) {
            let text;
            if (bytes[i] === 0x09) {
                // Tab.
                text = "";
                do {
                    text += " ";
                    pos++;
                } while (pos % 8 !== 0);
            }
            else {
                // Non-tab.
                text = String.fromCodePoint(bytes[i]);
                if (text === ";") {
                    // Semicolon to end of line is comment.
                    className = classes.comment;
                }
                pos++;
            }
            e = Edtasm_add(line, text, className);
            elements.push(new Highlightable(i, i, e));
            i++;
        }
        // Skip EOL.
        while (i < bytes.length && (bytes[i] === 0x0D || bytes[i] === 0x0A)) {
            i++;
        }
        out.appendChild(line);
    }
}

// CONCATENATED MODULE: ./src/TapeBrowser.ts














/**
 * Generic cassette that reads from a Int16Array.
 */
class TapeBrowser_Int16Cassette extends Cassette {
    constructor(samples, sampleRate) {
        super();
        this.frame = 0;
        this.motorOn = false;
        this.rewinding = false;
        this.samples = samples;
        this.samplesPerSecond = sampleRate;
    }
    rewind() {
        if (this.progressBar === undefined) {
            this.frame = 0;
        }
        else {
            this.rewinding = true;
            this.updateProgressBarVisibility();
            const updateRewind = () => {
                var _a;
                if (this.frame > 0) {
                    this.frame = Math.max(0, Math.round(this.frame - this.samples.length / 30));
                    (_a = this.progressBar) === null || _a === void 0 ? void 0 : _a.setValue(this.frame);
                    window.requestAnimationFrame(updateRewind);
                }
                else {
                    this.rewinding = false;
                    this.updateProgressBarVisibility();
                }
            };
            // Wait for progress bar to become visible.
            setTimeout(updateRewind, 150);
        }
    }
    setProgressBar(progressBar) {
        this.progressBar = progressBar;
        this.progressBar.setMaxValue(this.samples.length);
    }
    onMotorStart() {
        this.motorOn = true;
        this.updateProgressBarVisibility();
    }
    readSample() {
        if (this.rewinding) {
            // Can't read while rewinding.
            return 0;
        }
        else {
            if (this.frame % this.samplesPerSecond === 0) {
                console.log("Reading tape at " + frameToTimestamp(this.frame, this.samplesPerSecond));
            }
            if (this.progressBar !== undefined &&
                (this.frame % Math.floor(this.samplesPerSecond / 10) === 0 ||
                    this.frame == this.samples.length - 1)) {
                this.progressBar.setValue(this.frame);
            }
            return this.frame < this.samples.length ? this.samples[this.frame++] / 32768 : 0;
        }
    }
    onMotorStop() {
        this.motorOn = false;
        this.updateProgressBarVisibility();
    }
    updateProgressBarVisibility() {
        if (this.progressBar !== undefined) {
            if (this.motorOn || this.rewinding) {
                this.progressBar.show();
            }
            else {
                this.progressBar.hide();
            }
        }
    }
}
/**
 * Implementation of Cassette that reads from our displayed data.
 */
class TapeCassette extends TapeBrowser_Int16Cassette {
    constructor(tape, program) {
        const samples = tape.originalSamples.samplesList[0];
        // Start one second before the official program start, so that the machine
        // can detect the header.
        const begin = program === undefined ? 0 : Math.max(0, program.startFrame - tape.sampleRate);
        // Go until one second after the detected end of our program.
        const end = program === undefined ? samples.length : Math.min(samples.length, program.endFrame + tape.sampleRate);
        super(samples.subarray(begin, end), tape.sampleRate);
    }
}
/**
 * Implementation of Cassette that reads from our high-speed reconstruction.
 */
class ReconstructedCassette extends TapeBrowser_Int16Cassette {
    constructor(samples, sampleRate) {
        super(samples.samplesList[0], sampleRate);
    }
}
/**
 * Class that keeps track of various information about a pane.
 */
class Pane {
    constructor(element) {
        this.element = element;
    }
}
/**
 * UI for browsing a tape interactively.
 */
class TapeBrowser_TapeBrowser {
    constructor(tape, waveforms, originalCanvas, filteredCanvas, lowSpeedCanvas, tapeContents, topData) {
        /**
         * All the panes we created in the upper-right (program, etc.).
         */
        this.panes = [];
        /**
         * Dispatcher for highlight property.
         */
        this.onHighlight = new dist["SimpleEventDispatcher"]();
        /**
         * Dispatcher for selection property.
         */
        this.onSelection = new dist["SimpleEventDispatcher"]();
        /**
         * Dispatcher for the selection being done. Value is the source of the selecting process.
         */
        this.onDoneSelecting = new dist["SimpleEventDispatcher"]();
        this.tape = tape;
        this.waveforms = waveforms;
        this.tapeContents = tapeContents;
        this.topData = topData;
        this.originalWaveformDisplay = new WaveformDisplay_WaveformDisplay(tape.sampleRate);
        clearElement(tapeContents);
        clearElement(topData);
        this.makeOriginalSamplesWaveforms(waveforms);
        this.tape.programs.forEach(program => this.originalWaveformDisplay.addProgram(program));
        this.originalWaveformDisplay.draw();
        // Update left-side panel.
        this.updateTapeContents();
    }
    /**
     * Update the highlighted byte.
     */
    setHighlight(highlight) {
        this.highlight = highlight;
        this.onHighlight.dispatch(this.highlight);
    }
    /**
     * Update the selected byte.
     */
    setSelection(selection) {
        this.selection = selection;
        this.onSelection.dispatch(this.selection);
    }
    /**
     * Called when the user has finished selecting part of the data (releases the mouse button).
     */
    doneSelecting(source) {
        this.onDoneSelecting.dispatch(source);
    }
    /**
     * Fill the parent with the labels and canvases to display the specified waveforms
     * and their labels.
     */
    makeWaveforms(parent, waveformDisplay, showSelectionType, sampleSets) {
        clearElement(parent);
        parent.appendChild(waveformDisplay.makeControls(showSelectionType));
        for (const sampleSet of sampleSets) {
            waveformDisplay.addWaveformAndChrome(sampleSet.label, sampleSet.samples, parent);
        }
        this.onHighlight.subscribe(highlight => waveformDisplay.setHighlight(highlight));
        this.onSelection.subscribe(selection => waveformDisplay.setSelection(selection));
        this.onDoneSelecting.subscribe(source => {
            if (source !== waveformDisplay) {
                waveformDisplay.doneSelecting();
            }
        });
        waveformDisplay.onHighlight.subscribe(highlight => this.setHighlight(highlight));
        waveformDisplay.onSelection.subscribe(selection => this.setSelection(selection));
        waveformDisplay.onDoneSelecting.subscribe(source => this.doneSelecting(source));
        waveformDisplay.zoomToFitAll();
        waveformDisplay.queueDraw();
    }
    /**
     * Make the lower-right pane of original waveforms.
     */
    makeOriginalSamplesWaveforms(waveforms) {
        this.originalWaveformDisplay.addWaveformAnnotations(this.tape.waveformAnnotations);
        this.makeWaveforms(waveforms, this.originalWaveformDisplay, true, [
            {
                label: "Original waveform:",
                samples: this.tape.originalSamples,
            },
            {
                label: "High-pass filtered to get rid of DC:",
                samples: this.tape.filteredSamples,
            },
            {
                label: "Pre-processed for low-speed decoding:",
                samples: this.tape.lowSpeedSamples,
            },
        ]);
    }
    /**
     * Make pane of metadata for a program.
     */
    makeMetadataPane(program, basicPane, systemPane, edtasmPane, onProgramClick) {
        const div = document.createElement("div");
        div.classList.add("metadata");
        div.style.display = "flex";
        const textInfoDiv = document.createElement("div");
        div.appendChild(textInfoDiv);
        const h1 = document.createElement("h1");
        h1.innerText = program instanceof Program_Program
            ? "Track " + program.trackNumber + ", copy " + program.copyNumber
            : "Whole Tape";
        textInfoDiv.appendChild(h1);
        const table = document.createElement("table");
        textInfoDiv.appendChild(table);
        // Add entry with any data cell for value. Returns the key element.
        const addKeyElement = (key, valueElement) => {
            const row = document.createElement("tr");
            const keyElement = document.createElement("td");
            keyElement.classList.add("key");
            keyElement.innerText = key + ":";
            row.appendChild(keyElement);
            row.appendChild(valueElement);
            table.appendChild(row);
            return keyElement;
        };
        // Add entry with text (possibly clickable) for value.
        const addKeyValue = (key, value, click) => {
            const valueElement = document.createElement("td");
            valueElement.classList.add("value");
            valueElement.innerText = value;
            if (click !== undefined) {
                valueElement.classList.add("clickable");
                valueElement.addEventListener("click", click);
            }
            addKeyElement(key, valueElement);
        };
        const addKeyValues = (key, values, click) => {
            const valuesElement = document.createElement("td");
            valuesElement.classList.add("value");
            for (const value of values) {
                const valueElement = document.createElement("span");
                valueElement.innerText = value;
                if (click !== undefined) {
                    valueElement.classList.add("clickable");
                    valueElement.addEventListener("click", () => click(value));
                }
                valuesElement.appendChild(valueElement);
            }
            addKeyElement(key, valuesElement);
        };
        if (program instanceof Program_Program) {
            addKeyValue("Decoder", program.decoder.getName());
        }
        const startFrame = program instanceof Program_Program ? program.startFrame : 0;
        const endFrame = program instanceof Program_Program ? program.endFrame : program.originalSamples.samplesList[0].length;
        addKeyValue("Start time", frameToTimestamp(startFrame, this.tape.sampleRate), () => this.originalWaveformDisplay.zoomToFit(startFrame - 100, startFrame + 100));
        addKeyValue("End time", frameToTimestamp(endFrame, this.tape.sampleRate), () => this.originalWaveformDisplay.zoomToFit(endFrame - 100, endFrame + 100));
        addKeyValue("Duration", frameToTimestamp(endFrame - startFrame, this.tape.sampleRate, true), () => this.originalWaveformDisplay.zoomToFit(startFrame, endFrame));
        if (program instanceof Program_Program) {
            addKeyValues("Download", [".BIN", ".CAS"], (value) => {
                // Download binary.
                const a = document.createElement("a");
                const contents = value === ".BIN" ? program.binary : program.asCasFile();
                const blob = new Blob([contents], { type: "application/octet-stream" });
                a.href = window.URL.createObjectURL(blob);
                a.download = program.getShortLabel().replace(" ", "-") + value.toLowerCase();
                a.click();
            });
            if (basicPane !== undefined) {
                addKeyValue("Type", "Basic program", () => this.showPane(basicPane));
            }
            else if (systemPane !== undefined) {
                addKeyValue("Type", "System program" + (systemPane.programName ? " (" + systemPane.programName + ")" : ""), () => this.showPane(systemPane));
            }
            else if (edtasmPane !== undefined) {
                addKeyValue("Type", "Assembly program" + (edtasmPane.programName ? " (" + edtasmPane.programName + ")" : ""), () => this.showPane(edtasmPane));
            }
            else {
                addKeyValue("Type", "Unknown");
            }
        }
        // Add editable fields.
        if (program instanceof Program_Program) {
            const td = document.createElement("td");
            td.classList.add("value");
            const input = document.createElement("input");
            input.type = "text";
            input.classList.add("name");
            program.onName.subscribe(name => input.value = name);
            input.value = program.name;
            // Spec says "off", but Chrome ignores that, so use "chrome-off".
            input.autocomplete = "chrome-off";
            td.appendChild(input);
            addKeyElement("Name", td);
            input.addEventListener("input", event => {
                program.setName(input.value);
                this.tape.saveUserData();
            });
        }
        {
            // Show note.
            const td = document.createElement("td");
            td.classList.add("value");
            const input = document.createElement("textarea");
            input.classList.add("notes");
            input.rows = 5;
            program.onNotes.subscribe(notes => input.value = notes);
            input.value = program.notes;
            // Spec says "off", but Chrome ignores that, so use "chrome-off".
            input.autocomplete = "chrome-off";
            td.appendChild(input);
            const keyElement = addKeyElement("Notes", td);
            keyElement.classList.add("top");
            input.addEventListener("input", event => {
                program.setNotes(input.value);
                this.tape.saveUserData();
            });
        }
        if (program instanceof Program_Program) {
            // Add bit errors.
            let count = 1;
            for (const bitData of program.bitData) {
                if (bitData.bitType === BitType.BAD) {
                    addKeyValue("Bit error " + count++, frameToTimestamp(bitData.startFrame, this.tape.sampleRate), () => this.originalWaveformDisplay.zoomToBitData(bitData));
                }
            }
            // Add screenshot.
            const screenshotDiv = document.createElement("div");
            screenshotDiv.style.marginLeft = "20pt";
            div.appendChild(screenshotDiv);
            const screenshotScreen = new CanvasScreen_CanvasScreen(screenshotDiv, false);
            screenshotScreen.displayScreenshot(program.screenshot);
            program.onScreenshot.subscribe(screenshot => {
                screenshotScreen.displayScreenshot(screenshot);
            });
        }
        else {
            const screenshotsDiv = document.createElement("div");
            div.appendChild(screenshotsDiv);
            for (const subprogram of program.programs) {
                const screenshotDiv = document.createElement("div");
                screenshotDiv.style.marginLeft = "20pt";
                screenshotDiv.style.marginBottom = "20pt";
                screenshotDiv.style.float = "left";
                if (onProgramClick !== undefined) {
                    screenshotDiv.style.cursor = "pointer";
                    screenshotDiv.addEventListener("click", () => onProgramClick(subprogram));
                }
                screenshotsDiv.appendChild(screenshotDiv);
                const screenshotScreen = new CanvasScreen_CanvasScreen(screenshotDiv, true);
                screenshotScreen.getNode().classList.add("thumbnail");
                const updateScreenshot = function (screenshot) {
                    screenshotScreen.displayScreenshot(screenshot);
                    screenshotDiv.style.display = screenshot === "" ? "none" : "block";
                };
                updateScreenshot(subprogram.screenshot);
                subprogram.onScreenshot.subscribe(screenshot => {
                    updateScreenshot(screenshot);
                });
            }
        }
        return new Pane(div);
    }
    makeBinaryPane(program) {
        const div = document.createElement("div");
        div.classList.add("program");
        const hexHighlighter = new Highlighter_Highlighter(this, program, div);
        const asciiHighlighter = new Highlighter_Highlighter(this, program, div);
        const [hexElements, asciiElements] = Hexdump_create(program.binary, div);
        hexHighlighter.addHighlightables(hexElements);
        asciiHighlighter.addHighlightables(asciiElements);
        this.onHighlight.subscribe(highlight => {
            hexHighlighter.highlight(highlight, program, Hexdump_highlightClassName);
            asciiHighlighter.highlight(highlight, program, Hexdump_highlightClassName);
        });
        this.onSelection.subscribe(selection => {
            hexHighlighter.select(selection, program, Hexdump_selectClassName);
            asciiHighlighter.select(selection, program, Hexdump_selectClassName);
        });
        this.onDoneSelecting.subscribe(source => {
            if (source !== hexHighlighter && source !== asciiHighlighter) {
                hexHighlighter.doneSelecting();
                asciiHighlighter.doneSelecting();
            }
        });
        let pane = new Pane(div);
        pane.didShow = () => {
            hexHighlighter.didShow();
            asciiHighlighter.didShow();
        };
        return pane;
    }
    /**
     * Make the pane of the audio sample we reconstruct from the bits.
     */
    makeReconstructedPane(samples) {
        const div = document.createElement("div");
        div.classList.add("reconstructed_waveform");
        this.makeWaveforms(div, new WaveformDisplay_WaveformDisplay(this.tape.sampleRate), false, [
            {
                label: "Reconstructed low-speed waveform:",
                samples: samples,
            }
        ]);
        return new Pane(div);
    }
    makeBasicPane(program) {
        const div = document.createElement("div");
        div.classList.add("program");
        const highlightables = toDiv(fromTokenized(program.binary), div);
        const highlighter = new Highlighter_Highlighter(this, program, div);
        highlighter.addHighlightables(highlightables);
        this.onHighlight.subscribe(highlight => {
            highlighter.highlight(highlight, program, highlightClassName);
        });
        this.onSelection.subscribe(selection => {
            highlighter.select(selection, program, selectClassName);
        });
        this.onDoneSelecting.subscribe(source => {
            if (source !== highlighter) {
                highlighter.doneSelecting();
            }
        });
        let pane = new Pane(div);
        pane.didShow = () => {
            highlighter.didShow();
        };
        return pane;
    }
    makeSystemPane(program) {
        const div = document.createElement("div");
        div.classList.add("program");
        div.classList.add("system-program");
        const systemProgram = new SystemProgram_SystemProgram(program.binary);
        const [highlightables, annotations] = SystemProgramRender_toDiv(systemProgram, div);
        const highlighter = new Highlighter_Highlighter(this, program, div);
        highlighter.addHighlightables(highlightables);
        if (program.annotations === undefined) {
            program.annotations = [];
        }
        program.annotations.push(...systemProgram.annotations, ...annotations);
        this.onHighlight.subscribe(highlight => {
            highlighter.highlight(highlight, program, SystemProgramRender_highlightClassName);
        });
        this.onSelection.subscribe(selection => {
            highlighter.select(selection, program, SystemProgramRender_selectClassName);
        });
        this.onDoneSelecting.subscribe(source => {
            if (source !== highlighter) {
                highlighter.doneSelecting();
            }
        });
        let pane = new Pane(div);
        if (systemProgram.filename !== "") {
            pane.programName = systemProgram.filename;
        }
        pane.didShow = () => {
            highlighter.didShow();
        };
        return pane;
    }
    makeEdtasmPane(program) {
        const div = document.createElement("div");
        div.classList.add("program");
        const [name, elements] = decodeEdtasm(program.binary, div);
        const highlighter = new Highlighter_Highlighter(this, program, div);
        highlighter.addHighlightables(elements);
        this.onHighlight.subscribe(highlight => {
            highlighter.highlight(highlight, program, Edtasm_highlightClassName);
        });
        this.onSelection.subscribe(selection => {
            highlighter.select(selection, program, Edtasm_selectClassName);
        });
        this.onDoneSelecting.subscribe(source => {
            if (source !== highlighter) {
                highlighter.doneSelecting();
            }
        });
        const pane = new Pane(div);
        pane.programName = name;
        pane.didShow = () => {
            highlighter.didShow();
        };
        return pane;
    }
    makeEmulatorPane(program, cassette) {
        const div = document.createElement("div");
        const screenDiv = document.createElement("div");
        div.appendChild(screenDiv);
        const screen = new CanvasScreen_CanvasScreen(screenDiv, false);
        const trs80 = new Trs80_Trs80(screen, cassette);
        const hardwareSettingsPanel = new SettingsPanel(screen.getNode(), trs80, PanelType.HARDWARE);
        const viewPanel = new SettingsPanel(screen.getNode(), trs80, PanelType.VIEW);
        const controlPanel = new ControlPanel_ControlPanel(screen.getNode());
        controlPanel.addResetButton(() => trs80.reset());
        controlPanel.addTapeRewindButton(() => {
            cassette.rewind();
        });
        if (program !== undefined) {
            // TODO: Could add screenshot to tape.
            controlPanel.addScreenshotButton(() => {
                const screenshot = trs80.getScreenshot();
                program.setScreenshot(screenshot);
                this.tape.saveUserData();
            });
        }
        controlPanel.addSettingsButton(hardwareSettingsPanel);
        controlPanel.addSettingsButton(viewPanel);
        const progressBar = new ProgressBar(screen.getNode());
        cassette.setProgressBar(progressBar);
        trs80.reset();
        let pane = new Pane(div);
        pane.didShow = () => trs80.start();
        pane.didHide = () => trs80.stop();
        return pane;
    }
    /**
     * Show a particular pane and hide all others.
     */
    showPane(pane) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        // Hide all others.
        for (const otherPane of this.panes) {
            if (otherPane !== pane) {
                (_b = (_a = otherPane).willHide) === null || _b === void 0 ? void 0 : _b.call(_a);
                otherPane.element.classList.add("hidden");
                (_c = otherPane.row) === null || _c === void 0 ? void 0 : _c.classList.remove("selected");
                (_e = (_d = otherPane).didHide) === null || _e === void 0 ? void 0 : _e.call(_d);
            }
        }
        // Show this one.
        (_g = (_f = pane).willShow) === null || _g === void 0 ? void 0 : _g.call(_f);
        pane.element.classList.remove("hidden");
        (_h = pane.row) === null || _h === void 0 ? void 0 : _h.classList.add("selected");
        (_k = (_j = pane).didShow) === null || _k === void 0 ? void 0 : _k.call(_j);
    }
    /**
     * Create the panes and the table of contents for them on the left.
     */
    updateTapeContents() {
        var _a;
        // Add a new section that we can style all at once.
        const addSection = () => {
            const sectionDiv = document.createElement("div");
            this.tapeContents.appendChild(sectionDiv);
            return sectionDiv;
        };
        let sectionDiv = addSection();
        // Add a row to the table of contents. Returns the row div.
        const addRow = (text, onClick) => {
            const rowDiv = document.createElement("div");
            rowDiv.classList.add("tape_contents_row");
            rowDiv.innerText = text;
            if (onClick !== undefined) {
                rowDiv.classList.add("selectable_row");
                rowDiv.onclick = onClick;
            }
            sectionDiv.appendChild(rowDiv);
            return rowDiv;
        };
        // Show the name of the whole tape.
        const title = addRow(this.tape.name);
        title.classList.add("tape_title");
        // Create panes for each program.
        let previousTrackNumber = -1;
        let firstCopyOfTrack = undefined;
        // Add a pane to the top-right, register it, and add it to table of contents.
        const addPane = (label, pane) => {
            pane.element.classList.add("pane");
            pane.element.classList.add("hidden");
            this.topData.appendChild(pane.element);
            this.panes.push(pane);
            pane.row = addRow("    " + label, () => {
                this.showPane(pane);
            });
        };
        // Map from program to action when its screenshot is clicked.
        const screenshotClickAction = new WeakMap();
        // Header for tape.
        const row = addRow("Whole tape");
        row.classList.add("program_title");
        let metadataLabel = frameToTimestamp(0, this.tape.sampleRate, true) + " to " +
            frameToTimestamp(this.tape.originalSamples.samplesList[0].length, this.tape.sampleRate, true);
        addPane(metadataLabel, this.makeMetadataPane(this.tape, undefined, undefined, undefined, (program) => {
            var _a;
            (_a = screenshotClickAction.get(program)) === null || _a === void 0 ? void 0 : _a();
        }));
        addPane("Emulator", this.makeEmulatorPane(undefined, new TapeCassette(this.tape, undefined)));
        // Section for each program.
        for (const program of this.tape.programs) {
            let duplicateCopy = false;
            sectionDiv = addSection();
            // Header for program.
            const row = addRow(program.name || program.getLabel());
            program.onName.subscribe(name => row.innerText = program.name || program.getLabel());
            row.classList.add("program_title");
            // Dividing line for new tracks.
            if (program.trackNumber !== previousTrackNumber) {
                row.classList.add("new_track");
                previousTrackNumber = program.trackNumber;
                firstCopyOfTrack = program;
            }
            else if (firstCopyOfTrack !== undefined) {
                // Non-first copies.
                if (program.sameBinaryAs(firstCopyOfTrack)) {
                    sectionDiv.classList.add("duplicate_copy");
                    duplicateCopy = true;
                }
            }
            // Make these panes here so they're accessible from the metadata page.
            const basicPane = program.isBasicProgram() ? this.makeBasicPane(program) : undefined;
            const systemPane = program.isSystemProgram() ? this.makeSystemPane(program) : undefined;
            const edtasmPane = program.isEdtasmProgram() ? this.makeEdtasmPane(program) : undefined;
            // Metadata pane.
            let metadataLabel = frameToTimestamp(program.startFrame, this.tape.sampleRate, true) + " to " +
                frameToTimestamp(program.endFrame, this.tape.sampleRate, true) + " (" +
                frameToTimestamp(program.endFrame - program.startFrame, this.tape.sampleRate, true) + ")";
            const bitErrorCount = program.countBitErrors();
            if (bitErrorCount > 0) {
                metadataLabel += ", " + bitErrorCount + " error" + (bitErrorCount === 1 ? "" : "s");
            }
            let metadataPane = this.makeMetadataPane(program, basicPane, systemPane, edtasmPane, undefined);
            addPane(metadataLabel, metadataPane);
            screenshotClickAction.set(program, () => {
                var _a;
                this.showPane(metadataPane);
                (_a = metadataPane.row) === null || _a === void 0 ? void 0 : _a.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                });
            });
            // Make the various panes.
            addPane("Binary" + (duplicateCopy ? " (same as copy " + ((_a = firstCopyOfTrack) === null || _a === void 0 ? void 0 : _a.copyNumber) + ")" : ""), this.makeBinaryPane(program));
            if (program.reconstructedSamples !== undefined) {
                addPane("Reconstructed", this.makeReconstructedPane(program.reconstructedSamples));
            }
            if (basicPane !== undefined) {
                addPane("Basic program", basicPane);
            }
            if (systemPane !== undefined) {
                addPane("System program" + (systemPane.programName ? " (" + systemPane.programName + ")" : ""), systemPane);
            }
            if (basicPane !== undefined || systemPane !== undefined) {
                let emulatorLabel = "Emulator (original, " + (program.decoder.isHighSpeed() ? "high" : "low") + " speed)";
                addPane(emulatorLabel, this.makeEmulatorPane(program, new TapeCassette(this.tape, program)));
                if (program.reconstructedSamples !== undefined) {
                    addPane("Emulator (reconstructed, low speed)", this.makeEmulatorPane(program, new ReconstructedCassette(program.reconstructedSamples, this.tape.sampleRate)));
                }
            }
            if (edtasmPane !== undefined) {
                addPane("Assembly" + (edtasmPane.programName ? " (" + edtasmPane.programName + ")" : ""), edtasmPane);
            }
        }
        // Show the first pane.
        if (this.panes.length > 0) {
            this.showPane(this.panes[0]);
        }
    }
}

// CONCATENATED MODULE: ./src/Uploader.ts
// Handles uploading WAV files and decoding them.





class Uploader_Uploader {
    /**
     * @param dropZone any element where files can be dropped.
     * @param inputElement file type input element.
     * @param dropS3 buttons to upload from S3.
     * @param dropProgress progress bar for loading large files.
     * @param handleAudioBuffer callback with AudioBuffer parameter.
     */
    constructor(dropZone, inputElement, dropS3, dropProgress, handleAudioBuffer) {
        this.uploadInput = inputElement;
        this.handleAudioBuffer = handleAudioBuffer;
        this.progressBar = dropProgress;
        dropZone.ondrop = (ev) => this.dropHandler(ev);
        dropZone.ondragover = (ev) => {
            dropZone.classList.add("hover");
            // Prevent default behavior (prevent file from being opened).
            ev.preventDefault();
        };
        dropZone.ondragleave = () => dropZone.classList.remove("hover");
        inputElement.onchange = () => {
            if (inputElement.files) {
                const file = inputElement.files[0];
                if (file) {
                    this.handleDroppedFile(file);
                }
            }
        };
        inputElement.onprogress = (event) => this.showProgress(event);
        dropS3.forEach((node) => {
            const button = node;
            button.onclick = () => {
                const url = button.getAttribute("data-src");
                const request = new XMLHttpRequest();
                request.open("GET", url, true);
                request.responseType = "arraybuffer";
                request.onload = () => this.handleArrayBuffer(url, request.response);
                request.onprogress = (event) => this.showProgress(event);
                // For testing progress bar only:
                /// request.setRequestHeader("Cache-Control", "no-cache, no-store, must-revalidate");
                request.send();
            };
        });
    }
    reset() {
        this.progressBar.classList.add("hidden");
        this.uploadInput.value = "";
    }
    handleDroppedFile(file) {
        // We could use file.arrayBuffer() here, but as of writing it's buggy
        // in Firefox 70. https://bugzilla.mozilla.org/show_bug.cgi?id=1585284
        const fileReader = new FileReader();
        fileReader.addEventListener("loadend", () => {
            if (fileReader.result instanceof ArrayBuffer) {
                this.handleArrayBuffer(file.name, fileReader.result);
            }
            else {
                console.log("Error: Unexpected type for fileReader.result: " +
                    fileReader.result);
            }
        });
        fileReader.addEventListener("progress", (event) => this.showProgress(event));
        fileReader.readAsArrayBuffer(file);
    }
    showProgress(event) {
        this.progressBar.classList.remove("hidden");
        this.progressBar.value = event.loaded;
        this.progressBar.max = event.total;
    }
    handleArrayBuffer(pathname, arrayBuffer) {
        let audioFile;
        if (pathname.toLowerCase().endsWith(".cas")) {
            let bytes = new Uint8Array(arrayBuffer);
            const highSpeed = bytes.length > 0 && bytes[0] === 0x55;
            const audio = highSpeed ? encodeHighSpeed(bytes, DEFAULT_SAMPLE_RATE) : encodeLowSpeed(bytes, DEFAULT_SAMPLE_RATE);
            audioFile = new AudioFile(DEFAULT_SAMPLE_RATE, audio);
        }
        else if (pathname.toLowerCase().endsWith(".bas")) {
            audioFile = new AudioFile(DEFAULT_SAMPLE_RATE, encodeLowSpeed(wrapLowSpeed(wrapBasic(new Uint8Array(arrayBuffer))), DEFAULT_SAMPLE_RATE));
        }
        else {
            audioFile = readWavFile(arrayBuffer);
        }
        this.handleAudioBuffer(pathname, audioFile);
    }
    dropHandler(ev) {
        // Prevent default behavior (Prevent file from being opened)
        ev.preventDefault();
        if (ev.dataTransfer) {
            if (ev.dataTransfer.items) {
                // Use DataTransferItemList interface to access the files.
                for (const item of ev.dataTransfer.items) {
                    // If dropped items aren't files, reject them
                    if (item.kind === "file") {
                        const file = item.getAsFile();
                        if (file) {
                            this.handleDroppedFile(file);
                        }
                    }
                }
            }
            else {
                // Use DataTransfer interface to access the files.
                for (const file of ev.dataTransfer.files) {
                    this.handleDroppedFile(file);
                }
            }
        }
    }
}

// CONCATENATED MODULE: ./node_modules/split.js/dist/split.es.js
// The programming goals of Split.js are to deliver readable, understandable and
// maintainable code, while at the same time manually optimizing for tiny minified file size,
// browser compatibility without additional requirements, graceful fallback (IE8 is supported)
// and very few assumptions about the user's page layout.
var global = window;
var split_es_document = global.document;

// Save a couple long function names that are used frequently.
// This optimization saves around 400 bytes.
var addEventListener = 'addEventListener';
var removeEventListener = 'removeEventListener';
var getBoundingClientRect = 'getBoundingClientRect';
var gutterStartDragging = '_a';
var aGutterSize = '_b';
var bGutterSize = '_c';
var HORIZONTAL = 'horizontal';
var NOOP = function () { return false; };

// Figure out if we're in IE8 or not. IE8 will still render correctly,
// but will be static instead of draggable.
var isIE8 = global.attachEvent && !global[addEventListener];

// Helper function determines which prefixes of CSS calc we need.
// We only need to do this once on startup, when this anonymous function is called.
//
// Tests -webkit, -moz and -o prefixes. Modified from StackOverflow:
// http://stackoverflow.com/questions/16625140/js-feature-detection-to-detect-the-usage-of-webkit-calc-over-calc/16625167#16625167
var calc = (['', '-webkit-', '-moz-', '-o-']
    .filter(function (prefix) {
        var el = split_es_document.createElement('div');
        el.style.cssText = "width:" + prefix + "calc(9px)";

        return !!el.style.length
    })
    .shift()) + "calc";

// Helper function checks if its argument is a string-like type
var isString = function (v) { return typeof v === 'string' || v instanceof String; };

// Helper function allows elements and string selectors to be used
// interchangeably. In either case an element is returned. This allows us to
// do `Split([elem1, elem2])` as well as `Split(['#id1', '#id2'])`.
var elementOrSelector = function (el) {
    if (isString(el)) {
        var ele = split_es_document.querySelector(el);
        if (!ele) {
            throw new Error(("Selector " + el + " did not match a DOM element"))
        }
        return ele
    }

    return el
};

// Helper function gets a property from the properties object, with a default fallback
var getOption = function (options, propName, def) {
    var value = options[propName];
    if (value !== undefined) {
        return value
    }
    return def
};

var getGutterSize = function (gutterSize, isFirst, isLast, gutterAlign) {
    if (isFirst) {
        if (gutterAlign === 'end') {
            return 0
        }
        if (gutterAlign === 'center') {
            return gutterSize / 2
        }
    } else if (isLast) {
        if (gutterAlign === 'start') {
            return 0
        }
        if (gutterAlign === 'center') {
            return gutterSize / 2
        }
    }

    return gutterSize
};

// Default options
var defaultGutterFn = function (i, gutterDirection) {
    var gut = split_es_document.createElement('div');
    gut.className = "gutter gutter-" + gutterDirection;
    return gut
};

var defaultElementStyleFn = function (dim, size, gutSize) {
    var style = {};

    if (!isString(size)) {
        if (!isIE8) {
            style[dim] = calc + "(" + size + "% - " + gutSize + "px)";
        } else {
            style[dim] = size + "%";
        }
    } else {
        style[dim] = size;
    }

    return style
};

var defaultGutterStyleFn = function (dim, gutSize) {
    var obj;

    return (( obj = {}, obj[dim] = (gutSize + "px"), obj ));
};

// The main function to initialize a split. Split.js thinks about each pair
// of elements as an independant pair. Dragging the gutter between two elements
// only changes the dimensions of elements in that pair. This is key to understanding
// how the following functions operate, since each function is bound to a pair.
//
// A pair object is shaped like this:
//
// {
//     a: DOM element,
//     b: DOM element,
//     aMin: Number,
//     bMin: Number,
//     dragging: Boolean,
//     parent: DOM element,
//     direction: 'horizontal' | 'vertical'
// }
//
// The basic sequence:
//
// 1. Set defaults to something sane. `options` doesn't have to be passed at all.
// 2. Initialize a bunch of strings based on the direction we're splitting.
//    A lot of the behavior in the rest of the library is paramatized down to
//    rely on CSS strings and classes.
// 3. Define the dragging helper functions, and a few helpers to go with them.
// 4. Loop through the elements while pairing them off. Every pair gets an
//    `pair` object and a gutter.
// 5. Actually size the pair elements, insert gutters and attach event listeners.
var Split = function (idsOption, options) {
    if ( options === void 0 ) options = {};

    var ids = idsOption;
    var dimension;
    var clientAxis;
    var position;
    var positionEnd;
    var clientSize;
    var elements;

    // Allow HTMLCollection to be used as an argument when supported
    if (Array.from) {
        ids = Array.from(ids);
    }

    // All DOM elements in the split should have a common parent. We can grab
    // the first elements parent and hope users read the docs because the
    // behavior will be whacky otherwise.
    var firstElement = elementOrSelector(ids[0]);
    var parent = firstElement.parentNode;
    var parentStyle = getComputedStyle ? getComputedStyle(parent) : null;
    var parentFlexDirection = parentStyle ? parentStyle.flexDirection : null;

    // Set default options.sizes to equal percentages of the parent element.
    var sizes = getOption(options, 'sizes') || ids.map(function () { return 100 / ids.length; });

    // Standardize minSize to an array if it isn't already. This allows minSize
    // to be passed as a number.
    var minSize = getOption(options, 'minSize', 100);
    var minSizes = Array.isArray(minSize) ? minSize : ids.map(function () { return minSize; });

    // Get other options
    var expandToMin = getOption(options, 'expandToMin', false);
    var gutterSize = getOption(options, 'gutterSize', 10);
    var gutterAlign = getOption(options, 'gutterAlign', 'center');
    var snapOffset = getOption(options, 'snapOffset', 30);
    var dragInterval = getOption(options, 'dragInterval', 1);
    var direction = getOption(options, 'direction', HORIZONTAL);
    var cursor = getOption(
        options,
        'cursor',
        direction === HORIZONTAL ? 'col-resize' : 'row-resize'
    );
    var gutter = getOption(options, 'gutter', defaultGutterFn);
    var elementStyle = getOption(
        options,
        'elementStyle',
        defaultElementStyleFn
    );
    var gutterStyle = getOption(options, 'gutterStyle', defaultGutterStyleFn);

    // 2. Initialize a bunch of strings based on the direction we're splitting.
    // A lot of the behavior in the rest of the library is paramatized down to
    // rely on CSS strings and classes.
    if (direction === HORIZONTAL) {
        dimension = 'width';
        clientAxis = 'clientX';
        position = 'left';
        positionEnd = 'right';
        clientSize = 'clientWidth';
    } else if (direction === 'vertical') {
        dimension = 'height';
        clientAxis = 'clientY';
        position = 'top';
        positionEnd = 'bottom';
        clientSize = 'clientHeight';
    }

    // 3. Define the dragging helper functions, and a few helpers to go with them.
    // Each helper is bound to a pair object that contains its metadata. This
    // also makes it easy to store references to listeners that that will be
    // added and removed.
    //
    // Even though there are no other functions contained in them, aliasing
    // this to self saves 50 bytes or so since it's used so frequently.
    //
    // The pair object saves metadata like dragging state, position and
    // event listener references.

    function setElementSize(el, size, gutSize, i) {
        // Split.js allows setting sizes via numbers (ideally), or if you must,
        // by string, like '300px'. This is less than ideal, because it breaks
        // the fluid layout that `calc(% - px)` provides. You're on your own if you do that,
        // make sure you calculate the gutter size by hand.
        var style = elementStyle(dimension, size, gutSize, i);

        Object.keys(style).forEach(function (prop) {
            // eslint-disable-next-line no-param-reassign
            el.style[prop] = style[prop];
        });
    }

    function setGutterSize(gutterElement, gutSize, i) {
        var style = gutterStyle(dimension, gutSize, i);

        Object.keys(style).forEach(function (prop) {
            // eslint-disable-next-line no-param-reassign
            gutterElement.style[prop] = style[prop];
        });
    }

    function getSizes() {
        return elements.map(function (element) { return element.size; })
    }

    // Supports touch events, but not multitouch, so only the first
    // finger `touches[0]` is counted.
    function getMousePosition(e) {
        if ('touches' in e) { return e.touches[0][clientAxis] }
        return e[clientAxis]
    }

    // Actually adjust the size of elements `a` and `b` to `offset` while dragging.
    // calc is used to allow calc(percentage + gutterpx) on the whole split instance,
    // which allows the viewport to be resized without additional logic.
    // Element a's size is the same as offset. b's size is total size - a size.
    // Both sizes are calculated from the initial parent percentage,
    // then the gutter size is subtracted.
    function adjust(offset) {
        var a = elements[this.a];
        var b = elements[this.b];
        var percentage = a.size + b.size;

        a.size = (offset / this.size) * percentage;
        b.size = percentage - (offset / this.size) * percentage;

        setElementSize(a.element, a.size, this[aGutterSize], a.i);
        setElementSize(b.element, b.size, this[bGutterSize], b.i);
    }

    // drag, where all the magic happens. The logic is really quite simple:
    //
    // 1. Ignore if the pair is not dragging.
    // 2. Get the offset of the event.
    // 3. Snap offset to min if within snappable range (within min + snapOffset).
    // 4. Actually adjust each element in the pair to offset.
    //
    // ---------------------------------------------------------------------
    // |    | <- a.minSize               ||              b.minSize -> |    |
    // |    |  | <- this.snapOffset      ||     this.snapOffset -> |  |    |
    // |    |  |                         ||                        |  |    |
    // |    |  |                         ||                        |  |    |
    // ---------------------------------------------------------------------
    // | <- this.start                                        this.size -> |
    function drag(e) {
        var offset;
        var a = elements[this.a];
        var b = elements[this.b];

        if (!this.dragging) { return }

        // Get the offset of the event from the first side of the
        // pair `this.start`. Then offset by the initial position of the
        // mouse compared to the gutter size.
        offset =
            getMousePosition(e) -
            this.start +
            (this[aGutterSize] - this.dragOffset);

        if (dragInterval > 1) {
            offset = Math.round(offset / dragInterval) * dragInterval;
        }

        // If within snapOffset of min or max, set offset to min or max.
        // snapOffset buffers a.minSize and b.minSize, so logic is opposite for both.
        // Include the appropriate gutter sizes to prevent overflows.
        if (offset <= a.minSize + snapOffset + this[aGutterSize]) {
            offset = a.minSize + this[aGutterSize];
        } else if (
            offset >=
            this.size - (b.minSize + snapOffset + this[bGutterSize])
        ) {
            offset = this.size - (b.minSize + this[bGutterSize]);
        }

        // Actually adjust the size.
        adjust.call(this, offset);

        // Call the drag callback continously. Don't do anything too intensive
        // in this callback.
        getOption(options, 'onDrag', NOOP)();
    }

    // Cache some important sizes when drag starts, so we don't have to do that
    // continously:
    //
    // `size`: The total size of the pair. First + second + first gutter + second gutter.
    // `start`: The leading side of the first element.
    //
    // ------------------------------------------------
    // |      aGutterSize -> |||                      |
    // |                     |||                      |
    // |                     |||                      |
    // |                     ||| <- bGutterSize       |
    // ------------------------------------------------
    // | <- start                             size -> |
    function calculateSizes() {
        // Figure out the parent size minus padding.
        var a = elements[this.a].element;
        var b = elements[this.b].element;

        var aBounds = a[getBoundingClientRect]();
        var bBounds = b[getBoundingClientRect]();

        this.size =
            aBounds[dimension] +
            bBounds[dimension] +
            this[aGutterSize] +
            this[bGutterSize];
        this.start = aBounds[position];
        this.end = aBounds[positionEnd];
    }

    function innerSize(element) {
        // Return nothing if getComputedStyle is not supported (< IE9)
        // Or if parent element has no layout yet
        if (!getComputedStyle) { return null }

        var computedStyle = getComputedStyle(element);

        if (!computedStyle) { return null }

        var size = element[clientSize];

        if (size === 0) { return null }

        if (direction === HORIZONTAL) {
            size -=
                parseFloat(computedStyle.paddingLeft) +
                parseFloat(computedStyle.paddingRight);
        } else {
            size -=
                parseFloat(computedStyle.paddingTop) +
                parseFloat(computedStyle.paddingBottom);
        }

        return size
    }

    // When specifying percentage sizes that are less than the computed
    // size of the element minus the gutter, the lesser percentages must be increased
    // (and decreased from the other elements) to make space for the pixels
    // subtracted by the gutters.
    function trimToMin(sizesToTrim) {
        // Try to get inner size of parent element.
        // If it's no supported, return original sizes.
        var parentSize = innerSize(parent);
        if (parentSize === null) {
            return sizesToTrim
        }

        if (minSizes.reduce(function (a, b) { return a + b; }, 0) > parentSize) {
            return sizesToTrim
        }

        // Keep track of the excess pixels, the amount of pixels over the desired percentage
        // Also keep track of the elements with pixels to spare, to decrease after if needed
        var excessPixels = 0;
        var toSpare = [];

        var pixelSizes = sizesToTrim.map(function (size, i) {
            // Convert requested percentages to pixel sizes
            var pixelSize = (parentSize * size) / 100;
            var elementGutterSize = getGutterSize(
                gutterSize,
                i === 0,
                i === sizesToTrim.length - 1,
                gutterAlign
            );
            var elementMinSize = minSizes[i] + elementGutterSize;

            // If element is too smal, increase excess pixels by the difference
            // and mark that it has no pixels to spare
            if (pixelSize < elementMinSize) {
                excessPixels += elementMinSize - pixelSize;
                toSpare.push(0);
                return elementMinSize
            }

            // Otherwise, mark the pixels it has to spare and return it's original size
            toSpare.push(pixelSize - elementMinSize);
            return pixelSize
        });

        // If nothing was adjusted, return the original sizes
        if (excessPixels === 0) {
            return sizesToTrim
        }

        return pixelSizes.map(function (pixelSize, i) {
            var newPixelSize = pixelSize;

            // While there's still pixels to take, and there's enough pixels to spare,
            // take as many as possible up to the total excess pixels
            if (excessPixels > 0 && toSpare[i] - excessPixels > 0) {
                var takenPixels = Math.min(
                    excessPixels,
                    toSpare[i] - excessPixels
                );

                // Subtract the amount taken for the next iteration
                excessPixels -= takenPixels;
                newPixelSize = pixelSize - takenPixels;
            }

            // Return the pixel size adjusted as a percentage
            return (newPixelSize / parentSize) * 100
        })
    }

    // stopDragging is very similar to startDragging in reverse.
    function stopDragging() {
        var self = this;
        var a = elements[self.a].element;
        var b = elements[self.b].element;

        if (self.dragging) {
            getOption(options, 'onDragEnd', NOOP)(getSizes());
        }

        self.dragging = false;

        // Remove the stored event listeners. This is why we store them.
        global[removeEventListener]('mouseup', self.stop);
        global[removeEventListener]('touchend', self.stop);
        global[removeEventListener]('touchcancel', self.stop);
        global[removeEventListener]('mousemove', self.move);
        global[removeEventListener]('touchmove', self.move);

        // Clear bound function references
        self.stop = null;
        self.move = null;

        a[removeEventListener]('selectstart', NOOP);
        a[removeEventListener]('dragstart', NOOP);
        b[removeEventListener]('selectstart', NOOP);
        b[removeEventListener]('dragstart', NOOP);

        a.style.userSelect = '';
        a.style.webkitUserSelect = '';
        a.style.MozUserSelect = '';
        a.style.pointerEvents = '';

        b.style.userSelect = '';
        b.style.webkitUserSelect = '';
        b.style.MozUserSelect = '';
        b.style.pointerEvents = '';

        self.gutter.style.cursor = '';
        self.parent.style.cursor = '';
        split_es_document.body.style.cursor = '';
    }

    // startDragging calls `calculateSizes` to store the inital size in the pair object.
    // It also adds event listeners for mouse/touch events,
    // and prevents selection while dragging so avoid the selecting text.
    function startDragging(e) {
        // Right-clicking can't start dragging.
        if ('button' in e && e.button !== 0) {
            return
        }

        // Alias frequently used variables to save space. 200 bytes.
        var self = this;
        var a = elements[self.a].element;
        var b = elements[self.b].element;

        // Call the onDragStart callback.
        if (!self.dragging) {
            getOption(options, 'onDragStart', NOOP)(getSizes());
        }

        // Don't actually drag the element. We emulate that in the drag function.
        e.preventDefault();

        // Set the dragging property of the pair object.
        self.dragging = true;

        // Create two event listeners bound to the same pair object and store
        // them in the pair object.
        self.move = drag.bind(self);
        self.stop = stopDragging.bind(self);

        // All the binding. `window` gets the stop events in case we drag out of the elements.
        global[addEventListener]('mouseup', self.stop);
        global[addEventListener]('touchend', self.stop);
        global[addEventListener]('touchcancel', self.stop);
        global[addEventListener]('mousemove', self.move);
        global[addEventListener]('touchmove', self.move);

        // Disable selection. Disable!
        a[addEventListener]('selectstart', NOOP);
        a[addEventListener]('dragstart', NOOP);
        b[addEventListener]('selectstart', NOOP);
        b[addEventListener]('dragstart', NOOP);

        a.style.userSelect = 'none';
        a.style.webkitUserSelect = 'none';
        a.style.MozUserSelect = 'none';
        a.style.pointerEvents = 'none';

        b.style.userSelect = 'none';
        b.style.webkitUserSelect = 'none';
        b.style.MozUserSelect = 'none';
        b.style.pointerEvents = 'none';

        // Set the cursor at multiple levels
        self.gutter.style.cursor = cursor;
        self.parent.style.cursor = cursor;
        split_es_document.body.style.cursor = cursor;

        // Cache the initial sizes of the pair.
        calculateSizes.call(self);

        // Determine the position of the mouse compared to the gutter
        self.dragOffset = getMousePosition(e) - self.end;
    }

    // adjust sizes to ensure percentage is within min size and gutter.
    sizes = trimToMin(sizes);

    // 5. Create pair and element objects. Each pair has an index reference to
    // elements `a` and `b` of the pair (first and second elements).
    // Loop through the elements while pairing them off. Every pair gets a
    // `pair` object and a gutter.
    //
    // Basic logic:
    //
    // - Starting with the second element `i > 0`, create `pair` objects with
    //   `a = i - 1` and `b = i`
    // - Set gutter sizes based on the _pair_ being first/last. The first and last
    //   pair have gutterSize / 2, since they only have one half gutter, and not two.
    // - Create gutter elements and add event listeners.
    // - Set the size of the elements, minus the gutter sizes.
    //
    // -----------------------------------------------------------------------
    // |     i=0     |         i=1         |        i=2       |      i=3     |
    // |             |                     |                  |              |
    // |           pair 0                pair 1             pair 2           |
    // |             |                     |                  |              |
    // -----------------------------------------------------------------------
    var pairs = [];
    elements = ids.map(function (id, i) {
        // Create the element object.
        var element = {
            element: elementOrSelector(id),
            size: sizes[i],
            minSize: minSizes[i],
            i: i,
        };

        var pair;

        if (i > 0) {
            // Create the pair object with its metadata.
            pair = {
                a: i - 1,
                b: i,
                dragging: false,
                direction: direction,
                parent: parent,
            };

            pair[aGutterSize] = getGutterSize(
                gutterSize,
                i - 1 === 0,
                false,
                gutterAlign
            );
            pair[bGutterSize] = getGutterSize(
                gutterSize,
                false,
                i === ids.length - 1,
                gutterAlign
            );

            // if the parent has a reverse flex-direction, switch the pair elements.
            if (
                parentFlexDirection === 'row-reverse' ||
                parentFlexDirection === 'column-reverse'
            ) {
                var temp = pair.a;
                pair.a = pair.b;
                pair.b = temp;
            }
        }

        // Determine the size of the current element. IE8 is supported by
        // staticly assigning sizes without draggable gutters. Assigns a string
        // to `size`.
        //
        // IE9 and above
        if (!isIE8) {
            // Create gutter elements for each pair.
            if (i > 0) {
                var gutterElement = gutter(i, direction, element.element);
                setGutterSize(gutterElement, gutterSize, i);

                // Save bound event listener for removal later
                pair[gutterStartDragging] = startDragging.bind(pair);

                // Attach bound event listener
                gutterElement[addEventListener](
                    'mousedown',
                    pair[gutterStartDragging]
                );
                gutterElement[addEventListener](
                    'touchstart',
                    pair[gutterStartDragging]
                );

                parent.insertBefore(gutterElement, element.element);

                pair.gutter = gutterElement;
            }
        }

        setElementSize(
            element.element,
            element.size,
            getGutterSize(
                gutterSize,
                i === 0,
                i === ids.length - 1,
                gutterAlign
            ),
            i
        );

        // After the first iteration, and we have a pair object, append it to the
        // list of pairs.
        if (i > 0) {
            pairs.push(pair);
        }

        return element
    });

    function adjustToMin(element) {
        var isLast = element.i === pairs.length;
        var pair = isLast ? pairs[element.i - 1] : pairs[element.i];

        calculateSizes.call(pair);

        var size = isLast
            ? pair.size - element.minSize - pair[bGutterSize]
            : element.minSize + pair[aGutterSize];

        adjust.call(pair, size);
    }

    elements.forEach(function (element) {
        var computedSize = element.element[getBoundingClientRect]()[dimension];

        if (computedSize < element.minSize) {
            if (expandToMin) {
                adjustToMin(element);
            } else {
                // eslint-disable-next-line no-param-reassign
                element.minSize = computedSize;
            }
        }
    });

    function setSizes(newSizes) {
        var trimmed = trimToMin(newSizes);
        trimmed.forEach(function (newSize, i) {
            if (i > 0) {
                var pair = pairs[i - 1];

                var a = elements[pair.a];
                var b = elements[pair.b];

                a.size = trimmed[i - 1];
                b.size = newSize;

                setElementSize(a.element, a.size, pair[aGutterSize], a.i);
                setElementSize(b.element, b.size, pair[bGutterSize], b.i);
            }
        });
    }

    function destroy(preserveStyles, preserveGutter) {
        pairs.forEach(function (pair) {
            if (preserveGutter !== true) {
                pair.parent.removeChild(pair.gutter);
            } else {
                pair.gutter[removeEventListener](
                    'mousedown',
                    pair[gutterStartDragging]
                );
                pair.gutter[removeEventListener](
                    'touchstart',
                    pair[gutterStartDragging]
                );
            }

            if (preserveStyles !== true) {
                var style = elementStyle(
                    dimension,
                    pair.a.size,
                    pair[aGutterSize]
                );

                Object.keys(style).forEach(function (prop) {
                    elements[pair.a].element.style[prop] = '';
                    elements[pair.b].element.style[prop] = '';
                });
            }
        });
    }

    if (isIE8) {
        return {
            setSizes: setSizes,
            destroy: destroy,
        }
    }

    return {
        setSizes: setSizes,
        getSizes: getSizes,
        collapse: function collapse(i) {
            adjustToMin(elements[i]);
        },
        destroy: destroy,
        parent: parent,
        pairs: pairs,
    }
};

/* harmony default export */ var split_es = (Split);

// CONCATENATED MODULE: ./src/Test.ts
var TestType;
(function (TestType) {
    // Expect a pulse half-way through the WAV file.
    TestType[TestType["LOW_SPEED_PULSE"] = 0] = "LOW_SPEED_PULSE";
    // Expect no pulse half-way through the WAV file.
    TestType[TestType["LOW_SPEED_NO_PULSE"] = 1] = "LOW_SPEED_NO_PULSE";
    // Expect a sequence of header (zero) bits to be proofed. This is different than reading a bunch of zero bits.
    TestType[TestType["LOW_SPEED_PROOF"] = 2] = "LOW_SPEED_PROOF";
    // Expect a few bits of zeros, then the sync byte, then more bits of data. The "bin" field is the bits
    // after the sync byte (e.g., D3 for a Basic program).
    TestType[TestType["LOW_SPEED_SYNC"] = 3] = "LOW_SPEED_SYNC";
    // Expect a sequence of bits (in "bin" or "binUrl"). First sample of WAV is previous bit's clock pulse.
    TestType[TestType["LOW_SPEED_BITS"] = 4] = "LOW_SPEED_BITS";
    // Expect a sequence of bits (in "bin" or "binUrl"). Start and end WAV file part-way through pulses.
    TestType[TestType["HIGH_SPEED_BITS"] = 5] = "HIGH_SPEED_BITS";
})(TestType || (TestType = {}));
const STRING_TO_TEST_TYPE = {
    "low-speed-pulse": TestType.LOW_SPEED_PULSE,
    "low-speed-no-pulse": TestType.LOW_SPEED_NO_PULSE,
    "low-speed-proof": TestType.LOW_SPEED_PROOF,
    "low-speed-sync": TestType.LOW_SPEED_SYNC,
    "low-speed-bits": TestType.LOW_SPEED_BITS,
    "high-speed-bits": TestType.HIGH_SPEED_BITS,
};
/**
 * Individual test to run.
 */
class Test {
    constructor(jsonTest) {
        this.name = jsonTest.name;
        this.wavUrl = jsonTest.wavUrl;
        this.type = STRING_TO_TEST_TYPE[jsonTest.type];
        this.bin = jsonTest.bin;
        this.binUrl = jsonTest.binUrl;
    }
    isHighSpeed() {
        return this.type === TestType.HIGH_SPEED_BITS;
    }
}
/**
 * Batch of tests from a file.
 */
class TestFile {
    constructor(url, json) {
        this.tests = [];
        this.includes = [];
        this.url = url;
        this.name = json.name;
        const jsonTests = json.tests;
        if (jsonTests === undefined) {
            throw new Error("file does not have top-level \"tests\" key");
        }
        for (const jsonTest of jsonTests) {
            if (typeof jsonTest === "string") {
                this.includes.push(jsonTest);
            }
            else {
                this.tests.push(new Test(jsonTest));
            }
        }
    }
}

// CONCATENATED MODULE: ./src/Main.ts












function nameFromPathname(pathname) {
    let name = pathname;
    // Keep only last component.
    let pos = name.lastIndexOf("/");
    if (pos >= 0) {
        name = name.substr(pos + 1);
    }
    // Remove extension.
    pos = name.lastIndexOf(".");
    if (pos >= 0) {
        name = name.substr(0, pos);
    }
    return name;
}
/**
 * Show the screen with the specified ID, hide the rest.
 * @return the shown element.
 */
function showScreen(screenId) {
    const allScreens = document.getElementsByClassName("screen");
    let shownScreen = undefined;
    for (const screen of allScreens) {
        if (screen.id === screenId) {
            screen.classList.remove("hidden");
            shownScreen = screen;
        }
        else {
            screen.classList.add("hidden");
        }
    }
    if (shownScreen === undefined) {
        throw new Error("Cannot find screen " + screenId);
    }
    return shownScreen;
}
/**
 * Show the user data.
 */
function populateBrowseScreen(browseScreen) {
    clearElement(browseScreen);
    const data = Tape_Tape.loadAllData();
    for (const tapeData of data.tapes) {
        const h1 = document.createElement("h1");
        h1.textContent = tapeData.name;
        browseScreen.appendChild(h1);
        if (tapeData.notes) {
            const p = document.createElement("p");
            p.textContent = tapeData.notes;
            browseScreen.appendChild(p);
        }
        for (const programData of tapeData.programs) {
            const h2 = document.createElement("h2");
            h2.textContent = programData.name || "Untitled";
            browseScreen.appendChild(h2);
            if (programData.notes) {
                const p = document.createElement("p");
                p.textContent = programData.notes;
                browseScreen.appendChild(p);
            }
            if (programData.screenshot) {
                const div = document.createElement("div");
                browseScreen.appendChild(div);
                const screen = new CanvasScreen_CanvasScreen(div, false);
                screen.displayScreenshot(programData.screenshot);
            }
        }
    }
}
/**
 * Show the export/import panel and the appropriate set of buttons.
 */
function showExportImport(action) {
    const exportImport = document.getElementById("export_import");
    exportImport.classList.remove("hidden");
    // Hide all button groups.
    for (const buttonGroup of exportImport.getElementsByClassName("button_group")) {
        buttonGroup.classList.add("hidden");
    }
    // Show our button group.
    const buttonGroup = document.getElementById(action == "export" ? "export_buttons" : "import_buttons");
    buttonGroup.classList.remove("hidden");
}
function showExportData() {
    showExportImport("export");
    const textArea = document.getElementById("user_data_field");
    textArea.placeholder = "";
    textArea.value = Tape_Tape.getAllDataAsJson();
    textArea.select();
}
function showImportData() {
    showExportImport("import");
    const textArea = document.getElementById("user_data_field");
    textArea.value = "";
    textArea.placeholder = "Paste exported data here, then click “Import”.";
    textArea.focus();
}
function copyToClipboard() {
    const textArea = document.getElementById("user_data_field");
    textArea.select();
    document.execCommand("copy");
    const exportImport = document.getElementById("export_import");
    flashNode(exportImport);
}
function importData() {
    const textArea = document.getElementById("user_data_field");
    if (textArea) {
        Tape_Tape.saveAllDataAsJson(textArea.value);
        const exportImport = document.getElementById("export_import");
        flashNode(exportImport);
    }
}
function handleAudioBuffer(pathname, audioFile) {
    // console.log("Audio is " + audioFile.rate + " Hz");
    // TODO check that there's 1 channel.
    const tape = new Tape_Tape(nameFromPathname(pathname), audioFile);
    const decoder = new Decoder_Decoder(tape);
    decoder.decode();
    tape.listenForStorageChanges();
    tape.loadUserData();
    const tapeBrowser = new TapeBrowser_TapeBrowser(tape, document.getElementById("waveforms"), document.getElementById("original_canvas"), document.getElementById("filtered_canvas"), document.getElementById("low_speed_canvas"), document.getElementById("tape_contents"), document.getElementById("top_data"));
    // Switch screens.
    showScreen("data_screen");
    /*
    const loadAnotherButton = document.getElementById("load_another_button") as HTMLButtonElement;
    loadAnotherButton.onclick = () => {
        showScreen("drop_screen");
        if (uploader !== undefined) {
            uploader.reset();
        }
    };
    */
    split_es(["#data_screen > nav", "#data_screen > main"], {
        sizes: [20, 80],
        minSize: [200, 200],
        snapOffset: 0,
    });
    split_es(["#top_data", "#waveforms"], {
        sizes: [50, 50],
        minSize: [100, 100],
        snapOffset: 0,
        direction: "vertical",
    });
}
// https://stackoverflow.com/a/6234804/211234
function escapeHtml(unsafe) {
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}
/**
 * Makes a pill to show pass or fail for a test.
 */
function makePassFailLabel(pass) {
    const result = document.createElement("span");
    result.classList.add("test_result");
    if (pass) {
        result.innerText = "Pass";
        result.classList.add("test_pass");
    }
    else {
        result.innerText = "Fail";
        result.classList.add("test_fail");
    }
    return result;
}
function runTests(parent, testFile) {
    if (testFile.name !== undefined) {
        const pageHeader = document.createElement("h2");
        pageHeader.innerText = testFile.name;
        parent.appendChild(pageHeader);
    }
    for (const test of testFile.tests) {
        const testResult = document.createElement("div");
        testResult.classList.add("test");
        parent.append(testResult);
        const url = new URL(test.wavUrl, testFile.url).href;
        fetch(url, { cache: "reload" })
            .then(response => {
            if (response.ok) {
                return response.arrayBuffer();
            }
            throw new Error(response.statusText);
        })
            .then(arrayBuffer => {
            const wavFile = readWavFile(arrayBuffer);
            const tape = new Tape_Tape(url, wavFile);
            const waveformDisplay = new WaveformDisplay_WaveformDisplay(wavFile.rate);
            waveformDisplay.setSelectionMode(SelectionMode.SAMPLES);
            const title = document.createElement("span");
            title.innerText = test.name;
            const header = document.createElement("div");
            header.appendChild(title);
            header.classList.add("test_header");
            testResult.append(header);
            const panel = document.createElement("div");
            panel.classList.add("expandable_panel");
            testResult.append(panel);
            const explanation = document.createElement("p");
            panel.append(explanation);
            header.addEventListener("click", () => {
                testResult.classList.toggle("expanded");
            });
            waveformDisplay.addWaveformAndChrome("Original samples", tape.originalSamples, panel);
            if (test.isHighSpeed()) {
                waveformDisplay.addWaveformAndChrome("High pass filter", tape.filteredSamples, panel);
            }
            else {
                waveformDisplay.addWaveformAndChrome("Low speed filter", tape.lowSpeedSamples, panel);
            }
            let pass;
            switch (test.type) {
                case TestType.LOW_SPEED_PULSE:
                case TestType.LOW_SPEED_NO_PULSE: {
                    const decoder = new LowSpeedAnteoTapeDecoder_LowSpeedAnteoTapeDecoder(tape);
                    const pulse = decoder.isPulseAt(Math.round(wavFile.samples.length / 2), LowSpeedAnteoTapeDecoder_LowSpeedAnteoTapeDecoder.DEFAULT_THRESHOLD, true);
                    waveformDisplay.addWaveformAnnotations(pulse.waveformAnnotations);
                    if (pulse.explanation !== "") {
                        explanation.innerText = pulse.explanation;
                    }
                    else {
                        explanation.remove();
                    }
                    pass = pulse.resultType === PulseResultType.PULSE === (test.type === TestType.LOW_SPEED_PULSE);
                    break;
                }
                case TestType.LOW_SPEED_PROOF: {
                    const decoder = new LowSpeedAnteoTapeDecoder_LowSpeedAnteoTapeDecoder(tape);
                    const pulse = decoder.findPulse(0, LowSpeedAnteoTapeDecoder_LowSpeedAnteoTapeDecoder.DEFAULT_THRESHOLD);
                    if (pulse === undefined) {
                        // Ran off the end of the tape.
                        pass = false;
                        explanation.innerText = "Ran off the end of the tape";
                    }
                    else {
                        const waveformAnnotations = [];
                        const success = decoder.proofPulseDistance(pulse.frame, waveformAnnotations);
                        waveformDisplay.addWaveformAnnotations(waveformAnnotations);
                        if (success) {
                            explanation.remove();
                        }
                        else {
                            explanation.innerText = "Proof failed";
                        }
                        pass = success;
                    }
                    break;
                }
                case TestType.LOW_SPEED_SYNC: {
                    const decoder = new LowSpeedAnteoTapeDecoder_LowSpeedAnteoTapeDecoder(tape);
                    const pulse = decoder.findPulse(0, LowSpeedAnteoTapeDecoder_LowSpeedAnteoTapeDecoder.DEFAULT_THRESHOLD);
                    if (pulse === undefined) {
                        // Ran off the end of the tape.
                        pass = false;
                        explanation.innerText = "Ran off the end of the tape";
                    }
                    else {
                        if (test.bin === undefined) {
                            // We don't yet support binUrl.
                            throw new Error("must define bin for bits test");
                        }
                        // Don't bother proofing.
                        const waveformAnnotations = [];
                        const program = decoder.loadData(pulse.frame, waveformAnnotations);
                        console.log(program.binary.length, program.binary);
                        waveformDisplay.addWaveformAnnotations(waveformAnnotations);
                        waveformDisplay.addProgram(program);
                        const actualBits = Array.from(program.binary).map(b => b.toString(2).padStart(8, "0")).join("");
                        const expectBits = test.bin.replace(/ /g, "");
                        pass = actualBits === expectBits;
                        if (pass) {
                            explanation.remove();
                        }
                        else {
                            explanation.innerText = "Expected " + expectBits + " but got " + actualBits + ".";
                        }
                    }
                    break;
                }
                case TestType.LOW_SPEED_BITS:
                case TestType.HIGH_SPEED_BITS: {
                    const decoder = test.type === TestType.LOW_SPEED_BITS
                        ? new LowSpeedAnteoTapeDecoder_LowSpeedAnteoTapeDecoder(tape)
                        : new HighSpeedTapeDecoder_HighSpeedTapeDecoder(tape);
                    const [actualBits, waveformAnnotations, explanations] = decoder.readBits(0);
                    if (test.bin === undefined) {
                        // We don't yet support binUrl.
                        throw new Error("must define bin for bits test");
                    }
                    const expectBits = test.bin.replace(/ /g, "");
                    waveformDisplay.addWaveformAnnotations(waveformAnnotations);
                    pass = actualBits === expectBits;
                    if (!pass) {
                        explanations.unshift("Expected " + expectBits + " but got " + actualBits + ".");
                    }
                    if (explanations.length === 0) {
                        explanation.remove();
                    }
                    else {
                        let html = "";
                        for (const e of explanations) {
                            if (html !== "") {
                                html += "<br>";
                            }
                            html += escapeHtml(e);
                        }
                        explanation.innerHTML = html;
                    }
                    break;
                }
            }
            header.appendChild(makePassFailLabel(pass));
        })
            .catch(reason => {
            const title = document.createElement("span");
            title.innerText = test.name + " (" + reason + ")";
            const header = document.createElement("div");
            header.appendChild(title);
            // header.classList.add("test_header");
            testResult.append(header);
            header.appendChild(makePassFailLabel(false));
        });
    }
    for (const include of testFile.includes) {
        const testFileDiv = document.createElement("div");
        parent.appendChild(testFileDiv);
        loadTestFile(testFileDiv, include, testFile.url);
    }
}
function loadTestFile(parent, relativeUrl, parentUrl) {
    const url = new URL(relativeUrl, parentUrl).href;
    fetch(url, { cache: "reload" })
        .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error(response.statusText);
    })
        .then(json => {
        runTests(parent, new TestFile(url, json));
    })
        .catch(reason => {
        const title = document.createElement("span");
        title.innerText = url + " (" + reason + ")";
        const header = document.createElement("div");
        header.appendChild(title);
        // header.classList.add("test_header");
        parent.append(header);
        header.appendChild(makePassFailLabel(false));
    });
}
/**
 * Show the test screen and start loading the test JSON file.
 */
function showTestScreen() {
    const screen = showScreen("test_screen");
    clearElement(screen);
    const pageHeader = document.createElement("h1");
    pageHeader.innerText = "Test Results";
    screen.appendChild(pageHeader);
    loadTestFile(screen, "tests/tests.json", document.baseURI);
}
/**
 * Handle the browser's back and forward history buttons.
 */
function handleNewLocation() {
    const hash = window.location.hash;
    switch (hash) {
        case "":
        case "#":
        default:
            showScreen("drop_screen");
            break;
        case "#test":
            showTestScreen();
            break;
    }
}
function main() {
    showScreen("drop_screen");
    // Configure uploading box.
    const dropZone = document.getElementById("drop_zone");
    const dropUpload = document.getElementById("drop_upload");
    const dropS3 = document.querySelectorAll("#test_files button");
    const dropProgress = document.getElementById("drop_progress");
    const uploader = new Uploader_Uploader(dropZone, dropUpload, dropS3, dropProgress, handleAudioBuffer);
    // Configure action buttons.
    const exportDataButton = document.getElementById("export_data_button");
    const importDataButton = document.getElementById("import_data_button");
    const browseDataButton = document.getElementById("browse_data_button");
    const runTestsButton = document.getElementById("run_tests_button");
    const copyToClipboardButton = document.getElementById("copy_to_clipboard_button");
    const importButton = document.getElementById("import_button");
    exportDataButton.addEventListener("click", event => showExportData());
    importDataButton.addEventListener("click", event => showImportData());
    browseDataButton.addEventListener("click", event => {
        const browseScreen = showScreen("browse_screen");
        populateBrowseScreen(browseScreen);
    });
    runTestsButton.addEventListener("click", () => window.location.href = "#test");
    copyToClipboardButton.addEventListener("click", event => copyToClipboard());
    importButton.addEventListener("click", event => importData());
    window.addEventListener("popstate", handleNewLocation);
}

// CONCATENATED MODULE: ./src/index.ts

main();


/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map