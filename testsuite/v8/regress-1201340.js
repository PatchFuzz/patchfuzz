



d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

builder = new WasmModuleBuilder();
builder.addImportedMemory();
let leb = [0x80, 0x80, 0x80, 0x80, 0x0c];
builder.addFunction('store', makeSig([kWasmI32, kWasmI32], []))
    .addBody([kExprLocalGet, 0, kExprLocalGet, 1, kExprI32StoreMem, 0, ...leb])
    .exportFunc();
builder.toModule();
