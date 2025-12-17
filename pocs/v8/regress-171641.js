function foo(k, p) {
  for (var i = 0; i < 1; i++) {
    p = Math.min(p, i);
  }
  m = Math.floor((k | 0) / p);
};
%PrepareFunctionForOptimization(foo);
foo(0, 1);
foo(0, 1);
%OptimizeFunctionOnNextCall(foo);
foo(0, 1);
