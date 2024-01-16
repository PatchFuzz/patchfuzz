





d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addMemory(16, 32, false);
builder.addFunction(undefined, kSig_i_iii).addBody([
  kExprI64Const, 0x7a,  
  kExprI64Const, 0x7f,  
  kExprI64Const, 0x7e,  
  kExprI64Add,          
  kExprI64DivS,         
  kExprUnreachable,     
]);
builder.toModule();
