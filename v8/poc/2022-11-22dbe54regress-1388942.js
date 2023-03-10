







let builder = new WasmModuleBuilder();

builder.addType(kSig_v_v);
builder.addType(kSig_v_i);
builder.addType(kSig_i_v);

builder.addGlobal(wasmRefNullType(3), true, [kExprRefNull, 3]);

print(() => builder.instantiate(), WebAssembly.CompileError);
