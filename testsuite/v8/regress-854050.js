



d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addFunction(undefined, makeSig([kWasmI32, kWasmF32], []))
    .addLocals(kWasmI32, 7)
    .addBody([
      kExprLocalGet,    0,          
      kExprI32Const,    0,          
      kExprIf,          kWasmVoid,  
      kExprUnreachable,             
      kExprEnd,                     
      kExprLocalGet,    4,          
      kExprLocalTee,    8,          
      kExprBrIf,        0,          
      kExprLocalTee,    7,          
      kExprLocalTee,    0,          
      kExprLocalTee,    2,          
      kExprLocalTee,    8,          
      kExprDrop,                    
      kExprLoop,        kWasmVoid,  
      kExprEnd,                     
    ]);
builder.instantiate();
