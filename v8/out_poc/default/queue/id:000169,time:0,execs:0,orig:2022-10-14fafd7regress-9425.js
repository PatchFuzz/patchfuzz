





var builder = new WasmModuleBuilder();

builder.addMemory(1, 1,  false,  true);

builder.addFunction('test', kSig_v_v).addBody([
  kExprI32Const, 0,                         
  kExprI64Const, 0,                         
  kExprI64Const, 0,                         
  kAtomicPrefix, kExprI64AtomicWait, 3, 0,  
  kExprDrop,                                
]);

builder.instantiate();
