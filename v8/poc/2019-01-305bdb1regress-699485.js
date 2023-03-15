







(function() {
"use asm";
var builder = new WasmModuleBuilder();
builder.addMemory(0, 5, false);
builder.addFunction("regression_699485", kSig_i_v)
  .addBody([
      kExprI32Const, 0x04,
      kExprNop,
      kExprMemoryGrow, 0x00,
      ]).exportFunc();
let module = builder.instantiate();
print(0, module.exports.regression_699485());
})();
