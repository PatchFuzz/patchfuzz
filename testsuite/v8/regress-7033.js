



d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

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
assertEquals(0, module.exports.test());
