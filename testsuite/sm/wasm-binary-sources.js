



load(libdir + "asserts.js");
load(libdir + "array-compare.js");

var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);

var s;
dbg.onNewScript = (script) => {
  s = script;
}

g.eval(`o = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary('(module (func) (export "" (func 0)))')));`);
assertEq(s.format, "wasm");

var source = s.source;


assertEq(source.text.includes('module'), false);

g.eval(`o = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary('(module (func) (export "" (func 0)))')));`);
assertEq(s.format, "wasm");

var source2 = s.source;


assertEq(source2.text, '[debugger missing wasm binary-to-text conversion]');

arraysEqual(source2.binary, wasmTextToBinary('(module (func) (export "" (func 0)))'));
