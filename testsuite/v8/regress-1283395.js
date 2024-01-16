





d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addMemory(16, 32, false);

builder.addFunction(undefined, makeSig([kWasmI32, kWasmI32, kWasmI32], []))
  .addLocals(kWasmS128, 1)
  .addBody([
    kExprTry, kWasmVoid,  
      kExprF64Const, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,  
      kExprI32Const, 0x00,  
      kSimdPrefix, kExprI8x16Splat,  
      kExprLocalTee, 0x03,  
      kExprCallFunction, 2,  
      kExprF64Const, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,  
      kExprLocalGet, 0x03,  
      kExprCallFunction, 2,  
      kExprTry, kWasmVoid,  
        kExprLocalGet, 0x03,  
        kExprF64Const, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,  
        kExprF32Const, 0x00, 0x00, 0x00, 0x00,  
        kExprCallFunction, 1,  
      kExprCatchAll,  
        kExprEnd,  
      kExprI32Const, 0x00,  
      kExprI32Const, 0x00,  
      kExprI32Const, 0x00,  
      kAtomicPrefix, kExprI32AtomicCompareExchange16U, 0x01, 0x80, 0x80, 0xc0, 0x9b, 0x07,  
      kExprDrop,  
    kExprCatchAll,  
      kExprEnd,  
    kExprI32Const, 0x00,  
    kSimdPrefix, kExprI8x16Splat,  
    kExprF64Const, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,  
    kExprF32Const, 0x00, 0x00, 0x00, 0x00,  
    kExprCallFunction, 1,  
]);

builder.addFunction(undefined, makeSig([kWasmS128, kWasmF64, kWasmF32], []))
    .addBody([kExprUnreachable]);

builder.addFunction(undefined, makeSig([kWasmF64, kWasmS128], [])).addBody([
  kExprUnreachable
]);
builder.toModule();
