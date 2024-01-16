





(function () {
  let arr = [, 3];
  function inlined() {
  }
  function foo() {
    arr.reduce(inlined);
  };
  %PrepareFunctionForOptimization(foo);
  foo();
  %OptimizeFunctionOnNextCall(foo);
  foo();
})();
