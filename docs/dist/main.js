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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
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
var ste_events_1 = __webpack_require__(9);
exports.EventDispatcher = ste_events_1.EventDispatcher;
exports.EventHandlingBase = ste_events_1.EventHandlingBase;
exports.EventList = ste_events_1.EventList;
exports.NonUniformEventList = ste_events_1.NonUniformEventList;
var ste_simple_events_1 = __webpack_require__(11);
exports.SimpleEventDispatcher = ste_simple_events_1.SimpleEventDispatcher;
exports.SimpleEventHandlingBase = ste_simple_events_1.SimpleEventHandlingBase;
exports.SimpleEventList = ste_simple_events_1.SimpleEventList;
exports.NonUniformSimpleEventList = ste_simple_events_1.NonUniformSimpleEventList;
var ste_signals_1 = __webpack_require__(13);
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
var dispatching_1 = __webpack_require__(7);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(5), __webpack_require__(6)(module)))

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
/* 6 */
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
/* 7 */
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
var management_1 = __webpack_require__(8);
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
/* 8 */
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var events_1 = __webpack_require__(10);
exports.EventDispatcher = events_1.EventDispatcher;
exports.EventHandlingBase = events_1.EventHandlingBase;
exports.EventList = events_1.EventList;
exports.NonUniformEventList = events_1.NonUniformEventList;


/***/ }),
/* 10 */
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var simple_events_1 = __webpack_require__(12);
exports.SimpleEventDispatcher = simple_events_1.SimpleEventDispatcher;
exports.SimpleEventHandlingBase = simple_events_1.SimpleEventHandlingBase;
exports.SimpleEventList = simple_events_1.SimpleEventList;
exports.NonUniformSimpleEventList = simple_events_1.NonUniformSimpleEventList;


/***/ }),
/* 12 */
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var signals_1 = __webpack_require__(14);
exports.SignalDispatcher = signals_1.SignalDispatcher;
exports.SignalHandlingBase = signals_1.SignalHandlingBase;
exports.SignalList = signals_1.SignalList;


/***/ }),
/* 14 */
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
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

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

// CONCATENATED MODULE: ./src/AudioUtils.ts

// Expected HZ on tape.
const HZ = 48000;
/**
 * Simple high-pass filter.
 *
 * @param samples samples to filter.
 * @param size size of filter
 * @returns filtered samples.
 */
function highPassFilter(samples, size) {
    const out = new Float32Array(samples.length);
    let sum = 0;
    for (let i = 0; i < samples.length; i++) {
        sum += samples[i];
        if (i >= size) {
            sum -= samples[i - size];
        }
        // Subtract out the average of the last "size" samples (to estimate local DC component).
        out[i] = samples[i] - sum / size;
    }
    return out;
}
/**
 * @param frame the frame number to be described as a timestamp.
 * @param brief omit hour if zero, omit milliseconds and frame itself.
 */
function frameToTimestamp(frame, brief) {
    const time = frame / HZ;
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
        return hour + ":" + pad(min, 10, 2) + ":" + pad(sec, 10, 2) + "." + pad(ms, 10, 3) + " (frame " + frame + ")";
    }
}
/**
 * Concatenate a list of audio samples into one.
 */
function concatAudio(samplesList) {
    const length = samplesList.reduce((sum, samples) => sum + samples.length, 0);
    const allSamples = new Float32Array(length);
    let offset = 0;
    for (const samples of samplesList) {
        allSamples.set(samples, offset);
        offset += samples.length;
    }
    return allSamples;
}

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
     * Go from DETECTED to ERROR if an error is found (e.g., missing start bit).
     * Once in the ERROR state, the decoder won't be called again.
     */
    TapeDecoderState[TapeDecoderState["ERROR"] = 2] = "ERROR";
    /**
     * Go from DETECTED to FINISHED once the program is fully read.
     * Once in the FINISHED state, the decoder won't be given any more samples.
     */
    TapeDecoderState[TapeDecoderState["FINISHED"] = 3] = "FINISHED";
})(TapeDecoderState || (TapeDecoderState = {}));

// CONCATENATED MODULE: ./src/HighSpeedTapeDecoder.ts




// What distance away from 0 counts as "positive" (or, when negative, "negative").
const THRESHOLD = 500 / 32768.0;
// If we go this many frames without any crossing, then we can assume we're done.
const MIN_SILENCE_FRAMES = 1000;
/**
 * Decodes high-speed (1500 baud) cassettes.
 */
