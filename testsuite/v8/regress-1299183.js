





d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addStruct([]);
builder.addType(makeSig([kWasmI32, kWasmI32, kWasmI32], [kWasmI32]));
builder.addType(makeSig([kWasmFuncRef, kWasmFuncRef, kWasmExternRef],
                        [wasmRefType(0)]));
builder.addType(
  makeSig([kWasmI64, kWasmF32, kWasmS128, kWasmI32],
          [wasmRefType(1), wasmRefNullType(2), kWasmI64, wasmRefNullType(2),
           kWasmI64]));
builder.addType(
  makeSig([],
          [wasmRefNullType(2), wasmRefNullType(2), kWasmF64, wasmRefNullType(2),
           kWasmI32, wasmRefNullType(2), kWasmI32, kWasmI32, wasmRefNullType(2),
           kWasmI32, kWasmI32, kWasmI64, kWasmI32, kWasmS128,
           wasmRefNullType(2)]));
builder.addType(makeSig([], []));
builder.addType(
  makeSig([wasmRefType(kWasmFuncRef)],
          [kWasmI32, kWasmI32, wasmRefType(1), wasmRefType(kWasmAnyRef),
           kWasmI32, wasmRefType(1), kWasmI64, wasmRefNullType(4), kWasmI32,
           wasmRefType(kWasmAnyRef), wasmRefNullType(4), kWasmI64, kWasmI64,
           wasmRefType(kWasmEqRef), kWasmI32]));
builder.addType(
  makeSig([wasmRefType(kWasmEqRef), kWasmAnyRef, kWasmI32, kWasmI32],
          [wasmRefType(1), kWasmI64, wasmRefNullType(4), kWasmI32,
           wasmRefType(kWasmAnyRef), wasmRefNullType(4), kWasmI64, kWasmI64,
           wasmRefType(kWasmEqRef), kWasmI32]));
builder.addType(
  makeSig([kWasmI32, kWasmI32, wasmRefType(1), wasmRefType(kWasmAnyRef),
           kWasmI32, wasmRefType(1), kWasmI64, wasmRefNullType(4), kWasmI32,
           wasmRefType(kWasmAnyRef), wasmRefNullType(4), kWasmI64, kWasmI64,
           wasmRefType(kWasmEqRef), kWasmI32],
          [kWasmI32]));
builder.addMemory(16, 32, false);
builder.addTable(kWasmFuncRef, 4, 5, undefined)
builder.addTable(kWasmFuncRef, 15, 25, undefined)
builder.addTable(kWasmFuncRef, 1, 1, undefined)
builder.addTable(kWasmFuncRef, 16, 17, undefined)
builder.addActiveElementSegment(
  0, wasmI32Const(0),
  [[kExprRefFunc, 0], [kExprRefFunc, 1], [kExprRefFunc, 2], [kExprRefFunc, 3]],
  kWasmFuncRef);
builder.addActiveElementSegment(
  1, wasmI32Const(0),
  [[kExprRefFunc, 0], [kExprRefFunc, 1], [kExprRefFunc, 2], [kExprRefFunc, 3],
   [kExprRefFunc, 0], [kExprRefFunc, 1], [kExprRefFunc, 2], [kExprRefFunc, 3],
   [kExprRefFunc, 0], [kExprRefFunc, 1], [kExprRefFunc, 2], [kExprRefFunc, 3],
   [kExprRefFunc, 0], [kExprRefFunc, 1], [kExprRefFunc, 2]],
  kWasmFuncRef);
builder.addActiveElementSegment(
  2, wasmI32Const(0), [[kExprRefFunc, 0]], kWasmFuncRef);
builder.addActiveElementSegment(
  3, wasmI32Const(0),
  [[kExprRefFunc, 0], [kExprRefFunc, 1], [kExprRefFunc, 2], [kExprRefFunc, 3],
   [kExprRefFunc, 0], [kExprRefFunc, 1], [kExprRefFunc, 2], [kExprRefFunc, 3],
   [kExprRefFunc, 0], [kExprRefFunc, 1], [kExprRefFunc, 2], [kExprRefFunc, 3],
   [kExprRefFunc, 0], [kExprRefFunc, 1], [kExprRefFunc, 2], [kExprRefFunc, 3]],
  kWasmFuncRef);
