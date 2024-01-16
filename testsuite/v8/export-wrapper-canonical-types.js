





d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

let builder = new WasmModuleBuilder();


let dummy = builder.addStruct([]);
let struct = builder.addStruct([makeField(kWasmI32, false)]);
let creatorAnySig = builder.addType(makeSig([], [kWasmAnyRef]));
let funcSig = builder.addType(makeSig([wasmRefType(creatorAnySig)],
                                      [kWasmExternRef]));
let exportedAny = builder.addFunction("exportedAny", funcSig)
  .addBody([
    kExprLocalGet, 0,
    kExprCallRef, creatorAnySig,
    kGCPrefix, kExprExternExternalize,
  ])

builder.addFunction("createStruct", creatorAnySig)
  .addBody([kExprI32Const, 12, kGCPrefix, kExprStructNew, struct])
  .exportFunc();

builder.addFunction("refFunc", makeSig([], [wasmRefType(funcSig)]))
  .addBody([kExprRefFunc, exportedAny.index])
  .exportFunc();

builder.addDeclarativeElementSegment([exportedAny.index]);

let instance = builder.instantiate();
let wasm = instance.exports;

let wasm2 = (function () {
  let builder = new WasmModuleBuilder();

  let struct = builder.addStruct([makeField(kWasmI32, false)]);
  let creatorAnySig = builder.addType(makeSig([], [kWasmAnyRef]));
  let funcSig = builder.addType(makeSig([wasmRefType(creatorAnySig)],
                                        [kWasmExternRef]));
  builder.addFunction("exportedAny", funcSig)
    .addBody([
      kExprLocalGet, 0,
      kExprCallRef, creatorAnySig,
      kGCPrefix, kExprExternExternalize,
    ])
    .exportFunc();

  builder.addFunction("createStruct", creatorAnySig)
    .addBody([kExprI32Const, 12, kGCPrefix, kExprStructNew, struct])
    .exportFunc();

  let instance = builder.instantiate();
  let wasm = instance.exports;
  
  
  
  wasm.exportedAny(wasm.createStruct);
  return wasm;
})();



wasm.refFunc()(wasm.createStruct);

wasm.refFunc()(wasm2.createStruct);
