



d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');



const builder = new WasmModuleBuilder();
builder.addMemory(8, 16);
builder.addFunction(undefined, kSig_i_i).addBody([
  
  kExprLocalGet, 0, kExprCallFunction, 0x1
]);
builder.addFunction(undefined, kSig_i_i).addBody([
  
  kExprLocalGet, 0, kExprI32LoadMem, 0,
  
  kExprUnreachable
]);
builder.instantiate();
