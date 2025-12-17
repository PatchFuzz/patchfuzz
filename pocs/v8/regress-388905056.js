function f() {}
let array = [];
array.length = 65525;
let bound = f.bind(null, ...array);
function g() { bound(1); }
%PrepareFunctionForOptimization(g);
g();
%OptimizeFunctionOnNextCall(g);
g()
