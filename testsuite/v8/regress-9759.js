





d8.file.execute("test/mjsunit/wasm/wasm-module-builder.js");



const NUM_CASES = 0xfffd;

(function TestBrTableTooLarge() {
  let builder = new WasmModuleBuilder();
  let cases = new Array(NUM_CASES).fill(0);
  builder.addFunction('main', kSig_v_i)
      .addBody([].concat([
        kExprBlock, kWasmVoid,
          kExprLocalGet, 0,
          kExprBrTable], wasmSignedLeb(NUM_CASES),
          cases, [0,
        kExprEnd
      ])).exportFunc();
  assertThrows(() => new WebAssembly.Module(builder.toBuffer()),
    WebAssembly.CompileError, /invalid table count/);
})();
