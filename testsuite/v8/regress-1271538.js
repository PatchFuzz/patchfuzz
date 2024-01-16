





d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addMemory(16, 32, false, true);
builder.addFunction('main', makeSig([], [kWasmS128]))
  .addBody([
kExprI32Const, 0,  
kSimdPrefix, kExprI8x16Splat,  
kExprI32Const, 2,  
kSimdPrefix, kExprI8x16Splat,  
kExprI32Const, 3,  
kSimdPrefix, kExprI16x8ShrS, 0x01,  
kExprI32Const, 0xc4, 0x88, 0x91, 0xa2, 0x04,  
kSimdPrefix, kExprI8x16Splat,  
kSimdPrefix, kExprI16x8ExtAddPairwiseI8x16S,  
kSimdPrefix, kExprI16x8AddSatU, 0x01,  
kExprI32Const, 0xac, 0x92, 0x01,  
kSimdPrefix, kExprI8x16Splat,  
kExprF32Const, 0x2b, 0x2b, 0x2b, 0x49,  
kSimdPrefix, kExprF32x4ReplaceLane, 0x00,  
kSimdPrefix, kExprI16x8ExtAddPairwiseI8x16S,  
kSimdPrefix, kExprI16x8RoundingAverageU, 0x01,  
kExprI32Const, 0,  
kSimdPrefix, kExprI8x16Splat,  
kSimdPrefix, kExprI64x2UConvertI32x4High, 0x01,  
kSimdPrefix, kExprI64x2SConvertI32x4High, 0x01,  
kExprI32Const, 0,  
kSimdPrefix, kExprI8x16Splat,  
kExprF32Const, 0, 0, 0, 0,  
kSimdPrefix, kExprF32x4ReplaceLane, 0x00,  
kExprI32Const, 0,  
kSimdPrefix, kExprI8x16Splat,  
kSimdPrefix, kExprI16x8ExtMulLowI8x16U, 0x01,  
kSimdPrefix, kExprI16x8LeU,  
kSimdPrefix, kExprI8x16GtS,  
kSimdPrefix, kExprI32x4Ne,  
]);
builder.toModule();
