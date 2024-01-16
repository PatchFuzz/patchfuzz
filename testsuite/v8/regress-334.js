






























var READ_ONLY   = 1;
var DONT_ENUM   = 2;
var DONT_DELETE = 4;

function AddNamedProperty(object, name, value, attrs) {
  Object.defineProperty(object, name, {
      value,
      configurable: (attrs & DONT_DELETE) === 0,
      enumerable: (attrs & DONT_ENUM) === 0,
      writable: (attrs & READ_ONLY) === 0
  });
}

function func1(){}
function func2(){}

var object = {__proto__:{}};
AddNamedProperty(object, "foo", func1, DONT_ENUM | DONT_DELETE);
AddNamedProperty(object, "bar", func1, DONT_ENUM | READ_ONLY);
AddNamedProperty(object, "baz", func1, DONT_DELETE | READ_ONLY);
AddNamedProperty(object.__proto__, "bif", func1, DONT_ENUM | DONT_DELETE);
object.bif = func2;

function enumerable(obj) {
  var res = [];
  for (var i in obj) {
    res.push(i);
  }
  res.sort();
  return res;
}


assertArrayEquals(["baz", "bif"], enumerable(object), "enum0");
assertFalse(delete object.foo, "delete foo");
assertFalse(delete object.baz, "delete baz");
assertEquals(func1, object.foo, "read foo");
assertEquals(func1, object.bar, "read bar");
assertEquals(func1, object.baz, "read baz");
assertEquals(func2, object.bif, "read bif");


object.bar = "NO WAY";
assertEquals(func1, object.bar, "read bar 2");
assertArrayEquals(["baz", "bif"], enumerable(object), "enum1");


object.foo = func2;
assertArrayEquals(["baz", "bif"], enumerable(object), "enum2");
assertFalse(delete object.foo, "delete foo 2");


assertTrue(delete object.bar, "delete bar");
assertFalse("bar" in object, "has bar");
object.bar = func2;
assertTrue("bar" in object, "has bar 2");
assertEquals(func2, object.bar, "read bar 3");

assertArrayEquals(["bar", "baz", "bif"], enumerable(object), "enum3");


assertTrue(delete object.bif, "delete bif");
assertArrayEquals(["bar", "baz"], enumerable(object), "enum4");
assertEquals(func1, object.bif, "read bif 2");

assertTrue(delete object.bif, "delete bif 2");
assertArrayEquals(["bar", "baz"], enumerable(object), "enum5");
assertEquals(func1, object.bif, "read bif3");
