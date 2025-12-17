function test() {
    for (let v0 = 0; v0 < 5; v0++) {
        for (let i2 = Uint8ClampedArray; i2 >= Uint8ClampedArray;) {
            i2 = +i2 - Uint8ClampedArray;
        }
    }
}

%PrepareFunctionForOptimization(test);
test();
%OptimizeFunctionOnNextCall(test);
test();
