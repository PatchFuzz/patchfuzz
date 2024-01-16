








d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addMemory(16, 32, false, true);

builder.addFunction(undefined, kSig_i_v)
  .addLocals(kWasmI64, 1)
  .addBodyWithEnd([


kExprI32Const, 0x00,  
kExprI32Const, 0x00,  
kExprI32Const, 0x00,  
kExprSelectWithType, 0x01, 0x7f,  
kExprMemoryGrow, 0x00,  
kExprI32Const, 0xb0, 0xde, 0xc9, 0x03,  
kSimdPrefix, kExprI8x16Splat,  
kExprI32Const, 0x00,  
kSimdPrefix, kExprI8x16Splat,  
kExprI32Const, 0xb0, 0xe0, 0xc0, 0x01,  
kSimdPrefix, kExprI8x16Splat,  
kSimdPrefix, kExprI64x2ExtMulHighI32x4U, 0x01,  
kSimdPrefix, kExprF32x4Le,  
kSimdPrefix, kExprI32x4ExtractLane, 0x00,  
kExprI32DivS,  
kExprEnd,  
]);
builder.addExport('main', 0);
const instance = builder.instantiate();
assertThrows(
  () => instance.exports.main(),
  WebAssembly.RuntimeError,
  "divide by zero");
