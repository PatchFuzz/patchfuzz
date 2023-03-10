





var builder = new WasmModuleBuilder();
builder.addFunction(undefined, kSig_i_i)
    .addLocals(kWasmI32, 0xffffffff)
    .addBody([]);
print(() => builder.instantiate(), WebAssembly.CompileError);
