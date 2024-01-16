





function foo(x) {
  return (x ? true : "7") << 0;
};
%PrepareFunctionForOptimization(foo);
assertEquals(1, foo(1));
assertEquals(1, foo(1));
%OptimizeFunctionOnNextCall(foo);
assertEquals(7, foo(0));
