function foo(a, i) {
  a[i].x;
};
%PrepareFunctionForOptimization(foo);
var a = [, 0.1];
foo(a, 1);
foo(a, 1);
%OptimizeFunctionOnNextCall(foo);
print(() => foo(a, 0), TypeError);
