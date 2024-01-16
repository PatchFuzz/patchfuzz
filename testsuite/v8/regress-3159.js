



try {
  new Uint32Array(new ArrayBuffer(1), 2, 3);
} catch (e) {
  assertEquals("start offset of Uint32Array should be a multiple of 4",
               e.message);
}
