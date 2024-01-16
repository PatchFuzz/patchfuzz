























for (let v of WasmExternrefValues)
{
    let g = new WebAssembly.Global({value: "externref"}, v);
    assertEq(g.value, v);
}



for (let v of WasmExternrefValues)
{
    let g = new WebAssembly.Global({value: "externref", mutable: true});
    g.value = v;
    assertEq(g.value, v);
}



for (let v of WasmExternrefValues)
{
    let g = new WebAssembly.Global({value: "externref"}, v);
    let ins = wasmEvalText(
        `(module
           (import "m" "g" (global $glob externref))
           (func (export "f") (result externref)
             (global.get $glob)))`,
        {m:{g}});
    assertEq(ins.exports.f(), v);
}



for (let v of WasmExternrefValues)
{
    let g = new WebAssembly.Global({value: "externref", mutable: true});
    let ins = wasmEvalText(
        `(module
           (import "m" "g" (global $glob (mut externref)))
           (func (export "f") (param $v externref)
             (global.set $glob (local.get $v))))`,
        {m:{g}});
    ins.exports.f(v);
    assertEq(g.value, v);
}

















for (let v of WasmExternrefValues)
{
    let t = new WebAssembly.Table({element: "externref", initial: 10});
    t.set(3, v);
    assertEq(t.get(3), v);
}



for (let v of WasmExternrefValues)
{
    let t = new WebAssembly.Table({element: "externref", initial: 10});
    let ins = wasmEvalText(
        `(module
           (import "m" "t" (table $t 10 externref))
           (func (export "f") (param $v externref)
             (table.set $t (i32.const 3) (local.get $v))))`,
        {m:{t}});
    ins.exports.f(v);
    assertEq(t.get(3), v);
}



for (let v of WasmExternrefValues)
{
    let t = new WebAssembly.Table({element: "externref", initial: 10});
    let ins = wasmEvalText(
        `(module
           (import "m" "t" (table $t 10 externref))
           (func (export "f") (result externref)
             (table.get $t (i32.const 3))))`,
        {m:{t}});
    t.set(3, v);
    assertEq(ins.exports.f(), v);
}




for (let v of WasmExternrefValues)
{
    let returner = function () { return v; };
    let receiver = function (w) { assertEq(w, v); };
    let ins = wasmEvalText(
        `(module
           (import "m" "returner" (func $returner (result externref)))
           (import "m" "receiver" (func $receiver (param externref)))
           (func (export "test_returner") (result externref)
             (call $returner))
           (func (export "test_receiver") (param $v externref)
             (call $receiver (local.get $v))))`,
        {m:{returner, receiver}});
    assertEq(ins.exports.test_returner(), v);
    ins.exports.test_receiver(v);
}
