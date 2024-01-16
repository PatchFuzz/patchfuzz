





d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addFunction('test', kSig_i_i).addBody([kExprUnreachable]);
let module = new WebAssembly.Module(builder.toBuffer());
var worker = new Worker('onmessage = function() {};', {type: 'string'});
worker.postMessage(module);
