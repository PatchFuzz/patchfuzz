





d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

(function() {
  const builder = new WasmModuleBuilder();
  
  sig1 = makeSig([kWasmI32], []);
  builder.addFunction("main", sig1).addBodyWithEnd([
    
    
    kExprBlock,
  ]);
  assertThrows(function() { builder.instantiate(); }, WebAssembly.CompileError);
})();
