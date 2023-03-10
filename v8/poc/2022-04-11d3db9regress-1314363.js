







const builder = new WasmModuleBuilder();
builder.addFunction(undefined, makeSig([], [kWasmI64]))
    .addBody([
      ...wasmF32Const(11.3),  
      kExprI64SConvertF32,    
    ])
    .exportAs('main');
let instance = builder.instantiate();
print(11n, instance.exports.main());
