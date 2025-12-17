"use strict";

var global;

function g() { global = this; }
Object.defineProperty(Number.prototype, "prop", { get: g });
function f(s) { s.prop; }

%PrepareFunctionForOptimization(f);
f(1);
f(1);
%OptimizeFunctionOnNextCall(f);
f(1);
