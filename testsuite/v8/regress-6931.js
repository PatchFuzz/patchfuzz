




d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');









(function() {
  let builder = new WasmModuleBuilder();
  builder.addMemory(1, 1, false);
  builder.addFunction('test', kSig_v_v)
      .addBody([
        kExprI32Const, 0x7c, 
        kExprI32Const, 0,
        kExprI32StoreMem, 0, 8, 
      ])
      .exportFunc();
  let module = builder.instantiate();

  assertTraps(kTrapMemOutOfBounds, module.exports.test);
})();
