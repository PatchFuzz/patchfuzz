const gsab = new SharedArrayBuffer(100, {maxByteLength: 200});
const ta = new Int8Array(1);
class c extends Int8Array {
  constructor() {
    super(gsab);
  }
}
ta.constructor = c;
const mapper_params = [];
function mapper(x) {
  mapper_params.push(x);
  return x + 1;
}
const mapped = ta.map(mapper);
print([0], mapper_params);

print(gsab.byteLength, mapped.length);
print(1, mapped[0]);
print(gsab, mapped.buffer);
