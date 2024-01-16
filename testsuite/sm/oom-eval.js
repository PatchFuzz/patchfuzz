

function foo() {
  var g = newGlobal({sameZoneAs: this});
  g.eval(`o = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary('(module (func) (export "" (func 0)))')));`);
}
oomTest(foo);
