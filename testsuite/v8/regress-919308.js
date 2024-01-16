



d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addFunction(undefined, kSig_i_i)
  .addLocals(kWasmI32, 5)
  .addBody([
    kExprLocalGet, 0,    
    kExprIf, kWasmI32,
      kExprLocalGet, 0,  
    kExprElse,
      kExprUnreachable,
      kExprEnd,
    kExprIf, kWasmI32,
      kExprLocalGet, 0,  
    kExprElse,
      kExprUnreachable,
      kExprEnd,
    kExprIf, kWasmI32,
      kExprI32Const, 0,
      kExprLocalGet, 0,
      kExprI32Sub,       
      kExprLocalGet, 0,
      kExprLocalGet, 0,
      kExprI32Sub,       
      kExprI32Sub,       
    kExprElse,
      kExprUnreachable,
      kExprEnd
]);
builder.addExport('main', 0);
const instance = builder.instantiate();
assertEquals(-1, instance.exports.main(1));
