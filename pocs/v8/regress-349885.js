function foo(a) {
  a[292755462] = new Object();
};
%PrepareFunctionForOptimization(foo);
foo(new Array(5));
foo(new Array(5));
%OptimizeFunctionOnNextCall(foo);
foo(new Array(10));
