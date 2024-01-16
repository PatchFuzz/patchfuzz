





d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addMemory(16, 17);

builder.addFunction('load', kSig_i_v)
    .addBody([
      
      kExprI32Const, 0,         
      kExprI32LoadMem8U, 0, 5,  
    ])
    .exportFunc();
const instance = builder.instantiate();
instance.exports.load();
