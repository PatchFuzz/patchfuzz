









function foo(a, b) {
    return a - b;
}

%PrepareFunctionForOptimization(foo);
assertEquals(-1n, foo(1n, 2n));
%OptimizeFunctionOnNextCall(foo);
assertEquals(1n, foo(2n, 1n));
assertOptimized(foo);
assertThrows(() => foo(2n, undefined));
if (%Is64Bit()) {
    assertUnoptimized(foo);
}
%PrepareFunctionForOptimization(foo);
%OptimizeFunctionOnNextCall(foo);
assertEquals(-1n, foo(1n, 2n));
assertOptimized(foo);
assertThrows(() => foo(undefined, 2n));
assertOptimized(foo);
