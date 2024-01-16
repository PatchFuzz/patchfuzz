



d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addMemory(16, 32);
builder.addGlobal(kWasmI32, 0);
const sig0 = makeSig([kWasmI32, kWasmI32, kWasmI32], [kWasmI32]);
builder.addFunction(undefined, sig0).addBody([
  kExprI32Const, 1,  
  kExprI32Const, 0,  
  kExprI32Const, 3,  
  kExprI32GeU,       
  kExprI32Rol,       
]);
builder.addExport('main', 0);
const instance = builder.instantiate();
assertEquals(1, instance.exports.main());
