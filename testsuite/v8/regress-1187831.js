





d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addMemory(16, 32, false, true);
builder.addType(makeSig([kWasmI32, kWasmI32, kWasmI32], [kWasmI32]));
builder.addType(makeSig([], []));
builder.setTableBounds(1, 1);
builder.addActiveElementSegment(0, wasmI32Const(0), [0]);

builder.addFunction(undefined, 0 )
  .addBodyWithEnd([


kExprI32Const, 0x03,  
kSimdPrefix, kExprI8x16Splat,  
kExprI32Const, 0x00,  
kSimdPrefix, kExprI8x16ReplaceLane, 0x00,  
kSimdPrefix, kExprI32x4ExtAddPairwiseI16x8U,  
kSimdPrefix, kExprI8x16ExtractLaneU, 0x00,  
kExprEnd,  
]);
builder.addExport('main', 0);
const instance = builder.instantiate();
assertEquals(3, instance.exports.main(1, 2, 3));
