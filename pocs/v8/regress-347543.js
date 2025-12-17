function f(a) {
  a[5000000] = 256;
  print(256, a[5000000]);
};
%PrepareFunctionForOptimization(f);
var v1 = new Array(5000001);
var v2 = new Array(10);
f(v1);
f(v2);
f(v2);
%OptimizeFunctionOnNextCall(f);
f(v2);
f(v1);
