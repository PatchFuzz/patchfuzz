





d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addMemory(1, 1);

builder.addFunction(undefined, kSig_v_i).addBody([
  kExprLocalGet, 0,        
  kExprI32Const, 0,        
  kExprI32StoreMem, 0, 0,  
]);



builder.addFunction(undefined, makeSig(new Array(6).fill(kWasmI32), []))
    .addBody([
      kExprLocalGet, 5,     
      kExprCallFunction, 0  
    ]);




const gen_i32_code = [
  kExprLocalTee, 0,  
  kExprLocalGet, 0,  
  kExprI32Const, 1,  
  kExprI32Add        
];
builder.addFunction(undefined, kSig_v_v).addLocals(kWasmI32, 1).addBody([
  
  
  ...wasmI32Const(0),    
  ...wasmI32Const(1),    
  kExprI32Add,           
  ...gen_i32_code,       
  ...gen_i32_code,       
  ...gen_i32_code,       
  ...gen_i32_code,       
  ...gen_i32_code,       
  ...gen_i32_code,       
  ...gen_i32_code,       
  ...gen_i32_code,       
  ...gen_i32_code,       
  ...gen_i32_code,       
  ...gen_i32_code,       
  kExprDrop,             
  kExprDrop,             
  kExprDrop,             
  kExprDrop,             
  kExprDrop,             
  kExprDrop,             
  kExprCallFunction,  1  
]).exportAs('three');
const instance = builder.instantiate();
instance.exports.three();
