



d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

var {proxy, revoke} = Proxy.revocable({}, {});
revoke();
let builder = new WasmModuleBuilder();
builder.addImport('m', 'q', kSig_v_v);
WebAssembly.instantiate(builder.toModule(), proxy).catch(error => {});
