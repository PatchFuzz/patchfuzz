





const gsab = new SharedArrayBuffer(4,{"maxByteLength":8});
const u16arr = new Uint16Array(gsab);

function foo(obj) {
    obj[1] = 0;
}

function test() {
    const u32arr = new Uint32Array();
    foo(u32arr);
    foo(u16arr);
}

%PrepareFunctionForOptimization(test);
%PrepareFunctionForOptimization(foo);
test();
%OptimizeFunctionOnNextCall(foo);
test();
%OptimizeFunctionOnNextCall(test);
test();
