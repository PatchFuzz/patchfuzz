





function f(y) {
  const x = y % y;
  return 1 / x;
}
%PrepareFunctionForOptimization(f);
print(f(2), Infinity);
%OptimizeMaglevOnNextCall(f);
print(f(-2), -Infinity);
