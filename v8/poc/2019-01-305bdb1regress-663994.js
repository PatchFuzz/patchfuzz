







(function() {
  var builder = new WasmModuleBuilder();
  var module = builder.instantiate();
  print(typeof(module.exports) != "undefined");
})();
