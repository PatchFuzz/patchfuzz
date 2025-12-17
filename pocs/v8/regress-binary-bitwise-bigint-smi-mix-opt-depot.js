function foo(n) {
  let v = 0;
  for (let i = 0n; i < n; ++i) {
    v = v | 1;
    v = i;
  }

  v = 0;
  for (let i = 0n; i < n; ++i) {
    v = v ^ 1;
    v = i;
  }

  v = 0;
  for (let i = 0n; i < n; ++i) {
    v = v & 1;
    v = i;
  }

  v = 0;
  for (let i = 0n; i < n; ++i) {
    v = v << 1;
    v = i;
  }

  v = 0;
  for (let i = 0n; i < n; ++i) {
    v = v >> 1;
    v = i;
  }

  v = 0;
  for (let i = 0n; i < n; ++i) {
    v = v >>> 1;
    v = i;
  }
}

%PrepareFunctionForOptimization(foo);
print(() => foo(1n));
%OptimizeFunctionOnNextCall(foo);
print(() => foo(1n));
print(foo);
%PrepareFunctionForOptimization(foo);
print(() => foo(2n), TypeError);
%OptimizeFunctionOnNextCall(foo);
print(() => foo(1n));
print(foo);
print(() => foo(2n), TypeError);
print(foo);
