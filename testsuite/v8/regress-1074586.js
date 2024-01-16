





d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addMemory(1, 1, false, true);
builder.addGlobal(kWasmI32, 1);
const sig = builder.addType(makeSig([kWasmI32, kWasmI64, kWasmI64, kWasmI64], [kWasmF32]));

builder.addFunction(undefined, sig)
  .addLocals(kWasmI32, 57).addLocals(kWasmI64, 11)
  .addBodyWithEnd([


kExprLocalGet, 0x1b,  
kExprLocalSet, 0x1c,  
kExprI32Const, 0x00,  
kExprIf, kWasmVoid,  
  kExprGlobalGet, 0x00,  
  kExprLocalSet, 0x1e,  
  kExprBlock, kWasmVoid,  
    kExprGlobalGet, 0x00,  
    kExprLocalSet, 0x21,  
    kExprBlock, kWasmVoid,  
      kExprBlock, kWasmVoid,  
        kExprBlock, kWasmVoid,  
          kExprGlobalGet, 0x00,  
          kExprLocalSet, 0x0a,  
          kExprI32Const, 0x00,  
          kExprLocalSet, 0x28,  
          kExprLocalGet, 0x00,  
          kExprLocalSet, 0x0b,  
          kExprI32Const, 0x00,  
          kExprBrIf, 0x01,  
          kExprEnd,  
        kExprUnreachable,  
        kExprEnd,  
      kExprI32Const, 0x01,  
      kExprLocalSet, 0x36,  
      kExprI32Const, 0x00,  
      kExprIf, kWasmVoid,  
        kExprEnd,  
      kExprLocalGet, 0x00,  
      kExprLocalSet, 0x10,  
      kExprI32Const, 0x00,  
      kExprI32Eqz,  
      kExprLocalSet, 0x38,  
      kExprBlock, kWasmVoid,  
        kExprI32Const, 0x7f,  
        kExprI32Eqz,  
        kExprLocalSet, 0x39,  
        kExprI32Const, 0x01,  
        kExprIf, kWasmVoid,  
          kExprGlobalGet, 0x00,  
          kExprLocalSet, 0x11,  
          kExprI32Const, 0x00,  
          kExprI32Eqz,  
          kExprLocalSet, 0x12,  
          kExprGlobalGet, 0x00,  
          kExprLocalSet, 0x13,  
          kExprI32Const, 0x00,  
          kExprI32Const, 0x01,  
          kExprI32Sub,  
          kExprLocalSet, 0x3a,  
          kExprI32Const, 0x00,  
          kAtomicPrefix, kExprI64AtomicLoad16U, 0x01, 0x04,  
          kExprDrop,  
          kExprI64Const, 0x01,  
          kExprLocalSet, 0x44,  
          kExprI64Const, 0x01,  
          kExprLocalSet, 0x3e,  
        kExprElse,  
          kExprNop,  
          kExprEnd,  
        kExprLocalGet, 0x40,  
        kExprLocalSet, 0x41,  
        kExprLocalGet, 0x41,  
        kExprI64Const, 0x4b,  
        kExprI64Add,  
        kExprDrop,  
        kExprEnd,  
      kExprEnd,  
    kExprUnreachable,  
    kExprEnd,  
  kExprUnreachable,  
  kExprEnd,  
kExprF32Const, 0x00, 0x00, 0x84, 0x42,  
kExprEnd,  
]);
const instance = builder.instantiate();
