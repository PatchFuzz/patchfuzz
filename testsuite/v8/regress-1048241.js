





d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addMemory(16, 32, false, true);
const sig = makeSig([kWasmF64, kWasmI64, kWasmI32, kWasmF64], []);
builder.addFunction(undefined, sig).addBody([
  kExprI32Const, 0x00,                               
  kExprI32Const, 0x00,                               
  kExprI32Const, 0x00,                               
  kAtomicPrefix, kExprI32AtomicXor16U, 0x01, 0x00,   
  kAtomicPrefix, kExprI32AtomicStore8U, 0x00, 0x00,  
]);
builder.instantiate();
