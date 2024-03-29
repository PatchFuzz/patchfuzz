





class A {}
class B {}
Object.assign(B, A);
assertEquals("class B {}", B.toString());

(function() {
  function f(a, i, v) {
    a[i] = v;
  }

  f("make it generic", 0, 0);

  var o = {foo: "foo"};
  %OptimizeObjectForAddingMultipleProperties(o, 10);

  var s = %CreatePrivateSymbol("priv");
  f(o, s, "private");
  %ToFastProperties(o);

  var desc = Object.getOwnPropertyDescriptor(o, s);
  assertEquals("private", desc.value);
  assertTrue(desc.writable);
  assertFalse(desc.enumerable);
  assertTrue(desc.configurable);
})();
