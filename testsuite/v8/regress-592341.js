





function id(a) {
  return a;
}

(function LiteralCompareNullDeopt() {
  function f() {
    return id(null == %DeoptimizeNow());
  };
  %PrepareFunctionForOptimization(f);
  %OptimizeFunctionOnNextCall(f);
  assertTrue(f());
})();

(function LiteralCompareUndefinedDeopt() {
  function f() {
    return id(undefined == %DeoptimizeNow());
  };
  %PrepareFunctionForOptimization(f);
  %OptimizeFunctionOnNextCall(f);
  assertTrue(f());
})();

(function LiteralCompareTypeofDeopt() {
  function f() {
    return id('undefined' == typeof %DeoptimizeNow());
  };
  %PrepareFunctionForOptimization(f);
  %OptimizeFunctionOnNextCall(f);
  assertTrue(f());
})();
