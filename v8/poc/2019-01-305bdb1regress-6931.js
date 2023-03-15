














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

  print(kTrapMemOutOfBounds, module.exports.test);
})();
