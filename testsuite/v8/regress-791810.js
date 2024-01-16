



d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addFunction('test', kSig_i_i)
    .addBody([
      kExprLocalGet, 0x00,    
      kExprBlock, kWasmVoid,  
      kExprBr, 0x00,          
      kExprEnd,               
      kExprBlock, kWasmVoid,  
      kExprBr, 0x00,          
      kExprEnd,               
      kExprBr, 0x00,          
    ])
    .exportFunc();
builder.instantiate();
