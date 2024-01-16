



d8.file.execute("test/mjsunit/wasm/wasm-module-builder.js");

for (let section = kLastKnownSectionCode + 1;
     section <= kLastKnownSectionCode + 20; section++) {
  let module = Uint8Array.from([
      kWasmH0, kWasmH1, kWasmH2, kWasmH3,
      kWasmV0, kWasmV1, kWasmV2, kWasmV3,
      section, 0
  ]);
  let hex = section.toString(16).padStart(2, '0');
  let msg = `WebAssembly.Module(): unknown section code #0x${hex} @+10`;
  assertThrows(() => new WebAssembly.Instance(new WebAssembly.Module(module)),
               WebAssembly.CompileError, msg);
}
