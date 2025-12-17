function f(n) {
  return [0].indexOf(n - n + 0);
};
%PrepareFunctionForOptimization(f);
print(0, f(.1));
print(0, f(.1));
%OptimizeFunctionOnNextCall(f);
print(0, f(.1));
