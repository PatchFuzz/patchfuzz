




print = function(){};
(function () {  

  assertPromiseResult = function(promise, success, fail) {

    if (!success) success = () => {};

    failWithMessage = (msg) => eval("print(msg)");
    if (!fail) {
      fail = result => failWithMessage("assertPromiseResult failed: " + result);
    }

    var test_promise =
        promise.then(
          result => {
            try {
              success(result);
            } catch (e) {
              failWithMessage(e);
            }
          },
          result => {
            fail(result);
          }
        )
        .then((x)=> {
          if (--promiseTestCount == 0) testRunner.notifyDone();
        });

    if (!promiseTestChain) promiseTestChain = Promise.resolve();
    
    testRunner.waitUntilDone();
    ++promiseTestCount;
    return promiseTestChain.then(test_promise);
  };


 assertUnoptimized = function assertUnoptimized(fun, sync_opt, name_opt) {
    if (sync_opt === undefined) sync_opt = "";
    var opt_status = OptimizationStatus(fun, sync_opt);
    
    
    assertFalse((opt_status & V8OptimizationStatus.kAlwaysOptimize) !== 0,
                "test does not make sense with --always-opt");
    assertTrue((opt_status & V8OptimizationStatus.kIsFunction) !== 0, name_opt);
    if ((opt_status & V8OptimizationStatus.kMaybeDeopted) !== 0) {
      
      
      
      return;
    }
    assertFalse((opt_status & V8OptimizationStatus.kOptimized) !== 0, name_opt);
  }






 
  assertOptimized = function assertOptimized(fun, sync_opt, name_opt) {
    if (sync_opt === undefined) sync_opt = "";
    var opt_status = OptimizationStatus(fun, sync_opt);
    
    
    assertFalse((opt_status & V8OptimizationStatus.kNeverOptimize) !== 0,
                "test does not make sense with --no-opt");
    assertTrue((opt_status & V8OptimizationStatus.kIsFunction) !== 0, name_opt);
    if ((opt_status & V8OptimizationStatus.kMaybeDeopted) !== 0) {
      
      
      
      return;
    }
    assertTrue((opt_status & V8OptimizationStatus.kOptimized) !== 0, name_opt);
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
    assertTrue((opt_status & V8OptimizationStatus.kIsFunction) !== 0,
               "not a function");
    return (opt_status & V8OptimizationStatus.kOptimized) === 0 &&
           (opt_status & V8OptimizationStatus.kInterpreted) !== 0;
  }

  isOptimized = function isOptimized(fun) {
    var opt_status = OptimizationStatus(fun, "");
    assertTrue((opt_status & V8OptimizationStatus.kIsFunction) !== 0,
               "not a function");
    return (opt_status & V8OptimizationStatus.kOptimized) !== 0;
  }

  isCrankshafted = function isCrankshafted(fun) {
    var opt_status = OptimizationStatus(fun, "");
    assertTrue((opt_status & V8OptimizationStatus.kIsFunction) !== 0,
               "not a function");
    return (opt_status & V8OptimizationStatus.kOptimized) !== 0 &&
           (opt_status & V8OptimizationStatus.kTurboFanned) === 0;
  }

  isTurboFanned = function isTurboFanned(fun) {
    var opt_status = OptimizationStatus(fun, "");
    assertTrue((opt_status & V8OptimizationStatus.kIsFunction) !== 0,
               "not a function");
    return (opt_status & V8OptimizationStatus.kOptimized) !== 0 &&
           (opt_status & V8OptimizationStatus.kTurboFanned) !== 0;
  }

})();








assertEquals = print;

var m = (function() {
  "use asm";
  function f(x) {
    return x < 0;
  }
  function g(x) {
    return 0 < x;
  }
  return { f: f, g: g };
})();
var f = m.f;
var g = m.g;

var counter = 0;

function deopt(f) {
  return {
    toString : function() {
      print(f);
      counter++;
      return "2";
    }
  };
}

assertEquals(false, f(deopt(f)));
assertEquals(1, counter);

assertEquals(true, g(deopt(g)));
assertEquals(2, counter);

print(f);
assertEquals(false, f(deopt(f)));
assertEquals(3, counter);

print(g);
assertEquals(true, g(deopt(g)));
assertEquals(4, counter);

WScript.Echo('pass');
