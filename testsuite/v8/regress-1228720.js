





load('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addFunction(undefined, kSig_v_v)
    .addLocals(kWasmExternRef, 16268)
    .addBody([kExprLoop, kWasmVoid, kExprEnd]);
builder.toModule();
