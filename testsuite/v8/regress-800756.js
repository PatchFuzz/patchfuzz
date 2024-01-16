



d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addMemory(16, 32);
builder.addFunction(undefined, kSig_i_iii).addBody([
  kExprI32Const, 0,         
  kExprI32LoadMem8S, 0, 0,  
  kExprI32Eqz,              
]);
builder.instantiate();
