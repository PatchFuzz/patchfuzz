



d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addGlobal(kWasmI32, 1);
sig0 = makeSig([kWasmI32, kWasmI32, kWasmI32], [kWasmI32]);
builder.addFunction(undefined, sig0)
  .addBody([
kExprF32Const, 0x01, 0x00, 0x00, 0x00,
kExprF32Const, 0x00, 0x00, 0x00, 0x00,
kExprF32Eq,  
kExprF32Const, 0xc9, 0xc9, 0x69, 0xc9,
kExprF32Const, 0xc9, 0xc9, 0xc9, 0x00,
kExprF32Eq,  
kExprIf, kWasmF32,
  kExprF32Const, 0x00, 0x00, 0x00, 0x00,
kExprElse,   
  kExprF32Const, 0x00, 0x00, 0x00, 0x00,
  kExprEnd,   
kExprF32Const, 0xc9, 0x00, 0x00, 0x00,
kExprF32Const, 0xc9, 0xc9, 0xc9, 0x00,
kExprF32Const, 0xc9, 0xc9, 0xa0, 0x00, 
kExprF32Eq,  
kExprIf, kWasmF32,
  kExprF32Const, 0x00, 0x00, 0x00, 0x00,
kExprElse,
  kExprF32Const, 0x00, 0x00, 0x00, 0x00,
  kExprEnd,  
kExprF32Eq,  
kExprIf, kWasmF32,
  kExprF32Const, 0x00, 0x00, 0x00, 0x00,
kExprElse,
  kExprF32Const, 0x00, 0x00, 0x00, 0x00,
  kExprEnd,   
kExprF32Const, 0xc9, 0xc9, 0xff, 0xff,  
kExprF32Eq,  
kExprDrop,
kExprDrop, 
kExprI32Const, 1, 
kExprI32GeU,  
          ]);
builder.addExport('main', 0);
const instance = builder.instantiate();
assertEquals(0, instance.exports.main(1, 2, 3));
