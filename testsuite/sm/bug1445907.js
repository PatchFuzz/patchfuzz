







var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);
g.eval(`var m = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary('(module (func (export "test")))')))`);
var re = /./;
dbg.onEnterFrame = function(frame) { re.exec("x") };
result = g.eval("m.exports.test()");
