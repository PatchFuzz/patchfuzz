





d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addMemory(1, 1, false, true);
const sig = builder.addType(makeSig([], [kWasmI32]));

builder.addFunction(undefined, sig)
  .addLocals(kWasmI32, 1002).addLocals(kWasmI64, 3)
  .addBodyWithEnd([


  kExprLocalGet, 0xec, 0x07,  
  kExprLocalGet, 0xea, 0x07,  
  kExprLocalGet, 0x17,  
  kExprLocalGet, 0xb5, 0x01,  
  kExprI32Const, 0x00,  
  kExprIf, kWasmI32,  
    kExprI32Const, 0x91, 0xe8, 0x7e,  
  kExprElse,  
    kExprI32Const, 0x00,  
    kExprEnd,  
  kExprIf, kWasmVoid,  
    kExprI32Const, 0x00,  
    kExprI32Const, 0x00,  
    kAtomicPrefix, kExprI32AtomicSub, 0x01, 0x04,  
    kExprDrop,
  kExprEnd,
  kExprUnreachable,
kExprEnd
]);

const instance = builder.instantiate();
