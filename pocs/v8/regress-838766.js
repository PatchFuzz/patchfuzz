function foo(x) {
  x = x | 2147483648;
  return Number.parseInt(x + 65535, 8);
};
%PrepareFunctionForOptimization(foo);
print(-72161, foo());
print(-72161, foo());
%OptimizeFunctionOnNextCall(foo);
print(-72161, foo());
