





var builder = new WasmModuleBuilder();
builder.addFunction('test', kSig_i_iii)
    .addBodyWithEnd([
      kExprI32Const, 0,          
      kExprI32Const, 0,          
      kExprI32Add,               
      kExprI32Const, 0,          
      kExprI32Const, 0,          
      kExprI32Add,               
      kExprDrop,                 
      kExprDrop,                 
      kExprI32Const, 0,          
      kExprI32Const, 0,          
      kExprI32Add,               
      kExprI32Const, 0,          
      kExprI32Const, 1,          
      kExprI32Add,               
      kExprBlock,    kWasmVoid,  
      kExprBr,       0,          
      kExprEnd,                  
      kExprI32Add,               
      kExprEnd
    ])
    .exportFunc();
var module = builder.instantiate();
print(1, module.exports.test());
