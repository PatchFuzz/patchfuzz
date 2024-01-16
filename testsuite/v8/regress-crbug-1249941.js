





(function() {
  function foo() {
      assertThrowsAsync(new Promise(() => { %DeoptimizeFunction(foo); throw new Error(); }));
  }
  %PrepareFunctionForOptimization(foo);
  foo();
  foo();
  %OptimizeFunctionOnNextCall(foo);
  foo();
})();
