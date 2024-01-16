





d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

let builder = new WasmModuleBuilder();
builder.addFunction('f', kSig_i_v).addBody([kExprReturn]);
assertThrows(() => builder.instantiate(), WebAssembly.CompileError);
