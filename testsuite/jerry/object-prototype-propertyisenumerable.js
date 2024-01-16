













var obj = {};


try {
  obj.propertyIsEnumerable({ toString: function() { throw new ReferenceError ("foo"); } });

  assert (false);
} catch (e) {
  assert (e.message === "foo");
  assert (e instanceof ReferenceError);
}


var obj1;
try {
  obj1.propertyIsEnumerable("fail");

  assert (false);
} catch (e) {
  assert (e instanceof TypeError);
}

var array = [];
obj.prop = "bar";
array[0] = "bar";

assert (obj.propertyIsEnumerable('prop') === true);
assert (array.propertyIsEnumerable(0) === true);

assert (obj.propertyIsEnumerable('length') === false);
assert (array.propertyIsEnumerable('length') === false);
assert (Math.propertyIsEnumerable('random') === false);


Object.defineProperty(obj, 'prop1', { value: 'foo', enumerable: true });
Object.defineProperty(obj, 'prop2', { value: 'foo', enumerable: false });
Object.defineProperty(obj, 'prop3', { value: 'foo' });
assert (obj.propertyIsEnumerable('prop1') === true);
assert (obj.propertyIsEnumerable('prop2') === false);
assert (obj.propertyIsEnumerable('prop3') === false);

Object.defineProperty(array, 'prop1', { value: 'foo', enumerable: true });
Object.defineProperty(array, 'prop2', { value: 'foo', enumerable: false });
Object.defineProperty(array, 'prop3', { value: 'foo' });
assert (array.propertyIsEnumerable('prop1') === true);
assert (array.propertyIsEnumerable('prop2') === false);
assert (array.propertyIsEnumerable('prop3') === false);


Object.defineProperty(obj, 'prop', { value: 'foo', enumerable: false });
assert (obj.propertyIsEnumerable('prop') === false);
Object.defineProperty(obj, 'prop', { value: 'foo', enumerable: true });
assert (obj.propertyIsEnumerable('prop') === true);

Object.defineProperty(array, 0, { value: 'foo', enumerable: false });
assert (array.propertyIsEnumerable(0) === false);
Object.defineProperty(array, 0, { value: 'foo', enumerable: true });
assert (array.propertyIsEnumerable(0) === true);


function construct1()
{
  this.prop1 = 'foo';
}

function construct2()
{
  this.prop2 = 'foo';
}

construct2.prototype = new construct1;
construct2.prototype.constructor = construct2;

var obj2 = new construct2();
obj2.prop3 = 'foo';

assert (obj2.propertyIsEnumerable('prop3') === true);
assert (obj2.propertyIsEnumerable('prop2') === true);
assert (obj2.propertyIsEnumerable('prop1') === false);

obj2.prop1 = 'foo';

assert (obj2.propertyIsEnumerable('prop1') === true);
