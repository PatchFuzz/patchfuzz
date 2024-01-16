





d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addFunction(undefined, kSig_i_iii)
  .addBody([
    ...wasmS128Const(new Array(16).fill(0)),    
    kSimdPrefix, kExprI8x16ExtractLaneU, 0x00,  
    ...wasmS128Const(new Array(16).fill(0)),    
    kSimdPrefix, kExprF32x4ExtractLane, 0x00,   
    kNumericPrefix, kExprI64SConvertSatF32,     
    kExprF32Const, 0x13, 0x00, 0x00, 0x00,      
    kNumericPrefix, kExprI64SConvertSatF32,     
    kExprI64Ior,                                
    kExprI32ConvertI64,                         
    ...wasmF32Const(0),                         
    kNumericPrefix, kExprI64SConvertSatF32,     
    kExprI32ConvertI64,                         
    kExprSelect,                                
]);
builder.toModule();
