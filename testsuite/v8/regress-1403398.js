





d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

let simdSupported = (() => {
  const builder = new WasmModuleBuilder();
  builder.addMemory(10, 10);
  builder.addFunction(null, makeSig([], [kWasmS128]))
  .addBody([
    kExprI32Const, 0,
    kSimdPrefix, kExprS128LoadMem, 1, 0,
  ]);
  try {
    builder.instantiate();
    return true;
  } catch(e) {
    assertContains('SIMD unsupported', '' + e)
    return false;
  }
})();

const builder = new WasmModuleBuilder();
builder.addMemory(0, 0); 
const callee = builder.addFunction('callee', makeSig([], []))
.addBody([]);

const testCases = {
  'StoreMem': [
    kExprI32Const, 0,
    kExprI32Const, 0,
    kExprI32StoreMem, 1, 0x0f,
  ],
  'LoadMem': [
    kExprI32Const, 0,
    kExprI32LoadMem, 1, 0x0f,
    kExprDrop,
  ],
  'atomicStore': [
    kExprI32Const, 0,
    kExprI64Const, 0,
    kAtomicPrefix, kExprI64AtomicStore16U, 1, 0x0f,
  ],
  'atomicLoad': [
    kExprI32Const, 0,
    kAtomicPrefix, kExprI64AtomicLoad16U, 1, 0x0f,
    kExprDrop,
  ],
};
if (simdSupported) {
  Object.assign(testCases, {
    'SimdStoreMem': [
      kExprI32Const, 0,
      ...WasmModuleBuilder.defaultFor(kWasmS128),
      kSimdPrefix, kExprS128StoreMem, 1, 0,
    ],
    'SimdLoadMem': [
      kExprI32Const, 0,
      kSimdPrefix, kExprS128LoadMem, 1, 0,
      kExprDrop,
    ],
    'SimdStoreLane': [
      kExprI32Const, 0,
      ...WasmModuleBuilder.defaultFor(kWasmS128),
      kSimdPrefix, kExprS128Store32Lane, 1, 0, 0, 0, 0,
    ],
    'SimdLoadLane': [
      kExprI32Const, 0,
      ...WasmModuleBuilder.defaultFor(kWasmS128),
      kSimdPrefix, kExprS128Load32Lane, 1, 0, 0, 0, 0,
    ],
    'SimdLoadTransform': [
      kExprI32Const, 0x00,
      kExprI32Const, 0x00,
      kSimdPrefix, kExprS128Load32Splat, 1, 0, 0, 0, 0,
    ],
  });
}

for (const [name, code] of Object.entries(testCases)) {
  builder.addFunction(name, makeSig([], []))
  .exportFunc()
  .addBody([
    
    
    kExprCallFunction, callee.index,
    
    ...code,
    
    
    
    
    
    kExprCallFunction, callee.index,
  ]);
}

const instance = builder.instantiate();

function run(fct) {
  try {
    fct();
    assertUnreachable();
  } catch (e) {
    assertContains('memory access out of bounds', '' + e)
  }
}

for (const [name, code] of Object.entries(testCases)) {
  print(`Test ${name}`);
  
  for (let i = 0; i < 5; ++i) run(instance.exports[name]);
  
  %WasmTierUpFunction(instance.exports[name]);
  run(instance.exports[name]);
}
