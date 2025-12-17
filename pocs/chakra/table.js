var mod = new WebAssembly.Module(readbuffer('table.wasm'));
var a1 = new WebAssembly.Instance(mod, {"m" : {x : 10}}).exports;


print(a1.call(1));
print(a1.call(2));
print(a1.call(3));
print(a1.call(4));





print(a1.call(10));
print(a1.call(11));
print(a1.call(12));
print(a1.call(13));

