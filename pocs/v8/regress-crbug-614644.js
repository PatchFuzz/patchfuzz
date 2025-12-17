function f(a, x) {
  a.shift(2, a.length = 2);
  a[0] = x;
};
%PrepareFunctionForOptimization(f);
f([], 1.1);
f([1], 1.1);
%OptimizeFunctionOnNextCall(f);
f([1], 1.1);
