





d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addFunction(undefined, makeSig([], [kWasmS128]))
  .addBody([
...wasmS128Const(new Array(16).fill(0)),  
...wasmS128Const(new Array(16).fill(0)),  
...wasmS128Const(new Array(16).fill(0)),  
kExprI32Const, 0x00,  
kSimdPrefix, kExprI8x16ReplaceLane, 0x00,  
kSimdPrefix, kExprI8x16GtS,  
kSimdPrefix, kExprI16x8Ne,  
...wasmS128Const(new Array(16).fill(1)),  
kExprI32Const, 0x00,  
kSimdPrefix, kExprI8x16ReplaceLane, 0x00,  
kExprI32Const, 0x00,  
kSimdPrefix, kExprI8x16ReplaceLane, 0x00,  
...wasmS128Const(new Array(16).fill(2)),  
kSimdPrefix, kExprI16x8Eq,  
kSimdPrefix, kExprI16x8Ne,  
...wasmS128Const(new Array(16).fill(1)),  
...wasmS128Const(new Array(16).fill(1)),  
...wasmS128Const(new Array(16).fill(0)),  
kSimdPrefix, kExprI16x8AddSatU, 0x01,  
...wasmS128Const(new Array(16).fill(0)),  
...wasmS128Const(new Array(16).fill(0)),  
kSimdPrefix, kExprI16x8Sub, 0x01,  
kSimdPrefix, kExprI64x2ExtMulHighI32x4U, 0x01,  
kSimdPrefix, kExprI64x2ExtMulLowI32x4S, 0x01,  
kExprF32Const, 0x00, 0x00, 0x00, 0x00,  
kExprF32Const, 0x00, 0x00, 0x00, 0x00,  
kExprF32Mul,  
kExprF32Const, 0x00, 0x00, 0x00, 0x00,  
...wasmS128Const(new Array(16).fill(0)),  
kSimdPrefix, kExprI16x8ExtractLaneS, 0x00,  
kExprSelect,  
kNumericPrefix, kExprI32SConvertSatF32,  
kSimdPrefix, kExprI8x16ReplaceLane, 0x00,  
kSimdPrefix, kExprI16x8Ne,  
]);
builder.toModule();
