function f(o) {
  function g() {}
  Object.keys(o).forEach(suite => g());
};
%PrepareFunctionForOptimization(f);
print(() => f({}));
print(() => f({x: 0}));
%OptimizeFunctionOnNextCall(f);
print(() => f({x: 0}));
