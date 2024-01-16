













var array = [4, 3, 2, 1, 0]

array.reverse();

for (i = 0; i < array.length; i++) {
  assert(array[i] === i);
}


var obj = { reverse : Array.prototype.reverse };
Object.defineProperty(obj, 'length', { 'get' : function () {throw new ReferenceError ("foo"); } });

try {
  obj.reverse();
  assert(false);
} catch (e) {
  assert(e.message === "foo");
  assert(e instanceof ReferenceError);
}


var obj = { reverse : Array.prototype.reverse, length : 3 };
Object.defineProperty(obj, '0', { 'get' : function () {throw new ReferenceError ("foo"); } });

try {
  obj.reverse();
  assert(false);
} catch (e) {
  assert(e.message === "foo");
  assert(e instanceof ReferenceError);
}


var obj = { reverse : Array.prototype.reverse, length : 4 };
Object.defineProperty(obj, '3', { 'get' : function () {throw new ReferenceError ("foo"); } });

try {
  obj.reverse();
  assert(false);
} catch (e) {
  assert(e.message === "foo");
  assert(e instanceof ReferenceError);
}


try {
  var arr = [,,, 3, 4, 5, 6,,,,,,,,,0, 1, 2, 3, 4, 5, 6];
  Object.defineProperty(arr, '0', {});
  Object.defineProperty(arr, '1', {});
  Object.defineProperty(arr, '2', {});
  Array.prototype.reverse.call(arr);
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}


try {
  var arr = [0, 1, 2, 3, 4, 5, 6,,,,,,,,,0, 1, 2, 3,,,];
  Object.defineProperty(arr, '19', {});
  Object.defineProperty(arr, '20', {});
  Object.defineProperty(arr, '21', {});
  Array.prototype.reverse.call(arr);
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}


try {
  var arr = [,,,,,,,,,,,,,,,,0, 1, 2, 3, 4, 5, 6];
  arr = Object.freeze(arr);
  Array.prototype.reverse.call(arr);
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}


var obj = { reverse : Array.prototype.reverse, length : 4 };
Object.defineProperty(obj, '2', { value : 0 });
Object.defineProperty(obj, '3', { value : 0 });
try {
  obj.reverse();
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}


var obj = { reverse : Array.prototype.reverse, length : 4 };
Object.defineProperty(obj, '0', { value : 0 });
Object.defineProperty(obj, '1', { value : 0 });
try {
  obj.reverse();
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}
