



load('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addMemory(16, 32, false);
builder.addType(makeSig([kWasmI32, kWasmI32, kWasmI32], [kWasmI32]));
builder.addFunction(undefined, 0 ).addBody([
  kExprI64Const,    0x7a,                          
  kExprI64Const,    0x42,                          
  kExprI64Const,    0xb4, 0xbd, 0xeb, 0xb5, 0x72,  
  kExprI32Const,    0x37,                          
  kExprI32Const,    0x67,                          
  kExprI32Const,    0x45,                          
  kExprLoop,        0,                             
  kExprLocalGet,    0,                             
  kExprBrIf,        1,                             
  kExprLocalGet,    1,                             
  kExprLocalGet,    0,                             
  kExprMemorySize,  0,                             
  kExprLocalTee,    0,                             
  kExprLocalGet,    0,                             
  kExprBrIf,        0,                             
  kExprUnreachable,                                
  kExprEnd,                                        
  kExprUnreachable,                                
]);
builder.addExport('main', 0);
const instance = builder.instantiate();
assertEquals(16, instance.exports.main(0, 0, 0));
