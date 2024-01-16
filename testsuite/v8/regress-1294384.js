





d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addType(makeSig([], [kWasmI32]));
builder.addType(makeSig([kWasmF64, kWasmF32, kWasmF32, kWasmF32,
                         kWasmF32, kWasmF64, kWasmF64],
                        [kWasmF32, kWasmF32, kWasmF32, kWasmF32, kWasmF32,
                         kWasmF32, kWasmF32, kWasmF32, kWasmF32, kWasmF32]));



builder.addFunction(undefined, 0 )
  .addBody([
    
    kExprF64Const, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,  
    kExprF32Const, 0x00, 0x00, 0x00, 0x00,  
    kExprF32Const, 0x00, 0x00, 0x00, 0x00,  
    kExprF32Const, 0x00, 0x00, 0x00, 0x00,  
    kExprF32Const, 0x00, 0x00, 0x00, 0x00,  
    kExprF64Const, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,  
    kExprF64Const, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,  
    kExprCallFunction, 0x01,
    kExprDrop,  
    kExprDrop,  
    kExprDrop,  
    kExprDrop,  
    kExprDrop,  
    kExprDrop,  
    kExprDrop,  
    kExprDrop,  
    kExprDrop,  
    kExprI32SConvertF32]);  


builder.addFunction(undefined, 1 )
  .addBody([
    
    kExprF32Const, 0x04, 0x04, 0x05, 0x04,  
    kExprLoop, 0x40,  
      kExprEnd,  
    kExprF32Ceil,  
    kExprF32Const, 0x08, 0x00, 0x00, 0x00,  
    kExprF32Const, 0x00, 0x00, 0x00, 0x00,  
    kExprF32Const, 0x00, 0x00, 0x00, 0x00,  
    kExprF32Const, 0x00, 0x00, 0x00, 0x00,  
    kExprF32Const, 0x00, 0x00, 0x00, 0x00,  
    kExprF32Const, 0x00, 0x00, 0x00, 0x00,  
    kExprF32Const, 0x00, 0x00, 0x00, 0x00,  
    kExprF32Const, 0x00, 0x00, 0x00, 0x00,  
    kExprF32Const, 0x00, 0x00, 0x00, 0x00,  
    kExprF32Const, 0x00, 0x00, 0x00, 0x00,  
    kExprF32Const, 0x00, 0x00, 0x00, 0x00,  
    kExprF32Const, 0x00, 0x00, 0x00, 0x00,  
    kExprF32Const, 0x00, 0x00, 0x00, 0x00,  
    kExprF32Const, 0x00, 0x00, 0x00, 0x00,  
    kExprI32Const, 0x00,  
    kExprBrIf, 0x00,  
    kExprDrop,  
    kExprDrop,  
    kExprDrop,  
    kExprDrop,  
    kExprDrop,  
    kExprDrop,  
    kExprDrop,  
    kExprDrop,  
    kExprDrop,  
    kExprDrop,  
    kExprDrop,  
    kExprDrop,  
    kExprDrop,  
    kExprF32Ceil,  
    kExprF32Ceil,  
    kExprF32Const, 0xed, 0xed, 0xed, 0xed,  
    kExprF32Const, 0x00, 0x00, 0x00, 0x00,  
    kExprF32Const, 0x00, 0x00, 0x00, 0x00,  
    kExprF32Const, 0x00, 0x00, 0x00, 0x00,  
    kExprF32Const, 0x65, 0x73, 0x61, 0x00,  
    kExprF32Const, 0x00, 0x00, 0x00, 0x00,  
    kExprF32Const, 0x00, 0x00, 0x00, 0x00,  
    kExprI64Const, 0x00,  
    kExprF32SConvertI64]);  

builder.addExport('main', 0);
const instance = builder.instantiate();
assertEquals(1, instance.exports.main());
