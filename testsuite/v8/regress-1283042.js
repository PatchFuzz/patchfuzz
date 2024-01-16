





d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addMemory(16, 32, false);
builder.addFunction(undefined, kSig_i_iii)
  .addBody([
    ...wasmS128Const(new Array(16).fill(0)),        
    kSimdPrefix, kExprF64x2ConvertLowI32x4U, 0x01,  
    kSimdPrefix, kExprI64x2UConvertI32x4Low, 0x01,  
    kSimdPrefix, kExprI64x2BitMask, 0x01,           
    ...wasmF64Const(0),                             
    kNumericPrefix, kExprI32SConvertSatF64,         
    ...wasmI32Const(0),                             
    kExprCallFunction, 0,                           
    kExprDrop,                                      
    ...wasmI32Const(0),                             
    ...wasmI64Const(0),                             
    kExprI64StoreMem16, 0x00, 0x00,                 
    ...wasmF32Const(0),                             
    kExprF32Sqrt,                                   
    kExprI32UConvertF32,                            
]);
builder.toModule();
