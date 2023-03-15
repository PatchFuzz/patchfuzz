













var array = ["Peach", "Apple", "Orange", "Grape", "Cherry", "Apricot", "Grapefruit"];
array.sort();

print(array[0] === "Apple");
print(array[1] === "Apricot");
print(array[2] === "Cherry");
print(array[3] === "Grape");
print(array[4] === "Grapefruit");
print(array[5] === "Orange");
print(array[6] === "Peach");

var array = [6, 4, 5, 1, 2, 9, 7, 3, 0, 8];


array.sort();
for (i = 0; i < array.length; i++) {
  print(array[i] === i);
}


function f(arg1, arg2) {
  if (arg1 < arg2) {
    return 1;
  } else if (arg1 > arg2) {
    return -1;
  } else {
    return 0;
  }
}

array.sort(f);
for (i = 0; i < array.length; i++) {
  print(array[array.length - i - 1] === i);
}


var array = [1,,2,,3,,4,undefined,5];
var expected = [1,2,3,4,5,undefined,,,,];

array.sort();

print(array.length === expected.length);
for (i = 0; i < array.length; i++) {
  print(expected.hasOwnProperty (i) === array.hasOwnProperty (i));
  print(array[i] === expected[i]);
}


var obj = {};
var arr = [];
try {
  arr.sort(obj);
  print(false);
} catch (e) {
  print(e instanceof TypeError);
}


var obj = { sort : Array.prototype.sort}
Object.defineProperty(obj, 'length', { 'get' : function () { throw new ReferenceError ("foo"); } });

try {
  obj.sort();
  print(false);
} catch (e) {
  print(e.message === "foo");
  print(e instanceof ReferenceError);
}


var obj = { sort : Array.prototype.sort, length : 1}
Object.defineProperty(obj, '0', { 'get' : function () { throw new ReferenceError ("foo"); } });

try {
  obj.sort();
  print(false);
} catch (e) {
  print(e.message === "foo");
  print(e instanceof ReferenceError);
}


var obj = { sort : Array.prototype.sort, length : 2};
Object.defineProperty(obj, '0', { 'get' : function () { throw new ReferenceError ("foo"); } });
Object.defineProperty(obj, '1', { 'get' : function () { throw new ReferenceError ("bar"); } });

try {
  obj.sort();
  print(false);
} catch (e) {
  print(e.message === "foo");
  print(e instanceof ReferenceError);
}


var arr = [1, 0];

try {
  arr.sort(function () { Object.freeze(arr) });
  print(false);
} catch (e) {
  print(e instanceof TypeError);
}


var obj = {sort : Array.prototype.sort, '0' : 2, '1' : 1, length : 4};
Object.defineProperty(obj, '3', function () {});

try {
  obj.sort();
  print(false);
} catch (e) {
  print(e instanceof TypeError);
}


var arr = [1, 2, ];
Object.defineProperty(arr, '2', { 'get' : function () { throw new ReferenceError ("foo"); } });

try {
  arr.sort();
  print(false);
} catch (e) {
  print(e.message === 'foo');
  print(e instanceof ReferenceError);
}


f = function () { throw new ReferenceError('foo'); };
obj = { 'toString' : f };
arr = [obj, 1];

try {
  arr.sort();
  print(false);
} catch (e) {
  print(e.message === 'foo');
  print(e instanceof ReferenceError);
}


f = function () { throw new ReferenceError('foo'); };
obj = { 'toString' : f };
arr = [1, obj];

try {
  arr.sort();
  print(false);
} catch (e) {
  print(e.message === 'foo');
  print(e instanceof ReferenceError);
}


arr = ['foo', 'foo'];
arr.sort();

print(arr[0] === 'foo');
print(arr[1] === 'foo');


obj = { };
Object.defineProperty(obj, 'toString', function () { });
f = function () { return obj };
arr = [1, 2];

try {
  arr.sort(f);
  print(false);
} catch (e) {
  print(e instanceof TypeError);
}

var proxy = new Proxy({length: 5}, {
  getOwnPropertyDescriptor() { throw 42.5; }
})

try {
  Array.prototype.sort.call(proxy);
  print(false);
} catch (e) {
  print(e === 42.5);
}
