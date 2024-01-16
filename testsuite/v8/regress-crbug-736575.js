





function f() {
  return [...[,  2.3]];
};
%PrepareFunctionForOptimization(f);
assertEquals(undefined, f()[0]);
assertEquals(undefined, f()[0]);
%OptimizeFunctionOnNextCall(f);
assertEquals(undefined, f()[0]);
