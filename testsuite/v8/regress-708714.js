



d8.file.execute("test/mjsunit/wasm/wasm-module-builder.js");

var builder = new WasmModuleBuilder();

builder.addExplicitSection([kFunctionSectionCode,
  
  7,
  
  1,
  
  0xff, 0xff, 0xff, 0xff, 0xff]);
builder.addExplicitSection([kStartSectionCode,
  
  1,
  
  0]);

assertThrows(() => builder.instantiate(), WebAssembly.CompileError);
