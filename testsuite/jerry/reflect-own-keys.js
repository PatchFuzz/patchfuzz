








































var object1 = {
  property1: 42,
  property2: 13
};

var array1 = [];

assert (Reflect.ownKeys (object1)[0] === "property1");
assert (Reflect.ownKeys (object1)[1] === "property2");
assert (Reflect.ownKeys (object1).length === 2);

var obj = { a: 1, b: 2};
var keys = Reflect.ownKeys (obj);
assert (2 === keys.length);
assert ("a" === keys[0]);
assert ("b" === keys[1]);

var obj = { a: function(){}, b: function(){} };
var keys = Reflect.ownKeys (obj);
assert (2 === keys.length);
assert ("a" === keys[0]);
assert ("b" === keys[1]);


var obj = { a: 1, b: 2, c: 3 };
delete obj.b;
var keys = Reflect.ownKeys (obj)
assert (2 === keys.length);
assert ("a" === keys[0]);
assert ("c" === keys[1]);


var keys = Reflect.ownKeys ([1, 2]);
assert (3 === keys.length);
assert ("0" === keys[0]);
assert ("1" === keys[1]);
assert ("string" === typeof keys[0]);
assert ("string" === typeof keys[1]);
assert ("length" === keys[2]);


var obj = { foo: "foo" };
var obj2 = { bar: "bar" };
Object.setPrototypeOf (obj, obj2)
keys = Reflect.ownKeys (obj);
assert (1 === keys.length);
assert ("foo" === keys[0]);


var obj = {};
Object.defineProperty (obj, "getter", function() {})

keys = Reflect.ownKeys (obj);
assert (1 === keys.length);
assert ("getter" === keys[0]);


var savedConcat = Array.prototype.concat;
Array.prototype.concat = function() { return []; }
keys = Reflect.ownKeys ({0: 'foo', bar: 'baz'});
assert (2 === keys.length);
assert ('0' === keys[0]);
assert ('bar'=== keys[1]);
assert (Array.prototype === Object.getPrototypeOf (keys))
Array.prototype.concat = savedConcat;

try {
  Reflect.ownKeys (4);
  assert (false);
} catch (e) {
  assert (e instanceof TypeError);
}

try {
  Reflect.ownKeys("cica");
  assert (false);
} catch (e) {
  assert (e instanceof TypeError);
}

try {
  Reflect.ownKeys(true);
  assert (false);
} catch (e) {
  assert (e instanceof TypeError);
}

assert (Reflect.ownKeys (Object (4)) !== [])
assert (Reflect.ownKeys (Object ("foo")) !== ["0", "1", "2", "length"])
assert (Reflect.ownKeys (Object (4)) !== []);
assert (Reflect.ownKeys (Object ("foo")) !== [0, 1, 2, "length"]);
assert (Reflect.ownKeys (Object (true)) !== []);

var id = Symbol("my kitten");
var user = {
  name: "Bob",
  age:  30,
  [id]: "is batcat"
}

assert (Reflect.ownKeys (user)[0] === "name");
assert (Reflect.ownKeys (user)[1] === "age");
assert (Reflect.ownKeys (user)[2] === id);
