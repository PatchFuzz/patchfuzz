














d8.file.execute("test/mjsunit/wasm/wasm-module-builder.js");

var builder = new WasmModuleBuilder();

builder.addGlobal(kWasmI32, true, wasmI32Const(1));

builder.addFunction("main", kSig_i_i)
  .addBody([
    kExprLocalGet, 0,
    kExprIf, kWasmI32,
      kExprUnreachable,
    kExprElse,
      kExprLoop, kWasmVoid,
        kExprBlock, kWasmVoid,
          kExprLocalGet, 0,
          kExprIf, kWasmVoid,
            kExprLocalGet, 0,
            kExprBrIf, 1,
            kExprI32Const, 7,
            kExprLocalSet, 0,
          kExprEnd,
          kExprGlobalGet, 0,
          kExprIf, kWasmVoid,
            kExprI32Const, 0, kExprReturn,
          kExprEnd,
          kExprBr, 1,
        kExprEnd,
      kExprEnd,
      kExprI32Const, 0,
    kExprEnd,
    kExprLocalGet, 0,
    kExprI32DivU])
  .exportFunc();

let instance = builder.instantiate();
assertEquals(0, instance.exports.main(0));
