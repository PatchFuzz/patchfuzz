







var builder = new WasmModuleBuilder();
builder.addFunction('f0', kSig_v_v).addBody([]);
builder.addFunction('f1', kSig_v_v).addBody([]);
builder.instantiate();
