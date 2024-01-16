

































function foo(x) {
  return (x ? NaN : 0.2) + 0.1;
};
%PrepareFunctionForOptimization(foo);
foo(false);
foo(false);
%OptimizeFunctionOnNextCall(foo);
foo(false);
