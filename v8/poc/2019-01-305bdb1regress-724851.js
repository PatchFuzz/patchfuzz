







let builder = new WasmModuleBuilder();
builder.addFunction('f', kSig_i_v).addBody([kExprReturn]);
print(() => builder.instantiate(), WebAssembly.CompileError);
