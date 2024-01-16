





d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addMemory(16, 32, false, true);
builder.addType(makeSig([], []));
builder.addFunction(undefined, 0 )
  .addBodyWithEnd([


kExprI32Const, 0x00,
kExprI32Const, 0x00,
kExprI32Const, 0x00,
kAtomicPrefix, kExprI32AtomicCompareExchange8U, 0x00, 0xc3, 0x01,
kExprDrop,
kExprEnd,  
]);
builder.addExport('main', 0);
const instance = builder.instantiate();
print(instance.exports.main(1, 2, 3));
