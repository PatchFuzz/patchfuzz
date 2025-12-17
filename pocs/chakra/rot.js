var mod = new WebAssembly.Module(readbuffer('rot.wasm'));
var a = new WebAssembly.Instance(mod).exports;
print(a.rotl(11,2)); 
print(a.rotl(65536,2)); 
print(a.rotr(65536,2)); 
print(a.rotl(0xff00, 24)); 
print(a.rotl(0x80000000, 2)); 
print(a.rotr(0x00000001, 1)); 
