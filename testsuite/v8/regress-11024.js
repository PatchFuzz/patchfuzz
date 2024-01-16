







d8.file.execute("test/mjsunit/wasm/wasm-module-builder.js");

const num_functions = 3;

function create_builder() {
  const builder = new WasmModuleBuilder();
  for (let i = 0; i < num_functions; ++i) {
    builder.addFunction('f' + i, kSig_i_v)
        .addBody(wasmI32Const(i))
        .exportFunc();
  }
  return builder;
}

const wire_bytes = create_builder().toBuffer();

const serialized = (() => {
  const module = new WebAssembly.Module(wire_bytes);
  const instance = new WebAssembly.Instance(module);
  
  instance.exports.f2();
  return %SerializeWasmModule(module);
})();


gc();

const module = %DeserializeWasmModule(serialized, wire_bytes);
%SerializeWasmModule(module);
