



d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addFunction(undefined, kSig_d_v).addBody([
  ...wasmF64Const(0),  
  ...wasmF64Const(0),  
  ...wasmI32Const(0),  
  kExprBrIf, 0x00,     
  kExprF64Add          
]);
builder.instantiate();
