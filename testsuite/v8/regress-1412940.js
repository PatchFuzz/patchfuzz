





d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
 builder.addStruct([makeField(kWasmI16, true)]);
 builder.addType(makeSig([kWasmI32, kWasmI32, kWasmI32], []));
 builder.addType(makeSig(
    [], [kWasmI64, kWasmFuncRef, kWasmExternRef, wasmRefType(kWasmAnyRef)]));
builder.addFunction(undefined, 1 )
  .addLocals(kWasmI64, 1)
  .addBodyWithEnd([
kExprBlock, 2,  
  kExprI64Const, 0xd7, 0x01,  
  kExprI64Const, 0x00,  
  kExprRefNull, 0x70,  
  kExprRefNull, 0x6f,  
  kExprI32Const, 0x00,  
  kGCPrefix, kExprStructNew, 0x00,  
  kExprRefNull, 0x6e,  
  kExprBrOnNull, 0x00,  
  kExprDrop,  
  kExprDrop,  
  kExprDrop,  
  kExprDrop,  
  kExprI64Xor,  
  kExprRefNull, 0x70,  
  kExprRefNull, 0x6f,  
  kExprI32Const, 0x00,  
  kGCPrefix, kExprStructNew, 0x00,  
  kExprEnd,  
kExprUnreachable,   
kExprEnd,  
]);
builder.addExport('main', 0);
builder.toModule();
