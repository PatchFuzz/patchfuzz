function f5() {
    for (let [v11] of [[22632n]]) {
        const v12 = v11 * v11;
        const v14 = v11 && v12;
        v14 + v14;
    }
}
%PrepareFunctionForOptimization(f5);
f5();
%OptimizeFunctionOnNextCall(f5);
f5();
