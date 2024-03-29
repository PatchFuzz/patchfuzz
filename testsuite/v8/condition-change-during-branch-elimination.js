



d8.file.execute("test/mjsunit/wasm/wasm-module-builder.js");





(function foo() {
  let builder = new WasmModuleBuilder();

  builder.addFunction("main", kSig_v_l)
    .addLocals(kWasmI32, 2)
    .addBody([
      kExprLoop, kWasmVoid,
        kExprLocalGet, 0x02,
        kExprLocalTee, 0x01,
        kExprIf, kWasmVoid,
        kExprElse,
          kExprLoop, kWasmVoid,
            kExprLoop, kWasmVoid,
              kExprLocalGet, 0x01,
              kExprIf, kWasmVoid,
              kExprElse,
                kExprLocalGet, 0x02,
                kExprBrIf, 0x04,
                kExprBr, 0x01,
                kExprEnd,
              kExprLocalGet, 0x00,
              kExprCallFunction, 0x01,
              kExprLocalTee, 0x02,
              kExprBrIf, 0x00,
              kExprEnd,
            kExprLocalGet, 0x01,
            kExprBrIf, 0x00,
            kExprEnd,
          kExprEnd,
        kExprBr, 0x00,
        kExprEnd])
    .exportAs("main");

  builder.addFunction("callee", kSig_i_l)
         .addBody([kExprLocalGet, 0, kExprI32ConvertI64]);

  let module = new WebAssembly.Module(builder.toBuffer());
  let instance = new WebAssembly.Instance(module);
})();
