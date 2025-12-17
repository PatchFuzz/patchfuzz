function f1(a2) {
    let v4 = -0;
    if (a2) {
        v4 = -3;
    }
    return (v4 ** 69) != -2147483648;
}
const v11 = %PrepareFunctionForOptimization(f1);
f1();
const v13 = %OptimizeFunctionOnNextCall(f1);
f1(f1);
