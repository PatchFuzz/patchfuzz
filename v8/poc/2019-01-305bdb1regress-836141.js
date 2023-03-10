





const builder = new WasmModuleBuilder();
builder.addMemory(16, 32);
builder.addFunction("test", kSig_i_v).addBody([
  kExprI32Const, 12,         
]);

let module = new WebAssembly.Module(builder.toBuffer());
module.then = () => {
  
  setTimeout(print);
};

WebAssembly.instantiate(module);
