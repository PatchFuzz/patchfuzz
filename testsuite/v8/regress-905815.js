



d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

(function() {
  const builder = new WasmModuleBuilder();
  builder.addType(makeSig([], []));
  builder.addType(makeSig([kWasmI32], [kWasmI32]));
  builder.addFunction(undefined, 0 )
    .addBodyWithEnd([
        kExprEnd,   
    ]);
  builder.addFunction(undefined, 1 )
    .addLocals(kWasmI32, 65)
    .addBodyWithEnd([
        kExprLoop, kWasmVoid,   
        kSimdPrefix,
        kExprF32x4Min,
        kExprI64UConvertI32,
        kExprI64RemS,
        kExprUnreachable,
        kExprLoop, 0x02,   
    ]);
})
