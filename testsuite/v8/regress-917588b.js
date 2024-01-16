



d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
const sig0 = builder.addType(makeSig([kWasmF32], [kWasmI32]));
const sig1 = builder.addType(makeSig([kWasmI64, kWasmI32, kWasmI64, kWasmF32, kWasmI64], [kWasmF32]));
const sig2 = builder.addType(makeSig([kWasmF32], [kWasmF32]));

builder.addFunction(undefined, sig0).addBody([kExprI32Const, 0x00]);

builder.addFunction(undefined, sig1)
  .addBody([
    
    kExprBlock, kWasmF32,   
    kExprI32Const, 0x00,
    kExprIf, kWasmVoid,   
      kExprLoop, kWasmVoid,   
        kExprBlock, kWasmI32,   
          kExprF32Const, 0x00, 0x00, 0x80, 0xc1,
          kExprF32Const, 0x00, 0x00, 0x80, 0x45,
          kExprCallFunction, 0x00, 
          kExprBrIf, 0x03,   
          kExprDrop,
          kExprI32Const, 0xd8, 0x00,
          kExprEnd,   
        kExprBrIf, 0x00,   
        kExprEnd,   
      kExprF32Const, 0x00, 0x00, 0x80, 0x3f,
      kExprF32Const, 0x00, 0x00, 0x80, 0xc6,
      kExprBlock, kWasmI32,   
        kExprF32Const, 0x00, 0x00, 0x80, 0x3f,
        kExprCallFunction, 0x02, 
        kExprDrop,
        kExprI32Const, 0x68,
        kExprEnd,   
      kExprBrIf, 0x01,   
      kExprI32Const, 0x00,
      kExprSelect,
      kExprDrop,
      kExprUnreachable,
    kExprElse,   
      kExprNop,
      kExprEnd,   
    kExprF32Const, 0x00, 0x00, 0x69, 0x43,
    kExprEnd   
]);

builder.addFunction(undefined, sig2).addBody([
  kExprF32Const, 0x00, 0x00, 0x80, 0x3f
]);
builder.instantiate();
