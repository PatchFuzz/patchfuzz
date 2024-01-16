



d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addMemory(16, 32, false);
builder.addType(makeSig([], [kWasmI32]));

builder.addFunction(undefined, 0 )
  .addBodyWithEnd([


kExprI32Const, 0x00,  
kSimdPrefix, kExprS128Load8x8U, 0x03, 0xff, 0xff, 0x3f,  
kSimdPrefix, kExprI16x8ExtractLaneS, 0,
kExprEnd,  
]).exportAs('main');
const instance = builder.instantiate();
assertTraps(kTrapMemOutOfBounds, () => instance.exports.main());
