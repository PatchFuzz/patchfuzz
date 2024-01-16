



d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

var builder = new WasmModuleBuilder();
builder.addFunction('f', kSig_v_v).addBody([
  kExprI32Const, 0, kExprBrTable,
  
  0x80, 0x80, 0x80, 0x80, 0x08,
  
  0
]);
assertThrows(() => builder.instantiate(), WebAssembly.CompileError);
