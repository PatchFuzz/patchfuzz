



d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addFunction(undefined, kSig_i_iii).addBody([
  
  kExprLocalGet, 0, kExprLocalGet, 1, kExprLocalGet, 2, kExprI32Add, kExprI32Add
]);
const sig = builder.addType(kSig_i_iii);
builder.addFunction(undefined, kSig_i_iii)
    .addBody([
      ...wasmI32Const(1),         
      kExprLocalSet, 0,           
      ...wasmI32Const(4),         
      kExprLocalSet, 1,           
      ...wasmI32Const(16),        
      kExprLocalSet, 2,           
      kExprLoop, kWasmVoid,       
      kExprEnd,                   
      kExprLocalGet, 0,           
      kExprLocalGet, 1,           
      kExprLocalGet, 2,           
      kExprI32Const, 0,           
      kExprCallIndirect, sig, 0,  
    ])
    .exportAs('main');
builder.appendToTable([0]);
const instance = builder.instantiate();
assertEquals(21, instance.exports.main());
