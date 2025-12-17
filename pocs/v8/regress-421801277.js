function f0(a1) {
    function f2() {
        return Math.max((a1 | 0) * (2 ** 52), 4294967297);
    }
    let v12 = f2();
    v12-- + v12;
    return f0;
}
const v15 = %PrepareFunctionForOptimization(f0);
f0();
const v17 = %OptimizeFunctionOnNextCall(f0);
f0(1);
function f18() {
    f0(1);
    return v15;
}
const v21 = %PrepareFunctionForOptimization(f18);
f18();
const v23 = %OptimizeFunctionOnNextCall(f18);
f18();
