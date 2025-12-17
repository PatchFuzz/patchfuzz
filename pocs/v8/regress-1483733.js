const v2 = new Uint8Array(2);
function test() {
    return (v2[0] | 0) >=v2[1] % -65536;
}
%PrepareFunctionForOptimization(test);
test();
test();
%OptimizeFunctionOnNextCall(test);
test();
