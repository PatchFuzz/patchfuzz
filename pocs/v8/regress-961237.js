const a = 1.1;
const b = null;

function f(x) { return -0 == (x ? a : b); }
%PrepareFunctionForOptimization(f);
print(false, f(true));
print(false, f(true));
%OptimizeFunctionOnNextCall(f);
print(false, f(false));
