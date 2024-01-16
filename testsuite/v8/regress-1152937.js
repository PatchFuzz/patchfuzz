






d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addFunction(undefined, kSig_v_v)
  .addBodyWithEnd([kExprBr, 0xFF]);

assertThrows(() => builder.instantiate(), WebAssembly.CompileError);
