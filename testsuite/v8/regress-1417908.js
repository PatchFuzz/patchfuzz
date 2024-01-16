





d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addFunction("testFailNull", makeSig([], [kWasmAnyRef]))
.exportFunc()
.addBody([
  kExprRefNull, kAnyRefCode,
  kGCPrefix, kExprBrOnStruct, 0,
  kGCPrefix, kExprBrOnCastFailNull, 0, kNullRefCode,
  kGCPrefix, kExprBrOnStruct, 0,
  kExprUnreachable,
]);

builder.addFunction("testNull", makeSig([], [kWasmAnyRef]))
.exportFunc()
.addBody([
  kExprRefNull, kAnyRefCode,
  kGCPrefix, kExprBrOnStruct, 0,
  kGCPrefix, kExprBrOnCastNull, 0, kNullRefCode,
  kGCPrefix, kExprBrOnStruct, 0,
  kExprUnreachable,
]);

let wasm = builder.instantiate().exports;
assertTraps(kTrapUnreachable, () => wasm.testFailNull());
assertSame(null, wasm.testNull());
