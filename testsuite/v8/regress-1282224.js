





d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addType(makeSig([kWasmI32, kWasmI32, kWasmI32], [kWasmI32]));
builder.addFunction(undefined, 0 )
  .addLocals(kWasmS128, 2)
  .addBody([
    ...wasmF32Const(0),                       
    ...wasmI32Const(0),                       
    kExprF32SConvertI32,                      
    kExprLocalGet, 3,                         
    kSimdPrefix, kExprI64x2AllTrue, 0x01,     
    kExprSelect,                              
    kExprLocalGet, 4,                         
    ...wasmS128Const(new Array(16).fill(0)),  
    kSimdPrefix, kExprI8x16Eq,                
    kSimdPrefix, kExprI64x2AllTrue, 0x01,     
    kExprF32SConvertI32,                      
    ...wasmS128Const(new Array(16).fill(0)),  
    kSimdPrefix, kExprI64x2AllTrue, 0x01,     
    kExprSelect,                              
    kExprF32Const, 0x00, 0x00, 0x80, 0x3f,    
    kExprF32Ge,                               
]);
builder.toModule();
