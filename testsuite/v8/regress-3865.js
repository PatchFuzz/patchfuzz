





function bar() {
  var radix = 10;
  return 21 / radix | 0;
};
%PrepareFunctionForOptimization(bar);
assertEquals(2, bar());
assertEquals(2, bar());
%OptimizeFunctionOnNextCall(bar);
assertEquals(2, bar());
