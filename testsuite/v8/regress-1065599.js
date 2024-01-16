



d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addMemory(16, 32, false);
builder.addType(makeSig([kWasmI32, kWasmI32, kWasmI32], [kWasmI32]));

builder.addFunction(undefined, 0 ).addBodyWithEnd([
  
  
  kExprI32Const, 0xba, 0x01,          
  kSimdPrefix, kExprI16x8Splat,       
  kExprMemorySize, 0x00,              
  kSimdPrefix, kExprI16x8ShrS, 0x01,  
  kSimdPrefix, kExprV128AnyTrue,     
  kExprMemorySize, 0x00,              
  kExprI32RemS,                       
  kExprEnd,                           
]);
builder.addExport('main', 0);
const instance = builder.instantiate();
instance.exports.main(1, 2, 3);
