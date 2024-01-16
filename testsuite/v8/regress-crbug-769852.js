





function f(o) {
  function g() {}
  Object.keys(o).forEach(suite => g());
};
%PrepareFunctionForOptimization(f);
assertDoesNotThrow(() => f({}));
assertDoesNotThrow(() => f({x: 0}));
%OptimizeFunctionOnNextCall(f);
assertDoesNotThrow(() => f({x: 0}));
