



d8.file.execute("test/mjsunit/wasm/wasm-module-builder.js");

const builder = new WasmModuleBuilder();
let table = new WebAssembly.Table({element: 'anyfunc', initial: 2});

builder.addImportedTable('m', 'table', 4000000000);
assertThrows(() => builder.instantiate({m: {table: table}}), RangeError);
