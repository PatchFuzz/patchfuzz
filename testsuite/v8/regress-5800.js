



d8.file.execute("test/mjsunit/wasm/wasm-module-builder.js");

(function AddTest() {
  let builder = new WasmModuleBuilder();

  builder.addFunction("main", kSig_i_v)
    .addBody([
      kExprBlock, kWasmVoid,
        kExprI64Const, 0,
        
        
        
        
        kExprI64Const, 0x80, 0x80, 0x80, 0x80, 0x10,
        kExprI64Add,
        kExprI64Eqz,
        kExprBrIf, 0,
        kExprI32Const, 0,
        kExprReturn,
      kExprEnd,
      kExprI32Const, 0
    ])
    .exportFunc();
  let module = builder.instantiate();
  assertEquals(0, module.exports.main());
})();

(function SubTest() {
  let builder = new WasmModuleBuilder();

  builder.addFunction("main", kSig_i_v)
    .addBody([
      kExprBlock, kWasmVoid,
        kExprI64Const, 0,
        
        
        
        
        kExprI64Const, 0x80, 0x80, 0x80, 0x80, 0x10,
        kExprI64Sub,
        kExprI64Eqz,
        kExprBrIf, 0,
        kExprI32Const, 0,
        kExprReturn,
      kExprEnd,
      kExprI32Const, 0
    ])
    .exportFunc();
  let module = builder.instantiate();
  assertEquals(0, module.exports.main());
})();
