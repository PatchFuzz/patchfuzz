




























function f(v) {
  return [0.0, 0.1, 0.2, v];
};
%PrepareFunctionForOptimization(f);
assertEquals([0.0, 0.1, 0.2, NaN], f(NaN));
assertEquals([0.0, 0.1, 0.2, NaN], f(NaN));
%OptimizeFunctionOnNextCall(f);
assertEquals([0.0, 0.1, 0.2, undefined], f(undefined));
