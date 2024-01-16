



d8.file.execute("test/mjsunit/wasm/wasm-module-builder.js");

const builder = new WasmModuleBuilder();
builder.addFunction(undefined, kSig_d_v)
    .addLocals(kWasmExternRef, 16000)
    .addBody([kExprUnreachable]);
builder.toModule();
