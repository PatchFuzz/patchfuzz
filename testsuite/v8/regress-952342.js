



d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

const memory = new WebAssembly.Memory({initial: 1});

let builder = new WasmModuleBuilder();
builder.addImportedMemory("imports", "mem", 1);
builder.addFunction("copy", kSig_v_iii)
       .addBody([kExprLocalGet, 0, 
                 kExprLocalGet, 1, 
                 kExprLocalGet, 2, 
                 kNumericPrefix, kExprMemoryCopy, 0, 0]).exportAs("copy");
let instance = builder.instantiate({imports: {mem: memory}});
memory.grow(1);
instance.exports.copy(0, kPageSize, 11);
