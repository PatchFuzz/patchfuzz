



d8.file.execute("test/mjsunit/wasm/wasm-module-builder.js");

(function() {
  var builder = new WasmModuleBuilder();
  builder.addMemory(16, 32, false);
  builder.addFunction("test", kSig_i_iii)
      .addBodyWithEnd([
        
        kExprI64Const, 0,
        kExprI64Const, 0x1,
        kExprI64Clz,
        kExprI64Sub,
        kExprI64Const, 0x10,
        kExprI64Const, 0x1b,
        kExprI64Shl,
        kExprI64Sub,
        kExprI64Popcnt,
        kExprI32ConvertI64,
        kExprEnd,   
      ])
            .exportFunc();
  var module = builder.instantiate();
  const result = module.exports.test(1, 2, 3);
  assertEquals(58, result);
})();
