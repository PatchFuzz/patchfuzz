





d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addMemory(16, 32, false);
builder.addType(makeSig([kWasmI32, kWasmI32, kWasmI32], []));
builder.addType(makeSig([kWasmS128], []));
builder.addType(makeSig([], [kWasmF64, kWasmF64]));
builder.addTag(makeSig([], []));

builder.addFunction(undefined, 0 )
  .addLocals(kWasmI32, 2).addLocals(kWasmF32, 1).addLocals(kWasmI32, 1).addLocals(kWasmF64, 1)
  .addBody([
    kExprTry, kWasmVoid,  
      kExprCallFunction, 2,  
      kExprI32Const, 0,  
      kExprSelect,  
      kExprI32SConvertF64,  
      kExprI32Const, 0x00,  
      kSimdPrefix, kExprI8x16Splat,  
      kSimdPrefix, kExprS128Store8Lane, 0x00, 0x00, 0x00,  
    kExprCatch, 0,  
    kExprCatchAll,  
      kExprEnd,  
    kExprI32Const, 0x00,  
    kSimdPrefix, kExprI8x16Splat,  
    kExprCallFunction, 1,  
]);

builder.addFunction(undefined, 1 ).addBody([kExprUnreachable]);

builder.addFunction(undefined, 2 ).addBody([kExprUnreachable]);
builder.toModule();
