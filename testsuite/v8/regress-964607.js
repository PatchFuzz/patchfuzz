





d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

let builder = new WasmModuleBuilder();

builder.addImportedTable('ffi', 't1', 5, 5, kWasmAnyFunc);
builder.addImportedTable('ffi', 't2', 9, 9, kWasmAnyFunc);

builder.addFunction('foo', kSig_v_v).addBody([]).exportFunc();

let module = builder.toModule();
let table1 =
    new WebAssembly.Table({element: 'anyfunc', initial: 5, maximum: 5});

let table2 =
    new WebAssembly.Table({element: 'anyfunc', initial: 9, maximum: 9});

let instance =
    new WebAssembly.Instance(module, {ffi: {t1: table1, t2: table2}});
let table3 =
    new WebAssembly.Table({element: 'anyfunc', initial: 9, maximum: 9});

table3.set(8, instance.exports.foo);
new WebAssembly.Instance(module, {ffi: {t1: table1, t2: table3}});