class HighSpeedTapeDecoder_HighSpeedTapeDecoder {
    constructor() {
        this.state = TapeDecoderState.UNDECIDED;
        this.programBytes = [];
        this.oldSign = 0;
        this.cycleSize = 0;
        this.recentBits = 0;
        this.bitCount = 0;
        this.lastCrossingFrame = 0;
        this.bits = [];
        this.byteData = [];
    }
    getName() {
        return "High speed";
    }
    handleSample(tape, frame) {
        const samples = tape.lowSpeedSamples.samplesList[0];
        const sample = samples[frame];
        const newSign = sample > THRESHOLD ? 1 : sample < -THRESHOLD ? -1 : 0;
        // Detect zero-crossing.
        if (this.oldSign !== 0 && newSign !== 0 && this.oldSign !== newSign) {
            this.lastCrossingFrame = frame;
            // Detect positive edge. That's the end of the cycle.
            if (this.oldSign === -1) {
                // Only consider cycles in the right range of periods.
                if (this.cycleSize > 7 && this.cycleSize < 44) {
                    // Long cycle is "0", short cycle is "1".
                    const bit = this.cycleSize < 22;
                    // Bits are MSb to LSb.
                    this.recentBits = (this.recentBits << 1) | (bit ? 1 : 0);
                    // If we're in the program, add the bit to our stream.
                    if (this.state === TapeDecoderState.DETECTED) {
                        this.bitCount += 1;
                        // Just got a start bit. Must be zero.
                        let bitType;
                        if (this.bitCount === 1) {
                            if (bit) {
                                console.log("Bad start bit at byte " + this.programBytes.length + ", " +
                                    frameToTimestamp(frame) + ", cycle size " + this.cycleSize + ".");
                                this.state = TapeDecoderState.ERROR;
                                bitType = BitType.BAD;
                            }
                            else {
                                bitType = BitType.START;
                            }
                        }
                        else {
                            bitType = bit ? BitType.ONE : BitType.ZERO;
                        }
                        this.bits.push(new BitData(frame - this.cycleSize, frame, bitType));
                        // Got enough bits for a byte (including the start bit).
                        if (this.bitCount === 9) {
                            this.programBytes.push(this.recentBits & 0xFF);
                            this.bitCount = 0;
                        }
                    }
                    else {
                        // Detect end of header.
                        if ((this.recentBits & 0xFFFF) === 0x557F) {
                            this.state = TapeDecoderState.DETECTED;
                            // No start bit on first byte.
                            this.bitCount = 1;
                            this.recentBits = 0;
                        }
                    }
                }
                else if (this.state === TapeDecoderState.DETECTED &&
                    this.programBytes.length > 0 && this.cycleSize > 66) {
                    // 1.5 ms gap, end of recording.
                    // TODO pull this out of zero crossing.
                    this.state = TapeDecoderState.FINISHED;
                }
                // End of cycle, start a new one.
                this.cycleSize = 0;
            }
        }
        else {
            // Continue current cycle.
            this.cycleSize += 1;
        }
        if (newSign !== 0) {
            this.oldSign = newSign;
        }
        if (this.state === TapeDecoderState.DETECTED && frame - this.lastCrossingFrame > MIN_SILENCE_FRAMES) {
            this.state = TapeDecoderState.FINISHED;
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
        return this.bits;
    }
    getByteData() {
        return this.byteData;
    }
}

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

// CONCATENATED MODULE: ./src/LowSpeedTapeDecoder.ts





/**
 * Number of samples between the top of the pulse and the bottom of it.
 */
const PULSE_PEAK_DISTANCE = 7;
/**
 * Number of samples between start of pulse detection and end of pulse. Once
 * we detect a pulse, we ignore this number of samples.
 */
const PULSE_WIDTH = 22;
/**
 * Number of samples that determines a zero (longer) or one (shorter) bit.
 */
const BIT_DETERMINATOR = 68;
/**
 * Number of quiet samples that would indicate the end of the program.
 */
const END_OF_PROGRAM_SILENCE = HZ / 10;
/**
 * Number of consecutive zero bits we require in the header before we're pretty
 * sure this is a low speed program.
 */
const MIN_HEADER_ZEROS = 6;
class LowSpeedTapeDecoder_LowSpeedTapeDecoder {
    constructor(invert) {
        this.programBytes = [];
        this.byteData = [];
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
    }
    /**
     * Differentiating filter to accentuate pulses.
     *
     * @param samples samples to filter.
     * @returns filtered samples.
     */
    static filterSamples(samples) {
        const out = new Float32Array(samples.length);
        for (let i = 0; i < samples.length; i++) {
            // Differentiate to accentuate a pulse. Pulse go positive, then negative,
            // with a space of PULSE_PEAK_DISTANCE, so subtracting those generates a large
            // positive value at the bottom of the pulse.
            out[i] = i >= PULSE_PEAK_DISTANCE ? samples[i - PULSE_PEAK_DISTANCE] - samples[i] : 0;
        }
        return out;
    }
    getName() {
        return "Low speed";
    }
    handleSample(tape, frame) {
        const samples = tape.lowSpeedSamples.samplesList[0];
        const pulse = this.invert ? -samples[frame] : samples[frame];
        const timeDiff = frame - this.lastPulseFrame;
        const pulsing = timeDiff > PULSE_WIDTH && pulse >= this.pulseHeight / 3;
        // Keep track of the height of this pulse, to calibrate for the next one.
        if (timeDiff < PULSE_WIDTH) {
            this.pulseHeight = Math.max(this.pulseHeight, pulse);
        }
        if (this.state === TapeDecoderState.DETECTED && timeDiff > END_OF_PROGRAM_SILENCE) {
            // End of program.
            this.state = TapeDecoderState.FINISHED;
        }
        else if (pulsing) {
            const bit = timeDiff < BIT_DETERMINATOR;
            if (this.pulseCount++ === 1000) {
                // For debugging, forces a detection so we can inspect the bits.
                /// this.state = TapeDecoderState.DETECTED;
            }
            if (this.eatNextPulse) {
                if (this.state === TapeDecoderState.DETECTED && !bit && !this.lenientFirstBit) {
                    console.log("Warning: At bit of wrong value at " +
                        frameToTimestamp(frame) + ", diff = " + timeDiff + ", last = " +
                        frameToTimestamp(this.lastPulseFrame));
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
            const half = Math.ceil(samples.length / 2);
            const down = new Float32Array(half);
            for (let i = 0; i < half; i++) {
                const j = i * 2;
                down[i] = j === samples.length - 1 ? samples[j] : Math.max(samples[j], samples[j + 1]);
            }
            this.samplesList.push(down);
        }
    }
}

// CONCATENATED MODULE: ./src/Program.ts


class Program_Program {
    constructor(trackNumber, copyNumber, startFrame, endFrame, decoderName, binary, bitData, byteData, reconstructedSamples) {
        this.trackNumber = trackNumber;
        this.copyNumber = copyNumber;
        this.startFrame = startFrame;
        this.endFrame = endFrame;
        this.decoderName = decoderName;
        this.binary = binary;
        this.bitData = bitData;
        this.byteData = byteData;
        this.reconstructedSamples = new DisplaySamples(reconstructedSamples);
    }
    /**
     * Get a generic label for the program.
     */
    getProgramLabel() {
        return "Track " + this.trackNumber + ", copy " + this.copyNumber + ", " + this.decoderName;
    }
    /**
     * Whether this program is really too short to be a real recording.
     */
    isTooShort() {
        return this.endFrame - this.startFrame < HZ / 10;
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
}

// CONCATENATED MODULE: ./src/HighSpeedTapeEncoder.ts

/**
 * Length of a zero bit, in samples.
 */
const ZERO_LENGTH = Math.round(0.00072 * HZ);
/**
 * Length of a one bit, in samples.
 */
const ONE_LENGTH = Math.round(0.00034 * HZ);
/**
 * Samples representing a zero bit.
 */
const ZERO = generateCycle(ZERO_LENGTH);
/**
 * Samples representing a one bit.
 */
const ONE = generateCycle(ONE_LENGTH);
/**
 * Samples representing a long zero bit. This is the first start bit
 * after the end of the header. It's 1 ms longer than a regular zero.
 */
const LONG_ZERO = generateCycle(ZERO_LENGTH + HZ / 1000);
/**
 * The final cycle in the entire waveform, which is necessary
 * to force that last negative-to-positive transition (and interrupt).
 * We could just use a simple half cycle here, but it's nicer to do
 * something like the original analog.
 */
const FINAL_HALF_CYCLE = generateFinalHalfCycle(ZERO_LENGTH * 3, ZERO);
/**
 * Generate one cycle of a sine wave.
 * @param length number of samples in the full cycle.
 * @return audio samples for one cycle.
 */
function generateCycle(length) {
    const audio = new Float32Array(length);
    for (let i = 0; i < length; i++) {
        const t = 2 * Math.PI * i / length;
        // -0.5 to 0.5, matches recorded audio.
        audio[i] = Math.sin(t) / 2;
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
    const y2 = 1.0;
    const x2 = (y2 - y1 + x1 * slope) / slope;
    const x3 = length / 2;
    const y3 = 0;
    const x4 = length - 1;
    const y4 = 0;
    // Generated audio;
    const audio = new Float32Array(length);
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
 */
function addByte(samplesList, b) {
    // MSb first.
    for (let i = 7; i >= 0; i--) {
        if ((b & (1 << i)) != 0) {
            samplesList.push(ONE);
        }
        else {
            samplesList.push(ZERO);
        }
    }
}
/**
 * Encode the sequence of bytes as an array of audio samples for high-speed (1500 baud) cassettes.
 */
function encodeHighSpeed(bytes) {
    // List of samples.
    const samplesList = [];
    // Start with half a second of silence.
    samplesList.push(new Float32Array(HZ / 2));
    // Header of 0x55.
    for (let i = 0; i < 256; i++) {
        addByte(samplesList, 0x55);
    }
    // End of header.
    addByte(samplesList, 0x7F);
    // Write program.
    let firstStartBit = true;
    for (const b of bytes) {
        // Start bit.
        if (firstStartBit) {
            samplesList.push(LONG_ZERO);
            firstStartBit = false;
        }
        else {
            samplesList.push(ZERO);
        }
        addByte(samplesList, b);
    }
    // Finish off the last cycle, so that it generates an interrupt.
    samplesList.push(FINAL_HALF_CYCLE);
    // End with half a second of silence.
    samplesList.push(new Float32Array(HZ / 2));
    // Concatenate all samples.
    return concatAudio(samplesList);
}

// CONCATENATED MODULE: ./src/Decoder.ts
// Uses tape decoders to work through the tape, finding programs and decoding them.






class Decoder_Decoder {
    constructor(tape) {
        this.tape = tape;
    }
    decode() {
        const samples = this.tape.filteredSamples.samplesList[0];
        let instanceNumber = 1;
        let trackNumber = 0;
        let copyNumber = 1;
        let frame = 0;
        let programStartFrame = -1;
        while (frame < samples.length) {
            console.log("--------------------------------------- " + instanceNumber);
            // Start out trying all decoders.
            let tapeDecoders = [
                new LowSpeedTapeDecoder_LowSpeedTapeDecoder(true),
                new LowSpeedTapeDecoder_LowSpeedTapeDecoder(false),
                new HighSpeedTapeDecoder_HighSpeedTapeDecoder(),
            ];
            const searchFrameStart = frame;
            let state = TapeDecoderState.UNDECIDED;
            for (; frame < samples.length &&
                (state === TapeDecoderState.UNDECIDED || state === TapeDecoderState.DETECTED); frame++) {
                // Give the sample to all decoders in parallel.
                let detectedIndex = -1;
                for (let i = 0; i < tapeDecoders.length; i++) {
                    const tapeDecoder = tapeDecoders[i];
                    tapeDecoder.handleSample(this.tape, frame);
                    // See if it detected its encoding.
                    if (tapeDecoder.getState() !== TapeDecoderState.UNDECIDED) {
                        detectedIndex = i;
                    }
                }
                // If any has detected, keep only that one and kill the rest.
                if (state === TapeDecoderState.UNDECIDED) {
                    if (detectedIndex !== -1) {
                        const tapeDecoder = tapeDecoders[detectedIndex];
                        // See how long it took to find it. A large gap means a new track.
                        const leadTime = (frame - searchFrameStart) / HZ;
                        if (leadTime > 10 || programStartFrame === -1) {
                            trackNumber += 1;
                            copyNumber = 1;
                        }
                        programStartFrame = frame;
                        console.log("Decoder \"" + tapeDecoder.getName() + "\" detected " +
                            trackNumber + "-" + copyNumber + " at " +
                            frameToTimestamp(frame) + " after " +
                            leadTime.toFixed(3) + " seconds.");
                        // Throw away the other decoders.
                        tapeDecoders = [
                            tapeDecoder,
                        ];
                        state = tapeDecoder.getState();
                    }
                }
                else {
                    // See if we should keep going.
                    state = tapeDecoders[0].getState();
                }
            }
            switch (state) {
                case TapeDecoderState.UNDECIDED:
                    console.log("Reached end of tape without finding track.");
                    break;
                case TapeDecoderState.DETECTED:
                    console.log("Reached end of tape while still reading track.");
                    break;
                case TapeDecoderState.ERROR:
                case TapeDecoderState.FINISHED:
                    if (state === TapeDecoderState.ERROR) {
                        console.log("Decoder detected an error; skipping program.");
                    }
                    else {
                        console.log("Found end of program at " + frameToTimestamp(frame) + ".");
                    }
                    let binary = tapeDecoders[0].getBinary();
                    // Low-speed programs end in two 0x00, but high-speed programs
                    // end in three 0x00. Add the additional 0x00 since we're
                    // saving high-speed.
                    let highSpeedBytes;
                    if (binary.length >= 3 &&
                        binary[binary.length - 1] === 0x00 &&
                        binary[binary.length - 2] === 0x00 &&
                        binary[binary.length - 3] !== 0x00) {
                        highSpeedBytes = new Uint8Array(binary.length + 1);
                        highSpeedBytes.set(binary);
                        highSpeedBytes[highSpeedBytes.length - 1] = 0x00;
                    }
                    else {
                        highSpeedBytes = binary;
                    }
                    const program = new Program_Program(trackNumber, copyNumber, programStartFrame, frame, tapeDecoders[0].getName(), binary, tapeDecoders[0].getBitData(), tapeDecoders[0].getByteData(), encodeHighSpeed(highSpeedBytes));
                    if (!program.isTooShort()) {
                        this.tape.addProgram(program);
                    }
                    break;
            }
            copyNumber += 1;
            instanceNumber += 1;
        }
    }
}

// CONCATENATED MODULE: ./src/Tape.ts
// Represents a recorded tape, with its audio samples,
// filtered-down samples for display, and other information
// we got from it.



class Tape_Tape {
    /**
     * @param name text to display (e.g., "LOAD80-Feb82-s1").
     * @param samples original samples from the tape.
     * @param sampleRate the number of samples per second.
     */
    constructor(name, samples, sampleRate) {
        this.name = name;
        this.originalSamples = new DisplaySamples(samples);
        this.filteredSamples = new DisplaySamples(highPassFilter(samples, 500));
        this.lowSpeedSamples = new DisplaySamples(LowSpeedTapeDecoder_LowSpeedTapeDecoder.filterSamples(this.filteredSamples.samplesList[0]));
        this.sampleRate = sampleRate;
        this.programs = [];
    }
    addProgram(program) {
        this.programs.push(program);
    }
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

// CONCATENATED MODULE: ./src/Basic.ts
// Tools for decoding Basic programs.


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
const EOF = -1;
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
     * @param allowEofAfterFirstByte
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
}
/**
 *
 * @param out the enclosing element to add to.
 * @param text the text to add.
 * @param className the name of the class for the item.
 */
function Basic_add(out, text, className) {
    const e = document.createElement("span");
    e.innerText = text;
    e.classList.add(className);
    out.appendChild(e);
    return e;
}
// Stylesheet.
const BACKGROUND_COLOR = "#1E1E1E";
const STYLE = {
    error: {
        color: "#aa0000",
        "&$highlighted": {
            backgroundColor: "#aa0000",
            color: BACKGROUND_COLOR,
        },
    },
    lineNumber: {
        color: "#858585",
        "&$highlighted": {
            backgroundColor: "#858585",
            color: BACKGROUND_COLOR,
        },
    },
    punctuation: {
        color: "#D4D4D4",
        "&$highlighted": {
            backgroundColor: "#D4D4D4",
            color: BACKGROUND_COLOR,
        },
    },
    keyword: {
        color: "#C586C0",
        "&$highlighted": {
            backgroundColor: "#C586C0",
            color: BACKGROUND_COLOR,
        },
    },
    regular: {
        color: "#9CDCFE",
        "&$highlighted": {
            backgroundColor: "#9CDCFE",
            color: BACKGROUND_COLOR,
        },
    },
    string: {
        color: "#CE9178",
        "&$highlighted": {
            backgroundColor: "#CE9178",
            color: BACKGROUND_COLOR,
        },
    },
    comment: {
        color: "#6A9955",
        "&$highlighted": {
            backgroundColor: "#6A9955",
            color: BACKGROUND_COLOR,
        },
    },
    selected: {
        backgroundColor: "#555555",
    },
    highlighted: {
    // Empty style that's referenced above as $highlighted.
    },
};
const Basic_sheet = src_Jss.createStyleSheet(STYLE);
const highlightClassName = Basic_sheet.classes.highlighted;
const selectClassName = Basic_sheet.classes.selected;
/**
 * Get the token for the byte value, or undefined if the value does
 * not map to a token.
 */
function getToken(c) {
    return c >= 128 && c < 128 + TOKENS.length ? TOKENS[c - 128] : undefined;
}
/**
 * Decode a tokenized Basic program.
 * @param bytes tokenized program.
 * @param out div to write result into.
 * @return array of generated HTML elements, index by byte index.
 */
function fromTokenized(bytes, out) {
    Basic_sheet.attach();
    const classes = Basic_sheet.classes;
    const b = new ByteReader(bytes);
    let state;
    const elements = [];
    if (b.read() !== 0xD3 || b.read() !== 0xD3 || b.read() !== 0xD3) {
        Basic_add(out, "Basic: missing magic -- not a BASIC file.", classes.error);
        return elements;
    }
    // One-byte ASCII program name. This is nearly always meaningless, so we do nothing with it.
    b.read();
    while (true) {
        const line = document.createElement("div");
        // Read the address of the next line. We ignore this (as does Basic when
        // loading programs), only using it to detect end of program. (In the real
        // Basic these are regenerated after loading.)
        const address = b.readShort(true);
        if (address === EOF) {
            Basic_add(line, "[EOF in next line's address]", classes.error);
            break;
        }
        // Zero address indicates end of program.
        if (address === 0) {
            break;
        }
        // Read current line number.
        const lineNumber = b.readShort(false);
        if (lineNumber === EOF) {
            Basic_add(line, "[EOF in line number]", classes.error);
            break;
        }
        let e = Basic_add(line, lineNumber.toString(), classes.lineNumber);
        elements[b.addr() - 2] = e;
        e = Basic_add(line, " ", classes.regular);
        elements[b.addr() - 1] = e;
        // Read rest of line.
        let c; // Uint8 value.
        let ch; // String value.
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
            }
            else if (ch === ":" && state === COLON) {
                e = Basic_add(line, ":", classes.punctuation);
                elements[b.addr() - 1] = e;
            }
            else if (c === REM && state === COLON) {
                state = COLON_REM;
            }
            else if (c === REMQUOT && state === COLON_REM) {
                e = Basic_add(line, "'", classes.comment);
                elements[b.addr() - 1] = e;
                state = RAW;
            }
            else if (c === ELSE && state === COLON) {
                e = Basic_add(line, "ELSE", classes.keyword);
                elements[b.addr() - 1] = e;
                state = NORMAL;
            }
            else {
                if (state === COLON || state === COLON_REM) {
                    e = Basic_add(line, ":", classes.punctuation);
                    elements[b.addr() - 1] = e;
                    if (state === COLON_REM) {
                        e = Basic_add(line, "REM", classes.comment);
                        elements[b.addr() - 1] = e;
                        state = RAW;
                    }
                    else {
                        state = NORMAL;
                    }
                }
                switch (state) {
                    case NORMAL:
                        const token = getToken(c);
                        if (token !== undefined) {
                            e = Basic_add(line, token, c === DATA || c === REM ? classes.comment
                                : token.length === 1 ? classes.punctuation
                                    : classes.keyword);
                        }
                        else {
                            e = Basic_add(line, ch, ch === '"' ? classes.string : classes.regular);
                        }
                        elements[b.addr() - 1] = e;
                        if (c === DATA || c === REM) {
                            state = RAW;
                        }
                        else if (ch === '"') {
                            state = STRING_LITERAL;
                        }
                        break;
                    case STRING_LITERAL:
                        if (ch === "\r") {
                            e = Basic_add(line, "\\n", classes.punctuation);
                        }
                        else if (ch === "\\") {
                            e = Basic_add(line, "\\" + pad(c, 8, 3), classes.punctuation);
                        }
                        else if (c >= 32 && c < 128) {
                            e = Basic_add(line, ch, classes.string);
                        }
                        else {
                            e = Basic_add(line, "\\" + pad(c, 8, 3), classes.punctuation);
                        }
                        elements[b.addr() - 1] = e;
                        if (ch === '"') {
                            // End of string.
                            state = NORMAL;
                        }
                        break;
                    case RAW:
                        e = Basic_add(line, ch, classes.comment);
                        elements[b.addr() - 1] = e;
                        break;
                }
            }
        }
        if (c === EOF) {
            Basic_add(line, "[EOF in line]", classes.error);
            break;
        }
        // Deal with eaten tokens.
        if (state === COLON || state === COLON_REM) {
            e = Basic_add(line, ":", classes.punctuation);
            elements[b.addr() - 1] = e;
            if (state === COLON_REM) {
                e = Basic_add(line, "REM", classes.comment);
            }
            elements[b.addr() - 1] = e;
            /// state = NORMAL;
        }
        // Append last line.
        out.appendChild(line);
    }
    return elements;
}

// CONCATENATED MODULE: ./src/Hexdump.ts
// Tools for generating a hex dump of a binary file.


// Stylesheet.
const Hexdump_BACKGROUND_COLOR = "#1E1E1E";
const Hexdump_STYLE = {
    address: {
        color: "#858585",
        "&$highlighted": {
            backgroundColor: "#858585",
            color: Hexdump_BACKGROUND_COLOR,
        },
    },
    hex: {
        color: "#D4D4D4",
        "&$highlighted": {
            backgroundColor: "#D4D4D4",
            color: Hexdump_BACKGROUND_COLOR,
        },
    },
    ascii: {
        color: "#D4D4D4",
        "&$highlighted": {
            backgroundColor: "#D4D4D4",
            color: Hexdump_BACKGROUND_COLOR,
        },
    },
    asciiUnprintable: {
        color: "#858585",
        "&$highlighted": {
            backgroundColor: "#858585",
            color: Hexdump_BACKGROUND_COLOR,
        },
    },
    selected: {
        backgroundColor: "#555555",
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
            hexElements.push(e);
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
            asciiElements.push(e);
            line.appendChild(e);
        }
        div.appendChild(line);
    }
    return [hexElements, asciiElements];
}

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


// CONCATENATED MODULE: ./node_modules/trs80-emulator/dist/module/css.js
/* harmony default export */ var module_css = (`

.trs80-emulator {
    display: inline-block;
    padding: 10px;
    background-color: #334843;
    border-radius: 8px;
    /* Pack the lines tightly: */
    line-height: 1px;
}

.trs80-emulator span {
    display: inline-block;
    white-space: pre;
    width: 8px;
    height: 24px;
    background-position: 0 0; /* Blank */
    background-repeat: no-repeat;
}

.trs80-emulator-expanded span {
    width: 16px;
}

.trs80-emulator-expanded .trs80-emulator-odd-column {
    display: none;
}

/* Put this at the bottom to make it easier to edit the text above. */
.trs80-emulator span {
    /* Generate with "base64 font.png". */
    background-image: url("data:image/png;base64,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");
}
`);

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
            console.log("Unknown key \"" + key + "\"");
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

// CONCATENATED MODULE: ./node_modules/trs80-emulator/dist/module/Model3Rom.js
const model3Rom = `
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
`;

// CONCATENATED MODULE: ./node_modules/trs80-emulator/dist/module/Trs80.js





// IRQs
const CASSETTE_RISE_IRQ_MASK = 0x01;
const CASSETTE_FALL_IRQ_MASK = 0x02;
const TIMER_IRQ_MASK = 0x04;
const IO_BUS_IRQ_MASK = 0x08;
const UART_SED_IRQ_MASK = 0x10;
const UART_RECEIVE_IRQ_MASK = 0x20;
const UART_ERROR_IRQ_MASK = 0x40;
const CASSETTE_IRQ_MASKS = CASSETTE_RISE_IRQ_MASK | CASSETTE_FALL_IRQ_MASK;
// NMIs
const RESET_NMI_MASK = 0x20;
const DISK_MOTOR_OFF_NMI_MASK = 0x40;
const DISK_INTRQ_NMI_MASK = 0x80;
// Timer.
const TIMER_HZ = 30;
const ROM_SIZE = 14 * 1024;
const RAM_START = 16 * 1024;
const SCREEN_ADDRESS = 15 * 1024;
// https://en.wikipedia.org/wiki/TRS-80#Model_III
const CLOCK_HZ = 2030000;
const INITIAL_CLICKS_PER_TICK = 2000;
const CSS_PREFIX = "trs80-emulator";
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
function isScreenAddress(address) {
    return address >= SCREEN_ADDRESS && address < SCREEN_ADDRESS + 1024;
}
/**
 * HAL for the TRS-80 Model III.
 */
class Trs80_Trs80 {
    constructor(parentNode, cassette) {
        this.tStateCount = 0;
        this.memory = new Uint8Array(64 * 1024);
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
        // Make our own sub-node that we have control over.
        const node = document.createElement("div");
        parentNode.appendChild(node);
        this.node = node;
        this.cassette = cassette;
        this.memory.fill(0);
        const raw = window.atob(model3Rom);
        for (let i = 0; i < raw.length; i++) {
            this.memory[i] = raw.charCodeAt(i);
        }
        this.tStateCount = 0;
        this.keyboard.configureKeyboard();
        this.configureNode();
        this.configureStyle();
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
        if (this.tStateCount > this.previousTimerClock + Trs80_Trs80.TIMER_CYCLES) {
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
            return this.memory[address];
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
            return 0xFF;
        }
    }
    readPort(address) {
        const port = address & 0xFF;
        let value;
        switch (port) {
            case 0xE0:
                // IRQ latch read.
                value = ~this.irqLatch & 0xFF;
                break;
            case 0xE4:
                // NMI latch read.
                value = ~this.nmiLatch & 0xFF;
                break;
            case 0xEC:
            case 0xED:
            case 0xEE:
            case 0xEF:
                // Acknowledge timer.
                this.setTimerInterrupt(false);
                value = 0xFF;
                break;
            case 0xF0:
                // No diskette.
                value = 0xFF;
                break;
            case 0xFF:
                // Cassette and various flags.
                value = (this.modeImage & 0x7E) | this.getCassetteByte();
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
                // Set interrupt mask.
                this.setIrqMask(value);
                break;
            case 0xE4:
            case 0xE5:
            case 0xE6:
            case 0xE7:
                // Set NMI state.
                this.setNmiMask(value);
                break;
            case 0xEC:
            case 0xED:
            case 0xEE:
            case 0xEF:
                // Various controls.
                this.modeImage = value;
                this.setCassetteMotor((value & 0x02) !== 0);
                // TODO
                // this.setExpandedCharacters((value & 0x04) !== 0);
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
            if (address >= 15360 && address < 16384) {
                const chList = this.node.getElementsByClassName(CSS_PREFIX + "-c" + address);
                if (chList.length > 0) {
                    const ch = chList[0];
                    // It'd be nice to put the character there so that copy-and-paste works.
                    /// ch.innerText = String.fromCharCode(value);
                    for (let i = 0; i < ch.classList.length; i++) {
                        const className = ch.classList[i];
                        if (className.startsWith(CSS_PREFIX + "-char-")) {
                            ch.classList.remove(className);
                            // There should only be one.
                            break;
                        }
                    }
                    ch.classList.add(CSS_PREFIX + "-char-" + value);
                }
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
    // Reset whether we've seen this NMI interrupt if the mask and latch no longer overlap.
    updateNmiSeen() {
        if ((this.nmiLatch & this.nmiMask) === 0) {
            this.nmiSeen = false;
        }
    }
    configureNode() {
        if (this.node.classList.contains(CSS_PREFIX)) {
            // Already configured.
            return;
        }
        this.node.classList.add(CSS_PREFIX);
        this.node.classList.add(CSS_PREFIX + "-narrow");
        for (let offset = 0; offset < 1024; offset++) {
            const address = SCREEN_ADDRESS + offset;
            const c = document.createElement("span");
            c.classList.add(CSS_PREFIX + "-c" + address);
            if (offset % 2 === 0) {
                c.classList.add(CSS_PREFIX + "-even-column");
            }
            else {
                c.classList.add(CSS_PREFIX + "-odd-column");
            }
            c.innerText = " ";
            this.node.appendChild(c);
            // Newlines.
            if (offset % 64 === 63) {
                this.node.appendChild(document.createElement("br"));
            }
        }
    }
    configureStyle() {
        const styleId = CSS_PREFIX + "-style";
        if (document.getElementById(styleId) !== null) {
            // Already created.
            return;
        }
        // Image is 512x480
        // 10 rows of glyphs, but last two are different page.
        // Use first 8 rows.
        // 32 chars across (32*8 = 256)
        // For thin font:
        //     256px wide.
        //     Chars are 8px wide (256/32 = 8)
        //     Chars are 24px high (480/2/10 = 24), with doubled rows.
        const lines = [];
        for (let ch = 0; ch < 256; ch++) {
            lines.push(`.${CSS_PREFIX}-narrow .${CSS_PREFIX}-char-${ch} { background-position: ${-(ch % 32) * 8}px ${-Math.floor(ch / 32) * 24}px; }`);
            lines.push(`.${CSS_PREFIX}-expanded .${CSS_PREFIX}-char-${ch} { background-position: ${-(ch % 32) * 16}px ${-Math.floor(ch / 32 + 10) * 24}px; }`);
        }
        const node = document.createElement("style");
        node.id = styleId;
        node.innerHTML = module_css + "\n\n" + lines.join("\n");
        document.head.appendChild(node);
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
            const expectedElapsed = this.tStateCount * 1000 / CLOCK_HZ;
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
        if (state) {
            this.irqLatch |= TIMER_IRQ_MASK;
        }
        else {
            this.irqLatch &= ~TIMER_IRQ_MASK;
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
        if (this.cassetteLastNonZeroValue === CassetteValue.POSITIVE) {
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
                setTimeout(() => this.kickOffCassette(), 1000);
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
                this.cassette.samplesPerSecond / CLOCK_HZ);
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
        this.irqLatch = (this.irqLatch & ~CASSETTE_RISE_IRQ_MASK) |
            (this.irqMask & CASSETTE_RISE_IRQ_MASK);
    }
    // Saw a negative edge on cassette.
    cassetteFallInterrupt() {
        this.cassetteFallInterruptCount++;
        this.irqLatch = (this.irqLatch & ~CASSETTE_FALL_IRQ_MASK) |
            (this.irqMask & CASSETTE_FALL_IRQ_MASK);
    }
}
Trs80_Trs80.TIMER_CYCLES = CLOCK_HZ / TIMER_HZ;

// CONCATENATED MODULE: ./node_modules/trs80-emulator/dist/module/index.js



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

// EXTERNAL MODULE: ./node_modules/strongly-typed-events/dist/index.js
var dist = __webpack_require__(0);

// CONCATENATED MODULE: ./src/WaveformDisplay.ts




/**
 * An individual waveform to be displayed.
 */
class Waveform {
    constructor(canvas, samples) {
        this.canvas = canvas;
        this.samples = samples;
    }
}
/**
 * Displays a list of different waveforms, synchronizing their pan and zoom.
 */
class WaveformDisplay_WaveformDisplay {
    constructor() {
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
    }
    /**
     * Add a waveform to display.
     */
    addWaveform(canvas, samples) {
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
        this.waveforms.push(new Waveform(canvas, samples));
        this.configureCanvas(canvas);
    }
    /**
     * Add a program to highlight in the waveform.
     */
    addProgram(program) {
        this.programs.push(program);
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
        this.draw();
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
            this.setZoom(-parseInt(input.value));
        });
        return label;
    }
    /**
     * Configure the mouse events in the canvas.
     */
    configureCanvas(canvas) {
        let dragging = false;
        let dragInitialX = 0;
        let dragInitialCenterSample = 0;
        let inCanvas = false;
        let holdingAlt = false;
        let selectionStart = undefined;
        const updateCursor = () => {
            canvas.style.cursor = holdingAlt ? "auto" : dragging ? "grabbing" : "grab";
        };
        updateCursor();
        // Mouse enter/leave events.
        canvas.addEventListener("mouseenter", event => {
            inCanvas = true;
            holdingAlt = event.altKey;
            updateCursor();
        });
        canvas.addEventListener("mouseleave", () => {
            inCanvas = false;
        });
        // Mouse click events.
        canvas.addEventListener("mousedown", event => {
            if (holdingAlt) {
                const frame = this.screenXToOriginalFrame(event.offsetX);
                const highlight = this.highlightAt(frame);
                if (highlight !== undefined) {
                    selectionStart = highlight;
                    this.onSelection.dispatch(highlight);
                }
            }
            else {
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
                selectionStart = undefined;
            }
        });
        canvas.addEventListener("mousemove", event => {
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
            else if (holdingAlt) {
                const frame = this.screenXToOriginalFrame(event.offsetX);
                const highlight = this.highlightAt(frame);
                this.onHighlight.dispatch(highlight);
            }
        });
        // Keyboard events.
        document.addEventListener("keydown", event => {
            if (inCanvas) {
                if (event.key === "Alt") {
                    holdingAlt = true;
                    updateCursor();
                }
            }
        });
        document.addEventListener("keyup", event => {
            if (inCanvas) {
                if (event.key === "Alt") {
                    holdingAlt = false;
                    updateCursor();
                }
            }
        });
    }
    /**
     * Draw all the waveforms.
     */
    draw() {
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
        // Background.
        ctx.fillStyle = "rgb(0, 0, 0)";
        ctx.fillRect(0, 0, width, height);
        if (displaySamples === undefined) {
            return;
        }
        const samplesList = displaySamples.samplesList;
        const samples = samplesList[this.zoom];
        const mag = Math.pow(2, this.zoom);
        const centerSample = Math.floor(this.centerSample / mag);
        const frameToX = (i) => Math.floor(width / 2) + (i - centerSample);
        // Compute viewing window in zoom space.
        const firstSample = Math.max(centerSample - Math.floor(width / 2), 0);
        const lastSample = Math.min(centerSample + width - 1, samples.length - 1);
        // Compute viewing window in original space.
        const firstOrigSample = Math.floor(firstSample * mag);
        const lastOrigSample = Math.ceil(lastSample * mag);
        // Whether we're zoomed in enough to draw and line and individual bits.
        const drawingLine = this.zoom < 3;
        // Selection.
        if (this.startSelectionFrame !== undefined && this.endSelectionFrame !== undefined) {
            ctx.fillStyle = "rgb(50, 50, 50)";
            const x1 = frameToX(this.startSelectionFrame / mag);
            const x2 = frameToX(this.endSelectionFrame / mag);
            ctx.fillRect(x1, 0, Math.max(x2 - x1, 1), height);
        }
        // Highlight.
        if (this.startHighlightFrame !== undefined && this.endHighlightFrame !== undefined) {
            ctx.fillStyle = "rgb(75, 75, 75)";
            const x1 = frameToX(this.startHighlightFrame / mag);
            const x2 = frameToX(this.endHighlightFrame / mag);
            ctx.fillRect(x1, 0, Math.max(x2 - x1, 1), height);
        }
        // Programs and bits.
        for (const program of this.programs) {
            if (drawingLine) {
                // Highlight bits.
                for (const bitInfo of program.bitData) {
                    if (bitInfo.endFrame >= firstOrigSample && bitInfo.startFrame <= lastOrigSample) {
                        const x1 = frameToX(bitInfo.startFrame / mag);
                        const x2 = frameToX(bitInfo.endFrame / mag);
                        let braceColor;
                        let label;
                        let labelColor;
                        switch (bitInfo.bitType) {
                            case BitType.ZERO:
                                braceColor = "rgb(150, 150, 150)";
                                labelColor = "rgb(255, 255, 255)";
                                label = "0";
                                break;
                            case BitType.ONE:
                                braceColor = "rgb(150, 150, 150)";
                                labelColor = "rgb(255, 255, 255)";
                                label = "1";
                                break;
                            case BitType.START:
                                braceColor = "rgb(50, 200, 50)";
                                labelColor = "rgb(100, 255, 100)";
                                label = "START";
                                break;
                            case BitType.BAD:
                                braceColor = "rgb(200, 50, 50)";
                                labelColor = "rgb(255, 100, 100)";
                                label = "BAD";
                                break;
                        }
                        this.drawBraceAndLabel(ctx, x1, x2, braceColor, label, labelColor);
                    }
                }
            }
            else if (this.zoom < 5) {
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
                                        : "0x" + byteValue.toString(16).padStart(2, "0").toUpperCase();
                        this.drawBraceAndLabel(ctx, x1, x2, "rgb(150, 150, 150)", label, "rgb(255, 255, 255)");
                    }
                }
            }
            else {
                // Highlight the whole program.
                const x1 = frameToX(program.startFrame / mag);
                const x2 = frameToX(program.endFrame / mag);
                this.drawBraceAndLabel(ctx, x1, x2, "rgb(150, 150, 150)", program.getProgramLabel(), "rgb(255, 255, 255)");
            }
        }
        // Draw waveform.
        ctx.strokeStyle = "rgb(255, 255, 255)";
        if (drawingLine) {
            ctx.beginPath();
        }
        for (let i = firstSample; i <= lastSample; i++) {
            const value = samples[i];
            const x = frameToX(i);
            const y = value * height / 2;
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
    }
    /**
     * Set the zoom level to a particular value.
     */
    setZoom(zoom) {
        const newZoom = Math.min(Math.max(0, zoom), this.maxZoom);
        if (newZoom !== this.zoom) {
            this.zoom = newZoom;
            this.onZoom.dispatch(newZoom);
            this.draw();
        }
    }
    /**
     * Zoom in one level.
     */
    zoomIn() {
        this.setZoom(this.zoom - 1);
    }
    /**
     * Zoom out one level.
     */
    zoomOut() {
        this.setZoom(this.zoom + 1);
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
        this.setZoom(this.computeFitLevel(sampleCount));
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
     * Draw a down-facing brace withe specified label.
     */
    drawBraceAndLabel(ctx, left, right, braceColor, label, labelColor) {
        const middle = (left + right) / 2;
        // Don't use a custom font here, they load asynchronously and we're not told when they
        // finish loading, so we can't redraw and the initial draw uses some default serif font.
        ctx.font = '10pt monospace';
        ctx.fillStyle = labelColor;
        ctx.textAlign = "center";
        ctx.textBaseline = "alphabetic";
        ctx.fillText(label, middle, 38);
        ctx.strokeStyle = braceColor;
        ctx.lineWidth = 1;
        this.drawBrace(ctx, left, middle, right, 40, 380);
    }
    /**
     * Draw a horizontal brace, pointing up, facing down.
     */
    drawBrace(ctx, left, middle, right, top, bottom) {
        const radius = Math.min(10, (right - left) / 4);
        const lineY = top + 20;
        ctx.beginPath();
        ctx.moveTo(left, bottom);
        ctx.arcTo(left, lineY, left + radius, lineY, radius);
        ctx.arcTo(middle, lineY, middle, top, radius);
        ctx.arcTo(middle, lineY, middle + radius, lineY, radius);
        ctx.arcTo(right, lineY, right, lineY + radius, radius);
        ctx.lineTo(right, bottom);
        ctx.stroke();
    }
    /**
     * Convert a screen (pixel) X location to the frame number in the original waveform.
     */
    screenXToOriginalFrame(screenX) {
        const mag = Math.pow(2, this.zoom);
        // Offset in pixels from center of canvas.
        const pixelOffset = screenX - Math.floor(this.displayWidth / 2);
        return this.centerSample + pixelOffset * mag;
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
            elements[i] = e;
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
            elements[i] = e;
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
 * Generic cassette that reads from a Float32Array.
 */
class TapeBrowser_Float32Cassette extends Cassette {
    constructor(samples, samplesPerSecond) {
        super();
        this.frame = 0;
        this.samples = samples;
        this.samplesPerSecond = samplesPerSecond;
    }
    setProgressBar(progressBar) {
        this.progressBar = progressBar;
        this.progressBar.max = this.samples.length;
    }
    onMotorStart() {
        if (this.progressBar !== undefined) {
            this.progressBar.classList.remove("hidden");
        }
    }
    readSample() {
        if (this.frame % this.samplesPerSecond === 0) {
            console.log("Reading tape at " + frameToTimestamp(this.frame));
        }
        if (this.progressBar !== undefined && this.frame % Math.floor(this.samplesPerSecond / 10) === 0) {
            this.progressBar.value = this.frame;
        }
        return this.frame < this.samples.length ? this.samples[this.frame++] : 0;
    }
    onMotorStop() {
        if (this.progressBar !== undefined) {
            this.progressBar.classList.add("hidden");
        }
    }
}
/**
 * Implementation of Cassette that reads from our displayed data.
 */
class TapeCassette extends TapeBrowser_Float32Cassette {
    constructor(tape, program) {
        const samples = tape.originalSamples.samplesList[0];
        // Start one second before the official program start, so that the machine
        // can detect the header.
        const begin = Math.max(0, program.startFrame - tape.sampleRate);
        // Go until one second after the detected end of our program.
        const end = Math.min(samples.length, program.endFrame + tape.sampleRate);
        super(samples.subarray(begin, end), tape.sampleRate);
    }
}
/**
 * Implementation of Cassette that reads from our high-speed reconstruction.
 */
class TapeBrowser_ReconstructedCassette extends TapeBrowser_Float32Cassette {
    constructor(program) {
        super(program.reconstructedSamples.samplesList[0], HZ);
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
 * Remove all children from element.
 */
function clearElement(e) {
    while (e.firstChild) {
        e.removeChild(e.firstChild);
    }
}
/**
 * Helper class to highlight or select elements.
 */
class TapeBrowser_Highlighter {
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
     * Add an element to be highlighted.
     */
    addElement(byteIndex, element) {
        // Allow undefined element for convenience of caller. Just ignore it.
        if (element === undefined) {
            return;
        }
        this.elements[byteIndex] = element;
        // Set up event listeners for highlighting.
        element.addEventListener("mouseenter", () => {
            this.tapeBrowser.setHighlight(new Highlight(this.program, byteIndex));
            if (this.selectionBeginIndex !== undefined) {
                this.tapeBrowser.setSelection(new Highlight(this.program, this.selectionBeginIndex, byteIndex));
            }
        });
        element.addEventListener("mouseleave", () => {
            if (this.selectionBeginIndex === undefined) {
                this.tapeBrowser.setHighlight(undefined);
            }
        });
        // Set up event listeners for selecting.
        element.addEventListener("mousedown", event => {
            this.tapeBrowser.setSelection(new Highlight(this.program, byteIndex));
            this.selectionBeginIndex = byteIndex;
            event.preventDefault();
        });
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
/**
 * UI for browsing a tape interactively.
 */
class TapeBrowser_TapeBrowser {
    constructor(tape, waveforms, originalCanvas, filteredCanvas, lowSpeedCanvas, tapeContents, topData) {
        this.originalWaveformDisplay = new WaveformDisplay_WaveformDisplay();
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
    makeWaveforms(parent, waveformDisplay, sampleSets) {
        clearElement(parent);
        const zoomControls = document.createElement("div");
        zoomControls.appendChild(waveformDisplay.makeZoomControls());
        parent.appendChild(zoomControls);
        for (const sampleSet of sampleSets) {
            let label = document.createElement("p");
            label.innerText = sampleSet.label;
            parent.appendChild(label);
            let canvas = document.createElement("canvas");
            canvas.width = 800;
            canvas.height = 400;
            waveformDisplay.addWaveform(canvas, sampleSet.samples);
            parent.appendChild(canvas);
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
    }
    /**
     * Make the lower-right pane of original waveforms.
     */
    makeOriginalSamplesWaveforms(waveforms) {
        this.makeWaveforms(waveforms, this.originalWaveformDisplay, [
            {
                label: "Original waveform:",
                samples: this.tape.originalSamples,
            },
            {
                label: "High-pass filtered to get rid of DC:",
                samples: this.tape.filteredSamples,
            },
            {
                label: "Differentiated for low-speed decoding:",
                samples: this.tape.lowSpeedSamples,
            },
        ]);
    }
    /**
     * Make pane of metadata for a program.
     */
    makeMetadataPane(program, basicPane, edtasmPane) {
        const div = document.createElement("div");
        div.classList.add("metadata");
        const h1 = document.createElement("h1");
        h1.innerText = "Track " + program.trackNumber + ", copy " + program.copyNumber;
        div.appendChild(h1);
        const table = document.createElement("table");
        div.appendChild(table);
        const addKeyValue = (key, value, click) => {
            const row = document.createElement("tr");
            const keyElement = document.createElement("td");
            keyElement.classList.add("key");
            keyElement.innerText = key + ":";
            row.appendChild(keyElement);
            const valueElement = document.createElement("td");
            valueElement.classList.add("value");
            valueElement.innerText = value;
            if (click !== undefined) {
                valueElement.classList.add("clickable");
                valueElement.addEventListener("click", click);
            }
            row.appendChild(valueElement);
            table.appendChild(row);
        };
        addKeyValue("Decoder", program.decoderName);
        addKeyValue("Start time", frameToTimestamp(program.startFrame), () => this.originalWaveformDisplay.zoomToFit(program.startFrame - 100, program.startFrame + 100));
        addKeyValue("End time", frameToTimestamp(program.endFrame), () => this.originalWaveformDisplay.zoomToFit(program.endFrame - 100, program.endFrame + 100));
        addKeyValue("Duration", frameToTimestamp(program.endFrame - program.startFrame, true), () => this.originalWaveformDisplay.zoomToFit(program.startFrame, program.endFrame));
        if (basicPane !== undefined) {
            addKeyValue("Type", "Basic program", () => this.showPane(basicPane));
        }
        else if (edtasmPane !== undefined) {
            addKeyValue("Type", "Assembly program (" + edtasmPane.edtasmName + ")", () => this.showPane(edtasmPane));
        }
        else {
            addKeyValue("Type", "Unknown");
        }
        let count = 1;
        for (const bitData of program.bitData) {
            if (bitData.bitType === BitType.BAD) {
                addKeyValue("Bit error " + count++, frameToTimestamp(bitData.startFrame), () => this.originalWaveformDisplay.zoomToBitData(bitData));
            }
        }
        return new Pane(div);
    }
    makeBinaryPane(program) {
        const div = document.createElement("div");
        div.classList.add("program");
        const hexHighlighter = new TapeBrowser_Highlighter(this, program, div);
        const asciiHighlighter = new TapeBrowser_Highlighter(this, program, div);
        const [hexElements, asciiElements] = Hexdump_create(program.binary, div);
        hexElements.forEach((e, byteIndex) => hexHighlighter.addElement(byteIndex, e));
        asciiElements.forEach((e, byteIndex) => asciiHighlighter.addElement(byteIndex, e));
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
    makeReconstructedPane(program) {
        const div = document.createElement("div");
        div.classList.add("reconstructed_waveform");
        this.makeWaveforms(div, new WaveformDisplay_WaveformDisplay(), [
            {
                label: "Reconstructed high-speed waveform:",
                samples: program.reconstructedSamples,
            }
        ]);
        return new Pane(div);
    }
    makeBasicPane(program) {
        const div = document.createElement("div");
        div.classList.add("program");
        const elements = fromTokenized(program.binary, div);
        const highlighter = new TapeBrowser_Highlighter(this, program, div);
        elements.forEach((e, byteIndex) => highlighter.addElement(byteIndex, e));
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
    makeEdtasmPane(program) {
        const div = document.createElement("div");
        div.classList.add("program");
        const [name, elements] = decodeEdtasm(program.binary, div);
        const highlighter = new TapeBrowser_Highlighter(this, program, div);
        elements.forEach((e, byteIndex) => highlighter.addElement(byteIndex, e));
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
        pane.edtasmName = name;
        pane.didShow = () => {
            highlighter.didShow();
        };
        return pane;
    }
    makeEmulatorPane(program, cassette) {
        const div = document.createElement("div");
        const screen = document.createElement("div");
        div.appendChild(screen);
        const progressBar = document.createElement("progress");
        progressBar.classList.add("hidden");
        cassette.setProgressBar(progressBar);
        div.appendChild(progressBar);
        const trs80 = new Trs80_Trs80(screen, cassette);
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
        // Add a row to the table of contents.
        const addRow = (text, onClick) => {
            const div = document.createElement("div");
            div.classList.add("tape_contents_row");
            div.innerText = text;
            if (onClick !== undefined) {
                div.classList.add("selectable_row");
                div.onclick = onClick;
            }
            this.tapeContents.appendChild(div);
            return div;
        };
        // Show the name of the whole tape.
        const title = addRow(this.tape.name);
        title.classList.add("tape_title");
        // Create panes for each program.
        for (const program of this.tape.programs) {
            // Header for program.
            const row = addRow(program.getProgramLabel());
            row.classList.add("program_title");
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
            // Make these panes here so they're accessible from the metadata page.
            const basicPane = program.isBasicProgram() ? this.makeBasicPane(program) : undefined;
            const edtasmPane = program.isEdtasmProgram() ? this.makeEdtasmPane(program) : undefined;
            // Metadata pane.
            let metadataLabel = frameToTimestamp(program.startFrame, true) + " to " +
                frameToTimestamp(program.endFrame, true) + " (" +
                frameToTimestamp(program.endFrame - program.startFrame, true) + ")";
            addPane(metadataLabel, this.makeMetadataPane(program, basicPane, edtasmPane));
            // Make the various panes.
            addPane("Binary", this.makeBinaryPane(program));
            addPane("Reconstructed", this.makeReconstructedPane(program));
            if (basicPane !== undefined) {
                addPane("Basic", basicPane);
                addPane("Emulator (original)", this.makeEmulatorPane(program, new TapeCassette(this.tape, program)));
                addPane("Emulator (reconstructed)", this.makeEmulatorPane(program, new TapeBrowser_ReconstructedCassette(program)));
            }
            if (edtasmPane !== undefined) {
                addPane("Assembly (" + edtasmPane.edtasmName + ")", edtasmPane);
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
class Uploader {
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
        console.log("File " + file.name + " has size " + file.size);
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
        const audioCtx = new window.AudioContext();
        audioCtx.decodeAudioData(arrayBuffer).then((b) => this.handleAudioBuffer(pathname, b));
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

// CONCATENATED MODULE: ./src/Main.ts





const dropZone = document.getElementById("drop_zone");
const dropUpload = document.getElementById("drop_upload");
const dropS3 = document.querySelectorAll("#test_files button");
const dropProgress = document.getElementById("drop_progress");
let uploader;
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
function handleAudioBuffer(pathname, audioBuffer) {
    console.log("Audio is " + audioBuffer.duration + " seconds, " +
        audioBuffer.numberOfChannels + " channels, " +
        audioBuffer.sampleRate + " Hz");
    // TODO check that there's 1 channel.
    const samples = audioBuffer.getChannelData(0);
    const tape = new Tape_Tape(nameFromPathname(pathname), samples, audioBuffer.sampleRate);
    const decoder = new Decoder_Decoder(tape);
    decoder.decode();
    const tapeBrowser = new TapeBrowser_TapeBrowser(tape, document.getElementById("waveforms"), document.getElementById("original_canvas"), document.getElementById("filtered_canvas"), document.getElementById("low_speed_canvas"), document.getElementById("tape_contents"), document.getElementById("top_data"));
    // Switch screens.
    const dropScreen = document.getElementById("drop_screen");
    const dataScreen = document.getElementById("data_screen");
    dropScreen.classList.add("hidden");
    dataScreen.classList.remove("hidden");
    /*
    const loadAnotherButton = document.getElementById("load_another_button") as HTMLButtonElement;
    loadAnotherButton.onclick = () => {
        dropScreen.classList.remove("hidden");
        dataScreen.classList.add("hidden");
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
function main() {
    uploader = new Uploader(dropZone, dropUpload, dropS3, dropProgress, handleAudioBuffer);
}

// CONCATENATED MODULE: ./src/index.ts

main();


/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map