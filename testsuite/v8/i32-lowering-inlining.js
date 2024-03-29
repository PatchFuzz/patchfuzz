








d8.file.execute("test/mjsunit/wasm/wasm-module-builder.js");

let builder = new WasmModuleBuilder();

let callee1 = builder.addFunction("callee1", kSig_l_l)
    .addBody([kExprLocalGet, 0, kExprI64Const, 1, kExprI64Add]);

let callee2 = builder.addFunction("callee2", kSig_l_l)
    .addBody([kExprLocalGet, 0, kExprI64Const, 1, kExprI64Sub]);

builder.addFunction("caller", kSig_l_l)
    .addBody([kExprLocalGet, 0,
              kExprI64Const, 0,
              kExprI64GtS,
              kExprIf, kWasmI64,
                kExprLocalGet, 0, kExprCallFunction, 0,
              kExprElse,
                kExprLocalGet, 0, kExprCallFunction, 1,
              kExprEnd])
    .exportFunc();

let instance = builder.instantiate();
assertEquals(5n, instance.exports.caller(4n));
assertEquals(-9n, instance.exports.caller(-8n));
