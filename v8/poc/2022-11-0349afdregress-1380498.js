







const builder = new WasmModuleBuilder();
builder.addType(makeSig([kWasmI32, kWasmI32, kWasmI32], [kWasmI32]));
builder.addMemory(16, 32, false);

builder.addFunction(undefined, 0 )
  .addBodyWithEnd([


kExprI32Const, 0x65,  
kExprI32Const, 0x61,  
kExprI64Const, 0x42,  
kAtomicPrefix, kExprI32AtomicWait, 0x00, 0x0b,  
]);
builder.addExport('main', 0);
print(function() { builder.instantiate(); }, WebAssembly.CompileError);
