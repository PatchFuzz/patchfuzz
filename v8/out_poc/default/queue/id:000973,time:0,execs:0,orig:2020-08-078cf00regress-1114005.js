





const builder = new WasmModuleBuilder();
let table = new WebAssembly.Table({element: 'anyfunc', initial: 2});

builder.addImportedTable('m', 'table', 4000000000);
print(() => builder.instantiate({m: {table: table}}), RangeError);
