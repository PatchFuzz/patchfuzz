



d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addFunction(undefined, kSig_v_v).addBody([]);
builder.addFunction(undefined, kSig_i_i)
  .addBody([
    kExprLocalGet, 0,
    kExprLocalGet, 0,
    
    
    kExprLoop, kWasmVoid,
      
      kExprCallFunction, 0,
      
      
      kExprBr, 0,
      kExprEnd,
    kExprDrop
]);
builder.instantiate();
