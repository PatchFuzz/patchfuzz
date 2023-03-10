





let builder = new WasmModuleBuilder();
builder.addExplicitSection([
  kUnknownSectionCode,
  
  0x0f,
  
  0xf9, 0xff, 0xff, 0xff, 0x0f
]);
print(() => builder.instantiate(), WebAssembly.CompileError);
