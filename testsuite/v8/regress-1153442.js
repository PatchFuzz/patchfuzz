



d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addMemory(1, 1, false, true);
builder.addGlobal(kWasmI32, 1);
builder.addGlobal(kWasmI32, 1);
builder.addType(makeSig([kWasmI32, kWasmI64, kWasmI32], []));

builder.addFunction(undefined, 0 )
  .addLocals(kWasmI32, 10)
  .addBodyWithEnd([


kExprI32Const, 0x00,  
kExprLocalSet, 0x04,  
kExprI32Const, 0x01,  
kExprLocalSet, 0x05,  
kExprBlock, kWasmVoid,  
  kExprBr, 0x00,  
  kExprEnd,  
kExprGlobalGet, 0x01,  
kExprLocalSet, 0x03,  
kExprLocalGet, 0x03,  
kExprI32Const, 0x01,  
kExprI32Sub,  
kExprLocalSet, 0x06,  
kExprI64Const, 0x01,  
kExprLocalSet, 0x01,  
kExprI32Const, 0x00,  
kExprI32Eqz,  
kExprLocalSet, 0x07,  
kExprBlock, kWasmVoid,  
  kExprBr, 0x00,  
  kExprEnd,  
kExprGlobalGet, 0x01,  
kExprLocalSet, 0x08,  
kExprI32Const, 0x01,  
kExprI32Const, 0x01,  
kExprI32Sub,  
kExprLocalSet, 0x09,  
kExprLocalGet, 0x00,  
kExprLocalSet, 0x0a,  
kExprGlobalGet, 0x00,  
kExprLocalSet, 0x0b,  
kExprI32Const, 0x00,  
kExprI32Const, 0x0f,  
kExprI32And,  
kExprLocalSet, 0x0c,  
kExprI32Const, 0x00,  
kAtomicPrefix, kExprI64AtomicLoad, 0x03, 0x04,  
kExprDrop,  
kExprUnreachable,  
kExprEnd,  
]);
builder.toModule();
