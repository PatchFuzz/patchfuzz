var zero = 0;

(function ConstantFoldZeroDivZero() {
  function f() {
    return 0 / zero;
  };
  %PrepareFunctionForOptimization(f);
  print(isNaN(f()));
  print(isNaN(f()));
  %OptimizeFunctionOnNextCall(f);
  print(isNaN(f()));
})();

(function ConstantFoldMinusZeroDivZero() {
  function f() {
    return -0 / zero;
  };
  %PrepareFunctionForOptimization(f);
  print(isNaN(f()));
  print(isNaN(f()));
  %OptimizeFunctionOnNextCall(f);
  print(isNaN(f()));
})();

(function ConstantFoldNaNDivZero() {
  function f() {
    return NaN / 0;
  };
  %PrepareFunctionForOptimization(f);
  print(isNaN(f()));
  print(isNaN(f()));
  %OptimizeFunctionOnNextCall(f);
  print(isNaN(f()));
})();
