



d8.file.execute("test/mjsunit/wasm/wasm-module-builder.js");

(function() {
  "use asm";
  var builder = new WasmModuleBuilder();
  builder.addMemory(0, 5, true);
  builder.addFunction("regression_710844", kSig_v_v)
    .addBody([
        kExprI32Const, 0x03,
        kExprNop,
        kExprMemoryGrow, 0x00,
        kExprI32Const, 0x13,
        kExprNop,
        kExprI32StoreMem8, 0x00, 0x10
        ]).exportFunc();
 let instance = builder.instantiate();
 instance.exports.regression_710844();
})();
