"use strict";
eval();
var f = ({x}) => { };
%PrepareFunctionForOptimization(f);
%OptimizeFunctionOnNextCall(f);
print(f);
