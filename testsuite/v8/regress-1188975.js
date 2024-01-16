



d8.file.execute("test/mjsunit/wasm/wasm-module-builder.js");

(function Regress1188975() {
  print(arguments.callee.name);
  let builder = new WasmModuleBuilder();
  builder.addFunction("f", kSig_v_v)
      .addBody([
        kExprUnreachable,
        kExprTry, kWasmVoid,
        kExprElse,
        kExprCatchAll,
        kExprEnd,
      ]);
  assertThrows(() => builder.instantiate(), WebAssembly.CompileError);
})();
