





d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addFunction('foo', kSig_v_v).addBody([kExprDrop]);
assertThrows(() => builder.instantiate(), WebAssembly.CompileError);
