



d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addMemory(16, 32, false);
builder.addFunction('main', kSig_i_iii)
    .addBodyWithEnd([
      kExprI32Const, 0x0,  
      kExprMemorySize, 0,  
      kExprI32Popcnt,      
      kExprI32Const, 0,    
      kExprMemoryGrow, 0,  
      kExprI32GeU,         
      kExprBrIf, 0,        
      kExprMemorySize, 0,  
      kExprUnreachable,    
      kExprEnd,            
    ])
    .exportFunc();
const instance = builder.instantiate();
assertTraps(kExprUnreachable, () => instance.exports.main(1, 2, 3));
