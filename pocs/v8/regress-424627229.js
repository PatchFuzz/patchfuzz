const Probe =function() {
    function probe() {
        let handler = {
            get() {
            },
        };
        try {
            newPrototype = new ProxyConstructor( handler);
        } catch (e) {}
    }
    return {
        probe: probe,
    };
}();
Probe.probe();
const v3 = d8.test;
const t354 = v3.FastCAPI;
const v5 = new t354();
function f6(a7) {
    Probe.probe( v5.call_to_number(a7));
}
const v15 = %PrepareFunctionForOptimization(f6);
f6(42);
const v17 = %OptimizeFunctionOnNextCall(f6);
print(()=>f6({
    valueOf: () => {
      %DeoptimizeFunction(f6);
      throw -42;
    }
  }), -42);
