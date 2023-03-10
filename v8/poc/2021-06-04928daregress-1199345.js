






(function() {
  function foo(a) {
    var x = -0;
    if (a) {
      x = 0;
    }
    return x + (x - 0);
  }
  %PrepareFunctionForOptimization(foo);
  print(0, foo(true));
  %OptimizeFunctionOnNextCall(foo);
  print(-0, foo(false));
})();




(function() {
  function foo(a) {
    var x = 0;
    var y = -0;
    if (a == 42) x = 2**32 - 1;
    if (a == 0) {
      x = 0
      y = 1;
    }
    if (a == 2) x = -0;
    return x + y;
  }
  %PrepareFunctionForOptimization(foo);
  print(1, foo(0));
  %OptimizeFunctionOnNextCall(foo);
  print(0, foo(1));
  
  
  print(foo);
  print(-0, foo(2));
  print(foo);
})();
