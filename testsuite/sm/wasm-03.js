



load(libdir + "asserts.js");

var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);

var s;
dbg.onNewScript = (script) => {
  s = script;
}

g.eval(`o = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary('(module (func) (export "" (func 0)))')));`);
assertEq(s.format, "wasm");

var source = s.source;

assertEq(s.source, source);
assertEq(source.introductionType, "wasm");
assertEq(source.introductionScript, s);

assertEq(!source.sourceMapURL, true);
assertThrowsInstanceOf(() => source.sourceMapURL = 'foo', Error);

assertEq(!!source.text, true);



source.url;
source.displayURL;
source.introductionOffset;
source.elementAttributeName;
