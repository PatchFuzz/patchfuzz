




(() => {
  function f(s) {
    return s.charAt();
  };
  %PrepareFunctionForOptimization(f);
  f('');
  f("");
  %OptimizeFunctionOnNextCall(f);
  f("");
})();
