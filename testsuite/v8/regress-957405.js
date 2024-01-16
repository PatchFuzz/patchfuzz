



d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

const memory = new WebAssembly.Memory({initial: 1});

let builder = new WasmModuleBuilder();
builder.addImportedMemory("imports", "mem");
builder.addFunction("fill", kSig_v_iii)
       .addBody([kExprLocalGet, 0, 
                 kExprLocalGet, 1, 
                 kExprLocalGet, 2, 
                 kNumericPrefix, kExprMemoryFill, 0]).exportAs("fill");
let instance = builder.instantiate({imports: {mem: memory}});
memory.grow(1);
assertTraps(
    kTrapMemOutOfBounds,
    () => instance.exports.fill(kPageSize + 1, 123, kPageSize));
