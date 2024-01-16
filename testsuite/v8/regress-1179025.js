





d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addMemory(1, 1, false, true);
builder.addType(makeSig([], []));
builder.addType(makeSig([kWasmI64], [kWasmF32]));

builder.addFunction(undefined, 0 )
  .addBodyWithEnd([


kExprNop,  
kExprEnd,  
]);

builder.addFunction(undefined, 1 )
  .addLocals(kWasmI64, 1)
  .addBodyWithEnd([


kExprBlock, kWasmF32,  
  kExprI32Const, 0x00,  
  kExprI32Const, 0x01,  
  kExprIf, kWasmI64,  
    kExprI64Const, 0x00,  
  kExprElse,  
    kExprUnreachable,  
    kExprEnd,  
  kAtomicPrefix, kExprI64AtomicStore, 0x03, 0x04,  
  kExprF32Const, 0x00, 0x00, 0x00, 0x00,  
  kExprEnd,  
kExprDrop,  
kExprF32Const, 0x00, 0x00, 0x80, 0x51,  
kExprEnd,  
]);
builder.instantiate();
