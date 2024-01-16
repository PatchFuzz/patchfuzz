





d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addMemory(16, 32, false);
builder.addFunction('main', kSig_i_iii)
    .addBody([
      kExprLocalGet, 1,                              
      kExprLocalGet, 1,                              
      kExprLocalGet, 0,                              
      kExprLocalSet, 1,                              
      kAtomicPrefix, kExprI32AtomicSub, 0x02, 0x26,  
    ])
    .exportFunc();
const instance = builder.instantiate();
assertEquals(0, instance.exports.main(1, 2, 3));
