





function f(n) {
  return [0].indexOf(n - n + 0);
};
%PrepareFunctionForOptimization(f);
assertEquals(0, f(.1));
assertEquals(0, f(.1));
%OptimizeFunctionOnNextCall(f);
assertEquals(0, f(.1));
