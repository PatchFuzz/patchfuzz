





const builder = new WasmModuleBuilder();
const results = new Array(9).fill(kWasmI32);
builder.addFunction('foo', makeSig([], results)).addBody([kExprUnreachable]);
builder.instantiate();
