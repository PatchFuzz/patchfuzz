





d8.file.execute("test/mjsunit/wasm/wasm-module-builder.js");

(function TestAsyncCompileMultipleCodeSections() {
  let binary = new Binary();
  binary.emit_header();
  binary.emit_bytes([kTypeSectionCode, 4, 1, kWasmFunctionTypeForm, 0, 0]);
  binary.emit_bytes([kFunctionSectionCode, 2, 1, 0]);
  binary.emit_bytes([kCodeSectionCode, 6, 1, 4, 0, kExprLocalGet, 0, kExprEnd]);
  binary.emit_bytes([kCodeSectionCode, 6, 1, 4, 0, kExprLocalGet, 0, kExprEnd]);
  let buffer = binary.trunc_buffer();
  assertPromiseResult(WebAssembly.compile(buffer), assertUnreachable,
                      e => assertInstanceof(e, WebAssembly.CompileError));
})();
