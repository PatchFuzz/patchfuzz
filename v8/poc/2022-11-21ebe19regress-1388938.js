







let builder = new WasmModuleBuilder();

let table = builder.addTable(kWasmFuncRef, 10);

builder.addActiveElementSegment(table.index, [kExprI32Const, 0], [],
                                wasmRefNullType(0));

print(() => builder.instantiate(), WebAssembly.CompileError);
