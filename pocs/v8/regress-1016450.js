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
print(16n, f(1n));
print(17n, f(2n));
%OptimizeFunctionOnNextCall(f);
print(16n, f(1n));
print(f);
print(15n, f(0));
if (%Is64Bit()) {
  print(f);
}
