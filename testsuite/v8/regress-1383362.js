





function f(x) {
  for (let i = 0; i < 1; ++i) {
    x ^= x;
  }
  return x;
}

%PrepareFunctionForOptimization(f);
f(1n);
%OptimizeFunctionOnNextCall(f);
f(1n);
