



d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addMemory(16, 17);
builder.addGlobal(kWasmI32, 1, wasmI32Const(10));

builder.addFunction('load', kSig_i_v)
    .addBody([
      kExprI32Const, 0,         
      kExprI32LoadMem8U, 0, 5,  
    ])
    .exportFunc();

builder.addFunction(undefined, makeSig([kWasmI64, kWasmI32], []))
    .addLocals(kWasmI64, 3)
    .addLocals(kWasmI32, 5)
    .addBody([
      
      kExprGlobalGet, 0,  
      
      kExprLocalSet, 5,  
      
      kExprI32Const, 0,  
      
      kExprI32Eqz,  
      
      kExprLocalSet, 6,  
      
      kExprGlobalGet, 0,  
      
      kExprLocalSet, 7,  
      
      kExprI32Const, 0,  
      
      kExprI32Const, 1,  
      
      kExprI32Sub,  
      
      kExprLocalSet, 8,  
      
      kExprI32Const, 1,  
      
      kExprI32Const, 15,  
      
      kExprI32And,  
      
      kExprLocalSet, 9,  
      
      kExprLocalGet, 0,  
      
      kExprLocalSet, 2,  
      
      kExprLocalGet, 0,  
      
      kExprLocalSet, 3,  
      
      kExprLocalGet, 2,  
      
      kExprLocalGet, 3,  
      
      kExprI64Sub,  
      
      kExprLocalSet, 4,  
      
      kExprI32Const, 1,  
      
      kExprLocalGet, 4,  
      
      kExprI64StoreMem16, 1, 0x03,  
    ]);

builder.addFunction('invoker', kSig_v_v)
    .addBody([
      ...wasmI64Const(1),    
      ...wasmI32Const(0),    
      kExprCallFunction, 1,  
    ])
    .exportFunc();
const instance = builder.instantiate();

var exports = instance.exports;
exports.invoker();
assertEquals(0, exports.load());