builder.addTag(makeSig([], []));

builder.addFunction(undefined, 1 )
  .addLocals(kWasmI64, 1).addLocals(wasmRefNullType(4), 1)
  .addLocals(kWasmI32, 2).addLocals(kWasmI64, 1)
  .addLocals(wasmRefNullType(4), 1).addLocals(kWasmI32, 1)
  .addLocals(kWasmI64, 3).addLocals(kWasmI32, 1).addLocals(kWasmI64, 1)
  .addLocals(kWasmI32, 1).addLocals(kWasmI64, 1)
  .addLocals(wasmRefNullType(4), 1).addLocals(kWasmI64, 1)
  .addBodyWithEnd([


kExprRefFunc, 0x01,  
kExprBlock, 0x06,  
  kExprDrop,  
  kExprI32Const, 0xf1, 0x00,  
  kExprI64Const, 0x00,  
  kExprI64Const, 0xe1, 0x00,  
  kExprI64Const, 0x00,  
  kExprI64Const, 0xef, 0x00,  
  kExprI32Const, 0x00,  
  kSimdPrefix, kExprI8x16Splat,  
  kExprI32Const, 0xf0, 0x02,  
  kSimdPrefix, kExprI64x2ShrU, 0x01,  
  kSimdPrefix, kExprI32x4BitMask, 0x01,  
  kExprI32Const, 0x00,  
  kExprRefFunc, 0x00,  
  kGCPrefix, kExprStructNew, 0x00,  
  kExprI32Const, 0x00,  
  kExprRefFunc, 0x00,  
  kExprI64Const, 0x00,  
  kExprRefNull, 0x04,  
  kExprI32Const, 0x00,  
  kGCPrefix, kExprStructNew, 0x00,  
  kExprRefNull, 0x04,  
  kExprI64Const, 0x00,  
  kExprI64Const, 0x00,  
  kGCPrefix, kExprStructNew, 0x00,  
  kExprI32Const, 0x00,  
  kExprRefNull, 0x6e,  
  kExprBrOnNull, 0x00,  
  kExprDrop,  
  kExprDrop,  
  kExprDrop,  
  kExprDrop,  
  kExprDrop,  
  kExprDrop,  
  kExprDrop,  
  kExprDrop,  
  kExprDrop,  
  kExprDrop,  
  kExprDrop,  
  kExprDrop,  
  kExprDrop,  
  kExprDrop,  
  kExprDrop,  
  kExprDrop,  
  kExprI64ShrU,  
  kExprI64Ror,  
  kExprI64ShrS,  
  kExprI64Const, 0x01,  
  kSimdPrefix, kExprS128Const, 0xff, 0x01, 0x0d, 0x00, 0x70, 0x70, 0x71, 0x3a, 0x00, 0x00, 0x00, 0x73, 0x01, 0x6f, 0x70, 0x71,  
  kSimdPrefix, kExprI64x2ExtractLane, 0x01,  
  kExprI64ShrS,  
  kExprI64Ror,  
  kAtomicPrefix, kExprI64AtomicStore16U, 0x01, 0xef, 0xc2, 0xbd, 0x8b, 0x06,  
  kSimdPrefix, kExprS128Const, 0x71, 0x6f, 0x61, 0x61, 0x6f, 0x70, 0x00, 0x01, 0x70, 0x00, 0x71, 0x70, 0x3a, 0x70, 0x00, 0x00,  
  kSimdPrefix, kExprI32x4BitMask, 0x01,  
  kExprRefNull, 0x03,  
  kExprRefNull, 0x70,  
  kExprRefNull, 0x6f,  
  kExprI32Const, 0x01,  
  kExprCallIndirect, 0x02, 0x00,  
  kExprDrop,  
  kExprI32Const, 0x00,  
  kExprI32Const, 0x00,  
  kExprI32Const, 0x00,  
  kExprCallIndirect, 0x01, 0x00,  
  kExprNop,  
  kExprI64Const, 0xe1, 0x00,  
  kExprI32Const, 0x00,  
  kAtomicPrefix, kExprI64AtomicLoad, 0x02, 0xe0, 0x8c, 0xbc, 0x03,  
  kExprI64ShrU,  
  kAtomicPrefix, kExprI64AtomicStore8U, 0x00, 0x80, 0x82, 0x7c,  
  kExprBlock, 0x40,  
    kExprEnd,  
  kExprBlock, 0x7f,  
    kExprI32Const, 0x00,  
    kExprEnd,  
  kExprI32Const, 0xe3, 0x00,  
  kSimdPrefix, kExprI8x16Splat,  
  kExprI32Const, 0xe3, 0x00,  
  kSimdPrefix, kExprI8x16Splat,  
  kSimdPrefix, kExprI32x4BitMask, 0x01,  
  kSimdPrefix, kExprI64x2ShrS, 0x01,  
  kSimdPrefix, kExprI32x4BitMask, 0x01,  
  kExprRefFunc, 0x00,  
  kGCPrefix, kExprStructNew, 0x00,  
  kExprI32Const, 0x00,  
  kGCPrefix, kExprStructNew, 0x00,  
  kExprRefNull, 0x6e,  
  kExprI32Const, 0x00,  
  kExprI32Const, 0x00,  
  kExprBlock, 0x07,  
    kExprDrop,  
    kExprDrop,  
    kExprDrop,  
    kExprDrop,  
    kExprRefFunc, 0x00,  
    kExprI64Const, 0x00,  
    kExprRefNull, 0x04,  
    kExprI32Const, 0x00,  
    kGCPrefix, kExprStructNew, 0x00,  
    kExprRefNull, 0x04,  
    kExprI64Const, 0x00,  
    kExprI64Const, 0x00,  
    kGCPrefix, kExprStructNew, 0x00,  
    kExprI32Const, 0x00,  
    kExprEnd,  
  kExprEnd,  
kExprBlock, 0x08,  
  kExprDrop,  
  kExprDrop,  
  kExprDrop,  
  kExprDrop,  
  kExprDrop,  
  kExprDrop,  
  kExprDrop,  
  kExprDrop,  
  kExprDrop,  
  kExprDrop,  
  kExprDrop,  
  kExprDrop,  
  kExprDrop,  
  kExprDrop,  
  kExprNop,  
  kExprEnd,  
kExprEnd,  
]);

