





function f(a, base) {
  a[base + 4] = 23;
  return a;
};
%PrepareFunctionForOptimization(f);
var i = 1073741824;
assertEquals(23, f({}, 1)[1 + 4]);
assertEquals(23, f([], 2)[2 + 4]);
%OptimizeFunctionOnNextCall(f);
assertEquals(23, f({}, i)[i + 4]);
