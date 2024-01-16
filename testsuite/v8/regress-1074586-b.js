





d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addMemory(16, 32, false, true);
const sig = builder.addType(makeSig(
    [kWasmI32, kWasmI32, kWasmI32, kWasmI32, kWasmI32, kWasmI32, kWasmI32],
    []));
builder.addFunction(undefined, sig).addBodyWithEnd([
  
  
  kExprI32Const, 0x00,                             
  kExprI64Const, 0x00,                             
  kAtomicPrefix, kExprI64AtomicStore, 0x00, 0x00,  
  kExprEnd,                                        
]);
builder.addExport('main', 0);
assertDoesNotThrow(() => builder.instantiate());
