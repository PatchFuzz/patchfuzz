



d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

var builder = new WasmModuleBuilder();
builder.addFunction('test', kSig_i_iii)
    .addBodyWithEnd([
      kExprI32Const, 0x00,  
      kExprI32Const, 0x00,  
      kExprI32Add,          
      kExprI32Const, 0x00,  
      kExprI32Const, 0x00,  
      kExprI32Add,          
      kExprI32Add,          
      kExprI32Const, 0x01,  
      kExprI32Const, 0x00,  
      kExprI32Add,          
      kExprBlock,    0x7f,  
      kExprI32Const, 0x00,  
      kExprBr,       0x00,  
      kExprEnd,             
      kExprI32Add,          
      kExprI32Add,          
      kExprEnd
    ])
    .exportFunc();
var module = builder.instantiate();
assertEquals(1, module.exports.test());
