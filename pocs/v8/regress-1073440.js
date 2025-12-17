function foo(n) {
  try {
    let v = 0n;
    for (let i = 0; i < n; ++i) {
      v = 3n + v;
      v = i;
    }
  } catch (e) {
    return 1;
  }
  return 0;
}

%PrepareFunctionForOptimization(foo);
print(foo(1), 0);
print(foo(1), 0);
%OptimizeFunctionOnNextCall(foo);
print(foo(1), 0);
print(foo);
%PrepareFunctionForOptimization(foo);
print(foo(2), 1);
if (%Is64Bit()) {
  print(foo);
}

%OptimizeFunctionOnNextCall(foo);
print(foo(1), 0);
print(foo);
print(foo(2), 1);
