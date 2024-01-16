



d8.file.execute("test/mjsunit/wasm/wasm-module-builder.js");

(function BadTypeSection() {
  var data = bytes(
    kWasmH0,
    kWasmH1,
    kWasmH2,
    kWasmH3,

    kWasmV0,
    kWasmV1,
    kWasmV2,
    kWasmV3,

    kTypeSectionCode,
    5,
    2,
    0x60,
    0,
    0,
    13
  );

  assertFalse(WebAssembly.validate(data));
})();
