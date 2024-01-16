



d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');


const builder = new WasmModuleBuilder();
builder.addFunction('test', kSig_v_v).addBody([]);

const buffer = builder.toBuffer();
assertPromiseResult(
    WebAssembly.compile(buffer), _ => Realm.createAllowCrossRealmAccess());
