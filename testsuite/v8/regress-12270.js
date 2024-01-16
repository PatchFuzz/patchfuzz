





d8.file.execute("test/mjsunit/wasm/wasm-module-builder.js");

(function Regress12270() {
  print(arguments.callee.name);
  let builder = new WasmModuleBuilder();
  let sig = makeSig([], [kWasmF32, kWasmF64, kWasmF64, kWasmF64, kWasmF64, kWasmF64, kWasmF64, kWasmF64, kWasmF64, kWasmF64, kWasmF64]);
  let sig_index = builder.addType(sig);
  builder.addFunction("main", sig).addBody([
      kExprI32Const, 0,
      kExprIf, sig_index,
        kExprF32Const, 0x0, 0x0, 0x0, 0x0,
        kExprBlock, kWasmVoid,
          kExprCallFunction, 0,
          kExprBr, 1,
        kExprEnd,
        kExprUnreachable,
      kExprElse,
        kExprF32Const, 0x00, 0x00, 0x80, 0x3f, 
        kExprF64Const, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xf0, 0x3f, 
        kExprF64Const, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x40, 
        kExprF64Const, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0,
        kExprF64Const, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0,
        kExprF64Const, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0,
        kExprF64Const, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0,
        kExprF64Const, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0,
        kExprF64Const, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0,
        kExprF64Const, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0,
        kExprF64Const, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0,
      kExprEnd
  ]).exportFunc();
  let instance = builder.instantiate();
  assertEquals(1.0, instance.exports.main()[1]);
})();
