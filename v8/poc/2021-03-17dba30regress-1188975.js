





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
  print(() => builder.instantiate(), WebAssembly.CompileError);
})();
