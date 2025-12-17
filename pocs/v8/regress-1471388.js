function f2(a3, a4) {
    for (let v5 = 0; v5 < 5; v5++) {
        let v6 = v5 ^ -1000000.0;
        v6--;
        const v8 = new Uint16Array();
        v8[3] <<= v6;
    }
    return a4;
}

%PrepareFunctionForOptimization(f2);
f2();
f2();
%OptimizeFunctionOnNextCall(f2);
f2();
