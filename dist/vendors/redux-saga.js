(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 299);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "qEnd", function() { return qEnd; });
/* harmony export (immutable) */ __webpack_exports__["safeName"] = safeName;
/* harmony export (immutable) */ __webpack_exports__["default"] = fsmIterator;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(18);


var done = { done: true, value: undefined };
var qEnd = {};

function safeName(patternOrChannel) {
  if (__WEBPACK_IMPORTED_MODULE_0__utils__["is"].channel(patternOrChannel)) {
    return 'channel';
  } else if (Array.isArray(patternOrChannel)) {
    return String(patternOrChannel.map(function (entry) {
      return String(entry);
    }));
  } else {
    return String(patternOrChannel);
  }
}

function fsmIterator(fsm, q0) {
  var name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'iterator';

  var updateState = void 0,
      qNext = q0;

  function next(arg, error) {
    if (qNext === qEnd) {
      return done;
    }

    if (error) {
      qNext = qEnd;
      throw error;
    } else {
      updateState && updateState(arg);

      var _fsm$qNext = fsm[qNext](),
          q = _fsm$qNext[0],
          output = _fsm$qNext[1],
          _updateState = _fsm$qNext[2];

      qNext = q;
      updateState = _updateState;
      return qNext === qEnd ? done : output;
    }
  }

  return Object(__WEBPACK_IMPORTED_MODULE_0__utils__["makeIterator"])(next, function (error) {
    return next(null, error);
  }, name, true);
}

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["asap"] = asap;
/* harmony export (immutable) */ __webpack_exports__["suspend"] = suspend;
/* harmony export (immutable) */ __webpack_exports__["flush"] = flush;
var queue = [];
/**
  Variable to hold a counting semaphore
  - Incrementing adds a lock and puts the scheduler in a `suspended` state (if it's not
    already suspended)
  - Decrementing releases a lock. Zero locks puts the scheduler in a `released` state. This
    triggers flushing the queued tasks.
**/
var semaphore = 0;

/**
  Executes a task 'atomically'. Tasks scheduled during this execution will be queued
  and flushed after this task has finished (assuming the scheduler endup in a released
  state).
**/
function exec(task) {
  try {
    suspend();
    task();
  } finally {
    release();
  }
}

/**
  Executes or queues a task depending on the state of the scheduler (`suspended` or `released`)
**/
function asap(task) {
  queue.push(task);

  if (!semaphore) {
    suspend();
    flush();
  }
}

/**
  Puts the scheduler in a `suspended` state. Scheduled tasks will be queued until the
  scheduler is released.
**/
function suspend() {
  semaphore++;
}

/**
  Puts the scheduler in a `released` state.
**/
function release() {
  semaphore--;
}

/**
  Releases the current lock. Executes all queued tasks if the scheduler is in the released state.
**/
function flush() {
  release();

  var task = void 0;
  while (!semaphore && (task = queue.shift()) !== undefined) {
    exec(task);
  }
}

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (immutable) */ __webpack_exports__["runSaga"] = runSaga;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__proc__ = __webpack_require__(165);



var RUN_SAGA_SIGNATURE = 'runSaga(storeInterface, saga, ...args)';
var NON_GENERATOR_ERR = RUN_SAGA_SIGNATURE + ': saga argument must be a Generator function!';

