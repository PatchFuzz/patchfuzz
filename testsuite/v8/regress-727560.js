



d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

{
  let builder = new WasmModuleBuilder();
  builder.addMemory();
  builder.exportMemoryAs("exported_mem");
  i1 = builder.instantiate();
}
{
  let builder = new WasmModuleBuilder();
  builder.addImportedMemory("fil", "imported_mem");
  i2 = builder.instantiate({fil: {imported_mem: i1.exports.exported_mem}});
}
