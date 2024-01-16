





d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

(function() {
const builder = new WasmModuleBuilder();
builder.addMemory(16, 32, false, true);
builder.addType(makeSig([kWasmI32, kWasmI32, kWasmI32], [kWasmI32]));

builder.addFunction(undefined, 0 ).addBodyWithEnd([
  
  
  kExprI32Const, 0x00, kExprI64Const, 0xc2, 0xe6, 0x00, kAtomicPrefix,
  kExprI64AtomicAdd8U, 0x00, 0xb6, 0x0e, kExprF32SConvertI64,
  kExprI32SConvertF32,
  kExprEnd,  
]);
builder.addExport('main', 0);
const instance = builder.instantiate();
assertEquals(instance.exports.main(1, 2, 3), 0);
})();
