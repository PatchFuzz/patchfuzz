let a = new Int32Array(1000);
function f() {
    return a.length & 0xeeeeee;
}
print(f(), 744);
%PrepareFunctionForOptimization(f);
print(f(), 744);
%OptimizeFunctionOnNextCall(f);
print(f(), 744);
