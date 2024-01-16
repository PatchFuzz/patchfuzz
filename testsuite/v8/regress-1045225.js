





d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

(function() {
  const builder = new WasmModuleBuilder();
  builder.addMemory(16, 32, false, true);
  builder.addType(makeSig([kWasmI32, kWasmI32, kWasmI32], [kWasmI32]));
  
  builder.addFunction(undefined, 0 )
    .addBodyWithEnd([


kExprI32Const, 0x80, 0x01,
kExprI32Clz,
kExprI32Const, 0x00,
kExprI64Const, 0x00,
kAtomicPrefix, kExprI64AtomicStore8U, 0x00, 0x00,
kExprEnd,   
            ]);
  builder.addExport('main', 0);
  const instance = builder.instantiate();
  print(instance.exports.main(1, 2, 3));
})();
