













var array = ["foo", [], Infinity, 4]

print(array.length === 4);

print(array.shift() === "foo");
print(array.length === 3);

var a = array.shift();
print(a instanceof Array);
print(array.length === 2);

print(array.shift() === Infinity);
print(array.length === 1);

print(array.shift() === 4);
print(array.length === 0);

print(array.shift() === undefined);
print(array.length === 0);

var referenceErrorThrower = function () {
  throw new ReferenceError ("foo");
}


var obj = { shift : Array.prototype.shift };
Object.defineProperty(obj, 'length', { 'get' : referenceErrorThrower });

try {
  obj.shift();
  print(false);
} catch (e) {
  print(e.message === "foo");
  print(e instanceof ReferenceError);
}


var obj = { shift : Array.prototype.shift };
Object.defineProperty(obj, 'length', { 'set' : referenceErrorThrower });

try {
  obj.shift();
  print(false);
} catch (e) {
  print(e.message === "foo");
  print(e instanceof ReferenceError);
}


var obj = { shift : Array.prototype.shift };
print(obj.length === undefined)
print(obj.shift() === undefined)
print(obj.length === 0)


var obj = { shift : Array.prototype.shift, length : 1 };
Object.defineProperty(obj, '0', { 'get' : referenceErrorThrower });

try {
  obj.shift();
  print(false);
} catch (e) {
  print(e.message === "foo");
  print(e instanceof ReferenceError);
}


try {
  f = function () { throw new ReferenceError("getter"); };
  arr =  { length : 9 };
  Object.defineProperty(arr, '8', { 'get' : f });
  Array.prototype.shift.call(arr);
  print(false);
} catch (e) {
  print(e instanceof ReferenceError);
  print(e.message == "getter");
}


try {
  arr =  { length : 9 };
  Object.defineProperty(arr, '8', { value : 8 });
  Object.defineProperty(arr, '7', { value : 7 });
  Array.prototype.shift.call(arr);
  print(false);
} catch (e) {
  print(e instanceof TypeError);
}


try {
  arr = { length : 9 };
  Object.defineProperty(arr, '0', { value : null });
  Array.prototype.shift.call(arr);
  print(false);
} catch (e) {
  print(e instanceof TypeError);
}


try {
  arr = { length : 9 };
  Object.defineProperty(arr, '8', { writable : false });
  Array.prototype.shift.call(arr);
  print(false);
} catch (e) {
  print(e instanceof TypeError);
}


try {
  arr = { length : 9 };
  Object.freeze(arr);
  Array.prototype.shift.call(arr);
  print(false);
} catch (e) {
  print(e instanceof TypeError);
}
