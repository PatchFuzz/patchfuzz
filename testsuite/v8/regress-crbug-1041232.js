







let kSize = 128 * 1024 * 1024;

let kChunkSize = 2 * 1024 * 1024;
let a = new Uint8Array(kSize);

for (let i = 0; i < kChunkSize; i++) {
  a[i] = 42;
}



assertEquals(undefined, a[-kChunkSize - 1]);
assertEquals(undefined, a[-kChunkSize]);
assertEquals(undefined, a[-1]);
assertEquals(42, a[0]);
assertEquals(42, a[1]);


assertEquals(42, a[kChunkSize]);
assertEquals(42, a[kChunkSize + 1]);
assertEquals(42, a[kChunkSize + 1]);
assertEquals(42, a[kSize - kChunkSize]);
assertEquals(42, a[kSize - 1]);
assertEquals(undefined, a[kSize]);
assertEquals(undefined, a[kSize + 1]);
assertEquals(undefined, a[kSize + kChunkSize]);
assertEquals(undefined, a[kSize + kSize]);


assertThrows(() => new ArrayBuffer(Number.MAX_SAFE_INTEGER));
