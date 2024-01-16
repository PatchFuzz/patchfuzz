



load('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addMemory(1, 1, true);
builder.addFunction('main', kSig_i_v)
    .addBody([
      kExprI32Const, 0,         
      kExprI32LoadMem8S, 0, 0,  
      kExprI32LoadMem, 0, 0,    
    ])
    .exportFunc();
const instance = builder.instantiate();
let mem = new Uint8Array(instance.exports.memory.buffer);
mem[0] = -1;
assertTraps(kTrapMemOutOfBounds, instance.exports.main);
