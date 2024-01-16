





function n(x, y) {
  y = y - (0x80000000 | 0) | 0;
  return x / y | 0;
};
%PrepareFunctionForOptimization(n);
;
var x = -0x80000000;
var y = 0x7fffffff;
n(x, y);
n(x, y);
%OptimizeFunctionOnNextCall(n);
assertEquals(x, n(x, y));
