const Probe =function() {
    const setPrototypeOf = Object.setPrototypeOf;
    function probe() {
            setPrototypeOf();
    }
    function probeWithErrorHandling() {
        try {
            probe();
        } catch(e) {
        }
    }
    return {
        probe: probeWithErrorHandling,
    };
}();
function f0() {
    for (let v1 = 0; v1 < 5; v1++) {
        v1++;
        const v3 = -v1;
        const v4 = v3 << v3;
        let v5 = v4 + v4;
        const v6 = v5--;
        Probe.probe();
        Probe.probe( v6 | v6);
    }
}
f0();
const v9 = %PrepareFunctionForOptimization(f0);
const v10 = %OptimizeFunctionOnNextCall(f0);
f0();
