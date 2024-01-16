



d8.file.execute("test/mjsunit/wasm/wasm-module-builder.js");

try {
  (function () {
    let m = new WasmModuleBuilder();
    m.addFunction("sub", kSig_i_ii)
    m.instantiate();
  })();
} catch (e) {
  console.info("caught exception");
  console.info(e);
}
for (let i = 0; i < 150; i++) {
  var m = new WasmModuleBuilder();
  m.addMemory(2);
  m.instantiate();
}
