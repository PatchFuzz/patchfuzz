







const builder = new WasmModuleBuilder();
builder.addFunction('foo', kSig_v_v).addBody([kExprDrop]);
print(() => builder.instantiate(), WebAssembly.CompileError);
