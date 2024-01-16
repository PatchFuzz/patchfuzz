












d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

var builder = new WasmModuleBuilder();

var func_idx = builder.addFunction('helper', kSig_i_v)
    .addLocals(kWasmI32, 1)
    .addBody([
        kExprI32Const, 0x01,
    ]).index;

var large_function_body = [];
const num_temporaries = 16 * 1024;
for (let i = 0; i < num_temporaries; ++i) {
  large_function_body.push(kExprCallFunction, func_idx);
}
for (let i = 1; i < num_temporaries; ++i) {
  large_function_body.push(kExprI32Add);
}

builder.addFunction('test', kSig_i_v)
    .addBody(large_function_body)
    .exportFunc();
var module = builder.instantiate();

assertEquals(num_temporaries, module.exports.test());
