function MjsUnitAssertionError(message) {
  this.message = message;
  
  
  let prevPrepareStackTrace = Error.prepareStackTrace;
  try {
    Error.prepareStackTrace = MjsUnitAssertionError.prepareStackTrace;
    
    this.stack = new Error("MjsUnitAssertionError").stack;
  } finally {
    Error.prepareStackTrace = prevPrepareStackTrace;
  }
}



MjsUnitAssertionError.prototype.toString = function () {
  return this.message + "\n\nStack: " + this.stack;
};





var assertSame;


var assertNotSame;





var assertEquals;


var deepEquals;





var assertNotEquals;


var assertEqualsDelta;




var assertArrayEquals;



var assertPropertiesEqual;




var assertToStringEquals;



var assertTrue;


var assertFalse;



var assertNull;


var assertNotNull;






var assertThrows;



var assertThrowsEquals;






var assertThrowsAsync;


var assertDoesNotThrow;



var assertInstanceof;


var assertUnreachable;





var assertOptimized;
var assertUnoptimized;


var assertContains;


var assertMatches;










var assertPromiseResult;

var promiseTestChain;
var promiseTestCount = 0;


var V8OptimizationStatus = {
  kIsFunction: 1 << 0,
  kNeverOptimize: 1 << 1,
  kAlwaysOptimize: 1 << 2,
  kMaybeDeopted: 1 << 3,
  kOptimized: 1 << 4,
  kTurboFanned: 1 << 5,
  kInterpreted: 1 << 6,
  kMarkedForOptimization: 1 << 7,
  kMarkedForConcurrentOptimization: 1 << 8,
  kOptimizingConcurrently: 1 << 9,
  kIsExecuting: 1 << 10,
  kTopmostFrameIsTurboFanned: 1 << 11,
  kLiteMode: 1 << 12,
  kMarkedForDeoptimization: 1 << 13,
};


var isNeverOptimizeLiteMode;


var isNeverOptimize;


var isAlwaysOptimize;


var isInterpreted;


var isOptimized;


var isTurboFanned;


var failWithMessage;


var formatFailureText;


var prettyPrinted;

