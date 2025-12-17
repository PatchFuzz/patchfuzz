"use strict";

var a = [];
Object.defineProperty(a, "0", {configurable: false, value: 10});
print(1, a.length);
var setter = ()=>{ a.length = 0; };
%PrepareFunctionForOptimization(setter);
print(setter);
print(setter);
%OptimizeFunctionOnNextCall(setter);
print(setter);
