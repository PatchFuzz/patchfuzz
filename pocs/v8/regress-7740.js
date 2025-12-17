var x = 0;
x = 42;

function foo(a, b) {
  let y = a < a;
  if (b) x = y;
};
%PrepareFunctionForOptimization(foo);
foo(1, false);
foo(1, false);
%OptimizeFunctionOnNextCall(foo);
foo(1, true);
