




load("test/mjsunit/wasm/wasm-module-builder.js");

var builder = new WasmModuleBuilder();

builder.addMemory(1, 1,  false);

builder.addFunction("main", kSig_i_i).addBody([
    kExprLocalGet, 0,
    kExprIf, kWasmI32,
      kExprLocalGet, 0,
    kExprElse,
      kExprI32Const, 42, 
      kExprI32Const, 0,  
      kExprI32StoreMem, 0, 0,
      kExprI32Const, 11,
      kExprLocalGet, 0,
      kExprI32DivS,
    kExprEnd
  ]).exportFunc();

var instance = builder.instantiate({});
