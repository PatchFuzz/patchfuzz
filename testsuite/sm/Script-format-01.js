




var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);

var gotScript;
dbg.onNewScript = (script) => {
  gotScript = script;
};

g.eval(`(() => {})()`);
assertEq(gotScript.format, "js");

g.eval(`o = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary('(module (func) (export "" (func 0)))')));`);
assertEq(gotScript.format, "wasm");
