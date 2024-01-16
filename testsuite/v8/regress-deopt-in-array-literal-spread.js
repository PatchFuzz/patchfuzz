





function f(a, b, c, d) {
  return [a, ...(%DeoptimizeNow(), [b, c]), d];
};
%PrepareFunctionForOptimization(f);
assertEquals([1, 2, 3, 4], f(1, 2, 3, 4));
assertEquals([1, 2, 3, 4], f(1, 2, 3, 4));
%OptimizeFunctionOnNextCall(f);
assertEquals([1, 2, 3, 4], f(1, 2, 3, 4));
