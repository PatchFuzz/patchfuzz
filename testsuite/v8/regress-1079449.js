





d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addMemory(16, 32, false, true);
const sig = builder.addType(makeSig(
    [
      kWasmI64, kWasmI32, kWasmI64, kWasmI32, kWasmI32, kWasmI32, kWasmI32,
      kWasmI32, kWasmI32, kWasmI64, kWasmI64, kWasmI64
    ],
    [kWasmI64]));

builder.addFunction(undefined, sig)
    .addLocals(kWasmF32, 10)
    .addLocals(kWasmI32, 4)
    .addLocals(kWasmF64, 1)
    .addLocals(kWasmI32, 15)
    .addBodyWithEnd([
      
      
      kExprI32Const, 0x00,  
      kExprI64Const, 0x00,  
      kExprI64Const, 0x00,  
      kAtomicPrefix, kExprI64AtomicCompareExchange, 0x00,
      0x8,      
      kExprEnd,  
    ]);

builder.addExport('main', 0);
const instance = builder.instantiate();
assertEquals(
    0n, instance.exports.main(1n, 2, 3n, 4, 5, 6, 7, 8, 9, 10n, 11n, 12n, 13n));
