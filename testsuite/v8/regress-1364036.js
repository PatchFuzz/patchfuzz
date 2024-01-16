





d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addType(kSig_i_i);
builder.addFunction("main", kSig_i_i)
  .addBody([kExprI32Const, 0x00, kExprRefNull, 0x01, kExprCallRef, 0x01])
  .exportFunc();

let instance = builder.instantiate();

assertTraps(WebAssembly.RuntimeError, () => instance.exports.main());
