;

var desc = Object.getOwnPropertyDescriptor(Array, "of");
print(desc.configurable, true);
print(desc.enumerable, false);
print(desc.writable, true);
print(Array.of.length, 0);
print(() => new Array.of(), TypeError);  


for (let v of [undefined, null, false, "cow"])
    print(Array.isArray(Array.of.call(v)), true);
