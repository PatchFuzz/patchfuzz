





function f() {
  try {
    return BigInt.asUintN(8);
  } catch(_) {
    return 42n;
  }
}

%PrepareFunctionForOptimization(f);
assertEquals(42n, f());
assertEquals(42n, f());
%OptimizeFunctionOnNextCall(f);
assertEquals(42n, f());
