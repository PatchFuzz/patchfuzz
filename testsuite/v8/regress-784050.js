



d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

var builder = new WasmModuleBuilder();
builder.addFunction('test', kSig_v_v)
    .addBodyWithEnd([
      kExprI32Const,    0x0,   
      kExprI32Const,    0x0,   
      kExprBrIf,        0x00,  
      kExprLoop,        0x7f,  
      kExprBlock,       0x7f,  
      kExprI32Const,    0x0,   
      kExprBr,          0x00,  
      kExprEnd,                
      kExprBr,          0x00,  
      kExprEnd,                
      kExprUnreachable,        
      kExprEnd,                
    ])
    .exportFunc();
builder.instantiate();
