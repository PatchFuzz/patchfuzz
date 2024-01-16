


























var setter_value = 0;

this.__defineSetter__("a", function(v) { setter_value = v; });
eval("var a = 1");
assertEquals(1, setter_value);
assertFalse("value" in Object.getOwnPropertyDescriptor(this, "a"));

eval("with({}) { eval('var a = 2') }");
assertTrue("get" in Object.getOwnPropertyDescriptor(this, "a"));
assertFalse("value" in Object.getOwnPropertyDescriptor(this, "a"));
assertEquals(2, setter_value);



this.__defineSetter__("a", function(v) { assertUnreachable(); });
eval("function a() {}");
assertTrue("value" in Object.getOwnPropertyDescriptor(this, "a"));

this.__defineSetter__("b", function(v) { setter_value = v; });
try {
  eval("const b = 3");
} catch(e) { }
assertEquals(2, setter_value);

try {
  eval("with({}) { eval('const b = 23') }");
} catch(e) {
  assertInstanceof(e, TypeError);
}

this.__defineSetter__("c", function(v) { throw 42; });
try {
  eval("var c = 1");
  assertUnreachable();
} catch(e) {
  assertEquals(42, e);
  assertFalse("value" in Object.getOwnPropertyDescriptor(this, "c"));
}




__proto__.__defineSetter__("aa", function(v) { assertUnreachable(); });
eval("var aa = 1");
assertTrue(this.hasOwnProperty("aa"));

__proto__.__defineSetter__("bb", function(v) { assertUnreachable(); });
eval("with({}) { eval('var bb = 2') }");
assertTrue(this.hasOwnProperty("bb"));



__proto__.__defineSetter__("cc", function(v) { assertUnreachable(); });
eval("function cc() {}");
assertTrue(this.hasOwnProperty("cc"));

__proto__.__defineSetter__("dd", function(v) { assertUnreachable(); });
try {
  eval("const dd = 23");
} catch(e) {
  assertUnreachable();
}

try {
  eval("with({}) { eval('const dd = 23') }");
} catch(e) {
  assertInstanceof(e, TypeError);
}
