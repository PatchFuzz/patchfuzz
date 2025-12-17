let a = [0, 1, , 2];
function foo(i) {
  return (a[i] + 4294967295) | 0;
}

%PrepareFunctionForOptimization(foo);
foo(1);
foo(1);
%OptimizeFunctionOnNextCall(foo);
foo(1);
print(isOptimized(foo));
print(0, foo(2));
print(isOptimized(foo));
