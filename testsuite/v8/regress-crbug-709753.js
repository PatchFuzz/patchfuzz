





function foo(a, i) {
  a[i].x;
};
%PrepareFunctionForOptimization(foo);
var a = [, 0.1];
foo(a, 1);
foo(a, 1);
%OptimizeFunctionOnNextCall(foo);
assertThrows(() => foo(a, 0), TypeError);
