


load(libdir + "asserts.js");

var g = newGlobal('');
var dbg = new Debugger();
dbg.addDebuggee(g);
sandbox.eval(`
var wasm = wasmTextToBinary('(module (func (nop)) (export "test" 0))');
var m = new WebAssembly.Instance(new WebAssembly.Module(wasm));`);
dbg.onEnterFrame = function (frame) {
    if (frame.type !== "wasmcall") return;
    return null;
};
g.eval("m.exports.test()");
assertEq(false, true);
