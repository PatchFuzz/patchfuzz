function v0(v1) {
    v1.apply();
}

function v2() {
    function v3() {
        }
    %PrepareFunctionForOptimization(v0);
    v0(v3);
    %OptimizeFunctionOnNextCall(v0);
    v0(v3);
}

v2();
gc();
print(function () { v0(2); }, TypeError);
