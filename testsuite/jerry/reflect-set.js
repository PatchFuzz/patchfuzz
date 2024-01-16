

















var object = {};
Reflect.set (object, 'property', 'batcat');

assert (object.property === 'batcat');

var array = ['cat', 'cat', 'cat'];
Reflect.set (array, 2, 'bat');

assert (array[2] === 'bat');

assert (3 === Reflect.set.length);

try {
  Reflect.set ();
  assert (false);
} catch (e) {
  assert (e instanceof TypeError);
}

try {
  Reflect.set (42, 'bat');
  assert (false);
} catch (e) {
  assert (e instanceof TypeError);
}

try {
  Reflect.set (null, 'bat');
  assert (false);
} catch (e) {
  assert (e instanceof TypeError);
}

var target = {};
var a = { [Symbol.toPrimitive]: function () { return 'bat' } };
var b = { [Symbol.toPrimitive]: function () { throw 'cat' } };
assert (Reflect.set (target, a, 42) === true);
assert (42 === target.bat);

try {
  Reflect.set (null, 'bat');
  assert (false);
} catch (e) {
  assert (e instanceof TypeError);
}

var y = [];
Object.defineProperty (y, 0, {value: 42, configurable: false});
assert (Reflect.set (y, 'length', 0) === false);
assert (Reflect.set (y, 'length', 2) === true);
