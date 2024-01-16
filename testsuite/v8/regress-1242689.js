






d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();


builder.addFunction("main", kSig_i_v)
  .addBodyWithEnd([
    
    
    kExprI32Const, 0x00,  
    kSimdPrefix, kExprI8x16Splat,  
    kExprI32Const, 0xee, 0xc6, 0x01,  
    kSimdPrefix, kExprI8x16Splat,  
    kSimdPrefix, kExprI8x16ExtractLaneS, 0x00,  
    kSimdPrefix, kExprI64x2ShrS, 0x01,  
    kSimdPrefix, kExprI8x16ExtractLaneS, 0x00,  
    kExprI32Const, 0xee, 0xc6, 0x01,  
    kSimdPrefix, kExprI8x16Splat,  
    kSimdPrefix, kExprI8x16ExtractLaneS, 0x00,  
    kExprI32Const, 0x00,  
    kExprSelect,  
    kExprEnd,  
]).exportFunc();

const instance = builder.instantiate();
print(instance.exports.main());
