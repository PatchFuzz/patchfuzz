



d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

(function() {
  const builder = new WasmModuleBuilder();
  builder.addType(makeSig([kWasmF64, kWasmF64, kWasmI32, kWasmI32], [kWasmI32]));
  builder.addType(makeSig([], [kWasmF64]));
  
  builder.addFunction(undefined, 0 )
    .addBodyWithEnd([


kExprI32Const, 0x01,
kExprEnd,   
            ]);
  
  builder.addFunction(undefined, 1 )
    .addLocals(kWasmF64, 8)
    .addBodyWithEnd([


kExprBlock, kWasmF64,   
  kExprBlock, kWasmVoid,   
    kExprF64Const, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xf0, 0x3f,
    kExprLocalTee, 0x00,
    kExprLocalTee, 0x01,
    kExprLocalTee, 0x02,
    kExprLocalTee, 0x03,
    kExprLocalTee, 0x04,
    kExprLocalTee, 0x05,
    kExprLocalTee, 0x06,
    kExprF64Const, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xf0, 0x3f,
    kExprF64Const, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xf0, 0x3f,
    kExprLocalTee, 0x07,
    kExprI32Const, 0x00,
    kExprIf, kWasmI32,   
      kExprI32Const, 0x00,
    kExprElse,   
      kExprI32Const, 0x00,
      kExprEnd,   
    kExprBrIf, 0x01,   
    kExprI32UConvertF64,
    kExprI32Const, 0x00,
    kExprCallFunction, 0x00, 
    kExprDrop,
    kExprUnreachable,
    kExprEnd,   
  kExprUnreachable,
  kExprEnd,   
kExprEnd,   
            ]);
  assertDoesNotThrow(function() { builder.instantiate(); });
})();
