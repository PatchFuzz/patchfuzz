





d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addType(makeSig([kWasmI32, kWasmI64, kWasmF64, kWasmI64], []));
builder.addType(makeSig([kWasmF64], [kWasmF64]));

builder.addFunction(undefined, 0 )
  .addBodyWithEnd([


kExprF64Const, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xf0, 0x3f,  
kExprF64Const, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xf0, 0x3f,  
kExprLocalGet, 0x00,  
kExprI32Const, 0x82, 0x7f,  
kExprI32DivS,  
kExprSelect,  
kExprCallFunction, 0x01,  
kExprDrop,  
kExprEnd,  
]);

builder.addFunction(undefined, 1 )
  .addBodyWithEnd([


kExprF64Const, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xf0, 0x3f,  
kExprEnd,  
]);
const instance = builder.instantiate();
