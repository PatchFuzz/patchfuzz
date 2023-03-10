





(function() {
  var builder = new WasmModuleBuilder();
  builder.addMemory(16, 32, false);
  builder.addFunction('test', kSig_i_i)
      .addBodyWithEnd([
              kExprLocalGet, 0x00,
              kExprI32Const, 0x29,
            kExprI32Shl,
            kExprI32Const, 0x18,
          kExprI32ShrS,
          kExprI32Const, 0x18,
        kExprI32Shl,
        kExprEnd,
      ])
      .exportFunc();
  var module = builder.instantiate();
  print(0, module.exports.test(16));
})();
