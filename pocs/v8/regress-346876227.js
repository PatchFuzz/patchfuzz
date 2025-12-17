function g_raw() {
    return arguments;
}

arr = [];
arr.length=65521;
var g = g_raw.bind(null,...arr);

function f() {
    return g();
}

%PrepareFunctionForOptimization(f);
f();
%OptimizeFunctionOnNextCall(f);
f();
