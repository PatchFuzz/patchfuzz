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


print(["baz", "bif"], enumerable(object), "enum0");
print(delete object.foo, "delete foo");
print(delete object.baz, "delete baz");
print(func1, object.foo, "read foo");
print(func1, object.bar, "read bar");
print(func1, object.baz, "read baz");
print(func2, object.bif, "read bif");


object.bar = "NO WAY";
print(func1, object.bar, "read bar 2");
print(["baz", "bif"], enumerable(object), "enum1");


object.foo = func2;
print(["baz", "bif"], enumerable(object), "enum2");
print(delete object.foo, "delete foo 2");


print(delete object.bar, "delete bar");
print("bar" in object, "has bar");
object.bar = func2;
print("bar" in object, "has bar 2");
print(func2, object.bar, "read bar 3");

print(["bar", "baz", "bif"], enumerable(object), "enum3");


print(delete object.bif, "delete bif");
print(["bar", "baz"], enumerable(object), "enum4");
print(func1, object.bif, "read bif 2");

print(delete object.bif, "delete bif 2");
print(["bar", "baz"], enumerable(object), "enum5");
print(func1, object.bif, "read bif3");
