





function f(a, base) {
  a[base] = 1;
  a[base + 4] = 2;
  a[base] = 3;
};
%PrepareFunctionForOptimization(f);
var a1 = new Array(1024);
var a2 = new Array(128);
f(a1, 1);
f(a2, -2);
%OptimizeFunctionOnNextCall(f);
f(a1, -2);
