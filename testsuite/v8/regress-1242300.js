



load('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addMemory(16, 32);
builder.addFunction(undefined, kSig_i_iii)
  .addBody([
    kExprI32Const, 0x7f,  
    kExprI32Const, 0x1e,  
    kSimdPrefix, kExprI8x16Splat,  
    kExprI32Const, 0,  
    kSimdPrefix, kExprI8x16Splat,  
    kExprI32Const, 0,  
    kSimdPrefix, kExprI8x16Splat,  
    kSimdPrefix, kExprS128Select,  
    kSimdPrefix, kExprS128Load32Lane, 0x00, 0x89, 0xfe, 0x03, 0x00,  
    kExprUnreachable,
]);
builder.addExport('main', 0);
const instance = builder.instantiate();
assertTraps(kTrapMemOutOfBounds, () => instance.exports.main(1, 2, 3));
