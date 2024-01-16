






























var setterCalled = false;

Object.prototype.__defineSetter__("x", function() { setterCalled = true; });

function test() {
  eval("var x = 42");
  assertFalse(setterCalled, "accessor setter call on context object");
  assertEquals(42, eval("x"));
}

test();
