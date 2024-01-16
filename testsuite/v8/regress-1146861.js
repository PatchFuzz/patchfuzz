



d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addGlobal(kWasmI32, 1);
builder.addType(makeSig([], [kWasmF64]));

builder.addFunction(undefined, 0 )
  .addLocals(kWasmI32, 8).addLocals(kWasmI64, 3)
  .addBodyWithEnd([


kExprGlobalGet, 0x00,  
kExprLocalSet, 0x00,  
kExprI32Const, 0x00,  
kExprI32Eqz,  
kExprLocalSet, 0x01,  
kExprGlobalGet, 0x00,  
kExprLocalSet, 0x02,  
kExprI32Const, 0x01,  
kExprI32Const, 0x01,  
kExprI32Sub,  
kExprLocalSet, 0x03,  
kExprGlobalGet, 0x00,  
kExprLocalSet, 0x04,  
kExprI32Const, 0x00,  
kExprI32Eqz,  
kExprLocalSet, 0x05,  
kExprGlobalGet, 0x00,  
kExprLocalSet, 0x06,  
kExprI32Const, 0x00,  
kExprI32Const, 0x01,  
kExprI32Sub,  
kExprLocalSet, 0x07,  
kExprBlock, kWasmVoid,  
  kExprI32Const, 0x00,  
  kExprIf, kWasmVoid,  
    kExprLocalGet, 0x0a,  
    kExprLocalSet, 0x08,  
  kExprElse,  
    kExprNop,  
    kExprEnd,  
  kExprLocalGet, 0x08,  
  kExprLocalSet, 0x09,  
  kExprLocalGet, 0x09,  
  kExprI64Const, 0xff, 0x01,  
  kExprI64Add,  
  kExprDrop,  
  kExprEnd,  
kExprF64Const, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xf0, 0x3f,  
kExprEnd,  
]);
builder.instantiate();
