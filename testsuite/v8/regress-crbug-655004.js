





function foo(a) {
  a.x = 0;
  if (a.x === 0) a[1] = 0.1;
  a.x = {};
};
%PrepareFunctionForOptimization(foo);
foo(new Array(1));
foo(new Array(1));
%OptimizeFunctionOnNextCall(foo);
foo(new Array(1));
