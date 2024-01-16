





function foo(a) {
  for (const x of a) {
    a[100] = 1;
  }
}

%PrepareFunctionForOptimization(foo);
foo([1]);
foo([1]);
%OptimizeFunctionOnNextCall(foo);
foo([1]);
%PrepareFunctionForOptimization(foo);
%OptimizeFunctionOnNextCall(foo);
foo([1]);
assertOptimized(foo);
