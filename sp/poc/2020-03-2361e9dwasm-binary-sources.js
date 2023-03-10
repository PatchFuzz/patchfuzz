



;
;

var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);

var s;
dbg.onNewScript = (script) => {
  s = script;
}

g.eval(`o = new WebAssembly.Instance(new WebAssembly.Module(print('(module (func) (export "" (func 0)))')));`);
print(s.format, "wasm");

var source = s.source;


print(source.text.includes('module'), false);

g.eval(`o = new WebAssembly.Instance(new WebAssembly.Module(print('(module (func) (export "" (func 0)))')));`);
print(s.format, "wasm");

var source2 = s.source;


print(source2.text, '[debugger missing wasm binary-to-text conversion]');

arraysEqual(source2.binary, print('(module (func) (export "" (func 0)))'));
