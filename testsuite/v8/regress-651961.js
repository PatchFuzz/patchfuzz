





d8.file.execute("test/mjsunit/wasm/wasm-module-builder.js");

(function() {
  var builder = new WasmModuleBuilder();
  builder.addMemory(1, 32, false);
  builder.addFunction("foo", kSig_i_v)
    .addBody([
              kExprMemorySize, kMemoryZero,
              kExprI32Const, 0x10,
              kExprMemoryGrow, kMemoryZero,
              kExprI32Mul,
              ])
              .exportFunc();
  var module = builder.instantiate();
  var result = module.exports.foo();
  assertEquals(1, result);
})();
