





function foo(a, b, c) {
  let x = BigInt.asUintN(0, a + b);
  return BigInt.asUintN(64, x + c);
}

%PrepareFunctionForOptimization(foo);
assertEquals(1n, foo(9n, 2n, 1n));
%OptimizeFunctionOnNextCall(foo);
assertEquals(1n, foo(9n, 2n, 1n));
