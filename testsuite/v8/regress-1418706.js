





d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addFunction(undefined, kSig_v_v)
  .addBodyWithEnd([
    
    kGCPrefix, 0xff, 0xff, 0x7f
  ]);
assertThrows(
    () => builder.toModule(), WebAssembly.CompileError,
    /Invalid prefixed opcode/);
