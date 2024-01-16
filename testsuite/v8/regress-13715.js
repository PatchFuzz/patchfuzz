



d8.file.execute("test/mjsunit/wasm/wasm-module-builder.js");

var builder = new WasmModuleBuilder();

let f0 = builder.addFunction('f0', kSig_i_v).addBody([
  kExprI32Const, 0
]);

builder.addFunction('main', kSig_i_v)
  .addLocals(kWasmF64, 1)
  .addBody([
    kExprBlock, kWasmI32,
      kExprBlock, kWasmI32,
        kExprI32Const, 42,
        kExprI32Const, 0,
        kExprI32Const, 0,
        kExprBrIf, 0,
        kExprBrIf, 0,
      kExprEnd,  
      kExprCallFunction, f0.index,
      kExprI32Eqz,
      kExprBrIf, 0,
    kExprEnd,  
  ])
  .exportFunc();

var instance = builder.instantiate();
assertEquals(42, (instance.exports.main()));
