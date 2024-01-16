





d8.file.execute("test/mjsunit/wasm/wasm-module-builder.js");

(function() {
  var builder = new WasmModuleBuilder();
  var module = builder.instantiate();
  assertTrue(typeof(module.exports) != "undefined");
})();
