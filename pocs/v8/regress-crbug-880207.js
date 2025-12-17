(function TestOptimizedFastExpm1MinusZero() {
  function foo() {
    return Object.is(Math.expm1(-0), -0);
  };
  %PrepareFunctionForOptimization(foo);
  print(foo());
  %OptimizeFunctionOnNextCall(foo);
  print(foo());
})();

(function TestOptimizedExpm1MinusZeroSlowPath() {
  function f(x) {
    return Object.is(Math.expm1(x), -0);
  };
  %PrepareFunctionForOptimization(f);
  function g() {
    return f(-0);
  };
  %PrepareFunctionForOptimization(g);
  f(0);
  
  
  %OptimizeFunctionOnNextCall(f);
  
  
  f("0");
  
  print(g());
  %OptimizeFunctionOnNextCall(g);
  print(g());
})();
