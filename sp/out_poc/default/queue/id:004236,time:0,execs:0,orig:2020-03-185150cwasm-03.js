



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

print(s.source, source);
print(source.introductionType, "wasm");
print(source.introductionScript, s);

print(!source.sourceMapURL, true);
assertThrowsInstanceOf(() => source.sourceMapURL = 'foo', Error);

print(!!source.text, true);



source.url;
source.displayURL;
source.introductionOffset;
source.elementAttributeName;
