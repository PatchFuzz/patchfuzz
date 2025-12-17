function f() {
  return 1 >> Boolean.constructor + 1;
};
%PrepareFunctionForOptimization(f);
print(1, f());
%OptimizeFunctionOnNextCall(f);
print(1, f());
