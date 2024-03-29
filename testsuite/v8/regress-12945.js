





d8.file.execute("test/mjsunit/wasm/wasm-module-builder.js");

let builder = new WasmModuleBuilder();
let i32_field = makeField(kWasmI32, true);
builder.startRecGroup();
let supertype = builder.addStruct([i32_field]);
let sub1 = builder.addStruct([i32_field, i32_field], supertype);
let sub2 = builder.addStruct([i32_field, makeField(kWasmF64, true)], supertype);
builder.endRecGroup();
let sig = makeSig([wasmRefNullType(supertype)], [kWasmI32]);

let callee = builder.addFunction("callee", sig).addBody([
  kExprLocalGet, 0,
  kGCPrefix, kExprRefTestDeprecated, sub1,
  kExprIf, kWasmVoid,
  kExprLocalGet, 0,
  kGCPrefix, kExprRefCast, sub1,
  kGCPrefix, kExprStructGet, sub1, 0,
  kExprReturn,
  kExprElse,
  kExprLocalGet, 0,
  kGCPrefix, kExprRefCast, sub2,
  
  
  
  kExprRefAsNonNull,
  kGCPrefix, kExprStructGet, sub2, 0,
  kExprReturn,
  kExprEnd,
  kExprI32Const, 42,
]);

builder.addFunction("crash", kSig_i_v).addBody([
  kGCPrefix, kExprStructNewDefault, sub1,
  kExprCallFunction, callee.index,
]).exportFunc();

let instance = builder.instantiate();
instance.exports.crash();
