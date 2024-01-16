



d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');


(function() {
  var builder = new WasmModuleBuilder();
  builder.addImportedGlobal("mod", "i32", kWasmI32);
  builder.addImportedGlobal("mod", "f32", kWasmF32);
  var module = new WebAssembly.Module(builder.toBuffer());
  return new WebAssembly.Instance(module, {
    mod: {
      i32: 1e12,
      f32: 1e300,
    }
  });
})();
