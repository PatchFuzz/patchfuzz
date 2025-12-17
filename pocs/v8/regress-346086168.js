y = -BigInt("9223372036854775808")
function b() {
    let x = BigInt.asUintN(64, -1n);
    return BigInt.asIntN(64, x << y);
}

%PrepareFunctionForOptimization(b);
print(0n, b());
%OptimizeFunctionOnNextCall(b);
print(0n, b());
