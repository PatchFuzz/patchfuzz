function foo(a) {
  for (var d in a) {
    delete a[1];
  }
}

%PrepareFunctionForOptimization(foo);
foo([1,2,3]);
foo([2,3,4]);
%OptimizeFunctionOnNextCall(foo);
foo([1,2,3]);
print(foo);
