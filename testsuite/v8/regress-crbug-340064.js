




























function f(v) {
  return v.length;
};
%PrepareFunctionForOptimization(f);
assertEquals(4, f("test"));
assertEquals(4, f("test"));
assertEquals(undefined, f(true));
%OptimizeFunctionOnNextCall(f);
assertEquals(undefined, f(true));
