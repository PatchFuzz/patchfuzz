





function foo(a, b) {
  return a % b;
}
%PrepareFunctionForOptimization(foo);
foo(2, 1);
foo(2, 1);
%OptimizeFunctionOnNextCall(foo);
print(-0, foo(-2, 1));
