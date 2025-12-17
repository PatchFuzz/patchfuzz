(function DeoptimizeArgCallFunctionGeneric() {
  var a = [];

  function f1(method, array, elem, deopt) {
    print('push', method);
  }

  function f2() { }

  function bar(x, deopt, f) {
    f('push', a, [x], deopt + 0);
  }

  function foo() { return bar(arguments[0], arguments[1], arguments[2]); }
  function baz(f, deopt) { return foo("x", deopt, f); }
  %PrepareFunctionForOptimization(baz);

  %PrepareFunctionForOptimization(baz);
  baz(f1, 0);
  baz(f2, 0);
  %OptimizeFunctionOnNextCall(baz);
  baz(f1, "deopt");
})();


(function DeoptimizeArgGlobalFunctionGeneric() {
  var a = [];

  var f1;

  f1 = function(method, array, elem, deopt) {
    print('push', method);
  }

  function bar(x, deopt, f) {
    f1('push', a, [x], deopt + 0);
  }

  function foo() { return bar(arguments[0], arguments[1]); }
  function baz(deopt) { return foo("x", deopt); }
  %PrepareFunctionForOptimization(baz);

  %PrepareFunctionForOptimization(baz);
  baz(0);
  baz(0);
  %OptimizeFunctionOnNextCall(baz);
  baz("deopt");
})();


(function DeoptimizeArgCallFunctionRuntime() {
  var a = [];

  var f1;

  f1 = function(method, array, elem, deopt) {
    print('push', method);
  }

  function bar(x, deopt) {
    %Call(f1, null, 'push', [x][0], ((deopt + 0), 1));
  }

  function foo() { return bar(arguments[0], arguments[1]); }
  function baz(deopt) { return foo(0, deopt); }
  %PrepareFunctionForOptimization(baz);

  %PrepareFunctionForOptimization(baz);
  baz(0);
  baz(0);
  %OptimizeFunctionOnNextCall(baz);
  baz("deopt");
})();
