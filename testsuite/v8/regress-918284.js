



d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addFunction(undefined, kSig_i_i)
  .addLocals(kWasmI32, 7)
  .addBody([
    kExprI32Const, 0,
    kExprIf, kWasmI32,   
      kExprI32Const, 0,
    kExprElse,   
      kExprI32Const, 1,
      kExprEnd,   
    kExprLocalTee, 0,
    kExprI32Popcnt
]);
builder.instantiate();
