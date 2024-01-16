



d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addType(makeSig([kWasmI32, kWasmI32, kWasmI32], [kWasmI32]));

builder.addFunction(undefined, 0 )
  .addBodyWithEnd([
    
    
    kSimdPrefix, kExprS128Const, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,  
    kSimdPrefix, kExprI32x4ExtractLane, 0x00,  
    kExprEnd,  
  ]);
builder.addExport('main', 0);
const instance = builder.instantiate();
assertEquals(-1, instance.exports.main(1, 2, 3));

assertEquals(-1, instance.exports.main(1, 2, 3));
