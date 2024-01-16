




var mod = new WebAssembly.Module(readbuffer('controlflow.wasm'));
var a = new WebAssembly.Instance(mod).exports;
print(a.a(0));
print(a.a(1));
print(a.yield_top(0))
print(a.yield_top(1))
print(a.br_if(0))
print(a.br_if(1))
print(a.br())
print(a.block())
