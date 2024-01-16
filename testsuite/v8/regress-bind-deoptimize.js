





(function() {
  function bla(x) {
    return this[x];
  }

  function foo(f) {
    return bla.bind(f())(0);
  };

  %PrepareFunctionForOptimization(foo);
  foo(() => { return [true]; });
  foo(() => { return [true]; });
  %OptimizeFunctionOnNextCall(foo);
  foo(() => { return [true]; });
  assertOptimized(foo);
  foo(() => { bla.a = 1; return [true]; });
  assertUnoptimized(foo);
})();
