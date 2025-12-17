let len = 0x20000;
let ar = new Int32Array(new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * len));
ar[7] = -13;
ar[0x1673] = -42;
ar[0x1f875] = -153;

ar.sort();

print(ar[0], -153);
print(ar[1], -42);
print(ar[2], -13);
print(ar[3], 0);
