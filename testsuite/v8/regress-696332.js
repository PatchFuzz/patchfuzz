



try {
  throw 1
} catch (v) {
  function foo() { return v; }
  foo();
  v = 2
}
assertEquals(2, foo());
