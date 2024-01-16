



d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

let builder = new WasmModuleBuilder();
builder
    .addMemory()
    .addFunction("main", kSig_v_v)
    .addBody([kExprI32Const, 4,
              kExprI32Const, 8,
              kExprI32StoreMem, 0, 16])
    .exportAs("main");
let instance = builder.instantiate();
assertTraps(kTrapMemOutOfBounds, instance.exports.main);
