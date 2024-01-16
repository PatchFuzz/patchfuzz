



d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addMemory(16, 32, false);
builder.addType(makeSig([kWasmI32, kWasmI32, kWasmI32], [kWasmI32]));

builder.addFunction(undefined, 0 ).addBodyWithEnd([
  
  
  kExprI32Const, 0x00,  
  kExprMemoryGrow, 0x00,  
  kExprI32Const, 0xd3, 0xe7, 0x03,  
  kSimdPrefix, kExprI8x16Splat,  
  kExprI32Const, 0x84, 0x80, 0xc0, 0x05,  
  kSimdPrefix, kExprI8x16Splat,  
  kExprI32Const, 0x84, 0x81, 0x80, 0xc8, 0x01,  
  kSimdPrefix, kExprI8x16Splat,  
  kExprI32Const, 0x19,  
  kSimdPrefix, kExprI8x16Splat,  
  kSimdPrefix, kExprI8x16Shuffle,
  0x00, 0x00, 0x17, 0x00, 0x04, 0x04, 0x04, 0x04,
  0x04, 0x10, 0x01, 0x00, 0x04, 0x04, 0x04, 0x04,  
  kSimdPrefix, kExprI8x16Shuffle,
  0x04, 0x00, 0x10, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,  
  kSimdPrefix, kExprI8x16LeU,  
  kSimdPrefix, kExprV128AnyTrue,  
  kExprMemoryGrow, 0x00,  
  kExprDrop,
  kExprEnd,  
]);
builder.addExport('main', 0);
builder.instantiate();
