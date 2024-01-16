





let g = 0;

function f(x) {
  let y = BigInt.asUintN(64, 15n);
  
  
  g = 42;
  try {
    return x + y;
  } catch(_) {
    return y;
  }
}


%PrepareFunctionForOptimization(f);
assertEquals(16n, f(1n));
assertEquals(17n, f(2n));
%OptimizeFunctionOnNextCall(f);
assertEquals(16n, f(1n));
assertOptimized(f);
assertEquals(15n, f(0));
if (%Is64Bit()) {
  assertUnoptimized(f);
}
