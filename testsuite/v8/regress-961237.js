





const a = 1.1;
const b = null;

function f(x) { return -0 == (x ? a : b); }
%PrepareFunctionForOptimization(f);
assertEquals(false, f(true));
assertEquals(false, f(true));
%OptimizeFunctionOnNextCall(f);
assertEquals(false, f(false));
