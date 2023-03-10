








const builder = new WasmModuleBuilder();
builder.addFunction(undefined, kSig_v_v)
  .addBodyWithEnd([kExprBr, 0xFF]);

print(() => builder.instantiate(), WebAssembly.CompileError);
