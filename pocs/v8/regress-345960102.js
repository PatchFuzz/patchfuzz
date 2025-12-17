y = BigInt("0xffffffffffffffff");

function test() {
    let x = BigInt.asIntN(64, -1n);
    let result = x >> (y);
    return BigInt.asIntN(64, result);
}

%PrepareFunctionForOptimization(test);
print(-1n, test());
print(-1n, test());
%OptimizeFunctionOnNextCall(test)
print(-1n, test());
