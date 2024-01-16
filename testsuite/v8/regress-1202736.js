





d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addMemory(1, 1, false, true);
builder.addType(
    makeSig([kWasmF64, kWasmI32, kWasmI32, kWasmF64, kWasmF32], [kWasmI64]));
builder.addFunction(undefined, 0 )
  .addLocals(kWasmI64, 1)
  .addBodyWithEnd([


kExprLoop, 0x7e,  
  kExprI64Const, 0x01,  
  kExprEnd,  
kExprBlock, 0x7f,  
  kExprLocalGet, 0x05,  
  kExprLocalSet, 0x05,  
  kExprI32Const, 0x00,  
  kExprEnd,  
kExprLocalGet, 0x05,  
kExprLocalGet, 0x05,  
kAtomicPrefix, kExprI64AtomicCompareExchange, 0x00, 0x04,
kExprI64GtS,  
kExprDrop,  
kExprI64Const, 0x01,  
kExprEnd,  
]);
const instance = builder.instantiate();
