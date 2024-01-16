





d8.file.execute("test/mjsunit/wasm/wasm-module-builder.js");

let builder = new WasmModuleBuilder();

builder.addMemory(1, 2, false, false);

let callee = builder.addFunction('callee', kSig_v_v).addBody([kExprNop]);

builder.addDeclarativeElementSegment([callee.index]);

let main_func = builder.addFunction('main', kSig_v_v).exportFunc().addBody([
  kExprRefFunc, callee.index,
  kExprCallRef, callee.type_index,
  kExprI32Const, 0,
  kExprI32LoadMem, 0, 0,
  kExprDrop,
]);

let instance = builder.instantiate();
let main = instance.exports.main;

for (let i = 0; i < 20; i++) main();
%WasmTierUpFunction(main);
main();
