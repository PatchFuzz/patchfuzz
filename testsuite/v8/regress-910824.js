



d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addGlobal(kWasmI32, 1);
builder.addGlobal(kWasmF32, 1);
builder.addType(makeSig([kWasmI32, kWasmF32, kWasmF32, kWasmF64], [kWasmI32]));
builder.addFunction(undefined, 0 )
  .addLocals(kWasmI32, 504)
  .addBody([
kExprGlobalGet, 0x00,
kExprLocalSet, 0x04,
kExprLocalGet, 0x04,
kExprI32Const, 0x01,
kExprI32Sub,
kExprGlobalGet, 0x00,
kExprI32Const, 0x00,
kExprI32Eqz,
kExprGlobalGet, 0x00,
kExprI32Const, 0x01,
kExprI32Const, 0x01,
kExprI32Sub,
kExprGlobalGet, 0x00,
kExprI32Const, 0x00,
kExprI32Eqz,
kExprGlobalGet, 0x00,
kExprI32Const, 0x00,
kExprI32Const, 0x01,
kExprI32Sub,
kExprGlobalGet, 0x01,
kExprUnreachable,
]);
builder.instantiate();
