



d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addFunction(undefined, kSig_v_v)
  .addLocals(kWasmI32, 1).addLocals(kWasmF32, 1).addLocals(kWasmF64, 1)
  .addBody([
kExprLocalGet, 1,
kExprLocalGet, 2,
kExprLocalGet, 0,
kExprIf, kWasmI32,
  kExprI32Const, 1,
kExprElse,
  kExprUnreachable,
  kExprEnd,
kExprUnreachable
]);
builder.instantiate();
