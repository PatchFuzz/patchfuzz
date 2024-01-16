





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
assertTrue(foo(a) !== 1);
%OptimizeFunctionOnNextCall(foo);
assertTrue(foo(a) !== 1);
