





d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

let mem = new WebAssembly.Memory({initial: 0});
let builder = new WasmModuleBuilder();
builder.addImportedMemory("mod", "imported_mem");
builder.addFunction('mem_size', kSig_i_v)
    .addBody([kExprMemorySize, kMemoryZero])
    .exportFunc();
let instance = builder.instantiate({mod: {imported_mem: mem}});
instance.exports.mem_size();
