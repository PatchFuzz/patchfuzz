





async function f(a, b) {
  let x = 0xfffffffff;
  if (b == 5) {
    x = 0xffffffff1;
  }
  let y = Math.max(0xffffffff2, x);
  return BigInt.asUintN(1, y);
};

%PrepareFunctionForOptimization(f);
assertThrowsAsync(f(1, 2), TypeError);
%OptimizeFunctionOnNextCall(f);
assertThrowsAsync(f(1, 2), TypeError);
if (%Is64Bit()) assertUnoptimized(f);
%PrepareFunctionForOptimization(f);
assertThrowsAsync(f(1, 2), TypeError);
%OptimizeFunctionOnNextCall(f);
assertThrowsAsync(f(1, 2), TypeError);
assertOptimized(f);
