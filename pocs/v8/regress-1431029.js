function test() {
    for (let v2 = 0; v2 < 5; v2++) {
        let v4 = BigInt(v2);
        BigInt.asUintN(64, v4++ >> 4294967297n);
    }
}

%PrepareFunctionForOptimization(test);
test();
test();
%OptimizeFunctionOnNextCall(test);
test();
