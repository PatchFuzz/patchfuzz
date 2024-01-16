



d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addFunction('test', kSig_i_i)
    .addBody([
      
      kExprLocalGet, 0,      
      kExprLocalGet, 0,      
      kExprLoop, kWasmVoid,  
      kExprBr, 0,            
      kExprEnd,              
      kExprUnreachable,      
    ])
    .exportFunc();
builder.instantiate();
