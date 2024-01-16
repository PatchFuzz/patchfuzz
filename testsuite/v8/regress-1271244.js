





d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addFunction('main', makeSig([], [kWasmI32, kWasmF64, kWasmF64]))
    .addBody([
      kExprI32Const, 1,                        
      kSimdPrefix, kExprI8x16Splat,            
      kSimdPrefix, kExprF64x2PromoteLowF32x4,  
      kSimdPrefix, kExprI8x16ExtractLaneS, 0,  
      ...wasmF64Const(2),                      
      ...wasmF64Const(1),                      
    ]);
builder.toModule();
