function f(v) {
  return [0.0, 0.1, 0.2, v];
};
%PrepareFunctionForOptimization(f);
print([0.0, 0.1, 0.2, NaN], f(NaN));
print([0.0, 0.1, 0.2, NaN], f(NaN));
%OptimizeFunctionOnNextCall(f);
print([0.0, 0.1, 0.2, undefined], f(undefined));
