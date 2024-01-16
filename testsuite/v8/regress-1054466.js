



d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addType(makeSig([kWasmI32, kWasmI32, kWasmI32], [kWasmI32]));

builder.addFunction(undefined, 0 )
  .addLocals(kWasmI32, 2).addLocals(kWasmF32, 2)
  .addBodyWithEnd([


kExprI32Const, 0x00,  
kExprI32Const, 0x00,  
kExprI32Const, 0xf9, 0x00,  
kExprI32Ior,  
kExprI32Eqz,  
kExprI32Add,  
kSimdPrefix, kExprI32x4Splat,  
kExprF32Const, 0x46, 0x5d, 0x00, 0x00,  
kExprI32Const, 0x83, 0x01,  
kExprI32Const, 0x83, 0x01,  
kExprI32Const, 0x83, 0x01,  
kExprI32Add,  
kExprI32Add,  
kExprIf, kWasmI32,  
  kExprI32Const, 0x00,  
kExprElse,  
  kExprI32Const, 0x00,  
  kExprEnd,  
kExprIf, kWasmI32,  
  kExprI32Const, 0x00,  
kExprElse,  
  kExprI32Const, 0x00,  
  kExprEnd,  
kExprF32ReinterpretI32,  
kExprF32Max,  
kSimdPrefix, kExprF32x4Splat,  
kExprI32Const, 0x83, 0x01,  
kSimdPrefix, kExprI32x4Splat,  
kSimdPrefix, kExprI32x4Eq,  
kSimdPrefix, kExprI32x4Eq,  
kSimdPrefix, kExprV128AnyTrue,  
kExprEnd,  
]);
builder.addExport('main', 0);
const instance = builder.instantiate();
print(instance.exports.main(1, 2, 3));
