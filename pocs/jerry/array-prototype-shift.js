var array = ["foo", [], Infinity, 4]

assert(array.length === 4);

assert(array.shift() === "foo");
assert(array.length === 3);

var a = array.shift();
assert(a instanceof Array);
assert(array.length === 2);

assert(array.shift() === Infinity);
assert(array.length === 1);

assert(array.shift() === 4);
assert(array.length === 0);

assert(array.shift() === undefined);
assert(array.length === 0);

var referenceErrorThrower = function () {
  throw new ReferenceError ("foo");
}


var obj = { shift : Array.prototype.shift };
Object.defineProperty(obj, 'length', { 'get' : referenceErrorThrower });

try {
  obj.shift();
  assert(false);
} catch (e) {
  assert(e.message === "foo");
  assert(e instanceof ReferenceError);
}


var obj = { shift : Array.prototype.shift };
Object.defineProperty(obj, 'length', { 'set' : referenceErrorThrower });

try {
  obj.shift();
  assert(false);
} catch (e) {
  assert(e.message === "foo");
  assert(e instanceof ReferenceError);
}


var obj = { shift : Array.prototype.shift };
assert (obj.length === undefined)
assert (obj.shift() === undefined)
assert (obj.length === 0)


var obj = { shift : Array.prototype.shift, length : 1 };
Object.defineProperty(obj, '0', { 'get' : referenceErrorThrower });

try {
  obj.shift();
  assert(false);
} catch (e) {
  assert(e.message === "foo");
  assert(e instanceof ReferenceError);
}


try {
  f = function () { throw new ReferenceError("getter"); };
  arr =  { length : 9 };
  Object.defineProperty(arr, '8', { 'get' : f });
  Array.prototype.shift.call(arr);
  assert(false);
} catch (e) {
  assert(e instanceof ReferenceError);
  assert(e.message == "getter");
}


try {
  arr =  { length : 9 };
  Object.defineProperty(arr, '8', { value : 8 });
  Object.defineProperty(arr, '7', { value : 7 });
  Array.prototype.shift.call(arr);
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}


try {
  arr = { length : 9 };
  Object.defineProperty(arr, '0', { value : null });
  Array.prototype.shift.call(arr);
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}


try {
  arr = { length : 9 };
  Object.defineProperty(arr, '8', { writable : false });
  Array.prototype.shift.call(arr);
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}


try {
  arr = { length : 9 };
  Object.freeze(arr);
  Array.prototype.shift.call(arr);
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}
