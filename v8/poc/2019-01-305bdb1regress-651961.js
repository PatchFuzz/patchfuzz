







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
  print(1, result);
})();
