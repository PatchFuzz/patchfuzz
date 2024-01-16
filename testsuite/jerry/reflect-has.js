

















assert (Reflect.has ({x: 0}, 'x') === true);
assert (Reflect.has ({x: 0}, 'y') === false);

assert (Reflect.has ({x: 0}, 'toString') === true);

var object = {
  prop: 'Apple'
};

assert (Reflect.has (object, 'prop') === true);

assert (2 === Reflect.has.length);

try {
  Reflect.has ();
  assert (false);
} catch (e) {
  assert (e instanceof TypeError);
}

try {
  Reflect.has (42, 'batcat');
  assert (false);
} catch (e) {
  assert (e instanceof TypeError);
}

try {
  Reflect.has (null, 'bat');
  assert (false);
} catch (e) {
  assert (e instanceof TypeError);
}

var target = {bat: 42};
var a = { [Symbol.toPrimitive]: function () { return 'bat' } };
var b = { [Symbol.toPrimitive]: function () { throw 'cat' } };

assert (Reflect.has (target, a) === true);

try {
  Reflect.has (target, b);
  assert (false);
} catch (e) {
  assert (e === 'cat');
}
