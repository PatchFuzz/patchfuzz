





d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addMemory(16, 32);
builder.addFunction('grow', kSig_i_i).addBody([
  kExprLocalGet, 0,
  kExprMemoryGrow, 0,
]).exportFunc();
builder.addFunction('main', kSig_i_i).addBody([
  ...wasmI32Const(0x41),
  kExprLocalSet, 0,
  
  kExprLoop, kWasmVoid,
  kExprEnd,
  
  kExprLocalGet, 0,
  kExprI32LoadMem, 0, 0,
]).exportFunc();
const instance = builder.instantiate();

instance.exports.grow(1);
instance.exports.main();
