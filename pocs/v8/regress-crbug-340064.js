function f(v) {
  return v.length;
};
%PrepareFunctionForOptimization(f);
print(4, f("test"));
print(4, f("test"));
print(undefined, f(true));
%OptimizeFunctionOnNextCall(f);
print(undefined, f(true));
