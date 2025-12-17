function f() {
  try {
    return BigInt.asUintN(8);
  } catch(_) {
    return 42n;
  }
}

%PrepareFunctionForOptimization(f);
print(42n, f());
print(42n, f());
%OptimizeFunctionOnNextCall(f);
print(42n, f());
