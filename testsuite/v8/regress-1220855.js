





d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addMemory(1, 1, false, true);
builder.addFunction('test', makeSig([kWasmI32], [kWasmI64]))
    .addBody([
      ...wasmI32Const(1 << 30),  
      kExprMemoryGrow, 0,        
      kExprI64UConvertI32        
    ])
    .exportFunc();
const instance = builder.instantiate();
instance.exports.test();
