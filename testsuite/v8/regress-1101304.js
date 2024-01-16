



d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addType(makeSig(
    [kWasmI64, kWasmI32, kWasmF64, kWasmI64, kWasmI64, kWasmI32, kWasmI64],
    []));
builder.addFunction(undefined, 0 ).addBody([
  kExprI32Const,    0,          
  kExprIf,          kWasmVoid,  
  kExprI32Const,    1,          
  kExprIf,          kWasmVoid,  
  kExprNop,                     
  kExprElse,                    
  kExprUnreachable,             
  kExprEnd,                     
  kExprLocalGet,    0x06,       
  kExprLocalSet,    0x00,       
  kExprLocalGet,    0x03,       
  kExprLocalGet,    0x00,       
  kExprI64Sub,                  
  kExprDrop,                    
  kExprUnreachable,             
  kExprEnd                      
]);
builder.toModule();
