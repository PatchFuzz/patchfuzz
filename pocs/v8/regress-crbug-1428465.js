try {
  const v2 = new Int32Array(0xFFFF);
  this.WebAssembly.Memory.apply(this, v2);
} catch(e) {
}
