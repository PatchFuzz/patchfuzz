



d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addGlobal(kWasmI32, true, wasmI32Const(35));
builder.addType(makeSig([], [kWasmI32]));
builder.addType(makeSig([kWasmI32, kWasmI32], [kWasmI32]));

builder.addFunction(undefined, 0 ).addBody([
  
  
  kExprI32Const, 1,  
]);

builder.addFunction(undefined, 0 ).addBody([
  
  
  kExprI32Const, 0,  
]);

builder.addFunction(undefined, 1 ).addBody([
  
  
  kExprBlock, kWasmI32,                   
  kExprF64Const, 0, 0, 0, 0, 0, 0, 0, 0,  
  kExprI32SConvertF64,                    
  kExprCallFunction, 1,                   
  kExprBrIf, 0,                           
  kExprGlobalGet, 0,                      
  kExprCallFunction, 0,                   
  kExprBrIf, 0,                           
  kExprI32ShrS,                           
  kExprEnd,                               
]);
builder.addExport('f', 2);
const instance = builder.instantiate();
assertEquals(35, instance.exports.f(0, 0));
