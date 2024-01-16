



d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addFunction(undefined, kSig_v_iii).addBody([
  kExprI32Const, 0x41,  
  kExprLoop, 0x7c,      
  kExprLocalGet, 0x00,  
  kExprLocalGet, 0x01,  
  kExprBrIf, 0x01,      
  kExprLocalGet, 0x00,  
  kExprI32Rol,          
  kExprBrIf, 0x00,      
  kExprUnreachable,     
  kExprEnd,             
  kExprUnreachable,     
]);
builder.instantiate();
