(function TestNonCallableForEach() {
  function foo() {
    [].forEach(undefined);
  };
  %PrepareFunctionForOptimization(foo);
  print(foo, TypeError);
  print(foo, TypeError);
  %OptimizeFunctionOnNextCall(foo);
  print(foo, TypeError);
})();

(function TestNonCallableForEachCaught() {
  function foo() {
    try {
      [].forEach(undefined);
    } catch (e) {
      return e;
    }
  };
  %PrepareFunctionForOptimization(foo);
  print(foo(), TypeError);
  print(foo(), TypeError);
  %OptimizeFunctionOnNextCall(foo);
  print(foo(), TypeError);
})();

(function TestNonCallableMap() {
  function foo() {
    [].map(undefined);
  };
  %PrepareFunctionForOptimization(foo);
  print(foo, TypeError);
  print(foo, TypeError);
  %OptimizeFunctionOnNextCall(foo);
  print(foo, TypeError);
})();

(function TestNonCallableMapCaught() {
  function foo() {
    try {
      [].map(undefined);
    } catch (e) {
      return e;
    }
  };
  %PrepareFunctionForOptimization(foo);
  print(foo(), TypeError);
  print(foo(), TypeError);
  %OptimizeFunctionOnNextCall(foo);
  print(foo(), TypeError);
})();

(function TestNonCallableFilter() {
  function foo() {
    [].filter(undefined);
  };
  %PrepareFunctionForOptimization(foo);
  print(foo, TypeError);
  print(foo, TypeError);
  %OptimizeFunctionOnNextCall(foo);
  print(foo, TypeError);
})();

(function TestNonCallableFilterCaught() {
  function foo() {
    try {
      [].filter(undefined);
    } catch (e) {
      return e;
    }
  };
  %PrepareFunctionForOptimization(foo);
  print(foo(), TypeError);
  print(foo(), TypeError);
  %OptimizeFunctionOnNextCall(foo);
  print(foo(), TypeError);
})();
