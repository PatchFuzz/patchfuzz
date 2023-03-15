





var builder = new WasmModuleBuilder();
builder.addFunction('test', kSig_i_iii)
    .addBodyWithEnd([
      kExprI32Const, 0x07,  
      kExprI32Const, 0x00,  
      kExprI32Const, 0x00,  
      kExprI32And,          
      kExprI32And,          
      kExprEnd,             
    ])
    .exportFunc();
var module = builder.instantiate();
print(0, module.exports.test());
