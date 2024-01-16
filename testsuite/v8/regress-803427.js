





d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

var builder = new WasmModuleBuilder();
let module = new WebAssembly.Module(builder.toBuffer());
var worker = new Worker('onmessage = function() {};', {type: 'string'});
worker.postMessage(module)
