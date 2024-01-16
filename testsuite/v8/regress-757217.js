



d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

let builder = new WasmModuleBuilder();
builder.addImport('','f', kSig_v_v);
builder.addExport('a', 0);
builder.addExport('b', 0);
var bytes = builder.toBuffer();

var m = new WebAssembly.Module(bytes);
assertTrue(m instanceof WebAssembly.Module);

assertPromiseResult(
  WebAssembly.compile(bytes)
  .then(async_result => assertTrue(async_result instanceof WebAssembly.Module),
        assertUnreachable));