builder.addFunction(undefined, 2 )
  .addBodyWithEnd([


kGCPrefix, kExprStructNew, 0x00,  
kExprEnd,  
]);

builder.addFunction(undefined, 3 )
  .addBodyWithEnd([


kExprRefFunc, 0x00,  
kExprRefNull, 0x02,  
kExprI64Const, 0x00,  
kExprRefNull, 0x02,  
kExprI64Const, 0x00,  
kExprEnd,  
]);

builder.addFunction(undefined, 4 )
  .addBodyWithEnd([


kExprRefNull, 0x02,  
kExprRefNull, 0x02,  
kExprF64Const, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,  
kExprRefNull, 0x02,  
kExprI32Const, 0x00,  
kExprRefNull, 0x02,  
kExprI32Const, 0x00,  
kExprI32Const, 0x00,  
kExprRefNull, 0x02,  
kExprI32Const, 0x00,  
kExprI32Const, 0x00,  
kExprI64Const, 0x00,  
kExprI32Const, 0x00,  
kExprI32Const, 0x00,  
kSimdPrefix, kExprI8x16Splat,  
kExprRefNull, 0x02,  
kExprEnd,  
]);
builder.addExport('main', 0);
const instance = builder.instantiate();
assertEquals(0, instance.exports.main(1, 2, 3));
