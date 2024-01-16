



d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addFunction(undefined, kSig_i_i).addBody([
  kExprI64Const, 0x01,
  kExprI32ConvertI64,
  kExprI32Const, 0x80, 0x80, 0x80, 0x80, 0x78,
  kExprI32Sub,
]);
builder.instantiate();
