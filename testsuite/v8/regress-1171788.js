





d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addType(makeSig(
    [
      kWasmI32, kWasmI32, kWasmI32, kWasmI32, kWasmFuncRef, kWasmI32, kWasmI32,
      kWasmI32, kWasmI32, kWasmI32
    ],
    [kWasmF64]));

builder.addFunction(undefined, 0 )
  .addBodyWithEnd([


kExprLocalGet, 0x03,  
kExprLocalGet, 0x08,  
kExprLocalGet, 0x00,  
kExprI32Const, 0x01,  
kExprLocalGet, 0x04,  
kExprLocalGet, 0x05,  
kExprLocalGet, 0x06,  
kExprLocalGet, 0x00,  
kExprLocalGet, 0x07,  
kExprLocalGet, 0x06,  
kExprCallFunction, 0x00,  
kExprLocalGet, 0x00,  
kExprLocalGet, 0x01,  
kExprLocalGet, 0x00,  
kExprLocalGet, 0x08,  
kExprLocalGet, 0x01,  
kExprLocalGet, 0x00,  
kExprLocalGet, 0x01,  
kExprLocalGet, 0x07,  
kExprLocalGet, 0x08,  
kExprLocalGet, 0x09,  
kExprCallFunction, 0x00,  
kExprUnreachable,  
kExprEnd,  
]);
assertThrows(function() { builder.instantiate(); }, WebAssembly.CompileError);
