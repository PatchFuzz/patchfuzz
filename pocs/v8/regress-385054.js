function f(x) {
  var a = [1, 2];
  a[x];
  return a[0 - x];
};
%PrepareFunctionForOptimization(f);
f(0);
f(0);
%OptimizeFunctionOnNextCall(f);
print(undefined, f(1));
