





d8.file.execute("test/mjsunit/wasm/wasm-module-builder.js");

var instance = (function () {
  var builder = new WasmModuleBuilder();

  let struct_index = builder.addStruct([makeField(kWasmI32, true)]);
  let callback = builder.addImport(
      'import', 'callback', {params: [kWasmExternRef], results: []});

  builder.addFunction("object", { params: [], results: [kWasmEqRef] })
    .addBody([kGCPrefix, kExprStructNewDefault, struct_index]).exportFunc();

  builder.addFunction(
      'roundtrip', {params: [kWasmEqRef, kWasmExternRef], results: []})
    .addBody([
      kExprLocalGet, 1,
      kExprCallFunction, callback,
    ])
    .exportFunc();

  return builder.instantiate({
    import: {
        callback: function(f) {
            assertEquals("function", typeof f);
        }
    }
  });
})();

var c = instance.exports.object();
instance.exports.roundtrip(c, () => 12);
instance.exports.roundtrip(34, () => 56);
