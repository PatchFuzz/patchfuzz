let kSize = 128 * 1024 * 1024;

let kChunkSize = 2 * 1024 * 1024;
let a = new Uint8Array(kSize);

for (let i = 0; i < kChunkSize; i++) {
  a[i] = 42;
}



print(undefined, a[-kChunkSize - 1]);
print(undefined, a[-kChunkSize]);
print(undefined, a[-1]);
print(42, a[0]);
print(42, a[1]);


print(42, a[kChunkSize]);
print(42, a[kChunkSize + 1]);
print(42, a[kChunkSize + 1]);
print(42, a[kSize - kChunkSize]);
print(42, a[kSize - 1]);
print(undefined, a[kSize]);
print(undefined, a[kSize + 1]);
print(undefined, a[kSize + kChunkSize]);
print(undefined, a[kSize + kSize]);


print(() => new ArrayBuffer(Number.MAX_SAFE_INTEGER));
