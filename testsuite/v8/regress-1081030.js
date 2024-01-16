



d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addType(makeSig([kWasmI32, kWasmI32, kWasmI32], [kWasmI32]));

builder.addFunction(undefined, 0 ).addBodyWithEnd([
  
  
  kExprF32Const, 0xf8, 0xf8, 0xf8, 0xf8,
  kSimdPrefix, kExprF32x4Splat,         
  kExprF32Const, 0xf8, 0xf8, 0xf8, 0xf8,
  kSimdPrefix, kExprF32x4Splat,         
  kSimdPrefix, kExprF32x4Min, 0x01,     
  kSimdPrefix, kExprV128AnyTrue, 0x01,  
  kExprEnd,                             
]);
builder.addExport('main', 0);
const instance = builder.instantiate();
assertEquals(1, instance.exports.main(1, 2, 3));
