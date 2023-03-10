







var builder = new WasmModuleBuilder();
builder.addImport('Math', 'sqrt', kSig_d_d);
builder.instantiate({Math: Math});
