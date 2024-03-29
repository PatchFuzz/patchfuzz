





d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();

builder.addFunction(`get`, makeSig([], [kWasmExternRef]))
    .addBody([kExprTableGet])
    .exportFunc();
builder.addFunction(`fill`, makeSig([kWasmI32, kWasmAnyFunc, kWasmI32], []))
    .addBody([])
    .exportFunc();
try {
  builder.toModule();
} catch {}
