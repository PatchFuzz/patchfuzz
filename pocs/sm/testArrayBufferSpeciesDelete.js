delete ArrayBuffer[Symbol.species];
var a = new Uint8Array(new Uint8Array([1, 2]));
print(a.length, 2);
print(a[0], 1);
print(a[1], 2);
