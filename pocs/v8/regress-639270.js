"use strict";

var g = (async () => { return JSON.stringify() });

%PrepareFunctionForOptimization(g);
g();
g();
%OptimizeFunctionOnNextCall(g);
g();
