





var builder = new WasmModuleBuilder();

builder.addExplicitSection([kFunctionSectionCode,
  
  7,
  
  1,
  
  0xff, 0xff, 0xff, 0xff, 0xff]);
builder.addExplicitSection([kStartSectionCode,
  
  1,
  
  0]);

print(() => builder.instantiate(), WebAssembly.CompileError);
