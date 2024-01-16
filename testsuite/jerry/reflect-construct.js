













try {
  Reflect.construct ();
  assert (false);
} catch (e) {
  assert (e instanceof TypeError);
}

try {
  Reflect.construct (Date);
  assert (false);
} catch (e) {
  assert (e instanceof TypeError);
}

var d = Reflect.construct (Date, [1776, 6, 4]);
assert (d instanceof Date);
assert (d.getFullYear () === 1776);

function func1 (a, b, c) {
  this.sum = a + b + c;
}

var args = [1, 2, 3];
var object1 = new func1 (...args);
var object2 = Reflect.construct (func1, args);

assert (object2.sum === 6);
assert (object1.sum === 6);

function CatClass () {
  this.name = 'Cat';
}

function DogClass () {
  this.name = 'Dog';
}

var obj1 = Reflect.construct (CatClass, args, DogClass);
assert (obj1.name === 'Cat');
assert (!(obj1 instanceof CatClass));
assert (obj1 instanceof DogClass);

try {
  Reflect.construct (func1, 5, 5);
  assert (false);
} catch (e) {
  assert (e instanceof TypeError);
}

try {
  Reflect.construct (5, 5);
  assert (false);
} catch (e) {
  assert (e instanceof TypeError);
}

function func2 () {
  throw 5;
}

try {
  Reflect.construct (func2, {});
  assert (false);
} catch (e) {
  assert (e === 5);
}
