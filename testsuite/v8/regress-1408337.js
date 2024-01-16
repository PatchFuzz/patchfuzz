





d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addType(makeSig([kWasmI32, kWasmI32, kWasmI32], [kWasmI32]));
builder.addMemory(16, 32, false);

builder.addFunction(undefined, 0 )
  .addBodyWithEnd([


kExprI32Const, 0x15,  
kSimdPrefix, kExprS128Load8x8U, 0x00, 0xff, 0xff, 0xff, 0x00,  
kExprUnreachable,  
kExprEnd,  
]);
builder.addExport('main', 0);
const instance = builder.instantiate();
assertThrows(() => instance.exports.main(1, 2, 3), WebAssembly.RuntimeError, /memory access out of bounds/);
