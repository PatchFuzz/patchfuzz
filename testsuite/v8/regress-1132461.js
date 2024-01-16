









d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addMemory(16, 32, false, true);
builder.addFunction(undefined, makeSig([], [kWasmI32]))
  .addBodyWithEnd([
kExprI32Const, 0x00,
kExprI32Const, 0x00,
kSimdPrefix, kExprS128Load32Splat, 0x00, 0xb6, 0xec, 0xd8, 0xb1, 0x03,
kSimdPrefix, kExprI32x4ExtractLane, 0x00,
kExprDrop,
kExprEnd,
]);

builder.addExport('main', 0);
const instance = builder.instantiate();
assertThrows(() => instance.exports.main());
