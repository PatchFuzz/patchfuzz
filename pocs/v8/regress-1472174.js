function f0() {
    try {
        undefined.x;
    } catch(e4) {
        gc();
        const o7 = {
            "preventExtensions": e4,
        };
    }
}

%PrepareFunctionForOptimization(f0);
f0();
%OptimizeFunctionOnNextCall(f0);
f0();
