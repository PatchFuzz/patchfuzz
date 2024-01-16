



load('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addMemory(1, 1);
builder.addFunction('main', kSig_d_v)
    .addBody([
      ...wasmI32Const(-3),                            
      kExprI32SExtendI8,                              
      kSimdPrefix, kExprS128Load32Splat, 0x01, 0x02,  
      kExprUnreachable,                               
    ])
    .exportFunc();
const instance = builder.instantiate();
assertTraps(kTrapMemOutOfBounds, instance.exports.main);
