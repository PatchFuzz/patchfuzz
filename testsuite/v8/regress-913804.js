



d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addFunction('main', kSig_v_v).addBody([
  kExprLoop, kWasmVoid,        
   kExprBr, 0x01,          
   kExprBlock, kWasmVoid,  
    kExprBr, 0x02,     
    kExprEnd,          
   kExprEnd                
]);
builder.instantiate();
