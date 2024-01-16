





let mem = new WebAssembly.Memory({initial: 1});
try {
  mem.grow(49151);
} catch (e) {
  
  if (!(e instanceof RangeError)) throw e;
}
