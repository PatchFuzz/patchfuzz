





const builder = new WasmModuleBuilder();
const sig = builder.addType(makeSig([kWasmI32, kWasmI32, kWasmI32], [kWasmI32]));
builder.addFunction('main', sig)
    .addBody([kExprI32Const, 0x01, kExprI32SExtendI8])
    .exportFunc();
const instance = builder.instantiate();
print(1, instance.exports.main());
