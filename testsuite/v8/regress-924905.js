



d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

let builder = new WasmModuleBuilder();
builder.addFunction("kaboom", kSig_i_v)
    .addBody([
      kExprI32Const, 0,
      kExprI32Const, 0,
      kExprI32And,
      kExprI32Const, 0,
      kExprI32ShrU,
    ]).exportFunc();
let instance = builder.instantiate();
assertEquals(0, instance.exports.kaboom());
