



d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
sig0 = makeSig([], [kWasmI32]);
builder.addFunction(undefined, sig0).addLocals(kWasmI64, 1).addBody([
  kExprLoop, kWasmI32,                    
  kExprF32Const, 0x00, 0x00, 0x00, 0x00,  
  kExprLocalGet, 0x00,                    
  kExprF32SConvertI64,                    
  kExprF32Ge,                             
  kExprEnd,                               
]);
builder.addExport('main', 0);
const module = builder.instantiate();
assertEquals(1, module.exports.main());
