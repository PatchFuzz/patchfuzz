





function foo() {
  new Array().pop();
};
%PrepareFunctionForOptimization(foo);
assertEquals(undefined, foo());
assertEquals(undefined, foo());
%OptimizeFunctionOnNextCall(foo);
assertEquals(undefined, foo());
