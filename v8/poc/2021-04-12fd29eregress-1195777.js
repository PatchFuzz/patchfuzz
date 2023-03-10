






(function() {
  function foo(b) {
    let y = (new Date(42)).getMilliseconds();
    let x = -1;
    if (b) x = 0xFFFF_FFFF;
    return y < Math.max(1 << y, x, 1 + y);
  }
  print(foo(true));
  %PrepareFunctionForOptimization(foo);
  print(foo(false));
  %OptimizeFunctionOnNextCall(foo);
  print(foo(true));
})();


(function() {
  function foo(b) {
    let x = 0;
    if (b) x = -1;
    return x == Math.max(-1, x >>> Infinity);
  }
  print(foo(true));
  %PrepareFunctionForOptimization(foo);
  print(foo(false));
  %OptimizeFunctionOnNextCall(foo);
  print(foo(true));
})();


(function() {
  function foo(b) {
    let x = -1;
    if (b) x = 0xFFFF_FFFF;
    return -1 < Math.max(0, x, -1);
  }
  print(foo(true));
  %PrepareFunctionForOptimization(foo);
  print(foo(false));
  %OptimizeFunctionOnNextCall(foo);
  print(foo(true));
})();


(function() {
  function foo(b) {
    let x = 0x7FFF_FFFF;
    if (b) x = 0;
    return 0 < (Math.max(-5 >>> x, -5) % -5);
  }
  print(foo(true));
  %PrepareFunctionForOptimization(foo);
  print(foo(false));
  %OptimizeFunctionOnNextCall(foo);
  print(foo(true));
})();
