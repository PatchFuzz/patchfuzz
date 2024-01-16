





d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addFunction(undefined, makeSig([], [kWasmI64]))
    .addBody([
      ...wasmF32Const(11.3),  
      kExprI64SConvertF32,    
    ])
    .exportAs('main');
let instance = builder.instantiate();
assertEquals(11n, instance.exports.main());
