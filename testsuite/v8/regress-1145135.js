





d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addMemory(1, 1, false, true);
builder.addGlobal(kWasmI32, 1);
builder.addFunction(undefined, kSig_v_i)
  .addLocals(kWasmI32, 5)
  .addBody([


kExprGlobalGet, 0x00,  
kExprI32Const, 0x10,  
kExprI32Sub,  
kExprLocalTee, 0x02,  
kExprGlobalSet, 0x00,  
kExprBlock, kWasmVoid,  
  kExprLocalGet, 0x00,  
  kExprI32LoadMem, 0x02, 0x00,  
  kExprI32Eqz,  
  kExprIf, kWasmVoid,  
    kExprLocalGet, 0x02,  
    kExprI32Const, 0x00,  
    kExprI32StoreMem, 0x02, 0x0c,  
    kExprLocalGet, 0x00,  
    kExprI32Const, 0x20,  
    kExprI32Add,  
    kExprLocalSet, 0x05,  
    kExprLocalGet, 0x00,  
    kExprI32Const, 0x00,  
    kExprI32Const, 0x01,  
    kAtomicPrefix, kExprI32AtomicCompareExchange, 0x02, 0x20,  
]);
assertThrows(() => builder.toModule(), WebAssembly.CompileError);
