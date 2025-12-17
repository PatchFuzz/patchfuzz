function f() {
  return [...[,  2.3]];
};
%PrepareFunctionForOptimization(f);
print(undefined, f()[0]);
print(undefined, f()[0]);
%OptimizeFunctionOnNextCall(f);
print(undefined, f()[0]);
