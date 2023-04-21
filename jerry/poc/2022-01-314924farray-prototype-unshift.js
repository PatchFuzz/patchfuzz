













var array = []

print(array.length === 0);

array.unshift("foo");
print(array.length === 1);
print(array[0] === "foo");

array.unshift(new Array())
print(array.length === 2);
print(array[0] instanceof Array);
print(array[1] === "foo")

array.unshift(Infinity);
print(array.length === 3);
print(array[0] === Infinity);
print(array[1] instanceof Array);
print(array[2] === "foo")

array.unshift("bar", 0);
print(array.length === 5);
print(array[0] === "bar");
print(array[1] === 0);
print(array[2] === Infinity);
print(array[3] instanceof Array);
print(array[4] === "foo")



var obj = { unshift : Array.prototype.unshift };

print(obj.length === undefined);
obj.unshift(1,2,3);
print(obj.length === 3);


var obj = { unshift : Array.prototype.unshift };
Object.defineProperty(obj, 'length', { 'get' : function () {throw new ReferenceError ("foo"); } });

try {
  obj.unshift(1);
  print(false)
} catch (e) {
  print(e.message === "foo");
  print(e instanceof ReferenceError);
}


var obj = { unshift : Array.prototype.unshift };
Object.defineProperty(obj, 'length', { 'set' : function () {throw new ReferenceError ("foo"); } });

try {
  obj.unshift(2);
  print(false)
} catch (e) {
  print(e.message === "foo");
  print(e instanceof ReferenceError);
}


var obj = { unshift : Array.prototype.unshift, length : 1 };
Object.defineProperty(obj, '0', { 'get' : function () {throw new ReferenceError ("foo"); } });

try {
  obj.unshift(3);
  print(false);
} catch (e) {
  print(e.message === "foo");
  print(e instanceof ReferenceError);
}

var obj = { unshift : Array.prototype.unshift, length : 1 };
Object.defineProperty(obj, '0', { 'set' : function () {throw new ReferenceError ("foo"); } });

try {
  obj.unshift(4);
  print(false);
} catch (e) {
  print(e.message === "foo");
  print(e instanceof ReferenceError);
}


var obj = { '0' : "foo", '2' : "bar", length : 3, unshift : Array.prototype.unshift };
print(obj.unshift("baz") === 4);
print(obj[0] === "baz");
print(obj[1] === "foo");
print(obj[2] === undefined);
print(obj[3] === "bar");


try {
  var arr = [0, 1];
  Object.freeze(arr);
  Array.prototype.unshift.call(arr, 2, 3);
  print(false);
} catch (e) {
  print(e instanceof TypeError);
}


try {
  var arr = { length : 9 };
  Object.defineProperty(arr, '6', { value : 2 });
  Array.prototype.unshift.call(arr, 2, 3);
  print(false);
} catch (e) {
  print(e instanceof TypeError);
}

var arrayLike = {get 5() { throw "shouldn't throw"; }};
arrayLike.length = 10;
Array.prototype.unshift.call(arrayLike);
