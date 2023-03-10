





let builder = new WasmModuleBuilder();
builder.addImport('','f', kSig_v_v);
builder.addExport('a', 0);
builder.addExport('b', 0);
var bytes = builder.toBuffer();

var m = new WebAssembly.Module(bytes);
print(m instanceof WebAssembly.Module);

print(
  WebAssembly.compile(bytes)
  .then(async_result => print(async_result instanceof WebAssembly.Module),
        print));
