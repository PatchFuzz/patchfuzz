



d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addMemory(16, 32);
builder.addFunction(undefined, kSig_v_v).addBody([
  kExprI32Const, 0,  
  kExprI64LoadMem, 0, 0xff, 0xff, 0xff, 0xff,
  0x0f,       
  kExprDrop,  
]);
builder.addExport('main', 0);
const module = builder.instantiate();
assertThrows(
    () => module.exports.main(), WebAssembly.RuntimeError, /out of bounds/);
