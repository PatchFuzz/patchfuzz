function foo(a) {
  const x = 5 * a;
  const y = 6 * a;
  const z = 7 * a;
  const p = 268435440 * a;
  const q = + 4 + x + y + z + 10;
  p + q;
}

%PrepareFunctionForOptimization(foo);
foo(128);
%OptimizeFunctionOnNextCall(foo);
foo(128);
