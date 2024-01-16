





function f(a) {
  return (a >>> 1073741824) + -3;
};
%PrepareFunctionForOptimization(f);
assertEquals(-3, f(0));
assertEquals(-2, f(1));
%OptimizeFunctionOnNextCall(f);
assertEquals(4294967291, f(-2));
