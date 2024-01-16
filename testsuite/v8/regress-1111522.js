



d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');





const builder = new WasmModuleBuilder();


builder.addFunction(undefined, kSig_i_iii).addBodyWithEnd([
  kSimdPrefix, kExprS128Const, ...new Array(16).fill(0xff),
  kExprI32Const, 0x01,
  kSimdPrefix, kExprI64x2ShrS, 0x01,
  kExprDrop,
  kExprLocalGet, 0x02,
  kExprEnd,
]);
builder.addExport('main', 0);
const instance = builder.instantiate();
assertEquals(3, instance.exports.main(1, 2, 3));
