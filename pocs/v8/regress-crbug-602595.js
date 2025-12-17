function f(a) {
  return [a];
};
%PrepareFunctionForOptimization(f);
print([23], f(23));
print([42], f(42));
%OptimizeFunctionOnNextCall(f);
print([65], f(65));
