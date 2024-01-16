





d8.file.execute("test/mjsunit/wasm/wasm-module-builder.js");

function makeFFI(func, t) {
  var builder = new WasmModuleBuilder();

  var sig_index = builder.addType(makeSig([t,t,t,t,t,t,t,t,t,t], [t]));
  builder.addImport("m", "func", sig_index);
  
  
  
  builder.addFunction("main", sig_index)
    .addBody([
      kExprLocalGet, 0,         
      kExprLocalGet, 1,         
      kExprLocalGet, 2,         
      kExprLocalGet, 3,         
      kExprLocalGet, 4,         
      kExprLocalGet, 5,         
      kExprLocalGet, 6,         
      kExprLocalGet, 7,         
      kExprLocalGet, 8,         
      kExprLocalGet, 9,         
      kExprCallFunction, 0,     
      kExprDrop,                
      kExprLocalGet, 0,         
      kExprLocalGet, 1,         
      kExprLocalGet, 2,         
      kExprLocalGet, 3,         
      kExprLocalGet, 4,         
      kExprLocalGet, 5,         
      kExprLocalGet, 6,         
      kExprLocalGet, 7,         
      kExprLocalGet, 8,         
      kExprLocalGet, 9,         
      kExprCallFunction, 0,    
    ])                          
    .exportFunc();

  return builder.instantiate({m: {func: func}}).exports.main;
}

function print10(a, b, c, d, e, f, g, h, i) {
  gc();
}
(function F64Test() {
  var main = makeFFI(print10, kWasmF64);
  for (var i = 1; i < 2e+80; i *= -1137) {
    main(i - 1, i, i + 2, i + 3, i + 4, i + 5, i + 6, i + 7, i + 8);
  }
})();
