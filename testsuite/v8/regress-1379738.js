





let a = new Int32Array(1000);
function f() {
    return a.length & 0xeeeeee;
}
assertEquals(f(), 744);
%PrepareFunctionForOptimization(f);
assertEquals(f(), 744);
%OptimizeFunctionOnNextCall(f);
assertEquals(f(), 744);
