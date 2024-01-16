



d8.file.execute("test/mjsunit/wasm/wasm-module-builder.js");

let builder = new WasmModuleBuilder();
let sig = makeSig(
  [kWasmS128, kWasmS128, kWasmS128, kWasmF64,  
   kWasmS128, kWasmS128,  
   kWasmS128,  
   kWasmF64],  
  [kWasmF64]);

let func = builder.addFunction('crash', sig).addBody([
  kExprLocalGet, 7
]);

builder.addFunction('main', makeSig([], [kWasmF64])).exportFunc().addBody([
  ...wasmS128Const(Math.PI, Math.E),
  ...wasmS128Const(Math.PI, Math.E),
  ...wasmS128Const(Math.PI, Math.E),
  ...wasmF64Const(Infinity),
  ...wasmS128Const(Math.PI, Math.E),
  ...wasmS128Const(Math.PI, Math.E),
  ...wasmS128Const(Math.PI, Math.E),
  ...wasmF64Const(42),
  kExprCallFunction, func.index,
]);

assertEquals(42, builder.instantiate().exports.main());
