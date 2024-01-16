





d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addMemory(1, 1, false, true);
builder.addDataSegment(2, [0x12, 0x00, 0x1c]);
builder.addDataSegment(17,
    [0x00, 0x00, 0x96, 0x00, 0x00, 0x00, 0xc2, 0x00, 0xb33, 0x03, 0xf6, 0x0e]);
builder.addDataSegment(41,
    [0x00, 0xdb, 0xa6, 0xa6, 0x00, 0xe9, 0x1c, 0x06, 0xac]);
builder.addDataSegment(57, [0x00, 0x00, 0x00, 0x00, 0xda, 0xc0, 0xbe]);
builder.addType(makeSig([kWasmI32], [kWasmI32]));
builder.addType(makeSig([kWasmF32], [kWasmF32]));
builder.addType(makeSig([kWasmF64], [kWasmF64]));

builder.addFunction(undefined, 0 )
  .addBodyWithEnd([


kExprF32Const, 0x00, 0x00, 0x00, 0x00,  
kExprF32Const, 0x00, 0x00, 0x00, 0x00,  
kExprF32Le,  
kExprLocalTee, 0x00,  
kExprI32Const, 0xff, 0x00,  
kAtomicPrefix, kExprAtomicNotify, 0x02, 0x03,  
kExprI32LoadMem16S, 0x00, 0x02,  
kExprIf, kWasmVoid,  
  kExprLocalGet, 0x00,  
  kExprReturn,  
kExprElse,  
  kExprUnreachable,  
  kExprEnd,  
kExprUnreachable,  
kExprEnd,  
]);
builder.addExport('func_194', 0);
let instance = builder.instantiate();

assertEquals(1, instance.exports.func_194(0));
