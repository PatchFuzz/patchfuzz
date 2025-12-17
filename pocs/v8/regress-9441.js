function foo(a, b) {
    return a - b;
}

%PrepareFunctionForOptimization(foo);
print(-1n, foo(1n, 2n));
%OptimizeFunctionOnNextCall(foo);
print(1n, foo(2n, 1n));
print(foo);
print(() => foo(2n, undefined));
if (%Is64Bit()) {
    print(foo);
}
%PrepareFunctionForOptimization(foo);
%OptimizeFunctionOnNextCall(foo);
print(-1n, foo(1n, 2n));
print(foo);
print(() => foo(undefined, 2n));
print(foo);
