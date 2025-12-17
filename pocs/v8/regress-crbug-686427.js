function f(a, base) {
  a[base + 4] = 23;
  return a;
};
%PrepareFunctionForOptimization(f);
var i = 1073741824;
print(23, f({}, 1)[1 + 4]);
print(23, f([], 2)[2 + 4]);
%OptimizeFunctionOnNextCall(f);
print(23, f({}, i)[i + 4]);
