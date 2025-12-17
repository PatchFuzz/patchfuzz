var a = 1;

function foo(x) {
  a = Math.fround(x + 1);
};
%PrepareFunctionForOptimization(foo);
foo(1);
foo(1);
%OptimizeFunctionOnNextCall(foo);
foo(1.3);
