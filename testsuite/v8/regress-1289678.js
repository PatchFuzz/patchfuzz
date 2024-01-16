



d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addType(makeSig([], [kWasmS128, kWasmF64, kWasmS128, kWasmF64, kWasmF64, kWasmF32, kWasmF64, kWasmS128, kWasmF32]));
builder.addFunction('foo', kSig_v_v)
  .addBody([
kExprBlock,  0,                                          
  kExprF64Const, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,  
  kExprI32Const, 0x00,                                            
  kSimdPrefix, kExprI8x16Splat,                                   
  kExprF64Const, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,  
  kExprI32Const, 0x00,                                            
  kSimdPrefix, kExprI8x16Splat,                                   
  kExprF64Const, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,  
  kExprF64Const, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,  
  kExprF32Const, 0x00, 0x00, 0x00, 0x00,                          
  kExprF64Const, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,  
  kExprI32Const, 0x00,                                            
  kSimdPrefix, kExprI8x16Splat,                                   
  kExprF32Const, 0x00, 0x00, 0x00, 0x00,                          
  kExprBr, 0,                                                     
  kExprUnreachable,                                               
  kExprEnd,                                                       
kExprUnreachable,                                                 
]);
builder.toModule();
