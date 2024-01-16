





load('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addFunction(undefined, kSig_d_v)
    .addLocals(kWasmExternRef, 16000)
    .addBody([kExprCallFunction, 0]);
builder.toModule();
