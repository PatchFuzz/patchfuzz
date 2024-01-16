




'use strict'

function f() {
    return arguments;
}

var arr = [];
arr.length=0x8000;
var g = f.bind(null,...arr);

function test() {
    return g();
}

%PrepareFunctionForOptimization(f);
%PrepareFunctionForOptimization(test);
test();
%OptimizeFunctionOnNextCall(test);
assertEquals(test().length, arr.length);
