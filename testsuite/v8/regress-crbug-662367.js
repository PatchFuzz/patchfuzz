





var zero = 0;

(function ConstantFoldZeroDivZero() {
  function f() {
    return 0 / zero;
  };
  %PrepareFunctionForOptimization(f);
  assertTrue(isNaN(f()));
  assertTrue(isNaN(f()));
  %OptimizeFunctionOnNextCall(f);
  assertTrue(isNaN(f()));
})();

(function ConstantFoldMinusZeroDivZero() {
  function f() {
    return -0 / zero;
  };
  %PrepareFunctionForOptimization(f);
  assertTrue(isNaN(f()));
  assertTrue(isNaN(f()));
  %OptimizeFunctionOnNextCall(f);
  assertTrue(isNaN(f()));
})();

(function ConstantFoldNaNDivZero() {
  function f() {
    return NaN / 0;
  };
  %PrepareFunctionForOptimization(f);
  assertTrue(isNaN(f()));
  assertTrue(isNaN(f()));
  %OptimizeFunctionOnNextCall(f);
  assertTrue(isNaN(f()));
})();
