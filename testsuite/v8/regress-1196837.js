





d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addMemory(16, 32, false);
builder.addType(makeSig([kWasmI32, kWasmI32, kWasmI32], [kWasmI32]));
builder.addFunction(undefined, 0 )
  .addBodyWithEnd([


kExprLocalGet, 0x01,
kExprLocalGet, 0x01,
kExprLocalGet, 0x01,
kExprLocalGet, 0x01,
kAtomicPrefix, kExprI32AtomicCompareExchange16U, 0x00, 0x7a,
kExprLocalGet, 0x01,
kExprLocalGet, 0x01,
kExprLocalGet, 0x01,
kExprLocalGet, 0x00,
kExprMemoryGrow, 0x00,
kAtomicPrefix, kExprI32AtomicCompareExchange16U, 0x00, 0x7a,
kExprLocalGet, 0x01,
kExprLocalGet, 0x00,
kAtomicPrefix, kExprI32AtomicCompareExchange16U, 0x00, 0x7a,
kExprLocalGet, 0x01,
kExprLocalGet, 0x00,
kAtomicPrefix, kExprI32AtomicCompareExchange16U, 0x00, 0x7a,
kExprLocalGet, 0x01,
kExprReturnCall, 0x00,
kExprEnd,
]);
builder.addExport('main', 0);
const instance = builder.instantiate();
assertTraps(kTrapUnalignedAccess, () => instance.exports.main(0, 0, 0));
