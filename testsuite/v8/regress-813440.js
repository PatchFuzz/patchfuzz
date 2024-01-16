





d8.file.execute("test/mjsunit/wasm/wasm-module-builder.js");

const builder = new WasmModuleBuilder();
builder.addFunction('f', kSig_i_v).addBody([kExprI32Const, 42]);
const buffer = builder.toBuffer();

const module = WebAssembly.compile(buffer);


'퓛'.localeCompare();
