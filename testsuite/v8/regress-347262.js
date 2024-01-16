




























(function ArgumentsObjectWithOtherArgumentsInFrame() {
  function g() {
    return g.arguments;
  }

  function f(x) {
    g();
    return arguments[0];
  };
  %PrepareFunctionForOptimization(f);
  f();
  f();
  %OptimizeFunctionOnNextCall(f);
  f();
})();


(function ArgumentsObjectWithOtherArgumentsDeopt() {
  function g(y) {
    y.o2 = 2;
    return g.arguments;
  }

  function f(x) {
    var o1 = {o2: 1};
    var a = g(o1);
    o1.o2 = 3;
    return arguments[0] + a[0].o2;
  };
  %PrepareFunctionForOptimization(f);
  f(0);
  f(0);
  %OptimizeFunctionOnNextCall(f);
  assertEquals(3, f(0));
})();
