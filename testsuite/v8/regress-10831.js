



d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');






const builder = new WasmModuleBuilder();
builder.addType(makeSig([], [kWasmI32]));

builder.addFunction(undefined, 0 )
  .addBodyWithEnd([


kExprI32Const, 0xfc, 0xb6, 0xed, 0x02,  
kSimdPrefix, kExprI8x16Splat,  
kExprI32Const, 0xfc, 0x00,  
kSimdPrefix, kExprI8x16Splat,  
kSimdPrefix, kExprI64x2Sub, 0x01,  
kExprI32Const, 0x00,  
kSimdPrefix, kExprI8x16Splat,  
kExprI32Const, 0x81, 0x96, 0xf0, 0xe3, 0x07,  
kSimdPrefix, kExprI8x16Splat,  
kSimdPrefix, kExprF64x2Max, 0x01,  
kSimdPrefix, kExprI64x2Sub, 0x01,  
kExprI32Const, 0x00,  
kSimdPrefix, kExprI8x16Splat,  
kExprI32Const, 0x00,  
kExprI32Const, 0x0b,  
kExprI32LtU,  
kSimdPrefix, kExprI8x16ReplaceLane, 0x00,  
kExprI32Const, 0xfc, 0xf8, 0x01,  
kSimdPrefix, kExprI8x16Splat,  
kSimdPrefix, kExprF64x2Max, 0x01,  
kSimdPrefix, kExprI16x8MaxS, 0x01,  
kSimdPrefix, kExprI8x16AllTrue,  
kExprEnd,  
]);
builder.addExport('main', 0);
const instance = builder.instantiate();
print(instance.exports.main());
