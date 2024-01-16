



d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addMemory(1);
builder.addFunction(undefined, kSig_v_i) .addBodyWithEnd([
    kExprI32Const, 1, kExprMemoryGrow, kMemoryZero, kNumericPrefix]);


const b = builder.toBuffer();
WebAssembly.compile(b).then(() => assertUnreachable(), () => {  })
