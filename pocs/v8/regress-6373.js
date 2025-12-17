var A = {};

A[Symbol.hasInstance] = function(x) {
  %DeoptimizeFunction(foo);
  return 1;
};

var a = {};

function foo(o) {
  return o instanceof A;
};
%PrepareFunctionForOptimization(foo);
foo(a);
foo(a);
print(foo(a) !== 1);
%OptimizeFunctionOnNextCall(foo);
print(foo(a) !== 1);
