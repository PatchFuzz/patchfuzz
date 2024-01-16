




var mod = new WebAssembly.Module(readbuffer('basic.wasm'));
var a = new WebAssembly.Instance(mod, {});
print(a.a(11));
