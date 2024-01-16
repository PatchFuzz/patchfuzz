



d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addMemory(16, 32, false);
builder.addFunction('main', kSig_i_v)
    .addBody([
      ...wasmI32Const(10000),  
      kExprMemoryGrow, 0,      
      kExprI32Popcnt,          
    ])
    .exportFunc();
const instance = builder.instantiate();
assertEquals(32, instance.exports.main());
