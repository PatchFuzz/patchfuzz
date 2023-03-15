







let builder = new WasmModuleBuilder();
const num_pages = 49152;
builder.addMemory(num_pages, num_pages);
print(() => builder.instantiate(), RangeError);
