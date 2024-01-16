





d8.file.execute("test/mjsunit/wasm/wasm-module-builder.js");

let builder = new WasmModuleBuilder();

let table = builder.addTable(kWasmFuncRef, 10);

builder.addActiveElementSegment(table.index, [kExprI32Const, 0], [],
                                wasmRefNullType(0));

assertThrows(() => builder.instantiate(), WebAssembly.CompileError);
