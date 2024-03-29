





(function TestNonCallableForEach() {
  function foo() {
    [].forEach(undefined);
  };
  %PrepareFunctionForOptimization(foo);
  assertThrows(foo, TypeError);
  assertThrows(foo, TypeError);
  %OptimizeFunctionOnNextCall(foo);
  assertThrows(foo, TypeError);
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
  assertInstanceof(foo(), TypeError);
  assertInstanceof(foo(), TypeError);
  %OptimizeFunctionOnNextCall(foo);
  assertInstanceof(foo(), TypeError);
})();

(function TestNonCallableMap() {
  function foo() {
    [].map(undefined);
  };
  %PrepareFunctionForOptimization(foo);
  assertThrows(foo, TypeError);
  assertThrows(foo, TypeError);
  %OptimizeFunctionOnNextCall(foo);
  assertThrows(foo, TypeError);
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
  assertInstanceof(foo(), TypeError);
  assertInstanceof(foo(), TypeError);
  %OptimizeFunctionOnNextCall(foo);
  assertInstanceof(foo(), TypeError);
})();

(function TestNonCallableFilter() {
  function foo() {
    [].filter(undefined);
  };
  %PrepareFunctionForOptimization(foo);
  assertThrows(foo, TypeError);
  assertThrows(foo, TypeError);
  %OptimizeFunctionOnNextCall(foo);
  assertThrows(foo, TypeError);
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
  assertInstanceof(foo(), TypeError);
  assertInstanceof(foo(), TypeError);
  %OptimizeFunctionOnNextCall(foo);
  assertInstanceof(foo(), TypeError);
})();
