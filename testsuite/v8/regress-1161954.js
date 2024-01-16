










d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();

builder.addFunction(undefined, kSig_i_v)
  .addBodyWithEnd([


kExprI32Const, 0x37,  
kSimdPrefix, kExprI8x16Splat,  
kExprI32Const, 0xb9, 0xf2, 0xd8, 0x01,  
kSimdPrefix, kExprI8x16Splat,  
kSimdPrefix, kExprS128AndNot,  
kExprI32Const, 0xb2, 0xf2, 0x00,  
kSimdPrefix, kExprI8x16Splat,  
kExprI32Const, 0x00,  
kSimdPrefix, kExprI8x16Splat,  
kExprI32Const, 0xf2, 0x82, 0x02,  
kSimdPrefix, kExprI8x16Splat,  
kSimdPrefix, kExprF64x2Max, 0x01,  
kSimdPrefix, kExprI16x8Add, 0x01,  
kSimdPrefix, kExprS128Or,  
kSimdPrefix, kExprI8x16Neg,  
kExprI32Const, 0x8e, 0x1c,  
kSimdPrefix, kExprI8x16Splat,  
kExprI32Const, 0x00,  
kSimdPrefix, kExprI8x16Splat,  
kExprI32Const, 0x9d, 0x26,  
kSimdPrefix, kExprI8x16Splat,  
kExprI32Const, 0xf0, 0xe0, 0x01,  
kSimdPrefix, kExprI8x16Splat,  
kSimdPrefix, kExprI8x16LeS,  
kSimdPrefix, kExprI8x16LeS,  
kExprI32Const, 0xff, 0xfb, 0x03,  
kSimdPrefix, kExprI8x16Splat,  
kExprI32Const, 0x93, 0x26,  
kSimdPrefix, kExprI8x16Splat,  
kExprI32Const, 0x9d, 0x26,  
kSimdPrefix, kExprI8x16Splat,  
kSimdPrefix, kExprI8x16GtU,  
kExprI32Const, 0xf0, 0x00,  
kSimdPrefix, kExprI8x16Splat,  
kSimdPrefix, kExprI16x8Mul, 0x01,  
kSimdPrefix, kExprF32x4Ge,  
kSimdPrefix, kExprI8x16LeS,  
kSimdPrefix, kExprI8x16LeS,  
kExprI32Const, 0x00,  
kSimdPrefix, kExprI8x16Splat,  
kExprI32Const, 0xc1, 0x8e, 0x35,  
kSimdPrefix, kExprI8x16Splat,  
kExprI32Const, 0x0d,  
kSimdPrefix, kExprI8x16Splat,  
kSimdPrefix, kExprI32x4Ne,  
kSimdPrefix, kExprF32x4Ge,  
kSimdPrefix, kExprI8x16LeS,  
kExprI32Const, 0xc1, 0x8e, 0x35,  
kSimdPrefix, kExprI8x16Splat,  
kExprI32Const, 0x0d,  
kSimdPrefix, kExprI8x16Splat,  
kSimdPrefix, kExprS128Select,  
kSimdPrefix, kExprF64x2Div, 0x01,  
kSimdPrefix, kExprF64x2ExtractLane, 0x00,  
kNumericPrefix, kExprI32SConvertSatF64,  
kExprEnd,  
]);
builder.addExport('main', 0);
const instance = builder.instantiate();
print(instance.exports.main());
