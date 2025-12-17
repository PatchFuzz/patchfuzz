var mod = new WebAssembly.Module(readbuffer('dropteelocal.wasm'));
var a = new WebAssembly.Instance(mod).exports;
print(a.tee(1)); 
