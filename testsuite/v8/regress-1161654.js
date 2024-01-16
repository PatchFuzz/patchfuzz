









d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addMemory(19, 32, false);
builder.addGlobal(kWasmI32, 0);
builder.addType(makeSig([], []));
builder.addType(makeSig([kWasmI64, kWasmS128, kWasmF32], [kWasmI32]));

builder.addFunction(undefined, 0 )
  .addBodyWithEnd([


kExprI32Const, 0x05,  
kExprReturn,  
kExprUnreachable,  
kExprEnd,  
]);

builder.addFunction(undefined, 1 )
  .addBodyWithEnd([


kExprLocalGet, 0x01,  
kExprLocalGet, 0x01,  
kExprGlobalGet, 0x00,  
kExprDrop,  
kExprLoop, kWasmVoid,  
  kExprLoop, 0x00,  
    kExprI32Const, 0x01,  
    kExprMemoryGrow, 0x00,  
    kExprI64LoadMem8U, 0x00, 0x70,  
    kExprLoop, 0x00,  
      kExprCallFunction, 0x00,  
      kExprEnd,  
    kExprI64Const, 0xf1, 0x24,  
    kExprGlobalGet, 0x00,  
    kExprDrop,  
    kExprBr, 0x00,  
    kExprEnd,  
  kExprEnd,  
kExprI32Const, 0x5b,  
kExprReturn,  
kExprEnd,  
]);

const instance = builder.instantiate();
