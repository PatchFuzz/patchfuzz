





d8.file.execute("test/mjsunit/wasm/wasm-module-builder.js");

let builder = new WasmModuleBuilder();

builder.addType(kSig_v_v);
builder.addType(kSig_v_i);
builder.addType(kSig_i_v);

builder.addGlobal(wasmRefNullType(3), true, [kExprRefNull, 3]);

assertThrows(() => builder.instantiate(), WebAssembly.CompileError);
