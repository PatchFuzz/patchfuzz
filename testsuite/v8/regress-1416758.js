





d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addFunction(undefined, kSig_v_v)
  .addLocals(kWasmI32, 75)
  .addBody([
kExprTry, 0x40,  
  kExprLocalGet, 0x3d,  
  kExprI32Const, 0x2e,  
  kExprI32GeS,  
  kExprIf, 0x40,  
    kExprCallFunction, 0x00,  
    kExprUnreachable,  
    kExprEnd,  
  kExprUnreachable,  
  kExprEnd,  
kExprUnreachable,  
]);
builder.toModule();
