





function f(a, b, c) {
  
  
  let t = BigInt.asUintN(64, a + b);
  
  
  return t + c;
}

%PrepareFunctionForOptimization(f);
assertEquals(12n, f(9n, 2n, 1n));
%OptimizeFunctionOnNextCall(f);
assertEquals(12n, f(9n, 2n, 1n));
assertOptimized(f);
assertEquals(2n ** 64n, f(1n, -2n, 1n));
if (%Is64Bit()) {
  assertUnoptimized(f);
}
