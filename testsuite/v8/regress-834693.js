





d8.file.execute("test/mjsunit/wasm/wasm-module-builder.js");

var module = new WasmModuleBuilder();
module.addMemory();
module.addFunction("main", kSig_v_v)
  .addBody([
    kExprI32Const, 20,
    kExprI32Const, 29,
    kExprMemoryGrow, kMemoryZero,
    kExprI32StoreMem, 0, 0xFF, 0xFF, 0x7A])
  .exportAs("main");
var instance = module.instantiate();
assertTraps(kTrapMemOutOfBounds, instance.exports.main);
