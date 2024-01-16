





function foo(x) {
  x = x | 2147483648;
  return Number.parseInt(x + 65535, 8);
};
%PrepareFunctionForOptimization(foo);
assertEquals(-72161, foo());
assertEquals(-72161, foo());
%OptimizeFunctionOnNextCall(foo);
assertEquals(-72161, foo());
