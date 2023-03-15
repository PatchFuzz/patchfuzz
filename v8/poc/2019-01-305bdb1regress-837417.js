





const builder = new WasmModuleBuilder();
builder.addMemory(16, 32);
builder.addFunction("test", kSig_i_v).addBody([
  kExprI32Const, 12,         
]);

WebAssembly.Module.prototype.then = resolve => {
  print();
};

WebAssembly.instantiate(builder.toBuffer());
