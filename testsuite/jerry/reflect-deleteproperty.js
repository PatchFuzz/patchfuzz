

















var object = {
  property: 'Batcat'
};

Reflect.deleteProperty (object, 'property');

assert (object.property === undefined);

assert (2 === Reflect.deleteProperty.length);

try {
  Reflect.deleteProperty ();
  assert (false);
} catch (e) {
  assert (e instanceof TypeError);
}

try {
  Reflect.deleteProperty (42, 'bat');
  assert (false);
} catch (e) {
  assert (e instanceof TypeError);
}

try {
  Reflect.deleteProperty (null, 'bat');
  assert (false);
} catch (e) {
  assert (e instanceof TypeError);
}

var target = {bat: 42};
var a = { [Symbol.toPrimitive]: function() { return 'bat' } };
var b = { [Symbol.toPrimitive]: function() { throw 'cat' } };

assert (Reflect.deleteProperty (target, a));

try {
  Reflect.deleteProperty (target, b);
  assert (false);
} catch (e) {
  assert (e === 'cat');
}
