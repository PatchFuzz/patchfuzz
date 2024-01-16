





d8.file.execute("test/mjsunit/wasm/wasm-module-builder.js");

(function testPrintCode() {
  let builder = new WasmModuleBuilder();
  builder.addMemory(1, undefined, false);
  builder
      .addFunction('main', makeSig([kWasmI32, kWasmI32, kWasmF64], [kWasmI32]))
      .addBody([
        kExprLocalGet, 0, kExprLocalGet, 1, kExprI64UConvertI32, kExprLocalGet,
        2, kExprI64SConvertF64, kAtomicPrefix, kExprI64AtomicWait, 0, 0
      ]);
  builder.instantiate();
})();
