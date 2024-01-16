





d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');





const builder = new WasmModuleBuilder();
builder.addType(makeSig([kWasmI32, kWasmI32, kWasmI32], [kWasmI32]));

builder.addFunction(undefined, 0 ).addBodyWithEnd([
  
  
  kExprI32Const, 0x00,             
  kSimdPrefix,   kExprI8x16Splat,  
  kExprI32Const, 0x00,             
  kSimdPrefix,   kExprI8x16Splat,  
  kSimdPrefix,   kExprI8x16Shuffle,
  0x00,          0x15,
  0x00,          0x00,
  0x00,          0x00,
  0x00,          0x00,
  0x00,          0x00,
  0x00,          0x00,
  0x00,          0x00,
  0x00,          0x00,  
  kSimdPrefix,   kExprI64x2BitMask,
  0x01,      
  kExprEnd,  
]);
builder.addExport('main', 0);
const instance = builder.instantiate();
assertEquals(0, instance.exports.main(1, 2, 3));