function runSaga(storeInterface, saga) {
  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var iterator = void 0;

  if (__WEBPACK_IMPORTED_MODULE_0__utils__["is"].iterator(storeInterface)) {
    if (process.env.NODE_ENV === 'development') {
      Object(__WEBPACK_IMPORTED_MODULE_0__utils__["log"])('warn', 'runSaga(iterator, storeInterface) has been deprecated in favor of ' + RUN_SAGA_SIGNATURE);
    }
    iterator = storeInterface;
    storeInterface = saga;
  } else {
    Object(__WEBPACK_IMPORTED_MODULE_0__utils__["check"])(saga, __WEBPACK_IMPORTED_MODULE_0__utils__["is"].func, NON_GENERATOR_ERR);
    iterator = saga.apply(undefined, args);
    Object(__WEBPACK_IMPORTED_MODULE_0__utils__["check"])(iterator, __WEBPACK_IMPORTED_MODULE_0__utils__["is"].iterator, NON_GENERATOR_ERR);
  }

  var _storeInterface = storeInterface,
      subscribe = _storeInterface.subscribe,
      dispatch = _storeInterface.dispatch,
      getState = _storeInterface.getState,
      context = _storeInterface.context,
      sagaMonitor = _storeInterface.sagaMonitor,
      logger = _storeInterface.logger,
      onError = _storeInterface.onError;


  var effectId = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["uid"])();

  if (sagaMonitor) {
    // monitors are expected to have a certain interface, let's fill-in any missing ones
    sagaMonitor.effectTriggered = sagaMonitor.effectTriggered || __WEBPACK_IMPORTED_MODULE_0__utils__["noop"];
    sagaMonitor.effectResolved = sagaMonitor.effectResolved || __WEBPACK_IMPORTED_MODULE_0__utils__["noop"];
    sagaMonitor.effectRejected = sagaMonitor.effectRejected || __WEBPACK_IMPORTED_MODULE_0__utils__["noop"];
    sagaMonitor.effectCancelled = sagaMonitor.effectCancelled || __WEBPACK_IMPORTED_MODULE_0__utils__["noop"];
    sagaMonitor.actionDispatched = sagaMonitor.actionDispatched || __WEBPACK_IMPORTED_MODULE_0__utils__["noop"];

    sagaMonitor.effectTriggered({ effectId: effectId, root: true, parentEffectId: 0, effect: { root: true, saga: saga, args: args } });
  }

  var task = Object(__WEBPACK_IMPORTED_MODULE_1__proc__["default"])(iterator, subscribe, Object(__WEBPACK_IMPORTED_MODULE_0__utils__["wrapSagaDispatch"])(dispatch), getState, context, { sagaMonitor: sagaMonitor, logger: logger, onError: onError }, effectId, saga.name);

  if (sagaMonitor) {
    sagaMonitor.effectResolved(effectId, task);
  }

  return task;
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOT_ITERATOR_ERROR", function() { return NOT_ITERATOR_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANNEL_END", function() { return CHANNEL_END; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TASK_CANCEL", function() { return TASK_CANCEL; });
/* harmony export (immutable) */ __webpack_exports__["default"] = proc;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scheduler__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__io__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__channel__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__buffers__ = __webpack_require__(78);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _defineEnumerableProperties(obj, descs) { for (var key in descs) { var desc = descs[key]; desc.configurable = desc.enumerable = true; if ("value" in desc) desc.writable = true; Object.defineProperty(obj, key, desc); } return obj; }







var NOT_ITERATOR_ERROR = 'proc first argument (Saga function result) must be an iterator';

var CHANNEL_END = {
  toString: function toString() {
    return '@@redux-saga/CHANNEL_END';
  }
};
var TASK_CANCEL = {
  toString: function toString() {
    return '@@redux-saga/TASK_CANCEL';
  }
};

var matchers = {
  wildcard: function wildcard() {
    return __WEBPACK_IMPORTED_MODULE_0__utils__["kTrue"];
  },
  default: function _default(pattern) {
    return (typeof pattern === 'undefined' ? 'undefined' : _typeof(pattern)) === 'symbol' ? function (input) {
      return input.type === pattern;
    } : function (input) {
      return input.type === String(pattern);
    };
  },
  array: function array(patterns) {
    return function (input) {
      return patterns.some(function (p) {
        return matcher(p)(input);
      });
    };
  },
  predicate: function predicate(_predicate) {
    return function (input) {
      return _predicate(input);
    };
  }
};

function matcher(pattern) {
  // prettier-ignore
  return (pattern === '*' ? matchers.wildcard : __WEBPACK_IMPORTED_MODULE_0__utils__["is"].array(pattern) ? matchers.array : __WEBPACK_IMPORTED_MODULE_0__utils__["is"].stringableFunc(pattern) ? matchers.default : __WEBPACK_IMPORTED_MODULE_0__utils__["is"].func(pattern) ? matchers.predicate : matchers.default)(pattern);
}

/**
  Used to track a parent task and its forks
  In the new fork model, forked tasks are attached by default to their parent
  We model this using the concept of Parent task && main Task
  main task is the main flow of the current Generator, the parent tasks is the
  aggregation of the main tasks + all its forked tasks.
  Thus the whole model represents an execution tree with multiple branches (vs the
  linear execution tree in sequential (non parallel) programming)

  A parent tasks has the following semantics
  - It completes if all its forks either complete or all cancelled
  - If it's cancelled, all forks are cancelled as well
  - It aborts if any uncaught error bubbles up from forks
  - If it completes, the return value is the one returned by the main task
**/
function forkQueue(name, mainTask, cb) {
  var tasks = [],
      result = void 0,
      completed = false;
  addTask(mainTask);

  function abort(err) {
    cancelAll();
    cb(err, true);
  }

  function addTask(task) {
    tasks.push(task);
    task.cont = function (res, isErr) {
      if (completed) {
        return;
      }

      Object(__WEBPACK_IMPORTED_MODULE_0__utils__["remove"])(tasks, task);
      task.cont = __WEBPACK_IMPORTED_MODULE_0__utils__["noop"];
      if (isErr) {
        abort(res);
      } else {
        if (task === mainTask) {
          result = res;
        }
        if (!tasks.length) {
          completed = true;
          cb(result);
        }
      }
    };
    // task.cont.cancel = task.cancel
  }

  function cancelAll() {
    if (completed) {
      return;
    }
    completed = true;
    tasks.forEach(function (t) {
      t.cont = __WEBPACK_IMPORTED_MODULE_0__utils__["noop"];
      t.cancel();
    });
    tasks = [];
  }

  return {
    addTask: addTask,
    cancelAll: cancelAll,
    abort: abort,
    getTasks: function getTasks() {
      return tasks;
    },
    taskNames: function taskNames() {
      return tasks.map(function (t) {
        return t.name;
      });
    }
  };
}

function createTaskIterator(_ref) {
  var context = _ref.context,
      fn = _ref.fn,
      args = _ref.args;

  if (__WEBPACK_IMPORTED_MODULE_0__utils__["is"].iterator(fn)) {
    return fn;
  }

  // catch synchronous failures; see #152 and #441
  var result = void 0,
      error = void 0;
  try {
    result = fn.apply(context, args);
  } catch (err) {
    error = err;
  }

  // i.e. a generator function returns an iterator
  if (__WEBPACK_IMPORTED_MODULE_0__utils__["is"].iterator(result)) {
    return result;
  }

  // do not bubble up synchronous failures for detached forks
  // instead create a failed task. See #152 and #441
  return error ? Object(__WEBPACK_IMPORTED_MODULE_0__utils__["makeIterator"])(function () {
    throw error;
  }) : Object(__WEBPACK_IMPORTED_MODULE_0__utils__["makeIterator"])(function () {
    var pc = void 0;
    var eff = { done: false, value: result };
    var ret = function ret(value) {
      return { done: true, value: value };
    };
    return function (arg) {
      if (!pc) {
        pc = true;
        return eff;
      } else {
        return ret(arg);
      }
    };
  }());
}

var wrapHelper = function wrapHelper(helper) {
  return { fn: helper };
};

function proc(iterator) {
  var subscribe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {
    return __WEBPACK_IMPORTED_MODULE_0__utils__["noop"];
  };
  var dispatch = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : __WEBPACK_IMPORTED_MODULE_0__utils__["noop"];
  var getState = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : __WEBPACK_IMPORTED_MODULE_0__utils__["noop"];
  var parentContext = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
  var options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
  var parentEffectId = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
  var name = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 'anonymous';
  var cont = arguments[8];

  Object(__WEBPACK_IMPORTED_MODULE_0__utils__["check"])(iterator, __WEBPACK_IMPORTED_MODULE_0__utils__["is"].iterator, NOT_ITERATOR_ERROR);

  var effectsString = '[...effects]';
  var runParallelEffect = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["deprecate"])(runAllEffect, Object(__WEBPACK_IMPORTED_MODULE_0__utils__["updateIncentive"])(effectsString, 'all(' + effectsString + ')'));

  var sagaMonitor = options.sagaMonitor,
      logger = options.logger,
      onError = options.onError;

  var log = logger || __WEBPACK_IMPORTED_MODULE_0__utils__["log"];
  var stdChannel = Object(__WEBPACK_IMPORTED_MODULE_3__channel__["stdChannel"])(subscribe);
  var taskContext = Object.create(parentContext);
  /**
    Tracks the current effect cancellation
    Each time the generator progresses. calling runEffect will set a new value
    on it. It allows propagating cancellation to child effects
  **/
  next.cancel = __WEBPACK_IMPORTED_MODULE_0__utils__["noop"];

  /**
    Creates a new task descriptor for this generator, We'll also create a main task
    to track the main flow (besides other forked tasks)
  **/
  var task = newTask(parentEffectId, name, iterator, cont);
  var mainTask = { name: name, cancel: cancelMain, isRunning: true };
  var taskQueue = forkQueue(name, mainTask, end);

  /**
    cancellation of the main task. We'll simply resume the Generator with a Cancel
  **/
  function cancelMain() {
    if (mainTask.isRunning && !mainTask.isCancelled) {
      mainTask.isCancelled = true;
      next(TASK_CANCEL);
    }
  }

  /**
    This may be called by a parent generator to trigger/propagate cancellation
    cancel all pending tasks (including the main task), then end the current task.
     Cancellation propagates down to the whole execution tree holded by this Parent task
    It's also propagated to all joiners of this task and their execution tree/joiners
     Cancellation is noop for terminated/Cancelled tasks tasks
  **/
  function cancel() {
    /**
      We need to check both Running and Cancelled status
      Tasks can be Cancelled but still Running
    **/
    if (iterator._isRunning && !iterator._isCancelled) {
      iterator._isCancelled = true;
      taskQueue.cancelAll();
      /**
        Ending with a Never result will propagate the Cancellation to all joiners
      **/
      end(TASK_CANCEL);
    }
  }
  /**
    attaches cancellation logic to this task's continuation
    this will permit cancellation to propagate down the call chain
  **/
  cont && (cont.cancel = cancel);

  // tracks the running status
  iterator._isRunning = true;

  // kicks up the generator
  next();

  // then return the task descriptor to the caller
  return task;

  /**
    This is the generator driver
    It's a recursive async/continuation function which calls itself
    until the generator terminates or throws
  **/
  function next(arg, isErr) {
    // Preventive measure. If we end up here, then there is really something wrong
    if (!mainTask.isRunning) {
      throw new Error('Trying to resume an already finished generator');
    }

    try {
      var result = void 0;
      if (isErr) {
        result = iterator.throw(arg);
      } else if (arg === TASK_CANCEL) {
        /**
          getting TASK_CANCEL automatically cancels the main task
          We can get this value here
           - By cancelling the parent task manually
          - By joining a Cancelled task
        **/
        mainTask.isCancelled = true;
        /**
          Cancels the current effect; this will propagate the cancellation down to any called tasks
        **/
        next.cancel();
        /**
          If this Generator has a `return` method then invokes it
          This will jump to the finally block
        **/
        result = __WEBPACK_IMPORTED_MODULE_0__utils__["is"].func(iterator.return) ? iterator.return(TASK_CANCEL) : { done: true, value: TASK_CANCEL };
      } else if (arg === CHANNEL_END) {
        // We get CHANNEL_END by taking from a channel that ended using `take` (and not `takem` used to trap End of channels)
        result = __WEBPACK_IMPORTED_MODULE_0__utils__["is"].func(iterator.return) ? iterator.return() : { done: true };
      } else {
        result = iterator.next(arg);
      }

      if (!result.done) {
        runEffect(result.value, parentEffectId, '', next);
      } else {
        /**
          This Generator has ended, terminate the main task and notify the fork queue
        **/
        mainTask.isMainRunning = false;
        mainTask.cont && mainTask.cont(result.value);
      }
    } catch (error) {
      if (mainTask.isCancelled) {
        log('error', 'uncaught at ' + name, error.message);
      }
      mainTask.isMainRunning = false;
      mainTask.cont(error, true);
    }
  }

  function end(result, isErr) {
    iterator._isRunning = false;
    stdChannel.close();
    if (!isErr) {
      if (process.env.NODE_ENV === 'development' && result === TASK_CANCEL) {
        log('info', name + ' has been cancelled', '');
      }
      iterator._result = result;
      iterator._deferredEnd && iterator._deferredEnd.resolve(result);
    } else {
      if (result instanceof Error) {
        result.sagaStack = 'at ' + name + ' \n ' + (result.sagaStack || result.stack);
      }
      if (!task.cont) {
        log('error', 'uncaught', result.sagaStack || result.stack);
        if (result instanceof Error && onError) {
          onError(result);
        }
      }
      iterator._error = result;
      iterator._isAborted = true;
      iterator._deferredEnd && iterator._deferredEnd.reject(result);
    }
    task.cont && task.cont(result, isErr);
    task.joiners.forEach(function (j) {
      return j.cb(result, isErr);
    });
    task.joiners = null;
  }

  function runEffect(effect, parentEffectId) {
    var label = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    var cb = arguments[3];

    var effectId = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["uid"])();
    sagaMonitor && sagaMonitor.effectTriggered({ effectId: effectId, parentEffectId: parentEffectId, label: label, effect: effect });

    /**
      completion callback and cancel callback are mutually exclusive
      We can't cancel an already completed effect
      And We can't complete an already cancelled effectId
    **/
    var effectSettled = void 0;

    // Completion callback passed to the appropriate effect runner
    function currCb(res, isErr) {
      if (effectSettled) {
        return;
      }

      effectSettled = true;
      cb.cancel = __WEBPACK_IMPORTED_MODULE_0__utils__["noop"]; // defensive measure
      if (sagaMonitor) {
        isErr ? sagaMonitor.effectRejected(effectId, res) : sagaMonitor.effectResolved(effectId, res);
      }
      cb(res, isErr);
    }
    // tracks down the current cancel
    currCb.cancel = __WEBPACK_IMPORTED_MODULE_0__utils__["noop"];

    // setup cancellation logic on the parent cb
    cb.cancel = function () {
      // prevents cancelling an already completed effect
      if (effectSettled) {
        return;
      }

      effectSettled = true;
      /**
        propagates cancel downward
        catch uncaught cancellations errors; since we can no longer call the completion
        callback, log errors raised during cancellations into the console
      **/
      try {
        currCb.cancel();
      } catch (err) {
        log('error', 'uncaught at ' + name, err.message);
      }
      currCb.cancel = __WEBPACK_IMPORTED_MODULE_0__utils__["noop"]; // defensive measure

      sagaMonitor && sagaMonitor.effectCancelled(effectId);
    };

    /**
      each effect runner must attach its own logic of cancellation to the provided callback
      it allows this generator to propagate cancellation downward.
       ATTENTION! effect runners must setup the cancel logic by setting cb.cancel = [cancelMethod]
      And the setup must occur before calling the callback
       This is a sort of inversion of control: called async functions are responsible
      for completing the flow by calling the provided continuation; while caller functions
      are responsible for aborting the current flow by calling the attached cancel function
       Library users can attach their own cancellation logic to promises by defining a
      promise[CANCEL] method in their returned promises
      ATTENTION! calling cancel must have no effect on an already completed or cancelled effect
    **/
    var data = void 0;
    // prettier-ignore
    return (
      // Non declarative effect
      __WEBPACK_IMPORTED_MODULE_0__utils__["is"].promise(effect) ? resolvePromise(effect, currCb) : __WEBPACK_IMPORTED_MODULE_0__utils__["is"].helper(effect) ? runForkEffect(wrapHelper(effect), effectId, currCb) : __WEBPACK_IMPORTED_MODULE_0__utils__["is"].iterator(effect) ? resolveIterator(effect, effectId, name, currCb)

      // declarative effects
      : __WEBPACK_IMPORTED_MODULE_0__utils__["is"].array(effect) ? runParallelEffect(effect, effectId, currCb) : (data = __WEBPACK_IMPORTED_MODULE_2__io__["asEffect"].take(effect)) ? runTakeEffect(data, currCb) : (data = __WEBPACK_IMPORTED_MODULE_2__io__["asEffect"].put(effect)) ? runPutEffect(data, currCb) : (data = __WEBPACK_IMPORTED_MODULE_2__io__["asEffect"].all(effect)) ? runAllEffect(data, effectId, currCb) : (data = __WEBPACK_IMPORTED_MODULE_2__io__["asEffect"].race(effect)) ? runRaceEffect(data, effectId, currCb) : (data = __WEBPACK_IMPORTED_MODULE_2__io__["asEffect"].call(effect)) ? runCallEffect(data, effectId, currCb) : (data = __WEBPACK_IMPORTED_MODULE_2__io__["asEffect"].cps(effect)) ? runCPSEffect(data, currCb) : (data = __WEBPACK_IMPORTED_MODULE_2__io__["asEffect"].fork(effect)) ? runForkEffect(data, effectId, currCb) : (data = __WEBPACK_IMPORTED_MODULE_2__io__["asEffect"].join(effect)) ? runJoinEffect(data, currCb) : (data = __WEBPACK_IMPORTED_MODULE_2__io__["asEffect"].cancel(effect)) ? runCancelEffect(data, currCb) : (data = __WEBPACK_IMPORTED_MODULE_2__io__["asEffect"].select(effect)) ? runSelectEffect(data, currCb) : (data = __WEBPACK_IMPORTED_MODULE_2__io__["asEffect"].actionChannel(effect)) ? runChannelEffect(data, currCb) : (data = __WEBPACK_IMPORTED_MODULE_2__io__["asEffect"].flush(effect)) ? runFlushEffect(data, currCb) : (data = __WEBPACK_IMPORTED_MODULE_2__io__["asEffect"].cancelled(effect)) ? runCancelledEffect(data, currCb) : (data = __WEBPACK_IMPORTED_MODULE_2__io__["asEffect"].getContext(effect)) ? runGetContextEffect(data, currCb) : (data = __WEBPACK_IMPORTED_MODULE_2__io__["asEffect"].setContext(effect)) ? runSetContextEffect(data, currCb) : /* anything else returned as is */currCb(effect)
    );
  }

  function resolvePromise(promise, cb) {
    var cancelPromise = promise[__WEBPACK_IMPORTED_MODULE_0__utils__["CANCEL"]];
    if (__WEBPACK_IMPORTED_MODULE_0__utils__["is"].func(cancelPromise)) {
      cb.cancel = cancelPromise;
    } else if (__WEBPACK_IMPORTED_MODULE_0__utils__["is"].func(promise.abort)) {
      cb.cancel = function () {
        return promise.abort();
      };
      // TODO: add support for the fetch API, whenever they get around to
      // adding cancel support
    }
    promise.then(cb, function (error) {
      return cb(error, true);
    });
  }

  function resolveIterator(iterator, effectId, name, cb) {
    proc(iterator, subscribe, dispatch, getState, taskContext, options, effectId, name, cb);
  }

  function runTakeEffect(_ref2, cb) {
    var channel = _ref2.channel,
        pattern = _ref2.pattern,
        maybe = _ref2.maybe;

    channel = channel || stdChannel;
    var takeCb = function takeCb(inp) {
      return inp instanceof Error ? cb(inp, true) : Object(__WEBPACK_IMPORTED_MODULE_3__channel__["isEnd"])(inp) && !maybe ? cb(CHANNEL_END) : cb(inp);
    };
    try {
      channel.take(takeCb, matcher(pattern));
    } catch (err) {
      return cb(err, true);
    }
    cb.cancel = takeCb.cancel;
  }

  function runPutEffect(_ref3, cb) {
    var channel = _ref3.channel,
        action = _ref3.action,
        resolve = _ref3.resolve;

    /**
      Schedule the put in case another saga is holding a lock.
      The put will be executed atomically. ie nested puts will execute after
      this put has terminated.
    **/
    Object(__WEBPACK_IMPORTED_MODULE_1__scheduler__["asap"])(function () {
      var result = void 0;
      try {
        result = (channel ? channel.put : dispatch)(action);
      } catch (error) {
        // If we have a channel or `put.resolve` was used then bubble up the error.
        if (channel || resolve) return cb(error, true);
        log('error', 'uncaught at ' + name, error.stack || error.message || error);
      }

      if (resolve && __WEBPACK_IMPORTED_MODULE_0__utils__["is"].promise(result)) {
        resolvePromise(result, cb);
      } else {
        return cb(result);
      }
    });
    // Put effects are non cancellables
  }

  function runCallEffect(_ref4, effectId, cb) {
    var context = _ref4.context,
        fn = _ref4.fn,
        args = _ref4.args;

    var result = void 0;
    // catch synchronous failures; see #152
    try {
      result = fn.apply(context, args);
    } catch (error) {
      return cb(error, true);
    }
    return __WEBPACK_IMPORTED_MODULE_0__utils__["is"].promise(result) ? resolvePromise(result, cb) : __WEBPACK_IMPORTED_MODULE_0__utils__["is"].iterator(result) ? resolveIterator(result, effectId, fn.name, cb) : cb(result);
  }

  function runCPSEffect(_ref5, cb) {
    var context = _ref5.context,
        fn = _ref5.fn,
        args = _ref5.args;

    // CPS (ie node style functions) can define their own cancellation logic
    // by setting cancel field on the cb

    // catch synchronous failures; see #152
    try {
      var cpsCb = function cpsCb(err, res) {
        return __WEBPACK_IMPORTED_MODULE_0__utils__["is"].undef(err) ? cb(res) : cb(err, true);
      };
      fn.apply(context, args.concat(cpsCb));
      if (cpsCb.cancel) {
        cb.cancel = function () {
          return cpsCb.cancel();
        };
      }
    } catch (error) {
      return cb(error, true);
    }
  }

  function runForkEffect(_ref6, effectId, cb) {
    var context = _ref6.context,
        fn = _ref6.fn,
        args = _ref6.args,
        detached = _ref6.detached;

    var taskIterator = createTaskIterator({ context: context, fn: fn, args: args });

    try {
      Object(__WEBPACK_IMPORTED_MODULE_1__scheduler__["suspend"])();
      var _task = proc(taskIterator, subscribe, dispatch, getState, taskContext, options, effectId, fn.name, detached ? null : __WEBPACK_IMPORTED_MODULE_0__utils__["noop"]);

      if (detached) {
        cb(_task);
      } else {
        if (taskIterator._isRunning) {
          taskQueue.addTask(_task);
          cb(_task);
        } else if (taskIterator._error) {
          taskQueue.abort(taskIterator._error);
        } else {
          cb(_task);
        }
      }
    } finally {
      Object(__WEBPACK_IMPORTED_MODULE_1__scheduler__["flush"])();
    }
    // Fork effects are non cancellables
  }

  function runJoinEffect(t, cb) {
    if (t.isRunning()) {
      var joiner = { task: task, cb: cb };
      cb.cancel = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_0__utils__["remove"])(t.joiners, joiner);
      };
      t.joiners.push(joiner);
    } else {
      t.isAborted() ? cb(t.error(), true) : cb(t.result());
    }
  }

  function runCancelEffect(taskToCancel, cb) {
    if (taskToCancel === __WEBPACK_IMPORTED_MODULE_0__utils__["SELF_CANCELLATION"]) {
      taskToCancel = task;
    }
    if (taskToCancel.isRunning()) {
      taskToCancel.cancel();
    }
    cb();
    // cancel effects are non cancellables
  }

  function runAllEffect(effects, effectId, cb) {
    var keys = Object.keys(effects);

    if (!keys.length) {
      return cb(__WEBPACK_IMPORTED_MODULE_0__utils__["is"].array(effects) ? [] : {});
    }

    var completedCount = 0;
    var completed = void 0;
    var results = {};
    var childCbs = {};

    function checkEffectEnd() {
      if (completedCount === keys.length) {
        completed = true;
        cb(__WEBPACK_IMPORTED_MODULE_0__utils__["is"].array(effects) ? __WEBPACK_IMPORTED_MODULE_0__utils__["array"].from(_extends({}, results, { length: keys.length })) : results);
      }
    }

    keys.forEach(function (key) {
      var chCbAtKey = function chCbAtKey(res, isErr) {
        if (completed) {
          return;
        }
        if (isErr || Object(__WEBPACK_IMPORTED_MODULE_3__channel__["isEnd"])(res) || res === CHANNEL_END || res === TASK_CANCEL) {
          cb.cancel();
          cb(res, isErr);
        } else {
          results[key] = res;
          completedCount++;
          checkEffectEnd();
        }
      };
      chCbAtKey.cancel = __WEBPACK_IMPORTED_MODULE_0__utils__["noop"];
      childCbs[key] = chCbAtKey;
    });

    cb.cancel = function () {
      if (!completed) {
        completed = true;
        keys.forEach(function (key) {
          return childCbs[key].cancel();
        });
      }
    };

    keys.forEach(function (key) {
      return runEffect(effects[key], effectId, key, childCbs[key]);
    });
  }

  function runRaceEffect(effects, effectId, cb) {
    var completed = void 0;
    var keys = Object.keys(effects);
    var childCbs = {};

    keys.forEach(function (key) {
      var chCbAtKey = function chCbAtKey(res, isErr) {
        if (completed) {
          return;
        }

        if (isErr) {
          // Race Auto cancellation
          cb.cancel();
          cb(res, true);
        } else if (!Object(__WEBPACK_IMPORTED_MODULE_3__channel__["isEnd"])(res) && res !== CHANNEL_END && res !== TASK_CANCEL) {
          var _cb;

          cb.cancel();
          completed = true;
          cb((_cb = {}, _cb[key] = res, _cb));
        }
      };
      chCbAtKey.cancel = __WEBPACK_IMPORTED_MODULE_0__utils__["noop"];
      childCbs[key] = chCbAtKey;
    });

    cb.cancel = function () {
      // prevents unnecessary cancellation
      if (!completed) {
        completed = true;
        keys.forEach(function (key) {
          return childCbs[key].cancel();
        });
      }
    };
    keys.forEach(function (key) {
      if (completed) {
        return;
      }
      runEffect(effects[key], effectId, key, childCbs[key]);
    });
  }

  function runSelectEffect(_ref7, cb) {
    var selector = _ref7.selector,
        args = _ref7.args;

    try {
      var state = selector.apply(undefined, [getState()].concat(args));
      cb(state);
    } catch (error) {
      cb(error, true);
    }
  }

  function runChannelEffect(_ref8, cb) {
    var pattern = _ref8.pattern,
        buffer = _ref8.buffer;

    var match = matcher(pattern);
    match.pattern = pattern;
    cb(Object(__WEBPACK_IMPORTED_MODULE_3__channel__["eventChannel"])(subscribe, buffer || __WEBPACK_IMPORTED_MODULE_4__buffers__["buffers"].fixed(), match));
  }

  function runCancelledEffect(data, cb) {
    cb(!!mainTask.isCancelled);
  }

  function runFlushEffect(channel, cb) {
    channel.flush(cb);
  }

  function runGetContextEffect(prop, cb) {
    cb(taskContext[prop]);
  }

  function runSetContextEffect(props, cb) {
    __WEBPACK_IMPORTED_MODULE_0__utils__["object"].assign(taskContext, props);
    cb();
  }

  function newTask(id, name, iterator, cont) {
    var _done, _ref9, _mutatorMap;

    iterator._deferredEnd = null;
    return _ref9 = {}, _ref9[__WEBPACK_IMPORTED_MODULE_0__utils__["TASK"]] = true, _ref9.id = id, _ref9.name = name, _done = 'done', _mutatorMap = {}, _mutatorMap[_done] = _mutatorMap[_done] || {}, _mutatorMap[_done].get = function () {
      if (iterator._deferredEnd) {
        return iterator._deferredEnd.promise;
      } else {
        var def = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["deferred"])();
        iterator._deferredEnd = def;
        if (!iterator._isRunning) {
          iterator._error ? def.reject(iterator._error) : def.resolve(iterator._result);
        }
        return def.promise;
      }
    }, _ref9.cont = cont, _ref9.joiners = [], _ref9.cancel = cancel, _ref9.isRunning = function isRunning() {
      return iterator._isRunning;
    }, _ref9.isCancelled = function isCancelled() {
      return iterator._isCancelled;
    }, _ref9.isAborted = function isAborted() {
      return iterator._isAborted;
    }, _ref9.result = function result() {
      return iterator._result;
    }, _ref9.error = function error() {
      return iterator._error;
    }, _ref9.setContext = function setContext(props) {
      Object(__WEBPACK_IMPORTED_MODULE_0__utils__["check"])(props, __WEBPACK_IMPORTED_MODULE_0__utils__["is"].object, Object(__WEBPACK_IMPORTED_MODULE_0__utils__["createSetContextWarning"])('task', props));
      __WEBPACK_IMPORTED_MODULE_0__utils__["object"].assign(taskContext, props);
    }, _defineEnumerableProperties(_ref9, _mutatorMap), _ref9;
  }
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "takeEvery", function() { return takeEvery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "takeLatest", function() { return takeLatest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return throttle; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__takeEvery__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__takeLatest__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__throttle__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(18);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "takeEveryHelper", function() { return __WEBPACK_IMPORTED_MODULE_0__takeEvery__["default"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "takeLatestHelper", function() { return __WEBPACK_IMPORTED_MODULE_1__takeLatest__["default"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "throttleHelper", function() { return __WEBPACK_IMPORTED_MODULE_2__throttle__["default"]; });






var deprecationWarning = function deprecationWarning(helperName) {
  return 'import { ' + helperName + ' } from \'redux-saga\' has been deprecated in favor of import { ' + helperName + ' } from \'redux-saga/effects\'.\nThe latter will not work with yield*, as helper effects are wrapped automatically for you in fork effect.\nTherefore yield ' + helperName + ' will return task descriptor to your saga and execute next lines of code.';
};

var takeEvery = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_3__utils__["deprecate"])(__WEBPACK_IMPORTED_MODULE_0__takeEvery__["default"], /*#__PURE__*/deprecationWarning('takeEvery'));
var takeLatest = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_3__utils__["deprecate"])(__WEBPACK_IMPORTED_MODULE_1__takeLatest__["default"], /*#__PURE__*/deprecationWarning('takeLatest'));
var throttle = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_3__utils__["deprecate"])(__WEBPACK_IMPORTED_MODULE_2__throttle__["default"], /*#__PURE__*/deprecationWarning('throttle'));



/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sym", function() { return sym; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TASK", function() { return TASK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HELPER", function() { return HELPER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MATCH", function() { return MATCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CANCEL", function() { return CANCEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAGA_ACTION", function() { return SAGA_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELF_CANCELLATION", function() { return SELF_CANCELLATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "konst", function() { return konst; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kTrue", function() { return kTrue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kFalse", function() { return kFalse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ident", function() { return ident; });
/* harmony export (immutable) */ __webpack_exports__["check"] = check;
/* harmony export (immutable) */ __webpack_exports__["hasOwn"] = hasOwn;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is", function() { return is; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "object", function() { return object; });
/* harmony export (immutable) */ __webpack_exports__["remove"] = remove;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "array", function() { return array; });
/* harmony export (immutable) */ __webpack_exports__["deferred"] = deferred;
/* harmony export (immutable) */ __webpack_exports__["arrayOfDeffered"] = arrayOfDeffered;
/* harmony export (immutable) */ __webpack_exports__["delay"] = delay;
/* harmony export (immutable) */ __webpack_exports__["createMockTask"] = createMockTask;
/* harmony export (immutable) */ __webpack_exports__["autoInc"] = autoInc;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uid", function() { return uid; });
/* harmony export (immutable) */ __webpack_exports__["makeIterator"] = makeIterator;
/* harmony export (immutable) */ __webpack_exports__["log"] = log;
/* harmony export (immutable) */ __webpack_exports__["deprecate"] = deprecate;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateIncentive", function() { return updateIncentive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "internalErr", function() { return internalErr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSetContextWarning", function() { return createSetContextWarning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapSagaDispatch", function() { return wrapSagaDispatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneableGenerator", function() { return cloneableGenerator; });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var sym = function sym(id) {
  return '@@redux-saga/' + id;
};

var TASK = sym('TASK');
var HELPER = sym('HELPER');
var MATCH = sym('MATCH');
var CANCEL = sym('CANCEL_PROMISE');
var SAGA_ACTION = sym('SAGA_ACTION');
var SELF_CANCELLATION = sym('SELF_CANCELLATION');
var konst = function konst(v) {
  return function () {
    return v;
  };
};
var kTrue = konst(true);
var kFalse = konst(false);
var noop = function noop() {};
var ident = function ident(v) {
  return v;
};

function check(value, predicate, error) {
  if (!predicate(value)) {
    log('error', 'uncaught at check', error);
    throw new Error(error);
  }
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn(object, property) {
  return is.notUndef(object) && hasOwnProperty.call(object, property);
}

var is = {
  undef: function undef(v) {
    return v === null || v === undefined;
  },
  notUndef: function notUndef(v) {
    return v !== null && v !== undefined;
  },
  func: function func(f) {
    return typeof f === 'function';
  },
  number: function number(n) {
    return typeof n === 'number';
  },
  string: function string(s) {
    return typeof s === 'string';
  },
  array: Array.isArray,
  object: function object(obj) {
    return obj && !is.array(obj) && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
  },
  promise: function promise(p) {
    return p && is.func(p.then);
  },
  iterator: function iterator(it) {
    return it && is.func(it.next) && is.func(it.throw);
  },
  iterable: function iterable(it) {
    return it && is.func(Symbol) ? is.func(it[Symbol.iterator]) : is.array(it);
  },
  task: function task(t) {
    return t && t[TASK];
  },
  observable: function observable(ob) {
    return ob && is.func(ob.subscribe);
  },
  buffer: function buffer(buf) {
    return buf && is.func(buf.isEmpty) && is.func(buf.take) && is.func(buf.put);
  },
  pattern: function pattern(pat) {
    return pat && (is.string(pat) || (typeof pat === 'undefined' ? 'undefined' : _typeof(pat)) === 'symbol' || is.func(pat) || is.array(pat));
  },
  channel: function channel(ch) {
    return ch && is.func(ch.take) && is.func(ch.close);
  },
  helper: function helper(it) {
    return it && it[HELPER];
  },
  stringableFunc: function stringableFunc(f) {
    return is.func(f) && hasOwn(f, 'toString');
  }
};

var object = {
  assign: function assign(target, source) {
    for (var i in source) {
      if (hasOwn(source, i)) {
        target[i] = source[i];
      }
    }
  }
};

function remove(array, item) {
  var index = array.indexOf(item);
  if (index >= 0) {
    array.splice(index, 1);
  }
}

var array = {
  from: function from(obj) {
    var arr = Array(obj.length);
    for (var i in obj) {
      if (hasOwn(obj, i)) {
        arr[i] = obj[i];
      }
    }
    return arr;
  }
};

function deferred() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var def = _extends({}, props);
  var promise = new Promise(function (resolve, reject) {
    def.resolve = resolve;
    def.reject = reject;
  });
  def.promise = promise;
  return def;
}

function arrayOfDeffered(length) {
  var arr = [];
  for (var i = 0; i < length; i++) {
    arr.push(deferred());
  }
  return arr;
}

function delay(ms) {
  var val = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  var timeoutId = void 0;
  var promise = new Promise(function (resolve) {
    timeoutId = setTimeout(function () {
      return resolve(val);
    }, ms);
  });

  promise[CANCEL] = function () {
    return clearTimeout(timeoutId);
  };

  return promise;
}

function createMockTask() {
  var _ref;

  var running = true;
  var _result = void 0,
      _error = void 0;

  return _ref = {}, _ref[TASK] = true, _ref.isRunning = function isRunning() {
    return running;
  }, _ref.result = function result() {
    return _result;
  }, _ref.error = function error() {
    return _error;
  }, _ref.setRunning = function setRunning(b) {
    return running = b;
  }, _ref.setResult = function setResult(r) {
    return _result = r;
  }, _ref.setError = function setError(e) {
    return _error = e;
  }, _ref;
}

function autoInc() {
  var seed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

  return function () {
    return ++seed;
  };
}

var uid = autoInc();

var kThrow = function kThrow(err) {
  throw err;
};
var kReturn = function kReturn(value) {
  return { value: value, done: true };
};
function makeIterator(next) {
  var thro = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : kThrow;
  var name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var isHelper = arguments[3];

  var iterator = { name: name, next: next, throw: thro, return: kReturn };

  if (isHelper) {
    iterator[HELPER] = true;
  }
  if (typeof Symbol !== 'undefined') {
    iterator[Symbol.iterator] = function () {
      return iterator;
    };
  }
  return iterator;
}

/**
  Print error in a useful way whether in a browser environment
  (with expandable error stack traces), or in a node.js environment
  (text-only log output)
 **/
function log(level, message) {
  var error = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  /*eslint-disable no-console*/
  if (typeof window === 'undefined') {
    console.log('redux-saga ' + level + ': ' + message + '\n' + (error && error.stack || error));
  } else {
    console[level](message, error);
  }
}

function deprecate(fn, deprecationWarning) {
  return function () {
    if (process.env.NODE_ENV === 'development') log('warn', deprecationWarning);
    return fn.apply(undefined, arguments);
  };
}

var updateIncentive = function updateIncentive(deprecated, preferred) {
  return deprecated + ' has been deprecated in favor of ' + preferred + ', please update your code';
};

var internalErr = function internalErr(err) {
  return new Error('\n  redux-saga: Error checking hooks detected an inconsistent state. This is likely a bug\n  in redux-saga code and not yours. Thanks for reporting this in the project\'s github repo.\n  Error: ' + err + '\n');
};

var createSetContextWarning = function createSetContextWarning(ctx, props) {
  return (ctx ? ctx + '.' : '') + 'setContext(props): argument ' + props + ' is not a plain object';
};

var wrapSagaDispatch = function wrapSagaDispatch(dispatch) {
  return function (action) {
    return dispatch(Object.defineProperty(action, SAGA_ACTION, { value: true }));
  };
};

var cloneableGenerator = function cloneableGenerator(generatorFunc) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var history = [];
    var gen = generatorFunc.apply(undefined, args);
    return {
      next: function next(arg) {
        history.push(arg);
        return gen.next(arg);
      },
      clone: function clone() {
        var clonedGen = cloneableGenerator(generatorFunc).apply(undefined, args);
        history.forEach(function (arg) {
          return clonedGen.next(arg);
        });
        return clonedGen;
      },
      return: function _return(value) {
        return gen.return(value);
      },
      throw: function _throw(exception) {
        return gen.throw(exception);
      }
    };
  };
};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 299:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__;

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_middleware__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_runSaga__ = __webpack_require__(164);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "runSaga", function() { return __WEBPACK_IMPORTED_MODULE_1__internal_runSaga__["runSaga"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_channel__ = __webpack_require__(45);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "END", function() { return __WEBPACK_IMPORTED_MODULE_2__internal_channel__["END"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "eventChannel", function() { return __WEBPACK_IMPORTED_MODULE_2__internal_channel__["eventChannel"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "channel", function() { return __WEBPACK_IMPORTED_MODULE_2__internal_channel__["channel"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__internal_buffers__ = __webpack_require__(78);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "buffers", function() { return __WEBPACK_IMPORTED_MODULE_3__internal_buffers__["buffers"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__internal_sagaHelpers__ = __webpack_require__(166);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "takeEvery", function() { return __WEBPACK_IMPORTED_MODULE_4__internal_sagaHelpers__["takeEvery"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "takeLatest", function() { return __WEBPACK_IMPORTED_MODULE_4__internal_sagaHelpers__["takeLatest"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return __WEBPACK_IMPORTED_MODULE_4__internal_sagaHelpers__["throttle"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__internal_utils__ = __webpack_require__(18);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "delay", function() { return __WEBPACK_IMPORTED_MODULE_5__internal_utils__["delay"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CANCEL", function() { return __WEBPACK_IMPORTED_MODULE_5__internal_utils__["CANCEL"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__effects__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils__ = __webpack_require__(306);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "effects", function() { return __WEBPACK_IMPORTED_MODULE_6__effects__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "utils", function() { return __WEBPACK_IMPORTED_MODULE_7__utils__; });

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__internal_middleware__["default"]);












/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (immutable) */ __webpack_exports__["default"] = sagaMiddlewareFactory;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__channel__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__runSaga__ = __webpack_require__(164);
function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }






function sagaMiddlewareFactory() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _ref$context = _ref.context,
      context = _ref$context === undefined ? {} : _ref$context,
      options = _objectWithoutProperties(_ref, ['context']);

  var sagaMonitor = options.sagaMonitor,
      logger = options.logger,
      onError = options.onError;


  if (__WEBPACK_IMPORTED_MODULE_0__utils__["is"].func(options)) {
    if (process.env.NODE_ENV === 'production') {
      throw new Error('Saga middleware no longer accept Generator functions. Use sagaMiddleware.run instead');
    } else {
      throw new Error('You passed a function to the Saga middleware. You are likely trying to start a        Saga by directly passing it to the middleware. This is no longer possible starting from 0.10.0.        To run a Saga, you must do it dynamically AFTER mounting the middleware into the store.\n        Example:\n          import createSagaMiddleware from \'redux-saga\'\n          ... other imports\n\n          const sagaMiddleware = createSagaMiddleware()\n          const store = createStore(reducer, applyMiddleware(sagaMiddleware))\n          sagaMiddleware.run(saga, ...args)\n      ');
    }
  }

  if (logger && !__WEBPACK_IMPORTED_MODULE_0__utils__["is"].func(logger)) {
    throw new Error('`options.logger` passed to the Saga middleware is not a function!');
  }

  if (process.env.NODE_ENV === 'development' && options.onerror) {
    throw new Error('`options.onerror` was removed. Use `options.onError` instead.');
  }

  if (onError && !__WEBPACK_IMPORTED_MODULE_0__utils__["is"].func(onError)) {
    throw new Error('`options.onError` passed to the Saga middleware is not a function!');
  }

  if (options.emitter && !__WEBPACK_IMPORTED_MODULE_0__utils__["is"].func(options.emitter)) {
    throw new Error('`options.emitter` passed to the Saga middleware is not a function!');
  }

  function sagaMiddleware(_ref2) {
    var getState = _ref2.getState,
        dispatch = _ref2.dispatch;

    var sagaEmitter = Object(__WEBPACK_IMPORTED_MODULE_1__channel__["emitter"])();
    sagaEmitter.emit = (options.emitter || __WEBPACK_IMPORTED_MODULE_0__utils__["ident"])(sagaEmitter.emit);

    sagaMiddleware.run = __WEBPACK_IMPORTED_MODULE_2__runSaga__["runSaga"].bind(null, {
      context: context,
      subscribe: sagaEmitter.subscribe,
      dispatch: dispatch,
      getState: getState,
      sagaMonitor: sagaMonitor,
      logger: logger,
      onError: onError
    });

    return function (next) {
      return function (action) {
        if (sagaMonitor && sagaMonitor.actionDispatched) {
          sagaMonitor.actionDispatched(action);
        }
        var result = next(action); // hit reducers
        sagaEmitter.emit(action);
        return result;
      };
    };
  }

  sagaMiddleware.run = function () {
    throw new Error('Before running a Saga, you must mount the Saga middleware on the Store using applyMiddleware');
  };

  sagaMiddleware.setContext = function (props) {
    Object(__WEBPACK_IMPORTED_MODULE_0__utils__["check"])(props, __WEBPACK_IMPORTED_MODULE_0__utils__["is"].object, Object(__WEBPACK_IMPORTED_MODULE_0__utils__["createSetContextWarning"])('sagaMiddleware', props));
    __WEBPACK_IMPORTED_MODULE_0__utils__["object"].assign(context, props);
  };

  return sagaMiddleware;
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = takeEvery;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fsmIterator__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__io__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__channel__ = __webpack_require__(45);




function takeEvery(patternOrChannel, worker) {
  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var yTake = { done: false, value: Object(__WEBPACK_IMPORTED_MODULE_1__io__["take"])(patternOrChannel) };
  var yFork = function yFork(ac) {
    return { done: false, value: __WEBPACK_IMPORTED_MODULE_1__io__["fork"].apply(undefined, [worker].concat(args, [ac])) };
  };

  var action = void 0,
      setAction = function setAction(ac) {
    return action = ac;
  };

  return Object(__WEBPACK_IMPORTED_MODULE_0__fsmIterator__["default"])({
    q1: function q1() {
      return ['q2', yTake, setAction];
    },
    q2: function q2() {
      return action === __WEBPACK_IMPORTED_MODULE_2__channel__["END"] ? [__WEBPACK_IMPORTED_MODULE_0__fsmIterator__["qEnd"]] : ['q1', yFork(action)];
    }
  }, 'q1', 'takeEvery(' + Object(__WEBPACK_IMPORTED_MODULE_0__fsmIterator__["safeName"])(patternOrChannel) + ', ' + worker.name + ')');
}

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = takeLatest;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fsmIterator__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__io__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__channel__ = __webpack_require__(45);




function takeLatest(patternOrChannel, worker) {
  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var yTake = { done: false, value: Object(__WEBPACK_IMPORTED_MODULE_1__io__["take"])(patternOrChannel) };
  var yFork = function yFork(ac) {
    return { done: false, value: __WEBPACK_IMPORTED_MODULE_1__io__["fork"].apply(undefined, [worker].concat(args, [ac])) };
  };
  var yCancel = function yCancel(task) {
    return { done: false, value: Object(__WEBPACK_IMPORTED_MODULE_1__io__["cancel"])(task) };
  };

  var task = void 0,
      action = void 0;
  var setTask = function setTask(t) {
    return task = t;
  };
  var setAction = function setAction(ac) {
    return action = ac;
  };

  return Object(__WEBPACK_IMPORTED_MODULE_0__fsmIterator__["default"])({
    q1: function q1() {
      return ['q2', yTake, setAction];
    },
    q2: function q2() {
      return action === __WEBPACK_IMPORTED_MODULE_2__channel__["END"] ? [__WEBPACK_IMPORTED_MODULE_0__fsmIterator__["qEnd"]] : task ? ['q3', yCancel(task)] : ['q1', yFork(action), setTask];
    },
    q3: function q3() {
      return ['q1', yFork(action), setTask];
    }
  }, 'q1', 'takeLatest(' + Object(__WEBPACK_IMPORTED_MODULE_0__fsmIterator__["safeName"])(patternOrChannel) + ', ' + worker.name + ')');
}

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = throttle;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fsmIterator__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__io__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__channel__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__buffers__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils__ = __webpack_require__(18);






function throttle(delayLength, pattern, worker) {
  for (var _len = arguments.length, args = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    args[_key - 3] = arguments[_key];
  }

  var action = void 0,
      channel = void 0;

  var yActionChannel = { done: false, value: Object(__WEBPACK_IMPORTED_MODULE_1__io__["actionChannel"])(pattern, __WEBPACK_IMPORTED_MODULE_3__buffers__["buffers"].sliding(1)) };
  var yTake = function yTake() {
    return { done: false, value: Object(__WEBPACK_IMPORTED_MODULE_1__io__["take"])(channel) };
  };
  var yFork = function yFork(ac) {
    return { done: false, value: __WEBPACK_IMPORTED_MODULE_1__io__["fork"].apply(undefined, [worker].concat(args, [ac])) };
  };
  var yDelay = { done: false, value: Object(__WEBPACK_IMPORTED_MODULE_1__io__["call"])(__WEBPACK_IMPORTED_MODULE_4__utils__["delay"], delayLength) };

  var setAction = function setAction(ac) {
    return action = ac;
  };
  var setChannel = function setChannel(ch) {
    return channel = ch;
  };

  return Object(__WEBPACK_IMPORTED_MODULE_0__fsmIterator__["default"])({
    q1: function q1() {
      return ['q2', yActionChannel, setChannel];
    },
    q2: function q2() {
      return ['q3', yTake(), setAction];
    },
    q3: function q3() {
      return action === __WEBPACK_IMPORTED_MODULE_2__channel__["END"] ? [__WEBPACK_IMPORTED_MODULE_0__fsmIterator__["qEnd"]] : ['q4', yFork(action)];
    },
    q4: function q4() {
      return ['q2', yDelay];
    }
  }, 'q1', 'throttle(' + Object(__WEBPACK_IMPORTED_MODULE_0__fsmIterator__["safeName"])(pattern) + ', ' + worker.name + ')');
}

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_io__ = __webpack_require__(46);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "take", function() { return __WEBPACK_IMPORTED_MODULE_0__internal_io__["take"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "takem", function() { return __WEBPACK_IMPORTED_MODULE_0__internal_io__["takem"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "put", function() { return __WEBPACK_IMPORTED_MODULE_0__internal_io__["put"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "all", function() { return __WEBPACK_IMPORTED_MODULE_0__internal_io__["all"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "race", function() { return __WEBPACK_IMPORTED_MODULE_0__internal_io__["race"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "call", function() { return __WEBPACK_IMPORTED_MODULE_0__internal_io__["call"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "apply", function() { return __WEBPACK_IMPORTED_MODULE_0__internal_io__["apply"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "cps", function() { return __WEBPACK_IMPORTED_MODULE_0__internal_io__["cps"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "fork", function() { return __WEBPACK_IMPORTED_MODULE_0__internal_io__["fork"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "spawn", function() { return __WEBPACK_IMPORTED_MODULE_0__internal_io__["spawn"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "join", function() { return __WEBPACK_IMPORTED_MODULE_0__internal_io__["join"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "cancel", function() { return __WEBPACK_IMPORTED_MODULE_0__internal_io__["cancel"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "select", function() { return __WEBPACK_IMPORTED_MODULE_0__internal_io__["select"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "actionChannel", function() { return __WEBPACK_IMPORTED_MODULE_0__internal_io__["actionChannel"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "cancelled", function() { return __WEBPACK_IMPORTED_MODULE_0__internal_io__["cancelled"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "flush", function() { return __WEBPACK_IMPORTED_MODULE_0__internal_io__["flush"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "getContext", function() { return __WEBPACK_IMPORTED_MODULE_0__internal_io__["getContext"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "setContext", function() { return __WEBPACK_IMPORTED_MODULE_0__internal_io__["setContext"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "takeEvery", function() { return __WEBPACK_IMPORTED_MODULE_0__internal_io__["takeEvery"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "takeLatest", function() { return __WEBPACK_IMPORTED_MODULE_0__internal_io__["takeLatest"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return __WEBPACK_IMPORTED_MODULE_0__internal_io__["throttle"]; });


/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_utils__ = __webpack_require__(18);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "TASK", function() { return __WEBPACK_IMPORTED_MODULE_0__internal_utils__["TASK"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SAGA_ACTION", function() { return __WEBPACK_IMPORTED_MODULE_0__internal_utils__["SAGA_ACTION"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return __WEBPACK_IMPORTED_MODULE_0__internal_utils__["noop"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "is", function() { return __WEBPACK_IMPORTED_MODULE_0__internal_utils__["is"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "deferred", function() { return __WEBPACK_IMPORTED_MODULE_0__internal_utils__["deferred"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "arrayOfDeffered", function() { return __WEBPACK_IMPORTED_MODULE_0__internal_utils__["arrayOfDeffered"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "createMockTask", function() { return __WEBPACK_IMPORTED_MODULE_0__internal_utils__["createMockTask"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "cloneableGenerator", function() { return __WEBPACK_IMPORTED_MODULE_0__internal_utils__["cloneableGenerator"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_io__ = __webpack_require__(46);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "asEffect", function() { return __WEBPACK_IMPORTED_MODULE_1__internal_io__["asEffect"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_proc__ = __webpack_require__(165);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CHANNEL_END", function() { return __WEBPACK_IMPORTED_MODULE_2__internal_proc__["CHANNEL_END"]; });




/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "END", function() { return END; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEnd", function() { return isEnd; });
/* harmony export (immutable) */ __webpack_exports__["emitter"] = emitter;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INVALID_BUFFER", function() { return INVALID_BUFFER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNDEFINED_INPUT_ERROR", function() { return UNDEFINED_INPUT_ERROR; });
/* harmony export (immutable) */ __webpack_exports__["channel"] = channel;
/* harmony export (immutable) */ __webpack_exports__["eventChannel"] = eventChannel;
/* harmony export (immutable) */ __webpack_exports__["stdChannel"] = stdChannel;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__buffers__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scheduler__ = __webpack_require__(163);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





var CHANNEL_END_TYPE = '@@redux-saga/CHANNEL_END';
var END = { type: CHANNEL_END_TYPE };
var isEnd = function isEnd(a) {
  return a && a.type === CHANNEL_END_TYPE;
};

function emitter() {
  var subscribers = [];

  function subscribe(sub) {
    subscribers.push(sub);
    return function () {
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils__["remove"])(subscribers, sub);
    };
  }

  function emit(item) {
    var arr = subscribers.slice();
    for (var i = 0, len = arr.length; i < len; i++) {
      arr[i](item);
    }
  }

  return {
    subscribe: subscribe,
    emit: emit
  };
}

var INVALID_BUFFER = 'invalid buffer passed to channel factory function';
var UNDEFINED_INPUT_ERROR = 'Saga was provided with an undefined action';

if (process.env.NODE_ENV !== 'production') {
  UNDEFINED_INPUT_ERROR += '\nHints:\n    - check that your Action Creator returns a non-undefined value\n    - if the Saga was started using runSaga, check that your subscribe source provides the action to its listeners\n  ';
}

function channel() {
  var buffer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __WEBPACK_IMPORTED_MODULE_1__buffers__["buffers"].fixed();

  var closed = false;
  var takers = [];

  Object(__WEBPACK_IMPORTED_MODULE_0__utils__["check"])(buffer, __WEBPACK_IMPORTED_MODULE_0__utils__["is"].buffer, INVALID_BUFFER);

  function checkForbiddenStates() {
    if (closed && takers.length) {
      throw Object(__WEBPACK_IMPORTED_MODULE_0__utils__["internalErr"])('Cannot have a closed channel with pending takers');
    }
    if (takers.length && !buffer.isEmpty()) {
      throw Object(__WEBPACK_IMPORTED_MODULE_0__utils__["internalErr"])('Cannot have pending takers with non empty buffer');
    }
  }

  function put(input) {
    checkForbiddenStates();
    Object(__WEBPACK_IMPORTED_MODULE_0__utils__["check"])(input, __WEBPACK_IMPORTED_MODULE_0__utils__["is"].notUndef, UNDEFINED_INPUT_ERROR);
    if (closed) {
      return;
    }
    if (!takers.length) {
      return buffer.put(input);
    }
    for (var i = 0; i < takers.length; i++) {
      var cb = takers[i];
      if (!cb[__WEBPACK_IMPORTED_MODULE_0__utils__["MATCH"]] || cb[__WEBPACK_IMPORTED_MODULE_0__utils__["MATCH"]](input)) {
        takers.splice(i, 1);
        return cb(input);
      }
    }
  }

  function take(cb) {
    checkForbiddenStates();
    Object(__WEBPACK_IMPORTED_MODULE_0__utils__["check"])(cb, __WEBPACK_IMPORTED_MODULE_0__utils__["is"].func, "channel.take's callback must be a function");

    if (closed && buffer.isEmpty()) {
      cb(END);
    } else if (!buffer.isEmpty()) {
      cb(buffer.take());
    } else {
      takers.push(cb);
      cb.cancel = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_0__utils__["remove"])(takers, cb);
      };
    }
  }

  function flush(cb) {
    checkForbiddenStates(); // TODO: check if some new state should be forbidden now
    Object(__WEBPACK_IMPORTED_MODULE_0__utils__["check"])(cb, __WEBPACK_IMPORTED_MODULE_0__utils__["is"].func, "channel.flush' callback must be a function");
    if (closed && buffer.isEmpty()) {
      cb(END);
      return;
    }
    cb(buffer.flush());
  }

  function close() {
    checkForbiddenStates();
    if (!closed) {
      closed = true;
      if (takers.length) {
        var arr = takers;
        takers = [];
        for (var i = 0, len = arr.length; i < len; i++) {
          arr[i](END);
        }
      }
    }
  }

  return {
    take: take,
    put: put,
    flush: flush,
    close: close,
    get __takers__() {
      return takers;
    },
    get __closed__() {
      return closed;
    }
  };
}

function eventChannel(subscribe) {
  var buffer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : __WEBPACK_IMPORTED_MODULE_1__buffers__["buffers"].none();
  var matcher = arguments[2];

  /**
    should be if(typeof matcher !== undefined) instead?
    see PR #273 for a background discussion
  **/
  if (arguments.length > 2) {
    Object(__WEBPACK_IMPORTED_MODULE_0__utils__["check"])(matcher, __WEBPACK_IMPORTED_MODULE_0__utils__["is"].func, 'Invalid match function passed to eventChannel');
  }

  var chan = channel(buffer);
  var close = function close() {
    if (!chan.__closed__) {
      if (unsubscribe) {
        unsubscribe();
      }
      chan.close();
    }
  };
  var unsubscribe = subscribe(function (input) {
    if (isEnd(input)) {
      close();
      return;
    }
    if (matcher && !matcher(input)) {
      return;
    }
    chan.put(input);
  });
  if (chan.__closed__) {
    unsubscribe();
  }

  if (!__WEBPACK_IMPORTED_MODULE_0__utils__["is"].func(unsubscribe)) {
    throw new Error('in eventChannel: subscribe should return a function to unsubscribe');
  }

  return {
    take: chan.take,
    flush: chan.flush,
    close: close
  };
}

function stdChannel(subscribe) {
  var chan = eventChannel(function (cb) {
    return subscribe(function (input) {
      if (input[__WEBPACK_IMPORTED_MODULE_0__utils__["SAGA_ACTION"]]) {
        cb(input);
        return;
      }
      Object(__WEBPACK_IMPORTED_MODULE_2__scheduler__["asap"])(function () {
        return cb(input);
      });
    });
  });

  return _extends({}, chan, {
    take: function take(cb, matcher) {
      if (arguments.length > 1) {
        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["check"])(matcher, __WEBPACK_IMPORTED_MODULE_0__utils__["is"].func, "channel.take's matcher argument must be a function");
        cb[__WEBPACK_IMPORTED_MODULE_0__utils__["MATCH"]] = matcher;
      }
      chan.take(cb);
    }
  });
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["take"] = take;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "takem", function() { return takem; });
/* harmony export (immutable) */ __webpack_exports__["put"] = put;
/* harmony export (immutable) */ __webpack_exports__["all"] = all;
/* harmony export (immutable) */ __webpack_exports__["race"] = race;
/* harmony export (immutable) */ __webpack_exports__["call"] = call;
/* harmony export (immutable) */ __webpack_exports__["apply"] = apply;
/* harmony export (immutable) */ __webpack_exports__["cps"] = cps;
/* harmony export (immutable) */ __webpack_exports__["fork"] = fork;
/* harmony export (immutable) */ __webpack_exports__["spawn"] = spawn;
/* harmony export (immutable) */ __webpack_exports__["join"] = join;
/* harmony export (immutable) */ __webpack_exports__["cancel"] = cancel;
/* harmony export (immutable) */ __webpack_exports__["select"] = select;
/* harmony export (immutable) */ __webpack_exports__["actionChannel"] = actionChannel;
/* harmony export (immutable) */ __webpack_exports__["cancelled"] = cancelled;
/* harmony export (immutable) */ __webpack_exports__["flush"] = flush;
/* harmony export (immutable) */ __webpack_exports__["getContext"] = getContext;
/* harmony export (immutable) */ __webpack_exports__["setContext"] = setContext;
/* harmony export (immutable) */ __webpack_exports__["takeEvery"] = takeEvery;
/* harmony export (immutable) */ __webpack_exports__["takeLatest"] = takeLatest;
/* harmony export (immutable) */ __webpack_exports__["throttle"] = throttle;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asEffect", function() { return asEffect; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sagaHelpers__ = __webpack_require__(166);



var IO = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["sym"])('IO');
var TAKE = 'TAKE';
var PUT = 'PUT';
var ALL = 'ALL';
var RACE = 'RACE';
var CALL = 'CALL';
var CPS = 'CPS';
var FORK = 'FORK';
var JOIN = 'JOIN';
var CANCEL = 'CANCEL';
var SELECT = 'SELECT';
var ACTION_CHANNEL = 'ACTION_CHANNEL';
var CANCELLED = 'CANCELLED';
var FLUSH = 'FLUSH';
var GET_CONTEXT = 'GET_CONTEXT';
var SET_CONTEXT = 'SET_CONTEXT';

var TEST_HINT = '\n(HINT: if you are getting this errors in tests, consider using createMockTask from redux-saga/utils)';

var effect = function effect(type, payload) {
  var _ref;

  return _ref = {}, _ref[IO] = true, _ref[type] = payload, _ref;
};

function take() {
  var patternOrChannel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '*';

  if (arguments.length) {
    Object(__WEBPACK_IMPORTED_MODULE_0__utils__["check"])(arguments[0], __WEBPACK_IMPORTED_MODULE_0__utils__["is"].notUndef, 'take(patternOrChannel): patternOrChannel is undefined');
  }
  if (__WEBPACK_IMPORTED_MODULE_0__utils__["is"].pattern(patternOrChannel)) {
    return effect(TAKE, { pattern: patternOrChannel });
  }
  if (__WEBPACK_IMPORTED_MODULE_0__utils__["is"].channel(patternOrChannel)) {
    return effect(TAKE, { channel: patternOrChannel });
  }
  throw new Error('take(patternOrChannel): argument ' + String(patternOrChannel) + ' is not valid channel or a valid pattern');
}

take.maybe = function () {
  var eff = take.apply(undefined, arguments);
  eff[TAKE].maybe = true;
  return eff;
};

var takem = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__utils__["deprecate"])(take.maybe, /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__utils__["updateIncentive"])('takem', 'take.maybe'));

function put(channel, action) {
  if (arguments.length > 1) {
    Object(__WEBPACK_IMPORTED_MODULE_0__utils__["check"])(channel, __WEBPACK_IMPORTED_MODULE_0__utils__["is"].notUndef, 'put(channel, action): argument channel is undefined');
    Object(__WEBPACK_IMPORTED_MODULE_0__utils__["check"])(channel, __WEBPACK_IMPORTED_MODULE_0__utils__["is"].channel, 'put(channel, action): argument ' + channel + ' is not a valid channel');
    Object(__WEBPACK_IMPORTED_MODULE_0__utils__["check"])(action, __WEBPACK_IMPORTED_MODULE_0__utils__["is"].notUndef, 'put(channel, action): argument action is undefined');
  } else {
    Object(__WEBPACK_IMPORTED_MODULE_0__utils__["check"])(channel, __WEBPACK_IMPORTED_MODULE_0__utils__["is"].notUndef, 'put(action): argument action is undefined');
    action = channel;
    channel = null;
  }
  return effect(PUT, { channel: channel, action: action });
}

put.resolve = function () {
  var eff = put.apply(undefined, arguments);
  eff[PUT].resolve = true;
  return eff;
};

put.sync = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["deprecate"])(put.resolve, Object(__WEBPACK_IMPORTED_MODULE_0__utils__["updateIncentive"])('put.sync', 'put.resolve'));

function all(effects) {
  return effect(ALL, effects);
}

function race(effects) {
  return effect(RACE, effects);
}

function getFnCallDesc(meth, fn, args) {
  Object(__WEBPACK_IMPORTED_MODULE_0__utils__["check"])(fn, __WEBPACK_IMPORTED_MODULE_0__utils__["is"].notUndef, meth + ': argument fn is undefined');

  var context = null;
  if (__WEBPACK_IMPORTED_MODULE_0__utils__["is"].array(fn)) {
    var _fn = fn;
    context = _fn[0];
    fn = _fn[1];
  } else if (fn.fn) {
    var _fn2 = fn;
    context = _fn2.context;
    fn = _fn2.fn;
  }
  if (context && __WEBPACK_IMPORTED_MODULE_0__utils__["is"].string(fn) && __WEBPACK_IMPORTED_MODULE_0__utils__["is"].func(context[fn])) {
    fn = context[fn];
  }
  Object(__WEBPACK_IMPORTED_MODULE_0__utils__["check"])(fn, __WEBPACK_IMPORTED_MODULE_0__utils__["is"].func, meth + ': argument ' + fn + ' is not a function');

  return { context: context, fn: fn, args: args };
}

function call(fn) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return effect(CALL, getFnCallDesc('call', fn, args));
}

function apply(context, fn) {
  var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  return effect(CALL, getFnCallDesc('apply', { context: context, fn: fn }, args));
}

function cps(fn) {
  for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }

  return effect(CPS, getFnCallDesc('cps', fn, args));
}

function fork(fn) {
  for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    args[_key3 - 1] = arguments[_key3];
  }

  return effect(FORK, getFnCallDesc('fork', fn, args));
}

function spawn(fn) {
  for (var _len4 = arguments.length, args = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
    args[_key4 - 1] = arguments[_key4];
  }

  var eff = fork.apply(undefined, [fn].concat(args));
  eff[FORK].detached = true;
  return eff;
}

function join() {
  for (var _len5 = arguments.length, tasks = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    tasks[_key5] = arguments[_key5];
  }

  if (tasks.length > 1) {
    return all(tasks.map(function (t) {
      return join(t);
    }));
  }
  var task = tasks[0];
  Object(__WEBPACK_IMPORTED_MODULE_0__utils__["check"])(task, __WEBPACK_IMPORTED_MODULE_0__utils__["is"].notUndef, 'join(task): argument task is undefined');
  Object(__WEBPACK_IMPORTED_MODULE_0__utils__["check"])(task, __WEBPACK_IMPORTED_MODULE_0__utils__["is"].task, 'join(task): argument ' + task + ' is not a valid Task object ' + TEST_HINT);
  return effect(JOIN, task);
}

function cancel() {
  for (var _len6 = arguments.length, tasks = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
    tasks[_key6] = arguments[_key6];
  }

  if (tasks.length > 1) {
    return all(tasks.map(function (t) {
      return cancel(t);
    }));
  }
  var task = tasks[0];
  if (tasks.length === 1) {
    Object(__WEBPACK_IMPORTED_MODULE_0__utils__["check"])(task, __WEBPACK_IMPORTED_MODULE_0__utils__["is"].notUndef, 'cancel(task): argument task is undefined');
    Object(__WEBPACK_IMPORTED_MODULE_0__utils__["check"])(task, __WEBPACK_IMPORTED_MODULE_0__utils__["is"].task, 'cancel(task): argument ' + task + ' is not a valid Task object ' + TEST_HINT);
  }
  return effect(CANCEL, task || __WEBPACK_IMPORTED_MODULE_0__utils__["SELF_CANCELLATION"]);
}

function select(selector) {
  for (var _len7 = arguments.length, args = Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
    args[_key7 - 1] = arguments[_key7];
  }

  if (arguments.length === 0) {
    selector = __WEBPACK_IMPORTED_MODULE_0__utils__["ident"];
  } else {
    Object(__WEBPACK_IMPORTED_MODULE_0__utils__["check"])(selector, __WEBPACK_IMPORTED_MODULE_0__utils__["is"].notUndef, 'select(selector,[...]): argument selector is undefined');
    Object(__WEBPACK_IMPORTED_MODULE_0__utils__["check"])(selector, __WEBPACK_IMPORTED_MODULE_0__utils__["is"].func, 'select(selector,[...]): argument ' + selector + ' is not a function');
  }
  return effect(SELECT, { selector: selector, args: args });
}

/**
  channel(pattern, [buffer])    => creates an event channel for store actions
**/
function actionChannel(pattern, buffer) {
  Object(__WEBPACK_IMPORTED_MODULE_0__utils__["check"])(pattern, __WEBPACK_IMPORTED_MODULE_0__utils__["is"].notUndef, 'actionChannel(pattern,...): argument pattern is undefined');
  if (arguments.length > 1) {
    Object(__WEBPACK_IMPORTED_MODULE_0__utils__["check"])(buffer, __WEBPACK_IMPORTED_MODULE_0__utils__["is"].notUndef, 'actionChannel(pattern, buffer): argument buffer is undefined');
    Object(__WEBPACK_IMPORTED_MODULE_0__utils__["check"])(buffer, __WEBPACK_IMPORTED_MODULE_0__utils__["is"].buffer, 'actionChannel(pattern, buffer): argument ' + buffer + ' is not a valid buffer');
  }
  return effect(ACTION_CHANNEL, { pattern: pattern, buffer: buffer });
}

function cancelled() {
  return effect(CANCELLED, {});
}

function flush(channel) {
  Object(__WEBPACK_IMPORTED_MODULE_0__utils__["check"])(channel, __WEBPACK_IMPORTED_MODULE_0__utils__["is"].channel, 'flush(channel): argument ' + channel + ' is not valid channel');
  return effect(FLUSH, channel);
}

function getContext(prop) {
  Object(__WEBPACK_IMPORTED_MODULE_0__utils__["check"])(prop, __WEBPACK_IMPORTED_MODULE_0__utils__["is"].string, 'getContext(prop): argument ' + prop + ' is not a string');
  return effect(GET_CONTEXT, prop);
}

function setContext(props) {
  Object(__WEBPACK_IMPORTED_MODULE_0__utils__["check"])(props, __WEBPACK_IMPORTED_MODULE_0__utils__["is"].object, Object(__WEBPACK_IMPORTED_MODULE_0__utils__["createSetContextWarning"])(null, props));
  return effect(SET_CONTEXT, props);
}

function takeEvery(patternOrChannel, worker) {
  for (var _len8 = arguments.length, args = Array(_len8 > 2 ? _len8 - 2 : 0), _key8 = 2; _key8 < _len8; _key8++) {
    args[_key8 - 2] = arguments[_key8];
  }

  return fork.apply(undefined, [__WEBPACK_IMPORTED_MODULE_1__sagaHelpers__["takeEveryHelper"], patternOrChannel, worker].concat(args));
}

function takeLatest(patternOrChannel, worker) {
  for (var _len9 = arguments.length, args = Array(_len9 > 2 ? _len9 - 2 : 0), _key9 = 2; _key9 < _len9; _key9++) {
    args[_key9 - 2] = arguments[_key9];
  }

  return fork.apply(undefined, [__WEBPACK_IMPORTED_MODULE_1__sagaHelpers__["takeLatestHelper"], patternOrChannel, worker].concat(args));
}

function throttle(ms, pattern, worker) {
  for (var _len10 = arguments.length, args = Array(_len10 > 3 ? _len10 - 3 : 0), _key10 = 3; _key10 < _len10; _key10++) {
    args[_key10 - 3] = arguments[_key10];
  }

  return fork.apply(undefined, [__WEBPACK_IMPORTED_MODULE_1__sagaHelpers__["throttleHelper"], ms, pattern, worker].concat(args));
}

var createAsEffectType = function createAsEffectType(type) {
  return function (effect) {
    return effect && effect[IO] && effect[type];
  };
};

var asEffect = {
  take: createAsEffectType(TAKE),
  put: createAsEffectType(PUT),
  all: createAsEffectType(ALL),
  race: createAsEffectType(RACE),
  call: createAsEffectType(CALL),
  cps: createAsEffectType(CPS),
  fork: createAsEffectType(FORK),
  join: createAsEffectType(JOIN),
  cancel: createAsEffectType(CANCEL),
  select: createAsEffectType(SELECT),
  actionChannel: createAsEffectType(ACTION_CHANNEL),
  cancelled: createAsEffectType(CANCELLED),
  flush: createAsEffectType(FLUSH),
  getContext: createAsEffectType(GET_CONTEXT),
  setContext: createAsEffectType(SET_CONTEXT)
};

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUFFER_OVERFLOW", function() { return BUFFER_OVERFLOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buffers", function() { return buffers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(18);


var BUFFER_OVERFLOW = "Channel's Buffer overflow!";

var ON_OVERFLOW_THROW = 1;
var ON_OVERFLOW_DROP = 2;
var ON_OVERFLOW_SLIDE = 3;
var ON_OVERFLOW_EXPAND = 4;

var zeroBuffer = { isEmpty: __WEBPACK_IMPORTED_MODULE_0__utils__["kTrue"], put: __WEBPACK_IMPORTED_MODULE_0__utils__["noop"], take: __WEBPACK_IMPORTED_MODULE_0__utils__["noop"] };

function ringBuffer() {
  var limit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
  var overflowAction = arguments[1];

  var arr = new Array(limit);
  var length = 0;
  var pushIndex = 0;
  var popIndex = 0;

  var push = function push(it) {
    arr[pushIndex] = it;
    pushIndex = (pushIndex + 1) % limit;
    length++;
  };

  var take = function take() {
    if (length != 0) {
      var it = arr[popIndex];
      arr[popIndex] = null;
      length--;
      popIndex = (popIndex + 1) % limit;
      return it;
    }
  };

  var flush = function flush() {
    var items = [];
    while (length) {
      items.push(take());
    }
    return items;
  };

  return {
    isEmpty: function isEmpty() {
      return length == 0;
    },
    put: function put(it) {
      if (length < limit) {
        push(it);
      } else {
        var doubledLimit = void 0;
        switch (overflowAction) {
          case ON_OVERFLOW_THROW:
            throw new Error(BUFFER_OVERFLOW);
          case ON_OVERFLOW_SLIDE:
            arr[pushIndex] = it;
            pushIndex = (pushIndex + 1) % limit;
            popIndex = pushIndex;
            break;
          case ON_OVERFLOW_EXPAND:
            doubledLimit = 2 * limit;

            arr = flush();

            length = arr.length;
            pushIndex = arr.length;
            popIndex = 0;

            arr.length = doubledLimit;
            limit = doubledLimit;

            push(it);
            break;
          default:
          // DROP
        }
      }
    },
    take: take,
    flush: flush
  };
}

var buffers = {
  none: function none() {
    return zeroBuffer;
  },
  fixed: function fixed(limit) {
    return ringBuffer(limit, ON_OVERFLOW_THROW);
  },
  dropping: function dropping(limit) {
    return ringBuffer(limit, ON_OVERFLOW_DROP);
  },
  sliding: function sliding(limit) {
    return ringBuffer(limit, ON_OVERFLOW_SLIDE);
  },
  expanding: function expanding(initialSize) {
    return ringBuffer(initialSize, ON_OVERFLOW_EXPAND);
  }
};

/***/ })

/******/ });
});