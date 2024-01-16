




var mod = new WebAssembly.Module(readbuffer('i32_popcnt.wasm'));
var a = new WebAssembly.Instance(mod).exports;
print(a.popcount(3)); 
print(a.popcount(7)); 
print(a.popcount(8));
print (a.popcount(-1));
print (a.popcount(0));


