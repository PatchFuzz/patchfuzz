







const builder = new WasmModuleBuilder();
builder.addFunction(undefined, kSig_v_v)
  .addBodyWithEnd([
    
    kGCPrefix, 0xff, 0xff, 0x7f
  ]);
print(
    () => builder.toModule(), WebAssembly.CompileError,
    /Invalid prefixed opcode/);
