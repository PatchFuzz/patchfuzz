





(function() {
  function test(a, b) {
    return a === b;
  }

  %PrepareFunctionForOptimization(test);
  assertTrue(test(undefined, undefined));
  assertTrue(test(undefined, undefined));
  %OptimizeFunctionOnNextCall(test);
  assertTrue(test(undefined, undefined));
})();

(function() {
  function test(a, b) {
    return a === b;
  }

  %PrepareFunctionForOptimization(test);
  assertTrue(test(true, true));
  assertTrue(test(true, true));
  %OptimizeFunctionOnNextCall(test);
  assertFalse(test(true, 1));
})();

(function() {
  function test(a, b) {
      return a == b;
  }

  %PrepareFunctionForOptimization(test);
  assertTrue(test(true, true));
  assertTrue(test(true, true));
  %OptimizeFunctionOnNextCall(test);
  assertTrue(test(true, 1));
})();
