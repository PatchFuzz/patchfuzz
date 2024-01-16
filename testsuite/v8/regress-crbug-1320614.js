





d8.file.execute("test/mjsunit/wasm/wasm-module-builder.js");

var builder = new WasmModuleBuilder();
let gc_func = builder.addImport("imports", "gc", { params: [], results: [] });
let callee = builder.addFunction('callee', {
  params: [
    
    kWasmExternRef, kWasmExternRef, kWasmExternRef, kWasmExternRef,
    kWasmExternRef,
    
    kWasmI32, kWasmExternRef,
  ],
  results: [kWasmI64]  
}).addBody([kExprCallFunction, gc_func, kExprI64Const, 0]);

builder.addFunction("main", { params: [], results: [] }).addBody([
  kExprRefNull, kExternRefCode,
  kExprRefNull, kExternRefCode,
  kExprRefNull, kExternRefCode,
  kExprRefNull, kExternRefCode,
  kExprRefNull, kExternRefCode,
  kExprI32Const, 0xf,
  kExprRefNull, kExternRefCode,
  kExprCallFunction, callee.index, kExprDrop
]).exportFunc();

var instance = builder.instantiate({ imports: { gc: () => { gc(); } } });
instance.exports.main();
