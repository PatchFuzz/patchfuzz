function f(a) {
  return (a >>> 1073741824) + -3;
};
%PrepareFunctionForOptimization(f);
print(-3, f(0));
print(-2, f(1));
%OptimizeFunctionOnNextCall(f);
print(4294967291, f(-2));
