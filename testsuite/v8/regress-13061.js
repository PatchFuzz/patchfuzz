





d8.file.execute("test/mjsunit/wasm/wasm-module-builder.js");

let builder = new WasmModuleBuilder();

builder.addFunction('repro', kSig_v_v)
  .exportFunc()
  .addLocals(wasmRefNullType(kWasmStructRef), 1)
  .addBody([
    kExprI32Const, 0,
    kExprIf, kWasmVoid,
      kExprLoop, kWasmVoid,
        kExprCallFunction, 0,
        kExprLocalGet, 0,
        kExprRefAsNonNull,
        kExprLocalSet, 0,
        kExprI32Const, 0,
        kExprBrIf, 0,
      kExprEnd,
    kExprEnd,
  ]);

let instance = builder.instantiate();
instance.exports.repro();
