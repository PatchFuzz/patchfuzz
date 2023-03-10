





let builder = new WasmModuleBuilder();
builder.addCustomSection('BBBB', []);
builder.addCustomSection('AAAA', new Array(32).fill(0));
let buffer = builder.toBuffer();

buffer = buffer.slice(0, buffer.byteLength - 30);

print(() => new WebAssembly.Module(buffer), WebAssembly.CompileError);
