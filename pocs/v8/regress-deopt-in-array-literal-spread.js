function f(a, b, c, d) {
  return [a, ...(%DeoptimizeNow(), [b, c]), d];
};
%PrepareFunctionForOptimization(f);
print([1, 2, 3, 4], f(1, 2, 3, 4));
print([1, 2, 3, 4], f(1, 2, 3, 4));
%OptimizeFunctionOnNextCall(f);
print([1, 2, 3, 4], f(1, 2, 3, 4));
