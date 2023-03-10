





function foo(x) {
  x = +x;
  return (x > 0) ? x : 0 - x;
}

%PrepareFunctionForOptimization(foo);
foo(1);
foo(-1);
foo(0);
%OptimizeFunctionOnNextCall(foo);
print(2147483648, foo(-2147483648));
