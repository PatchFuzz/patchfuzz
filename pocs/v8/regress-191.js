var setterCalled = false;

Object.prototype.__defineSetter__("x", function() { setterCalled = true; });

function test() {
  eval("var x = 42");
  print(setterCalled, "accessor setter call on context object");
  print(42, eval("x"));
}

test();
