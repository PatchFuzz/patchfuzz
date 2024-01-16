





d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addType(makeSig([kWasmF32, kWasmF32, kWasmI32, kWasmI32, kWasmI32, kWasmExternRef, kWasmI32, kWasmI32, kWasmI32, kWasmI32], [kWasmI64]));

builder.addFunction(undefined, 0 )
  .addBodyWithEnd([


]);

builder.addFunction(undefined, 0 )
  .addBodyWithEnd([


kExprLocalGet, 0x00,  
kExprLocalGet, 0x01,  
kExprLocalGet, 0x02,  
kExprLocalGet, 0x03,  
kExprI32Const, 0x05,  
kExprLocalGet, 0x05,  
kExprLocalGet, 0x06,  
kExprLocalGet, 0x07,  
kExprI32Const, 0x5b,  
kExprI32Const, 0x30,  
kExprCallFunction, 0x01,  
kExprLocalGet, 0x00,  
kExprLocalGet, 0x01,  
kExprLocalGet, 0x02,  
kExprLocalGet, 0x03,  
kExprLocalGet, 0x07,  
kExprLocalGet, 0x05,  
kExprLocalGet, 0x06,  
kExprLocalGet, 0x07,  
kExprI32Const, 0x7f,  
kExprI64DivS,  
kExprF64Eq,  
kExprI32DivU,  
kExprTableGet, 0x7f,  
kExprI64ShrS,  
]);
assertThrows(function() { builder.instantiate(); }, WebAssembly.CompileError);
