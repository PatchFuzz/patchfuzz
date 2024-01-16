



var g = newGlobal({newCompartment: true});
g.eval(`o = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary('(module (func) (export "" (func 0)))')));`);

function isWasm(script) { return script.format === "wasm"; }

var dbg = new Debugger(g);
var foundScripts1 = dbg.findScripts().filter(isWasm);
assertEq(foundScripts1.length, 1);
var found = foundScripts1[0];


g.eval(`o2 = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary('(module (func) (export "a" (func 0)))')));`);
var foundScripts2 = dbg.findScripts().filter(isWasm);
assertEq(foundScripts2.length, 2);



assertEq(foundScripts2.indexOf(found) !== -1, true);


assertEq(foundScripts2[0] !== foundScripts2[1], true);


for (var ws of foundScripts2) {
  var scriptsFromSource = dbg.findScripts({ source: ws.source });
  assertEq(scriptsFromSource.length, 1);
  assertEq(scriptsFromSource[0], ws);
}
