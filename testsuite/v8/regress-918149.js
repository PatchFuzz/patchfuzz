



d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
const sig =
    builder.addType(makeSig([kWasmI32, kWasmI32, kWasmI32], [kWasmI64]));
builder.addFunction('main', sig).addBody([kExprI64Const, 1, kExprI64SExtendI8]);
builder.instantiate();
