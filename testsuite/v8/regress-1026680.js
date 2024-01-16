



d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

(function() {
  const builder = new WasmModuleBuilder();
  builder.addType(makeSig([kWasmI32, kWasmI32, kWasmI32], [kWasmI32]));
  builder.addType(makeSig([], []));
  
  builder.addFunction(undefined, 0 )
    .addBodyWithEnd([


kExprCallFunction, 0x01, 
kExprI32Const, 0x00,
kExprEnd,   
            ]);
  
  builder.addFunction(undefined, 1 )
    .addLocals(kWasmF32, 1).addLocals(kWasmI32, 13)
    .addBodyWithEnd([


kExprEnd,   
            ]);
  builder.addExport('main', 0);
  const instance = builder.instantiate();
  print(instance.exports.main(1, 2, 3));
})();
