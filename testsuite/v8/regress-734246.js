



d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

let builder = new WasmModuleBuilder();
builder.addExplicitSection([
  kUnknownSectionCode,
  
  0x0f,
  
  0xf9, 0xff, 0xff, 0xff, 0x0f
]);
assertThrows(() => builder.instantiate(), WebAssembly.CompileError);
