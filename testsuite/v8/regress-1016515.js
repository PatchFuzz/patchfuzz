





d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

var builder = new WasmModuleBuilder();
var func = builder.addFunction('func', kSig_i_v).addBody([kExprI32Const, 1]);
var body = [];
for (let i = 0; i < 200; ++i) {
    body.push(kExprCallFunction, func.index);
}
for (let i = 1; i < 200; ++i) {
    body.push(kExprI32Add);
}
builder.addFunction('test', kSig_i_v).addBody(body).exportFunc();
var instance = builder.instantiate();
instance.exports.test();
