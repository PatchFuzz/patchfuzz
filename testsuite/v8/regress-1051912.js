



d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js')

let binary = new Binary();
binary.emit_header();
binary.emit_bytes([kTypeSectionCode, 4, 1, kWasmFunctionTypeForm, 0, 0]);
binary.emit_bytes([kFunctionSectionCode, 2, 1, 0]);
binary.emit_bytes([kCodeSectionCode, 6, 1, 4]);
binary.emit_bytes([kUnknownSectionCode, 2, 1, 0]);
binary.emit_bytes([kUnknownSectionCode, 2, 1, 0]);
binary.emit_bytes([kUnknownSectionCode, 2, 1, 0]);
binary.emit_bytes([ kExprEnd]);
let buffer = binary.trunc_buffer();
WebAssembly.compile(buffer).then(
    () => assertUnreachable(), () => {});
