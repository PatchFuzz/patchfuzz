





(function() {
  function foo(x) {
    x = x | 0;
    return Number.parseInt(x + 1);
  }

  %PrepareFunctionForOptimization(foo);
  print(1, foo(0));
  print(2, foo(1));
  %OptimizeFunctionOnNextCall(foo);
  print(Math.pow(2, 31), foo(Math.pow(2, 31) - 1));
})();

(function() {
  function foo(x) {
    x = x | 0;
    return Number.parseInt(x + 1, 0);
  }

  %PrepareFunctionForOptimization(foo);
  print(1, foo(0));
  print(2, foo(1));
  %OptimizeFunctionOnNextCall(foo);
  print(Math.pow(2, 31), foo(Math.pow(2, 31) - 1));
})();

(function() {
  function foo(x) {
    x = x | 0;
    return Number.parseInt(x + 1, 10);
  }

  %PrepareFunctionForOptimization(foo);
  print(1, foo(0));
  print(2, foo(1));
  %OptimizeFunctionOnNextCall(foo);
  print(Math.pow(2, 31), foo(Math.pow(2, 31) - 1));
})();

(function() {
  function foo(x) {
    x = x | 0;
    return Number.parseInt(x + 1, undefined);
  }

  %PrepareFunctionForOptimization(foo);
  print(1, foo(0));
  print(2, foo(1));
  %OptimizeFunctionOnNextCall(foo);
  print(Math.pow(2, 31), foo(Math.pow(2, 31) - 1));
})();
