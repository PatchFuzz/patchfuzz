



d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

var builder = new WasmModuleBuilder();
sig = makeSig([kWasmI32, kWasmI32, kWasmI32, kWasmI32, kWasmI32], [kWasmI32]);
builder.addFunction(undefined, sig).addBody([kExprLocalGet, 4]);
builder.addMemory(16, 32);
builder.addFunction('main', sig)
    .addBody([
      kExprI32Const, 0, kExprLocalSet, 0,
      
      kExprI32Const, 0, kExprI32Const, 0, kExprI32Const, 0, kExprI32Const, 0,
      kExprLocalGet, 4, kExprI32Const, 1, kExprI32Add,
      
      
      kExprLocalGet, 0, kExprI32Const, 1, kExprI32Add, kExprLocalGet, 1,
      kExprLocalGet, 1, kExprI32Add, kExprI32Add, kExprDrop,
      
      kExprCallFunction, 0
    ])
    .exportFunc();
var instance = builder.instantiate();
assertEquals(11, instance.exports.main(2, 4, 6, 8, 10));
