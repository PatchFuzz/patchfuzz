



if (typeof WebAssembly != 'undefined') {
  const memory = new WebAssembly.Memory({
      "initial": 1,
      "maximum": 10,
      "shared": true,
  });
  assertEquals(65536, memory.buffer.maxByteLength);
}
