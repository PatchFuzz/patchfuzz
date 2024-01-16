





d8.file.execute("test/mjsunit/wasm/wasm-module-builder.js");

var builder = new WasmModuleBuilder();

var sig_index = builder.addType(
    {params: [wasmRefType(kWasmStructRef)], results: []});

builder.addFunction('main', sig_index).addBody([]).exportFunc();

var instance = builder.instantiate();

assertThrows(() => instance.exports.main(undefined), TypeError);
assertThrows(() => instance.exports.main(null), TypeError);
