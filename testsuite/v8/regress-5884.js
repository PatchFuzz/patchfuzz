



d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

(function() {
  var builder = new WasmModuleBuilder();
  builder.addMemory(31, 31, false);
  builder.addFunction('test', kSig_i_iii)
      .addBodyWithEnd([
        
        kExprI64Const, 0x41, kExprI64Const, 0x41, kExprI64LtS, kExprI32Const,
        0x01, kExprI32StoreMem, 0x00, 0x41, kExprUnreachable,
        kExprEnd,  
      ])
      .exportFunc();
  var module = builder.instantiate();
})();
