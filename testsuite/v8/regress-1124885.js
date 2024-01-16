







d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');
(function() {
  const builder = new WasmModuleBuilder();
  builder.addMemory(1, 1);
  builder.addFunction(undefined, kSig_i_ii)
    .addBodyWithEnd([
      kExprI32Const, 0,
      kExprLocalGet, 0,
      kExprI32StoreMem, 0, 0,

      kExprI32Const, 4,
      kExprLocalGet, 0,
      kExprI32StoreMem, 0, 0,

      kExprI32Const, 8,
      kExprLocalGet, 0,
      kExprI32StoreMem, 0, 0,

      kExprI32Const, 12,
      kExprLocalGet, 0,
      kExprI32StoreMem, 0, 0,
      
      

      kExprI32Const, 0,
      kSimdPrefix, kExprS128LoadMem, 0, 0,

      kSimdPrefix, kExprI32x4ExtractLane, 0,
      
      kSimdPrefix, kExprS128Load32Splat, 0, 0,
      kSimdPrefix, kExprI32x4ExtractLane, 3,
      kExprEnd,
    ])
    .exportAs('main');
  const instance = builder.instantiate();
  assertEquals(4, instance.exports.main(4));
})();
