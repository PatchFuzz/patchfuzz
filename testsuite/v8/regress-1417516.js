





d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
const call_sig = builder.addType(kSig_v_v);
builder.addMemory(16, 32, false);
builder.addTable(kWasmFuncRef, 3, 4, undefined)
builder.addFunction(undefined, kSig_i_iii)
  .addBodyWithEnd([
kExprTry, 0x7f,  
  kExprI32Const, 0x01,  
  kExprCallIndirect, call_sig, 0x00,  
  kExprI32Const, 0x00,  
  kExprI32Const, 0x00,  
  kAtomicPrefix, kExprI32AtomicExchange, 0x00, 0x80, 0x80, 0xe8, 0x05,  
kExprCatchAll,  
  kExprI32Const, 0x01,  
  kSimdPrefix, kExprI8x16Splat,  
  kExprTry, 0x7f,  
    kExprI32Const, 0x01,  
    kExprCallIndirect, call_sig, 0x00,  
    kExprI32Const, 0x00,  
    kExprI32Const, 0x00,  
    kAtomicPrefix, kExprI32AtomicOr, 0x00, 0x00,  
  kExprCatchAll,  
    kExprI32Const, 0x00,  
    kExprEnd,  
  kExprUnreachable,
  kExprEnd,  
kExprEnd,  
]);
builder.toModule();
