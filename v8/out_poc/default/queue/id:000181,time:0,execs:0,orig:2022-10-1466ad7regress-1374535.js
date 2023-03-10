







let builder = new WasmModuleBuilder();
let global = builder.addGlobal(kWasmI32);
let callee =
    builder.addFunction('callee', kSig_v_v).addBody([kExprLocalGet, 11]);
builder.addFunction('main', kSig_v_v)
    .addBody([kExprCallFunction, callee.index])
    .exportFunc();
print(
    () => builder.instantiate(), WebAssembly.CompileError,
    /invalid local index: 11/);
