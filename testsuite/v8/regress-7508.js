



d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addFunction(undefined, kSig_v_v).addLocals(kWasmI64, 1).addBody([
  kExprI64Const, 0xeb,     0xd7, 0xaf, 0xdf,
  0xbe,          0xfd,     0xfa, 0xf5, 0x6b,  
  kExprI32Const, 0,                           
  kExprIf,       kWasmI32,                    
  kExprI32Const, 0,                           
  kExprElse,                                  
  kExprI32Const, 0,                           
  kExprEnd,                                   
  kExprBrIf,     0,                           
  kExprLocalSet, 0,                           
]);
builder.instantiate();
