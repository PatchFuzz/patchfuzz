





"use strict";

var a = [];
Object.defineProperty(a, "0", {configurable: false, value: 10});
assertEquals(1, a.length);
var setter = ()=>{ a.length = 0; };
%PrepareFunctionForOptimization(setter);
assertThrows(setter);
assertThrows(setter);
%OptimizeFunctionOnNextCall(setter);
assertThrows(setter);
