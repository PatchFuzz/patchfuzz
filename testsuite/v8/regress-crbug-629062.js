





function foo(x) {
  return 1 + (1 == 0 && undefined);
};
%PrepareFunctionForOptimization(foo);
foo(false);
foo(false);
%OptimizeFunctionOnNextCall(foo);
foo(true);
