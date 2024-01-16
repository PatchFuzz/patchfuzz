





function f(a, v) {
  a[a.length] = v;
};
%PrepareFunctionForOptimization(f);
var a = [1.4];
f(a, 1);
f(a, 2);
%OptimizeFunctionOnNextCall(f);
f(a, {});
assertEquals(4, a.length);
