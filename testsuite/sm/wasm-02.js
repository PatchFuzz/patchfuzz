



var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);

var gotScript;
dbg.onNewScript = (script) => {
  gotScript = script;
}

g.eval(`o = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary('(module (func) (export "" (func 0)))')));`);
assertEq(gotScript.format, "wasm");

var gotScript2 = gotScript;
g.eval(`o = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary('(module (func) (export "a" (func 0)))')));`);
assertEq(gotScript.format, "wasm");


assertEq(gotScript !== gotScript2, true);
