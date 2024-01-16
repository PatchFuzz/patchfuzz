





function foo(trigger) {
  return Object.is((trigger ? -0 : 0) - 0, -0);
};
%PrepareFunctionForOptimization(foo);
assertFalse(foo(false));
%OptimizeFunctionOnNextCall(foo);
assertTrue(foo(true));
