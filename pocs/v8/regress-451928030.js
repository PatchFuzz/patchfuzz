function test(v) {
  v++;
  this[Symbol.dispose] = v;
}
const a = new test(42);
new test();
let b = 43;
({'b': b, ...Int32Array} = a);
