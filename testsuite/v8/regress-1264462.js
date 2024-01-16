





d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addFunction('main', kSig_i_v).addBody([
  kExprI32Const, 0,                           
  kSimdPrefix, kExprI8x16Splat,               
  kExprI32Const, 0,                           
  kSimdPrefix, kExprI8x16Splat,               
  kSimdPrefix, kExprI64x2Mul, 0x01,           
  kSimdPrefix, kExprI8x16ExtractLaneS, 0x00,  
]);
builder.toModule();
