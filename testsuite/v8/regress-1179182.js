





d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addMemory(28, 32, false);
builder.addFunction(undefined, kSig_i_v)
  .addLocals(kWasmI32, 61)
  .addBody([
kExprI64Const, 0x0,  
kExprI32Const, 0x0,  
kExprIf, kWasmVoid,  
  kExprI32Const, 0x0,  
  kExprI32LoadMem, 0x01, 0x23,  
  kExprBrTable, 0x01, 0x00, 0x00, 
  kExprEnd,  
kExprI64SExtendI16,  
kExprI32Const, 0x00,  
kExprLocalGet, 0x00,  
kExprI32StoreMem16, 0x00, 0x10,  
kExprUnreachable,  
]).exportAs('main');
const instance = builder.instantiate();
assertThrows(instance.exports.main, WebAssembly.RuntimeError, 'unreachable');
