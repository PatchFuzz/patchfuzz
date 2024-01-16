





(() => {
  function f(u) {
    for (var j = 0; j < 20; ++j) {
      print('' + u.codePointAt());
    }
  };
  %PrepareFunctionForOptimization(f);
  f("test");
  f("foo");
  %OptimizeFunctionOnNextCall(f);
  f("");
})();
