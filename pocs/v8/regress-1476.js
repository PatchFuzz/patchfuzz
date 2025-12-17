function foo(i) {
  return i % 2 | 0;
};
%PrepareFunctionForOptimization(foo);
print(-1, foo(-1));
print(-1, foo(-1));
%OptimizeFunctionOnNextCall(foo);
print(-1, foo(-1));
