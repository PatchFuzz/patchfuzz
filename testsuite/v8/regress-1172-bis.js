





























Object.prototype.__defineGetter__(0, function() { throw 42; });
var exception = false;
try {
  Object[0]();
} catch(e) {
  exception = true;
  assertEquals(42, e);
}
assertTrue(exception);
