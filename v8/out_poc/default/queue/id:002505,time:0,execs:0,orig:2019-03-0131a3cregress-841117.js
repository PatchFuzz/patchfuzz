





var v = 1e9;
function f() { return Math.floor(v / 10); }
%PrepareFunctionForOptimization(f);
print(1e8, f());
%OptimizeFunctionOnNextCall(f);
print(1e8, f());
