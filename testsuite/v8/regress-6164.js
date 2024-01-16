



d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

(function() {
  var builder = new WasmModuleBuilder();
  builder.addMemory(31, 31, false);
  builder.addFunction('test', kSig_l_v)
      .addBodyWithEnd([

kExprUnreachable,
kExprEnd,   
      ])
      .exportFunc();
  var module = builder.instantiate();
})();
