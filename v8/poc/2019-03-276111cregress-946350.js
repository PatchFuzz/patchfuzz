







var builder = new WasmModuleBuilder();
var instance = builder.instantiate();
instance[1] = undefined;
gc();
Object.getOwnPropertyNames(instance);
