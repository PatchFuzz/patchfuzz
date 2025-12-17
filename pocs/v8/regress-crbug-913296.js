function foo(trigger) {
  return Object.is((trigger ? -0 : 0) - 0, -0);
};
%PrepareFunctionForOptimization(foo);
print(foo(false));
%OptimizeFunctionOnNextCall(foo);
print(foo(true));
