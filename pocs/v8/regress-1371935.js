function f(a, b, c) {
  
  
  let t = BigInt.asUintN(64, a + b);
  
  
  return t + c;
}

%PrepareFunctionForOptimization(f);
print(12n, f(9n, 2n, 1n));
%OptimizeFunctionOnNextCall(f);
print(12n, f(9n, 2n, 1n));
print(f);
print(2n ** 64n, f(1n, -2n, 1n));
if (%Is64Bit()) {
  print(f);
}
