








(function testExternRefNull() {
  const builder = new WasmModuleBuilder();
  builder.addFunction('main', kSig_r_v)
      .addBody([kExprRefNull, kExternRefCode])
      .exportFunc();

  var wire_bytes = builder.toBuffer();
  var module = new WebAssembly.Module(wire_bytes);
  var buffer = %SerializeWasmModule(module);
  module = %DeserializeWasmModule(buffer, wire_bytes);
  var instance = new WebAssembly.Instance(module);

  print(null, instance.exports.main());
})();

(function testExternRefIsNull() {
  const builder = new WasmModuleBuilder();
  builder.addFunction('main', kSig_i_r)
      .addBody([kExprLocalGet, 0, kExprRefIsNull])
      .exportFunc();

  var wire_bytes = builder.toBuffer();
  var module = new WebAssembly.Module(wire_bytes);
  var buffer = %SerializeWasmModule(module);
  module = %DeserializeWasmModule(buffer, wire_bytes);
  var instance = new WebAssembly.Instance(module);

  print(0, instance.exports.main({'hello' : 'world'}));
  print(0, instance.exports.main(1234));
  print(0, instance.exports.main(0));
  print(0, instance.exports.main(123.4));
  print(0, instance.exports.main(undefined));
  print(1, instance.exports.main(null));
  print(0, instance.exports.main(print));
})();
