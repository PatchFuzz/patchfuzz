(function() {
  function test(a, b) {
    return a === b;
  }

  %PrepareFunctionForOptimization(test);
  print(test(undefined, undefined));
  print(test(undefined, undefined));
  %OptimizeFunctionOnNextCall(test);
  print(test(undefined, undefined));
})();

(function() {
  function test(a, b) {
    return a === b;
  }

  %PrepareFunctionForOptimization(test);
  print(test(true, true));
  print(test(true, true));
  %OptimizeFunctionOnNextCall(test);
  print(test(true, 1));
})();

(function() {
  function test(a, b) {
      return a == b;
  }

  %PrepareFunctionForOptimization(test);
  print(test(true, true));
  print(test(true, true));
  %OptimizeFunctionOnNextCall(test);
  print(test(true, 1));
})();
