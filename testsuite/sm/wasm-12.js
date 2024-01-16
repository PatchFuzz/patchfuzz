



var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);
g.eval(`
function initWasm(s) { return new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(s))); }
o1 = initWasm('(module (func) (export "" (func 0)))');
o2 = initWasm('(module (func) (func) (export "" (func 1)))');
`);

function isWasm(script) { return script.format === "wasm"; }

function isValidWasmURL(url) {
   
   
   return /^wasm:(?:[^:]*:)*?[0-9a-f]{16}$/.test(url);
}

var foundScripts = dbg.findScripts().filter(isWasm);
assertEq(foundScripts.length, 2);
assertEq(isValidWasmURL(foundScripts[0].source.url), true);
assertEq(isValidWasmURL(foundScripts[1].source.url), true);
assertEq(foundScripts[0].source.url != foundScripts[1].source.url, true);
