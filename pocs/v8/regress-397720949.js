const ab = new ArrayBuffer(4, { "maxByteLength": 8 });
const f16 = new Float16Array(ab);
const evil = {
  valueOf() {
      ab.resize(0);
      return 1;
  }
};
print(-1, f16.lastIndexOf(0, evil));
