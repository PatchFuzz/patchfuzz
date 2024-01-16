





d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addType(makeSig([], [kWasmF32]));
builder.addFunction(undefined, 0 )
  .addLocals(kWasmI32, 1)
  .addBodyWithEnd([


kExprLoop, 0x7d,  
  kExprI32Const, 0x9a, 0x7f,  
  kExprI32Const, 0x01,  
  kExprLocalGet, 0x00,  
  kExprSelect,  
  kExprLocalTee, 0x00,  
  kExprBrIf, 0x00,  
  kExprF32Const, 0x4e, 0x03, 0xf1, 0xff,  
  kExprEnd,  
kExprEnd,  
]);
builder.toModule();
