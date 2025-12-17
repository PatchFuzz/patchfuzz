(function() {
  function foo() {
      print(new Promise(() => { %DeoptimizeFunction(foo); throw new Error(); }));
  }
  %PrepareFunctionForOptimization(foo);
  foo();
  foo();
  %OptimizeFunctionOnNextCall(foo);
  foo();
})();
