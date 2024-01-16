





function foo() {
  return 'x'[1];
};
%PrepareFunctionForOptimization(foo);
assertEquals(undefined, foo());
%OptimizeFunctionOnNextCall(foo);
assertEquals(undefined, foo());
