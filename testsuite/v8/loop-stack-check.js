





d8.file.execute("test/mjsunit/wasm/wasm-module-builder.js");

(function() {
  var builder = new WasmModuleBuilder();
  builder.addFunction("foo", kSig_i_ii)
    .addBody([
        kExprLoop, 00,
        kExprBrTable, 0xfb, 0xff, 0xff, 0xff,
              ])
              .exportFunc();
  assertThrows(function() { builder.instantiate(); });
})();
