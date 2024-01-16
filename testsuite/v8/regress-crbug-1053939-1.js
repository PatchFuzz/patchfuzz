






v = {};
v.__proto__ = new Int32Array(1);
function foo() {
  for (var i = 0; i < 2; i++) {
    v[i] = 0;
  }
}
foo();
assertEquals(Object.keys(v).length, 1);
