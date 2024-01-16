





function foo(unused1, unused2, bigint) {
    const temp = -bigint;
}

function bar() {
    const arr = Array();
    const obj = Object();
    arr.reduce(foo, 0)
}

%PrepareFunctionForOptimization(foo);
foo(0, 0, 2316465375n);
%OptimizeFunctionOnNextCall(foo);
foo(0, 0, 2316465375n);

%PrepareFunctionForOptimization(bar);
bar();
%OptimizeFunctionOnNextCall(bar);
bar();
