





var g = function*() {};
;
%PrepareFunctionForOptimization(g);
var f = g();
%OptimizeFunctionOnNextCall(g);
f.next();
