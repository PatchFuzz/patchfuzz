



d8.file.execute("test/mjsunit/wasm/wasm-module-builder.js");

let builder = new WasmModuleBuilder();

let callee = builder.addFunction('callee', kSig_v_v).addBody([kExprNop]);

let body = [];
for (let i = 0; i < 600; i++) {
  body.push(kExprCallFunction, callee.index);
}

builder.addFunction('main', kSig_v_v).exportFunc().addBody(body);

let instance = builder.instantiate();
instance.exports.main();
