const v3 = new Uint8Array();
function f4() {
    for (let v5 = 0; v5 < 5; v5++) {
        v5++;
        const v7 = -v5;
        const v8 = v7 << v7;
        let v9 = v8 + v8;
        v9--;
        v9--;
        v3[undefined] &= v9;
    }
}

%PrepareFunctionForOptimization(f4);
f4();
%OptimizeFunctionOnNextCall(f4);
f4();
