





d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

var builder = new WasmModuleBuilder();
var instance = builder.instantiate();
instance[1] = undefined;
gc();
Object.getOwnPropertyNames(instance);
