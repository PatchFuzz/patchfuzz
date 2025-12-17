let one = { valueOf() { Array.prototype[1] = 1; } };
let ar = new Uint8ClampedArray([one,,]);
print(ar.length, 2);
print(ar[0], 0);
print(ar[1], 0);
