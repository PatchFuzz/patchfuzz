





var v = [];

function foo() {
  v[0] = 5;
  v[-0] = 27;
  return v[0];
};
%PrepareFunctionForOptimization(foo);
assertEquals(27, foo());
%OptimizeFunctionOnNextCall(foo);
assertEquals(27, foo());
