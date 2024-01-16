




























function foo(i) {
  return i % 2 | 0;
};
%PrepareFunctionForOptimization(foo);
assertEquals(-1, foo(-1));
assertEquals(-1, foo(-1));
%OptimizeFunctionOnNextCall(foo);
assertEquals(-1, foo(-1));
