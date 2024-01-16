



d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

var builder = new WasmModuleBuilder();
builder.addMemory(0, 0, false);
builder.addFunction('f', kSig_i_v)
    .addBody([kExprMemorySize, kMemoryZero])
    .exportFunc();
var instance = builder.instantiate();
instance.exports.f();
