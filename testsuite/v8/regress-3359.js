





function f() {
  return 1 >> Boolean.constructor + 1;
};
%PrepareFunctionForOptimization(f);
assertEquals(1, f());
%OptimizeFunctionOnNextCall(f);
assertEquals(1, f());
