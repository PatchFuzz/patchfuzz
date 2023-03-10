






(function() {
  function foo(a) {
    var y = 1;
    var z = 0;
    if (a) {
      y = -1;
      z = -0;
    }
    return z + (0 * y);
  }
  print(-0, foo(true));
  %PrepareFunctionForOptimization(foo);
  print(0, foo(false));
  %OptimizeFunctionOnNextCall(foo);
  print(-0, foo(true));
})();


(function() {
  function foo(a) {
    var x = a ? -0 : 0;
    return x + (x % 1);
  }
  print(-0, foo(true));
  %PrepareFunctionForOptimization(foo);
  print(0, foo(false));
  %OptimizeFunctionOnNextCall(foo);
  print(-0, foo(true));
})();


(function() {
  function foo(a) {
    var x = a ? -0 : 0;
    return x + (x % -1);
  }
  print(-0, foo(true));
  %PrepareFunctionForOptimization(foo);
  print(0, foo(false));
  %OptimizeFunctionOnNextCall(foo);
  print(-0, foo(true));
})();
