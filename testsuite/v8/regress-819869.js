



d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

var builder = new WasmModuleBuilder();
builder.addFunction(undefined, kSig_i_i)
    .addLocals(kWasmI32, 0xffffffff)
    .addBody([]);
assertThrows(() => builder.instantiate(), WebAssembly.CompileError);
