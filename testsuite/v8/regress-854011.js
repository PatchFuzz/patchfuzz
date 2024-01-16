



d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addFunction('main', kSig_d_d)
    .addBody([
      
      
      kExprLocalGet, 0, kExprI64SConvertF64,  
      kExprLocalGet, 0, kExprI64SConvertF64,  
      kExprLocalGet, 0, kExprI64SConvertF64,  
      kExprLocalGet, 0, kExprI64SConvertF64,  
      kExprLocalGet, 0, kExprI64SConvertF64,  
      kExprLocalGet, 0, kExprI64SConvertF64,  
      kExprLocalGet, 0, kExprI64SConvertF64,  
      kExprLocalGet, 0, kExprI64SConvertF64,  
      kExprCallFunction, 1,                   
      
      
      
      kExprI64Const, 0,      
      kExprI64Const, 0,      
      kExprI64Const, 0,      
      kExprI64Const, 0,      
      kExprI64Const, 0,      
      kExprI64Const, 0,      
      kExprI64Const, 0,      
      kExprI64Const, 0,      
      kExprCallFunction, 1,  
      
      kExprF64Add
    ])
    .exportFunc();
builder.addFunction(undefined, makeSig(new Array(8).fill(kWasmI64), [kWasmF64]))
    .addBody([
      kExprLocalGet, 7,     
      kExprF64SConvertI64,  
    ]);
const instance = builder.instantiate();
const big_num_1 = 2 ** 48;
const big_num_2 = 2 ** 56 / 3;
assertEquals(big_num_1, instance.exports.main(big_num_1));
assertEquals(big_num_2, instance.exports.main(big_num_2));
