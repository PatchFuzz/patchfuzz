







(function() {
  const builder = new WasmModuleBuilder();
  
  sig1 = makeSig([kWasmI32], []);
  builder.addFunction("main", sig1).addBodyWithEnd([
    
    
    kExprBlock,
  ]);
  print(function() { builder.instantiate(); }, WebAssembly.CompileError);
})();
