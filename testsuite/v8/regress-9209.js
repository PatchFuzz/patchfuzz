





d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addImport("d8", "quit", kSig_v_v)
builder.addFunction('do_not_crash', kSig_v_v)
        .addBody([kExprCallFunction, 0])
        .exportFunc();
builder.instantiate({d8: {quit: quit}}).exports.do_not_crash();
