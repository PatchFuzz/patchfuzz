





function foo(...args) {
  return Array.isArray(args);
};
%PrepareFunctionForOptimization(foo);
assertTrue(foo());
assertTrue(foo());
%OptimizeFunctionOnNextCall(foo);
assertTrue(foo());
