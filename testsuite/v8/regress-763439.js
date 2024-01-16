



d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

var builder = new WasmModuleBuilder();
builder.addMemory(0, 1234, false);
builder.addFunction('f', kSig_i_v)
    .addBody([
      kExprI32Const, 0x1d,                       
      kExprMemoryGrow, 0x00,                     
      kExprI32LoadMem, 0x00, 0xff, 0xff, 0x45,  
    ])
    .exportFunc();

var module = new WebAssembly.Module(builder.toBuffer());
var instance1 = new WebAssembly.Instance(module);
instance1.exports.f();
var instance2 = new WebAssembly.Instance(module);
instance2.exports.f();
