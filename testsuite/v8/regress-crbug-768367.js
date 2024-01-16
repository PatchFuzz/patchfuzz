





const o = {};

function foo() {
  return o[4294967295];
};
%PrepareFunctionForOptimization(foo);
assertEquals(undefined, foo());
assertEquals(undefined, foo());
%OptimizeFunctionOnNextCall(foo);
assertEquals(undefined, foo());
