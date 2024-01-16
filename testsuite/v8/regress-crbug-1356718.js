



d8.file.execute("test/mjsunit/wasm/wasm-module-builder.js");

let builder = new WasmModuleBuilder();

builder.addFunction('crash', makeSig([
    kWasmF64, kWasmS128, kWasmS128, kWasmS128, kWasmS128, kWasmS128, kWasmS128,
    kWasmF64, kWasmI32
  ], [])).addBody([kExprNop]);

builder.instantiate();
