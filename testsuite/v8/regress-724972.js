



d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

var builder = new WasmModuleBuilder();
builder.addMemory(0, 0, true);
var instance = builder.instantiate();
instance.exports.memory.buffer;
