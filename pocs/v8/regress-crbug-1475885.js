function F0() {
}
function f6(a7) {
    let v8 = 2147483647;
    if (a7) {
        v8 = -NaN;
    }
    let v11 = 1;
    v11--;
    print(isNaN(v8 / v11));
}
f6(F0);
%PrepareFunctionForOptimization(f6);
f6(F0);
%OptimizeFunctionOnNextCall(f6);
f6(F0);
