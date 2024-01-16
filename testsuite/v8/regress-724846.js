



d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');



let builder = new WasmModuleBuilder();
const num_pages = 49152;
builder.addMemory(num_pages, num_pages);
assertThrows(() => builder.instantiate(), RangeError);
