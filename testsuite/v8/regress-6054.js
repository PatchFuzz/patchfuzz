



d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

(function() {
  var builder = new WasmModuleBuilder();
  builder.addMemory(16, 32, false);
  builder.addFunction('test', kSig_i_i)
      .addBodyWithEnd([
  kExprI32Const, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
  kExprI32LoadMem8S, 0x00, 0x00,
kExprEnd,   
      ])
      .exportFunc();
  var module = builder.instantiate();
  assertEquals(0, module.exports.test(1));
})();
