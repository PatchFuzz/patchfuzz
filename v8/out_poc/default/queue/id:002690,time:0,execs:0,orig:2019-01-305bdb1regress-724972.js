





var builder = new WasmModuleBuilder();
builder.addMemory(0, 0, true);
var instance = builder.instantiate();
instance.exports.memory.buffer;
