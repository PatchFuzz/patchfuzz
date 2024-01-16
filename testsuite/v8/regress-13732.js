



d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

let builder1 = new WasmModuleBuilder();
builder1.addGlobal(kWasmS128, false, wasmS128Const(0, 0)).exportAs("mv128");
let instance1 = builder1.instantiate();

let builder2 = new WasmModuleBuilder();
builder2.addImportedGlobal("imports", "mv128", kWasmS128, false);
let instance2 = builder2.instantiate({ imports: instance1.exports });