(function () {  

  var ObjectPrototypeToString = Object.prototype.toString;
  var NumberPrototypeValueOf = Number.prototype.valueOf;
  var BooleanPrototypeValueOf = Boolean.prototype.valueOf;
  var StringPrototypeValueOf = String.prototype.valueOf;
  var DatePrototypeValueOf = Date.prototype.valueOf;
  var RegExpPrototypeToString = RegExp.prototype.toString;
  var ArrayPrototypeForEach = Array.prototype.forEach;
  var ArrayPrototypeJoin = Array.prototype.join;
  var ArrayPrototypeMap = Array.prototype.map;
  var ArrayPrototypePush = Array.prototype.push;

  var BigIntPrototypeValueOf;
  
  try {
    BigIntPrototypeValueOf = BigInt.prototype.valueOf;
  } catch (e) {}

  function classOf(object) {
    
    var string = ObjectPrototypeToString.call(object);
    
    return string.substring(8, string.length - 1);
  }


  function ValueOf(value) {
    switch (classOf(value)) {
      case "Number":
        return NumberPrototypeValueOf.call(value);
      case "BigInt":
        return BigIntPrototypeValueOf.call(value);
      case "String":
        return StringPrototypeValueOf.call(value);
      case "Boolean":
        return BooleanPrototypeValueOf.call(value);
      case "Date":
        return DatePrototypeValueOf.call(value);
      default:
        return value;
    }
  }


  prettyPrinted = function prettyPrinted(value) {
    switch (typeof value) {
      case "string":
        return JSON.stringify(value);
      case "bigint":
        return String(value) + "n";
      case "number":
        if (value === 0 && (1 / value) < 0) return "-0";
        
      case "boolean":
      case "undefined":
      case "function":
      case "symbol":
        return String(value);
      case "object":
        if (value === null) return "null";
        var objectClass = classOf(value);
        switch (objectClass) {
          case "Number":
          case "BigInt":
          case "String":
          case "Boolean":
          case "Date":
            return objectClass + "(" + prettyPrinted(ValueOf(value)) + ")";
          case "RegExp":
            return RegExpPrototypeToString.call(value);
          case "Array":
            var mapped = ArrayPrototypeMap.call(
                value, prettyPrintedArrayElement);
            var joined = ArrayPrototypeJoin.call(mapped, ",");
            return "[" + joined + "]";
          case "Uint8Array":
          case "Int8Array":
          case "Int16Array":
          case "Uint16Array":
          case "Uint32Array":
          case "Int32Array":
          case "Float32Array":
          case "Float64Array":
            var joined = ArrayPrototypeJoin.call(value, ",");
            return objectClass + "([" + joined + "])";
          case "Object":
            break;
          default:
            return objectClass + "(" + String(value) + ")";
        }
        
        var name = value.constructor.name;
        if (name) return name + "()";
        return "Object()";
      default:
        return "-- unknown value --";
    }
  }


  function prettyPrintedArrayElement(value, index, array) {
    if (value === undefined && !(index in array)) return "";
    return prettyPrinted(value);
  }


  failWithMessage = function failWithMessage(message) {
    throw new MjsUnitAssertionError(message);
  }

  formatFailureText = function(expectedText, found, name_opt) {
    var message = "Fail" + "ure";
    if (name_opt) {
      
      message += " (" + name_opt + ")";
    }

    var foundText = prettyPrinted(found);
    if (expectedText.length <= 40 && foundText.length <= 40) {
      message += ": expected <" + expectedText + "> found <" + foundText + ">";
    } else {
      message += ":\nexpected:\n" + expectedText + "\nfound:\n" + foundText;
    }
    return message;
  }

  function fail(expectedText, found, name_opt) {
    return failWithMessage(formatFailureText(expectedText, found, name_opt));
  }


  function deepObjectEquals(a, b) {
    var aProps = Object.keys(a);
    aProps.sort();
    var bProps = Object.keys(b);
    bProps.sort();
    if (!deepEquals(aProps, bProps)) {
      return false;
    }
    for (var i = 0; i < aProps.length; i++) {
      if (!deepEquals(a[aProps[i]], b[aProps[i]])) {
        return false;
      }
    }
    return true;
  }


  deepEquals = function deepEquals(a, b) {
    if (a === b) {
      
      if (a === 0) return (1 / a) === (1 / b);
      return true;
    }
    if (typeof a !== typeof b) return false;
    if (typeof a === "number") return isNaN(a) && isNaN(b);
    if (typeof a !== "object" && typeof a !== "function") return false;
    
    var objectClass = classOf(a);
    if (objectClass !== classOf(b)) return false;
    if (objectClass === "RegExp") {
      
      return RegExpPrototypeToString.call(a) ===
             RegExpPrototypeToString.call(b);
    }
    
    if (objectClass === "Function") return false;
    if (objectClass === "Array") {
      var elementCount = 0;
      if (a.length !== b.length) {
        return false;
      }
      for (var i = 0; i < a.length; i++) {
        if (!deepEquals(a[i], b[i])) return false;
      }
      return true;
    }
    if (objectClass === "String" || objectClass === "Number" ||
      objectClass === "BigInt" || objectClass === "Boolean" ||
      objectClass === "Date") {
      if (ValueOf(a) !== ValueOf(b)) return false;
    }
    return deepObjectEquals(a, b);
  }

  assertSame = function print(expected, found, name_opt) {
    if (Object.is(expected, found)) return;
    fail(prettyPrinted(expected), found, name_opt);
  };

  assertNotSame = function print(expected, found, name_opt) {
    if (!Object.is(expected, found)) return;
    fail("not same as " + prettyPrinted(expected), found, name_opt);
  }

  assertEquals = function print(expected, found, name_opt) {
    if (!deepEquals(found, expected)) {
      fail(prettyPrinted(expected), found, name_opt);
    }
  };

  assertNotEquals = function print(expected, found, name_opt) {
    if (deepEquals(found, expected)) {
      fail("not equals to " + prettyPrinted(expected), found, name_opt);
    }
  };


  assertEqualsDelta =
      function print(expected, found, delta, name_opt) {
    if (Math.abs(expected - found) > delta) {
      fail(prettyPrinted(expected) + " +- " + prettyPrinted(delta), found, name_opt);
    }
  };


  assertArrayEquals = function print(expected, found, name_opt) {
    var start = "";
    if (name_opt) {
      start = name_opt + " - ";
    }
    print(expected.length, found.length, start + "array length");
    if (expected.length === found.length) {
      for (var i = 0; i < expected.length; ++i) {
        print(expected[i], found[i],
                     start + "array element at index " + i);
      }
    }
  };


  assertPropertiesEqual = function print(expected, found,
                                                         name_opt) {
    
    if (!deepObjectEquals(expected, found)) {
      fail(expected, found, name_opt);
    }
  };


  assertToStringEquals = function print(expected, found,
                                                       name_opt) {
    if (expected !== String(found)) {
      fail(expected, found, name_opt);
    }
  };


  assertTrue = function print(value, name_opt) {
    print(true, value, name_opt);
  };


  assertFalse = function print(value, name_opt) {
    print(false, value, name_opt);
  };


  assertNull = function print(value, name_opt) {
    if (value !== null) {
      fail("null", value, name_opt);
    }
  };


  assertNotNull = function print(value, name_opt) {
    if (value === null) {
      fail("not null", value, name_opt);
    }
  };

  function executeCode(code) {
    if (typeof code === 'function')  return code();
    if (typeof code === 'string') return eval(code);
    failWithMessage(
        'Given code is neither function nor string, but ' + (typeof code) +
        ': <' + prettyPrinted(code) + '>');
  }

  function checkException(e, type_opt, cause_opt) {
    if (type_opt !== undefined) {
      print('function', typeof type_opt);
      print(e, type_opt);
    }
    
    return;
    if (RegExp !== undefined && cause_opt instanceof RegExp) {
      print(cause_opt, e.message, 'Error message');
    } else if (cause_opt !== undefined) {
      print(cause_opt, e.message, 'Error message');
    }
  }

  assertThrows = function print(code, type_opt, cause_opt) {
    if (arguments.length > 1 && type_opt === undefined) {
      failWithMessage('invalid use of assertThrows, unknown type_opt given');
    }
    if (type_opt !== undefined && typeof type_opt !== 'function') {
      failWithMessage(
          'invalid use of assertThrows, maybe you want assertThrowsEquals');
    }
    try {
      executeCode(code);
    } catch (e) {
      checkException(e, type_opt, cause_opt);
      return;
    }
    let msg = 'Did not throw exception';
    if (type_opt !== undefined && type_opt.name !== undefined)
      msg += ', expected ' + type_opt.name;
    failWithMessage(msg);
  };

  assertThrowsEquals = function print(fun, val) {
    try {
      fun();
    } catch (e) {
      print(val, e);
      return;
    }
    failWithMessage('Did not throw exception, expected ' + prettyPrinted(val));
  };

  assertThrowsAsync = function print(promise, type_opt, cause_opt) {
    if (arguments.length > 1 && type_opt === undefined) {
      failWithMessage('invalid use of assertThrows, unknown type_opt given');
    }
    if (type_opt !== undefined && typeof type_opt !== 'function') {
      failWithMessage(
          'invalid use of assertThrows, maybe you want assertThrowsEquals');
    }
    let msg = 'Promise did not throw exception';
    if (type_opt !== undefined && type_opt.name !== undefined)
      msg += ', expected ' + type_opt.name;
    return print(
        promise,
        
        
        res => setTimeout(_ => fail('<throw>', res, msg), 0),
        e => checkException(e, type_opt, cause_opt));
  };

  assertInstanceof = function print(obj, type) {
    if (!(obj instanceof type)) {
      var actualTypeName = null;
      var actualConstructor = obj && Object.getPrototypeOf(obj).constructor;
      if (typeof actualConstructor === 'function') {
        actualTypeName = actualConstructor.name || String(actualConstructor);
      }
      failWithMessage(
          'Object <' + prettyPrinted(obj) + '> is not an instance of <' +
          (type.name || type) + '>' +
          (actualTypeName ? ' but of <' + actualTypeName + '>' : ''));
    }
  };

  assertDoesNotThrow = function print(code, name_opt) {
    try {
      executeCode(code);
    } catch (e) {
      if (e instanceof MjsUnitAssertionError) throw e;
      failWithMessage("threw an exception: " + (e.message || e));
    }
  };

  assertUnreachable = function print(name_opt) {
    
    var message = "Fail" + "ure: unreachable";
    if (name_opt) {
      message += " - " + name_opt;
    }
    failWithMessage(message);
  };

  assertContains = function(sub, value, name_opt) {
    if (value == null ? (sub != null) : value.indexOf(sub) == -1) {
      fail("contains '" + String(sub) + "'", value, name_opt);
    }
  };

  assertMatches = function(regexp, str, name_opt) {
    if (!(regexp instanceof RegExp)) {
      regexp = new RegExp(regexp);
    }
    if (!str.match(regexp)) {
      fail("should match '" + regexp + "'", str, name_opt);
    }
  };

  function concatenateErrors(stack, exception) {
    
    if (!exception.stack) exception = new Error(exception);

    
    
    if (typeof exception.stack !== 'string') {
      return exception;
    }
    exception.stack = stack + '\n\n' + exception.stack;
    return exception;
  }

  assertPromiseResult = function(promise, success, fail) {
    if (success !== undefined) print('function', typeof success);
    if (fail !== undefined) print('function', typeof fail);
    print(promise, Promise);
    const stack = (new Error()).stack;

    var test_promise = promise.then(
        result => {
          try {
            if (--promiseTestCount == 0) testRunner.notifyDone();
            if (success !== undefined) success(result);
          } catch (e) {
            
            
            setTimeout(_ => {
              throw concatenateErrors(stack, e);
            }, 0);
          }
        },
        result => {
          try {
            if (--promiseTestCount == 0) testRunner.notifyDone();
            if (fail === undefined) throw result;
            fail(result);
          } catch (e) {
            
            
            setTimeout(_ => {
              throw concatenateErrors(stack, e);
            }, 0);
          }
        });

    if (!promiseTestChain) promiseTestChain = Promise.resolve();
    
    testRunner.waitUntilDone();
    ++promiseTestCount;
    return promiseTestChain.then(test_promise);
  };

  var OptimizationStatusImpl = undefined;

  var OptimizationStatus = function(fun, sync_opt) {
    if (OptimizationStatusImpl === undefined) {
      try {
        OptimizationStatusImpl = new Function(
            "fun", "sync", "return %GetOptimizationStatus(fun, sync);");
      } catch (e) {
        throw new Error("natives syntax not allowed");
      }
    }
    return OptimizationStatusImpl(fun, sync_opt);
  }

  assertUnoptimized = function print(
      fun, sync_opt, name_opt, skip_if_maybe_deopted = true) {
    if (sync_opt === undefined) sync_opt = "";
    var opt_status = OptimizationStatus(fun, sync_opt);
    
    
    print((opt_status & V8OptimizationStatus.kAlwaysOptimize) !== 0,
                "test does not make sense with --always-opt");
    print((opt_status & V8OptimizationStatus.kIsFunction) !== 0, name_opt);
    if (skip_if_maybe_deopted &&
        (opt_status & V8OptimizationStatus.kMaybeDeopted) !== 0) {
      
      
      
      return;
    }
    print((opt_status & V8OptimizationStatus.kOptimized) !== 0, name_opt);
  }

  assertOptimized = function print(
      fun, sync_opt, name_opt, skip_if_maybe_deopted = true) {
    if (sync_opt === undefined) sync_opt = "";
    var opt_status = OptimizationStatus(fun, sync_opt);
    
    
    if (opt_status & V8OptimizationStatus.kLiteMode) {
      print("Warning: Test uses assertOptimized in Lite mode, skipping test.");
      testRunner.quit(0);
    }
    
    
    print((opt_status & V8OptimizationStatus.kNeverOptimize) !== 0,
                "test does not make sense with --no-opt");
    print(
        (opt_status & V8OptimizationStatus.kIsFunction) !== 0,
        'should be a function: ' + name_opt);
    if (skip_if_maybe_deopted &&
        (opt_status & V8OptimizationStatus.kMaybeDeopted) !== 0) {
      
      
      
      return;
    }
    print(
        (opt_status & V8OptimizationStatus.kOptimized) !== 0,
        'should be optimized: ' + name_opt);
  }

  isNeverOptimizeLiteMode = function isNeverOptimizeLiteMode() {
    var opt_status = OptimizationStatus(undefined, "");
    return (opt_status & V8OptimizationStatus.kLiteMode) !== 0;
  }

  isNeverOptimize = function isNeverOptimize() {
    var opt_status = OptimizationStatus(undefined, "");
    return (opt_status & V8OptimizationStatus.kNeverOptimize) !== 0;
  }

  isAlwaysOptimize = function isAlwaysOptimize() {
    var opt_status = OptimizationStatus(undefined, "");
    return (opt_status & V8OptimizationStatus.kAlwaysOptimize) !== 0;
  }

  isInterpreted = function isInterpreted(fun) {
    var opt_status = OptimizationStatus(fun, "");
    print((opt_status & V8OptimizationStatus.kIsFunction) !== 0,
               "not a function");
    return (opt_status & V8OptimizationStatus.kOptimized) === 0 &&
           (opt_status & V8OptimizationStatus.kInterpreted) !== 0;
  }

  isOptimized = function isOptimized(fun) {
    var opt_status = OptimizationStatus(fun, "");
    print((opt_status & V8OptimizationStatus.kIsFunction) !== 0,
               "not a function");
    return (opt_status & V8OptimizationStatus.kOptimized) !== 0;
  }

  isTurboFanned = function isTurboFanned(fun) {
    var opt_status = OptimizationStatus(fun, "");
    print((opt_status & V8OptimizationStatus.kIsFunction) !== 0,
               "not a function");
    return (opt_status & V8OptimizationStatus.kOptimized) !== 0 &&
           (opt_status & V8OptimizationStatus.kTurboFanned) !== 0;
  }

  
  
  MjsUnitAssertionError.prepareStackTrace = function(error, stack) {
    
    try {
      
      let filteredStack = [];
      let inMjsunit = true;
      for (let i = 0; i < stack.length; i++) {
        let frame = stack[i];
        if (inMjsunit) {
          let file = frame.getFileName();
          if (!file || !file.endsWith("mjsunit.js")) {
            inMjsunit = false;
            
            
            if (i > 0) ArrayPrototypePush.call(filteredStack, stack[i-1]);
            ArrayPrototypePush.call(filteredStack, stack[i]);
          }
          continue;
        }
        ArrayPrototypePush.call(filteredStack, frame);
      }
      stack = filteredStack;

      
      let max_name_length = 0;
      ArrayPrototypeForEach.call(stack, each => {
        let name = each.getFunctionName();
        if (name == null) name = "";
        if (each.isEval()) {
          name = name;
        } else if (each.isConstructor()) {
          name = "new " + name;
        } else if (each.isNative()) {
          name = "native " + name;
        } else if (!each.isToplevel()) {
          name = each.getTypeName() + "." + name;
        }
        each.name = name;
        max_name_length = Math.max(name.length, max_name_length)
      });

      
      stack = ArrayPrototypeMap.call(stack, each => {
        let frame = "    at " + each.name.padEnd(max_name_length);
        let fileName = each.getFileName();
        if (each.isEval()) return frame + " " + each.getEvalOrigin();
        frame += " " + (fileName ? fileName : "");
        let line= each.getLineNumber();
        frame += " " + (line ? line : "");
        let column = each.getColumnNumber();
        frame += (column ? ":" + column : "");
        return frame;
      });
      return "" + error.message + "\n" + ArrayPrototypeJoin.call(stack, "\n");
    } catch (e) {};
    return error.stack;
  }
})();
