





function foo() {
  return +({} + 1);
};
%PrepareFunctionForOptimization(foo);
assertEquals(NaN, foo());
assertEquals(NaN, foo());
%OptimizeFunctionOnNextCall(foo);
assertEquals(NaN, foo());
